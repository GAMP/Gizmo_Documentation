---
title: Black screen or slow Gizmo Client startup
order: 2.2
---

Sometimes on startup Gizmo Client hangs on a black screen or on an empty desktop without shortcuts, or takes a very long time to load. Most often the cause is Windows itself: a damaged WebView2 component, tweakers that strip out Edge, or services that take a long time to start.

Go through the steps in order and check after each one whether the shell starts.

> [!NOTE]
>
> If the PC does not connect to the server at all (red server icon, the PC does not appear in Gizmo Manager), use another guide -- [Client PC connection issues](./client-connection-troubleshooting.md).

> [!TIP]
>
> First try the automatic client PC repair tool -- **[LINK: Gizmo Client repair tool]**. It fixes most of the problems described below; after the fix, the PC restarts. If the problem remains, go on to the steps below.

## Step 1. Repair or install WebView2

Gizmo Client runs on the Microsoft Edge WebView2 component. If it is missing or damaged, the shell does not start.

**If WebView2 is installed:**

1. Open **Windows Settings -> Apps**.
2. Find **WebView2** in the list.
3. Click **Modify** -- the component repair window opens.
4. Wait for the repair to finish and restart the PC.

**If WebView2 is not in the list:**

1. Download the [WebView2 installer](https://go.microsoft.com/fwlink/?linkid=2124701) from the Microsoft website.
2. Run it and wait for the installation to finish.
3. Restart the PC.

## Step 2. Check that Edge is not damaged

WebView2 is part of the Edge browser. If Edge or its components have been modified or removed, the shell does not start. This happens if tweakers, optimizer programs, scripts or stripped-down Windows builds that remove Edge were used on the PC.

Try to undo these changes. Reinstalling Windows from an official image is more reliable: undoing the changes rarely brings the system back to a working state.

## Step 3. Turn off everything that affects File Explorer

The shell may fail to start if something ends or replaces the `explorer.exe` (File Explorer) process. Turn off:

- Gizmo tasks that work with this process -- see [Tasks](./../../usage/gizmo-manager/stations/zadachi.md);
- security profiles with policies for File Explorer -- see [Security profiles](./security-profiles.md);
- third-party tweakers and scripts that affect File Explorer.

## Step 4. Delete the cache folder

On the client PC, delete the `C:\ProgramData\NETProjects` folder and restart the PC.

## Step 5. Check services that take a long time to start

If the shell hangs for a long time on a black desktop without a splash screen, Windows may be waiting for slow services to start.

1. Uninstall Gizmo Client -- see [How to minimize, disable or remove the shell](./remove-shell.md) -- and restart the PC.
2. After Windows loads, right-click **This PC** and select **Manage -> Services and Applications -> Services**.
3. Sort the list by the **Status** column and find services with the **Starting** status. Refresh the list with **F5** while the services are loading.
4. Open the services that took the longest to start and set **Startup type: Manual** for them.
5. Install Gizmo Client again -- see [Gizmo Client](./../../instalation/gizmo-client.md) -- and check that Windows works correctly without these services.

## Step 6. Update Windows

If Windows has not been updated for a long time, install the latest updates through **Settings -> Windows Update** and restart the PC.

## Step 7. Reinstall Gizmo Client

Uninstall Gizmo Client and install it again from a fresh installer -- see [Gizmo Client](./../../instalation/gizmo-client.md).

## Step 8. Reinstall Windows

If nothing helped, reinstall the system. Use only official images from the [Microsoft website](https://www.microsoft.com/en-us/software-download).

## If Gizmo Client does not start when Windows boots

If on some PCs the client occasionally does not start by itself after the PC turns on, check two causes.

**The client service does not have time to start.** Open **Task Manager -> Services** and find the Gizmo Client service. If it is stopped, Windows did not wait for it to start on a slow PC. Increase the service timeout with a registry script -- **[LINK: timeout.zip]**: extract the archive and run the `.reg` file on each client PC manually or with a task. Then restart the PC.

**Visual C++ 2013 is damaged.** If the Gizmo Client process is running in Task Manager but the login screen does not appear, repair the Visual C++ libraries:

1. Open **Windows Settings -> Apps** and find **Microsoft Visual C++ 2013 Redistributable**.
2. Click **Modify** and choose repair.
3. Restart the PC if Windows asks you to.

**Check the event log.** Open **Event Viewer -> Windows Logs -> Application** and find errors that mention Gizmo Client. Save them -- they will help support find the cause.

## Result

Gizmo Client starts without a black screen or delays. If the problem remains, [contact support](./../../about/support.md) and list the steps you have already taken.
