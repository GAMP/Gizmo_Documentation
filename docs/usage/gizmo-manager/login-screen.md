---
title: Login screen
order: 0.1
---

**IMAGE: Gizmo Manager login screen with the Username and Password fields**

The main authorization screen. Enter the operator's **Username** and **Password** to sign in. Credentials from the client website will not work -- only the credentials issued to the operator give access.

> [!TIP]
> 
> Do not use simple or default passwords. When you create an [operator account](./../../configure/operators-and-permissions/operators/_index.md), set a strong password for yourself and your staff.

Only an administrator can create an operator account: **Settings -> Operators and permissions -> Operators**, the <cmd text="Create Operator"/> button. Fill in the operator's real email and phone -- they are needed to restore access.

## Selecting a register

After you sign in, the **Select Register** screen opens. The top block shows the name and address of the branch, and below it is the **Select a register** field with the list of registers. Select the register you will work at and click <cmd text="Continue"/>. All the operator's sales in this session will belong to the selected register.

**IMAGE: Select Register screen with the branch name and address and the register list**

## Start-of-shift data

If the shift is set to **Required** in the operator card, the **Enter Start-of-Shift Data** screen opens after you select the register. In the **Cash Amount** field, enter how much cash is in the cash drawer at the start of the shift and click <cmd text="Continue"/> -- the shift opens and you see the club map.

**IMAGE: Enter Start-of-Shift Data screen with the Cash Amount field**

The administrator sets the shift mode for an operator in the [operator card](./../../configure/operators-and-permissions/operators/operators-card.md), in the **Shift** block: **Disabled**, **Optional** or **Required**.

## Signing in with an open shift

If the operator signed out of Gizmo Manager without closing the shift, the **What would you like to do?** screen appears at the next sign-in with two options:

- **Continue Open Shift** -- go back to work in the same shift;
- **Close Open Shift** -- go to closing the shift and reconciling the amounts.

**IMAGE: "What would you like to do?" screen with the Continue Open Shift and Close Open Shift options**

How to open and close a shift is described in [How to manage shifts in the Manager](./../../tutorials/operations/shifts.md).
