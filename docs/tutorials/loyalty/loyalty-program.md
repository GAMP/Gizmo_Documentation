---
title: Loyalty points for customers
order: 3
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
      In this guide you will learn
    </p>
    <h2 class="gx-title">How to build a simple points-based cashback system</h2>
    <div class="gx-meta">
      <span>15 minutes</span>
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




Sooner or later you will ask yourself how to keep a guest who has already been to your club, and make them choose your club next time. Permanent discounts reduce revenue and quickly become an expected norm rather than a nice bonus. Loyalty points work more gently -- the guest gets something like the club's own internal currency, collects it, and this is a subtle but effective reason to come back to you. The idea is simple -- the customer buys a time product or a product, and points are added to their account together with the purchase. A points balance builds up, which the customer can then spend on the next purchase. Partial and full payment are possible -- depending on how you set up the system.

In this guide we will go through setting up a loyalty program based on points. There are two types of point rewards -- for products and time products, and for hourly billing. How to assign discounts and promo codes and create promotions is described in [Discounts and promotions](./discounts-and-promotions.md).

## Step 1. Set up points for products and time products

Points rewards are set up right in the time product or product card, in the **Reward** block -- there you specify how many points the customer gets for buying this particular item. Nothing stops you from giving a different number of points for different time products -- for example, more points for more expensive and longer sessions, to encourage guests to choose them, or 10% of each product.

**IMAGE: the Reward block of a time product card with the number of points the customer gets for the purchase**

## Step 2. Set up points for hourly billing

Points for hourly billing are set up for individual user groups.

1. Open <cmd text="Users" /> -> <cmd text="User Groups" /> and select the group you want to set up cashback for.
2. In the group card, go to the **Loyalty** section and edit it by clicking the pencil icon.
3. Choose the cashback type:
   - **Money** -- points are awarded for the set amount of balance spent on hourly billing. Note that this means hourly billing only, not any other products or time products.
   - **Time** -- points are awarded for the time played, proportionally, by the minute: for example, with 120 points per hour, the guest gets 2 points for each minute.
4. For either type, enter the number of points and the amount of money or time that has to be spent to get them.

> [!TIP]
>
> We recommend setting the values as small as possible -- for example, 1 point per $1 instead of 10 points per $10, because if the customer spends $9 instead of $10, with the first setting they would not get a single point.

> [!NOTE]
>
> Points are awarded only when the customer leaves the session and their invoices are closed, not right after they spend money.

## Step 3. Set up payment with points

In the **Pricing** block of the time product or product card, you can set the price in points and switch the spending condition:

- **Price in money "And" price in points** -- payment is always made with both money and points at the same time. That is, if you set the price to $5 And 50 points, the customer needs to have both $5 and 50 points to buy the product.
- **Price in money "Or" price in points** -- the customer chooses how to pay: with regular money or with collected points. We recommend this option.

Check that the **Points** payment method is turned on for **Manager** and/or **Client** in **Settings -> Finances -> Payment methods** -- see [How to set up payment methods](./../sales/register/payment-methods.md).

**How to sell a product for points at the register.** Add the product to the cart in **POS -> Sales**, and in the cart choose what it is bought for: money or points.

## Result

- The customer gets points for buying products and time products, and for hourly billing -- according to their group's settings.
- The collected points can be spent on the next purchase: partially or fully, depending on the spending condition in the time product or product card.

When points are awarded, whether they are awarded for purchases made with points, and how to award points manually is described in the [Time, deposit and balance -- FAQ](./../../articles/billing-faq.md) article.
