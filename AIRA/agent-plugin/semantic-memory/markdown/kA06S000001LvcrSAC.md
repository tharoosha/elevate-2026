Setup SCIM Implementation for Automated User Provisioning Using Microsoft Entra ID
==================================================================================

SCIM (**S**ystem for **C**ross-Domain **I**dentity **M**anagement) is designed to centrally manage identities used in applications. Adra supports the SCIM specification through the APIs implemented as part of the SETUP API.  
 

This article describes how to configure SCIM Provisioning for an organization in Adra SETUP using Microsoft Entra ID as an identity provider.  
 

Prerequisites
-------------

*   An enterprise application registration is created for Adra on Microsoft Entra ID to perform Single Sign On (SSO) using SAML. See [Setup Using Entra ID with Adra](#article:kA00H000000oOTVSA2@Success-Center) for information on how to configure an enterprise application.
    
*   SAML SSO is correctly configured and tested between the Adra organization and Microsoft Entra ID application registration.
    

 **WARNING**: Currently, "Adra by Trintech" from the Microsoft Gallery Application is under Certification and it does not support SCIM Provisioning. 

If you intend to use SCIM and don't want to wait for our application to support it, you can create a "new application" following the instructions in "[Setup Using Entra ID with Adra](#article:kA00H000000oOTVSA2@Success-Center)".

Afterwards you can come back and follow this guide on your newly created application

Configure Adra Organization
---------------------------

Navigate to the organization’s **Security** tab.  
Under **User management**, select **Use SCIM**.  
Click **Save Changes**.

 ![2024-03-06_12-11-54.png](https://static.adra.com/adra-assistant/images/89ed9ea6566ce70ee4eebc056d17b442.jpg)

Create a Personal Access Token (PAT) for User Provisioning. The PAT can be created on the User Profile page under the User Access tab.

Note: The user who is creating the Personal Access Token (PAT) for SCIM Provisioning must be an Organization Admin in the organization for which SCIM automated provisioning is being configured.  
  
Navigate to the **User Profile** and click the **User access** tab.  
Under **Personal access tokens**, click on the **Create Token** button to create a new personal access token (PAT).  
  

![image](https://static.adra.com/adra-assistant/images/42046308bee44092dcf83df5529ea514.jpg)

On the **Create personal access token** popup, select **Identity API**.  
Enter a **description** for the token and click **Create access token**.

![image](https://static.adra.com/adra-assistant/images/dcfcc38408ebc929328c49ce50739b16.jpg)

  
Note: Once the Personal Access Token is created, it is shown only one time. Copy this token to be used later when configuring Microsoft Entra ID for SCIM provisioning.  
  
Click **Copy** to copy the token. **Paste** the PAT in a file to be used later.  
![image](https://static.adra.com/adra-assistant/images/b226bc2b7ced584ec66ad5553ca753fd.jpg)

Retrieve the unique **URL for the API endpoint** that is used for SCIM provisioning for the organization.  
Navigate to **Organization>>Security>>****User management>>Use SCIM**.  
Click **Copy** to copy the unique URL. **Paste** the URL in a file to be used later.  
  

![image](https://static.adra.com/adra-assistant/images/7b3351ff57cc9b4f825c19bdf9de7bb5.jpg)

Configure Microsoft Entra ID User Provisioning
----------------------------------------------

Navigate to the **Enterprise Application Registration** on Microsoft Entra ID.

![image](https://static.adra.com/adra-assistant/images/42c2122973832a83832cf4e2cbcd3b8e.jpg)

  
  
Click **Provisioning>>Provision User Accounts**.

**![image](https://static.adra.com/adra-assistant/images/e8c01e841b6f077f4018546448f1af48.jpg)**

Click **Get Started**.

![image](https://static.adra.com/adra-assistant/images/1af20c18a4fb219b8c2e97ceedbb2e63.jpg)

Select **Automatic** as the **Provisioning Mode.**  
Enter the **Admin Credentials**:

*   **Tenant URL** - The unique SCIM URL copied from the Organization Security tab.
    
*   **Secret Token** - The Personal Access Token (PAT) created earlier
    

![image](https://static.adra.com/adra-assistant/images/30c338885a4b750e5c470b374f2aa402.jpg)

Click **Test Connection** to test the connection.  
Click **Save**.  
  
  
Once the save is completed, the **Mappings** and **Settings** sections appear.  
**Mappings**: Click the **Provisioning Microsoft Entra ID Groups** link to go to Group Mapping Settings. 

![Screenshot 2024-03-05 at 17.50.41.png](https://static.adra.com/adra-assistant/images/80c19b7bf884b979df09df53d1c8012b.jpg)

On Group Attribute Mapping Settings, toggle **Enabled** to **No** to disable Group Provisioning.  
Click **Save** to confirm the settings.

![image](https://static.adra.com/adra-assistant/images/9f59ece81548499611dbc6b971c15772.jpg)

**Custom User Attribute Mapping**

The User Attribute Mappings can also be modified by clicking on **Provision Azure Active Directory Users** under **Mappings**, but the default Microsoft Entra ID mappings work with Adra. No customization is needed.  
  
 

User Provisioning In Action
---------------------------

Once the configuration is complete, the next step is to add users to the **Enterprise** application. Once the users are added to the application, provisioning will happen periodically every 40 minutes. Currently, the time between provisioning cycles cannot be changed for Microsoft Entra ID. If instant provisioning is required, complete an On-Demand Provisioning for a user.

Navigate to the **Users and groups** section of the application.  
Click  **+Add user/group**.  
![image](https://static.adra.com/adra-assistant/images/651048294c8f6654be8bd4f8ce791241.jpg)

On the **Add Assignment** blade, search for and select the user.  
Click **Select**.   
Click **Assign** to complete the assignment.

![image](https://static.adra.com/adra-assistant/images/18fc89f4f3b9550eb25982b3106bfebd.jpg)

To start the provisioning, navigate to the **Provisioning** section and click **Start Provisioning** to initiate the SCIM Provisioning process.

![image](https://static.adra.com/adra-assistant/images/b9c43f386126859445405996c480bed8.jpg)

  
  
After few seconds, a new user will be provisioned on the Adra Platform.

![image](https://static.adra.com/adra-assistant/images/3197a6e2d663fccace617c414651a1dc.jpg)  
 

Click the user to view the Profile.

  
Learn how to assign access and roles for the applications here under the Application Access section in this article: [Setup Create New Users In Adra](#article:kA00H000000kJ5LSAU@Success-Center)

![image](https://static.adra.com/adra-assistant/images/d2507e8487cfe48982ab04c9baad4c14.jpg)  
 

Related Articles:
-----------------

*   [Setup SCIM Implementation for Automated User Provisioning Using OKTA](#article:kA06S000001DXbPSAW@Success-Center)
*   [Setup Using Entra ID with Adra](#article:kA00H000000oOTVSA2@Success-Center)