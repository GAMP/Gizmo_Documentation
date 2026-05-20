---
order: 1
title: Gizmo Server
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

Для Локальной версии (Self-hosted решение) могут быть использованы следующие версии баз данных:

-  Postgres (версии 15 и выше)

-  Microsoft SQL Server (версии 2017 и выше)

> [!NOTE]
> 
> Для Локальной версии База данных может быть установлена и располагаться как вместе с Gizmo Server (на одном сервере), так и отдельно от него (в том числе и во внешней сети).

> [!NOTE]
> 
> Для Облачной версии используется База данных Postgres.



### Минимальные системные требования сервера для локальной версии

<tabs>

<tab name="Gizmo Server">

**Windows**

Процессор: Intel Core i3 8th gen

Память: 8 Гб DDR4

Диск: 1 Гб SSD



**Linux**

Процессор: Intel Core i3 8th gen

Память: 4 Гб DDR4

Диск: 1 Гб SSD



**Docker** (установленный на Linux)

Процессор: Intel Core i3 8th gen

Память: 2 Гб DDR4

Диск: 1 Гб SSD

</tab>

<tab name="База данных">

**Windows**

Процессор: Intel Core i3 8th gen

Память: 8 Гб DDR4

Диск: 30 Гб SSD NVMe



**Debian**

Процессор: Intel Core i3 8th gen

Память: 8 Гб DDR4

Диск: 30 Гб SSD NVMe



**Docker** (установленный на Linux)

Процессор: Intel Core i3 8th gen

Память: 4 Гб DDR4

Диск: 30 Гб SSD NVMe

</tab>

<tab name="Gizmo Server + База данных">

**Windows**

Процессор: Intel Core i3 8th gen

Память: 16 Гб DDR4

Диск: 40 Гб SSD NVMe



**Debian**

Процессор: Intel Core i3 8th gen

Память: 8 Гб DDR4

Диск: 40 Гб SSD NVMe



**Docker** (установленный на Linux)

Процессор: Intel Core i3 8th gen

Память: 4-8 Гб DDR4 (при загрузке в 50+ подключенных клиентов рекомендуется 8 Гб)

Диск: 40 Гб SSD NVMe

</tab>

</tabs>