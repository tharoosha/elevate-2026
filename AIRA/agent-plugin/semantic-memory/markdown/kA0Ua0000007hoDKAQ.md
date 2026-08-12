Balancer Spreadsheet Based Reconciliations
==========================================

The spreadsheet feature allows users to complete the account reconciliations in Excel and then upload the spreadsheet directly into Balancer. It was designed especially for teams that still prefer using spreadsheets but want to benefit from automation and validation in Balancer.

The spreadsheet functionality allows users to tag specific parts of their Excel reconciliation files, like the final balance and individual line items, using simple markers such as `#bal` and `#item`. The tags help Balancer recognize and import the correct data from the spreadsheet automatically. 

The image below shows an example of tags used to identify the balance (#bal) and a transaction (#item), as well as Trans.amount (#TRAmount), Currency and Rate.

![image](https://static.adra.com/adra-assistant/images/f091fc110fd5c5089bfd7da038762b04.jpg)

How to Use and Upload Spreadsheets
----------------------------------

### 1\. Prepare the Spreadsheet

*   Open your normal reconciliation template.
*   Add anchors in the cell to the right of the Amount column (see example image above and below).
    *   Mark the reconciliation balance with `#bal`
    *   Mark each line item with `#item`.
*   Add optional details tags in parentheses, like dates or descriptions. (see image below)
    *   The optional tags can be placed in any order, separated by a semicolon (;).
    *   Repeated tags in the same anchor are ignored; only the first occurrence is used.
*   Anchors can be placed on any pages/sheets in the same spreadsheet, for example, if the balance is on the first sheet and line items are on one of the following sheets.

![image](https://static.adra.com/adra-assistant/images/38658bbe4232c415149bbeabbc17476e.jpg)

#### Tag Formating

*   Anchors should _preferably_ be placed directly right to the cell that contains the amount.
*   An anchor must start with either **#bal** or **#item** tag:
    *   _Reconciliation balance_ needs to be tagged with **#bal**
    *   _Reconciliation item_ needs to be tagged with **#item**
*   When specifying multi-currency transactions, **TRAmount** tag is required, not otherwise**.**
*   Other optional tags can be placed inside parentheses. They can be placed in any order, separated by a semicolon (;).
*   Tags cannot be repeated in the same anchor. Only the first occurrance of a tag in the same anchor will be considered valid, repeating tags will be ignored.
*   Tags are **not** case sensitive.
*   Use (**\=**) to assign values to the optional tags.
*   Use square brackets **\[ \]** to specify the cell location (column+row combination) which contains the tag value.
    *   Example: **Amount=\[C5\]**
    *   If anchor is placed on the same row as the values, only column name can be in square brackets, Example: **Amount=\[C\]**
*   Double quotes (" ") around tag values are optional. Double quotes are, however, required only if:  
    *   The tag value contains one or more semicolons **;**  (See the **Text** tag example in the image above)
    *   The tag value contains double quotes **" "**. For each double quote in the value, an additional double quote is required.
        *   Example:   
            ![image](https://static.adra.com/adra-assistant/images/aed6a12bf13b0c394db571cfc3ee388d.jpg)   
*   Anchors can be placed on **multiple pages/sheets** in the same spreadsheet. 
*   Please note that Tags inside the parantheses are **optional**. If they are not specified on the anchor, predefined default values will be inserted in the corresponding fields in Balancer.

The table describes all the optional tags.

![image](https://static.adra.com/adra-assistant/images/7102b925577299e04d038c1a8509b43e.jpg)

### 2\. Upload Spreadsheet

*   Make sure to close the spreadsheet first.
*   Navigate to the account where the spreadsheet file needs to be uploaded.

![image](https://static.adra.com/adra-assistant/images/151c07cdff915ea291e0e069f618ba05.jpg)

*   Drag and drop the file, or click the upload button and select the file. 
*   Balancer automatically reads the tagged items and imports them into the system.

### 3\. Review and validate

*   Review and verify the balance and line item details.
*   If an incorrect file has been uploaded, remove it as shown in the image below, and upload the correct one.
    *   The data cannot be changed inside Balancer as it stays locked to match the spreadsheet.
*   Add additional transactions or scheduled items manually if needed.

![image](https://static.adra.com/adra-assistant/images/c47892d73a1366f02ec859df91218349.jpg)

 **HELPFUL HINT**: To download a detailed description of the anchors, formats, and examples, click the question mark icon next to the file drop field and click the blue link.

![image](https://static.adra.com/adra-assistant/images/f999b8aa7ebc5bd58d24a8f74b2d8f7b.jpg)

Related Articles
----------------

*   [Balancer Import Balances & Transactions](#article:kA0Ua0000000SU9KAM@Success-Center)
*   [Balancer Add & Manage Transactions](#article:kA06S000000YR4GSAW@Success-Center)
*   [Balancer Opening Balance](#article:kA06S0000019MDJSA2@Success-Center)