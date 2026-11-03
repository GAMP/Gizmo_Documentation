---
title: Subscription
order: 2
---

**IMAGE: the Settings -> Organization -> Subscription page with the Subscription Settings and Subscription Details blocks and the Pay button**

This section shows information about your active Gizmo subscription.

To activate the subscription, enter the login and password of your account on the Gizmo website and click <cmd text="Save" />.

The screen has a **Subscription Settings** block, which shows the linked account, and a
**Subscription Details** block. The <cmd text="Pay" /> button is in the top right corner.

The **Subscription Details** block shows:

- **Valid** -- the state of the subscription.
- **Expiration** -- the date and time the subscription ends.
- **Total licenses** -- the number of licenses included in the subscription.
- **Authorized ID** -- the ID the subscription is issued to.
- **Authorization type** -- what the subscription is bound to, for example the hardware ID.
- **Last check date** -- when the subscription details were last checked against the Gizmo server.

> [!NOTE]
>
> If the subscription information is shown incorrectly, enter the login and password from the Gizmo website again, save the changes and refresh the data with the button in the **Subscription Details** block.

## Moving and distributing licenses

Licenses are managed in the License Manager in your account on the Gizmo website. It has two modes.

**Simple mode** -- for a single club. All licenses are assigned automatically to the first server that authorizes with your account, and new licenses are added to it too. To move the licenses to a new server:

1. Turn off the old server.
2. Open the License Manager and check that simple mode is on.
3. Click **Reset**.
4. Start or restart the new server. The licenses move to it right after it authorizes.

**Advanced mode** -- for a chain of clubs, when one Gizmo account is used on several servers. It shows all hardware IDs that have ever authorized with your account; each ID is a separate server. To distribute the licenses:

1. Click the pencil icon next to a hardware ID.
2. If you like, give it a name, for example the name of the club.
3. Set how many licenses to assign to this server and save.
4. Repeat for the other servers.

The trash icon removes a hardware ID from the list and returns its licenses to the pool of unassigned licenses. The **Block** option in the ID information stops the server from using licenses without revoking them.

> [!IMPORTANT]
>
> The number of changes per month is limited. The **License actions** counter shows it. Adding licenses from the pool of unassigned licenses does not count as an action; removing licenses from a hardware ID is one action; resetting all IDs costs as many actions as the number of IDs reset. Blocking does not use up actions.

To set up several clubs on one server, see [Multiple clubs on one server](./../../tutorials/operations/multiple-clubs-setup.md).

## If the subscription is not recognized

If the subscription is not shown as valid or Gizmo Server does not see the licenses, check these in order:

1. **Internet on the server.** Gizmo Server checks the license over the internet at startup, so the server PC needs internet access, at least when it starts.
2. **Subscription period.** Sign in to your account on the Gizmo website and check that the subscription is active.
3. **Login and password.** If you changed or reset your password on the website, enter the new password in this section and save the changes.
4. **Server date, time and time zone.** Gizmo checks licenses over a secure connection, and the check fails if the date, time or time zone on the server PC is wrong. Correct them in the operating system settings.
5. **Server restart.** After you buy or renew the subscription, change the password or correct the time, restart Gizmo Server -- see [How to restart the Gizmo server](./../../tutorials/operations/server-restart.md).

If the subscription is still not recognized, [contact support](./../../about/support.md).
