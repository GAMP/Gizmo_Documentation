---
title: Taxes & Currency
order: 3
---

**IMAGE: the Settings -> Organization -> Taxes & Currency page with the currency settings, time sale tax and the list of tax rates**

This section sets the organization's currency and taxes.

## Currency settings

Here you set the currency and how it is displayed. The selected currency is used to display transactions in both Gizmo Manager and Gizmo Client.

Two options set how the currency is displayed:

-  the number of digits after the decimal separator;

-  the display format.

The available display formats are:

<table header="row">
<colgroup><col width="48"/><col width="260"/><col width="478"/></colgroup>
<tr>
<td>

\#

</td>
<td>

Display

</td>
<td>

Description

</td>
</tr>
<tr>
<td>

1

</td>
<td>

1000\.00

</td>
<td>

decimal separator -- period

thousands separator -- none

</td>
</tr>
<tr>
<td>

2

</td>
<td>

1 000.00

</td>
<td>

decimal separator -- period

thousands separator -- space

</td>
</tr>
<tr>
<td>

3

</td>
<td>

1,000.00

</td>
<td>

decimal separator -- period

thousands separator -- comma

</td>
</tr>
<tr>
<td>

4

</td>
<td>

1\.000,00

</td>
<td>

decimal separator -- comma

thousands separator -- period

</td>
</tr>
<tr>
<td>

5

</td>
<td>

1000,00

</td>
<td>

decimal separator -- comma

thousands separator -- none

</td>
</tr>
<tr>
<td>

6

</td>
<td>

1 000,00

</td>
<td>

decimal separator -- comma

thousands separator -- space

</td>
</tr>
</table>

## Time sale tax

Here you set the tax percentage applied when per-minute time is sold. The setting is used to calculate the tax and is taken into account:

-  [in the order card](./../../usage/gizmo-manager/tochka-prodazh/zakazy/kartochka-zakaza.md);

-  [in the financial report](./../../usage/gizmo-manager/otchety/finansovyy.md).

> [!NOTE]
> 
> This setting is used for statistics only.

## Taxes

Here you create tax rates for products (for example, VAT). A rate is applied on a sale if the product card is linked to it.

To add a rate, click <cmd text="Create Tax"/> in the corner of the subsection and fill in the **Name** and **Value** columns in the new row. Values are percentages, in the format `5.20`.

To delete a rate, click the trash icon next to it.

To change the order of the rates in the list, hold the drag handle <icon code="grip-vertical" /> to the right of a value and drag it to the position you need.

> [!NOTE]
> 
> This setting is used for statistics only.
