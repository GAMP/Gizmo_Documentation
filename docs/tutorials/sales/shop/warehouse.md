---
title: Warehouse
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M3 4h2l2.5 12.5a2 2 0 0 0 2 1.5h8a2 2 0 0 0 2-1.5L21 8H6"/></svg>
      In this guide you will learn
    </p>
    <h2 class="gx-title">How to track product stock and manage your warehouse</h2>
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

When you sell products through Gizmo, you often need to keep an eye on their stock -- to notice in time that it is time to restock, and to find discrepancies caused by mistakes or dishonest operators. This is what the warehouse is for: it counts product stock and lets you restock and write off products.

First we will create a warehouse, link it to a register and turn on product tracking, and then go through stock operations, stock counts and stock reports.

## Step 1. Create a warehouse

Make sure you have at least one warehouse in <cmd text="Shop"/> -> <cmd text="Warehouses"/> and that it is linked to the right branch.

**IMAGE: the Shop -> Warehouses page with a warehouse and its settings: name, type and branch**

The warehouse settings are:

- **Name** -- any name for the warehouse, for example "Front desk".
- **Type** -- **Point of Sale** or **Warehouse**. These types do not differ in function and are only there for visual convenience. We recommend the Point of Sale type for the place of sale at the front desk -- for example, a fridge with drinks or a snack display. Use Warehouse for a storage room in the club or a separate storage space.
- **Branch** -- the club this warehouse belongs to. One warehouse cannot belong to more than one branch.

## Step 2. Link the warehouse to a register

The warehouse is linked to a register (a place of sale), so that products sold at this point are written off from that warehouse.

1. Open <cmd text="Settings"/> -> <cmd text="Finances"/> -> <cmd text="Registers"/> and select the register of your point of sale. For more about registers, see [How to connect Companion and set up a register](./../register/companion-and-register.md).
2. In the register card, link the warehouse you need and apply the changes.

   **IMAGE: the register card with the Warehouse field filled in**

## Step 3. Turn on stock tracking for products

The warehouse is set up, but products will not appear in it until you explicitly turn on their tracking.

1. Go to <cmd text="Shop"/> -> <cmd text="Products"/>.
2. Open the card of each product you want to add to the warehouse one by one, scroll down and turn on stock tracking.
3. Set up the additional options if needed:
   - **Disallow sale when out of stock** -- does not let you sell the product if its stock in the warehouse is zero.
   - **Stock level notification** -- warns the admin when the quantity of the product drops below a critical threshold.
   - **Stock options** -- what exactly is written off on a sale:
      - **Default** -- only the product itself is written off.
      - **Target** -- along with the product, another selected product is written off in the set quantity -- for example, a cup or a straw when a drink is sold.

**IMAGE: the Stock block of the product card with Stock tracking turned on and its additional options**

## Step 4. Choose the type of stock operation

Product receipts and write-offs go through <cmd text="Shop"/> -> <cmd text="Stock Operations"/>. Click <cmd text="Stock Operation"/> in the top right corner and choose the operation type:

- **Incoming** -- restocking the warehouse or accepting a transfer from another branch or warehouse (step 5).
- **Transfer** -- moving products from one warehouse to another. Useful for a chain of several branches, or if one club has several warehouses and you need to control the movements between them (step 6).
- **Adjustment** -- writing off the specified quantity of products from the warehouse: a regular write-off, a sale at cost, or a sale at the price set in the product card (step 7).

## Step 5. Restock the warehouse

Choose the **Incoming** operation type.

This makes the receipt method available -- **Manual** (select products and their quantity for a manual receipt) or **From Transfer** (create a receipt from a transfer already created from another warehouse or branch). If you do not use transfers between warehouses and branches, choose **Manual**.

1. Select the branch and the warehouse you want to restock.
2. In the product search, add all the products, their quantity and their cost price (from the delivery note; you can enter 0), as well as the expiration date if needed.
3. In the additional details, attach documents if needed (for example, the delivery note) -- you will be able to view them later -- and add a note if you like.
4. Click <cmd text="Continue"/> at the top of the screen -- the operation is completed and appears in the list of stock operations, where you can always check the warehouse's operation history and view the attached documents.

**IMAGE: the Incoming stock operation form with the branch, the warehouse and the list of products with quantity, cost price and expiration date**

**IMAGE: the Continue button at the top of the stock operation form**

**IMAGE: the list of stock operations with the completed Incoming operation**

## Step 6. Move products between warehouses

Choose the **Transfer** operation type.

1. In the menu that opens, specify the branch and the warehouse the products are sent from, and the branch and the warehouse they are sent to. The **Automatically Accept Products** checkbox moves the products right away, without the need to confirm them. We recommend turning it on, but you can leave it off if, for example, you transfer products between branches and the manager of the other branch needs to confirm the receipt.
2. Select all the products to move and their quantity.
3. Enter the reason for the transfer and additional details if needed.

> [!WARNING]
>
> Currently there is no limit on transfers, so the warehouse you transfer from can go negative.

If for some reason you did not turn on **Automatically Accept Products** when you created the transfer, to accept it open <cmd text="Stock Operations"/> -> <cmd text="Incoming"/>, choose the **From Transfer** receipt method and select the transfer operation that appeared after it was created.

## Step 7. Write off products from the warehouse

Choose the **Adjustment** operation type.

1. In the menu that opens, specify the branch and the warehouse you will work with.
2. Choose the reason for the adjustment -- write-off, sale at cost, or sale at the product's main price.
3. Add all the products, the adjustment reason for each, the quantity and the write-off cost (it goes to the register; enter 0 if you need to write off a product without payment).
4. Enter additional details if needed and click <cmd text="Continue"/>.

**IMAGE: the Adjustment stock operation form with the reason, the products, the quantity and the write-off cost**

## Step 8. Run a stock count

If you want to compare the quantity of a product the system expects (calculated from all sales and restocks) with what is actually in the warehouse, run a stock count.

1. Open <cmd text="Shop"/> -> <cmd text="Stock Count"/> and create a new stock count.
2. Select the branch and the warehouse where you will run the stock count.
3. Enter the actual quantity of all products in the warehouse, and fill in comments and notes if needed.
4. Click <cmd text="Continue"/>, check the data and confirm the stock count -- it appears in the list of the **Stock Count** section.

## Step 9. Keep track of stock and product movements

Two more tabs are useful when you work with the warehouse:

- <cmd text="Shop"/> -> <cmd text="Product Stock"/> -- the current stock of products in all warehouses and branches available to you.
- <cmd text="Shop"/> -> <cmd text="Product Movements"/> -- all operations with products: restocks, write-offs, sales, transfers and any other actions.

## Result

- Products with stock tracking that are sold at a register are written off from the warehouse linked to it, and the system keeps track of their stock.
- Restocks, transfers and write-offs go through stock operations and are saved in the history along with the attached documents.
- A stock count shows the discrepancies between the expected and the actual quantity of a product, and stock and product movements are always visible in the <cmd text="Shop"/> section.
