---
title: Security profiles
order: 5
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>
      In this guide you will learn
    </p>
    <h2 class="gx-title">How to set up a security profile for hosts</h2>
    <div class="gx-meta">
      <span>15–20 minutes</span>
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

Without a security profile, a guest can do anything with a gaming PC, up to turning off the shell itself -- these are standard Windows capabilities, and you can block them only by restricting access to the corresponding system settings. A security profile is a set of such restrictions that is assigned to a whole host group.

## Step 1. Set up host groups for the gaming zones

Gaming zones are the rooms of your club that differ in prices, appearance and other settings. For example, Standard, VIP and PS5 are three gaming zones. Before you set up a security profile, decide on the zones -- the profile is assigned to a host group.

1. Go to <cmd text="Hosts"/> -> <cmd text="Host Groups"/>. By default, there are already several groups -- you can rename them, delete them or create your own.
2. In a group, select the branch, skin profile, app group and default guest group.

**IMAGE: host group card with the branch, skin profile, app group and default guest group fields**

3. Create a group for each gaming zone of the club -- for example, the Standard, VIP and Consoles zones give three host groups.

**IMAGE: Hosts -> Host Groups list with the Standard, VIP and Consoles groups**

## Step 2. Create a security profile

Open <cmd text="Hosts"/> -> <cmd text="Security Profiles"/> and create a profile. You can turn the settings on as you see fit, but here is what we recommend for most clubs.

1. **General shell restrictions**:
   - name the profile;
   - turn on **Hide Start Menu**, **Prevent Shell Minimizing** and **Restrict Desktop Switching**.
2. **File system**: in the **File System** section, check all drive letters -- this hides and blocks the drives for the guest.
3. **Policies**: in the **Policies** section, turn on all security settings with one button.

This is the maximum lockdown level -- it closes almost everything outside the shell for the guest. Profiles can also block specific apps, processes and even websites in the guest's browser.

**IMAGE: security profile card with the general restrictions, File System and Policies sections**

## Step 3. Assign the profile to host groups

A security profile does not apply by itself -- you need to link it to a host group.

1. Go to <cmd text="Hosts"/> -> <cmd text="Host Groups"/>.
2. Open each group and link the security profile to it.

> [!TIP]
> 
> The restrictions are not permanent -- you can always lift them by turning off security on the PC or by switching it to administrator mode.

## Step 4. If needed, set up different profiles before and after the guest signs in

A security profile can be assigned in two places, and they apply at different moments:

- **host group profile** -- applies right after the PC boots, including on the login screen, when nobody is sitting at the PC yet;
- **user group profile** (the **Security Profile Override** field in the group card) -- turns on when the guest signs in and **replaces** the host group profile for the duration of the session.

This lets you do the following: on the login screen the PC is locked with the strictest profile, and after signing in the guest gets a softer profile -- for example, with access to the mouse and sound settings.

1. Create a second security profile with the restrictions the guest needs during the session.
2. Open **Users -> User Groups**, select a group and turn on **Security Profile Override** with this profile. More in [User group card](./../../usage/gizmo-manager/users/user-groups/user-group-card.md).

## Step 5. If needed, block individual programs

To block a specific program, in the security profile, in the **Restrictions** section, click **+ Create Restriction** and select the **Restriction Type**:

- **File Name** -- the simplest option: enter the name of the executable, for example `chrome.exe`. But it is easy to bypass by renaming the file.
- **Class Name** -- more reliable: the guest cannot change the window class. Keep in mind that several programs can have the same class. You can find the window class with the free [WinLister](https://www.nirsoft.net/utils/winlister.html) utility.
- **Window Title** -- the window title as it appears on the taskbar (in WinLister, the **Title** column). Some programs change their title on the fly -- use the `*` and `?` wildcards.

Ready-made restrictions for common cases:

| What to block | Restriction Type | Value |
|---|---|---|
| Network (network neighborhood) | Window Title | `Network` |
| Windows Settings | File Name | `SystemSettingsBroker.exe` |
| Computer Management, Disk Management and other MMC snap-ins | Class Name | `MMCMainFrame` |
| Microsoft Store | File Name | `WinStore.App.exe` |
| All versions of Cheat Engine | Window Title | `Cheat Engine*` |

Control Panel, the taskbar context menu and much more are closed with ready-made policies -- their list is in [Security profile card](./../../usage/gizmo-manager/stations/profili-bezopasnosti/kartochka-redaktirovaniya-profilya-bezopasnosti.md). How to hide the taskbar completely is explained in [Useful task scripts](./../../articles/useful-task-scripts.md).

## Result

The security profile restrictions apply on all PCs of the host group: the guest cannot open the Start menu, minimize the shell or switch to another desktop; the drives are hidden and blocked, and access to system settings is restricted by security policies. The guest can no longer turn off the shell.

What else helps keep client PCs in working order -- rollback programs, network boot, a master image -- is covered in [How to protect client PCs](./../../articles/client-pc-protection.md).

