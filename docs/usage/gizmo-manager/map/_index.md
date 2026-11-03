---
title: Map
order: 0.26
---

**IMAGE: Club map in Gizmo Manager with host tiles, the toolbar, occupancy counters and the layout switcher**

The section is for managing the club's gaming stations.

The screen is a layout of the gaming room: each gaming station is a tile with its number and current state. Above the layout are the toolbar, the occupancy counters and the layout switcher.

When you select one or several gaming stations, the following actions are available, grouped by category:

### Users

- **Log In** -- manually logs in a user account or a one-time guest account.
- **Log Out** -- logs the user out.
- **Move User** -- moves the user to another gaming station. When you click it, you are asked to select the gaming station the customer moves to. After the move, the station the user left runs the [logout action](./../../../configure/client/shell.md) -- the one set in the client shell settings.

### POS

- **Sales** -- opens the sales window with this gaming station selected automatically if nobody is on it (a guest is created, and you can log them in). If a registered account is logged in on the PC, the sales window opens for that account.
- **Deposit** -- tops up the deposit of the logged-in user. Not available if no customer is logged in on the PC.

#### Other Actions ->

- **Close Balance** -- the system logs the customer out and automatically closes all their invoices and issues them for payment.
- **Refund from Deposit** -- refunds money from the deposit. Available only if a customer is logged in on the PC.
- **Billing Options**

  > [!NOTE]
  >
  > This section is under development.

### Hosts

- **Shut Down** -- shuts the PC down if it is on.
- **Turn On** -- sends a network request to turn the PC on if it is off.
- **Restart** -- restarts the PC if it is on.
- **Restart Shell** -- restarts the Gizmo Client shell without restarting the client PC itself.
- **Remote Access** -- opens the remote access page for this PC in control mode. Its interface is described in [Remote access](./remote-access.md).
- **View** -- opens the remote access page in view mode. You can switch between control and view modes with a button in the remote access interface. View mode prevents you from accidentally taking over the cursor or keyboard input, so you do not get in the user's way.

> [!NOTE]
>
> The **Turn On** command uses Wake On LAN and does not work if Wake On LAN is not set up on the client PC itself -- see [How to turn on, restart and shut down PCs remotely](./../../../tutorials/hosts-operations/power-management.md).

#### Shell ->

- **Enable Admin Mode** -- puts the PC into full access mode, removes all security and minimizes the client shell, giving access to the operating system.
- **Disable Admin Mode** -- takes the PC out of full access mode.

#### System ->

- **Lock** -- locks the PC. If the shell is open at that moment, its interface is covered with the "Locked" message. If admin mode is on and the shell is minimized, keyboard and mouse input on this PC is blocked.
- **Unlock** -- removes the lock.
- **In Service** -- takes the PC out of out-of-service mode.
- **Out of Service** -- puts the PC into out-of-service mode. Technically nothing changes on the PC in this mode, but if the shell is open, its interface is covered and the customer sees the "Out of order" message.
- **Enable Security** -- turns on the security profiles on the PC if they are off.
- **Disable Security** -- turns off the security profiles on the PC if they are on.

### Assets

- **Collect** -- takes back the assets issued to the user at the selected gaming station.
- **Issue** -- issues assets to the user at the selected gaming station.

The last menu item, **User Card**, opens the card of the customer logged in on the PC. It is available if someone is logged in on the PC.

> [!NOTE]
>
> These options are duplicated in the context menu that opens with a right-click and in the top toolbar.

### Other elements on the map

- **Layout switcher** for the layouts created in <cmd text="Hosts" /> -> <cmd text="Layouts" /> -- switches between layouts with gaming stations on them. This is a convenient way to separate, for example, the club's floors or zones.
- The status of all gaming stations:
  - **Total** -- how many gaming stations are available to the operator in total.
  - **Available** -- how many gaming stations are free for login.
  - **In Use** -- how many gaming stations are taken by customers right now.
  - **Free Soon** -- how many gaming stations will become free within 5 minutes.
- An info button that explains all the statuses and icons on the club map.
- The **Reset** button, available only when the map lock is off. When available, it returns all gaming stations to their original positions on the map.
- **Map lock** -- on by default. If you switch it off, the map is unlocked. In this mode you can move gaming stations around the map. After moving them, switch the lock back on.
- **Map view switcher** -- by default the map is in graphic mode, where gaming stations are placed on a free-form map and can be moved around it. You can switch to list mode -- then all gaming stations are shown as a list filtered by the selected filter.
