---
title: Executable card
order: 2
---

The card opens when you create a new executable in an app or edit an existing one. It has several tabs.

## Main

-  **Availability** -- the branches where the app will be available.

-  **Visual Options** -- how the executable looks:

   -  **Caption** -- the shortcut name shown in the shell when you hover over the app card.

   -  **Description** -- the shortcut description shown when the app details are opened.

   -  **Image** -- the executable icon shown when you hover over the app card. Aspect ratio 1:1, 256×256 px recommended.

   -  **Available** -- shows or hides the shortcut in the shell. On by default. It does not affect personal user files (PUF).

-  **Executable Options** -- the shortcut options themselves:

   -  **Executable Path** -- the path to the .exe or other executable file on the client PC.

   -  **Arguments** -- launch arguments, if the executable supports them.

   -  **Working Directory** -- the executable's working folder. It is usually the folder the executable is in.

-  **Launch Options** -- additional launch options:

   -  **Auto Launch** -- launches the executable right after the preparatory actions are done (deployment profiles, tasks and so on). If it is off, the user has to click twice: the first time to run the preparatory actions, the second time to confirm the launch.

   -  **Monitor Children** -- Gizmo Client tracks not only the executable itself but also the child processes the app starts (for example, separate launchers or anti-cheat modules).

   -  **Terminate Children** -- ends every process started by the executable as soon as the executable itself exits.

   -  **Multirun** -- lets the user start several instances of the same executable by clicking it again.

   -  **Quick Launch** -- adds the executable to the quick launch bar on the client's home screen.

   -  **Ignore Execution Limit** -- allows this app to launch even if another app is already running. It ignores the limit on running several apps at the same time set in <cmd text="Settings"/>.

   -  **Shell Execute** -- lets the system choose how to run the app when it is launched.

   -  **Window Mode** -- how the app window opens: full screen, minimized and so on.

   -  **Executable Modes** -- properties of the executable, such as game modes. The guest sees them when hovering over the shortcut in the shell. They do not affect how the app works -- they are information only.

   -  **Max Users** -- how many players each game mode allows.

## Personal Files

This tab lets you attach personal user files (PUF) to the executable. PUF saves the specified folders from the client PC to the server and restores them when the app is launched or when the user logs in on any PC in the club. It is useful for keeping game saves and syncing them between gaming stations and branches.

-  **Select Personal File** -- attaches an existing PUF, if any have been created.

-  <cmd text="+ Create New Personal File"/> -- creates a new PUF and opens [its edit card](./lichnye-fayly-polzovateley.md).

## Deployments

This tab lets you attach deployment profiles to the executable. A deployment updates a folder on the client PC with files from a source folder (usually on the server). It compares the source and destination folders and copies only the files that differ, and if needed deletes files on the client that are no longer in the source. It is suitable for updating games on client PCs and for deploying any files and folders.

-  **Select Deployment** -- attaches an existing deployment profile, if any have been created.

-  <cmd text="+ Create New Deployment"/> -- creates a new deployment profile and opens [its edit card](./razvertyvaniya.md).

## Licenses

This tab lets you link club licenses to the executable. Their type depends on the launcher -- not all launchers are supported.

-  **License Reservation Strategy** -- how licenses are distributed between clients at launch:

   -  **First Available** (default) -- the first free key is reserved, starting from the topmost license set. If none of the listed sets has a free license, the reservation fails.

   -  **One From Each** -- one free license is reserved from each set. If at least one of the listed sets has no free license, the reservation fails.

-  **License Set**:

   -  **Select License** -- attaches an existing license profile, if any have been created.

   -  <cmd text="+ Create New License"/> -- creates a new license profile and opens [its edit card](./kartochka-licenziy.md). The card does not open if the license plugin is not enabled on the server -- see the warning in the license card article.

## Tasks

This tab lets you select tasks, create them and assign them to events. Tasks are scripts, notifications or other actions Gizmo performs when the specified condition occurs.

-  **Select Task** -- attaches an existing task to the selected event.

-  <cmd text="+ Create New Task"/> -- creates a new task and opens [its edit card](./kartochka-zadachi.md).

-  Available events:

   -  **Pre-Deployment Tasks** -- run before the app's files start deploying.

   -  **Pre-License Tasks** -- run before a license is assigned to the client PC.

   -  **Pre-Launch Tasks** -- run before the executable they are linked to starts.

   -  **Post-Termination Tasks** -- run after the process started by the executable ends.

After you create a task, select it in the **Select Task** field for the event you need.

For the order in which Gizmo runs deployments, PUF, licenses and tasks at launch, see [What happens when an application is launched](./../../../../../articles/app-launch-sequence.md).
