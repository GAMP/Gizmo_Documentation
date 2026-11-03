---
title: How to create a reservation
order: 2
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="m9 16 2 2 4-4"/></svg>
      In this guide you will learn
    </p>
    <h2 class="gx-title">How to set up the rules and reserve a gaming station</h2>
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

A guest calls on Friday afternoon and asks you to hold a spot for the evening -- and by the evening the club usually has no free spots left. A reservation assigns a specific gaming station to the guest for the time they need, and nobody else takes it before the guest arrives.

First we will set up the reservation rules for the whole club once, and then create the reservation itself. How reservations work in general is described in the [Reserving gaming stations](./../../articles/booking.md) article.

## Step 1. Set up the reservation rules

You set the rules once, and they apply to all reservations. Open **Settings -> Policies -> Reservations**.

**General rules**

- **Block User Login Before Reservation Start** -- how many minutes before the reservation starts other guests can no longer sit at this station. Set a time that is enough for a guest to free the PC -- for example, 15 minutes.
- **Block User Login After Reservation Start** -- how many minutes after the reservation starts the station stays closed to other guests while it waits for its owner.
- **Expire on No Login** -- after how many minutes of delay the reservation is canceled and the station becomes free for others.
- **Allow Multi-Host Reservations** -- turn it on if guests reserve stations as a group, for example for five people at once.

**Purchase options**

- **Select Purchase Option** -- what can be paid for with a reservation: time and time products, time only, or time products only.
- **Minimum Time** and **Maximum Time** -- the period a reservation can be made for, in minutes.
- **Select Fee Type** -- whether the club charges for the reservation itself: a fixed amount, a percentage of the cost, or nothing.
- **Minimum Payment Percentage** -- what part of the cost the guest must pay in advance.
- **Apply Discounts** -- turn it on if current discounts should apply to reservations.

**Cancellation policy**

- **Cancellation Grace Period** -- how many minutes before the start the guest can cancel the reservation without a penalty.
- **Refund on Cancellation** -- what percentage of the payment is returned to the guest on cancellation.

Save the settings. Each field is described in the [Reservations](./../../configure/policies/reservations.md) article of the Configure section.

> [!TIP]
>
> If reservations can be paid for with time products, turn on **Available for reservations** in the card of each such time product -- otherwise the time product is not offered when a reservation is created. For more details, see [Time packages](./../sales/pricing/time-packages-guide.md).

## Step 2. Set up reservation notifications

A guest sitting at a reserved station should know in advance that they will soon be asked to free the PC.

There are two different settings here:

- In **Settings -> Policies -> Reservations**, in the **Notifications** block, set how many minutes before the reservation starts a general reservation alert appears on the screen of the reserved PC (**Client Reservation Alert Time**) and when the operator gets a notification (**Manager Reservation Alert Time**).
- In **Settings -> Client -> Notifications**, in the **Reservation Alert** block, you set up the messages for the guest who is already sitting at this PC: that another customer's reservation will start soon. For each message you set the text, the time before it is shown and the type -- visual, sound or both. For more details, see [Notifications](./../../configure/client/notifications.md).

## Step 3. Create the reservation

1. Open the **Reservations** section in the left panel -- the **Calendar** tab opens first. It shows the club's hosts vertically and dates and half-hour intervals horizontally.
2. Find a free station for the time you need. To find your way faster, use the filters above the grid: **Date**, **Branch** and **Host Group**.
3. Click **Create Reservation** in the top right corner and choose an option:
   - **With Payment** -- the guest pays for the reservation right when it is created;
   - **Without Payment** -- the reservation is created without money, and the guest pays later.
4. In the **Reservation Details** block, enter the **Start Date and Time** and the **Duration** -- it is chosen in half-hour steps.
5. In the **Owner Information** block, use the switch to choose who the reservation is for: a guest from the database or a person without an account. For a guest without an account, select their group in the **Owner** field, for example **Guests**. If needed, enter an **Additional Phone** for contact.
6. If needed, add a note in the **Notes** block -- for example, "coming with a friend, needs adjacent stations".
7. The list of **Available Hosts** appears on the right -- the hosts that are free at that time. Mark one or several, if reservations for several hosts are allowed in the rules. The **Expand All** button expands all host groups.
8. Check the details and click **Continue** in the top right corner.
9. Check the reservation summary and click **Save**. If you chose **With Payment**, the reservation requires payment when it is created.

> [!NOTE]
>
> The list of available hosts appears only after the date, the duration and the owner of the reservation are filled in. Until then, a hint is shown in its place.

All form fields are described in the [Reservation card](./../../usage/gizmo-manager/reservations/reservation-card.md) article.

## Step 4. Check the reservation

- **In the calendar** -- the reservation appears in the grid as a rectangle where the host and the time cross. The **User** filter leaves only the selected guest's reservations in the grid.
- **In the reservation log** -- the next tab collects all the club's reservations, future and past, with two statuses: the **reservation status** and the **payment status**. A reservation you have just created gets the "Pending" status, and a reservation whose time has passed gets "Expired". The payment status is "Unpaid" or "Paid".

> [!NOTE]
>
> If the time you need is already taken, the host does not appear in the list of available hosts -- choose another PC or another time.

For more details, see the [Calendar](./../../usage/gizmo-manager/reservations/calendar.md) and [Reservation log](./../../usage/gizmo-manager/reservations/reservation-log.md) articles.

## Result

The station is assigned to the guest for the selected time. When the reservation time comes:

- Other guests can no longer log in to the reserved station for the time set in the rules.
- The guest sitting at this station gets a reservation notification.
- If the reservation owner does not arrive within the **Expire on No Login** time, the reservation is canceled and the station is available to everyone again.
