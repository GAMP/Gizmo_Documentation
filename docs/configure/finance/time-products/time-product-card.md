---
title: Time product card
order: 1
---

**IMAGE: the time product card with the Details, Media, Availability, Usage Range, Sales Schedule, Lifetime, Pricing, Reward and Stock blocks**

The time product card opens when you create a new time product or edit an existing one.

## Details

-  **Name** -- the name of the time product shown in Gizmo Client and Gizmo Manager.

-  **Description** -- a text description of the time product.

-  **Amount** -- the amount of time in the time product.

-  **Format** -- the unit of time in the time product (for example, minutes).

-  **Product group** -- the product group the time product belongs to. It is used to organize time products in the catalog.

## Media

The time product cover is shown in the Gizmo Client interface. The recommended size is 400 × 444 pixels.

To upload a cover, drag an image to the upload area or click <cmd text="Add Cover"/>.

## Availability

**Available for reservations** -- when on, the time product can be used when you create a reservation.

### By host group

**Show in client shell** -- when on, the time product is shown in Gizmo Client for all host groups in the list below.

The table sets the branches and host groups where the time product is available, and whether users can order it:

-  **Branch** -- the branch where the time product is available.

-  **Host group** -- the host group the time product is available for.

-  **Order** -- when on, users can order the time product themselves in Gizmo Client.

To add a row, click <cmd text="+ Add"/>. To delete a row, click the trash icon next to it.

### Availability for user groups

**Unregistered** -- when on, the time product is available to unregistered (guest) users.

The table lists the user groups that can use the time product. To add a group, click <cmd text="+ Add"/>. To delete one, click the trash icon.

### Availability in branches

The table lists the branches. You can turn the availability of the time product on or off in each of them.

## Usage range

Here you set the period during which a purchased time product can be used.

-  **Date range** -- when on, the time product can be used only within the set date range (start date -- end date).

-  **Time range** -- when on, the time product can be used only during certain time periods. Add periods with the <cmd text="+"/> button.

## Sales schedule

Here you set the period during which the time product can be bought.

-  **Date range** -- when on, the time product can be sold only within the set date range (start date -- end date).

-  **Time range** -- when on, the time product can be sold only during certain time periods. Add periods with the <cmd text="+"/> button.

## Time product lifetime

Here you set how long a purchased time product stays valid.

-  **Expires after** -- when on, the time product becomes invalid after the set amount of time. You set the amount and the format (for example, days).

-  **Expires at** -- when on, the time product becomes invalid at the set time of day.

-  **Expires at logout** -- when on, the time product is voided right after the user's session ends.

-  **Expiration counted from** -- sets the starting point for the **Expires after** and **Expires at** options:

   -  **From purchase** -- the time is counted from the moment the time product is bought.

   -  **From use** -- the time is counted from the first use of the time product.

## Pricing

-  **Price** -- the price of the time product in money.

-  **Choice** -- sets how the time product is paid for: with money, with points, or with both. **And** means that both money and points are charged at the same time on purchase.

-  **Points** -- the price of the time product in loyalty points.

-  **Tax** -- the tax rate applied when the time product is sold. Rates are set in [Taxes & Currency](./../../organization/taxes-and-currency.md).

## Reward

**Points** -- the number of loyalty points the user gets for buying the time product.

## Stock

-  **Barcode** -- the barcode of the time product, for quick search and sale with a scanner.

-  **Stock tracking** -- when on, the time product is tracked in stock. More options become available:

   -  **Disallow sale when out of stock** -- when on, the time product cannot be sold if its stock is zero.

   -  **Stock level notification** -- when on, the system sends a notification when the stock of the time product drops to the threshold.

To delete the time product, click <cmd text="Delete"/> in the bottom right corner of the page.
