---
title: Network access to Gizmo
order: 3
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
    <h2 class="gx-title">How to open Gizmo Manager from any PC in the club</h2>
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

At the front desk, Gizmo Manager opens at `gizmo.local` -- and this works without any magic simply because the server is a couple of meters away from you, on the same machine or on the same local network with the default name. But sooner or later you will need to open the Manager from another PC -- for example, a second administrator wants to open the club map from their own seat without leaving the register. Or you are connecting a device that knows nothing about the name `gizmo.local`, such as Companion at the register. And then it turns out you need the server's real network address -- its local IP.

## Step 1. Find the server's local IP

<tabs>

<tab name="Through the Windows interface">

On the PC where Gizmo Server is installed:

1. Right-click the network icon in the bottom right corner of the screen and choose **Network and Internet settings**.
2. Open the active connection: **Ethernet** for a wired network or **Wi-Fi** for a wireless one. In Windows 10, click **Properties** for the current connection.
3. Find the **IPv4 address** line -- usually it looks something like `192.168.1.25`.

</tab>

<tab name="Console">

On the PC where Gizmo Server is installed (Windows):

1. Open `cmd` (press Win + R, type `cmd`, press Enter).
2. Type the `ipconfig` command and press Enter.
3. Find the **IPv4 Address** line in the section of your active network adapter -- usually it looks something like `192.168.1.25`.

This is the server's local IP address on your network -- write it down, you will need it in the next couple of steps.

</tab>

</tabs>

## Step 2. Open Gizmo Manager from another PC

On any other PC connected to the same local network (the same Wi-Fi network or the same router as the server), open in the browser:

```
http://<server local IP>/apps/manager/signin
```

For example, `http://192.168.1.25/apps/manager/signin`.

> [!WARNING]
> 
> This works only if both PCs are on the same local network. If the club is split into different network segments (VLANs) or the server runs in Docker, additional setup is needed -- a full breakdown of the network settings, domain names and ports is in [Network](./../../configure/server/network.md).

## Step 3. Enter the same IP in Companion

When you set up Gizmo Companion, it asks for exactly this address -- in its interface, this is the **Hostname** field, and the default port is 80 (unless, of course, you changed the protocols and ports in the server's network settings). So if you have already found the IP for opening the Manager from another PC, it is enough for Companion too -- you will not have to look for it a second time.

> [!TIP]
> 
> If the server's IP address changes over time (for example, the router assigns it dynamically, and after a reboot it is different), it is more convenient to give the server a permanent address once: reserve it in the router's DHCP settings (an address reservation by MAC address) or set a static IP in the network adapter properties. Then you do not have to change the address for the Manager and Companion after every reboot.

## Result

- You know the server's local IP and can open Gizmo Manager from any PC on the same local network at `http://<server local IP>/apps/manager/signin`.
- The same address works for the **Hostname** field when you set up Gizmo Companion.

