---
title: Processes
order: 1
---

The tab shows the programs running on the selected client machine. It opens first when you go to the section.

Use this tab to understand what is happening on a guest's host without walking up to it: see the CPU load, find the program you need in the list and end a frozen one.

The left column with the host list and host actions is the same on all tabs of the section and is described in [Management](./_index.md). Until a host is selected, the work area shows "No host selected".

## Process list filters

They are in the bar above the process list.

-  **Host** -- the host whose processes are shown.

-  **Process Name** -- leaves the processes whose name matches the text you enter.

## Indicators

They are on the right side of the same bar and refer to the selected host.

-  **CPU** -- the host's CPU load in percent.

-  **Processes** -- how many processes are running on it.

## Refreshing the list

The <cmd text="Refresh"/> button in the top right corner of the work area reloads the list immediately. The arrow next to the button sets how often the list refreshes by itself:

-  **High Refresh Rate**;

-  **Medium Refresh Rate**;

-  **Low Refresh Rate**;

-  **Paused** -- the list refreshes only manually, with the button.

## Logs

A collapsible bar at the bottom of the tab. It shows how the commands sent to the hosts ended: next to the name you see the number of active commands and the number of failed ones. The <cmd text="Clear Log"/> button clears the list.
