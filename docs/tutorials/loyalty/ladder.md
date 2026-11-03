---
title: How to set up privilege levels
order: 7
---

<html>

<style>
  html, body { margin: 0; padding: 0; background: #1a1e33; font-family: 'Segoe UI', system-ui, -apple-system, Roboto, Arial, sans-serif; }
  @media (prefers-color-scheme: light) { html, body { background: #ffffff; } }
  * { box-sizing: border-box; }
  .gx-card { position: relative; width: 100%; border-radius: 18px; overflow: hidden; background: #232a4a; background-image: linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%); border: none; box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.04) inset; padding: 26px 32px 28px; font-family: 'Segoe UI', system-ui, -apple-system, Roboto, Arial, sans-serif; }
  .gx-card .gx-glow { position: absolute; inset: -30px -44px auto -60px; height: 200px; background: radial-gradient(45% 100% at 8% 0%, rgba(82, 110, 211, 0.28) 0%, rgba(82, 110, 211, 0) 72%); filter: blur(2px); pointer-events: none; }
  .gx-card .gx-card-content { position: relative; }
  .gx-card .gx-kicker { display: flex; align-items: center; gap: 8px; margin: 0 0 14px 0; color: #7c93e8; font-size: 12px; line-height: 1.3; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; }
  .gx-card .gx-kicker svg { flex: none; width: 15px; height: 15px; }
  .gx-card .gx-title { max-width: 560px; margin: 0 0 18px 0; color: #ffffff; font-size: clamp(22px, 3vw, 27px); line-height: 1.34; font-weight: 700; letter-spacing: -0.015em; }
  .gx-card .gx-meta { display: flex; align-items: center; color: rgba(255, 255, 255, 0.5); font-size: 11.5px; line-height: 1; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; }
  .gx-card .gx-meta-sep { margin: 0 12px; opacity: 0.4; }
  .gx-card .gx-meta-level { color: #86efac; }
  .gx-card .gx-meta-level.medium { color: #fde68a; }
  .gx-card .gx-meta-level.high { color: #fca5a5; }
</style>

<div class="gx-card">
  <div class="gx-glow"></div>
  <div class="gx-card-content">
    <p class="gx-kicker">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
      In this guide you will learn
    </p>
    <h2 class="gx-title">How to automatically move guests to groups with better terms for their achievements</h2>
    <div class="gx-meta">
      <span>20–30 minutes</span>
      <span class="gx-meta-sep">/</span>
      <span class="gx-meta-level high">High difficulty</span>
    </div>
  </div>
</div>

<script>
(function () {
  var LIGHT_BG = '#ffffff'; var DARK_BG = '#1a1e33';
  function applyBg() {
    var theme = document.documentElement.dataset.theme;
    if (theme !== 'light' && theme !== 'dark') { theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'; }
    var bg = theme === 'light' ? LIGHT_BG : DARK_BG;
    document.documentElement.style.backgroundColor = bg; document.body.style.backgroundColor = bg;
  }
  applyBg();
  new MutationObserver(applyBg).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyBg);
})();
</script>

</html>

Many clubs have statuses like "Newcomer", "Regular" and "VIP" -- the more a guest plays, the better their terms. If you manage such statuses by hand, the operator has to watch every guest and move them from group to group. Privilege levels do this automatically: the guest earns achievements, and the system moves them to the next level.

Each level is linked to a user group, and the group has its own privileges: a discount group, access to certain host groups, separate games and apps. So first we will prepare the groups and achievements, and then build a ladder of levels from them.

## Step 1. Prepare user groups for the levels

Each level needs its own user group -- guests who reach this level are placed into it. For example: "Newcomer", "Regular", "VIP".

1. Open **Users -> User Groups** and create the groups with the **Create Group** button. How to do this is described in [User groups](./../staff/user-groups.md).
2. In the card of each group, set its privileges:
   - in the **Discount Group** block -- a discount group. How to create a discount and a discount group is described in [Discounts and promotions](./discounts-and-promotions.md);
   - in the **Access** block -- the host groups members can use. This way you can, for example, open the VIP zone only to the top level;
   - in the **Overrides** block -- a separate app group or security profile;
   - in the **Loyalty** block -- loyalty points rewards; for more details, see [Loyalty points for customers](./loyalty-program.md).

All blocks are described in the [User group card](./../../usage/gizmo-manager/users/user-groups/user-group-card.md) article.

## Step 2. Create achievements

Levels are counted by achievements, so before you set up the ladder, create the achievements that will move the guest up: for example, "10 visits", "50 hours in games", "Spent $100". How to do this is described in [How to set up achievements](./achievements.md).

## Step 3. Choose the counting mode and the qualification period

Open **Marketing -> Ladder** -- this is where privilege levels are set up -- and set the general parameters.

1. **Counting Mode** -- how the system determines the guest's level:
   - **points** -- each achievement is given a number of points, and each level has a points threshold. The guest can collect the required sum of points with different achievements;
   - **requirements** -- each level has a list of achievements the guest must get.

   If the selected mode is not the current one, click **Activate Mode**.
2. **Qualification Period** -- the period over which the guest's achievements are counted: **Week**, **Month**, **Quarter** or **Year**.
3. **Promote Only at End of Season** -- off by default, and the level goes up as soon as the guest meets the conditions. If you turn it on, the promotion happens at the end of the season: the privileges in the current period depend on the achievements in the previous one.

> [!IMPORTANT]
>
> **Example.** The qualification period is a year.
>
> - **Promote Only at End of Season** is off: an achievement earned in 2025 is not counted when the level for 2026 is calculated.
> - **Promote Only at End of Season** is on: an achievement earned in 2025 does not raise the level in 2025, but it is counted when the level for 2026 is calculated.

## Step 4. Assign points to achievements (points mode)

You need this step only for the points counting mode -- the **Achievements** block is shown on the page only in this mode.

1. In the **Achievements** block, find the achievement you need with the search bar and add it to the list. The filter lets you show only active achievements.
2. For each achievement in the list, enter the number of points the guest gets for it.
3. To remove an extra achievement, use the **…** menu in its row. The same menu takes you to the achievement card.

## Step 5. Create levels

1. Click **Add Level** -- the level card opens.
2. Fill in the fields:
   - **Level Icon** -- shown in Gizmo Client;
   - **Level Name**;
   - **Target User Group** -- the group from step 1 that guests who reach the level are moved to automatically;
   - **Level Description** -- the guest sees it in Gizmo Client.
3. Set the condition for getting the level -- it depends on the counting mode:
   - in the points mode -- **Points Threshold**, how many points the guest needs to collect;
   - in the requirements mode -- **Requirements**, the list of achievements the guest needs to get.
4. Repeat for each level.

> [!NOTE]
>
> For the starting level in the requirements mode, no list of achievements is specified.

The levels you created are shown on the page as badges: number, name, user group and the points threshold or requirements. You can edit and delete a level through the **…** menu on the right side of the badge. In the requirements mode, you can move a level with the drag handle <icon code="grip-vertical" /> to the left of its number.

## Step 6. Turn on the system

Set the **System Status** to "Active". While the system is inactive, the guests' levels are not calculated.

## Level demotion

What the system does with a guest who did not collect enough points or achievements in the new qualification period:

> [!NOTE]
>
> This section is under development.

## Result

- The guest earns achievements, and the system counts them according to the selected mode over the qualification period.
- When the guest meets a level's condition, they are automatically moved to the target user group -- right away or at the end of the season, depending on the setting.
- Together with the group, the guest gets its privileges: discounts, access to zones, apps. They see the level icon and description in Gizmo Client.

All parameters are described in the [Ladder](./../../usage/gizmo-manager/marketing/lader/_index.md), [Ladder settings](./../../usage/gizmo-manager/marketing/lader/laders-card.md) and [Level card](./../../usage/gizmo-manager/marketing/lader/level-card/_index.md) articles.
