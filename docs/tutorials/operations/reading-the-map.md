---
title: Map
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6l6-2 6 2 6-2v16l-6 2-6-2-6 2z"/><line x1="9" y1="4" x2="9" y2="20"/><line x1="15" y1="6" x2="15" y2="22"/></svg>
      In this guide you will learn
    </p>
    <h2 class="gx-title">How to set up the club map and manage gaming stations right from it</h2>
    <div class="gx-meta">
      <span>15 minutes</span>
      <span class="gx-meta-sep">/</span>
      <span class="gx-meta-level">Low difficulty</span>
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

The map is the operator's main working screen. It is a floor plan where each gaming station is shown as a tile with a number and its current state. From the map, the operator sees how many seats are free, logs a guest in on a PC, sells them time, restarts a frozen machine or connects to its screen -- without leaving the desk.

First, we will sort the gaming stations into layouts once and place them on the map the same way they stand in the room. Then we will look at what the operator does on the map every day.

## Step 1. Create layouts

A layout is a separate plan for a part of the club: a floor, a room or a zone. The operator switches between layouts with one click.

1. Open **Hosts -> Layouts** and click **Create Layout**.
2. Choose the **Branch** where the layout will be available.
3. Enter a **Name** -- this is what the layout will be called in the list of layouts and on the **Map**, for example "1st floor" or "VIP zone".
4. Save the layout and repeat for the other zones.

If the club has one room, one layout is enough.

For details, see [Layouts](./../../usage/gizmo-manager/stations/sloi-karty/_index.md) and [Layout card](./../../usage/gizmo-manager/stations/sloi-karty/kartochka-redaktirovaniya-sloya-karty.md).

## Step 2. Assign gaming stations to layouts

A gaming station appears on the map only if it has a **Branch**, a **Host Group** and **Layouts** set.

1. Open **Hosts -> Computers** and double-click a PC to open its card.
2. Check the **Branch** and **Host Group** fields.
3. In the **Layouts** field, choose one or more layouts where this PC should be shown.
4. Save the card.

To avoid opening each card one by one, check several hosts in the list and click **Edit** above the list. The **Branch**, **Host Group** and **Layout** filters above the list help you find the hosts you need quickly.

Consoles, pool tables and other gaming stations added as endpoints are assigned to layouts the same way -- in **Hosts -> Endpoints**, the **Layouts** field.

For all card fields, see [Computer card](./../../usage/gizmo-manager/stations/computers/computer-card.md) and [Endpoint card](./../../usage/gizmo-manager/stations/terminals/terminal-card.md).

## Step 3. Arrange the seats as in the room

1. Open the **Map** section on the left panel and choose the layout you need in the layout switcher above the plan.
2. Turn off **Map Lock Mode** -- it is on by default, and seats cannot be moved.
3. Drag the tiles so that they repeat the room layout: rows, zones, separate booths.
4. Turn **Map Lock Mode** back on so that you do not move seats by accident during work.

> [!TIP]
>
> If the arrangement did not work out, click **Reset** -- all gaming stations return to their initial position. The button is available only while map lock mode is off.

If you do not need a graphical plan, switch the **map view mode** to list mode -- then all gaming stations are shown as a list according to the selected filter.

## Step 4. Watch room occupancy

Counters are shown above the plan:

- **Total** -- how many gaming stations are available to the operator;
- **Available** -- how many seats are free for login;
- **Occupied** -- how many seats are currently taken by guests;
- **Available Soon** -- how many seats will be free within 5 minutes. Handy when a guest asks how long they have to wait.

The tile color shows the seat state: green -- the host is free, and you can log a guest in on it; gray -- the host is turned off, so turn it on first with **Hosts -> Turn On**. The info button on the map explains the other statuses and icons on the tiles.

> [!NOTE]
>
> This section is under development.

## Step 5. Work with gaming stations

Select one gaming station on the map or several at once -- the actions become available. They are duplicated in the top toolbar and in the right-click context menu.

**A guest came in and wants to play**

- **Sales** (**POS** group, CTRL+S) -- opens the sale window for the selected seat. If nobody is on it, a guest is created that you can then log in. If a registered guest is already logged in on the PC, the sale goes to their account.
- **Log In** (**Users** group, CTRL+L) -- opens the **Advanced Login** window and manually logs a guest account or a one-time account in on the seat.
- **Deposit** (CTRL+D) -- tops up the deposit of the guest sitting at this PC.

**A guest wants to change seats or is leaving**

- **Move User** -- moves the guest to another seat: choose where to move them. The logout action set in the shell settings runs on the PC that became free.
- **Log Out** (CTRL+ALT+L) -- ends the guest's session on the PC.
- **Close Balance** (**Other Actions**) -- logs out of the guest's account and puts all their invoices up for payment.

**Something is wrong with the PC**

- **Restart Shell** (**Hosts** group) -- restarts Gizmo Client without restarting the computer itself. The first thing to try if the shell froze or did not pick up new settings.
- **Restart** (CTRL+R), **Shut Down** (CTRL+ALT+T), **Turn On** (CTRL+T) -- the **Hosts** group, they control PC power. **Turn On** works through Wake On LAN and works only if it is set up on the client PC.
- **Out of Order** (**System**) -- marks the PC as faulty: the shell interface is covered with an "out of order" message, and a guest will not sit at a broken machine. **In Order** puts the PC back into service.
- **Lock** and **Unlock** (**System**) -- locks the PC with a "Locked" message over the shell and removes the lock.

**You need to see what is on the screen**

- **View** (**System**) -- shows the PC screen without control: you will not take over the guest's cursor and keyboard by accident.
- **Remote Access** (**System**) -- connects to the PC with control of the cursor and keyboard. You can switch modes right in the remote access window.

**You need to work on the PC without restrictions**

- **Enable Admin Mode** (**Shell**) -- removes all security, minimizes the shell and gives access to the operating system. **Disable Admin Mode** returns the PC to normal mode.
- **Disable Security** and **Enable Security** (**System**) -- turn security profiles on the PC off and on.

**Equipment and guest data**

- **Issue** and **Receive** (**Assets** group) -- issue equipment to a guest and take it back.
- **User Card** -- opens the card of the guest logged in on the PC.

> [!TIP]
>
> Some actions require permissions in the **Management** category of the operator's permission set: for example, **Power On Hosts** for the **Turn On** command, **Remote Control** and **View Remote Control** for remote access. For all permissions, see [Permission card](./../../configure/operators-and-permissions/permissions/permission-card.md).

For a description of all map actions and elements, see [Map](./../../usage/gizmo-manager/map/_index.md) and [Remote access](./../../usage/gizmo-manager/map/remote-access.md).

## If the map does not show all seats

Check in this order:

1. **Licenses.** In **Settings -> Organization -> Subscription**, the subscription must be valid, and **Total Licenses** must be no fewer than the gaming stations you connected. Consoles and other seats added as endpoints count too.
2. **Host assignment.** Every PC in **Hosts -> Computers** must have a **Branch**, a **Host Group** and **Layouts** set -- see step 2.
3. **Layout.** The map shows only the seats of the selected layout -- switch to the one you need.
4. **Operator access.** The map shows the seats available to the current operator. Check that all the **Branches** they need are selected in their card.

If a PC does not appear even in **Hosts -> Computers**, go through the checklist in [Client PC connection issues](./../client-shell/client-connection-troubleshooting.md). For how licenses work, see [Subscription](./../../configure/organization/subscription.md); for how to run several clubs, see [Multiple clubs on one server](./multiple-clubs-setup.md).

## Result

The club map is set up:

- gaming stations are sorted into layouts and placed on the plan the same way they stand in the room;
- the counters above the plan show how many seats are free, occupied and available soon;
- the operator sells time, moves guests, restarts PCs and connects to their screens right from the map.
