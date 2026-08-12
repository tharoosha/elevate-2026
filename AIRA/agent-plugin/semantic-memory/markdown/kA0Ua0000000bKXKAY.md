Setup Security for Engagements and Organizations
================================================

Security settings can be configured both at the Organization and Engagement level. The security options are identical.  
Security settings for an organization are used in the example below.

The security settings enable administrators to:

*   Determine how long users can be inactive before automatic logout
*   Set password standards
*   Define rules for incorrect password attempts
*   Establish user authentication via a federated identity provider
*   Manage users manually or through SCIM (System for Cross-domain Identity Management)

To locate the security settings for an Organization, navigate to **Setup>>Organizations>>Security**  
To locate the security settings for an Engagement, navigate to **Setup>>Engagements>>Security**

![image.png](https://static.adra.com/adra-assistant/images/100a1798c1f70717a657d1aa4b7c1b52.jpg)

1.  **Idle timeout**
    *   **Use default idle timeout 30 min** \- Users will automatically be logged out after 30 minutes of inactivity.
    *   **Use Custom idle timeout** - Specify the allowed idle time in minutes. For instance, the following example allows users to remain idle for 480 minutes (equivalent to 8 hours). 

![image](https://static.adra.com/adra-assistant/images/5bd0a78a782bcbdf46f9d1ebb043a0e7.jpg)

2.  **Security policy**
    *   **Use default security policy**
        *   **Password policy** \- The password must contain 8 characters: a minimum of one upper case, one lower case, and one numeric character. No special characters are necessary.
        *   **Account lockout policy** - After 5 unsuccessful login attempts, users will be temporarily locked out for 15 minutes before they can make another login attempt.  
    *   **Use a custom security policy -** Click **Add new custom security policy** to configure a new password and account lockout policy.   
        **![image](https://static.adra.com/adra-assistant/images/7a91d6b57ee265fad689b816a73206d3.jpg)**  
        The Password and account lockout policy pop-up opens:

![2024-03-13_15-47-33.png](https://static.adra.com/adra-assistant/images/575b889a9a69cbab58ca3879af55d1b0.jpg) 

1.  *   1.  **Name and Description** \- Enter a name and description for the custom policy. Both fields are obligatory.
        2.  **Password policy**
            *   Enter the minimum requirements for password length, uppercase letters, lowercase letters, numbers, and special characters.
            *   In the **Passwords expire after** field, input the number of days until the password is due for renewal by each user. All fields are obligatory.
        3.  **Account lockout policy** \- All fields are obligatory
            *   **Thresholds** \- Enter the maximum number of incorrect password attempts before the user is temporarily locked out.
            *   **Duration (min)** \- Enter the amount of minutes the user will be locked out for.
            *   **Reset lockout counter after (Mins)** \- Enter 
    *   **Use a federated identity provider** - When configured users log in to Adra through an external authenticator, streamlining the login process. 

![image](https://static.adra.com/adra-assistant/images/f90365ceb5b333f2d32db8fc94cddf1f.jpg)

*   *   *   Learn about federating with Adra here: [Setup Federating with Adra](#article:kA00H000000oOTQSA2@Success-Center)

3.  **User management**

*   *   **Use default user management** \- Users are managed directly in the Adra application.
    *   **Use SCIM** \- User management is automated through an external system.  
        Learn more here:
        *   **Microsoft Entra ID** \- [Setup SCIM Implementation for Automated User Provisioning Using Microsoft Entra ID](#article:kA06S000001DXbUSAW@Success-Center)
        *   **Okta** \- [Setup SCIM Implementation for Automated User Provisioning Using OKTA](#article:kA06S000001DXbPSAW@Success-Center)

Related Articles
----------------

Organizations

*   [Setup Manage BPO Organization Engagements](#article:kA06S000001DXagSAG@Success-Center)
*   [Setup Organization Settings](#article:kA0Ua0000000VwfKAE@Success-Center)
*   [Setup Create Users and Administrators for BPO Organization](#article:kA06S000001DXaMSAW@Success-Center)
*   [Setup Add BPO Organization Admins and Remove External Admins](#article:kA06S000001DXabSAG@Success-Center)
*   [Setup Create Engagement and Assign Engagement Admins](#article:kA06S000001DXalSAG@Success-Center)

Engagements

*   [Setup Engagement Settings](#article:kA00H000000oOTGSA2@Success-Center)