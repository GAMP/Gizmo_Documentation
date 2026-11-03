---
title: User groups
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><circle cx="17" cy="7" r="3"/><path d="M21 21v-2a3.5 3.5 0 0 0-2-3.17"/></svg>
      In this guide you will learn
    </p>
    <h2 class="gx-title">How to split customers into groups with different rules</h2>
    <div class="gx-meta">
      <span>10–15 minutes</span>
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

Not all your guests are the same -- and this is not only about personality, but also about the terms on which they play at your club. A regular customer, a one-time guest off the street, a tournament participant and your own employee who decided to play during a free shift -- all of them most likely need different rules: different tariffs, different discounts, different access to time products. User groups are exactly the tool that lets you sort all these people into different buckets and set up terms for each of them without touching the others.

Without groups, all customers in the system are equal -- the same tariffs and time products for everyone, no exceptions. With groups you can, for example:

-  Give regular customers a separate price or loyalty points -- a simple way to show that you value their loyalty.

-  Give employees a discount or free time, so that they can test a new game or just relax during a break -- for more details, see [Staff perks](./staff-perks.md).

-  Restrict access to certain host groups or time products to a specific group only -- for example, special terms for the participants of a closed tournament.

## Step 1. Decide which groups you need

If you have no groups at all yet, you do not have to plan a complex hierarchy right away. Two or three are usually enough to start: regular registered customers, guests without an account, and employees. Other groups -- such as VIP or tournament participants -- are added as needed, when there is a real reason for them.

## Step 2. Create a group

1. In Gizmo Manager, open <cmd text="Users"/> -> <cmd text="User Groups"/> and click <cmd text="Create Group"/> in the top right corner.

2. In the **Name** field, enter the name of the group -- the operator sees it when choosing a group for a customer, so it is better to use clear names: "Regulars", "VIP", "Staff", not "Group 1".

3. In the **User Category** block, in the **Used For** field, choose who the group is for: **Registered Only**, **Registered and Guests** or **Guests Only**.

4. In the **Billing** block, turn on what group members can pay for time with: **Time Product** and/or **Deposits**.

5. In the **Access** block, turn on the host groups group members can sit at.

6. Set up the other blocks if needed:
   - **Discount Group** -- in the **Discount Assignment** field, link a discount group if members are entitled to a discount;
   - **Credit** -- whether members can be sold items on credit;
   - **Loyalty** -- whether to award points: for money spent or for time at a host;
   - **Settings** -- **Login from Manager**, **Login from Host**, **Personal Storage** and the logout button in the shell;
   - **Required User Information** -- which fields of the customer card are required;
   - **Overrides** -- a custom app group, security profile or age rating instead of the ones set for the host group.

> [!WARNING]
>
> If nothing is turned on in the **Billing** and **Access** blocks, group members have nothing to pay for time with and nowhere to sit -- the guest will not be able to play.

Time products are restricted to a group not here, but in the time product card itself -- see [Time packages](./../sales/pricing/time-packages-guide.md). All group fields are described in the [User group card](./../../usage/gizmo-manager/users/user-groups/user-group-card.md) article.

## Step 3. Assign a customer to the group

1. Open the customer card in the <cmd text="Users"/> section by double-clicking the row.

2. In the **User Organization** block, select the group you need in the **User Group** field and click **Save**.

> [!TIP]
>
> You can change a customer's group at any time -- if a one-time guest has become a regular, just switch them to another group: their history and balance stay in place.

## Examples: how to show different games to different guests

Which games a guest sees in the shell is defined by the [app group](./../../usage/gizmo-manager/stations/gruppy-prilozheniy/_index.md). You can set it both for a host group and for a user group.

**New releases only in the VIP zone.** Useful if the club has different hardware, or new games with club accounts are available only in VIP:

1. Create an app group in which the games not available in the regular zone are turned off.
2. In **Hosts -> Host Groups**, assign this app group to the host group of the regular zone.

**Hide games from a user group.** For example, do not show some games to guests without a club account:

1. Create an app group without these games.
2. In the user group card, turn on **App Group Override** and select this app group.
3. Move the users you need into this group.

**Security Profile Override** works the same way: for the duration of the session, the guest gets their group's profile instead of the host group's profile -- see step 4 of [Security profiles](./../client-shell/security-profiles.md).

## Result

Customers are sorted into groups, and each group has its own terms: which hosts it has access to, what it can pay for time with, and which discount, credit and loyalty points apply. The rules of one group do not affect the other customers.
