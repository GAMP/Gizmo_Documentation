---
title: Time packages
order: 2
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="M3 8l9 5 9-5"/><line x1="12" y1="13" x2="12" y2="21"/></svg>
      In this guide you will learn
    </p>
    <h2 class="gx-title">How to create a time product</h2>
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

Time products bring the club more than ordinary hourly billing -- the guest sees a good deal and buys it, even if they originally planned to stay for less time. The time product card has many fields, but below is only what you really need to get started.

## Step 1. Fill in the time product details

1. Go to <cmd text="Settings"/> -> <cmd text="Finances"/> -> <cmd text="Time Products"/> -> <cmd text="Create Time Product"/>.
2. In the **Details** block, specify:

   - **Name** -- choose one format for all time products, for example "\[zone\] + duration": Standard 3 hours, VIP 5 hours.
   - **Product group** -- the category the time product belongs to (set up in <cmd text="Shop"/> -> <cmd text="Product Groups"/>).
   - The **Amount** of time the time product gives and, if needed, a description.

## Step 2. Set up the availability of the time product

In the **Availability** block:

- **Available for reservations** -- whether a PC reservation can be paid with this time product.
- **Show in client shell** -- whether the time product appears in the shop on the client PCs.
- In the table below, add only the branches and host groups where the time product should actually be sold -- for example, do not link the Standard 3 hours time product to the VIP zone, or guests will buy it cheaper and use it in the more expensive zone. To let guests buy the time product right in the client shell, turn on the **Order** switch next to each host group you added.
- **Unregistered** -- turn it on if one-time (guest) accounts can also use the time product.
- In the **User Group** table, mark who can use the time product. Usually it is easier to give access to all groups, unless you have a reason to restrict it.

> [!NOTE]
> 
> A user group is a category of customers with its own prices, discounts and access. For example, you can create "Registered" for regular customers, "Guests" for one-time accounts, "VIP" for premium customers with a 10% discount and "Staff" for employees with a 100% discount and no system restrictions.

**IMAGE: the Availability block of the time product card with the host group table, the Order switches, the Unregistered option and the user group table**

## Step 3. Turn on the time product in the branches you need

The **Availability in branches** block is a similar setting, but at the level of a whole branch: it defines in which clubs of the chain the time product can be used at all. It is off by default -- turn it on for the branches you need.

## Step 4. Restrict the time product by date and time if needed

In the **Usage range** and **Sales schedule** blocks, two fields restrict the time product by date or time:

- **Date range** -- specific dates when the time product can be bought or used. Useful for promotional time products with a limited period.
- **Time range** -- the days of the week and hours when the time product can be bought or used. If it is off, there are no restrictions.

## Step 5. Set the lifetime of the time product

In the **Time product lifetime** block, you set the conditions under which the time product expires. This motivates the guest to use up the time product instead of putting it off.

1. Choose when the countdown starts:
   - **From purchase** -- the countdown starts right after payment.
   - **From use** -- the countdown starts when the guest starts using the time product.
2. Choose one of three expiration types:
   - **Expires after** -- the time product expires after the set period.
   - **Expires at** -- the time product expires the next time the set time of day comes.
   - **Expires at logout** -- the time product expires right after the guest's session ends. Be careful: an accidental logout also removes the time product.

The most common option is for the time product to expire after its own number of hours from the start of use. For example, for a 5-hour time product: **Expires after** -- 5, format -- hours, countdown -- **From use**.

**IMAGE: the Time product lifetime block with Expires after set to 5 hours and the countdown set to From use**

## Step 6. Set the price of the time product

In the **Pricing** block, enter the price of the time product in money and, if needed, in points. If guests can pay either with money or with points, switch **And** to **Or**.

> [!IMPORTANT]
> 
> Points are part of the loyalty program: you award customers points for purchases, and they spend them on products and time products at the price you set.

## Step 7. Set up loyalty points rewards

If you already have a loyalty program, remember to set up the points reward in the **Reward** block for every new time product -- otherwise some time products will earn points and others will not, and guests will quickly notice. For more details, see [Loyalty points for customers](./../../loyalty/loyalty-program.md).

## Result

- The time product is sold only in the selected branches, host groups and user groups, and, when the settings are on, in the client shell shop as well.
- The guest pays for the time product with money and/or points, and the time product expires according to the lifetime conditions you set.
- If the club runs a loyalty program, buying the time product earns points -- the same way as the other time products.
