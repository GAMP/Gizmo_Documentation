---
title: Network
order: 5
---

**IMAGE: the Settings -> Server -> Network page with the network interface settings and the connection rules table**

This section sets up the network for Gizmo Server:

- network interface settings;
- connection rules.

## Network interface settings

**Network interface settings** are the Gizmo Server settings that define how the server and Gizmo Manager can be reached over the network.

These settings are available:

- access protocol and ports;
- host name;
- PFX certificate;
- behind a reverse proxy (flag).

### Access protocol and ports

Gizmo Server and Gizmo Manager can be reached over http, https or both, with a separate port for each protocol.

By default, both http and https are selected, on ports 80 and 443.

Client PCs (Gizmo Client) connect to the server over standard TCP, and also over ws and wss.

> [!WARNING]
>
> If Gizmo Server runs in Docker, the server ignores the port settings -- this is how Docker containers work.

### Host name

**Host name** is the domain name at which your server can be reached on the network.

The default value is "gizmo.local" (access only on the local network).

> [!WARNING]
>
> If Gizmo Server runs in Docker, Gizmo Manager and Gizmo Server cannot be reached at the default domain name (gizmo.local). Gizmo Server keeps using the ports set when the container was created -- this is how Docker containers work.

> [!WARNING]
>
> The host name must be set for remote view and remote control to work.

Allowed values:

- the local IP address of the server;
- the local domain name of the server;
- the public IP address of the server;
- the public domain name of the server.

#### Local IP address of the server

**Local IP address of the server** is the address of the computer where Gizmo Server is installed.

The local address must belong to one of these networks:

- 10\.0.0.0/8
- 192\.168.0.0/16
- 172\.16.0.0/12

With the local address, you can reach the server only inside your local network.

#### Local domain name of the server

**Local domain name of the server** is a domain name for the local IP address of Gizmo Server, set up in advance on your DNS server -- usually your local router does this.

> [!CAUTION]
>
> If you set a local domain name for the server, the devices with Gizmo Client and the devices that open Gizmo Manager on the local network must use your DNS server as their DNS server -- the one where you mapped the domain name to the IP address (usually the IP address of your router).

> [!WARNING]
>
> A common mistake: the computer with Gizmo Client uses an external DNS (for example, 8.8.8.8), the connection to the Gizmo server has not been changed, and Gizmo Client tries to connect by the default name (gizmo.local), which the external DNS (8.8.8.8) knows nothing about. There are two options:
>
> - set up the connection by IP;
> - switch the DNS on the computer with Gizmo Client from the external one to the internal one.

#### Public IP address of the server

**Public IP address of the server** is the public IP address at which your Gizmo Server can be reached.

If Gizmo Server is installed locally, its public IP address is the public (external) address of your router. In this case, set up port forwarding to Gizmo Server on the router in advance -- see [Port forwarding -- what it is and why you need it](./../../articles/port-forwarding.md). If the router has a private (non-public) IP address and port forwarding is not possible, connect to the server via VPN -- see [How to connect to the server via VPN](./../../tutorials/operations/vpn-access.md).

If Gizmo Server is installed on an external VPS or a cloud provider's server, its public IP address is the address at which it can be reached from the internet.

#### Public domain name of the server

**Public domain name of the server** is a domain name bought in advance and mapped to the public IP address of the server in your domain registrar's control panel.

#### Behind a reverse proxy

**Behind a reverse proxy** is a flag to turn on when network access to the Gizmo server goes through a third-party proxy, such as nginx.

### PFX certificate

**PFX certificate** is an SSL certificate in PFX format, needed for https. By default, a built-in self-signed certificate is used.

Here you can install your own SSL certificate.

To choose and upload a certificate, click <cmd text="Browse" />.

To go back to the self-signed certificate, click <cmd text="Clear" />.

> [!WARNING]
>
> Gizmo Server must be restarted to apply a new certificate.

## Connection rules

This block is at the bottom of the page. It is a table with two columns -- **Feature** and **Enable** -- that lists features you turn on with a switch.

- **Auto discovery** -- new client PCs on the club network connect to the server automatically. Without it, client PCs do not connect to the server on their own.
- **Registered only** -- only hosts registered in the system can connect.

  > [!WARNING]
  >
  > Important: when this option is on, the server automatically rejects the connection of a new computer with the client installed. To register the client, [add it manually](./../../usage/gizmo-manager/stations/computers/computer-card.md) or turn the option off for a while.
- **Restore host name** -- when on, Gizmo changes the device name in Windows to the computer name set in the host settings in Gizmo Manager.
