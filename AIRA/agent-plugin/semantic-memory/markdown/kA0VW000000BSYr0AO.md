OKTA SCIM Groups Unlinking
==========================

A group can be unlinked in OKTA.

OKTA - SCIM Groups Unlinking
----------------------------

1.  In OKTA, navigate to **Applications>>Push Groups** tab. Find the **Active** tab.
2.  In the dropdown menu, select **Unlink pushed group.**

![image](https://static.adra.com/adra-assistant/images/21f8b487169cf5bad2103e118c003393.jpg)

This will prompt two possible options. Below you will find descriptions for both.

### **Option 1: Delete group in target app (recommended)**

3.  Select **Delete the group in the target app (recommended)**.
    *   Selecting this option will remove all members of the Adra Group before deleting the group from OKTA.
    *   This will also remove assigned roles in Adra.
4.  Click **Unlink**.

![image](https://static.adra.com/adra-assistant/images/efe0447665a9289642fa59ff1ac668f5.jpg)

The removed group disappears from OKTA. If you want to re-assign this Adra Group to users you need to **Refresh App Groups**. This will allow you to find the deleted group in **Directory>>Groups**.

### **Option 2: Leave the group in the target app**

**WARNING**. This option is not recommended as it involves manual de-provisioning of group members.  
  
If you need to remove existing roles in Adra, remove all members from the existing group and ensure group is synced without members before unlinking. Failure here requires roles to be manually removed in Adra Setup.

3.  Select **Leave the group in the target app**.
    *   Choosing this option means nothing will happen in Adra.
4.  Click **Unlink**.

![image](https://static.adra.com/adra-assistant/images/56b8ee813e2a69d71cc2f65f8e117d59.jpg)

Related Articles:
-----------------

*   [OKTA Scim Groups Troubleshooting](#article:kA0VW000000BR3J0AW@Success-Center)
*   [Setup OKTA Scim Groups Linking](#article:kA0VW000000BR1h0AG@Success-Center)
*   [Setup SCIM Provisioning Users Using OKTA](#article:kA06S000001DXbPSAW@Success-Center)
*   [Setup Prerequisites for SCIM Configuration](#article:kA0VW000000BQgj0AG@Success-Center)