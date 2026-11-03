---
title: Variables
order: 3
---

**IMAGE: the Settings -> Server -> Variables page with the table of variables**

**Variables** are static environment variables that Gizmo apps can use: Gizmo Manager, Gizmo Client and Gizmo Server.

To call a variable, use the format `%var%`, where `var` is the variable name.

Variables are most often used in scripts and apps -- for example, to set paths to executables.

> [!IMPORTANT]
> 
> For more on using variables in apps, see the series of articles [Variables. How to use](./../../../articles/variables-how-to-use/_index.md).

In this section you can see the variables already added and create new ones.

The table of variables shows:

-  **Name** -- the name of the variable, set when you create or edit it.

-  **Value** -- the value of the variable.

-  **Scope** -- where the variable can be called (Gizmo Client, Gizmo Manager, Gizmo Server or everywhere). A client variable is substituted when Gizmo Client calls it, a server variable when Gizmo Server calls it, and so on. So the same name can have different values: for example, `%Games%` can be one folder on the client PCs and another on the server. If you are not sure which scope to choose, create a separate variable for each one.

To edit or delete a variable, double-click it in the table. The [variable card](./variable-card.md) opens.

To add a new variable, click <cmd text="Create Variable"/> in the top right corner. The fields are described in [Adding a new variable](./add-new-var.md).
