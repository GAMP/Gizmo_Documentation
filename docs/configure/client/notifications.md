---
title: Notifications
order: 2
---

**IMAGE: Settings -> Client -> Notifications page with the Time Notifications and Reservation Notifications tables**

In this section you set up the guest notifications in Gizmo Client:

-  time notifications;

-  reservation notifications.

## Time notification

**Time Notification** -- notifications that are shown or spoken to the guest before their paid time runs out.

For each notification you set:

-  **Message** -- the text of the message the guest sees. To show the remaining time, use the `{0}` variable -- it is replaced with the number of minutes, for example: "You have {0} minutes left!". If the field is empty, the default notification is used.

-  **Minutes Before Notification** -- how many minutes before the time runs out the notification is shown.

-  **Minimize Windows** -- when on, all open windows on the host are minimized when the notification is shown.

-  **Notification Type** -- how the user is notified: visual, audio, or visual and audio.

To add a new notification, click <cmd text="Create Notification"/>. To edit or delete an existing one, use the pencil and trash icons next to it.

## Reservation notification

**Reservation Notification** -- notifications that Gizmo Client shows to a guest who is already sitting at the PC: a reservation by another guest who booked this host will start soon.

This setting is separate from **Client Reservation Alert Time** in the [reservation policy](./../policies/reservations.md) -- that one sets the general alert shown on the screen of the reserved PC.

For each notification you set:

-  **Reservation Notification Message** -- the text of the reservation notification (you can use the time variable). If the field is empty, the default notification is used.

-  **Minutes Before Notification** -- how many minutes before the reservation starts the notification is shown.

-  **Minimize Windows** -- when on, all open windows on the host are minimized when the notification is shown.

-  **Notification Type** -- how the user is notified: visual, audio, or visual and audio.

To add a new notification, click <cmd text="Create Notification"/>. To edit or delete an existing one, use the pencil and trash icons next to it.

## If a notification is not visible or not audible

-  **Audio notifications** are spoken by the Windows speech synthesizer (Text-to-Speech). The client PC must have a voice installed for the language you need: **Windows Settings -> Time & Language -> Speech**. Not all languages support speech.

-  **The notification does not appear during a game.** In Windows 10 and 11, Focus Assist (Do Not Disturb) hides notifications while a full-screen game is running. Turn it off for games or add Gizmo to the list of priority apps.

-  **The notification disappears too quickly.** How long notifications stay on screen is set in **Windows Settings -> Accessibility**. You can change it on all PCs at once with a task -- see [Useful task scripts](./../../articles/useful-task-scripts.md#change-how-long-pop-up-notifications-stay-on-screen).
