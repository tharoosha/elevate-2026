Matcher Importing Files
=======================

The **Import** page allows Matcher to receive data, which can then be automatically reconciled or manually matched.  
There are multiple methods for completing an import.

*   **Import Wizard** – This option is used when importing files without an existing import configuration. See [related articles](#related-articles) for more info. 
*   **New Import button** – When Automatic Import Configurations do not exist, standard users (who cannot access the Import Wizard) typically utilize this function.
*   **Automatic Import** –  If Automatic Import Configurations have been created, this is the most efficient way to import files. Automatic imports can also be used with the Integration Hub. See [related articles](#related-articles) for more info. 

 **HELPFUL HINT**:

*   **Standard users**: Standard users can not access the import wizard, and can only import files to Matcher given that the import templates have been configured. 
*   **Accepted import file types**: XLSX, XLS, CSV, txt (all text-readable files) and some XML formats (CAMT53, CAMT54, ISO2022)

Importing Files
---------------

  
To Import files, navigate to **Import>>** **+ New Import**.
--------------------------------------------------------------

![import main screen.jpg](https://static.adra.com/adra-assistant/images/da8a905db4c55360b0ffb5277eefeb46.jpg)

The New Import page opens.

![2024-03-19_19-28-36.png](https://static.adra.com/adra-assistant/images/d4bfc6cba67319952b04f44e6856830e.jpg)

1.  **Settings**
    *   Check **Exclude duplicate transactions** to prevent transactions from importing multiple times. See **Helpful Hint** blow for details.
    *   Check **Use from-to date (BDate)** to import only transactions that fall within a selected range of booking dates.
2.  **Select Legal Entity** – Select **Across All Legal Entities** or the individual **legal entity** to which the file should be imported.
3.  **Import type** – Select **Transaction Import** or **Balance Control Import**.
4.  **Select Import** – Select the import template that corresponds to the file being uploaded.
5.  **Select Period** – Select the period to import only the transactions that fall within that period. This functionality is only available for certain Import types.
6.  **Import transactions from-to date** – If **Use from-to date** was enabled in the Settings, select a range of dates to import only the transactions with a booking date that falls within the range.
7.  **Upload files** – Click **Upload files** or use the drag and drop feature.
8.  **Start Import** – Click to begin the import.

 **HELPFUL HINT**: If **Exclude duplicate transactions** is enabled during a file import, Matcher compares new transactions to existing using the following parameters:

*   Amount
*   BDate
*   Reference number 

If one of the new transactions contain the exact same information in ALL of these three fields as an existing transactions, it will not be imported.

Note that if two of the same transactions exist within the same file, they will be imorted regardless.

Review Import
-------------

The configuration settings will determine whether the files are imported with or without approval.

The following markers give users information on the import status. 

![2024-03-19_18-50-07.png](https://static.adra.com/adra-assistant/images/514e1033783b07c0cc773ed49a401562.jpg)

*   **Paused** \- The file requires a review. Click the import to view and verify details.

![2024-03-19_18-48-02.png](https://static.adra.com/adra-assistant/images/84a2e4f79467a99023c778c39aa2942e.jpg)

*   **Finished** \- The import was successful.
*   **Alert** - The yellow numbered icon overlaying the **Finished** icon indicates the number of issues caused by missing or incorrectly formatted obligatory details in the imported file. Click the import to review any warnings.

![User-added image](https://static.adra.com/adra-assistant/images/558be216a35365ed51081b74d9a86dc3.png)

*   **Warning** - The file was missing, incorrect, or an error occurred during the import. Click the import to view details and cancel.

![2024-03-20_10-48-07.png](https://static.adra.com/adra-assistant/images/ff220a29ea499343dae664a4fc0ea28a.jpg)

*   **Canceled** \- Imports that have been canceled.

![image (17).png](https://static.adra.com/adra-assistant/images/d4f29ec9e4e4c9a7874ce45b4ce4a40f.jpg)

*   **Error** \- This import status usually occurs during implementation if something is wrong in the underlying XML and the auto import has been configured. 

Imported files are sorted by status on the **Import** page as displayed below.

![image](https://static.adra.com/adra-assistant/images/cb44acd78e9fdef75ed50b16c5680b36.jpg) 

Finished imports can be filtered. Check one or more of the five boxes.

*   **Nothing Imported** - Lists imports that display (No transactions imported) in the description field
*   **Completed** - Lists imports that have successfully imported with no errors or warnings.
*   **Completed with warnings** \- Lists imports that have been imported successfully, but contain missing or incorrectly formatted obligatory details.
*   **Canceled** \- Lists imports with the status canceled.
*   **Error -** 

 **HELPFUL HINT**: Click Go to **Import History** to view imports, unmatch transactions and undo imports.

If Automatic Import Configurations have been created, the user can use the drag-and-drop feature shown below rather than clicking on the New Import button. This will automatically start the import of the file(s). 

![image.png](https://static.adra.com/adra-assistant/images/cc9f7c74ee5fc45fda73c8ecb08a08af.jpg)

Reviewing Imports
-----------------

The following are the steps to review an import

1.  Select the accounts to import.
2.  Verify that the balance is correct against the ledger or bank.
3.  Click **View Details** to see transaction details.
4.  Click **Complete Import** to complete the import.
5.  Click **Cancel Import** to cancel the import.

 **BEST PRACTICE**: Review all Warnings before completing the import.

The Review and accept imports window shows the following information.![imports reviewing items.jpg](https://static.adra.com/adra-assistant/images/e9c9f0f2e8b9f515009afa27546ba8d7.jpg)

1.  **Select** \- allows users to select certain line items
2.  **Legal Entity** - details the Legal Entity the import belongs to
3.  **Reconciliation Group** \- shows which Reconciliation Groups the import belongs to
4.  **Account No** - shows the account number the import belongs to within the Reconciliation Group
5.  **Balance Change** - shows how the balance has changed as a result of this import
6.  **Balance** \- shows the balance in this import
7.  **Currency** \- shows the currency for the Reconciliation Group
8.  **Transactions** - shows the number of transactions within the import
9.  **View Details** - shows the details of the import
10.  **Cancel Import** - allows users to cancel the import
11.  **Complete Import** - allows users to complete the import

Related Articles
----------------

*   [Matcher Import Wizard](#article:kA00H000000oPIYSA2@Success-Center)
*   [Matcher Edit Import Configurations](#article:kA00H000000oOhDSAU@Success-Center)