Balancer Export & Import Account Settings
=========================================

The Export and Import account settings functionalities enable administrators to efficiently update or replace the chart of accounts and associated settings in bulk, except for account roles.

Learn how to manage account roles here: [Balancer Export & Import Account Roles](#article:kA00H000000kJAGSA2@Success-Center)

 **HELPFUL HINT**: To apply setting changes to an open period, navigate to **Jobs>>Other jobs>>Update settings and roles**. Run an update job for relevant legal entities.

Export Account Settings
-----------------------

If the account settings file is already available, go to [Import Account Settings](#import-account-settings)

To create an account settings file, follow the steps below:

1.  Navigate to **Jobs>>Other jobs>>Export account settings**.

![image](https://static.adra.com/adra-assistant/images/3eaa3575a0fc717374ae61fa66b660c8.jpg)

2.  Check the desired legal entities.
    *   Check **Include inactive accounts** if you would like to reactivate them by reimporting the file.
3.  Click **Export account settings**. The **Jobs** page loads.

![2024-03-05_10-27-05.png](https://static.adra.com/adra-assistant/images/b46a8ee218296b030fe9712e1d484df4.jpg)

4.  Refresh the page if necessary.
5.  Click **Download** and edit the file as desired. Learn more about the file format here: [Account\_Settings\_File](#the-account-settings-file).

Import Account Settings 
------------------------

To import account settings, follow the steps below:

1.  Navigate to Jobs>>Other jobs>>Import account settings.

![2024-03-05_10-56-31.png](https://static.adra.com/adra-assistant/images/292596d86bc0d3085f59d7a2232471b0.jpg)

2.  Click the blue link to download the **Account settings template** which contains format specifications and examples. Learn more here:  [The Account Settings File.](#the-account-settings-file)
3.  Check desired import settings
    *   **The file(s) replaces the current chart of accounts** – When checked, any accounts not in the imported file will be deactivated, and previously deactivated accounts will reactivate.
    *   **Update existing ‘Purpose’** – Check the box to update the purpose text in account settings with that of the corresponding cell from the import file.
    *   **Update existing ‘Procedure’** \- Check the box to update the procedure text in account settings with that of the corresponding cell from the import file.
4.  Click **Upload file** and select the account settings file.

 **WARNING**: If the option **The file(s) replaces the current chart of accounts** is selected on the **Import account settings** page, any accounts NOT included in the import file will be deactivated. To reactivate all inactivated accounts, export an account settings file that includes all deactivated accounts. Import this account settings file with **The file(s) replaces the current chart of accounts** selected.

5.  Click **Import**. The **Jobs** page loads.

**![2024-03-05_11-04-44.png](https://static.adra.com/adra-assistant/images/3282c5b2e97848bfc8637c9f70ef26ce.jpg)**

6.  Click **Review and approve** for the import job.

![2024-03-05_11-15-36.png](https://static.adra.com/adra-assistant/images/3a7cf18b8fe84b0205023cf022be289b.jpg)

7.  Check the appropriate boxes for each legal entity:
    *   **Select all** - Update existing and import new accounts for all or some legal entities.
    *   **Import updated accounts** - Import account setting changes for all or some legal entities.
    *   **Import new accounts** - Import new accounts for some or all legal entities.
8.  Click **Complete Import**. Remember to run an **Update account roles and settings** job to apply new settings to open periods.

The Account Settings File
-------------------------

The image below displays the import template file that can be downloaded from **Job>>Other job>>Import account settings.**

![image](https://static.adra.com/adra-assistant/images/98076206c232de9aa166b65496f385d6.jpg)

Note that the column order must always be the same as in the template and that the file must be in Excel or tab-delimited format.

A description of each column's content and format can be found in the file. 

Learn more about the different account settings here: [Balancer Edit Account Settings](#article:kA00H0000015ETuSAM@Success-Center)

Related Articles
----------------

*   [Balancer Edit Account Settings](#article:kA00H0000015ETuSAM@Success-Center)
*   [Balancer Export & Import Account Roles](#article:kA00H000000kJAGSA2@Success-Center)
*   [Balancer Importing Account Roles](#article:Balancer-Importing-Account-Roles@Success-Center)