---
title: How to set up a shell skin
order: 6
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>
      In this guide you will learn
    </p>
    <h2 class="gx-title">How to style the client shell to match your club</h2>
    <div class="gx-meta">
      <span>15–20 minutes</span>
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

The shell is the first thing a guest sees when sitting down at a PC. By default, Gizmo uses a neutral skin designed for any club. If you replace its background, logo and login screen, the shell looks like part of your club rather than a standard program.

The shell's appearance is set by a **skin profile** -- a set of backgrounds, a logo and display settings. The profile is assigned to a host group, so different zones of the club, such as Standard and VIP, can have their own look.

## Step 1. Prepare the files

Collect the files you will upload in advance:

- **Home screen background** -- an image or video the guest sees after signing in to the shell. Format: JPG, PNG or MP4.
- **Login screen background** -- an image or video shown before sign-in. Format: JPG, PNG or MP4.
- **Club logo** -- PNG or SVG format.

> [!TIP]
>
> Choose backgrounds that match the resolution of the monitors on the gaming PCs, so the image is not stretched and does not lose sharpness.

## Step 2. Create a skin profile

1. Open **Settings -> Client -> Skins** and click **Create Skin Profile** in the top right corner.
2. Enter the profile **Name** -- a clear one, such as "VIP zone" or "Main".
3. In the **Media** block, upload the prepared files: **Background Media**, **Login Background Media** and **Logo**. Drag the file to the right area or click **Upload File**.

Set up the other blocks as you like:

**Login Page**
- **User Login** -- shows the sign-in form on the login screen.
- **Show Host QR Code** -- shows a QR code on the login screen. You can set its link, title and description in the **QR Code URL**, **QR Code Title** and **QR Code Description** fields -- for example, a link to the club's community.

**Host Number**
- **Show on Wallpaper** and **Show on Screensaver** -- display the gaming station number on the screen, so the guest and the administrator can see right away which PC it is.
- **Prefix** -- the text before the number, for example "PC".
- **Fixed Position** -- pins the number to one corner of the screen. If you keep the animation, the number moves around the screen at the set interval.

**Login Rotator** -- turn it on if you want several images to rotate on the login screen, for example tournament posters. Set the rotation interval in seconds and the **Media Folder** with the files.

**Home Page, Shop Page and Apps Page** -- turn on the corresponding shell sections and set how many items to show per row and in the popular products and apps blocks.

**Custom CSS** -- in the **Others** block, you can set your own CSS styles for the shell: manually or by uploading a file with the **Upload CSS File** button. This is useful if the standard settings are not enough and someone in the club knows CSS.

4. Save the profile.

All fields are described in [Skin profile card](./../../configure/client/skins/skin-profile.md).

## Step 3. Assign the profile to hosts

A profile does not apply by itself -- you need to link it to a host group.

1. Go to **Hosts -> Host Groups** and open the group you created the profile for.
2. In the **Skin** field, select the shell skin, and in the **Skin Profile** field, select the profile you created.
3. Save the changes and repeat for the other host groups.

All group fields are in [Host group card](./../../usage/gizmo-manager/stations/station-groups/station-group-card.md).

> [!NOTE]
>
> To make a profile the club's default, open **Settings -> Client -> Skins**, click **"..."** next to the profile and select **Set as Default**. The default profile is marked "Default" in the table. More in [Skins](./../../configure/client/skins/_index.md).

> [!TIP]
>
> To make the VIP zone look different from the main hall, create a separate profile for each zone -- with other backgrounds and logo -- and assign it to the corresponding host group. How to split the club into zones is explained in [Security profiles](./security-profiles.md), section "Step 1. Set up host groups for the gaming zones".

## Step 4. Check the result

Walk up to any gaming PC from the configured group and look at the login screen and the shell's home screen. If the new look has not appeared, restart the shell on this PC: on the **Map**, select the gaming station and click **Restart Shell** -- this restarts Gizmo Client without restarting the computer itself. More in [Map](./../../usage/gizmo-manager/map/_index.md).

## Result

The shell on the gaming PCs looks like part of your club: your backgrounds and logo are on the login screen and the home screen. Each host group can have its own look, for example the Standard and VIP zones.

