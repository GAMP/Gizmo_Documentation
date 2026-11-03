---
title: Reservation card
order: 2
---

The card holds all the conditions of one reservation: when and for how long the host is reserved, who owns the reservation and which hosts it includes.

The card opens with the <cmd text="Create Reservation"/> button in the [calendar](./calendar.md) -- after you select **With Payment** or **Without Payment**. The screen has two columns: the reservation conditions on the left and host selection on the right.

## Reservation details

The first block of the left column.

-  **Start Date and Time** -- the moment the host becomes taken. The calendar icon is next to the field.

-  **Duration** -- how long the host is reserved for. Selected from a list with values from `00:30` and up, in half-hour steps.

## Owner information

The second block of the left column.

-  **Owner** -- who the reservation is for. To the left of the field are two switches: a reservation for a guest in the database or for a person without an account.

-  **Additional Phone** -- a backup contact number. The country code is selected to the left of the field.

## Notes

The third block of the left column. While there are no notes, the block shows "No notes". The pencil icon opens a window to enter text.

## Available hosts

The right column. It lists the hosts free at the selected time -- a reservation can include one host or several at once.

The list does not appear right away: until the date, duration and owner are filled in, a hint is shown instead: "Required reservation parameters -- Select a date, duration and owner to see available hosts".

## Saving the reservation

When the conditions are filled in and the hosts are checked, click <cmd text="Continue"/> in the top right corner. The reservation summary opens with the **Owner Details** block -- check it and click <cmd text="Save"/>. The <cmd text="Cancel"/> button closes the card without saving.

**IMAGE: Reservation summary with the Owner Details block and the Save and Cancel buttons**

A **With Payment** reservation requires payment when it is created. The new reservation appears in the [reservation log](./reservation-log.md) with the "Pending" status and in the [calendar](./calendar.md) grid.
