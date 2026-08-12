Balancer Account Reconciliation Page Overview
=============================================

In This Article: 
-----------------

*   [Overview](#overview)
*   [Group Specification - Details](#group-specification---details)
*   [Account Specification - Details](#account-specification---details)
*   [Account Information](#account-information)
*   [Activity Log](#activity-log)
*   [Comments](#comments)
*   [Documentation](#documentation)
*   [Related Articles](#related-articles)

Overview
--------

The accounts reconciliation page allows users to add transactions and documentation, review account details, and change the account status from not prepared to prepared, to approved and if applicable to reviewed.

Click on an account on the **Accounts and status** page to open the account. 

![image](https://static.adra.com/adra-assistant/images/a4c0085740ce3b785fe4cf71506a315a.jpg)

1.  **Account history and details** - Displays opening balance and account balances from the previous period and year.
2.  **Transaction table** - Add, remove, edit, and document items. 
    *   Learn how to add and manage transactions here [Balancer Add & Manage Transactions](#article:kA06S000000YR4GSAW@Success-Center).
3.  **Drag a reconciliation spreadsheet here** \- The account can be reconciled by uploading a spreadsheet. To learn more, see [Balancer Spreadsheet Based Reconciliations](#article:kA0Ua0000007A4HKAU@Success-Center).
4.  **Transaction table settings** \- Click to save grid settings, reset sorting, reset currency rate, and change which columns are visible.
5.  **More options** \- Click the ellipsis in the top right corner of the screen to:

![image](https://static.adra.com/adra-assistant/images/0188a2fc510d0323f4e599152ad69f9f.jpg)

*   **Print** - Click to print the account details exactly as displayed on the account page to a printer or as a PDF.
*   **Export reconciliation** - Click to email a zip file with account details and attachments (excluding read-restricted documents and non-standard fields).
*   **Account information** \- View current account settings, purpose, and procedure.
*   **Activity log** \- View user activity for the account, including balance updates and imports.
*   **Trend chart** - For accounts with a history of data, view a trend chart to analyze balance variances. The variance analysis function does NOT need to be activated.

6.  **Account balance** - View the account balance and unidentified amount. Each of the detail categories' visibility depends on whether the corresponding column is enabled in the grid settings (Step 4). 
    *   **Eng. amount** refers to the **e**ngagement currency.
    *   **Trans. amount** refers to imported values in the selected currency.
    *   All transactions must use the same selected currency to display the two bottom rows in the **Trans. amount** column.
    *   The **Amount** column on the far right displays the Legal Entity-specific currency.

![image](https://static.adra.com/adra-assistant/images/7bf9597dfc4c774f9786f2b60295c58b.jpg)

7.  **Comments** \- Enter a comment to the account to provide reminders or share necessary information with other users.
    *   Use **@username** to email a user about the account. The email includes the comment and a direct link.
8.  **Documents** - Attach documentation to the account.
    *   **Upload file(s)** - Drag and drop or click **Upload files** to attach documents from the computer to the account.
    *   **Import from prior period** - Click to select attachments from previous periods to add to the account for this period.
    *   **More options** \- Click the **ellipsis** icon to
        *   attach a cloud file via a link
        *   delete selected files
        *   export selected files
    *   **Attachment grid** View, edit, delete, or download/open attachments.
9.  **Add variance explanation** - Click to add an explanation for the variance. This option is available if the **Variance analysis** feature is enabled by an Administrator in **General Settings** and the threshold has been exceeded.
10.  **Change status** \- Depending on the account's current status, settings, and the user's account role, different buttons are displayed. To learn more, see Balancer Account Reconciliation Workflow

Changes made to the account are saved automatically.

Group Specification - Details
-----------------------------

Group account reconciliation follows a similar process as regular account reconciliation, but includes certain added details.  
![image](https://static.adra.com/adra-assistant/images/e7f6483102f2be825e0001c7f49141d7.jpg)   
Click the GL balance link to view the balances for the accounts in the group.

Only accounts with imported balances are visible in the pop-up. The GL balances and sub account balances can be compared to the ledger entries to ensure accuracy.  
![image](https://static.adra.com/adra-assistant/images/e062899dff9e913b640b6da546b13e60.jpg)

Account Specification - Details
-------------------------------

Business Administrators and Local Business Administrators can import transactions, which are then displayed in the **Account specification - Details** grid. Learn more about transaction imports: [Balancer Add & Manage Transactions](#article:kA06S000000YR4GSAW@Success-Center).

Users with a Preparer role for the account can add, remove, and edit items directly in the grid.  
 ![image](https://static.adra.com/adra-assistant/images/d29529455a9a8731280a962ca84db3ee.jpg)

1.  **Group items** - Drag a column header here to group the transaction items by that column's content.
2.  **Transaction table** - Manage transaction details. Notable columns include:
    *   **Recycle Icon** - Click to delete a transaction.
    *   **Info** \- Click to view transaction details and to update scheduled item details. Enable in **Table settings** as shown below.
    *   **Type and Status** - Select the applicable transaction type and status, which are used on the Transaction status dashboard to group and filter transactions. For category definitions, see [Balancer Add & Manage Transactions](#article:kA06S000000YR4GSAW@Success-Center)
    *   **Attachments** - Click the paper clip to add documentation as a file or a link. Learn more in the [Documents](#documentation) section.
    *   **Amount** \- Edit the automatically selected amount.
        *   Note that the account's standard currency is listed in the header. To view additional current details, enable additional currency and rate columns in the **Table settings** as shown below.
3.  **Table Settings** - Click the **settings** icon located in the top left corner of the table to add or remove columns.
    *   Administrators can configure additional columns under **General settings**. To learn more about transaction extra fields, see [Balancer Extra Fields](#article:kA00H0000015ETzSAM@Success-Center).

![image](https://static.adra.com/adra-assistant/images/d07791213308137a87fdea1726639656.jpg)

*   **Reset sort** \- Click to return the order of items to the default.
*   **Reset table** - Click to revert the order and visibility of columns
*   **Reset currency rate** - Click to apply the current rate from the Closing rates page. Only available if the Administrator has enabled currency rates.
*   **Columns** - Click toggles to show or hide columns.

4.  **Bulk actions** - Click to duplicate or delete selected items.
5.  **New row** \- Click to add a new item manually.
6.  **New scheduled item** - Click **\+ New scheduled item** and select **Amortization** or **Accrual**. A pop-up window will appear for adding or editing items. The pop-up windows are identical except for their titles. To learn more about scheduled items, see [Balancer Add & Manage Transactions](#article:kA06S000000YR4GSAW@Success-Center).
7.  **Import items**
    *   **From prior period** - Click to transfer items from a previous period to the current period for the account. A pop-up window displays, as shown below. Select the period from which to import the items. Check the boxes to select the items to import, then click **Import**.

![image](https://static.adra.com/adra-assistant/images/c05275ad07decda7bc14d506e129a155.jpg)

*   *   **From file** - Click to upload a file containing multiple items to the account.

 **HELPFUL HINT**: To view currency and rate columns, they must be enabled in the **Table settings**. Useful columns are;  **Enable currency, Eng. Amount, Trans.** **amount,** and **Rate**. The Amount column in the transaction grid is calculated based on the Trans. Amount and Rate columns. Currency rates are added in **Administration>>Closing rates**. To learn more about closing rates, see [Balancer Closing Rates for Currency Conversion](#article:kA00H000000oOV7SAM@Success-Center). 

Account Information
-------------------

To view the account's current settings, purpose, and procedure, click the ellipsis in the top right corner of the screen and select **Account information**. A pop-up containing the information appears. 

 **HELPFUL HINT**:

To see the account's current settings, click the ellipsis in the top right corner and select Account information.

In the example below, the account cannot be finalized because the review frequency is set to monthly, but no reviewer has been selected. To resolve this issue, either change the frequency to 'never' or select a reviewer. 

Additionally, account settings and role changes do not automatically affect open periods. To update the current period's settings, navigate to **Jobs>>Other jobs>>Update account settings and roles.**

![image](https://static.adra.com/adra-assistant/images/087d11588e620d0c1b78466e639146b0.jpg)

 To learn how to manage settings and assigned roles, see [Balancer Manage Account Settings and Roles](#article:kA00H0000015ETuSAM@Success-Center)

Activity Log
------------

To view the activity log for the account, click the ellipsis in the top left corner of the page and select **Account log**. See the example below.

![image](https://static.adra.com/adra-assistant/images/096f181c3ce9497f965b3f7c4d75196f.jpg)

Comments
--------

All users with access to an account can add comments in the **Comment** section. The comments display in order from newest to oldest. Administrators can enable **Show comments from previous periods** in **General Settings** to include comments from previous periods. 

Comments made during account review or rejection are stored in the **Comment** section of the reconciliation.

![image](https://static.adra.com/adra-assistant/images/5d59198c9b124c0ea133d6480a58946b.jpg)
--------------------------------------------------------------------------------------------

*   To edit or delete a comment, click the three dots in the existing comments field. 
*   Use **@mention** to send e-mail notifications to prompt other users to address the account. 

 **WARNING**: Comments can only be deleted and edited by the user who created them, in the period they were created.

Documentation
-------------

In addition to adding documentation to individual transactions, users can add documentation to the account. 

![image](https://static.adra.com/adra-assistant/images/29b9788d1e551984c6cc8d147d9bee90.jpg)

1.  **Select files** - Click to upload documentation
2.  **Add link** - Click to add a URL.
3.  **Import from prior period** - Click to copy documentation from a previous period

![image](https://static.adra.com/adra-assistant/images/15916981db8190cd5ec5917615ea8d76.jpg)

3.  1.  Select the period to copy from
    2.  Select relevant documents
    3.  Click Import items
4.  Bulk actions

![image](https://static.adra.com/adra-assistant/images/2bd5c7ff7eef8c0af73e72a6f3c4ddfa.jpg)

*   *   **View selected** documents in a new browser window. 
    *   **Delete selected** documentation from the account.
    *   **Download selected** documents.

Click the name of an existing document to view a read-only version in a separate browser tab.

### Documentation Details

The image on the left displays the pop-up for adding a documentation file, while the image on the right shows the pop-up for adding a link to a documentation file. These pop-ups are identical whether you're adding documentation to transactions or directly to the account. 

The **Add Link** pop-up includes an option to enter a document link in the **Link/URL** field, as shown on the right. The remaining options are identical and are described below.

![image](https://static.adra.com/adra-assistant/images/85344c45ad80280bab43aa423c1d493d.jpg)

*   **Description** \- Enter a description of what the documentation contains.
*   **Everyone with access to the legal entity** - Select to allow all users that have access to the relevant legal entity to view and download the documentation
*   **Specific users** - Select to restrict viewing privileges to selected users (refer to the example on the right).

Related Articles
----------------

*   [Balancer Add & Manage Transactions](#article:kA06S000000YR4GSAW@Success-Center)
*   [Balancer Accounts and Status Page Overview](#article:kA00H000000kJ8eSAE@Success-Center)
*   [Balancer Amortizations and Accrual Items](#article:kA06S0000019MBoSAM@Success-Center)
*   [Balancer General Settings](#article:kA00H000000kJ8USAU@Success-Center)
*   [Balancer Jobs Page Basics](#article:kA00H000000kJA6SAM@Success-Center)