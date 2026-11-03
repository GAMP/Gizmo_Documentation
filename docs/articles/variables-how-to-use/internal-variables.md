---
title: Internal variables
order: 1
---

Gizmo has built-in variables that you can use in settings, scripts and tasks.

**List of variables:**

<table header="row">
<colgroup><col width="310"/><col width="260"/><col width="260"/></colgroup>
<tr>
<td>

Variable

</td>
<td colspan="2">

Value

</td>
</tr>
<tr>
<td>

%HOST_NUMBER%

</td>
<td colspan="2">

Device number

</td>
</tr>
<tr>
<td>

%HOST_NAME%

</td>
<td colspan="2">

Device name in Gizmo Manager

</td>
</tr>
<tr>
<td>

%CUR_HOST_GROUP_NAME%

</td>
<td colspan="2">

Host group name

</td>
</tr>
<tr>
<td>

%CUR_HOST_GROUP_ID%

</td>
<td colspan="2">

Host group ID

</td>
</tr>
<tr>
<td>

%CUR_USER%

</td>
<td colspan="2">

Current user's username

</td>
</tr>
<tr>
<td>

%CUR_USER_ID%

</td>
<td colspan="2">

Current user's ID

</td>
</tr>
<tr>
<td>

%CUR_USER_STATE%

</td>
<td colspan="2">

Current user state

</td>
</tr>
<tr>
<td>

%CUR_USER_TYPE%

</td>
<td colspan="2">

User account type

</td>
</tr>
<tr>
<td>

%CUR_USER_GROUP%

</td>
<td colspan="2">

Current user group

</td>
</tr>
<tr>
<td>

%CUR_APP_PROFILE%

</td>
<td colspan="2">

Current app group

</td>
</tr>
<tr>
<td>

%CUR_SEC_PROFILE%

</td>
<td colspan="2">

Current security profile

</td>
</tr>
<tr>
<td>

%USERMINUTESLEFT%

</td>
<td colspan="2">

Number of minutes available to the user

</td>
</tr>
<tr>
<td>

%CUR_WORKING_DIRECTORY%

</td>
<td colspan="2">

Current working directory of Gizmo Client

</td>
</tr>
<tr>
<td>

%ENTRYTITLE%

</td>
<td colspan="2">

App name

</td>
</tr>
<tr>
<td>

%ENTRYPUBLISHER%

</td>
<td colspan="2">

App publisher name

</td>
</tr>
<tr>
<td>

%ENTRYDEVELOPER%

</td>
<td colspan="2">

App developer name

</td>
</tr>
<tr>
<td>

%CUR_EXE_PATH%

</td>
<td colspan="2">

Current app launch path

</td>
</tr>
<tr>
<td>

%CUR_EXE_ARGUMENTS%

</td>
<td colspan="2">

Current app launch arguments

</td>
</tr>
<tr>
<td>

%CUR_EXE_WORKING_DIRECTORY%

</td>
<td colspan="2">

Current working directory of the app

</td>
</tr>
<tr>
<td>

%ENTRYSOURCE%

</td>
<td colspan="2">

Source directory of the app (set in the **Deployment** section)

</td>
</tr>
<tr>
<td>

%ENTRYDESTINATION%

</td>
<td colspan="2">

Destination directory of the app (set in the **Deployment** section)

</td>
</tr>
<tr>
<td>

%LICENSE%

</td>
<td colspan="2">

License key used for the app (only for use in the **Licenses** subsection of apps)

</td>
</tr>
<tr>
<td>

%LICENSEKEYUSER%

</td>
<td colspan="2">

Name of the user who uses the license key

</td>
</tr>
<tr>
<td>

%LICENSEKEYUSERID%

</td>
<td colspan="2">

ID of the user who uses the license key

</td>
</tr>
</table>

## Windows environment variables

Besides the built-in Gizmo variables, you can use Windows environment variables in app paths, tasks and scripts. This helps when a path differs from PC to PC -- for example, when it contains the Windows user name:

-  `%LocalAppData%` -- `C:\Users\<user name>\AppData\Local`;

-  `%AppData%` -- `C:\Users\<user name>\AppData\Roaming`;

-  `%UserProfile%` -- `C:\Users\<user name>`;

-  `%ProgramData%` -- `C:\ProgramData`;

-  `%windir%` -- `C:\Windows`.

For example, Discord installs into the Windows user profile, so its path is different on every PC. Instead of the full path, enter `%LocalAppData%\Discord\Update.exe` -- Windows fills in the right folder by itself. For more examples, see the reference [Paths and launch arguments for launchers and applications](./../../tutorials/client-shell/launch-arguments.md).
