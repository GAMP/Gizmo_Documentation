# Guide: Writing Gizmo Documentation in Gramax

Repository: `github.com/GAMP/Gizmo_Documentation`
Published site: `docs.gizmopowered.net`

## 0. The main point: you don't need to know Markdown to write in Gramax

Everything described below in sections 3–5 (folder structure, frontmatter, link syntax, image insertion, callouts, tabs) is what happens "under the hood." **Gramax is a WYSIWYG editor** (visual, like Word or Notion), and during normal work in the Gramax app you don't need to:

- write `.md` markup by hand;
- think about where to physically place an article file or image — Gramax creates the file in the right place automatically when you create a new page in the tree;
- fill in frontmatter (`title`, `order`) by hand — you just type the title into the "Page name" field, and order is set by dragging the page in the tree with your mouse;
- remember the syntax for callouts/tabs/links — the editor has buttons/menus like "Insert note," "Insert tabs," image insertion via drag-and-drop, and inserting a link to another page via search by title (rather than typing a path manually).

In other words, sections 3–5 of this guide are mainly useful:
- to understand **what you're looking at** if you open a `.md` file directly on GitHub (e.g., in a Pull Request, during a documentation code review);
- in case someone needs to edit a file outside of Gramax (in a plain text editor) or resolve a merge conflict;
- for a general understanding of how it all works "under the hood."

Section 6 (step-by-step process) and section 2 (setup) are what you actually need to know for day-to-day work in Gramax.

## 1. How it all works

```
[Author] → writes in Gramax → commits to a branch (dev / feature branch)
                                    ↓
                        Pull Request to main
                                    ↓
                The responsible team member merges it
                                    ↓
      GitHub Actions (.github/workflows/deploy.yml) runs automatically
                                    ↓
      gramax-cli build ./docs → build → GitHub Pages → docs.gizmopowered.net
```

**Important:** the site is rebuilt **only** on push/merge to `main`. As long as changes live in `dev` or another branch, they won't appear on the site. Publishing takes a few minutes after the merge (you can check the **Actions** tab of the repository).

## 2. Quick start: Setup, connecting and usage

1. Download and install the **Gramax** app: https://gram.ax
2. Open the Gramax app and select **"Load existing"**
<img width="493" height="582" alt="image" src="https://github.com/user-attachments/assets/6450d3c1-ec95-467e-b844-e3a525b9988e" />

3. Select the type of storage - **Github**
4. Push the button **"Log in to GitHub"**
5. Authorise to ypur Github account in a browser   **Connect catalog** → enter the repository URL `https://github.com/GAMP/Gizmo_Documentation`, authenticate via GitHub.
6. Switch to the Grammax app and push the **"Add"** button
<img width="618" height="448" alt="image" src="https://github.com/user-attachments/assets/58a61157-8e41-4ea6-b3f4-ecf8065c4e5a" />

7. Select the **"GAMP"** account
8. Select the **"GAMP/Gizmo_Documentation"** repository
9. Push the **"Load"** button
<img width="616" height="408" alt="image" src="https://github.com/user-attachments/assets/9b37ab45-a83c-47ea-9cf1-c743f9f42ff2" />

10. Now you can open the Gizmo docs. Just click on it
<img width="483" height="273" alt="image" src="https://github.com/user-attachments/assets/40f0a2e9-ceff-480a-a6d9-37890c700a7c" />

11. Select the working branch (**dev**, or create your own feature branch off of dev (left corner) — **never edit `main` directly**.
<img width="988" height="656" alt="image" src="https://github.com/user-attachments/assets/c59dc11b-d85d-4cb6-a3f2-a9294641c7cd" />
<img width="991" height="657" alt="image" src="https://github.com/user-attachments/assets/005a42fc-625e-43fb-ad28-adb6b0bc1924" />


12. Now, you can write some docs.
13. To save your progress - Just push the **"Publish"** button to push the changes
<img width="987" height="661" alt="image" src="https://github.com/user-attachments/assets/2fcb90e9-8eb6-41d8-ba98-698e14ea893f" />

14. To load other people progress - Just push the **"Publish"** button to push the changes
<img width="984" height="663" alt="image" src="https://github.com/user-attachments/assets/dc779e35-b2e1-44f3-8329-9a339c4fb2aa" />

15. The documentation root is the `docs/` folder — all pages live inside it.


## 3. Repository structure

```
docs/
├── gramax.config.yaml       # general build settings (logo, etc.) — don't touch without approval
├── .doc-root.yaml           # catalog metadata (languages, style) — don't touch without approval
├── assets/                  # shared static files (favicon, css)
├── ru/                      # the entire Russian-language documentation section (primary, add content here)
│   ├── _index.md
│   ├── about/
│   ├── configure/
│   ├── instalation/
│   ├── tutorials/
│   ├── usage/
│   ├── articles/
│   └── ...
└── (docs/ is root)  # English/default version — currently mostly empty
```

Each section is a folder containing an `_index.md` file (describes the section itself) plus nested `.md` files (articles) or subfolders (subsections).

**Naming rule for folders and files:** Latin transliteration, lowercase, words separated by hyphens (e.g. `mesto-kassira`, `finansovye-nastroyki`). The file name becomes part of the page URL, so choose it thoughtfully and avoid changing it later without good reason (it breaks links).

## 4. Anatomy of an article

Every `.md` file starts with **frontmatter** — a metadata block between `---`:

```markdown
---
order: 1
title: Register Card
---

Article text...
```

- **title** — the heading shown to the user in the menu and on the page. Required.
- **order** — a number that determines the article's position in the menu relative to its "siblings" in the same folder (lower = higher up). Decimal values (`1.5`, `0.8`) are handy for inserting an article between existing ones without renumbering everything else.

### The `_index.md` file

This is the "section page" — opened when you click a folder in the menu. Two main content patterns:

**Option A — a simple list of child articles (Gramax generates it automatically):**
```markdown
---
order: 3
title: Installation
---

<view defs="hierarchy=none" display="List"/>
```

**Option B — a manually curated list with description and custom links:**
```markdown
---
order: 4
title: Settings
---

Section intro text...

-  [General Information](./obschie-svedeniya.md)
-  [Subscription](./podpiska.md)
-  [Branches](./filialy/_index.md)
```

Use option B when you want an intro paragraph or manual control over the order/labels of the links.

## 5. Markdown syntax supported in Gramax

The foundation is standard **GitHub Flavored Markdown**: `#` headings, `**bold**`, `*italic*`, lists, tables, ```` ``` ```` code blocks.

Plus a few Gramax-specific elements:

### Linking to another article (must be a relative path)
```markdown
[System Requirements](./../../../../about/overview/gizmo-server.md)
```
The path is written relative to the current file (like a regular file system path). Always include the `.md` extension.
Never insert absolute links to `docs.gizmopowered.net/...` inside the documentation — use relative paths to `.md` files instead, or the link won't work inside Gramax itself while editing.

### Images
The image file is placed **next to the article, in the same folder**:
```
docs/ru/about/overview/
├── gizmo-server.md
└── gizmo-server.png
```
Inserting it into text:
```markdown
![](./gizmo-server.png "Image caption"){width=7048px height=3208px}
```
The easiest way is to drag-and-drop the image directly into the Gramax editor — it creates the file next to the article and writes the markup for you.

### Callouts (Note / Tip / Warning / Caution)
```markdown
> [!NOTE]
> 
> Note text.

> [!TIP]
> 
> Helpful tip.

> [!WARNING]
> 
> Warning.

> [!CAUTION]
> 
> Critically important information.
```

### Tabs
```markdown
<tabs>

<tab name="Windows">
Windows tab content
</tab>

<tab name="Linux">
Linux tab content
</tab>

</tabs>
```
Useful for system requirements or instructions that differ by OS or environment.

### Auto-generated list of section articles
```markdown
<view defs="hierarchy=none" display="List"/>
```
Placed inside `_index.md` to automatically display a list of child pages without listing them manually.

## 6. Step-by-step process for a new article

1. In Gramax, switch to the `dev` branch (or create a new branch off it for a specific task).
2. Find the relevant section in the tree (or create a new folder if the section doesn't exist yet).
3. Create a new article file through the Gramax interface (it will automatically create the `.md` file with a frontmatter template).
4. Fill in `title` and choose an `order` (check the order of neighboring articles in the same folder).
5. Write the content, and if needed, add a link to the new article in the parent `_index.md` (if the section follows option B from section 4).
6. Save and commit with a clear commit message (e.g., `docs: added article on fiscalization setup`).
7. Push the branch and open a **Pull Request** to `main`.
8. Wait for review and merge from the responsible team member.
9. After the merge, check the **Actions** tab on GitHub — the build should complete successfully (green). After a few minutes, check the page on `docs.gizmopowered.net`.

## 7. Checklist before submitting a PR

- [ ] The article's frontmatter has `title` filled in
- [ ] `order` doesn't conflict and fits logically among neighboring articles
- [ ] All links to other articles are relative, end with `.md`, and actually point to an existing file
- [ ] Images are placed next to the article, not in a shared folder
- [ ] File/folder names are lowercase Latin transliteration, hyphen-separated
- [ ] If a new section was created, it has an `_index.md`
- [ ] Changes were made in `dev`/a feature branch, **not directly in `main`**
