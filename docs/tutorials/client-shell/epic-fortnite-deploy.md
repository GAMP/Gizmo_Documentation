---
title: How to set up deployment of Epic Games Launcher and Fortnite
order: 1.65
---

Fortnite updates often, and downloading every update to all client PCs takes a long time. With deployment, the game is updated once on the server, and Gizmo copies the changes to the client PC by itself when a guest launches Fortnite.

A Fortnite peculiarity: the game stores its update status not in its own folder but in `C:\ProgramData\Epic\`. If you deploy only the game folder, Fortnite still asks to update. That is why you need three deployment profiles.

How deployment works in general is explained in [Deployment -- how it works and FAQ](./../../articles/deployment-faq.md).

## Step 1. Prepare the game on the server

Install Epic Games Launcher and Fortnite on the PC with Gizmo Server and update the game to the latest version.

## Step 2. Create three deployment profiles

Open the Fortnite executable, go to the **Deployments** tab and create three profiles with the **+ Create New Deployment** button:

| What is deployed | Source and destination |
|---|---|
| Epic Games Launcher files | `C:\Program Files (x86)\Epic Games\Launcher\` |
| Fortnite update status | `C:\ProgramData\Epic\` |
| Fortnite game files | `C:\Program Files\Epic Games\Fortnite\` |

These are the default paths -- if the launcher or the game is installed in other folders, enter your own. How to fill in a profile is explained in [How to set up automatic game updates](./game-auto-update.md).

> [!WARNING]
>
> If the deployment fails, exclude the `FortniteGame\PersistentDownloadDir` folder: in the game files profile, add `PersistentDownloadDir` to the **Exclude Directories** field.

Done: when a guest launches Fortnite, Gizmo first updates the launcher, the status and the game, and then launches it.

## Step 3. If the game is in a different folder on the clients

If on client PCs Fortnite is deployed to a different folder than on the server (for example, to another drive), Epic Games Launcher will not find the game. Create a link from the standard folder to the actual one:

1. On the executable's **Tasks** tab, create a task of the **Folder Redirection** type.
2. In the **Path to Redirected Folder** field, enter the folder where the launcher looks for the game -- `C:\Program Files\Epic Games\Fortnite`.
3. In the **Path to Destination Folder** field, enter the folder the game is deployed to on the client PC.
4. Assign the task to the **Pre-Deployment Tasks** event.

More about tasks is in [Task card](./../../usage/gizmo-manager/stations/prilozheniya/kartochka-redaktirovaniya-ispolnyaemogo-fayla/kartochka-zadachi.md).

## Result

Fortnite and Epic Games Launcher are updated on the server, and the changes are copied to client PCs automatically when the game is launched. The game does not ask to update, because its update status is deployed together with the files.

