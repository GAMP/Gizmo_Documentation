---
title: Files
order: 3
---

The tab transfers files between the operator's machine and the club's client hosts.

Use this tab to spread files across the hosts without walking around the room: put saves, configs or installers on the gaming stations and take something back.

The left column with the host list and host actions is the same on all tabs of the section and is described in [Management](./_index.md).

## Two panes

The work area is split into two file manager panes.

-  **This Device** -- the files of the machine where Gizmo Manager is open.

-  **Host** -- the files of the selected host. Until a host is selected, the pane shows "No host selected".

Between the panes are two arrows: the right one sends the checked files to the host, the left one takes them from the host.

## Pane layout

Both panes work the same way.

-  **Drive** -- selects the drive.

-  **Navigation bar** -- the "back", "forward" and "up one level" arrows, the refresh icon and the field with the current path. The pencil icon to the right of the field lets you type the path manually.

-  **Search in:** -- searches the contents of the open folder.

-  **File list** -- the **Name**, **Type**, **Size** and **Date Modified** columns. The checkbox in the header checks the whole folder content at once.

-  **Counter** -- the line under the list, shows how many files and folders the folder contains.

The pane header has the new folder icon, the <cmd text="..."/> icon with more actions and the <cmd text="Upload"/> button.

## Transfer log

The bottom part of the tab. It is split into three lists by transfer state, with the count next to each name:

-  **Active** -- transfers in progress right now;

-  **Successful** -- completed transfers;

-  **Failed** -- transfers that did not go through.

The <cmd text="Cancel All"/> button stops all current transfers.

-  **Action** -- what is being done: sending a file or receiving it.

-  **Source** -- where the file comes from.

-  **Destination** -- where the file goes.

-  **Progress** -- the transfer progress.

-  **Date** -- when the transfer started.
