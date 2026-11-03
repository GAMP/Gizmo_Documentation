---
title: FAQ
order: 6.3
searchPhrases:
  - how do I
  - what if
  - questions
  - frequently asked questions
  - settings
aliases:
  - path: faq-chastye-otvety-na-voprosy
    moved: "2026-10-27T11:16:06Z"
---

<html>

<style>
html { --page-bg: #121212; }
@media (prefers-color-scheme: light) { html { --page-bg: #ffffff; } }
html[data-theme="dark"] { --page-bg: #121212; }
html[data-theme="light"] { --page-bg: #ffffff; }
html, body { margin: 0; padding: 0; background: var(--page-bg); font-family: 'Segoe UI', system-ui, -apple-system, Roboto, Arial, sans-serif; }
* { box-sizing: border-box; }
.hero { position: relative; overflow: hidden; isolation: isolate; border-radius: 18px; padding: 28px 32px 30px; background: linear-gradient(135deg, #03050b 0%, #0b1230 50%, #1d3480 100%) padding-box; border: 1px solid #222c55; animation: hero-in 0.6s cubic-bezier(0.2, 0.7, 0.2, 1) both; }
.hero-glow { position: absolute; width: 360px; height: 360px; right: -120px; top: -160px; border-radius: 50%; background: radial-gradient(circle, rgba(91, 124, 240, 0.45) 0%, rgba(91, 124, 240, 0) 65%); filter: blur(6px); animation: hero-float 7s ease-in-out infinite alternate; pointer-events: none; }
.hero-glow.two { width: 260px; height: 260px; left: -110px; right: auto; top: auto; bottom: -150px; background: radial-gradient(circle, rgba(56, 189, 248, 0.22) 0%, rgba(56, 189, 248, 0) 65%); animation-duration: 9s; }
.hero-in { position: relative; }
.hero-kicker { display: flex; align-items: center; gap: 8px; margin: 0 0 14px 0; color: #7c93e8; font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; }
.hero-kicker svg { width: 15px; height: 15px; }
.hero-title { margin: 0 0 12px 0; color: #ffffff; font-size: clamp(22px, 3vw, 28px); line-height: 1.3; font-weight: 700; letter-spacing: -0.015em; }
.hero-title span { background: linear-gradient(90deg, #a9bdf5, #6d8ff5, #a9bdf5); background-size: 200% 100%; -webkit-background-clip: text; background-clip: text; color: transparent; animation: hero-shimmer 6s linear infinite; }
.hero-desc { max-width: 600px; margin: 0 0 18px 0; color: #a7adc4; font-size: 14px; line-height: 1.6; }
.hero-meta { display: flex; flex-wrap: wrap; gap: 8px; }
.hero-chip { padding: 6px 12px; border-radius: 999px; background: #192146; border: 1px solid #27325e; color: #c3d0ff; font-size: 12px; font-weight: 600; letter-spacing: 0.02em; }
@keyframes hero-in { from { transform: translateY(10px); } to { transform: none; } }
@keyframes hero-float { to { transform: translate(-40px, 30px) scale(1.08); } }
@keyframes hero-shimmer { to { background-position: -200% 0; } }
@media (max-width: 560px) { .hero { padding: 22px 18px 24px; } }
@media (prefers-reduced-motion: reduce) { .hero, .hero-glow, .hero-title span { animation: none !important; } }
</style>

<div class="hero">
<div class="hero-glow"></div><div class="hero-glow two"></div>
<div class="hero-in">
<p class="hero-kicker"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>Frequently asked questions</p>
<h2 class="hero-title">Answers to questions about <span>Gizmo</span></h2>
<p class="hero-desc">This section collects answers to the questions club owners and managers usually have when they choose and roll out the system.</p>
<div class="hero-meta"><span class="hero-chip">26 questions</span><span class="hero-chip">General questions</span><span class="hero-chip">Setup</span></div>
</div>
</div>

</html>

## 🌐 **General questions**

<note type="hotfixes" title="What are Gizmo Server, Gizmo Client, Gizmo Manager and Gizmo Companion?" collapsed="true">

**Gizmo** is an **all-in-one solution for managing entertainment venues**: PC and gaming clubs, internet cafes, VR arenas, lounges and more. All of these components are parts of one ecosystem, and each one covers its own area of the business. The central component is [**Gizmo Server**](./about/overview/gizmo-server.md): it is the core of the whole system. It processes operations, stores customer data and manages the other components.

> [!TIP]
> 
> 📖 For the list of components, see [Components](./about/overview/_index.md). For more about the product, see the [About](./about/_index.md) section.

</note>

<note type="hotfixes" title="What is a database and why do I need it?" collapsed="true">

A **database** is a digital archive where the software **stores information about how your club runs**. The database holds the important data: [guest profiles](./usage/gizmo-manager/users/users/_index.md), account balances, [the price of gaming time](./tutorials/sales/pricing/tariffs-guide.md), purchase history and much more.

> [!IMPORTANT]
> 
> Note: when you [install Gizmo Server](./instalation/gizmo/_index.md), the database is **not installed** on the device together with the server. For how to install a database, see [Databases](./instalation/gizmo/self-hosted/databases/_index.md).

> [!TIP]
> 
> 📖 To keep database copies in the cloud so you don't lose them together with the server, see the [Cloud backup](./tutorials/operations/cloud-backup.md) guide.

</note>

<note type="hotfixes" title="How do I get started with Gizmo?" collapsed="true">

It's simple -- just two steps:

1. Sign up on [our website](https://gizmopowered.net).
2. Install and set up the software by following the steps in [Quick install](./instalation/quick-install.md).

> [!TIP]
> 
> 📖 If you are moving from Gizmo V2, use the [Migration to v3](./tutorials/migration-to-v3.md) guide. To open Gizmo Manager in its own window, like a regular program, see the [Gizmo Manager as an App](./tutorials/gizmomanager-as-an-app.md) guide.

</note>

<note type="hotfixes" title="Can I upgrade from Gizmo V2 to the new version myself?" collapsed="true">

**Yes**, you can upgrade on your own. We describe every step of moving your club settings to **Gizmo V3** in the [Migration to v3](./tutorials/migration-to-v3.md) guide.

⏱️ **Time:** 30--50 minutes

> [!WARNING]
> 
> Before you start the migration, be sure to make a **database backup**, and run the upgrade when the club is closed.

> [!TIP]
> 
> 💬 If you run into trouble at any step, contact [support](./about/support.md).

</note>

## 🛠️ **Setup questions**

### 🌍 *Connection and network*

<note type="hotfixes" title="How do I connect to the server remotely?" collapsed="true">

Where you can connect to Gizmo Server from depends on the **Hostname** set in **Settings -> Server -> Network**. By default it is "gizmo.local", and the server is reachable only on the local network.

1. **Inside the club.** On any PC on the same local network, open `http://<server local IP>/apps/manager/signin` in a browser, for example `http://192.168.1.25/apps/manager/signin`.
2. **From the internet.** In the **Hostname** field, enter the server's public IP address or a domain name you have bought.
3. **If the server is in the club and not on a VPS,** the public IP is the external address of your router. Set up port forwarding to Gizmo Server on the router. By default this is port 80 for http and port 443 for https.

> [!WARNING]
> 
> If Gizmo Server runs in Docker, the server ignores the port settings. It uses the ports specified when the container was created.

> [!TIP]
> 
> 📖 For details, see [Network](./configure/server/network.md) and the [Network access to Gizmo](./tutorials/client-shell/network-access.md) guide. To open Gizmo Manager on another PC in its own window, like a regular program, see the [Gizmo Manager as an App](./tutorials/gizmomanager-as-an-app.md) guide.

</note>

<note type="hotfixes" title="How do I fix a certificate error when connecting to the server?" collapsed="true">

For https, Gizmo Server uses a built-in self-signed certificate by default, and the browser may not trust it. To get rid of the error, install your own trusted SSL certificate in PFX format:

1. Open **Settings -> Server -> Network**.
2. In the **PFX Certificate** block, click **Browse** and select the certificate file.
3. Restart Gizmo Server -- the new certificate is not applied until you do.

> [!NOTE]
> 
> To go back to the built-in self-signed certificate, click **Clear** in the same block.

> [!TIP]
> 
> 📖 For details, see [Network](./configure/server/network.md). For step-by-step setup, see the [How to install an SSL certificate on the server](./tutorials/client-shell/ssl-certificate.md) guide.

</note>

<note type="hotfixes" title="What if a PC cannot connect to the server?" collapsed="true">

Signs of the problem: Gizmo Client never finishes loading, the server icon is red, or the PC does not appear in **Hosts -> Computers**. Before you contact [support](./about/support.md), go through this short checklist:

1. **Licenses.** Open **Settings -> Organization -> Subscription**: the subscription must be active. You need at least as many licenses as connected gaming stations, consoles included.
2. **Network.** The client PC must be on the same local network as the server. In **Settings -> Server -> Network -> Connection Rules**, **Auto Discovery** and **Hostname Recovery** must be turned on. Also check that an antivirus or firewall is not blocking the connection.
3. **Client.** Download the Gizmo Client installer from **Settings -> Others -> About**, so that its version is compatible with the server. Then restart the client and the PC, and make sure only one copy of the client is running.
4. **Assignment.** If the PC appears in **Hosts -> Computers** but is not on the map, set its **Branch**, **Host Group** and **Layout**.

> [!IMPORTANT]
> 
> If **Registered Only** is turned on in the connection rules, the server automatically rejects a new computer. Add it manually or turn this option off for a while.

> [!TIP]
> 
> 📖 For details, see the [Client PC connection issues](./tutorials/client-shell/client-connection-troubleshooting.md) guide. To find the server's address on the local network, see the [Network access to Gizmo](./tutorials/client-shell/network-access.md) guide.

</note>

<note type="hotfixes" title="Which protocol should clients use to connect to the server?" collapsed="true">

It depends on the network settings of your Gizmo Server. Clients can connect over standard **TCP**, and also over **ws** and **wss**.

> [!NOTE]
> 
> The protocols and ports the server is available on are set in **Settings -> Server -> Network**. By default these are http (port 80) and https (port 443).

> [!TIP]
> 
> 📖 For how to set up the server's protocols and ports, see [Network](./configure/server/network.md). To find the server's address and port, see the [Network access to Gizmo](./tutorials/client-shell/network-access.md) guide. If clients still don't connect, go through the checklist in the [Client PC connection issues](./tutorials/client-shell/client-connection-troubleshooting.md) guide.

</note>

<note type="hotfixes" title="How do I turn on a PC over the network?" collapsed="true">

You can turn on a PC that is off right from Gizmo Manager -- this uses Wake On LAN.

1. Turn on Wake On LAN on the client PC itself -- in BIOS/UEFI and in the network adapter settings.
2. Make sure the computer's card (**Hosts -> Computers**) has a **MAC Address** -- the power-on signal is sent to it.
3. In the **Map** section, select one or more gaming stations and click **Power On** in the **Hosts** group. The same action is in the right-click menu. The operator needs the **Power On Hosts** permission (**Management** category) for this.

> [!WARNING]
> 
> If Wake On LAN is not set up on the client PC, the **Power On** command will not work. In Windows 10, waking from a normal shutdown over the network is not supported while fast startup is on -- see the [Microsoft article](https://learn.microsoft.com/en-us/troubleshoot/windows-client/setup-upgrade-and-drivers/wake-on-lan-feature) for details.

> [!TIP]
> 
> 📖 For details, see [Map](./usage/gizmo-manager/map/_index.md) and [Computer card](./usage/gizmo-manager/stations/computers/computer-card.md). For step-by-step setup, see the [How to turn on, restart and shut down PCs remotely](./tutorials/hosts-operations/power-management.md) guide.

</note>

### 🖥️ *Server and updates*

<note type="hotfixes" title="Will my settings be kept after I update the server to a new version? Do I need to change anything after the update?" collapsed="true">

Club settings and data are stored in the database, so updates within V3 usually keep them. When you move from V2, you will have to enter some settings again -- see the [Migration to v3](./tutorials/migration-to-v3.md) guide. Keep in mind that Gizmo V3 is currently in beta and under active development: from version to version, some settings may move to another section, change or appear for the first time. So after every update:

1. Open the [Change log](./change-log/_index.md) section and read what changed in the new version: which bugs were fixed, which features were added and what moved in the interface.
2. Check the settings that the changes affect.
3. Make sure the client PCs were updated too. If **Automatic Shell Update** is turned on in **Settings -> Client -> Shell -> System**, Gizmo Client updates itself whenever a new server version requires a client update.

> [!WARNING]
> 
> Before you update, make a **database backup**, and update when the club is closed. To set up automatic backups, see [Backup](./configure/server/backup.md). To keep copies in the cloud, see the [Cloud backup](./tutorials/operations/cloud-backup.md) guide.

> [!TIP]
> 
> 💬 If something works differently after the update, contact [support](./about/support.md) -- we are available 24/7.

</note>

<note type="hotfixes" title="How do I safely restart the server while customers are playing?" collapsed="true">

While the server restarts, client PCs lose the connection to it. What happens to customer sessions depends on the shell settings in **Settings -> Client -> Shell -> User Session**:

1. Check the **Log Out Disconnected Clients** and **Terminate Pending Sessions** options. If at least one of them is on, a customer's session ends when the connection to the server is lost for longer than the **Timeout** field (180 seconds by default): in Gizmo Client when **Log Out Disconnected Clients** is on, and on the server and in Gizmo Manager when **Terminate Pending Sessions** is on.
2. If these options are on, restart the server so that it is back up before the timeout runs out. If they are off, customer sessions do not end automatically because of the lost connection.
3. Restart the server. If it runs as a service, stop and start it again in ConfigurationTool, in the **Gizmo Service Management** section. If it runs as a console application, close it and start it again.

> [!IMPORTANT]
> 
> Changes to **Timeout**, **Log Out Disconnected Clients** and **Terminate Pending Sessions** apply only after Gizmo Client restarts. You can't change them "on the fly" right before a restart -- set them up in advance.

> [!TIP]
> 
> 📖 For details, see [Shell](./configure/client/shell.md) and [Run Modes](./usage/gizmo-server/run-modes.md). For the step-by-step order, see the [How to restart the Gizmo server](./tutorials/operations/server-restart.md) guide.

</note>

<note type="hotfixes" title="Why does the map show only some of my computers?" collapsed="true">

Most often the cause is the subscription or the settings of the hosts themselves. Check in this order:

1. **Licenses.** Open **Settings -> Organization -> Subscription** and make sure the subscription is valid and **Total Licenses** is not less than the number of gaming stations you have connected. Keep in mind that this number includes not only computers, but also consoles and other gaming stations added as [endpoints](./usage/gizmo-manager/stations/terminals/_index.md).
2. **Host assignment.** In **Hosts -> Computers**, check that every PC has a **Branch**, **Host Group** and **Layouts** set -- without them the PC does not appear on the map.
3. **Layout.** If the club has several layouts (for example, floors or zones), switch to the right one -- the map shows only the stations of the selected layout.
4. **Operator access.** The map shows the gaming stations available to the current operator. Check that all the needed **Branches** are selected in the operator's card.

> [!NOTE]
> 
> If the subscription is shown incorrectly, enter the login and password of your Gizmo website account again, save the changes and refresh the data in the **Subscription Details** block.

> [!TIP]
> 
> 📖 For details, see [Subscription](./configure/organization/subscription.md) and [Computers](./usage/gizmo-manager/stations/computers/_index.md), and the [Client PC connection issues](./tutorials/client-shell/client-connection-troubleshooting.md) guide. For how layouts work, see the [Map](./tutorials/operations/reading-the-map.md) guide. If several clubs run on one server, read the [Multiple clubs on one server](./tutorials/operations/multiple-clubs-setup.md) guide.

</note>

### 👥 *Operators and reports*

<note type="hotfixes" title="I can't close a shift or complete an operation -- not enough permissions. What should I do?" collapsed="true">

Most likely the operator's permission set is missing a permission, or shift handling is set up wrong in the operator's card. A staff member with permissions from the **Settings** category can fix this:

1. Open **Settings -> Operators and permissions -> Permissions** and select the permission set assigned to this operator.
2. Turn on the missing permissions. For register work, check the **Terminal** category (viewing transactions, pay in and pay out) and the **View Expected** permission in the **Shift** category. For sales, check the **Sales** category. The **Search** field helps you find the right item.
3. Open **Settings -> Operators and permissions -> Operators** and select the operator. In the **Permission** block, check the **Permission Preset** and **Branches** fields. In the **Shift** block, check the mode: with **Disabled**, the operator does not use shifts. If the operator needs to open and close shifts, select **Optional** or **Required**.

> [!NOTE]
> 
> Some permissions depend on others: until the "parent" permission is on, the "child" permissions are grayed out and can't be selected.

> [!TIP]
> 
> 📖 For details, see [Permission card](./configure/operators-and-permissions/permissions/permission-card.md) and [Operator card](./configure/operators-and-permissions/operators/operators-card.md), and the [Choosing a permission preset](./tutorials/staff/permission-presets.md) guide. For how to open and close shifts, see the [How to manage shifts in the Manager](./tutorials/operations/shifts.md) guide.

</note>

<note type="hotfixes" title="Why is there no data in the shift log and other reports?" collapsed="true">

Most often a report is empty because the filters were not applied or the selected period has no data. Check:

1. **The filters are applied.** In reports with filters (for example, the [Financial report](./usage/gizmo-manager/otchety/finansovyy.md)), click **Apply Filters** after you choose the parameters.
2. **The period is correct.** Check the dates and times. If a **Custom** period covers a stretch with no shifts and no sales, the report is empty.
3. **The filters are not too narrow.** If a specific **Operator** or **Cashier Location** is selected, the report includes only their operations.
4. **Time zone and schedule.** **Settings -> Organization -> General** must show your current time zone -- it sets the date and time of all records, transactions included. In the same place, check the **Default Work Schedule** -- reports are built with it.

> [!TIP]
> 
> 📖 For details, see [Reports](./usage/gizmo-manager/otchety/_index.md) and [Financial report](./usage/gizmo-manager/otchety/finansovyy.md). To get started with reports, see the [Reports](./tutorials/operations/reports-guide.md) guide.

</note>

### 💳 *Sales, discounts and loyalty*

<note type="hotfixes" title="How do I add a scanner in Gizmo V3?" collapsed="true">

In Gizmo V3, a barcode scanner works through **Gizmo Companion** -- an app that connects the Gizmo server to POS hardware. You install Companion on the PC used for sales and link it to a register.

1. In Gizmo Manager, open **Settings -> Server -> Companions**, click **Create Companion** and give it a clear name (for example, after the location of the point of sale). Open the new companion and copy its token.
2. In **Settings -> Others -> About**, download Gizmo Companion and install it on the operator PC that the scanner is connected to.
3. Open Companion on this PC (the desktop shortcut, or `localhost:8000` in a browser). Enter the **Protocol**, **Hostname** (the server IP) and **Port**, paste the token and save. In the Manager, the companion status should change to **Connected**.
4. In Companion, open **POS Devices** in the left panel and set the COM port of the barcode scanner.
5. Go to **Settings -> Finances -> Registers**, open the register of this PC and set the **Branch**, **Companion** (the one you just created), **Number** and **Name**. Save the changes.

> [!NOTE]
> 
> For a product to be found by the scanner, fill in the **Barcode** field in its card.

> [!TIP]
> 
> 📖 For step-by-step setup, see the [How to connect Companion and set up a register](./tutorials/sales/register/companion-and-register.md) guide. For details, see [Quick install](./instalation/quick-install.md) (the register section), [Companion](./configure/server/companions/_index.md) and [Register card](./configure/finance/registers/register-card.md).

</note>

<note type="hotfixes" title="How do I add products?" collapsed="true">

First you create the product in the **Shop** section. Then you add its quantity to the warehouse with a stock operation.

1. Open **Shop -> Products** and click **Create Product**. Enter the name, product group and price, and attach an image if you like.
2. In the **Availability** block, turn on the right **Branch** and select the user groups the product is available to.
3. In the **Warehouse** block, turn on **Stock Control** if the product should be deducted from stock, and save the card.
4. To add the quantity, open **Shop -> Stock Operations**, click **Stock Operation** and select the **Incoming** type, with **Manual** as the receipt method.
5. Select the branch and warehouse, add the products, enter their quantity and cost (0 is fine) and click **Continue**.

> [!IMPORTANT]
> 
> If the branch is not turned on in the product card, the product can't be sold. If **Stock Control** is not turned on, the product does not appear in the warehouse.

> [!TIP]
> 
> 📖 For details, see the [Products and bundles](./tutorials/sales/shop/running-the-shop.md) and [Warehouse](./tutorials/sales/shop/warehouse.md) guides.

</note>

<note type="hotfixes" title="How do I give a user free time?" collapsed="true">

You can give free time with a **100% discount** on tariffs and/or time products. The discount goes into a discount group, which is assigned to a user group, and you move the user into that group.

1. Open **Marketing -> Discounts** and click **Create Discount**. Turn the discount on, enter a name and make it available for your branch.
2. In the **Target Groups** block, click **Create Target Group** and select **Tariffs** (and/or **Time Products**). Add the items with the **+** button or check **Include All**. In the **Group Activation** and **Activation Condition** fields, select **Any**.
3. In the **Reward** block, select the **Discount** type, **Order Line** in the **Apply To** field, and the **Percentage** calculation type with the value 100. Save the discount.
4. In **Marketing -> Discount Groups**, create a discount group and add this discount to it.
5. In **Users -> User Groups**, create a group (for example, "Free time") and set the new discount group in the **Discount Group** block.
6. Open the user's card and, in the **User Organization** block, select this group in the **User Group** field.

> [!WARNING]
> 
> The discount applies to all members of the group. When the free time is no longer needed, move the user back to their usual group.

> [!NOTE]
> 
> In the new user group, check the **Billing** and **Access** blocks. If they don't have time payment sources and host groups turned on, the guest can't play.

> [!TIP]
> 
> 📖 Another way is a separate time product priced at 0 and available only to this group (a tariff can't be restricted like this -- only with a discount). It is described in the [Staff perks](./tutorials/staff/staff-perks.md) guide. For step-by-step discount setup, see the [Discounts and promotions](./tutorials/loyalty/discounts-and-promotions.md) guide. To create a user group and move a guest into it, see the [User groups](./tutorials/staff/user-groups.md) guide. For all discount fields, see [Discount card](./usage/gizmo-manager/marketing/discounts/discount-card.md).

</note>

<note type="hotfixes" title="How do I set fixed product prices for different users or user groups?" collapsed="true">

In V3, special prices for groups are set in the **Marketing** section, with discounts. For each product you create its own discount with a fixed amount equal to the difference between the regular price and the price you want.

1. Open **Marketing -> Discounts** and click **Create Discount**. Turn the discount on, give it a name (for example, "Energy drink -- VIP") and make it available for your branch.
2. In the **Target Groups** block, create a **Products** target group and add the product with the **+** button. In the **Group Activation** and **Activation Condition** fields, select **Any**.
3. In the **Reward** block, select **Discount**, **Order Line** in the **Apply To** field, and the **Fixed** calculation type. Enter the discount amount: for example, if the product costs $3.00 and should cost $2.50 for the group, enter 0.50.
4. Repeat steps 1--3 for each product with a special price.
5. In **Marketing -> Discount Groups**, create a discount group and add all these discounts to it.
6. In **Users -> User Groups**, open the user group and set the new discount group in the **Discount Group** block.

> [!NOTE]
> 
> One discount can belong to several discount groups, so you can give the same prices to several user groups. To give special prices to one person, create a separate user group for them.

> [!IMPORTANT]
> 
> The fixed amount is applied per order, not per unit, so when a guest buys several items the total may differ from what you expect. Before you launch, check the calculation with a test sale.

> [!TIP]
> 
> 📖 For details, see [Discount card](./usage/gizmo-manager/marketing/discounts/discount-card.md) and [Discount group card](./usage/gizmo-manager/marketing/discount-groups/discount-group-card.md). For step-by-step discount setup, see the [Discounts and promotions](./tutorials/loyalty/discounts-and-promotions.md) guide. For an example of a percentage discount on time products and tariffs, see the [Migration to v3](./tutorials/migration-to-v3.md) guide (section 2.11). To set up user groups, see the [User groups](./tutorials/staff/user-groups.md) guide. To create a product and set its regular price, see the [Products and bundles](./tutorials/sales/shop/running-the-shop.md) guide.

</note>

<note type="hotfixes" title="Why does a customer's session end with a debt?" collapsed="true">

A customer has two different values: **Deposits** -- the amount on deposit, and **Balance** -- the state of the customer's money account. A negative balance means a debt. Check the settings:

1. **Credit in the user group.** In **Users -> User Groups**, open the customer's group and look at the **Credit** block. If **Allow Credit for Sales** or **Allow Credit Usage** is set to **Unlimited** or **Limited**, the customer can go negative.
2. **Payment from deposit.** The invoice settings (**Settings -> Finances -> Invoices**) have the **Withhold Deposits for Unpaid Session Time** option. When it is on, the amount for unpaid time is automatically taken from the deposit when the balance is closed. In the same place, you can turn on **Auto Pay from Deposits** for automatically issued invoices for each user group.
3. **Time payment sources.** In the **Billing** block of the user group, check whether **Time Product** and **Deposits** are turned on. If **Deposits** is off, time is not paid from the deposit.

> [!TIP]
> 
> 📖 For details, see [User group card](./usage/gizmo-manager/users/user-groups/user-group-card.md) and [Invoices](./configure/finance/invoices.md). For what else you can set up in a user group, see the [User groups](./tutorials/staff/user-groups.md) guide. To let guests play on credit, see the [How to enable postpay](./tutorials/staff/postpay.md) guide. For how a deposit differs from the balance and in what order time is charged, see [Time, deposit and balance -- FAQ](./articles/billing-faq.md).

</note>

<note type="hotfixes" title="How does the loyalty points system work?" collapsed="true">

Points are the club's internal currency: a guest earns them for purchases or gaming time, saves them up and spends them on later purchases.

1. **Points for products and time products** are set in the item's card, in the **Reward** block.
2. **Points for hourly pay** are set for user groups: **Users -> User Groups**, the **Loyalty** section of the group card. You can award points for money spent or for time played.
3. **Spending points** is set in the **Pricing** block of the product or time product card: you can set a price in points and choose whether the guest pays with money "AND" points or with money "OR" points.

> [!NOTE]
> 
> Points for hourly pay are not awarded right after spending, but when the guest logs out of the session and their invoices are closed.

> [!TIP]
> 
> 📖 For details, see the [Loyalty points for customers](./tutorials/loyalty/loyalty-program.md) guide. For where to set the reward and the price in points, see the [Products and bundles](./tutorials/sales/shop/running-the-shop.md) and [Time packages](./tutorials/sales/pricing/time-packages-guide.md) guides. For an overview of all loyalty tools, see the [Loyalty program](./tutorials/loyalty/_index.md) section.

</note>

### 🎮 *Client shell*

<note type="hotfixes" title="How do I remove the Start menu and the taskbar on a client PC?" collapsed="true">

Use a **security profile** for this. The **Policies** section of the profile already contains ready-made policies that block Windows features -- you only need to check them. The Start menu is hidden with a separate option, and the taskbar can be locked against changes and have its notification area hidden. The security profile has no option to hide the taskbar completely.

1. Open **Hosts -> Security Profiles** and create a profile or open an existing one.
2. Turn on **Hide Start Menu** and **Prevent Shell Minimizing**. In Windows 10, the Start menu is hidden. In Windows 11, it stays in place, but it is empty and stops working.
3. In the **Policies** section, check the taskbar restrictions, for example **Explorer Taskbar Lock All** (fully locks the taskbar against changes), **Explorer Taskbar No Notification** (hides the notification area) and **Explorer No Win Keys** (disables the Win key and its shortcuts). You can also turn on all policies with one button -- this is the maximum level of lockdown.
4. Link the profile to a host group: **Hosts -> Host Groups** -> the **Security Profile** field. Without this, the profile is not applied.

> [!NOTE]
> 
> You can lift the restrictions at any time: turn off security on the PC or switch it to admin mode.

> [!TIP]
> 
> 📖 For details, see [Security profiles](./tutorials/client-shell/security-profiles.md). For the full list of policies, see [Security profile card](./usage/gizmo-manager/stations/profili-bezopasnosti/kartochka-redaktirovaniya-profilya-bezopasnosti.md). To hide the taskbar completely with a task, see [Useful task scripts](./articles/useful-task-scripts.md).

</note>

<note type="hotfixes" title="How do I keep customer session files, game saves and other data?" collapsed="true">

Use **personal user files (PUF)** for this. Gizmo saves the specified folder from the client PC to the server and brings it back when the guest starts the game or logs in on any PC in the club. This way saves are not lost, even if the PC is reset after every session.

1. Open **Hosts -> Apps**, then the game's card and its executable.
2. Go to the **Personal Files** tab and click **+ Create New Personal File**.
3. In the **Source** field, enter the path to the saves folder on the client PC. To save a registry entry, turn on the **Registry** option and enter its path in the **Source** field.
4. Select the **Activation**: **On Startup** -- the files are returned to the PC when the game starts; **On Login** -- when the guest logs in to their account (with many PUFs, login may get noticeably slower).
5. If needed, set a **Quota** -- how many MB one customer's save may take (0 means no limit).

Files are always copied from the client PC to the server when the guest logs out. You can set the server folder where personal files are stored in **Settings -> Client -> File System** -> **User Storage Path**.

> [!WARNING]
> 
> If the compressed size of a save is larger than the quota, it is not written to the server.

> [!TIP]
> 
> 📖 For step-by-step setup, see the [How to keep guests' game progress between sessions](./tutorials/client-shell/personal-files.md) guide. For details, see [PUF card](./usage/gizmo-manager/stations/prilozheniya/kartochka-redaktirovaniya-ispolnyaemogo-fayla/lichnye-fayly-polzovateley.md) and [File System](./configure/client/file-system.md). To clear other guests' launcher sessions between guests, read the [Cleaning up game and launcher sessions](./tutorials/client-shell/session-cleanup.md) guide. To add a game and create its executable, see the [How to add a game to the client shell](./tutorials/client-shell/add-app-to-shell.md) guide.

</note>

<note type="hotfixes" title="How do I set up automatic game updates?" collapsed="true">

Use **deployment profiles** for this. You update the game once in a folder on the server, and Gizmo compares it with the folder on the client PC and copies only the changed files. If needed, it deletes files on the client that are no longer in the source.

1. Open **Hosts -> Apps**, then the game's card and its executable.
2. Go to the **Deployments** tab and click **+ Create New Deployment**.
3. In the **Source** field, enter the folder with the current version of the game on the Gizmo Server PC, and in the **Destination** field, enter the game folder on the client PC.
4. Select the **Comparison Mode**. The more thorough the comparison, the lower the chance of an error, but the slower the update. The fastest option is **Quick**, the most reliable is **Thorough** (it also checks the file hash).

The deployment runs before the game starts. If the **Auto Launch** option is on, the game starts right after it, without a second click.

> [!IMPORTANT]
> 
> To keep the update from filling up the client PC's disk, set a minimum percentage of free space: **Settings -> Client -> File System** -> **Deployment**, the **Always keep % of free disk space when using deployment profiles** option. If less space would be left after the deployment, the operation is aborted.

> [!TIP]
> 
> 📖 For step-by-step setup, see the [How to set up automatic game updates](./tutorials/client-shell/game-auto-update.md) guide. For details, see [Deployment card](./usage/gizmo-manager/stations/prilozheniya/kartochka-redaktirovaniya-ispolnyaemogo-fayla/razvertyvaniya.md). To add a game and create an executable, read the [How to add a game to the client shell](./tutorials/client-shell/add-app-to-shell.md) guide. To clear launcher data between guest sessions, see the [Cleaning up game and launcher sessions](./tutorials/client-shell/session-cleanup.md) guide.

</note>

<note type="hotfixes" title="How do I change the manager password for the client shell?" collapsed="true">

Open **Settings -> Client -> Shell** and, in the **General** block, enter a new value in the **Manager Password** field. This password opens maintenance mode from the hidden Gizmo Client window. In maintenance mode you can minimize the shell, deactivate Gizmo Client or remove it.

> [!IMPORTANT]
> 
> The default manager password is `password`. Be sure to change it and keep it in a safe place: with this password anyone can minimize the shell, deactivate Gizmo Client or remove it.

> [!WARNING]
> 
> The changes take effect only after Gizmo Client restarts.

> [!TIP]
> 
> 📖 For details, see [Shell](./configure/client/shell.md). To minimize the shell or remove Gizmo Client, see the [How to minimize, disable or remove the shell](./tutorials/client-shell/remove-shell.md) guide.

</note>

<note type="hotfixes" title="How do I set up a skin for the shell?" collapsed="true">

The look of the shell is set with **skin profiles**. You can make different profiles for different host groups, for example a separate one for the VIP zone.

1. Open **Settings -> Client -> Skins**. Create a profile with the **Create Skin Profile** button, or open an existing one with **"..." -> Edit**.
2. Set up the sections you need: background and logo (**Media**), the login screen, the home page, the shop and the apps page. For fine-tuning the look, use the **Custom CSS** field in the **Others** section.
3. Assign the profile to hosts: **Hosts -> Host Groups** -> the **Skin** and **Skin Profile** fields. To make a profile the default one, click **"..." -> Set as Default**.

> [!TIP]
> 
> 📖 For step-by-step setup, see the [How to set up a shell skin](./tutorials/client-shell/skin-setup.md) guide. For details about the fields, see [Skins](./configure/client/skins/_index.md) and [Skin profile card](./configure/client/skins/skin-profile.md).

</note>

<note type="hotfixes" title="Why can't I set a password for a customer account?" collapsed="true">

Most likely the password does not meet the club's **password policy**. The policy sets the minimum and maximum password length and the required character groups: lowercase letters, uppercase letters and digits. The policy applies when a customer creates or changes a password in Gizmo Client. If, for example, uppercase letters are required and the password is typed only in lowercase, it can't be saved.

1. Open **Settings -> Client -> Shell** -> the **Password Policy** block.
2. See which requirements are on and come up with a password that meets them. Pay special attention to letter case and digits.
3. If needed, relax the requirements. Keep in mind that simpler passwords are easier to guess.

> [!WARNING]
> 
> Changes in the **Shell** section take effect only after Gizmo Client restarts.

> [!TIP]
> 
> 📖 For details, see [Shell](./configure/client/shell.md). To create customer accounts, read the [Customer accounts](./tutorials/staff/user-accounts-guide.md) guide.

</note>
