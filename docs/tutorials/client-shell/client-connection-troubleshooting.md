---
title: Client PC connection issues
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4"/><path d="M12 17h.01"/><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L14.71 3.86a2 2 0 0 0-3.42 0Z"/></svg>
      In this guide you will learn
    </p>
    <h2 class="gx-title">What to check if a client PC does not connect to the server</h2>
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

Gizmo Client is stuck on the loading screen forever, the server icon in the bottom left corner of the screen is red, the PC does not appear in <cmd text="Hosts"/> -> <cmd text="Computers"/> in Gizmo Manager at all, or it shows as disconnected on the club map? Before you write to support, go through a basic checklist -- nine times out of ten, the cause is one of the reasons below.

Go through the checks in order: licenses, network, the client itself and the PC's assignment in Gizmo Manager.

## Step 1. Make sure the club has enough licenses

You may have connected more gaming stations than the subscription allows, or the subscription data has not been updated.

1. In Gizmo Manager, open **Settings -> Organization -> Subscription**.
2. Check that the subscription is active and that the number of licenses is at least the number of gaming stations you have connected -- including consoles.

## Step 2. Check the network

-  The client PC must be on the same local network as the server. Automatic discovery works only within one subnet: if the PC and the server are on different subnets (for example, behind different routers), the client will not find the server. How to check this and how to find the server's local IP is explained in [Network access to Gizmo](./network-access.md).

-  In the server settings, in <cmd text="Settings"/> -> <cmd text="Server"/> -> <cmd text="Network"/> -> <cmd text="Connection Rules"/>, **Automatic Discovery** and **Hostname Recovery** must be turned on -- without them, client PCs do not connect automatically, and this is one of the most common causes of the problem.

-  Check that an antivirus or firewall on the client PC or on the server is not blocking the connection -- Gizmo Client and Gizmo Server must be able to exchange data freely over the local network.

## Step 3. Check the client itself

-  Make sure the installed Gizmo Client version is compatible with the current Gizmo Server version -- we recommend downloading the installer from <cmd text="Settings"/> -> <cmd text="Others"/> -> <cmd text="About"/>, **Downloads** block, in Gizmo Manager itself, rather than using an old installer from another PC.

-  Restart Gizmo Client and the PC itself -- some connection problems are solved by a simple restart, however trivial it sounds.

-  Check that several instances of Gizmo Client are not running on the client PC at the same time.

-  If the server has not been updated for a long time, update it to the latest version -- see [How to update Gizmo](./../operations/update-gizmo.md).

-  If the shell starts but hangs on a black screen, the problem is not the connection: see [Black screen or slow Gizmo Client startup](./client-startup-troubleshooting.md).

## Step 4. Check the assignment in Gizmo Manager

-  Open <cmd text="Hosts"/> -> <cmd text="Computers"/> -- the PC should appear here at least once after it successfully connects to the server. If the PC does not appear at all, the problem is at the network or client installation level, not the assignment, and there is no point looking further in the host settings.

-  If the PC appears but does not work as expected, check that it has a **Branch**, a **Host Group** and a **layout** -- without them, the PC is not shown on the club map in the <cmd text="Map"/> section. Without a host group, Gizmo Client does not connect at all: an error appears on the PC screen.

## Step 5. If nothing helped, contact support

Contact Gizmo support and describe:

- at which stage the connection stops (loading, red server icon, the PC does not appear in the list);
- which items from the list above you have already checked.

This speeds up diagnostics many times over -- support will not have to go through what you have already done with you again.

## Result

The client PC connects to the server: it appears in <cmd text="Hosts"/> -> <cmd text="Computers"/> and is shown on the club map in the <cmd text="Map"/> section. If you could not find the cause, Gizmo support has everything it needs for quick diagnostics.
