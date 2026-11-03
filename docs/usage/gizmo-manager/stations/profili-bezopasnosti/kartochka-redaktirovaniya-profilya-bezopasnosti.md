---
title: Security profile card
order: 1
---

This card opens when you create or edit a security profile.

### Security profile details

-  Name -- the profile name.

-  Hide "Start" menu -- hides "Start" in Windows 10 and makes it non-functional (empty) in Windows 11.

-  Prevent shell minimize -- blocks minimizing the shell. If this is off, users can minimize it to the taskbar like a normal app.

-  Restrict desktop switching -- blocks switching between Windows virtual desktops.


### Restrictions

Lets you create custom restrictions. When you click "+ Create Restriction", a parameter appears that you can configure.

-  Parameter -- the name of the content (app) to restrict. What you enter here depends on the restriction type.

-  Restriction type -- how Gizmo detects and blocks the content.

   -  File name -- the executable's file name as it appears in Windows File Explorer. Example: *chrome.exe*.

   -  Class name -- the class name of the app window. To find an app's class name, use the [WinLister](https://www.nirsoft.net/utils/winlister.html) utility.

   -  Window name -- the window name as it appears on the taskbar (in WinLister, the **Title** column).

   -  Tray icon -- special codes for hiding icons in the system tray. In the **Parameter** field, enter the icon name or its code:

      | Icon | Code |
      |---|---|
      | Action Center | `7820ae76-23e3-4229-82c1-e41cb67d5b9c` |
      | Volume | `7820ae73-23e3-4229-82c1-e41cb67d5b9c` |
      | Network | `7820ae74-23e3-4229-82c1-e41cb67d5b9c` |
      | Power | `7820ae75-23e3-4229-82c1-e41cb67d5b9c` |
      | Clock | `7820ae72-23e3-4229-82c1-e41cb67d5b9c` |
      | Language | `A59B00B9-F6CD-4FED-A1DC-0F4064A12831` |

You can use wildcards (\*, ?) to restrict several executables with one restriction. For example, adding **Cheat Engine\*** as a Windowname blocks all versions of [Cheat engine](https://www.cheatengine.org/).

Which type to choose: **File name** is the simplest, but renaming the file gets around it; **Class name** is more reliable, but several programs can share one class; **Window name** is a good alternative to the file name, but some programs change their title on the fly, so use wildcards. Ready-made restrictions for common cases are in [Security profiles](./../../../../tutorials/client-shell/security-profiles.md).


### File system

Lets you hide drive letters in Windows File Explorer and block access to them. Select all the letters you want to block. We recommend blocking all of them.


## Policies

Ready-made policies that block Windows features. Turn a policy on by checking its box; you can find the one you need with the search.

All available policies:

### Hardware

-  **Disable USB Mass Storage** -- blocks USB storage devices (flash drives, external drives) on the client PC.

### Edge

-  **Edge Allow File Selection Dialogs** -- blocks system file selection dialogs, for example when uploading a file to a website.

-  **Edge Allow Games Menu** -- blocks the Edge games menu.

-  **Edge Allow Surf Game** -- blocks the surfing mini-game that appears when there is no internet.

-  **Edge Always Open Pdf Externally** -- always opens PDFs in an external program instead of the built-in Edge viewer.

-  **Edge Application Guard Upload Blocking Enabled** -- blocks uploading files from the isolated Application Guard mode to the disk.

-  **Edge Autofill Credit Card Enabled** -- turns off autofill of bank card data on websites.

-  **Edge Autofill Memberships Enabled** -- turns off autofill of saved membership and loyalty card data.

-  **Edge Block External Extensions** -- blocks installing extensions from sources other than the Microsoft Store and enterprise policies.

-  **Edge Browser Add Profile Enabled** -- blocks adding new browser profiles.

-  **Edge Browser Guest Mode Enabled** -- turns off the browser's guest mode.

-  **Edge Clear Browsing Data On Exit** -- clears browser history and data every time the browser closes.

-  **Edge Clear Cached Images And Files On Exit** -- clears cached images and files when the browser closes.

-  **Edge Click Once Enabled** -- blocks launching ClickOnce apps from the browser.

-  **Edge Configure Share** -- turns off the browser's "Share" button.

-  **EdgeCrypto Wallet Enabled** -- turns off the built-in Edge crypto wallet.

-  **Edge Default Automatic Downloads Setting** -- blocks automatic multiple downloads.

-  **Edge Default Browser Setting Enabled** -- stops Edge from offering to become the default browser.

-  **Edge Default File System Read Guard Setting** -- blocks websites from reading the file system through the File System Access API.

-  **Edge Default File System Write Guard Setting** -- blocks websites from writing to the file system through the File System Access API.

-  **Edge Default Search Provider Context Menu Access Allowed** -- blocks searching with the default search engine from the context menu.

-  **Edge Default Search Provider Enabled** -- turns off the default search engine.

-  **Edge Default Web Usb Guard Setting** -- blocks websites from accessing USB devices through the WebUSB API.

-  **Edge Developer Tools Availability** -- blocks access to the developer tools (F12).

-  **Edge Direct Invoke Enabled** -- blocks websites from opening local apps directly through a protocol link without a confirmation dialog.

-  **Edge Disable Screenshots** -- blocks taking screenshots with browser tools.

-  **Edge Download Restrictions** -- limits which files can be downloaded.

-  **Edge Collections Enabled** -- turns off the "Collections" feature for saving content from websites.

-  **Edge EDrop Enabled** -- turns off the Drop feature for sending files and notes to yourself across devices.

-  **Edge Follow Enabled** -- turns off following favorite websites (the Follow feature).

-  **Edge Wallet CheckoutEnabled** -- turns off autofill of wallet data during online checkout on websites.

-  **Edge Wallet Etree Enabled** -- turns off one of the features of the built-in Edge wallet.

-  **Edit Favorites Enabled** -- blocks editing the favorites list.

-  **Edge Enable Media Router** -- turns off the media router, which casts video and audio to external devices.

-  **Edge Favorites Bar Enabled** -- hides the favorites bar under the address bar.

-  **Edge Feature Flag Overrides Control** -- blocks the user from changing experimental flags through edge://flags.

-  **Edge Gamer Mode Enabled** -- turns off Edge gamer mode.

-  **Edge Hide First Run Experience** -- hides the welcome screen on the browser's first launch.

-  **Edge Hide Internet Explorer Redirect UXF or Incompatible Sites Enabled** -- hides the notice about redirecting incompatible sites to Internet Explorer mode.

-  **Edge Hide Restore Dialog Enabled** -- hides the tab restore dialog after a browser crash.

-  **Edge Homepage Is New Tab Page** -- forces the new tab page to be the home page.

-  **Hubs Sidebar Enabled** -- turns off the sidebar with widgets and apps.

-  **Edge In Private Mode Availability** -- blocks InPrivate mode.

-  **Edge Internet Explorer Integration Level** -- the integration level of Internet Explorer mode in Edge.

-  **Edge Internet Explorer Integration Local File Allowed** -- blocks opening local files in IE mode.

-  **Edge Internet Explorer Integration Local File Show Context Menu** -- hides the "open in IE mode" item in the context menu for local files.

-  **Edge Internet Explorer Integration Reload In IEMode Allowed** -- blocks the user from manually reloading a page in IE mode.

-  **Edge Internet Explorer Integration Zone Identifier Mht File Allowed** -- blocks opening MHT files with a security zone mark in IE mode.

-  **Edge Internet Explorer Mode Enable Save PageAs** -- blocks saving a page ("Save as") in IE mode.

-  **Edge Internet Explorer Mode Toolbar Button Enabled** -- hides the toolbar button that switches to IE mode.

-  **Edge Intranet File Links Enabled** -- blocks following links to files on the internal network.

-  **Edge Local Browser Data Share Enabled** -- blocks sharing local browser data between profiles and apps.

-  **Edge Microsoft Edge Insider Promotion Enabled** -- hides offers to switch to Edge Insider builds.

-  **Edge Mouse Gesture Enabled** -- turns off controlling the browser with mouse gestures.

-  **Edge New Tab Page Allowed Background Types** -- sets which background types are allowed on the new tab page.

-  **Edge New Tab Page App Launcher Enabled** -- hides the app launcher on the new tab page.

-  **Edge New Tab Page Bing Chat Enabled** -- hides Bing Chat on the new tab page.

-  **Edge New Tab Page Content Enabled** -- turns off content blocks (news, widgets) on the new tab page.

-  **Edge New Tab Page Hide Default Top Sites** -- hides the default sites from the list of top sites.

-  **Edge New Tab Page Quick Links Enabled** -- hides quick links on the new tab page.

-  **Edge Password Generator Enabled** -- turns off the built-in password generator.

-  **Edge Password Manager Enabled** -- turns off the browser's password manager.

-  **Edge Pin Browser Essentials Toolbar Button** -- blocks pinning the "Browser essentials" button to the toolbar.

-  **Edge Pinning Wizard Allowed** -- blocks the wizard that pins a website as a separate app.

-  **Edge Printing Enabled** -- blocks printing from the browser.

-  **Edge Quick Search Show Mini Menu** -- hides the quick search mini menu for selected text.

-  **Edge Read Aloud Enabled** -- turns off the read aloud feature.

-  **Edge Redirect Sites From Internet Explorer Prevent BHO Install** -- blocks installing browser add-ons when redirecting from Internet Explorer.

-  **Edge Remote Debugging Allowed** -- blocks remote debugging of the browser.

-  **Edge Restore On Startup** -- sets what the browser is forced to open at startup: a new tab, specific pages or the previous session.

-  **Edge Show Acrobat Subscription Button** -- hides the Adobe Acrobat subscription offer button when working with PDFs.

-  **Edge Show Downloads Toolbar Button** -- hides the "Downloads" button on the toolbar.

-  **Edge Show Home Button** -- hides the "Home" button on the toolbar.

-  **Edge SmartScreen Pua Enabled** -- turns on blocking of potentially unwanted apps through SmartScreen.

-  **Edge Speech Recognition Enabled** -- turns off speech recognition in the browser.

-  **Edge Split Screen Enabled** -- turns off the split screen mode with two tabs.

-  **Edge Standalone Hubs Sidebar Enabled** -- turns off the sidebar in standalone mode.

-  **Edge Sync Disabled** -- turns off syncing browser data with a Microsoft account.

-  **Edge Task Manager End Process Enabled** -- blocks ending processes through the browser's task manager.

-  **Edge Upload From Phone Enabled** -- blocks uploading files from a phone through a QR code.

-  **Edge User Feedback Allowed** -- blocks sending browser feedback to Microsoft.

-  **Edge Video Capture Allowed** -- blocks websites from accessing the camera.

-  **Edge Wallet Donation Enabled** -- turns off donations through the built-in wallet.

-  **Edge Web Capture Enabled** -- turns off the web capture tool (page screenshot and annotation).

-  **Edge Form Suggest Passwords** -- blocks suggesting saved passwords to autofill forms.

-  **Edge Use FormSuggest** -- turns off form autofill: addresses and standard data.

-  **Explorer Allow Online Tips** -- blocks online tips in File Explorer.

-  **Explorer Disable Local Machine Run** -- blocks programs from starting automatically from the startup key for all users (HKLM Run).

-  **Explorer Disable Local Machine Run Once** -- blocks programs from starting automatically from the run-once startup key for all users (HKLM RunOnce).

-  **Explorer Dont Set Autoplay Checkbox** -- does not show the "Always do this" checkbox in the AutoPlay dialog.

-  **Explorer Hide Power Options** -- hides the power buttons: sleep, restart, shut down.

-  **Explorer Allow No Autorun** -- blocks autorun (the same setting as Explorer No Autorun).

-  **Explorer No Change Start Menu** -- blocks changing "Start" menu settings.

-  **Explorer No Drive Type AutoRun** -- turns off autorun for certain drive types.

-  **Explorer No Recent Docs History** -- turns off keeping the history of recent documents.

-  **Explorer No Run** -- removes "Run" from the "Start" menu.

-  **Explorer No Set Taskbar** -- blocks changing taskbar settings.

-  **Explorer No Start Menu MFU programs List** -- turns off the list of frequently used programs in the "Start" menu.

-  **Explorer No Start Menu More Programs** -- removes the "All programs" list from the "Start" menu.

-  **Explorer No Tray Context Menu** -- turns off the context menu of tray icons.

### One Drive

-  **OneDrive Prevent Network Traffic Pre User Sign In** -- blocks OneDrive from accessing the network before the user signs in.

### Windows Explorer

-  **Remove the Option to Change or Hide Toolbars** -- removes the option to change or hide File Explorer toolbars.

-  **Remove and prevent access to the Shut Down, Restart, Sleep, and Hibernate commands** -- removes and blocks access to the "Shut down", "Restart", "Sleep" and "Hibernate" commands.

-  **Hide and disable all items on the desktop** -- hides and disables all icons on the desktop.

-  **Disable Removable Media autorun** -- turns off autorun from removable media.

-  **Hide Drives in My Computer** -- hides drives in the "This PC" window.

-  **Remove File menu from File Explorer** -- removes the "File" menu from File Explorer.

-  **Disable Folder Options Menu** -- turns off the "Folder Options" menu item.

-  **Remove the Map and Disconnect Network Drive Options** -- removes the items for mapping and disconnecting network drives.

-  **Disable Network Neighborhood** -- turns off "Network Neighborhood".

-  **Remove Run menu from Start Menu** -- removes "Run" from the "Start" menu.

-  **Disable saving settings on exit** -- does not save changes to File Explorer settings on exit.

-  **Remove shortcut menus from the desktop and from Windows Explorer** -- removes context menus on the desktop and in File Explorer.

-  **Disables or removes all menu items and buttons that log the user off the system.** -- removes all menu items and buttons for logging the user off.

-  **Disable tray contextual menu** -- turns off the context menu of tray icons.

-  **Prohibit access to Control Panel and PC settings** -- blocks access to Control Panel and PC settings.

-  **Remove Logoff on the Start Menu** -- removes "Log off" from the "Start" menu.

-  **Explorer disable WAU** -- turns off automatic Windows updates.

-  **Explorer Disable Context Menus In Start** -- turns off context menus in the "Start" menu.

-  **Explorer Explorer Ribbon Starts Minimized** -- the File Explorer ribbon starts minimized.

-  **Explorer Hide Recently Added Apps** -- hides the list of recently installed apps in the "Start" menu.

-  **Explorer No New App Alert** -- turns off the notification about newly installed apps.

-  **Explorer Always Show Classic Menu** -- always shows the classic menu bar in File Explorer.

-  **Explorer Clear Recent Docs On Exit** -- clears the list of recent documents when the user logs off.

-  **Explorer Clear Recent Prog For New User In Start Menu** -- clears the list of recent programs in the "Start" menu for new users.

-  **Explorer Disable Current User Run** -- blocks programs from starting automatically from the current user's startup key (HKCU Run).

-  **Explorer Disable Current User Run Once** -- blocks programs from starting automatically from the current user's run-once startup key (HKCU RunOnce).

-  **Explorer Disable Thumbnails** -- turns off file thumbnails and shows icons only.

-  **Explorer Disable Thumbnails On Network Folders** -- turns off file thumbnails in network folders.

-  **Explorer Disallow Run** -- blocks running programs from a separately defined list.

-  **Explorer Dont Set Autoplay Checkbox** -- does not show the "Always do this" checkbox in the AutoPlay dialog.

-  **Explorer Hide SCA Health** -- hides the "Health" section in the Windows Action Center.

-  **Explorer Hide SCA Network** -- hides the "Network" section in the Windows Action Center.

-  **Explorer Hide SCA Power** -- hides the "Power" section in the Windows Action Center.

-  **Explorer Intellimenus** -- turns off "smart" menus that hide rarely used items.

-  **Explorer Lock Taskbar** -- locks the taskbar so it cannot be moved or resized.

-  **Explorer Max Recent Docs** -- sets the maximum number of documents in the "Recent" list.

-  **Explorer No Active Desktop Changes** -- blocks changing Active Desktop settings.

-  **Explorer No Autorun** -- turns off autorun from all drives.

-  **Explorer No Auto Update** -- turns off automatic Windows updates.

-  **Explorer No CD Burning** -- turns off the built-in CD/DVD burning feature of File Explorer.

-  **Explorer No Change Start Menu** -- blocks changing "Start" menu settings.

-  **Explorer No Close** -- removes the option to shut down Windows.

-  **Explorer No Close Drag Drop Bands** -- blocks dragging and reordering toolbars on the taskbar.

-  **Explorer No Common Groups** -- hides common program groups (for all users) in the "Start" menu.

-  **Explorer No Computers Near Me** -- removes the "Computers Near Me" section in Network Neighborhood.

-  **Explorer No Desktop** -- hides the whole desktop.

-  **Explorer No DFS Tab** -- removes the Distributed File System tab in folder properties.

-  **Explorer No Drives** -- hides drives in File Explorer and in the open and save file dialogs.

-  **Explorer No Favorites Menu** -- removes the "Favorites" menu in File Explorer.

-  **Explorer No File Menu** -- removes the "File" menu in File Explorer.

-  **Explorer No Find** -- removes the option to search for files.

-  **Explorer No Folder Options** -- removes "Folder Options" from the "Tools" menu.

-  **Explorer No Hardware Tab** -- removes the "Hardware" tab in drive properties.

-  **Explorer No Instrumentation** -- turns off tracking of user actions in the Windows shell.

-  **Explorer No Internet Icon** -- removes the Internet Explorer icon from the desktop.

-  **Explorer No Logoff** -- removes "Log off".

-  **Explorer No Manage My Computer Verb** -- removes "Manage" from the "My Computer" context menu.

-  **Explorer No Moving Bands** -- blocks moving toolbars in File Explorer.

-  **Explorer No Net Connect Disconnect** -- blocks mapping and disconnecting network drives.

-  **Explorer No Net Hood** -- hides "Network Neighborhood".

-  **Explorer No Network Connections** -- removes access to the "Network Connections" folder.

-  **Explorer No Preview Pane** -- turns off the preview pane in File Explorer.

-  **Explorer No Properties My Computer** -- removes "Properties" for "My Computer".

-  **Explorer No Properties My Documents** -- removes "Properties" for "My Documents".

-  **Explorer No Properties Recycle Bin** -- removes "Properties" for the "Recycle Bin".

-  **Explorer No Reading Pane** -- turns off the reading pane in File Explorer.

-  **Explorer No Recent Docs History** -- turns off keeping the history of recent documents.

-  **Explorer No Recent Docs Menu** -- removes "Recent Documents" from the "Start" menu.

-  **Explorer No Recent Docs Net Hood** -- does not show network resources in the list of recent documents.

-  **Explorer No Recycle Files** -- turns off the "Recycle Bin": files are deleted at once and cannot be restored.

-  **Explorer No Run** -- removes "Run" from the "Start" menu.

-  **Explorer No Run as Install Prompt** -- removes "Run as administrator" for installers.

-  **Explorer No Save Settings** -- does not save changes to window positions and File Explorer settings.

-  **Explorer No Search Comm In Start Menu** -- removes search of communications (mail, contacts) from the "Start" menu.

-  **Explorer No Search Computer Link In Start Menu** -- removes the computer search link from the "Start" menu.

-  **Explorer No Search Files In Start Menu** -- turns off file search through the "Start" menu.

-  **Explorer No Search Internet In Start Menu** -- removes internet search from the "Start" menu.

-  **Explorer No Search Programs In Start Menu** -- turns off program search through the "Start" menu.

-  **Explorer No Security Tab** -- removes the "Security" tab in file and folder properties.

-  **Explorer No Set Folders** -- blocks changing how folder contents are displayed.

-  **Explorer No Set Taskbar** -- blocks changing taskbar settings.

-  **Explorer No Shared Documents** -- removes the "Shared Documents" folder.

-  **Explorer No Shell Search Button** -- removes the search button in File Explorer.

-  **Explorer No SM Balloon Tip** -- turns off "Start" menu balloon tips.

-  **Explorer No SM Configure Programs** -- removes the default programs settings item from the "Start" menu.

-  **Explorer No SM Help** -- removes "Help" from the "Start" menu.

-  **Explorer No SM My Docs** -- removes "My Documents" from the "Start" menu.

-  **Explorer No SM My Pictures** -- removes "My Pictures" from the "Start" menu.

-  **Explorer No Start Menu Eject PC** -- removes "Eject PC" from the "Start" menu.

-  **Explorer No Start Menu MFU programs List** -- turns off the list of frequently used programs in the "Start" menu.

-  **Explorer No Start Menu More Programs** -- removes the "All programs" list from the "Start" menu.

-  **Explorer No Start Menu My Games** -- removes the "Games" section from the "Start" menu.

-  **Explorer No Start Menu My Music** -- removes "My Music" from the "Start" menu.

-  **Explorer No Start Menu Network Places** -- removes "Network Places" from the "Start" menu.

-  **Explorer No Start Menu Pinned List** -- removes the list of pinned programs from the "Start" menu.

-  **Explorer No Start Menu SubFolders** -- does not show subfolders in the "Start" menu.

-  **Explorer No Thumbnail Cache** -- turns off thumbnail caching.

-  **Explorer No Toolbars On Taskbar** -- blocks adding toolbars to the taskbar.

-  **Explorer No Tray Context Menu** -- turns off the context menu of tray icons.

-  **Explorer No User Folder In Start Menu** -- removes the user folder from the "Start" menu.

-  **Explorer No User Name In Start Menu** -- does not show the user name in the "Start" menu.

-  **Explorer No View Context Menu** -- removes the "View" tab from the context menu.

-  **Explorer No View On Drive** -- blocks changing display settings for drives.

-  **Explorer No Welcome Screen** -- turns off the welcome screen after signing in to Windows.

-  **Explorer No Windows Update** -- blocks access to Windows Update through the "Start" menu.

-  **Explorer No Win Keys** -- turns off the Win key and its shortcuts.

-  **Explorer Quick Launch Enabled** -- turns off the Quick Launch toolbar.

-  **Explorer Restrict Cpl** -- restricts access to individual Control Panel applets.

-  **Explorer Restrict Welcome Center** -- blocks access to the Windows "Welcome Center".

-  **Explorer Settings Page Visibility** -- sets which pages of the "Settings" app the user can see.

-  **Explorer Start Menu LogOff** -- shows or hides the log off item in the "Start" menu.

-  **Explorer Taskbar Lock All** -- fully locks the taskbar against any changes.

-  **Explorer Taskbar No Add Remove Toolbar** -- blocks adding and removing toolbars on the taskbar.

-  **Explorer Taskbar No Drag Toolbar** -- blocks dragging toolbars on the taskbar.

-  **Explorer Taskbar No Notification** -- hides the notification area on the taskbar.

-  **Explorer Taskbar No Redock** -- blocks moving the taskbar to another edge of the screen.

-  **Explorer Taskbar No Resize** -- blocks resizing the taskbar.

-  **Explorer Disallow Run powershell** -- blocks running regular PowerShell (powershell.exe).

-  **Explorer Disallow Run powershell_ise** -- blocks running PowerShell ISE (powershell_ise.exe).

-  **Explorer Restrict Cpl mmsys.cpl** -- blocks access to the sound settings applet in Control Panel.

-  **Explorer WAU Disabled** -- turns off automatic Windows updates.

-  **Explorer Clear Tiles On Exit** -- clears "Start" menu tiles when the user logs off.

-  **Explorer Disable Notification Center** -- turns off the Windows Notification Center.

-  **Explorer Disable Search Box Suggestions** -- turns off suggestions in the search box.

-  **Explorer Disable Thumbs DB On Network Folders** -- blocks creating thumbs.db files in network folders.

-  **Explorer Enable Legacy Balloon Notifications** -- turns off the modern notification style in favor of the old balloon style.

-  **Explorer Hide Content View Mode Snippets** -- hides content previews in the "Content" view mode.

-  **Explorer Hide People Bar** -- hides the "People" bar on the taskbar.

-  **Explorer No Autoplay Fornon Volume** -- turns off AutoPlay for devices that are not volumes.

-  **Explorer No Balloon Feature Advertisements** -- turns off promotional balloon tips about Windows features.

-  **Explorer No Pinning Store To Taskbar** -- blocks pinning the Microsoft Store to the taskbar.

-  **Explorer No Pinning To Destinations** -- blocks pinning items to jump lists.

-  **Explorer No Pinning To Taskbar** -- blocks pinning programs to the taskbar.

-  **Explorer No Remote Destinations** -- hides remote items in jump lists.

-  **Explorer No Search Everywhere Link In Start Menu** -- removes the "Search everywhere" link from the "Start" menu.

-  **Explorer No Search Internet Try Harder Button** -- removes the advanced internet search button.

-  **Explorer No Start Menu Downloads** -- removes the "Downloads" folder from the "Start" menu.

-  **Explorer No Start Menu Homegroup** -- removes "Homegroup" from the "Start" menu.

-  **Explorer No Start Menu Recorded TV** -- removes the "Recorded TV" section from the "Start" menu.

-  **Explorer No Start Menu Videos** -- removes "Videos" from the "Start" menu.

-  **Explorer No Systray System Promotion** -- turns off system promotional icons in the tray.

-  **Explorer No Uninstall From Start** -- blocks uninstalling programs directly from the "Start" menu.

-  **Explorer Show Run As Different User In Start** -- hides "Run as different user" in the "Start" menu.

-  **Explorer Show Windows Store Apps On Taskbar** -- hides Microsoft Store apps on the taskbar.

-  **Explorer Taskbar No Pinned List** -- clears the list of pinned taskbar icons and blocks it.

### System

-  **Remove Change Password** -- removes the change password option from the Windows lock screen.

-  **Disable the Command Prompt** -- blocks running the Command Prompt.

-  **Disable Workstation Lock** -- blocks locking the workstation, including Win+L.

-  **DisableRegistryTools** -- blocks running the Registry Editor.

-  **Disable Task Manager** -- blocks running Task Manager.

-  **HideFastUserSwitching** -- hides fast user switching.

-  **System Disable Startup Sound** -- turns off the Windows startup sound.

-  **System Disable Status Messages** -- turns off status messages such as "Applying settings..." at sign-in.

-  **System Allow Domain Delay Lock** -- allows delayed workstation lock in a domain.

-  **System Disable Lock Screen App Notifications** -- turns off app notifications on the lock screen.

-  **System Disable Change Password** -- blocks the user from changing their password.

-  **System Disable Lock Workstation** -- blocks locking the workstation.

-  **System Disable Registry Tools** -- blocks registry editing tools.

-  **System Disable Task Mgr** -- blocks Task Manager.

-  **System Disable CMD** -- blocks the Command Prompt.

### Windows

-  **Windows Turn Off Win Cal** -- turns off Windows Calendar.

-  **Windows Turn Off Sidebar** -- turns off the Windows Sidebar (gadgets).

-  **Windows File History** -- controls whether the "File History" feature is available.

-  **Windows Allow Game DVR** -- blocks recording gameplay (Game DVR / Xbox Game Bar).

-  **Windows Disable Home Group** -- turns off "Homegroup".

-  **Windows Maps Auto Download And Update Map Data** -- blocks automatic download and update of offline maps in the "Maps" app.

-  **Windows No Lock Screen Camera** -- removes quick camera access from the lock screen.

-  **Windows No Lock Screen Slideshow** -- turns off the image slideshow on the lock screen.

-  **Windows Powershell Execution Policy** -- sets the PowerShell script execution policy.

-  **Windows Powershell Enable Scripts** -- blocks running PowerShell scripts.

-  **WindowsSearch Allow Cortana In Aad** -- blocks Cortana for Azure AD accounts.

-  **WindowsSearch Allow Cortana In Aad Path Oobe** -- blocks Cortana in Azure AD during initial system setup.

-  **WindowsSearch Allow Cloud Search** -- blocks searching cloud content, such as OneDrive files, through Windows Search.

-  **WindowsSearch Allow Cortana** -- blocks the Cortana voice assistant.

-  **WindowsSearch Allow Cortana Above Lock** -- blocks using Cortana from the lock screen.

-  **Windows TurnOffWinCal** -- turns off Windows Calendar.

-  **Windows Prevent Run** -- blocks running programs from a separately defined list.

-  **Windows Sound Recorder** -- controls whether the "Sound Recorder" app is available.

-  **Windows Cloud Content Disable Windows Spotlight Features** -- turns off Windows Spotlight features on the lock screen and desktop.

-  **Windows Cloud Content Disable Windows Spotlight Windows Welcome Experience** -- turns off the Windows Spotlight welcome screens after major updates.

-  **Windows CredUI Disable Password Reveal** -- removes the show password button in standard password dialogs.

### Chrome

-  **Chrome Ads Setting For Intrusive Ads Sites** -- blocks intrusive ads on websites that violate the Better Ads Standards.

-  **Chrome Allow Deleting Browser History** -- blocks the user from deleting browser history.

-  **Chrome Allow Dinosaur Easter Egg** -- blocks the dinosaur game that appears when there is no internet.

-  **Chrome Allow File Selection Dialogs** -- blocks system file selection dialogs.

-  **Chrome Allow Outdated Plugins** -- blocks outdated plugins.

-  **Chrome Autofill Credit Card Enabled** -- turns off bank card autofill.

-  **Chrome Background Mode Enabled** -- blocks Chrome from running in the background after all windows are closed.

-  **Chrome Block External Extensions** -- blocks installing extensions from external sources.

-  **Chrome Bookmark Bar Enabled** -- hides the bookmarks bar.

-  **Chrome Browser Add Person Enabled** -- blocks adding new browser profiles.

-  **Chrome Browser Guest Mode Enabled** -- turns off the browser's guest mode.

-  **Chrome Browser Signin** -- controls whether users can sign in to the browser with a Google account.

-  **Chrome Built In Dns Client Enabled** -- turns off Chrome's built-in DNS client so that the system one is used.

-  **Chrome Default Browser Setting Enabled** -- stops Chrome from offering to become the default browser.

-  **Chrome Developer Tools Availability** -- controls whether the developer tools are available.

-  **Chrome Disable Screenshots** -- blocks taking screenshots with browser tools.

-  **Chrome Dns Over Https Mode** -- sets the DNS-over-HTTPS mode.

-  **Chrome Download Restrictions** -- limits which files can be downloaded.

-  **Chrome Edit Bookmarks Enabled** -- blocks editing bookmarks.

-  **Chrome Force Ephemeral Profiles** -- makes the browser profile temporary: all data is deleted when the browser closes.

-  **Chrome Hide Web Store Icon** -- hides the Chrome Web Store icon.

-  **Chrome Incognito Mode Availability** -- controls whether incognito mode is available.

-  **Chrome NTP Custom Background Enabled** -- blocks changing the background image of the new tab page.

-  **Chrome Password Manager Enabled** -- turns off the browser's password manager.

-  **Chrome Printing Enabled** -- blocks printing from the browser.

-  **Chrome Site Per Process** -- turns off isolating sites in separate processes for security.

-  **Chrome Spellcheck Enabled** -- turns off spell checking.

-  **Chrome SpellCheck Service Enabled** -- blocks using Google's cloud spell checking service.

-  **Chrome Sync Disabled** -- turns off syncing browser data with a Google account.

-  **Chrome Translate Enabled** -- turns off page translation offers.

### Miscellaneous

-  **Windows Assistance No Active Help** -- turns off Windows active help and remote assistance.

-  **Windows Camera Allow Camera** -- blocks using the device camera.

-  **Windows Event Viewer MicrosoftRedirectionProgram** -- controls redirecting Windows Event Viewer events to third-party viewers.

-  **Windows Messenger Client Prevent Run** -- blocks running the Windows Messenger client.

-  **Windows Sound Recorder Soundrec** -- controls whether the classic "Sound Recorder" app is available.

-  **Windows Speech AllowSpeechModelUpdate** -- blocks updating speech recognition models.

-  **WindowsNT MYS DisableShowAtLogon** -- turns off "Tip of the day" at sign-in.

-  **WindowsNT IIS PreventIISInstall** -- blocks installing the IIS component in Windows.

-  **Push Notifications NoCloudApplicationNotification** -- turns off app push notifications through the Microsoft cloud.

-  **Protected Event Logging Encryption Certificate** -- the encryption certificate for PowerShell protected event logging.

-  **Protected Event Logging Enable Protected Event Logging** -- turns on PowerShell protected event logging.

-  **Windows Inc Workspace Allow Windows Ink Workspace** -- blocks using Windows Ink Workspace.

### Windows defender

-  **Windows Defender pua protection** -- turns on protection against potentially unwanted apps.

-  **Windows Defender Allow Fast Service Startup** -- allows the Windows Defender service to start faster.

-  **Windows Defender Service Keep Alive** -- keeps the Defender service from stopping.

-  **Windows Defender Realtime Protection Disable Behavior Monitoring** -- turns off process behavior monitoring in real-time protection.

-  **Windows Defender Realtime Protection Disable IOAV Protection** -- turns off scanning of files when they are downloaded from the internet and opened.

-  **Windows Defender Realtime Protection Disable On Access Protection** -- turns off scanning of files when they are accessed.

-  **Windows Defender Realtime Protection Disable Realtime Monitoring** -- turns off real-time protection completely.

-  **Windows Defender Realtime Protection Disable Scan On Realtime Enable** -- turns off scanning when real-time protection is turned on.

-  **Windows DefenderScan Disable Scanning Network Files** -- excludes network files from Defender scans.

### Removable storage

-  **Removable Storage Devices Deny All Removable Storage Devices** -- fully blocks all removable storage devices.

-  **Removable Storage Devices CD and DVD Deny Execute** -- blocks running programs from CD/DVD.

-  **Removable Storage Devices CD and DVD Deny Read** -- blocks reading from CD/DVD.

-  **Removable Storage Devices Tape Drives Deny Write** -- blocks writing to tape drives.

-  **Removable Storage Devices Tape Drives Deny Execute** -- blocks running programs from tape drives.

-  **Removable Storage Devices Tape Drives Deny Read** -- blocks reading from tape drives.

-  **Removable Storage Devices CD and DVD Deny Write** -- blocks writing to CD/DVD.

-  **Removable Storage Devices Removable Disks Deny Execute** -- blocks running programs from removable disks.

-  **Removable Storage Devices Removable Disks Deny Read** -- blocks reading from removable disks.

-  **Removable Storage Devices Removable Disks Deny Write** -- blocks writing to removable disks.

-  **Removable Storage Devices Floppy Drives Deny Execute** -- blocks running programs from floppy disks.

-  **Removable Storage Devices Floppy Drives Deny Read** -- blocks reading from floppy disks.

-  **Removable Storage Devices Floppy Drives Deny Write** -- blocks writing to floppy disks.

### Windows update

-  **Windows Update Manage Preview Builds Policy Value** -- sets the value of the Windows preview builds management policy.

-  **WindowsUpdate Do Not Connect To Windows Update Internet Locations** -- blocks connecting to update servers directly over the internet, for example when WSUS is used.

-  **WindowsUpdate Manage Preview Builds** -- turns receiving Windows preview builds on or off.

-  **Windows Update Set Disable UXWU Access** -- turns off access to the "Windows Update" section in Settings.

-  **Windows UpdateAu Allow MU Update Service** -- blocks using the Microsoft Update service to update other Microsoft products.

-  **Windows UpdateAu Au Options** -- sets the automatic update mode: notify, download and notify, or install on a schedule.

-  **Windows UpdateAu Automatic Maintenance Enabled** -- turns off automatic system maintenance, including background installation of updates.

-  **Windows UpdateAu Scheduled Install Day** -- sets the day of the week for scheduled update installation.

-  **Windows UpdateAu scheduledinstalleveryweek** -- installs updates every week instead of once a month.

-  **Windows UpdateAu Scheduled Install First Week** -- installs updates in the first week of the month.

-  **Windows UpdateAu Scheduled Install Fourth Week** -- installs updates in the fourth week of the month.

-  **Windows UpdateAu Scheduled Install Second Week** -- installs updates in the second week of the month.

-  **Windows UpdateAu Scheduled install Third Week** -- installs updates in the third week of the month.

-  **Windows UpdateAu Scheduled Install Time** -- sets the time of day for scheduled update installation.

-  **Windows UpdateAu No Auto Update** -- turns off automatic Windows updates completely.

### Windows firewall

-  **Windows Firewall Domain Disable Notifications** -- turns off firewall notifications in the domain network profile.

-  **Windows Firewall Domain Enable Firewall** -- turns on the firewall in the domain network profile.

-  **Windows Firewall Standard Disable Notifications** -- turns off firewall notifications in the private or public network profile.

-  **Windows Firewall Standard Enable Firewall** -- turns on the firewall in the private or public network profile.

### Windows store

-  **Windows Store Auto Download** -- blocks automatic download of app updates from the Microsoft Store.

-  **Windows Store Disable OS Upgrade** -- blocks offers to upgrade the Windows version through the Store.

-  **Windows Store Disable Store Apps** -- turns off the Microsoft Store completely.

-  **Windows Store Remove Windows Store** -- removes access to the Microsoft Store app.

-  **Windows Store Require Private Store Only** -- allows installing apps only from the organization's private store.

### Active desktop

-  **Active Desktop NoAdding Components** -- blocks adding Active Desktop components.

-  **Active Desktop No Components** -- turns off Active Desktop components completely.

-  **Active Desktop No Deleting Components** -- blocks deleting Active Desktop components.

-  **Active Desktop No Editing Components** -- blocks editing Active Desktop components.

-  **Attachments Scan With AntiVirus** -- forces an antivirus scan of attachments before they are opened.

### Common dialog

-  **Hide the common dialog back button** -- hides the "Back" button in the standard open and save file dialogs.

-  **Hide the dropdown list of recent files** -- hides the dropdown list of recent files in these dialogs.

-  **Hide the common dialog places bar** -- hides the "Places" bar in these dialogs.

-  **Comdlg32 No Back Button** -- hides the "Back" button in the standard open and save file dialogs.

-  **Comdlg32 No File Mru** -- hides the dropdown list of recent files in these dialogs.

-  **Comdlg32 No Places Bar** -- hides the "Places" bar in these dialogs.

### Network

-  **Network No Entire Network** -- hides "Entire Network" in Network Neighborhood.

-  **Network Connections Allow Advanced TCPIP Config** -- blocks changing advanced TCP/IP settings in connection properties.

-  **Network Connections New Connection Wizard** -- controls whether the New Connection Wizard is available.

### No enum

-  **Remove Computer icon on the desktop** -- removes the "Computer" icon from the desktop.

-  **Hide Network Places** -- hides "Network Places".

-  **Hide Control Panel** -- hides Control Panel.

-  **Disable Chrome downloads** -- blocks file downloads in the Chrome browser.

-  **NonEnum Remove Computer icon on the desktop** -- removes the "Computer" icon from the desktop.

-  **NonEnum Remove My Documents icon on the desktop** -- removes the "My Documents" icon from the desktop.

-  **NonEnum Remove Recycle Bin icon from desktop** -- removes the "Recycle Bin" icon from the desktop.

### MMC

-  **MMCPolicy Restrict Author Mode** -- blocks opening MMC in author mode for creating and editing consoles.

-  **MMCPolicy Restrict To Permitted Snapins** -- allows only snap-ins from an explicitly defined list in MMC.

-  **MMC Policy Restrict Security Configuration and Analysis** -- blocks the snap-in for comparing and applying security templates.

-  **MMC Policy Restrict SMTP Protocol** -- blocks the SMTP server service management snap-in.

-  **MMC Policy Restrict System Properties** -- blocks the System Properties snap-in.

-  **MMC Policy Restrict Administrative Templates (Users)** -- blocks the Administrative Templates snap-in for the user part of Group Policy.

-  **MMC Policy Restrict Administrative Templates (Users) (1)** -- blocks the Administrative Templates snap-in for the user part of Group Policy.

-  **MMC Policy Restrict Administrative Templates (Users) (2)** -- blocks the Administrative Templates snap-in for the user part of Group Policy.

-  **MMC Policy Restrict .Net Framework Configuration** -- blocks the .NET Framework Configuration snap-in.

-  **MMC Policy Restrict Routing and Remote Access** -- blocks the Routing and Remote Access service snap-in.

-  **MMC Policy Restrict AppleTalk Routing** -- blocks the AppleTalk routing snap-in.

-  **MMC Policy Restrict ADSI Edit** -- blocks the ADSI Edit editor for editing Active Directory.

-  **MMC Policy Restrict Authorization Manager** -- blocks the Authorization Manager snap-in.

-  **MMC Policy Restrict Wireless Monitor** -- blocks the wireless network monitoring snap-in.

-  **MMC Policy Restrict Removable Storage** -- blocks the removable storage management snap-in.

-  **MMC Policy RestrictIAS Logging** -- blocks the IAS logging snap-in.

-  **MMC Policy Restrict Public Key Policies** -- blocks the Public Key Policies snap-in.

-  **MMC Policy Restrict Event Viewer** -- blocks "Event Viewer".

-  **MMC Policy Restrict Event Viewer (2)** -- blocks "Event Viewer".

-  **MMC Policy Restrict Removable Storage Management** -- blocks the extended removable storage management snap-in.

-  **MMC Policy Restrict Remote Desktops** -- blocks the snap-in for managing multiple Remote Desktop sessions.

-  **MMC Policy Restrict Certification Authority Policy Settings** -- blocks the Certification Authority policy snap-in.

-  **MMC Policy Restrict Disk Defragmenter** -- blocks the Disk Defragmenter snap-in.

-  **MMC Policy Restrict System Information** -- blocks the "System Information" snap-in.

-  **MMC Policy Restrict Certificates** -- blocks the "Certificates" snap-in.

-  **MMC Policy Restrict IP Security Monitor** -- blocks the IPsec policy monitoring snap-in.

-  **MMC Policy Restrict Shared Folders** -- blocks the "Shared Folders" snap-in.

-  **MMC Policy Restrict Services** -- blocks the "Services" snap-in.

-  **MMC Policy Restrict Computer Management** -- blocks the "Computer Management" snap-in.

-  **MMC Policy Restrict Shared Folders Ext** -- blocks the extended version of the "Shared Folders" snap-in.

-  **MMC Policy Restrict Remote Access** -- blocks the remote access snap-in.

-  **MMC Policy Restrict Security Templates** -- blocks the Security Templates snap-in.

-  **MMC Policy Restrict WMI Control** -- blocks the WMI service management snap-in.

-  **MMC Policy Restrict Local Users and Groups** -- blocks the "Local Users and Groups" snap-in.

-  **MMC Policy Restrict Enterprise PKI** -- blocks the enterprise public key infrastructure monitoring snap-in.

-  **MMC Policy Restrict Distributed File System** -- blocks the Distributed File System snap-in.

-  **MMC Policy Restrict Logical and Mapped Drives** -- blocks the snap-in that shows logical and mapped network drives.

-  **MMC Policy Restrict Device Manager** -- blocks "Device Manager".

-  **MMC Policy Restrict Device Manager (2)** -- blocks "Device Manager".

-  **MMC Policy Restrict Performance Logs and Alerts** -- blocks the Performance Logs and Alerts snap-in.

-  **MMC Policy Restrict FAX Service** -- blocks the fax service management snap-in.

-  **MMC Policy Restrict SNMP** -- blocks the SNMP configuration snap-in.

-  **MMC Policy Restrict Disk Management** -- blocks the "Disk Management" snap-in.

-  **MMC Policy Restrict IAS** -- blocks the IAS service snap-in.

-  **MMC Policy Restrict Group Policy Object Editor** -- blocks the Group Policy Object Editor.

-  **MMC Policy Restrict IPX Routing** -- blocks the IPX routing snap-in.

-  **MMC Policy Restrict IPX RIP Routing** -- blocks IPX routing over RIP.

-  **MMC Policy Restrict IPX SAP Routing** -- blocks IPX routing over SAP.

-  **MMC Policy Restrict Indexing Service** -- blocks the file Indexing Service snap-in.

-  **MMC Policy Restrict DCOM Configuration Extension** -- blocks the DCOM component configuration extension.

-  **MMC Policy Restrict Internet Information Services** -- blocks the IIS web server snap-in.

-  **MMC Policy Restrict Certificate Templates** -- blocks the Certificate Templates snap-in.

-  **MMC Policy Restrict Send Console Message** -- blocks sending messages to other network users through the console.

-  **MMC Policy Restrict RAS Dialin -- User Node** -- blocks the remote access settings node for a specific user.

-  **MMC Policy Restrict Extended View (Web View)** -- blocks the extended (web) view mode of MMC.

-  **MMC Policy Restrict Remote Desktop Services Configuration** -- blocks the Remote Desktop Services configuration snap-in.

-  **MMC Policy Restrict Service Dependencies** -- blocks viewing Windows service dependencies.

-  **MMC Policy Restrict IP Routing** -- blocks the IP routing configuration snap-in.

-  **MMC Policy Restrict DHCP Relay Management** -- blocks DHCP relay management.

-  **MMC Policy Restrict RIP Routing** -- blocks routing over RIP.

-  **MMC Policy Restrict OSPF Routing** -- blocks routing over OSPF.

-  **MMC Policy Restrict IGMP Routing** -- blocks multicast routing over IGMP.

-  **MMC Policy Restrict Connection Sharing (NAT)** -- blocks connection sharing (NAT).

-  **MMC Policy Restrict ActiveX Control** -- blocks inserting ActiveX controls into the MMC console.

-  **MMC Policy Restrict Link to Web Address** -- blocks adding links to web addresses to the MMC console.

-  **MMC Policy Restrict Component Services** -- blocks the "Component Services" snap-in.

-  **MMC Policy Restrict Active Directory Sites and Services** -- blocks the "Active Directory Sites and Services" snap-in.

-  **MMC Policy Restrict Routing** -- blocks the general routing snap-in.

-  **MMC Policy Restrict Certification Authority** -- blocks the Certification Authority snap-in.

-  **MMC Policy Restrict IP Security Policy Management** -- blocks IPsec policy management.

-  **MMC Policy Restrict Group Policy Management** -- blocks "Group Policy Management".

-  **MMC Policy Restrict Telephony** -- blocks the telephony configuration snap-in.

-  **MMC Policy Restrict Active Directory Users and Computers** -- blocks the "Active Directory Users and Computers" snap-in.

-  **MMC Policy Restrict Active Directory Domains and Trusts** -- blocks the "Active Directory Domains and Trusts" snap-in.

-  **MMC Policy Restrict QoS Admission Control** -- blocks the network Quality of Service admission control snap-in.

-  **MMC Policy Restrict FrontPage Server Extensions** -- blocks FrontPage Server Extensions.

-  **MMC Policy Restrict Server Manager** -- blocks "Server Manager".

-  **MMC Policy Restrict Network Policy Server** -- blocks the Network Policy Server snap-in.

-  **MMC Policy Restrict Online Responder** -- blocks the Online Responder snap-in for checking certificate status.

-  **MMC Policy Restrict TPM Management** -- blocks Trusted Platform Module management.

-  **MMC Policy Restrict Health Registration Authority** -- blocks the Health Registration Authority.

-  **MMC Policy Restrict NAP Client Configuration** -- blocks Network Access Protection client configuration.

-  **MMC Policy Restrict Windows Firewall with Advanced Security** -- blocks Windows Firewall with Advanced Security.

-  **MMC Policy Restrict Failover Clusters Manager** -- blocks "Failover Cluster Manager".

### Power shell

-  **PowerShell Enable Scripts** -- blocks running PowerShell scripts.

-  **PowerShell Execution Policy** -- sets the PowerShell script execution policy.

### Task scheduler

-  **Task Scheduler Allow Browse** -- blocks browsing scheduled tasks through the interface.

-  **Task Scheduler Task Creation** -- blocks the user from creating new scheduled tasks.

### Windows error reporting

-  **Windows Error Reporting Disabled** -- turns off sending error reports to Microsoft completely.

-  **Windows Error Reporting Dont Send Additional Data** -- does not send additional data, such as memory dumps, with the report.

-  **Windows Error Reporting Logging Disabled** -- turns off error report logging.

### Windows media player

-  **Windows Media Player Prevent CD DVD Metadata Retrieval** -- blocks retrieving CD/DVD metadata from the internet.

-  **Windows Media Player Prevent Codec Download** -- blocks automatic codec downloads.

-  **Windows Media Player Prevent Music File Metadata Retrieval** -- blocks retrieving music file metadata from the internet.

-  **Windows Media Player Prevent Radio Presets Retrieval** -- blocks downloading preset internet radio stations.
