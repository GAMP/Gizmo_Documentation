---
title: Discounts and promotions
order: 4
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
      In this guide you will learn
    </p>
    <h2 class="gx-title">How to create a discount and assign it to a customer group</h2>
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

A guest who comes to you every week will sooner or later ask: "Do I get a discount?" In Gizmo you do not need to keep discounts in your head and apply them by hand -- you set a rule once, and it applies by itself: to products, time products, tariffs and even to per-minute billing, because per-minute billing also works through invoices.

A discount reaches the customer through a chain of three links: the **discount** -- the rule for what becomes cheaper and by how much; the **discount group** -- a set of discounts; the **user group** -- a category of customers that the discount group is assigned to. Below we will go through all three links using the example of a 10% discount on time products for regular customers. Loyalty points rewards are set up separately -- in [Loyalty points for customers](./loyalty-program.md).

## Step 1. Create a discount

1. Open **Marketing -> Discounts** and click **Create Discount** in the top right corner -- the discount card opens.
2. In the general block:
   - turn on **Enable Discount** -- only enabled discounts apply;
   - fill in the **Name** -- a required field, for example "Time products -- 10%";
   - add a **Description** if needed.
3. In the **Availability** block, in the **By Branch** section, turn on the branches where the discount should apply. By default, the discount is off in all branches.
4. If the discount should not work all the time, set up the **Custom Ranges** section:
   - turn on **Date Range** and enter the **Start Date** and **End Date** -- for example, for a holiday week;
   - to make the discount apply only at certain hours, turn on **Time Range**, add an interval with the **+** button and set the days of the week and the time. To delete an extra interval, click the trash icon.

If no ranges are turned on, the discount is available at any time.

## Step 2. Specify what the discount applies to

In the **Target Groups** block, you set which items in the order earn the customer a discount.

1. Click **Create Target Group** and choose the type: **Products**, **Time Products**, **Product Groups**, **Payment Methods** or **Tariffs**. In our example, it is **Time Products**.
2. Add the items you need with the **+** button, or mark **Include All** -- then the discount applies to all objects of this type, for example to all time products.
3. Choose the activation condition inside the target group:
   - **All** -- the order must contain all objects of the group;
   - **Any** -- one object from the group is enough;
   - **Quantity** -- the order must contain at least the set **Minimum Quantity** of objects;
   - **Amount** -- the group's objects in the order must add up to at least the **Minimum Amount**.
4. If you added several target groups, be sure to set the **Group Activation**: **All** -- the order must contain all groups, **Any** -- at least one.

For most simple discounts, **Any** works in both fields. To remove an item added by mistake, click the trash icon; to remove an extra target group, click **Delete Group**.

## Step 3. Set up the reward

In the **Reward** block, you set what the customer gets when the conditions are met.

1. **Reward Type**:
   - **Discount** -- the price goes down;
   - **Bonus** -- the customer gets points for the order, that is, cashback in points.
2. **Apply To**:
   - **Order Line** -- the discount applies only to the items from the target groups;
   - **Entire Order** -- the discount applies to the whole order, including items that are not in the target groups.
3. **Calculation Type**:
   - **Percentage** -- a discount percentage;
   - **Fixed** -- a fixed amount of discount or of points awarded for the order.
4. Enter the value in the **Amount** field -- 10 in our example.
5. Save the discount.

> [!IMPORTANT]
>
> A fixed amount applies per order, not per unit of a product. If the customer buys several units, the final price may differ from what you expect -- before launching, check the calculation with a test sale.

All fields are described in the [Discount card](./../../usage/gizmo-manager/marketing/discounts/discount-card.md) article.

## Step 4. Put the discounts into a discount group

A user group is assigned a discount group, not a single discount, so even a single discount has to be put into a group.

1. Open **Marketing -> Discount Groups** and click **Create Discount Group**.
2. Fill in the **Name** -- a required field, for example "Regulars".
3. In the **Discounts** block, select the discounts you need from the drop-down list. To remove an extra discount, click the **x** next to it.
4. Save the changes.

One discount can be part of several discount groups: for example, a discount on drinks can go into both the "Regulars" group and the "VIP" group. For more details, see the [Discount group card](./../../usage/gizmo-manager/marketing/discount-groups/discount-group-card.md) article.

## Step 5. Assign the discount group to a user group

1. Open **Users -> User Groups** and double-click the group you need. If there is no suitable group, create one with the **Create Group** button.
2. In the **Discount Group** block, in the **Discount Assignment** field, select the discount group you created. The cross icon next to the field removes the link.
3. Check the list of groups: the linked discount group should appear in the **Discount Group** column.
4. Move the customers you need into this group: in the customer card, select it in the **Group** field. How to do this is described in [User groups](./../staff/user-groups.md).

> [!NOTE]
>
> If you created a new user group, check the **Billing** and **Access** blocks in its card. If no time payment sources and no host groups are turned on in them, a guest from this group will not be able to play.

All blocks of the group card are described in the [User group card](./../../usage/gizmo-manager/users/user-groups/user-group-card.md) article.

## Example scenarios

**A 10% discount on time products or tariffs for regular customers**

It is covered in the steps above: the **Time Products** or **Tariffs** target group, the **Any** activation conditions, the **Discount** reward on the **Order Line**, **Percentage** -- 10. The same example is in the [Migration to v3](./../migration-to-v3.md) guide, section 2.11.

**Free time for a user**

- Create a discount with the **Tariffs** and/or **Time Products** target group -- with the items you need or with **Include All** marked.
- In the reward, choose **Discount**, **Order Line**, **Percentage** -- 100.
- Put the discount into a discount group and assign it to a separate user group, for example "Free time".
- Move the user you need into this group.

> [!WARNING]
>
> The discount applies to all members of the group. When the free time is no longer needed, move the user back to their usual group.

Another way -- a separate time product priced at 0 and available to only one group -- is described in [Staff perks](./../staff/staff-perks.md). A tariff cannot be restricted this way: free time on a tariff can be given only with a discount, as described above.

**A special product price for a customer group**

- Create a separate discount for each such product: the **Products** target group with this product, the **Discount** reward, **Order Line**, **Fixed**.
- In the amount, enter the difference between the usual and the desired price: if the product costs $3 and should cost $2.50 for the group, enter 0.50.
- Put all such discounts into one discount group and assign it to a user group.
- To give special prices to one person, create a separate user group for them.

> [!TIP]
>
> If discounts should also apply to reservations, turn on **Apply Discounts** in **Settings -> Policies -> Reservations**. For more details, see the [Reservations](./../../configure/policies/reservations.md) article.

## Promotions

Promotions are offers limited in time. They are set up on the **Marketing -> Promotions** tab, and promo codes are created through them -- for more details, see [Promo codes](./promo-codes.md).

> [!NOTE]
>
> This section is under development.

## Result

- A customer from a user group that has a discount group assigned gets the discount automatically as soon as their order meets the discount conditions. The discount is applied at the sale in the **POS** section.
- The discount works only in the enabled branches, and only on the set dates and hours, if they are specified.
- The applied discount is visible in the order card, in the **Discount** field.

The tabs and fields are described in the [Discounts](./../../usage/gizmo-manager/marketing/discounts/_index.md), [Discount card](./../../usage/gizmo-manager/marketing/discounts/discount-card.md), [Discount groups](./../../usage/gizmo-manager/marketing/discount-groups/_index.md) and [User group card](./../../usage/gizmo-manager/users/user-groups/user-group-card.md) articles.
