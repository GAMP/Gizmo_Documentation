---
title: How to install an SSL certificate on the server
order: 3.5
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
      In this guide you will learn
    </p>
    <h2 class="gx-title">How to install your own SSL certificate and get rid of the certificate error</h2>
    <div class="gx-meta">
      <span>5–10 minutes</span>
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

Gizmo Server and Gizmo Manager are available over the network via http and https, and https requires an SSL certificate. By default, the server uses a built-in self-signed certificate -- the browser may not trust it and may show a certificate error when connecting to the server.

To get rid of the error, install your own trusted SSL certificate in PFX format on the server. You do this once in the server's network settings.

## Step 1. Prepare the certificate

You will need an SSL certificate file in PFX format. Where to get a certificate and how to prepare the PFX file:

> [!NOTE]
>
> This section is under development.

## Step 2. Check the protocol and hostname

1. Open **Settings -> Server -> Network**, **Network Interface Settings** block.
2. Make sure the https protocol is turned on. By default, http and https are selected on ports 80 and 443 respectively.
3. Check the **Hostname** field -- the domain name the server is available at on the network. The default value is "gizmo.local" (access only on the local network).

> [!WARNING]
>
> If Gizmo Server runs in Docker, the server ignores the port settings, and Gizmo Manager and Gizmo Server are not available at the default domain name (gizmo.local) -- this is how Docker containers work.

Which values work for the hostname and how to set up network access to the server is explained in [Network access to Gizmo](./network-access.md).

## Step 3. Upload the certificate

1. On the same **Settings -> Server -> Network** page, find the **PFX Certificate** block.
2. Click **Browse** and select the certificate file.

> [!NOTE]
>
> To go back to the built-in self-signed certificate, click **Clear** in the same block.

## Step 4. Restart Gizmo Server

The new certificate applies only after Gizmo Server restarts. While the server is restarting, client PCs lose the connection to it, so choose a time when there are fewest guests in the club.

How to restart the server in each run mode and how to prepare guest sessions for it is explained in [How to restart the Gizmo server](./../operations/server-restart.md).

## Step 5. Check the connection

Open Gizmo Manager in the browser at an address with your hostname -- for example, `https://gizmo.local/apps/manager/signin` -- and make sure the browser no longer shows a certificate error.

## Result

- Gizmo Server works over https with your trusted certificate instead of the built-in self-signed one.
- The browser no longer shows a certificate error when connecting to the server.

All server network settings are described in [Network](./../../configure/server/network.md) in the Configure section. If client PCs do not connect to the server for other reasons, see [Client PC connection issues](./client-connection-troubleshooting.md).

