---
title: How to turn consoles on and off with smart relays and sockets
order: 2.5
---

You can turn the screen or power of a console seat on and off right from Gizmo Manager -- through a smart relay or a network-controlled socket. The guest does not have to wait for the operator, and the operator does not have to walk up to the seat.

For this, Gizmo Server runs server scripts, and the scripts send a command to the device. This guide explains how it works and how to set up three kinds of devices: **Sonoff** relays, controllers with **Tasmota** firmware (for example, Enestech) and **EnerGenie** sockets.

> [!TIP]
>
> If you need to control the HDMI signal, an LED strip and CEC commands, use the [Gizmo HDMI Controller](./../../articles/gizmo-hdmi-controller.md) -- it connects to Gizmo without scripts.

## How power scripts work

The server's `batch` folder contains scripts that Gizmo Server runs on actions with gaming stations:

- `PowerOn.bat` -- when you click **Turn On** for a seat in Gizmo Manager;
- `PowerOff.bat` -- when you click **Shut Down**.

Gizmo passes the seat number to the script -- in the script, it is available as `%1`. The script uses this number to decide which device to control.

The default folder on Windows is `C:\Program Files\NETProjects\Gizmo Server\batch`. On Linux and in Docker, `.sh` files are used instead of `.bat`.

> [!IMPORTANT]
>
> The numbers in the scripts must match the numbers of the seats (endpoints) in Gizmo -- otherwise the command goes to the wrong device. For how to add a console seat, see [How to add a console or another gaming station](./add-terminal.md).

The server must always see the devices over the network. If the devices are in another subnet, set up routing on the router and allow the traffic in the firewall.

## Sonoff relays

Any Sonoff relay that supports **DIY** mode works -- see the list in the [Sonoff documentation](https://help.sonoff.tech/docs/puU2rU4w). The wiring diagram for a relay inserted into the power line:

**IMAGE: Wiring diagram of a Sonoff relay inserted into the power line of a console or TV**

### Step 1. Prepare the utilities on the server

1. Download the utilities archive: **[LINK: Sonoff utilities archive]**.
2. Copy `PowerOn.bat`, `PowerOff.bat` and `SonoffPowerManager.exe` to the server's `batch` folder. If files with these names are already there, replace them.
3. Put the `tool_01DIY85(3.3.0).exe` utility in any convenient place on the server.

**IMAGE: Gizmo Server batch folder with PowerOn.bat, PowerOff.bat and SonoffPowerManager.exe**

### Step 2. Switch the relay to DIY mode

> [!IMPORTANT]
>
> If the relay was connected to the eWeLink app before, first remove it from the device list in the app.

1. Turn on the relay's power.
2. Hold the pairing button for more than 5 seconds.

   **IMAGE: Pairing button on the Sonoff relay case**

3. The indicator starts blinking continuously -- the relay is in pairing mode.

   **IMAGE: Animation of the Sonoff relay indicator blinking continuously in pairing mode**

4. On a phone or PC, open the list of Wi-Fi networks and connect to the **ITEAD-XXXXXXXXXX** access point with the password `12345678`.

   **IMAGE: List of Wi-Fi networks with the ITEAD-XXXXXXXXXX access point**

5. Open `http://10.10.7.1` in a browser. If the page does not open, the relay has already connected to Wi-Fi or eWeLink -- reset it to factory settings (see below) and repeat the steps.

   **IMAGE: Browser with the address http://10.10.7.1 and the Sonoff relay Wi-Fi setup page**

6. On the page that opens, enter the **SSID** (the name of the club's Wi-Fi network) and the password of the network the relay should connect to.

### Step 3. Find the relay's deviceid

1. On the server, run `tool_01DIY85(3.3.0).exe` and wait until the relay appears in the device list.
2. Write down the **deviceid** -- it is in the first column, highlighted in blue.
3. Test the relay with the **ON** and **OFF** buttons: if the console screen turns on and off, everything is set up correctly.

**IMAGE: DIY tool window with the relay in the device list, the deviceid column highlighted and the ON and OFF buttons**

If the relay is not in the list, check that the server and the relay are in the same network, and repeat step 2. You can find the relay's IP address in the router settings.

### Step 4. Set up the scripts

Open `PowerOn.bat` in a text editor -- right-click -> **Edit**. Do not open the file with a double-click: that just runs the script.

```
@echo off
set WORKING_DIRECTORY="%~dp0
set host1=192.168.63.101:8081
set deviceid1=1001ee63f1
@echo off
if %1==101 set host=%host1% & set deviceid=%deviceid1%
%WORKING_DIRECTORY%SonoffPowerManager.exe" %deviceid% %host% 1
```

Replace the values:

- `192.168.63.101:8081` -- the IP address and port of your relay;
- `1001ee63f1` -- the relay's deviceid from step 3;
- `101` in the `if %1==101` line -- the seat (console) number in Gizmo.

Copy all the code to `PowerOff.bat` and replace `1` at the end of the last line with `0` -- this is the shutdown command.

**If you have several relays**, add a separate `host` and `deviceid` and a separate `if` line for each one:

```
@echo off
set WORKING_DIRECTORY="%~dp0
set host1=192.168.63.101:8081
set host2=192.168.63.102:8081
set deviceid1=1001ee63f1
set deviceid2=1001ee63f2
@echo off
if %1==101 set host=%host1% & set deviceid=%deviceid1%
if %1==102 set host=%host2% & set deviceid=%deviceid2%
%WORKING_DIRECTORY%SonoffPowerManager.exe" %deviceid% %host% 1
```

### How to reset the relay to factory settings

1. Install the **eWeLink** app on your phone.
2. Hold the relay button for 5 seconds to turn on compatible pairing mode.
3. In the app, tap **Add** -> **More Options** -> **Compatible Pairing** -> **Next**.
4. Enter the SSID and password of the Wi-Fi network and tap **Next** -- the relay is added to the app.
5. Remove the relay from the app -- it resets to factory settings.

## Controller with Tasmota firmware (Enestech)

Controllers on the ESP8266 chip, for example Enestech, can be reflashed with the open Tasmota firmware and controlled with HTTP commands.

### Step 1. Flash the controller

1. Connect the controller to the PC and install the [USB-UART driver](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers) for your Windows.
2. Download the [Tasmotizer](https://github.com/tasmota/tasmotizer/releases) utility.
3. In Tasmotizer, choose the controller's COM port -- its number is shown in **Device Manager**.
4. Check **Save original firmware** -- the original firmware is saved in the program folder, and you can go back to it if something fails.
5. Click **Tasmotize!** and wait until flashing finishes.
6. Restart the controller and check that it has connected to the club's Wi-Fi.

### Step 2. Set up the controller

1. Find the controller's IP address -- in the router's web interface or with a network scanner, for example [Advanced IP Scanner](https://www.advanced-ip-scanner.com/).
2. Open this address in a browser -- the Tasmota web interface opens. The **Toggle** button turns the relay on and off manually.
3. Open **Configuration -> Configure Template** and choose **Generic (18)** in the **Based on** list.
4. For the **GPIO14** pin, choose **Relay** -- this is where the relay that controls the HDMI signal is. Save.

### Step 3. Set up the scripts

1. Put the `curl.exe` utility in the server's `batch` folder if it is not there -- you can download it from [curl.se](https://curl.se/download.html).
2. Open `PowerOn.bat` in a text editor and enter:

```
@echo off
set WORKING_DIRECTORY="%~dp0
set host1=192.168.2.161
if %1==20 set host=%host1%
%WORKING_DIRECTORY%curl.exe" "%host%/cm?cmnd=Power%%20On"
```

- `192.168.2.161` -- the controller's IP address;
- `20` -- the seat number in Gizmo.

For several controllers, add `host2`, `host3` and so on, and an `if` line for each seat.

3. Copy the code to `PowerOff.bat` and replace `On` with `Off` in the last line.

## EnerGenie sockets

The following EnerGenie network sockets are supported:

- [EG-PM2-LAN](https://energenie.com/item.aspx?id=7557) -- Ethernet;
- [EG-PMS2-LAN](https://energenie.com/item.aspx?id=7416) -- Ethernet, surge protection;
- [EG-PMS2-WLAN](https://energenie.com/item.aspx?id=7678) -- Wi-Fi, surge protection;
- [EG-PMS2-LANSW](https://energenie.com/item.aspx?id=7442) -- Swiss sockets, Ethernet, surge protection.

You can control each socket of the device separately -- for example, to turn on the power of a TV, a console or the lights.

1. Connect the EnerGenie to the club network.
2. Download the scripts archive -- **[LINK: energenie.zip]** -- and unpack it to the server's `batch` folder.
3. Open `PowerOn.bat` in a text editor and match seats to sockets: for example, console No. 1 in Gizmo is the first EnerGenie socket, console No. 2 is the second one, and so on.
4. Do the same for `PowerOff.bat`.

## Check that it works

1. Open the **Map** in Gizmo Manager and choose a console seat.
2. Click **Turn On** -- the device should turn on. Then click **Shut Down**.

If nothing happens, check the seat number in the script, the device's IP address and that the server sees the device over the network. For how to control seat power, see [How to turn on, restart and shut down PCs remotely](./power-management.md).
