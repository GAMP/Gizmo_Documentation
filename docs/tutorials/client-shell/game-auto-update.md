---
title: How to set up automatic game updates
order: 1.6
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>
      In this guide you will learn
    </p>
    <h2 class="gx-title">How to update games on all client PCs automatically</h2>
    <div class="gx-meta">
      <span>10–15 minutes</span>
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

A patch for a popular game is out -- updating it manually on each of the club's twenty PCs takes a long time, and meanwhile guests cannot join servers with the old version. Gizmo lets you update the game once and roll the update out to client PCs automatically.

This is done with **deployment profiles**. You update the game in a folder on the server, and Gizmo compares it with the folder on the client PC by itself and copies only the changed files, and if needed deletes files on the client that are no longer in the source. Deployment runs before the launch of the game whose executable the profile is attached to.

## Step 1. Prepare the current version of the game on the server

Keep the current version of the game in a separate folder on the PC with Gizmo Server -- this is the folder Gizmo will use as the source for client PCs. When an update comes out, update the game in this folder.

How to organize the source folder and update the game in it:

> [!NOTE]
>
> This section is under development.

## Step 2. Limit disk usage on client PCs

So that an update does not fill up the client PC's disk, set a minimum amount of free space to keep:

1. Open **Settings -> Client -> File System**, **Deployment** block.
2. Set the **Always leave % of free disk space when using deployment profiles** parameter.

If less free space than this value would remain after deployment, the operation is aborted. More in [File System](./../../configure/client/file-system.md).

## Step 3. Create a deployment profile

1. Open **Hosts -> Apps**, then the game's card and its executable.
2. Go to the **Deployments** tab and click **+ Create New Deployment** -- the deployment card opens. If a suitable profile already exists, attach it in the **Select Deployment** field.
3. Fill in the card:
   - **Name** -- the name of the deployment profile;
   - **Source** -- the folder with the current version of the game on the PC with Gizmo Server (step 1);
   - **Destination** -- the game folder on the client PC that the source is compared with and where differing files are copied.
4. Select the **Comparison Mode**. The more thorough the comparison, the lower the chance of an error, but the slower the update:
   - **Fast** -- compares files and folders only by length and attributes;
   - **Standard** -- by last modification time, length and attributes;
   - **Standard without attributes** -- by modification time and length;
   - **Thorough** -- the slowest and most reliable: it also calculates and compares the file hashes.
5. If needed, limit what is deployed with the **Include Files**, **Include Directories**, **Exclude Files** and **Exclude Directories** fields -- wildcards are supported, and items are separated with ";". In the **Registry** field, you can specify a registry script that runs during deployment.
6. Save the deployment card and the executable.

All fields are described in [Deployment card](./../../usage/gizmo-manager/stations/prilozheniya/kartochka-redaktirovaniya-ispolnyaemogo-fayla/razvertyvaniya.md).

> [!TIP]
>
> If a script needs to run before deployment, assign it to the **Pre-Deployment Tasks** event on the **Tasks** tab of the same executable. More in [Executable card](./../../usage/gizmo-manager/stations/prilozheniya/kartochka-redaktirovaniya-ispolnyaemogo-fayla/_index.md).

## Step 4. Turn on launching the game right after the update

On the executable's **Main** tab, in the **Launch Options Organization** block, turn on **Auto Launch**. Then the game launches right after deployment. If this option is off, the guest has to click twice: the first time to run the deployment, the second time to confirm the launch.

## Result

- When a guest launches the game, Gizmo first compares the game folder on the PC with the folder on the server and copies only the changed files.
- You need to update the game only once -- in the source folder on the server; client PCs get the update the next time the game is launched.
- If the client PC's disk does not have enough space, taking the configured reserve into account, the deployment is aborted.

How to add a game and create an executable is explained in [How to add a game to the client shell](./add-app-to-shell.md). How to keep guests' progress between sessions is explained in [How to keep guests' game progress between sessions](./personal-files.md).

Why a game is copied in full, is deployed after every restart or asks for an update is explained in [Deployment -- how it works and FAQ](./../../articles/deployment-faq.md). An example setup for a game that stores its update status outside its own folder: [How to set up deployment of Epic Games Launcher and Fortnite](./epic-fortnite-deploy.md).

