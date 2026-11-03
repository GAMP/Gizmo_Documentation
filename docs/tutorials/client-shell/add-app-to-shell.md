---
title: How to add a game to the client shell
order: 1
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>
      In this guide you will learn
    </p>
    <h2 class="gx-title">How to add games and programs to the client shell</h2>
    <div class="gx-meta">
      <span>20–30 minutes</span>
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

The Gizmo Client shell is just a nice storefront until there is something to launch in it. You will install games on client PCs as usual, through Steam, Epic or any other launcher -- but for guests to see them right in the club interface and launch them with one click, you need to add each game to Gizmo Manager as an app. Let's go through this with a Steam game as an example -- the principle is exactly the same for any other launcher.

An app in Gizmo is a game or program that a guest can launch from the client shell. It is set up in <cmd text="Hosts"/> -> <cmd text="Apps"/> and consists of two related but different entities: the **app card** -- what the guest sees (icon, name, category), created once -- and the **executable** inside the card -- what actually runs on the client PC (the path to the game and the launch options). One card can have several executables -- for example, if the game is installed in different paths on different club PCs (this happens when client PC images were built at different times or by different people). This split is intentional: you do not need to set up the cover and name again for each PC, and the launch path can be adjusted flexibly for specific machines.

## Step 1. Create the app card

Go to <cmd text="Hosts"/> -> <cmd text="Apps"/> -> <cmd text="Create App"/> and fill in:

-  **Name** -- what the guest sees in the shell. Add a cover as well -- for icons and covers of Steam games, [steamgriddb.com](https://www.steamgriddb.com) is handy: it already has covers for almost everything on Steam.

-  **Default Group** and **Category** in the **App Organization** section -- they define where the app appears in the shell and how it can be filtered.

**IMAGE: app card with the Name, cover, Default Group and Category fields**

Save the card and open it again -- now you can add an executable to it.

> [!TIP]
>
> If you are adding not one or two games but the club's entire catalog (which easily reaches fifty titles), do not try to do it all in one sitting. Split the games into categories in advance -- shooters, strategy games, sports simulators -- before you start creating cards, and fill in the default group correctly right away. Re-sorting fifty already created apps into categories after the fact takes much longer than doing it as you go.

## Step 2. Add an executable

Click **\+ Create Executable** inside the card and fill in:

-  **Caption** -- the shortcut name the guest will see, and an icon for it (you can also get it from steamgriddb.com).

-  **Availability** -- the branches where this shortcut should appear. If availability is not turned on for the right branch, the shortcut will not be visible anywhere, and you will spend half an hour looking for what is wrong.

**IMAGE: executable card with the Caption and Availability fields**

-  **Executable Path** -- the path on the client PC (not on the server) used to launch the app. **Working Directory** -- the folder that contains this file, without the file name.

> [!TIP]
> 
> How to find the path to a game, using Steam as an example:
>
> 1. Find the shortcut on the desktop, right-click it -> "Open file location".
>
> **IMAGE: shortcut context menu with Open file location selected**
>
> 1. The game folder opens -- copy the path from the File Explorer address bar, for example `C:\Program Files (x86)\Steam`.
>
> **IMAGE: File Explorer address bar with the path to the Steam folder**
>
> 1. In the **Executable Path** field, enter this path and add the name of the file to launch at the end: `C:\Program Files (x86)\Steam\steam.exe`. In the **Working Directory** field, enter just the folder path, without the file name: `C:\Program Files (x86)\Steam`.
>
> **IMAGE: Executable Path and Working Directory fields filled in for Steam**

To launch a specific game from the shell, not just the launcher, enter the game's launch command in the **Arguments** field -- for example, `steam://rungameid/730` for Counter-Strike 2. Paths and arguments for Steam, Epic, Riot, Ubisoft, Battle.net, Microsoft Store apps and system programs are in the reference [Paths and launch arguments for launchers and applications](./launch-arguments.md).

## Step 3. Set up the launch options

In the **Launch Options Organization** section, we recommend turning on **Auto Launch** and **Monitor Children** -- for the vast majority of games, this is enough for everything to work smoothly.

-  **Auto Launch** -- launches the app right after the preliminary actions (deployments, tasks). If it is off, the guest has to click launch twice: the first time to run the preliminary actions, the second time to confirm the launch. This is not an autostart of the app when the PC turns on.

-  **Monitor Children** -- lets Gizmo Client track child processes started by the app (for example, separate launchers or anti-cheat modules), not just the executable itself.

**IMAGE: Launch Options Organization section with Auto Launch and Monitor Children turned on**

Save the settings -- the app is ready.

## Step 4. Check that the app appears for guests

The app appears in the shell on all client PCs where it is installed in the specified path. If the path does not match on at least one PC, the shortcut will not be shown there. When there are problems, first check that the game's installation path matches the path in the executable -- this is the cause of nine problems out of ten.

## Result

The game appears in the Gizmo Client shell on all client PCs where it is installed in the specified path -- the guest sees it right in the club interface and launches it with one click.

If the game is launched from the club's launcher accounts, connect them using [How to set up club accounts in game launchers](./club-licenses.md).
