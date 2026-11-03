---
title: Discount card
order: 1
---

The card holds all the conditions of one discount: where and when it is available, what it applies to and what the user gets. The card opens with the <cmd text="Create Discount"/> button on the **Discounts** tab.

## General block

-  **Enable Discount** -- activates the discount in the system. Only enabled discounts can be used.

-  **Name** -- the discount name, required.

-  **Description** -- the discount description.

## Availability

The block sets where the discount is available by branch, and by date and time.

### By branch

The block lists your branches and their availability status. By default the discount is disabled in all branches.

### Custom ranges

By default the discount is available at any time. To limit its validity, turn on **Date Range** and fill in the **Start Date** and **End Date** fields. With a date range set, the discount can be applied only within that period.

You can also set time intervals when the discount is available.

To do this, turn on **Time Range**, add a time range with the <cmd text="+"/> button and set it up.

A time range is set per day of the week.

To delete a time range, click the trash icon next to it.

## Target groups

Target groups are the groups the discount applies to.

The following target group types are available:

-  **Products**.

-  **Time Products**.

-  **Product Groups**.

-  **Payment Methods**.

-  **Tariffs**.

You can add several target groups at once, but then you must set the **Group Activation** parameter. It takes only one of two values:

-  **All** -- for the discount to apply, the user's order must contain all the added target groups.

-  **Any** -- for the discount to apply, the user's order must contain at least one of the added target groups.

To add a target group, click <cmd text="Create Target Group"/> and select the type of target group to create.

In an added target group, you can specify exactly what the discount applies to: add objects with the <cmd text="+"/> button or check **Include All**. In the second case the discount applies to all objects of the target group -- for example, to all products if the target group is **Products**.

If you added an object to a target group by mistake, delete it with the trash icon next to that object.

If you added a target group by mistake, delete it with the <cmd text="Delete Group"/> button next to that group.

An added target group also shows the activation conditions for its objects.

The activation conditions for group objects differ from the group activation conditions. The options are:

-  **All** -- to activate the target group, the user's order must contain all the objects of this target group.

-  **Any** -- to activate the target group, the user's order must contain at least one object of this target group.

-  **Quantity** -- the **Minimum Quantity** parameter appears. To activate the target group, the user's order must contain at least that many objects of this target group.

-  **Amount** -- the **Minimum Amount** parameter appears. To activate the target group, the user's order must contain objects of this target group worth that amount or more.

## Reward

The reward is what the user gets when the discount conditions are met.

Reward type:

-  **Bonus** -- the user gets bonus points for the order. In effect, this is cashback in points.

-  **Discount** -- the user gets a discount.

The reward can apply to:

-  **Order Line** -- the user gets a discount only on the objects listed in the target groups.

-  **Entire Order** -- the user gets a discount on the whole order, not only on the objects listed in the target groups.

Reward calculation type:

-  **Percentage** -- the discount percentage applied to the order line or to the whole order.

-  **Fixed** -- a fixed reward amount for the order (the discount amount or the amount of bonus points granted).
