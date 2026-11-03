---
title: How to set up payment methods
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
      In this guide you will learn
    </p>
    <h2 class="gx-title">How to choose how guests pay at the front desk and in the client shell</h2>
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

One guest pays in cash at the front desk, another by card, a third spends points on a time product right from their PC. Payment methods define which of these options are available in the club and where: to the admin in Gizmo Manager, to the guest in Gizmo Client, or in both.

Gizmo has four built-in payment methods. You can add your own to them -- for example, payment through an online payment provider. All settings are on one page: **Settings -> Finances -> Payment methods**.

## Step 1. Set up the standard payment methods

The standard methods are built into the system and cannot be deleted -- you can only set where they are available:

- **Cash** -- cash;
- **Credit Card** -- a bank card;
- **Deposit** -- payment from the user's deposit;
- **Points** -- payment with loyalty points.

For each method, set three switches:

- **Enabled** -- whether the method works in the system at all;
- **Manager** -- whether it is available to the admin in Gizmo Manager;
- **Client** -- whether it is available to the guest in Gizmo Client.

For example, if cash is accepted only at the front desk, leave **Manager** on for **Cash** and turn **Client** off.

## Step 2. Turn on card payments through the terminal

You need this step if a payment terminal is connected to the register. How to connect a terminal to the register is described in [How to connect Companion and set up a register](./companion-and-register.md).

1. Turn on **Use payment terminal for credit card payments** -- card payments will now go through the connected terminal.
2. Choose the terminal mode: **Offline** or **Online**.

Which mode to choose and how they differ in practice:

> [!NOTE]
>
> This section is under development.

## Step 3. Add your own payment method

You need your own payment method if guests pay with something that is not among the standard ones. In the **Additional payment methods** block, click **+ Create Payment Method** and choose the type.

<tabs>

<tab name="Offline">

A method for accepting payments without integration with an external payment system.

1. Enter a **Name** -- the method is shown under this name in the interface. The field is required.
2. Turn on **Enabled**, then mark where the method is available: **Manager** and/or **Client**.
3. Save.

</tab>

<tab name="Online">

A method for online payment through a payment provider. The guest uses it to top up the deposit from Gizmo Client, and the operator can use it to pay for a sale or a reservation in Gizmo Manager.

1. The **Payment Providers** page opens with the list of available integrations -- online payment providers are connected here as payment-method integrations (for example, Stripe, Kaspi, Click.uz, OPay, Bakai and BPay QR MIA).
2. Click the card of the provider you need and follow the instructions to set up the integration. Providers marked "Already added" cannot be selected again.

**What you need for online payments**

The payment service notifies the Gizmo server about each payment over the internet, so the server must be reachable from outside:

- an active account with the payment provider;
- a public static IP address or a domain name (DNS, DDNS) that points to Gizmo Server;
- forwarding of an external port on the club's router to the Gizmo Server port -- see [Port forwarding -- what it is and why you need it](./../../../articles/port-forwarding.md);
- access to the server from the internet over https -- most providers work only over https. How to install a certificate is described in [How to install an SSL certificate on the server](./../../client-shell/ssl-certificate.md).

> [!WARNING]
>
> Opening the server port to the whole internet is not safe. If the provider publishes a list of its IP addresses, allow incoming connections only from them on the router or in the firewall. Check the current list in the provider's documentation.

The fields of all providers are described in the [Payment method card](./../../../configure/finance/paymet-methods/payment-method-card.md) article.

</tab>

</tabs>

The method you created appears in the table of additional methods. It has the same switches: **Enabled**, **Manager**, **Client**. To change the display order, drag a method by the drag handle <icon code="grip-vertical" />; to delete it, click the trash icon.

The card fields are described in the [Payment method card](./../../../configure/finance/paymet-methods/payment-method-card.md) article.

## Step 4. Set up deposit top-ups from the client shell

If guests top up their deposit themselves, through Gizmo Client, set the rules in the **Online deposit settings for the shell** block:

1. **Allow custom top-up amount** -- turn it on if the guest can enter any amount within the limits.
2. **Minimum amount** and **Maximum amount** -- the limits of a single top-up.
3. **Presets** -- the amounts the guest sees as quick-select buttons. Click **+ Add Preset**, enter the amount and click **Done**. For example, 10, 20 and 50.

In the **Others** block, specify the pages the guest is taken to after an online payment: **Success payment URL** and **Failed payment URL**.

## Step 5. Save the settings

Save the changes on the payment methods page and check that the right methods are shown in the sale window in Gizmo Manager and in Gizmo Client.

## Result

- The admin and the guest see only the payment methods you turned on for them.
- Card payments at the front desk go through the payment terminal, if it is connected and turned on.
- The guest can top up the deposit from the client shell within the set limits.

All fields are described in the [Payment methods](./../../../configure/finance/paymet-methods/_index.md) article of the Configure section.
