---
title: Payment method card
order: 1
---

The payment method card opens when you create a new additional payment method. Its type depends on the option you choose after clicking <cmd text="Create Payment Method" />.

<tabs>
  <tab name="Offline">
    **IMAGE: the card of a new offline payment method with the Name, Enabled, Manager and Client fields**
  </tab>
  <tab name="Online">
    **IMAGE: the Payment Providers page with the list of available online payment integrations**

    **IMAGE: the settings card of an online payment provider**
  </tab>
</tabs>

- **Name** -- the name of the payment method shown in the interface. This field is required.
- **Enabled** -- the overall status of the payment method. When it is on, more settings become available:
  - **Manager** -- whether the payment method is available in Gizmo Manager.
  - **Client** -- whether the payment method is available in Gizmo Client.

These fields are used for an **Offline** payment method, which accepts payments without an integration with an external payment service.

To create an online payment method (**Online**), choose that option when you create it. The **Payment Providers** page opens with a list of the available integrations.

Providers that are already added to the system are marked **Already added** and cannot be chosen again. To connect a new provider, click its card and follow the integration setup steps.

## Online provider fields

Besides the general fields (**Name**, **Manager**, **Client**), an online payment method has the settings of the provider itself, such as keys, IDs and passwords. Their values come from your account dashboard of the payment service.

| Provider | Fields |
|---|---|
| Stripe | **Secret key**, **Webhook secret key** |
| OPay | **Public key**, **Private key**, **Merchant ID** |
| Kaspi | **Service ID**, **Refer host** |
| Click.uz | **Service ID**, **Secret key**, **Merchant ID**, **Merchant user ID** |
| BPay QR MIA | **Merchant ID**, **Secret key**, **Callback URL**, **Test environment**, **Point ID**, **QR TTL** (seconds) |
| Bakai | **Token**, **Link TTL** (seconds) |

For step-by-step provider setup, see [How to set up payment methods](./../../../tutorials/sales/register/payment-methods.md).
