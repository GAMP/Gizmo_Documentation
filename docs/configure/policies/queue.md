---
title: Queue
order: 1
---

**IMAGE: Settings -> Policies -> Queue page with the global settings, the per-host-group queue table and the priority list**

Here you set up the waiting line -- the system that lets users take a place in line for a host when all computers are busy.

## Global settings

Global settings apply to all host groups. They are shown as a table with three columns: **Feature**, **Enable** and **After Minutes**.

-  **Logout Grace Period** -- a user who has logged out can log in again to a host of the same group within the set number of minutes, skipping the line. This way a guest who restarted the PC or is moving to another seat does not lose their place because of the line. You can turn it on or off and set the duration in minutes.

-  **Next in Line Time** -- the time in minutes during which the next user in line has priority for an available host. If they do not log in within this time, the host also becomes available to the next user in line, but the first user can still log in to it.

-  **Removal Time** -- the time in minutes: if a host became available to a user and they did not log in within this time, they are removed from the line automatically.

-  **Remove User From All Queues on Login** -- when on, the user is automatically removed from all lines after logging in to a host.

## Queue

Here you set the line options for each host group.

The table has these columns:

-  **Host Group** -- the host group the settings apply to.

-  **Branch** -- the branch the host group belongs to.

-  **Removal Enabled** -- when on, users are automatically removed from this host group's line once the removal time runs out.

-  **Enable Next in Line** -- when on, the **Next in Line Time** mode is active for this host group.

-  **Enable Priorities** -- when on, this host group takes into account the user group priority set in the **Priority** block.

## Priority

Here you set the priority of user groups in the line -- groups with a higher priority get a place in line before the others.

To change the priority order, drag a user group by the drag handle <icon code="grip-vertical" /> to the position you need: the higher the group is in the list, the higher its priority.
