---
title: Queues
order: 3.86
searchPhrases:
  - Queue
  - Waiting line
---

The section keeps the list of users waiting for a gaming station to become free. Use it when there are no free hosts: the administrator adds the user to the waiting line, and Gizmo calculates the expected time when the user can sit down.

The section opens from <cmd text="Queue"/> in the left menu.

## Tabs

Above the table are the tabs: **All** and one tab for each host group. They split the waiting line by type of gaming station: waiting for a specific zone is counted separately from waiting for any free host.

## Waiting users table

-  **Position** -- the place in the line. The lower the value, the sooner the user's turn comes.

-  **Username** -- the user in the line.

-  **User Group** -- the group the user belongs to. It defines the user's permissions and prices.

-  **Host Group** -- the gaming stations the user is waiting for.

-  **Time in Queue** -- how long the user has been waiting.

-  **Estimated Time** -- the expected moment when a suitable host becomes free.

-  **Planned Host** -- the gaming station that will become free first.

## Adding to the line

Click <cmd text="Add to Queue"/> in the top right corner and select the user and a suitable [host group](./stations/station-groups/_index.md).

> [!WARNING]
> 
> The narrower the selected group, the longer the wait: a user who accepts any host gets one sooner than a user waiting for a specific zone.
