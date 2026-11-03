---
title: How to minimize, disable or remove the shell
order: 5.5
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v10"/><path d="M18.4 6.6a9 9 0 1 1-12.77.04"/></svg>
      In this guide you will learn
    </p>
    <h2 class="gx-title">How to exit the shell on a gaming PC, disable or uninstall Gizmo Client</h2>
    <div class="gx-meta">
      <span>5–10 minutes</span>
      <span class="gx-meta-sep">/</span>
      <span class="gx-meta-level">Low difficulty</span>
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

The Gizmo Client shell blocks the guest's access to Windows: if **Prevent Shell Minimizing** is turned on in the security profile, the guest cannot minimize it like a regular app. But from time to time the administrator needs to exit the shell -- for example, to install a game or check system settings -- and sometimes to remove Gizmo Client from the PC completely.

There are two ways to do this. The first is **administrator mode**: it is turned on remotely from Gizmo Manager, removes all security and minimizes the shell. The second is **maintenance mode** on the PC itself: you enter it through a hidden Gizmo Client window with the manager password, and in it you can minimize the shell, deactivate or uninstall Gizmo Client.

## Step 1. Change the manager password

The manager password opens maintenance mode on any client PC, so first of all, replace the default password with your own.

1. Open **Settings -> Client -> Shell**, **General** block.
2. Enter a new value in the **Manager Password** field.
3. Save the settings.

> [!IMPORTANT]
>
> The default manager password is `password`. Be sure to change it and keep it in a safe place: with this password, anyone can minimize the shell, deactivate or uninstall Gizmo Client.

> [!WARNING]
>
> Changes in the **Shell** section take effect only after Gizmo Client restarts.

## Step 2. Minimize the shell from Gizmo Manager

This method does not require you to walk up to the PC and enter a password.

1. Open the **Map** section and select a gaming station -- or several at once.
2. In the **Hosts** category, open **Shell** and click **Enable Administrator Mode**. The PC switches to full access mode: all security is removed, the client shell is minimized, and access to the operating system opens.
3. When you are done working on the PC, click **Disable Administrator Mode** in the same place -- the PC exits full access mode.

If you only need to remove the security profile restrictions without minimizing the shell, use the **Disable Security** and **Enable Security** actions in the **Hosts -> System** category. To restart the shell itself without restarting the PC, use **Hosts -> Restart Shell**.

All actions with gaming stations are in [Map](./../../usage/gizmo-manager/map/_index.md).

## Step 3. Enter maintenance mode on the PC

Maintenance mode opens in a special hidden Gizmo Client window with the manager password.

1. On the client PC, press **Ctrl + Alt + Shift + A** -- the hidden window opens. The shortcut works on the login screen, during a guest session and in maintenance mode.
2. Enter the manager password from step 1.

In maintenance mode, these actions are available:

- **minimize** the Gizmo Client shell;
- **deactivate** Gizmo Client -- the client is turned off until the next PC restart or the next client start;
- **uninstall** Gizmo Client -- see step 4.

Two more shortcuts work only on the login screen and in maintenance mode:

- **Ctrl + Alt + Shift + R** -- restart the PC;
- **Ctrl + Alt + Shift + S** -- shut down the PC.

## Step 4. Uninstall Gizmo Client

1. Enter maintenance mode -- see step 3.
2. Select the Gizmo Client uninstall action and confirm it.

After uninstalling, the PC stays in Gizmo Manager -- in **Hosts -> Computers** and on the **Map** it is shown as turned off. If you no longer need the PC, delete it from the list of computers manually -- see [Computers](./../../usage/gizmo-manager/stations/computers/_index.md).

> [!NOTE]
>
> You need to delete the `C:\Program Files\NETProjects\Gizmo Client` folder manually only if you want to clean the PC completely before a clean installation of the client.

## Result

- The default manager password has been replaced, and an outsider cannot minimize, deactivate or uninstall the shell.
- To get to Windows on a gaming PC, just turn on administrator mode from Gizmo Manager, and turn it off when you are done.
- On the PC itself, you can minimize, deactivate or uninstall Gizmo Client from maintenance mode with the manager password.

The **Manager Password** field and other general settings are described in [Shell](./../../configure/client/shell.md). How to prevent guests from minimizing the shell is explained in [Security profiles](./security-profiles.md).

