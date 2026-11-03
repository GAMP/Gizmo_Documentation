---
title: Deployment -- how it works and FAQ
order: 6
---

**Deployment** updates a folder on a client PC with files from a source folder, usually located on the server. This way games are updated once on the server instead of being downloaded from the internet on every PC.

How to set up deployment is described in [How to set up automatic game updates](./../tutorials/client-shell/game-auto-update.md). All profile fields are described in [Deployment card](./../usage/gizmo-manager/stations/prilozheniya/kartochka-redaktirovaniya-ispolnyaemogo-fayla/razvertyvaniya.md).

## How deployment works

1. Gizmo makes two file lists: one for the source folder and one for the destination folder on the client PC.
2. It compares the lists by the rules of the selected **Comparison Mode**.
3. It copies all the files that differ to the client PC.

Deployment runs when a guest launches a game -- before the game itself starts.

Deployment is good for:

- updating games on client PCs from the server;
- installing a game on a client PC from scratch;
- copying any other files: game settings, app configurations and so on.

## How Gizmo frees up space before deployment

Before deployment, Gizmo checks whether there is enough space on the client PC partition. If there is not:

1. Gizmo sorts the deployment profiles by statistics: from the games played for the fewest hours to the most popular ones.
2. It deletes the destination folder of the least popular profile from the client PC and recalculates the free space.
3. It repeats this until there is enough space or until there are no more profiles it can delete. In the second case the guest sees a message that there is not enough disk space.

Gizmo deletes folders only on the same partition that the deployment goes to: if a game is deployed to drive D, only folders on drive D are affected. Profiles with the **Ignore Cleanup** flag are never deleted -- set it for games that must always stay on the PC.

How much space to leave free after deployment is set in **Settings -> Client -> File System**, see [File System](./../configure/client/file-system.md).

## FAQ

**Can I deploy a game by hand to selected PCs?**

No, there is no manual deployment in V3 -- deployment runs only when a guest launches the game. To transfer files to client PCs by hand, use **Management -> Files** -- see [Files](./../usage/gizmo-manager/management/files.md).


**Does Gizmo update games by itself?**

No. Gizmo knows nothing about the game itself: what version it is, whether files are damaged, what is missing. It only makes sure that the files on the client PC match the files in the source folder -- even if a file in the source is older. So you need to keep the game in the source folder up to date and working yourself.

**Why does Gizmo copy the whole game although it is already installed on the client PC?**

By default, a file counts as different if its size, modification date or attributes differ. To Gizmo, the same game installed on two PCs is different -- the files have different dates. So the first deployment copies the whole game.

After that, the files on the client are an exact copy of the source and will not be copied again. From then on, update the game **only in the source folder**: if you update it on a client PC, the files stop matching again.

The **Fast** mode does not compare dates, so it copies fewer files, but it can skip files that are needed -- and the game will not work properly.

**Why is a game update 1 MB, but Gizmo copies gigabytes?**

A game patch contains only the changes inside files -- so that the update downloads faster. Gizmo does not analyze file contents; it copies the changed file in full: if a 1 MB patch changed a 1.2 GB file, the whole file is copied. Patches usually touch many files.

**Why is the game deployed again after every PC restart?**

- **The game updates itself.** After launch, the game or its launcher updates the files on the client PC, and on the next launch Gizmo sees differences from the source. Keep the game in the source up to date. Note that some launchers (for example, Battle.net) download updates in the background while the guest plays.
- **Several profiles with the same destination folder.** If two different source folders are deployed to one folder on the client and **Mirror Copy** is on, the second profile deletes the files of the first, and on the next launch the first copies them again. Be careful with profiles that share the same **Destination**.

**Why does the game ask for an update although all files are deployed?**

Games check whether they are up to date in different ways: some by the main executable, others by a service file in their folder, and others keep the version in the Windows registry or in a folder outside the game folder. For each such game, find out where it stores its update status and deploy that too -- with a separate deployment profile or a task.

Example -- Fortnite: the update status is stored in `C:\ProgramData\Epic\`, not in the game folder. How to set this up is described in [How to set up deployment of Epic Games Launcher and Fortnite](./../tutorials/client-shell/epic-fortnite-deploy.md).

**Why did the game work only after I deleted it from the client PC?**

- **The client has extra or old files** that get in the way of the new version. By default, Gizmo only copies files that differ and does not delete extra ones. Turn on **Mirror Copy** in the profile -- then files that are not in the source are deleted on the client.
- **The files on the client are damaged**, but their size, date and attributes are unchanged. Only the **Thorough** mode finds such files -- it checks the hash of every file. This mode is slow: turn it on only when a file problem is confirmed, and switch back to the previous mode after the files are restored.
- **The "Fast" mode is selected** -- it checks only size and attributes. If other file properties matter to the game, use **Standard**.

**Should I turn on "Direct Access"?**

It depends on where the source is:

- a local folder on the server (for example, `D:\Games\Fortnite`) -- only the server can reach it, turn **Direct Access** off;
- a network drive mapped on the clients (for example, `Z:\Games\Fortnite`) -- only the clients can reach it, turn **Direct Access** on;
- a network path (for example, `\\fileserver\Games\Fortnite`) -- both the server and the clients can reach it, either option works.

With **Direct Access**, the client copies files over the standard Windows protocol, and deployment is faster. Without it, Gizmo Server transfers the files over its own protocol -- about 20--30% slower, but you do not need to set up network shares and permissions for them. Use **Direct Access** when you can.

> [!NOTE]
>
> Regular (non-server) editions of Windows allow no more than 20 simultaneous connections to a share. If the source is a share on such a PC and you have more clients, use Windows Server or deployment without direct access.

**How do I clean up a folder on the client before a game launches?**

Without scripts -- with deployment:

1. Create an empty folder on the server.
2. Create a deployment profile: the source is the empty folder, the destination is the folder on the client that needs cleaning.
3. Turn on **Mirror Copy** -- Gizmo deletes everything in the destination folder that is not in the empty source.

Other ways are a script task (see [Useful task scripts](./useful-task-scripts.md#delete-a-folder)) or, for game saves, the **Cleanup** option in the PUF card.

**Why does deployment hang or not update some files?**

If a file cannot be overwritten, Gizmo retries several times and moves on to the next one. When there are hundreds of such files, deployment takes a long time and looks stuck. Deployment errors are shown in the [Logs](./../usage/gizmo-manager/logs.md) section of Gizmo Manager.

Common causes:

- **The files are in use** -- the game itself, a launcher or a service is using them. To check, try to delete such a file on the client PC by hand: if Windows does not let you, the file is in use. Close the program that uses it. Some launchers (for example, Epic Games Launcher) add themselves to Windows startup -- turn this off.
- **No write permission** -- usually to Windows system folders. Turn off User Account Control (UAC) on client PCs -- see [Useful task scripts](./useful-task-scripts.md#disable-user-account-control-(uac)) -- and avoid deploying files to system folders when you can.

**Why does the game work on the server but not after deployment?**

When a game is installed, it can change Windows settings and install libraries (for example, Visual C++ or DirectX), services and files outside its folder. Simply copying the game folder may not be enough. Solutions:

- find out what else the game needs and add it with extra deployment profiles and tasks;
- or install the game on the client PCs the usual way.

## Common problems with Steam games

**Steam does not start**

Delete everything in the Steam folder except the `steamapps` folder and the `steam.exe` file, and run `steam.exe` -- it downloads the missing files again. The games in `steamapps` are kept.

**The game is unavailable or starts with a black screen**

Verify the game files: in Steam -- **Game Properties -> Installed Files -> Verify integrity of game files**. You can also run the check with the `steam://validate/<ID>` command, where `<ID>` is the game's Steam ID. After the check, update the game in the source folder on the server as well.

**The game shows no text or does not work properly**

The cause may be a path to the Steam folder that is too long. Shorten the folder names or move Steam closer to the root of the drive, for example to `D:\Steam`.
