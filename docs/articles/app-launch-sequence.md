---
title: What happens when an application is launched
order: 6.5
---

An app in Gizmo can have several executables, and each executable can have any number of deployment profiles, personal user files (PUF), licenses and tasks. When a guest clicks an executable in Gizmo Client, Gizmo prepares it in a strict order. Knowing this order makes it easier to see at which step something goes wrong.

All the tabs of an executable are described in [Executable card](./../usage/gizmo-manager/stations/prilozheniya/kartochka-redaktirovaniya-ispolnyaemogo-fayla/_index.md).

## Launch order

1. **Tasks before deployment** -- the tasks assigned to this event run.
2. **Deployments** -- Gizmo checks whether there is enough disk space, frees it up if needed, and deploys the profiles in the order they are listed in the executable. How space is freed up is described in [Deployment -- how it works and FAQ](./deployment-faq.md#how-gizmo-frees-up-space-before-deployment).
3. **Personal files** -- the guest's PUF are restored on the PC in the order set in the executable.
4. **Tasks before license assignment** -- the tasks assigned to this event run.
5. **Licenses** -- the guest gets club accounts from the license profiles in the set order.
6. **Tasks before the executable launches** -- the tasks assigned to this event run.
7. **Launch** -- if **Auto Launch** is on for the executable, it starts right away. If not, Gizmo waits for the guest to click the executable again.

After the app closes, the tasks assigned to the **After Executable Exits** event run.

## What you need to know

- **Clicking again stops the preparation.** If the guest clicks the executable again while any of steps 1--6 is running, the preparation stops. On the next click it starts over from step 1.
- **An assigned account is revoked after 60 seconds.** If the executable does not start within 60 seconds after a club account is assigned (step 5), the account is revoked. Gizmo assigns another free account or tells the guest that there are no free licenses. This way a guest cannot hold on to a club account without playing.

## Where to set it up

- Deployments -- [How to set up automatic game updates](./../tutorials/client-shell/game-auto-update.md).
- Personal files -- [How to keep guests' game progress between sessions](./../tutorials/client-shell/personal-files.md).
- Licenses -- [How to set up club accounts in game launchers](./../tutorials/client-shell/club-licenses.md).
- Tasks -- [Useful task scripts](./useful-task-scripts.md).
