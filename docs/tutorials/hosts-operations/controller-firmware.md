---
title: How to update or restore controller firmware
order: 3
---

You can update the [Gizmo HDMI Controller](./../../articles/gizmo-hdmi-controller.md) firmware through its web interface. If you have no access to the web interface -- you forgot the password or the IP address -- you can restore the firmware by connecting the controller to a PC over USB.

## Updating the firmware

1. Download the [firmware archive](https://www.gizmopowered.net/downloads/HDMI_firmware.zip).
2. Open the controller's web interface in a browser -- at its IP address in the club network.
3. Go to the **OTA** section.
4. Click **Select a file** and choose the firmware file from the downloaded archive.
5. Check that the right file is selected and click **Update Firmware**.

After the firmware is installed, the controller restarts.

## Restoring the firmware

Use this method if you forgot the controller's password or IP address, or the web interface does not open. Restoring completely erases the controller's memory.

> [!WARNING]
>
> Do not disconnect the controller from the PC while erasing and flashing are in progress. If you interrupt the process, the controller may stop accepting firmware.

1. Connect the controller to the PC with a Type-C cable -- without adapters or hubs, directly to a USB port on the back of the system unit (on the motherboard).
2. Download and unpack the [CP210x driver for Windows](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip).
3. Open **Device Manager**, find **Unknown serial port**, right-click it and choose **Update driver -> Browse my computer for drivers**. Specify the folder with the unpacked driver.
4. Make sure the device has no exclamation mark (an installation error), and note its COM port number.
5. Download and unpack the [firmware archive](https://www.gizmopowered.net/downloads/HDMI_firmware.zip).
6. In the firmware folder, run `Erase.bat` -- it erases the controller's memory.
7. After erasing, run `Flash.bat`, enter the COM port number and press **Enter**.
8. Wait until flashing finishes and disconnect the controller from the PC.

After restoring, you need to connect the controller to the club network again -- see step 3 of [How to add a console or another gaming station](./add-terminal.md).

If you cannot restore the controller, [contact support](./../../about/support.md).
