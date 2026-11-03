---
title: Customer accounts
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/></svg>
      In this guide you will learn
    </p>
    <h2 class="gx-title">How to create a customer account, assign a group and top up the deposit</h2>
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

The **Users** tab is the database of all the club's customers: regular guests with a login and password, and one-time visitors from guest groups. For each account you can see which group it belongs to, how much money, time and points the guest has, and whether they are sitting at a host right now.

A regular guest is better off with their own account: money on the deposit, purchased time and points are kept between visits, and discounts and access to hosts are defined by their group. Below is how to prepare the rules, create an account, assign a group and top up the deposit.

## Step 1. Check the password policy

The password policy sets the requirements for a customer's password. If a password does not meet them, it cannot be saved -- so first check which requirements are turned on.

1. Open **Settings -> Client -> Shell**, the **Password Policy** block.
2. Set the **Minimum Password Length** and the **Maximum Password Length**.
3. In the **Password Must Contain** field, mark the required character groups: **lowercase letters**, **uppercase letters**, **digits**. You can turn on several requirements at once.

> [!WARNING]
>
> Changes in the **Shell** section take effect only after Gizmo Client is restarted.

> [!TIP]
>
> If a password for a customer account is not saved, most often it does not meet the policy: for example, uppercase letters are required, but the password is typed only in lowercase. Come up with a password that meets the requirements, or relax them. Keep in mind that simpler passwords are easier to guess.

## Step 2. Prepare a group for new customers

New accounts go to the group marked as the **Default Group** in the list of groups. The group defines the guest's discount, the hosts available to them and what they can pay for time with.

1. Open **Users -> User Groups** and check which group is marked in the **Default Group** column.
2. Open the card of this group by double-clicking its row and check the main blocks:
   - **Required User Information** -- the pencil icon opens a window where you mark the required fields of the customer card: **First Name**, **Last Name**, **Date of Birth**, **Email**, **Phone** and others;
   - **Billing** -- the allowed sources of payment for time: **Time Product** and **Deposits**;
   - **Settings** -- **Login from Manager** (the operator can sit the guest at a host from Gizmo Manager) and **Login from Host** (the guest logs in on their own on the client PC).
3. Save the card.

How to make another group the default group:

> [!NOTE]
>
> This section is under development.

How to create and set up groups is described in [User groups](./user-groups.md), and all card fields are in the [User group card](./../../usage/gizmo-manager/users/user-groups/user-group-card.md) article.

## Step 3. Create a customer account

**Manually at the front desk**

1. Open the **Users** section -- the **Users** tab opens first.
2. Click **Create User** in the top right corner -- an empty user card opens.
3. In the **User Information** block, fill in the **First Name**, **Last Name** and **Username** -- this is the login the guest uses to log in to the client shell, and the field is required. If needed, enter the **Email**, **Phone** and **Mobile Phone**, as well as the required fields marked in the group.
4. In the **User Organization** block, check the **User Group**. For regular customers, **Members** works -- this is the group of registered customers.
5. Click **Save** in the top right corner -- the user appears in the general list.

The card also has other blocks: **Status** (the **Account Disabled** and **Request User Info** checkboxes), **Notes** and **Attributes**.

How to set a password when you create an account:

> [!NOTE]
>
> This section is under development.

**Self-registration by the guest**

A guest can register on their own, without an operator. Open **Settings -> Client -> Shell**, the **User Registration** block:

- **Client Registration** -- a self-registration screen appears in Gizmo Client;
- **Web Registration Portal** -- the registration screen becomes available on the web portal. You can open the portal link in **Settings -> Others -> About**, the **Modules** block -> **User Registration Portal** -- see the [About](./../../configure/others/about.md) article;
- **Registration Confirmation** -- email or phone verification is requested at registration; the method is chosen after you turn on the option;
- **Password Recovery** -- a password recovery screen appears in Gizmo Client; the method (email or phone) is chosen after you turn on the option.

> [!WARNING]
>
> For registration confirmation and password recovery, set up the communication method for the selected method -- for more details, see the [Communication methods](./../../configure/server/communication-methods.md) article.

**Email and SMS templates with the confirmation code.** You can change the text of the message the guest gets at registration:

1. On the server, open the `C:\Program Files\NETProjects\Gizmo Server\templates` folder.
2. For the email, rename the `RegisterByCodeWithEmail.example` file to `RegisterByCodeWithEmail`; for SMS, rename `RegisterByCodeWithMobile.example` to `RegisterByCodeWithMobile`.
3. Change the text in any text editor and save the file.

To make the guest accept the club rules at registration, set up the [user agreement](./../client-shell/user-agreement.md).

**Many customers at once**

If you already have a customer database in an Excel spreadsheet, upload it with the **Import Users** button: specify the **Phone Country Code** and drag the file into the upload area (`.xls`, `.xlsx` and other formats, up to 50 MB). The **User Audit** window finds and merges duplicate records of the same person.

## Step 4. Assign a group to the customer

If the guest should go not to the default group but, for example, to "Regulars" or "VIP", change their group:

1. Find the guest in the **Users** list -- for example, with **Search** or the **User Group** filter.
2. Open the guest's card by double-clicking the row.
3. In the **User Organization** block, select the **User Group** you need and click **Save**.

The guest's current group is shown in the **User Group** column of the list.

## Step 5. Top up the deposit

A customer has two different values: **Deposits** -- the amount on the deposit, and **Balance** -- the state of the money account. A negative **Balance** means a debt.

Most often, the deposit is topped up through the register:

1. Open **POS -> Sales** and find the guest by login or phone number in the **Search or create user/guest** field.
2. Click **Add Deposit** next to the **Payment** button.
3. In the **Deposit** window, enter the amount in the **Enter amount** field and click **Apply** -- a **Deposit** line appears in the cart.
4. Click **Payment**, choose the method -- for example, **Cash** -- and click **Pay**.

You can also open the top-up window elsewhere:

- **From the user list** -- select the record with a checkbox, click the **"..."** icon and choose **Deposit**. The keyboard shortcut is `CTRL+D`.
- **From the club map** -- on the **Map**, select the gaming station the guest is sitting at, and click **Deposit** in the **POS** category. The action is not available if no customer is logged in on the PC.

> [!WARNING]
>
> The deposit is credited only after payment: until the **Pay** button is clicked, the money does not reach the guest's balance.

The history of top-ups and charges is in **POS -> Deposits** and on the **Deposits** tab of the guest's card. The **Balance** column in the history shows the amount left after a specific operation, and the current amount is shown in the **Users** list.

> [!IMPORTANT]
>
> For the guest to be able to pay for time from the deposit, the **Deposits** source must be turned on in the **Billing** block of their group's card.

## Step 6. Sit the guest at a host

- The guest logs in to the shell on their own, with their login and password -- if **Login from Host** is turned on in their group.
- The operator can sit the guest down themselves: select the record in the list and click **Log In** (`CTRL+L`). To end the session, click **Log Out** (`CTRL+ALT+L`).

## Guests without an account

A one-time visitor does not have to register: they can play as an unregistered customer from a guest group. For this:

- in the group card, the **Used For** field must be set to **Guests Only** or **Registered and Guests**;
- in the cards of the time products and products the guest will buy, the **Unregistered** option must be turned on. For more details, see the [Time product card](./../../configure/finance/time-products/time-product-card.md) and [Product card](./../../usage/gizmo-manager/magazin/products/kartochka-produkta.md) articles.

## Password reset

If a guest forgot their password:

1. Open the guest's card by double-clicking the row in the **Users** list.
2. Click **Actions** in the top right corner of the card and select **Reset Password**.
3. Confirm the action with the **Reset Password** button in the dialog.

The reset takes effect immediately: the password is cleared, the guest logs in with the login only and sets a new password after logging in.

> [!WARNING]
>
> Reset a password only at the request of the account owner and after you have made sure it is really them.

## Ban and deletion

- **Ban** -- blocks the guest's access to hosts. A ban can be permanent -- until **Unban** -- or for a set period. Ban reasons are set in advance as a list in **Settings -> Policies -> Ban Reasons**, so that you do not have to type free text every time. For more details, see the [Ban reasons](./../../configure/policies/ban-reasons/_index.md) article.
- **Unban** -- removes the ban. The **Unban**, **Delete**, **Hard Delete** and **Restore** actions are in the **"..." -> Other Actions** menu.
- You can find banned and deleted records with the **Banned** and **Deleted** filters above the table.

> [!NOTE]
>
> The operator needs permissions for these actions. In the permission card, the **User** category has separate permissions: **Create**, **Reset Password**, **Change User Group**, **Ban User**, **Unban User**, **Delete**, **Permanent Delete**, and the **Sales** category has **Deposit**. For more details, see the [Permission card](./../../configure/operators-and-permissions/permissions/permission-card.md) article.

## Result

- The guest has their own account: they log in to the shell with a login and a password that meets the club's password policy.
- The guest belongs to the right group -- it defines their discount, the available hosts and the ways to pay for time.
- Money on the deposit is kept between visits and is charged for time if the **Deposits** source is turned on in the group.

The tab and all actions are described in the [Users](./../../usage/gizmo-manager/users/users/_index.md) article, and the registration settings and password policy in the [Shell](./../../configure/client/shell.md) article. How to let guests play on credit is described in [How to enable postpay](./postpay.md).
