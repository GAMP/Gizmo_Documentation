---
title: PUF card
order: 1
---

The card opens when you create a new personal user file (PUF) or edit an existing one. Personal files save the specified folders from the client PC to the server and restore them when the app is launched or when the user logs in on any PC in the club. They are useful for keeping game saves and syncing them between gaming stations and branches.

-  **Name** -- the PUF name in Gizmo Manager.

-  **Title** -- the PUF name users see in the shell.

-  **Source** -- the path to the folder on the client PC that this PUF saves.

-  **Compression Level** -- the higher the compression level, the slower the copying and deployment, but the less space the PUF takes on the server. The "Store" type means the PUF is not compressed.

-  **Activation** -- when the PUF is copied to the client PC (copying from the client PC to the server always happens when the user logs out):

   -  **On Startup** -- the PUF is copied to the PC when the game it is attached to is launched.

   -  **On Login** -- the PUF is copied to the PC when the user logs in to their account. This can noticeably slow down login if the user has many PUFs.

-  **Quota** -- how much space in MB this PUF's save can take for each user. If the compressed size exceeds the quota, the save is not written. 0 means no limit.

-  Additional options:

   -  **Available** -- whether the PUF is shown to the user in the shell as an option they can select. Even if this is off, the PUF keeps working -- the user just does not see it in the launch options.

   -  **Registry** -- whether the PUF is a registry entry. If this is on, enter the path to the registry entry in the **Source** field.

   -  **Cleanup** -- if this is on, Gizmo deletes all contents of the destination directory before restoring the user's files.

   -  **Include Subdirectories** -- whether to save subfolders and files inside the source folder.

-  Inclusions and exclusions:

   -  **Include Files** -- only the files listed here are backed up. Wildcards are supported; separate files with ";".

   -  **Include Directories** -- the same as included files, but for directories.

   -  **Exclude Files** -- the files listed here are excluded from the backup. Wildcards are supported; separate files with ";".

   -  **Exclude Directories** -- the same as excluded files, but for directories.
