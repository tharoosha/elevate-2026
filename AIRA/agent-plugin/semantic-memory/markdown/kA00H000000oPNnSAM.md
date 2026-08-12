Matcher Import Wizard
=====================

Matcher Import Wizard
---------------------

The Import Wizard allows a user to create a customized import template based on the data’s configuration and format. Matcher users do not have to configure their data files to create specific imports restricted by template needs determined by Matcher. In most cases, users can utilize existing transaction exports. Users can simultaneously import up to 10,000 files.

1.  Drag and drop an import file into the dotted line area, or click the **Upload file** and select the file from the Windows explorer window that populates.
    
2.  Click the file name under the **Select import configuration** section.
    

![image.png](https://static.adra.com/adra-assistant/images/e610df34b17eae0134cf69bc3223c62c.jpg)  
 

Encoding
--------

On the next screen a user can name the import configuration, and then select the encoding type that the import files will use.

![image.png](https://static.adra.com/adra-assistant/images/8426d1a2d73c894dcc5752ab7d06ec95.jpg)

1.  Enter a **Name** for the import configuration
2.  Use the drop-down **Select encoding** to choose the file type. There are 5 options to choose from. The default is Windows-1252. The other options include ANSI, Unicode, UTF-8, and Big Endian Code.
3.  Click **Next**

​​Delimiters & Wrappers
-----------------------

This screen shows a preview of the data recognized by Matcher. 

1.  In the first box select the **Delimiter** used in the import file. A **delimiter** is the symbol used to separate lines of plain text into independent regions.
    
    *   **Delimiter** options – **Tab, comma (CSV), Space, Semicolon**, and **Other** (user defined).
        
2.  In the second drop-down select the **wrapper**. **Wrappers/qualifiers** are used to indicate where lines of plain text start and stop.
    
    *   **Wrapper/qualifier** options – **Single** or **double quotation** marks.
        
3.  Make the appropriate selections, and then click **Next** at the bottom of the screen. 
    

![Import wizard file delimiter.jpg](https://static.adra.com/adra-assistant/images/a039d058b90da3f14036874fba1dccab.jpg)

  
Column Mapping
-----------------

On the next screen the user will select the labels that **Matcher** will use for the transaction data once imported. For columns that will be present in the import files but not imported, do not select a label for those columns. The unlabeled columns will be skipped during an import. Matcher does require that certain fields be mapped – these include account, date, amount, and reference. If these are not mapped, the admin will be prompted to input static values on the next screen. However, it is recommended to use column mapping when creating the import template. Note, ensure that any necessary user defined fields have been created under Extra Fields prior to any imports.

![image.png](https://static.adra.com/adra-assistant/images/5e2aa3c01e3cace433cdb206351fd720.jpg) 

1.   **Add import configuration to**
    

*   Use the drop-down to select the legal entity that the import will be assigning data to. This field needs to include the Legal Entity Code defined in Setup.
    
*   If using the template to create an automatic import, the admin must select **Across All Legal Entities**.
    

2.  **Skip header (the first row)** - Check this box if the import files will contain headers that the application will need to skip when importing.
    
3.  **Invert amount (amount \*-1)** - Use this checkbox if the values being imported need to be inverted
    
4.  Column selections – For each column select the label from the dropdown. Note, columns that do not have a mapping will not be imported into Matcher.
    
5.  **Reset Mapping** – Clears all selections made.
    
6.  Click **Next.**

If the fields are mapped appropriately, the below screen will populate. If they are not mapped, they will be prompted to map the required fields shown in the second **Import Wizard - Select Static Values for Non-Mapped Columns** image.

![image.png](https://static.adra.com/adra-assistant/images/f518aeba8e3c681ead4c7dcfd266b290.jpg)

1.  On this page, the administrator can now pick the specific entity the import should be applied to.
2.  If the admin has selected an account, they will be prompted with a checkmark “**The accounts are unique.”** If the admin does not map an account number, they will be instead prompted to select from a dropdown to select the account number for the import.
3.  Click **Import**.

![Import Wizard unmapped items.jpg](https://static.adra.com/adra-assistant/images/663502caff31c40ad3545df51e388a79.jpg)

1.  If a user did not select a **Legal Entity Code** from the drop-down on the previous screen, then the user will need to specify the **Legal Entity** from drop-down menu.
    
2.  If an import file does not include an **account number**, then the user will need to select an existing account number from the drop-down.
    
3.  The user can use 'Date of Import' to set the date.
    
4.  If an import file does not include an **amount**, then the user will need to set a static value in the box provided.
    
5.  A static **reference number** can be assigned in the last box if the import file does not contain one. Once all selections have been entered select import.
    

  
Reviewing and Saving Import
------------------------------

After the import is complete, the admin will be returned back to the Import page where the import will be shown under **Review and Approve**. 

  
![image.png](https://static.adra.com/adra-assistant/images/937bd65899558ee0a2da87a0bef00213.jpg)

Double click to open the **Review and accept imports** screen. The image below shows a successful import that can be completed with warnings. In some cases, if the data mapped does not match the information in Matcher – such as an unrecognized account number, the **Complete Import** button will not be clickable, meaning the information will need to be updated prior to a successful import. Ensure the **Import Messages** have been reviewed, then click **Complete Import**.

  
![image.png](https://static.adra.com/adra-assistant/images/0e864b3e16670ce993f9f4999be63276.jpg)

Once completed, the user will be able to save the import template for future use. Click **OK** to finalize and save the new import.

  
![image.png](https://static.adra.com/adra-assistant/images/be48480a43b9de1f0057ee1bdfd668b3.jpg)

After the import template has been saved, administrators can go into **Import Settings > Import Configurations** and **Import Settings > Automatic Import Configurations** to add settings that will allow users to automate their import processes and add Look-up Tables.

### **Related Articles:**

*   [Matcher Import Template](#article:kA00H000000kJBOSA2@Success-Center)
*   [Matcher Import Data Overview](#article:kA00H000000kJAkSAM@Success-Center)
*   [Matcher Edit Import Configurations](#article:kA00H000000oOhDSAU@Success-Center)