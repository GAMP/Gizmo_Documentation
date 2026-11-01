---
title: Gizmo Server
order: 1
---

**Gizmo Server** -- главный компонент **Gizmo**, ядро всей системы: обрабатывает операции, хранит данные о клиентах и управляет остальными компонентами. К нему подключаются Gizmo Manager, все игровые пк с Gizmo Client и Gizmo Companion.



## <icon code="info" /> Кратко

| | |
|---|---|
| **Где работает** | На сервере клуба: Windows, Linux или Docker |
| **Кто использует** | Администратор клуба -- при установке и обслуживании |
| **Что нужно для работы** | База данных PostgreSQL или Microsoft SQL Server |

## <icon code="cloud" /> Версии Gizmo Server

Gizmo Server существует в двух вариантах:

-  **Self-hosted версия** -- сервер разворачивается на вашем собственном оборудовании.

-  **Облачная версия** (в разработке) -- подробнее в статье [«Облачная версия»](./../../user-manual/contents/instalation/gizmo/cloud.md).

Self-hosted версию можно установить тремя способами:

-  Gizmo Server для Windows

-  Gizmo Server для Linux

-  Gizmo Server для Docker

## <icon code="database" /> Базы данных

База данных -- это цифровой архив, где Gizmo хранит информацию о работе клуба: профили гостей, остаток средств на счёте, стоимость игрового времени, история покупок и многое другое.

Self-hosted версия работает с одной из двух баз данных:

-  PostgreSQL (версии 15 и выше)

-  Microsoft SQL Server (версии 2017 и выше)

> [!NOTE]
> 
> База данных не устанавливается вместе с Gizmo Server -- её нужно установить отдельно. Её можно разместить на том же сервере, что и Gizmo Server, или отдельно от него -- в том числе во внешней сети. Подробнее -- в статье [«Базы данных»](./../../user-manual/contents/instalation/gizmo/self-hosted/databases/_index.md).

## <icon code="cpu" /> Минимальные системные требования к серверу для Self-hosted версии

<tabs>

<tab name="Gizmo Server">

**Windows**

-  **Процессор** -- Intel Core i3 8-го поколения.
-  **Память** -- 8 ГБ DDR4.
-  **Диск** -- 1 ГБ SSD.



**Linux**

-  **Процессор** -- Intel Core i3 8-го поколения.
-  **Память** -- 4 ГБ DDR4.
-  **Диск** -- 1 ГБ SSD.



**Docker** (версия для Linux)

-  **Процессор** -- Intel Core i3 8-го поколения.
-  **Память** -- 2 ГБ DDR4.
-  **Диск** -- 1 ГБ SSD.

</tab>

<tab name="База данных">

**Windows**

-  **Процессор** -- Intel Core i3 8-го поколения.
-  **Память** -- 8 ГБ DDR4.
-  **Диск** -- 30 ГБ SSD NVMe.



**Linux**

-  **Процессор** -- Intel Core i3 8-го поколения.
-  **Память** -- 8 ГБ DDR4.
-  **Диск** -- 30 ГБ SSD NVMe.



**Docker** (версия для Linux)

-  **Процессор** -- Intel Core i3 8-го поколения.
-  **Память** -- 4 ГБ DDR4.
-  **Диск** -- 30 ГБ SSD NVMe.

</tab>

<tab name="Gizmo Server и база данных">

**Windows**

-  **Процессор** -- Intel Core i3 8-го поколения.
-  **Память** -- 16 ГБ DDR4.
-  **Диск** -- 40 ГБ SSD NVMe.



**Linux**

-  **Процессор** -- Intel Core i3 8-го поколения.
-  **Память** -- 8 ГБ DDR4.
-  **Диск** -- 40 ГБ SSD NVMe.



**Docker** (версия для Linux)

-  **Процессор** -- Intel Core i3 8-го поколения.
-  **Память** -- 4--8 ГБ DDR4 (для 50+ подключённых клиентов рекомендуем 8 ГБ).
-  **Диск** -- 40 ГБ SSD NVMe.

</tab>

</tabs>

## <icon code="book-open" /> Подробнее

-  [«Быстрый старт»](./../../user-manual/contents/instalation/quick-install.md) -- установка и первая настройка Gizmo по шагам.

-  [«Резервная копия»](./../../documents/contents/configure/server/backup.md) -- автоматические копии базы данных.

-  [«Как перезапустить сервер Gizmo»](./../../user-manual/contents/tutorials/operations/server-restart.md)
