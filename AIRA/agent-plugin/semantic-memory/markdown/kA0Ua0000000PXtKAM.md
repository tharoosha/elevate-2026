Setup User Access and Roles Definitions
=======================================

**System Administrators**
-------------------------

The **Organization and Engagement Admin (OEA)** is responsible for system administration. The SA is the initial user of the system and is typically an administrator or part of the IT staff.

*   Manage employees (including SCIM) and Organization Admins
*   Control SSO/password policies
*   Can see all organization engagements; can create engagements (when permitted)
*   Manage user access to a specific engagement
*   Configure engagement settings (time zone, webhooks, integrations)
*   Limited trust actions (add trust to service-provider organizations; remove Support/Auditor)

**Financial admin (FA)** - is responsible for the financial configurations, including: 

*   Create and manage Legal entities
*   Create and manage fiscal years/periods
*   Import and maintain currency rates

The OEA is the first user of the system and is responsible for setting it up by adding users and assigning them access and administrative privileges for applications. However, the OEA cannot activate the roles that are created. Role activation happens only when users complete the registration process by confirming their verification through email.

The FA is responsible for creating the required legal entities. Accounts and user roles can only be created and assigned after these legal entities are in place.

**Business Administrators(BA)**
-------------------------------

The Business Administrator (BA) is typically a financial manager and is responsible for the daily administration of the assigned application. The BA role is the highest level of access within each application. This role can overlap with the SA role, as well as perform non-administrative tasks typically assigned to Standard users.  
The following lists summarize the responsibilities within each application.

### Balancer

*   Accessing all legal entities.
*   Granting users legal entity access.
*   Importing balances and items.
*   Utilizing task automation jobs.
*   Configuring account settings and roles.
*   Setting up fiscal years and periods.
*   Adding and updating closing rates.
*   Configuring general settings to meet specific business requirements. 
*   Setting up import item and balance automation to streamline and simplify reconciliation processes.

### Task Manager

*   Assigning roles to users.
*   Managing teams
*   Granting lower-level administrative roles, including Section or Team Admin, to users.
*   Creating and editing task lists.
*   Managing Task Manager Administration page.
*   Manage Task templates in the Library management.

### Matcher

*   View Home page information
*   Import files
*   Run automatic matching
*   View and manually match transactions
*   Export transactions and Send them to Balancer
*   Run and download Reports
*   Import, and deactivate fiscal years
*   Manage:
    *   Reconciliation groups
    *   Import configurations and automatic import configurations
    *   Matching rules
    *   Extra fields
    *   Sources in general settings
    *   Local BA and User Access rights to Reconciliation Groups
*   View and undo import/match history

  
**Auditor**
--------------

Users who are assigned Auditor in **Setup** cannot be assigned Business admin or System admin privileges.  
The Auditor option in Setup exclusively impacts Balancer, where they have a restricted view. Auditors operate as standard users in Matcher and Task Manager.  
Learn more about the Auditor role: [Balancer Understanding User Roles.](#article:kA00H000000kJ8tSAE@Success-Center)

  
**Standard User**
--------------------

BAs must assign the following privileges to Standard users for them to perform their daily tasks:

*   Legal entities and account roles in Balancer
*   Teams and tasks in Task Manager
*   Legal entities in Matcher

**Local Administrators: Application-Specific Roles**
----------------------------------------------------

LBAs are assigned within each application. They can only administer legal entities where they have the role. LBA privileges are assigned within each application. Navigate to the application, click **Administration>>User**, select a user, and assign applicable privileges.  
Learn more about the LBA role in the applicable article:

*   [Balancer Understanding User Roles](#article:kA00H000000kJ8tSAE@Success-Center)
*   [Task Manager Understanding User Roles and Access](#article:kA06S000000kK7vSAE@Success-Center)
*   [Matcher Understanding User Roles and Access](#article:kA0Ua0000006elxKAA@Success-Center)

Related Articles
----------------

*   [Balancer Users Page Overview](#article:kA00H000000oOcwSAE@Success-Center)
*   [Balancer Understanding User Roles](#article:kA00H000000kJ8tSAE@Success-Center)
*   [Task Manager Understanding User Roles and Access](#article:kA06S000000kK7vSAE@Success-Center)
*   [Matcher User Page](#article:kA0Ua0000006enZKAQ@Success-Center)
*   [Create New user in Platforms Setup](#article:kA00H000000kJ5LSAU@Success-Center)
*   [Setup Connect External User Through Link](#article:kA06S000001DXbFSAW@Success-Center)