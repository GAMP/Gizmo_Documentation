---
title: Backup
order: 6
---

**IMAGE: the Settings -> Server -> Backup page with the backup switch and the Max Backup Files, Repeat and Storage fields**

A **backup** is a copy of your Gizmo Server database. You need it to move the database to another server or to restore it.

This section sets up automatic backups of the Gizmo Server database:

-  turning backups on and off;

-  the maximum number of backup files to keep;

-  repeat -- the schedule for creating backups;

-  storage -- the path where backups are saved.

> [!IMPORTANT]
>
> The built-in backup works only with a Microsoft SQL Server database installed on the same PC as Gizmo Server. If you use PostgreSQL or the database is on another server, make backups with the database tools -- see [Manual backup and restore](#manual-backup-and-restore).

## Turning backups on

Backups are off by default. To turn them on, click the switch -- more options become available. When you turn the switch off, these options become inactive.

## Maximum number of backup files to keep

**Maximum number of backup files to keep** is a whole number that sets how many backups are kept at the same time. The default is 10.

For example, if a backup is created every day and the limit is 10, Gizmo Server deletes the oldest backup after the eleventh one is created. This way the server always keeps only the 10 latest copies of the database.

## Repeat

**Repeat** is the backup schedule: the time when the backup is created. The default is 0:00 (midnight).

## Storage

**Storage** is the path in the file system where backups are saved.

Enter the full path to the folder, and keep in mind that paths are written differently in different operating systems.

> [!WARNING]
> 
> Make sure that the operating system user Gizmo Server runs as has read and write permissions for this folder.

### Default paths

<table header="row">
<tr>
<td>

Gizmo Server

installation type

</td>
<td colspan="2">

Default backup path

</td>
</tr>
<tr>
<td>

Windows

</td>
<td colspan="2">

`C:\Program Files\NETProjects\Gizmo Server\data\Backup`

</td>
</tr>
<tr>
<td>

Linux

</td>
<td colspan="2">

`/opt/gizmo-service/backup`

</td>
</tr>
<tr>
<td>

Docker

</td>
<td colspan="2">

`/app/mount/backup`

</td>
</tr>
</table>

## Manual backup and restore

Besides automatic backups, you can back up and restore the database manually, with the database's own tools. You need this, for example, before an update or when you [move Gizmo to another server](./../../tutorials/operations/server-migration.md).

> [!WARNING]
>
> Stop Gizmo Server before you restore the database -- see [How to restart the Gizmo server](./../../tutorials/operations/server-restart.md).

<tabs>

<tab name="Microsoft SQL Server">

**With ConfigurationTool** -- if Microsoft SQL Server is installed on the same PC as Gizmo Server:

1. Open **ConfigurationTool** -- with the desktop shortcut or from the `C:\Program Files\NETProjects\Gizmo Server\tools\configuration` folder.
2. Click **Backup Database** to create a backup, or **Restore Database** to restore the database from a backup.

**With SQL Server Management Studio** -- if the database is on another server or you need more control.

Use [SQL Server Management Studio](https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms) (SSMS).

**Create a backup**

1. Start SSMS and connect to the SQL Server instance that runs the Gizmo database.
2. Expand **Databases**, right-click the Gizmo database and choose **Tasks -> Back Up...**.
3. Check the destination folder and click **OK**.

**Restore from a backup**

1. In SSMS, right-click **Databases** and choose **Restore Database...**.
2. Choose **Device**, select the backup file and click **OK**.

</tab>

<tab name="PostgreSQL">

Use the `pg_dump` and `pg_restore` utilities that come with PostgreSQL.

**Create a backup**

```
pg_dump -U <user> -F c -f gizmo.backup <database name>
```

**Restore from a backup**

```
pg_restore -U <user> -d <database name> --clean gizmo.backup
```

For details, see the [PostgreSQL documentation](https://www.postgresql.org/docs/current/backup-dump.html).

</tab>

</tabs>

> [!TIP]
>
> For regular backups you can also use third-party tools, such as [SQLBackupAndFTP](https://sqlbackupandftp.com/): it backs up MS SQL and PostgreSQL databases on a schedule and sends the copies to the cloud. To learn how to keep backups off the server, see [Cloud backup](./../../tutorials/operations/cloud-backup.md).
