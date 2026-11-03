---
title: Permission card
order: 1
---

**IMAGE: the permission card with the preset name, the search field and the collapsible permission categories**

The permission card opens when you create a new preset or edit an existing one.

**Name** -- the name of the permission preset.

## Permissions

Permissions are grouped by category. Each category shows how many of its permissions are turned on (for example, 19/22). To collapse or expand a category, click the arrow to the right of its name. The <cmd text="Collapse All" /> button collapses all categories at once.

To find a permission quickly, use the **Search** field.

> [!NOTE]
>
> Some permissions depend on others: if the parent permission is off, its child permissions cannot be selected and are shown in gray.

> [!NOTE]
>
> In the "past days" permissions (for example, **Void Past Days Invoices** or **View Past Days Invoices**), past operations are all operations created before 00:00 of the current day, as long as they are not part of the operator's current shift.

All available categories and their permissions are described below.

### Sales

- **Custom Price** -- setting a custom price on a sale: an operator with this permission can edit the price field of an item in the cart.
- **Unpaid** -- working with invoices that are awaiting payment.
- **Void** -- voiding invoices.
- **Void Used Time Invoices** -- voiding invoices for time products that the guest has already used for at least one second.
- **Void Closed Shift Invoices** -- voiding invoices created in a closed shift.
- **Void Invoices Not Owned By You** -- voiding invoices of other operators.
- **Void Past Days Invoices** -- voiding invoices from previous days.
- **Void Non-Current Branch Invoices** -- voiding invoices of other branches.
- **Deposit** -- adding money to a user's deposit.
- **Withdraw Deposit** -- returning money from a user's deposit.
- **Void Deposit** -- canceling a deposit top-up.
- **Open Cash Drawer** -- opening the cash drawer.
- **Change User Payment Options** -- changing payment methods and terms for a specific guest: the operator can override the time sources (time products, deposit) set for the user group.
- **Allow Time Credit** -- giving a user time on credit. It works only within the credit allowed for the user group -- see [How to enable postpay](./../../../tutorials/staff/postpay.md).
- **Disable Receipt Printing** -- the option not to print a receipt on a sale.
- **View Invoices** -- viewing the list of invoices.
- **View Paid Invoices** -- viewing paid invoices. If this permission is off, the operator sees only unpaid and partially paid invoices.
- **View Past Days Invoices** -- viewing invoices from previous days.
- **View Deposits** -- viewing deposit transactions.
- **View Past Days Deposits** -- viewing deposit transactions from previous days.
- **Delete Purchased Time** -- deleting purchased time products.

### Shift

- **View Expected** -- viewing the expected shift figures.

### Stock

- **Create** -- creating stock items.
- **Edit** -- editing stock items.
- **Delete** -- deleting stock items.
- **View Transactions** -- viewing stock transactions.
- **View Previous Day Transactions** -- viewing transactions from the previous day.
- **Count** -- performing stock counts.
- **Count In Current Branch** -- counting stock in your own branch.
- **Count Globally** -- counting stock in all branches.
- **View Expected Quantity** -- viewing the expected stock.
- **Stock Level** -- viewing stock levels.
- **Stock Level In Current Branch** -- viewing stock levels of your own branch.
- **Stock Level Globally** -- viewing stock levels of all branches.
- **Receive** -- registering incoming stock.
- **Receive In Current Branch** -- registering incoming stock in your own branch.
- **Receive Globally** -- registering incoming stock in all branches.
- **Transfer** -- moving products between items.
- **Transfer In Current Branch** -- transfers within your own branch.
- **Transfer Globally** -- transfers between all branches.
- **Adjust In Current Branch** -- adjusting stock in your own branch.
- **Adjust Globally** -- adjusting stock in all branches.
- **Sell At Retail Price** -- selling products at the retail price.
- **Sell At Cost** -- selling products at cost.
- **Write Off** -- writing products off the warehouse.

### Monitoring

Permissions to access the host monitoring module.

### Reports

Permissions to access the reports module.

### Settings

Permissions to access the Gizmo Manager settings.

### Apps

- **Create** -- creating apps.
- **Edit** -- editing apps.
- **Delete** -- deleting apps.

### Marketing

Permissions to access the marketing tools.

### User

- **List** -- viewing the list of users.
- **Reset Password** -- resetting a user's password.
- **Unban User** -- lifting a user's ban.
- **Ban User** -- banning a user.
- **Logged In Users** -- viewing active sessions.
- **Create** -- creating new users.
- **Delete** -- deleting users. Unlike a permanent delete, a deleted user can be restored.
- **Permanent Delete** -- deleting users permanently.
- **Rename** -- changing a user's username.
- **Change User Group** -- moving a user to another group.
- **Edit** -- editing a user's profile.
- **View Statistics** -- viewing a user's statistics.

### Log

- **Clear** -- clearing the event log.

### Waiting line

- **Manage Waiting Line** -- managing the waiting line for hosts.

### Terminal

- **View Transactions** -- viewing the financial transactions of the terminal.
- **View Previous Day Transactions** -- viewing transactions from the previous day.
- **Pay In** -- adding cash to the register.
- **Pay Out** -- taking cash out of the register.

### Management

- **Task Access** -- managing tasks on hosts.
- **Process Management** -- viewing and ending processes on hosts.
- **File Management** -- managing files on hosts.
- **Maintenance Management** -- putting hosts into maintenance mode.
- **Security** -- managing security profiles on hosts.
- **Input Lock** -- locking the keyboard and mouse on hosts.
- **Restart Client Module** -- restarting Gizmo Client on hosts.
- **Power On Hosts** -- turning hosts on remotely.
- **View Remote Control** -- viewing host screens without control.
- **Remote Control** -- full remote control of hosts.

### Reservations

- **Create** -- creating reservations.
- **Create Reservations Without Payments** -- creating reservations without a linked payment.
- **Guest Reservations** -- creating reservations for unregistered users.

### User group

- **Create** -- creating user groups.
- **Edit** -- editing user groups.
- **Delete** -- deleting user groups.

### Layouts

- **Create** -- creating host layouts.
- **Edit** -- editing layouts.
- **Delete** -- deleting layouts.

### Hosts

- **Create** -- creating hosts.
- **Edit** -- editing hosts.
- **Delete** -- deleting hosts.

### Host groups

- **Create** -- creating host groups.
- **Edit** -- editing host groups.
- **Delete** -- deleting host groups.

### Controllers

- **Create** -- creating controllers.
- **Edit** -- editing controllers.
- **Delete** -- deleting controllers.

### Security profiles

- **Create** -- creating security profiles.
- **Edit** -- editing security profiles.
- **Delete** -- deleting security profiles.

### Assets

- **Create** -- creating asset records.
- **Edit** -- editing assets.
- **Delete** -- deleting assets.

### Tasks

- **Create** -- creating tasks for hosts.
- **Edit** -- editing tasks.
- **Delete** -- deleting tasks.

### Client tasks

- **Create** -- creating tasks that run on client hosts.
- **Edit** -- editing client tasks.
- **Delete** -- deleting client tasks.

### Products

- **Create** -- creating products in the catalog.
- **Edit** -- editing products.
- **Delete** -- deleting products.

### Product groups

- **Create** -- creating product groups.
- **Edit** -- editing product groups.
- **Delete** -- deleting product groups.
