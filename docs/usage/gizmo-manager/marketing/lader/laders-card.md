---
title: Ladder settings
order: 1
---

**IMAGE: Ladder tab with the general settings, level badges and the achievements block**

This page describes the ladder settings on the **Ladder** tab: the general parameters, the levels and the achievements that earn points.

## General settings

- **System Status** (active/inactive) -- if the system is inactive, users' ladder levels are not calculated.
- **Counting Mode** (points/requirements) -- the counting modes are described in detail on the main [Ladder](./_index.md) page. If the selected counting mode is not the current one, the <cmd text="Activate Mode" /> button becomes available.
- **Qualification Period** -- the period over which the user's achievements are counted. The available values:
  - **Week**.
  - **Month**.
  - **Quarter**.
  - **Year**.
- **Promote Only at Season End** (on/off) -- off by default, and the user's ladder level goes up right away. If you turn this parameter on, promotion happens at the end of the season: the benefits in the current period depend on the achievements of the previous period.

  > [!IMPORTANT]
  >
  > **Example 1.**
  >
  > Qualification period -- year.\
  > Promote only at season end -- **off**.
  >
  > The user got an achievement in 2025. In 2026 this achievement is not counted in the user's ladder level calculation.
  >
  > \
  > **Example 2.**
  >
  > Qualification period -- year.\
  > Promote only at season end -- **on**.
  >
  > The user got an achievement in 2025. In 2025 this achievement is not counted in the user's ladder level calculation, but it is counted in the user's ladder level for 2026.

## Levels

To create a level, click <cmd text="Add Level" />. The [Level card](./level-card/_index.md) opens.

Created levels are shown on the page as badges. A badge shows the level number, the level name and the level's user group -- the group users move to when they reach this level. The buttons to edit and delete the level are in the **"…"** menu on the right side of the badge.

The set of extra level elements depends on the selected counting mode.

### Counting mode -- by points earned for achievements

- **Points Threshold** -- the number of points the user needs to reach this ladder level.

### Counting mode -- by achievements earned

- **Requirements** -- the list of achievements the user needs to reach this ladder level.
- **Move level button** -- to the left of the level number.

## Achievements

The block is shown only in the counting mode by points earned for achievements.

The block has:

- A filter for the displayed achievements (active only).
- A search bar to find achievements and add them to the list.
- The list of added achievements. A list row shows the achievement name, signal, calculation period and status (hidden, inactive), and the number of points awarded for this achievement -- you can edit it. The buttons to open the achievement card and to remove the achievement from the list are in the **"…"** menu on the right side of the row.
