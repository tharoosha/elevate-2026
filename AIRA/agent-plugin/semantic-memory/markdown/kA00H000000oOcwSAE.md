Balancer Job Automation Overview
================================

**Job automation** enables automatic review and approval of files uploaded by a Business Admin on the **Jobs** page or imported via the Integration Hub (IH), SFTP or similar, based on specified criteria.  
Thresholds can be set to prevent the import of corrupt or incorrect files. If balance updates or the number of new accounts exceed the set thresholds or if balances are imported to an unopened period, a review link displays on the Jobs page. Closed periods are always excluded from imports.  
![image.png](https://static.adra.com/adra-assistant/images/52302de68a6e7aeaaff32f3cb4e08ab5.jpg)  
   

 **HELPFUL HINT**: The Integration Hub facilitates data transfer between a bank or ERP system and Balancer software. IH automatically uploads data from a designated location to Balancer. If job automation is enabled the file does not need to be reviewed and approved unless thresholds are exceeded.

    
 

Enable Job Automation
---------------------

Navigate to **Administration>>Job automation**  
Automatic balance and transaction automation settings are identical. The figure below illustrates how to automate balance imports.  
![image.png](https://static.adra.com/adra-assistant/images/94b189804ffdb56940ac8364485f1081.jpg)  
 

1.  **Enable auto-complete**
    *   **For balance files uploaded using INTEGRATION HUB** – Balancer identifies the fiscal year and period based on the filename.
    *   **For Balance files manually uploaded by a business admin or local business admin** – The administrator selects the period when uploading the file, which is then automatically imported without the need for review unless thresholds are exceeded.
2.  **Identify fiscal year and period from the filename**
    *   **Use basic identification of fiscal year and period** – Select date and delimiter format of the period as it appears in the import filename. The date in the filename must be the end date of the period.
    *   **Use custom identification of fiscal year and period** – Utilize RegEx to identify the period from the import filename when the filename contains additional characters.
3.  **Thresholds for auto-complete**
    *   **Use default Thresholds** – Select to require a manual import file review when default thresholds are exceeded.
    *   **Use custom thresholds** – Customize import file review thresholds.

### Basic Identification of Fiscal Years and Periods

![image.png](https://static.adra.com/adra-assistant/images/0f9a2291c65bfa9d0dda4909862b6b65.jpg)

*   **Format** – Select the date format used in the filename. 
*   **Delimiter** – Select the punctuation mark used in the date. The options are dash (-), low dash (\_), punctuation (.) or no delimiter. 

**Example**: If the selected format is YMD and the chosen delimiter is "-", the date format can be 2018-06-16, 18-06-16, or 18-6-16.

### Custom Identification of Year and Period

Custom identification uses Regular Expressions (RegEx) to search for the fiscal year and period in the filename. To enable custom period identification, FY and period codes must be added in **Administration>>Fiscal years**. Learn more: [Balancer Creating Fiscal Years and Periods](#article:kA00H000000kJ9cSAE@Success-Center) .   
The FY code, period code, and RegEx are used to identify the period in the filename and upload accordingly. See example below.  
![image.png](https://static.adra.com/adra-assistant/images/f9818bc346b467f60a50dfe4ecf40b72.jpg)  
   

 **HELPFUL HINT**: If the filename doesn't meet the identification criteria or the period hasn't been created, the file will require a user to click **Review and approve** it on the **Jobs** page and verify the import.

### **Thresholds for Auto-Complete**

When the threshold functionality is enabled and a threshold is exceeded, a manual review is enforced for automatically imported files.   
![image.png](https://static.adra.com/adra-assistant/images/f07b3b7925cf4e52858b64a9732d782e.jpg)

1.  Use default threshold
    *   Balance imports – If more than 5% of accounts have a balance change or if new accounts are detected in the file, a manual review is required.
    *   Transaction imports – If a file contains more then 100 transactions for one account, a manual review is required.
2.  Use custom thresholds 

 ![image.png](https://static.adra.com/adra-assistant/images/c3c61acde98ec01129c4ca6b9b0cad41.jpg)

1.  Select a minimum percentage of updated balances that triggers a manual review.
    *   5-10-15-20-30-40-50.
2.  Select the minimum number of new accounts that prompts a manual review. 
    *   1-3-5-10-15-20-30.
3.  Toggle On to make uploaded files require review and approval if the period they are uploaded to has not been opened or created yet. 

 **WARNING**: The job automation threshold overrides the certification threshold in **General settings**. Learn more: [Balancer General Settings](#article:kA00H000000kJ8USAU@Success-Center)

Related Articles
----------------

*   [Balancer General Settings](#article:kA00H000000kJ8USAU@Success-Center)
*   [Balancer Creating Fiscal Years and Periods](#article:kA00H000000kJ9cSAE@Success-Center)
*   [Adra Product Suite Integrations](#article:kA06S000000kK69SAE@Success-Center)
*   [Setup Direct Integration IH API](#article:kA06S0000011SEhSAM@Success-Center)