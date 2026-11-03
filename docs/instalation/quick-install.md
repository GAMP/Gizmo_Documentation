---
order: 0.4
title: Quick install
aliases:
  - path: instalation/gizmo/quick-install
    moved: "2026-09-24T21:46:29Z"
---

<html>

<style>
  html, body {
    margin: 0;
    padding: 0;
    background: #1a1e33;
    font-family: 'Segoe UI', system-ui, -apple-system, Roboto, Arial, sans-serif;
  }

  @media (prefers-color-scheme: light) {
    html, body {
      background: #ffffff;
    }
  }

  * {
    box-sizing: border-box;
  }

  .gx-card {
    position: relative;
    width: 100%;
    border-radius: 18px;
    overflow: hidden;
    background: #232a4a;
    background-image: linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%);
    border: none;
    box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.04) inset;
    padding: 26px 32px 28px;
    font-family: 'Segoe UI', system-ui, -apple-system, Roboto, Arial, sans-serif;
  }
  .gx-card .gx-glow {
    position: absolute;
    inset: -30px -44px auto -60px;
    height: 200px;
    background: radial-gradient(45% 100% at 8% 0%, rgba(82, 110, 211, 0.28) 0%, rgba(82, 110, 211, 0) 72%);
    filter: blur(2px);
    pointer-events: none;
  }
  .gx-card .gx-card-content { position: relative; }
  .gx-card .gx-kicker {
    display: flex; align-items: center; gap: 8px; margin: 0 0 14px 0;
    color: #7c93e8; font-size: 12px; line-height: 1.3; font-weight: 600;
    letter-spacing: 0.1em; text-transform: uppercase;
  }
  .gx-card .gx-kicker svg { flex: none; width: 15px; height: 15px; }
  .gx-card .gx-title {
    max-width: 560px; margin: 0 0 18px 0; color: #ffffff;
    font-size: clamp(22px, 3vw, 27px); line-height: 1.34; font-weight: 700; letter-spacing: -0.015em;
  }
  .gx-card .gx-accent { color: #a9bdf5; }
  .gx-card .gx-meta {
    display: flex; align-items: center; color: rgba(255, 255, 255, 0.5);
    font-size: 11.5px; line-height: 1; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;
  }
  .gx-card .gx-meta-sep { margin: 0 12px; opacity: 0.4; }
  .gx-card .gx-meta-level { color: #86efac; }
  .gx-card .gx-meta-level.medium { color: #fde68a; }
  .gx-card .gx-meta-level.high { color: #fca5a5; }
  .gx-card .gx-desc {
    max-width: 560px; margin: 16px 0 0 0; color: rgba(255, 255, 255, 0.56);
    font-size: 13px; line-height: 1.6;
  }
</style>

<div class="gx-card">
  <div class="gx-glow"></div>
  <div class="gx-card-content">
    <p class="gx-kicker">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/></svg>
      In this guide you will learn
    </p>
    <h2 class="gx-title">
      Installing Gizmo: from the server to the first client
    </h2>
    <div class="gx-meta">
      <span>60–180 minutes</span>
      <span class="gx-meta-sep">/</span>
      <span class="gx-meta-level high">High difficulty</span>
    </div>
  </div>
</div>

<script>
(function () {
  var LIGHT_BG = '#ffffff';
  var DARK_BG = '#1a1e33';

  function applyBg() {
    var theme = document.documentElement.dataset.theme;
    if (theme !== 'light' && theme !== 'dark') {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    var bg = theme === 'light' ? LIGHT_BG : DARK_BG;
    document.documentElement.style.backgroundColor = bg;
    document.body.style.backgroundColor = bg;
  }

  applyBg();
  new MutationObserver(applyBg).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyBg);
})();
</script>

</html>

> <color color="#99B1E6">**Welcome! Maybe your club will see its first customers in a few days, maybe you are preparing well in advance, or maybe you are moving over from another system. Either way, by opening day everything should run as if the club had been open for a year -- the technical side is set up, the register works without a hitch, and the staff know how to use the app.**</color>
>
> <color color="#99B1E6">**Here we will walk the whole way to that point together -- set up the server, the admin panel and the client PCs, prepare hourly pricing and time products, add products and apps -- in short, get everything ready so you could open tomorrow.**</color>
>
> <color color="#99B1E6">**We have tried to keep things as simple as possible, but some parts of this guide may still feel complex. If so, contact support -- or let us do the setup for you by ordering an integration or premium service.**</color>

Have you deployed Gizmo before and only need one specific step, not the whole article? At the bottom of the page, in the "What's next?" section, there is a list of topics with detailed guides.



## What you will need

- <icon code="mail" color="#3b82f6" /> **An account on our website** -- it is used to activate the license and to receive updates.
- <icon code="server" color="#3b82f6" /> **A server for the app and the database** -- your own PC in the club, dedicated to the server.
- <icon code="monitor" color="#3b82f6" /> **Computers for customers** -- Gizmo Client will be installed on them.

## Step 1. Register your account

This takes a couple of minutes -- you create an account on the Gizmo website and confirm it by email. You will need the account details as early as step 2: you enter them in the server setup wizard to activate the license. So it is best to register right away.

## Step 2. Decide where the server will live

Gizmo Server is the core of the whole system: it processes operations, stores customer data and manages the other components. Right now there is only one way to deploy it: self-hosted, that is, on your own hardware. This gives you full control over your data and works today. A cloud version of Gizmo Server is in development.

You can even use the operator's PC as the server instead of buying a separate device, but this creates security risks. We strongly recommend getting a separate PC if the club has more than 30 client PCs, or considering renting a cloud virtual server.

For details on installing the server, including choosing the OS and the database, see [Self-hosted version](./gizmo/self-hosted/_index.md).

### System requirements

Hardware requirements depend on what you chose to install on -- here they are for each option.

<tabs>
  <tab name="Windows">
    - **CPU** -- Intel Core i3 8th generation or better.
    - **Memory** -- 16 GB DDR4.
    - **Disk** -- 40 GB NVMe SSD.
  </tab>
  <tab name="Linux">
    - **CPU** -- Intel Core i3 8th generation or better.
    - **Memory** -- 8 GB DDR4.
    - **Disk** -- 40 GB NVMe SSD.
  </tab>
  <tab name="Docker">
    - **CPU** -- Intel Core i3 8th generation or better.
    - **Memory** -- 4--8 GB DDR4 (for 50+ connected clients we recommend 8 GB).
    - **Disk** -- 40 GB NVMe SSD.
  </tab>
</tabs>

**Once you have chosen the PC for the server, you can go through these steps:**

- Install the Microsoft SQL Server Express database -- download it from [this link](https://go.microsoft.com/fwlink/p/?linkid=2216019&clcid=0x409&culture=en-us&country=us). For more on supported databases, see [Databases](./gizmo/self-hosted/databases/_index.md).
- Open the database installer and wait for it to initialize.
- In the menu that opens, choose **Basic**, then **Install**. When the installation is finished, close the app. Now you can move on to Gizmo Server.
- [Download the installer](https://gizmopowered.net/downloads/v3/latest/GizmoServiceSetup.exe).
- Run it and go through all the steps by clicking <cmd text="Next" />. We recommend **not changing** the default installation path.
- Open the **ConfigurationTool** app from the desktop shortcut or at `C:\Program Files\NETProjects\Gizmo Server\tools\configuration`.
- Go to <cmd text="Setup Wizard" /> -> <cmd text="Next" /> -- the **Database Settings** page opens. If you are not sure what to change there, leave it as is -- everything is already set up correctly by default. Click <cmd text="Next" /> again, enter the details you used when registering on the website, and click <cmd text="Next" /> once more.
- In ConfigurationTool, in the **Gizmo Service Management** section, install the service and start it -- this keeps the server always running in the background and starting together with the system. [More about server run modes](./../usage/gizmo-server/run-modes.md).

For a walkthrough of all setup wizard settings, see [Gizmo Server setup wizard](./gizmo/self-hosted/gizmo-server/windows/setup-wizard.md).

**IMAGE: ConfigurationTool window with the setup wizard and the Gizmo Service Management section**

**Now you can move on to the main club settings!**

## Step 3. Set up Gizmo Manager

Gizmo Manager is the club's main control panel. Your staff use it to make sales, keep track of who is seated where, work with the warehouse and keep everything else under control.

It has a lot of settings, and it is easy to get lost in them at first -- so let's go over what to do first.

- On the PC where the server is installed, open <https://gizmo.local/apps/manager/signin> -- this is the address you will use to sign in to Gizmo Manager. To open this page from another PC in the club, you need a separate network setup.

How to do that and how to find the server's local IP is covered in [Network access to Gizmo](./../tutorials/client-shell/network-access.md).

- The sign-in window opens -- use the default credentials: **Login** -- admin, **Password** -- admin.
- Change the interface language to the one you prefer. Go to <cmd text="Settings" /> -> <cmd text="General" />, choose the language in the **Language** field, click <cmd text="Save" /> at the top of the screen and refresh the page.

**IMAGE: Gizmo Manager, Settings -> General with the Language field**

Let's take a quick look at the interface -- the left panel shows the app's tabs.

- **Map** -- an interactive layout of the club where the operator sees the status of each host, makes sales and keeps track of seated guests.
- **Hosts** -- the section for setting up hosts, assigning them to zones and branches, the club map, the client shell and tasks on the PCs.
- **POS** -- sales of time products and products, plus the payment log, electronic payments, deposit operations and orders.
- **Users** -- management of customer accounts and their groups.
- **Reservations** -- here you can reserve any host for a guest in advance, if this is allowed in the settings.
- **Monitoring** -- lets you watch several client PC screens at once and spot unwanted guest activity.
- **Logs** -- the app's error logs, useful when you contact support.
- **Reports** -- all club analytics in one place, with flexible filters and sections.
- **Queue** -- automatically lines guests up for hosts when the club is full and more people want to play.
- **Marketing** -- news and banners in the client shell, discounts, promo codes and the loyalty program for your customers.
- **Shop** -- here you create and set up your product range and run the warehouse, write-offs and stocktaking.
- **Management** -- remote access to processes, files and tasks on client PCs. Without the guest noticing, you can open files on their PC, run scripts and end processes, for example close a frozen game.
- **Orders** -- orders placed by guests from the client shell.
- **Settings** -- the largest section. It holds settings you will rarely touch, so set them up carefully right away to avoid coming back later.

Next, let's tailor the app to your club -- we will split this into several clear blocks.

### Filling in the organization details

To use all features without problems, especially those related to receipts, fill in the club's information.

- Go to <cmd text="Settings" /> -> <cmd text="Organization" /> -> <cmd text="General" /> and enter the company name with its legal form (for example, My Company LLC), the email address and the club's website or social media page -- these details are printed on receipts.
- In the regional settings, set the time zone and the country where the club operates.
- Set the start and end of the working week and the club's working hours. If the club is open 24/7, leave the full-day mode on.
- Remember to save the settings with the button at the top of the screen.

**IMAGE: Settings -> Organization -> General with the company name, contacts, regional settings and working hours**

- In <cmd text="Organization" /> -> <cmd text="Subscription" />, check that the subscription is valid and that the **Total Licenses** field shows as many licenses as the number of hosts you will connect.
- In <cmd text="Organization" /> -> <cmd text="Taxes & Currency" />, choose the default currency (for example, USD) and change the price display format if needed.
- In <cmd text="Organization" /> -> <cmd text="Branches" />, open the main branch, give it a clear name and enter the club's address.
- If you run several clubs of one chain on one Gizmo Server, add the other clubs as branches here as well.

For more on running a chain of several clubs on one server, see [Multiple clubs on one server](./../tutorials/operations/multiple-clubs-setup.md).

The next item is needed only if you will connect a receipt printer or a card payment terminal to Gizmo. This is convenient: the operator does not have to repeat the operation on the printer or terminal by hand, the app does it automatically, and it also closes a loophole for cash fraud that bypasses the system.

- In <cmd text="Organization" /> -> <cmd text="Taxes & Currency" />, open the **Tax Settings** block and fill in all the fields. Be careful -- these settings are used when printing receipts.

### Gaming zones

Gaming zones are your club's rooms that differ in prices, look and other settings. For example, Standard, VIP and PS5 are three gaming zones.

Before setting up prices and time products, decide on your zones.

- Go to <cmd text="Hosts" /> -> <cmd text="Host Groups" />. There are already several groups by default -- you can rename them, delete them or create your own.
- In a group, set the branch, skin profile, app group and default guest group. We have not covered these settings yet -- leave the default values for now, we will come back to them later.

**IMAGE: a host group card with the branch, skin profile, app group and default guest group fields**

Create a group for each gaming zone in the club -- for example, the Standard, VIP and PS5 zones give you three host groups.

**IMAGE: Hosts -> Host Groups list with the Standard, VIP and PS5 groups**

### Pricing

The club needs to earn money, and for that you need hourly pricing.

Go to <cmd text="Settings" /> -> <cmd text="Finances" /> -> <cmd text="Tariffs" />. There are already two tariffs by default -- "Prices for hosts" and "Prices for endpoints". You can use them or create new ones.

- Open a tariff (or create a new one) and give it a clear name, for example Standard.
- Set the branch (the main one by default) and the host group the tariff applies to. If the tariff is called Standard, link it to the Standard host group. If one price applies to several zones at once, select all the groups you need.
- Fill in the **start fee** and the **minimum fee**. The start fee is a fixed amount charged at every sign-in, like a club fee, without adding any time. The minimum fee is the minimum balance top-up amount on this tariff. Unless your club's model requires otherwise, **we recommend leaving both fields at 0**.
- Enter the price per hour in the **Hourly Rate** field -- this is the amount a guest is charged for an hour of play.
- The **Charge Every (minutes)** and **Free Minutes** fields are needed only if you want to give a guest a little free time at the start of a session -- for example, so they have time to top up their balance. In that case, set **Charge Every (minutes)** to 1 and **Free Minutes** to the amount you want (for example, 5 for five free minutes).

**IMAGE: tariff card with the branch, host group, start fee, minimum fee, hourly rate and free minutes fields**

A tariff with a single price is only the beginning. If the price should be different on weekends or in the evenings, use schedules: a schedule is a period during which the tariff temporarily changes and then returns to normal.

For example, you want a price of $4 instead of the usual $3 from 17:00 on Friday to 8:00 on Monday.

- Click <cmd text="Create Schedule" /> and open it.
- Fill in the fields the same way as in the main tariff, but enter the price you need -- in this example, $4.
- In the table on the right, select with the mouse the days and hours when this schedule applies.

**IMAGE: tariff schedule with the price and the selected days and hours in the table on the right**

Create a tariff for each gaming zone in the club following the same steps.

For more on tariffs and schedules, see [Tariffs](./../tutorials/sales/pricing/tariffs-guide.md).

### Time products

Hourly pricing is set up, but it has a neighbor that pays off better for the club -- time products. They keep guests longer than plain hourly pricing: a guest planned to play for 4 hours, saw a good deal on 5 and bought that instead.

Go to <cmd text="Settings" /> -> <cmd text="Finances" /> -> <cmd text="Time Products" /> -> <cmd text="Create Time Product" />. There are a lot of fields here, but below is only what you really need to get started.

**Time product details**

- **Name** -- pick one format for all time products, for example "Zone + duration": Standard 3 hours, VIP 5 hours.
- **Product Group** -- the category the time product belongs to (set up in <cmd text="Shop" /> -> <cmd text="Product Groups" />).
- **Minutes** the time product gives, and a description if needed.

**Availability**

- **Available for Reservations** -- whether a PC reservation can be paid for with this time product.
- **Show in Client Shell** -- whether the time product appears in the shop on client PCs.
- In the table below, add only the branches and host groups where the time product should actually be sold -- for example, do not link the Standard 3 hours product to the VIP zone, or guests will buy it cheaper and use it in the more expensive zone. To let guests buy the time product right in the client shell, turn on the **Order** switch next to each added group.
- **Unregistered** -- turn this on if one-time (guest) accounts can also use the time product.
- In the **User Group** table, select who the time product is available to. Usually it is easiest to give access to all groups unless you have a reason to limit it.

A user group is a category of customers with its own prices, discounts and access. For example, you can create "Registered" for regular customers, "Guests" for one-time accounts, "VIP" for premium customers with a 10% discount and "Staff" for employees with a 100% discount and no system restrictions. For more on user groups, see [User groups](./../tutorials/staff/user-groups.md).

**IMAGE: Availability block of a time product with the branch and host group table, the Order switches, Unregistered and the User Group table**

**Branch availability**

A similar setting, but at the level of a whole branch -- it defines in which clubs of the chain the time product can be used at all. It is off by default -- turn it on for the branches you need.

**Usage range and sales schedule**

These are two separate blocks with the same fields:

- **Usage Range** -- when a purchased time product can be **used**;
- **Sales Schedule** -- when the time product can be **bought**.

In each block:

- **Date Range** -- specific dates when the time product can be bought or used. Useful for promotional time products with a limited run.
- **Time Range** -- time periods when the time product is available for purchase or use. Add periods with the <cmd text="+" /> button. If it is off, there are no restrictions.

Say the "Night" time product in your club should be sold only from 22:00 to 3:00 and be valid from 23:00 to 8:00 in the morning. Then in the **Sales Schedule** block turn on **Time Range** and add the period 22:00–3:00, and in the **Usage Range** block turn on **Time Range** and add the period 23:00–8:00.

**Time product lifetime**

The lifetime is the set of conditions under which the time product expires. It encourages the guest to use up the time product instead of saving it for later.

There are two starting points for the countdown:

- **From Purchase** -- the countdown starts right after payment.
- **From Use** -- the countdown starts when the guest starts using the time product.

And three types of expiration:

- **Expires After** -- the time product expires after a set period.
- **Expires At** -- the time product expires the next time the specified time of day comes.
- **Expires at Logout** -- the time product expires right after the guest's session ends. Be careful: an accidental logout also removes the time product.

The most common option is for the time product to expire after its own number of hours from the start of use. For example, for a 5-hour time product: **Expires After** -- 5, format -- hours, countdown -- **From Use**.

**IMAGE: lifetime block of a time product with Expires After set to 5 hours from use**

**Pricing**

Enter the time product's price in money and, if needed, in points. If guests can pay with either money or points, switch "AND" to "OR". Points are part of the loyalty program: you award customers points for purchases, and they spend them on products and time products at the price you set. For more on the loyalty program and points, see [Loyalty points for customers](./../tutorials/loyalty/loyalty-program.md).

**IMAGE: pricing block of a time product with the price in money and in points and the AND/OR switch**

**Reward**

If the club has a loyalty program, set in the **Reward** block how many points a guest earns for buying the time product. Do this for every new time product, otherwise some time products will earn points and others will not.

That completes the time product setup. It was not the easiest section, but you do not need to remember everything at once -- if something goes wrong, support is always there.

For a full walkthrough of all time product settings, see [Time packages](./../tutorials/sales/pricing/time-packages-guide.md).

### Register

Time products and tariffs are set up -- but there is nothing to sell them through yet. Let's set up a point of sale: the place where products and time products are sold. You can connect a receipt printer and a card terminal right away or add them later at any time -- they do not affect this step. A detailed version of this section is in [How to connect Companion and set up a register](./../tutorials/sales/register/companion-and-register.md).

If you have several branches that belong to different legal entities, each needs its own tax settings -- override them in the branch card: <cmd text="Settings" /> -> <cmd text="Organization" /> -> <cmd text="Branches" />. For details, see [Branch card](./../configure/organization/branches/branch.md).

**Set up Gizmo Companion**

Companion is another Gizmo component. It turns a regular PC into a point of sale and connects it to POS hardware. Sales will not work without it.

- Go to <cmd text="Settings" /> -> <cmd text="Server" /> -> <cmd text="Companions" /> -> <cmd text="Create Companion" />. One companion per point of sale (PC). Give it a clear name, open it and copy the token -- you will need it next.
- Open <cmd text="Settings" /> -> <cmd text="Others" /> -> <cmd text="About" /> and download the Companion installer in the **Downloads** block.
- Run the installer **on the PC you will sell from** (usually the operator's PC) and go through all the steps.
- On the same PC, open [localhost:8000](http://localhost:8000) in a browser -- the Companion interface opens.
- In the connection settings, enter the **Protocol**, the **Hostname** (the server's IP) and the **Port** (80 by default). How to find the server's local IP is covered in [Network access to Gizmo](./../tutorials/client-shell/network-access.md).
- Paste the copied token, make sure it has changed, and save.
- Go back to <cmd text="Settings" /> -> <cmd text="Server" /> -> <cmd text="Companions" /> and check that the status has changed to **Connected**. If not, go through the steps again.

<tabs>
  <tab name="Connecting a receipt printer or terminal">
    In Companion, open **POS Devices** on the left panel and set the COM ports of the cash drawer, barcode scanner and smart card reader -- if you have them and they are already physically connected. The barcode scanner is the one you need most often: it lets you find products by barcode faster than by hand.

    Companion setup is now finished, but the receipt printer and the card terminal are not technically connected yet -- this is a separate process, and we help with it remotely: [contact support](./../about/support.md). What to do on the Gizmo Manager side is covered in [How to connect Companion and set up a register](./../tutorials/sales/register/companion-and-register.md).
  </tab>
  <tab name="Working without a receipt printer or terminal">
    Companion setup is now finished -- you can move on.
  </tab>
</tabs>

**Link Companion to a point of sale**

- Go to <cmd text="Settings" /> -> <cmd text="Finances" /> -> <cmd text="Registers" /> and choose or create a register.
- Fill in the register fields: **Branch**, **Companion** (the one you just created), **Number** (the register's sequence number among all points of sale) and **Name** (anything convenient).
- **Cash at Shift Start** -- leave 0, or enter an amount if you want the register to assume at the start of a shift that it already holds some cash.
- Turn on **Default Register for Branch** if you have one point of sale in the club.
- Leave the terminal and printer number fields alone for now -- they are needed only to connect a receipt printer and a card terminal. We will set the register's warehouse below, in the "Warehouse" section.

Save the settings -- the register is ready.

### Sales

The point of sale is ready -- now add what you will sell: products and stock tracking.

#### Products

This is how drinks, snacks and any other items or services are sold. Go to <cmd text="Shop" /> -> <cmd text="Products" /> -> <cmd text="Create Product" />.

- Name the product, choose a product group and, optionally, an image for its card.
- If the product is a service, mark this in the corresponding field. Do not turn on product type settings at random -- this can cause real problems with sales.
- In the **Availability** section, set whether to show the product in the client shell, in which branches it is sold and which user groups can buy it (turn on **Unregistered** so guests without an account can buy it, and give access to all groups where possible).
- In **Pricing**, enter the price in money and, if needed, in points.
- **Sales Schedule** works the same way as in time products (see above) -- if you do not turn it on, the product can be bought at any time.
- In the **Stock** section, turn on stock tracking if the product should be deducted from the warehouse, and **Prevent Selling Out-of-Stock** if the product cannot be sold when the stock is zero.

For a full walkthrough of all product card fields, and of bundles (combos of several products), see [Products and bundles](./../tutorials/sales/shop/running-the-shop.md).

#### Warehouse

You have created products -- but they have to be stored somewhere and their stock counted. Stock tracking helps you see in time what is running low and spot shortages caused by theft or operator mistakes.

Go to <cmd text="Shop" /> -> <cmd text="Warehouses" />. There are two warehouses by default -- **Point of Sale** and **Warehouse**. There is no technical difference between them, it is just a convenient split: the first is for the counter and everything customers see, the second is for the back room or the chain's separate storage. If you do not want to track stock in two warehouses at once, delete one of them.

Then link the warehouse to the register: <cmd text="Settings" /> -> <cmd text="Finances" /> -> <cmd text="Registers" /> -> choose the register of the operator's PC and set the warehouse you need -- all sales from that register will then be deducted from it. If you keep both warehouses, you will have to move products between them by hand -- this gives full control, but it is easy to get confused. If you do not need that, keeping one warehouse is simpler.

For a detailed walkthrough of restocking, write-offs, transfers between warehouses and stocktaking, see [Warehouse](./../tutorials/sales/shop/warehouse.md).

### Operators

You have done all of this from the administrator account, which has access to every club setting -- but regular employees should not have that kind of access. Let's create separate accounts with limited permissions for them.

#### Permissions

Open <cmd text="Settings" /> -> <cmd text="Operators and permissions" /> -> <cmd text="Permissions" />. There are ready-made permission sets here -- open any of them to see what it includes. You can use the ready-made sets or create your own. How the ready-made sets differ is covered in [Choosing a permission preset](./../tutorials/staff/permission-presets.md).

#### Operator accounts

The permissions are ready -- now create the people to assign them to. Open <cmd text="Settings" /> -> <cmd text="Operators and permissions" /> -> <cmd text="Operators" /> -> <cmd text="Create Operator" />.

- Fill in the employee's first name, last name, login and password -- they can change the password themselves later.
- In the **Permission** section, set which branches they have access to and which permission set to use -- **Cashier** usually suits a regular operator.
- Choose the shift mode:
  - **Disabled** -- shifts are not used for this operator, they work without opening a shift.
  - **Optional** -- they can open and close a shift, but sales and other operations are available without one.
  - **Required** -- they cannot sell anything until they open a shift.
- Fill in the other contact details if you want.

Now the employee can sign in to Gizmo Manager and use what you have allowed. Keep in mind: this account does not let them sign in to the client shell -- if you want to give staff free or discounted time on the PCs, that is a separate setting covered in [Staff perks](./../tutorials/staff/staff-perks.md). A short cheat sheet for operators working at the counter is in [Operator quick guide](./../tutorials/operations/operator-guide.md).

### Shell

The operator's counter is set up -- now it is time to take care of what the guests see: the shell's look, notifications, apps and restrictions on the gaming PCs.

#### General settings

Open <cmd text="Settings" /> -> <cmd text="Client" /> -> <cmd text="Shell" />.

- Set the default client language.
- Choose what the PC does when a user logs out -- we recommend leaving **Restart**.
- Change the manager password (`password` by default) and keep it in a safe place -- this password can close the shell completely, so it is better that outsiders do not learn it.
- At the very bottom, turn on the **Top-Up Grace Period** -- the time a guest gets to top up their balance after their paid time runs out, before they are logged out of the system. This keeps an active game from being cut off abruptly.

You can change the other settings in this section as you like, but first find out what each one does -- the key scenarios for working with the shell are collected in the [Client shell](./../tutorials/client-shell/_index.md) topic.

**Notifications**

A guest should know in advance that their time is running out, rather than find out when they are suddenly dropped from the game. Open <cmd text="Settings" /> -> <cmd text="Client" /> -> <cmd text="Notifications" /> and set up two kinds: **Time Notification** (when the session is about to end) and **Reservation Notification** (when a reservation is about to start). Both work the same way:

- Enter the message text -- your own, or keep the default one. To insert the remaining time in minutes, use `{0}` in the text, for example "You have \{0} minutes left".
- Set how many minutes before the event to show the notification -- you can add as many rules as you like.
- Choose the type: **visual** (a banner at the top of the screen), **audio** (the text is read aloud by Windows -- the voice may not sound very natural) or both.
- The **Minimize Windows** setting minimizes all the guest's open apps when the notification fires -- guests find this annoying, so turn it on with care.

#### Look

By default, Gizmo uses a neutral skin designed for everyone. Let's add some personality.

- Open <cmd text="Settings" /> -> <cmd text="Client" /> -> <cmd text="Skins" /> and open the skin profile marked **Default**.
- In the **Media** block, add your own images: **Background Media** (the home screen background, visible after signing in to the shell) and **Login Background Media** (the sign-in screen background, visible before signing in).
- Save the settings.

For more, including different looks for different zones, see [How to set up a shell skin](./../tutorials/client-shell/skin-setup.md).

#### Apps

The shell has its own look now -- but there is nothing to launch in it yet. For guests to open games and programs, add them as apps. The topic is large, so we cover only what you need to get started -- the full guide to apps and all their settings is in [How to add a game to the client shell](./../tutorials/client-shell/add-app-to-shell.md).

Each app has two parts: the **card** (what the guest sees -- icon, name, category) and the **executable** inside it (what actually runs). You create the card once, and an executable separately for each launch path option.

Go to <cmd text="Hosts" /> -> <cmd text="Apps" /> -> <cmd text="Create App" />.

**App card**

- Enter the name the guest will see and add a cover -- [steamgriddb.com](https://www.steamgriddb.com) is a handy source of icons and covers for Steam games.
- In the **App Organization** section, set the **App Group** (without it the app will not show up on hosts) and the **App Category**.

**IMAGE: App Organization section of an app card with the App Group and App Category fields**

- Save the card and open it again -- now you can add an executable to it.

**Executable**

Click **\+ Create Executable** inside the card and fill in:

- **Caption** -- the shortcut name the guest will see, and its icon (you can also take it from steamgriddb.com).
- **Availability** -- be sure to turn it on for the branch you need, otherwise the shortcut will not appear anywhere.

**IMAGE: Availability section of an executable turned on for a branch**

- **Executable Path** -- the path where the game is installed on the client PCs (not on the server).

How to find the path to a game, using Steam as an example:

1. Find the shortcut on the desktop, right-click it -> **Open file location**.

**IMAGE: desktop shortcut context menu with Open file location**

2. The game folder opens -- copy the path from the File Explorer address bar, for example `C:\Program Files (x86)\Steam`.

**IMAGE: File Explorer address bar showing the Steam folder path**

3. In the **Executable Path** field, enter this path and add the name of the file to run at the end: `C:\Program Files (x86)\Steam\steam.exe`. In the **Working Directory** field, enter the folder path itself, without the file name: `C:\Program Files (x86)\Steam`.

**IMAGE: executable with the Executable Path and Working Directory fields filled in for Steam**

- In the **Launch Options** section, we recommend turning on **Auto Launch** and **Monitor Children**. Note: Auto Launch does not start the app when the PC turns on. It starts the game right after the preliminary actions (deployments, tasks), so the guest does not have to click launch twice. **Monitor Children** lets Gizmo Client track the app's child processes -- for example, separate launchers or anti-cheat modules.

**IMAGE: Launch Options section with Auto Launch and Monitor Children turned on**

- Save the settings.

Done -- the app appears in the shell on all client PCs where it is installed at the specified path. If the path does not match on a PC, the shortcut will not show up there.

#### Security

Without a security profile, a guest can do anything on a gaming PC, up to turning off the shell itself -- these are Windows features, and the only way to block them is to restrict access to the corresponding system settings.

Open <cmd text="Hosts" /> -> <cmd text="Security Profiles" /> and create a profile. You can turn settings on as you see fit, but here is what we recommend for most clubs:

- Name the profile.
- Turn on **Hide Start Menu**, **Prevent Shell Minimizing** and **Restrict Desktop Switching**.
- In the **File System** section, select all drive letters -- the drives will then be hidden and locked for the guest.
- In the **Policies** section, turn on all security settings with one button.

This is the maximum lockdown level -- it closes almost everything outside the shell to the guest. Security profiles can also block specific apps, processes and even websites in the browser. For a full walkthrough of all settings, see [Security profiles](./../tutorials/client-shell/security-profiles.md).

All that is left is to assign the profile to all client PCs. Go to <cmd text="Hosts" /> -> <cmd text="Host Groups" />, open each group and link a security profile to it.

**IMAGE: host group card with a security profile selected**

The restrictions are not permanent -- you can always lift them by turning off security on a PC or switching it to admin mode.

### Finishing touches

The main settings are done -- what is left are details worth adjusting that do not need long explanations.

**Network**

- Open <cmd text="Settings" /> -> <cmd text="Server" /> -> <cmd text="Network" />.
- In the **Hostname** field, enter `gizmo.local` or the server's local IP. Why this matters and how to find the local IP is covered in [Network access to Gizmo](./../tutorials/client-shell/network-access.md).
- In the connection rules, turn on **Auto Discovery** and **Hostname Recovery**.

**Backup**

It would be a shame to lose everything you have set up -- be sure to turn on backups.

- Open <cmd text="Settings" /> -> <cmd text="Server" /> -> <cmd text="Backup" /> and turn on backups with the switch.
- Set the maximum number of backups -- when a new one is created, the oldest is deleted.
- In the **Repeat** field, set the time of the daily backup.
- In the **Storage** field, set the path where backups are stored (`C:\Program Files\NETProjects\Gizmo Server\data\Backup` by default). We recommend a path that is not on the system drive -- then the backups survive even if the system drive itself fails. This is a really important setting -- do not skip it.

For backups to the cloud, see [Cloud backup](./../tutorials/operations/cloud-backup.md).

**Invoices**

- Open <cmd text="Settings" /> -> <cmd text="Finances" /> -> <cmd text="Invoices" /> and turn on all the options in the **Options** section, as well as all the switches in the **Automatic Invoicing** section.

**IMAGE: Settings -> Finances -> Invoices with all options and Automatic Invoicing switches turned on**

**Clearing sessions at logout**

Guests often forget to sign out of games and launchers they signed in to on a PC -- this creates risks and misunderstandings between the club and the next guest. Set up automatic session cleanup at logout so that it is not manual work -- see [Cleaning up game and launcher sessions](./../tutorials/client-shell/session-cleanup.md).

The main club setup is now done -- on to the hosts!

## Step 4. Connect the hosts

The licenses are bought (or the trial period is activated -- you can check this as described in [Subscription](./../configure/organization/subscription.md)), the club is set up, and the client PCs already have Windows installed and are waiting -- let's get started!

In Gizmo Manager, open <cmd text="Settings" /> -> <cmd text="Others" /> -> <cmd text="About" /> and download Gizmo Client in the **Downloads** block.

Before the next steps, make sure that auto discovery and hostname recovery are turned on in <cmd text="Settings" /> -> <cmd text="Server" /> -> <cmd text="Network" /> -> <cmd text="Connection Rules" /> (we turned them on in "Finishing touches" above) -- otherwise the client PCs will not connect automatically.

- Copy the downloaded installer to all client PCs.
- Run the installer and go through all the steps -- we recommend not changing anything. When the installation is finished, the shell starts on its own.

> [!CAUTION]
>
> **Having trouble connecting?** The loading stage hangs forever, the server icon in the lower-left corner of the screen is red, the device does not appear in Gizmo Manager -- or something else is wrong? Before contacting support, see [Client PC connection issues](./../tutorials/client-shell/client-connection-troubleshooting.md) -- it covers the common causes.

Once the client is installed on the hosts, link them to the system.

- Go back to Gizmo Manager and open <cmd text="Hosts" /> -> <cmd text="Computers" /> -- here you see all PCs that have connected to the server at least once.

**IMAGE: Hosts -> Computers list with connected client PCs**

- Open each PC in turn and set its number in the system, choose the **Branch**, the **Host Group** it belongs to (remember, we created them earlier?) and the **Layouts** -- choose the default layout.
- Go to <cmd text="Map" /> on the left navigation panel -- if everything is right, you will finally see the hosts on the club map.

Thank you for going this whole way with us! Congratulations -- your club is ready to welcome customers, and you know where everything is. If you have any questions or problems, feel free to contact support -- it is available 24/7.

## What's next?

We have gone through all the main setup stages, but Gizmo can do a lot, so it simply cannot fit into a single guide. Here are the big topics worth reading in your spare time that will improve your club's experience:

- [Sales](./../tutorials/sales/_index.md) -- tariffs, time products, registers and terminals, products and the warehouse.
- [Loyalty program](./../tutorials/loyalty/_index.md) -- loyalty points, discounts and promotions.
- [Booking](./../tutorials/booking/_index.md) -- how to reserve a host for a guest in advance.
- [Client shell](./../tutorials/client-shell/_index.md) -- apps, network, security and common client PC problems.
- [Customers and staff](./../tutorials/staff/_index.md) -- user groups, accounts, permissions and staff perks.
- [Club operations](./../tutorials/operations/_index.md) -- the map, shifts, reports, the queue, remote management, branches, backups and the operator quick guide.
- [Hosts operations](./../tutorials/hosts-operations/_index.md) -- turning PCs on and restarting them over the network, consoles and other hosts.
- [Gizmo Manager as an App](./../tutorials/gizmomanager-as-an-app.md) -- how to open the manager in a separate window, like a regular program.
