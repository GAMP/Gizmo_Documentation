---
title: How to turn on, restart and shut down PCs remotely
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v10"/><path d="M18.4 6.6a9 9 0 1 1-12.77.04"/></svg>
      In this guide you will learn
    </p>
    <h2 class="gx-title">How to turn on, restart and shut down club PCs right from Gizmo Manager</h2>
    <div class="gx-meta">
      <span>10–15 minutes</span>
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

In the morning before opening, you need to turn on the whole room, and at night -- turn it off. Walking up to every PC in turn takes a long time, especially if the seats are on different floors. In Gizmo Manager, you do this from the club map: select the seats you need -- and turn them on, restart or shut them down with one command.

Shutdown and restart work on PCs that are turned on. Turning on a PC that is off works through Wake On LAN -- you need to prepare it once on the client PCs themselves.

## Step 1. Turn on Wake On LAN on the client PCs

You need this step only for turning PCs on remotely. If you only plan to shut down and restart PCs, go to step 3.

On each client PC, turn on Wake On LAN in BIOS/UEFI and in the network adapter settings.

> [!WARNING]
>
> If Wake On LAN is not set up on the client PC, the **Turn On** command will not work. In Windows 10, waking from a normal shutdown over the network is not supported while fast startup is on -- see the [Microsoft article](https://learn.microsoft.com/en-us/troubleshoot/windows-client/setup-upgrade-and-drivers/wake-on-lan-feature) for details.

Where exactly the settings are in BIOS/UEFI and in the network adapter properties:

> [!NOTE]
>
> This section is under development.

## Step 2. Check the PC's MAC address in Gizmo

The wake-up signal is sent to the MAC address of the PC's network adapter, so it must be set in the computer card.

1. Open **Hosts -> Computers**. The **MAC Address** column in the list shows the address of each PC.
2. If a PC has no address, double-click it -- the computer card opens.
3. Enter the **MAC Address** and save the card.

For the card fields, see [Computer card](./../../usage/gizmo-manager/stations/computers/computer-card.md).

## Step 3. Give operators the permission they need

Turning PCs on remotely is available only to operators with the **Power On Hosts** permission (**"Management"** category).

1. Open **Settings -> Operators and permissions -> Permissions**.
2. Choose the permission set assigned to the operator.
3. In the **"Management"** category, turn on **Power On Hosts** and save the set.

Which permissions control shutting down and restarting PCs:

> [!NOTE]
>
> This section is under development.

For all permissions, see [Permission card](./../../configure/operators-and-permissions/permissions/permission-card.md).

## Step 4. Control power from the club map

1. Open the **Map** section.
2. Select one gaming station or several at once.
3. In the **Hosts** group, choose an action:
   - **Turn On** (CTRL+T) -- sends a request over the network to turn the PC on if it is off;
   - **Restart** (CTRL+R) -- restarts the PC if it is on;
   - **Shut Down** (CTRL+ALT+T) -- shuts the PC down if it is on.

The same actions are in the right-click context menu and in the top toolbar of the map.

> [!TIP]
>
> If only the client shell froze on the PC, you do not have to restart the whole PC. In the **Hosts** group, choose **Restart Shell** -- Gizmo Client restarts, and the PC itself keeps running.

For all map actions, see [Map](./../../usage/gizmo-manager/map/_index.md).

## Result

- The operator turns on PCs that are off from the club map through Wake On LAN -- one at a time or a whole group.
- PCs are restarted and shut down from the map, without walking up to the gaming station.

For how to turn consoles and screens on and off with smart relays and sockets, see [How to turn consoles on and off with smart relays and sockets](./power-scripts.md).
