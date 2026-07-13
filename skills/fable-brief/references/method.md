# /fable-brief — Full method, the PR template & a worked master brief

One level deep; does not fan out further. Lenses: vertical-slice delivery (`/ship`), spec-driven acceptance
(`/product-spec`), the security backbone as a per-PR contract (`docs/engineering-backbone.md`), and Tony's
economics-before-build + finished-asset standards. This skill *orchestrates and resolves* — it turns finished
upstream decisions into an ordered, self-contained build plan; the code is written by Fable / build agents and
checked by the dev subagents, so premium-model time stays on authoring + evaluation.

## Principle — the anti-vibe-coding contract

A vibe-coded build skips the invisible work: RLS, roles, secrets discipline, whole back-office functions. This
brief makes that work *un-skippable* by making it explicit and traceable. Two mechanical guarantees:

1. **Every upstream decision is carried, resolved.** Fable never chooses a stack, a price, a role model, a token,
   a regime, or a tool — it reads the choice from the brief and executes. Anything that would force a choice is a
   defect in the brief, sent back upstream.
2. **Every input lands somewhere, provably.** A completeness pass inventories all 14 domains; the coverage matrix
   maps every `/product-spec` acceptance criterion → a PR, every backbone control → a PR/workstream/gate, and every
   domain output → a workstream. A row with no mapping is a hole, and the brief is not "done" with a hole in it.

---

## The completeness protocol (run first — it is the "nothing gets missed" mechanism)

Before authoring a single PR, inventory the inputs. Each gets exactly one disposition:

| Disposition | Meaning | What the brief does |
|---|---|---|
| **CONSUMED** | The output exists and feeds ≥1 workstream/PR | Cite it (name + date) and carry its decisions |
| **N/A (reason)** | The venture genuinely doesn't need this domain | State the reason (e.g. "no payroll — solo, no contractors") |
| **PREREQUISITE (run X)** | The venture needs it but the output is missing | Name the blocking prerequisite; do **not** fabricate the decision |
| **STOP** | A *build-contract* input is missing (`/product-spec` or economics) | Halt; route; emit no brief |

The two STOP inputs are non-negotiable (the overbuild guard). The rest degrade to N/A or PREREQUISITE — the brief
still ships, but it names the gap instead of hiding it. This inventory becomes the third sub-table of the coverage
matrix, so the disposition of all 14 domains is visible on the face of the deliverable.

---

## The workstream taxonomy (the full stand-up)

Nine workstreams. Not every venture uses all nine, but every one is *considered* — an unused workstream is marked
N/A, never forgotten. This is the structural answer to "whole functions get missed."

| WS | Workstream | Source domain output(s) | Typical type | Executor |
|---|---|---|---|---|
| **A** | **Product / App** | `/product-spec`, `/brand-design` tokens, `starters/saas` | code PRs | Fable + build agents |
| **B** | **Security & Governance backbone** | `docs/engineering-backbone.md` §1–§10 | code PRs + config | Fable (code) + human (access) |
| **C** | **Data & Analytics** | `analytics-stack`, `metrics-dashboard`, `docs/tool-mcp-stack.md` | instrumentation + config | Fable (SDK) + Cowork+MCP |
| **D** | **CRM & Sales** | `sales-crm` | tool-config (Airtable + MCPs) | Cowork + Airtable MCP |
| **E** | **Finance ops** | `finance-ops` | tool-config (Stripe/ledger) + code | Cowork+MCP + Fable (billing) |
| **F** | **GTM / Marketing / Content & Social surfaces** | `gtm-marketing`, `/landing-funnel`, `/seo-geo`, **`content-engine`, `content-cadence`, `social-media`** (domain 7) | code (pages/tracking) + config | Fable + Cowork+MCP |
| **G** | **Support & Success** | `support-success` | tool-config (helpdesk/KB) | Cowork + MCP |
| **H** | **Legal & Compliance** | `legal-pack`, backbone §9 | docs + config + gates | human-gated + Cowork |
| **I** | **Org & Access** | `org-roles`, backbone §10 | in-app roles (code) + access register | Fable (roles) + human (grants) |

Each workstream row in the brief carries: **goal · source output · type · executor · definition-of-done** (shipped +
verified + tests). WS-A and WS-B are the critical path; C–I run in parallel once foundation lands, on their own tools.

---

## The phase model (sequencing)

Mirror the `72H_LAUNCH_RUNBOOK` and `/ship` ordering. Phases gate on dependency, then on path-to-first-dollar.

- **Phase 0 — Foundation** *(single-threaded; unblocks everything)*: clone/brand `starters/saas`; apply `/brand-design`
  tokens; `profiles` + typed roles + RLS; auth; CORS lock; secret-guard + branch protection; Sentry. **DoD:** app boots,
  auth works, CI green, RLS policy-audit clean.
- **Phase 1 — Core value** *(parallelizable)*: the product-spec's core object slices (each DB+RLS → endpoint → UI →
  test); the analytics event taxonomy (WS-C); the CRM base (WS-D). **DoD:** the core value action works end-to-end in a
  preview deploy, instrumented.
- **Phase 2 — Payment & launch surfaces** *(gated)*: Stripe billing + webhook + entitlement (WS-A/E); landing/funnel +
  tracking (WS-F); **deploy gate → test-mode payments → payments go-live gate**. **DoD:** a real test-mode transaction
  grants the entitlement on the live URL.
- **Phase 3 — Operate** *(parallel, post-launch)*: finance close wiring (WS-E); support stack + KB (WS-G); legal surfaces
  + compliance sign-off (WS-H); access register + on/offboarding (WS-I); board/KPI reporting. **DoD:** each function is
  live, verified, and on its tool.

Draw the dependency graph explicitly (Phase 0 → everything; payment slice → core object; go-live → deploy + compliance
sign-off), name what runs in parallel, and mark the **critical path to first dollar**.

---

## The canonical PR template (annotated)

Every PR — product code *and* config — is authored to this. No field is "TBD"; a field that can't be filled means an
upstream decision is missing (go get it).

```
### PR-N · <imperative title>   [Phase X · WS-<letter>]

**Problem.** The job this PR does and why it matters now (one or two sentences). The "why", not just the "what".

**Scope.** In: the exact capability shipped. Out: what is deliberately deferred (the overbuild guard, written down).

**Data model + RLS policies.**
  table: <name> (<field> <type> <null?> <default>, … , FK → <parent>)
  ownership: <owner column> = auth.uid()
  RLS: SELECT/INSERT/UPDATE/DELETE policy set (INSERT `with check`; UPDATE `using` + `with check`);
       system-managed tables → SELECT-own only, write-policies omitted + WHY (service-role writes).
  migration: <timestamp>_<slug>.sql (append-only, forward-only); regenerate types after.
  (Config-PRs: replace with the tool's schema — e.g. Airtable tables/fields/links, or "none".)

**Endpoints / edge functions.**
  <method> <name> — auth: <JWT? role?> — verify_jwt: <true|false>  (if false: self-auth = signature/hook-secret/state)
  input schema (zod) · output shape · error shapes (status + body).
  (Config-PRs: replace with the tool actions/automations wired.)

**Acceptance criteria (Given/When/Then).** Each independently testable; ban vague verbs.
  - Given <precondition>, When <action>, Then <observable result>.

**Test plan (unit / e2e).** Each AC → a test at the right level.
  | AC | Level | Assertion |

**Security checklist (the backbone controls that apply HERE).** Tick the ones this PR must satisfy, tagged
  [STARTER] inherited / [CONFIG] turn-on / [VENTURE] build: RLS on + policy-audit clean · verify_jwt explicit ·
  input validated at boundary · CORS locked · rate-limit (public) · webhook signature+idempotent · no secret in
  VITE_* · service-role server-only · PII classified/minimized · no PII in logs/analytics · audit-log privileged
  action · error tracking.

**Secrets needed (names only).** e.g. `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET` — set via `supabase secrets` /
  host env. NEVER a value. Public `VITE_*` noted as public.

**Dependencies.** PR-#, PR-# (must land first).

**Human gate (if any).** deploy · payments go-live · prod migration · spend · compliance sign-off — with the
  rollback path — or "none (reversible)".
```

Config-PRs (WS-C–I) are real PRs: "wire GA4 + PostHog + Sentry with a consent gate and the documented event
taxonomy" is as skippable as code if it isn't specified with acceptance criteria and a verification.

---

## Worked master brief — Executive Edge OS at greenfield (abridged deliverable)

**Input:** stand up EE from the starter today (health-tech SaaS, solely owned, US, live-money target). `/product-spec`
finished (closed-loop core: **assign protocol → score execution → detect drift → adjust**, + B2C subscription gate).
Economics closed (`/offer-architect`: ~3-mo CAC payback on the $99/mo, cohort margin lower for manual delivery). Tokens
from `/brand-design` (dark navy + gold + clinical teal; Inter + JetBrains Mono). Regime: **GDPR/CCPA + health-claims
review**; PHI kept out of the generic stack (context: refer-out model, no "physician review" language).

### 0. Preamble (how Fable executes)
Inherit `starters/saas/CLAUDE.md` + `docs/engineering-backbone.md`. Done = shipped + merged + verified in prod. Gates
never autonomous. Secrets in env only. Drafts only. Inputs consumed: product-spec (Jul 13), offer-architect economics,
brand-design tokens, engineering-backbone v1, tool-mcp-stack v0.1, sales-crm + finance-ops + support-success outputs,
gtm-marketing + the content/social layer (content-engine/content-cadence/social-media — EE's 90-day B2B LinkedIn plan);
analytics-stack / legal-pack / org-roles = **PREREQUISITE where their config-PRs need them** (noted inline).

### 1. Workstream map (abridged)
| WS | Goal | Source | Type | Executor | DoD |
|---|---|---|---|---|---|
| A Product | closed-loop scoring + subscription gate | product-spec, tokens, starter | code | Fable | core action live + verified + tests |
| B Security | typed roles, RLS, CORS, rate-limit, audit log, Sentry | backbone §2–§7 | code+config | Fable + human | minimum bar green; policy-audit clean |
| C Analytics | consent-gated GA4/PostHog/Sentry + KPI events (WAPA north-star) | analytics-stack*, metrics-dashboard | instrument | Fable + Cowork | events fire post-consent; no PII |
| D CRM & Sales | Airtable Companies/Contacts/Deals/Activities + weighted forecast | sales-crm | tool-config | Cowork + Airtable MCP | base live; B2B pipeline forecasts $ |
| E Finance | Stripe billing + deferred-rev on cohorts + close wiring | finance-ops | config+code | Cowork+MCP + Fable | test-mode charge → entitlement; COA mapped |
| F GTM / Content & Social | landing/funnel + UTM/GA4 tracking + lifecycle drafts + LinkedIn social surfaces/calendar | gtm-marketing, landing-funnel, content-engine, content-cadence, social-media | code+config | Fable + Cowork | funnel live + tracked; lifecycle sequences + 2-wk social calendar drafted |
| G Support | Intercom (B2C) + shared inbox (B2B) + KB + S1–S4 SLAs | support-success | tool-config | Cowork | triage live; clinical → hard-escalate |
| H Legal/Compliance | ToS/privacy/DPA + GDPR/CCPA controls + health-claims review | legal-pack*, backbone §9 | docs+gate | human-gated | privacy live; DPAs signed; claims reviewed |
| I Org & Access | in-app roles (owner/admin/staff/user) + access register + MFA | org-roles*, backbone §10 | code+register | Fable + human | roles enforced server-side; register current |

\* analytics-stack / legal-pack / org-roles all exist in the library; the `*` marks that their output had **not yet
been run for *this* venture** at brief time, so the config-PR is marked PREREQUISITE (run the skill) and the backbone
standard (§7/§9/§10) is used as the interim contract until it is. The disposition is per-venture, never "skill missing".

### 2. Sequencing (abridged)
Phase 0 (PR-1..PR-4, single-threaded) → Phase 1 (PR-5..PR-8 ∥, + WS-C/D in parallel) → Phase 2 (PR-9..PR-11, gated) →
Phase 3 (WS-E close, WS-G, WS-H, WS-I ∥). **Critical path to first dollar:** PR-1 → PR-2 → PR-5 (core object) → PR-9
(subscription) → deploy gate → test-mode → **payments go-live gate**. Go-live also depends on WS-H compliance sign-off.

### 3. Two fully-authored PRs

```
### PR-2 · Add typed roles + profiles with server-enforced RBAC   [Phase 0 · WS-B]

Problem. The starter ships no roles; EE has owner/admin/staff/user (coaches, ops, clients) and every privileged
action must be enforced server-side, not by a client flag. This is the RBAC control the backbone marks [VENTURE].

Scope. In: `profiles` table + `role` enum; the server-side role-check pattern in one admin edge function; RLS that
lets a user read/write only their own profile and admins manage all. Out: an admin UI (later slice); staff-scoped
data partitions (PR-6).

Data model + RLS policies.
  table: profiles (id uuid pk → auth.users, role role_enum not null default 'user', display_name text,
                   created_at timestamptz default now())
  enum:  role_enum = ('owner','admin','staff','user')
  ownership: id = auth.uid()
  RLS: SELECT own (id = auth.uid()); UPDATE own non-role columns; INSERT own on signup (with check id = auth.uid());
       admin_manage policy `for all using (exists(select 1 from profiles p where p.id = auth.uid() and p.role in
       ('owner','admin')))`. role column is NOT client-updatable — only the service role changes a role.
  migration: 20260713090000_create_profiles_roles.sql; run `npm run db:types` after.

Endpoints / edge functions.
  POST set-role — auth: JWT + server-side check caller.role ∈ {owner,admin}; verify_jwt: true.
    Resolves user from JWT, reads profiles.role, rejects non-admin 403 (pattern: CLAUDE.md §7). Writes via service role.
    input: {target_user_id uuid, role role_enum} (zod-validated) · output: {ok} · errors: 400 invalid, 403 forbidden.

Acceptance criteria.
  - Given a signed-in user with role 'user', When they POST set-role, Then 403 Forbidden and no row changes.
  - Given a signed-in 'admin', When they set a target to 'staff', Then profiles.role = 'staff' and the change is
    written to audit_log (actor, action, target, ts).
  - Given any client, When it sends role in a profiles UPDATE, Then RLS rejects the role change.

Test plan.
  | AC | Level | Assertion |
  | non-admin blocked | integration | set-role as 'user' → 403; row unchanged |
  | admin sets role + audits | integration | role flips; audit_log row written |
  | client cannot self-elevate | integration | RLS denies UPDATE of role column |

Security checklist. RLS on + policy-audit clean [STARTER]+[CONFIG] · admin endpoint role-checked server-side [VENTURE]
  · service-role server-only [STARTER] · verify_jwt=true explicit [STARTER] · audit-log privileged action [VENTURE]
  · input validated (zod) [VENTURE] · no client authority [VENTURE].

Secrets needed. `SUPABASE_SERVICE_ROLE_KEY` (edge function env, server-only — never VITE_*). No new public vars.

Dependencies. PR-1 (starter cloned + auth).

Human gate. none (reversible; non-prod migration). The prod apply of this migration is gated at the Phase-0 deploy.
```

```
### PR-7 · Instrument consent-gated analytics + the KPI event taxonomy   [Phase 1 · WS-C]  (config-PR)

Problem. metrics-dashboard defines WAPA (Weekly Active Protocol Adherence) as the north-star; nothing measures it
yet, and the backbone requires analytics be consent-gated with no PII. PREREQUISITE: analytics-stack skill not yet
run — use backbone §7 + the metrics-dashboard KPI tree as the interim contract.

Scope. In: PostHog (product events + funnels), GA4 (acquisition), Sentry (errors) wired behind a consent gate; the
documented event taxonomy for the closed-loop actions. Out: a warehouse/BI pipe (defer per tool-mcp-stack until data
spans ≥3 systems); server-side event forwarding.

Data model + RLS policies. none (external tools). Consent state stored on `profiles.analytics_consent bool default
false`; events fire only when true and DNT is not set.

Endpoints / edge functions. none new. Client SDK init is gated on consent; no event carries PII/PHI (no email, no lab
values) — only ids + action names.

Acceptance criteria.
  - Given a user who has not consented, When they use the app, Then no PostHog/GA4 event and no cookie fires.
  - Given a consented user, When they score a protocol, Then a `protocol_scored` event fires with {user_id, score_band}
    and NO PII/PHI properties.
  - Given any error in an edge function, Then Sentry captures it tagged by release+environment, with no secret/PII.

Test plan.
  | AC | Level | Assertion |
  | no consent → no fire | e2e | network shows zero analytics calls pre-consent |
  | event taxonomy | unit | event builder omits PII keys; asserts allowed keys only |
  | Sentry scrub | unit | beforeSend strips PII/secret fields |

Security checklist. Analytics consent-gated [VENTURE] · no PII/PHI in events [VENTURE] · DNT respected [VENTURE] ·
  Sentry live + env/release tagged [VENTURE] · secrets (ingest keys) env-only [CONFIG].

Secrets needed. `VITE_POSTHOG_KEY` (public ingest — VITE_ ok), `VITE_GA4_ID` (public), `VITE_SENTRY_DSN` (public).
  Server Sentry: `SENTRY_DSN` (edge env). No private key is public.

Dependencies. PR-1 (app), PR-2 (profiles for consent column).

Human gate. Connect-these-tools: PostHog + Sentry via SearchMcpRegistry (REGISTRY); GA4 direct. Connecting is a
  founder step — flag it, don't assume the connectors. none irreversible.
```

### 4. Coverage matrix (samples — the proof nothing is dropped)
- **AC → PR:** every product-spec criterion has a row. *"non-owner cannot read another's protocol" → PR-5; "test-mode
  subscribe unlocks the gate" → PR-9; "admin can reassign a coach" → PR-2.*
- **Backbone control → PR/WS/gate:** *RLS-by-default → PR-1/5 [STARTER]; typed roles + server admin check → PR-2
  [VENTURE]; CORS lock → PR-3 [CONFIG]; rate-limit public fns → PR-8 [VENTURE]; consent-gated analytics → PR-7; tested
  restore + RPO/RTO → WS-B DoD; compliance regime (GDPR/CCPA + health) → WS-H + go-live gate.*
- **Domain → workstream:** *product-spec → WS-A; brand-design → PR-1 tokens; finance-ops → WS-E; sales-crm → WS-D;
  gtm-marketing + content-engine/content-cadence/social-media (domain 7) → WS-F; support-success → WS-G; analytics-stack → WS-C (PREREQUISITE); legal-pack → WS-H
  (PREREQUISITE); org-roles → WS-I/PR-2 (PREREQUISITE, backbone §10 interim).*

### 5. Consolidated lists (abridged)
- **Human gates:** (1) Phase-0 deploy [URL + rollback]; (2) payments test→live keys; (3) any prod migration; (4)
  compliance sign-off (health-claims review + DPAs) before go-live; (5) $ on ads/tools; (6) contract/e-sign execution.
- **Secrets register (names only):** `VITE_SUPABASE_URL`·`VITE_SUPABASE_ANON_KEY` (public); `SUPABASE_SERVICE_ROLE_KEY`,
  `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `ANTHROPIC_API_KEY`, `SENTRY_DSN` (server — `supabase secrets`/host);
  `VITE_POSTHOG_KEY`·`VITE_GA4_ID`·`VITE_SENTRY_DSN` (public ingest). No values, ever.
- **Connect-these-tools:** Stripe (OFF→enable), PostHog+Sentry (REGISTRY), GA4 (direct), Airtable (LIVE), Intercom
  (REGISTRY, at ticket volume), QuickBooks (REGISTRY, at first revenue) — each with its trigger from tool-mcp-stack.
- **Compliance regime + controls:** GDPR/CCPA (privacy policy, consent banner, DSAR deletion, DPAs with Supabase/
  Stripe/PostHog/Sentry) + health-claims review on public pages; PHI excluded from the generic stack; no "physician
  review"/"medical team" copy; **hard gate before go-live** (backbone §9 + guardrails).

### 6. Definition of done (whole brief)
Every workstream DoD met · CI green (lint·type·unit·build·e2e) · engineering-backbone **minimum bar** all-checked ·
deploy + payments-go-live + compliance sign-off gates cleared with rollback paths · coverage matrix fully mapped.

---

## Agnosticism note — Ethos hospitality (the brief generalizes)

Point the skill at a non-software venture and the shape holds; the content swaps. For Ethos (multi-concept F&B), WS-A
"Product/App" is thin (a reservations/marketing surface, maybe no custom repo) and WS-B–I become: **WS-D** on a
hospitality CRM/loyalty base (Airtable), **WS-E** finance on covers × check × turns unit economics (not subscriptions,
not deferred SaaS revenue), **WS-C** analytics on booking/turn metrics, **WS-H** on liquor-license + health-code +
labor law (not HIPAA/LegitScript), **WS-I** on POS/reservations tool access (not in-app RBAC). The PR/config-PR
template is unchanged — a "config-PR: stand up Toast POS + Resy + the inventory tables, with acceptance criteria and
the access grants" is authored exactly like a code PR. The completeness protocol still forces every domain to a
disposition; the coverage matrix still proves nothing is dropped. Nothing clinical/SaaS leaks in — the industry is
read from the venture context, never hard-coded.
