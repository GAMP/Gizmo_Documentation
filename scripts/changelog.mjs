#!/usr/bin/env node
/**
 * Generates change log pages in docs/change-log/ from YouTrack.
 *
 * Rules:
 *  - project "Gizmo Suite", issues in State "Verified Fixed";
 *  - version comes from the "Released" field; only versions marked as released
 *    in YouTrack and >= MIN_VERSION are considered;
 *  - one page per version; versions that already have a page are skipped;
 *  - inside a page issues are grouped by "Type"; text is the "Release note"
 *    field, or the issue id when the note is empty.
 *
 * Env:
 *  YOUTRACK_TOKEN  permanent token (required)
 *  YOUTRACK_URL    base URL
 *
 * Usage: node scripts/changelog.mjs [--dry-run]
 */

import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

export const CONFIG = {
  baseUrl: (process.env.YOUTRACK_URL || "").replace(/\/+$/, ""),
  project: "Gizmo Suite",
  state: "Verified Fixed",
  versionField: "Released",
  typeField: "Type",
  noteField: "Release note",
  minVersion: "3.0.94",
  // Order of Type groups on a page. Types not listed here go after, alphabetically.
  typeOrder: [],
  outDir: path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "docs", "change-log"),
  pageSize: 100,
};

// ---------- version helpers ----------

export function parseVersion(s) {
  const m = /^(\d+)\.(\d+)\.(\d+)$/.exec(String(s).trim());
  return m ? m.slice(1).map(Number) : null;
}

export function compareVersions(a, b) {
  const va = parseVersion(a), vb = parseVersion(b);
  for (let i = 0; i < 3; i++) if (va[i] !== vb[i]) return va[i] - vb[i];
  return 0;
}

/** Gramax sorts pages by `order` ascending; newer versions must come first. */
export function versionOrder(v) {
  const [major, minor, patch] = parseVersion(v);
  return 100_000_000 - (major * 1_000_000 + minor * 10_000 + patch);
}

export function versionFileName(v) {
  return `${v.replace(/\./g, "-")}.md`;
}

// ---------- YouTrack ----------

async function ytFetch(pathname, params, token) {
  const url = new URL(CONFIG.baseUrl + pathname);
  for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v);
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
  });
  if (!res.ok) {
    throw new Error(`YouTrack ${res.status} ${res.statusText} for ${pathname}`);
  }
  return res.json();
}

export async function fetchIssues(token) {
  const query = `project: {${CONFIG.project}} State: {${CONFIG.state}}`;
  const fields = "idReadable,summary,customFields(name,value(name,text,releaseDate,released,archived))";
  const all = [];
  for (let skip = 0; ; skip += CONFIG.pageSize) {
    const page = await ytFetch("/api/issues", { query, fields, $top: CONFIG.pageSize, $skip: skip }, token);
    all.push(...page);
    if (page.length < CONFIG.pageSize) break;
  }
  return all;
}

function field(issue, name) {
  return issue.customFields?.find((f) => f.name === name)?.value ?? null;
}

/**
 * Turns raw issues into { [version]: { releaseDate, items: [{ id, type, text }] } }.
 * Only released versions >= minVersion are kept.
 */
export function collectVersions(issues) {
  const versions = {};
  for (const issue of issues) {
    const rel = field(issue, CONFIG.versionField);
    const releasedValues = (Array.isArray(rel) ? rel : rel ? [rel] : []).filter(
      (v) => v?.released && parseVersion(v.name) && compareVersions(v.name, CONFIG.minVersion) >= 0,
    );
    if (releasedValues.length === 0) continue;

    const typeValue = field(issue, CONFIG.typeField);
    const type = (Array.isArray(typeValue) ? typeValue[0]?.name : typeValue?.name) || "Other";
    const note = (field(issue, CONFIG.noteField)?.text ?? "").trim();
    const item = { id: issue.idReadable, type, text: note || issue.idReadable };

    for (const v of releasedValues) {
      const entry = (versions[v.name] ??= { releaseDate: v.releaseDate ?? null, items: [] });
      entry.releaseDate ??= v.releaseDate ?? null;
      entry.items.push(item);
    }
  }
  return versions;
}

// ---------- rendering ----------

function formatDate(ms) {
  return new Date(ms).toISOString().slice(0, 10);
}

function sortTypes(types) {
  const rank = (t) => {
    const i = CONFIG.typeOrder.indexOf(t);
    return i === -1 ? CONFIG.typeOrder.length : i;
  };
  return [...types].sort((a, b) => rank(a) - rank(b) || a.localeCompare(b));
}

/** Multi-line notes must stay inside the list item: continuation lines are indented. */
function listItem(text) {
  const lines = text.split(/\r?\n/);
  return ["- " + lines[0], ...lines.slice(1).map((l) => (l.trim() ? "  " + l : ""))].join("\n");
}

export function renderPage(version, { releaseDate, items }) {
  const byType = new Map();
  for (const it of items) (byType.get(it.type) ?? byType.set(it.type, []).get(it.type)).push(it);

  const out = ["---", `title: ${version}`, `order: ${versionOrder(version)}`, "---", ""];
  if (releaseDate) out.push(`Release date: ${formatDate(releaseDate)}`, "");
  for (const type of sortTypes(byType.keys())) {
    out.push(`## ${type}`, "");
    for (const it of byType.get(type).sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }))) {
      out.push(listItem(it.text));
    }
    out.push("");
  }
  return out.join("\n");
}

// ---------- existing pages ----------

export async function existingVersions(dir) {
  const found = new Set();
  for (const name of await readdir(dir)) {
    if (!name.endsWith(".md") || name === "_index.md") continue;
    const fromName = name.slice(0, -3).replace(/-/g, ".");
    if (parseVersion(fromName)) found.add(fromName);
    const title = /^title:\s*["']?([\d.]+)["']?\s*$/m.exec(await readFile(path.join(dir, name), "utf8"))?.[1];
    if (title && parseVersion(title)) found.add(title);
  }
  return found;
}

// ---------- main ----------

export async function main({ dryRun = false } = {}) {
  const token = process.env.YOUTRACK_TOKEN;
  if (!token) throw new Error("YOUTRACK_TOKEN is not set");
  if (!CONFIG.baseUrl) throw new Error("YOUTRACK_URL is not set");

  const issues = await fetchIssues(token);
  const versions = collectVersions(issues);
  const existing = await existingVersions(CONFIG.outDir);
  const missing = Object.keys(versions).filter((v) => !existing.has(v)).sort(compareVersions);

  console.log(`issues fetched: ${issues.length}, released versions: ${Object.keys(versions).length}, existing pages: ${existing.size}, new: ${missing.length}`);

  for (const v of missing) {
    const file = path.join(CONFIG.outDir, versionFileName(v));
    const body = renderPage(v, versions[v]);
    if (dryRun) {
      console.log(`--- would write ${path.relative(process.cwd(), file)} (${versions[v].items.length} items)`);
    } else {
      await writeFile(file, body, "utf8");
      console.log(`wrote ${path.relative(process.cwd(), file)} (${versions[v].items.length} items)`);
    }
  }
  return missing;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main({ dryRun: process.argv.includes("--dry-run") }).catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
}
