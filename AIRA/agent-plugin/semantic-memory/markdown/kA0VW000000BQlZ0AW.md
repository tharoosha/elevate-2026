Setup SCIM Implementation for Automated User Provisioning Using OKTA
====================================================================

SCIM (**S**ystem for **C**ross-Domain **I**dentity **M**anagement) is designed to centrally manage identities used in applications. Adra supports the SCIM specification through the APIs implemented as part of the SETUP API.

This article describes how to configure SCIM Provisioning for an organization in Adra SETUP using OKTA as an identity provider.  
 

Prerequisites
-------------

*   An application in OKTA is created manually to be used with Adra or the [Adra by Trintech](https://www.okta.com/integrations/adra-by-trintech/) application is installed from the Okta Integrations Network gallery. See [Setup Okta Configuration](https://trintech.lightning.force.com/articles/Knowledge_Article/Setup-Okta-Configuration) for information on how to add the Adra by Trintech application.
    
*   SAML SSO is correctly configured and tested between the Adra organization and OKTA.
    

Configure Adra Organization
---------------------------

  
Navigate to the organization’s **Security** tab.  
Under **User management**, select **Use SCIM**.  
Click **Save Changes**.

![image](https://static.adra.com/adra-assistant/images/62944287efb8f1efbb1c7801af07e300.jpg)

Create a Personal Access Token (PAT) for User Provisioning. The PAT can be created on the User Profile page under the User Access tab.

Note: The user who is creating the Personal Access Token (PAT) for SCIM Provisioning must be an Organization Admin in the organization for which SCIM automated provisioning is being configured.  
  
Navigate to the **User Profile** and click the **User access** tab.  
Under **Personal access tokens**, click on the **Create Token** button to create a new personal access token (PAT).

![image](https://static.adra.com/adra-assistant/images/9c139e4c5da783f17e3a6e99765fe09e.jpg)

On the **Create personal access token** popup, select **Identity API**.  
Enter a **description** for the token and click **Create access token**.

![image](https://static.adra.com/adra-assistant/images/fe7a5837e0a01e9c91d561d6a2e0c980.jpg)

Note: Once the Personal Access Token is created, it is shown only one time. Copy this token to be used later when configuring OKTA for SCIM provisioning.  
  
Click **Copy** to copy the token. **Paste** the PAT in a file to be used later.

![image](https://static.adra.com/adra-assistant/images/fec540dca7b23f95c1878180b524124f.jpg)

Retrieve the unique **URL for the API endpoint** that is used for SCIM provisioning for the organization.  
Navigate to **Organization>>Security>>****User management>>Use SCIM**.  
Click **Copy** to copy the unique URL. **Paste** the URL in a file to be used later.

![image](https://static.adra.com/adra-assistant/images/262aa577a730315ab9185d0e04f9a881.jpg)

Configure OKTA User Provisioning
--------------------------------

Navigate to **Okta Admin Portal** and go into the Application for Adra, typically created for SSO. User Provisioning can be added into the same application.

Enable SCIM provisioning from the General tab of the Application.  
Under **App Settings**, click **Edit** to edit the **General App Settings**.  
Under **Provisioning**, check **Enable SCIM provisioning** to enable user provisioning.

![image](https://static.adra.com/adra-assistant/images/75cdf764675aa36c659dab8e2fc8fb36.jpg)

Once the save is complete, a new **Provisioning** tab will appear on the application tabs. Click **Provisioning** to continue the configuration.

![image](https://static.adra.com/adra-assistant/images/733e635655581f91d2f09c834a101cf3.jpg)

The **Settings** for SCIM provisioning are located under the **P****rovisioning** **tab.**  
**Click** **Integration****.**  
Click **Edit** to configure the integration.

![image](https://static.adra.com/adra-assistant/images/7f392dde43be95d116a6b56608d1b2db.jpg)

Enter the following details:

*   **SCIM connector base URL** - The unique URL copied from the Organization's Security tab.
    
*   **Unique identifier field for users** - Set this value to **userName****.**
    
*   **Supported Provisioning actions** - Select **Push New Users** and **Push Profile Updates** only.
    
*   **Authentication Mode** - Select **HTTP Header****.**
    
*   **Authorization** - Paste in the Personal Access Token (PAT) created earlier.

![image](https://static.adra.com/adra-assistant/images/e4ec12f9f28981e9e21a567420f1cb67.jpg)

Click **Test Connection Configuration** to test the connection to the SCIM API.  
  
  
Once the test is complete, the summary screen appears. Only **Create Users** and **Update User Attributes** should be checked.  
  
Currently, Adra SCIM implementation only supports User operations. Group operations and Bulk Imports are not yet supported. Adra is expecting the SCIM provisioning to be a one way operation where information flow is from Okta to Adra. Therefore, importing user and group-related information from Adra is not recommended.  
  
The following settings should be unchecked:

*   Import New User and Profile Updates
    
*   Push Groups
    
*   Import Groups

![image](https://static.adra.com/adra-assistant/images/a9b58903b62586d69574b5bf417f2905.jpg)

Click **Close** to close the popup  
Click **Save** to finish configuring the **Integration**.

Once the save is complete, two new sections appear. Final configuration steps are done in the **To App** section where information sent to Adra is configured.  
  
Click **To App**.  
Under **Provisioning to App**, **Click Edit**.

Select the following:

*   Create Users - **Enable** (checked)
    
*   Update User Attributes - **Enable** (checked)
    
*   Deactivate Users - **Enable** (checked)
    
*   Sync Password - **Disabled** (unchecked)
    

Adra does not support receiving passwords for users. This is not needed, as SSO takes care of authentication.  
  
Click **Save** to complete the configuration.

![image](https://static.adra.com/adra-assistant/images/1bdeb447b24f767df86206e95ff6b11f.jpg)

**Custom User Attribute Mapping**

The User Attribute Mappings can be modified, but the default Okta mappings work with Adra. No customization is needed.  
  
  
 

User Provisioning In Action
---------------------------

Once a user is assigned to the Adra application in Okta, it is immediately synced to the Adra Platform via the SCIM API. Depending on when the user is added, several operations can happen.

Click the **Assignments** tab on the Adra application.  
Click **Assign**, then select **Assign to People** to assign a new person to this app.

![image](https://static.adra.com/adra-assistant/images/6ce07e7777f38c0ca1be8198a701aecc.jpg)

From the popup window, click **Assign** for the user(s).  
Click **Done**.

![image](https://static.adra.com/adra-assistant/images/8d555f9034d5550fad3f1cdce1b84025.jpg)

This will immediately sync the user to Adra, automatically creating a new user in Adra.

![image](https://static.adra.com/adra-assistant/images/2da502a689359841a5794bfa57a92975.jpg)

Related Articles:
-----------------

*   [Setup SCIM Implementation for Automated User Provisioning Using Azure AD](https://trintech.lightning.force.com/articles/Knowledge_Article/Setup-SCIM-Implementation-for-Automated-User-Provisioning-Using-Microsoft-Entra-ID)
    
*   [Setup Okta Configuration](https://trintech.lightning.force.com/articles/Knowledge_Article/Setup-Okta-Configuration)