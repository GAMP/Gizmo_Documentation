---
title: Plugin location
order: 1
---

Gizmo Server plugins are `.dll` libraries in the `plugins` folder of the server installation directory. On Windows, the default is `C:\Program Files\NETProjects\Gizmo Server\plugins`.

To install a plugin:

1. Copy the plugin file to the `plugins` folder.
2. Restart Gizmo Server -- see [How to restart the Gizmo server](./../../tutorials/operations/server-restart.md). The server loads plugins only at startup.
3. Check that the plugin appears and is turned on in **Settings -> Server -> Plugins** -- see [Plugins](./../../configure/server/plugins/_index.md).

To remove a plugin, stop the server, remove the file from the `plugins` folder and start the server again.
