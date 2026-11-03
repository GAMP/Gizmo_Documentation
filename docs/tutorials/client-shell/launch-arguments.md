---
title: Paths and launch arguments for launchers and applications
order: 1.1
---

A reference for [How to add a game to the client shell](./add-app-to-shell.md): what to enter in the **Executable Path**, **Arguments** and **Working Directory** fields of an executable so that a launcher game or a system app launches from Gizmo Client.

All executable fields are in [Executable card](./../../usage/gizmo-manager/stations/prilozheniya/kartochka-redaktirovaniya-ispolnyaemogo-fayla/_index.md).

> [!IMPORTANT]
>
> The app must be installed in the same path on all client PCs. If the paths differ between PCs, create a separate executable for each path.

## Games from launchers

For games from launchers, the **Executable Path** points to the **launcher** file, not the game itself: the launcher receives the command from the **Arguments** field and launches the right game. **Working Directory** is the launcher folder; if you leave the field empty, it is usually filled in when you save.

Below, `<ID>` is the game's ID in the launcher: substitute it without the angle brackets.

| Launcher | Executable Path | Arguments |
|---|---|---|
| Steam | `...\Steam\steam.exe` | `steam://rungameid/<ID>` |
| Epic Games | `...\Epic Games\Launcher\Portal\Binaries\Win64\EpicGamesLauncher.exe` | `com.epicgames.launcher://apps/<ID>?action=launch&silent=false` |
| Riot Games | `...\Riot Client\RiotClientServices.exe` | `--launch-product=<ID> --launch-patchline=live` |
| Ubisoft Connect | `...\Ubisoft Game Launcher\UbisoftConnect.exe` | `uplay://launch/<ID>` |
| Battle.net | `...\Battle.net\Battle.net Launcher.exe` | Not specified -- the launcher does not support launching a game by argument |

### Steam

The game ID is the number in the address bar on the game's page in the Steam store. For example, Counter-Strike 2 has the ID `730`, and the argument is `steam://rungameid/730`.

Add your own game launch options (the ones you set in the game properties in Steam) after the ID, separated by a space:

```
steam://rungameid/730 -language "english" -novid -w 1280 -h 1080
```

### Epic Games

Specify the launcher from the **Win64** folder, not Win32.

How to find the argument:

1. In the launcher, open the library, click the three dots next to the game and select **Manage -> Create Shortcut**. This item is available only if the game is installed.
2. On the desktop, right-click the created shortcut and select **Properties -> Web Document**.
3. The value of the **URL** field is the argument.

### Riot Games

The ID is the game name in lowercase letters, with spaces replaced by underscores:

- League of Legends -- `--launch-product=league_of_legends --launch-patchline=live`;
- Valorant -- `--launch-product=valorant --launch-patchline=live`.

### Ubisoft Connect

1. Create a desktop shortcut for the game.
2. Right-click the shortcut and select **Properties**.
3. The value of the **URL** field is the argument.

## Microsoft Store apps

**Method 1 -- with a shortcut**

1. Open the **Start** menu, find the app and drag its icon to the desktop -- a shortcut appears.
2. Put the shortcut in the same folder on all client PCs.
3. In **Executable Path**, enter the path to the shortcut (the `.lnk` file) and turn on **Shell Execute**.

**Method 2 -- through File Explorer** (does not work with all apps)

1. Create a shortcut for the app as in method 1, open its **Properties** and copy the **Target type** value -- for example, `Microsoft.WindowsStore_8wekyb3d8bbwe!App`.
2. Fill in the executable fields:
   - **Executable Path** -- `%windir%\explorer.exe`;
   - **Arguments** -- `shell:AppsFolder\<target type>`;
   - **Working Directory** -- `%windir%`.

## Other apps

| App | Executable Path | Arguments | Working Directory |
|---|---|---|---|
| Discord | `%LocalAppData%\Discord\Update.exe` | `--processStart Discord.exe` | `%LocalAppData%\Discord` |
| NVIDIA Control Panel | `C:\Windows\explorer.exe` | `shell:AppsFolder\NVIDIACorp.NVIDIAControlPanel_56jybvy8sckqj!NVIDIACorp.NVIDIAControlPanel` | `C:\Windows\` |
| Windows mouse settings | `C:\Windows\system32\control.exe` | `Main.cpl` | `C:\Windows\system32\` |
| Windows sound settings | `C:\Windows\system32\control.exe` | `mmsys.cpl` | `C:\Windows\system32\` |

> [!WARNING]
>
> Mouse and sound settings open through Control Panel. If **Prohibit access to Control Panel and PC settings** is turned on in the security profile, they will not open -- see [Security profile card](./../../usage/gizmo-manager/stations/profili-bezopasnosti/kartochka-redaktirovaniya-profilya-bezopasnosti.md).

## FAQ

**How do I launch an app without administrator rights?**

By default, Gizmo launches apps with administrator rights. To launch an app with standard rights, launch it through File Explorer:

- **Executable Path** -- `C:\Windows\explorer.exe`;
- **Arguments** -- the path to the app file, for example `C:\Program Files\FACEIT AC\faceitclient.exe`;
- **Working Directory** -- `C:\Windows\`.

**Can I launch files other than .exe?**

Yes: `.bat`, `.lnk` (shortcuts) and any other files Windows can open. To do this, turn on **Shell Execute** for the executable -- then the system itself chooses what to open the file with.

**What if the path contains the Windows user name?**

Use environment variables -- Windows substitutes the right path by itself. For example, `%LocalAppData%` means `C:\Users\<user name>\AppData\Local`, and `%AppData%` means `C:\Users\<user name>\AppData\Roaming`.

How to connect the club's launcher accounts to a game is explained in [How to set up club accounts in game launchers](./club-licenses.md).

