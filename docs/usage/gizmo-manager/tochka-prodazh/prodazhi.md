---
title: Sales
order: 1
searchPhrases:
  - Sale
  - Cart
  - Receipt
---

The tab is for making sales. The screen has two parts: the product range, sorted by product group, on the left, and the cart of the current sale on the right. Above them is the sale mode switch.

## Sale mode

-  **Guests** -- a sale without a user account. The amount goes through the register but is not linked to a user.

-  **Members** -- a sale to a specific user. The purchase goes into their history, can be paid from the deposit and counts toward discounts.

If the user is not in the system yet, you can create them from the same screen with the <cmd text="Create User"/> button.

## User

The block above the cart. In the **Search or Create User/Guest** field, you search for a user by username or phone number. Selected users are shown as tags with their balance and points, and on the right is a counter such as "1 of 1 selected". The **Deselect All** link clears the selection.

> [!WARNING]
>
> The sale is linked to the selected users. If several are selected, the purchase goes to each of them -- check the counter before payment.

## Cart

-  **Product** -- the item name.

-  **Price** -- the unit price. An operator with the **Custom Price** permission can edit it right in the cart -- see [Permission card](./../../../configure/operators-and-permissions/permissions/permission-card.md).

-  **Quantity** -- the number of units.

-  **Total** -- the line total.

The product range on the left is sorted into tabs: **All** holds the whole list, and the others match the product groups created in the [Shop](./../magazin/_index.md) section.

Below the cart:

-  The **Enter Promo Code** field and the <cmd text="Apply Promo Code"/> button.

-  Totals: **Subtotal**, **Discount**, **Reward** (how many points the purchase earns) and **Total**.

-  <cmd text="Add Deposit"/> -- adds a deposit top-up line for the entered amount to the cart. The deposit is credited only after payment.

-  <cmd text="Payment"/> -- goes to the payment screen.

## Payment screen

**IMAGE: Payment screen with the payment type, the amount breakdown, payment methods and the Amount Received field**

-  **Payment Type** -- **One-Time Payment** or **Split** (splitting the amount into several payments).

-  **Left to Pay** and the amount breakdown: **Subtotal**, **Taxes**, **Fee**, **Discount**, **Total**.

-  Payment methods -- **Cash**, **Credit Card**, **Deposit**, **Pay Later** and any extra methods created in [Payment methods](./../../../configure/finance/paymet-methods/_index.md). After you select a method, fill in the **Amount Received** field.

-  <cmd text="Pay"/> -- makes the payment. After it, the "Payment completed successfully" confirmation appears.

> [!IMPORTANT]
>
> **Pay Later** does not take money: the amount goes to the user's deferred payments. The "Payment completed successfully" message confirms that the operation was recorded, not that money was received. Closing the payment screen with the cross cancels the checkout -- no payment is made.

## How to make a sale

1. Select the mode: **Guests** or **Members**. For **Members**, specify the user in the **Search or Create User/Guest** field.

2. Fill the cart by selecting items on the left side of the screen.

3. Check the cart contents and total.

4. Click <cmd text="Payment"/>, select the payment type and method, and click <cmd text="Pay"/>.

The completed sale appears on the **Payment Log** tab, and its amount goes into the shift summary in the [Reports](./../otchety/_index.md) section.
