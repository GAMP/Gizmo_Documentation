---
title: Tariff card
order: 1
---

**IMAGE: the tariff card with the settings panel on the left and the weekly calendar chart on the right**

The tariff card opens when you create a new tariff or edit an existing one.

The card has two parts: the settings panel on the left and the calendar chart on the right.

## General

The **General** block holds the basic settings of the tariff profile. They apply by default to the periods that no schedule covers.

-  **Price profile name** -- the name of the tariff profile.

-  **Branches** -- the branches where the tariff applies. You can choose several.

-  **Host groups** -- the host groups the tariff applies to. You can choose several.

-  **Base tariff** -- the billing type:

   -  **Hourly** -- the charge is proportional to the time the host is used.

   -  **Step** -- the charge follows the steps you set, with separate rules for each interval.

### Hourly tariff

-  **Start fee** -- a fixed amount charged at the start of each new session on top of the hourly rate.

-  **Minimum fee** -- the minimum charge per session: a guest never pays less than this for a session, even after playing for a very short time.

-  **Hourly rate** -- the price of one hour on the host.

-  **Charge every (minutes)** -- the interval in minutes at which the charge is applied.

-  **Free minutes** -- the number of minutes at the start of a session that are not charged at the hourly rate. The start fee and the minimum fee still apply from the first minute.

### Step tariff

A step tariff lets you set different billing rules for consecutive time intervals of one session.

For each step you set:

-  **Step minute** -- the session minute from which this step applies.

-  **Action** -- what happens when the step is reached (for example, **Charge**).

-  **Charge** -- the amount charged when the step is reached.

-  **Hourly rate** -- the hourly rate that applies within this step.

-  **Target minute** -- for the **Return to minute** action: the minute billing returns to when the step is reached. It must be less than the step minute.

Example of **Return to minute**: the step minute is 40 and the target minute is 22. The 40th minute of the session is then billed as the 22nd, the 41st as the 23rd, and so on. When the 40th minute of the cycle comes again (the 58th minute of the session), billing returns to the 22nd minute again. This way you can, for example, repeat a discounted block of minutes in a loop.

To add a new step, click <cmd text="+ Create Step"/>. To delete a step, click <cmd text="Delete"/> inside its card.

## Schedules

Schedules let you set tariff terms that differ from the base ones for specific time intervals during the week.

To create a schedule, click <cmd text="Create Schedule"/> at the bottom of the panel. It appears as a separate block in the panel on the left and on the calendar chart on the right.

Each schedule has the same billing settings as the **General** block (hourly or step tariff). You can delete it with the trash icon button.

## Calendar chart

The calendar chart shows the weekly schedule of the tariff: rows are the days of the week, columns are the hours of the day (from 00:00 to 24:00).

-  Gray blocks are labeled **General** -- in these periods the base tariff from the **General** block applies.

-  Colored blocks are the schedules you created -- in these periods their tariff terms apply.

To assign a schedule to an interval, select the period on the chart: hold down the left mouse button and drag along the time scale in the row of the day you need.

To delete the tariff, click <cmd text="Delete"/> in the top right corner of the page.
