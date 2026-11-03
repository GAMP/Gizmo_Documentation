---
title: How to set up achievements
order: 6
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
      In this guide you will learn
    </p>
    <h2 class="gx-title">How to create an achievement that marks a guest's progress in the club</h2>
    <div class="gx-meta">
      <span>10–15 minutes</span>
      <span class="gx-meta-sep">/</span>
      <span class="gx-meta-level">Low difficulty</span>
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

A guest has come to the club for the tenth time, played their hundredth hour or topped up the deposit with a large amount -- all of these are reasons to recognize them. Achievements in Gizmo capture such moments automatically: the system tracks the guest's actions and gives them an achievement when they meet the condition. The guest sees their achievements in Gizmo Client, and the club gets one more reason for people to come back.

An achievement is the basic element of the loyalty program. [Privilege levels](./ladder.md) -- automatically moving a guest to a group with better terms -- and [challenges](./challenges.md) -- tasks with a reward -- are built on it. That is why you start setting up the loyalty program with achievements. Below we will create the "Daily deposit top-up" achievement: a guest gets it if they top up their deposit by $20 or more in a day.

## Step 1. Create an achievement

1. Open **Marketing -> Achievements**. The achievements you have already created are shown on the left as badges -- with their name, status and signal.
2. Click **Add Achievement** in the top right corner -- the achievement card opens.

## Step 2. Fill in the general parameters

- **Enabled** -- turn it on, otherwise the achievement is not counted.
- **Hide from Clients** -- turn it on if guests should not see this achievement in Gizmo Client. They can still earn it.
- **Name** -- a required field, up to 45 characters. Both operators in Gizmo Manager and guests in Gizmo Client see it.
- **Description** -- write what the achievement is for: the guest sees this text in Gizmo Client.
- **Media** -- upload the achievement badge in JPEG, PNG or SVG format. SVG is the better choice: a vector icon looks equally sharp in all interfaces.

## Step 3. Set the achievement condition

In the **Achievement Parameters** block, specify what the guest gets the achievement for and how often.

1. **Signal** -- the event the system tracks. Available signals:
   - **Deposits Made**;
   - **Time in Apps** and **Time in Games**;
   - **Logins** -- how many times the guest logged in to Gizmo Client;
   - **Days Since Registration**;
   - **Points Earned** and **Points Spent**;
   - **Visits**;
   - **Money Spent** -- including deposits made.
2. **Period** -- the time span the signal is counted over: **Day**, **Week (calendar)** or **Month (calendar)**.
3. **Target Value** -- how much the guest needs to reach on the signal to get the achievement. The unit depends on the signal: for deposits it is an amount of money, for points it is a number of points.
4. **Max Completions per Period** -- how many times the guest can get this achievement in one period.

> [!IMPORTANT]
>
> **Example**
>
> Name: "Daily deposit top-up"\
> Signal: **Deposits Made**\
> Period: **Day**\
> Target Value: $20\
> Max Completions per Period: 1
>
> If the guest tops up their deposit by more than $20 in a day, they get the achievement. Even if the day's top-ups add up to $40, there will be only one achievement -- **Max Completions per Period** limits it.

> [!TIP]
>
> You can create your own signals -- for example, "Following the club's social media channel" -- through the plugin system.

## Step 4. Limit the schedule (optional)

By default, the achievement counts on any day. If it should work only on certain days and hours, set up the **Completion Schedule** block.

1. Click **Add Day** and choose the day of the week. Repeat for each day you need.
2. The whole day is added by default. To limit the time, clear the **All Day** checkbox and enter the **Start Time** and **End Time**.
3. To delete a day you do not need, click the trash icon in its row.

For example, for an "Early bird" achievement with the **Time in Games** signal, add all weekdays and limit the time to the morning hours on each -- then the achievement counts only for morning play on weekdays.

> [!NOTE]
>
> For some signals, for example **Days Since Registration**, you cannot choose a schedule.

## Step 5. Add filters (optional)

Filters narrow the completion condition: for example, count time only in one branch, or deposits only made with one payment method.

1. Click **Add Filter** and choose a filter. The set of filters depends on the signal:
   - for **Deposits Made** -- **Payment Method**;
   - for **Time in Games**, **Logins** and **Visits** -- **Host Group** and **Branch**;
   - for **Money Spent** -- **Branch**, **Product**, **Product Group** and **Payment Method**.
2. To edit a filter, click the pencil icon; to delete it, click the trash icon in its row.

The full table of which filters go with which signals is in the [Achievement card](./../../usage/gizmo-manager/marketing/achievements/achivement-card.md) article.

## Step 6. Save and check the achievement

1. Save the card.
2. Find the new achievement in the list -- the fastest way is through the **Signals** and **Statuses** filters or the search by name.
3. Click the badge -- a preview of the card opens on the right. Here you can also **Edit**, **Delete** or **Enable**/**Disable** the achievement. Double-clicking the badge opens the full card.

## Result

- The system tracks the selected signal and gives the guest the achievement as soon as they reach the target value, taking into account the set period, schedule and filters.
- If the achievement is not hidden, the guest sees its name, description and badge in Gizmo Client.
- You can use the achievement in [privilege levels](./ladder.md) and in [challenges](./challenges.md).

All fields are described in the [Achievements](./../../usage/gizmo-manager/marketing/achievements/_index.md) and [Achievement card](./../../usage/gizmo-manager/marketing/achievements/achivement-card.md) articles.
