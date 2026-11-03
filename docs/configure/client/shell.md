---
title: Shell
order: 1
---

**IMAGE: Settings -> Client -> Shell page with the General, User Session, User Registration and other blocks**

In this section you set up the Gizmo Client shell:

-  general settings;

-  user session;

-  user registration;

-  system;

-  application settings;

-  top-up grace period;

-  password policy.

> [!WARNING]
> 
> To apply the settings in this section, restart Gizmo Client.

## General

The **General** block holds the key settings of the Gizmo Client shell:

-  client language;

-  logout action;

-  client data path;

-  manager password;

-  power saving.

### Client language

**Client Language** -- the language of the Gizmo Client shell.

### Logout action

**Logout Action** -- the action performed after the user session ends.

Options:

-  no action;

-  restart;

-  close all programs;

-  shut down;

-  log off;

-  standby;

-  switch to admin mode.

### Client data path

**Client Data Path** -- the path where Gizmo Client metadata is stored on the computer with Gizmo Client installed.

The default value is `%PROGRAMDATA%\NETProjects\Gizmo Client\`.

### Manager password

**Manager Password** -- the password that you enter in a special hidden Gizmo Client window to enter maintenance mode. In this mode you can:

-  minimize the Gizmo Client shell;

-  deactivate Gizmo Client;

-  uninstall Gizmo Client.

> [!TIP]
> 
> For more about Gizmo Client maintenance mode, see [How to minimize, disable or remove the shell](./../../tutorials/client-shell/remove-shell.md).

The default manager password is `password`.

### Power saving

**Power Saving** -- the option that controls what the computer with Gizmo Client does when idle.

When this option is on, you can set the power saving parameters:

-  option;

-  after [minutes].

**After [Minutes]** -- the idle time in minutes after which the selected action runs. The minimum value is 1.

**Option** -- the action that runs when the set time is up. Options:

-  **Shut Down**;

-  **Sleep**.

## User session

The **User Session** block holds the settings that control Gizmo Client behavior during an active client session.

Options:

-  auto relogin for users;

-  auto relogin for guests;

-  terminate pending sessions;

-  log out disconnected clients;

-  timeout.

**Auto Relogin Users** -- automatically logs in clients from user groups to Gizmo Client after the computer with Gizmo Client restarts unexpectedly.

**Auto Relogin Guests** -- automatically logs in clients from guest groups to Gizmo Client after the computer with Gizmo Client restarts unexpectedly.

**Terminate Pending Sessions** -- automatically ends the client session in Gizmo Server and Gizmo Manager when the connection between Gizmo Server and Gizmo Client is lost.

**Log Out Disconnected Clients** -- automatically ends the client session in Gizmo Client when the connection between Gizmo Server and Gizmo Client is lost.

**Timeout [Seconds]** -- if the network connection between Gizmo Server and Gizmo Client is lost and one of the options above (**Log Out Disconnected Clients** or **Terminate Pending Sessions**) is on, this is how long to wait (in seconds) before the client session is ended: in Gizmo Client (when **Log Out Disconnected Clients** is on) and in Gizmo Server and Gizmo Manager (when **Terminate Pending Sessions** is on).

The default value is 180 seconds.

> [!WARNING]
> 
> To apply the **Timeout**, **Log Out Disconnected Clients** and **Terminate Pending Sessions** options, restart Gizmo Client.

## User registration

The **User Registration** block holds the settings of the registration screen. Options:

-  registration;

-  registration verification;

-  password recovery;

-  verification code length and character type.

### Registration

Options:

-  client registration;

-  web registration portal.

**Client Registration** -- when on, the client can sign up on their own on a registration screen in Gizmo Client.

**Web Registration Portal** -- when on, the client can sign up on their own on a registration screen on the web portal.

### Registration verification

You can turn on **Registration Verification**: when a client registers in Gizmo Client, they are asked to verify their email or phone.

You can choose the verification method (email or phone) as soon as you turn this option on.

> [!WARNING]
> 
> Remember to set up message delivery for the chosen method: for email -- [Communication methods](./../server/communication-methods.md), for phone -- an SMS or Telegram integration, see [Adding an integration](./../server/plugins/add-new-plugin.md).

### Password recovery

You can turn on **Password Recovery**: the Gizmo Client registration screen then offers a password recovery screen.

You can choose the recovery method (email or phone) as soon as you turn this option on.

> [!WARNING]
> 
> Remember to set up message delivery for the chosen method: for email -- [Communication methods](./../server/communication-methods.md), for phone -- an SMS or Telegram integration, see [Adding an integration](./../server/plugins/add-new-plugin.md).

### Verification code length and character type

These options set the length and makeup of the verification codes used for client password recovery in Gizmo Client.

The maximum recovery code length is 6 characters.

Recovery code makeup:

-  uppercase letters;

-  digits;

-  uppercase letters and digits.

## System

The **System** block holds the system behavior settings of Gizmo Client:

-  shell auto update;

-  shell auto downgrade;

-  run batch files on hosts.

**Shell Auto Update** -- if a Gizmo Server update requires a Gizmo Client update, it happens automatically when this option is on.

**Shell Auto Downgrade** -- if rolling Gizmo Server back to an older version requires a Gizmo Client downgrade, it happens automatically when this option is on.

**Run Batch Files on Hosts** -- the option that allows running .bat scripts on the computer with Gizmo Client running.

## Application settings

The **Application Settings** block holds the settings for launching apps through Gizmo Client:

-  restrict running multiple apps at the same time.

**Restrict Multiple App Launch** -- controls whether a client can run several apps at the same time. When this option is on, two or more apps cannot run at the same time.

## Top-up grace period

**Top-Up Grace Period** -- when on, a client with an active session whose time has run out sees a countdown timer with a message to top up the balance or buy time. If the client tops up the balance in the given time, the session continues; if not, they are logged out.

**Top-Up Grace Period** (value) -- this parameter appears when the option above is on and sets the length of the top-up grace period in minutes.

## Password policy

The **Password Policy** block sets the requirements that apply when a client creates or changes a password in Gizmo Client:

-  minimum password length;

-  maximum password length;

-  password must contain.

**Minimum Password Length** -- the minimum number of characters in the password.

**Maximum Password Length** -- the maximum number of characters in the password.

**Password Must Contain** -- required character groups:

-  lowercase letters;

-  uppercase letters;

-  digits.

You can turn on several of these requirements at the same time.
