---
title: Gizmo Companion
order: 2
---

**Gizmo Companion** is a bridge app that connects the club's POS and retail hardware to the Gizmo server. A PC with Companion installed becomes a point of sale.

## <icon code="info" /> In short

| **Where it runs** | On every PC used for sales (usually the administrator's PC) |
|---|---|
| **Who uses it** | It runs in the background: the operator sells in Gizmo Manager, and Companion sends the commands to the hardware |
| **What it needs** | A connection to [Gizmo Server](./../gizmo-server.md) and a link to a register in Gizmo Manager |

## <icon code="plug" /> Why you need Gizmo Companion

Gizmo Companion handles the communication between the Gizmo server and the club's POS and retail hardware:

- **card terminals** -- to accept card payments;
- **POS peripherals** -- cash drawers, barcode scanners, smart card readers and receipt printers.

**IMAGE: Diagram of Gizmo Companion connecting Gizmo Server to POS hardware -- card terminal, cash drawer, barcode scanner, receipt printer**

> [!WARNING]
>
> Without Gizmo Companion installed and set up, Gizmo cannot send commands to the POS hardware, so card payments and receipt printing will not be available.

## <icon code="book-open" /> Learn more

- [How to connect Companion and set up a register](./../../../tutorials/sales/register/companion-and-register.md) -- installing it and linking it to a register step by step.
- [Companion](./../../../configure/server/companions/_index.md) -- Companion settings in Gizmo Manager.
