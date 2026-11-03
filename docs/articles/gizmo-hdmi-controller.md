---
title: Gizmo HDMI Controller
order: 7
---

**Gizmo HDMI Controller** is a device that lets Gizmo control any HDMI device: a game console, a TV or a monitor. It is most often installed at console stations, so that the screen turns on when a guest starts a session and turns off when their time runs out.

In Gizmo Manager, controllers are added in **Hosts -> Controllers** and linked to endpoints -- see [How to add a console or another gaming station](./../tutorials/hosts-operations/add-terminal.md) and [Controllers](./../usage/gizmo-manager/stations/controllers/_index.md).

## Specifications

- ESP32 controller.
- HDMI input and output ports (type A).
- 100 Mbps Ethernet port with passive PoE support, 12--24 V.
- 2.4 GHz Wi-Fi (b/g/n).
- 2 GPIO ports -- for an addressable LED strip and/or a relay.
- USB Type-C port for power -- from a power supply of at least 5 V, 2 A.
- Power indicator, status LED and reset button.

> [!NOTE]
>
> The power supply is not included.

## Connection

- **HDMI** -- you connect one source device (for example, a console) and one output device (a TV or a monitor) to the controller: the signal passes through the controller.
- **Network** -- via Ethernet (with passive PoE you do not need Type-C power) or via Wi-Fi. We recommend Ethernet: the connection is more stable.
- **GPIO** -- for external devices: an addressable RGB strip, a single-channel 5 V relay module or your own devices.

## What it can do

- Block and pass the HDMI signal between the source and the screen.
- Send CEC commands to both the source and the screen: power on and off, input switching, mute and so on. The commands work only if both devices support CEC.
- Control an addressable LED strip.
- Turn a relay on and off.
- Detect when HDMI ports and Ethernet are disconnected and react: report to the server, cut the HDMI signal.

**LED strip color by the guest's remaining time:**

| Color | Time left |
|---|---|
| Green | More than 30 minutes |
| Yellow | 20--30 minutes |
| Red | 10--20 minutes |
| Blinking red | Less than 10 minutes |

## Example scenarios

- Turn on the TV when a guest starts a session at a console station.
- Cut the HDMI signal and turn off the console when the guest's time runs out.
- Warn the guest with the LED strip that their time is running out.
- Turn off the lights in the area through a relay when the guest's time runs out.

## How to control it

- Through the built-in Gizmo integration.
- Through the device's HTTP API.
- Through the device's WebSocket.

## Maintenance

How to update the firmware or restore the controller if you forgot the password or IP address is described in [How to update or restore controller firmware](./../tutorials/hosts-operations/controller-firmware.md).

## How to buy

To order the controller, [contact us](./../about/support.md).
