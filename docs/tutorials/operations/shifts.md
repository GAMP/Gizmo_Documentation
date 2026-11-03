---
title: How to manage shifts in the Manager
order: 1.5
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
      In this guide you will learn
    </p>
    <h2 class="gx-title">How to set up operator shifts and check their totals</h2>
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

Operators take turns at the front desk, and at the end of the day the owner needs to know who sold how much and whether the register balances. For this, Gizmo has **shifts**: an operator works on a register within their shift, and after it is closed, the totals -- sales, voids, cash pay ins and pay outs -- are shown in reports separately for each shift.

First, we will set whether a shift is required for each operator and prepare the register and permissions. Then we will look at where to check shift totals.

## Step 1. Choose the shift mode for an operator

1. Open **Settings -> Operators and permissions -> Operators** and choose an operator.
2. In the **Shift** block, choose a mode:
   - **Disabled** -- shifts are not used for this operator, and they work without opening a shift;
   - **Optional** -- the operator can open and close a shift, but sales and other operations are available without it;
   - **Required** -- the operator must open a shift before starting work and cannot sell anything until they open it.
3. Save the operator card.

If you want every cashier to work strictly within their own shift, choose **Required**.

For all card fields, see [Operator card](./../../configure/operators-and-permissions/operators/operators-card.md).

## Step 2. Prepare the register

A cashier's work is tied to a register: when signing in to Gizmo Manager, the operator chooses a register, and all their sales belong to it.

1. Open **Settings -> Finances -> Registers** and choose a register.
2. In the **Starting Cash** field, enter the amount a shift on this register opens with. If the register is empty at the start of a shift, leave 0.
3. If needed, choose the **Default Operator** for this register.
4. Save the register card.

For all fields, see [Register card](./../../configure/finance/registers/register-card.md).

## Step 3. Check the operator's permissions

If an operator lacks permissions, they cannot make an operation or close a shift. Open **Settings -> Operators and permissions -> Permissions**, choose the operator's permission set and check:

- the **Shift** category -- the **View Expected** permission, that is, viewing the expected shift figures;
- the **Terminal** category -- **View Transactions**, **View Previous Day Transactions**, **Pay In** and **Pay Out**;
- the **Sales** category -- permissions for sales, for example **Open Cash Drawer**. The **Void Invoices from Closed Shift** permission allows voiding invoices created in a shift that is already closed -- give it only to senior staff.

The "Search" field helps you find the permission you need. If a permission is grayed out, first turn on the parent permission it depends on.

For all permissions, see [Permission card](./../../configure/operators-and-permissions/permissions/permission-card.md). For ready-made permission sets, including the **Cashier** set for a regular operator, see [Choosing a permission preset](./../staff/permission-presets.md).

## Step 4. Open a shift

1. The operator signs in to Gizmo Manager with their **Username** and **Password**.
2. On the **Select Register** page, they choose a register in the **Select a register** list and click **Continue**.
3. If the shift is set to **Required** in the operator card, the **Enter Shift Start Details** screen opens. In the **Cash Amount** field, the operator enters how much cash is in the cash drawer and clicks **Continue**.
4. The shift is open -- the operator lands on the club map.

> [!IMPORTANT]
>
> A shift belongs to one operator: in an open shift, only the operator who opened it can make transactions. Another operator works in their own shift.
>
> Neither an operator nor a register can have a second open shift: if the operator already has a shift open on another register, or this register has an open shift of another operator, close that shift first.

You can check that the shift is open in **POS -> Actions -> Shift Management**: the **Active Shifts** page shows the shift number, branch, register, operator and start time.

> [!TIP]
>
> If the operator signed out of Gizmo Manager without closing the shift, the next time they sign in they see the **What would you like to do?** screen with a choice: **Continue Open Shift** or **Close Open Shift**.

For how to sign in to Gizmo Manager, see [Login screen](./../../usage/gizmo-manager/login-screen.md).

## Step 5. Work in the shift

During a shift, the following service actions are available from the sales screen in the **POS** section:

- **X-Report (Register)** -- an interim cash report that does not close the shift;
- **X-Report (Card Payments)** -- an interim report on card payments;
- **Open Cash Drawer** -- opens the drawer without making a sale.

An X-report does not close the shift, and you can take it as many times as you want -- for example, to reconcile cash in the middle of the day.

**Pay in and pay out**

Pay ins and pay outs record money that comes into the register or leaves it other than through sales. For example, an operator takes money from the register to buy milk for the bar -- that is a pay out; when they return the change, that is a pay in.

1. Open **POS -> Sales** and click the **Actions** button.
2. Choose **Pay In/Pay Out**, set the operation type and the amount.

Pay ins and pay outs are cash only. They are included in the shift totals, in **Financial Totals** of the summary report and as a separate line in the [financial report](./../../usage/gizmo-manager/otchety/finansovyy.md). The operations require the **Pay In** and **Pay Out** permissions in the operator's permission set.

For details, see [POS](./../../usage/gizmo-manager/tochka-prodazh/_index.md).

## Step 6. Close the shift

1. Count the cash in the cash drawer and check the shift's operations in **Reports -> Shift Log**: it shows the shift, the starting cash and the expected amount for each payment method. Keep in mind that a shift lasts from opening to closing and may not match the calendar day.
2. If needed, take an **X-Report (Register)** -- it does not close the shift.
3. Open **POS -> Actions -> Shift Management**. On the **Active Shifts** page, find your shift and click **End**.
4. The **Close Shift** page opens. In the **Financial Summary** block, each payment method shows the **Expected Amount** -- enter what is actually in the register in the **Actual Amount** field. Check the **Total Amount** and click **Continue**.

> [!WARNING]
>
> If the expected and actual amounts do not match, find the cause first. Do not enter the expected amount instead of the actual one -- otherwise the shortage or surplus will not get into the reports.

You can also close a shift when signing in to Gizmo Manager: on the **What would you like to do?** screen, choose **Close Open Shift**.

If the shift cannot be closed because of missing permissions, check:

1. The operator's permission set -- see step 3.
2. The operator card in **Settings -> Operators and permissions -> Operators**: in the **Permission** block, the **Permission Preset** and **Branches** fields; in the **Shift** block, the mode. With **Disabled**, shifts are not used for the operator: if they need to open and close shifts, choose **Optional** or **Required**.

A staff member with permissions in the **Settings** category can fix the permissions.

## Step 7. Check shift totals

Shift totals are collected in the **Reports** section on the left panel:

- **Overview**, the **Operators** block -- a table of shifts for the selected period: the operator's **Name**, **Shift Schedule** -- when the shift started and ended, hours, products, time products and bundles sold, **Voids**, **Pay Ins and Pay Outs** and the **Total** for the shift;
- **Shift Log** -- opening and closing of shifts;
- **Z Log** -- Z-reports, that is, the totals of closed shifts per register;
- **Financial Report** on the **All Reports** tab -- cash turnover with the **Operator** and **Cashier Station** filters, to analyze a specific shift or register.

Also, in the order log -- **POS -> Orders** -- each order shows the **Shift Number** it belongs to. For details, see [Orders](./../../usage/gizmo-manager/tochka-prodazh/zakazy/_index.md).

For details, see [Reports](./../../usage/gizmo-manager/otchety/_index.md) and [Financial report](./../../usage/gizmo-manager/otchety/finansovyy.md). For how to read reports and get them by email, see [Reports](./reports-guide.md).

## Result

- For each operator, it is set whether a shift is required, and the register knows the starting cash amount of a shift.
- Operators have the permissions they need to work with the register and close a shift.
- The totals of each shift are visible in reports: who worked, how much they sold and what was voided.
