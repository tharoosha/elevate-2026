# Adra.Balancer — Workspace Knowledge

This file is loaded automatically by GitHub Copilot for every conversation in this workspace. Agents should treat it as the authoritative map of this codebase and its Azure DevOps neighbours.

---

## Organisation

- **Azure DevOps org:** `https://adramatch.visualstudio.com`
- **Jira site:** `https://adramatch.jira.com`
- **Confluence:** hosted on the same Atlassian cloud instance (`adramatch`)

---

## This repository — `Adra.Balancer`

**Project:** Adra Balancer (ADO project ID `5ff67c51-a610-4970-9ac7-788612d10e1f`)  
**Repo URL:** `https://adramatch.visualstudio.com/DefaultCollection/Adra%20Balancer/_git/Adra.Balancer`  
**Purpose:** Balance sheet reconciliation software — eliminates error-prone spreadsheets, streamlines the financial close process, increases efficiency, control, and visibility.

### Solution layout

| Folder | Purpose |
|---|---|
| `Adra.Balancer.App/` | Aurelia 1 SPA (frontend); built on the internal MAUI (`@adra/aurelia-ui`) design system |
| `Adra.Balancer.Web/` | ASP.NET Core host for the SPA + backend API |
| `Adra.Balancer.Service/` | Core business-logic service layer |
| `Adra.Balancer.Model/` | Domain model / entities |
| `Adra.Balancer.DataFacade.Contracts/` | Data access contracts |
| `AdraMatch.Balancer.DataFacade.Accessor/` | Data access implementations |
| `Adra.Balancer.ServiceFacade.Contracts/` | Service facade contracts consumed by the web layer |
| `Adra.Balancer.AutoMapperConfigs/` | AutoMapper profile registrations |
| `Adra.Balancer.PublicModels/` | DTOs / view-models shared across boundaries |
| `Adra.Balancer.SharedUtils/` | Cross-cutting utilities (+ unit tests in `Adra.Balancer.SharedUtils.Tests/`) |
| `Adra.Balancer.Resources/` | Localisation / RESX resources |
| `Adra.Balancer.WebConfiguration/` | App configuration helpers |
| `Adra.Balancer.EngagementAdmin/` | Engagement admin module |
| `Adra.Balancer.Kubernetes.*` | Kubernetes background job workers (one project per job type — see table below) |
| `AdraMatch.Balancer.Kubernetes.*` | Additional Kubernetes workers for the AdraMatch product line |
| `AdraMatch.Balancer.Kubernetes.Base/` | Shared base for AdraMatch workers |
| `AdraMatch.Balancer.Exceptions/` | Shared exception types |
| `AdraMatch.Balancer.DataFacade.Contracts/` | Data contracts for AdraMatch |

#### Kubernetes workers (Adra.Balancer.Kubernetes.*)

| Worker project | Job |
|---|---|
| `AccountDelete` | Delete accounts |
| `Base` | Shared base for all Balancer workers |
| `Cleaner` | Data cleanup jobs |
| `DeleteAccountInPeriod` | Remove account-period associations |
| `EngagementAdminDelete` | Delete engagement admin data |
| `ExcelReconciliation` | Excel-based reconciliation processing |
| `IdentitySync` | Sync identity/user data |
| `IntegrationHubBalanceImport` | Import balances from Integration Hub |
| `IntegrationHubTransactionImport` | Import transactions from Integration Hub |
| `MultiCurrencyRate` | Multi-currency rate processing |
| `PeriodDelete` | Delete periods |
| `ReAssignAccountPeriodRoles` | Reassign account-period roles |
| `ScheduledItemExport` | Export scheduled items |
| `SingleCurrencyRate` | Single-currency rate processing |
| `TransactionStatusExport` | Export transaction statuses |
| `VarianceAnalysis` | Variance analysis processing |

#### AdraMatch Kubernetes workers (AdraMatch.Balancer.Kubernetes.*)

| Worker project | Job |
|---|---|
| `AccountExport` | Export accounts |
| `AccountImport` | Import accounts |
| `AccountPeriodsExport` | Export account periods |
| `AccountRoleExport` | Export account roles |
| `AccountRoleImport` | Import account roles |
| `AccountSettingsAndRolesUpdate` | Update account settings and roles |
| `AutoWorkflowServices` | Automated workflow processing |
| `BalanceImport` | Import balances |
| `ExtraFieldExport` | Export extra fields |
| `ExtraFieldImport` | Import extra fields |

### Key build commands

```shell
# Restore
dotnet restore Adra.Balancer.sln

# Build
dotnet build Adra.Balancer.sln

# Run web host
dotnet run --project Adra.Balancer.Web/Adra.Balancer.Web.csproj

# Run frontend dev server
cd Adra.Balancer.App && npm start
```

### Tech stack

- **Backend:** .NET (ASP.NET Core), AutoMapper, Entity Framework Core
- **Frontend:** Aurelia 1, TypeScript, SCSS, webpack — MAUI (`@adra/aurelia-ui`) design system
- **Workers:** .NET Kubernetes background services (one image per job)
- **Infra:** Kubernetes, Docker (`docker-compose-linux.yml`)

---

## All Azure DevOps repositories

### Adra Balancer project

| Repo | Notes |
|---|---|
| `Adra.Balancer` | **Primary repo** — this workspace |
| `Adra.Balancer.Automation` | Test automation suite |
| `Adra Balancer Old` | Legacy / archived codebase |
| `Adra.AdminTool.balancer.fork` | Fork of the admin tool scoped to Balancer |
| `Adra.Balancer.Dummy` | Dummy/stub repo |

### Adra Platform project

Shared libraries and infrastructure consumed by all Adra products.

| Repo | Purpose |
|---|---|
| `Adra.AdminTool` | Admin tooling for the platform |
| `Adra.Assistant` | Adra AI/assistant integration |
| `Adra.Automation.Performance` | Performance test automation |
| `Adra.Automation.Security` | Security test automation |
| `Adra.Common.AspNetCore.SignalR` | SignalR integration for ASP.NET Core |
| `Adra.Common.AspNetCore.SignalR.Contracts` | Contracts for SignalR integration |
| `Adra.Common.Automation` | Common automation helpers |
| `Adra.Common.Automation.MAUI` | Automation helpers for MAUI UI components |
| `Adra.Common.AzureClientCredential` | Azure client credential helpers |
| `Adra.Common.CacheClient.Contracts` | Cache client contracts |
| `Adra.Common.CacheClient.MsExtensions` | MS Extensions-based cache client |
| `Adra.Common.Configuration.AspNetCore` | Configuration for ASP.NET Core |
| `Adra.Common.Configuration.CloudService` | Configuration for cloud services |
| `Adra.Common.Configuration.Contracts` | Shared configuration contracts |
| `Adra.Common.Configuration.NetFw` | Configuration for .NET Framework |
| `Adra.Common.Configuration.ServiceFabric` | Configuration for Service Fabric |
| `Adra.Common.Cryptography` | Cryptography utilities |
| `Adra.Common.Db.Contracts` | Database access contracts |
| `Adra.Common.Db.EfCore` | Entity Framework Core implementations |
| `Adra.Common.DocumentAuth` | Document authorisation helpers |
| `Adra.Common.EditorConfig.Projects` | Shared EditorConfig for .NET projects |
| `Adra.Common.ExcelWriter` | Excel generation library |
| `Adra.Common.FileAccessor.ApiExtensions.AspNetCore` | File accessor API extensions |
| `Adra.Common.FileAccessor.AzureBlobStorage` | Azure Blob Storage file accessor |
| `Adra.Common.FileAccessor.Contracts` | File accessor contracts |
| `Adra.Common.FileAccessor.FileSystem` | File system file accessor |
| `Adra.Common.HealthChecks` | Health check implementations |
| `Adra.Common.HealthChecks.Endpoint` | Health check HTTP endpoints |
| `Adra.Common.HealthChecks.Endpoint.NetFw` | Health check endpoints (.NET Framework) |
| `Adra.Common.HtmlSanitization` | HTML sanitisation library |
| `Adra.Common.Http` | HTTP client helpers |
| `Adra.Common.Identity.SCIM` | SCIM identity integration |
| `Adra.Common.Identity.SCIM2` | SCIM 2.0 identity integration (fork) |
| `Adra.Common.IdentityAuthentication.Client` | Identity authentication client |
| `Adra.Common.IdentityBuilder.BearerTokens.AspNetCore` | Bearer token auth builder |
| `Adra.Common.IdentityBuilder.Cookies.AspNet` | Cookie auth builder |
| `Adra.Common.IdentityBuilder.Shared` | Shared identity builder components |
| `Adra.Common.IdentityModel` | Identity model definitions |
| `Adra.Common.IdentitySync.Contracts` | Identity sync contracts |
| `Adra.Common.ImportLibraries` | Import processing libraries |
| `Adra.Common.Insights.AspNet` | App Insights for ASP.NET |
| `Adra.Common.Insights.AspNetCore` | App Insights for ASP.NET Core |
| `Adra.Common.Insights.Contracts` | Insights contracts |
| `Adra.Common.Insights.Kubernetes.BackgroundService` | Insights for Kubernetes workers |
| `Adra.Common.Insights.Shared` | Shared insights helpers |
| `Adra.Common.Insights.WorkerService` | Insights for worker services |
| `Adra.Common.KeyVault` | Azure Key Vault integration |
| `Adra.Common.Locale.Data` | Locale/culture data |
| `Adra.Common.Log.Contracts` | Logging contracts |
| `Adra.Common.MailMerge` | Mail merge / email templating |
| `Adra.Common.Mapping` | Object mapping helpers |
| `Adra.Common.Mapping.Contracts` | Mapping contracts |
| `Adra.Common.MessageQueueClient.Contracts` | Message queue client contracts |
| `adra-application-context` | JS/TS app context library |
| `adra-aurelia-clarity` | Clarity design integration for Aurelia |
| `adra-aurelia-commandbar` | Command bar Aurelia component |
| `adra-aurelia-docviewer` | Document viewer Aurelia component |
| `adra-aurelia-html-sanitizer` | HTML sanitiser Aurelia plugin |
| `adra-aurelia-insights` | App Insights Aurelia plugin |
| `adra-aurelia-oidc` | OIDC auth Aurelia plugin |
| `adra-aurelia-oidc-extensions` | OIDC extensions for Aurelia |
| `adra-aurelia-pendo` | Pendo analytics Aurelia plugin |
| `adra-aurelia-ui-file-transfers` | File transfer UI components |
| `adra-aurelia-ui-webpack` | Webpack config for Aurelia UI |
| `adra-aurelia2-skeleton` | Aurelia 2 project skeleton |
| `adra-bicep-reference-project` | Bicep IaC reference project |
| `adra-browser-storage` | Browser storage abstraction |
| `adra-clarity` | Clarity design system wrapper |
| `adra-commandbar` | Command bar component |
| `adra-download` | File download utilities |
| `adra-engagement-selector` | Engagement selector component |
| `adra-eslint-config` | Shared ESLint configuration |
| `adra-excelwriter` | Excel writer (JS) |
| `adra-file-system` | File system abstraction (JS) |
| `adra-file-transfers` | File transfer utilities (JS) |
| `adra-htmlhint-config` | Shared HTMLHint configuration |
| `adra-http` | HTTP client (JS/TS) |
| `adra-identitymodel` | Identity model (JS/TS) |
| `adra-jest-config` | Shared Jest configuration |
| `adra-jsutils` | General JavaScript/TypeScript utilities |
| `adra-karma-sonarqube-results-reporter` | Karma → SonarQube reporter |
| `adra-kendo-ui` | Kendo UI integration |
| `adra-locale-data` | Locale data package |
| `adra-locale-intl` | Intl-based locale package |
| `adra-nodeutils` | Node.js utilities |
| `adra-oidc-sessionalive` | OIDC session-keepalive library |
| `adra-pendo` | Pendo analytics integration |
| `adra-polyfills` | Browser polyfills |
| `adra-polyfills-karma` | Polyfills for Karma test runner |
| `adra-prettier-config` | Shared Prettier configuration |
| `adra-resx-to-i18next` | RESX → i18next conversion tool |
| `adra-sass-lint-config` | Shared Sass-lint configuration |
| `adra-sbom` | Software Bill of Materials tooling |
| `adra-sonarqube-environment` | SonarQube environment setup |
| `adra-static` | Static assets / CDN content |
| `adra-stylelint-config` | Shared Stylelint configuration |
| `adra-swagger-inspector` | Swagger/OpenAPI inspector tool |
| `adra-tfx-file-regex-replace` | TFX build task: file regex replace |
| `adra-tsconfig-rules` | Shared TypeScript configuration rules |
| `adra-web-insights` | Web-layer App Insights integration |

### Adra UI project

Internal Aurelia UI component libraries.

| Repo | Purpose |
|---|---|
| `adra-aurelia-ui` | **MAUI** — primary Aurelia 1 UI component library (design system) |
| `adra-aurelia-charts` | Chart components (Aurelia) |
| `adra-aurelia-charts-billboardjs` | Billboard.js chart wrapper |
| `adra-aurelia-charts-c3` | C3.js chart wrapper |
| `adra-aurelia-html-editor` | HTML editor component |
| `adra-aurelia-html-editor-tinymce` | TinyMCE-based HTML editor |
| `adra-aurelia-ui-helpbar` | Helpbar component |
| `adra-aurelia-validation` | Validation plugin |
| `adra-bootstrap` | Bootstrap theme/overrides |

### Adra Accounts project

Transaction matching (AdraMatch) product.

| Repo | Purpose |
|---|---|
| `adra-match-accounts` | Main AdraMatch Accounts application |
| `Adra.Matcher` | Matching engine and services |
| `adra-event-sourcing` | Event sourcing infrastructure |
| `CurrencyCodeSync` | Currency code synchronisation tool |
| `Adra.Matcher.Dummy` | Stub/dummy repo |

### Adra Analytics project

| Repo | Purpose |
|---|---|
| `Adra.Analytics` | Analytics product — reports and dashboards |
| `Adra.Analytics.Embedded` | Embedded analytics (iframe / SDK integration) |

### Adra Journal Entry project

| Repo | Purpose |
|---|---|
| `Adra.JournalEntry.App` | Journal Entry SPA + API (automated journal recording and workflow) |

### Adra Receivables project

| Repo | Purpose |
|---|---|
| `Adra Receivables` | Receivables management application |

### TaskManager project

| Repo | Purpose |
|---|---|
| `TaskManager` | Financial close process orchestration / task management |

---

## Agent guidance

- When a task involves shared .NET libraries (auth, config, health checks, file access, HTTP, etc.), look first in the **Adra Platform** repos (`Adra.Common.*`).
- When a task involves shared frontend components or the MAUI design system, look in **`adra-aurelia-ui`** (Adra UI project).
- Cross-repo code search: use `gh search code --owner adramatch` or the `mcp_azure_devops2_search_code` tool scoped to the relevant project.
- The `deep-research` agent (`.github/agents/deep-research.agent.md`) can search across repos, Confluence, and Jira — delegate multi-source investigations to it.
- The `git-history-analyzer` skill (`.github/skills/git-history-analyzer/SKILL.md`) is available for git blame, PR history, and work-item tracing within this repo.
- The `jira-ticket-groomer` skill (`.github/skills/jira-ticket-groomer/SKILL.md`) handles live Jira ticket grooming and writes back to `adramatch.jira.com`.
