---
title: Operator quick guide
order: 0.5
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>
      In this guide you will learn
    </p>
    <h2 class="gx-title">How to run a shift at the front desk: from opening the register to closing the shift</h2>
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

This is a cheat sheet for the front-desk operator: everything you do during a shift, in order, from opening the register to closing it. Open a shift, register a guest, sell a time product or a product, top up a deposit, log a guest in on a PC, reserve a seat, close a frozen game, reconcile the money and close the shift.

It covers only the operator's basic actions. How the administrator sets all of this up is described in the other guides of this section -- each step has links.

## Step 1. Open a shift

Cash operations are tied to the club's register. If the operator has required shifts, open a shift before you start selling.

1. Sign in to Gizmo Manager -- the administrator gives you the club's address.
2. On the **Select Register** page, choose a register from the list and click **Continue**.

**IMAGE: Select Register page in Gizmo Manager with a register chosen and the Continue button**

3. If the operator has required shifts, the **Enter Shift Start Details** screen opens. In the **Cash Amount** field, enter the amount in the cash drawer and click **Continue**.

**IMAGE: Enter Shift Start Details screen with the Cash Amount field filled in**

4. The shift is open -- the club map opens. You can check the shift in **POS -> Actions -> Shift Management**, on the **Active Shifts** page.

> [!TIP]
>
> Whether a shift is required for an operator is set by the administrator: **Settings -> Operators and permissions -> Operators**, operator card, **Shift** block -- **Disabled**, **Optional** or **Required**. For details, see [How to manage shifts in the Manager](./shifts.md).

## Step 2. Register a guest

1. Open the **Users** section and click **Create User**.
2. In the **User Information** block, fill in **First Name**, **Last Name** and **Username** -- this is the login, and the field is required. Add an email and phone number if needed.
3. Leave **User Group** set to **Members** -- these are regular registered customers.
4. Click **Save** -- the user appears in the user list.

**IMAGE: Create User form with the User Information block filled in and the Members user group selected**

> [!NOTE]
>
> Only the administrator creates **operator** accounts for signing in to Gizmo Manager: **Settings -> Operators and permissions -> Operators**, **Create Operator** button. Customer website credentials do not work for signing in. Enter the operator's real email and phone number -- they are needed to restore access.

For more about guest accounts, see [Customer accounts](./../staff/user-accounts-guide.md).

## Step 3. Sell a time product or a product

1. Open **POS -> Sales**.
2. In the **Search or create user/guest** field, start typing the login or phone number and choose the user from the list. A "1 of 1 selected" counter appears above the cart.
3. Click the time product or product you need in the catalog on the left -- the item is added to the cart.

**IMAGE: POS Sales screen with a user selected, the catalog on the left and an item in the cart**

4. Click **Payment**.
5. Choose the payment type: **Single Payment** or **Split** -- dividing the amount into several payments.
6. Choose the method: **Cash**, **Credit Card**, **Deposit** or **Pay Later**. Once you choose a method, the received amount is filled in.
7. Check the **Total** and click **Pay**. The "Payment completed successfully" confirmation appears.

**IMAGE: Payment dialog with the payment type, payment methods, total and the Pay button**

> [!WARNING]
>
> - The sale is tied to the selected user. If several users are selected in the search, each of them gets the purchase -- check the counter above the cart before you pay.
> - **Pay Later** does not take any money: the amount goes to the user's deferred payments. The "Payment completed successfully" message confirms that the operation was recorded, not that the money was received.
> - With **Cash**, count the money received and the change first; with **Credit Card**, check the payment result on the card terminal. **Deposit** uses funds the guest added earlier.

**Selling to a specific host**

1. In the **Map** section, click the host you need.
2. Open the right-click menu and choose **POS -> Sales** (CTRL+S).
3. The same cart opens, but tied to this host. If nobody is on the host, a guest is created for the sale. Add a time product or product and pay as described above.

**IMAGE: Club map with the right-click menu of a host open and POS -> Sales highlighted**

The guest logs in on the host automatically after a deposit or time product sale if the administrator turned on the **Automatic Guest Login** setting. If the host is gray (turned off), turn it on first: **Hosts -> Turn On**.

## Step 4. Top up a deposit

Guests who pay by the hour spend their deposit.

1. Open **POS -> Sales** and choose the user.
2. Click **Add Deposit** next to the **Payment** button.
3. Enter the amount on the on-screen keypad and click **Apply**.

**IMAGE: Add Deposit on-screen keypad with an amount entered and the Apply button**

4. A **Deposit** line appears in the cart. Click **Payment**, take the money -- for example, **Cash** -- and click **Pay**.

> [!WARNING]
>
> The deposit is credited only after payment: until you click **Pay**, the money does not reach the guest's balance.

## Step 5. Log a guest in on a PC

1. In the **Map** section, click a host and open the right-click menu.
2. Choose **Users -> Log In** (CTRL+L).
3. In the **Advanced Login** window, switch to guests: click the second toggle button next to the host number and choose the **Guests** group in the drop-down list.

**IMAGE: Advanced Login window with the guest toggle selected and the Guests group in the drop-down list**

4. Type the guest's name in the search field, choose them and click **Log In**.

> [!NOTE]
>
> You can log a guest in only on a free -- green -- host. A gray host is turned off: turn it on first with **Hosts -> Turn On**.

## Step 6. Reserve a seat

1. Open the **Reservations** section -- the **Calendar** opens by default, with a grid of hosts by day and time.
2. Click **Create Reservation** and choose an option: **With Payment** or **Without Payment**.

**IMAGE: Reservations calendar with the Create Reservation menu open and the With Payment and Without Payment options**

3. Set the **Start Date and Time** and the **Duration**. Use the toggle to choose the reservation owner: a guest from the database or a person without an account -- for them, choose a group in the **Owner** field, for example **Guests**. Add a phone number and notes if needed.
4. In the **Available Hosts** block, check one or more computers -- the list shows only the ones that are free at the selected time.
5. Check the details and click **Continue**.
6. Check the reservation summary and click **Save**. The reservation appears in the calendar and in the **Reservation Log** with the "Pending" status.

> [!NOTE]
>
> A **With Payment** reservation requires payment when you create it. If the time is already taken, the host is not in the list of available ones -- choose another computer or time. For details, see [How to create a reservation](./../booking/create-booking.md).

## Step 7. Help a guest with their account

Everything about a guest is in their card: open the **Users** section and double-click the guest's row.

- **Which PC the guest used** -- the **Sessions** tab: the host name, start and end time and duration of each session. The **Time Products** and **Deposits** tabs show the purchased time and the deposit history -- top-ups and charges.
- **How much the guest spent** -- the **Statistics** tab: money spent (time products, sessions, products), loyalty points earned and redeemed, time in the system and the number of logins.
- **The guest forgot their password** -- click **Actions** in the upper-right corner of the card, choose **Reset Password** and confirm in the dialog. The password is cleared immediately: the guest logs in with the login only and sets a new password after logging in.

**IMAGE: User card with the Actions menu open and the Reset Password item**

> [!WARNING]
>
> Reset a password only at the request of the account owner and after you verify their identity.

## Step 8. Close a frozen game

1. Open the **Management** section, **Processes** tab.
2. On the left, click **Expand All** and check the host you need.
3. Find the frozen process -- manually or with the **Process Name** filter -- and click the **"…"** icon on the right of the row.
4. Choose **Terminate**. **Terminate on Selected** and **Terminate on All** close the process on several hosts at once.

The command result is shown in **Logs** at the bottom of the tab.

> [!WARNING]
>
> Do not terminate Windows system processes -- System, Registry, csrss, smss, wininit, svchost, services: this can cause a crash, a restart or a "blue screen". Terminating a game can destroy unsaved progress. If the problem is on one host, do not choose **Terminate on All**.

For details, see [Remote management](./remote-management-guide.md).

## Step 9. Reconcile sales and money

- **POS -> Payment Log** -- the **Day** summary at the top: total revenue, cash, card, other, unpaid and **Total Refunded**. Below is the list of operations: date, operator, user, register, operation type, payment method and amount. You can narrow the list with the **Branch**, **Shift Id**, **Operator**, **User**, **Register**, **Operation Type** and **Payment Method** filters. By default, the current day from 00:00 to 23:59 is shown -- for yesterday's shift, change the dates.

**IMAGE: Payment Log with the Day summary at the top and the list of operations below**

- **Deferred payments** -- amounts charged with **Pay Later** are recorded in the user's deferred payments block. Invoices are recorded separately: **Reports -> All Reports -> Invoice Log**.
- **POS -> Deposits** -- every deposit operation: type (top-up or charge), payment method, branch, user, balance after the operation, operator, date and amount. The **Balance** column shows the balance after that specific operation, not the current one -- the current balance is shown in the **Users** list, in the **Balance** column.

> [!NOTE]
>
> Closing the payment screen with the cross cancels the checkout -- the payment has not been made yet. The administrator handles questions about payments that have already been made.

## Step 10. Close the shift

1. Count the cash in the drawer and check your shift's operations in **Reports -> Shift Log**: it shows the shift, the starting cash and the expected amount for each payment method. Keep in mind that a shift lasts from opening to closing and may not match the calendar day.
2. If needed, take an interim total: **POS -> Actions -> X-Report (Register)**. This is a cash report that does not close the shift -- you can take it as many times as you want.
3. Open **POS -> Actions -> Shift Management**. On the **Active Shifts** page, find your shift and click **End**.
4. In the **Close Shift** dialog, compare the expected and actual amounts for each payment method and click **Continue**.

**IMAGE: Close Shift dialog with expected and actual amounts for each payment method**

> [!WARNING]
>
> If the amounts do not match, find the cause first. Do not enter the expected amount instead of the actual one.

> [!TIP]
>
> If you signed out of Gizmo Manager without closing the shift, the **What would you like to do?** screen appears the next time you sign in, with a choice: **Continue Open Shift** or **Close Open Shift**.

## Result

- The operator opens a shift on their register and closes it with a cash reconciliation.
- The operator registers guests, sells time products and products, tops up deposits and logs guests in on free hosts.
- The operator makes reservations, helps guests with passwords and session history and closes frozen games.
- All operations are visible in the payment log, the deposit log and the shift log.

If you have questions about your work, contact the club administrator or [Gizmo support](./../../about/support.md).
