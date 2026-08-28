---
title: Gizmo Server
order: 1
---

**Gizmo Server** is the main component of **Gizmo**.

## Gizmo Architecture

![](./gizmo-server.png "Gizmo arch"){width=7048px height=3208px}

### Gizmo Server

Gizmo Server have two versions:

-  Cloud version (SaaS)

-  Self-hosted version



Self-hosted version has three variants of installation:

-  Gizmo Server for Windows

-  Gizmo Server for Linux

-  Gizmo Server for Docker



### Databases

For Self-hosted solution there are two variants of databases:

-  Postgres (version 15 and above)

-  Microsoft SQL Server (version 2017 and above)

> [!NOTE]
> 
> For the Self-hosted version, the database can be installed and hosted either together with Gizmo Server (on the same server) or separately from it (including on an external network).

> [!NOTE]
> 
> For the Cloud version, a PostgreSQL database is used.



### Minimum server system requirements for the Self-hosted version

<tabs>

<tab name="Gizmo Server">

**Windows**

CPU: Intel Core i3 8th gen

RAM: 8 Gb DDR4

Storage: 1 Gb SSD



**Linux**

CPU: Intel Core i3 8th gen

RAM: 4 Gb DDR4

Storage: 1 Gb SSD



**Docker** (Linux version)

CPU: Intel Core i3 8th gen

RAM: 2 Gb DDR4

Storage: 1 Gb SSD

</tab>

<tab name="Database">

**Windows**

CPU: Intel Core i3 8th gen

RAM: 8 Gb DDR4

Storage: 30 Gb SSD NVMe



**Debian**

CPU: Intel Core i3 8th gen

RAM: 8 Gb DDR4

Storage: 30 Gb SSD NVMe



**Docker** (Linux version)

CPU: Intel Core i3 8th gen

RAM: 4 Gb DDR4

Storage: 30 Gb SSD NVMe

</tab>

<tab name="Gizmo Server & Database">

**Windows**

CPU: Intel Core i3 8th gen

RAM: 16 Gb DDR4

Storage: 40 Gb SSD NVMe



**Debian**

CPU: Intel Core i3 8th gen

RAM: 8 Gb DDR4

Storage: 40 Gb SSD NVMe



**Docker** (Linux version)

CPU: Intel Core i3 8th gen

RAM: 4-8 Gb DDR4 (8 Gb is recommended for 50+ connected clients)

Storage: 40 Гб SSD NVMe

</tab>

</tabs>