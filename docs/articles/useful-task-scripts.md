---
title: Useful task scripts
order: 9
---

**Tasks** are actions that Gizmo runs on a client PC automatically: when a guest logs in or out, when the PC starts, at different stages of a game launch. This article has ready-made scripts for common cases.

## How to add a script

1. Open **Hosts -> Tasks** and create a task of the **Script** type.
2. Choose the **Script Type**: **Batch** -- for the commands in this article, **Registry Script** -- for `.reg` scripts.
3. Paste the script and turn on **Hidden Task Execution**.
4. Assign the task:
   - to a gaming station event (**User Login**, **User Logout**, **Computer Startup**) -- on the [Task Activations](./../usage/gizmo-manager/stations/task-activations.md) tab;
   - to a game launch stage (**Tasks Before Deployment**, **Tasks Before Executable Launch** and others) -- on the **Tasks** tab of the executable, see [Executable card](./../usage/gizmo-manager/stations/prilozheniya/kartochka-redaktirovaniya-ispolnyaemogo-fayla/_index.md).

All task fields are described in [Tasks](./../usage/gizmo-manager/stations/zadachi.md).

> [!WARNING]
>
> These scripts delete files and change Windows settings. Check the paths against your PCs and run the task on one PC first.

## Delete a folder

```
rd /s /q "C:\Path\to\folder"
```

For example, before a game launches you can delete the folder with its temporary files.

## Delete a file

```
del /q /f "D:\Games\Steam\steamapps\appmanifest_550.acf"
```

## Close a program

```
taskkill /im "programname.exe" /f
```

Replace `programname.exe` with the process name -- you can see it in Task Manager on the **Details** tab.

## Block a website

The script redirects website addresses to the PC itself through the `hosts` file, so the browser cannot open them. Assign the task to the **User Login** or **Computer Startup** event.

```
set "HOSTS=%windir%\System32\drivers\etc\hosts"
findstr /x /c:"127.0.0.1 www.example.com" "%HOSTS%" >nul || echo 127.0.0.1 www.example.com>>"%HOSTS%"
findstr /x /c:"127.0.0.1 example.com" "%HOSTS%" >nul || echo 127.0.0.1 example.com>>"%HOSTS%"
```

Replace `example.com` with the sites you need -- one line per address. The `findstr` check keeps the same line from being added at every run. If the last line of the `hosts` file does not end with a line break, the first entry gets glued to it -- open `hosts` in Notepad and check it once.

## Hide the taskbar

In a security profile you can lock the taskbar against changes, but not hide it completely -- see the question about the Start menu in the [FAQ](./../faq.md). You can hide it with the free NirCmd utility:

1. Download [NirCmd](https://www.nirsoft.net/utils/nircmd-x64.zip) (64-bit) and on every client PC run `nircmd.exe` -> **Copy To Windows Directory** -- the utility is copied to the Windows folder.
2. Create a script task and assign it to the **User Login** event:

```
timeout 3
nircmd.exe win hide class Shell_TrayWnd
nircmd.exe win normal title gizmo
nircmd.exe win max title gizmo
```

The first command hides the taskbar; the last two maximize the shell window to full screen.

## Disable Windows Explorer

The strictest option: without Explorer the guest has neither a desktop nor a taskbar.

1. In the security profile, add a **File Name** restriction -- `explorer.exe`. For details, see [Security profiles](./../tutorials/client-shell/security-profiles.md).
2. Create a script task and assign it to the **User Login** event:

```
taskkill /im "explorer.exe" /f
```

> [!CAUTION]
>
> Without Explorer, maintenance mode does not work properly: there is no Windows desktop. Also, tasks and profiles that disable Explorer are a common cause of a black screen when the shell starts -- see [Black screen or slow Gizmo Client startup](./../tutorials/client-shell/client-startup-troubleshooting.md).

## Disable User Account Control (UAC)

Windows User Account Control (UAC) limits program permissions until an administrator approves them. Gizmo Server, which runs as a service, and Gizmo Client need administrator rights for some features, so we recommend turning UAC off on all PCs with Gizmo -- both on the server and on client PCs.

Registry script (script type **Registry Script**):

```
Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System]
"EnableLUA"=dword:00000000
```

By hand: press **Win + R**, type `regedit`, back up the registry (**File -> Export**), open the `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System` key and set the **EnableLUA** value to `0`.

Restart the PC after the change. To turn UAC back on, set **EnableLUA** to `1`.

## Change how long pop-up notifications stay on screen

How many seconds Windows shows notifications (including the Gizmo notification that time is running out):

```
REG add "HKCU\Control Panel\Accessibility" /v "MessageDuration" /t REG_DWORD /d "10" /f
```

Replace `10` with the number of seconds you need.

## More scripts

- Clearing launcher and browser logins after a session -- see [Cleaning up game and launcher sessions](./../tutorials/client-shell/session-cleanup.md).
- Folder redirection (junction) before a game is deployed -- see [How to set up deployment of Epic Games Launcher and Fortnite](./../tutorials/client-shell/epic-fortnite-deploy.md).
