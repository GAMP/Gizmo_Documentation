---
title: Skin profile card
order: 1
---

**IMAGE: Skin profile card with the Login Page, Host Number, Media and other blocks**

**The skin profile card opens when you create a new profile or edit an existing one.**

**Name** -- the name of the skin profile.

## Login page

This subsection sets the look and behavior of the Gizmo Client login screen.

- **User Login** -- when on, the login screen shows the user login form.
- **Show Host QR Code** -- when on, the login screen shows the host QR code.
- **Host QR Code Base64** -- when on, the host QR code is encoded in base64.
- **QR Code Generation URL** -- when on, the QR code is generated from the URL you specify.
- **QR Code URL** -- the URL encoded in the QR code.
- **QR Code Title** -- the title text shown next to the QR code.
- **QR Code Description** -- the description text shown next to the QR code.

## Host number

This subsection sets how the host number is shown in the Gizmo Client interface.

- **Prefix Disabled** -- when on, no prefix is shown before the host number.
- **Show on Wallpaper** -- when on, the host number is shown on the desktop background image (wallpaper).
- **Show on Screensaver** -- when on, the host number is shown on the login screen screensaver.
- **Prefix** -- the text added before the host number.
- **Wallpaper Positioning** -- the direction in which the host number moves around the wallpaper screen (for example, clockwise).
- **Screensaver Positioning** -- the direction in which the host number moves around the screensaver screen.
- **Fixed Position** -- a fixed position of the host number on the screen (for example, top right). Use it if you do not need the movement animation.
- **Wait Time Between Positions** -- the interval in seconds between position changes of the host number during the animation.
- **Animation Duration** -- the length of the transition animation between positions, in seconds.

## Media

In this subsection you upload media files used in the Gizmo Client interface.

- **Background Media** -- a background image or video shown in the client interface. Recommended formats: JPG, PNG or MP4.
- **Login Background Media** -- a background image or video for the login screen. Recommended formats: JPG, PNG or MP4.
- **Logo** -- the logo shown in the client interface. Recommended formats: PNG or SVG.

To upload a file, drag it to the matching area or click <cmd text="Upload File" />.

## Login rotator

When this option is on, the login screen shows media files from the folder you specify, switching them at the set interval.

- **Rotate Every \[seconds\]** -- the interval in seconds between media file changes.
- **Media Folder** -- the path to the folder with media files for the rotator.

How to add your own images and videos:

1. Turn on **Login Rotator**.
2. Copy the images and videos to the `rotator` folder on the PC with Gizmo Server: `C:\Program Files\NETProjects\Gizmo Server\skins\{Skin_name}\static\rotator`. If the folder does not exist, create it and name it `rotator`.
3. Save the profile and restart Gizmo Client on the PC to apply the changes.

## Home page

When this option is on, Gizmo Client shows the home page.

- **Quick Launch Icon Count** -- the number of apps shown in the quick launch block on the home page.
- **Maximum Items per Row** -- the maximum number of items in one row on the home page.

## Shop page

When this option is on, Gizmo Client shows the shop page.

- **Product Details** -- when on, the product card shows detailed information about the product.
- **Maximum Items per Row** -- the maximum number of products in one row on the shop page.
- **Max Popular Products** -- the maximum number of products shown in the popular products block.

## Apps page

- **App Details** -- when on, the app card shows detailed information about the app.
- **Maximum Items per Row** -- the maximum number of apps in one row on the apps page.
- **Maximum Popular Apps** -- the maximum number of apps shown in the popular block.
- **Sort Option** -- the sort order of apps on the page (for example, by popularity).

## Feeds

When this option is on, Gizmo Client shows the feeds section.

- **Rotate Feeds Every** -- the interval in seconds between automatic feed changes.

## Others

- **Integration ID** -- an identifier for integration with external services.
- **Custom CSS** -- a field for custom CSS styles that let you customize the look of the Gizmo Client interface. You can type the styles by hand or load them from a file by clicking <cmd text="Upload CSS File" />.

**To delete the skin profile, click** <cmd text="Delete" /> **in the lower right corner of the page.**
