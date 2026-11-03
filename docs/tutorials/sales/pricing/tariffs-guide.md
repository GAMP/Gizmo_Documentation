---
title: Tariffs
order: 1
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3h8l10 10-8 8L3 11z"/><circle cx="8" cy="8" r="1.5"/></svg>
      In this guide you will learn
    </p>
    <h2 class="gx-title">How to set up hourly tariffs</h2>
    <div class="gx-meta">
      <span>15–20 minutes</span>
      <span class="gx-meta-sep">/</span>
      <span class="gx-meta-level medium">Medium difficulty</span>
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

Tariffs are how the club earns money every hour: a tariff sets the hourly price for a gaming zone, and schedules let you change that price in the evenings or on weekends. Before you create a tariff, decide which gaming zones will have their own price.

## Step 1. Create a tariff for a gaming zone

Go to <cmd text="Settings"/> -> <cmd text="Finances"/> -> <cmd text="Tariffs"/>. Two tariffs are already there by default -- "Prices for Hosts" and "Prices for Endpoints". You can use them or create new ones.

1. Open a tariff (or create a new one) and give it a clear name, for example Standard.
2. Specify the branch (the main one by default) and the host group the tariff applies to. If the tariff is called Standard, link it to the Standard host group. If one price applies to several zones, select all the groups you need.
3. Fill in the **Start fee** and the **Minimum fee**. The start fee is a fixed amount charged at every login, like a club fee, without adding any time. The minimum fee is the minimum charge for a session: the guest never pays less than this amount for a session, even after playing for a very short time. Unless your club's model requires otherwise, **we recommend leaving both fields at 0**.
4. Enter the price of an hour in the **Hourly rate** field -- this is the amount charged to the guest for an hour of play.
5. You need the **Charge every (minutes)** and **Free minutes** fields only if you want to give the guest a little free time at the start of a session -- for example, so that they have time to top up their balance. In that case, set **Charge every (minutes)** to 1 and **Free minutes** to the number you need (for example, 5 for five free minutes).

**IMAGE: the tariff card in Settings -> Finances -> Tariffs with the branch, host group, start fee, minimum fee, hourly rate and free minutes fields filled in**

> [!TIP]
>
> Besides a simple hourly tariff, there is a step tariff -- the price changes depending on which minute of the session the guest is in (for example, the first 30 minutes cost more and the rest cost less). The details are in the same article, [Tariff card](./../../../configure/finance/tariffs/tariff-card.md).

The full list of the tariff card fields is in the [Tariff card](./../../../configure/finance/tariffs/tariff-card.md) article.

## Step 2. Add a schedule with a different price

If the price should be different in the evenings or on weekends, use schedules -- time slots in which the tariff temporarily changes and then returns to normal.

For example, you want a price of $4 instead of the usual $3 to apply from 17:00 on Friday to 8:00 on Monday.

1. Click <cmd text="Create Schedule"/> and open it.
2. Fill in the fields the same way as in the main tariff, but enter the price you need -- $4 in this example.
3. In the chart on the right, use the mouse to mark the days and hours when this schedule applies.

**IMAGE: a tariff schedule with a different hourly rate and the Friday evening to Monday morning period marked on the weekly chart**

## Step 3. Repeat for the other zones

Create a tariff for each gaming zone of the club using the same steps.

> [!NOTE]
> 
> This is a guideline, not a complete pricing guide -- how exactly to build hourly and daily prices for your particular club is best decided on your own, based on occupancy and other factors.

## Result

- Each gaming zone has its own tariff: the guest is charged the zone's **Hourly rate** for each hour of play.
- On the days and hours marked in the schedule, the tariff temporarily applies a different price and then returns to the usual one.
