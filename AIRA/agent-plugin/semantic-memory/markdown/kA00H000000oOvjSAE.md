Adra - Matcher - Edit Import Configurations
===========================================

Import Configurations
---------------------

Once an import template has been added, the template will appear under Import Configurations where additional changes can be made. It is _not recommended_ to add new import configurations through the **\+ Add Import Configuration** button as they can more easily be created through the Import Wizard. However, the process is the same for adding and editing import configurations so both are covered here.   
To change or edit a configuration, navigate to **Administration > Import Settings**. Then double click on the configuration that should be edited to open the **Edit Import Configuration** screen. Note, if the import is already associated with an Automatic Import Configuration, it will limit the available options on the Edit Import Configuration screen.

  
  
![image.png](https://static.adra.com/adra-assistant/images/a31853eb158ba32a8e62a8e0c6e75cdb.jpg)

Add/Edit Import Configuration Screen
------------------------------------

Typically, imports will not be added as new as the Import Wizard will create the configuration. However, the screen below will walk the administrator through the process of adding/editing.

  
![image.png](https://static.adra.com/adra-assistant/images/3715e1fb19cb9d1d771fc9ec6b8a2721.jpg)

1.  Select the legal entity from the drop down the configuration will be associated with.
    
2.  Choose whether this is a Transaction Import or Balance Control Import
    
3.  Period Selection:
    

*   **Period drop-down picker** - At the time of the import, the user can use a drop-down menu to select the period the transactions will import to.
    
*   **Booking Date** - The dates for the import will be pulled from the transaction file where dates have been inputted. 
    
*   **Fiscal year and fiscal year codes from transaction** file – Only choose this option if the fiscal year and period codes are used in the file.
    

4.  Select the import template being utilized by the configuration from the drop down menu.
    
5.  **Balance Control Import** - **Activate Balance Control** can be enabled when there is a second file with the expected balance import to ensure that the balance is the same as the balance in the file when transactions are imported. 
    
6.  **Look-up Tables** – Look-up tables aid in translating data. In the example, Matcher finding the bank ID number and is being used to insert the store number into an extra field column, which can then be used for matching.
    

![image.png](https://static.adra.com/adra-assistant/images/e33ba3c26a9805ee33fdde9f7eb7dc9e.jpg)

1.  Export existing tables or import a Look-up Table into Matcher. **Clicking Import Look-up Table** will open a popup with a downloadable Look-up Table template. If you have a large number of items to add, it is recommended to import the Look-up Table.
    
2.  Select the **Legal Entity**.
    
3.  When creating a **Look-up Table**, it is created at the Account level. Select the appropriate **For Account** from the drop-down list. 
    
4.  Enter the RegEx expression to locate an expression under **Find Expression**.
    
5.  Determine which column to search by selecting the appropriate option in the **From Column** drop-down list.
    
6.  Type in the appropriate value to insert under **Insert Value**. The expression entered under Find Expression will now be shown as the term in this box in the appropriate column.
    
7.  Use the drop-down menu under the **Into Column** to specify the column to insert the new expression. 
    

To delete a line, click the trash icon on the right side of the screen. Administrators can also add and delete lines as needed. 

Related Articles
----------------

*   [Matcher Import Template](#article:kA00H000000kJBOSA2@Success-Center)
*   [Matcher Import Wizard](#article:kA00H000000oPIYSA2@Success-Center)
*   [Matcher Importing Files](#article:kA00H000000kJAkSAM@Success-Center)
*   [Matcher Balance Control](#article:kA0Ua0000007hoDKAQ@Success-Center)
*   [Matcher Automatic Import Configurations](#article:kA06S000001Q79aSAC@Success-Center)