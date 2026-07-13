---
name: Lustre — Master Build Brief (Fable capstone)
slug: lustre
artifact: 05-fable-brief
stage: concept → concierge liquidity test (pre-build); P1 platform CONDITIONAL on the ~Aug-31 liquidity gate
composes: fable-brief (domain 15) — consumes 00-venture-idea · 01-concept · 02-gtm · 03-build-eng · 04-ops + docs/engineering-backbone.md + starters/saas/CLAUDE.md + docs/tool-mcp-stack.md
loads-after: founder-profile/PROFILE.md · founder-profile/guardrails.md · 00 · 01 · 02 · 03 · 04
date: 2026-07-13
status: v0.1 — PRESSURE-TEST. Drafts-only, $0 spend, secrets names-only. This is a PLAN Fable executes against human gates — nothing here deploys, sends, publishes, spends, provisions, files, signs, or charges without Tony's explicit approval. All prices/economics illustrative and INHERITED from 01/03/04, not re-derived.
note-on-path: The task named the output `undefined/05-fable-brief.md`. That is an un-interpolated template variable; the venture brief requires "no stray undefined/ directory." Written to the run directory beside 00–04 per the NN- convention and the downstream-builder intent — the same correction 01, 02, 03, and 04 each logged.
loads-first-correction: The orchestration frames Fable's default as "stand up the venture from starters/saas." Lustre is ~85% physical ops + trust coordination and ~15% software, and the 15% is BOUGHT, not built. The single correct near-term build is a concierge/manual-ops assembly with NO app, NO repo, NO Supabase. A custom platform is REJECTED until a metro is liquid and a named capability is proven missing. Every place the capstone method pushed a software/SaaS shape is logged in the FRICTION appendix (§7) and returned to the orchestrator.
---

# Lustre — Master Build Brief (the Fable capstone)

**The one load-bearing fact that governs every line below:** Lustre's product is *a clean car in a driveway*, not a codebase. The business is gated by **two-sided liquidity** (matched supply ↔ demand in a zip code) and by **physical-world trust** (vetting, insurance, dispatch, damage claims) — not by software. The verdict from `01-concept §5` is **CONDITIONAL GO — fund the concierge liquidity test, not the build.** So the primary build deliverable is **the leanest assembly that can take one real (test-mode) two-sided dollar with no app**, plus a **CONDITIONAL** light-platform spec that stays on the shelf until liquidity is proven at the ~2026-08-31 gate.

This brief is authored to the `/fable-brief` output contract (preamble → workstream map → sequencing → PR-by-PR plan → coverage matrix → consolidated lists → definition of done). It carries every upstream decision resolved, so Fable **executes, never re-derives**. Where the capstone method itself assumed a software venture, the brief re-points it and logs the friction — it does not invent a decision, and it does not let a whole business function get skipped the way vibe-coding skips them.

---

## 0. Preamble — how Fable executes this

### 0.1 Input gate (blocking) — result: **PASS, proceed**
- **Finished `/product-spec`?** YES — `03-build-eng §3` carries the CONDITIONAL P1 product-spec (problem, user stories for all four roles, Given/When/Then AC, config schema, multi-party data model, edge cases, manual-QA capstone, non-goals) **and** the P0 SOP-level spec whose acceptance is a manual QA.
- **Closed economics?** YES — `01-concept §3–4` closes the take-rate math (~$28–31 net/Full Detail; Maintenance subscriber payback 1–2 mo) and names the binding gate honestly (**liquidity**, not per-job margin).
- Neither STOP condition fires. The brief ships.

### 0.2 Operating contract (Fable inherits, does not weaken)
- **Definition of done = shipped + verified in the real environment** (`starters/saas/CLAUDE.md §1`). For a config/ops-PR, "done" = the tool is wired **and** a real (test-mode) transaction/record was observed end-to-end — not "configured, should work."
- **Gates are never autonomous.** Deploy, live payments, production migration, spend, contract signature, detailer deactivation, damage-claim payout, and every ⚖/CPA judgment are drafted with a rollback path and **human-approved by Tony** (`guardrails.md`).
- **Secrets are names only.** No key, token, or value ever appears in this brief, a commit, a log, or chat. P0 keys live in the vendor dashboard + (for any automation) a secrets manager; the P1 thin slice adds the `supabase secrets` / host-env pattern. The `VITE_*` public boundary is sacred (`CLAUDE.md §4`).
- **Drafts only; $0 until proven.** Gmail never auto-sends; nothing publishes/spends without approval. This venture cannot be tested at literal $0 — FCRA checks + insurance verification + a CPA/attorney half-day cost a few hundred dollars — so **any** spend is a Tony gate.
- **Claims discipline in force on every customer-facing line:** FTC Green Guides (no "eco/green/waterless/non-toxic" — low-water is a *factual operating standard* only); "vetted/insured/guaranteed" each literally + currently true; no ceramic-durability overclaim; ROSCA click-to-cancel on every Maintenance CTA; 1099 independence never contradicted in supply copy or branded assets. No medical claims (N/A surface, same discipline applies).

### 0.3 Inputs consumed (with dates/versions)
`00-venture-idea` (2026-07-13) · `01-concept` (stress-test/market-scan/offer-architect/opportunity-size/go-no-go, 07-13) · `02-gtm` (positioning/brand-design tokens/gtm-marketing/content-engine/social-media, 07-13) · `03-build-eng` (venture-bootstrap/product-spec/backbone-§9-read/tool-mcp-stack, 07-13) · `04-ops` (finance-ops/sales-crm/legal-pack/org-roles/analytics-stack/support-success, 07-13) · `docs/engineering-backbone.md` v1 (minimum bar + §1–§10 + §9 regime matrix) · `starters/saas/CLAUDE.md` + `README` (inherited controls) · `docs/tool-mcp-stack.md` v0.1 (availability tags + connect-these triggers). **The completeness disposition of all 15 domains is in §4.1** — none left unaccounted.

### 0.4 The execute-don't-re-derive rule (+ the one override)
Every choice — build shape (concierge → conditional hybrid; custom REJECTED), prices, take-rate (22/78), tools, tokens, roles, compliance regime — is already made upstream and carried here resolved. **A field that would force Fable to choose is a defect** → it is sent back upstream or named as a prerequisite. **The single override on the capstone template:** this is a physical-ops marketplace, so **WS-A (Product/App) is thin/absent, the critical path is physical (supply→vet→match→verified payout→liquidity→compliance), and the go-live gate is the services minimum bar (insurance/licensure/TPT/compliance), NOT a Stripe live-key swap.** Fable follows the physical critical path, not the software one.

---

## 1. Workstream map — the full stand-up

Nine workstreams are *considered*; an unused one is marked N/A, never forgotten. **WS-A is deliberately thin** (mostly-off-the-shelf business, no app in P0). **WS-J is ADDED** because the nine-workstream taxonomy has **no first-class Physical-Ops / Trust-&-Safety workstream** — and for Lustre that is the largest, most expensive, most risk-bearing part of the machine. Leaving it smeared across "ops/support" would be exactly the "whole function gets missed" failure this capstone exists to prevent (see FRICTION #2).

| WS | Goal | Source output(s) | Type | Executor | Definition of done |
|---|---|---|---|---|---|
| **A · Product / App** *(THIN)* | P0: a branded landing page + a configured booking surface + an Airtable ops SOR — **no repo, no code**. P1 (conditional): off-the-shelf FSM + a thin custom matching/guarantee slice **only if** a real gap forces it. | 03 §2–3, 02 §2.3 tokens | config-PRs (P0); code PR (P1, gated) | Cowork+MCP (P0); Fable (P1 slice) | P0: one real test-mode two-sided job runs through the configured stack. P1: the thin slice ships with multi-party RLS + verified Connect webhook + CI green. |
| **B · Security & Governance backbone** | P0: **vendor-config** security (least-privilege, MFA, no shared logins, DPAs, PII classification) — the software core (RLS/`verify_jwt`/CI/Sentry) is **N/A until the P1 slice**. | backbone §2/§3/§5/§10 (vendor-config posture), 03 §4, 04 §4c | config (P0); code (P1 slice) | human (access) + Fable (P1 code) | P0: access register current, MFA everywhere, DPAs signed, PII classes tagged. P1: policy-audit clean on the slice's tables; minimum-bar software boxes green for the slice. |
| **C · Data & Analytics** | North-star = **liquidity** (coverage % + matched jobs/wk at acceptable time-to-match) — not MRR, not WAPA. P0: the "event stream" **is** the Airtable base + Stripe Connect; PostHog only at P1. | 04 §5, 02 §3.9, tool-mcp-stack | config (P0); instrument (P1) | Cowork+MCP; Fable (P1 SDK) | Liquidity north-star + two-sided taxonomy computed weekly; PII firewall holds (UUIDs/bands only). |
| **D · CRM & Sales** *(TWO pipelines)* | **Supply pipeline** (detailer recruit→vet→trial→active — the binding constraint; skill has no native slot) **+ B2B fleet/dealer** pipeline (classic considered sale). Consumer demand is a **booking funnel (WS-C/F), NOT a CRM deal**. | 04 §2, 02 §3.2 | tool-config (Airtable + MCP) | Cowork + Airtable MCP; Tony (B2B relationships) | Supply base tracks liquidity + 2nd/3rd-job retention; B2B base forecasts contracted GMV with a take-rate-floor gate. |
| **E · Finance ops** | **Take-rate ledger** (GMV × take + **payouts-payable liability** + **guarantee reserve** + deferred-rev on Maintenance) — NOT a goods P&L, NOT a SaaS MRR setup. Stripe Connect (split/payout/1099); AZ TPT CPA-gated. | 04 §1, 01 §3–4 | config (Connect/QBO) + code (P1 billing) | Cowork+MCP + Fable (P1); CPA (gates) | Test-mode charge → payout-on-verified nets 22%; payout-float TWCF + reserve modeled; COA live; principal-vs-agent + TPT confirmed by CPA. |
| **F · GTM / Marketing / Content & Social** *(TWO motions)* | Supply-seeding cold-start **+** demand local-search/concierge. Before/after anchor; **GBP + Nextdoor + IG/FB**; local-SEO city/service pages; two-sided SMS/email lifecycle; B2B outbound. **$0 paid until liquidity.** | 02 §1–5, 03 §2 | code (pages) + config (channels) | Cowork+MCP; Tony (approve/relationships) | Landing + booking live; GBP + 2-wk social calendar drafted; two motions running; nothing published/spent without approval. |
| **G · Support & Success** *(TWO populations + a claims lane)* | Customers **and** detailers; hard lane = **vehicle damage/theft/property/safety** backed by the guarantee (NOT a clinical lane). Airtable at concierge scale. | 04 §6 | tool-config (Airtable/Twilio/Gmail) | Cowork + Tony (S1 gate) | S1–S4 triage live; damage/theft → guarantee+insurance+Tony; model never admits fault or promises a payout amount. |
| **H · Legal & Compliance** | The **marketplace contract set** (Customer ToS · **IC Detailer Agreement [marquee]** · guarantee terms · Connect+1099 terms · Privacy+DPAs · B2B MSA/SOW · FCRA set · IP/TM) + the six live regimes. Attorney/CPA-gated. | 04 §3, 03 §4, backbone §9 | docs + config + **gates** | human-gated (⚖/CPA) + Cowork (drafts) | Every contract drafted + reviewed by named specialist; every regime control placed; signature/filing human-gated. |
| **I · Org & Access** | **Marketplace-native functions** (supply/network ops · dispatch/matching · trust&safety/claims) get owners; access register + least-privilege (**Stripe Connect = highest blast radius; supply-side PII/background reports = most sensitive class**). In-app RBAC N/A in P0 (no app). | 04 §4 | register + RACI (P0); in-app roles (P1) | Fable (P1 roles) + human (grants) | RACI has exactly one Accountable/process; access register current; zero FT hires clear the four-tests today. |
| **J · Physical Ops & Trust/Safety** *(ADDED — no slot in the taxonomy)* | The **real product**: supply onboarding/vetting SOP, dispatch & hand-matching, arrival-window + per-tier checklist + before/after photo evidence, **damage-claim adjudication + guarantee-reserve draw**, the **low-water / no-storm-drain (Clean Water Act) SOP**, deactivation policy, weather (monsoon/heat) ops. | 00 §Operational surface, 03 §1, 04 §4/§6 | SOP + runbook + **human gates** | Ops core (SOP-run) + Tony (trust gates) | Each SOP written + a real job run through it (vetting → match → verified → paid → photos logged); low-water standard documented; claims runbook live. |

*WS-A + WS-B are the critical path in a software venture; **for Lustre the critical path is WS-J + WS-D-supply + WS-H** (see §2.3). WS-C/E/F/G/I run in parallel once the concierge foundation lands.*

---

## 2. Sequencing & parallelization

### 2.1 Phase plan (mapped onto the venture's own P0/P1/P2, per 03 §0)
- **Phase 0 — Concierge foundation (NOW · partly single-threaded).** Stand up the ops stack: Airtable SOR → Stripe Connect test-mode → booking surface + landing page → Twilio/Gmail comms → FCRA + insurance-verification workflow → vendor-config security + access register + DPAs. **All config/ops-PRs. No repo, no Supabase, no Vercel, no code. DoD:** the stack can accept a booking, hold funds, and hold records.
- **Phase 1 — Concierge core value + first two-sided dollar + operate (∥).** The manual-match loop and the **one-real-test-mode-two-sided-job** acceptance; then the operate layer runs *in parallel* (there is no app to gate it behind): supply + B2B pipelines, take-rate ledger, liquidity analytics, two-population support + claims, the legal contract set + regime controls, the two GTM motions, org/access owners, and every WS-J SOP. **DoD:** one verified payout reached a detailer net of 22% after a photo-logged job; the ~Aug-31 liquidity gate is measurable.
- **Phase 2 — CONDITIONAL light platform (GATED on the ~Aug-31 liquidity proof).** Only if ≥10 matched paid jobs + acceptable time-to-match + ≥50% detailer 2nd/3rd-job retention: configure off-the-shelf **FSM (Jobber/Housecall Pro)** + booking + Connect, and build **only** the thin custom **matching/guarantee slice** if a named gap forces it — inheriting the software core (multi-party RLS, `verify_jwt`, signature-verified idempotent Connect webhook, CI). Add e-sign + accounting at volume. **DoD:** one real test-mode two-sided job through the configured platform.
- **REJECTED — Phase 3 custom platform (P2).** A custom detailer SaaS / mobile app / route-optimization / ratings-ML / dynamic-pricing is specced **never** here. It earns itself only after a metro is liquid and a named capability is proven missing. This is the overbuild trap the venture exists to catch.

### 2.2 Dependency graph
```
PR-1 Airtable SOR ─┬─► PR-3 booking+landing ─► PR-4 comms ─┐
                   ├─► PR-8 supply pipeline                 ├─► PR-7 manual-match loop + TEST-MODE PAYOUT
PR-2 Connect ──────┴─► PR-5 FCRA+insurance ────────────────┘        (the P0 acceptance capstone)
PR-6 vendor security/access/DPAs ─► (governs every PR that touches PII/keys)
PR-7 ─► [ ~Aug-31 LIQUIDITY GATE ] ─► [ SERVICES MINIMUM-BAR GO-LIVE GATE ] ─► first LIVE paid match
Operate (∥ after PR-7, no app to block them): PR-9 B2B · PR-10 finance · PR-11 analytics ·
   PR-12 support/claims · PR-13 legal+regimes · PR-14 GTM · PR-15 org · PR-J* SOPs (WS-J)
CONDITIONAL (only past the liquidity gate): PR-16 FSM ─► PR-17 thin slice ─► PR-18 slice hardening · PR-19 e-sign+QBO
```

### 2.3 Critical path to first dollar (PHYSICAL, not code)
**Seed ~15–25 detailers (WS-D-supply, WS-F) → vet them (FCRA + insurance + trial job — WS-J, PR-5) → open concierge matching in 2–3 zips (PR-3/4/7) → charge a test customer → detailer completes + logs before/after photos → ops verifies → payout lands net of 22% (PR-7) → ~Aug-31 liquidity gate → services minimum-bar go-live gate → first LIVE paid match.** Software (WS-A/B code) is **off** this path until P1.

### 2.4 Go-live gate sequence (services, not a key swap)
1. **Deploy gate (reversible):** publish the landing page + booking surface. Rollback = unpublish; tears down in a day. [approval: Tony]
2. **Test-mode payout gate:** the PR-7 acceptance — a test-mode Connect payout reaches a detailer test account net of 22% after a verified, photo-logged job. No real money, no real liability. [approval: Tony]
3. **~Aug-31 LIQUIDITY GATE (kill window):** ≥10 matched paid jobs + acceptable time-to-match + ≥50% detailer 2nd/3rd-job retention → proceed to P1; else **stop, do not build the app, reallocate to Executive Edge** (01 §5).
4. **SERVICES MINIMUM-BAR GO-LIVE GATE — before the first LIVE (non-test) paid match** (backbone minimum bar "Product, safety & liability" + 03 §4): **platform GL + per-detailer commercial-auto + GL + garage-keepers/CCC verified current**; **AZ + city TPT licenses + TPT treatment of detailing confirmed with a CPA**; **worker-classification independence reviewed by an IC/employment attorney**; **FCRA-compliant vendor engaged**; **low-water/no-storm-drain SOP documented**; **FTC Green Guides + ROSCA claim review passed**; **guarantee reserve funded**; **unit economics re-validated on real data**. Every box that applies must be checked or **not cleared to take a live dollar.** [approval: Tony + named ⚖/CPA]

---

## 3. The PR plan (phased, PR-by-PR)

Every PR — config/ops **and** code — is authored to the canonical template with all ten fields filled (no "TBD"). Config/ops-PRs replace "Data model + RLS" with the tool schema (or an SOP), and "Endpoints/functions" with the tool actions/automations wired; their acceptance criteria assert the **wired, verified** result. The load-bearing PRs (1, 2, 5, 7, 17) are fully authored; the rest are complete-but-compact.

### PHASE 0 — Concierge foundation (config/ops-PRs · NO code)

```
### PR-1 · Stand up the Airtable ops system-of-record (the concierge "platform")   [Phase 0 · WS-A/C/D/G/J]

Problem. In P0 there is no app; the coordination surface IS an Airtable base. It holds bookings, the detailer
  roster + vetting state, the match log, job status, before/after photo links, claims, and the access register —
  the single source of truth every other P0 workstream reads/writes. Nothing else can be wired until it exists.

Scope. In: one Airtable base "Lustre-Ops" with the tables below + the two-sided views ops needs to hand-match.
  Out: any Supabase/Postgres schema, any RLS, any app (no rows are secured by RLS because there is no app — least
  privilege is enforced by Airtable roles + PR-6). Out: PostHog/product analytics (WS-C P1).

Data model (tool schema — Airtable, not Postgres).
  Bookings(booking_id, customer_name, address[PII], vehicle+access[PII], tier{Express|FullDetail-sedan|FullDetail-SUV|
    Ceramic|Maintenance|B2B}, price, zip, status{requested|matched|scheduled|in_progress|completed|verified|paid|
    cancelled}, matched_detailer→Detailers, time_to_match_sec, before_photo_url, after_photo_url, stripe_ref)
  Detailers(detailer_id, name, contact, zip_coverage, vetting_stage→PR-8, insurance_expiry[sensitive],
    background_status[sensitive — link only, report stays at the vendor], rating, active_bool, connect_acct_ref)
  Matches(match_id→Bookings, detailer→Detailers, attempted_at, fill_result, time_to_match_sec)
  Claims(claim_id→Bookings, type{damage|theft|property|safety}, photos[link], reserve_draw, status, tony_gate_bool)
  AccessRegister(principal, tool, access_level, mfa_bool, granted_at, review_due)  [feeds WS-I/PR-6]
  ownership: N/A (no auth.uid() — this is a vendor tool). PII/sensitive columns tagged for PR-6 classification.

Endpoints / edge functions. none (no app). Tool actions wired: Airtable views (unmatched-bookings-by-zip,
  active-available-detailers-by-zip, open-claims, insurance-expiring-30d); `airtable:*` MCP for read/write;
  `airtable:show-airtable-link` after any base touch.

Acceptance criteria (Given/When/Then).
  - Given the base is built, When ops opens "unmatched-bookings-by-zip", Then it lists requested bookings with the
    available vetted detailers in that zip (the hand-match surface).
  - Given a detailer's insurance_expiry is <30 days out, When ops opens "insurance-expiring-30d", Then that detailer
    appears (feeds the WS-J re-verification SOP).
  - Given a booking moves to `verified`, When ops views it, Then before_photo_url AND after_photo_url are both present
    (no verify without photo evidence — enforced by view filter, adjudicated by ops).

Test plan (manual QA).
  | AC | Level | Assertion |
  | match surface | manual | seed 2 bookings + 2 detailers in one zip → view pairs them |
  | insurance expiry | manual | set an expiry 20d out → detailer surfaces in the view |
  | photo-gated verify | manual | try to mark verified with a missing photo → flagged/blocked by the checklist |

Security checklist. PII/sensitive columns classified [VENTURE, backbone §5] · background-report data kept AT the vendor,
  Airtable stores a link only [VENTURE, guardrail] · Airtable least-privilege roles (owner + scoped ops editor),
  MFA, no shared login [VENTURE, backbone §10 → PR-6] · no card data (lives at Stripe) [STARTER-posture].

Secrets needed (names only). AIRTABLE_PAT (scoped, for any automation; set in a secrets manager, never in a doc).
  No VITE_*, no service-role key (no app).

Dependencies. none (this is the root).

Human gate. none (reversible; a base tears down in a day). Real customer/detailer PII is entered only after PR-6
  classification + DPAs are in place — sequence, not a separate gate.
```

```
### PR-2 · Configure Stripe Connect (TEST MODE) — the marketplace money rail   [Phase 0 · WS-E/A]

Problem. Lustre collects the full price at booking, holds it, and pays the detailer 78% ONLY after the job is
  verified — a marketplace split + payout + payee KYC + 1099, which vanilla Stripe Checkout cannot do. Routing funds
  through Connect as marketplace-facilitator is ALSO what keeps Lustre out of money-transmitter status (03 §4, backbone
  §9-B). Everything is TEST MODE + names-only: no live keys, no charges, $0.

Scope. In: a Connect platform config (test), connected-account onboarding per detailer (payee KYC via Connect), the
  22% application-fee model, funds captured at booking + transfer/payout ON job-verified, 1099-K/NEC issuance by
  Connect. Out: live keys / live charges (that is the SERVICES go-live gate, §2.4). Out: holding funds ourselves
  (would make Lustre the transmitter — explicitly rejected). Out: the thin-slice webhook (PR-17, P1).

Data model (tool schema — Stripe Connect objects). Connected accounts (one per detailer, KYC status tracked in
  Airtable Detailers.connect_acct_ref); destination charges OR separate-charges-and-transfers with a 22% application
  fee; PaymentIntent captured at booking; Transfer/Payout created on `verified`. Card data (PAN) never touches
  Lustre — SAQ-A. No local table; Stripe is the ledger, Airtable holds the reference.

Endpoints / edge functions. none in P0 (no app; ops triggers transfers from the Stripe dashboard/MCP after ops
  verifies the job). verify_jwt: N/A (no edge function until PR-17). The Connect webhook + `verify_jwt=false` +
  signature verification is specced in PR-17 for the P1 slice, not built here.

Acceptance criteria (Given/When/Then).
  - Given a test connected account and a test PaymentIntent on a $189 Full Detail, When ops captures at booking,
    Then $189 is held and NO payout has moved.
  - Given the job is marked verified with photos (PR-1/PR-7), When ops releases, Then a Transfer of ~$147 (78%) lands
    in the detailer's Connect TEST account and Lustre's application fee is ~$42 (22%), net of processing on the FULL $189.
  - Given the job is NOT verified, When anyone attempts payout, Then no transfer is possible (funds held until verified).

Test plan (manual QA — the two-sided capstone leg).
  | AC | Level | Assertion |
  | capture-hold | manual | test charge → funds held, payout $0 |
  | payout-on-verified | manual | verify → detailer test account receives 78%, fee 22% |
  | no-verify-no-pay | manual | attempt payout pre-verify → blocked |

Security checklist. Funds routed via Connect so Lustre is NOT a money transmitter [VENTURE, backbone §9-B] · card
  data stays with Stripe, SAQ-A [STARTER-posture, backbone §9-PCI] · restricted key for any automation, never a god
  key [VENTURE, backbone §3/§10] · keys names-only, test-mode only [guardrail] · Connect account = highest blast
  radius: Owner admin + Finance analyst only [VENTURE, 04 §4c].

Secrets needed (names only). STRIPE_SECRET_KEY (TEST, `rk_test_` restricted preferred), STRIPE_CONNECT_CLIENT_ID.
  STRIPE_WEBHOOK_SECRET is reserved for PR-17 (P1). All in the vendor dashboard / secrets manager — never in the brief.

Dependencies. PR-1 (Detailers table for connect_acct_ref).

Human gate. CONNECT AUTHORIZATION + any move toward a real (even test) account is a Tony step — the Stripe connector
  reports needs-authorization in this session; authorize it (via claude.ai connector settings) ONLY when P0 moves from
  spec to a real test-mode account. Live keys/charges are gated at the SERVICES go-live gate (§2.4). Rollback: a
  test-mode account + spreadsheet tear down in a day.
```

```
### PR-5 · FCRA-compliant background-check + insurance-verification workflow   [Phase 0 · WS-D/H/J]

Problem. The wedge is trust: "vetted, background-checked, insured" must be LITERALLY true before the word ships. This
  is the supply-side trust gate and it is legally loaded — FCRA on the checks, garage-keepers/CCC + commercial-auto on
  the insurance, and it must NOT tip the detailer into employee status. It is a physical-ops + compliance workflow,
  not a feature.

Scope. In: a documented workflow — FCRA vendor (Checkr/Certn) with permissible purpose + disclosures + adverse-action
  path; commercial-auto + GL + garage-keepers/CCC collected, verified current, expiry tracked (PR-1); the report stays
  AT the vendor (link only in Airtable). Out: self-improvised checks (FCRA-non-compliant — rejected). Out: storing the
  raw background report in Airtable (guardrail — most sensitive data Lustre touches).

Data model (SOP + tool schema). Extends Detailers: background_status{invited|consent|clear|adverse|expired},
  background_report_link[vendor URL only], insurance_carrier, insurance_expiry, coi_link, garage_keepers_bool.
  ownership: N/A. Report data classified `sensitive` — vendor-held, never exported (backbone §5, guardrail).

Endpoints / edge functions. none (vendor dashboards + manual). Vendor actions: send FCRA disclosure → obtain consent
  → run check → on adverse, send the adverse-action notice set. COI collection is manual doc-review, not a screenshot.

Acceptance criteria (Given/When/Then).
  - Given a sourced detailer, When the FCRA check is initiated, Then the disclosure + written consent are captured
    BEFORE the check runs (permissible purpose), and the raw report is never copied into Airtable (link only).
  - Given an adverse result, When ops proceeds, Then the FCRA adverse-action notice sequence is followed (pre-adverse
    → waiting period → adverse) — drafted, Tony/⚖-gated, never auto-sent.
  - Given a detailer with garage-keepers/CCC coverage that expires, When it lapses, Then their active_bool flips and
    they cannot be matched until re-verified (the guarantee sits on VERIFIED coverage, not a promise).

Test plan (manual QA).
  | AC | Level | Assertion |
  | consent-before-check | manual | attempt a check with no consent on file → blocked by SOP |
  | adverse-action path | manual | dry-run an adverse result → the notice sequence is present as drafts |
  | coverage-gates-match | manual | expire a test COI → detailer drops out of the match view |

Security checklist. FCRA permissible-purpose + disclosures + adverse-action [VENTURE, added regime — no backbone-§9
  row] · background report vendor-held, link-only, never exported [VENTURE, guardrail] · insurance verified current,
  guarantee depends on it [VENTURE, minimum bar] · FCRA-vendor access scoped to ops, revocable [VENTURE, §10] ·
  worker-class hygiene: vetting activates an IC, never provisions an employee [VENTURE, added regime].

Secrets needed (names only). CHECKR_API_KEY (or CERTN_API_KEY) — vendor dashboard/secrets manager, ops-scoped.

Dependencies. PR-1 (Detailers), PR-6 (PII classification + DPAs must cover the FCRA vendor before real reports run).

Human gate. SPEND on FCRA checks + insurance verification requires Tony sign-off ($0-until-proven). Adverse-action
  sends are drafts → Tony/⚖. Running a real check is irreversible w.r.t. a real person → gated. Rollback: n/a for a
  completed check (which is why it is gated, not autonomous).
```

**PR-3 · Configure booking/scheduling surface + branded landing page**  [Phase 0 · WS-A/F]
- **Problem.** Demand needs somewhere to request a booking and set expectations; a static page + a booking tool is the whole "app" in P0.
- **Scope.** In: Carrd/WordPress.com landing page + Cal.com/Square Appointments booking, themed with the brand tokens; the five rungs (Express $49, Full Detail $189/$229, Ceramic $699, Maintenance $159/mo, B2B). Out: a hand-built Vite/React frontend (nothing to build), any custom scheduler.
- **Data model (tool schema).** Booking tool services = the five rungs; availability owned by each detailer; customer+booking objects exportable → mirrored to Airtable (PR-1). Address/vehicle captured as sensitive (PR-6).
- **Endpoints / tool actions.** Booking-tool webhooks/exports → Airtable; `verify_jwt`: N/A (no edge function).
- **AC.** Given a customer picks Full Detail + time + address, When they submit, Then a Bookings row is created (`requested`) and captured for payment (PR-2). / Given the Maintenance rung, When shown, Then a one-tap cancel disclosure (ROSCA) is present. / Given the page renders, Then no "eco/waterless/green" claim appears (Green Guides).
- **Test plan.** manual: submit a test booking → Airtable row appears · inspect Maintenance CTA → click-to-cancel copy present · claims-lint the page → clean.
- **Security checklist.** Address/vehicle = PII, minimized + classified [VENTURE §5] · no secret in the public page [STARTER boundary] · HTTPS/TLS [platform].
- **Secrets (names only).** None public beyond the booking-tool embed id (public). No VITE_ secret.
- **Dependencies.** PR-1, PR-2, plus 02 §2.3 tokens.
- **Human gate.** PUBLISH = Tony (drafts-only). Reversible (unpublish).

**PR-4 · Wire Twilio SMS + Gmail draft comms — two-sided lifecycle templates**  [Phase 0 · WS-F/G]
- **Problem.** Booking confirmations, the "on-the-way" trust ping, the post-job before/after→review→rebook hinge, and the payout notice are the revenue-critical marketplace flows; the supply-side lifecycle (onboarding, job offer, payout, utilization nudge) has no slot in the base skill and is added.
- **Scope.** In: token-styled SMS (Twilio) + email (Gmail draft) templates for the six demand flows + four supply flows (02 §3.5). Out: auto-send (guardrail — drafts only); a marketing ESP at volume (P1).
- **Data model.** none (templates). Triggers reference Airtable status changes.
- **Tool actions + verify_jwt.** Twilio send (gated on A2P/10DLC registration); Gmail create-draft (never send); `verify_jwt`: N/A.
- **AC.** Given a detailer en route, When ops fires the on-the-way ping, Then it reads "[Name], background-checked & insured, arriving ~[window]" (each word literally true). / Given a Maintenance flow, Then it carries the click-to-cancel disclosure. / Given any supply message, Then it is an offer, never an order (1099 independence).
- **Test plan.** manual: render each template with test data → claims-clean, independence-safe · confirm Gmail stays in drafts · confirm A2P/10DLC is registered before any real SMS.
- **Security checklist.** Gmail drafts-only [STARTER/guardrail] · no PII beyond first name + window in SMS [VENTURE §5/§7] · A2P/10DLC compliance before traffic [VENTURE].
- **Secrets (names only).** TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN (or TWILIO_API_KEY/SECRET) — vendor/secrets manager.
- **Dependencies.** PR-1, PR-3.
- **Human gate.** SEND = Tony (drafts-only); A2P/10DLC registration is a setup gate before live SMS.

**PR-6 · Vendor-config security baseline + access register + DPAs**  [Phase 0 · WS-B/I]
- **Problem.** With no app, security is **identity-and-access on the vendor stack** (backbone §6b/§10 posture), plus DPAs and PII classification — the backbone's RLS/`verify_jwt` core is N/A until PR-17. This is the [VENTURE] work that makes the concierge stack safe.
- **Scope.** In: MFA + least-privilege roles on every tool (Stripe Connect, Airtable, Twilio, Gmail, booking, FCRA vendor); no shared logins; break-glass in a vault; the access register (PR-1 table); PII classification (customer address/vehicle, detailer PII, **background reports = most sensitive**, payment tokens); DPAs per subprocessor; retention + deletion + privacy policy (drafts → WS-H). Out: SOC2 formal audit; any software CI (no repo).
- **Data model.** AccessRegister (PR-1). PII register: class per field {public|internal|PII|sensitive}.
- **Tool actions + verify_jwt.** Tool admin consoles; `verify_jwt`: N/A.
- **AC.** Given any tool account, When audited, Then MFA is on and the login is named (no shared). / Given the access register, When reviewed, Then every principal×tool×level row is current with a review-due date. / Given a subprocessor touching PII, Then a DPA is drafted/queued before real PII flows.
- **Test plan.** manual: audit each tool → MFA on, roles least-privilege · register complete · DPA checklist covers Stripe/Airtable/Twilio/FCRA/booking.
- **Security checklist.** MFA everywhere + no shared logins [VENTURE §10] · least-privilege scoped tokens [VENTURE §3/§10] · PII classified + minimized [VENTURE §5] · DPAs signed with every subprocessor [VENTURE §9 GDPR/CCPA] · supply-side PII/background-report access class added [VENTURE — not in the default §10 matrix] · offboarding revoke + secret rotation within 24h [VENTURE §10].
- **Secrets (names only).** All prior keys are *governed* here (scoping/rotation), none newly created. No values.
- **Dependencies.** PR-1.
- **Human gate.** ACCESS grants/revokes = Tony (04 §4b RACI). DPA execution = ⚖ + Tony.

### PHASE 1 — Concierge core value + first two-sided dollar + operate (∥ after PR-7)

```
### PR-7 · The two-sided manual-match loop + the one-real-test-mode-job acceptance   [Phase 1 · WS-A/E/J]

Problem. This is the WHOLE point of P0: prove that a trust-seeking owner can be hand-matched to a vetted detailer and
  that MONEY REACHES THE DETAILER ONLY AFTER A VERIFIED JOB. "Done" here is NOT "an order was placed" (single-sided);
  it is the two-sided payout leg — the acceptance the base product-spec capstone omits (03 FRICTION #7).

Scope. In: the end-to-end manual loop across PR-1/2/3/4 — booking → hand-match → schedule → arrival → job → before/
  after photos → ops verify → payout net of 22%; plus the two other capstone legs (one-click Maintenance cancel;
  open a claim and confirm photos attach). Out: any automation of the match (ops does it by hand — that IS the test);
  any app.

Data model (the loop over PR-1 tables). Bookings.status walks requested→matched→scheduled→in_progress→completed→
  verified→paid; Matches logs time_to_match_sec + fill_result; Claims links photos. No RLS (no app). Multi-party
  ownership (customer+detailer+ops) is a P1/PR-17 concern; in P0, Airtable roles (PR-6) enforce access.

Endpoints / edge functions. none — the "engine" is ops + the Stripe dashboard/MCP + Airtable. verify_jwt: N/A.

Acceptance criteria (Given/When/Then) — the manual-QA capstone, two-sided.
  - Given a paid test booking and ≥1 available vetted detailer in the zip, When ops matches, Then both parties get a
    confirmation + arrival window (PR-4) and the job enters `scheduled`.
  - Given a job marked complete WITH before/after photos logged, When ops verifies, Then funds release to the
    detailer's Connect TEST account net of 22% — and NEVER before verified (PR-2).
  - Given a test Maintenance subscription, When the customer requests cancel, Then it is self-serve + immediate
    (ROSCA click-to-cancel — a hard dependency, not a nicety).
  - Given a test damage claim, When admin opens it, Then the before/after photos + coverage record attach and the
    guarantee-reserve path is triggered (WS-J/PR-12).

Test plan (manual QA — the capstone).
  | AC | Level | Assertion |
  | match→confirm | manual | match a test booking → both sides confirmed, status scheduled |
  | verified→payout | manual | verify with photos → 78% lands in detailer test account, 22% fee |
  | never-before-verified | manual | attempt payout pre-verify → impossible |
  | ROSCA cancel | manual | cancel a test sub in one action → immediate |
  | claim→photos | manual | open a test claim → photos + coverage attached |

Security checklist. Payout only on verified job [VENTURE, product-spec] · photos are the dispute record, consent to
  reshare required [VENTURE] · no address/vehicle in any analytics event [VENTURE §7 PII firewall] · Connect
  restricted-key for any automation [VENTURE §3].

Secrets needed (names only). Reuses PR-2 (STRIPE_SECRET_KEY test) + PR-1 (AIRTABLE_PAT). No new secret.

Dependencies. PR-1, PR-2, PR-3, PR-4, PR-5 (a vetted detailer must exist to match).

Human gate. This runs in TEST MODE only — no real money, no real customer vehicle. The transition to a LIVE paid
  match is the SERVICES minimum-bar go-live gate (§2.4). Rollback: test data tears down in a day.
```

**PR-8 · Supply pipeline (detailer recruit→vet→trial→active) in Airtable**  [Phase 1 · WS-D/J]
- **Problem.** Supply liquidity is the binding constraint and the base sales-crm has no native slot for a recruiting/activation pipeline — it is built here as the mirror-image of the buyer pipeline.
- **Scope.** In: Airtable stages Sourced→Screened→Background+Insurance-verified→Trial job→Active→At-risk/Deactivated (04 §2a), each with an exit criterion + gate; track 2nd/3rd on-platform job completion (≥50% target — the disintermediation signal). Out: the consumer booking (that is a funnel, not a pipeline).
- **Data model (tool schema).** Extends Detailers with vetting_stage, trial_job_ref, on_platform_job_count, retention_flag.
- **Tool actions + verify_jwt.** Airtable views/automations; `verify_jwt`: N/A.
- **AC.** Given a sourced detailer, When they clear FCRA+insurance (PR-5), Then they advance to Trial-job (gated). / Given a detailer completes a trial to the checklist+photo standard, Then they go Active. / Given repeat failure or rating breach, Then deactivation is human-gated (04 §4b).
- **Test plan.** manual: walk a test detailer through stages → gates fire · retention counter increments on 2nd/3rd job.
- **Security checklist.** background-report link-only [VENTURE guardrail] · deactivation reputational+worker-class sensitive → Tony gate [VENTURE].
- **Secrets (names only).** Reuses AIRTABLE_PAT.
- **Dependencies.** PR-1, PR-5.
- **Human gate.** Vetting APPROVAL + DEACTIVATION = Tony (trust gates, 04 §4b).

**PR-9 · B2B fleet/dealer pipeline + deal desk**  [Phase 1 · WS-D]
- **Problem.** The one place the classic considered-sale skill fits cleanly; fills off-peak capacity at a thinner take.
- **Scope.** In: Airtable Companies·Contacts·Deals·Activities; stages Prospect→Engaged→Qualified→Scoping→Proposal→Negotiation→Closed-Won (contract executed + first invoice collected); weighted forecast Σ(Amount×Probability); take-rate-floor gate. Out: consumer.
- **Data model (tool schema).** Standard sales-ops 4-table; Deals.take_rate, Deals.contracted_gmv.
- **Tool actions + verify_jwt.** Airtable; `verify_jwt`: N/A.
- **AC.** Given a fleet deal below the take-rate floor, When proposed, Then it requires Tony approval (logged, audit trail). / Given Closed-Won, Then a contract (MSA/SOW) is routed to legal review (PR-13) before signature.
- **Test plan.** manual: a below-floor test deal → approval gate fires · forecast sums weighted pipeline.
- **Security checklist.** LYV firewall on all sourcing [guardrail] · claims literally true in outreach [VENTURE].
- **Secrets (names only).** Reuses AIRTABLE_PAT.
- **Dependencies.** PR-1.
- **Human gate.** Below-floor take-rate = Tony; contract signature = Tony + ⚖ (PR-13).

**PR-10 · Take-rate finance ledger + payout-float TWCF + guarantee-reserve model**  [Phase 1 · WS-E]
- **Problem.** The finance archetype is GMV×take + a seller-payout liability, not a goods P&L or a SaaS MRR setup; the survival number is payout float + reserve adequacy + liquidity.
- **Scope.** In: the COA (04 §1a) with 2100 Detailer-payouts-payable (liability), 2200 AZ-TPT-payable, 2300 Guarantee-reserve, 2400 Deferred-rev-Maintenance, 4000 Take-revenue-net, 5000 Processing-on-GMV, 5010 FCRA/background; the driver model (active detailers × jobs/detailer/wk × blended take × 52); two CAC lines (demand $25–45, supply $50–150); the 13-week payout-float TWCF; the ASC-450 reserve model. Out: any inventory/COGS/landed-cost lines (N/A — no goods).
- **Data model (tool + xlsx).** QBO COA + an xlsx model + Airtable assumptions log.
- **Tool actions + verify_jwt.** QBO (connect at first revenue) + `finance:*` skills + Stripe Connect payout recon; `verify_jwt`: N/A (P0).
- **AC.** Given a Connect payout crossing a period-end, When close runs, Then the payout→bank→GL recon nets fees and the reserve rolls (the #1 marketplace rec). / Given the P&L, Then take is booked NET (agent) pending the CPA principal-vs-agent call — not asserted here.
- **Test plan.** manual: reconcile a test payout batch · reserve model flags under-reserving.
- **Security checklist.** Connect = highest blast radius, Finance-analyst scope [VENTURE §10] · no card data [SAQ-A].
- **Secrets (names only).** QUICKBOOKS_* (at connect), reuses STRIPE_SECRET_KEY (test).
- **Dependencies.** PR-2, PR-7.
- **Human gate.** CPA gates: AZ+city TPT treatment + who remits (facilitator vs seller), principal-vs-agent (ASC 606), 1099 issuance, reserve methodology — **all before pricing is finalized / first live dollar** (§2.4). Monthly close gated on CPA/controller review before filing.

**PR-11 · Two-sided liquidity analytics (north-star = coverage + time-to-match)**  [Phase 1 · WS-C]
- **Problem.** A marketplace has two funnels and a liquidity north-star, not a one-sided pirate funnel with a usage/MRR north-star.
- **Scope.** In: north-star = % target zips with ≥2 active available detailers **and** matched paid jobs/wk at acceptable time-to-match; the two-sided event taxonomy (demand: booking_requested→detailer_matched→job_completed→job_rated→rebooked/subscription_started; supply: detailer_applied→detailer_verified→trial_completed→job_accepted→payout_sent; liquidity: match_attempted{time_to_match_sec, fill_result}, coverage_snapshot). In P0 the event stream **is** Airtable + Connect. Out: PostHog SDK / A-B (no app; P1 only).
- **Data model.** Derived from PR-1 events; `job_value_band`, never the address (PII firewall).
- **Tool actions + verify_jwt.** `data:*`/`dataviz` over Airtable+Stripe; `verify_jwt`: N/A.
- **AC.** Given any event, Then home address/vehicle/background data never appear as properties (UUIDs + bands only). / Given a week, Then coverage + time-to-match + utilization compute from the base. / Given P0, Then no PostHog fires (there is no app).
- **Test plan.** manual: inspect the derived metrics · assert no PII in any exported event row.
- **Security checklist.** PII firewall (marketplace analog of the PHI firewall) [VENTURE §7] · consent-gated + DPAs [VENTURE §9] · HIPAA/PHI = N/A, do not inherit the health posture [VENTURE].
- **Secrets (names only).** Reuses AIRTABLE_PAT + STRIPE_SECRET_KEY (test). P1 adds VITE_POSTHOG_KEY (public).
- **Dependencies.** PR-1, PR-7.
- **Human gate.** Connect-these (PostHog) is a P1 founder step; none irreversible.

**PR-12 · Support + trust & safety / claims lanes (two populations)**  [Phase 1 · WS-G/J]
- **Problem.** Two customers (owners + detailers) and a hard lane that is vehicle-damage/theft/property/safety backed by the guarantee reserve — an operational, money-reserved process, not a clinical refer-out.
- **Scope.** In: Airtable support base; S1 (damage/theft/property/safety + payment lockout, ≤1hr 24×7 → guarantee/insurance + Tony) · S2 (detailer no-show, ≤4hr → re-match) · S3 (reschedule/how-to, ≤1 biz day, KB-first) · S4 (feature, backlog); the claims runbook (photos + coverage + reserve draw). Out: Intercom (connect at ticket volume); a clinical lane (N/A — struck).
- **Data model (tool schema).** Extends Claims (PR-1) + a Tickets table (queue{customer|detailer}, tier, sla).
- **Tool actions + verify_jwt.** Airtable + Twilio + Gmail-draft; `verify_jwt`: N/A.
- **AC.** Given a damage/theft claim, When intake, Then it escalates to the guarantee+insurance workflow + Tony above the $ threshold, and the model NEVER admits platform fault or promises a payout amount. / Given a detailer no-show (S2), Then dispatch re-matches (a liquidity failure, not a support ticket). / Given an eco/"waterless" question, Then route to claims review (Green Guides).
- **Test plan.** manual: dry-run each tier → SLA + escalation fire · claims runbook attaches photos+coverage.
- **Security checklist.** no fault-admission / no payout-amount promise [VENTURE/guardrail] · PII in-system, not exported [VENTURE §5] · worker-class-sensitive disputes → founder/legal [VENTURE].
- **Secrets (names only).** Reuses AIRTABLE_PAT + TWILIO_*.
- **Dependencies.** PR-1, PR-4.
- **Human gate.** S1 + any guarantee PAYOUT above threshold = Tony (04 §4b); reserve draw is irreversible → gated.

**PR-13 · Legal contract set (drafts) + compliance-regime controls**  [Phase 1 · WS-H]
- **Problem.** The marketplace contract set + the six live regimes are the highest-risk, most product-shaping surface; the IC Detailer Agreement is the marquee instrument (worker classification is *the* marquee risk).
- **Scope.** In (drafts, ⚖-gated): Customer ToS + damage-guarantee terms; **IC Detailer Agreement** (preserve genuine independence — sets availability, own kit, can decline, can multi-home; **who sets the price is the live tradeoff**); Stripe Connect + 1099 disclosure; Privacy Policy + DPAs; B2B MSA/SOW; FCRA disclosure + adverse-action set; IP/brand assignment + TM path for "Lustre" (flag, never clear); LLC (AZ). Out (struck — N/A): commercial lease, goods-supply/purchase agreement, sale-of-goods/UCC-Art.2 terms.
- **Data model.** none (documents in Drive + `legal:*`).
- **Tool actions + verify_jwt.** `legal:review-contract`/`signature-request` (draft+route); e-sign at volume (P1/PR-19); `verify_jwt`: N/A.
- **AC.** Given the IC agreement, When ⚖-reviewed, Then it preserves independence and does NOT mandate uniforms/exclusivity/price-control beyond what an IC attorney clears. / Given the Maintenance ToS, Then ROSCA click-to-cancel is explicit. / Given any public claim, Then it is substantiated (Green Guides) before publish. / Given "Lustre", Then a TM path is mapped and flagged, never declared clear.
- **Test plan.** manual: each contract present as a review-ready draft; each of the six regimes has a placed control; N/A regimes explicitly struck.
- **Security checklist.** worker-class independence preserved [VENTURE — added regime, no §9 row] · CWA low-water SOP referenced [VENTURE — added regime] · FCRA set [VENTURE — added regime] · Green Guides + ROSCA [VENTURE §9-FTC] · money routed via Connect, not transmitter [VENTURE §9-B].
- **Secrets (names only).** none.
- **Dependencies.** PR-5 (FCRA), PR-2 (Connect terms).
- **Human gate.** Every signature/filing = Tony + named ⚖/CPA (04 §3d). This is the compliance leg of the SERVICES go-live gate (§2.4).

**PR-14 · Marketing / content / social surfaces (two motions)**  [Phase 1 · WS-F]
- **Problem.** Two acquisition motions (supply-seeding + demand local-search/concierge); the demand engine is before/after content on GBP+Nextdoor+IG/FB + local-SEO pages; $0 paid until liquidity.
- **Scope.** In: the before/after anchor → GBP post + IG/FB Reel + Nextdoor + review-request + local-SEO page section + owned-list email (02 §4.2); GBP as always-on local-search infra; the 2-week social calendar (02 §5.5, all DRAFT); the separate supply-recruiting channel (FB groups/Craigslist); B2B outbound (02 §5.4). Out: paid media (scale-only, post-liquidity); a second metro/zip.
- **Data model.** none (content + channels).
- **Tool actions + verify_jwt.** Canva MCP + GBP + Twilio/Gmail-draft; `verify_jwt`: N/A.
- **AC.** Given any asset, Then no eco/"waterless" claim and "vetted/insured/guaranteed" literally true. / Given supply copy, Then independence-safe (offers, not orders; branded detailer assets opt-in). / Given the calendar, Then everything is DRAFT (nothing publishes without Tony).
- **Test plan.** manual: claims-lint every template · confirm one anchor → N derivatives (not spraying) · confirm supply channel is separate.
- **Security checklist.** claims discipline (Green Guides/ROSCA/no-perf-overclaim) [VENTURE/guardrail] · real reviews only, no bought/fake [FTC + guardrail] · LYV firewall on all lists [guardrail].
- **Secrets (names only).** Reuses TWILIO_* + booking embed. No new secret.
- **Dependencies.** PR-1, PR-3, 02 §1–5.
- **Human gate.** PUBLISH/SEND/SPEND = Tony (drafts-only, $0 paid until liquidity).

**PR-15 · Org & access: marketplace-native function owners + RACI + hire triggers**  [Phase 1 · WS-I]
- **Problem.** The seven-function org template hides the marketplace-native functions (supply/network ops, dispatch/matching, trust&safety/claims); they must get an owner or go unowned.
- **Scope.** In: the RACI (04 §4b, exactly one Accountable/process, Tony gates ⛔ on trust/deactivation/claims/spend/send); the permissions matrix (04 §4c — Connect highest blast radius, FCRA-vendor PII scoped, **no GitHub/Supabase/Vercel in P0**); the trigger-gated next-3-hires (ops/dispatch coordinator, supply recruiter, B2B closer) as scorecards. Out: any FT hire now (zero clear the four-tests against a $0 concierge test). In-app RBAC (owner/admin/staff/user) is N/A until PR-17.
- **Data model.** AccessRegister (PR-1).
- **Tool actions + verify_jwt.** Airtable register + Lucid RACI; `verify_jwt`: N/A (P0).
- **AC.** Given any recurring process, Then exactly one Accountable + Tony's gate where irreversible. / Given a proposed FT hire, Then it is flagged unless it clears the four-tests (overbuild guard). / Given offboarding, Then revoke + rotate within 24h.
- **Test plan.** manual: RACI has one A/row · register current · hire proposals checked against triggers.
- **Security checklist.** least-privilege + MFA + no shared logins [VENTURE §10] · AI service accounts read-first + drafts-only + never a payout key [VENTURE, guardrail].
- **Secrets (names only).** governs all keys (rotation); none new.
- **Dependencies.** PR-6.
- **Human gate.** Access grant/revoke + any hire = Tony.

**PR-J\* · Physical-Ops & Trust/Safety SOPs (WS-J — the added workstream)**  [Phase 1 · WS-J]
- **Problem.** The real product runs on SOPs + humans + vendors, not code, and has no home in the nine-workstream taxonomy — so it is specced as its own PR family or it gets skipped (FRICTION #2).
- **Scope.** In: (a) supply onboarding/vetting SOP (identity → FCRA → insurance → skills-trial → equipment/low-water-kit check); (b) dispatch & hand-matching runbook (time-to-match, coverage, capacity); (c) job-execution checklist per tier + **mandatory before/after photo evidence**; (d) damage-claim adjudication + guarantee-reserve-draw runbook; (e) the **low-water / no-storm-drain (Clean Water Act) SOP**; (f) deactivation policy; (g) weather ops (monsoon demand spike / extreme-heat window compression). Out: any software (these are documents + gates).
- **Data model.** none (SOPs in Drive; state in Airtable PR-1).
- **Tool actions + verify_jwt.** `sop-writer`/Drive; `verify_jwt`: N/A.
- **AC.** Given a new detailer, Then the vetting SOP gates them (PR-5/8). / Given a completed job, Then before/after photos are logged before verify (PR-1/7). / Given wash-water, Then the low-water/no-storm-drain standard is documented + trained (CWA — an operating standard, not a green claim). / Given a damage claim, Then the adjudication runbook attaches evidence + gates the reserve draw at Tony's threshold.
- **Test plan.** manual: run one real (test) detailer + one real (test) job through every SOP end-to-end.
- **Security checklist.** background-report handling [VENTURE guardrail] · low-water CWA compliance [VENTURE — added regime] · claim payout gated [VENTURE].
- **Secrets (names only).** none.
- **Dependencies.** PR-1, PR-5.
- **Human gate.** Vetting approval · deactivation · claim payout above threshold = Tony (04 §4b).

### PHASE 2 — CONDITIONAL light platform (GATED on the ~Aug-31 liquidity proof)

**PR-16 · Configure off-the-shelf FSM (Jobber / Housecall Pro)**  [Phase 2 · WS-A]  (conditional)
- **Problem.** Once hand-dispatch breaks (~≥15 active detailers), the off-the-shelf answer for mobile field services (dispatch, checklists, photos, routes, payments) is a **vertical FSM** — NOT "build it on Supabase" (the exact overbuild the venture warns against; the tool-mcp-stack has no FSM row — FRICTION #12).
- **Scope.** In: configure Jobber/Housecall Pro for dispatch + job checklists + photo capture + routes, integrated with Connect (PR-2) + Airtable (PR-1). Out: a custom FSM build.
- **Data model (tool schema).** FSM jobs/checklists/photos mapped to Airtable Bookings.
- **Tool actions + verify_jwt.** FSM config + webhooks → Airtable; `verify_jwt`: N/A (vendor).
- **AC.** Given the FSM is configured, Then a job flows dispatch→checklist→photos→complete and mirrors to Airtable. / Given a route, Then it schedules within the arrival-window standard.
- **Test plan.** manual: run a test job through the FSM → mirrors to the SOR.
- **Security checklist.** DPA with the FSM vendor [VENTURE §9] · least-privilege [VENTURE §10].
- **Secrets (names only).** JOBBER_API_KEY (or HOUSECALL_*) — vendor/secrets manager (no live claude.ai MCP — connect direct).
- **Dependencies.** liquidity gate cleared; PR-1, PR-2.
- **Human gate.** SPEND on FSM = Tony; connect direct (no MCP).

```
### PR-17 · Thin custom matching/guarantee slice — co-owned booking + service-role payout, multi-party RLS + Connect webhook   [Phase 2 · WS-A/B/E]  (CODE · conditional · ONLY if a named gap forces it)

Problem. IF (and only if) a real capability no bought tool delivers is named after liquidity is proven, build the
  thin slice that clones/brands starters/saas for ONLY that surface. Its defining data wrinkle: a booking is co-owned
  by THREE principals — customer + matched detailer + platform ops — and payout is service-role-only. This is NOT the
  single-owner `owner_id = auth.uid()` shape the starter/product-spec example models (03 FRICTION #6). Nothing here is
  built during the concierge test; it is on the shelf until the gate.

Scope. In: `bookings` (multi-party read) + `payouts` (service-role write) + the RLS policy set + a signature-verified,
  idempotent Connect webhook that writes payout state. Out: a custom detailer mobile app, route ML, dynamic pricing,
  ratings ML, multi-metro mechanics (all REJECTED — Phase 3).

Data model + RLS policies.
  table: bookings (id uuid pk, customer_id uuid → auth.users, detailer_id uuid → profiles null, ops_id uuid → profiles
    null, tier tier_enum, price int, status booking_status, before_url text, after_url text, stripe_pi text,
    created_at timestamptz default now())
  table: payouts (id uuid pk, booking_id uuid → bookings, detailer_id uuid → profiles, amount_cents int,
    stripe_transfer text, stripe_event_id text unique, released_at timestamptz)  ← system-managed (service role)
  enum: role_enum = ('owner','admin','ops','detailer','customer'); booking_status = (requested,matched,scheduled,
    in_progress,completed,verified,paid,cancelled)
  ownership (MULTI-PARTY, the wrinkle):
    RLS bookings SELECT: customer_id = auth.uid() OR detailer_id = auth.uid() OR EXISTS(ops/admin/owner in profiles);
    INSERT (customer creates own, with check customer_id = auth.uid());
    UPDATE: detailer may set completed + photo urls on OWN matched job (using detailer_id = auth.uid() with check
      same + status transition allowed); ops/admin may verify (server-side role check); customer may cancel own;
      price + role columns NOT client-updatable.
    RLS payouts: SELECT own for the detailer (detailer_id = auth.uid()); ops/admin SELECT all; NO client write
      policies — service role only (documented in the migration; the money leg is never client-writable).
  migration: <ts>_create_bookings_payouts_multiparty.sql (append-only, forward-only); `npm run db:types` after.

Endpoints / edge functions.
  POST verify-job — auth: JWT + server-side check caller.role ∈ {ops,admin,owner}; verify_jwt: true. Validates photos
    present, flips status→verified, triggers the Connect transfer via service role. zod input {booking_id}; errors
    400/403/409(already verified).
  POST stripe-connect-webhook — auth: NONE (JWT); verify_jwt: FALSE → self-auth = Stripe signature on the RAW body
    (STRIPE_WEBHOOK_SECRET) + idempotent on stripe_event_id (unique) + upsert ignoreDuplicates. Writes payouts.

Acceptance criteria (Given/When/Then).
  - Given a customer, When they read a booking they neither own, are matched to, nor operate, Then RLS returns nothing.
  - Given the matched detailer, When they read their booking, Then they see it (co-ownership) but CANNOT read another
    detailer's booking or ANY payout that is not theirs.
  - Given a non-ops user, When they POST verify-job, Then 403 and no transfer.
  - Given a Stripe transfer webhook delivered twice, When processed, Then the payout row is written exactly once
    (idempotent on stripe_event_id).
  - Given a client, When it sends price or role in a bookings UPDATE, Then RLS/the server rejects it.

Test plan (unit / e2e).
  | AC | Level | Assertion |
  | multi-party SELECT | integration | customer/detailer/ops each see only their permitted rows |
  | payout SELECT-own | integration | detailer cannot read another's payout |
  | verify role-gated | integration | non-ops verify → 403 |
  | webhook idempotent | integration | duplicate event → one payout row |
  | no client authority | integration | RLS denies price/role UPDATE from client |

Security checklist. RLS on + policy-audit (§2 query A → zero rows) [STARTER]+[CONFIG] · multi-party ownership modeled
  explicitly [VENTURE] · payouts service-role-only, write-policies omitted + documented [STARTER] · verify-job
  role-checked server-side [VENTURE §2] · Connect webhook signature-verified + idempotent, verify_jwt=false [STARTER] ·
  CORS locked (PR-18) · input validated zod [VENTURE §4] · no secret in VITE_* [STARTER] · audit-log verify + payout
  [VENTURE §7].

Secrets needed (names only). SUPABASE_SERVICE_ROLE_KEY (edge env, server-only), STRIPE_SECRET_KEY (live at go-live),
  STRIPE_WEBHOOK_SECRET (edge env). Public: VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY. Set via `supabase secrets` /
  host env. NEVER a value in this brief.

Dependencies. liquidity gate cleared; PR-2 (Connect), PR-16 (if FSM covers dispatch), a `profiles` + typed-roles PR
  (the standard [VENTURE] RBAC — folded here since roles first appear with the slice).

Human gate. PROD MIGRATION of bookings/payouts + payments GO-LIVE (test→live keys) are gated with a written rollback
  (host instant-rollback + a forward-fix migration; the money leg is idempotent so a replay is safe) [approval: Tony].
```

**PR-18 · Software-core hardening for the thin slice**  [Phase 2 · WS-B]  (code · conditional)
- **Problem.** The [VENTURE] backbone controls that a real app must add before real money — for the slice only.
- **Scope.** In: CORS locked to the prod origin (no `*`); rate-limit on public functions; input-validation layer (zod) at every boundary; Sentry (frontend + edge, env/release tagged); an append-only `audit_log` (verify + payout + role changes); branch protection + secret-guard + `npm audit` + gitleaks in CI; a **tested** backup restore (RPO/RTO recorded). Out: SLO tooling beyond the core path.
- **Data model + RLS.** `audit_log` (actor, action, target, ts, meta) — service-role write, admin read, no edits.
- **Endpoints + verify_jwt.** none new; hardens PR-17's two functions.
- **AC.** Given the policy-audit query, Then (A) returns zero rows and (B) rows are justified. / Given a public function, Then it is rate-limited. / Given a privileged action, Then an audit_log row is written. / Given backups, Then a restore has actually been performed once.
- **Test plan.** e2e: CORS rejects a foreign origin · rate-limit trips · unit: Sentry beforeSend strips PII · restore drill logged.
- **Security checklist.** CORS lock [CONFIG] · rate-limit [VENTURE §4] · Sentry [VENTURE §7] · audit-log [VENTURE §7] · branch protection + supply-chain scan [CONFIG]+[VENTURE §3/§8] · tested restore [VENTURE §6].
- **Secrets (names only).** SENTRY_DSN (edge), VITE_SENTRY_DSN (public).
- **Dependencies.** PR-17.
- **Human gate.** none new (rides PR-17's deploy gate).

**PR-19 · E-sign (IC + customer terms) + accounting (QBO) at volume**  [Phase 2 · WS-H/E]  (conditional)
- **Problem.** At contract + revenue volume, wire e-sign + accounting; before then, `legal:*` drafts + `finance:*`/xlsx cover it.
- **Scope.** In: Docusign/DocuSeal for the IC agreement + customer terms + B2B MSA/SOW; QuickBooks/Xero + CPA for TPT filing. Out: earlier (deferred per tool-mcp-stack triggers).
- **Data model.** none (vendor).
- **Tool actions + verify_jwt.** e-sign routing (`legal:signature-request`) + QBO connect; `verify_jwt`: N/A.
- **AC.** Given a finalized IC agreement, Then it routes for signature with the correct signer order and is human-gated. / Given first revenue/TPT, Then QBO is connected + the CPA confirms AZ+city TPT.
- **Test plan.** manual: a test envelope routes; QBO COA matches PR-10.
- **Security checklist.** DPA with e-sign + accounting vendors [VENTURE §9] · least-privilege [§10].
- **Secrets (names only).** DOCUSIGN_* / QUICKBOOKS_* (at connect).
- **Dependencies.** PR-13, PR-10.
- **Human gate.** SIGNATURE/FILING = Tony + ⚖/CPA.

### REJECTED — Phase 3 (specced NEVER here)
Custom detailer mobile app · route optimization · ratings/quality ML · dynamic pricing · multi-metro mechanics · priority-placement fees · supply-wholesale. Each is the overbuild trap this venture exists to catch; it earns itself only after a metro is liquid AND a named capability is proven missing (03 §0, 01 §5).

---

## 4. Coverage matrix — the proof nothing is dropped

### 4.1 All 15 domains → disposition (the completeness pass, on the face of the deliverable)

| # | Domain | Disposition | Where it lands (source → workstream/PR) |
|---|---|---|---|
| 1 | Strategy & Concept | **CONSUMED** | 00 + 01 → the whole brief's premise; CONDITIONAL-GO governs sequencing |
| 2 | Product & Build | **CONSUMED** | 03 §0–3 → WS-A (thin); build shape concierge→conditional hybrid, custom REJECTED |
| 3 | Engineering & Infra backbone | **CONSUMED** (re-pointed) | 03 §4 + backbone → WS-B; software core N/A in P0, applies to PR-17/18 only |
| 4 | Security, Roles & Governance | **CONSUMED** | backbone §2–§10 → WS-B/I; vendor-config posture P0, RLS/roles P1 |
| 5 | Brand & Design | **CONSUMED** | 02 §2 tokens → PR-3 (booking/landing theme) + PR-14 (creative) |
| 6 | Marketing / GTM | **CONSUMED** | 02 §3 → WS-F/PR-14 (two motions, $0 paid until liquidity) |
| 7 | Content & Social | **CONSUMED** | 02 §4–5 → WS-F/PR-14 (before/after anchor, GBP+Nextdoor+IG/FB, local-SEO, 2-wk calendar) |
| 8 | Sales & CRM | **CONSUMED** | 04 §2 → WS-D/PR-8 (supply) + PR-9 (B2B); consumer = booking funnel, not CRM |
| 9 | Finance & Accounting | **CONSUMED** | 04 §1 → WS-E/PR-10 (take-rate ledger, payout float, reserve; CPA gates) |
| 10 | Legal, Entity & Compliance | **CONSUMED** | 04 §3 → WS-H/PR-13 (marketplace contract set + six regimes; ⚖/CPA gated) |
| 11 | Operations, Org & Roles | **CONSUMED** | 04 §4 → WS-I/PR-15 + **WS-J/PR-J\*** (marketplace-native functions given owners) |
| 12 | Customer Support & Success | **CONSUMED** | 04 §6 → WS-G/PR-12 (two populations + claims lane) |
| 13 | Data & Analytics | **CONSUMED** | 04 §5 → WS-C/PR-11 (liquidity north-star; P0 event stream = Airtable+Connect) |
| 14 | Tool & MCP Stack | **CONSUMED** | 03 §2 + tool-mcp-stack → §5c connect-these list |
| 15 | Fable-Ready Build Spec | **THIS DELIVERABLE** | the capstone (05-fable-brief) — consumes 1–14 |

*No domain is N/A for this venture; each of 1–14 is consumed. (Sub-regimes are marked N/A inside §5d, not at the domain level.)*

### 4.2 Product-spec acceptance criteria → PR

| AC (from 03 §3 + the manual-QA capstone) | PR |
|---|---|
| Paid booking + ≥1 available vetted detailer → match → both confirmed + arrival window → `scheduled` | PR-7 (loop), PR-3/4 (surface/comms) |
| Job complete WITH before/after photos → ops verify → funds release net of 22% → **never before verified** | PR-7 + PR-2 (Connect) |
| Maintenance cancel → self-serve + immediate (ROSCA) | PR-7, PR-3 (CTA), PR-13 (terms) |
| Damage claim → photos + coverage attach → guarantee-reserve path | PR-12 + PR-J\* (runbook) |
| (P1) Customer/detailer/ops each read only their permitted booking rows; payout SELECT-own | PR-17 (multi-party RLS) |
| (P1) Non-ops cannot verify a job; duplicate webhook → one payout row | PR-17 |
| (P1) Client cannot UPDATE price/role | PR-17 |

### 4.3 Engineering-backbone control → PR / WS / gate

| Backbone control (tag) | Where it lands |
|---|---|
| RLS on + policy-audit clean [STARTER]+[CONFIG] | **N/A in P0 (no app)** → PR-17 (the slice's tables) |
| Typed roles + server-side admin check [VENTURE] | PR-17 (roles first appear with the slice) |
| Explicit `verify_jwt` + self-auth if false [STARTER]+[CONFIG] | PR-17 (verify-job=true; connect-webhook=false → signature) |
| CORS lock · rate-limit · input validation [CONFIG]/[VENTURE §4] | PR-18 |
| Webhook signature-verified + idempotent [STARTER] | PR-17 (Connect webhook) |
| PII classified/minimized; none in logs/analytics [VENTURE §5/§7] | PR-6 (classify) + PR-11 (PII firewall) |
| Secret-guard · env-only · no VITE_ secret [STARTER]+[CONFIG] | PR-2/6 (P0 vendor keys) + PR-17/18 (repo) |
| Tested backup restore + RPO/RTO [VENTURE §6] | PR-18 (slice); P0 "backup" = exported Airtable/Stripe record |
| Sentry + audit log + consent-gated analytics [VENTURE §7] | PR-18 (Sentry/audit) + PR-11 (consent/PII firewall) |
| CI green + branch protection [STARTER]+[CONFIG]/§8 | PR-18 (slice CI) — **N/A in P0 (no repo)** |
| **Minimum bar — Product/safety/liability group** [VENTURE] | **The SERVICES go-live gate (§2.4):** insurance in force · licensure/permits + AZ TPT · unit economics validated · marketplace compliance cleared |
| Money-transmission analysis [VENTURE §9-B] | PR-2 + PR-13 (routed via Connect → NOT a transmitter) |
| Compliance regime(s) decided + controls placed [VENTURE §9] | PR-13 + §5d |
| Access register + MFA + on/offboarding [VENTURE §10] | PR-6 + PR-15 |

---

## 5. Consolidated lists

### 5a. Human gates (one list, all PRs) — the founder's attention hits exactly the irreversible points
1. **Deploy** the landing/booking surface — reversible (unpublish). [PR-3]
2. **Stripe Connect authorization** + any real test-mode account. [PR-2]
3. **Spend** — FCRA checks, insurance verification, CPA/attorney half-day, FSM, e-sign, accounting, any tool/ad dollar ($0-until-proven). [PR-5/9/10/13/16/19]
4. **~Aug-31 LIQUIDITY GATE** — proceed to P1 or stop + reallocate (kill window). [§2.4]
5. **SERVICES minimum-bar GO-LIVE GATE** before the first LIVE paid match — insurance in force + licensure/TPT (CPA) + worker-class review (⚖) + FCRA vendor + low-water SOP + Green-Guides/ROSCA review + funded reserve. [§2.4]
6. **CPA gates** — AZ+city TPT treatment + who remits, principal-vs-agent (ASC 606), 1099 issuance, reserve methodology. [PR-10]
7. **⚖ gates** — IC detailer agreement + worker classification, Customer ToS + guarantee + arbitration, privacy + DPAs, FCRA set, B2B MSA, TM path; **every signature/filing**. [PR-13]
8. **Detailer deactivation** — reputational + worker-class sensitive. [PR-8/J\*]
9. **Damage-claim payout / guarantee-reserve draw** above threshold — irreversible. [PR-12/J\*]
10. **Below-take-rate-floor** B2B deal. [PR-9]
11. **External send / publish** — Gmail/SMS/social/GBP all drafts-only. [PR-4/14]
12. **(P1) Prod migration** of `bookings`/`payouts` + **payments test→live keys** — with a written rollback. [PR-17]
13. **Access grant/revoke** + any FT hire. [PR-15]

### 5b. Secrets register (names only — never a value)

| Secret (name) | Public? | Where set | PR |
|---|---|---|---|
| AIRTABLE_PAT | no | secrets manager (scoped) | PR-1 |
| STRIPE_SECRET_KEY (`rk_test_` → live at go-live) | no | Stripe dashboard / secrets mgr; P1: `supabase secrets` | PR-2 |
| STRIPE_CONNECT_CLIENT_ID | no | Stripe dashboard | PR-2 |
| STRIPE_WEBHOOK_SECRET | no | edge env (P1) | PR-17 |
| TWILIO_ACCOUNT_SID · TWILIO_AUTH_TOKEN (or API key/secret) | no | vendor / secrets mgr | PR-4 |
| CHECKR_API_KEY (or CERTN_API_KEY) | no | vendor / secrets mgr (ops-scoped) | PR-5 |
| QUICKBOOKS_* · DOCUSIGN_* · JOBBER_/HOUSECALL_* | no | vendor (at connect) | PR-10/16/19 |
| SUPABASE_SERVICE_ROLE_KEY | no | `supabase secrets` / edge env (P1 only) | PR-17 |
| VITE_SUPABASE_URL · VITE_SUPABASE_ANON_KEY | **yes** | host build env (P1 only) | PR-17 |
| SENTRY_DSN (server) · VITE_SENTRY_DSN (public) | mixed | edge env / host (P1) | PR-18 |
| VITE_POSTHOG_KEY | **yes** | host build env (P1) | PR-11 |

*P0 carries NO `VITE_*`, NO service-role key, NO repo env — keys live in vendor dashboards + a secrets manager. The `VITE_*` public boundary applies only from PR-17.*

### 5c. Connect-these-tools (tool · status here · trigger · how)

| Tool | Status here | Trigger | How |
|---|---|---|---|
| Airtable | **LIVE** (MCP + skills) | now (the SOR) | in-session |
| Gmail · Google Drive · Canva | **LIVE** (drafts-only Gmail) | now | in-session |
| Stripe **Connect** | **OFF** + connector **needs-authorization** | when P0 → a real test-mode account | authorize via claude.ai connector settings (Tony) — **not blocking for names-only spec** |
| Twilio | **SKILL** (`twilio-*`) + API | now (SMS) | dev-kit; A2P/10DLC registration gates live traffic |
| Booking (Cal.com / Square Appointments) | **REGISTRY / DIRECT** | now | registry OAuth or vendor |
| Landing (Carrd / WordPress.com) | WordPress **OFF** (installable) | now | enable in chat / vendor |
| FCRA vendor (Checkr / Certn) | **DIRECT** (no MCP) | at first vetting (Tony spend gate) | vendor account + API |
| Insurance COI tracker | **DIRECT** | at first detailer | vendor / manual doc-review |
| **FSM (Jobber / Housecall Pro)** | **DIRECT — no MCP, no swap trigger in tool-mcp-stack** (FRICTION #12) | P1, hand-dispatch breaks | vendor direct |
| QuickBooks / Xero | **REGISTRY** | first revenue / TPT filing | `SearchMcpRegistry` → OAuth |
| Docusign / DocuSeal | **REGISTRY** | first IC agreement at volume | `SearchMcpRegistry` → OAuth |
| PostHog + Sentry | **REGISTRY** | P1 (an app exists to instrument) | `SearchMcpRegistry` → OAuth + SDK |
| Supabase · Vercel · GitHub | **LIVE / LIVE / DIRECT** | **P1 thin slice ONLY** (not P0 — deliberately absent) | MCP / native git |
| Supabase connector | **needs-authorization** | **NOT needed in P0** (no app) | authorize only if PR-17 is built |

### 5d. Compliance regime + its controls (decided upstream; carried, not re-derived)

**LIVE regimes (apply every one):**
- **Worker classification (1099)** — FLSA + AZ common-law; **ABC/AB5 on any CA expansion (a strategic gate, not a rollout detail).** Control: preserve genuine independence (sets availability, own kit, can decline, can multi-home; do NOT over-control — dictating price/uniforms/exclusivity raises reclassification); **who sets the price is the live tradeoff.** IC/employment attorney review before the first paid match. **[Added regime — NO backbone §9 row.]**
- **Clean Water Act stormwater** — wash-water runoff to storm drains is regulated; AZ water scarcity. Control: **low-water / water-reclamation, no storm-drain discharge**, documented as a supply SOP (PR-J\*). **[Added regime — NO backbone §9 row.]**
- **FCRA background checks** — control: compliant vendor, permissible purpose, disclosures, adverse-action notices; report vendor-held (PR-5). **[Added regime — NO backbone §9 row.]**
- **Money transmission / KYC** — control: route funds through **Stripe Connect as marketplace-facilitator so Lustre is NOT the transmitter**; Connect handles payee KYC + 1099 (PR-2). [backbone §9-B — handled well.]
- **Licensure / permits + insurance** — control: AZ + city TPT licenses; **TPT treatment of detailing confirmed with a CPA (hard dependency, before pricing final)**; per-detailer commercial-auto + GL + **garage-keepers/CCC** verified current; platform GL; the guarantee sits on verified coverage (PR-5/10/13, §2.4 gate). [backbone minimum bar + §9.]
- **FTC Green Guides + ROSCA/click-to-cancel** — control: every claim literally true; **no eco/"waterless"/"non-toxic" overclaim** (guardrail); Maintenance = clear disclosure + one-click cancel (PR-3/13/14). [backbone §9-FTC.]

**Explicitly N/A (struck so no one bolts on an irrelevant regime):** HIPAA/PHI · LegitScript · food-safety/health-code · FDA/CPSC product labeling · Prop 65 (no manufactured good) · money-transmission-as-principal · SOC2 (not B2B-enterprise at this stage). PCI = SAQ-A only (card data stays with Stripe).

---

## 6. Definition of done (whole brief)

The brief is complete when:
- Every workstream DoD (§1, A–J) is met, verified in its real environment (tool wired + one real test-mode transaction/record observed; SOP run end-to-end).
- Every product-spec AC (§4.2) maps to exactly one PR; every applicable backbone minimum-bar control (§4.3) maps to a PR, a workstream, or a gate; all 15 domains have a disposition (§4.1).
- The **P0 acceptance capstone** (PR-7) passes: one real **test-mode** two-sided job — charge → complete + photos → verify → payout net of 22% — plus one-click Maintenance cancel + a claim with photos attached.
- The four consolidated lists (§5) are present; **no secret value** anywhere; every irreversible action carries a human gate + rollback.
- The **~Aug-31 liquidity gate** and the **services minimum-bar go-live gate** (§2.4) are cleared with approvals before any LIVE dollar; P1 code (PR-17/18) is built **only** past the liquidity gate; Phase 3 custom remains REJECTED.
- CI green is a P1-only criterion (there is no repo in P0); the P0 equivalent is the manual-QA capstone.

---

## 7. FRICTION appendix — where the capstone method fought the physical/marketplace shape

Residual friction in the `/fable-brief` method + this orchestration, as applied to a two-sided physical-services marketplace. (Upstream skill friction is already logged in 01–04; this is the CAPSTONE layer.) Returned to the orchestrator.

1. **`undefined/` path bug (again).** The task said consume `undefined/00-…` and write `undefined/05-fable-brief.md` — an un-interpolated template variable. Same correction 01–04 each logged; written to the run dir. The capstone Load-first also expects `ventures/<slug>/venture-context.md` + separate per-skill outputs (`finance-ops`, `sales-crm`, …), but this venture's inputs are consolidated into `00–04` in a run dir — Fable would guess where inputs live.
2. **No first-class Physical-Ops / Trust-&-Safety workstream.** The nine-workstream taxonomy is software-shaped (A Product, B Security, C–I back-office); the largest, most expensive, most risk-bearing part of Lustre — vetting, dispatch, arrival windows, photo evidence, damage-claim adjudication, the CWA low-water SOP, deactivation — has **no home** and smears across "ops/support." Added **WS-J** to prevent the exact "whole function gets missed" this capstone exists to stop.
3. **WS-A is the stated critical path; for Lustre it is nearly empty.** The method: "WS-A and WS-B are the critical path." Lustre's critical path is WS-J + WS-D-supply + WS-H (physical/compliance). A builder following the method's stated critical path would build software that is *off* the path.
4. **The PR template is a code artifact by default.** Its spine — "Data model + RLS," "Endpoints/edge functions + `verify_jwt`," migrations — is dead weight for "vet a detailer," "verify insurance," "adjudicate a claim," "remit AZ TPT," "document the low-water SOP." There is no native **SOP / runbook / human-process PR shape**; config-PRs are acknowledged but the template still forces RLS/endpoint fields that a physical-ops task has to leave near-empty or Fable invents a schema.
5. **"Payments go-live gate" assumes a Stripe live-key swap.** The phase model routes the critical path to "test-mode → payments go-live." Lustre's go-live gate is the **services minimum bar** (insurance in force, TPT confirmed, IC agreement executed, reserve funded) — the backbone's own minimum bar says so, but the fable-brief phase language still frames go-live as a key swap. Followed literally, Fable gates on the wrong thing.
6. **Single-owner RLS is the modeled default.** The template's `ownership: <owner column> = auth.uid()` can't express Lustre's **co-owned booking (customer + detailer + ops) + service-role payout**. A builder authoring PR-17 from the template defaults to single-owner and gets the marketplace data model wrong (flagged upstream in 03; the capstone template does nothing to fix it — carried explicitly in PR-17).
7. **Two-sided everything has no template slot.** One WS-D (CRM), one WS-F (GTM), one WS-G (support). Lustre runs each **twice** (supply + demand); the **supply pipeline is the binding constraint** and has no native workstream, stage set, CAC line, lifecycle, or support queue — all bolted on. "One AC → exactly one PR" and the single-funnel framing don't model a two-sided marketplace.
8. **AC→PR is thin; the real coverage is regime→gate.** Most Lustre "ACs" are physical/manual-QA, and the domains that actually gate launch (worker-classification, CWA stormwater, FCRA, insurance) have **no product-spec AC at all** — they're compliance gates. A method optimizing "every AC mapped" under-weights the compliance surface that truly gates the first dollar; the coverage matrix's AC sub-table is the weakest proof for this venture.
9. **Content & Social (domain 7) collapses into one WS-F row.** GBP and Nextdoor (the two highest-intent local surfaces) and local-SEO city/service pages — first-class content types the underlying skills have no slot for — risk being treated as a single config-PR when they are the demand engine + a separate supply-recruiting channel. Domain 7 is present but structurally thin in the taxonomy.
10. **Legal & Compliance (WS-H) has no PR-level acceptance.** The IC agreement (marquee) and the six regimes are the most product-shaping surface, yet WS-H is doc-drafting with no testable "done." The Given/When/Then template can't express "worker-class independence preserved" or "TPT confirmed with a CPA" as an AC — they're attorney/CPA gates. Fable has no way to "verify" the highest-risk workstream except by naming the gate.
11. **The software backbone has no clean "N/A until P1" for a whole four-group core.** The method wants every minimum-bar box mapped to a PR/gate; in P0 the environments/RLS/runtime/reliability software groups are largely N/A (no app), with **no target**. The method doesn't restate the backbone in vendor-config terms (the venture files did, at 03 §4 / 04 §4c), so a builder either chases boxes with no target or reads the blanks as holes.
12. **No FSM (field-service management) concept anywhere.** The tool-mcp-stack + connect-these have no Jobber/Housecall Pro row and no swap trigger; the capstone inherits the gap. The eventual P1 platform's correct off-the-shelf answer (a vertical FSM) is invisible; the method's instinct is "build on Supabase" — the exact overbuild the venture warns against.
13. **Secrets register + `VITE_*` boundary assume a repo.** P0 has no `.env`, no service-role key, no Supabase; the secrets that matter (Connect, Twilio, FCRA-vendor keys) live in vendor dashboards, not `supabase secrets`/host env. The template's "set via `supabase secrets` / host env" and the `VITE_*` framing don't fit a no-app concierge stack — Fable would look for a repo env that doesn't exist.
14. **14-vs-15 domain count.** The method's completeness pass inventories "14 upstream inputs"; the architecture defines **15 domains** (fable-brief is domain 15). The task asked for "all 15 domains" dispositioned. Minor, but the off-by-one means a literal reader could leave the capstone itself off its own coverage matrix (handled in §4.1).

*Prepared as a review-ready plan. Not licensed tax, accounting, or legal advice — every ⚖/CPA gate must be cleared by the named professional before reliance, filing, signature, spend, or send. Sequenced behind the primary bet (Executive Edge) per 01-concept §5; funds only the concierge liquidity test until the ~Aug-31 gate.*
