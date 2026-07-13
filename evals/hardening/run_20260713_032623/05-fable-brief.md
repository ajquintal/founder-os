---
name: Emberline — Master Build Brief (Fable capstone)
slug: emberline
artifact: 05-fable-brief
stage: concept → validation-sprint (pre-launch)
composed-by: Founder OS capstone — fable-brief (consumes domains 1–14); composes 00-venture-idea · 01-concept · 02-gtm · 03-build-eng · 04-ops
loads-after: founder-profile/PROFILE.md · founder-profile/guardrails.md · undefined/00-venture-idea.md · undefined/01-concept.md · undefined/02-gtm.md · undefined/03-build-eng.md · undefined/04-ops.md
status: v0.1 — PRESSURE-TEST. The domain-15 capstone run against a physical, inventory-heavy, mostly-off-the-shelf DTC+wholesale brand — the opposite of the SaaS shape the skill is built for. This brief SYNTHESIZES the upstream decisions; it re-derives none of them. All numbers illustrative (inherited from 00/01, delivered-margin-corrected). Drafts/spec only; $0 committed; every spend/irreversible/production step gated to Tony. Secrets names-only.
date: 2026-07-13
---

# Emberline — Master Build Brief (the Fable capstone)

> **What this document is.** The single, self-contained, phased, PR-by-PR plan Fable executes to stand up the *whole* Emberline venture — the (thin) product surface **plus** the security/governance posture **plus** the operational tooling (commerce, subscription, lifecycle, wholesale CRM, finance, support, analytics, legal, org) **plus** the physical-operations spine (pour studio, burn-testing, inventory, fulfillment) — with a coverage matrix that proves no business function was dropped. Every decision was made upstream (00–04); this brief *carries* each one, resolved, so **Fable executes and never re-derives**.
>
> **The defining fact of this venture.** Per the 03 build verdict, Emberline is **buy-not-build**: there is **no custom application at launch, and none during the 90-day validation sprint.** The correct "build" is *integration + configuration + an internal ops/compliance base + vendor access-governance + a physical-product compliance regime.* So this brief is dominated by **config-PRs** (stand up a tool, wire it, verify it), not code PRs. The one genuinely-custom code surface — the Delivered-Margin Ledger — is **deferred to post-validation** and appears as the final, conditional PR. A brief that scaffolded a React/Supabase/Stripe app here would be Tony's #1 failure mode (complexity bias / build-the-cathedral) made literal. **The overbuild guard is satisfied precisely by NOT building an app.**

---

## 0. Preamble — how Fable executes this

**Operating contract (inherited, non-negotiable).**
- **Definition of done** for anything coded = *shipped + merged + verified in prod* (`starters/saas/CLAUDE.md §1`). For the ~17 config-PRs there is no repo, so "done" is redefined per the 03 physical variant: **the wired result is verified on the live tool / in one real refunded order — never assumed.** (This redefinition is itself a friction point — see §7 F-DoD.)
- **Gates are never autonomous.** Deploy, going-live on Shopify, any live customer send, any spend, any MOQ/inventory commitment, any contract signature, and any product-safety/recall action are **stopped and escalated to Tony with a stated rollback path** (guardrails).
- **Secrets in env/vault/vendor-connection only, names-only in this brief** (guardrail). No key, token, or value appears here.
- **Drafts only; $0 until proven.** Nothing this brief describes sends, publishes, or spends without Tony's explicit approval. This is the rare venture that **cannot be validated at literal $0** (irreducible ceramic MOQ + product-liability insurance + burn-testing precede any sale) — 01 §5 already escalated that exception; every dollar still requires written sign-off.
- **Claims discipline.** No medical/therapeutic/aromatherapy claims anywhere (guardrail + 00). Scent = notes only. Eco/"clean/natural/refill" claims held for FTC Green Guides substantiation. Mandatory ASTM F2058 candle-safety warning + FPLA labeling on every unit.
- **LYV firewall.** No wholesale prospect, creator, or list is ever sourced from LYV relationships/mailboxes/data.
- **Portfolio.** Sequenced **behind Executive Edge** (the live primary bet). If EE capacity leaves no room, the honest call is defer, not launch (01 §5).

**Inputs consumed (name · date · what this brief carried, resolved).**
| Input | Date | Carried into this brief |
|---|---|---|
| `00-venture-idea` | Jul 13 | model, ICP, SKU line, regulatory surface, banned-word list |
| `01-concept` (stress-test · market-scan · offer-architect · opportunity-size · go-no-go) | Jul 13 | **closed economics** (delivered-margin correction; batched-refill guard), prices, kill gates, the capped validation-sprint scope |
| `02-gtm` (positioning · brand-design · gtm-marketing · content-engine · social-media) | Jul 13 | brand tokens (§2.3), storefront/lifecycle plan, IG-anchor+Pinterest social calendar, wholesale line-sheet, two positioning statements |
| `03-build-eng` (product-spec · venture-bootstrap; engineering-backbone; tool-mcp-stack) | Jul 13 | **the buy-not-build verdict**, the one custom **product-spec** (Delivered-Margin Ledger, AC1–AC6), the physical-goods tool stack, the reframed security posture + physical go-live gate |
| `04-ops` (finance-ops · sales-crm · legal-pack · org-roles · analytics-stack · support-success) | Jul 13 | inventory/COGS/cash-conversion finance, wholesale CRM, the goods/retail contract set + physical-product regime, org + physical-access, commerce analytics, breakage/WISMO/safety support |
| `docs/engineering-backbone.md` (§1–§10, control tags, §9 regime matrix, minimum bar) | Jul 13 | per-PR security posture — **carried honestly, incl. where it is N/A/reframed for buy-not-build** |
| `docs/tool-mcp-stack.md` v0.1 | Jul 13 | MCP availability per tool; connect-these list |
| `starters/saas` + `CLAUDE.md` | repo | inherited conventions **for the one deferred code surface only**; N/A elsewhere |
| `founder-profile/PROFILE.md` + `guardrails.md` | v0.1 | governing question, voice, drafts-only, secrets, gates, LYV firewall, claims |

**Input gate (blocking) — result: PASS.** A finished `/product-spec` exists (03 §2, with AC1–AC6, data model, test plan) **and** closed economics exist (01 §3 delivered-margin + §5 commit gate). Both STOP conditions are cleared, so the brief ships. The nuance the gate does not anticipate: the finished spec's *verdict* is "build almost nothing." The brief honors that — it does not manufacture a phantom app to look substantial.

**Cross-cutting note (venture-context path).** The skill's Load-first #2 expects `ventures/<slug>/venture-context.md`; this run's venture lives at `undefined/NN-*.md` (the harness did not substitute the slug). This brief reads context from the `undefined/` artifacts. Flagged (see §7 F-CTX) so Fable does not hunt for a `ventures/emberline/` path that does not exist.

**Execute, don't re-derive.** Every price, token, regime, tool, role, and cadence below is already decided in 00–04. A field that would require Fable to choose is a defect; where an upstream decision is genuinely missing it is marked **PREREQUISITE (run X)** — never fabricated.

---

## 1. Workstream map — the full stand-up

Nine workstreams are *considered* by the taxonomy; a tenth (**WS-J**) had to be **added** because the skill's 9-workstream model has no home for manufacturing / burn-testing / inventory / fulfillment — the operational spine of a physical venture (see §7 F-WSJ). WS-A is deliberately **thin/deferred** (buy-not-build). Each row: goal · source · type · executor · definition-of-done.

| WS | Goal | Source (00–04) | Type | Executor | Definition of done |
|---|---|---|---|---|---|
| **A · Product / App** *(THIN — one deferred surface)* | Delivered-Margin Ledger + Batched-Refill Guard — the *only* custom code, **deferred to post-validation** | 03 §2 product-spec | code PR (Phase 3, conditional) | Fable + dev subagents | one real fulfilled order writes a correct `shipment` row in the live datastore; sprint runs the manual version (PR-6) |
| **B · Security & Governance** *(mostly reframed/N/A)* | the backbone controls that actually apply: tool-access RBAC, secrets, PII/DPAs, consent analytics, the ONE webhook's runtime safety | 03 §3; backbone §3/§4/§5/§7/§9/§10 | config + (code for PR-18) | Fable + human (access) | access register current + MFA everywhere; DPAs signed; consent gate live; §2 hard-core marked N/A with reason |
| **C · Data & Analytics** | consent-gated commerce analytics (Shopify/Klaviyo/GA4 consumed, not an SDK) + provisional north-star + the margin ledger read | 04 §5 analytics-stack | config/instrument | Fable + Cowork+MCP (Airtable) | events fire post-consent, no PII; north-star board live; **metrics-dashboard = PREREQUISITE** |
| **D · CRM & Sales** *(wholesale only)* | Airtable 4-table wholesale base + reorder pipeline + deal desk (keystone floor/MAP). **DTC is self-serve — never enters a CRM** | 04 §2 sales-crm | tool-config (Airtable MCP) | Cowork + Airtable MCP | base live; weighted pipeline forecasts $; reorder motion tracked; LYV firewall field enforced |
| **E · Finance ops** | inventory/COGS/cash-conversion books (the real complexity), COA (1200s inventory + 5000s COGS), A2X→QBO bridge, marketplace-facilitator tax | 04 §1 finance-ops | config + human (CPA) | Cowork+MCP + fractional bookkeeper | COA live; A2X mapping ties Shopify payouts→QBO; inventory-adjusted 13-week cash model runs |
| **F · GTM / Marketing / Content & Social** | Shopify storefront (theme+tokens+PDP+quiz), Klaviyo lifecycle (draft), IG-anchor + Pinterest social calendar (draft), creator/UGC seeding, wholesale line-sheet, PR/pop-ups | 02 §2–§5 | config + creative (Canva) | Fable + Cowork+MCP + Tony (approve) | storefront live + tracked; lifecycle flows drafted; 2-wk social calendar drafted; line-sheet ready; $0 paid until proof |
| **G · Support & Success** | e-com helpdesk (Gorgias/Airtable) + KB + severity/SLA + **S1 fire/injury/recall lane** + continuous churn-prevention | 04 §6 support-success | tool-config | Cowork + human (escalations) | triage live; safety lane routes to founder+legal+insurer; KB deflects WISMO + sub-management |
| **H · Legal & Compliance** | entity/LLC, the goods/retail contract set (lease/supply/co-man/3PL/sale-of-goods/auto-renew/wholesale-MAP/DPAs), the **physical-product regime** (insurance, ASTM F2417/F2058, FPLA, IFRA, hazmat, Prop 65, Green Guides), TM | 04 §3 legal-pack | docs + gate | human-gated + Cowork (draft) | privacy/consent live; contracts drafted→counsel→signed; **regime cleared before first sale** |
| **I · Org & Access** | founder + AI + fractional/part-time; the **physical-production/fulfillment function**; RACI incl. safety-gate class; access register with **physical-access dimension**; on/offboarding incl. physical-key recovery | 04 §4 org-roles | in-app roles N/A → tool+physical access register | human + Cowork | coverage map + next-3-hires (trigger-gated); RACI live; register incl. physical rows |
| **J · Physical Operations & Supply Chain** *(ADDED — taxonomy gap)* | pour studio, scent dev, **ASTM F2417 burn-test gate**, batch/lot + IFRA/SDS control, breakage-aware pick-pack, 3PL, inventory/reorder respecting 8–12-wk ceramic lead + Q4 build | 00 ops surface; 04 §1c/§4; 03 §1 | config (Airtable base) + physical process + human | founder + operator + 3PL | every live SKU has a logged burn-test PASS before sale; one real pack-out proves delivered contribution > $8/shipment; reorder plan respects lead time |

*WS-A/WS-B are **not** the critical path here (they are the skill's default critical path — see §7 F-CP). Emberline's critical path runs through **WS-J + WS-H + WS-F**: inventory, compliance/insurance, and the storefront.*

---

## 2. Sequencing & parallelization

### Phase plan
- **Phase 0 — Foundation** *(single-threaded; unblocks everything).* Stand up the store + brand theme + catalog (PR-1); tool + physical access governance (PR-2); the Airtable ops base + burn-test gate (PR-3). **DoD:** store boots on trial plan with brand applied; ops base live; access register current + MFA everywhere.
- **Phase 1 — Core value** *(parallelizable once Phase 0 lands).* Subscription-as-batched-pack (PR-4); Klaviyo flows drafted (PR-5); the *manual* Delivered-Margin Ledger from one real 3PL pack-out (PR-6); 3PL/ShipStation sandbox + breakage-aware pack profile (PR-7); wholesale CRM base (PR-8); consent-gated commerce analytics (PR-9). **DoD:** the core value action — buy vessel → start refill sub → refill ships as a batched pack — works end-to-end in a **test** order, instrumented; the manual ledger shows delivered contribution > $8/shipment.
- **Phase 2 — Launch surfaces & the go-live gate** *(gated).* Storefront conversion surface (PR-10); legal storefront + auto-renew compliance (PR-11); **THE PHYSICAL GO-LIVE GATE** — one real end-to-end order, refunded, behind the launch-clearance checklist (PR-12). **DoD:** a real test order flows store → subscription → 3PL → label → Klaviyo → Airtable decrement, **verified on the live store**; the physical go-live gate is cleared.
- **Phase 3 — Operate** *(parallel, post-launch).* Finance close wiring (PR-13); support stack (PR-14); legal contract set + regime execution (PR-15); org build-out (PR-16); KPI board (PR-17); and — **only if refill retention clears the 01 day-90 gate** — the coded ledger (PR-18). **DoD:** each function live + verified on its tool.

### Dependency graph (what unblocks what)
```
PR-1 (store) ─┬─> PR-4 (subscription pack) ─┐
              ├─> PR-5 (Klaviyo flows)        │
              ├─> PR-9 (analytics)            ├─> PR-10 (conversion surface) ─┐
PR-2 (access)─┤                               │                               │
PR-3 (ops base + burn-test gate) ─> PR-7 (3PL/pack) ─> PR-6 (manual ledger) ──┤
                                                                              ├─> PR-12  ── GO-LIVE GATE ──> FIRST REAL ORDER
PR-8 (wholesale CRM)  [parallel, not on the DTC first-dollar path]            │              ▲
PR-11 (legal storefront + auto-renew) ───────────────────────────────────────┘              │
                                                                                             │
   ┌─ PHYSICAL, HUMAN-GATED, CALENDAR-BOUND (no PR — procurement + compliance timeline) ─────┘
   │   ceramic MOQ purchase (8–12 wk lead) ─> hand-pour batch ─> ASTM F2417 burn-test PASS
   │   product-liability insurance BOUND ─> one real 3PL pack-out (feeds PR-6)
   └─  THIS is the longest pole, not any build task.

Phase 3 (PR-13..PR-17) runs in parallel post-launch. PR-18 gated on the day-90 retention read.
```

### Critical path to first dollar
**Not a software DAG.** The gating path is a **procurement + compliance timeline** with a build tail:
`ceramic MOQ ordered (8–12 wk lead, [gate: spend]) → batch hand-poured → ASTM F2417 burn-test PASS (WS-J, [gate: safety]) → product-liability insurance BOUND ([gate: spend/legal]) → one real 3PL pack-out proves delivered contribution > $8 (PR-6) → PR-1+PR-4+PR-10 live → PR-11 auto-renew terms counsel-reviewed → PR-12 go-live gate cleared → first real order.` The longest pole is the ceramic lead time — a supplier calendar, not a PR. Fable must not declare "first dollar unblocked" on PR completion; the physical + insurance path is the real blocker (see §7 F-CP).

### Go-live gate sequence (replaces the backbone's "switch Stripe to live keys")
`store live on trial/dev → test order (Shopify Bogus Gateway or a real order immediately refunded) → verify the full path → PHYSICAL GO-LIVE GATE (PR-12) → take real orders.` The go-live gate is **physical**, not a Stripe key cutover (Emberline takes money via Shopify Payments; PCI is the platform's SAQ-A). See PR-12 for the checklist; the "Stripe live keys" minimum bar is N/A here (§7 F-GATE).

---

## 3. The PR plan — phased, PR-by-PR

Every PR is authored to the canonical template's ten fields. For config-PRs, "Data model + RLS" carries the **tool's schema/config** and "Endpoints / functions" carries the **tool actions/automations wired**; the acceptance criteria assert the *wired, verified* result (the skill's config-PR rule). Only PR-18 has a real data model + edge functions + `verify_jwt`.

### Phase 0 — Foundation

```
### PR-1 · Stand up the Shopify store, brand-token theme, and candles-only catalog   [Phase 0 · WS-F/A]

Problem. Emberline needs a real, brandable place to take an order. Per 03, the storefront is bought (Shopify), not
  built — this is the "hello-world" analog for a commerce venture, and it unblocks every downstream surface.
Scope. In: Shopify store on the dev/trial plan; brand theme with 02 §2.3 tokens mapped to theme-editor color/type
  settings; catalog = The Vessel (~3 colorways), ≤4 wax scents, Discovery Set. Out: subscription config (PR-4),
  conversion surface/PDP polish (PR-10), the diffuser line (deferred — hazmat), any real spend beyond the plan.
Data model + RLS policies (tool schema). Shopify products/variants/collections; theme settings hold the tokens
  (Bone/Char/Ember; Fraunces+Inter). No custom DB, no RLS — customer PII lives in Shopify (classified in PR-11).
Endpoints / edge functions (tool actions). None custom. Shopify admin config only; custom-app token scoped
  least-privilege (products/orders read/write) for later automations.
Acceptance criteria (Given/When/Then).
  - Given the trial store, When the theme is applied, Then the palette/type match 02 §2.3 (Ember used ~10%,
    light-text-on-Ember only — Char-on-Ember fails AA) and a design-critique + accessibility-review pass.
  - Given the catalog, When a product page renders, Then FPLA identity + net-qty + maker fields and the ASTM F2058
    safety warning are present as content blocks, and no medical/aromatherapy claim appears (scent = notes only).
  - Given a scent SKU, When it is set sellable, Then it is blocked until its Airtable burn-test row = PASS (PR-3).
Test plan (unit / e2e). Manual theme-QA + label-compliance checklist (no code to unit-test). | AC1 | manual | palette/type + a11y pass. | AC2 | manual | label + claims check. | AC3 | manual | cross-check PR-3 gate.
Security checklist (backbone controls that apply HERE). [CONFIG] custom-app token least-scope + MFA on the Shopify
  account (backbone §10) · [CONFIG] no token in theme/code (§3) · PII stays in Shopify, classified in PR-11 (§5).
  N/A here: RLS, verify_jwt, CORS, rate-limit (no custom app) — reason: buy-not-build.
Secrets needed (names only). SHOPIFY_ADMIN_API_TOKEN (stored in the vault + the app connection, not a repo).
Dependencies. none (this is the foundation).
Human gate. [Tony] creates the Shopify account (no net spend on trial); going live is gated later at PR-12.
  Rollback: delete/depublish the trial store (reversible).
```

```
### PR-2 · Establish tool + physical access governance (register, MFA, scoped tokens, vault)   [Phase 0 · WS-B/I]

Problem. The starter's in-app RBAC is N/A (no app), but the part of the security backbone that DOES transfer —
  §10 access governance — is load-bearing here because money/PII/inventory live across many vendor accounts. This
  is the security foundation for a buy-not-build venture (03 §3A; 04 §4c).
Scope. In: the Airtable access register (Principal · Type · Resource · Access level · Scope · MFA? · Granted · Last
  reviewed · Status) with rows for Shopify, subscription app, Klaviyo, Faire, 3PL/ShipStation, QBO/A2X, bank/cards,
  Airtable/Drive/Canva/Gmail, AND physical rows (studio key, storage, sign-for-delivery); MFA enforced on every
  account; scoped/revocable tokens; a password manager/vault. Out: in-app roles (N/A), any live send.
Data model + RLS policies (tool schema). Airtable access-register table; secrets by reference only — the register
  records access levels, NEVER keys (guardrail).
Endpoints / edge functions. none.
Acceptance criteria.
  - Given any tool account, When it is provisioned, Then MFA is on, the token is scoped least-privilege, and a
    register row exists — no shared logins.
  - Given a contractor/operator, When onboarded, Then physical grants (studio key, storage, delivery authorization)
    are recorded alongside digital ones (the physical dimension the digital matrix omits).
  - Given the quarterly review, When run, Then every row has a Last-reviewed date and Status.
Test plan. Register completeness check (manual). | AC1 | manual | each account MFA+scope+row. | AC2 | manual |
  physical rows present. | AC3 | manual | review dates current.
Security checklist. [VENTURE] access register + MFA + no shared logins + quarterly review (§10) · [VENTURE] AI/service
  accounts scoped, read-first, drafts-only (§10) · [CONFIG] secret-guard applies to the PR-18 repo only.
Secrets needed (names only). none materialized — the register references them by name; values live in the vault +
  each vendor's own connection settings.
Dependencies. none (parallel with PR-1).
Human gate. none (reversible). Grants/revokes for real people are [Tony]-approved as they occur.
```

```
### PR-3 · Build the Airtable ops system-of-record + the ASTM F2417 burn-test PASS/FAIL gate   [Phase 0 · WS-J/B/H]

Problem. This is the real "internal app" (03 §1): SKUs, lots, batch records, the burn-test safety log, IFRA/SDS
  document control, and the inventory/reorder register — configured in Airtable, never coded. The burn-test gate is
  a non-optional product-DEV safety gate: no SKU is sellable until it passes (00; 04 §3d).
Scope. In: Airtable base with tables — SKUs, Lots/Batches, Burn-Test Log (scent×vessel×wick → PASS/FAIL + date +
  tester), IFRA-cert/SDS links (→ Drive), Inventory & Reorder (on-hand/on-order vs demand, reorder point respecting
  8–12-wk ceramic lead + Q4 build). Out: finance valuation overlay (PR-13), a coded PLM (never — overbuild trap).
Data model + RLS policies (tool schema). Airtable tables above; linked records SKU↔Lot↔Burn-Test. Base access is
  scoped-PAT + editor roles per PR-2; no public exposure.
Endpoints / edge functions (tool automations). Airtable automations: flag a SKU "NOT SELLABLE" until Burn-Test =
  PASS; reorder-point alert when on-hand+on-order < demand within lead time. Drafts/internal only.
Acceptance criteria.
  - Given a new scent×vessel×wick combo, When its Burn-Test row is not PASS, Then the linked SKU shows NOT SELLABLE
    and PR-1's catalog cannot flip it live.
  - Given a fragrance oil lot, When received, Then its IFRA certificate + SDS are linked (Drive) before the lot is
    used in a batch.
  - Given on-hand + on-order below the reorder point within the ceramic lead time, When the nightly automation runs,
    Then a reorder alert is raised (respecting the 8–12-wk lead and Q4 build).
Test plan. | AC1 | manual | unpassed SKU blocked. | AC2 | manual | IFRA/SDS present pre-use. | AC3 | manual | alert fires.
Security checklist. [VENTURE] scoped Airtable PAT + editor roles (§10) · [VENTURE] batch/lot records = the audit-log
  analog for a maker (§7 audit reframed) · IFRA/SDS docs in Drive with scoped access (§5).
Secrets needed (names only). AIRTABLE_PAT (vault); GOOGLE_DRIVE scope (existing MCP).
Dependencies. PR-2 (access register + scoped tokens).
Human gate. [Tony] signs off the burn-test protocol as the safety gate (a NEW gate class — see §7 F-GATECLASS).
  Rollback: base config is reversible.
```

### Phase 1 — Core value

```
### PR-4 · Configure the refill subscription as a prepaid quarterly 2–3 pack (the margin guard)   [Phase 1 · WS-A/E/F]

Problem. THE most important config in the venture. 01's make-or-break finding: a refill shipped SINGLY has ≈$0
  delivered contribution; batched into a quarterly 2–3 pack it carries ~$13.80/quarter (~$55/yr). The subscription
  MUST default to a prepaid batched cadence and must never silently drift to single-monthly (03 §2; 01 §3).
Scope. In: install Skio (recommend) or Recharge on Shopify Checkout-Extensibility; configure the refill product as a
  PREPAID quarterly 2–3 pack; passwordless customer portal (skip/swap/pause); Klaviyo event hooks. Out: the coded
  batching guard (PR-18 — deferred); the diffuser sub (hazmat).
Data model + RLS policies (tool schema). Subscription-app plan config (cadence, pack size, prepaid) on the order; no
  custom DB. Subscription = a COMMERCE subscription on the order, NOT Stripe Billing seats (03 F16).
Endpoints / edge functions (tool actions). App-native: create-subscription, skip/swap/pause via the portal;
  cadence/pack-size emitted to Klaviyo + (later) the ledger.
Acceptance criteria.
  - Given a vessel buyer, When they choose "refill & save 20%," Then the default plan is a PREPAID quarterly 2–3 pack
    (not single-monthly) at $19.20/refill.
  - Given an active subscription, When the customer opens the portal, Then skip/swap-scent/pause work without a
    password and cancellation is simple (CA ARL / FTC Click-to-Cancel — terms drafted in PR-11).
  - Given a scheduled charge, When it would ship a single refill, Then it is surfaced for review (interim: manual /
    PR-6 ledger; automated: PR-18 guard).
Test plan. | AC1 | manual (test order) | default = batched prepaid. | AC2 | manual | portal actions work. | AC3 | manual | single-refill surfaced.
Security checklist. [CONFIG] scoped subscription-app API key + MFA (§10) · [CONFIG] key in vault/app connection,
  not a repo (§3) · PII stays in the app/Shopify (§5). N/A: RLS/verify_jwt (no custom app).
Secrets needed (names only). SUBSCRIPTION_APP_API_KEY (Skio/Recharge — vault/app connection).
Dependencies. PR-1 (store + catalog).
Human gate. [Tony] connects the subscription app (approval; no live sends). Rollback: uninstall app (reversible pre-launch).
```

```
### PR-5 · Connect Klaviyo + draft the e-com lifecycle flows   [Phase 1 · WS-F/G]   (drafts only)

Problem. 01 says the whole model rests on retention; Klaviyo owns the retention motion. The SaaS default (SendGrid/
  Twilio transactional) is wrong — the revenue-critical e-com flows are abandoned-cart, browse-abandon, post-purchase,
  and REPLENISHMENT (02 §3.5). All drafts; nothing auto-sends (guardrail).
Scope. In: connect Klaviyo (registry OAuth); draft flows — welcome+scent-match, abandoned-cart, browse-abandon,
  post-purchase (care+safety+set-the-refill-cadence), replenishment/reorder, nurture, win-back, wholesale-ops. Out:
  turning any flow live (Tony gate), SMS on non-A2P numbers.
Data model + RLS policies (tool schema). Klaviyo lists/segments/flows consuming Shopify + subscription events. No
  custom DB.
Endpoints / edge functions (tool actions). Flow triggers on commerce events; all in DRAFT/manual-review state.
Acceptance criteria.
  - Given Klaviyo connected, When flows are built, Then all eight exist as DRAFTS (none live-sending) and are
    claims-clean (no medical/aromatherapy; scent = notes only; safety copy on post-purchase).
  - Given the post-purchase flow, When it renders, Then it sets the refill cadence (the fast-visible-win → sub start).
  - Given any SMS step, When configured, Then it targets opt-in contacts on an A2P-registered number only.
Test plan. | AC1 | manual | flows in draft + claims check. | AC2 | manual | cadence CTA present. | AC3 | manual | SMS opt-in gate.
Security checklist. [CONFIG] scoped Klaviyo key + MFA + drafts-only (§10, guardrail) · no PII in analytics events
  (§7) · DPA with Klaviyo (§9 → PR-11).
Secrets needed (names only). KLAVIYO_API_KEY (vault/registry connection).
Dependencies. PR-1 (store), PR-4 (subscription events).
Human gate. [Tony] approves before ANY flow goes live-sending (guardrail). Rollback: keep flows in draft (default).
```

```
### PR-6 · Stand up the manual Delivered-Margin Ledger from one real 3PL pack-out   [Phase 1 · WS-E/C/J]

Problem. Subscription apps report REVENUE, not delivered CONTRIBUTION — the number 01 says the model is most
  sensitive to. During the sprint this is a spreadsheet/Airtable ledger maintained by hand from ONE real 3PL
  pack-out + freight quote (01 day-30 condition), NOT code. It answers the day-30/day-90 kill checks with data.
Scope. In: an Airtable/xlsx ledger computing delivered_contribution = price − COGS − pick-pack − dim-weight freight
  − breakage allowance − fees, per shipment; the % below the $8 floor; one real physical pack-out to source the
  freight/breakage numbers. Out: the coded webhook version (PR-18 — only if retention proves out).
Data model + RLS policies (tool schema). Airtable "Shipment" table mirroring the PR-18 schema (units, revenue, cogs,
  pickpack, freight, breakage, fees, delivered_contribution, below_floor). Internal-only; scoped PAT (PR-2).
Endpoints / edge functions. none (manual entry + formulas).
Acceptance criteria.
  - Given one real 3PL pack-out + freight quote, When entered, Then a per-shipment delivered_contribution is computed
    and the quarterly-3-pack case shows > $8/shipment (else the DTC single-refill model is killed — 01 kill gate).
  - Given a single-refill shipment, When entered, Then below_floor = true and it is counted in the weekly rollup.
  - Given the weekly rollup, When produced, Then avg contribution + % below floor feed the finance driver (PR-13/17).
Test plan. | AC1 | manual | batched > $8 confirmed. | AC2 | manual | single flagged. | AC3 | manual | rollup feeds finance.
Security checklist. [VENTURE] internal-only, scoped PAT (§10) · integer cents, no float money · append-only (a
  refund writes a compensating row, never mutates) — the discipline PR-18 will inherit.
Secrets needed (names only). AIRTABLE_PAT (existing).
Dependencies. PR-3 (ops base), PR-7 (3PL pack profile for real freight numbers).
Human gate. [Tony] approves the one real pack-out spend (small). Rollback: n/a (a measurement, reversible).
```

```
### PR-7 · Wire the 3PL + ShipStation sandbox + the breakage-aware pack profile   [Phase 1 · WS-J/E]

Problem. Heavy/fragile ceramic + dim-weight freight is a real margin driver (01 §3). Fulfillment is bought (a 3PL +
  ShipStation for rate-shopping), never built (03 §1). The pack profile determines breakage — a margin line item.
Scope. In: connect a 3PL (ShipBob-class) + ShipStation in sandbox; enter one product's dimensions + a protective
  packaging profile; rate-shop a real freight quote (feeds PR-6). Out: hazmat routing (diffuser deferred), a custom
  OMS/WMS (absurd at this scale).
Data model + RLS policies (tool schema). 3PL product/dimension records + packaging profile; ShipStation rate rules.
  No custom DB.
Endpoints / edge functions (tool actions). Order → 3PL pick-pack; ShipStation label/rate; tracking back to Shopify/
  Klaviyo. Sandbox until PR-12.
Acceptance criteria.
  - Given a vessel with dimensions + protective profile, When a test order is created, Then a label + a real dim-weight
    rate return and the freight figure is captured for PR-6.
  - Given the breakage-aware profile, When applied, Then it targets ≤3% breakage (the operator scorecard bar, 04 §4d).
  - Given a fulfilled test order, When shipped, Then tracking flows back to Shopify + triggers the Klaviyo confirmation.
Test plan. | AC1 | manual (sandbox) | label+rate return. | AC2 | manual | profile applied. | AC3 | manual | tracking round-trips.
Security checklist. [CONFIG] scoped 3PL/ShipStation API keys + MFA (§10) · DPA with the 3PL (holds customer PII → §9,
  PR-11) · keys in vault (§3).
Secrets needed (names only). THREEPL_API_KEY, SHIPSTATION_API_KEY (vault).
Dependencies. PR-1 (store/orders), PR-3 (SKU dimensions).
Human gate. [Tony] connects the 3PL account (approval). Rollback: sandbox only; disconnect (reversible).
```

```
### PR-8 · Build the wholesale CRM base + reorder pipeline (Airtable)   [Phase 1 · WS-D]

Problem. Wholesale (boutiques, designers, boutique hotels) is a real relationship sale with a forecast and REORDERS —
  the only motion that belongs in a CRM. DTC refill subscription is self-serve commerce and never enters the CRM
  (04 §2). The SaaS demo→proposal→negotiation ladder is wrong; wholesale buys via sample→line-sheet→PO→reorder.
Scope. In: Airtable Companies/Contacts/Deals/Activities per 04 §2a; wholesale stages (Prospect→Engaged→Sampled→
  Opening order→Fulfilled→Reorder cycle→Dormant) with the reorder motion; deal desk (keystone floor + MAP); the LYV
  firewall Source-origin field. Out: a dedicated CRM (Airtable suffices at this stage), auto-send (drafts only).
Data model + RLS policies (tool schema). The 4-table base + weighted-forecast formula + Faire-flag (marketplace-
  facilitator tax/commission). Scoped PAT + editor roles (PR-2).
Endpoints / edge functions (tool automations). Stage-timestamp; reorder-reminder trigger; stalled-deal flag; DRAFT
  outbound line-sheet/sample-follow-up into a Sequences queue (never auto-sent).
Acceptance criteria.
  - Given a wholesale account, When "won," Then it means SHIPPED + invoiced/collected (net-30 = A/R + credit risk to
    finance), NOT "contract executed" (the SaaS definition that misfits — 04 §2b).
  - Given an active account past its reorder cadence, When the automation runs, Then a reorder task is created (the
    wholesale-LTV motion; deals do not end at the opening order).
  - Given an account with Source-origin = LYV, When captured, Then it is flagged and NOT prospected (firewall).
Test plan. | AC1 | manual | won = shipped+collected. | AC2 | manual | reorder task fires. | AC3 | manual | LYV row firewalled.
Security checklist. [VENTURE] scoped PAT + editor roles (§10) · automations DRAFT not send (CAN-SPAM/TCPA + guardrail)
  · SMS only to opt-in on A2P numbers · LYV firewall enforced.
Secrets needed (names only). AIRTABLE_PAT (existing).
Dependencies. PR-2 (access), PR-3 (ops base shares Airtable).
Human gate. [Tony] approves before any outbound sequence sends (drafts-only). Rollback: base config reversible.
```

```
### PR-9 · Instrument consent-gated commerce analytics + the event map   [Phase 1 · WS-C]   (config-PR)

Problem. There is NO app SDK to instrument (03; 04 §5) — the "product analytics" layer is Shopify + Klaviyo commerce
  events CONSUMED, plus GA4 for acquisition, all consent-gated with no PII. metrics-dashboard was not run, so the
  north-star is provisional (PREREQUISITE — see §7 F-METRICS).
Scope. In: GA4 (consent-gated) on the storefront; the event map (discovery_set_purchased, vessel_purchased,
  subscription_started, refill_shipped {delivered_contribution_band}, subscription_cancelled, wholesale_order_placed,
  checkout_started/discovery_to_vessel); the Airtable tracking-plan source-of-truth. Out: a warehouse/BI pipe (defer
  until data spans ≥3 systems); a product SDK (none exists).
Data model + RLS policies (tool schema). Consent state via the storefront consent banner; events carry ids + BANDS,
  never PII/PHI (PHI N/A). Airtable tracking plan = source of truth; normalize Shopify/Klaviyo schemas there.
Endpoints / edge functions. none custom. GA4 tag + consent gate; Shopify/Klaviyo emit their own; consumed.
Acceptance criteria.
  - Given a visitor who has not consented, When they browse, Then no GA4/analytics cookie or event fires (DNT respected).
  - Given a consented purchase, When it completes, Then vessel_purchased fires with {colorway, first_order} and NO PII.
  - Given a refill fulfillment, When shipped, Then refill_shipped carries {units, delivered_contribution_band} (band,
    not raw value).
Test plan. | AC1 | manual (network) | zero pre-consent calls. | AC2 | manual | event, no PII keys. | AC3 | manual | band only.
Security checklist. [VENTURE] consent-gated analytics + DNT (§7) · [VENTURE] no PII/PHI in events (§5/§7) · DPA with
  GA4/Google (§9 → PR-11). Sentry applies only to PR-18 (the sole custom function).
Secrets needed (names only). VITE-style public: GA4_MEASUREMENT_ID (public ingest). No private key is public.
Dependencies. PR-1 (store), PR-4 (subscription events).
Human gate. Connect-these: GA4 (direct), Klaviyo (registry, PR-5). PREREQUISITE: run metrics-dashboard to own the
  north-star. none irreversible.
```

### Phase 2 — Launch surfaces & the go-live gate

```
### PR-10 · Storefront conversion surface: PDPs, subscription toggle, discovery→vessel quiz, cart, UTM   [Phase 2 · WS-F]

Problem. The conversion path is the metric (discovery→vessel→refill-sub). The quiz attacks 01's crux conversion; it
  is an off-the-shelf Shopify quiz app, not a microservice (03 §1).
Scope. In: PDPs (still-life + in-situ imagery, cost-per-burn card, notes-only scent copy); the subscription toggle
  ("one-time" vs "refill & save 20%"); a scent-match quiz app; cart + post-purchase upsell (refill 3-pack — batched);
  UTM/GA4 tracking. Out: paid-ads landing (locked until proof), the diffuser line.
Data model + RLS policies (tool schema). Shopify PDP/section config + quiz-app config; no custom DB.
Endpoints / edge functions (tool actions). Quiz → recommended vessel/scent; toggle → subscription plan (PR-4);
  UTM captured to GA4 (PR-9).
Acceptance criteria.
  - Given a PDP, When it renders, Then scent is described as notes only (no health claim), the cost-per-burn card is
    factual, and the ASTM F2058 safety warning + FPLA fields are present.
  - Given the quiz, When completed, Then it routes to a vessel PDP and the discovery→vessel step is tracked (PR-9).
  - Given the subscription toggle, When "refill & save," Then it applies the batched prepaid plan (PR-4), and the
    post-purchase upsell offers a refill 3-pack (batched — not single).
Test plan. | AC1 | manual | claims/label/a11y pass. | AC2 | manual | quiz routes + tracks. | AC3 | manual | toggle=batched.
Security checklist. [CONFIG] scoped quiz-app token + MFA (§10) · consent gate covers the quiz (§7) · no PII in tracking (§5).
Secrets needed (names only). QUIZ_APP_API_KEY (vault/app connection).
Dependencies. PR-1, PR-4, PR-9.
Human gate. Publishing the storefront to the public is gated at PR-12. Rollback: unpublish theme sections (reversible).
```

```
### PR-11 · Legal storefront surfaces + subscription auto-renewal compliance   [Phase 2 · WS-H]   (drafts → counsel gate)

Problem. The storefront collects PII and sells a subscription — so GDPR/CCPA (§9, the one regime that DOES transfer)
  plus the SUBSCRIPTION auto-renewal regime (CA ARL + FTC Negative-Option / Click-to-Cancel) apply. The primary
  customer contract is Sale-of-Goods (UCC Art. 2), NOT ToS (04 §3b). NOT LEGAL ADVICE — every item is counsel-gated.
Scope. In: draft ToS + Privacy Policy + cookie/consent banner; Sale-of-Goods Terms + Returns/Warranty; subscription
  auto-renewal terms (clear disclosure, affirmative consent, simple cancel); DPAs with Shopify/Klaviyo/3PL/GA4; a
  DSAR/deletion workflow via Shopify/Klaviyo tooling. Out: signing anything (human-gated), the full contract set
  (PR-15).
Data model + RLS policies. PII classification (Shopify/Klaviyo hold it; we hold none in a custom DB) + retention
  schedule per data class.
Endpoints / edge functions. none. DSAR/deletion runs through Shopify + Klaviyo.
Acceptance criteria.
  - Given the storefront collects PII, When it goes live, Then a privacy policy + consent banner are live and DPAs
    with every subprocessor are signed (before collecting PII — §9 gate).
  - Given the refill subscription, When a customer subscribes, Then auto-renew disclosure + affirmative consent are
    captured and cancellation is one-step (CA ARL / FTC Click-to-Cancel).
  - Given a DSAR/deletion request, When received, Then it is fulfilled via Shopify/Klaviyo tooling within the statutory window.
Test plan. | AC1 | manual | privacy+consent+DPAs. | AC2 | manual | auto-renew disclosure+easy cancel. | AC3 | manual | DSAR path works.
Security checklist. [VENTURE] GDPR/CCPA baseline (§9) · [VENTURE] PII minimized, retention schedule, DSAR workflow
  (§5) · DPAs signed (§9). Physical-product regime is PR-15 + the go-live gate.
Secrets needed (names only). none.
Dependencies. PR-1 (store), PR-5 (Klaviyo), PR-7 (3PL).
Human gate. [Tony + ⚖ consumer-protection/privacy counsel] review before publish/first sale. Rollback: keep drafts unpublished.
```

```
### PR-12 · THE PHYSICAL GO-LIVE GATE — one real end-to-end order (refunded) + launch-clearance checklist   [Phase 2 · WS-A/B/H/J]

Problem. This REPLACES the backbone's "cleared to switch Stripe to live keys" minimum bar. Emberline takes money via
  Shopify Payments (PCI = platform SAQ-A, no Stripe integration), so the go-live gate is PHYSICAL: you are not cleared
  to take a real order until the fire-risk product is legally sellable, physically shippable, and margin-proven
  (03 §3 "physical go-live gate"; 01 §5 conditions). This is the single human-approval point where irreversible
  liability begins.
Scope. In: place ONE real end-to-end order on the live store (Bogus Gateway or a real order immediately refunded) and
  verify the full path; the launch-clearance checklist below. Out: paid media (locked until the retention/CAC gates
  clear post-launch).
Data model + RLS policies. none (a verification + a checklist).
Endpoints / edge functions. none.
Acceptance criteria (the launch-clearance checklist — EVERY box before a real order).
  - Given a test order, When placed, Then it flows store → subscription created (batched) → 3PL pick-pack → label+rate
    → Klaviyo confirmation → Airtable inventory decrement, verified on the LIVE store (the physical "verified in prod").
  - [ ] Product-liability insurance BOUND (01 condition #2). [ ] ASTM F2417 burn-test PASS logged for EVERY live SKU
    (PR-3). [ ] FPLA + ASTM F2058 labeling correct on every unit. [ ] No medical/aromatherapy claim anywhere (guardrail).
  - [ ] One real 3PL pack-out proves delivered contribution > $8/shipment on the batched pack (PR-6). [ ] GDPR/CCPA
    baseline live (privacy, consent, DPAs — PR-11). [ ] Auto-renew disclosure + easy-cancel live (PR-11). [ ] Tool-
    account MFA + access register done (PR-2). [ ] Prop 65 assessed for CA. [ ] "Emberline" TM collision risk flagged
    (never declared clear — PR-15).
Test plan. | path | manual (one live refunded order) | full round-trip verified. | clearance | manual | every box ticked.
Security checklist. [VENTURE] the whole backbone minimum bar is REPLACED by this physical checklist (§7 F-GATE);
  Shopify Payments PCI attestation on file (§9, platform-owned SAQ-A).
Secrets needed (names only). none new (uses PR-1/4/7 tokens).
Dependencies. PR-1, PR-4, PR-6, PR-7, PR-10, PR-11 + the PHYSICAL path (insurance bound, burn-test pass, pack-out).
Human gate. [Tony] — GO-LIVE. This is THE gate: insurance + safety + labeling + claims + margin + privacy all cleared.
  Rollback: refund the order, keep the store unpublished / delist SKUs (reversible until real customer orders exist).
```

### Phase 3 — Operate (parallel, post-launch)

```
### PR-13 · Finance close wiring: A2X → QBO, inventory/COGS COA, marketplace-facilitator tax   [Phase 3 · WS-E]

Problem. QBO alone can't run perpetual inventory/COGS for a maker; the money only ties if a commerce→ledger bridge
  (A2X) maps Shopify payouts/fees/COGS/marketplace-tax into QBO (04 §1e). The COA needs the inventory (1200s) + cost-
  of-goods (5000s) blocks the SaaS COA lacks (04 §1b, the biggest finance gap).
Scope. In: QBO COA per 04 §1b (incl. 1200s inventory, 5000s COGS/fulfillment, 2350 pre-sale deferred, 2210 marketplace-
  facilitator tax); connect A2X (Shopify→QBO); the monthly-close steps incl. inventory valuation, breakage reserve,
  marketplace-tax reconciliation, pre-sale/gift-card deferral. Out: R&D §41/§174 (N/A — no qualifying software dev).
Data model + RLS policies (tool schema). QBO COA + A2X mapping rules; Airtable inventory/reorder overlay (PR-3).
Endpoints / edge functions. A2X sync (read-only to QBO); no custom code.
Acceptance criteria.
  - Given Shopify payouts + Faire + fees, When A2X syncs, Then they land in the correct QBO accounts (payouts, 5095
    fees, 2210 marketplace tax) and reconcile — no double-remit of marketplace-collected tax.
  - Given month-end, When close runs, Then WIP→FG→COGS releases at shipment (accrual), a breakage reserve accrues
    (5090), and pre-sale/gift-card deferral releases on fulfillment (2350).
  - Given the 13-week cash model, When rolled, Then it timelines the pre-Q4 inventory build + net-30 lag (inventory-
    adjusted runway, not cash÷burn).
Test plan. | AC1 | manual (CPA) | A2X mapping ties. | AC2 | manual | inventory/COGS/deferral entries. | AC3 | manual | 13-wk models the Q4 build.
Security checklist. [VENTURE] scoped QBO/A2X access + MFA (§10) · read-only sync where possible · bank/payroll creds
  in vault, never echoed (§3, guardrail).
Secrets needed (names only). QBO_OAUTH (registry connection), A2X_API_KEY (vault). No values.
Dependencies. PR-1 (Shopify payouts), PR-6 (contribution actuals), PR-8 (wholesale A/R).
Human gate. [Tony + CPA] sign off the A2X mapping + valuation method before the first filed close. Rollback: sandbox the mapping first.
```

```
### PR-14 · Support stack: Gorgias/Airtable + KB + severity/SLA + the S1 fire/injury/recall lane   [Phase 3 · WS-G]

Problem. The e-com-native helpdesk that plugs into Shopify orders/subscriptions is Gorgias (not Intercom/Zendesk —
  SaaS-support-shaped); at sprint volume Airtable suffices. The #1 ticket is WISMO/breakage, and the S1 hard-escalate
  lane is a FIRE/INJURY/RECALL incident — the physical analog of a clinical hard-escalate (04 §6).
Scope. In: Gorgias (or Airtable) + Gmail-drafts + storefront chat; the KB (getting started / how refills work / candle
  care+safety / shipping+breakage / returns+warranty / billing); severity S1–S4 + SLAs; the escalation matrix with the
  fire/injury/recall lane. Out: auto-send (drafts-only on replies where policy requires review).
Data model + RLS policies (tool schema). Gorgias/Airtable ticket store; CS records; customer data stays in-system,
  never exported/pasted into drafts/logs.
Endpoints / edge functions (tool actions). Ticket triage → severity/SLA before a reply is drafted; theme-tagging
  (breakage/WISMO/scent/sub-friction/pricing/safety) → weekly rollup.
Acceptance criteria.
  - Given a fire/burn/injury/shattered-in-use report, When received, Then it is S1, routes to founder+legal+insurer,
    triggers a CPSC-report/recall assessment, and the model does NOT admit fault, promise a remedy, or discuss publicly.
  - Given a health/aromatherapy question, When received, Then the reply describes scent only and makes NO medical claim
    (guardrail), flagged to founder.
  - Given a WISMO/breakage ticket, When received, Then it is S2/S3 with the SLA and KB-first deflection.
Test plan. | AC1 | manual | safety lane routes + no-fault. | AC2 | manual | no medical claim. | AC3 | manual | SLA+KB.
Security checklist. [VENTURE] scoped helpdesk access + MFA (§10) · Gmail drafts-only (guardrail) · PII in-system (§5)
  · claims filter on every reply.
Secrets needed (names only). GORGIAS_API_KEY (vault, if used); Gmail MCP (live, drafts-only).
Dependencies. PR-1 (orders), PR-4 (subscriptions), PR-11 (returns/warranty terms).
Human gate. [Tony] owns S1 product-safety/recall decisions (a gate class the skill's list omits — §7 F-GATECLASS).
```

```
### PR-15 · Legal contract set + physical-product compliance regime execution   [Phase 3 · WS-H]   (drafts → counsel → signature gates)

Problem. §9's regime matrix omits EVERY regime that gates Emberline's first sale (04 §3d; 03 F13). The gating set —
  product-liability insurance, ASTM F2417/F2058, FPLA, IFRA, DOT/IATA hazmat, Prop 65, FTC Green Guides — had to be
  ADDED. The contract set is goods/retail (lease/supply/co-man/3PL/sale-of-goods/wholesale-MAP), not ToS/MSA/SOW.
Scope. In: draft + route (counsel-gated) the contract set — commercial lease (personal guaranty/use/fire-code),
  fragrance-house supply (IFRA-cert+SDS duty), vessel/raw-material purchase, co-manufacturer (post-validation; recall/
  indemnity/formula-IP), 3PL (breakage/loss liability + DPA), wholesale terms + MAP, hotel/STR amenity, contractor/
  ceramicist IP-assignment+work-for-hire, employment (at first hire); the physical-product regime register; the
  "Emberline" TM knockout → clearance opinion → filing (flag, never declare clear). Out: signing/filing autonomously.
Data model + RLS policies. contracts stored in Drive (scoped); the regime register in Airtable (each regime · gate ·
  status).
Endpoints / edge functions. none.
Acceptance criteria.
  - Given the fire-risk product, When approaching first sale, Then product-liability insurance is BOUND and the regime
    register shows PASS on ASTM F2417/F2058, FPLA, IFRA, Prop 65 (CA), Green Guides — before the sale (hard gate).
  - Given the diffuser line, When considered, Then it stays DEFERRED (DOT/IATA + CPSC/FHSA hazmat) — candles-first.
  - Given any contract, When ready, Then it is a DRAFT routed to the named ⚖ specialist; the human signs — never the agent.
Test plan. | AC1 | manual (⚖) | insurance+regime PASS pre-sale. | AC2 | manual | diffuser deferred. | AC3 | manual | draft→counsel→human-sign.
Security checklist. [VENTURE] contracts in scoped Drive (§10) · DPAs with PII vendors (§9) · signature/filing human-gated (irreversible).
Secrets needed (names only). none.
Dependencies. PR-11 (storefront legal surfaces), PR-3 (burn-test/IFRA records feed the regime register).
Human gate. [Tony + ⚖ counsel] on every contract signature/filing AND the compliance sign-off before first sale (feeds PR-12). Rollback: keep as drafts.
```

```
### PR-16 · Org build-out: pour/fulfillment operator hiring kit + RACI (safety gate) + on/offboarding   [Phase 3 · WS-I]

Problem. The org model has no physical-production/fulfillment function — pour/pack/inventory is hands-on hourly labor
  and the likely first hire (04 §4a). The RACI needs a NEW safety-gate class; on/offboarding needs physical-key recovery
  the digital checklist omits.
Scope. In: the coverage map + trigger-gated next-3-hires (pour/fulfillment operator; fractional bookkeeper; wholesale
  coordinator); the RACI incl. burn-test sign-off / batch record / MOQ purchase / pick-pack / recall (⛔ safety gate);
  the hiring kit (scorecard/JD/structured loop — drafts, no comp number/offer); on/offboarding incl. physical grants +
  key recovery. Out: any actual offer/hire (founder gate), fabricated candidate PII.
Data model + RLS policies. Airtable coverage/role/onboarding registers (scoped).
Endpoints / edge functions. none.
Acceptance criteria.
  - Given the sprint, When staffed, Then it is founder + AI + fractional/part-time (no FT hire clears the four tests
    yet), with the pour/fulfillment operator specced as the first trigger-gated hire.
  - Given onboarding, When a person starts, Then physical grants (studio key, storage, delivery authorization) are
    provisioned + registered alongside digital, MFA on.
  - Given offboarding, When someone departs, Then within 24h tokens are revoked, shared secrets rotated, AND physical
    keys/badge recovered + studio/storage access removed.
Test plan. | AC1 | manual | lean staffing + hire specced. | AC2 | manual | physical grants registered. | AC3 | manual | physical revoke in offboarding.
Security checklist. [VENTURE] least-privilege + MFA (§10) · physical-access governance (the dimension the digital matrix
  lacks) · IP-assignment on every contractor (esp. ceramicist) at onboarding.
Secrets needed (names only). none new.
Dependencies. PR-2 (access register), PR-3 (SOPs reference the ops base).
Human gate. [Tony] on any offer/comp number (drafts only). Rollback: n/a (planning).
```

```
### PR-17 · KPI board + weekly ops review wiring (provisional north-star)   [Phase 3 · WS-C]   (config-PR)

Problem. The measurement layer must feed weekly ops. metrics-dashboard was NOT run this run, so the north-star is
  derived provisionally from 01's finding that refill retention IS the model (04 §5c; §7 F-METRICS). The money strip
  is NOT MRR/NRR (SaaS) — it is retained refill revenue / repeat-purchase / contribution LTV / wholesale reorder.
Scope. In: a board (north-star = active refill subscribers, with its floor; ≤7 leading inputs — discovery→vessel,
  vessel→sub-start, refill retention m2/m3, delivered contribution/shipment + % below floor, wholesale reorder; a
  money strip below); cadences (daily ops-health, weekly board → weekly-ops-review, monthly money strip). Out: a
  warehouse/BI pipe (defer until ≥3 systems).
Data model + RLS policies (tool schema). data:* + dataviz over Shopify/Klaviyo/Airtable/QBO; Airtable experiment
  register. No custom DB.
Endpoints / edge functions. none.
Acceptance criteria.
  - Given the board, When built, Then the (provisional) north-star = active refill subscribers with its kill-floor,
    and the money strip is goods-metrics (no MRR/NRR).
  - Given the weekly cadence, When run, Then the board feeds /weekly-ops-review (SHIPPED / PIPELINE $ / KILLED / NEEDS TONY).
  - Given no vanity metric, When a primary is chosen, Then it is a conversion/retention metric, not pageviews/followers.
Test plan. | AC1 | manual | north-star+floor+goods strip. | AC2 | manual | feeds weekly review. | AC3 | manual | no vanity primary.
Security checklist. [VENTURE] consent-gated sources (§7) · no PII in the board (§5).
Secrets needed (names only). none new (reads existing scoped connections).
Dependencies. PR-6 (contribution), PR-9 (events), PR-8 (wholesale). PREREQUISITE: run metrics-dashboard to own the north-star.
Human gate. none. Rollback: board config reversible.
```

```
### PR-18 · (CONDITIONAL, post-validation) Ship the coded Delivered-Margin Ledger + Batched-Refill Guard   [Phase 3 · WS-A]

Problem. THE ONLY custom code the venture plausibly needs — and it ships ONLY if refill retention clears 01's day-90
  gate and the manual ledger (PR-6) stops scaling. It computes the one number the model is most sensitive to and
  prevents cadence drift to a ≈$0-contribution single refill (03 §2). Inherits starters/saas CLAUDE.md conventions.
Scope. In: a single function + datastore per 03 §2 — write a `shipment` row (with delivered_contribution) per fulfilled
  refill order; flag single-refill upcoming charges; weekly rollup. Out: consumer dashboards, churn prediction, anything
  diffuser/hazmat, replacing the subscription app's portal, a general BI tool.
Data model + RLS policies. tables `shipment` (shopify_order_id UNIQUE — idempotency; units, revenue_cents, cogs_cents,
  pickpack_cents, freight_cents, breakage_cents, fees_cents, delivered_contribution_cents, below_floor, raw_event jsonb,
  created_at) and `subscription_flag` (subscription_id, flag_type, created_at, resolved_at). **Ownership/RLS (the honest
  analog):** there is NO consumer `auth.uid()` — this is an INTERNAL ops surface with no public role. If on Supabase:
  **RLS ON, ZERO client policies, service-role reads/writes only** (the backbone's "system-managed table" pattern; SELECT-
  own dropped because there is no owning end-user). Migration `<ts>_create_ledger.sql`, append-only, forward-only; a
  refund writes a COMPENSATING row, never mutates. Integer cents only (no float money).
Endpoints / edge functions.
  - POST /webhooks/order-fulfilled — auth: Shopify webhook HMAC on the RAW body; **verify_jwt = false** (self-auth =
    Shopify HMAC signature — the backbone webhook exception); 200 {ok} / 401 bad-sig / 409→treated as success on dup.
    Idempotent on shopify_order_id.
  - GET /internal/rollup?from=&to= — auth: **internal service token only**; **verify_jwt = false** (self-auth = service
    token; no public route); 403 for any non-service caller.
  - nightly guard job — trigger: cron + shared secret (the backbone cron exception); scans upcoming subscription-app
    charges; writes single_refill flags.
Acceptance criteria (from 03 §2 — AC1–AC6, carried verbatim).
  - AC1: Given a fulfilled refill webhook, When processed, Then one shipment row with computed delivered_contribution +
    the raw event stored. — AC2: Given the same event twice, Then exactly one row (idempotent on order id). — AC3:
    Given a bad HMAC, Then 401 and no row. — AC4: Given a single-refill upcoming charge, When the nightly guard runs,
    Then a single_refill flag row. — AC5: Given contribution < $8, Then below_floor = true + counted in the rollup. —
    AC6: Given any non-service caller on /internal/rollup, Then denied (no public/consumer access).
Test plan (unit / e2e). | AC1 | unit | computeContribution(order)→cents. | AC2 | integration | dup→1 row (unique
  constraint). | AC3 | integration | tampered body→401, 0 rows. | AC4 | unit+integration | 1-unit charge→flag. | AC5 |
  unit | <$8→below_floor+counted. | AC6 | integration | anon/consumer→403. No Playwright layer — the "UI" is Airtable/
  a Shopify-app page (03 F11).
Security checklist. [STARTER]+[CONFIG] RLS on + policy-audit clean (system-managed pattern) · [STARTER] service-role
  server-only · [STARTER] webhook signature-verified + idempotent (Shopify HMAC = the Stripe-webhook analog) · [STARTER]
  verify_jwt explicit (false + self-auth) · [CONFIG] CORS locked · [VENTURE] input validated at boundary · [VENTURE]
  rate-limit the public webhook · [VENTURE] Sentry on this function · [VENTURE] no secret in VITE_* · [VENTURE] append-only.
Secrets needed (names only). SHOPIFY_ADMIN_API_TOKEN, SHOPIFY_WEBHOOK_SECRET (HMAC), SUBSCRIPTION_APP_API_KEY,
  LEDGER_SERVICE_TOKEN, SENTRY_DSN (server) — all via supabase secrets/host env, NEVER a value. Public: none required.
Dependencies. PR-6 (proves the manual model first), PR-1/PR-4 (Shopify + subscription events) + the day-90 retention gate.
Human gate. [Tony] — build authorized ONLY after retention clears the 01 day-90 gate (overbuild guard). If it ships:
  prod migration is a gated deploy with rollback = feature-flag off → revert to the PR-6 spreadsheet (nothing consumer-facing to break).
```

---

## 4. Coverage matrix — the proof nothing is dropped

### 4a. Acceptance criteria → PR
The only *formal* product-spec ACs are the Delivered-Margin Ledger's (03 §2). Bought-surface config-PRs carry their own ACs (asserting the wired result) mapped to themselves.
| Acceptance criterion | Source | PR | Note |
|---|---|---|---|
| AC1 contribution computed on fulfillment | 03 §2 | **PR-18** (coded) / **PR-6** (manual, interim) | sprint satisfies manually |
| AC2 idempotent on order id | 03 §2 | PR-18 | unique constraint |
| AC3 bad HMAC → 401 | 03 §2 | PR-18 | webhook self-auth |
| AC4 single-refill flagged | 03 §2 | PR-18 / PR-4 (surfaced) | the margin guard |
| AC5 below-$8-floor marked + counted | 03 §2 | PR-18 / PR-6 | the kill-gate metric |
| AC6 no non-service access to ledger | 03 §2 | PR-18 | service-token boundary |
| Config-PR ACs (store/theme/label; subscription=batched; Klaviyo drafts; 3PL label+rate; CRM won=shipped+reorder; consent-gated events; PDP claims/quiz; legal+auto-renew; go-live checklist; A2X ties; S1 safety lane; regime PASS; physical on/offboard; goods money strip) | 02/03/04 | PR-1,4,5,7,8,9,10,11,12,13,14,15,16,17 | each asserts the verified wired result |

### 4b. Engineering-backbone control → PR / WS / gate (with honest N/A dispositions)
The minimum bar was written for a Supabase/React/Stripe SaaS. For a buy-not-build venture MOST hard-core controls are **N/A (reason)** — the matrix records that rather than fabricating work (§7 F-MATRIX).
| Backbone minimum-bar control | Disposition here |
|---|---|
| Prod separate Supabase + Stripe live acct | **N/A** — no custom DB; Shopify Payments is the processor (§7 F-GATE). PR-18 only, if it ships. |
| Every secret in env/vault; secret-guard | **PR-2** (vault + register) + **PR-18** repo (secret-guard) — most secrets live in vendor connections, not `.env` (§7 F-SECRETS) |
| No secret in VITE_* / service-role client-safe | **PR-18** only (the sole custom code) |
| RLS on every user-owned table + policy-audit | **N/A** at launch (no custom Postgres). **PR-18**: system-managed pattern (RLS on, zero client policies, service-role only) |
| Roles typed + server-side, no client authority | **N/A** — no in-app roles / no consumer auth. **Reframed → PR-2** (tool-access RBAC) |
| verify_jwt explicit per function | **PR-18 only** (webhook false+HMAC; rollup false+service-token; cron shared-secret) |
| CORS locked | **PR-18 only** |
| Input validated + public endpoints rate-limited | **PR-18 only** (the one webhook) |
| Payment/webhook signature-verified + idempotent | Payment path = **platform (Shopify, SAQ-A)**. Our webhook = **PR-18** (Shopify HMAC + idempotent) |
| PII classified + minimized; none in logs/analytics | **PR-11** (classify; PII lives in Shopify/Klaviyo) + **PR-9** (no PII in events) |
| Backups + a TESTED restore (DR) | **N/A** — vendor-held data (no DB to restore). **Reframed → physical reliability**: inventory/supply reliability (**PR-3** reorder + WS-J single-source risk) (§7 F-DR) |
| Error tracking (Sentry) + audit log | Sentry = **PR-18 only**. Audit log **reframed → PR-2** access register + **PR-8** deal-desk trail + **PR-3** batch/lot records |
| Analytics consent-gated | **PR-9** |
| CI green + branch-protected main | **N/A** until PR-18. **Reframed → PR-12** theme-QA + test-order + label-compliance checklist (§7 F-CI) |
| Written rollback path per deploy | per-PR "Human gate/Rollback" lines; **PR-12** go-live rollback = refund + delist |
| Applicable compliance regime decided + in place | **WS-H / PR-11 + PR-15 + PR-12** — the **physical-product regime ADDED** because §9 omits it (§7 F-REGIME) |
| Access register + MFA + no shared logins | **PR-2** (incl. physical-access rows) |

### 4c. Domain → workstream / disposition (all 15 domains — the completeness pass)
| # | Domain (15-map) | Disposition | Where it lands |
|---|---|---|---|
| 1 | Strategy & Concept | **CONSUMED** (01) | economics gate → WS-E; prices/kill-gates carried |
| 2 | Product & Build | **CONSUMED** (03 §2) | WS-A — one deferred surface (PR-18); buy-not-build verdict honored |
| 3 | Engineering & Infra backbone | **CONSUMED, largely N/A/reframed** (03 §3) | WS-B — starter conventions apply to PR-18 only |
| 4 | Security, Roles & Governance | **CONSUMED, reframed** (03 §3; 04 §4c) | WS-B — §10 access + §3 secrets + §5/§9 privacy + §7 consent transfer; §2 hard-core N/A |
| 5 | Brand & Design | **CONSUMED** (02 §2) | PR-1 tokens + WS-F; physical label/dieline spec added |
| 6 | Marketing / GTM | **CONSUMED** (02 §3) | WS-F |
| 7 | Content & Social | **CONSUMED** (02 §4, §5) | WS-F — content-cadence covered WITHIN 02 §4.3 (not a separate artifact — §7 F-CADENCE) |
| 8 | Sales & CRM | **CONSUMED** (04 §2) | WS-D — wholesale only; DTC self-serve excluded from CRM |
| 9 | Finance & Accounting | **CONSUMED** (04 §1) | WS-E — inventory/COGS/cash-conversion added |
| 10 | Legal, Entity & Compliance | **CONSUMED** (04 §3) | WS-H — goods/retail set + physical-product regime added |
| 11 | Operations, Org & Roles | **CONSUMED** (04 §4) | WS-I — physical-production function + physical-access added |
| 12 | Customer Support & Success | **CONSUMED** (04 §6) | WS-G — breakage/WISMO + S1 fire/injury/recall lane |
| 13 | Data & Analytics | **CONSUMED (analytics-stack); PREREQUISITE (metrics-dashboard)** (04 §5) | WS-C — north-star provisional until metrics-dashboard runs |
| 14 | Tool & MCP Stack | **CONSUMED** (03 §4) | all WS — physical-goods shape; product-critical tools have no live MCP |
| 15 | Fable-Ready Build Spec | **THIS DOCUMENT** | — |
| + | metrics-dashboard (within 13) | **PREREQUISITE — run it** | WS-C / PR-17 (north-star derived provisionally from 01) |
| + | paid-ads (within 6) | **N/A at sprint** | locked until post-proof; $0 paid media (01/02 gate) |
| + | Physical Operations & Supply Chain | **ADDED — WS-J** | no domain/workstream existed for it (§7 F-WSJ) |

---

## 5. Consolidated lists

### 5a. Human gates (one list — where Tony's attention hits the irreversible points)
1. **Written sign-off on the hard-capped validation budget** — this venture cannot be tested at literal $0 (01 §5 cond. 1). — PR-1 onward.
2. **Account creation / app connect** (Shopify, subscription app, Klaviyo, Faire, 3PL/ShipStation, GA4, QBO/A2X) — each [Tony], least-privilege, MFA. — PR-1,4,5,7,9,13.
3. **Ceramic MOQ / inventory purchase** (8–12 wk lead, dead cash if wrong) — [Tony] spend gate + rollback. — critical path (no PR).
4. **Product-safety / burn-test sign-off** (ASTM F2417) — a NEW gate class; no SKU sells without it. — PR-3 / PR-12.
5. **Product-liability insurance bound** — before first sale. — PR-12/PR-15.
6. **GO-LIVE on Shopify** — the physical go-live gate (PR-12): insurance + burn-test + labeling + no-claims + delivered-margin + privacy + auto-renew all cleared.
7. **Any live customer send** (Klaviyo flow, SMS, wholesale sequence) — drafts until approved. — PR-5,8,14.
8. **Any published surface** (storefront live, PDP, ad, social post, label artwork) — draft until approved. — PR-10, WS-F.
9. **Contract signature / filing** (lease, supply, co-man, 3PL, wholesale, IP, TM) — human signs after ⚖ counsel review. — PR-15.
10. **Compliance sign-off** (physical-product regime + no-medical-claims + Green Guides + Prop 65) — before first sale. — PR-12/PR-15.
11. **Prod migration** for PR-18 (if it ships) — gated deploy + rollback to the spreadsheet. — PR-18.
12. **Product-safety / recall action** (CPSC assessment) — [Tony]+legal+insurer; never public/autonomous. — PR-14.
13. **Any offer / comp number** for a hire — [Tony]. — PR-16.

### 5b. Secrets register (names only · where set · which PR — NEVER a value)
| Secret (name) | Where set | PR |
|---|---|---|
| SHOPIFY_ADMIN_API_TOKEN | vault + Shopify app connection | PR-1, PR-18 |
| SHOPIFY_WEBHOOK_SECRET | supabase secrets / host env | PR-18 |
| SUBSCRIPTION_APP_API_KEY (Skio/Recharge) | vault + app connection | PR-4, PR-18 |
| KLAVIYO_API_KEY | vault + registry connection | PR-5 |
| THREEPL_API_KEY · SHIPSTATION_API_KEY | vault | PR-7 |
| AIRTABLE_PAT | vault (MCP scoped) | PR-2,3,6,8 |
| QUIZ_APP_API_KEY | vault + app connection | PR-10 |
| QBO_OAUTH · A2X_API_KEY | registry connection / vault | PR-13 |
| GORGIAS_API_KEY | vault (if used) | PR-14 |
| GA4_MEASUREMENT_ID | **public ingest** (client) | PR-9 |
| LEDGER_SERVICE_TOKEN · SENTRY_DSN (server) | supabase secrets / host env | PR-18 |
| FAIRE / bank (Mercury) / cards (Ramp) / Gusto | vault + vendor connection | WS-D/E, at trigger |

*Note: unlike a SaaS, ~all of these live in each vendor's own connection settings or a password vault — NOT a repo `.env` — because there is no app repo except PR-18's (§7 F-SECRETS). Register records access levels, never keys.*

### 5c. Connect-these-tools (tool · MCP status here · trigger · how)
| Tool | Status in this session | Trigger | How | OS can operate it? |
|---|---|---|---|---|
| **Shopify** (+ subscription app) | **No live MCP** (not in stack table) | Phase 0 | [Tony] account + scoped custom-app token; registry check | **No — human-operated infra** (§7 F-CONNECT) |
| **Klaviyo** | **REGISTRY** | Phase 1 | SearchMcpRegistry → OAuth; drafts-only | Partial (draft flows) |
| **Faire** + Shopify B2B | **No live MCP** | wholesale | [Tony] account | No |
| **3PL + ShipStation** | **No live MCP** | Phase 1 | [Tony] account + scoped key | No |
| **GA4** | **DIRECT** | launch | instrument in-app, consent-gated | Read via export |
| **QBO + A2X** | **REGISTRY** (QBO) / direct (A2X) | first revenue | SearchMcpRegistry → OAuth | Partial (read) |
| **Airtable** | **MCP LIVE** | now | live — the ops/CRM/inventory/compliance SoR | **Yes (highest-leverage)** |
| **Google Drive · Gmail · Canva · Lucid** | **MCP LIVE** (Gmail drafts-only) | now | live | Yes (drafts/creative/docs) |
| **Gorgias** | **No live MCP** | ticket volume | [Tony] account (Airtable interim) | No |
| **PostHog** | **REGISTRY** | only if storefront funnels outgrow GA4 | SearchMcpRegistry | Partial |
| **Sentry** | **REGISTRY** | only if PR-18 ships | SearchMcpRegistry + SDK | For PR-18 |

**Honest ceiling:** the tools that ARE Emberline's product (Shopify, subscription app, Faire, 3PL) have **no live MCP** — the OS drafts configs/copy/flows/schemas but cannot touch the real storefront or fulfillment. Live + operable today: **Airtable, Drive, Canva, Gmail (drafts), Lucid.**

### 5d. Compliance regime + its controls
GDPR/CCPA is the ONLY regime that transfers from §9; every first-sale-gating regime below was **ADDED** because §9's matrix omits physical-product regimes (03 F13; 04 §3d — the biggest compliance finding).
| Regime | Control | Gate | WS/PR |
|---|---|---|---|
| **Product-liability insurance** | bound before first sale (fire-risk) | **before first sale** | PR-12/PR-15 |
| **ASTM F2417 burn testing** | every scent×vessel×wick logged PASS before sellable | before that SKU sells | PR-3/PR-12 |
| **ASTM F2058 safety warnings** | mandatory warning on every candle unit | on every unit | PR-1/PR-10 |
| **FDA cosmetic / FPLA labeling** | identity·net-qty·maker; sensory scent language only | before first sale | PR-1/PR-10 |
| **IFRA fragrance limits** | per-material limits; IFRA cert + SDS on file | before formulation final | PR-3 |
| **DOT/IATA + CPSC/FHSA hazmat** | limited-qty shipping + hazard labeling | **diffuser DEFERRED** | PR-15 (deferred) |
| **CA Prop 65** | warning or reformulation | before selling into CA | PR-12/PR-15 |
| **FTC Green Guides** | substantiate any clean/natural/refill/eco claim, or don't say it | at copy/label review | PR-1/PR-10/WS-F |
| **CA ARL + FTC Click-to-Cancel** | auto-renew disclosure + affirmative consent + easy cancel | at subscription launch | PR-4/PR-11 |
| **GDPR/CCPA** *(transfers from §9)* | privacy·consent·DSAR·DPAs·minimization | before collecting PII | PR-11 |
| **PCI-DSS (SAQ-A)** | PAN never touches us — **platform-owned by Shopify Payments** | attestation on file | PR-12 |
| **No medical/aromatherapy claims (GUARDRAIL)** | scent sensorially only, everywhere | every copy/label/reply | all WS |

---

## 6. Definition of done (whole brief)
The brief is complete when:
- Every workstream DoD (A–J) is met and verified on its tool / in one real refunded order (the physical "verified in prod").
- The coverage matrix is fully mapped: every AC → a PR (4a); every backbone control → a PR/WS/**or an honest N/A-with-reason** (4b); every one of the 15 domains → a workstream/disposition (4c).
- The **physical go-live gate (PR-12)** is cleared: insurance bound · burn-test PASS on every live SKU · FPLA+F2058 labeling · no medical claims · delivered contribution > $8/shipment · GDPR/CCPA + auto-renew live · MFA/access register done.
- All human gates (5a) are respected — nothing deployed, sent, published, spent, committed, or signed without Tony's approval + a rollback path.
- CI (for PR-18 only, if it ships) is green; the backbone minimum bar is satisfied **where applicable** and explicitly N/A-with-reason where buy-not-build makes it so.
- **The overbuild guard holds: no custom app was built to look substantial.** The sprint runs on configured tools + one Airtable ops base + a manual margin ledger. The single code surface (PR-18) ships only if retention clears the day-90 gate.

---

## 7. Skill-fit / FRICTION appendix (hardening — where the capstone strained)
Where the **fable-brief skill/method/output-contract** itself forced a SaaS shape, failed to enumerate a domain, or would make Fable guess for a physical, buy-not-build venture. (Findings for the hardening pass; the full ranked list is returned to the orchestrator.)

- **F-WSJ — The 9-workstream taxonomy has NO physical-operations workstream.** WS-A–I cover product/security/data/CRM/finance/GTM/support/legal/org; nothing holds manufacturing, burn-testing, batch/lot/IFRA control, breakage-aware pick-pack, 3PL, or inventory/reorder — Emberline's operational SPINE. Had to ADD **WS-J**. The method's "WS-A/WS-B are the critical path" is also inverted here (the path is WS-J+WS-H+WS-F).
- **F-TEMPLATE — The canonical PR template is Supabase-shaped.** "Data model + RLS policies" and "Endpoints/edge functions + verify_jwt" are mandatory fields; ~17 of 18 PRs are config-PRs with neither. The config-PR substitution is a parenthetical, not a first-class template — Fable is pushed to write "N/A" on the two most prominent fields of nearly every PR.
- **F-GATE — The go-live gate is "switch Stripe to live keys."** Emberline takes money via Shopify Payments (no Stripe integration; PCI=platform SAQ-A). The real gate is PHYSICAL (insurance/burn-test/labeling/claims/delivered-margin). A builder trusting the method would hunt a Stripe test→live cutover that doesn't exist and MISS the launch-blocking gate.
- **F-CP — "Critical path to first dollar" assumes software unblocks revenue.** The longest pole is the ceramic MOQ lead time (8–12 wk) + insurance binding + burn-test pass — a procurement + compliance timeline, none of it a PR. The method's software DAG would declare "first dollar unblocked" on PR completion while the true blocker is untouched.
- **F-REGIME — "Compliance regime + controls" inherits §9, which omits EVERY physical-product regime.** §9 has only GDPR/CCPA·HIPAA·LegitScript·PCI·SOC2 — none of product-liability insurance, ASTM F2417/F2058, FPLA, IFRA, DOT/IATA hazmat, Prop 65, or Green Guides. The capstone's designated compliance source cannot express the regimes that gate the FIRST SALE; had to import them from 03/04.
- **F-MATRIX — Coverage sub-table 2 has no "N/A (reason)" disposition for a control.** The method says "every minimum-bar box maps to a PR or a gate" and "leaves no row unmapped." For buy-not-build, MOST controls (RLS, verify_jwt, anon/service split, CORS, rate-limit, backups/restore-drill, branch protection, CI) are genuinely N/A. The matrix format pushes toward fabricating work; I added an N/A-with-reason column (the completeness protocol has this for domains but the control matrix does not).
- **F-SECRETS — The secrets register assumes app env vars.** Template examples are STRIPE_SECRET_KEY/SERVICE_ROLE/VITE_*. ~All Emberline secrets are tool-account tokens living in each vendor's OWN connection settings or a password vault — not `.env`/`supabase secrets`/host. Only PR-18 has true env-var secrets. The "where set" column has no "vendor connection / vault" value.
- **F-CONNECT — "Connect-these-tools" conflates "connect an MCP the OS operates" with "a human sets up infra the OS never touches."** Shopify, the subscription app, Faire, and the 3PL — the tools that ARE the product — have no live MCP and several aren't in the registry. The list has no status for "human-operated infrastructure; the OS cannot operate it," which is the honest tag for the venture's core tools.
- **F-DoD — The whole-brief DoD is code-shaped ("CI green, verified in prod").** With no repo until PR-18, "CI green" is vacuous and "verified in prod" needs redefining as "one real refunded order on the live store." Applied literally the DoD is unmeetable; I redefined it per 03's physical variant.
- **F-GATECLASS — The human-gate taxonomy has no "physical/procurement/safety" gate class.** The template names deploy·payments-go-live·prod-migration·spend·compliance-sign-off. Emberline's dominant irreversible gates are a ceramic MOQ commitment, a lease with personal guaranty, a co-manufacturer contract, and a product-safety/recall decision — 04 §4b explicitly flags "safety gate" as a NEW class the money/commit/send set doesn't name.
- **F-DR — "Backups + a tested restore (DR)" has no analog.** Vendor-held data (nothing to restore). The real reliability risk is PHYSICAL — inventory stock-outs, an 8–12-wk ceramic supplier, in-transit breakage, Q4 fulfillment capacity. The backbone (and thus the brief's WS-B DoD) has no concept of supply/fulfillment reliability; reframed onto WS-J.
- **F-CI — "CI green + branch-protected main" is the launch quality gate.** For a config-first venture there is nothing to lint until PR-18; the real quality gate is theme-QA + a test order + a label/compliance check (PR-12), which the method's DoD has no slot for.
- **F-SECURITY-PER-PR — "Security is per-PR (RLS + verify_jwt) by default" trains rubber-stamping.** For ~17 config-PRs the honest per-PR security surface is tool-account scope + drafts-only + DPA + claims-review + PII-stays-in-vendor — NOT RLS/verify_jwt. Forcing the SaaS checklist onto every PR makes "N/A" the reflex answer instead of surfacing the real vendor-config security surface.
- **F-CADENCE — content-cadence enumeration.** The SKILL lists "content-engine / content-cadence / social-media" as WS-F inputs; content-cadence was NOT produced as a separate artifact (02 folds cadence into §4.3). The composition table's only options are CONSUMED or PREREQUISITE — no "covered-within-a-sibling-artifact," so a strict reading falsely flags content-cadence as a missing prerequisite (the domain-7 completeness hole the architecture claims closed re-opens for a composed GTM artifact).
- **F-METRICS — The WS-C DoD assumes a metrics-dashboard KPI taxonomy that was never run.** analytics-stack (04 §5) flags the broken dependency; the north-star is provisional. PREREQUISITE handles it, but the method doesn't note that a workstream DoD ("KPI taxonomy instrumented") can be BLOCKED by a PREREQUISITE domain — the brief ships with a workstream whose DoD is not fully attainable until an upstream skill runs.
- **F-CTX — Venture-context path.** Load-first #2 expects `ventures/<slug>/venture-context.md`; this venture lives at `undefined/NN-*.md` (harness slug-substitution bug). The skill has no fallback for "context is a set of numbered artifacts, not a single venture-context file," so Fable could hunt for a `ventures/emberline/` path that doesn't exist.

**Systemic pattern (consistent with 03 §6 + 04 §8).** The capstone inherits the whole OS's root assumption: **"build" = stand up and secure a custom Supabase/React/Stripe app.** Its taxonomy, PR template, phase model, go-live gate, coverage matrix, DoD, secrets register, connect-list, and compliance source are all shaped for that. For a physical, buy-not-build venture the real deliverable is **config-PRs + a physical-ops workstream + a physical-product compliance regime + a physical go-live gate + human/procurement gates** — which the skill produces only because I added the shapes it lacks. **Highest-value fixes:** (1) add **WS-J Physical Operations & Supply Chain** to the taxonomy; (2) give the PR template a first-class **config-PR** variant (tool schema / actions / manual-QA-acceptance) alongside the code variant; (3) replace the hard-coded "Stripe live-keys" go-live gate with a **regime-driven go-live gate** that reads the compliance set from the venture; (4) add an **N/A-with-reason** disposition to the control-coverage matrix and a **physical/procurement/safety** gate class to the human-gate taxonomy; (5) point the compliance list at a regime source that includes **physical-product** regimes, not only §9's five.

---
*End of master build brief. Drafts/spec only — nothing herein deploys, sends, publishes, spends, commits, or signs without Tony's explicit approval and a stated rollback path. Sequenced behind Executive Edge. Secrets names-only. No medical/aromatherapy claims. LYV firewall in force.*
