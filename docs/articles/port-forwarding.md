---
title: Port forwarding -- what it is and why you need it
order: 5
---

To reach Gizmo Server from the internet -- for example, to open Gizmo Manager from home or to accept online payments -- you need to set up port forwarding on the club's router. This article explains what port forwarding is, when it works and how to set it up.

## What is a port

A **port** is a number from 0 to 65535 that tells a computer which application should receive an incoming network request. Many numbers are reserved for specific protocols:

-  **80** -- web servers over http, including Gizmo Server by default;

-  **443** -- the secure https protocol;

-  **3389** -- Windows Remote Desktop.

Think of a computer as an apartment building where many services live: the IP address is the building's address, and the port is the apartment number. Without the apartment number, a message will not reach the right service.

Gizmo Server protocols and ports are set in **Settings -> Server -> Network** -- see [Network](./../configure/server/network.md).

## What is port forwarding

Usually all devices in a club go online through a router. Inside the network each device has its own local IP address, but from the outside only the router's single external address is visible. When a request comes in from the internet, the router does not know which device to pass it to, and blocks it by default.

**Port forwarding** is a router setting that tells it: "send requests that arrive on this port to this device inside the network". For example: all requests to external port 443 go to the PC running Gizmo Server, port 443.

## Port forwarding needs a public IP address

Port forwarding works only if the router has a **public** IP address -- a unique address on the internet that can be reached directly.

Many internet providers assign **private** addresses instead (often called CGNAT): there is another provider router between yours and the internet, and outside requests never reach your equipment.

How to check: compare the external IP shown by a site such as [whatismyipaddress.com](https://whatismyipaddress.com/) with the address your router gets from the provider (you can see it in the router's web interface). If the addresses differ, the address is most likely private.

If your address is private:

-  order a public IP address from your provider;

-  or connect through a VPN or a tunnel: ZeroTier, Tailscale, ngrok and similar services.

## How to forward a port

If you have a public IP address or dynamic DNS (DDNS) set up, open the router's web interface and find the port forwarding feature. It may be called **Virtual Server**, **Port Forwarding**, **NAT** and so on. The steps depend on the router model -- here are guides for models often found in clubs:

-  [TP-Link](https://www.tp-link.com/us/support/faq/1379/)

-  [ASUS](https://www.asus.com/support/faq/1037906/)

-  [D-Link](https://www.dlink.com/en/support/faq/routers/mydlink-routers/dir-880l/how-do-i-configure-port-forwarding-on-my-router)

-  [MikroTik](https://help.mikrotik.com/docs/spaces/ROS/pages/3211299/NAT) -- see the Destination NAT section

-  [Ubiquiti](https://www.portforwardinghub.com/routers/edgerouter-port-forwarding/)

The router model is usually printed on a sticker on the bottom of the case or shown in its web interface.

> [!WARNING]
>
> If Gizmo Server runs in Docker, it ignores the port settings from Gizmo Manager and uses the ports specified when the container was created. Forward those ports.

## Why port forwarding may not work

-  **Wrong settings** -- check the external port, the server's local IP address and its port.

-  **Firewall** -- Windows Firewall on the server or the router's protection blocks incoming traffic on this port. Allow the traffic, or turn the firewall off temporarily to check whether it is the cause.

-  **Private IP address** -- see [above](#port-forwarding-needs-a-public-ip-address).

> [!NOTE]
>
> Gizmo support does not set up port forwarding on customers' routers. If it does not work, refer to the router manufacturer's documentation or contact your internet provider.
