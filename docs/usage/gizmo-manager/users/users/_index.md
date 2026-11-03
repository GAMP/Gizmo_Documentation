---
title: Users
order: 1
---

The tab holds the list of all the club's accounts and opens first when you go to the section. For each account you can see who it is, which group they are in, how much money, time and points they have, and whether they are at a host right now.

Use this tab for everyday work with guests: find the one you need, log them in on a host and log them out, top up the deposit, make a sale, ban and unban, delete and restore an account. Two service tools also start from here -- duplicate search and bulk import of customers from a file.

## Create buttons

They are in the top right corner.

-  <cmd text="Create User"/> -- opens an empty [User card](./user-card.md).

-  <cmd text="User Audit"/> -- opens the duplicate search window, described below.

-  <cmd text="Import Users"/> -- opens the window for importing a list from a file, described below.

## Actions on selected accounts

The bar above the list. On the left is the counter of checked accounts, and to its right are the action icons. Until you check at least one account, the actions are unavailable.

-  **Log In** -- logs the selected user in on a host. Shortcut `CTRL+L`.

-  **Log Out** -- ends the user's session on the host. Shortcut `CTRL+ALT+L`.

-  **Ban** -- blocks the user's access to hosts.

-  **Delete** -- removes the account from the list.

The <cmd text="..."/> icon opens the full list of actions, including those not shown as icons.

-  **Log In**, **Log Out** -- the same as the icons.

-  **Sales** -- goes to making a sale for the selected user. Shortcut `CTRL+S`.

-  **Deposit** -- tops up the money deposit. Shortcut `CTRL+D`.

-  **Other Actions** -- **Ban**, **Unban**, **Delete**, **Hard Delete**, **Restore**.

-  **Assets** -- the assets issued to the user.

## Counters

They are on the right side of the actions bar and show the state of the whole database, whatever filter is selected.

-  **Deposits** -- the total money on all users' deposits.

-  **Users** -- the total number of accounts.

-  **Banned** -- the number of accounts with an active ban.

-  **Deleted** -- the number of deleted accounts.

## State filters

Buttons above the table. The selected button is highlighted, and only one works at a time.

-  **All** -- shows all accounts.

-  **Active** -- only users who are in a session.

-  **Guests** -- accounts of guest groups.

-  **Banned** -- accounts with an active ban.

-  **Deleted** -- deleted accounts.

## Search and filters

The two icons to the right above the table open an extra search and filter bar.

-  **Search** -- the field to search the list.

-  **Quick Filter** -- the same account state as the buttons above the table. The current value is shown next to the filter name.

-  **User Group** -- leaves the accounts of the selected group.

The conditions you set are cleared with the <cmd text="Clear All"/> link, and the bar closes with the <cmd text="Cancel"/> button on the right.

## User list

Each row is one account. Double-click a row to open the [User card](./user-card.md).

-  **Username** -- the login the guest uses to sign in to the client shell.

-  **First Name**, **Last Name** -- personal details from the card.

-  **User Group** -- the [group](./../user-groups/_index.md) the account belongs to.

-  **Session** -- the user's current session.

-  **Host** -- the host the user is at right now.

-  **Slot** -- the host slot the user occupies.

-  **Balance** -- the account's money balance. A negative value means debt.

-  **Time** -- the paid time left.

-  **Deposits** -- the amount on the deposit.

-  **Points** -- the loyalty points earned.

-  **Applied** -- what is being charged while the user is at a host.

-  **Age** -- the user's age.

-  **Created** -- the date and time the account was created.

-  **State** -- the account state.

The accounts are split into pages; use the arrows in the bottom right corner to move between them.

## The "User Audit" window

Opens with the <cmd text="User Audit"/> button. It looks for accounts created twice for the same person: it compares accounts by contact details and, if set, merges the pairs it finds.

The window has three blocks.

-  **Check Duplicates By** -- the comparison criteria: **Phone Number** and **Email**. Both are on by default; you can keep just one.

-  **Phone Country Code** -- required. Until it is filled in, the window shows "This field is required!" and you cannot start the audit. The code is needed to bring the numbers to one format before comparing them.

-  **Action** -- **Find Duplicates**: only detect and report, the data does not change; **Merge Duplicates**: detect and merge automatically.

At the bottom of the window are two buttons: <cmd text="Cancel"/> closes the window without changes, and <cmd text="Run Audit"/> starts the check.

## The "Import Users" window

Opens with the <cmd text="Import Users"/> button. It imports many accounts at once from an Excel spreadsheet.

-  **Phone Country Code** -- required, as in the audit. It is used to bring the numbers to one format during the check and import.

-  **Upload area** -- drag the file into it or select it with the **browse** link. Supported formats are `.xls`, `.xlsx`, `.xlsm`, `.xlsb`, `.xlt`, `.xltx`, `.xltm`, and the file size limit is 50 MB.

Under the upload area is a reminder that the required user fields are checked before the import starts.

At the bottom of the window are two buttons: <cmd text="Cancel"/> closes the window, and <cmd text="Continue"/> goes on to upload the selected file.
