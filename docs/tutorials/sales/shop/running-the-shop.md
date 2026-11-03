---
title: Products and bundles
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M3 4h2l2.5 12.5a2 2 0 0 0 2 1.5h8a2 2 0 0 0 2-1.5L21 8H6"/></svg>
      In this guide you will learn
    </p>
    <h2 class="gx-title">How to set up products and combo bundles for sale</h2>
    <div class="gx-meta">
      <span>10 minutes</span>
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

The shop is the club's range of goods (drinks, snacks, accessories) and the warehouse that counts the stock. Each product is set up once through its card -- after that it is simply sold at the register or in the client shell.

You can combine several products into a bundle -- a combo at a lower price, or a composite product: when it is sold, all the items in it are written off from the warehouse.

## Step 1. Create a product and fill in the basic data

1. Open <cmd text="Shop"/> -> <cmd text="Products"/> -> <cmd text="Create Product"/>. The card is split into several blocks -- what is in each of them is explained below.
2. In the **General** block, enter the name and the product group of this product. If needed, also mark how it should behave on the receipt:
   - **Is a service** -- when the receipt is generated, Gizmo treats this item as a service rather than a product.
3. Attach a product image -- it is visible both in the client shop and to the admin in the product card.

## Step 2. Set up the availability of the product

In the **Availability** block:

- **Show in client shell** -- whether the product card appears in the shell shop for guests.
- **Branch** -- the branch the product is available in. Be sure to turn on the branch you need, otherwise the product cannot be sold.
- **Unregistered** -- whether the product can be sold to customers with a one-time (guest) account. We recommend turning it on.
- **User Group** -- which customer groups the product is available to. We recommend marking all groups, unless you have a reason to restrict it.

## Step 3. Set the price, the sales schedule and the reward

1. In the **Pricing** block, fill in the **Price** -- the cost of the product in money and/or points.
2. In the **Sales schedule** block, restrict sales if needed:
   - **Date range** -- specific dates when the product can be bought. Turn it on only if you need to limit sales to certain dates.
   - **Time range** -- the days of the week and hours when the product can be sold. If it is off, there are no restrictions.
3. In the **Reward** block, enter the **Points** -- how many points the customer gets for buying this product.

## Step 4. Set up stock tracking for the product

In the **Stock** block:

- **Barcode** -- the product's barcode. Useful for finding the product quickly by barcode.
- **Stock tracking** -- whether the product is tracked in the warehouse. If you turn it on, three more settings become available:
   - **Disallow sale when out of stock** -- does not let you sell the product if its stock in the warehouse is zero.
   - **Stock level notification** -- warns the admin when the quantity of the product drops below a critical threshold.
   - **Stock options** -- what exactly is written off on a sale:
      - **Default** -- only the product itself is written off.
      - **Target** -- along with the product, another selected product is written off in the set quantity -- for example, a cup or a straw when a drink is sold.

## Step 5. Put together a bundle if needed

Bundles let you combine several products into one combo. For example, "Energy drink + Night time product at a lower price". Bundles are also useful for composite products from your real range -- say, you have a sandwich that guests can add an extra portion of cheese to, and the cheese is tracked as a separate product. In this case, create a bundle of the "Sandwich" and "Cheese" products -- when the bundle is sold, both items are written off from the warehouse.

1. Open <cmd text="Shop"/> -> <cmd text="Bundles"/> -> <cmd text="Create Bundle"/>.
2. Set up the bundle the same way as a regular product, with two differences:
   - Below the availability block, use the search to select which products or time products are included in this bundle.
   - By default, selling a bundle writes off the products included in it from the warehouse. If instead the bundle should be tracked in the warehouse as a separate item, regardless of the stock of its products, turn on **Stock tracking** at the bottom of the bundle card and select the **Own stock** type.

A product can also be sold only as part of a bundle and not separately -- if the bundle does not track stock.

## Result

- Products and bundles are sold at the register or in the client shell -- for the branches and user groups marked in their cards.
- Purchases earn the points you set, and the warehouse tracks the stock of the items that have stock tracking turned on.
