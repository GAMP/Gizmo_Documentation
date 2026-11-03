---
title: How to move Gizmo to another server
order: 1.9
---

You need to move Gizmo when you replace the server PC, reinstall the system or move to a VPS. All club data -- users, balances, tariffs, sales history and settings -- is stored in the database, and guests' game saves are stored in the personal files folder on the server. Move them, and the club continues working from where it left off.

> [!TIP]
>
> Move the server outside business hours: until the new server is running, client PCs and Gizmo Manager will not work.

## Step 1. Save the data from the old server

1. Make a database backup -- manually with the DBMS tools, as described in [Backup](./../../configure/server/backup.md), or take the latest automatic copy (the built-in backup works only if MS SQL is installed on the same PC as the server).
2. Copy the users' personal files folder. Its location is shown in **Settings -> Client -> File System**, the **User Storage Path** field. For details, see [File System](./../../configure/client/file-system.md).
3. Move the database copy and the folder to the new server or to external storage.

## Step 2. Prepare the new server

1. Check that the new PC meets the [system requirements](./../../about/overview/gizmo-server.md).
2. Install the DBMS -- the same one as on the old server: Microsoft SQL Server or PostgreSQL. For details, see [Databases](./../../instalation/gizmo/self-hosted/databases/_index.md).
3. Install Gizmo Server -- see [Gizmo Server & Gizmo Manager](./../../instalation/gizmo/_index.md).

## Step 3. Restore the database

Restore the database from the backup with the DBMS tools -- for how to do this, see the "Manual backup and restore" section in [Backup](./../../configure/server/backup.md).

Then run the setup wizard in ConfigurationTool and, on the **Database Settings** page, enter the name of the restored database -- you do not need to create a new one. For details, see [Gizmo Server setup wizard](./../../instalation/gizmo/self-hosted/gizmo-server/windows/setup-wizard.md).

## Step 4. Bring back personal files

1. Copy the personal files folder to the new server.
2. Start Gizmo Server, open Gizmo Manager and, in **Settings -> Client -> File System**, check that the **User Storage Path** points to this folder.

## Step 5. Check the subscription

Open **Settings -> Organization -> Subscription** and make sure the subscription is valid. The subscription is picked up right away -- you do not need to move it separately. If the licenses are still tied to the old server, reset the binding in the License Manager on the Gizmo website -- see the "Moving and distributing licenses" section in [Subscription](./../../configure/organization/subscription.md). If that does not help, [contact support](./../../about/support.md). For details, see [Subscription](./../../configure/organization/subscription.md).

## Step 6. Reconnect clients and Companion

If the new server has a different IP address or host name:

1. Check **Settings -> Server -> Network** -- the server's host name and addresses. For details, see [Network](./../../configure/server/network.md).
2. On the point-of-sale PCs, enter the new server address in the Companion settings -- see step 3 of [How to connect Companion and set up a register](./../sales/register/companion-and-register.md).
3. Check that the client PCs have connected: on the **Map**, the gaming stations must be online. If a PC does not connect, go through the checklist in [Client PC connection issues](./../client-shell/client-connection-troubleshooting.md).
4. If you forwarded ports on the router (for online payments or remote access), point them to the new server -- see [Port forwarding -- what it is and why you need it](./../../articles/port-forwarding.md).

## Result

Gizmo runs on the new server with the same data: users, balances, settings and game saves are all in place.

Do not delete the old server until you are sure everything works: if there are problems, you can go back to it.
