Setup Microsoft ADFS Configuration
==================================

Below is a step-by-step guide for using Microsoft Active Directory Federated Services (ADFS) as the Identity Provider. Please note that the details may vary slightly depending on the ADFS version.

###   
Configuration at Customer Site

To configure Single Sign-On at the customers ADFS you will need the URL for the Adra’s Federation Metadata XML file. The federation metadata can be found at https://login.adra.com/saml/federationmetadata

1.  Open the ADFS Management Console and select **Relying Party Trusts** under **Trust Relationships** in the navigation menu on the left. 

 ![image](https://static.adra.com/adra-assistant/images/91e8150872d4308828a0d5a0e3b1dd3f.jpg)

2.  From the **Actions** menu on the right-hand side, select **Add Relying Party Trust** link. This opens the Add Relying Party Trust Wizard.
3.  Click **Start**.
4.  Select the **Import data about the relying party published online or a local network** option.
5.  Enter the Adra Federation Metadata URL (https://login.adra.com/saml/federationmetadata ) in the Federation metadata address text box.
6.  Click **Next**.

  
![image](https://static.adra.com/adra-assistant/images/6ea763dfe9c16fcc85e60a63acaccdc3.jpg)  

7.  Specify a display name (e.g. ADRA) to recognize the configuration. Click **Next**.
8.  Leave the default settings for the **Configure Multi-factor Authentication Now?**
9.  Click **Next**.

![image](https://static.adra.com/adra-assistant/images/3d618c691a79a2dd965d12ed2e812ea6.jpg)

10.  Leave the default settings for **Choose Issuance Authorization Rules**.
11.  Click **Next**.

![image](https://static.adra.com/adra-assistant/images/04e71ad97b3b2ed7985dded4eaf50f02.jpg)

12.  Review the settings if required, and click **Next**. When reviewing, check for following settings:
     *   **Relying party’s Federation Metadata URL** is set and **Monitoring relaying party** and **Automatically update relaying party** options are checked in the **Monitoring** tab.
     *   The **Secure hash algorithm** is set to **SHA-256** in the **Advanced** tab.

  
  
![image](https://static.adra.com/adra-assistant/images/0b15946dd0d857f894ab4569bf39caa1.jpg)

  
**Note:** If these options don't show correctly or if a user wants to change the configuration later, edit options by selecting the newly created **Relaying Party Trust Right**. Click **Properties**. Then users are able to configure automatic monitoring from the **Monitoring** tab, and set the **Secure hash algorithm** from **Advanced** tab.  
 ![image](https://static.adra.com/adra-assistant/images/afd72d381ff725aec3e63def35a1bbc3.jpg)

13.  Deselect the **Open the Edit Claim Rules** dialog for this relying party trust when the wizard closes option.
14.  Click **Close**. This closes the wizard.

![image](https://static.adra.com/adra-assistant/images/28c959558285deaa382d9c709cc74ee8.jpg)

15.  Right-click on the **Relying party trust** added, and select **Edit Claim Rules…**. This opens the **Edit Claims Rules** dialog.
16.  Click on **Add Rule…**. This opens the **Add Transform Claim Rule Wizard**.
17.  Make sure **Send LDAP Attributes as Claims** is selected.
18.  Click **Next**.

![image](https://static.adra.com/adra-assistant/images/9fa86cc29b307d71bbe154d0324a7a8b.jpg)

19.  Specify a **Claim rule name** (e.g. Adra claims).
20.  Select **Active Directory** as the **Attribute store**.
21.  Create a mapping between the following: **LDAP Attribute** and **Outgoing Claim Type: User-Principal-Name and Name ID**.
22.  Click **Finish** to close the wizard.
23.  Click **OK** to close the dialog.

![image](https://static.adra.com/adra-assistant/images/685217f71027290dd5a7aa19e94a9440.jpg)

Users can optionally require users to provide credentials every time they sign in by configuring a **Per Relying Party Trust** under **Authentication Policies** in the **Navigation** menu.

24.  Right-click on the **Per Relying Party Trust** added, and select **Edit Custom Primary Authentication**.

![image](https://static.adra.com/adra-assistant/images/f72497551ce51f4526cb7aeae4c9ab3c.jpg)

25.  Select the option for **Users are required to provide credentials each time at sign in**.
26.  Click **OK** to close the dialog.

![image](https://static.adra.com/adra-assistant/images/7b2dcf6385a352b50a6b81aa19ebe112.jpg)  
  

  
  
Configuration at Adra Setup Portal
----------------------------------------

Users will need a FederationMetadata.xml file for configuring the ADFS as an Identity Provider on the Setup Portal. Find the exact location by opening the ADFS Management console and selecting **Endpoints** under **Service** in the **Navigation** menu on the left-hand side. Browse to the **Metadata** subsection and look for the entry with the type as Federation Metadata. It is typically found at https://<hostname>?FederationMetadata/2007-06/FederationMetadata.xml.  
 

Overriding the Default Configuration
------------------------------------

 ![image](https://static.adra.com/adra-assistant/images/50ba916b32107214e93e66f5d1ba7117.jpg)
---------------------------------------------------------------------------------------------

1.  Sign into the **Adra Setup** (https://setup.adra.com)
2.  Navigate to the **Engagement** page or the **Organization** page
3.  Ensure users have been granted **System Administrator** permissions.
4.  Select the **Engagement** or **Organization** that needs to be adjusted.

  
 ![image](https://static.adra.com/adra-assistant/images/c635d5d21f805ad0673b08b2d33c9c54.jpg)  
 

5.  Click on the **Security** tab.

  
![image](https://static.adra.com/adra-assistant/images/1ca402206babc356c2e7cadbe29176dd.jpg)  
 

6.  Select the **Use a federated identity provider** option under **Security Policy**.

  
![image](https://static.adra.com/adra-assistant/images/a794767f057b99d17eb479c0378a6fbb.jpg)  
 

7.  Click **Federating with Adra to** download additional details and configuration data. 
8.  Click **Add new federated identity provider**. 

  
![image](https://static.adra.com/adra-assistant/images/b44189f2a37f8c2e152280d3ad02c59e.jpg)  
 

7.  Specify a **Name** and **Description**. Both are required.
8.  Enter the **Federation metadata URL** for the **ADFS server** into the **Metadata URL** input box. (Note: Instructions on where to find the federation metadata URL is given above.)
9.  Click on **Test URL**. This will automatically update the configuration given below to work with Microsoft ADFS.

  
![image](https://static.adra.com/adra-assistant/images/eb78d61b4c1ee6ab7d8d619b6a1bc35f.jpg)  
 

10.  If the URL Test links correctly, the SAML Configuration will automatically fill. 
11.  Click Save.

   
  ![image](https://static.adra.com/adra-assistant/images/7a4ffc940c761be5724f9609b8197d37.jpg)  
 

12.  Select the **Identity Provider Configuration** that was just created in order to enable it.

  
![image](https://static.adra.com/adra-assistant/images/eb8a1b373b68ed8d03e701cc2e69984b.jpg)  
  
  
  
 

Change the Default Configuration
--------------------------------

With the Federation Metadata URL, users can quickly configure Single Sign-On for an Identity Provider; however, if users want to change the default configuration, they can also do that.

1.  Click the **Override** toggle to **On** in SAML Configuration section.
2.  Users are then able to change the required URLs, Signature and Digest Algorithms and other configuration options.

  
![image](https://static.adra.com/adra-assistant/images/f809b820ad5d710e94e2e388a4a8be82.jpg)

Related Articles
----------------

*   [Setup Using Entra ID with Adra](#article:kA00H000000oOTVSA2@Success-Center)
*   [Setup Common Issues with SAML Authentication](#article:kA00H000000oOTaSAM@Success-Center)
*   [Setup Okta Configuration](#article:kA00H00000048FzSAI@Success-Center)
*   [Setup Federating with Adra](#article:kA00H000000oOTQSA2@Success-Center)