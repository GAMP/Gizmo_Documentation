---
title: How to set up challenges
order: 8
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
      In this guide you will learn
    </p>
    <h2 class="gx-title">How to create a challenge with a reward for completed achievements</h2>
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

Achievements mark what a guest has already done, while challenges push them to do something more: "come five times this month and get an hour of play as a gift". A challenge is a set of achievements; when the guest completes it, they get a reward: points, a product or time. You can limit a challenge by dates and by the number of completions, and give the reward automatically or manually at the operator's desk.

Below we will create the "Top-up week" challenge: a guest who has got the "Daily deposit top-up" achievement five times gets 100 points.

## Step 1. Prepare the achievements

A challenge is put together from achievements you have already created. If the achievements you need do not exist yet, create them as described in [How to set up achievements](./achievements.md).

## Step 2. Create a challenge

1. Open **Marketing -> Challenges**. The table shows the challenges you have already created: name, status, start and end dates, and availability -- how many completions are left.
2. Click **Create Challenge** in the top right corner -- the challenge card opens.
3. Fill in the main fields:
   - **Enabled** -- the challenge status;
   - **Name**;
   - **Hide from Clients** -- turn it on if guests should not see the challenge.
4. Choose the **Window Type** -- when the challenge applies:
   - **Open-ended** -- no date limits;
   - **Windowed** -- enter the **Start** and **End** of the challenge.

## Step 3. Set the requirements

The **Requirements** field lists the achievements the guest must get, and how many times.

1. Select an achievement from the list.
2. Enter the quantity -- 5 in our example.
3. Click **Add**. Repeat for other achievements if the challenge consists of several.

To remove an achievement added by mistake, click **X** on its badge.

## Step 4. Limit the number of completions

In the **Completions and Limits** block, set:

- **Max Completions per Client** -- how many times one guest can complete the challenge;
- **Max Total Completions** -- how many times all guests together can complete the challenge. Leave the field empty if you do not need a limit. For example, for "the first 50 guests get a prize", enter 50.

## Step 5. Add rewards

In the **Rewards** block, specify what the guest gets for completing the challenge. You can add as many rewards as you like, including rewards of different types.

1. Choose the **Reward Type**:
   - **Points** -- enter the number of points;
   - **Product** -- select a product and enter the quantity;
   - **Time** -- enter the amount of time.
2. If the operator should hand out the reward, mark that it is given manually. Otherwise, the guest gets it automatically.
3. Click **Add**.

To remove an extra reward, click **X** on its badge.

How the operator gives a reward manually when the guest comes to the front desk:

> [!NOTE]
>
> This section is under development.

## Step 6. Add an image and save

1. In the **Media** block, upload the challenge image -- guests see it in Gizmo Client.
2. Save the challenge.

## Step 7. Manage challenges

The actions for a challenge are in the **…** menu in its row: **Edit**, **Disable**, **Hide from Clients**, **Delete**. Double-clicking the row also opens the card. To delete several challenges at once, select them with checkboxes -- the checkbox in the table header selects all.

> [!WARNING]
>
> A challenge is an offer to the guest. If a guest completed the challenge before you edited it, it stays completed for them regardless of the new conditions.

## Result

- The guest sees the challenge in Gizmo Client if it is enabled and not hidden.
- When the guest gets all the required achievements the required number of times, the challenge is completed and they get the reward -- automatically or from the operator.
- The challenge can no longer be completed after the end date or after the completion limits run out.

All parameters are described in the [Challenges](./../../usage/gizmo-manager/marketing/challenges/_index.md) and [Challenge card](./../../usage/gizmo-manager/marketing/challenges/challange-card.md) articles.
