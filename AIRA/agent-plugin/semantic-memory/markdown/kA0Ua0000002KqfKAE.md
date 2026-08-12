Matcher Daily Reconciliation
============================

The Daily Reconciliation feature supports organizations that have regulatory requirements for reporting.  
Users can create system-generated Daily Reconciliation Reports with configurable approval and segregations of duties within an enabled Reconciliation Group. Generated reports and corresponding workflows, logs, and approvals are stored within a page directly in Adra Matcher, eliminating the need to track across multiple systems.  
  
To utilize this feature, first do the following:

1.  Enable the feature in **General Settings**
    1.  Navigate to **Administration>>General Settings**
    2.  Expand the **Daily Reconciliation Settings** option
    3.  Enable the toggle
    4.  Configure settings as needed. See **Related Articles** to learn more.
2.  Enable the feature for specific reconciliation groups
    1.  Navigate to **Administration>>Reconciliation Group**
    2.  Locate the relevant reconciliation group
    3.  Toggle **Enable Daily Reconciliation** feature

 **WARNING**: Only one daily reconciliation can be prepared per reconciliation group each day. Reconciliation groups that already have reports for a selected date will not be available to create new reports on that same date. If a mistake occurs, users can delete the report and prepare it again.

  
  
The Daily Reconciliation Page
-----------------------------------

When enabled, the **Daily Reconciliation** page becomes accessible in the left-hand menu.  
![image.png](https://static.adra.com/adra-assistant/images/211c652384f6273f8080e22757131d85.jpg)

1.  **Add to Daily Reconciliatio**n - Click to prepare a report.
2.  **Report Grid -** View report details and status, and Approve, download, revert, and delete reports.

### Prepare a Daily Reconciliation Report

Click **Add to Daily Reconciliation** to prepare a new report.

![image.png](https://static.adra.com/adra-assistant/images/48c78b9d785d13c356ebc6e0944e9852.jpg)

1.  **Add Daily Reconciliation for current balances and open transactions** - Select to prepare a report that contains currently open transactions and balances. Select the reconciliation date for the report.
2.  **Add Daily Reconciliation for prior booking date** \- Select to prepare a historical report that includes transactions that match the selected booking date. See example below:

![image.png](https://static.adra.com/adra-assistant/images/0a8c49c910635e9e00f8db602b753218.jpg)

3.  **Reconciliation group** - Select which reconciliation groups to include.
4.  **Add** \- Click **Add** to Prepare the report.

### The Reports Grid

After a report has been prepared, the Daily Reconciliation grid automatically includes a filter for the specified date.  
  
![image.png](https://static.adra.com/adra-assistant/images/cb21f30e8ae037149e976ff4de79ebf0.jpg)

1.  **Grid action buttons** \- Select one or more of the reports in the grid.
    *   **Approve selected** \- Click to approve the selected accounts. This option is only available if **Require approval of Daily Reconciliation** is enabled in **General Settings**.
    *   **Export selected** - Click to export the selected reports' details shown in the grid to Excel. To download each report, click the **Download** button in the **Actions** column. 
    *   **Delete selected** \- Click to delete the report.
    *   **Grid settings** - Click to view and enable/disable grid columns. Click and drag column headers in the grid to reorder them.
2.  **Detail** \- Click the details icon to view information about the report.
    *   **Account Info Tab** - View balance, number and sum of open transactions, and date for last verified Balance.![image.png](https://static.adra.com/adra-assistant/images/690bd6736504f9ad0272e80a237e61ac.jpg)

*   **Activity Logs Tab** - Click to view report activity, such as by who and when the report was prepared and approved.

![image.png](https://static.adra.com/adra-assistant/images/836ad442fa1019ba135084bfe5f55f68.jpg)

*   **Report Logs Tab** \- Click to view the report generation log, which shows all timings, steps, and any errors encountered during the process.

![image.png](https://static.adra.com/adra-assistant/images/70d3ff0794437698e784a5a02bb894a4.jpg)

3.  **Actions** \- The action buttons on the right side of the report allow the user to perform the following actions:

![image.png](https://static.adra.com/adra-assistant/images/c3d89cac9c3ea1e2b2d961b26eba86ff.jpg)

*   **Approve button** - Click to approve the report. 
    *   When a report is approved, the approve button is replaced with a revert button. A Business Admin can click it to undo the approval.![image.png](https://static.adra.com/adra-assistant/images/dbbf8c0abf378282858d9d2f69433c9f.jpg)
*   **Download button**\- Click to download the report.
*   **Recycle button** \- Click to delete the report.

 **HELPFUL HINT**: To get an overview of the accounts over time, such as comparing balances, use the column header funnels to filter the report list on for example reconciliation group ![image.png](https://static.adra.com/adra-assistant/images/50602745fb0c87d1b167126f2cb006f7.jpg). Then, click **Export selected** to export the filtered list.

Related Articles
----------------

*   [Matcher General Settings](#article:kA00H000000oOvjSAE@Success-Center)
*   [Matcher Reports](#article:kA06S0000019Ly1SAE@Success-Center)
*   [Matcher Report Templates](#article:kA06S000000YRPcSAO@Success-Center)