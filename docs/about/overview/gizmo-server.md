---
title: Gizmo Server
order: 1
---

**Gizmo Server** is the main component of **Gizmo** and the core of the whole system: it processes operations, stores customer data and manages the other components. Gizmo Manager, all gaming PCs with Gizmo Client and Gizmo Companion connect to it.

## <icon code="info" /> In short

| **Where it runs** | On the club server: Windows, Linux or Docker |
|---|---|
| **Who uses it** | The club administrator -- during installation and maintenance |
| **What it needs** | A PostgreSQL or Microsoft SQL Server database |

## <icon code="cloud" /> Gizmo Server versions

Gizmo Server comes in two versions:

- **Self-hosted version** -- the server runs on your own hardware.
- **Cloud version** (in development) -- see the [Cloud version](./../../instalation/gizmo/cloud.md) article.

You can install the self-hosted version in three ways:

- Gizmo Server for Windows
- Gizmo Server for Linux
- Gizmo Server for Docker

## <icon code="database" /> Databases

The database is the digital archive where Gizmo stores information about the club's work: guest profiles, account balances, the cost of gaming time, purchase history and much more.

The self-hosted version works with one of two databases:

- PostgreSQL (version 15 and above)
- Microsoft SQL Server (version 2017 and above)

> [!NOTE]
>
> The database is not installed together with Gizmo Server -- you need to install it separately. It can run on the same server as Gizmo Server or separately from it, including on an external network. See the [Databases](./../../instalation/gizmo/self-hosted/databases/_index.md) article.

## <icon code="cpu" /> Minimum server system requirements for the self-hosted version

<tabs>
  <tab name="Gizmo Server">
    **Windows**

    - **CPU** -- Intel Core i3, 8th generation.
    - **RAM** -- 8 GB DDR4.
    - **Disk** -- 1 GB SSD.



    **Linux**

    - **CPU** -- Intel Core i3, 8th generation.
    - **RAM** -- 4 GB DDR4.
    - **Disk** -- 1 GB SSD.



    **Docker** (Linux version)

    - **CPU** -- Intel Core i3, 8th generation.
    - **RAM** -- 2 GB DDR4.
    - **Disk** -- 1 GB SSD.
  </tab>
  <tab name="Database">
    **Windows**

    - **CPU** -- Intel Core i3, 8th generation.
    - **RAM** -- 8 GB DDR4.
    - **Disk** -- 30 GB SSD NVMe.



    **Linux**

    - **CPU** -- Intel Core i3, 8th generation.
    - **RAM** -- 8 GB DDR4.
    - **Disk** -- 30 GB SSD NVMe.



    **Docker** (Linux version)

    - **CPU** -- Intel Core i3, 8th generation.
    - **RAM** -- 4 GB DDR4.
    - **Disk** -- 30 GB SSD NVMe.
  </tab>
  <tab name="Gizmo Server and database">
    **Windows**

    - **CPU** -- Intel Core i3, 8th generation.
    - **RAM** -- 16 GB DDR4.
    - **Disk** -- 40 GB SSD NVMe.



    **Linux**

    - **CPU** -- Intel Core i3, 8th generation.
    - **RAM** -- 8 GB DDR4.
    - **Disk** -- 40 GB SSD NVMe.



    **Docker** (Linux version)

    - **CPU** -- Intel Core i3, 8th generation.
    - **RAM** -- 4--8 GB DDR4 (for 50+ connected clients we recommend 8 GB).
    - **Disk** -- 40 GB SSD NVMe.
  </tab>
</tabs>

## <icon code="book-open" /> Learn more

- [Quick install](./../../instalation/quick-install.md) -- installing and setting up Gizmo for the first time, step by step.
- [Backup](./../../configure/server/backup.md) -- automatic database copies.
- [How to restart the Gizmo server](./../../tutorials/operations/server-restart.md)
