---
title: Gizmo Companion
order: 2
---

[Gizmo Companion](./../about/overview/gizmo-companion/_index.md) is installed on every PC used for sales. It connects the Gizmo server to the POS hardware: card terminals, barcode scanners, cash drawers and receipt printers.

## Which PC to install it on

-  **Point of sale** -- the PC where the administrator sells products and time products. One Companion per point of sale.

> [!NOTE]
>
> Companion connects to only one Gizmo server. If you need to work with several servers, each server needs its own Companion on a separate PC.

## Where to download

You download the installer in Gizmo Manager: **Settings -> Others -> About**, the **Downloads** block -> **Gizmo Companion**. See the [About](./../configure/others/about.md) article.

Use only the installer from Gizmo Manager or one you got from support -- do not download Companion from third-party sources.

## Installation

1. Run the installer on the point-of-sale PC as administrator.
2. Follow the steps of the setup wizard.
3. Restart the PC after installation.

After installation, the Companion interface opens from the desktop shortcut or at [localhost:8000](http://localhost:8000) in a browser on the same PC. It has these sections:

-  **Settings** -- the connection to the Gizmo server;

-  **POS Devices** -- barcode scanner, cash drawer, smart card reader;

-  **Receipt Printers**.

The Companion version is shown at the bottom of the interface page. Companion logs are in the Companion installation folder, in the `Logs` subfolder: server connection errors are visible there too.

## Updating

Companion does not update together with Gizmo Server. After you update the server, download a new installer in **Settings -> Others -> About** and reinstall Companion on every point of sale. See the [How to update Gizmo](./../tutorials/operations/update-gizmo.md) guide.

## What's next

Connect Companion to the server and link it to a register -- step by step in the [How to connect Companion and set up a register](./../tutorials/sales/register/companion-and-register.md) guide.
