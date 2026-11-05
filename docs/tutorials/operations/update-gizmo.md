---
title: How to update Gizmo
order: 1.8
---

New Gizmo versions fix bugs and add features. Club settings and data are stored in the database and are kept when you update within V3.

This guide is for Gizmo Server on Windows. If you are moving from Gizmo V2, use the [Migration to v3](./../migration-to-v3.md) guide.

## What to update

| Component | How it is updated |
|---|---|
| **Gizmo Server** | Manually: install the new version over the old one -- steps 3--5 |
| **Gizmo Manager** | No update needed. The Manager opens in a browser and is updated together with the server, also when it is [installed as an app](./../gizmomanager-as-an-app.md) |
| **Gizmo Client** | Automatically, if automatic shell update is on -- step 6 |
| **Gizmo Companion** | Manually at each point of sale -- step 7 |

## Step 1. Check whether you need an update

Compare the installed version with the latest one in the [Change log](./../../change-log/_index.md) and read what has changed.

Where to see the current versions:

- **Gizmo Server** -- **Settings -> Others -> About**, **Version** block. For details, see [About](./../../configure/others/about.md).
- **Gizmo Client** -- **Hosts -> Computers**, the **Version** column for each PC. For details, see [Computers](./../../usage/gizmo-manager/stations/computers/_index.md).
- **Gizmo Companion** -- at the bottom of the Companion interface page on the point-of-sale PC.

## Step 2. Back up the database

If something goes wrong, the database copy returns the club to its original state. For how to make a copy manually or set up automatic backup, see [Backup](./../../configure/server/backup.md).

> [!TIP]
>
> Update outside business hours or when the club has the fewest guests: while the server is updating, client PCs lose connection to it.

## Step 3. Stop Gizmo Server

- **If the server runs as a service** -- open ConfigurationTool (`C:\Program Files\NETProjects\Gizmo Server\tools\configuration`), go to the **"Gizmo Service Management"** section and stop the service.
- **If the server runs as a console application** -- close the console window.

If you do not know how your server runs, see [Run Modes](./../../usage/gizmo-server/run-modes.md).

## Step 4. Install the new version

1. Download the latest [Gizmo Server installer for Windows](https://gizmopowered.net/downloads/v3/latest/GizmoServiceSetup.exe).
2. Run it on the server PC and install the new version over the old one.

> [!NOTE]
>
> If you made your own skin based on the default one, the installer does not update it. After the update, copy the changes from the files of the new default skin to your skin manually. Skins are in the `C:\Program Files\NETProjects\Gizmo Server\skins` folder.

## Step 5. Start Gizmo Server

- **Service** -- in ConfigurationTool, in the **"Gizmo Service Management"** section, start the service.
- **Console application** -- start the server with the desktop shortcut or from the `C:\Program Files\NETProjects\Gizmo Server` folder.

Open Gizmo Manager in a browser and check the version in **Settings -> Others -> About**. If the browser still shows the old page, reload it (Ctrl + F5).

## Step 6. Update the client PCs

1. Check that **Automatic Shell Update** is turned on in **Settings -> Client -> Shell -> System**. Then Gizmo Client updates itself when the new server version requires a client update. For details, see [Shell](./../../configure/client/shell.md).
2. Turn on or restart the client PCs.
3. In **Hosts -> Computers**, make sure the **Version** column shows the new client version for all PCs.

If a PC did not update, reinstall Gizmo Client on it manually: download the installer in **Settings -> Others -> About**, **Downloads** block -> **Gizmo Client**. For details, see [Gizmo Client](./../../instalation/gizmo-client.md).

## Step 7. Update Gizmo Companion

Companion is not updated together with the server -- you need to reinstall it manually at each point of sale:

1. Download the new installer in **Settings -> Others -> About**, **Downloads** block -> **Gizmo Companion**.
2. Install it on the point-of-sale PC -- see [Gizmo Companion](./../../instalation/gizmo-companion.md).
3. Check that the version at the bottom of the Companion interface page has changed, and that the companion has the **Connected** status in **Settings -> Server -> Companions**.

## Step 8. Check that the club works

1. Open Gizmo Manager and go to the **Map**: the gaming stations must be online.
2. Check the settings affected by the changes in the Change log.
3. In **Settings -> Server -> Companions**, check that the companions have the **Connected** status.

## Result

Gizmo Server, the client PCs and Companion run the new version, Gizmo Manager opens already updated, and the club's data and settings are kept.

If something works differently after the update, [contact support](./../../about/support.md).
