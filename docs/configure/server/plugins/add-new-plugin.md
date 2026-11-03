---
title: Adding an integration
order: 1
searchPhrases:
  - Integration
  - SMS
  - Telegram
---

Integrations are external services connected to Gizmo to extend its features, for example SMS sending services, Telegram bots and others.

Integrations are in **Settings -> Server -> Plugins**, in the second block of the screen -- **Integrations**. The first block, **Plugins**, is for something else: it lists the extension files installed on the server.

> [!CAUTION]
>
> Changes to integrations -- adding, deleting, turning on or off -- take effect **after the server restarts**. Until the server is restarted, a new integration does not start working.

## How to add an integration

1. Open **Settings -> Server -> Plugins**.
2. In the **Integrations** block, click <cmd text="Add" />.
3. In the **Select integration type** window, choose the service you need.
4. Fill in its settings -- the fields depend on the selected type.
5. Save and **restart the server**.

## Available types

- **Telegram bot** -- a Telegram messenger integration for user verification and notifications.
- **Custom** -- sends SMS through any SMS gateway with a configurable HTTP request. Use it when your SMS provider is not in the list of ready-made integrations.
- **Twilio** -- SMS messages through the Twilio service.
- **System SMTP** -- email through the system SMTP configuration. The mail server itself is set up separately, in **Settings -> Server -> SMTP settings**.

## Integrations table

The added integrations are shown as a list:

- **Name** -- the name of the integration.
- **Type** -- the service it is connected to.
- **Enabled** -- whether the integration is working or turned off.

## Setting up SMS providers

<table header="row">
  <tr><td>Provider</td><td>What you need for setup</td><td>Features</td></tr>
  <tr><td>**Twilio**</td><td>Account SID, auth token and sender number</td><td>SMS only</td></tr>
</table>

### Custom provider

If your SMS provider is not in the list, choose **Custom** and enter the provider's HTTP request URL. Requirements:

- GET and POST methods are supported;
- all parameters are passed in the URL query string -- parameters in the request body are not supported;
- the URL uses placeholders: `{FROM}` -- the sender, `{TO}` -- the recipient's number, `{MESSAGE}` -- the message text.

Example URLs for popular providers (replace the capitalized values with your own):

| Provider | URL |
|---|---|
| [Vonage (Nexmo)](https://developer.vonage.com/) | `https://rest.nexmo.com/sms/json?api_key=APIKEY&api_secret=APISECRET&from={FROM}&to={TO}&text={MESSAGE}` |
| [Twilio](https://www.twilio.com/docs/sms/api) | `https://TWILIO_ACCOUNT_SID:TWILIO_AUTH_TOKEN@api.twilio.com/2010-04-01/Accounts/TWILIO_ACCOUNT_SID/Messages.json?From={FROM}&To=+{TO}&Body={MESSAGE}` |
| [sms.etc.uz](http://sms.etc.uz/) | `http://sms.etc.uz:8083/http2sms?login=LOGIN&pwd=PASSWORD&CgPN=SENDER&CdPN={TO}&text={MESSAGE}` |

### Android phone as an SMS gateway

Instead of an SMS provider, you can send messages through an ordinary Android phone:

1. Install the [GSM - modem (SMS)](https://play.google.com/store/apps/details?id=com.gsmmodem) app on the phone.
2. In the app, tap **Users** and create a user with a password.
3. Turn the service on and check that its status is **started**.
4. In Gizmo, add a **Custom** integration with this URL:

```
http://PHONEIP:8090/SendSMS?username=USER&password=PASSWORD&phone={TO}&message={MESSAGE}
```

where `PHONEIP` is the IP address of the phone shown in the app, and `USER` and `PASSWORD` are the user and password you created in the app. The phone must be on the same network as the server.
