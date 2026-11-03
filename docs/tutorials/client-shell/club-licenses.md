---
title: How to set up club accounts in game launchers
order: 1.2
---

If the club buys games on its own accounts in Steam, Epic, Battle.net and other launchers, Gizmo can sign in to a free account by itself when a guest launches a game, and sign out of it after the game. The guest does not need their own account and never sees the passwords of the club accounts.

For this, a **license profile** -- a set of club accounts for one launcher -- is linked to the game's executable.

## Before you start

- The game is added to the client shell -- see [How to add a game to the client shell](./add-app-to-shell.md).
- The license plugin is turned on on the server: **Settings -> Server -> Plugins**, plugin **BaseLmPlugin**. If it was turned off, turn it on and restart the server and Gizmo Manager -- otherwise the license card will not open.

## Step 1. Set up launching the game through the launcher

In the game's executable, specify the **launcher file** and the argument that launches the game. For example, for Steam:

- **Executable Path** -- `C:\Program Files (x86)\Steam\steam.exe`;
- **Arguments** -- `steam://rungameid/730`.

Paths and arguments for other launchers are in the reference [Paths and launch arguments for launchers and applications](./launch-arguments.md).

## Step 2. Create a license profile

1. Open the game's executable and go to the **Licenses** tab.
2. Click **+ Create New License** and select the launcher. You cannot change the launcher after the profile is created.
3. Enter the profile **Name**.
4. Click **+ Add License Key** and enter the login and password of a club account. Repeat for each account.
5. Save the profile.

If an account should be assigned to a specific PC, select that PC in the key's **Host** field. Otherwise, the accounts are distributed between PCs automatically.

## Step 3. Set up releasing the account after the game

To have the launcher close and the account become free for the next guest after a guest exits the game:

1. In the **Ignored processes in tree** field, enter the game's own process -- you can see its exact name in Windows Task Manager. For example, `cs2.exe` for Counter-Strike 2 or `TslGame_BE.exe` for PUBG. Separate several processes with `;`.
2. Turn on **End session when process tree exits**.
3. If needed, in the **Grace period after tree exit** field, set how many seconds to wait after the game exits before closing the launcher.

Then, as soon as the guest closes the game, Gizmo closes the launcher and returns the account to the pool of free accounts.

> [!NOTE]
>
> If the guest does not launch the game within 60 seconds after Gizmo gave them an account, the account is revoked and returned to the pool. This way a guest cannot occupy a club account without playing.

> [!WARNING]
>
> **EA app (EA Desktop) accounts.** Each EA account has to be prepared once, otherwise Gizmo will sign in to the launcher by emulating keyboard input, and that does not always work:
>
> 1. Open [ea.com](https://www.ea.com/) and, if you are already signed in, sign out of the account.
> 2. Sign in to the account again and accept the EA agreement if the site shows it.
> 3. If the site asks you to verify your identity, click **Send Code** and complete the verification.
>
> Repeat for each account. If EA changes the terms of the agreement, you will need to repeat these steps.

## Step 4. Link the profile to the game

1. On the executable's **Licenses** tab, select the profile you created in the **Select License** field.
2. In the **License Reservation Strategy** field, leave **First Available**.
3. Save the executable.

## If the accounts have several games

A launcher account can be online on only one PC. While a guest is playing one game from an account, the other games on that account are unavailable to other guests. That is why it is better to buy **one game per account**.

If the accounts do have several games, set up the profiles like this:

- **Group accounts by their set of games.** One profile contains only accounts with the same set of games. For example, 5 accounts with the same three games make one profile. An account with the same three games plus one more is already a different profile.
- **Each account goes into only one profile.** Do not add an account twice -- neither to the same profile nor to another one.
- **Profiles with fewer games come first.** In the game's executable, add all profiles that contain accounts with this game: first the profiles whose accounts have fewer games, last the ones with more. For example, for PUBG, first the profile with accounts that have only PUBG, then the profile with accounts that have PUBG and Call of Duty.
- **Strategy -- "First Available".** Gizmo takes the first free account, starting from the top profile -- so accounts with several games stay in reserve for other games.

## Result

The guest launches the game, Gizmo signs in to a free club account by itself, and after the game it closes the launcher and releases the account.

All license profile fields are in [License card](./../../usage/gizmo-manager/stations/prilozheniya/kartochka-redaktirovaniya-ispolnyaemogo-fayla/kartochka-licenziy.md). How to remove guests' launcher sign-ins from PCs after a session is explained in [Cleaning up game and launcher sessions](./session-cleanup.md).

