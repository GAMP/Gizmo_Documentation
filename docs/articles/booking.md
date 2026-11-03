---
title: Reserving gaming stations
order: 4
---

A **reservation** holds a specific gaming station for a guest for a set time in advance. This is useful for clubs where no stations are left free at peak hours: a guest with a reservation comes to their station, and nobody else takes it.

This article explains how a reservation works, which Gizmo objects it is linked to, and what happens to it from creation to the end. For step-by-step instructions, see [How to create a reservation](./../tutorials/booking/create-booking.md).

## What does a reservation consist of?

Each reservation is a record with a set of conditions:

- **Start time and duration** -- when the station will be taken and for how long. The duration is chosen in half-hour steps.
- **Owner** -- the guest the reservation is made for. This can be a customer from the database or a person without an account.
- **Hosts** -- one or more gaming stations included in the reservation.
- **PIN** -- a code created together with the reservation. It is shown in the **PIN** column of the reservation log.
- **Notes** and **additional phone** -- internal information for the operator.
- **Reservation status** and **payment status** -- the state of the reservation (for example, "Expired" once its time has passed) and of its payment (for example, "Unpaid").

All fields are described in [Reservation card](./../usage/gizmo-manager/reservations/reservation-card.md).

## How is a reservation linked to other objects?

A reservation does not work on its own -- it relies on hosts, users, sales and operator permissions.

**Hosts and host groups.** A reservation is always linked to specific hosts. When you create one, Gizmo shows only the hosts that are free at the selected time, and in the calendar you can filter them by branch and [host group](./../usage/gizmo-manager/stations/station-groups/_index.md). Whether one reservation can include several hosts is set by the **Allow Multi-Host Reservations** rule. This way the owner can reserve stations for themselves and their friends at once.

**Reservation PIN.** If the reservation owner sits down at the reserved PC, no PIN is asked. If a friend sits down, they must enter the reservation PIN to log in -- so the owner passes the PIN to the people they reserved stations for.

**Users.** The reservation owner is a customer from the database or a guest without an account. Only an operator with the **Guest Reservations** permission can make reservations for unregistered guests.

**Tariffs and time products.** A reservation is paid with time at the tariff rate, with a time product, or both -- this is set by the **Purchase Option** rule. A time product can be used for a reservation only if **Available for Reservations** is on in its card -- see [Time product card](./../configure/finance/time-products/time-product-card.md).

**Discounts.** If **Apply Discounts** is on in the rules, the guest's current discounts apply to the reservation cost -- the same way as to regular purchases. How discounts work is described in [Discount card](./../usage/gizmo-manager/marketing/discounts/discount-card.md).

**Operator permissions.** Three permissions in the permission set control reservations: **Create** reservations, **Create Reservations Without Payment** and **Guest Reservations**. Without the first, the operator cannot make a reservation; without the second, they cannot make one without payment. For details, see [Permission card](./../configure/operators-and-permissions/permissions/permission-card.md).

**Client shell.** There are two kinds of reservation alerts. The general alert is shown on the screen of the reserved PC -- how many minutes before the start is set in the reservation policy. A guest who is sitting at the reserved station at that time gets a separate Gizmo Client notification that someone else's reservation will start soon -- its text, timing and type are set in [Notifications](./../configure/client/notifications.md).

## Reservation lifecycle

1. **Creation.** The operator creates the reservation -- with or without payment. The reservation appears in the calendar and in the reservation log with the "Pending" status.
2. **Before the start.** For the time set in the **Block User Login Before Reservation Start** rule, other guests can no longer log in to the reserved station. The guest and the operator get notifications that the reservation is coming up -- the set number of minutes in advance. If another guest is already sitting at the station, they get a warning in advance, and their session ends when the reservation starts.
3. **Start.** The station stays closed to other guests for the time set in the **Block User Login After Reservation Start** rule -- it waits for the owner. The reservation owner does not need a deposit to log in; but if the reservation is unpaid or partly paid, they have to pay the rest when logging in.
4. **No-show.** If the owner does not log in within the time set in the **Expire on No Login** rule, the reservation is canceled and the station is available to everyone again.
5. **End.** When the reservation time has passed, it gets the "Expired" status and stays in the reservation log -- there you can check whether the reservation took place and whether it was paid.

## Payment and cancellation

A reservation can be made **with payment** -- the guest pays right away -- or **without payment**, if the guest will pay later. These rules affect the cost:

- **Fee Type** -- the club can charge a fixed amount for the reservation itself, a percentage of the cost, or nothing.
- **Minimum Payment Percentage** -- what part of the cost the guest pays in advance.
- **Reservation Payment Expiration** -- how many minutes the guest has to complete the payment after the reservation is created.
- **Minimum and Maximum Time** -- for how long a station can be reserved at all.

Two rules control cancellation: **Cancellation Grace Period** -- how many minutes before the start the guest can cancel the reservation without a penalty, and **Refund on Cancellation** -- what percentage of the payment is returned.

## How does Gizmo calculate station availability?

When it looks for free hosts, Gizmo takes two parameters into account:

- **Expected Session Time** -- the standard length of a guest session in minutes.
- **Deficit Factor** -- a percentage that accounts for a possible shortage of stations.

Both parameters affect which hosts the system offers for a reservation at the selected time.

## Where to find what

| What | Where |
|---|---|
| Reservation, payment, cancellation and notification rules | **Settings -> Policies -> Reservations** -- see [Reservations](./../configure/policies/reservations.md) |
| Making reservations and station occupancy | **Reservations -> Calendar** -- see [Calendar](./../usage/gizmo-manager/reservations/calendar.md) |
| Reservation history, reservation and payment statuses | **Reservations -> Reservation Log** -- see [Reservation log](./../usage/gizmo-manager/reservations/reservation-log.md) |
| Guest notification in the shell | **Settings -> Client -> Notifications** -- see [Notifications](./../configure/client/notifications.md) |
| Time products for paying for a reservation | Time product card, the **Available for Reservations** field |
| Operator permissions for reservations | **Settings -> Operators and Permissions -> Permissions**, the **Reservations** block |
