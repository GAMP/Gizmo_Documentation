---
title: How to enable postpay
order: 2.5
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
      In this guide you will learn
    </p>
    <h2 class="gx-title">How to let guests play on credit and settle their debt</h2>
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

A regular guest comes for the whole evening and wants to pay once -- at the end, instead of topping up the deposit before every match. For such guests, the club can open credit: the guest plays and buys on credit and settles the debt later.

In Gizmo, credit is set up for a user group, in the **Credit** block of its card: members of the group can be allowed to buy on credit -- without a limit or up to a set amount. The debt is shown in the customer's **Balance**: a negative value means a debt. In the overview of loyalty tools, this feature is called a "credit line" -- it is opened for privileged users.

Group credit is the only postpay mechanism in Gizmo: you cannot give credit to an individual guest, only to the whole group they belong to.

## Step 1. Set aside a group for postpay guests

Credit is set not for an individual guest but for a whole user group. So create a separate group -- for example, "Postpay" or "VIP" -- and move into it the guests the club is ready to let play on credit. The other groups stay without credit.

How to create a group and move a customer into it is described in [User groups](./user-groups.md) and [Customer accounts](./user-accounts-guide.md).

## Step 2. Turn on credit in the group

1. Open **Users -> User Groups** and open the group card by double-clicking its row.
2. Find the **Credit** block in the right column -- without credit, it says "No Credit". Click the pencil icon -- the **Credit** window opens.
3. Set two independent switches:
   - **Allow Credit for Sales** -- whether a group member can be sold items on credit;
   - **Allow Credit Usage** -- whether a member can spend the credit given.
4. For each, choose a value: **No Credit** -- no credit allowed; **Unlimited** -- no limit; **Limited** -- credit is allowed up to a set amount.
5. Click **Save**.

The amount for the **Limited** value is set in the same place, in the **Credit** window of the user group card.

## Step 3. Check the time payment sources

In the same group card, in the **Billing** block, the **Allowed Time Sources** table sets how group members pay for time at a host:

- **Time Product** -- time is taken from purchased time products;
- **Deposits** -- money is taken from the deposit.

If **Deposits** is off, time is not paid from the deposit. If both sources are off, group members have nothing to pay for time with.

All card fields are described in the [User group card](./../../usage/gizmo-manager/users/user-groups/user-group-card.md) article.

## Step 4. Give operators the credit permissions

1. Open **Settings -> Operators and permissions -> Permissions** and open the permission set assigned to the operators.
2. In the **Sales** category, check the permissions:
   - **Allow Time Credit** -- giving a user time on credit;
   - **Not Yet Paid** -- working with invoices awaiting payment.
3. Save the permission set.

For more details, see the [Permission card](./../../configure/operators-and-permissions/permissions/permission-card.md) article.

**A sale with deferred payment**

You can sell a product or a time product to a guest without taking the money right away:

1. Open **POS -> Sales**, select the guest and add the items to the cart.
2. Click **Payment** and choose the **Pay Later** method.
3. Click **Pay**.

The **Pay Later** method does not take any money: the amount goes to the guest's deferred payments, and the "Payment completed successfully" message only confirms that the operation was recorded. Unpaid amounts are shown in **POS -> Payment Log**, in the **Unpaid** summary, and the invoices are in **Reports -> All Reports -> Invoice Log**.

The operator cannot give credit to a specific guest separately: the guest plays on credit if credit is allowed for their group. To give a guest postpay, move them to a group with credit -- see step 1.

## Step 5. Set up invoicing

Open **Settings -> Finances -> Invoices**.

- **Hold deposits for unpaid session time** -- when on, the part of the deposit that equals the cost of the unpaid time of the current session is blocked: it cannot be spent at the register or withdrawn from the deposit. This way the money to pay for the time is sure to stay on the guest's deposit. This option is on by default.
- In the **Automatic invoicing** table, set up the following for the postpay group:
  - **Auto Invoice** -- the invoice is issued automatically when the session ends;
  - **After Minutes** -- how many minutes after the session ends the invoice is issued;
  - **Auto Pay From Deposits** -- the issued invoice is paid automatically from the deposit.

All parameters are described in the [Invoices](./../../configure/finance/invoices.md) article.

## Step 6. Close the guest's debt

- The debt is shown in the **Balance** column on the **Users** tab: a negative value means a debt. The amount on the deposit is shown separately, in the **Deposits** column.
- When the guest leaves, select their gaming station on the **Map** and click **POS -> Other Actions -> Close Balance**: the system logs the customer out, then automatically closes all their invoices and issues them for payment.

How the guest pays the issued invoices: the guest comes to the operator, and the operator right-clicks on the **Map** the gaming station the guest was sitting at and selects **Close Balance**. In the window that opens, the operator clicks **Pay** -- the standard payment window opens, where the method is chosen: cash, card, deposit and so on.

## Result

- Members of a group with credit can play and buy on credit -- without a limit or up to a set amount.
- The debt is shown as a negative **Balance** of the customer.
- When the balance is closed, the guest's invoices are issued for payment, and with the options turned on in **Settings -> Finances -> Invoices**, unpaid time can be taken from the deposit automatically.

If a customer's session ends unexpectedly with a debt, check the same settings: the credit in the group, the options in the **Invoices** section and the time payment sources in the **Billing** block. An overview of loyalty tools, including the credit line, is in the [Loyalty program](./../loyalty/_index.md) section.

How a deposit differs from a balance and what **Close Balance** does is described in the [Time, deposit and balance -- FAQ](./../../articles/billing-faq.md) article.
