---
title: Tasks
order: 2
---

The tab runs prepared tasks on client machines -- scripts, notifications, folder redirects and other actions.

Use this tab for one-off manual runs: send a message to all machines in the room, run a script on one host, apply an action to a whole group. The tasks themselves are created and set up on the [Tasks](./../stations/zadachi.md) tab of the **Hosts** section, and their automatic run schedule on the [Task Activations](./../stations/task-activations.md) tab. Here tasks are only run.

The left column with the host list and host actions is the same on all tabs of the section and is described in [Management](./_index.md). Until a host is selected, the work area shows "No host selected".

## Running a task

-  **Run Task** -- the list of prepared tasks. Select the one you need.

-  <cmd text="Execute"/> -- the button in the top right corner. Sends the selected task to all checked hosts. Until a task and hosts are selected, the button is unavailable.

## Logs

A collapsible bar at the bottom of the tab. It shows how the tasks sent to the hosts ended: next to the name you see the number of active tasks and the number of failed ones. The <cmd text="Clear Log"/> button clears the list.
