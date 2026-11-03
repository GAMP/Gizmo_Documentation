---
title: Reports
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="20" x2="20" y2="20"/><rect x="6" y="12" width="3" height="8"/><rect x="11" y="7" width="3" height="13"/><rect x="16" y="10" width="3" height="10"/></svg>
      In this guide you will learn
    </p>
    <h2 class="gx-title">How to read club reports and get them by email on a schedule</h2>
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

Reports answer the club owner's questions: how much the club earned in a shift, a day or a month, and from what -- time, time products or products; how busy the gaming stations are; and which operator sold how much. All of this is collected in the **Reports** section of Gizmo Manager.

You do not have to open reports manually every day: Gizmo can send them by email on a schedule -- for example, so that yesterday's totals reach the owner every morning. First, let's look at where to find which numbers, and then set up the mailing.

## Step 1. Give access to reports

Access to reports is defined by the operator's permission set.

1. Open **Settings -> Operators and permissions -> Permissions** and choose a permission set.
2. Turn on the permissions in the **Reports** category -- they give access to the reports module.
3. Save the permission set.

For all permissions, see [Permission card](./../../configure/operators-and-permissions/permissions/permission-card.md).

## Step 2. Look at the club summary

Open the **Reports** section on the left panel -- the **Overview** tab opens first.

1. Choose a period: **Day**, **Week**, **Month**, **Year**, **Custom** for any range, or **More Than** / **Less Than** for open-ended ranges.
2. Study the summary blocks:
   - **Operators** -- a table by shift: who worked, when the shift started and ended, how many hours, products, time products and bundles were sold, how many sales were voided, and the **Total** for the shift;
   - **Utilization (%)** -- the average load of gaming stations (**Utilization AVG**) and attendance: unique logins and the average number of visits per day, separately for registered users and for guests;
   - **Users** -- how many accounts there are in total, and how many are new and blocked in the period;
   - **Revenue** -- the average revenue from guests and registered users, **Revenue per Group** and **Total Revenue** for the period.

## Step 3. Break down the money in the financial report

When you need to understand what the revenue consists of and how much cash went through the register, open the financial report.

1. Go to the **All Reports** tab and choose **Financial Report**.
2. Set the filters at the top of the screen:
   - **Operator** -- to see the operations of one staff member;
   - **Cashier Station** -- to see the operations of one register;
   - **Report Type** -- the level of detail, **Simple** by default;
   - **Period** -- a preset interval or a custom range of dates and times.
3. Click **Apply Filters**.

The report shows deposit top-ups and charges, sales for the period (the **Sales** block), **Payments for Past Sales**, **Voids**, cash pay ins and pay outs (**Pay Ins and Pay Outs**) and the final **Balances** by payment method.

> [!TIP]
>
> If the report is empty, check:
>
> - whether you clicked **Apply Filters** after choosing the parameters;
> - whether the period is right -- if no shifts and sales fall into it, the report is empty;
> - whether the filters are too narrow -- with an **Operator** or **Cashier Station** selected, the report includes only their operations;
> - whether the correct **Time Zone** and **Default Working Schedule** are set in **Settings -> Organization -> General** -- the time zone defines the date and time of records, and the schedule is used to build reports.

For all report blocks, see [Financial report](./../../usage/gizmo-manager/otchety/finansovyy.md). For the time zone and schedule, see [General](./../../configure/organization/general.md).

## Step 4. Find the log you need

The other tabs of the **Reports** section are operation logs. The most useful ones in everyday work:

- **Shift Log** -- opening and closing of shifts;
- **Z Log** -- Z-reports, that is, the totals of closed shifts per register;
- **Transaction Log** -- money operations;
- **Order Log** -- order history. Look for issued invoices in the **Invoice Log** on the **All Reports** tab;
- **Product Log** and **Stock** -- product movements and warehouse stock;
- **Assets Log** -- what happened to hosts and equipment;
- **Licenses** -- usage of app licenses.

Reports marked for quick access are collected on the **Favorites** tab. The full list is on the **All Reports** tab: Overview, Apps, Products, User Registrations, Sessions, Order Statistics, Top Users, Financial Report and Hosts. For what the Apps, Products and Sessions reports show, see [Reports](./../../usage/gizmo-manager/otchety/_index.md).

> [!NOTE]
>
> This section is under development.

For a description of the tabs, see [Reports](./../../usage/gizmo-manager/otchety/_index.md).

## Step 5. Set up the mail server

To send emails, Gizmo needs a mail server. Without these settings, no mail leaves the system.

1. Open **Settings -> Server -> SMTP Settings**.
2. Turn on the **Enable** toggle.
3. Enter the **SMTP Host** -- the address of the mail server that will send the emails.
4. Check **SMTP Port** and **SMTP Security**. The defaults are port **465** -- the secure connection port -- and **SSL** encryption. Check the right values with your email provider.
5. In the **Reply-To Address** field, enter the address that will receive replies to emails from the club.
6. Turn on **SMTP Authentication** if the mail server requires you to identify yourself before it accepts an email. Most external email services require this.
7. Click **Save**.

> [!NOTE]
>
> This section is under development.

For details, see [Communication methods](./../../configure/server/communication-methods.md).

## Step 6. Connect the "System SMTP" integration

Gizmo sends the emails themselves through the **System SMTP** integration. It takes the mail server parameters from step 5 and does not store its own.

1. Open **Settings -> Server -> Plugins**.
2. In the **Integrations** block, click **Add**.
3. In the "Select integration type" window, choose **System SMTP** and fill in its parameters.
4. Save the integration.
5. Restart Gizmo Server.

> [!WARNING]
>
> Adding, removing, enabling and disabling integrations take effect only after a server restart. Until the server is restarted, the new integration does not start working. For how to restart the server without interrupting guest sessions, see [How to restart the Gizmo server](./server-restart.md).

For details, see [Adding an integration](./../../configure/server/plugins/add-new-plugin.md).

## Step 7. Prepare the recipients

The mailing recipient is chosen from Gizmo Manager operators. So everyone who should receive reports -- for example, the owner or the manager -- must have an operator account. Open **Settings -> Operators and permissions -> Operators** and check that the **Email** field is filled in in the operator card.

For all fields, see [Operator card](./../../configure/operators-and-permissions/operators/operators-card.md).

## Step 8. Create a report delivery rule

1. Open **Settings -> Policies -> Report Schedules** and click **Create Delivery Rule** in the corner of the page.
2. Enter the rule **Name**, for example "Daily totals for the owner". The field is required.
3. In the **Reports** block, click **+ Select Report**, choose the report you need from the list and click **Save**. Its **Name** and **Report Subtype** appear in the table. Repeat if the mailing should include several reports.
4. In the **Report Delivery Scheduling** block, set the **Time** -- the time of day when reports are sent -- and the **Type**: how often to send them, for example daily.
5. In the **Recipients** block, click **+ Add Recipient**, choose an operator from the list and click **Save**. The table shows the **Method** -- the delivery method -- and the **Value** -- the recipient's address, for example an email. Check that the recipient is **Enabled**.
6. Save the rule.

> [!NOTE]
>
> This section is under development.

The rule appears in the table on the **Report Schedules** page with its **Time**, **Frequency** and **Enabled** status. To change the rule, click its row.

For a description of all fields, see [Report schedules](./../../configure/policies/report-schedule/_index.md) and [Schedule rule card](./../../configure/policies/report-schedule/scheduler-card.md).

## Result

- The summary, the financial report and the logs show revenue, room occupancy and operator work for any period.
- The mail server and the "System SMTP" integration are set up -- Gizmo can send emails.
- The selected reports reach the recipients by email on their own at the set time and frequency.
