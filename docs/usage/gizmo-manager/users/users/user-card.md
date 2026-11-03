---
title: User card
order: 2
properties: []
---

The card holds everything about one guest: their details, group, money, time, points and visit history.

The card opens when you double-click a row in the [user list](./_index.md), and the <cmd text="Create User"/> button opens an empty form. Changes are saved with the <cmd text="Save"/> button in the top right corner, and <cmd text="Cancel"/> discards them. Until the changes are saved, the top of the screen shows the "Unsaved changes" label.

**IMAGE: User card with the user information column, status, user group, notes and attributes**

## User information

The left column.

-  <cmd text="Select Image"/> -- the user's avatar.

-  **First Name** and **Last Name**.

-  **Username** -- the login the guest uses to sign in to the client shell. Required.

-  **Email**.

-  **Phone** and **Mobile Phone** -- the country code is selected to the left of the number.

Which other fields are required is set by the user's group -- the **Required User Information** block in the [User group card](./../user-groups/user-group-card.md).

## Status

-  **Account Disabled** -- the user cannot log in.

-  **Request User Info** -- at login, the user is asked to fill in the missing details.

## Organization

The **User Group** field -- the group whose rules apply to the user: host access, ways to pay for time, discount, credit and points. The **Members** group suits regular registered customers. See [User Groups](./../user-groups/_index.md).

## Notes and attributes

-  **Notes** -- the operator's internal notes. A new note is added with the **+** icon. The note color shows its type: red is a ban note, and the other colors are just color labels for different types of notes.

-  **Attributes** -- extra fields created in [Attributes](./../../../../configure/server/attributes/_index.md).

## Tabs of an existing user

Once the user is saved, the card shows tabs with their history:

-  **Sessions** -- all the guest's sessions: host name, start and end time, duration. The host name in a row is the PC the guest sat at.

-  **Purchases** -- the guest's purchase history.

-  **Time Products** -- the purchased time products. You can remove a time product from the guest. Its invoice is not voided and the money is not refunded: if you need to return the payment, void the invoice.

-  **Deposits** -- the history of deposit operations: top-ups and withdrawals.

-  **Ban Log** -- the history of the user's bans.

-  **Statistics** -- a summary of the guest:
   -  **Money Spent** -- in total and broken down into **Time Products**, **Sessions** and **Products**;
   -  **Deposits** and **Refunded from Deposit**;
   -  **Points Earned** and **Points Redeemed**;
   -  **Time in System** and **Logins** -- the number of logins.

**IMAGE: Statistics tab of the user card with money spent, deposits, points and logins**

## Actions

In the top right corner of the card are the <cmd text="Sales"/> button, which opens a sale for this user, and the <cmd text="Actions"/> menu:

-  **Request User Info** -- ask the guest to fill in the missing details.

-  **Reset Password** -- clear the password after you confirm it in the dialog. The reset takes effect immediately: the guest signs in with the username only and sets a new password after signing in.

-  **Select Image** -- change the avatar.

-  **Issue RFID Card** -- link an RFID card to the user.

-  **Ban User** -- block the guest's access to hosts permanently or for a set period.

-  **Refund Deposit** -- return money from the deposit to the guest.

-  **Delete User**.

**IMAGE: The Actions menu of the user card with Request User Info, Reset Password, Issue RFID Card, Ban User, Refund Deposit and Delete User**

> [!WARNING]
>
> Reset a password only at the request of the account owner and after you verify their identity.

How to create an account and top up a deposit is described in [Customer accounts](./../../../../tutorials/staff/user-accounts-guide.md).
