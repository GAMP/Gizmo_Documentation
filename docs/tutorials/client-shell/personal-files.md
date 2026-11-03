---
title: How to keep guests' game progress between sessions
order: 1.3
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"/><path d="M7 3v4a1 1 0 0 0 1 1h7"/></svg>
      In this guide you will learn
    </p>
    <h2 class="gx-title">How to keep guests' game progress between sessions and gaming stations</h2>
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

A guest played through half of a campaign, and on the next visit sat down at a different PC -- or the same one, but after a restart -- and found that the progress is gone. Most games store their saves locally on the PC, so without extra setup the saves do not carry over between sessions and gaming stations.

For this, Gizmo has **personal user files (PUF)**. Gizmo saves the specified folder from the client PC on the server and returns it when the guest launches the game or signs in on any PC in the club. This way, saves are not lost even if the PC restarts after every session, and they are synchronized between gaming stations and branches. PUF are set up separately for each game -- in its executable.

## Step 1. Check where the server stores personal files

1. Open **Settings -> Client -> File System**, **Server-Side File System** block.
2. In the **User Storage Path** field, check or specify the directory on the server where personal user files will be stored.

The section's fields are described in [File System](./../../configure/client/file-system.md).

## Step 2. Open the game's executable

1. Open **Hosts -> Apps**, then the card of the game you need and its executable.
2. Go to the **Personal Files** tab.
3. Click **+ Create New Personal File** -- the PUF card opens. If a suitable PUF already exists, attach it in the **Select Personal File** field.

If the game is not in the shell yet, first add it using [How to add a game to the client shell](./add-app-to-shell.md).

## Step 3. Fill in the PUF card

**Main fields**

- **Name** -- the PUF name in Gizmo Manager.
- **Caption** -- the PUF name customers see in the shell.
- **Source** -- the path to the saves folder on the client PC. If you need to save a registry entry, turn on the **Registry** option and enter the path to the registry entry in this field.
- **Compression Level** -- the higher the level, the slower copying and deployment, but the less space the PUF takes on the server. The "Store" type means the PUF is not compressed.

**When to return the files to the PC**

In the **Activation** field, select an option:

- **On Startup** -- the files are copied to the PC when the game the PUF is attached to is launched;
- **On Login** -- the files are copied to the PC when the guest signs in to their account. If the guest has many PUF, sign-in may be noticeably delayed.

**How much space to allocate**

**Quota** -- how many MB this PUF's save may take for each customer. 0 means no limit.

> [!WARNING]
>
> If the compressed size of the save is larger than the quota, it will not be written to the server.

**Additional settings** -- as needed:

- **Available** -- whether to show the PUF to the guest in the shell with the option to select it. Even if it is turned off, the PUF keeps working -- the guest just does not see it in the launch options.
- **Clean Up** -- before restoring the files, Gizmo deletes all contents of the destination directory.
- **Include Subdirectories** -- save nested folders and files inside the source folder.
- **Include Files**, **Include Directories**, **Exclude Files**, **Exclude Directories** -- which files and folders go into the copy. Wildcards are supported, and items are separated with ";".

Save the PUF card and the executable. All fields are described in [PUF card](./../../usage/gizmo-manager/stations/prilozheniya/kartochka-redaktirovaniya-ispolnyaemogo-fayla/lichnye-fayly-polzovateley.md).

## Step 4. Check the saving

Copying from the client PC to the server always happens when the guest signs out. To check the setup, sign in with a test account, launch the game and save, sign out, then sign in with the same account on another PC and launch the game -- the save should be there.

## Personal storage for a group

Besides PUF for individual games, members of a user group can get personal storage -- a personal folder whose files are kept between sessions:

- in the group card (**Users -> User Groups**), in the **Settings** block, turn on **Personal Storage**;
- in **Settings -> Client -> File System**, there is the **User Personal Storage** option and the **Default User Path** field -- the default folder for new users on their first sign-in.

How personal storage differs from PUF:

- **PUF** are copied: when the guest signs out, Gizmo compresses the folder and sends it to the server, and when the game is launched, it returns the folder to the PC.
- **Personal storage** is a virtual drive that is connected when the guest signs in. The files are on the server, and the guest works with them directly, like with a network drive -- without copying on sign-in and sign-out.

Personal storage features:

- available only to guests with a user account -- guest (one-time) accounts do not have it;
- turned on only for the user groups where **Personal Storage** is checked;
- does not use Windows shared folders and does not require a server edition of Windows;
- no space is reserved on the server in advance -- the storage takes exactly as much as the guest's files weigh;
- the files on the server are stored in the folder from the **User Storage Path** field without compression or encryption -- the server administrator can access them.

**How to set up personal storage**

1. In **Settings -> Client -> File System**, turn on **User Personal Storage** and in the **Drives** section set the drive letter (`U:` by default) and the drive settings. More in [File System](./../../configure/client/file-system.md).
2. Check the **User Storage Path** field -- the guests' files will be in this folder on the server.
3. Turn on **Personal Storage** in the cards of the user groups you need.

When the guest signs in, a drive with the selected letter appears on the PC. On the server, its contents are in the `<User Storage Path>\<guest login>\Documents` folder.

Special Windows folders -- **Documents**, **Pictures**, **Desktop** and so on -- can be redirected to the personal drive: then, for example, the guest's **Documents** folder will be on the `U:` drive.

> [!WARNING]
>
> Redirected folders work more slowly than local ones, and this slows down all programs that write to them, including Windows itself. Games often store data in **Documents** -- do not redirect this folder if guests in the club play such games, and set up their saves through PUF instead.

## PUF FAQ

**Do PUF work for guest accounts?**

No. PUF are saved only for guests with a user account. For one-time (guest) accounts, Gizmo does not save personal files.

**Are Windows network folders needed?**

No. PUF are transferred over Gizmo's own protocol: Windows shared folders are not needed, and the Windows limit on the number of simultaneous connections to a shared folder does not affect them.

**Can new guests get default PUF?**

Yes. Put the files you need -- for example, ready-made game settings -- in the folder from the **Default User Path** field in **Settings -> Client -> File System**. New guests get them on their first sign-in. More in [File System](./../../configure/client/file-system.md).

**Can the folder be cleaned before PUF are restored?**

Yes, turn on the **Clean Up** option in the PUF card -- then Gizmo cleans the folder before restoring the guest's files. More in [PUF card](./../../usage/gizmo-manager/stations/prilozheniya/kartochka-redaktirovaniya-ispolnyaemogo-fayla/lichnye-fayly-polzovateley.md).

## Result

- When the guest signs out, the folder with the saves is copied to the server.
- When the guest launches the game or signs in on any PC in the club, Gizmo returns their saves to this PC -- the progress is not lost after a restart or when the guest moves to another station.

How to clear other guests' launcher sessions between guests is explained in [Cleaning up game and launcher sessions](./session-cleanup.md). All executable tabs are in [Executable card](./../../usage/gizmo-manager/stations/prilozheniya/kartochka-redaktirovaniya-ispolnyaemogo-fayla/_index.md).

