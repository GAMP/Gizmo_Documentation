---
title: How to connect to the server via VPN
order: 2.5
---

To keep an eye on the club from home, you need to open Gizmo Manager on your home PC. If you cannot forward a port on the club's router (for example, the provider gives you a private IP address) or you do not know how to do it, a VPN will do: it joins your home PC and the club server into one virtual network.

Any tunneling app works -- for example, ZeroTier, Tailscale or ngrok. Below is **ZeroTier**, an option popular with Gizmo customers.

> [!WARNING]
>
> Gizmo support is not responsible for the availability and operation of these services and does not help with setting them up. They are given only as an example.

> [!IMPORTANT]
>
> The app must always be running both on the server and on the PC you connect from. Do not give outsiders access to the network you create -- it can be used to reach the club's data.

## Set up ZeroTier

**On the server** (or on the administrator's PC, if Gizmo Server is installed on it):

1. [Download ZeroTier](https://download.zerotier.com/dist/ZeroTier%20One.msi), install it and start it from the Start menu. No window opens -- this is normal.
2. Open [my.zerotier.com](https://my.zerotier.com/), sign in (for example, with Google) and click **Create a Network**.
3. Open the network you created and copy its ID.
4. In the Windows tray, click the ZeroTier icon, turn on **Start UI at Login** and choose **Join New Network...**.
5. Paste the network ID and click **Join**.

**On the PC you connect from:**

1. Install and start ZeroTier.
2. In the tray, click the ZeroTier icon, turn on **Start UI at Login**, choose **Join New Network...**, paste the same network ID and click **Join**.

**Authorize both PCs in the network:**

1. Open the network in your [ZeroTier account](https://my.zerotier.com/) and wait until both devices appear in the list. If one of them is missing, wait a minute and refresh the page.
2. Check both devices and click **Authorize**.
3. After a minute, refresh the page -- the devices get internal IP addresses.
4. Find the server: compare the **Address** field in the list with the **My Address** value in ZeroTier on the server (tray -> ZeroTier icon). Copy the server's IP address from the **Managed IPs** field.

## Open Gizmo Manager

On the PC you connect from, open `http://<server IP in the VPN>/apps/manager/signin` in a browser, for example `http://10.147.17.25/apps/manager/signin`. If a non-standard port is set in the server's network settings, add it after the IP, separated by a colon.

If the sign-in page opens, the connection works. If not, check that the VPN app is running on both PCs and that Gizmo Server is running, and repeat the steps.

To open Gizmo Manager like a regular program, without the address bar, see [Gizmo Manager as an App](./../gizmomanager-as-an-app.md).

## Result

Your home PC and the club server are in one virtual network, and Gizmo Manager opens from anywhere with internet access.

Another way to get access from the internet is port forwarding on the router, see [Port forwarding -- what it is and why you need it](./../../articles/port-forwarding.md).
