---
title: Cloud backup
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
      In this guide you will learn
    </p>
    <h2 class="gx-title">How to keep backups somewhere other than the server</h2>
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

The built-in backup in Gizmo Server reliably saves copies of the database -- but locally, on the server's own disk (see [Backup](./../../configure/server/backup.md) for details). This protects you well against database damage: a file got corrupted, an update went wrong, someone cleaned the wrong folder by mistake -- the copy is right there, you restore it and keep working. But if the power supply burns out and takes the disk with it, or someone simply steals the server from the club with all the copies inside, local copies are useless -- they burned or left together with the server.

Gizmo does not have a separate cloud backup feature yet, but building one yourself is easier than it seems -- you just reuse a setting that already exists. You can point the backup storage path (the **Storage** field) not to the system disk, but to a folder that syncs with the cloud. The cloud client then does all the dirty work, and you only need to set everything up once.

## Step 1. Install a cloud client on the server

Install a client for any cloud storage with local folder sync on the server -- Google Drive, OneDrive, Dropbox or any other service your company already uses.

> [!NOTE]
> 
> This is a practical method that uses existing settings, not a separate built-in Gizmo feature. If Gizmo gets its own integration with cloud storage in the future, this section will be updated.

## Step 2. Point backups to the synced folder

1. In Gizmo Manager, open <cmd text="Settings"/> -> <cmd text="Server"/> -> <cmd text="Backup"/>.
2. Turn on backup with the toggle -- it is off by default, and the other options are unavailable until you turn it on.
3. Check **Maximum Number of Backup Files to Keep** (10 by default) and **Repeat** -- the time when the copy is created (0:00 by default).
4. In the **Storage** field, enter the full path to the cloud client's synced folder.
5. Save the settings -- from now on, copies are created there, and the cloud client automatically moves them off the server without your involvement.

> [!WARNING]
> 
> Make sure the operating system user that runs Gizmo Server has read and write permissions for this folder -- otherwise copies simply will not be created, and you will find out at the worst possible moment. This is the same requirement as for a regular local path.

## Step 3. Check sync and cloud space from time to time

- Make sure the folder actually syncs with the cloud and the files do not just pile up locally without uploading -- look at the cloud client's interface and check that the files really go up.
- Check that the cloud storage has enough free space for the **maximum number of backup files** you set in the server settings -- if the space limit is smaller than the total size of all copies, some of them simply will not upload.

## Result

Database backups are created in the synced folder, and the cloud client automatically moves them off the server -- the copies survive even if something happens to the server itself. It is a one-time setup that then works on its own -- exactly what makes it worth the effort.
