---
title: Achievement card
order: 1
aliases:
  - path: >-
      usage/gizmo-manager/marketing/achievements/kartochka-sozdaniya-dostizheniya
    moved: "2026-10-19T09:04:26Z"
---

The card holds all the parameters of one achievement: general information, the completion condition, the schedule and the filters.

The card opens with the <cmd text="Add Achievement"/> button on the **Achievements** tab. For an existing achievement, double-click its badge or click <cmd text="Edit"/> in the preview.

## General parameters

-  **Enabled** -- whether the achievement is active. An inactive achievement is not counted.

-  **Hide from Clients** -- if on, the achievement is not shown in the Gizmo Client interface. Users can still earn this achievement, but they do not see it in the Gizmo Client interface.

-  **Name** -- the achievement name, shown in the Gizmo Client and Gizmo Manager interfaces. Required. The maximum length is 45 characters.

-  **Description** -- the achievement description. Enter detailed information about the achievement here: this field is also shown in Gizmo Client.

-  **Media** -- the achievement badge. Supported formats: JPEG, PNG, SVG. SVG is strongly recommended: it is a vector format and looks equally good in all interfaces of the system.

## Achievement parameters

-  **Signal** -- the main parameter the achievement reacts to. A signal is the trigger parameter the system uses to calculate the achievement. The available signals:

   -  **Deposits Made** -- the total amount of deposits the user made.

   -  **Time in Apps** -- the total time the user ran a given app.

   -  **Time in Games** -- the total time the user ran a given game.

   -  **Logins** -- the total number of the user's logins to Gizmo Client.

   -  **Days Since Registration** -- the number of days since the user registered.

   -  **Points Earned** -- the total number of points the user earned.

   -  **Visits** -- the total number of the user's visits.

   -  **Points Spent** -- the total number of points the user spent.

   -  **Money Spent** -- the total amount of money the user spent (including deposits made).

   > [!TIP]
   >
   > You can create your own signals with the plugin system, for example a "Follows the club on social media" signal.

-  **Period** -- the period over which the achievement signals are calculated. The available periods:

   -  **Day**.

   -  **Week** (calendar week).

   -  **Month** (calendar month).

-  **Target Value** -- the signal value. Each signal uses its own measure: for example, for the **Points Earned** signal, the target value is the minimum number of points the user must earn to get this achievement.

-  **Max Completions per Period** -- the maximum number of times the user can get the achievement in the specified period.

   > [!IMPORTANT]
   >
   > **Example**
   >
   > An achievement is created with the following parameters:
   >
   > **Achievement parameters**\
   > Name: "Daily deposit top-up"\
   > Signal: **Deposits Made**\
   > Period: **Day**\
   > Target value: $20\
   > Max completions per period: 1\
   > \
   > **Result**\
   > If the customer tops up the deposit by more than $20 in a day, they get this achievement. If the top-ups for the day add up to $40, the customer still gets only one achievement -- this is limited by the **Max Completions per Period** parameter.

## Completion schedule

The schedule limits the period in which users' achievements are counted.

If the schedule is empty, all days are counted.

For some signals, such as **Days Since Registration**, you cannot set a schedule.

To add a schedule, click <cmd text="Add Day"/> and select a day of the week.

By default the whole day is added. To limit the completion time, clear the **All Day** checkbox and set the **Start Time** and **End Time**.

To remove a day of the week, click the trash icon in that day's row.

> [!IMPORTANT]
>
> **Example**
>
> You set up an "Early bird" achievement with the **Time in Games** signal and want it to count only on weekdays and only in the morning. To do this, add all weekdays and set a time limit for each day. Then the achievement counts for the user only if it is completed in the morning on weekdays.

## Filters

Besides the completion schedule, you can add more filtering of the completion conditions.

To add a filter, click <cmd text="Add Filter"/>.

To edit a filter, click the pencil icon in its row.

To delete a filter, click the trash icon in its row.

The set of available filters depends on the signal.

The table shows which filters are available for each signal.

<table header="row">
  <tr><td>Signal</td><td>Filters</td></tr>
  <tr>
    <td>Deposits Made</td>
    <td>
      - Payment Method
    </td>
  </tr>
  <tr>
    <td>Time in Apps</td>
    <td>
      - Host Group
      - Branch
      - App
      - App Executable
      - App Group
      - App Category
    </td>
  </tr>
  <tr>
    <td>Time in Games</td>
    <td>
      - Host Group
      - Branch
    </td>
  </tr>
  <tr>
    <td>Logins</td>
    <td>
      - Host Group
      - Branch
    </td>
  </tr>
  <tr><td>Days Since Registration</td><td>\-</td></tr>
  <tr>
    <td>Points Earned</td>
    <td>
      - Branch
      - Product
      - Product Group
    </td>
  </tr>
  <tr>
    <td>Visits</td>
    <td>
      - Host Group
      - Branch
    </td>
  </tr>
  <tr>
    <td>Points Spent</td>
    <td>
      - Branch
      - Product
      - Product Group
    </td>
  </tr>
  <tr>
    <td>Money Spent</td>
    <td>
      - Branch
      - Product
      - Product Group
      - Payment Method
    </td>
  </tr>
</table>
