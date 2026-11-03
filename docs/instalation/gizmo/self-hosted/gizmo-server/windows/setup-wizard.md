---
title: Gizmo Server setup wizard
order: 0.9
properties: []
---

The setup wizard connects the installed Gizmo Server to the database and to your account on the Gizmo website. You run it once after installing the server -- and again when you move the server to another PC.

Before you run the wizard, install the database system -- see [Databases](./../../databases/_index.md).

## How to run the wizard

1. Open the **ConfigurationTool** app -- from the desktop shortcut or from the `C:\Program Files\NETProjects\Gizmo Server\tools\configuration` folder.
2. Click <cmd text="Setup Wizard" /> -> <cmd text="Next" />.

**IMAGE: ConfigurationTool main menu with the Setup Wizard button**

## Step 1. Database settings

On the **Database Settings** page, you set the connection to the database system and the name of the Gizmo database. If you are installing Gizmo for the first time and installed the database system by the instructions, you don't need to change the default settings -- click <cmd text="Next" />.

> [!IMPORTANT]
>
> Do not create the database manually: Gizmo creates it itself. If you are moving the server from another PC and have already restored the database from a backup, enter the name of that database -- Gizmo will then keep working with the existing data. See the [How to move Gizmo to another server](./../../../../../tutorials/operations/server-migration.md) guide.

## Step 2. Gizmo account

Enter the login and password you used to sign up on the [Gizmo website](https://gizmopowered.net/) and click <cmd text="Next" />. The server activates the subscription with this account. If you don't have an account yet, sign up on the website.

You can change the login and password later in Gizmo Manager -- see the [Subscription](./../../../../../configure/organization/subscription.md) article.

## Step 3. Install the service

After the wizard, install Gizmo Server as a Windows service: in ConfigurationTool, go to **Gizmo Service Management**, install the service and start it. The server will then run in the background and start together with Windows.

**IMAGE: ConfigurationTool, Gizmo Service Management page with the buttons to install and start the service**

> [!TIP]
>
> If Windows asks for credentials to manage the service, turn on **Advanced Mode** and enter the login and password you use to sign in to Windows. If your Windows account has no password, create one.

How the service differs from console mode -- see the [Run Modes](./../../../../../usage/gizmo-server/run-modes.md) article.

## Other ConfigurationTool tools

Besides the setup wizard and service management, the ConfigurationTool main menu has tools for maintenance and emergencies:

- **Database Cleanup** -- deletes data from the Gizmo database, for example to start working with a clean database after testing (see below).
- **Reset Operator Password** -- if the only administrator forgot the Gizmo Manager password and no one else can log in. After the reset, the password is `admin`; change it in Gizmo Manager right away.
- **Reset Operator Permissions** -- restores the operator's permissions to the defaults if the administrator lost access to the settings.
- **Back Up Database** and **Restore Database** -- a manual copy of the database and restoring from it. They work only if Microsoft SQL Server is installed on the same PC as Gizmo Server; see the [Backup](./../../../../../configure/server/backup.md) article.
- **User Cleanup** -- deletes users from the database.

**Database cleanup**

**IMAGE: ConfigurationTool, Database Cleanup page with the Target Database field and the cleanup options**

1. In the **Target Database** field, check the name of the database you want to clean up.
2. Select what to delete:
   - **Delete Financial Data** -- all financial operations: deposits, payments and so on;
   - **Delete Products** -- products and all related settings;
   - **Delete Users** -- users and guests with all related data, including statistics;
   - **Delete Hosts** -- hosts (gaming stations) and all related data;
   - **Delete Operators** -- all operators; after the cleanup, the default administrator account is created again;
   - **Delete Log** -- all log records.
3. Click **Start**.

> [!CAUTION]
>
> Always make a backup before cleaning up the database -- see the [Backup](./../../../../../configure/server/backup.md) article. Deleted data cannot be recovered without a copy.

## What's next

The server is ready. Go on to setting up the club in Gizmo Manager -- step by step in the [Quick install](./../../../../quick-install.md) guide.
