# Founder OS — Complete Business Launch & Operate Architecture
### The "Everything Map": the world-class backbone that guarantees nothing gets missed

**Purpose.** One system to **concept → build → launch → go-to-market → operate** a multimillion-dollar-capable business, engineered as a structured, secure backbone — the opposite of a vibe-coding nightmare where security, roles, structure, and whole functions get missed. It **fills the founder's blind spots** (marketing, social, content, design) by carrying them as first-class, opinionated capabilities, and it outputs **Fable-ready build specs** so execution is high-caliber, not guesswork.

**Honest 72h line (unchanged):** in 72h this delivers a validated concept + a launched, world-class-engineered, payment-ready product + a live GTM engine + the operating backbone stood up. It does not manufacture $1M in cash, nor compress legal-entity formation, regulated-category compliance, or genuine demand — those are human-gated. $1M is the ceiling the architecture is built to reach.

---

## The 15-domain coverage map (the spine — nothing outside this)

Legend — **Asset:** the OS skill/template/doc that carries it · **Tool/MCP:** recommended stack + whether an MCP/skill is available in this environment · **Status:** ✅ built · 🔨 building this session · 📋 planned · **BS:** fills a founder blind spot.

| # | Domain | Must cover | OS asset | Tool / MCP (available here) | Status |
|---|---|---|---|---|---|
| 1 | **Strategy & Concept** | idea stress-test, market/competitor, sizing, offer+economics, naming, go/no-go | `stress-test` `market-scan` `offer-architect` `opportunity-size` `naming-brand` `go-no-go` | web research | ✅ |
| 2 | **Product & Build** | spec → deployed, tested software | `product-spec` `venture-bootstrap` `ship` + `starters/saas` + dev subagents | Supabase, Vercel MCP | ✅ |
| 3 | **Engineering & Infra backbone** | stack, environments, config, migrations, performance | `starters/saas` + `docs/engineering-backbone.md` | Supabase, Vercel, GitHub | ✅ |
| 4 | **Security, Roles & Governance** | authn/authz, **RBAC/roles**, RLS, secrets, audit logs, dependency/secret scanning, rate-limit, backups/DR, data/PII governance, compliance-by-design | `docs/engineering-backbone.md` (security spec) + starter guards | Supabase RLS, secret-guard, Sentry | ✅ |
| 5 | **Brand & Design** `BS` | visual identity, logo, design tokens, component/design system, asset production | `brand-design` skill | **Canva MCP**, `canvas-design`, `dataviz`, `design:*` skills, Lucid | ✅ |
| 6 | **Marketing / GTM** `BS` | GTM plan, channel mix, paid, lifecycle/email, partnerships, PR, budget+ROI | `gtm-marketing` skill (orchestrates the Launch skills) | `marketing:*` skills, SendGrid/Twilio, GA4 | ✅ |
| 7 | **Content & Social** `BS` | content engine (have), per-platform social strategy, calendar, templates, community, repurposing | `content-engine` `content-cadence` + `social-media` skill | `marketing:content-creation`, Canva, Gmail | ✅ |
| 8 | **Sales & CRM** | CRM setup, pipeline, lead scoring, sales process, scripts, proposals, contracts, deal desk | `sales-crm` skill + `lead-response` | **Airtable MCP** + `airtable:sales-ops`, Gmail | ✅ |
| 9 | **Finance & Accounting** | financial model, chart of accounts, bookkeeping, invoicing/AR-AP, payroll, taxes, FP&A, board reporting, cash/runway, banking/cards | `finance-ops` skill | `finance:*` skills, Stripe, Airtable, xlsx | ✅ |
| 10 | **Legal, Entity & Compliance** | entity choice (LLC/C-corp/S-corp) by goal + operating agreement/bylaws + cap table, the contract set as review-flagged templates (ToS/privacy/DPA/NDA/MSA/SOW/contractor/employment/referral), IP assignment + trademark path (flag, never clear), compliance regime by industry (GDPR/CCPA · HIPAA · LegitScript · licensure · SOC2), templatable-vs-lawyer split | `legal-pack` skill (composes `setup-checklists` + the `legal:*` pack; cross-refs `docs/engineering-backbone.md §9`) | `legal:*` skills, Google Drive, Docusign/SignNow (registry) | ✅ |
| 11 | **Operations, Org & Roles** | org design by stage, **RACI/roles**, **roles/permissions matrix** (access governance), hiring (scorecards/"Who"), on/offboarding + access provision/deprovision, SOPs, PM, vendor mgmt, weekly rhythm | `org-roles` skill (composes `sop-writer` + `weekly-ops-review` + `meeting-synth`) | `operations:*` skills, **Airtable** (registers), **Lucid** (org chart/RACI) | ✅ |
| 12 | **Customer Support & Success** | helpdesk, KB, ticket triage/escalation, onboarding, retention/CS | `support-success` skill | `customer-support:*` skills, Twilio, Gmail, Airtable | ✅ |
| 13 | **Data & Analytics** | analytics stack, instrumentation/event taxonomy, KPI tree, dashboards + cadence, warehouse, experiment tracking, analytics governance | `metrics-dashboard` + `analytics-stack` skill | GA4, PostHog/Amplitude, BigQuery/Snowflake, Metabase, `data:*` + `dataviz` skills, Supabase | ✅ |
| 14 | **Tool & MCP Stack** | the concrete function→tool→MCP map for the whole business | `docs/tool-mcp-stack.md` | `SearchMcpRegistry` + all above | ✅ |
| 15 | **Fable-Ready Build Spec** | comprehensive PR-by-PR build brief (scope, data model, acceptance criteria, tests, security, gates) for the whole venture | `fable-brief` skill (capstone) | consumes 1–14 | ✅ |

Cross-cutting: every asset loads `founder-profile/PROFILE.md` + the active `ventures/<slug>/venture-context.md`, honors the guardrails, and ships lean (SKILL.md + method + evals).

---

## The engineering & security backbone (the "no vibe-coding nightmare" spine)

Standard every venture inherits (detailed in `docs/engineering-backbone.md`):
- **Environments:** local → staging → prod, isolated config; no prod secrets in lower envs.
- **Identity & roles (RBAC):** typed roles (owner/admin/staff/user), server-enforced; **RLS on by default**; least-privilege everywhere; admin actions role-checked server-side + audit-logged.
- **Secrets:** env/vault only, never in code/commits; pre-commit secret-guard; rotation policy.
- **Supply chain:** dependency + secret scanning in CI; pinned/locked deps.
- **Runtime safety:** input validation, rate-limiting on public endpoints, CORS locked to origins, webhook signature verification, idempotency.
- **Observability:** structured logs, error tracking (Sentry), product analytics (PostHog, consent-gated), uptime/health checks.
- **Data:** migrations versioned, PII classified + minimized, encryption at rest/in transit, **backups + tested restore (DR)**.
- **Compliance-by-design:** the applicable regime (GDPR/CCPA, HIPAA, LegitScript, SOC2-readiness) mapped to concrete controls before launch, not after.
- **Definition of done:** shipped + merged + verified in prod, with tests + a rollback path.

## Blind-spot coverage (carried by the system, not the founder)

Tony is candid about being weak on **marketing, social, content, design**. The OS treats these as *solved-by-default*, not left to improvise:
- **Design:** a brand-design skill produces identity, tokens, and a component system, and drives asset production through the **Canva MCP** + `canvas-design`/`dataviz` — so every surface looks world-class without design being a bottleneck.
- **Marketing/GTM:** a gtm-marketing skill orchestrates channels, paid, lifecycle, partnerships, PR, and budget/ROI — an opinionated plan, not a blank page.
- **Content & Social:** the content engine + a social-media skill supply per-platform strategy, calendars, and paste-ready templates, on a repeatable cadence.
Each ships with strong defaults so the founder approves rather than authors.

## The tool & MCP stack (grounded in what's connectable)

Detailed in `docs/tool-mcp-stack.md`. Anchor mapping: **Product/infra** → Supabase + Vercel (MCPs live). **Payments** → Stripe. **CRM/sales + ops tables** → Airtable (MCP + sales-ops/product-ops/marketing-ops skills). **Comms** → Twilio (SMS/voice) + SendGrid (email). **Design** → Canva (MCP). **Docs/knowledge** → Google Drive/Gmail (MCPs). **Diagrams/orgcharts** → Lucid (MCP). **Analytics** → GA4 + PostHog. **Finance** → Stripe + accounting connector + `finance:*` skills. Anything missing is found via `SearchMcpRegistry` and surfaced to Tony to connect.

## 72-hour sequencing across all domains (extends `72H_LAUNCH_RUNBOOK.md`)

- **0–6h Concept:** new-venture → stress-test → market-scan → offer-architect → opportunity-size → naming-brand → go/no-go. In parallel: legal/entity + compliance path identified (domain 10), tool/MCP stack selected (14).
- **6–48h Build:** venture-bootstrap from `starters/saas` → product-spec → `/ship`, with the security/RBAC backbone (3,4) baked in from the starter. Finance (9) + CRM (8) + analytics (13) stood up on their tools/MCPs in parallel.
- **48–66h Launch/GTM:** brand-design (5) → positioning → copy → landing-funnel → content+social (6,7) → launch-plan. Support (12) armed.
- **66–72h Operate:** metrics-dashboard live, lead-response + CRM armed, weekly-ops rhythm set, finance recording live.
- **Human gates (one list):** go/no-go commit · spend · deploy · payments go-live · legal entity · compliance sign-off · any external send · hiring.

## Fable-ready output

The capstone `fable-brief` skill consumes domains 1–14 and emits the comprehensive build spec Fable executes: workstreams, PR-by-PR plan, data model + RLS, acceptance criteria (Given/When/Then), test plan, security checklist, secrets list, and the human gates — the same caliber as the prior EE Fable master briefs, generated for any venture.

## Build program (status)

- **Done (v0.5):** domains 1, 2; the engineering starter; the /ship pipeline; the 72h runbook; profile/contexts/packaging.
- **Built (wave 1):** domains 3–9, 12, 14 — finance-ops, sales-crm, gtm-marketing, social-media, brand-design, support-success, engineering-backbone, tool-mcp-stack.
- **Built (wave 2):** domain 15 — the `fable-brief` capstone (consumes 1–14 → one phased, PR-by-PR master build brief; per-PR data model + RLS, verify_jwt, Given/When/Then AC, tests, security checklist, secrets names-only, dependencies, human gates; workstream map + sequencing + coverage matrix that proves nothing is missed).
- **Built (wave 2):** domain 13 — `analytics-stack` (the measurement backbone: stack + connect status, the event taxonomy mapped to the funnel + offer ladder, the instrumented KPI tree composing `metrics-dashboard`, the experiment/A-B framework, dashboards + cadence feeding `weekly-ops-review`, and analytics governance cross-referencing the engineering backbone — `fable-brief` workstream C).
- **Built (wave 2):** domain 11 — `org-roles` (the operations/org/roles backbone: org design by stage with lean, trigger-gated next-3-hires; a RACI over the core recurring processes with one Accountable per row; a **least-privilege roles/permissions matrix across the whole tool stack** composing engineering-backbone §10 + §2; the hiring kit — scorecard/"Who"/JD/structured interview loop/references, drafts-only; on/offboarding with access **provision/deprovision**; the SOP library composing `sop-writer`; PM + vendor management; and the weekly rhythm feeding `weekly-ops-review` — `fable-brief` workstream I).
- **Built (wave 2):** domain 10 — `legal-pack` (the legal, entity & compliance foundation: entity choice by goal — LLC/C-corp/S-corp — + operating agreement/bylaws + cap-table basics; the core contract set as review-flagged draft templates — ToS/privacy/DPA/NDA/MSA/SOW/contractor/employment/referral; IP assignment + trademark path, flag-never-clear; the compliance regime by industry — GDPR/CCPA · HIPAA · LegitScript · licensure · SOC2 — pulled from engineering-backbone §9; and the templatable-vs-lawyer split. Composes `setup-checklists` + the `legal:*` pack. **NOT legal advice — every judgment point flags attorney review; drafts only, never files or signs.** Consumed by `fable-brief` as workstream H).
- **v1.0 — all 15 domains built** and put through an adversarial eval + a cross-module consistency/QA pass (catalog counts reconciled to 34; `fable-brief` completeness hole for domain 7 closed; starter made chart-token-ready; PCI-DSS regime added; legal contract library de-SaaS'd). **Next:** run it end-to-end on a real venture (human-gated accounts/entity/compliance) + install as a plugin in Claude Code.
