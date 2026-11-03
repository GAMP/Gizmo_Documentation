---
title: POS
order: 0.5
searchPhrases:
  - Register
  - POS
  - Sales
---

The section is for selling time and products, taking payments, managing user deposits and working with register shifts. It has five tabs, and **Sales** opens first.

The section opens from <cmd text="POS"/> in the left menu.

## Tabs

-  **Sales** -- the sales screen: cart, product range, checkout. Described in [Sales](./prodazhi.md).

-  **Payment Log** -- the payments received. At the top is the **Today** summary: **Total Revenue**, **Cash**, **Card**, **Other**, **Unpaid** and **Total Refunded**. Below it is the list of operations with the **Shift Number**, **Invoice Number**, **Date**, **Operator**, **User**, **Register**, **Group**, **Type**, **Payment Method** and **Total** columns. You can narrow the list with the **Branch**, **Shift Id**, **Operator**, **User**, **Register**, **Operation Type**, **Transaction Type** and **Payment Method** filters. By default the current day is shown -- from 00:00 to 23:59.

-  [**Orders**](./zakazy/_index.md) -- the log of orders placed by users.

-  **Electronic Payments** -- cashless operations.

-  **Deposits** -- operations on user deposits: **Type** (top-up or withdrawal), **Payment Method**, **Branch**, **User**, **Balance**, **Operator**, **Date** and **Amount**. The **Balance** column shows the deposit balance after that specific operation, not the current one -- the current balance is shown in the [Users](./../users/users/_index.md) list, in the **Balance** column.

## Shift and register

The cashier's work is tied to a register: when signing in to Gizmo Manager, the operator selects the register they will work at, and all their sales belong to it. The register selection and shift opening screens are described in [Login screen](./../login-screen.md).

From the sales screen you can also use <cmd text="Open Cash Drawer"/> -- it opens the drawer without making a sale.

The totals of closed shifts are available in the [Reports](./../otchety/_index.md) section, on the **Z Log** tab.

## Shift management

**Actions -> Shift Management** opens the **Active Shifts** page -- the list of open shifts with the **Shift Id**, **Branch**, **Register**, **Operator**, **First Name**, **Last Name** and **Start** columns. The <cmd text="End"/> button in a shift row goes to closing that shift.

**IMAGE: Active Shifts page with the list of open shifts and the End button in a shift row**

The **Close Shift** page shows the branch, register, operator and shift start time. The **Financial Summary** block shows the **Expected Amount** and the **Actual Amount** field for each payment method, and the **Total Amount**. The <cmd text="Continue"/> button closes the shift, and <cmd text="Cancel"/> returns you to the list.

**IMAGE: Close Shift page with the Financial Summary block: expected and actual amounts per payment method**

> [!WARNING]
>
> If the expected and actual amounts differ, find out why first. Do not enter the expected amount in place of the actual one.

How to close a shift is described in [How to manage shifts in the Manager](./../../../tutorials/operations/shifts.md).
