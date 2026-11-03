---
title: Reservations
order: 3
---

**IMAGE: Settings -> Policies -> Reservations page with the general rules, purchase options, cancellation policy and notifications blocks**

Here you set up the host reservation system.

## General rules

-  **Block User Login Before Reservation Start** -- does not let other users log in to a reserved host for the set number of minutes before the reservation starts.

-  **Block User Login After Reservation Start** -- does not let other users log in to the host for the set time after the reservation starts.

-  **Expire on No Login** -- the number of minutes a user can be late before the reservation is canceled.

-  **Allow Multi-Host Reservations** -- lets you include several gaming stations in one reservation.

-  **Deficit Factor** -- a percentage that accounts for a possible shortage of resources when the system calculates which hosts are available for reservation.

-  **Expected Session Time** -- the standard session length in minutes, used to calculate host availability.

## Purchase options

**Select Purchase Option** -- sets what can be bought with a reservation:

-  **Time and Time Products** -- both time and time products can be bought.

-  **Time Only** -- only time can be bought.

-  **Time Products Only** -- only time products can be bought.

-  **Minimum Time** -- the minimum reservation length in minutes.

-  **Maximum Time** -- the maximum reservation length in minutes.

**Select Fee Type** -- the type of fee charged for a reservation:

-  **Fixed** -- a fixed fee amount.

-  **Percentage** -- a fee as a percentage of the cost.

-  **None** -- no fee is charged.

-  **Minimum Payment Percentage** -- the minimum share of the reservation cost, in percent, that the user must pay in advance.

-  **Reservation Payment Expiration** -- the time in minutes within which the user must complete the payment after the reservation is created.

-  **Apply Discounts** -- when on, current discounts apply to reservations.

## Cancellation policy

-  **Cancellation Grace Period** -- the time in minutes before the reservation starts during which the user can cancel it without a penalty.

-  **Refund on Cancellation** -- the percentage of the paid amount that is returned to the user when the reservation is canceled.

## Notifications

-  **Client Reservation Alert Time** -- how many minutes before the reservation starts a general reservation alert appears on the screen of the reserved PC.

   This is not the same as **Reservation Notification** in [Notifications](./../client/notifications.md): there you set up messages for a guest already sitting at the PC, telling them that someone else's reservation will start soon.

-  **Manager Reservation Alert Time** -- how many minutes before the reservation starts the operator gets a notification.
