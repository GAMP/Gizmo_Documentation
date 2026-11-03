---
title: How to add a console or another gaming station
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" x2="10" y1="11" y2="11"/><line x1="8" x2="8" y1="9" y2="13"/><line x1="15" x2="15.01" y1="12" y2="12"/><line x1="18" x2="18.01" y1="10" y2="10"/><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"/></svg>
      In this guide you will learn
    </p>
    <h2 class="gx-title">How to add a console, simulator or pool table to Gizmo and track it</h2>
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

Besides gaming PCs, clubs often have seats where you cannot install Gizmo Client: a PlayStation zone, a racing simulator, a pool table. So that such seats do not drop out of the POS and reports, you add them to Gizmo as **endpoints**. Gizmo does not control an endpoint directly, but it tracks its time and sales.

A gaming PC appears in the host list by itself when Gizmo Client first connects to the server. An endpoint cannot do this -- like a controller, it is created **only manually**. You need a controller if you want to turn the HDMI signal on the seat's screen on and off remotely -- this is how time on consoles is most often controlled.

## Step 1. Check licenses

Open **Settings -> Organization -> Subscription** and check that the subscription is active and that you have no fewer licenses than gaming stations in the club -- consoles count too. For details, see [Subscription](./../../configure/organization/subscription.md).

## Step 2. Prepare a host group

The host group defines the price a guest pays on the seat and which time products are available to them. If consoles should cost differently than PCs, create a separate group for them.

1. Open **Hosts -> Host Groups** and click **Create Host Group**.
2. Enter a **Name** (for example, "Consoles") and a **Branch**. Fill in the other fields -- **Theme**, **App Group**, **Security Profile**, **Default Guest Group** -- if needed.
3. Save the group.
4. Link a tariff to the group: open **Settings -> Finances -> Tariffs**, choose a tariff and set its **Branch** and the new host group. For details, see [Tariffs](./../sales/pricing/tariffs-guide.md).

If a suitable group already exists, you can skip this step. For the group fields, see [Host group card](./../../usage/gizmo-manager/stations/station-groups/station-group-card.md).

## Step 3. Add a controller (if you have one)

Skip this step if the seat does not need remote control of the HDMI signal.

1. Open **Hosts -> Controllers** and click **Create Controller**.
2. Fill in the fields:
   - **Name** -- the controller's name in Gizmo, for example by seat number;
   - **Serial Number** -- the number from the device case; it is used to match the record with the physical controller;
   - **Branch** -- the branch the controller belongs to.
3. Save the card.

**How to connect the controller physically**

1. Connect the console (the source) to the controller's HDMI input, and the TV or monitor to the HDMI output.
2. Power it: through the Type-C port from a power adapter of at least 5 V, 2 A -- or through an Ethernet cable with passive PoE 12--24 V, in which case you do not need Type-C.
3. Connect the controller to the club network with an Ethernet cable. Wi-Fi also works, but Ethernet is more reliable.
4. Find the controller's IP address -- the router assigns it via DHCP. You can find it in the router's client list or with a network scanner, for example [Advanced IP Scanner](https://www.advanced-ip-scanner.com/).
5. Open the controller's IP address in a browser and sign in to the web interface. The default password is `password`.

For the device's specifications and features, see [Gizmo HDMI Controller](./../../articles/gizmo-hdmi-controller.md). If the web interface does not open or you forgot the password, see [How to update or restore controller firmware](./controller-firmware.md).

**How to link the controller to the Gizmo server**

1. Make sure Gizmo Server is available over https -- the protocol is turned on in **Settings -> Server -> Network**, see [Network](./../../configure/server/network.md).
2. In the controller's web interface, open the **Device** tab and enter the server address in the `https://<server IP>/api/device` format, for example `https://192.168.0.46/api/device`.
3. Click **Apply** and check that the device has connected to the server. If the address has a mistake, the controller will not connect to the server.
4. Restart the controller: **Dashboard** tab -> **Reboot**.
5. Check that the controller appears in **Hosts -> Controllers**, and change its **Name** if needed.

If the controller does not connect, [contact support](./../../about/support.md).

For the card fields, see [Controller card](./../../usage/gizmo-manager/stations/controllers/controller-card.md).

## Step 4. Create an endpoint

1. Open **Hosts -> Endpoints** and click **Create Endpoint** in the upper-right corner.
2. Fill in the fields:
   - **Name** -- the name of the seat in the host list, on the club map and in search;
   - **Number** -- the seat's sequence number in Gizmo;
   - **Slots** -- how many guests can be logged in on the seat at the same time. For example, if two people play on one console, enter 2;
   - **Branch** -- the branch where the seat is shown;
   - **Host Group** -- the group from step 2;
   - **Layouts** -- the map layouts where the seat is visible;
   - **Controller** -- the controller from step 3, if you have one.
3. Save the card.

For the card fields, see [Endpoint card](./../../usage/gizmo-manager/stations/terminals/terminal-card.md).

## Step 5. Check the seat on the map

Open the **Map** section and switch to the layout you set in the endpoint card -- the new seat appears on it. If needed, turn off map lock mode, drag the tile to its place on the room plan, and then turn the lock back on. For how to create layouts, see [Layouts](./../../usage/gizmo-manager/stations/sloi-karty/_index.md).

How to run a guest session on an endpoint and how turning off the HDMI signal through the controller works:

> [!NOTE]
>
> This section is under development.

## Step 6. Record the seat's equipment (optional)

If the seat comes with gamepads, a steering wheel or a headset, you can add them to the inventory: **Hosts -> Assets -> Create Asset**, enter a **Name** and a **Quantity**. Gizmo does not control this equipment, it only stores information about it. You can issue equipment to a guest and take it back on the club map with the **Issue** and **Receive** commands in the **Assets** group. For details, see [Assets](./../../usage/gizmo-manager/stations/tipy-oborudovaniya.md).

## Result

- The console or other seat appears in the host list and on the club map.
- Time on the seat is charged at the tariff of its host group, and its sales get into the POS and reports.
- If a controller is linked to the seat, you can turn the HDMI signal on its screen on and off remotely.

For an overview of the section, see [Hosts](./../../usage/gizmo-manager/stations/_index.md).

If the seat is controlled by a smart relay or a network socket (Sonoff, Tasmota, EnerGenie), set up server power scripts -- see [How to turn consoles on and off with smart relays and sockets](./power-scripts.md).
