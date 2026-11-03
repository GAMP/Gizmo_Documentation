---
title: Remote management
order: 1
---

<html>

<style>
  html, body { margin: 0; padding: 0; background: #1a1e33; font-family: 'Segoe UI', system-ui, -apple-system, Roboto, Arial, sans-serif; }
  @media (prefers-color-scheme: light) { html, body { background: #ffffff; } }
  * { box-sizing: border-box; }
  .gx-card { position: relative; width: 100%; border-radius: 18px; overflow: hidden; background: #232a4a; background-image: linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%); border: none; box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.04) inset; padding: 26px 32px 28px; font-family: 'Segoe UI', system-ui, -apple-system, Roboto, Arial, sans-serif; }
  .gx-card .gx-glow { position: absolute; inset: -30px -44px auto -60px; height: 200px; background: radial-gradient(45% 100% at 8% 0%, rgba(82, 110, 211, 0.28) 0%, rgba(82, 110, 211, 0) 72%); filter: blur(2px); pointer-events: none; }
  .gx-card .gx-card-content { position: relative; }
  .gx-card .gx-kicker { display: flex; align-items: center; gap: 8px; margin: 0 0 14px 0; color: #7c93e8; font-size: 12px; line-height: 1.3; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; }
  .gx-card .gx-kicker svg { flex: none; width: 15px; height: 15px; }
  .gx-card .gx-title { max-width: 560px; margin: 0 0 18px 0; color: #ffffff; font-size: clamp(22px, 3vw, 27px); line-height: 1.34; font-weight: 700; letter-spacing: -0.015em; }
  .gx-card .gx-meta { display: flex; align-items: center; color: rgba(255, 255, 255, 0.5); font-size: 11.5px; line-height: 1; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; }
  .gx-card .gx-meta-sep { margin: 0 12px; opacity: 0.4; }
  .gx-card .gx-meta-level { color: #86efac; }
  .gx-card .gx-meta-level.medium { color: #fde68a; }
  .gx-card .gx-meta-level.high { color: #fca5a5; }
</style>

<div class="gx-card">
  <div class="gx-glow"></div>
  <div class="gx-card-content">
    <p class="gx-kicker">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 9l4 3-4 3"/><line x1="12" y1="15" x2="16" y2="15"/></svg>
      In this guide you will learn
    </p>
    <h2 class="gx-title">How to close a frozen program, transfer files and run a task on a PC without walking up to it</h2>
    <div class="gx-meta">
      <span>15–20 minutes</span>
      <span class="gx-meta-sep">/</span>
      <span class="gx-meta-level medium">Medium difficulty</span>
    </div>
  </div>
</div>

<script>
(function () {
  var LIGHT_BG = '#ffffff'; var DARK_BG = '#1a1e33';
  function applyBg() {
    var theme = document.documentElement.dataset.theme;
    if (theme !== 'light' && theme !== 'dark') { theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'; }
    var bg = theme === 'light' ? LIGHT_BG : DARK_BG;
    document.documentElement.style.backgroundColor = bg; document.body.style.backgroundColor = bg;
  }
  applyBg();
  new MutationObserver(applyBg).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyBg);
})();
</script>

</html>

A guest waves from the far corner: the game froze and will not close. Or you need to put a new config on every PC in the room, and there are thirty of them. The **Management** section solves these problems from the front desk: here you can see which programs are running on a guest's PC, close a frozen one, transfer files to hosts and back, and run a prepared task on them -- a script, a notification or a program launch.

Let's go step by step: give the operator permissions, learn to select hosts and connect to their screen, then work with processes, files and tasks. At the end, we will set up tasks that run on their own, without the operator.

## Step 1. Give the operator permissions

Open **Settings -> Operators and permissions -> Permissions**, choose the operator's permission set and turn on the permissions you need.

**"Management" category**

- **Process Management** -- viewing and terminating processes on hosts.
- **File Management** -- managing files on hosts.
- **Task Access** -- managing tasks on hosts.
- **View Remote Control** -- viewing host screens without control.
- **Remote Control** -- full remote control of hosts.
- **Power On Hosts** -- turning hosts on remotely.
- **Restart Client Module** -- restarting Gizmo Client on hosts.

**"Tasks" and "Client Tasks" categories** -- the **Create**, **Edit** and **Delete** permissions. Whoever prepares tasks in step 6 needs them.

Save the permission set. For all permissions, see [Permission card](./../../configure/operators-and-permissions/permissions/permission-card.md).

## Step 2. Select hosts

1. Open the **Management** section on the left panel. The **Processes** tab opens first.
2. The left column has the list of hosts, grouped by host group. It is the same on all three tabs of the section. The **Branch** and **Host Group** filters above the work area help narrow the list, and the **Clear All** link removes them.
3. Check the hosts you need. A group expands when you click its name, and the **Select all Hosts** checkbox selects all hosts in the list.

A counter of selected hosts and action icons appear above the list: **Shut Down**, **Turn On**, **Restart**, **Remote Access** and **View**. The **...** icon opens the same actions by group and adds **Restart Shell** and **User Card**. The actions are unavailable until at least one host is selected.

## Step 3. Look at the PC screen

Before you close anything, it helps to see what is happening on the guest's side.

- **View** -- shows the host screen without control. You will not take over the guest's cursor and keyboard by accident.
- **Remote Access** -- opens the host's remote desktop in control mode: you control the cursor and keyboard.

You can switch between control and view modes right in the remote access window. For details, see [Remote access](./../../usage/gizmo-manager/map/remote-access.md).

## Step 4. Close a frozen program

1. On the **Processes** tab, click **Expand All** on the left and check the host you need. The **Host** field above the list shows the host whose processes are displayed.
2. Find the frozen program: start typing its name in the **Process Name** filter.
3. On the right of the same row you can see **CPU** -- the host's CPU load in percent -- and the number of running **Processes**. If a game has "eaten" the whole CPU, you will notice right away.
4. Click **"…"** on the right of the process row and choose **Terminate**. **Terminate on Selected** and **Terminate on All** close this process on several hosts at once.

The command result appears in **Logs** at the bottom of the tab.

> [!WARNING]
>
> Do not terminate Windows system processes -- System, Registry, csrss, smss, wininit, svchost, services: this can cause a crash, a restart or a "blue screen". Terminating a game can destroy the guest's unsaved progress. If the problem is on one host, do not choose **Terminate on All**.

The list refreshes on its own. The **Refresh** button in the upper-right corner reloads it immediately, and the arrow next to it sets the auto-refresh rate: **High**, **Medium**, **Low Refresh Rate** or **Paused** -- then the list refreshes only with the button.

The collapsible **Logs** bar at the bottom of the tab shows how the sent commands ended: the number of active commands and the number of failed ones. **Clear Log** clears the list.

> [!TIP]
>
> If it is not a game that froze but the shell itself, you do not need to look for a process: check the host and choose **Restart Shell** in the **Hosts** group. Gizmo Client restarts, but the computer does not.

For details, see [Processes](./../../usage/gizmo-manager/management/processes.md).

## Step 5. Transfer files to or from a PC

The **Files** tab helps you put saves, configs or installers on hosts without walking around the room, and get something back.

1. Open the **Files** tab and choose a host in the left column.
2. The work area is split into two panels: **This Device** -- the files of the computer where Gizmo Manager is open, and **Host** -- the files of the selected host. Until a host is selected, the **Host** panel shows "No host selected".
3. In each panel, choose a **Drive** and go to the folder you need with the navigation arrows. To enter a path manually, click the pencil icon to the right of the current path field. The **Search in:** field helps you find a file in the open folder.
4. Check the files. The checkbox in the list header selects all contents of the folder.
5. Click an arrow between the panels: the right one sends the checked files to the host, and the left one gets them from the host.

The progress is shown in the **Transfer Log** at the bottom of the tab: transfers are split into **Active**, **Successful** and **Failed**, and each one shows **Source**, **Destination** and **Progress**. The **Cancel All** button stops all current transfers.

For details, see [Files](./../../usage/gizmo-manager/management/files.md).

## Step 6. Prepare a task

A task is a prepared action that Gizmo runs on a host: starting a process, a script, a folder redirection or a notification on the guest's screen. You create the task first, then you can run it manually or on an event.

1. Open **Hosts -> Tasks** and click the create button in the upper-right corner.
2. Choose the task type -- the set of fields depends on it:
   - **Process** -- starts a program on the client PC. Enter the **File Name** -- the path to the process or its name in the system -- and, if needed, **Arguments** and **Working Directory**.
   - **Script** -- runs a script. Choose the **Script Type**: **Batch**, **VB Script**, **AutoIt Script** or **Registry Script**, and paste the code into the **Script** field.
   - **Folder Redirection** -- creates a symbolic link (Junction) on the client PC: enter the **Path to Redirected Folder** and the **Path to Destination Folder** where the files actually are.
   - **Notification** -- shows the guest a message on the screen: enter a **Title** and a **Message**. Turn on **Wait for Confirmation** so that the notification does not disappear until the guest closes it -- for example, for the announcement "The club closes in 15 minutes".
3. Enter a task **Name** -- a clear one, so that you can easily find it in the list later.
4. For processes and scripts, turn on **Hidden Task Execution** -- the task runs in the background, unnoticed by the guest. If the process itself opens windows, they are still visible.
5. Turn on **Wait for Task to Complete** if the next tasks and events should wait until this one finishes.
6. Save the task.

> [!TIP]
>
> If the task runs bat scripts, check the **Execute Batch Files on Hosts** option in **Settings -> Client -> Shell**, **System** block: it controls whether bat scripts can run on PCs with Gizmo Client. For details, see [Shell](./../../configure/client/shell.md).

For a description of all fields, see [Tasks](./../../usage/gizmo-manager/stations/zadachi.md) and [Task card](./../../usage/gizmo-manager/stations/prilozheniya/kartochka-redaktirovaniya-ispolnyaemogo-fayla/kartochka-zadachi.md).

## Step 7. Run a task manually

1. In the **Management** section, open the **Tasks** tab.
2. In the left column, check the hosts where the task should run -- one, a group or the whole room.
3. In the **Run Task** field, choose the prepared task.
4. Click **Execute** in the upper-right corner -- the task goes to all checked hosts. The button is unavailable until a task and hosts are selected.

The result is shown in the **Logs** bar at the bottom of the tab: the number of active tasks and of failed tasks.

For details, see [Tasks](./../../usage/gizmo-manager/management/tasks.md) in the "Management" section.

## Step 8. Set up automatic task runs

If an action must be done all the time -- for example, cleaning the temporary files folder after every guest -- do not run it manually: tie the task to an event.

**On an event on the gaming station**

1. Open **Hosts -> Task Activations**. The screen is split into four blocks by event: **Computer Start**, **User Login**, **User Logout** and **Computer Shutdown**. The number in parentheses shows how many tasks are already assigned.
2. In the block of the event you need, choose a task in the **Select Task** field or click **Create New Task** to create one right there.

You can assign several tasks to one event. For details, see [Task Activations](./../../usage/gizmo-manager/stations/task-activations.md).

**When an app starts**

1. Open **Hosts -> Apps**, choose an app and open its executable.
2. On the **Tasks** tab, choose an event: **Pre-Deployment Tasks**, **Pre-License Tasks**, **Pre-Execution Tasks** or **After Executable Exits**.
3. Choose a task in the **Select Task** field or create a new one with the **+ Create New Task** button.

For details, see [Executable card](./../../usage/gizmo-manager/stations/prilozheniya/kartochka-redaktirovaniya-ispolnyaemogo-fayla/_index.md).

**On a schedule, at a set time**

> [!NOTE]
>
> This section is under development.

## Result

Now the operator solves problems on hosts without walking up to them:

- sees what is running on the guest's PC and closes a frozen program;
- connects to the host screen -- in view or control mode;
- transfers files to hosts and gets them back;
- runs prepared tasks on the hosts they need at once, while recurring actions run on their own -- on gaming station events or when an app starts.

For how the whole section works, see [Management](./../../usage/gizmo-manager/management/_index.md).
