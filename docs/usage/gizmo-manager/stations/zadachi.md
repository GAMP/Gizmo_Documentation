---
title: Tasks
order: 10
---

This section is where you manage tasks. Tasks are scripts, notifications or other actions Gizmo performs when the specified event occurs.

## Task list

-  **Name** -- the task name.

-  **Type** -- the task type: process, folder redirection, script or notification.

-  **Used by Executables** -- how many executables the task is assigned to.

-  **Task Activations** -- whether the task is assigned to an event on a gaming station.

You assign a task to events on the [Task Activations](./task-activations.md) tab, and to an app launch in the [executable card](./prilozheniya/kartochka-redaktirovaniya-ispolnyaemogo-fayla/_index.md), on the **Tasks** tab.

## Task types

When you create the card, choose the task type:

-  **Process** -- starts a specific process on the client PC.

-  **Folder Redirection** -- creates a symbolic link (junction) on the client PC.

-  **Script** -- runs a script in the selected language.

-  **Notification** -- shows a notification on the user's screen.

The set of fields depends on the selected type.

## Process

-  **Name** -- the task name.

-  **File Name** -- the path to the process or its system name used to start it.

-  **Arguments** -- the process launch arguments, if any.

-  **Working Directory** -- the process's working folder.

-  **Wait for Task to Complete** -- other tasks and events do not run until the process ends.

-  **Run Task Hidden** -- the task runs in the background, invisible to the user. If the process opens its own windows or apps, they are still visible. We recommend turning this on.

## Folder Redirection

-  **Name** -- the task name.

-  **Redirected Folder Path** -- the path where the junction is created.

-  **Destination Folder Path** -- the folder where the files are actually stored; the symlink created at the path from the **Redirected Folder Path** field points to it.

-  **Delete Redirected Folder** -- whether to delete a folder with the same name that already exists at the path from the **Redirected Folder Path** field.

## Script

-  **Name** -- the task name.

-  **Script Type** -- the script language and how it runs:

   -  **Batch** -- the syntax used in .bat files.

   -  **VB Script** -- the Visual Basic language.

   -  **AutoIt Script** -- the AutoIt language.

   -  **Registry Script** -- registry script syntax; lets you change registry keys.

-  **Script** -- the script code itself.

-  **Wait for Task to Complete** -- other tasks and events do not run until the script ends.

-  **Run Task Hidden** -- the task runs in the background, invisible to the user. We recommend turning this on.

## Notification

-  **Name** -- the task name.

-  **Title** -- the notification title the user sees.

-  **Message** -- the text of the notification the user sees.

-  **Wait for Confirmation** -- the notification stays on the screen until the user closes it.

Ready-made scripts for common tasks -- delete a folder, close a program, block a website, hide the taskbar -- are in [Useful task scripts](./../../../articles/useful-task-scripts.md).
