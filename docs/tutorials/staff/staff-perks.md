---
title: Staff perks
order: 4
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
      In this guide you will learn
    </p>
    <h2 class="gx-title">How to give staff free or discounted time on PCs</h2>
    <div class="gx-meta">
      <span>10–15 minutes</span>
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

A good admin often chooses to work at a club partly because they love being there and playing. Give them this opportunity officially instead of turning a blind eye when they quietly sit down at a free PC between shifts -- otherwise you lose both control over what is going on and a chance to thank your employee once more. Such a perk costs the club almost nothing (employees already spend part of their free time at the workplace), but it noticeably improves the atmosphere in the team -- people appreciate being thought of not only in terms of their duties.

The operator account you create to log in to Gizmo Manager gives access only there -- it has nothing to do with logging in to the client shell on the gaming PCs. So for perk play you need a separate client account with special terms. Gizmo has no ready-made "make this employee a perk user" button -- instead, the perk is put together from tools you already know: a separate user group, time product availability rules for this group, and discounts. It sounds like an extra step, but in practice it takes a couple of minutes and gives you full control over what exactly is available to employees and on what terms.

## Step 1. Create the Staff user group

Create the **Staff** user group -- how to create groups is described in [User groups](./user-groups.md).

## Step 2. Create a client account for the employee

Create a regular client account for the employee and assign it the **Staff** group.

## Step 3. Set up the perk

Set up the perk you need in one of these ways:

-  **A free time product** -- create a time product priced at 0 and available only to the **Staff** group. How to restrict the availability of a time product to a specific user group is described in the [Time product card](./../../configure/finance/time-products/time-product-card.md) article.

-  **Free play on a tariff** -- a tariff cannot be restricted to a user group, so a perk on hourly billing is given through a discount: create a 100% discount on tariffs, put it into a discount group and assign this discount group to the **Staff** group. Step by step -- in [Discounts and promotions](./../loyalty/discounts-and-promotions.md).

-  **A discount below 100%** -- the same way: set a reduced price in a time product available only to the **Staff** group, or set the percentage you need in the discount instead of 100.

> [!WARNING]
>
> The perk time product and the discount group must be linked only to the **Staff** group and not open to everyone -- otherwise any guest can use the perk, and the whole idea loses its point.

## Step 4. Remove the perk when an employee leaves

If an employee leaves, remember to move their client account back to a regular user group or delete it -- otherwise the perk stays active, and it will not be you who finds out, but the accountants at the next reconciliation.

## Result

The employee logs in to the client shell with their client account from the **Staff** group and plays for free or at a reduced price. The perk time product and the discount are not available to other guests.
