---
title: Hosts
order: 0.280001
---

This page lists all the club's gaming stations and has tabs with their settings. The main list shows brief information: number, name, branch, group, network data and the linked controller. The other tabs control how stations are grouped, what runs on them and what a guest is allowed to do.

## Sections

-  [Computers](./computers/_index.md) -- gaming PCs running Gizmo Client.

-  [Endpoints](./terminals/_index.md) -- stations without a direct connection: consoles, pool tables, simulators.

-  [Controllers](./controllers/_index.md) -- HDMI signal control devices linked to stations.

-  [Host Groups](./station-groups/_index.md) -- groups of stations that assign tariffs, the shell theme and the security profile.

-  [Layouts](./sloi-karty/_index.md) -- where stations are placed on the [club map](./../map/_index.md).

-  [Apps Groups](./gruppy-prilozheniy/_index.md) -- sets of apps assigned to host groups.

-  [Apps](./prilozheniya/_index.md) -- games and programs, their executables, licenses and deployments.

-  [Security Profiles](./profili-bezopasnosti/_index.md) -- restrictions on what a guest can do at the PC.

-  [Assets](./tipy-oborudovaniya.md) -- an inventory list of the club's equipment.

-  [Tasks](./zadachi.md) -- actions Gizmo performs on a station: start a process, run a script, show a notification.

-  [Task Activations](./task-activations.md) -- events or triggers that start tasks.

## What this section is for

This is where the club manages its gaming floor. On this page you:

-  add new stations and edit existing ones;

-  assign stations to branches, groups and layouts;

-  link controllers to stations that need time control;

-  set which apps are available on stations and what a guest is allowed to do;

-  keep an inventory of equipment and set up automatic tasks.

> [!NOTE]
> 
> The group a host belongs to sets its prices, its shell theme and the guest's permissions -- [host groups](./station-groups/_index.md) link a station to [tariffs](./../../../configure/finance/tariffs/_index.md), a theme and a security profile.

## What the page consists of

**Tab bar** -- at the top, under the section name. Switches between the list of hosts and eleven groups of settings.

**Create button** -- in the top right corner. Its label changes with the tab: on **Computers** it is <cmd text="Create Computer"/>, on **Endpoints** it is <cmd text="Create Endpoint"/>.

> [!NOTE]
> 
> A computer is added **automatically or by you**: when Gizmo Client connects to the server for the first time, the PC appears in the list.

**Action bar** -- above the list on the left. Shows how many hosts are selected and has the <cmd text="Edit"/> and <cmd text="Delete"/> buttons.

**Filters** -- above the list on the right: **Branch**, **Host Group**, **Layout**. They narrow the list down to the part of the floor you need.

**Host list** -- the main table:

-  **Number** -- the station's number on the floor. Guests use it to find their PC.

-  **Name** -- the host's name in the system.

-  **Hostname** -- the PC's network name.

-  **Branch** -- the club the station belongs to.

-  **Host Group** -- the group the host gets its tariffs and permissions from.

-  **Layouts** -- the layout of the [club map](./../map/_index.md) the station is shown on.

-  **IP Address** and **MAC Address** -- the PC's network data.

-  **Version** -- the Gizmo Client version on the PC.

-  **Controller** -- the linked signal control device, if there is one.

> [!IMPORTANT]
> 
> Hosts differ only in whether Gizmo can control them directly.
>
> -  **Computer** -- a gaming PC with Gizmo Client installed. The server controls it fully: it starts the session, tracks time, provides the game list, locks the PC when the paid time is over, and more.
>
> -  **Endpoint** -- a gaming station that cannot be connected to technically: a console, a pool table, a simulator. Gizmo does not control it directly, but tracks its time and sales so that the station still shows up in the register and in reports.

> [!WARNING]
> 
> Important: endpoints and controllers are created **only manually**.

Besides the hosts themselves and the settings sections, you can filter, group and search hosts by the criteria you need. Tips for working with the host list:

1. Click a column ("Number", "Name" and others) to group the host list by that column.

2. Select hosts by checking the boxes next to them: this way you can edit several hosts at once -- for example, move them from one host group to another or delete them. The edit and delete buttons are above the main host list.

3. Double-click a host to open its edit window.

4. Use the filter buttons on the right above the list to find hosts by category, layout or branch.
