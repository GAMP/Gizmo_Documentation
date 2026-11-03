---
title: Warehouses
order: 2
---

The tab lists the places where products are stored. Each warehouse shows its **Name**, **Type**, **Branch** and **Status**.

You have created products, but you need to store them somewhere and count the stock. Stock tracking helps you see in time what is running low and spot shortages.

It opens in <cmd text="Shop"/> -> <cmd text="Warehouses"/>.

## Default warehouses

By default the club already has two warehouses:

-  **Point of Sale** -- for the counter and everything customers see and buy directly.

-  **Warehouse** -- for the back room, reserves or separate storage for several points of sale in a chain.

There is **no** technical difference between them -- it is just a convenient way to split warehouses into categories if your products are not stored in one place. You do not have to track stock in both warehouses -- you can delete one of them.

> [!IMPORTANT]
> 
> If you keep both warehouses, you will have to move products between them manually when you restock the counter. This gives you full control over the stock, but it is easy to get confused if the club has one administrator and one room. If you do not need separate tracking, keep just one warehouse.

## Linking a warehouse to a register

To deduct sales at a specific register from the right warehouse, link them to each other:

-  Go to <cmd text="Settings"/> -> <cmd text="Finances"/> -> <cmd text="Registers"/>.

-  Select the register of the PC you need and set the warehouse in the matching field.

> [!NOTE]
> 
> The full list of register card fields is in [Register card](./../../../configure/finance/registers/register-card.md).

## Incoming stock and write-offs

For the warehouse stock to match reality, record incoming products in the system when you buy them, not only when you sell them to a guest.

A sale deducts the product from the warehouse automatically. Incoming stock, transfers and manual adjustments are recorded on the other tabs of the [Shop](./_index.md) section: **Warehouse Operations**, **Stock Movement**, **Stock Count** and **Product Stock**.

> [!IMPORTANT]
> 
> If you have several clubs on one Gizmo Server, each branch can have its own warehouse -- this is useful when the stock of different clubs must not mix. How to work with several clubs is described in [Multiple clubs on one server](./../../../tutorials/operations/multiple-clubs-setup.md).
