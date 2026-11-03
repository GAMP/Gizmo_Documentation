---
title: License card
order: 3
---

**IMAGE: License profile card in Gizmo Manager for a Steam license, with the Name field, process tree options and the License Keys list**

The card opens when you create a new license profile or edit an existing one. It lets you enter club licenses and use them for executables. The license type depends on the launcher -- not all launchers are supported.

> [!WARNING]
>
> The card does not open if the license plugin is not enabled on the server. Open <cmd text="Settings"/> -> <cmd text="Server"/> -> <cmd text="Plugins"/> and make sure the **BaseLmPlugin** plugin is enabled. If it is disabled, enable it, and then be sure to restart the server and Gizmo Manager.

When you create the card, choose the launcher the license is for. You cannot change the launcher after the profile is created -- you will need to create a new profile.

-  **Battle.NET** -- the Battle.NET game launcher.

-  **Command Line** -- the license key is passed to the app's executable as a command-line parameter.

-  **EA Desktop** -- the Electronic Arts game launcher (formerly Origin). Each account has to be prepared once before you add it -- see [How to set up club accounts in game launchers](./../../../../../tutorials/client-shell/club-licenses.md).

-  **Epic** -- the Epic Games game launcher.

-  **Instance** -- limits the number of simultaneous users: each running instance of the app on a client PC takes one license.

-  **Process** -- the key is installed with a third-party utility, such as a command-line program.

-  **Registry** -- the key is stored in a single Windows registry value.

-  **Registry Import** -- the key is set by the contents of a `.reg` file: paste the whole text of the file.

-  **Riot** -- the Riot Games game launcher.

-  **Steam** -- the Valve game launcher.

-  **UBI Uplay** -- the Ubisoft game launcher.

Choose the type based on how the app stores its key or license data.

The license profile fields depend on the launcher. Here they are for Steam.

-  **Name** -- the name of the license profile.

-  **End session when process tree exits** -- if this is on and a process is listed in **Ignored processes in tree** (for example, `cs2.exe`), the launcher closes automatically and the license is released when that process ends.

-  **Ignored processes in tree** -- processes whose exit closes the launcher and releases the license. Enter the exact process name, which you can check in Windows Task Manager. Separate several processes with `;`.

-  **Grace period after tree exit** -- how many seconds Gizmo waits after the user exits the game before it closes the launcher and releases the license.

-  **License Keys** -- the accounts for the license. Add them with the <cmd text="+ Add License Key"/> button:

   -  **Username** -- the account login.

   -  **Password** -- the account password.

   -  **Account ID** -- the Steam account ID. It is no longer used, so you can leave the field empty.

-  After you add a key, a row with it appears:

   -  **Host** -- the PC this license can be tied to; it will then open only on that PC. If no PC is selected, the license is distributed dynamically between client PCs.

   -  **Enable** -- whether the license key is available for use.

## Updating the license plugin

Launchers change their login screens regularly, so the **BaseLmPlugin** license plugin is updated from time to time. It is usually updated together with Gizmo Server -- see [How to update Gizmo](./../../../../../tutorials/operations/update-gizmo.md).

If Gizmo support sends you a fixed version of the plugin separately, replace it manually:

1. Back up the current file `C:\Program Files\NETProjects\Gizmo Server\plugins\BaseLmPlugin.dll`.
2. Stop Gizmo Server -- see [How to restart the Gizmo server](./../../../../../tutorials/operations/server-restart.md).
3. Replace `BaseLmPlugin.dll` with the new file. Do not leave the old file in the `plugins` folder -- not even under a different name.
4. Open the new file's **Properties** and, if there is a file block notice at the bottom, clear it (**Unblock**).
5. Start Gizmo Server, then restart Gizmo Manager and Gizmo Client on the client PCs.

> [!WARNING]
>
> Replace the plugin manually only when Gizmo support tells you to.
