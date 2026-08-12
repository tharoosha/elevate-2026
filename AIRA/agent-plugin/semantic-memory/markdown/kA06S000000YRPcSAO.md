Balancer Add & Manage Transactions
==================================

In this article 
----------------

*   [Manual Transaction](#manual-transaction)
    *   [Type & Status Definitions](#Type_and_tatus_Definitions)
*   [Accrual and Amortization](#accrual-and-amortization)
*   [Transfer Items From Prior Period](#transfer-items-from-prior-period)
    *      [Import From Prior period](#import-from-prior-period)
    *      [Carry Forward](#carry-forward)
*   [Import Items In Bulk](#import-items-in-bulk)
    *       [Import Items To Individual Accounts](#import-items-to-individual-accounts)
    *       [Bulk Import Items](#bulk-import-items)

 **HELPFUL HINT**: The following article displays the new user interface. To enable the new user interface, turn on the toggle at the top of the **Accounts and status** page.

![image](https://static.adra.com/adra-assistant/images/751165e7148a0aa06c48f689a3ea2ca6.jpg)

  
Transaction lines can be added in three ways:

1.  Manually on the account reconciliation page
2.  Copy transactions from the previous period
3.  In bulk on the **Jobs** page or the account reconciliation page.

Manual Transaction
------------------

Transactions can be added directly on the accounts page in three ways:

![image](https://static.adra.com/adra-assistant/images/7f267d1d942c14b8cd34dd5040b9cc88.jpg)

1.  **Reconciliation Spreadsheet** - Transactions and details can be added by uploading a reconciliation spreadsheet. To learn more, see [Balancer Spreadsheet Based Reconciliations](#article:kA0Ua0000007A4HKAU@Success-Center)
2.  **Manually** \- Transactions can be added manually line by line.
3.  **Import Items** - Transactions are imported from a previous period OR from an import file.

This process is completed by the preparer on the Account reconciliation page. To add lines manually, follow the steps below: 

1.  Navigate to **Account and status** and click an account.

![image](https://static.adra.com/adra-assistant/images/cc4b793c59d4dc43119b72c7f32a2439.jpg)

2.  Click **+New row**
3.  Enter transaction line details

![image](https://static.adra.com/adra-assistant/images/ff33537c3801c20f9bb01f12428fa11a.jpg)

2.  *   **Date** - Select the correct **Date** for the transaction.
    *   **Type and Status** - This feature helps filter and group transactions on the **Transaction item status** page, enabling administrators to oversee reconciliation health and minimize risks. See the table below for category definitions.
    *   **Reference and text** - Enter details in the reference and text field.
    *   **Attachments** \- Click the paper clip icon to add documentation.
    *   **Amount** \- Amount is automatically added but can be modified.
    *   **Rates** \- Other currencies can be selected if different closing rates are utilized. To learn more about closing rates, see [Balancer Closing Rates for Currency Conversion.](#article:kA00H000000oOV7SAM@Success-Center)
3.  Repeat the process to add the remaining transactions.
4.  Click **Save**

The table below describes the common uses for each transaction status and type.

**Transaction Status**

**Transaction Type**

*   **( - )  Blank**.  
*   **Required Adjustment** - Use when the reconciliation item is a mis-posting that requires reclassification or entry has not yet been made.
*   **Timing** \- Select when a timing difference causes the reconciliation item. 
*   **Balance Detail** - Use when the line item describes the balance (bank statement).
*   **Unresolved** - Use when the cause of the reconciling amount has not been identified.    

*   **Rounding** \- Select if the reconciliation line represents rounding. 
*   **Balance External** \- Select for external balances that you are reconciling to (bank statement).
*   **Ledger Transaction** - Select when the reconciliation line support is an internal schedule or schedules that support general ledger transactions (i.e., an accrual balance that is tied out to an internal calculation schedule).
*   **Bank Transaction** - Select when the reconciliation line support is a bankside transaction.
*   **Subledger Transaction** - Select when the reconciliation line support is a sub-ledger balance (i.e., CS Fixed Assets balance or AR/AP aging balances).  

 **HELPFUL HINT**:

*   **Duplicate transaction row** \- CTRL + D.
*   **Navigating the Grid** - Use the Page Up and Page Down keys.
*   **Navigating adjacent cells in the Grid** - Use up, down, left, and right arrow keys
*   **Navigating to editable cells** \- Use Tab and Enter Keys
*   **Add a new transaction** - Use Enter while you are at the last cell of the last row. A new transaction will be created with default values.

Accrual and Amortization
------------------------

To add scheduled items, click **\+ New scheduled items**. To learn more, see [Balancer Amortizations and Accrual Items](#article:kA06S0000019MBoSAM@Success-Center).  
 ![image](https://static.adra.com/adra-assistant/images/16c8d7681ee622b05dc38b92801ccf3b.jpg)  
 

Transfer Items From Prior Period
--------------------------------

Transactions and scheduled item(s) can be transferred from a reference period to a target period in two ways:

1.  **Import from prior period** for individual accounts on the account's reconciliation page
2.  **Carry forward** on the jobs page. This option is only available for administrators,

### Import From Prior Period

To copy transactions and/or scheduled items between periods for a specific account, follow these steps:

1.  Click on an account on the **Accounts and status** page.

![image](https://static.adra.com/adra-assistant/images/f5cbd98524c1cde1083b6b1895f65919.jpg)

2.  Select the correct reference period in the pop-up.

![image](https://static.adra.com/adra-assistant/images/51f9889c58a5c7b97ce2edc173214fe1.jpg)

3.  Click **Import**

### Carry Forward

To transfer transactions and scheduled items from one period to another for multiple accounts navigate to **Jobs>>Other periods>>Carry forward**. Appropriate account setting and job settings are required. Learn more about **Carry forward**: [Balancer Carry Forward](#article:kA06S000000YQgdSAG@Success-Center).

Import Items In Bulk
--------------------

Transactions can be imported in bulk in two ways:

1.  Import items to individual accounts on the accounts reconciliation page
2.  In bulk for multiple legal entities on the **Jobs** page. This option is only available for administrators,

### Import Items To Individual Accounts

Transactions can be imported to individual accounts on the specific account reconciliation page.  
Follow these steps:

1.  On an accounts reconciliation page, click **Import items**.

![image](https://static.adra.com/adra-assistant/images/00f9190f4314a3a8e54dc67cad9607ad.jpg)

2.  Click **From file.** The **Import items** page opens.

![image](https://static.adra.com/adra-assistant/images/f703d564b4b84a7b6754e61f843e75f1.jpg)

3.  The import format differs from the standard import format on the Jobs page, as it does not require the legal entity number and account number. Click the link in the blue box to download a template.
4.  Checkboxes
    *   **Non-selected**  - The new transactions will be added to the existing list of transactions.
    *   **Exclude already imported items** - Transactions with the same amounts, reference numbers, and dates as existing transactions will be excluded.
    *   **Replace all transactions in this account** - Any transactions currently in the account will be removed and replaced by the transactions in the file.
5.  Click **Upload files** or drag and drop the transaction file(s).
6.  Click **Import**

The transactions are added to the accounts reconciliation page.

### Bulk Import Items

This functionality is available to Business Admins and Local Business Admins.  
To import transactions across multiple legal entities, follow these steps:

1.  Navigate to **Jobs>>Import transactions**.

![image.png](https://static.adra.com/adra-assistant/images/def4cbced41891a67668be5234204b55.jpg)

2.  **Transaction template** - Click to download the transaction import template.
3.  **Select period** - Select the desired period
4.  **Import configurations**
    *   **Exclude already imported items** \- Check to prevent duplicates.
    *   **Replace all items on accounts affected by this import** - Check to remove all current transactions from the affected accounts and replace them with the import file.
5.  **Upload files** - Click to select and import the transaction file.
6.  **Import** \- Click to complete the job. The job page loads.

![image.png](https://static.adra.com/adra-assistant/images/aaff89ca77acba681ee37e8b0f39baff.jpg)

7.  **Review and approve** - Click to verify transactions and complete the job.

Related Articles
----------------

*   [Balancer Account Reconciliation Page Overview](#article:Balancer-TroWorking-With-An-Account@Success-Center)
*   [Balancer Carry Forward](#article:kA06S000000YQgdSAG@Success-Center)