---
title: Management
order: 3.992
searchPhrases:
  - Management
  - Processes
  - Remote access
---

This page brings together the tools for working remotely with the club's client machines: the list of programs running on them, running prepared tasks and transferring files. The left column with the host list and host actions is the same on all three tabs.

## Sections

-  [Processes](./processes.md) -- the programs running on the selected host and its CPU load.

-  [Tasks](./tasks.md) -- running prepared tasks manually on the checked hosts.

-  [Files](./files.md) -- transferring files between the operator's machine and the hosts.

## What the section is for

From here the club solves problems on a host without walking up to it. On this page you can:

-  see what is running on a guest's machine and end a frozen program;

-  turn hosts on and off and restart them;

-  restart the client shell;

-  connect to a host's desktop;

-  run prepared tasks;

-  transfer files to and from hosts.

## Host list and host actions

It takes up the left column and is the same on all three tabs.

### Host filters

They are in the bar above the work area and narrow down the list of machines.

-  **Branch** -- leaves the hosts of the selected branch.

-  **Host Group** -- leaves the hosts of the selected [host group](./../stations/station-groups/_index.md).

Both conditions are cleared with the <cmd text="Clear All"/> link.

### Selecting hosts

Hosts are grouped by host group; click a group's name to expand or collapse it. The <cmd text="Collapse All"/> link collapses all groups at once, and the **Select all Hosts** checkbox checks all hosts in the list.

### Actions

The bar above the list. On the left is the counter of checked hosts, and to its right are the action icons. Until you check at least one host, the actions are unavailable.

-  **Shut Down** -- shuts the host down.

-  **Turn On** -- turns the host on.

-  **Restart** -- restarts the host.

-  **Remote Access** -- opens the host's remote desktop.

-  **View** -- shows the host's screen.

The <cmd text="..."/> icon opens the same actions grouped by purpose and adds two more.

-  **Hosts** -- **Shut Down**, **Turn On**, **Restart**.

-  **Shell** -- **Restart Shell**.

-  **System** -- **Remote Access**, **User Card**.

Working with the remote desktop is described in detail in [Remote access](./../map/remote-access.md).

## What the page consists of

The section has three tabs, and **Processes** opens first.

<view defs="hierarchy=none" display="List"/>
