Balancer - How to Import Balances & Transactions
================================================

Excel files are used to upload balances and transactions in bulk to accounts across multiple legal entities. Balancer's default template or a custom import template can be used. Learn more here: [Balancer Custom Import XML](#article:kA00H00000048OmSAI@Success-Center).

 **WARNING**: If the file format does not match the certain criteria, the file can fail to import. Learn more here: [Balancer Balance & Transaction Import Troubleshooting](#article:kA06S000000YRSMSA4@Success-Center).

The pages and processes for both balance and transaction import jobs are similar.  
To import balances, navigate to **Jobs>>Import balances**.  
To import transactions, navigate to **Jobs>>Import items**.

Import Balances
---------------

![image](https://static.adra.com/adra-assistant/images/b8abec4e9e2c195b0d8aa241619e0b4b.jpg)   
  

1.  **Template** – Click 'A file format description can be found here' to download the default import file format.
2.  **Select fiscal year and period** – Select the fiscal year and period to which balances should be imported.
3.  **Select file(s)** – Click and locate the file(s). Multiple files can be uploaded at once.
4.  **Import** – Click to import the loaded file(s).

  
The Jobs page loads.  
Click Review and approve for the import job.

![2023-09-14_16-26-10.png](https://static.adra.com/adra-assistant/images/80f3846f326c882392cd6f318db0a6e2.jpg) 

Review and Approve a Balance Import
-----------------------------------

On the review page, verify that the balances are correct.

 ![image](https://static.adra.com/adra-assistant/images/22769477b50f9e0c8ca97c66e99a4b24.jpg)

1.  **Import and open**
    *   **Import** \- Check Import for all or individual legal entities to import balances. Unselect a legal entity to not import balances for that particular entity.
    *   **Open** \- Check all or individual legal entities to open the period for those legal entities. If the boxes are unselected, the period must be opened manually on **Unopened** tab on the **Periods** page. To learn more, see [Balancer Periods Page Overview.](#article:kA00H000000kJ9XSAU@Success-Center)
2.  **Changes**
    *   **Accounts** \- Click View to review and verify any balance changes.
    *   **Total balance** \- Review legal entity balance changes.
    *   **New accounts** – Click View to review and configure any new accounts.

![image](https://static.adra.com/adra-assistant/images/252a75958be4b0b73fbb8ac201ab90fe.jpg)

Click the Edit icon in the Actions column to open the New account page where account settings can be configured.  
Click Confirm selected when the necessary updates are made.

3.  **View import messages** – Click to view potential import errors.
4.  **Review all changes** – Click to verify the import.
5.  **Cancel import –** Click to cancel import **/** **Complete import** – Click to import updated balances.

**HELPFUL HINT:** [**Job automation**](https://trintech.lightning.force.com/articles/Knowledge_Article/Balancer-Job-Automation-Overview) enables automatic review and approval of files uploaded by a Business Admin on the **Jobs** page or imported via the Integration Hub (IH), SFTP or similar, based on spcified criteria.   
Thresholds can be set to prevent the import of corrupt or incorrect files. If a balance or item import exceed the set thresholds, a review link displays on the Jobs page.

Import Items
------------

![image](https://static.adra.com/adra-assistant/images/d72acb7ff053a2864a7d512a1ecf5e9d.jpg)

1.  **Template** – Click 'A file format description can be found here' to download the default import file format.
2.  **Select fiscal year and period** – Select the fiscal year and period to which balances should be imported.
3.  **Checkboxes**:
    1.  Check the **Exclude already imported items** to only import new items. Duplicate items will be identified based on the amount (Legal entity currency), date, reference, text and transaction type. This checkbox is chosen by default.
    2.  Check the **Replace all items on accounts affected by this import** to overwrite existing items.
    3.  **Uncheck both boxes** to keep populating the item list without affecting previously imported items.
4.  **Select file(s)** – Click and locate the file(s). Multiple files can be uploaded at once.
5.  **Import** – Click to import the loaded file(s).

Review and Approve a Transaction Import
---------------------------------------

On the review page, verify that the transactions are correct.

![image](https://static.adra.com/adra-assistant/images/7bf810d5d5b6cb554d452db334017832.jpg)

1.   **Import all items** – Check legal entities you wish to import transactions for. 
2.  **Accounts** – Clink links to view and select individual accounts to import transactions for.
3.  **View import messages** – Click to view potential import errors.
4.  **Cancel job –**  Click to cancel job **/** **Complete job –** Click to import transactions.

Related Articles
----------------

*   [Balancer Balance & Transaction Import Troubleshooting](#article:kA06S000000YRSMSA4@Success-Center)
*   [Balancer Job Automation Overview](#article:kA00H000000oOcrSAE@Success-Center)
*   [Balancer Edit Account Settings](#article:kA00H0000015ETuSAM@Success-Center)