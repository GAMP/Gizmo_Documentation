---
title: Queue
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="14" y2="18"/></svg>
      In this guide you will learn
    </p>
    <h2 class="gx-title">How to set up the waiting line and add a guest to it</h2>
    <div class="gx-meta">
      <span>10–15 minutes</span>
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

Friday evening: all PCs are taken, and three more guests are waiting at the front desk. So that the operator does not have to remember who came first and who only agrees to the VIP zone, Gizmo has a **waiting line**. The operator adds a guest to the line, and Gizmo itself calculates when a suitable seat will be free and which one.

First, we will set up the line rules for the whole club once, then give operators permission to work with it and add the first guest to the line.

## Step 1. Check host groups

The line works by host group: a guest waits not for any seat, but for a seat from a specific group, for example "Standard" or "VIP". So first make sure the club's hosts are sorted into groups in **Hosts -> Host Groups**.

For how host groups work, see [Host Groups](./../../usage/gizmo-manager/stations/station-groups/_index.md).

## Step 2. Set the general line rules

Open **Settings -> Policies -> Queue**. The **Global Settings** block applies to all host groups and is a table of three columns: **Feature**, **Enable** and **After Minutes**.

- **Grace Period Before Logout** -- for how many minutes after logging out a guest can sit at a seat of the same host group again, bypassing the line. This way, a guest who restarted their PC or is changing seats does not lose their seat. A few minutes is usually enough -- for example, 5.
- **Next in Time** -- for how many minutes a guest from the line keeps priority for a host that became free. Set the time a guest needs to walk to the PC. If they do not log in, the seat also becomes available to the next guest in line.
- **Removal Time** -- after how many minutes a guest for whom a seat became free, but who never logged in, is automatically removed from the line.
- **Remove User from All Queues on Login** -- turn this on so that a guest who already sat at a PC automatically disappears from all lines and does not hold a seat in other groups.

## Step 3. Set up the line for each host group

Below, the **Queue** block lists the host groups with their **Branch**. For each group, turn on what you need:

- **Remove Enabled** -- guests are automatically removed from this group's line after the **Removal Time** from step 2.
- **Enable Next in Queue** -- the **Next in Time** mode from step 2 starts working for this group.
- **Enable Priorities** -- the user group priority from step 4 is taken into account for this group.

## Step 4. Set the user group priority

If regular or VIP guests should get a seat before others, set up the **Priority** block on the same page.

1. Find the user group you need in the list.
2. Drag it by the drag handle <icon code="grip-vertical" /> to the position you need: the higher the group is in the list, the higher its priority.
3. Check that **Enable Priorities** is turned on in the **Queue** block for the host groups where priority should work.

Save the settings. For a description of all fields, see [Queue](./../../configure/policies/queue.md) in the "Configure" section. For how to create user groups, see [User groups](./../staff/user-groups.md).

## Step 5. Give operators access to the line

Only an operator with the right permission can add guests to the line.

1. Open **Settings -> Operators and permissions -> Permissions** and choose the permission set assigned to front-desk operators.
2. In the **Queue** category, turn on the **Manage Queue** permission. The "Search" field helps you find it.
3. Save the permission set.

For all permissions, see [Permission card](./../../configure/operators-and-permissions/permissions/permission-card.md). For how the ready-made permission sets differ, see [Choosing a permission preset](./../staff/permission-presets.md).

## Step 6. Add a guest to the line

1. Open the **Queue** section on the left panel.
2. Click **Add to Queue** in the upper-right corner.
3. Choose the user and the host group whose seats they are ready to take.

> [!WARNING]
>
> The narrower the selected group, the longer the wait: a guest who agrees to any seat gets one sooner than a guest waiting for a specific zone. If the guest does not mind where they play, choose the widest group.

## Step 7. Watch the line

Above the table of waiting guests there are tabs: **All** and one for each host group. The table shows:

- **Position** -- the guest's place in the line: the smaller the number, the sooner their turn comes;
- **Time in Queue** -- how long the guest has been waiting;
- **Estimated Time** -- when a suitable seat is expected to be free -- you can tell the guest right away;
- **Planned Host** -- the gaming station that will be free first.

For all table columns, see [Queues](./../../usage/gizmo-manager/ochered.md) in the "Usage" section.

### When the guest's turn comes

While there are guests in the line, a seat that becomes free in a suitable host group goes only to a guest from the line -- another guest cannot bypass the line and take this seat. The exception is a guest who has just logged out: within the **Grace Period Before Logout**, they can sit at a seat of the same group again.

The seat does not stay idle if the guest from the line has stepped away: in the **Next in Time** mode, after the set number of minutes the seat also becomes available to the next guest in line. And if the guest does not log in within the **Removal Time**, they are removed from the line. All parameters are set in the queue policy -- see [Queue](./../../configure/policies/queue.md).

## Result

The waiting line works:

- a guest whom the operator added to the line sees their estimated time, and the operator does not need to remember the order by hand;
- when a suitable seat becomes free, the next guest in line gets priority for it -- if they do not log in in time, the seat becomes available to the next one;
- a guest who restarted their PC or is changing seats does not lose their seat because of the line -- within the grace period;
- guests from groups with a higher priority get a seat sooner -- where priorities are turned on;
- once a guest sits at a PC, they automatically disappear from all lines if **Remove User from All Queues on Login** is turned on.
