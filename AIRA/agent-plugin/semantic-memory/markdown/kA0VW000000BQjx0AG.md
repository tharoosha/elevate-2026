Setup Post-Requisites for SAML Configuration
============================================

These are the final steps in when setting up SAML with an Identity Provider. Before continuing with these steps, make sure you have completed the [Pre-Requisites for SAML Configuration](#article:kA0VW000000BP6L0AW@Success-Center). 

Configuration at Adra Setup Portal
----------------------------------

The remaining configuration is completed at the Adra Setup Portal. To continue with the configuration:

1.  Log in to the Adra Setup Portal as a **System Administrator,** and open the **Engagement.**
2.  Navigate to the **Security** tab.
3.  Click **Add new Federated Identity Provider** from the **SECURITY POLICY** section.

![image](https://static.adra.com/adra-assistant/images/08979bd570518239a2d6f6bfab90d549.jpg)

4.  A pop-up window appears to create the new Federated Identity Provider policy. In the **Provider details** pop-up window: Fill out **Name**. This is a required value.
5.  Add **description**. This is a required value. 
6.  Under **Federation Metadata**, select **Use Metadata URL**. In the **Metadata URL** field, paste the Metadata URL that was copied from Okta.
7.  Click **Test URL**.

![image](https://static.adra.com/adra-assistant/images/5462532198467221298c1154e845a4fc.jpg)

8.  Scroll down and click **Save**.

![image](https://static.adra.com/adra-assistant/images/edc10d0f80281da3f108017a48e264f7.jpg)

9.  Use **Expand** to verify the configuration.  

![image](https://static.adra.com/adra-assistant/images/d5ffdfb1a95f3eb54c0a134e2cdaf7d1.jpg)

The SAML configuration and SCIM Users provisioning are now complete. The users you have provisioned should be able to log in.  
  

*   To check navigate to **Users>>Employees**.

![image](https://static.adra.com/adra-assistant/images/e480db5b1e9bb89c5b9e1f4d02d44387.jpg)

**BEST PRACTICE**: It is recommended to keep an admin user with password policy as a backdoor in case somethings needs to be changed in the Security Configuration. Go to **User>>Security>>Override employer security settings.** 

![image](https://static.adra.com/adra-assistant/images/4e6b5be75dc1852d087f76a9e7b85ee7.jpg)

You have now completed the required steps for SAML configuration with an Identity Provider.