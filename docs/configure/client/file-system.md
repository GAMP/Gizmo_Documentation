---
title: File System
order: 3
---

**IMAGE: Settings -> Client -> File System page with the server-side file system, user storage, drives and deployment blocks**

In this section you set up the server-side file system, users' personal storage, and the virtual drives and file deployment options on hosts.

## Server-side file system

-  **User Storage Path** -- the path to the directory on the server where users' personal files are stored.

-  **Default User Path** -- the path to the directory used as the default folder for new users the first time they log in.

## Personal user storage

When this option is on, every user gets personal file storage that is available when they log in to any host.

## Drives

Here you set up the virtual drives that are mounted on hosts.

For each drive you set:

-  **Drive Letter** -- the letter under which the drive appears in the system on the host.

-  **Source Path** -- the path to the directory on the server that is mounted as the drive.

-  **Drive Type** -- how the virtual drive is mounted.

To add a drive, click <cmd text="Add Drive"/>. To delete a drive, use the trash icon next to it.

### Drive types

-  **Virtual Drive** -- Gizmo's own mechanism: a folder is attached on the client PC as a regular Windows drive. With **Direct Access**, the client reads the files from the source itself -- the source can be its local folder or a network share, and the client must have permissions for it. Without direct access, Gizmo Server transfers the files -- the source must be reachable by the server (for example, its local folder). **Read Only** prevents changing and deleting files in the source. Credentials for the source can be set only together with direct access.

-  **Virtual Folder** -- the same, but the source is attached as a folder on the client PC, not as a drive. The folder does not have to exist on the client; if it exists, it must be empty. The drive where the folder is created must exist.

-  **Network Drive** -- a standard Windows network drive mapping. Clients always access the share directly; enter credentials if needed.

**Which type to choose:**

| Task | Type |
|---|---|
| Share a folder from the server with guests (for example, videos or images) as read-only | **Virtual Drive** without direct access, with **Read Only**. It does not create Windows shares and does not hit the 20-connection limit |
| Link a folder on the client to a shared folder on the server (for example, the downloads folder) | **Virtual Folder** without **Read Only**; the folder on the clients must be empty |
| Attach an existing share on a file server or NAS | **Virtual Drive** with direct access or **Network Drive**, with credentials if needed |

| | Virtual drive or folder without direct access | Virtual drive or folder with direct access | Network drive |
|---|---|---|---|
| Pros | Simple setup, no shares needed | Faster: the client reads data directly | Faster: the client reads data directly |
| Cons | Slower: data goes through the server | You need to create shares and set permissions | You need to create shares and set permissions |

## Deployment

**Always Leave % Free Disk Space When Using Deployment Profiles** -- the minimum percentage of free space on the host disk that Gizmo must leave when it deploys files. If there is not enough space, Gizmo first deletes the least used deployments from this partition (except profiles with the **Ignore Cleanup** flag), and only if space is still short does it stop the operation. For details, see [Deployment -- how it works and FAQ](./../../articles/deployment-faq.md#how-gizmo-frees-up-space-before-deployment).
