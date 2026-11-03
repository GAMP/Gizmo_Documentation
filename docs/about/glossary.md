---
title: Key concepts
order: 1.8
---

Short definitions of the terms used in the Gizmo knowledge base. Details are in the linked articles.

## Programs

| Term | What it is |
|---|---|
| **Gizmo Server** | The main component: tracks time and money, monitors gaming stations and guests, stores the settings. It must run all the time -- as a Windows service or a console application. See [Gizmo Server](./overview/gizmo-server.md) |
| **Gizmo Manager** | The operator's and administrator's workspace: the floor, sales, settings, reports. It opens in a browser, and you can work from several devices at once. See [Gizmo Manager](./overview/gizmo-manager.md) |
| **Gizmo Client** | The shell on gaming PCs: replaces the Windows desktop and gives the guest access to games, the shop and their account. See [Gizmo Client](./overview/gizmo-client.md) |
| **Gizmo Companion** | Connects the server to the POS hardware at the point of sale and more. See [Gizmo Companion](./overview/gizmo-companion/_index.md) |
| **Database** | Stores all club data: guests, balances, prices, sales history. Gizmo works with Microsoft SQL Server or PostgreSQL. See [Databases](./../instalation/gizmo/self-hosted/databases/_index.md) |

## People and places

| Term | What it is |
|---|---|
| **User** | A regular guest with an account. Holds purchased time products, deposit, loyalty points and personal files. See [Customer accounts](./../tutorials/staff/user-accounts-guide.md) |
| **Guest (guest account)** | A one-time guest without registration. The account is created automatically and goes to the default guest group of the host group. Unused time products and deposit of a guest account are lost when the balance is closed |
| **Operator** | A club employee with an account for working in Gizmo Manager. An operator account cannot be used as a guest account. See [Operator card](./../configure/operators-and-permissions/operators/operators-card.md) |
| **Host** | A gaming station where a guest sits: a PC with Gizmo Client or an endpoint |
| **Endpoint** | A gaming station without Gizmo Client -- a console, a pool table and so on. It is created manually. See [How to add a console or another gaming station](./../tutorials/hosts-operations/add-terminal.md) |
| **Branch** | A separate club in a chain that runs on one server. See [Multiple clubs on one server](./../tutorials/operations/multiple-clubs-setup.md) |
| **Register** | A point of sale that Companion and the POS hardware are linked to. See [How to connect Companion and set up a register](./../tutorials/sales/register/companion-and-register.md) |

## Groups and profiles

| Term | What it is |
|---|---|
| **User group** | A set of rules for guests: how they pay for time, which hosts they can access, credit, discounts, loyalty points. A guest belongs to only one group. See [User groups](./../tutorials/staff/user-groups.md) |
| **Host group** | Combines the gaming stations of one zone: sets their app group, security profile and skin. A host belongs to only one group and must belong to one: without a group, Gizmo Client will not connect to the server |
| **App group** | A set of apps available to the guest. It is assigned to a host group or a user group |
| **Layout** | A plan of where the seats are on the **Map**, for example a floor or a zone. A seat can be on several layouts. See [Map](./../tutorials/operations/reading-the-map.md) |
| **Tariff** | Rules for paying for time: the hourly rate, the starting and minimum charges, steps and schedules for different hours of the week. See [Tariffs](./../tutorials/sales/pricing/tariffs-guide.md) |
| **Security profile** | A set of Windows restrictions for the guest: hidden drives, blocked programs, policies. See [Security profiles](./../tutorials/client-shell/security-profiles.md) |

## Sessions

| Term | What it is |
|---|---|
| **User session** | The time from the guest's login to logout. Moving to another seat does not interrupt the session. A guest can have only one session at a time |
| **Suspended session** | A session whose login command has already been sent to the host, but the host has not connected to the server yet: it is off or booting. Such a session is marked with an exclamation mark |
| **Pending session** | A session on a host that lost its connection to the server unexpectedly. If the connection comes back, the session continues; otherwise it is closed when the timeout runs out -- see [Shell](./../configure/client/shell.md) |
| **Billing period** | The period during which time is charged: it starts when the guest logs in and ends when an invoice for the time is issued -- automatically or through **Close Balance**. If the guest logs in again before that, for example after a PC restart, the period continues and the starting charge is not taken again. See [Invoices](./../configure/finance/invoices.md) |

## Money

| Term | What it is |
|---|---|
| **Invoice** | A list of purchased items. It can be unpaid, partially paid or fully paid. Products and time products go into the invoice at the moment of sale, and per-minute time -- when the balance is closed |
| **Product** | A shop item. Its price is in money, in points or both |
| **Time product** | A product that contains gaming minutes. It can have an expiration period and restrictions by host group and time. See [Time packages](./../tutorials/sales/pricing/time-packages-guide.md) |
| **Bundle** | Several products and/or time products sold as one item, usually cheaper than separately |
| **Deposit** | Money the guest has put into their account. It can pay for purchases and for time by tariff |
| **Balance** | The state of settlements with the guest: deposits minus unpaid invoices and time. A negative balance is a debt. See [Time, deposit and balance -- FAQ](./../articles/billing-faq.md) |
| **Loyalty points** | The club's internal currency: earned for purchases and time, spent on products and time products. See [Loyalty points for customers](./../tutorials/loyalty/loyalty-program.md) |
| **Payment method** | How a purchase is paid: cash, card, deposit, points, online payment. See [How to set up payment methods](./../tutorials/sales/register/payment-methods.md) |
| **Credit** | Permission for a user group to buy or play on credit. See [How to enable postpay](./../tutorials/staff/postpay.md) |
| **Close balance** | Settling up with the guest: an invoice for the time is issued, the guest pays all unpaid invoices by any methods, and their session is closed |
| **Voiding an invoice** | Canceling a sale. Only the whole invoice can be voided; the payment can be refunded |
| **Shift** | An operator's working period at the register. All register operations after the shift is opened belong to it. See [How to manage shifts in the Manager](./../tutorials/operations/shifts.md) |

## Apps

| Term | What it is |
|---|---|
| **Executable** | The launch shortcut of an app in the shell: path, arguments, deployments, PUF, licenses, tasks. See [What happens when an application is launched](./../articles/app-launch-sequence.md) |
| **Personal user files (PUF)** | Folders from the guest's PC (for example, game saves) that Gizmo stores on the server and returns to the guest on any PC. See [How to keep guests' game progress between sessions](./../tutorials/client-shell/personal-files.md) |
| **Personal storage** | The guest's virtual drive whose files are stored on the server |
| **Deployment** | Copying game files from the server to the client PC before launch. See [Deployment -- how it works and FAQ](./../articles/deployment-faq.md) |
| **License profile** | A set of club launcher accounts that Gizmo hands out to guests. See [How to set up club accounts in game launchers](./../tutorials/client-shell/club-licenses.md) |
| **Task** | An action that Gizmo performs automatically on an event: a script, launching a program, redirecting a folder, a notification. See [Useful task scripts](./../articles/useful-task-scripts.md) |
| **Variable** | An alias for a path or value in the `%name%` format. See [Variables](./../configure/server/variables/_index.md) |
