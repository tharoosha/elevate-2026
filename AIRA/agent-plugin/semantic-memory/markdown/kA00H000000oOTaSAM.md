Setup Using Entra ID with Adra
==============================

Overview
--------

Integrating Adra by Trintech with Entra ID allows administrators to:

*   Use Entra ID to manage user access to Adra by Trintech.
*   Enable users to be automatically signed in to Adra by Trintech with their Entra ID accounts.
*   Manage accounts in one central location - the Entra ID portal.

Adra by Trintech supports SP and IDP initiated SSO.  
 

Summary
-------

The steps below summarize the process for integrating Adra by Trintech with Entra ID and can be used as a reference.   
 

### Prerequisites

The following items are required to integrate Adra by Trintech with Entra ID:

*   An Entra ID subscription. If you do not have a subscription, [click here to get a free account.](https://azure.microsoft.com/en-us/free/)
*   Adra by Trintech single sign-on (SSO) enabled subscription.
*   Rights as a Cloud Application Administrator or Application Administrator in order to add or manage applications in Entra ID. For more information, see [Entra ID built-in roles](https://learn.microsoft.com/en-us/azure/active-directory/roles/permissions-reference).

### Configuration at Entra ID Instance

1.  Log in to the Entra ID Portal.
2.  Navigate to the **Entra Active Directory** blade.
3.  Click **Enterprise applications**.

![image](https://static.adra.com/adra-assistant/images/d9c62492d05249c39e016f7bb8d73402.jpg)

4.  Click **New application**.

![image](https://static.adra.com/adra-assistant/images/14ae9c5906530e2156dc802a9156884e.jpg)

5.  Click **Create your own application**.

![image](https://static.adra.com/adra-assistant/images/cc9cdf5a9e0441dc116a98357259de98.jpg)

6.  Enter the desired application name. In the example below the name 'Adra Tritech' was chosen.

 **WARNING**: Currently, "Adra by Trintech" from the Microsoft Gallery Application is under Certification and it does not support SCIM Provisioning. If you intend to use SCIM, please create a new App as shown in the screenshot. Otherwise use the "Adra by Trintech" app.

 ![image](https://static.adra.com/adra-assistant/images/ae19cb7725f5b67914a49e943cffab46.jpg)

From the newly created applications integration page:

7.  Click **Single sign-on** in the left-side menu.
8.  Under **Select a single sign-on method**, click **SAML**.

![image](https://static.adra.com/adra-assistant/images/03045e8b37748cafb028809f51766efc.jpg)

   
On the **Set up Single Sign-On** **with SAML** page:

9.  Click **Edit** for **Basic SAML configuration**.

![image](https://static.adra.com/adra-assistant/images/cc63b6e833b7d93a25aacd4e8a612461.jpg)

  
Configuring in **IDP initiated mode** requires the Federation Metadata XML file for Adra. Navigate to **Adra Setup>>Engagement>>Security** and click **The XML metadata file with the settings to configure your system can be downloaded here**.

10.  Download this metadata XML file and save it in an accessible location.
11.  On the Entra Portal, in the **Single sign-on** section for the ****Adra Enterprise Application****, click **Upload metadata file**.
12.  In the new blade, select the **FederationMetadata.xml** file downloaded earlier, and click **Add**.

![image](https://static.adra.com/adra-assistant/images/afb5e795c8b51e95339d85bfddee600f.jpg)

  
After uploading the Federation metadata file, the **Identifier (Entity ID)** and **Reply URL (Assertion Consumer Service URL)** fields will automatically populate in the **Basic SAML Configuration** section.

13.  **Sign on URL** \- Leave empty
     *   Sign on URL is used if you would like to perform service provider-initiated single sign-on. This value is the sign-in page URL for your application. This field is unnecessary if you want to perform identity provider-initiated single sign-on.
14.  **Relay State** - Leave empty or enter a valid value.
     *   Results in Setup being the landing page with Adra Apps. We recommend leaving it empty for a generic Adra suite experience. 
     *   **Other valid values** 
         *   https://balancer.adra.com
         *   https://taskmanager.adra.com
         *   https://matcher.adra.com
         *   https://journal.adra.com
15.  **Logout URL**: Enter **https://login.adra.com/****Saml/SLOServiceSP**.
16.  Click **Save** and close the **Basic SAML Configuration** section.

![image](https://static.adra.com/adra-assistant/images/afcfcf719f54822091a45e2ec743f6f8.jpg)    
On the **Set up Single Sign-On with SAML** page:

17.  In the **SAML Signing Certificate** section, click **copy** to copy the **App Federation Metadata Url** and save it to your computer.

 **WARNING**: Copy the **App Federation Metadata URL** for later use. This URL is used when configuring a Federated Identity Provider in the Adra Setup Portal.

### Configuration at Adra Setup Portal

The remaining configuration is done in the Adra Setup Portal.  
To continue with the rest of the configuration:

1.  Login to **Setup Portal** as **System Administrator**.
2.  Open the **Engagement**.
3.  Navigate to the **Security** tab.
4.  Under **Security policy**, select **Use a federated identity provider**.
5.  Click **Add new federated identity provider**.

![image](https://static.adra.com/adra-assistant/images/f1eb6880e9da719224292cbf4e5a4446.jpg)

  
   
Creating a new Federated Identity Provider requires the **Federation Metadata URL** for the **Entra ID Enterprise Application** created earlier. If necessary:

6.  Open the **Adra Enterprise Application** created earlier on the **Entra Portal**.
7.  In the **SAML Signing Certificate** section, copy the **App Federation Metadata URL**.

![image](https://static.adra.com/adra-assistant/images/1dc0fdb86ec267ed22f7044847392b42.jpg)  
 

8.  Return to Adra Setup. 

On the Provider details pop-up:

9.  Enter a **Name** for the configuration.
10.  Enter a **Description**.
11.  Under **Federation metadata**, select **Use metadata URL**.
12.  Under **Metadata URL**, paste the **App Federation Metadata URL** that was copied earlier.
13.  Click **Test URL**.

![image](https://static.adra.com/adra-assistant/images/9d81c54969f2d5c72e600cff8408b1bc.jpg)

  
The federation metadata file is read by the application and the default configuration will automatically be updated in the **Provider details** pop-up.

14.  Click **Save** to save the Federated Identity Provider Policy.

![image](https://static.adra.com/adra-assistant/images/6e3356f6a466826a2e1fca881d30ff48.jpg)

15.  On the **Security** tab, select the newly created **Identity Provider Policy**.
16.  Click **Save changes**.

![image](https://static.adra.com/adra-assistant/images/2718c19a87b4be63a1299f2c4528afa9.jpg)  
  
  
Add New User to the Engagement (Optional)
----------------------------------------------------------------------------------------------------------------------------------------------

If the user is not in the engagement:

1.  Navigate to **Setup>>Users**.
2.  Click **Create user**.
3.  Enter the details for the new user.
4.  Click **Save**.

![image](https://static.adra.com/adra-assistant/images/3ad4ecf1b3c3415d64072e870ab0d615.jpg)  
  
 

Test Entra ID SSO Configuration
-------------------------------

Test the Entra ID single sign-on configuration with the following options:  
  
**SP Initiated**:

*   Click **Test this application** in the Entra portal. This will redirect to Adra by Trintech Sign-on URL to initiate the login flow.
*   Go to Adra by Trintech Sign-on directly and initiate the login flow from there.

**IDP Initiated**:

*   Click **Test this application** in the Entra portal to be automatically signed in to Adra by Trintech.

**Microsoft My Apps** can be used to test the application in either mode. Click the **Adra by Trintech** tile in My Apps.

*   **SP Mode** - Redirects to the application sign-on page for initiating the login flow.
*   **IDP Mode** - Automatically signs in to Adra by Trintech.

**Related Articles**
--------------------

*   [Setup Federating with Adra](#article:kA00H000000oOTQSA2@Success-Center)
*   [Setup Common Issues with SAML Authentication](#article:kA00H000000oOTaSAM@Success-Center)
*   [Setup SCIM Implementation for Automated User Provisioning Using Entra ID](#article:kA06S000001DXbUSAW@Success-Center)