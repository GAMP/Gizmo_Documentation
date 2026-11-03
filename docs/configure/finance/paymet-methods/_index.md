---
title: Payment methods
order: 0.9
---

**IMAGE: the Settings -> Finances -> Payment methods page with the standard and additional payment methods**

This section sets the payment methods available in Gizmo Manager and Gizmo Client.

## Standard payment methods

Standard payment methods are built into the system and cannot be deleted. For each of them you can set where it is available:

-  **Enabled** -- the overall status of the payment method in the system.

-  **Manager** -- whether the payment method is available in Gizmo Manager.

-  **Client** -- whether the payment method is available in Gizmo Client.

The standard payment methods are:

-  **Cash** -- cash.

-  **Credit Card** -- a bank card.

-  **Deposit** -- payment from the user's deposit.

-  **Points** -- payment with loyalty points.

**Use payment terminal for credit card payments** -- when on, card payments go through the connected payment terminal. The terminal has two modes:

-  **Offline** -- the terminal works offline.

-  **Online** -- the terminal works online.

## Additional payment methods

Here you set up custom payment methods. Online payment providers are also connected here, as payment-method integrations.

The table shows all additional payment methods you have created. Each has the same settings as the standard ones: **Enabled**, **Manager**, **Client**. To change the display order, drag a method by the drag handle <icon code="grip-vertical" />. To delete a payment method, click the trash icon.

To create a new payment method, click <cmd text="Create Payment Method"/>. The fields are described in [Payment method card](./payment-method-card.md).

## Online deposit settings for the shell

Here you set up how users top up their deposit from the Gizmo Client interface.

-  **Allow custom top-up amount** -- when on, the user can enter any top-up amount within the set limits.

-  **Minimum amount** -- the smallest amount a user can top up at a time.

-  **Maximum amount** -- the largest amount a user can top up at a time.

-  **Presets** -- fixed top-up amounts that the user sees as quick-select buttons. To add a preset, click <cmd text="Add Preset"/>, enter the amount and click <cmd text="Done"/>.

## Others

-  **Success payment URL** -- the page the user is redirected to after a successful online payment.

-  **Failed payment URL** -- the page the user is redirected to after a failed online payment.
