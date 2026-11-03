---
title: Cleaning up game and launcher sessions
order: 4
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
      In this guide you will learn
    </p>
    <h2 class="gx-title">How to clean up game and launcher sessions between guests automatically</h2>
    <div class="gx-meta">
      <span>10 minutes</span>
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

A familiar situation: a guest leaves, the next one sits down at the PC -- and finds someone else's Steam account still online, with a saved library and possibly a linked card. At best this is awkward, at worst it is grounds for a real complaint against the club. Guests almost never sign out of games and launchers themselves, and counting on their conscientiousness is pointless -- it makes more sense to set up automatic cleanup once and forget about the problem.

Setting this up once when you launch the club is much easier than explaining to an unhappy guest later why someone else's game progress turned up in their session.

## Step 1. Turn on restart on sign-out

The main tool for this is already in the general shell settings.

1. Open <cmd text="Settings"/> -> <cmd text="Client"/> -> <cmd text="Shell"/> -> **Logout Action**.
2. Select **Restart**. The computer fully restarts after the guest's session ends -- this resets all running apps and local launcher sessions that do not keep the sign-in separately from the system.

We recommend choosing **Restart** rather than softer options such as "Close All Programs" -- the difference looks small at first glance, but it is exactly what separates a clean PC from a PC with someone else's open sessions.

> [!WARNING]
>
> Some launchers (primarily Steam, if it has "stay signed in" or auto-login turned on) can keep the sign-in even after the PC restarts -- in this case a restart alone is not enough, and the problem with other people's accounts comes back.

## Step 2. Check related client session settings

-  **End Pending Sessions** and **Log Out Disconnected Clients** in <cmd text="Settings"/> -> <cmd text="Client"/> -> <cmd text="Shell"/>, **User Session** block -- they control automatically ending the session when the connection between the server and the client is lost, not cleaning up the game launchers themselves, but they also affect how quickly a "stuck" guest session closes if something goes wrong on the network.

## Step 3. Add cleanup tasks on user sign-out

For launchers that remember the sign-in even after a restart, set up a script that deletes the saved sign-in when the guest's session ends.

1. Open <cmd text="Hosts"/> -> <cmd text="Tasks"/> and create a task of the **Script** type. More in [Tasks](./../../usage/gizmo-manager/stations/zadachi.md).
2. Select the **Script Type**: **Batch** for commands or **Registry Script** for `.reg` scripts, and paste the script for the launcher you need from the list below.
3. Turn on **Hidden Task Execution**.
4. On the **Task Activations** tab, assign the task to the **User Logout** event -- see [Task Activations](./../../usage/gizmo-manager/stations/task-activations.md).

> [!WARNING]
>
> The scripts delete files on the client PC. Check the paths -- especially if the launcher is not installed in the default folder -- and run the task on one PC first.

<note type="hotfixes" title="Steam" collapsed="true">

Replace `D:\Games\Steam` with the path to the Steam folder on your PCs.

```
set "Steam=D:\Games\Steam"
taskkill /F /IM "steam.exe"
taskkill /F /IM "steamwebhelper.exe"
del /S /Q "%Steam%\config\*.vdf"
rmdir /S /Q "%Steam%\userdata"
rmdir /S /Q "%LocalAppData%\Steam\htmlcache"
```

</note>

<note type="hotfixes" title="Epic Games Launcher" collapsed="true">

```
cd /d "%LocalAppData%\EpicGamesLauncher\Saved\Config\WindowsEditor\"
type GameUserSettings.ini | findstr /i /v "Data" > temp.txt
del GameUserSettings.ini
rename temp.txt GameUserSettings.ini
```

In some launcher versions, the file is in the `Windows` folder instead of `WindowsEditor` -- check the path on your PCs.

</note>

<note type="hotfixes" title="Battle.net" collapsed="true">

```
cd /d "%AppData%\Battle.net"
type Battle.net.config | findstr /i /v "SavedAccountNames" > temp.txt
del Battle.net.config
rename temp.txt Battle.net.config
```

</note>

<note type="hotfixes" title="Riot Client (Valorant, League of Legends)" collapsed="true">

```
rmdir /S /Q "%LocalAppData%\Riot Games\Riot Client"
```

</note>

<note type="hotfixes" title="Wargaming" collapsed="true">

```
rmdir /S /Q "%AppData%\Wargaming.net\WorldOfTanks"
del /S /Q "%AppData%\Wargaming.net\GameCenter\user_info.xml"
```

</note>

<note type="hotfixes" title="FACEIT and FACEIT AC" collapsed="true">

FACEIT -- **Batch**:

```
rmdir /S /Q "%AppData%\FACEIT"
```

FACEIT AC -- **Registry Script**:

```
Windows Registry Editor Version 5.00

[HKEY_CURRENT_USER\Software\FACEIT\FACEIT Client]
"token"=""
```

</note>

<note type="hotfixes" title="Discord" collapsed="true">

```
taskkill /F /IM "Discord.exe"
rmdir /S /Q "%AppData%\Discord"
```

</note>

<note type="hotfixes" title="TeamSpeak 3 and TeamSpeak 6" collapsed="true">

TeamSpeak 3:

```
taskkill /F /IM ts3client_win64.exe
del /F /Q "%AppData%\TS3Client\settings.db"
```

TeamSpeak 6:

```
taskkill /F /IM TeamSpeak.exe
del /F /Q "%AppData%\TeamSpeak\Default\settings.db"
```

</note>

<note type="hotfixes" title="Google Chrome" collapsed="true">

```
del /S /Q "%LocalAppData%\Google\Chrome\User Data\Default\*"
del /S /Q "%LocalAppData%\Google\Chrome\User Data\Default\Cache\*"
```

</note>

<note type="hotfixes" title="Other games and programs" collapsed="true">

Arena Breakout: Infinite:

```
taskkill /F /IM "arena_breakout_infinite_launcher.exe"
rmdir /S /Q "%AppData%\arena_breakout_infinite_launcher"
```

Delta Force:

```
taskkill /F /IM "df_launcher_global.exe"
rmdir /S /Q "%AppData%\df_launcher_global"
for /d %%i in ("%AppData%\df_launcher_global_*") do rmdir /S /Q "%%i"
```

Genshin Impact -- **Registry Script**:

```
Windows Registry Editor Version 5.00

[HKEY_CURRENT_USER\Software\miHoYo\Genshin Impact]
"MIHOYOSDK_ADL_PROD_OVERSEA_h1158948810"=""
```

Roblox:

```
taskkill /F /IM "RobloxPlayerBeta.exe"
rmdir /S /Q "%LocalAppData%\Roblox\LocalStorage"
```

ExitLag:

```
taskkill /F /IM "ExitLag.exe"
rmdir /S /Q "%LocalAppData%\ExitLag"
```

</note>

### Where launchers store the sign-in

If the launcher you need is not on the list, find the file where it stores the sign-in, and delete or clear it with a task:

| Launcher or program | Where the sign-in is stored |
|---|---|
| Steam | `<Steam folder>\config\loginusers.vdf` |
| Epic Games Launcher | `%LocalAppData%\EpicGamesLauncher\Saved\Config\Windows\GameUserSettings.ini` (or the `WindowsEditor` folder) |
| Battle.net | `%AppData%\Battle.net\Battle.net.config` |
| Riot Client | `%LocalAppData%\Riot Games\Riot Client\Data\RiotClientPrivateSettings.yaml` |
| EA app (EA Desktop) | `%LocalAppData%\Electronic Arts\EA Desktop\cookie.ini` |
| Ubisoft Connect | `%LocalAppData%\Ubisoft Game Launcher\settings.yml` |
| Wargaming Game Center | `%AppData%\Wargaming.net\GameCenter\user_info.xml` |
| Rockstar Games Launcher | `%UserProfile%\Documents\Rockstar Games\Social Club\Profiles` |
| Minecraft | `%AppData%\.minecraft\launcher_accounts.json` |
| Discord | `%AppData%\Discord` |
| FACEIT AC | Registry: `HKEY_CURRENT_USER\Software\FACEIT\FACEIT Client` |

## Result

- After the guest's session ends, the PC fully restarts: running apps and local launcher sessions are reset, and the next guest sits down at a clean PC.
- "Stuck" sessions are ended automatically when the connection between the server and the client is lost.
- Cleanup tasks delete the saved sign-in of launchers that remember it after a restart.

