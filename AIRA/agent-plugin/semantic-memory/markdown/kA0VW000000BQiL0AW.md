Setup Prerequisites for SCIM Configuration
==========================================

Enable SCIM in Adra Setup
-------------------------

For more information on using SCIM to read endpoints alongside Setup, [see this article](#article:kA0VW000000Bhw50AC@Success-Center). 

Depending if you are configuring an Organization or an Engagement in Adra, you need to navigate to the security settings accordingly for the steps in the Adra Setup Portal:

*   **Organization>>Security**
*   **Engagement>>Security**

1.  Navigate to **Organization/Engagement**\>>**Security**
2.  Ensure **Use SCIM** is selected under **User Management ,** and **copy the SCIM service provider endpoint URL and save in a document for later**
3.  Click **Save changes**

![image](https://static.adra.com/adra-assistant/images/ff67028cadde295bfbdb05845d2f544e.jpg)

4.  The administrator responsible for the federation must navigate to **Profile>>User access**

**WARNING:** The User who is creating the Personal Access Token (PAT) for SCIM Provisioning must be an Organizational Admin for the organization that SCIM automated provisioning is configured. 

5.  Click **Create token**

 **![image](https://static.adra.com/adra-assistant/images/6c8442c4105688171ea0a637a3816afb.jpg)**

6.  Select **Identity API**
7.  Click **Create access token**

 **![image](https://static.adra.com/adra-assistant/images/2b94db9956d39bb8c32e425200303934.jpg)**

8.  Click **Copy** and save it in a document

![image](https://static.adra.com/adra-assistant/images/b8761125002d2a14d5b1948c404d05bb.jpg)

**WARNING.** Once the Personal Access Token is created, it is shown only one time. Copy and save this token to be used later when configuring OKTA for SCIM provisioning. 

Related Articles
----------------

*   *   [Setup SAML Configuration](#article:kA00H00000048FzSAI@Success-Center)
    *   [Setup SCIM Provisioning Users Using OKTA](#article:kA06S000001DXbPSAW@Success-Center)
    *   [Setup Common Issues with SAML Authentication](#article:kA00H000000oOTaSAM@Success-Center)