---
title: Logs
order: 3.6
searchPhrases:
  - Log
---

**IMAGE: Logs section with the filter bar and the table of log records**

The **Logs** section collects the logs of the Gizmo system:

-  messages from Gizmo Client;

-  messages from Gizmo Server;

-  operations, critical errors and changes in how the service or the shell works;

-  notifications about tasks run with a timer and a scenario, about script runs and more.

The section opens from <cmd text="Logs"/> in the left menu.

The screen has a filter bar at the top and the table of records below it.

## Records table

Each row is one log record.

-  **Id** -- the record number. Records are numbered in ascending order, and the latest is shown first in the list.

-  **Message** -- the text of the record: what exactly happened, a short description of the error.

-  **Category** -- which part of the system the record belongs to.

-  **Module Type** -- which program made the record: the service, the manager, the client or the web manager.

-  **Version** -- the version of the program that made the record.

-  **Host Name** -- the host the event is linked to.

-  **Time** -- when the record appeared in the log.

Records are shown 50 per page. Use the "\< >" arrows in the bottom right corner of the page to move between pages.

While the page is open, new records do not appear live. To show new records in the log, click <cmd text="Refresh"/> in the top right corner.

## Filters

The filters are in the bar above the table and work together: if you set several, only the records that match all the conditions remain.

### Module Type

Leaves only the records from the selected part of the system.

-  **All** -- no filtering by part of the system.

-  **Service** -- Gizmo Server, that is, the server service itself.

-  **Manager** -- the Gizmo Manager app.

-  **Client** -- Gizmo Client on the gaming PCs.

-  **Web Manager** -- Gizmo Manager opened in a browser.

### Message Type

Leaves the records of the selected severity. The available filters are:

-  **All**

-  **Information**

-  **Warning**

-  **Error**

-  **Event**

### Message

Searches the records by text. Enter a word or part of it in the field, keep the **Contains** condition and click <cmd text="Apply"/>.

The search runs on the **Message** column -- the same text you see in the table.

### Date

Limits the records by time. The period is set on the left, and two calendars with time fields for exact limits are on the right.

-  **Custom** -- any range: select the start and end dates in the calendars, and set the time if needed.

-  **Greater Than** -- everything after the specified moment.

-  **Less Than** -- everything before the specified moment.

-  **Last Day**, **Last Week**, **Last Month**, **Last Year** -- preset periods counted back from now.

The selected period applies when you click <cmd text="Apply"/> and is discarded with <cmd text="Cancel"/>.

If the table is still empty after you reset all the filters, the system has not recorded any events yet -- this happens on a freshly deployed server.
