---
title: Deployment card
order: 2
---

The card opens when you create a new deployment profile or edit an existing one. A deployment updates a folder on the client PC with files from a source folder (usually on the server): it compares the source and destination folders and copies only the files that differ, and with **Mirror** turned on it deletes files on the client that are not in the source. It is suitable for updating games on client PCs and for deploying any files and folders.

-  **Name** -- the name of the deployment profile.

-  **Source** -- the path to the folder the files are copied from during deployment. This is usually a folder on the PC running Gizmo Server; where the path must be accessible depends on the **Direct Access** option.

-  **Destination** -- the path to the folder on the client PC that is compared with the source and receives the files that differ.

-  **Comparison Mode** -- the more thorough the comparison, the lower the chance of an error, but the slower it is:

   -  **Fast** (length, attributes) -- files and folders are compared only by length and attributes.

   -  **Standard** (modification time, length, attributes) -- files and folders are compared by last modification time, length and attributes.

   -  **Standard Without Attributes** (modification time, length) -- the same as "Standard", but without comparing attributes.

   -  **Thorough** (modification time, length, attributes, hash) -- the slowest option: it also calculates and compares file hashes.

-  Inclusions and exclusions:

   -  **Include Files** -- only the files listed here are copied. Wildcards are supported; separate files with ";".

   -  **Include Directories** -- the same as included files, but for directories.

   -  **Exclude Files** -- the files listed here are excluded from the deployment. Wildcards are supported; separate files with ";".

   -  **Exclude Directories** -- the same as excluded files, but for directories.

-  **Registry** -- a registry script that runs during deployment.

-  Deployment options:

   -  **Direct Access** -- the client PC reads the files from the source itself over the standard Windows protocol. Turn it on if the source path is accessible to the client: a network drive on the client (for example, `Z:\Games`) or a network path (`\\fileserver\Games`). If it is off, Gizmo Server transfers the files over its own protocol -- the path must be accessible to the server (for example, its local folder `D:\Games`) and you do not need to set up network folders, but deployment is about 20--30% slower.

   -  **Mirror** -- deletes files and folders in the destination folder that are not in the source. This makes the folder on the client an exact copy of the source.

   -  **Include Subdirectories** -- all subfolders of the source are included in the deployment.

   -  **Repair Only** -- the profile is deployed only if the destination folder does not exist on the client yet or the guest started an app repair in the shell. In all other cases the files are not compared at launch, and the app starts faster.

   -  **Ignore Cleanup** -- the profile is never deleted when Gizmo frees up disk space before other deployments. For details, see [Deployment -- how it works and FAQ](./../../../../../articles/deployment-faq.md).
