Matcher Process Guide
=====================

Read through this walkthrough to understand the process and flow for Matcher. Please use the menu links below to guide you at a high level and jump to the content you want to read. Utilize the detailed links throughout to other help articles in the Adra Success Center. If you’d like a refresher for navigating in Matcher, feel free to watch this video:

**Managing Reconciliation Groups & Match Rules**

1.  [Reconciliation Group Settings](#Anchor_1)
2.  [Defining Match Rules](#defining-match-rules)

**Import & Matching**

1.  [Importing Files](#importing-files)
2.  [Running Match Rules](#running-match-rules)

**Managing Exceptions**

1.  [Manual Matching](#manual-matching)
2.  [Exporting to Balancer](#exporting-to-balancer)
3.  [Exporting to Excel](#exporting-items)

Managing Reconciliation Groups & Match Rules
============================================

Reconciliation Group Settings
-----------------------------

A reconciliation group defines the set of data sources (e.g., bank statements, GL accounts, subledger files) to be reconciled for a specific legal entity. Users configure these sources, and when working with exceptions or matched items, results can be filtered and reviewed by reconciliation group.  
   
![A screenshot of a computerAI-generated content may be incorrect.](https://static.adra.com/adra-assistant/images/afca531cf46c8bfbf819c1a2e1eb24c3.jpg)

Remember to add a descriptive group name.  
  
Within the reconciliation group, users can configure settings such as enabling manual match variances and automatically executing match rules once all necessary files are imported (see the later section on running match rules). Reconciliation groups may also be linked to accounts in Balancer, ensuring that unmatched transactions are transferred to substantiate account balances. If the group involves a foreign currency, users should specify it here, and Balancer will use closing rates to convert amounts into the legal entity’s reporting currency.

![A screenshot of a computerAI-generated content may be incorrect.](https://static.adra.com/adra-assistant/images/4ca635b8f9c719acd873ab0c482f7af2.jpg)

To learn more about Rec. Group settings, see:

*   [Matcher Reconciliation Groups](#article:kA00H000000kJB4SAM@Success-Center)
*   [Matcher Administration Reconciliation Groups Webinar Recording](https://success.adra.com/s/share-playlist?vtui__p=k7rT9A0v3alWJSlYluePgiV9nvQZzJ2KNEvJhR6Hd4djsgpGT0JJhao%2B8f%2Ft5sny3flCAEm%2BvPphPI9SCVPI9vteFhf%2BaiCJkXus%2FhjHa%2BQ6idJhofmIcf3UR7xwRxRJMdrXeuSFs%2BM%2BVAeoJJcxqw%3D%3D&iospref=web)

Defining Match Rules
--------------------

Match rules are created within reconciliation groups and define the logic used to auto match transactions. Matches can also be made manually. Users can add as many rules as needed, and existing rules can be edited or deleted at any time. When running the matching process, users select which rules to apply.  
![A screenshot of a computerAI-generated content may be incorrect.](https://static.adra.com/adra-assistant/images/0a3e601e6587f1030f2b206b8189e3c3.jpg)  
  
In order to add additional rules, users can select to create a new rule, or copy rules from another reconciliation group, or clone rules from the same group.

To copy rules:

1.  Select the reconciliation group to which the rules should be copied. 
2.  Select **+Copy Rules**.
3.  Select the reconciliation group from which the rules should be copied.
4.  Select which rules to copy.
5.  Click **Copy.**

To clone rules, click the **clone icon** next to the trash can.  
  
 ![A screenshot of a computerAI-generated content may be incorrect.](https://static.adra.com/adra-assistant/images/54f3af61baf5394a0c059603d0e70c86.jpg)

  
  
Rules can be reordered by dragging and dropping. Reordering sets their evaluation priority: if a transaction could satisfy more than one rule, the rule higher on the list is applied first. If your rules don’t overlap, the order won’t change the outcome. A practical approach is to put your most specific, high-confidence rules toward the top.

Rules can be as simple or as complex as needed, from one-to-one (same-day) to many-to-many (spanning multiple days). You can choose which sources to compare, set the date window and amount tolerances, and add text-based criteria. Regular expressions (RegEx) are supported to find patterns in either source that help identify matching transactions.

  
  
To learn more about how to manage and create rules, see the following resources:

*   Creating and managing rules
    *   [Matcher Automatic Matching rules](#article:kA00H000000kJBJSA2@Success-Center) (Article)
    *   [Matcher Assisted Rule Configuration](#article:Matcher-Assisted-Rule-Configuration@Success-Center) (Article)
*   [Matcher Administration Matching Rules Webinar Recording](https://success.adra.com/s/share-playlist?vtui__p=X2gu0YkVU916DFZ%2FEP%2BVN0yaOl2mHPz7Yj6NIduQppE38ppH23Im4YQQS02WJ3nVAx0IARXyhQge8VX%2BEcA9LQsuOIT03LusDlzNAYi17USv8dux2i08ryZKJNDDMup1m1X7y6hZt22yrymaVBYsoQ%3D%3D&iospref=web) (Video)
*   How to copy rules – [Matcher Copy and Clone Matching Rules](#article:kA00H0000015EbOSAU@Success-Center) (Article)
*   RegEx
    *   [Matcher Regular Expressions](#article:kA00H000000kJBYSA2@Success-Center) (Article)
    *   [Matcher Basic RegEx Handout PDF](https://success.adra.com/s/share-playlist?vtui__p=63op1%2FfCTjgNDgTL3ud94NABtgMGriVH6wWSTq%2BPaGxSBXwfubLM3FtZDVI65%2BnZK%2BlWlJmMXGYhTkkwhHh%2BjPR8oziJh%2FzwIsNQCdMCqc8J50I7oDpD7g6akrc7DQjXfCHwZyD%2BhSMTF0FyD0TpcN2kKRiqtt1G2alqSiVp08kqL055Ifneux9cMJFkCbGs&iospref=web) (PDF)

Import & Matching
=================

Importing Files
---------------

![A screenshot of a computerAI-generated content may be incorrect.](https://static.adra.com/adra-assistant/images/33d8b56ad54b50b62409e4ebac042d10.jpg)  
  
Files can be imported in several ways, as long as the correct templates and configurations are in place. Each type of file, such as a bank file or ERP file, requires its own import template. These templates tell Matcher how to read the file: which columns map to which fields and how the data should be formatted. Import configurations are also needed to define the reporting periods for the transactions in the file.

For a manual import, do the following:

![A screenshot of a computerAI-generated content may be incorrect.](https://static.adra.com/adra-assistant/images/4f77ef7a31f6bec80dccbdb3e380fa9d.jpg)

1.  Select **\+ New Import.**
2.  Select a legal entity or across all legal entities.
3.  Select the type of file and the specific import template to use.
4.   Drag and drop the file or click **Upload files** and select it through the file explorer.

If automatic import configurations are in place, you can drag and drop files directly onto the Upload files field on the **Import** page, and Matcher will recognize them automatically. Whether a file is recognized depends on if and how the automatic import has been configured. To learn more, see [Matcher Automatic Import Configurations](#article:kA06S000001Q79aSAC@Success-Center).

If a file is not recognized, you have the option to use the Import Wizard to make one. To learn more, see [Matcher Import Wizard](#article:kA00H000000oPIYSA2@Success-Center).

To save even more time, users are encouraged to use the Integration Hub. With this option, files can be dropped into an Adra Agent folder on the user’s PC, and the system will handle the import with minimal effort. To learn more, see [Setup Integration Hub / Adra Agent Installation & Troubleshooting](#article:kA06S00000117ijSAA@Success-Center).

Using the Integration Hub with automatic imports and automatic matching can greatly decrease file transfers and data massaging so that users are left with just the exceptions. To learn more about automatic imports, see [Matcher Automatic Import Configurations](#article:kA06S000001Q79aSAC@Success-Center).

Running Match Rules
-------------------

At this point, if all necessary files have been imported and the automatic matching has been enabled as noted during the section on reconciliation groups, the matching rules will run automatically. Otherwise, users will navigate to the Automatic Matching page and select which rules to run. To learn more, see [Matcher Automatic Matching Rules.](#article:kA00H000000kJBJSA2@Success-Center)  
![A screenshot of a phoneAI-generated content may be incorrect.](https://static.adra.com/adra-assistant/images/ca5c1415f7d9ff2e6c10790e57195c20.jpg)

**Other Resources**

*   [Matcher Use Cases for Match Rules](#article:kA00H000000kJBESA2@Success-Center)

Managing Exceptions
===================

Manual Matching
---------------

Now that many transactions have been matched using the configured rules, it’s time to review the remaining exceptions. Some of these transactions may look like clear matches but weren’t paired automatically because they didn’t fully meet the rule requirements. In those cases, simply select the transactions you want and choose **Match x items**. ![A screenshot of a computerAI-generated content may be incorrect.](https://static.adra.com/adra-assistant/images/49c56bb5a44a770639cadc3b4c6111cb.jpg)

If you notice this happening often, it may be a sign that your match rules need to be adjusted or expanded. A helpful tool is the Assisted Matching. To learn more, see [Matcher Assisted Rule Configuration.](#article:Matcher-Assisted-Rule-Configuration@Success-Center)

Additionally, if your reconciliation group has the right settings in place, you can also manually match items that include variances. To learn more, see [Matcher Reconciliation Groups: Allow match with variance](#article:Matcher-Reconciliation-Groups#Allow_match_with_variance@Success-Center).

  
Use the dropdown in the top right corner to switch between reconciliation groups when investigating matched and unmatched items. To learn more, see [Matcher Exceptions Overview](#article:kA00H000000kJAuSAM@Success-Center).  
Matched items can be viewed and unmatched on the **Matched** tab if needed. To Learn more, see [Matcher Undo Matches](#article:kA00H000000kJApSAM@Success-Center).  
  
  

Exporting to Balancer 
----------------------

If your organization is using both Matcher and Balancer, you can send any unmatched items from Matcher to Balancer. To do this, a Balancer account must first be linked to the reconciliation group (as explained in the reconciliation group section earlier).

Open transactions can be sent for the Exceptions page, and the Recon. Group and Details page.

![A screenshot of a computerAI-generated content may be incorrect.](https://static.adra.com/adra-assistant/images/e102ddbac163df31f12cd8b34271c0d3.jpg)

![A screenshot of a computerAI-generated content may be incorrect.](https://static.adra.com/adra-assistant/images/1966275360dc176448f960e58968f7e8.jpg)

 The transactions, along with the account balance, will be sent over to the defined account in Balancer, where they will be used to substantiate the GL balance.

To learn more, see the following articles

*   [Matcher Export to Balancer](#article:kA00H000000kJAzSAM@Success-Center)
*   [Matcher Recon. Groups and Details](#article:kA00H000000482HSAQ@Success-Center)

Exporting Items
---------------

Exceptions and matched items can be exported to Excel for further analysis. Each export process contains multiple options, including the ability to configure export templates which allows users to define which columns are exported and in which order. This is particularly useful for posting journal entries back into an ERP.

![A screenshot of a computerAI-generated content may be incorrect.](https://static.adra.com/adra-assistant/images/5d585653b3148de300abe469f13f4321.jpg)  
Note that export templates are defined for either exceptions or matched items, depending on which you are exporting, since they contain unique columns and data. To learn more, see [Matcher Exceptions Overview: Export Items](#article:Matcher-Exceptions-Overview#Exporting_Items@Success-Center).

![A screenshot of a computerAI-generated content may be incorrect.](https://static.adra.com/adra-assistant/images/dc60e15ec9cf01527f703d2c6de52107.jpg)  
Balances and transactions can also be exported to XLSX, PDF, and DOCX in the **Reports** page. To learn more, see [Matcher Reports](#article:kA06S0000019Ly1SAE@Success-Center).