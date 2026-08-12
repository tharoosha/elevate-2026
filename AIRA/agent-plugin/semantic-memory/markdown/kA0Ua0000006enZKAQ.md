Matcher Understanding User Roles and Access
===========================================

There are four administrative roles and one user role in Matcher. Administrative roles include **Organization and Engagement Admin**, **Financial Admin** and **Business Administrator**, which are defined in Setup, and **Local Business Admin**, which is configured in Matcher Administration. **Local Business Administrator** roles are assigned to standard users to grant administrative access to specific legal entities.

While the **Organization and Engagement Admin** and **Financial Admin** is not part of the Matcher hierarchy, many administrators fulfill more than one role. For example, the Financial Admin may also be a Business Admin.

The figure below displays the breakdown of roles in Matcher.

![image](https://static.adra.com/adra-assistant/images/3c1c8fff52b95e2e3df2ab6eae46884b.jpg)

Administrative Roles
--------------------

### System Administrators

The **Organization and Engagement Admin (OEA)** is responsible for system administration. The SA is the initial user of the system and is typically an administrator or part of the IT staff.

*   Manage employees (including SCIM) and Organization Admins
*   Control SSO/password policies
*   Can see all organization engagements; can create engagements (when permitted)
*   Manage user access to a specific engagement
*   Configure engagement settings (time zone, webhooks, integrations)
*   Limited trust actions (add trust to service-provider organizations; remove Support/Auditor)

**Financial admin (FA)** - is responsible for the financial configurations, including: 

*   Create and manage Legal entities
*   Create and manage fiscal years/periods
*   Import and maintain currency rates

The OEA is the first user of the system and is responsible for setting it up by adding users and assigning them access and administrative privileges for applications. However, the OEA cannot activate the roles that are created. Role activation happens only when users complete the registration process by confirming their verification through email.

The FA is responsible for creating the required legal entities. Accounts and user roles can only be created and assigned after these legal entities are in place.

### Matcher Administrators

**Business Administrator (BA)** – The Business Admin has the highest level of access within Matcher and is responsible for Matcher’s administrative settings. Typically, the Business Admin is a financial manager or equivalent, depending on the organization’s structure. If needed, the Business Admin may also be assigned one or both of the System Admin roles. The Business Admin can access all parts of Matcher.

Business Admin permissions include:

*   Accessing all legal entities.
*   Granting users access to reconciliation groups.
*   Granting Local Business Admin access.
*   Configuring General Settings to meet specific business requirements.
*   Managing fiscal years, extra fields, reconciliation groups, and sources.
*   Viewing import and match history.
*   Managing import configurations and matching rules.
*   Viewing **Home** page information.
*   Importing files.
*   Running automatic matching.
*   Viewing and manually matching transactions.
*   Exporting transactions and sending to Balancer.
*   Running and downloading reports.

**Local Business Administrator (LBA)** – The Local Business Admin is a standard user with administrative access to specific legal entities, assigned by the Business Admin. While the Local Business Admin’s admin rights are limited to only the designated legal entities, privileges within those entities are the same as those of a Business Admin.

To grant Local Business Admin access, navigate to **Matcher>>Administration>>Users**. Click the user’s name and check the box(es) next to the legal entities that the LBA needs to access. _Refer to Lesson 2 Legal Entity Access_

Local Business Admin permissions include:

*   Viewing General Settings and existing extra fields.

For the assigned legal entities, Local Business Admin permissions include:

*   Managing reconciliation groups.
*   Viewing import and match history.
*   Managing import configurations and matching rules.
*   Viewing **Home** page information.
*   Importing files.
*   Running automatic matching.
*   Viewing and manually matching transactions.
*   Exporting transactions and sending to Balancer.
*   Running and downloading reports.

User Roles
----------

**Standard users** - Are responsible for the day-to-day operations in the software. It is important to note that both the Local Business Admin and Business Admin can also function as users. Depending on the assigned permissions, users may be able to access some or all reconciliation groups.

For the assigned reconciliation groups, standard user permissions include:

*   Viewing import and match history.
*   Viewing **Recon. Groups and Details** page.
*   Viewing **Home** page information.
*   Importing files for accessible legal entities
*   Running automatic matching.
*   Viewing and manually matching transactions.
*   Exporting transactions.
*   Running and downloading reports.

**Limited Access User** - Have a limited view of the Matcher interface

For the assigned reconciliation groups, limited access user permissions include:

*   Investigate assigned exceptions on the **Home** page.

The table below summarizes the permissions for each role.

![image](https://static.adra.com/adra-assistant/images/add7059163cb06e064e096a67964bb1f.jpg)

Related Articles
----------------

*   [Setup Create New Users In Adra](#article:kA00H000000kJ5LSAU@Success-Center)
*   [Matcher User Page](#article:kA0Ua0000006enZKAQ@Success-Center)