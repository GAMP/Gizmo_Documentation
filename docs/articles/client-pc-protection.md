---
title: How to protect client PCs
order: 8
---

Gizmo security profiles block a guest's access to Windows, but a guest can still change something on a PC by accident, with no bad intent. The more PCs a club has, the more it costs to restore each one by hand. This article covers other tools that help keep PCs in working order.

## What a guest can change on a PC

- install or uninstall programs;
- change system and app settings;
- bring in a virus or malware -- by mistake or on purpose;
- delete system or app files;
- leave personal data on the PC: logins in launchers, the browser, messengers.

Locking everything down is hard: you need to block the Control Panel, run under a limited account, keep the antivirus up to date, delete saved settings with scripts and block access to drives. Even then guests will ask for a game that is not on the PC, or change the mouse settings.

What Gizmo has for this:

- [Security profiles](./../tutorials/client-shell/security-profiles.md) -- Windows restrictions for the guest;
- [Cleaning up game and launcher sessions](./../tutorials/client-shell/session-cleanup.md) -- a restart after the session and scripts that clear logins.

## Rollback software

The simplest way to protect PCs is software that **returns the system to its original state after every restart**: everything the guest changed during the session disappears. For example:

- [Deep Freeze](https://www.faronics.com/)
- [Shadow Defender](https://www.shadowdefender.com/)
- [Reboot Restore RX](https://horizondatasys.com/reboot-restore-rx-freeware/)
- [Unified Write Filter](https://learn.microsoft.com/en-us/windows/configuration/unified-write-filter/) -- built into Windows 10 and 11 Enterprise and Education

> [!IMPORTANT]
>
> To install Windows, driver or game updates, turn the protection off, make the changes and turn it back on. If games are updated through [deployment](./deployment-faq.md), exclude the games folder from the protection -- otherwise the changes are lost after a restart.

## Network boot

Another way is **diskless boot**: client PCs boot Windows from a single image on the server, for example with [CCBoot](https://www.ccboot.com/). You make changes once in the image instead of on each PC. The downside: to get speed comparable to a local disk, you need a powerful server and a fast network.

## Reference PC image

Even without rollback software, it is useful to keep a **disk image** of a configured client PC, made with backup software (for example, AOMEI Backupper, Acronis or the built-in Windows tools). If a PC breaks, you can restore it from the image in a few minutes instead of setting it up again.

## How not to lose Windows event logs

Windows event logs are stored on the system drive: `%SystemRoot%\System32\winevt\Logs`. If the system drive is protected by rollback software, the logs are wiped at every restart -- and you will not be able to find out, for example, why Gizmo Client did not start.

Move the logs to an unprotected (unfrozen) drive. The easiest way is the `wevtutil` command in a Command Prompt run as administrator:

```
wevtutil sl "System" /lfn:D:\Windows_Logs\System.evtx
wevtutil sl "Application" /lfn:D:\Windows_Logs\Application.evtx
```

Replace `D:\Windows_Logs` with your own folder. The folder must exist beforehand -- otherwise the logs are not created.

You can do the same in the registry: in the `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\EventLog\System` and `...\EventLog\Application` keys, enter the new path in the **File** value. Before you edit the registry, [back it up](https://support.microsoft.com/en-us/topic/855140ad-e318-2a13-2829-d428a2ab0692).

You can open the moved logs in Windows **Event Viewer** -- including on another PC.
