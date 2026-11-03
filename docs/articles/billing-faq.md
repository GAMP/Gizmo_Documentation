---
title: Time, deposit and balance -- FAQ
order: 3
---

How Gizmo charges a guest's time, how a deposit differs from a balance, and when loyalty points are awarded.

## How a guest pays for time

The sources that gaming time can be charged from are allowed in the user group card, in the **Billing** block (the **Allowed Time Sources** table):

- **Time Product** -- time is charged from purchased time products;
- **Deposits** -- time is paid from the deposit at the tariff rate.

Gizmo uses available time products first, and only if there is no suitable time product does it use the deposit. You cannot change this order, but you can turn off any source for a group. For details, see [User group card](./../usage/gizmo-manager/users/user-groups/user-group-card.md).

A time product counts as available if it can be used in this user group and in the host group where the guest is sitting, and there are no date and time restrictions right now. If several time products are available, the one higher on the **Priority** tab is used first -- see [Time Products](./../configure/finance/time-products/_index.md).

**How charging works.** Time is charged minute by minute: at the start of each minute Gizmo checks what to pay for that minute with. If an available time product exists, the minute is charged from it; if not, the tariff rate is charged from the deposit. If there is nothing to pay with, the guest is logged out -- or, if the group is allowed credit, keeps playing on credit.

## Common questions about time

**Why does the guest have infinite time (∞) in the shell?**

Gizmo Client shows how much time is left before the guest is logged out. If credit is on for the guest's group, the guest can keep playing after the paid time runs out -- so the shell shows ∞. Check the **Credit** block in the user group card.

**Why does the guest keep playing although their time has run out?**

- **Credit is on for the guest's group** -- the guest plays on credit and pays at the end. If you do not need this, turn credit off in the group card. How postpay works is described in [How to enable postpay](./../tutorials/staff/postpay.md).
- **The tariff costs 0** -- check the tariff that applies to the guest's group and host group. For details, see [Tariffs](./../tutorials/sales/pricing/tariffs-guide.md).

**Why is a time product that was just sold not being used?**

In the time product card, check:

- **Availability** -- the time product is available for the host group where the guest is sitting and for their user group;
- **Usage Range** -- the time product can be used at the current date and time;
- **Product Lifetime** -- the time product has not expired.

And in the user group card, check that **Time Product** is on in **Allowed Time Sources**. All time product fields are described in [Time product card](./../configure/finance/time-products/time-product-card.md).

**Why does the guest see less time than they bought?**

Gizmo does not show the sum of the purchased time products, but the time the guest can use right now:

- **The guest is in a session** -- the **Map** and the user list show the time until logout at the current station. Time products that cannot be used in this host group are not counted. Time products that are about to expire may be counted partly or not at all.
- **The guest is not in a session** -- the user list and the user card show all the available time from the current moment, without the host group restrictions of the time products.

The time available from the deposit is calculated using the tariff rates for the coming hours, so it changes during the day. For example, the tariff costs $2/h during the day and $4/h from 20:00 to 23:00, and the deposit holds $20. At 10:00 a guest who is not in a session sees 10 hours: exactly $20 will be spent by 20:00. At 11:00 it is already 9.5 hours: $18 until 20:00 and another half hour at the evening rate. After 23:00 the time goes back up to 10 hours.

So a guest does not have "one correct" amount of time: how long they can play depends on which station they sit at. The full picture -- all active time products and the remainder of each -- is on the **Time Products** tab of the user card.

## Deposit and balance

**How does a deposit differ from a balance?**

- **Deposits** -- the money the guest has put into their account.
- **Balance** -- the state of the guest's accounts with the club: deposits minus unpaid invoices and used but unpaid time.

A positive balance means the guest has money to spend. A negative one means the guest owes the club.

**Can I change the balance by hand?**

No, the balance is always recalculated from deposits and unpaid invoices. It goes up when the guest tops up the deposit or pays invoices, and goes down when the guest is sold products or time with pay later.

**Why is the balance negative although there is money on the deposit?**

Because the guest's unpaid invoices exceed the money on the deposit: the guest owes the club more than they put in. This happens if the guest was sold items on credit or played on credit.

**What does "Close Balance" do?**

This action settles up with the guest: Gizmo ends the guest's session, issues an invoice for the unpaid gaming time and shows the list of unpaid invoices with the total. The operator chooses how the guest pays: from the deposit, in cash or by another method. On the **Map**, the action is in **POS -> More Actions -> Close Balance**.

**When does an invoice appear?**

An invoice for a product or a time product is created at the moment of sale -- with any payment method, including "pay later". An invoice for per-minute time at the tariff rate is created when the balance is closed -- by hand or automatically.

**How do I cancel a sale?**

You cancel a sale by voiding the invoice. Only the whole invoice can be voided: to remove one item, void the invoice and sell the rest again. When you void, choose how to return the payment: by the same method, to the guest's deposit (not available for a guest account) or with no refund. Points spent on the purchase are returned to the guest, and points awarded for it are taken back. The right to void is set in the operator's permission set -- see [Permission card](./../configure/operators-and-permissions/permissions/permission-card.md).

**Can the balance be closed automatically?**

Yes. In **Settings -> Finances -> Invoices**, you can turn on for a user group **Auto Invoice** -- the invoice for time is issued by itself after the session ends, and **Auto Pay from Deposits** -- the issued invoice is paid from the deposit right away. For details, see [Invoices](./../configure/finance/invoices.md).

## Loyalty points

**When are points awarded?**

Only when the invoice is paid in full: for a product, a time product or gaming time. Purchases on credit and partial payments do not bring points until the invoice is paid in full. For time paid from the deposit, points are awarded when the session invoice is issued and paid.

**Are points awarded for purchases paid with points?**

No. Products and time products paid with points do not bring new points.

**Can I award points to a guest by hand?**

You cannot change the number of points directly in Gizmo Manager. The workaround is to create a product with a points reward and sell it to the guest for $0: the guest gets the reward points.

How to set up awarding and spending points is described in [Loyalty points for customers](./../tutorials/loyalty/loyalty-program.md).
