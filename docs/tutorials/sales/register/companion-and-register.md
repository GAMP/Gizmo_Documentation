---
title: How to connect Companion and set up a register
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M8 7v10"/><path d="M12 7v10"/><path d="M17 7v10"/></svg>
      In this guide you will learn
    </p>
    <h2 class="gx-title">How to turn the admin PC into a point of sale: Companion, register and barcode scanner</h2>
    <div class="gx-meta">
      <span>20–30 minutes</span>
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

Tariffs and time products are set up, but there is nothing to sell them through yet: you need a point of sale -- a PC from which the admin sells products and time products. **Gizmo Companion** turns it into a point of sale -- an app that works as a bridge between the Gizmo server and the POS hardware: card terminal, cash drawer, barcode scanner, receipt printer. Sales will not work without Companion.

The setup works like this: each point of sale gets its own Companion, which connects to the server and is then linked to a **register** in Gizmo Manager. A club can have several registers. The card terminal and receipt printer can be connected right away or later -- they do not affect the Companion and register setup. For more about Companion, see [Gizmo Companion](./../../../about/overview/gizmo-companion/_index.md).

## Step 1. Create a Companion in Gizmo Manager

One Companion is for one point of sale (PC).

1. Open **Settings -> Server -> Companions** and click **Create Companion** in the top right corner.
2. Enter a **Name** -- a clear one, for example based on where the point of sale is: "Front desk, 1st floor".
3. Save. The Companion appears in the list.
4. Double-click the Companion to open its card. Copy the token with the copy icon in the **Token** field: you will need it in step 3.

For more details, see [Companion](./../../../configure/server/companions/_index.md).

## Step 2. Install Companion on the point-of-sale PC

1. Open **Settings -> Others -> About** and download the **Gizmo Companion** installer in the **Downloads** block.
2. Run the installer **on the PC you will sell from** (usually the admin PC) and go through all the steps.

For more details, see [About](./../../../configure/others/about.md).

## Step 3. Connect Companion to the server

1. On the point-of-sale PC, open the Companion interface -- with the desktop shortcut or at [localhost:8000](http://localhost:8000) in a browser on the same PC.
2. In the connection settings, specify:
   - **Protocol**;
   - **Host name** -- the local IP of the Gizmo server;
   - **Port** -- 80 by default.
3. Paste the token from step 1, make sure the value in the field has changed, and save.
4. Go back to Gizmo Manager, to **Settings -> Server -> Companions**, and check that the **Status** column says **Connected**. If it does not, go through the steps again.

To find out the local IP of the server, see [Network access to Gizmo](./../../client-shell/network-access.md).

## Step 4. Connect the barcode scanner and other POS devices

You need this step if a barcode scanner, a cash drawer or a smart card reader is physically connected to the point-of-sale PC.

1. In the Companion interface, open **POS Devices** in the left panel.
2. Specify the COM ports of the connected devices: cash drawer, barcode scanner, smart card reader.
3. Save the settings.

Do not touch the register connection section in Companion yet -- it is covered in step 6.

> [!TIP]
>
> A barcode scanner helps you find products faster than by hand. For a product to be found with the scanner, fill in the **Barcode** field in its card -- see [Product card](./../../../usage/gizmo-manager/magazin/products/kartochka-produkta.md). You can also set a barcode for a time product.

**How to prepare the barcode scanner**

By default, most scanners work in keyboard emulation mode. To work with Companion, the scanner must be switched to COM port mode:

1. Connect the scanner to the point-of-sale PC and install the virtual COM port driver for your model -- it is available on the scanner manufacturer's website. The driver for scanners, using the SB2108 Plus as an example: **[LINK: virtual COM port driver]**.
2. Switch the scanner to COM port emulation mode -- to do this, scan the service barcode from the scanner's manual.
3. Open **Device Manager -> Ports (COM & LPT)**: the scanner appears there with its COM port number. Specify this port in the **POS Devices** section of Companion.
4. Set the **CRLF** (Enter) suffix -- the scanner sends data in the `<prefix>data<suffix>` format, and without the suffix the product is not added to the cart automatically. The suffix is also set with a service barcode from the scanner's manual.

> [!NOTE]
>
> If it is not clear what data the scanner sends, use the ScannerTest utility -- **[LINK: ScannerTest]**. Run it, select the scanner's COM port, click **Start** and scan a product: the utility shows the scanner output in ASCII and HEX. Before you run it, close other programs that use this COM port.

## Step 5. Link Companion to a register

1. Open **Settings -> Finances -> Registers**. There may already be registers here -- these are the names of all PCs that have ever connected to the server.
2. Open the register of the point-of-sale PC. If it is not there, click **Create Register**.
3. Fill in the fields:
   - **Branch** -- a required field;
   - **Companion** -- the Companion from step 1;
   - **Number** -- the sequence number of the register among all points of sale;
   - **Name** -- any convenient name, a required field;
   - **Shift starting cash** -- leave 0, or enter an amount if the register should already hold cash at the start of a shift.
4. If the club has only one point of sale, turn on **Default register for the branch**.
5. Do not touch the terminal and printer number fields yet -- you need them only to connect a card terminal and a receipt printer.
6. Save the changes.

> [!TIP]
>
> You can delete the registers you do not need and keep only the real points of sale -- this makes the section easier to read.

All register fields are described in the [Register card](./../../../configure/finance/registers/register-card.md) article.

## Step 6. Connect the card terminal and the receipt printer

<color color="#99B1E6">**Only for clubs that connect a card terminal or a receipt printer to Gizmo.**</color>

The technical connection of the card terminal and the receipt printer is a separate process, and support helps with it remotely. On the Gizmo Manager side, do the following:

1. In **Settings -> Finances -> Registers**, open the register of the point of sale and enter the **Payment terminal number** and/or the **Receipt printer number**.
2. In **Settings -> Organization -> Taxes & Currency**, set the currency and fill in the tax settings -- these parameters are used when receipts are printed. If the branches belong to different legal entities, their taxes are reassigned in the **Branches** section. For more details, see [Taxes & Currency](./../../../configure/organization/taxes-and-currency.md).
3. Save the changes.

**If Companion does not see a connected device**, check that:

- the device is turned on and ready to work;
- the USB or Ethernet cable is firmly connected and not damaged;
- the device driver is installed on the PC;
- Companion is running with administrator rights;
- the Gizmo server address is set correctly in the Companion settings.

Error details are in the Companion logs: the Companion installation folder, the `Logs` subfolder.

To make card payments go through the terminal, turn it on in the payment methods -- see [How to set up payment methods](./payment-methods.md).

## Result

- The admin PC has become a point of sale: Companion is connected to the server and linked to a register.
- Sales of products and time products go through this register.
- If a scanner is connected, products are found by barcode.
- If a card terminal and a receipt printer are connected, Companion sends them the commands to take card payments and print receipts.

Working with the register during a shift is described in the [POS](./../../../usage/gizmo-manager/tochka-prodazh/_index.md) article.
