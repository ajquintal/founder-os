# Tool & MCP Stack Map — every tool and MCP to run and operate the business

**Domain 14 of the coverage map.** The concrete answer to *"every tool and MCP we need to run and operate the business, identified."* This is the industry-agnostic **default stack** — the recommended tool for each business function, its alternatives, whether an MCP or skill is available **in this environment right now**, what it does, how to connect it, and what it costs. Swap notes and industry triggers are at the bottom.

> Load order unchanged: every asset loads `founder-profile/PROFILE.md` → active `ventures/<slug>/venture-context.md` → then runs. This doc is a **reference**, not a skill — the `venture-bootstrap`, `ship`, `finance-ops`, `sales-crm`, `gtm-marketing`, `support-success`, and `analytics-stack` assets consume it.
> Security posture and the engineering/RBAC backbone live in **`docs/engineering-backbone.md`**; the live read/act connector design lives in **`docs/mcp-proprietary-layer.md`**; hard rules in **`founder-profile/guardrails.md`**.
>
> **Status:** v0.1 — pending Tony red-line.

---

## How to read the availability column

What "available here" means is precise. Verified against this environment's connectors, skills, and the claude.ai MCP registry on 2026-07-13.

| Tag | Meaning | What Tony does |
|---|---|---|
| **LIVE** | MCP connected **and** its tools are loaded in this chat | Nothing — usable now |
| **OFF** | MCP connector is installed on the org but **toggled off in this chat** | Enable it in this chat's connector settings (~30 sec) |
| **SKILL** | A skill / dev-kit is loaded in-session (operates the tool via its API) | Nothing — the skill runs it; API credentials needed for live sends |
| **REGISTRY** | Not installed, but present in the claude.ai MCP registry — one-click OAuth connect (verified present) | Connect via `SearchMcpRegistry` → claude.ai; ~2 min |
| **DIRECT** | No claude.ai connector — connect at the vendor (API key / dashboard). Claude Code operates some of these natively | Set up the account + credentials directly |

**Cost tiers:** `$0` free tier launches it · `$` <~$50/mo to start · `$$` ~$50–500/mo at growth · `$$$` $500+/mo or enterprise · `%` usage / per-transaction (no fixed floor).

---

## The master table

Ordered build → go-to-market → back office. **Default** is the opinionated pick for a generic venture; **Alternatives** are the credible swaps; **Here?** is the availability tag above.

| Business function | Recommended default | Alternatives | Here? | What it's used for | Setup / connect note | Cost |
|---|---|---|---|---|---|---|
| **Product framework / frontend** | Vite + React + TS + Tailwind + shadcn/ui | Next.js, Remix, SvelteKit | **SKILL** | The app UI; ships from `starters/saas` | Clone `starters/saas`; `engineering:*` skills author it | `$0` |
| **Hosting / deploy / CDN** | **Vercel** | Netlify, Cloudflare Pages, DigitalOcean App Platform (starter has `.do/app.yaml`) | **LIVE** (Vercel MCP) | Deploy, preview URLs, edge CDN, runtime logs/errors | `deploy_to_vercel`; project + domain via MCP | `$0`→`$` |
| **Database / auth / storage / serverless** | **Supabase** | Neon + Clerk, Firebase, PlanetScale + Auth0 | **LIVE** (Supabase MCP) | Postgres, **RLS**, Auth, Edge Functions, Storage | Supabase MCP live; `apply_migration`, `deploy_edge_function` | `$0`→`$` |
| **Source control / CI** | **GitHub** + GitHub Actions | GitLab, Bitbucket | **DIRECT** | Repo, PRs, CI (lint/type/unit/build/e2e) | Native `git`/`gh` in Claude Code; CI workflow in starter. No first-party claude.ai connector (Sourcegraph/Replit exist in registry for code context) | `$0`→`$` |
| **Payments / billing / subscriptions** | **Stripe** | Paddle / Lemon Squeezy (merchant-of-record, handles global tax), Braintree | **OFF** (Stripe connector) + **DIRECT** (API in starter) | Checkout, subscriptions, webhooks, revenue/MRR reads | App uses Stripe **API keys** (test→live) already wired in edge functions; enable the **MCP connector** for revenue/ops reads | `%` (2.9%+30¢) |
| **CRM / sales pipeline** | **Airtable** (+ `sales-ops` skill) | HubSpot, Attio, Salesforce, Pipedrive | **LIVE** (Airtable MCP) + **SKILL** (`airtable:sales-ops`) | Leads, pipeline, lead scoring, deal desk, proposals log | Airtable MCP live; `sales-ops`/`product-ops`/`marketing-ops` skills build the bases | `$0`→`$$` |
| **Email — transactional** | **SendGrid** (Twilio) | Resend, Postmark, AWS SES, Twilio Email | **SKILL** (`twilio-sendgrid-*`) + **DIRECT** (API) | Receipts, password resets, OTP, system notifications | `twilio-sendgrid-email-send` skill; `SG.`-prefixed API key in edge function; auth domain + SPF/DKIM | `$0`→`$` |
| **Email — marketing / lifecycle** | **Mailchimp** | Klaviyo (e-com), Customer.io (product/behavioral), MailerLite, ConvertKit | **OFF** (Mailchimp) / **REGISTRY** (Klaviyo, Customer.io, MailerLite) | Newsletters, campaigns, drip/lifecycle automation | Enable Mailchimp in chat, or connect Klaviyo/Customer.io via registry; `marketing:email-sequence` skill drafts | `$0`→`$$` |
| **SMS / voice / WhatsApp** | **Twilio** | MessageBird, Vonage, Sinch, Telnyx | **SKILL** (`twilio-developer-kit:*`) + **DIRECT** (API) | OTP/verify, notifications/alerts, IVR, support voice, WhatsApp | Twilio dev-kit skills (send, verify, voice, studio); Account SID + API key; A2P/10DLC registration gates traffic | `%` usage |
| **Founder inbox / outreach** | **Gmail** (Google Workspace) | Outlook, Superhuman | **LIVE** (Gmail MCP, **drafts-only**) | Draft outreach + replies; thread search/triage | Gmail MCP live; **never auto-sends** (guardrails); `lead-response` skill routes drafts | `$` (Workspace) |
| **Docs / knowledge / files** | **Google Drive + Docs** | Notion, Confluence, Coda | **LIVE** (Google Drive MCP) | Source docs, deliverables, SOPs, KB, data room | Drive MCP live; `search_files`, `create_file`; `sop-writer` skill authors | `$` (Workspace) |
| **Design / brand / creative** | **Canva** | Figma (product design), Adobe Express | **LIVE** (Canva MCP) + **SKILL** (`canvas-design`, `design:*`) | Logos, social assets, decks, brand templates, export | Canva MCP live; `generate-design`, `export-design`; `brand-design` skill drives it | `$0`→`$` |
| **Diagramming / org charts / ERD** | **Lucid** | Miro, Excalidraw, Mermaid (in-repo) | **LIVE** (Lucid MCP) | Architecture, ERDs, org charts, RACI, flows | Lucid MCP live; `lucid_create_erd`, `lucid_create_org_chart` | `$0`→`$` |
| **Dashboards / lightweight BI** | **`data:*` + `dataviz` + `xlsx` skills** over Supabase/Stripe | Metabase, Looker Studio | **SKILL** | KPI trees, `metrics-dashboard`, ad-hoc analysis | Skills in-session read live tables; no separate tool needed at launch | `$0` |
| **Web analytics** | **GA4** | Plausible, Fathom, Vercel Web Analytics | **DIRECT** (instrument in-app) / **REGISTRY** (query via BigQuery export or Supermetrics) | Traffic, acquisition sources, top-of-funnel | `gtag`/GA4 property in the app; consent-gated; query via BigQuery export | `$0` |
| **Product analytics / experiments** | **PostHog** | Amplitude, Mixpanel, Heap | **REGISTRY** (PostHog, Amplitude) | Events, funnels, retention, feature flags, A/B tests, session replay | Connect PostHog via registry; SDK in app; `landing-funnel`/`paid-ads` skills consume | `$0`→`$$` |
| **Error monitoring / observability** | **Sentry** | Datadog, Honeycomb, Bugsnag, Better Stack | **REGISTRY** (Sentry, Datadog) | Exceptions, stack traces, release health, alerting | Connect Sentry via registry; SDK in frontend + edge functions; part of the `engineering-backbone` spine | `$0`→`$` |
| **Accounting / bookkeeping** | **QuickBooks** (US) or **Xero** | NetSuite (scale/ERP), Wave (free), Bench (done-for-you) | **REGISTRY** (QuickBooks, Xero, NetSuite) + **SKILL** (`finance:*`) | Chart of accounts, bookkeeping, AR/AP, P&L, tax prep | Connect via registry once real revenue lands; `finance:*` skills do close/recon/statements | `$$` |
| **Banking / cards / spend** | **Mercury** + **Ramp** | Brex, Relay, traditional business bank | **DIRECT** (Plaid links the data — **REGISTRY**) | Operating account, corporate cards, spend controls, bill pay | Open accounts directly (needs entity + EIN); Plaid connector surfaces balances | `$0` |
| **Cap table / equity** | **Carta** | Pulley, AngelList Stack, spreadsheet (pre-seed) | **REGISTRY** (Carta) | Cap table, SAFEs, option pool, 409A, grants | Connect when raising or issuing equity; before then a spreadsheet is fine | `$$` |
| **HR / payroll / benefits** | **Gusto** (US) / **Deel** (global) | Rippling, Justworks, Remote.com, ADP | **REGISTRY** (Gusto, Deel, Remote.com) | Payroll, contractor pay, benefits, onboarding, compliance | Connect at first W2 hire or first contractor at scale; `operations:*` skills for scorecards/onboarding | `$$` |
| **Project / work management** | **Airtable** (ops) → **Linear** (engineering) | Notion, Asana, ClickUp, Jira, Todoist | **LIVE** (Airtable) / **REGISTRY** (Linear, Notion, Asana, ClickUp) | Roadmap, sprints, issues, ops trackers | Airtable now (already live); add Linear via registry when the eng team grows | `$0`→`$` |
| **E-sign / contracts** | **Docusign** | SignNow, DocuSeal (open-source), Dropbox Sign | **REGISTRY** (Docusign, SignNow, DocuSeal) + **SKILL** (`legal:*`) | NDAs, MSAs, order forms, offer letters, operating agreements | Connect via registry when contracting; `legal:review-contract`/`signature-request` skills draft + route | `$`→`$$` |
| **Support / helpdesk** | **Intercom** | Zendesk, Help Scout, Pylon (B2B), Freshdesk, Zoho Desk | **REGISTRY** (Intercom, Zoho Desk, Pylon, Unthread, Freshservice) + **SKILL** (`customer-support:*`) | Tickets, shared inbox, KB, live chat, AI deflection, CSAT | Gmail + Airtable cover it at launch; connect Intercom at ticket volume; `support-success` skill arms triage | `$`→`$$$` |
| **Data warehouse / BI** | **BigQuery** (warehouse) + **Metabase** (BI) | Snowflake, Redshift; Looker, Omni, Hex | **REGISTRY** (BigQuery, Snowflake, Metabase) + **SKILL** (`data:*`) | Single source of truth; cross-tool + board reporting | Defer until data spans ≥3 systems; then pipe Stripe + Supabase + GA4 + CRM in | `$0`→`$$$` |
| **AI / LLM (operating layer + in-app)** | **Claude (Anthropic)** | OpenAI, Gemini (for embedded product features) | **DIRECT** (runtime) | The layer the whole OS runs on (Claude Code / Cowork); plus in-product AI features | It **is** the runtime — no connector. For app features, call the API from edge functions with server-side keys. Model policy: premium authors + evaluates, cheaper models run (`delegation-protocol`) | `%` usage |

---

## When to swap the default (industry triggers)

The stack above is deliberately industry-agnostic. Swap on the venture's shape, not on novelty:

- **E-commerce / physical goods** → add **Shopify** (storefront + inventory + tax) as the product layer; **Klaviyo** for lifecycle email; keep Stripe underneath or use Shopify Payments. Supabase/Vercel become the custom-surface layer, not the store.
- **Content / media / marketing site** → **WordPress.com** (**OFF** — installed here) or **Webflow / Sanity** (**REGISTRY**) instead of a hand-built frontend when the deliverable is pages, not app logic.
- **Regulated / health (LYV-adjacent, telehealth)** → only **BAA-eligible / HIPAA** tools; compliance sign-off is a **hard gate** (guardrails). Swap generic email/SMS/analytics for HIPAA-eligible configurations; add LegitScript-grade review. Do **not** reuse the generic defaults for PHI.
- **Marketplace / platform (take a cut)** → **Stripe Connect** (not vanilla Stripe) for split payments + payouts + KYC.
- **Enterprise / high-ACV sales** → **Salesforce or HubSpot** (not Airtable) + **Docusign** + a CPQ/deal-desk; SSO/SCIM becomes table stakes.
- **PLG / self-serve SaaS** (the `starters/saas` default path) → the table as written: Supabase + Vercel + Stripe + PostHog + Sentry.
- **Services / agency / high-ticket** → CRM + proposals + e-sign + invoicing lead; product/hosting is minimal (a funnel, not an app).

---

## Grounded here — what's connectable in this environment right now

The named set, with what each is for in the Founder OS. **These need no procurement — they exist in-session.**

| Tool | Type here | What it's for |
|---|---|---|
| **Airtable** | MCP **LIVE** + `sales-ops` / `marketing-ops` / `product-ops` skills | CRM, sales pipeline, ops tables, content calendar, lightweight PM — the system-of-record for everything non-code |
| **Supabase** | MCP **LIVE** | Postgres + Auth + Edge Functions + Storage + **RLS** — the product backbone from the starter |
| **Vercel** | MCP **LIVE** | Deploy, preview URLs, edge CDN, runtime error/log reads |
| **Stripe** | Connector **OFF** (enable in chat) + API in starter | Payments, subscriptions, webhooks; revenue/MRR reads once the connector is on |
| **Canva** | MCP **LIVE** + `canvas-design` / `design:*` skills | Brand identity, social assets, decks, exports — carries the design blind spot |
| **Google Drive** | MCP **LIVE** | Source docs, deliverables, SOPs, KB, data room |
| **Gmail** | MCP **LIVE** (drafts-only) | Draft outreach + replies; inbox triage. **Never auto-sends** (guardrails) |
| **Lucid** | MCP **LIVE** | Architecture diagrams, ERDs, org charts, RACI, process flows |
| **Twilio** | `twilio-developer-kit:*` skills + API | SMS, voice, WhatsApp, OTP/verify, IVR, studio flows, contact-center routing |
| **SendGrid** | `twilio-sendgrid-*` skills + API | Transactional + marketing email, deliverability, suppressions, webhooks |
| **Skill packs** | in-session | `finance`, `marketing`, `data`, `design`, `engineering`, `operations`, `legal`, `product-management`, `customer-support` — the operating know-how each domain runs on; plus `docx` / `xlsx` / `pptx` / `pdf` / `dataviz` / `deep-research` |

Also installed-but-off-in-chat and cheap to enable: **Mailchimp** (marketing email), **WordPress.com** (CMS/marketing site).

---

## Not here — connect these, and flag for Tony

Every function below has **no live MCP in this session**. Each is reachable via `SearchMcpRegistry` (verified present in the registry unless noted) or a direct integration. These are the **NEEDS TONY** connect items — none blocks a 72h launch; they arm as the business grows.

| Function | Connect (verified in registry unless noted) | How | Trigger to connect |
|---|---|---|---|
| Accounting | QuickBooks, Xero, NetSuite | `SearchMcpRegistry` → OAuth | First real revenue / first invoice / tax |
| Product analytics | PostHog, Amplitude | `SearchMcpRegistry` → OAuth + SDK in app | Need funnels/retention beyond `data:*` skills |
| Error monitoring | Sentry, Datadog | `SearchMcpRegistry` → OAuth + SDK | At deploy — cheap insurance from day one |
| Support / helpdesk | Intercom, Zoho Desk, Pylon, Unthread, Freshservice | `SearchMcpRegistry` → OAuth | Ticket volume outgrows Gmail + Airtable |
| Dedicated CRM | HubSpot, Attio, Salesforce, Salesflare | `SearchMcpRegistry` → OAuth | Multi-rep sales / sequences / need to migrate off Airtable |
| Payroll / HR | Gusto, Deel, Remote.com | `SearchMcpRegistry` → OAuth | First W2 hire / scaled contractors |
| E-sign | Docusign, SignNow, DocuSeal | `SearchMcpRegistry` → OAuth | First contract to countersign |
| Cap table | Carta | `SearchMcpRegistry` → OAuth | Raising a round / issuing equity |
| Warehouse / BI | BigQuery, Snowflake, Metabase | `SearchMcpRegistry` → OAuth | Data spans ≥3 systems / board reporting |
| Source control / CI | **GitHub** | **Direct** — native `git`/`gh` in Claude Code + Actions | At `venture-bootstrap` (immediately) |
| Web analytics | **GA4** | **Direct** — instrument in-app; query via BigQuery export / Supermetrics | At launch |
| Banking / cards | **Mercury**, **Ramp** | **Direct** — open accounts (needs entity + EIN); Plaid links data | Post entity formation |

---

## (a) Minimum viable stack — launch in 72h

The **fewest tools that cover every function**, chosen for maximum overlap. This is the spine the `72H_LAUNCH_RUNBOOK` already assumes. Eight services + the Claude runtime.

| # | Tool | Status here | Functions it covers |
|---|---|---|---|
| 1 | **Supabase** | LIVE | Database, auth, file storage, serverless backend, basic event logging |
| 2 | **Vercel** | LIVE | Hosting, deploy, CDN, preview URLs, web-analytics-lite (Vercel Analytics) |
| 3 | **GitHub** | DIRECT | Source control, CI, basic issue tracking |
| 4 | **Stripe** | OFF→enable / API | Payments, subscriptions, revenue reporting |
| 5 | **Airtable** | LIVE | CRM, sales pipeline, ops tables, lightweight PM, support intake, content calendar |
| 6 | **Google Workspace** (Gmail + Drive + Docs) | LIVE | Founder email/outreach (drafts), docs, knowledge base, data room |
| 7 | **SendGrid** | SKILL / API | Transactional email (receipts, resets, OTP) |
| 8 | **Canva** | LIVE | Brand, logo, social + funnel creative, decks |
| — | **Claude** (Claude Code / Cowork) | Runtime | The AI operating layer that runs every skill and drives the seven MCPs above |

**Deliberately deferred at launch** (add later, not needed to take money): dedicated accounting (use `finance:*` + `xlsx` against Stripe), dedicated support desk (Gmail + Airtable), payroll (none until first hire), product analytics (Vercel Analytics + Supabase logs; add PostHog free tier if funnels are needed), data warehouse, e-sign, cap table.
**One cheap exception worth adding in week 1:** **Sentry** free tier — error monitoring is insurance the `engineering-backbone` spine expects, and it costs nothing to start.
**Cost to launch:** effectively **$0–$50/mo** — every tool above has a free or near-free entry tier; Stripe is pure per-transaction; Workspace is the only fixed seat cost.
**SMS note:** add **Twilio** to the MVP only if the product needs OTP/verify or SMS notifications on day one; otherwise it's a scale-up add.

---

## (b) Scale-up stack — what to add as it grows

Add on a **trigger**, not a hunch. Each row is a "when X, add/swap Y."

| Trigger | Add / swap | Replaces / augments |
|---|---|---|
| Deploy to prod (day one) | **Sentry** (errors), **PostHog** (product funnels), **GA4** (acquisition) | The `data:*` skills' ad-hoc analysis |
| First real revenue / invoicing / tax | **QuickBooks / Xero** + accountant; **Mercury + Ramp** banking | Spreadsheet bookkeeping |
| Support > ~100 conversations/wk or SLAs | **Intercom / Zendesk** | Gmail + Airtable support intake |
| Marketing list > ~2k or lifecycle needed | **Klaviyo** (e-com) / **Customer.io** (product) | Mailchimp basics |
| Eng team > 2 / roadmap complexity | **Linear** | Airtable eng tracking |
| First W2 hire | **Gusto** (US) / **Deel** (global) | Manual contractor pay |
| Contracts at volume | **Docusign** + `legal-pack` | Ad-hoc PDFs |
| Multi-rep sales / sequences | **HubSpot / Attio / Salesforce** | Airtable CRM (migrate) |
| Data across ≥3 systems / board reporting | **BigQuery / Snowflake** + **Metabase / Looker** | Per-tool dashboards |
| Raising a round | **Carta** + Drive data room | Cap-table spreadsheet |
| Team > ~10 / SOC2 / enterprise buyers | **SSO/IdP** (Google Workspace or Okta) + **secrets manager** (Doppler / Vault) + **Datadog** + formal RBAC | Per-tool logins; env-var secrets |

---

## (c) Security note

Cross-references the full spec in **`docs/engineering-backbone.md`** (environments, RBAC/RLS, supply chain, observability, DR, compliance-by-design), the hard rules in **`founder-profile/guardrails.md`**, and the live-connector design in **`docs/mcp-proprietary-layer.md`**. The principles that govern *this* stack:

- **Least privilege, always.** Scoped, revocable API keys/tokens **per tool and per environment**; no god-keys. Read-only scopes where the OS only needs to read (Stripe revenue, Supabase tables) — the `mcp-proprietary-layer` is explicitly **read-first, drafts-not-sends, every action audited**. Separate **test vs live** Stripe keys and **staging vs prod** Supabase projects; a lower environment never holds prod secrets.
- **SSO + MFA everywhere it's offered.** Centralize identity on **Google Workspace** as the identity provider now; enforce **SSO + SCIM** (Workspace or Okta) at team scale. Unique per-teammate logins — **no shared accounts**. Use each tool's own role model to grant the minimum (e.g., Airtable creator vs. commenter; Stripe read-only analyst).
- **Secrets never materialize in the open.** Env vars / a vault only — never in source, commits, logs, or chat (`guardrails.md` + starter §4). Respect the **`VITE_`/public vs. service-role/private** boundary; the service-role key never reaches client code. The pre-commit **secret-guard** (`scripts/check-secrets.sh`) plus secret scanning in CI block leaks. Rotate on any suspected exposure and on every offboarding.
- **MCP connectors get least scope, too.** Connect each MCP with the narrowest scope that works; **Gmail is drafts-only** (guardrails — nothing auto-sends); prefer read surfaces before write surfaces; production/irreversible actions require explicit approval + a stated rollback path.
- **Access inventory + audit.** Keep an owner-and-access registry (who holds which key, at what scope, for which env); audit-log admin actions; keep **tested backups/restore (DR)** per the engineering backbone.
- **Data governance & regulated categories.** Classify PII and minimize it; sign DPAs with every processor. In regulated categories (health/telehealth), use **only BAA-eligible / HIPAA-eligible** configurations and treat compliance sign-off as a **hard gate**, not a formality (guardrails).

---

## How this evolves

When a venture needs a function not yet on its stack: (1) run **`SearchMcpRegistry`** for it; (2) prefer a **live MCP**, then a **skill + API**, then a **direct integration**; (3) connect at **least privilege**; (4) add the row to the active venture's context and, if it's a new default, here. The default stack is a starting point per venture — `new-venture` records the actual chosen stack in `ventures/<slug>/venture-context.md`.
