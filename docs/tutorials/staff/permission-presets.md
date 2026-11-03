---
title: Choosing a permission preset
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>
      In this guide you will learn
    </p>
    <h2 class="gx-title">How to find your way around the ready-made permission sets</h2>
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

Setting up a new employee and ticking checkboxes by hand in dozens of permission categories is a job for a whole evening, not for the day when the new admin is already standing at the front desk waiting for access. Fortunately, Gizmo Manager has ready-made permission sets "out of the box" -- you can assign one to an operator right away, without a single extra click.

The full list of individual permissions in Gizmo is long -- dozens of categories such as "Sales", "Shift", "Stock", "Management" and so on (the full breakdown is in the [Permission card](./../../configure/operators-and-permissions/permissions/permission-card.md) article). Setting this up by hand for every new employee takes a long time and is risky -- it is easy to forget an important checkbox and then wonder why the operator cannot close a shift. The ready-made sets are already put together for typical club roles and are assigned right when you create an operator, in <cmd text="Settings"/> -> <cmd text="Operators and permissions"/> -> <cmd text="Permissions"/>.

## Step 1. Choose a set for the employee's role

For a regular point-of-sale operator -- an employee who welcomes guests, sells time products and products and works with the shift at the register -- we recommend the **Cashier** set. For most new front desk employees, this set is enough from day one.

## Step 2. Check what is in the set

Before you assign any set other than **Cashier** to an employee, open it in <cmd text="Settings"/> -> <cmd text="Operators and permissions"/> -> <cmd text="Permissions"/> and check its contents by hand -- each category shows the number of permissions turned on (for example, 19/22), so you can compare the sets in a couple of minutes without even reading the description of each item.

## Step 3. Create your own set if the ready-made ones do not fit

If your club needs a non-standard role -- for example, a senior admin with access to reports but without the right to change server settings -- do not try to squeeze an existing set into it through pain and compromise. Create your own set based on the closest ready-made one:

1. Open the closest ready-made set.
2. Save a copy of it under a new name.
3. Adjust the checkboxes you need.

It takes about ten minutes, but afterwards you can reuse this role for all similar employees.

## Step 4. Assign the set to an operator

When you create an operator, select the set in the **Permission preset** field of the operator card -- see the [Operator card](./../../configure/operators-and-permissions/operators/operators-card.md) article.

## Result

A new operator gets a ready-made permission set right when they are created -- without ticking checkboxes by hand in dozens of categories. A non-standard role, put together once, can be reused for all similar employees.
