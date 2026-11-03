---
title: User group card
order: 1
---

The card holds all the rules of one user group: what its members are allowed to do, how they can pay for time, which hosts they can access and which discount applies to them.

The card opens when you double-click a row in the [group list](./_index.md), and the <cmd text="Create Group" /> button opens an empty form. The screen has two columns.

## Name

The first block of the left column. It has a single **Name** field -- the group name shown in lists and in user cards.

## Overrides

Three separate checkboxes in the left column. Each lets the group override a setting made at the host level.

- **App Group Override** -- the group members get their own [app group](./../../stations/gruppy-prilozheniy/_index.md) instead of the one set for the host group.
- **Security Profile Override** -- the members get their own [security profile](./../../stations/profili-bezopasnosti/_index.md).
- **Age Rating Override** -- the members get their own age restriction.

## Required user information

A block of the left column. It sets which details must be filled in the card of a group member. The pencil icon opens the **Manage Required User Information** window.

The window lists ten card fields, each with its own checkbox: **First Name**, **Last Name**, **Date of Birth**, **Email**, **Address**, **Phone**, **Mobile**, **Postal Code**, **Country**, **Gender**. The checked fields become required for the group members.

The **Select All** link checks all fields at once, and to its right is a counter such as "0 of 10 selected". At the bottom of the window are the <cmd text="Cancel" /> and <cmd text="Save" /> buttons.

## Settings

The bottom block of the left column. A table with two columns, **Feature** and **Enable**; each row is a separate switch.

- **Personal Storage** -- the group members get a personal folder on the host whose files are kept between sessions.
- **Login from Manager** -- the operator can log the member in on a host from Gizmo Manager.
- **Login from Host** -- the member can log in by themselves from the client machine.
- **User Logout Button** -- the client shell shows the member a logout button.

## User category

The first block of the right column. The **Used For** field sets who the group is for and takes one of three values:

- **Registered Only** -- the group is for customers with an account;
- **Registered and Guests** -- for both;
- **Guests Only** -- for customers without their own account.

## Discount group

The second block of the right column. The **Discount Assignment** field links a discount group from the [Marketing](./../../marketing/_index.md) section to the group. The cross icon next to the field removes the link.

## Billing

The third block of the right column. The **Allowed Time Sources** table with the **Enable** column sets how the group members can pay for time at a host.

- **Time Product** -- time can be deducted from purchased time products.
- **Deposits** -- money can be deducted from the deposit.

If both switches are off, the group members have no way to pay for time.

## Credit

The fourth block of the right column. It shows the current credit rule; with no credit, it shows "No Credit". The pencil icon opens the **Credit** window.

The window has two independent switches, each with the same three values.

- **Allow Credit on Sale** -- whether you can sell to a group member on credit.
- **Allow Credit Use** -- whether a member can spend the credit granted.

Values: **No Credit** -- no credit allowed; **Unlimited** -- no limit; **Limited** -- credit up to a set amount.

At the bottom of the window are the <cmd text="Cancel" /> and <cmd text="Save" /> buttons.

## Loyalty

The fifth block of the right column. It shows the linked loyalty program; with none, it shows "No Loyalty Program". The pencil icon opens the **Loyalty** window with three options:

- **No Loyalty Program** -- group members do not earn points;
- **Money** -- points are earned for money spent;
- **Time** -- points are earned for time spent at a host.

At the bottom of the window are the <cmd text="Cancel" /> and <cmd text="Save" /> buttons.

## Access

The bottom block of the right column. The **Host Group** table with the **Enable** column lists all the club's [host groups](./../../stations/station-groups/_index.md); the switch next to each one opens or closes access to its hosts for the group members.
