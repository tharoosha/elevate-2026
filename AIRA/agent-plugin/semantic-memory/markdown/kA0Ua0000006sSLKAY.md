Setup Planful Integration with Adra
===================================

This setup follows the standard **SAML 2.0 specification** as outlined in our [Success Center article](#article:kA00H000000oOTQSA2@Success-Center). In this configuration, **Adra always acts as the Service Provider (SP)**.

In this specific case, **Planful** serves as the **Identity Provider (IdP)**. Therefore, Adra's **Security Settings** must be configured to **Federated Policy**, where **Planful is designated as the SSO provider**.

To obtain IdP Federation Metadata specific to your environment, please contact Planful for the required metadata file or URL.

Once configured, users attempting to log in to Adra will be redirected to Planful for authentication using their Planful credentials, and then returned to Adra. This flow is consistent with any other SAML-compliant IdP.

Technical Implementation in Adra
================================

Adra to Planful Links
---------------------

This integration also enables users (federated through Planful) to access Planful directly via a navigation link within Adra. For this feature to function correctly, the following conditions must be met:

*   The **SAML Response** must originate from [planful.com](http://planful.com/) (as specified in the **Domain/PartnerName** of the SAML SSO configuration).
*   1.  `ApplicationUrl`: The URL to the specific Planful environment for the customer.
    2.  `AuthKey`: A key used to authenticate the user when returning to Planful from Adra. This is particularly useful if the Planful session has expired due to prolonged activity in Adra.The **SAML Response** must include **two SAML Assertions**:

![image](https://static.adra.com/adra-assistant/images/b96b1708a309a4586a79697646bc68ba.jpg)

Automatic Engagement Selector (optional)
----------------------------------------

If the user has multiple engagements in Adra, the engagement selector can be bypassed by providing a hint from the Planful Platform. This is achieved via an additional **SAML Assertion** in the response from Planful.

3.  The SAML Response should include the SAML assertion:
    1.  `AccountReconciliationTenantId`**:** This corresponds to the `EngagementSid` in Adra.  
        When a user is redirected from Planful to Adra, this value is stored in the session. When the Engagement Selector is triggered, it checks for this hint and automatically selects the appropriate engagement, skipping the selection window.

![image](https://static.adra.com/adra-assistant/images/f4bee49d089461a7efbfdf634d9e552f.jpg)

This window will be skipped if AccountReconciliationTenantId is provided (Only relevant to Multi-Engagement users)

Troubleshooting
---------------

If a user clicks Account Reconciliation (1) in Planful and receives an error (2) on the Adra Login page, Planful is not set as the IdP in the **Security Policies** in Adra. Please contact your administrator and ensure they configure Planful as IdP in Adra.

![image](https://static.adra.com/adra-assistant/images/6242a06d8db9f22a992ef563e45234c7.jpg)

Related Articles
----------------

*   [Setup Federating with Adra](#article:kA00H000000oOTQSA2@Success-Center)