---
title: Migration to v3
order: 10
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
      How to upgrade your club to <span class="gx-accent">Gizmo V3</span>
    </h2>
    <div class="gx-meta">
      <span>30–50 minutes</span>
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

> [!NOTE]
>
> <color color="#fc7b03">**This guide is complex, and some steps may cause difficulties. If you have questions, [contact support](./../about/support.md) -- or leave the upgrade to us: send a request, and we will move your club to V3 for free.**</color>

<color color="#99B1E6">**The new version is radically different from the previous one -- the Manager has moved to the browser, you can work with several branches in one space, the loyalty system has been completely redesigned, and much, much more. To help you move to V3 quickly and without losses, we have prepared a step-by-step guide.**</color>

The guide has three parts -- go through them in order:

1. **Installing Gizmo Server V3** -- from preparation to the first sign-in to Gizmo Manager.
2. **Setup after the upgrade** -- everything that is not carried over from V2 automatically or works differently now. After this part, the club is ready to work.
3. **Further setup** -- new V3 features, appearance and useful articles to get to know the system.

## Part 1. Installing Gizmo Server V3

### 1\.1 Preparation

> [!WARNING]
>
> Before installing, make sure everything is ready for the migration.

- **V2 database backup** -- **be sure** to make one before you start: if something goes wrong, the backup lets you return the club to its original state. If you do not know how to make a backup in V2, [contact support](./../about/support.md) before you start the upgrade.
- **The server meets the system requirements** -- for Windows, that is an 8th-generation Intel Core i3 processor or better, 16 GB of DDR4 and a 40 GB NVMe SSD. Requirements for other installation options are in [Quick install](./../instalation/quick-install.md).
- **Database** -- Gizmo Server works with Microsoft SQL or PostgreSQL. More about the supported database systems is in [Databases](./../instalation/gizmo/self-hosted/databases/_index.md).
- **An account on the [Gizmo website](https://gizmopowered.net/)** -- you activate the license and receive updates through it.
- **Time** -- the upgrade takes 30–50 minutes. During this time the club cannot work normally, so choose off-hours.

### 1\.2 Download and installation

1. [Download the Gizmo Server V3 installer](https://gizmopowered.net/downloads/v3/latest/GizmoServiceSetup.exe) to the PC where the V2 server currently runs.
2. Run the installer and go through all the steps, clicking **Next**. We recommend **not changing** the default installation path.
3. You do not need to uninstall the old version -- just go through all the installer steps.

### 1\.3 Starting the server

You can start the server in two ways -- both are described in detail in [Run Modes](./../usage/gizmo-server/run-modes.md).

- **As a service (recommended)** -- the server runs in the background and starts with the system. Open the **ConfigurationTool** app at `C:\Program Files\NETProjects\Gizmo Server\tools\configuration`, go to the **Gizmo Service Management** section, install the service and start it.
- **As a console application** -- from the desktop shortcut. The server does not start automatically with the system, so this mode is suitable for one-off runs and for collecting errors.

> [!WARNING]
>
> An error may appear on the first start -- to fix it, just close the application and open it again.

### 1\.4 First sign-in to Gizmo Manager

1. On the server PC, open `https://gizmo.local/apps/manager/signin` in the browser -- this is the address you will use to sign in to Gizmo Manager. If you prefer desktop applications, [install the Manager as an app](./gizmomanager-as-an-app.md).
2. Sign in with an operator account -- any account will do, because permissions are temporarily reset.

**IMAGE: Gizmo Manager sign-in page at gizmo.local**

3. Select a branch -- only **Default** is available now; it is created by default during the upgrade.

> [!NOTE]
>
> Branches are a new feature for separating venues connected to one server. They let club chains join their clubs into an ecosystem with a shared user base, settings, administrators and other features. More in [Branches](./../configure/organization/branches/_index.md).

4. Select the register you work from. A register is the PC the administrator makes sales from. We will set up registers in the second part of the guide; more about them is in [Registers](./../configure/finance/registers/_index.md).

**Done -- you are on the club map, and the V3 server is running. Do not start working yet -- go on to the second part.**

## Part 2. Setup after the upgrade

Gizmo Manager has been completely redesigned: some features have moved, some have changed, and some are new.

**How to find your way around the Manager.** On the left is the navigation panel with the sections: Map, Hosts, POS, Users, Marketing, Shop and others. Almost everything you need in this part is in the **Settings** section at the very bottom of the panel. What each section is for is described in [Navigation panel](./../usage/gizmo-manager/interface/navigation-panel.md), and the general screen layout in [Interface](./../usage/gizmo-manager/interface/_index.md).

**What you must set up again.** The upgrade does not carry over: operator permissions, client PC connection rules, client shell options and automatic guest re-login. All of them are covered below -- go through the items in order.

### 2\.1 Language and organization details

1. Go to **Settings -> Organization -> General** -- until you change the language, the interface is in English.
2. In the regional settings, set the **language**, **time zone** and **country**. The time zone matters: the date and time of all operations in the database, such as transactions, are recorded in it.
3. Fill in the organization details: company name, email and website.
4. Save the changes and refresh the page.

More about each field is in [General](./../configure/organization/general.md).

### 2\.2 Subscription

Open **Settings -> Organization -> Subscription** and check that the subscription is active and that you have at least as many licenses as gaming stations in the club, including consoles. If there are not enough licenses, some PCs will not connect to the server. More in [Subscription](./../configure/organization/subscription.md).

### 2\.3 Branch

1. Go to **Settings -> Organization -> Branches** and open the **Default** branch.
2. Enter a clear name and the club's address, and save the changes. All fields are in [Branch card](./../configure/organization/branches/branch.md).

If you have several clubs, you can add them as separate branches on the same server -- see [Multiple clubs on one server](./operations/multiple-clubs-setup.md).

### 2\.4 Permissions and operators

Permissions are now tied not to a specific operator but to a **permission set** -- you create a set once and select it in each operator's profile.

1. Go to **Settings -> Operators and permissions -> Permissions**. There are ready-made sets here -- you can use them or create your own with the **Create Permission** button, giving it a name such as "Cashier", "Manager" or "Owner". To find out what a permission means, hover over it -- or see [Permission card](./../configure/operators-and-permissions/permissions/permission-card.md). How the ready-made sets differ is explained in [Choosing a permission preset](./staff/permission-presets.md).

**IMAGE: Settings -> Operators and permissions -> Permissions page with the ready-made permission sets**

2. Go to the **Operators** section. For each operator, select the **branch** the operator belongs to and the **permission preset**. All card fields are in [Operator card](./../configure/operators-and-permissions/operators/operators-card.md).
3. Sign out and sign in again -- the current operator's new permissions apply only after you sign in again.

> [!WARNING]
>
> Operator names now have restrictions -- they cannot contain spaces and must be at least 5 characters long.

### 2\.5 Network and client PC connection

Without connection rules, client PCs will not connect to the server automatically.

1. Open **Settings -> Server -> Network**.
2. In the **Hostname** field, enter the server's local IP or DNS name, or `gizmo.local` if you are not sure what to enter. The hostname is required for [remote access](./../usage/gizmo-manager/map/remote-access.md) and [remote management](./../usage/gizmo-manager/management/_index.md) of client PCs. How to find the server's local IP is explained in [Network access to Gizmo](./client-shell/network-access.md).
3. In the **Connection Rules** block, turn on **Automatic Discovery** and **Hostname Recovery**. Leave **Registered Only** turned off -- otherwise the server rejects the connection of every new PC, and you will have to add each one manually.
4. Save the changes.

> [!NOTE]
>
> `gizmo.local` automatically detects your server's IP. This may make remote access and some other features load a little more slowly. For maximum speed, we recommend entering the IP or DNS name manually.

A detailed breakdown of all network settings is in [Network](./../configure/server/network.md).

### 2\.6 Gizmo Companion and registers

You can now work with several **registers** and **endpoints** in one club. For this, a small app -- **Gizmo Companion** -- is installed on each point of sale (administrator PC). Sales do not work without it.

**Connect Companion to the server**

1. In Gizmo Manager, go to **Settings -> Server -> Companions** and click **Create Companion**. Enter a name, for example the location of the point of sale.
2. Open the companion you created and copy its **token**.
3. In **Settings -> Others -> About**, in the **Downloads** block, download the Gizmo Companion installer -- see [About](./../configure/others/about.md).
4. Install it on the PC you will make sales from and open the Companion interface -- with the desktop shortcut or at [localhost:8000](http://localhost:8000) in the browser on the same PC.
5. In the **Protocol**, **Hostname** and **Port** fields, enter the server connection details: the hostname is the server's IP, and the default port is 80.
6. Paste the copied token and save the changes.
7. Go back to **Settings -> Server -> Companions** and check that the status has changed to **Connected**.

**IMAGE: Settings -> Server -> Companions page with a companion in the Connected status**

**Link Companion to a register**

1. Go to **Settings -> Finances -> Registers**. You will see many previously created registers here -- these are the names of all PCs that have ever connected to the server.

> [!TIP]
>
> To clean up this section, you can delete all registers and create only the ones you need.

2. Open the register of the point of sale and select the **Branch**, **Companion**, **Number** and **Name**.
3. If the club has only one point of sale, turn on **Default Register for Branch**.
4. Save the changes.

All register fields are in [Register card](./../configure/finance/registers/register-card.md), and all companion settings are in [Companion](./../configure/server/companions/_index.md).

### 2\.7 Taxes and currency

1. Go to **Settings -> Organization -> Taxes & Currency**, select the **Default Currency** and fill in all the fields in the **Company Tax Settings** subsection. Be careful -- these settings are used when printing receipts. More in [Taxes & Currency](./../configure/organization/taxes-and-currency.md).
2. Save the changes.

If you use a card terminal or other POS hardware, it is connected through Gizmo Companion, which is in turn linked to the register.

### 2\.8 Tariffs

Previously, a tariff (formerly a price profile) was created separately and could be tied to a user group or overridden for host groups. Now a tariff must be tied directly to a **branch** and a [**host group**](./../usage/gizmo-manager/stations/station-groups/_index.md) (Standard, VIP and so on):

1. Go to **Settings -> Finances -> Tariffs**.
2. Double-click the tariff that will be used for the host group (or groups).
3. Select the **Branch** and the **host groups** where this tariff will apply.
4. Save the changes and repeat for the other tariffs.

**IMAGE: tariff card with the Branch and Host Groups fields filled in**

> [!TIP]
>
> Your club may already have tariffs set up for customers with discounts -- for example, Standard 10%. Since the discount system has been redesigned, you no longer need these tariffs and can delete them. We will set up the new discounts below, in item 2.11 "Discounts".

More about tariffs and schedules is in [Tariffs](./sales/pricing/tariffs-guide.md), and all fields are in [Tariff card](./../configure/finance/tariffs/tariff-card.md).

### 2\.9 Warehouse

With support for several branches, you can now split the warehouse between them:

1. Go to **Shop -> Warehouses** and open the **Default** warehouse created by default.
2. Rename it and select the **Branch** it will be tied to.
3. Save the changes.
4. Open **Settings -> Finances -> Registers**, select a register and link this warehouse to it -- so sales from this register are deducted from this warehouse.

**IMAGE: warehouse card with the name and Branch fields**

> [!IMPORTANT]
>
> A warehouse can have one of two types -- **Point of Sale** and **Warehouse**. The type does not affect how the warehouse works; it is only a visual convenience: a point of sale is, for example, a fridge at the front desk, and a warehouse is a back room in the club or a full storage facility for large club chains.

Restocking, write-offs, transfers and stocktaking are covered in [Warehouse](./sales/shop/warehouse.md), and the section itself is described in [Warehouses](./../usage/gizmo-manager/magazin/warehouses.md).

### 2\.10 Client shell

Shell options -- hiding sections in the client, the background image and other settings from Gizmo Server Configuration Wizard -- have moved to the Manager, and you need to set them again.

1. Go to **Settings -> Client -> Skins** and create a new **Skin Profile** with the settings you need for the host groups. Save it and leave the settings. All profile settings are in [Skin profile card](./../configure/client/skins/skin-profile.md).

**IMAGE: Settings -> Client -> Skins page with a new skin profile**

2. Go to **Hosts -> Host Groups**, select a skin profile for each host group and save the changes. All group fields are in [Host group card](./../usage/gizmo-manager/stations/station-groups/station-group-card.md).

**IMAGE: host group card with the skin profile selected**

3. Open **Settings -> Client -> Shell -> User Session** and, if needed, turn on **Automatic User/Guest Re-login** -- it returns the guest to the session after an unexpected PC restart.
4. In the same section, **Settings -> Client -> Shell**, check the password requirements for customers signing up in the **Password Policy** block: minimum and maximum length, lowercase and uppercase letters, digits.

All shell settings are in [Shell](./../configure/client/shell.md).

### 2\.11 Discounts

**The discount logic that used to live inside each time product and product, as well as price profile overrides for host groups and users, has moved to the new [Marketing](./../usage/gizmo-manager/marketing/_index.md) section. It has three new items:**

- [**Discount**](./../usage/gizmo-manager/marketing/discounts/discount-card.md) -- a universal object: you can set it on a single product, service or tariff, on a product group or even on a payment method, and specify the conditions under which the discount applies.
- [**Discount Groups**](./../usage/gizmo-manager/marketing/discount-groups/discount-group-card.md) -- a set of discounts that you can tie to a user group.
- [**Promotions**](./../usage/gizmo-manager/marketing/promotions.md) -- promo codes that a customer can redeem with the administrator or in the shell to get a discount or a discount group.

So a user group is assigned not a specific discount, but a **Discount Group** that contains several **Discounts**.

If you previously had discounts on time products or tariffs, set them up again. The steps are the same -- only the target group in step 4 differs.

**Example -- adding a 10% discount on time products or a tariff for the "Regulars 10%" user group.**

1. Go to **Marketing -> Discounts** and click **Create Discount**.
2. Enter a name and turn on availability for your branch.
3. In **Target Groups -> Group Activation**, select **Any** -- the discount applies when the condition is met for at least one of the added target groups, not for all of them at once.
4. Add a **Target Group** -- **Time Products** or **Tariffs** -- and select (with the **\+** button) the time products or tariffs the discount should apply to.
5. In **Activation Condition**, select **Any** -- the discount applies if the order contains any of the selected time products or tariffs.
6. In **Reward**, select **Discount**.
7. In the **Apply To** field, select **Order Line** -- then the discount applies only to that line, not to the whole order.
8. Set the **Calculation Type** to **Percentage** and enter the discount percentage in the **Amount** section.
9. Save the discount.
10. Go to **Marketing -> Discount Groups**, create a **Discount Group**, enter its name and select the discount you created.
11. Go to **Users -> User Groups**, double-click the "Regulars 10%" group and select the discount group you created. How user groups work is explained in [User groups](./staff/user-groups.md).

**Done -- customers in the "Regulars 10%" group now automatically get the discount on the selected time products or tariffs.**

### 2\.12 Backup

Turn on automatic backup of the V3 database -- it would be a pity to lose everything you have just set up.

1. Open **Settings -> Server -> Backup** and turn on backup with the toggle.
2. Set the maximum number of backups to keep -- when a new one is created, the oldest is deleted.
3. Set the time of the daily backup and the storage path. We recommend a path outside the system drive -- then the backups survive even if that drive fails.
4. Save the changes.

More in [Backup](./../configure/server/backup.md).

### 2\.13 Checking the gaming stations

1. Open **Hosts -> Computers** and make sure all client PCs have connected to the server -- see [Computers](./../usage/gizmo-manager/stations/computers/_index.md). Each PC must have a branch, a host group and a layout -- the fields are described in [Computer card](./../usage/gizmo-manager/stations/computers/computer-card.md).
2. Go to the **Map** section -- if everything is correct, the gaming stations appear on the club map.

If some PCs do not connect or are not visible on the map, go through the checklist in [Client PC connection issues](./client-shell/client-connection-troubleshooting.md): licenses, connection rules, the Gizmo Client version and the PC's branch, host group and layout.

**Done -- all critical settings are in place, and the club is ready to work on Gizmo V3.**

## Part 3. Further setup and getting to know V3

The main migration is complete. Below are things that make work more convenient, and articles worth reading in your spare time.

### 3\.1 What's new in V3

- **The Manager in the browser** -- Gizmo Manager opens from any device on the club network. How to open it from another PC is explained in [Network access to Gizmo](./client-shell/network-access.md).
- **A new loyalty system** -- besides discounts, V3 has loyalty points, achievements and challenges -- [Loyalty program](./loyalty/_index.md), [Loyalty points for customers](./loyalty/loyalty-program.md).

### 3\.2 Appearance and convenience

- **Club map** -- unlock the map by clicking the lock icon, arrange the devices the way you like, and click the same button to lock it again. You can also switch from the graphical view to a simple list of devices there. More in [Map](./../usage/gizmo-manager/map/_index.md) and [Layouts](./../usage/gizmo-manager/stations/sloi-karty/_index.md).

**IMAGE: club map in edit mode with the lock icon and the switch to list view**

- **Dark theme** -- turned on in the operator menu: click the account name in the top right corner -- see [Operator menu](./../usage/gizmo-manager/interface/operator-menu.md).
- **Shell skins** -- backgrounds for the home screen and the login screen -- [Skins](./../configure/client/skins/_index.md).

### 3\.3 Other useful settings

- [Cleaning up game and launcher sessions](./client-shell/session-cleanup.md) -- so the next guest does not end up in someone else's Steam account.
- [Security profiles](./client-shell/security-profiles.md) -- restrictions for guests on gaming PCs.
- [Cloud backup](./operations/cloud-backup.md) -- database backups outside the server.
- [Time packages](./sales/pricing/time-packages-guide.md) -- if you need to reconfigure time products for the new host groups and discounts.
- [Products and bundles](./sales/shop/running-the-shop.md) -- the shop's product range and combo bundles.

### 3\.4 Working in Gizmo Manager for operators

The V3 interface is noticeably different from V2, so before the first shift, show your administrators the [Operator quick guide](./operations/operator-guide.md). It describes the whole shift at the front desk step by step: opening a shift, registering a guest, selling time products and products, topping up the deposit, seating a guest at a PC, reservations, cash reconciliation and closing the shift.

## Result

- Gizmo Server V3 is installed and running, and you can sign in to Gizmo Manager.
- The critical settings are set again: organization and subscription, branch, operators and permissions, network, Companion and registers, tariffs, warehouse, client shell, discounts and backup.
- Client PCs are connected to the new server and visible on the map -- the club is ready to work on Gizmo V3.

<color color="#99B1E6">**This guide covers only the basic configuration you need to get started -- you will find guides for the rest of the features in our knowledge base. And if you have questions or difficulties, [be sure to write to us](./../about/support.md)**.</color>
