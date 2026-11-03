---
title: Communication methods
order: 7
searchPhrases:
  - SMTP
  - Email
  - Communication methods
---

This section sets the mail server that Gizmo uses to send emails: registration confirmations, notifications and scheduled reports. Without these settings, no email will be sent from the system.

The section opens in **Settings -> Server -> SMTP settings**.

## Fields

-  **Enable** -- turns email in Gizmo on or off. While it is off, the other fields have no effect.

-  **SMTP Host** -- the address of the mail server that sends the emails.

-  **SMTP Port** -- the port of this server. The default is **465**, the port for a secure connection.

-  **SMTP Security** -- how the connection is encrypted: **No** (no encryption), **SSL** or **STARTTLS**. The default is **SSL**.

-  **Reply to address** -- the address the recipient sees in the "Reply to" field. Guests' replies to the club's emails go to this address.

-  **SMTP Authentication** -- turn it on if the mail server requires you to sign in before it accepts an email. Most external mail services require it. When it is on, the **Login** and **Password** fields of the mail account appear.

Click <cmd text="Save"/> to apply the changes or <cmd text="Cancel"/> to discard them.

## Example: Gmail

| Field | Value |
|---|---|
| **Enable** | on |
| **SMTP Host** | `smtp.gmail.com` |
| **SMTP Port** | `465` |
| **SMTP Security** | SSL |
| **SMTP Authentication** | on |
| **Login** | your Gmail address |
| **Password** | a Google [app password](https://myaccount.google.com/apppasswords), not your account password. App passwords are available only when 2-Step Verification is turned on |
| **Reply to address** | the same Gmail address |

**"Username and password not accepted" error:**

- check that **Login** and **Reply to address** are the same address;
- create a new app password and paste it again;
- restart Gizmo Server after changing the settings.

## Why you need it

The server configured here is used by the **System SMTP** integration -- the one Gizmo sends email through. If the integration is added but SMTP is not configured, emails will not be sent: the integration takes its settings from here and does not store its own.

The order is: first fill in this section, then add the System SMTP integration in the **Plugins** section -- see [Plugins](./plugins/_index.md).
