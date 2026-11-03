---
title: Multiple clubs on one server
order: 2
---

<html>

<style>
  html, body { margin: 0; padding: 0; background: #1a1e33; font-family: 'Segoe UI', system-ui, -apple-system, Roboto, Arial, sans-serif; }
  @media (prefers-color-scheme: light) { html, body { background: #ffffff; } }
  * { box-sizing: border-box; }
  .gx-card { position: relative; width: 100%; border-radius: 18px; overflow: hidden; background: #232a4a; background-image: linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%); border: none; box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.04) inset; padding: 26px 32px 28px; font-family: 'Segoe UI', system-ui, -apple-system, Roboto, Arial, sans-serif; }
  .gx-card .gx-glow { position: absolute; inset: -30px -44px auto -60px; height: 200px; background: radial-gradient(45% 100% at 8% 0%, rgba(82, 110, 211, 0.28) 0%, rgba(82, 110, 211, 0) 72%); filter: blur(2px); pointer-events: none; }
  .gx-card .gx-card-content { position: relative; }
  .gx-card .gx-kicker { display: flex; align-items: center; gap: 8px; margin: 0 0 14px 0; color: #7c93e8; font-size: 12px; line-height: 1.3; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; }
  .gx-card .gx-kicker svg { flex: none; width: 15px; height: 15px; }
  .gx-card .gx-title { max-width: 560px; margin: 0 0 18px 0; color: #ffffff; font-size: clamp(22px, 3vw, 27px); line-height: 1.34; font-weight: 700; letter-spacing: -0.015em; }
  .gx-card .gx-meta { display: flex; align-items: center; color: rgba(255, 255, 255, 0.5); font-size: 11.5px; line-height: 1; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; }
  .gx-card .gx-meta-sep { margin: 0 12px; opacity: 0.4; }
  .gx-card .gx-meta-level { color: #86efac; }
  .gx-card .gx-meta-level.medium { color: #fde68a; }
  .gx-card .gx-meta-level.high { color: #fca5a5; }
</style>

<div class="gx-card">
  <div class="gx-glow"></div>
  <div class="gx-card-content">
    <p class="gx-kicker">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/></svg>
      In this guide you will learn
    </p>
    <h2 class="gx-title">How to connect a chain of clubs to one Gizmo Server</h2>
    <div class="gx-meta">
      <span>15–20 minutes</span>
      <span class="gx-meta-sep">/</span>
      <span class="gx-meta-level medium">Medium difficulty</span>
    </div>
  </div>
</div>

<script>
(function () {
  var LIGHT_BG = '#ffffff'; var DARK_BG = '#1a1e33';
  function applyBg() {
    var theme = document.documentElement.dataset.theme;
    if (theme !== 'light' && theme !== 'dark') { theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'; }
    var bg = theme === 'light' ? LIGHT_BG : DARK_BG;
    document.documentElement.style.backgroundColor = bg; document.body.style.backgroundColor = bg;
  }
  applyBg();
  new MutationObserver(applyBg).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyBg);
})();
</script>

</html>

If you run a chain of clubs -- say, one location in one part of town and another one elsewhere -- the first thought is usually "so I need a second server". Actually, you don't: you can run all clubs of the chain from one Gizmo Server by adding each one as a separate **branch**. This is easier to maintain, cheaper and more convenient for you as the owner.

One server for the whole chain means one customer database: a regular guest who usually goes to the club near home but happens to be near the second location is still recognized by the system, and their balance and status are visible in both clubs. You also get unified reporting for the whole chain at once -- no need to combine numbers from two different panels by hand, and tariffs, time products and permissions are set up once in one place instead of being repeated in every club. At the same time, each branch can have its own specifics -- its own address, time zone, even its own legal entity and tax settings if needed.

## Step 1. Add the club as a branch

1. In Gizmo Manager, open <cmd text="Settings"/> -> <cmd text="Organization"/> -> <cmd text="Branches"/> and click <cmd text="Create Branch"/>.
2. Fill in the address, name and contacts of the new club.
3. If this club has a different legal entity or different tax settings (for example, another region with a different tax rate), override the tax settings for this branch -- by default they are inherited from the general server settings.

For the full list of branch fields, see [Branch card](./../../configure/organization/branches/branch.md).

## Step 2. Set up what each branch has on its own

After you create the branch, set up the following separately for it:

- **Gaming zones and host groups** -- each club has its own rooms and equipment, so you cannot copy them one to one, and there is no reason to.
- **Tariffs and time products** -- prices often differ between clubs of a chain, even if the design and logic are the same.
- **Registers** -- every point of sale in every club is a separate register with its own Companion.
- **Operator access** -- in the card of every operator who will work in the new club (**Settings -> Operators and permissions -> Operators**), add the new branch to the **Branches** field. The map shows an operator only the gaming stations of their branches.

Client shell settings, permission sets and most other server options stay shared across the whole chain automatically -- you do not need to change them again.

> [!NOTE]
> 
> The client PCs of each club must be connected to the local network of the server where the branches are set up -- see [Network access to Gizmo](./../client-shell/network-access.md). Otherwise, setting up hosts for each club is no different from setting up a single club -- the same host groups, security profiles and apps, just tied to their own branch.

## Result

- All clubs of the chain run from one Gizmo Server, each as a separate branch with its own zones, tariffs, time products and registers.
- The customer database is shared: a guest is recognized in any club of the chain, and their balance and status are visible everywhere.
- Reporting covers the whole chain at once, and shared settings are made once in one place.
