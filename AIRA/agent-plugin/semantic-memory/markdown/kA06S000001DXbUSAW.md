Setup SCIM Provisioning Users Using OKTA
========================================

**Currently under approval,** please refer to the previous guides [Setup OKTA Configuration](#article:old-Setup-Okta-Configuration@Success-Center) and [Setup SCIM Provisioning Using OKTA](#article:old-Setup-SCIM-Provisioning-Users-Using-OKTA@Success-Center) until further notice.

SCIM (**S**ystem for **C**ross-Domain **I**dentity **M**anagement) is designed to centrally manage identities used in applications. Adra supports the SCIM specification through the APIs implemented as part of the SETUP API. This is the second phase in a series of steps for configuring OKTA for Adra.

Features
--------

The following provisioning features are supported by Adra at present: 

*   *   **Push Users:** Users in Okta that are assigned to the Adra application within Okta are automatically added as users in Adra.
    *   **Update User Attributes:** When user attributes are updated in Okta, they will be updated in Adra.
    *   **Deactivate Users:** When users are deactivated in Okta, they will be deactivated in Adra, which prevents the user from logging in and requesting new tokens. _The current session will continue until the session expiry time has run out._ 
    *   **Group Linking:** Okta Groups can be linked to Adra Groups. Okta Group members are then given the correspondent Access in Adra based on the Adra Group Name. (Group name can be used to map users to Adra access roles).

Prerequisites
-------------

Make sure you have followed the steps here:

*   [Setup Prerequisites for SAML Configuration](#article:kA0VW000000BP6L0AW@Success-Center)
*   [Setup SAML Using OKTA](#article:kA00H00000048FzSAI@Success-Center)
*   [Setup Prerequisites for SCIM Configuration](#article:kA0VW000000BQgj0AG@Success-Center) 

Configure OKTA User Provisioning
--------------------------------

**HELPFUL HINT**: Adra currently acts as a **SCIM client only**, which means **user import from Adra into OKTA (import from app to OKTA)** is **not supported**.

Navigate to the **OKTA Application** configured previously.

1.  Select the **Provisioning tab.**
2.  Click **Configure API Integration.**

![image](https://static.adra.com/adra-assistant/images/55551c204cba9fee0bec85eaeac8fd23.jpg)  

3.  Click **Enable API Integration**.
4.  Add the **API Token** from the prerequisites.

![image](https://static.adra.com/adra-assistant/images/65a52c7bba1e16ba83bb0784e5b87596.jpg)

5.  Select **Test API Credentials** to verify. Notice the green information.
6.  Click **Save**.

![image](https://static.adra.com/adra-assistant/images/a4669aa0bce02bff7a9432f133d0f0a2.jpg)

7.  Click **Edit** to select the functionality for SCIM Users

![image](https://static.adra.com/adra-assistant/images/75e9e77bd51aa3573f0d6d1a9551b707.jpg)

8.  Configure the options as shown in the image below:
    *   **Create Users** \- Enable
    *   **Update User Attributes** \- Enable
    *   **Deactivate Users** \- Enable
9.  Make sure that **Sync Password** is disabled.
10.  Click **Save**.

![image](https://static.adra.com/adra-assistant/images/c53d5d5f8f62f6a80878398dde656627.jpg)

11.  Scroll down to **Adra by Trintech Attribute Mappings**.

![image](https://static.adra.com/adra-assistant/images/b5a1df290bb0a11e1e3c07989dce0662.jpg)

12.  Remove all attributes not shown in the image below by clicking x.

![image](https://static.adra.com/adra-assistant/images/88b606a7ed07c69d5ccbb0d106facf43.jpg)

**HELPFUL HINT**: **Olson** format is also known as **IANA Time Zone Identifier**. 

Find more information about attributes in the [Developer Portal](https://developer.adra.com/doc/adra-scim/operation/operation-getschemas). 

**HELPFUL HINT: About the Import Tab** - Adra currently acts as a **SCIM client only**, which means **user import from Adra into OKTA (import from app to OKTA)** is **not supported**.

User provisioning is completed. Users can now be provisioned with SCIM.

13.  Navigate to **Assignments**. 

![image](https://static.adra.com/adra-assistant/images/0bcf3c9caac2bf2fba6b70bc86ad3c8c.jpg)

14.  Click on **Assign>>Assign to People.**

**![image](https://static.adra.com/adra-assistant/images/d5e9ba9a118c7f8bd4fd7debdae69784.jpg)**

15.  Select **Assign** for each user.
     1.  If there is a pop-up, confirm and save.
16.  Click **Done**.

![image](https://static.adra.com/adra-assistant/images/7aa0ef22bd795bca4d8b5a9e3cf9cea7.jpg)

17.  You are now able to view provisioned users.

![image](https://static.adra.com/adra-assistant/images/f9001628a03c605a20736b9641c4d26d.jpg)

**WARNING. About User Deactivation** - The user session is not terminated once the user is deactivated in OKTA.   
  
This is by design, the user sessions are not kept server-side, the user session is self-contained token based, which means that the session will remain active until the token expires. When a token renewal is attempted, it will fail due to user deactivation. It will also fail if the user attempts to interact with other parts of the system, since these also require token exchange.

If you wish to provision access and roles, contintue to [Setup OKTA SCIM Groups Linking](#article:kA0VW000000BR1h0AG@Success-Center). 

Related Articles:
-----------------

*   [Setup SCIM Implementation for Automated User Provisioning Using Azure AD](#article:kA06S000001DXbUSAW@Success-Center)
*   [Setup OKTA SCIM Groups Linking](#article:kA0VW000000BR1h0AG@Success-Center)
*   [OKTA SCIm Groups Troubleshooting](#article:kA0VW000000BR3J0AW@Success-Center)