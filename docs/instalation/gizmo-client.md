---
title: Gizmo Client
order: 1
---

[Gizmo Client](./../about/overview/gizmo-client.md) is installed on every gaming PC in the club. It is the shell where the guest logs in to their account, launches games and buys time.

## Before you install

Minimum requirements for a gaming PC:

- Windows 8 or later;
- screen resolution of at least 1280×1024;
- the Microsoft Edge WebView2 component -- the Gizmo Client shell runs on it;
- a CPU with 4 or more cores at 2.6 GHz, 4 GB of RAM and 8 GB of free disk space -- not counting games.

Also check that:

- Gizmo Server is installed and running, and the club is set up in Gizmo Manager -- see [Quick install](./quick-install.md).
- In **Settings -> Server -> Network -> Connection Rules**, **Auto Discovery** and **Hostname Recovery** are turned on -- otherwise the PCs will not connect to the server automatically. See the [Network](./../configure/server/network.md) article.
- The gaming PCs are on the same local network as the server.

> [!NOTE]
>
> You can also connect Gizmo Client to a server outside the local network, but then you need to enter the server address in Gizmo Client. For details, see **[LINK: connecting Gizmo Client to a server outside the local network]**.

## Where to download

You download the installer in Gizmo Manager: **Settings -> Others -> About**, the **Downloads** block -> **Gizmo Client**. See the [About](./../configure/others/about.md) article.

Always take the installer from Gizmo Manager: this way the client version is compatible with your server.

## Installation

1. Copy the installer to all gaming PCs.
2. Run it and go through all the steps -- you don't need to change the default options. After installation, the shell starts on its own.
3. In Gizmo Manager, open **Hosts -> Computers** -- all PCs that have connected to the server appear here.
4. Open each PC and set its number, **Branch**, **Host Group** and **Layouts**. After that, the PCs appear on the **Map**.

More about assigning PCs -- see the "Step 4. Connect the hosts" section of the [Quick install](./quick-install.md) guide and the [Computers](./../usage/gizmo-manager/stations/computers/_index.md) article.

> [!CAUTION]
>
> If a PC does not connect to the server, go through the checklist in the [Client PC connection issues](./../tutorials/client-shell/client-connection-troubleshooting.md) guide. If the shell hangs on a black screen, see [Black screen or slow Gizmo Client startup](./../tutorials/client-shell/client-startup-troubleshooting.md).

## Updating

Usually Gizmo Client updates itself: if **Automatic Shell Update** is turned on in **Settings -> Client -> Shell -> System**, the client updates when a new server version requires a client update. See the [Shell](./../configure/client/shell.md) article.

**If the client did not update automatically**, update it manually:

1. In **Settings -> Client -> Shell -> System**, turn off **Automatic Shell Update** and save.
2. Restart the client PC -- the client should not try to update.
3. Remove Gizmo Client through maintenance mode -- see the [How to minimize, disable or remove the shell](./../tutorials/client-shell/remove-shell.md) guide.
4. Download a fresh installer in **Settings -> Others -> About** and install the client again.
5. Turn **Automatic Shell Update** back on.

The client version on each PC is shown in **Hosts -> Computers**, in the **Version** column. How to update the whole Gizmo system -- see the [How to update Gizmo](./../tutorials/operations/update-gizmo.md) guide.
