---
title: Gizmo Manager as an App
order: 9.5
---

<html>

<style>
  html, body {
    margin: 0;
    padding: 0;
    background: #1a1e33;
    font-family: 'Segoe UI', system-ui, -apple-system, Roboto, Arial, sans-serif;
  }

  @media (prefers-color-scheme: light) {
    html, body {
      background: #ffffff;
    }
  }

  * {
    box-sizing: border-box;
  }

  .gx-card {
    position: relative;
    width: 100%;
    border-radius: 18px;
    overflow: hidden;
    background: #232a4a;
    background-image: linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%);
    border: none;
    box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.04) inset;
    padding: 26px 32px 28px;
    font-family: 'Segoe UI', system-ui, -apple-system, Roboto, Arial, sans-serif;
  }
  .gx-card .gx-glow {
    position: absolute;
    inset: -30px -44px auto -60px;
    height: 200px;
    background: radial-gradient(45% 100% at 8% 0%, rgba(82, 110, 211, 0.28) 0%, rgba(82, 110, 211, 0) 72%);
    filter: blur(2px);
    pointer-events: none;
  }
  .gx-card .gx-card-content { position: relative; }
  .gx-card .gx-kicker {
    display: flex; align-items: center; gap: 8px; margin: 0 0 14px 0;
    color: #7c93e8; font-size: 12px; line-height: 1.3; font-weight: 600;
    letter-spacing: 0.1em; text-transform: uppercase;
  }
  .gx-card .gx-kicker svg { flex: none; width: 15px; height: 15px; }
  .gx-card .gx-title {
    max-width: 560px; margin: 0 0 18px 0; color: #ffffff;
    font-size: clamp(22px, 3vw, 27px); line-height: 1.34; font-weight: 700; letter-spacing: -0.015em;
  }
  .gx-card .gx-accent { color: #a9bdf5; }
  .gx-card .gx-meta {
    display: flex; align-items: center; color: rgba(255, 255, 255, 0.5);
    font-size: 11.5px; line-height: 1; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;
  }
  .gx-card .gx-meta-sep { margin: 0 12px; opacity: 0.4; }
  .gx-card .gx-meta-level { color: #86efac; }
  .gx-card .gx-meta-level.medium { color: #fde68a; }
  .gx-card .gx-meta-level.high { color: #fca5a5; }
  .gx-card .gx-desc {
    max-width: 560px; margin: 16px 0 0 0; color: rgba(255, 255, 255, 0.56);
    font-size: 13px; line-height: 1.6;
  }
</style>

<div class="gx-card">
  <div class="gx-glow"></div>
  <div class="gx-card-content">
    <p class="gx-kicker">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text-icon lucide-file-text"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
      In this guide you will learn
    </p>
    <h2 class="gx-title">
      How to open Gizmo Manager as a separate app instead of a browser tab
    </h2>
    <div class="gx-meta">
      <span>3–5 minutes</span>
      <span class="gx-meta-sep">/</span>
      <span class="gx-meta-level">Low difficulty</span>
    </div>
    <p class="gx-desc">Turn the Gizmo Manager page into a separate desktop window — with a shortcut, a taskbar icon and no browser address bar.</p>
  </div>
</div>

<script>
(function () {
  var LIGHT_BG = '#ffffff';
  var DARK_BG = '#1a1e33';

  function applyBg() {
    var theme = document.documentElement.dataset.theme;
    if (theme !== 'light' && theme !== 'dark') {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    var bg = theme === 'light' ? LIGHT_BG : DARK_BG;
    document.documentElement.style.backgroundColor = bg;
    document.body.style.backgroundColor = bg;
  }

  applyBg();
  new MutationObserver(applyBg).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyBg);
})();
</script>

</html>

> [!NOTE]
>
> There is no full desktop application for Gizmo V3 -- it uses a web architecture that lets you manage the club from any device with a browser.
>
> So we will simply install the app page from the browser -- the experience will be as close as possible to a native application.

## Step 1. Choose a browser and open Gizmo Manager

1. Choose the browser you will install the app from. We recommend Edge, but any browser that can install pages as web apps will do.
2. In that browser, open the Gizmo Manager sign-in page: `https://gizmo.local/apps/manager/signin`.

## Step 2. Install the page as an app

Below are instructions for the most popular browsers:

<tabs>
  <tab name="Edge">
    - Click **the three dots in the top right corner -> More tools -> Apps -> Install Gizmo Manager**.

    **IMAGE: Edge menu with More tools -> Apps -> Install Gizmo Manager selected**



    - A confirmation window appears in a second -- click **Install**.

    **IMAGE: Edge confirmation window for installing Gizmo Manager with the Install button**



    - A new window opens -- this is the app you can use. We recommend turning on **Pin to taskbar**, **Pin to Start** and **Create desktop shortcut** right away.

    **IMAGE: Gizmo Manager app window in Edge with the Pin to taskbar, Pin to Start and Create desktop shortcut options**
  </tab>
  <tab name="Chrome">
    - Click **the three dots in the top right corner -> Cast, save, and share -> Install "Gizmo Manager"**.

    **IMAGE: Chrome menu with Cast, save, and share -> Install Gizmo Manager selected**



    - A confirmation window appears in a second -- click **Install**.

    **IMAGE: Chrome confirmation window for installing Gizmo Manager with the Install button**



    - A new window opens -- this is the app you can use.
  </tab>
  <tab name="Firefox">
    In Firefox, you can create a shortcut to the Manager page in two ways:

    - **On the taskbar** -- click the button next to the address bar -> **Add tab to taskbar**. The page opens in a new window and appears on the taskbar. To pin the app, right-click its icon on the taskbar and select **Pin to taskbar**.

    **IMAGE: Firefox address bar with the Add tab to taskbar button**



    - **As a shortcut** -- open the Manager page and make the browser window smaller so you can see both the desktop and the browser window. Hold down the left mouse button on the "shield" icon next to the address bar and drag it to the desktop.

      > [!NOTE]
      >
      > This creates a regular shortcut with a link to the page. It opens Gizmo Manager in the default browser, in a regular tab, not in a separate app window.

    **IMAGE: dragging the icon from the Firefox address bar to the desktop to create a shortcut**
  </tab>
</tabs>

## Result

Gizmo Manager opens as a separate desktop window -- with a shortcut, a taskbar icon and no browser address bar, and the experience is as close as possible to a native application.
