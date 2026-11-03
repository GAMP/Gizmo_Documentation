---
title: User agreement
order: 0.5
aliases:
  - path: tutorials/user-agreement
    moved: "2026-10-19T14:05:24Z"
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
      How to set up a user agreement for your customers
    </h2>
    <div class="gx-meta">
      <span>3–5 minutes</span>
      <span class="gx-meta-sep">/</span>
      <span class="gx-meta-level">Low difficulty</span>
    </div>
    <p class="gx-desc">Where to turn on the agreement, how to format its text and how to make it mandatory for the customer at sign-up.</p>
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

A user agreement sets out the terms on which the club provides its services: the guest sees it in Gizmo Client when signing in and, if the agreement is mandatory, does not get access to the shell until they confirm their consent. An agreement is not only for legal documents -- it is also a convenient way to show the guest the club rules.

Clubs usually create two or more agreements -- for example, "Club rules" and "Privacy agreement". Agreements are shared by the whole organization: all active agreements are shown in all branches.

## Step 1. Create an agreement

1. Open **Settings -> Organization -> User Agreements**.
2. Click **Create User Agreement** in the corner of the page -- the card of a new agreement opens.

**IMAGE: Settings -> Organization -> User Agreements page with the Create User Agreement button**

## Step 2. Fill in the name and text

1. Enter the agreement name -- for example, "Club rules".
2. Enter the agreement text. The text supports HTML markup: to paste ready-made HTML code, switch to code view with the <icon code="code-xml" /> button.

> [!TIP]
>
> HTML lets you format the agreement as a full web page -- with formatting and in the club's style. You can format the text in any online HTML editor and then paste the resulting HTML code into the agreement text field.

## Step 3. Choose the display rule

In the **Consent** item, choose how the agreement is shown to the guest in Gizmo Client:

- **Required** -- the agreement is shown at sign-in, and the guest does not get access to Gizmo Client features until they confirm their consent. It is not shown again at later sign-ins.
- **Optional** -- the agreement is shown at sign-in, but the guest can skip it and get access to Gizmo Client features right away. It is not shown again at later sign-ins.
- **Always Show** -- the agreement is shown every time the guest signs in.

## Step 4. Turn on the agreement and save

1. Check that the **Status** toggle in the card is on -- otherwise the agreement is not shown in Gizmo Client.
2. Save the card.

If there are several agreements, set the order in which they are shown: in the table on the **User Agreements** page, drag the row by the drag handle <icon code="grip-vertical" /> on the left. In the same table, you can quickly turn the display of an agreement on or off with the **Enable** column, and open its card by double-clicking the row.

> [!NOTE]
>
> To delete an agreement, open its card and click **Delete** in the bottom right corner.

## Result

- When signing in to Gizmo Client, the guest sees all enabled agreements in the set order.
- A required agreement must be accepted to start using the shell; an optional one can be skipped; an agreement with the **Always Show** rule appears at every sign-in.

All fields are described in [User agreements](./../../configure/organization/user-agreements/_index.md) and [User agreement card](./../../configure/organization/user-agreements/user-agreement-card.md) in the Configure section.

