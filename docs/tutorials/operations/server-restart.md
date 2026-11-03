---
title: How to restart the Gizmo server
order: 1.7
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
      In this guide you will learn
    </p>
    <h2 class="gx-title">How to restart Gizmo Server without interrupting guest sessions</h2>
    <div class="gx-meta">
      <span>10 minutes</span>
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

Gizmo Server is the main component of Gizmo: all client PCs and Gizmo Manager connect to it. You rarely need to restart it, but sometimes you do: for example, after adding, removing, enabling or disabling integrations, after installing a new SSL certificate or when support asks you to. Changes to these settings do not take effect until the server is restarted.

While the server restarts, client PCs lose connection to it. If guests are playing in the club at that moment, it is important to set up in advance what happens to their sessions -- otherwise a restart can log out the whole room. Let's look at how to prepare and how to restart the server in each run mode.

## Step 1. Find out how your server runs

This defines how to restart it.

- **Service** -- a Windows background process that starts with the system. This mode is recommended for permanent operation.
- **Console application** -- the server is started manually, from a desktop shortcut or from the `C:\Program Files\NETProjects\Gizmo Server` folder. This mode is used for collecting errors, for a one-time start or when support asks for it.

For how the modes differ and how to install the service, see [Run Modes](./../../usage/gizmo-server/run-modes.md).

Both modes apply to a server installed on Windows. Gizmo Server can also be installed on Linux and in Docker -- for these options, see step 4. A cloud version of the server is under development.

## Step 2. Set up session behavior on connection loss in advance

What happens to guest sessions while the server is unavailable is defined by the shell settings. Open **Settings -> Client -> Shell**, **User Session** block:

- **Log Out Disconnected Clients** -- if turned on, the guest's session ends in Gizmo Client itself when the connection to the server is lost.
- **End Pending Sessions** -- if turned on, the guest's session ends in Gizmo Server and Gizmo Manager when the connection is lost.
- **Timeout [Seconds]** -- how many seconds Gizmo waits for the connection to come back before ending the session according to one of the options above. 180 seconds by default.

If both options are off, guest sessions do not end automatically because of a lost connection. If at least one is on, the session ends when the connection is lost for longer than the **Timeout**.

> [!IMPORTANT]
>
> Changes to the **Timeout**, **Log Out Disconnected Clients** and **End Pending Sessions** options apply only after Gizmo Client restarts. You cannot change them "on the fly" right before restarting the server -- set them up in advance. To apply the settings without restarting the PCs themselves, select the gaming stations on the **Map** and click **Restart Shell** -- Gizmo Client restarts without restarting the computer.

For details, see [Shell](./../../configure/client/shell.md).

## Step 3. Estimate how much time you have

- If the session-ending options are on, the server must be running again before the **Timeout** runs out. With the default value, you have 180 seconds.
- If the options are off, guest sessions are not interrupted because of the lost connection, but client PCs still have no connection to the server during the restart.

> [!TIP]
>
> If the restart is not urgent, choose a time when the club has the fewest guests.

## Step 4. Restart the server

**If the server runs as a service**

1. On the server PC, start the ConfigurationTool configurator. It is in the `C:\Program Files\NETProjects\Gizmo Server\tools\configuration` folder.
2. Go to the **"Gizmo Service Management"** section.
3. Stop the service and start it again.

> [!TIP]
>
> If Windows asks for credentials to manage the service, turn on **Advanced Mode** and enter the login and password you use to sign in to your Windows account when the PC starts. If there is no sign-in password, create one.

**If the server runs as a console application**

1. Close the server console window.
2. Start the server again -- from the desktop shortcut or from the `C:\Program Files\NETProjects\Gizmo Server` folder.

**If the server is installed on Linux or in Docker**

> [!NOTE]
>
> This section is under development.

## Step 5. Check that everything works

1. Open Gizmo Manager and go to the **Map**.
2. Make sure the gaming stations are online again and guest sessions are in place.
3. If the restart was needed for a new integration or certificate, check that it works.

> [!NOTE]
>
> If a client PC does not connect to the server after the restart, go through the checklist in [Client PC connection issues](./../client-shell/client-connection-troubleshooting.md).

## Result

- The server is restarted, and the changes that required a restart have taken effect.
- Guest sessions survived the restart: either the session-ending options are off, or the server came back before the **Timeout** ran out.
- Next time, a restart takes a couple of minutes: the session settings are already prepared.

Related articles -- [Run Modes](./../../usage/gizmo-server/run-modes.md), [Shell](./../../configure/client/shell.md) and [Adding an integration](./../../configure/server/plugins/add-new-plugin.md).
