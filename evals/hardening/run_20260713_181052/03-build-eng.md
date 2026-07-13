---
name: Build & Engineering Package — Milpa (Milpa Financial, Inc.)
venture: Milpa — mobile-first bilingual remittances, run as a licensed US MSB (US → Mexico, then Guatemala)
archetype: Regulated consumer fintech — cross-border remittance MSB; strictly transactional (fixed fee + FX spread)
stage: Build / Engineering (post-concept; pre-license)
date: 2026-07-13
skills/docs run (in sequence): /venture-bootstrap (buy-vs-build-vs-none + stack) → /product-spec (custom surface) → engineering-backbone (security posture) → tool-mcp-stack (the stack)
loads honored: founder-profile/PROFILE.md, guardrails.md, operating-playbooks.md (§3 economics-first, §8 AI-native build), voice-and-brand.md; venture brief 00-venture-idea.md; concept package 01-concept.md
note: Vendors are named as archetypes only. No credentials, keys, or secrets are materialized anywhere. Nothing is built, deployed, or sent — this is a build plan for approval, not an executed build.
---

# Milpa — Build & Engineering Package

**One line.** For Milpa, software is not the product and not the moat — the license stack and the BSA/AML program are. The correct build is therefore **buy every regulated and undifferentiated capability as a vendor, and build only the thin orchestration core and bilingual app that no vendor hands you.** This package names what to buy vs. build, specs the custom surface implementation-ready, states the security posture that actually applies, and lists the real tool/vendor stack.

**Scope note (read first).** This is a *hybrid* build, and the build layer's own framing does not have a clean slot for it. Milpa is neither "configure one off-the-shelf platform and go live" (there is no Shopify-for-remittances) nor "custom software because the software is the moat" (it isn't — the license is). It is: **assemble a regulated multi-vendor stack, and build a thin custom orchestration layer + a mobile app on top.** Where the skills/docs assumed a custom SaaS app, RLS-as-the-boundary, Stripe subscriptions, MRR, or a 72-hour launch, the substance is adapted and the mismatch is recorded in **Appendix A — Build-layer friction log**.

---

## 0. Build-shape verdict (the headline)

> **Do not build the money-movement infrastructure. Buy it. Build the orchestration, the ledger, the disclosures, and the app — nothing else.**

The overbuild guard (Tony's #1 failure mode — "the cathedral before the screwdriver") is unusually load-bearing here, because a fintech invites you to build KYC, screening, monitoring, FX, and payout rails yourself. Every one of those is a mature vendor category. Milpa's entire software job is:

1. A **bilingual, mobile-first app** (Spanish-first) that captures a send and shows an honest, exact quote.
2. A **pricing/quote engine** that computes the Reg E pre-payment disclosure (fee + FX rate + exact payout amount) deterministically.
3. A **transfer orchestrator** — a persisted state machine that sequences fund → screen → pay out → settle, with idempotency, compensation, and the Reg E 30-minute cancellation window as a hard invariant.
4. An **append-only, double-entry ledger** reconciled against the sponsor bank and payout aggregator — the treasury source of truth.
5. **Compliance glue** — the code that calls the IDV, sanctions, and monitoring vendors and *blocks payout release until OFAC screening clears*.
6. **Internal consoles** — a compliance case queue, a treasury/float view, and a support lookup.

Everything else is a vendor API call. The hard, expensive, gating work — FinCEN registration, per-state MTLs + surety bonds, the sponsor-bank/FBO relationship, the BSA/AML program under a named Compliance Officer, the independent AML audit — is **non-software** and runs on its own track (regulatory counsel + compliance hires + banking partnerships). The software cannot legally move a real dollar until that track completes (~9 months). This reorders the definition of "done" and is called out in §5.

---

## 1. Buy-vs-build-vs-none decision (blocking gate)

**Economics gate (blocking): CLEARED.** The concept package (01-concept.md) established a defined positioning (Spanish-first, anti-junk-fee, exact-payout guarantee + Guatemala rural depth) and a priced offer whose unit economics close (~$7.44 gross rev / ~$3.93 contribution / ~53% on a $380 send; LTV/CAC >3×). Proceed.

**Decision: HYBRID — vendor-assembled regulated stack + a thin custom orchestration core.** Recorded against venture-bootstrap's trichotomy:

| Branch | Verdict for Milpa | Why |
|---|---|---|
| **None** (no software) | Rejected | A consumer remittance app cannot take a send by invoice/DM. Software is required to originate, disclose, and track transfers. |
| **Off-the-shelf / no-code** (default) | Rejected as *sole* branch | No single platform is "a licensed remittance business you configure." The regulated *capabilities* are off-the-shelf (IDV, screening, monitoring, payout, FX), but they are ~9 separate vendors integrated by API, not one Shopify-style console — and there is a genuine custom surface (app + quote engine + orchestrator + ledger) no platform delivers. |
| **Custom software** (the software is the moat) | Rejected as *framing* | The software is table stakes, not the moat — the license stack is. Building custom must be scoped to the thin slice only; a full bespoke money-movement platform would be the exact overbuild the guardrails forbid. |
| **Hybrid — buy the 90%, build the thin slice** | **CHOSEN** | Buy every regulated/undifferentiated capability as a vendor; build only the orchestration + ledger + disclosures + bilingual app. This is venture-bootstrap's "hybrid" case, scaled up: the custom slice is a real app + orchestrator (not "one edge function"), and the buy side is a *stack* of regulated vendors (not one platform). |

**Consequence:** product-spec runs in **both** modes at once — a *configuration spec* for the vendor stack **and** a *data-model + interface spec* for the custom orchestrator. §4 does both.

---

## 2. What is bought vs. what is built

### 2a. BUY — the vendor stack (every regulated + undifferentiated capability)

Named as archetypes; actual selection is a **procurement + due-diligence exercise**, not a code decision. Each vendor is a BSA/AML-relevant third party requiring a signed DPA (and, per GLBA, a data-safeguards attestation), initial due diligence, and ongoing oversight — that oversight is itself a compliance deliverable, not just a contract.

| Capability | Vendor archetype (names-only) | Why buy, never build | Oversight obligation |
|---|---|---|---|
| **Sponsor bank + FBO / settlement + pre-funded float** | An MSB-experienced sponsor bank | This is a banking license + balance sheet, not software. Hardest single partnership; MSB de-risking is real. | Redundant second bank; float sizing; Nacha (ACH) compliance; is a §1-condition kill gate. |
| **Pay-in / ACH funding + bank-account linking** | An ACH processor + account-verification provider | Regulated money-in rail + Nacha returns handling; commodity. | Return/NOC handling; funding-fraud reserve; signature-verified webhooks. |
| **Pay-in / debit-card funding** (roadmap, not launch) | A card processor with hosted tokenization | PCI scope; never touch PAN. | SAQ-A boundary; card data stays with the processor. |
| **Payout rails — Mexico (SPEI/CLABE) + cash pickup** | A LatAm payout aggregator | Local paying-agent licenses + endpoint integrations (Elektra/Bancoppel/OXXO/Telecomm). | Landed-cost term sheet; endpoint SLA; the local partner holds MX (CNBV) authorizations. |
| **Payout rails — Guatemala (Banrural/Banco Industrial) + cash pickup** | The same or a second aggregator | Banrural rural reach; local IVE/SIB-regulated partner. | Deferred to phase 2 (Mexico-first). |
| **FX / liquidity** | A wholesale FX/liquidity provider | Interbank pricing + settlement; treasury, not code. | Rate feed integrity; hedging/exposure limits on float. |
| **KYC / CIP identity verification (IDV)** | An IDV vendor (document + selfie + database, ITIN/passport) | Regulated identity assurance; never rebuild. | Store the vendor *reference + decision*, not raw documents (data minimization). |
| **OFAC / sanctions screening** | A real-time sanctions-screening vendor (SDN + watchlists) | Must screen every sender, recipient, transaction; specialized list management. | Screen *before funds release* (blocking); tune false positives. |
| **Transaction monitoring + AML case management** | A monitoring/case-management platform | Structuring/velocity/mule rules, risk scoring, SAR workflow; specialized. | Rule tuning; SAR/CTR filing; independent testing of the model. |
| **Payment operations + ledger/reconciliation** (buy-candidate) | A payment-ops/ledger service | *Strong buy candidate.* Reconciliation against bank + aggregator is undifferentiated plumbing. | See §2b — build only if no vendor fits the double-entry + corridor model. |
| **SMS / WhatsApp status + OTP** | Twilio (skill available in-session) | Notifications + verify; commodity. | A2P/10DLC + WhatsApp sender registration gates traffic. |
| **Transactional email (receipts, Reg E receipt copies)** | SendGrid (skill available) | Deliverability; commodity. | SPF/DKIM; no PII beyond the receipt. |
| **App backend infra (DB/auth/functions/storage)** | Supabase (MCP live) | Off-the-shelf infra; inherit the security spine. | RLS, verify_jwt, secrets — §5. |
| **Errors / product analytics / web-fallback hosting** | Sentry · PostHog · Vercel | Observability + the responsive-web fallback. | Consent-gated analytics; no PII in events. |
| **Regulatory counsel + independent AML audit + NMLS filing** | Fintech/MTL counsel + an AML auditor | Not software — the licensing critical path itself. | The gating dependency for go-live (§5). |

### 2b. BUILD — the thin custom slice (only what no vendor delivers)

| Component | Why no vendor serves it | Build note |
|---|---|---|
| **Bilingual mobile app** (iOS + Android; responsive web fallback) | No off-the-shelf branded, Spanish-first send-money app with Milpa's quote logic, saved recipients, Reg E flows, and status tracking. | Thin UI over vendor SDKs. React Native (Expo) + a shared TS core. |
| **Quote / pricing engine** | Proprietary: fee waivers, promo bands, spread by corridor × funding × payout × speed, driving the Reg E disclosure verbatim. | Pure, deterministic, unit-tested. Consumes the FX feed; emits the disclosure object. |
| **Transfer orchestrator (state machine)** | The saga that ties vendor steps together with idempotency, compensation, and the 30-min cancel window is Milpa's money-movement core. | Persisted state machine in Postgres, advanced by signature-verified webhooks + a scheduled reconciler. Temporal/Inngest only at scale. |
| **Double-entry ledger + reconciliation** | The auditable record of every fee, spread, FX rate, vendor cost, and FBO float position, reconciled to bank + aggregator. | Append-only, immutable, service-role-only. **First check the payment-ops buy-candidate (§2a) — build only if none fits.** |
| **Compliance glue + funds-release gate** | Vendors *detect*; the orchestration that *blocks payout until OFAC clears* and opens a case on a hit is custom and compliance-critical. | The single money-out choke point. Non-negotiable invariant. |
| **Reg E disclosure / receipt generator** | Legally mandated bilingual content (pre-payment disclosure, receipt, 30-min cancel, error-resolution intake, funds-availability date). | Rendered from the `quote`; persisted immutably with the transfer. |
| **Internal consoles** (compliance queue · treasury/float · support lookup) | Role-gated internal views over Milpa's own data. | Can lean on the monitoring vendor's console + Airtable/Retool for v1; build only the gaps. |

---

## 3. Stack / platform decision

Need → choice → why → rejected alternative. Deviations from Tony's proven default stack are flagged.

| Need | Choice | Why | Rejected / deviation |
|---|---|---|---|
| App frontend | **React Native (Expo)** + a responsive **React web** fallback sharing a TS core | Brief is explicit: mobile-first, iOS + Android, web as fallback. | **Deviates from the web-only default** (Vite static site). Acknowledged in venture-bootstrap's stack matrix ("mobile-first → Expo/React Native") but downstream (starter, CI, hosting, e2e) is web — see friction log. |
| Auth | **Supabase Auth** (phone + email; OAuth later) | Underbanked, phone-first senders → phone/OTP primary. Inherit the security spine. | Enterprise SSO/SAML → not needed. |
| App data + row security | **Supabase Postgres + RLS** | Sender-owned data (profile, recipients, quotes-as-viewed) is owner-scoped CRUD; RLS fits. | — |
| Money-movement state + ledger | **Postgres (service-role-only, append-only) via the orchestrator** | The ledger and transfer state are *system-managed*, not user CRUD — written only by the orchestrator, never the client. | Client-writable "orders" table (the SaaS default) is **wrong** here — money state is never client-authored. |
| Server logic / orchestration | **Supabase Edge Functions** (webhook handlers + step functions) + **pg_cron** reconciler | Thin orchestration fits edge functions triggered by webhooks + a scheduled job. | Long-running durable workflows at scale → **Temporal / Inngest** (deviation trigger, not v1). |
| Pay-in / pay-out / FX | **Vendors (§2a)** — ACH processor + payout aggregator + FX provider + sponsor-bank FBO | Regulated rails; buy, never build. | **Stripe is NOT the payment rail here** — it does not do cross-border payout to SPEI/Banrural/cash pickup. The default stack's Stripe assumption does not apply. |
| Ledger / reconciliation | **Buy-candidate first** (payment-ops/ledger service); build the double-entry core only if none fits | Undifferentiated plumbing; overbuild guard. | In-house-from-scratch ledger rejected unless procurement fails. |
| Card data | **Processor-hosted tokenization (SAQ-A)** | PAN never touches Milpa servers. | Storing/handling PAN → SAQ-D + QSA. Never. |
| SMS / WhatsApp / email | **Twilio + SendGrid** (skills in-session) | Status notifications, OTP, receipts. | — |
| Errors / analytics / web hosting | **Sentry · PostHog · Vercel** (web fallback) | Observability + the responsive-web build. | Mobile crash reporting is a Sentry-mobile / Crashlytics add the web stack doesn't cover — see friction log. |
| Ops / CRM / internal trackers | **Airtable** (MCP live) | Support intake, vendor-oversight register, case tracking at v1. | Dedicated helpdesk (Intercom) at ticket volume. |
| Source control / CI | **GitHub + Actions** | Standard; inherit conventions. | — |

**Net:** the app backend inherits Tony's proven Supabase spine and its security conventions wholesale. The *payment* layer shares none of the default Stripe stack — it is a regulated-vendor integration. The *frontend* deviates to mobile.

---

## 4. Product-spec — the custom surface

Implementation-ready per /product-spec. Because the build is hybrid, this runs both variants: a **configuration schema** for the vendor stack (§4d) and a **data model + interface surface** for the custom orchestrator (§4e–§4f).

### 4a. Build shape
Hybrid. Custom: bilingual app + quote engine + transfer orchestrator + ledger + disclosure generator + internal consoles. Off-the-shelf (configured, not built): the IDV, sanctions, monitoring, ACH, card, payout, FX, and sponsor-bank vendors.

### 4b. Problem & success metric
**Problem:** a sender needs a known amount of money delivered to family reliably, quickly, and without a hidden rate markup — and the business may not release a single payout until the sender and recipient clear sanctions screening and the disclosure obligations are met.
**Success metric (product):** ≥ 95% of *funded* transfers reach `paid_out` within the disclosed availability window, with **zero** payouts released before OFAC screening clears (the second number is a hard compliance invariant — any breach is a launch-blocker, not a metric to optimize).

### 4c. User stories (roles from the venture context only)
- **Sender:** *As a sender, I want to see the exact amount my family will receive before I pay, so that I am never quietly overcharged.*
- **Sender:** *As a sender, I want to cancel within 30 minutes if I made a mistake, so that I keep the Reg E right the receipt promises me.*
- **Sender:** *As a sender, I want real-time status and a delivery notification, so that I stop worrying about whether it arrived.*
- **Compliance Officer:** *As the BSA/AML officer, I want every sender, recipient, and transaction screened before funds move and hits routed to a case queue, so that no sanctioned payout is ever released.*
- **Treasury lead:** *As treasury, I want every transfer's fee, spread, and cost booked to an immutable ledger reconciled against the bank and aggregator, so that float and margin are always provable.*
- **Support agent:** *As bilingual support, I want to look up a transfer's status and history, so that I can answer "where is my money?" without touching money state.*

### 4d. Configuration schema (the vendor stack — off-the-shelf variant)
Security posture here is **vendor-config**, not RLS/verify_jwt: least-privilege admin roles, MFA on every vendor account, a signed **DPA** (and GLBA safeguards attestation) wherever sender/recipient PII flows through the vendor, scoped + revocable API credentials per vendor per environment, and a **vendor-oversight register** (the BSA/AML third-party-oversight deliverable).

| Vendor | Objects/settings configured | Data ownership + export | Key flows to wire (trigger → action) |
|---|---|---|---|
| IDV | Verification templates (doc + selfie + DB), ITIN/passport, MX/GT locales | Raw docs owned by vendor; Milpa stores reference + decision only | onboarding submit → IDV check → `kyc_verification` decision |
| Sanctions screening | Lists (SDN + consolidated + internal), match thresholds, real-time API | Screening results owned by vendor; Milpa stores reference + disposition | pre-payout → screen(sender, recipient, txn) → clear/hit |
| Transaction monitoring | Rules (structuring/velocity/corridor/mule), risk scores, case queue | Cases owned in-platform; export for exam | funded txn → monitor → alert → `compliance_case` |
| ACH processor | Funding config, return/NOC webhooks, account verification | Funding events owned by vendor; Milpa stores refs | fund → webhook(funded/returned) → orchestrator |
| Payout aggregator (MX) | SPEI/CLABE + cash-pickup endpoints, payout + status webhooks | Payout records owned by vendor; Milpa stores refs | release → payout → webhook(paid/failed) → orchestrator |
| FX provider | Rate feed subscription, hedging/exposure limits | Rate ticks consumed; snapshots stored on the `quote` | quote request → rate snapshot → pricing engine |
| Sponsor bank (FBO) | FBO structure, settlement files, statement feed | Statements owned by bank; ingested for reconciliation | daily → statement → reconciler |

**Acceptance for the vendor stack = manual QA in each vendor's sandbox** (see §4h) — a real end-to-end *production* transaction is impossible pre-license, so the capstone is a full **sandbox** run, not a live money movement.

### 4e. Data model (the custom orchestrator — custom variant)
Migration naming `<timestamp>_<slug>.sql`; RLS on by default. Classification: `PII` / `financial-sensitive` / `internal`. **Card PANs and raw KYC documents are never stored** — only vendor references (data minimization, GLBA + PCI SAQ-A).

```
profiles            (id uuid pk = auth.uid, phone text, email text, locale text default 'es',
                     kyc_status text, created_at timestamptz)
  RLS: owner reads/updates own row. [PII]

recipient           (id uuid pk, owner_id uuid fk→profiles, country text, payout_method text,
                     account_token text /* encrypted CLABE/account ref, not raw */, name text,
                     relationship text, created_at)
  RLS: owner_id = auth.uid() for SELECT/INSERT/UPDATE/DELETE. [PII / financial-sensitive]

kyc_verification    (id, profile_id fk, vendor text, vendor_ref text, status text, decided_at)
  RLS: owner SELECT own status only; NO client writes (service-role writes decision). [internal]

quote               (id, owner_id fk, corridor text, principal_usd numeric, fee_usd numeric,
                     fx_rate numeric, payout_amount_local numeric, spread_bps int,
                     funding_method text, payout_method text, speed text,
                     disclosure_json jsonb /* the verbatim Reg E disclosure */, expires_at timestamptz)
  RLS: owner SELECT own; NO client writes (pricing engine writes via service role). [financial]

transfer            (id, owner_id fk, quote_id fk, recipient_id fk, status text,
                     funding_ref text, payout_ref text, screening_ref text, screening_result text,
                     cancel_deadline_at timestamptz /* created_at + 30min */,
                     idempotency_key text unique, created_at, updated_at)
  RLS: owner SELECT own; NO client INSERT/UPDATE/DELETE — created + advanced only by an edge
       function via service role. [financial-sensitive] — SYSTEM-MANAGED (documented omission).

transfer_event      (id, transfer_id fk, from_status text, to_status text, actor text,
                     reason text, vendor_payload_ref text, at timestamptz)
  APPEND-ONLY. No update/delete. Service-role write; officer/support/owner SELECT scoped. [audit]

ledger_entry        (id, transfer_id fk, account text /* fbo_float | fee_revenue | fx_spread_revenue |
                     payout_payable | funding_receivable | vendor_cost | fraud_reserve */,
                     direction text /* debit|credit */, amount numeric, currency text,
                     fx_rate numeric, created_at)
  IMMUTABLE, APPEND-ONLY, service-role-only. No SELECT for `user`; treasury/owner read.
  Invariant: per transfer, sum(debits) = sum(credits). [financial — source of truth]

compliance_case     (id, subject_type text, subject_ref uuid, type text /* sanctions_hit |
                     monitoring_alert | sar_candidate */, status text, assigned_to uuid,
                     disposition text, sar_filed_ref text, opened_at, closed_at)
  RLS: compliance_officer role only. Notes append-only. [internal — regulated]

audit_log           (id, actor uuid, action text, target text, at timestamptz, metadata jsonb)
  APPEND-ONLY; admins/officer read; no edits. Written on every privileged action. [audit]
```

Roles enum (server-trusted, `profiles.role`): `owner > admin > compliance_officer > treasury > support > user`. Enforced server-side; never a client flag.

### 4f. Interface surface (custom endpoints — inputs / outputs / auth / errors)
Every external input validated with a schema (zod) at the boundary; wrong method → 405; generic client errors, detailed server logs (no PII/secrets).

| Endpoint / function | verify_jwt | Input → Output | Notes / self-auth |
|---|---|---|---|
| `POST /quote` | **true** | `{corridor, principal_usd, funding_method, payout_method, speed}` → the disclosure `{fee, fx_rate, payout_amount, expires_at}` | Rate-limited per-user/IP. Snapshots the FX rate onto `quote`. |
| `POST /transfer` | **true** | `{quote_id, recipient_id, idempotency_key}` → `{transfer_id, status:'disclosed'}` | Rejects expired quote. Renders + persists the Reg E disclosure/receipt. Idempotent on `idempotency_key`. **Starts funding only — never releases payout.** |
| `POST /transfer/:id/cancel` | **true** | `{}` → `{status:'cancelled'}` | Allowed only if `now < cancel_deadline_at` and status ∈ {disclosed, funding, funded, screening}. Enforces the Reg E 30-min window server-side. Triggers refund/compensation. |
| `GET /transfer/:id` | **true** | → status + timeline (owner-scoped) | Read-only; owner or scoped support. |
| `POST /webhooks/funding` | **false** | provider event → advance `funding→funded` (or `returned→failed`) | Self-auth: **provider signature on raw body**. Idempotent on event id (unique constraint). |
| `POST /webhooks/screening` | **false** | screening result → on **clear**: allow release; on **hit**: block + open `compliance_case` | Self-auth: signature. Idempotent. **The compliance choke point.** |
| `POST /webhooks/payout` | **false** | payout event → `paying_out→paid_out` or **failure → compensation (refund) + case** | Self-auth: signature. Idempotent. |
| `reconciler` (scheduled) | **false** | cron → match `ledger_entry` vs bank + aggregator statements; flag breaks; `paid_out→settled` | Self-auth: cron shared secret / trusted role. |
| `release_payout` (internal step) | service-role | invoked only when `screening_result='clear'` AND `status='funded'` AND cancel-window handling satisfied → calls payout aggregator | **The single money-out gate.** Not client-reachable. Every release written to `transfer_event` + `audit_log`. |

Internal consoles (`/admin/*`): compliance queue (compliance_officer), reconciliation/float (treasury), transfer lookup (support) — each role-checked server-side against `profiles.role`, never a client flag.

### 4g. Edge cases & failure modes
- **Screening hit** → payout blocked, `compliance_case` opened, funds held (refund only after officer disposition); never auto-release.
- **Payout failure at the aggregator** → compensation: refund the funded amount to the sender, reverse the ledger entries, notify, log. (Reg E error-resolution path.)
- **Funding return (ACH R-code) after payout already released** → the real loss exposure; covered by the fraud/return reserve; opens a case; risk-scored at `/transfer` time to minimize.
- **Duplicate vendor webhook** → idempotent on provider event id; second delivery is a no-op.
- **Quote expired between quote and send** → `/transfer` rejects; sender re-quotes (rate moved).
- **Cancellation race** (cancel arrives as payout releases) → the 30-min deadline + a single-writer state transition resolve it deterministically; if released, cancel is refused with the disclosed reason.
- **FX slippage** beyond the snapshot → absorbed within the spread; treasury exposure limits cap it.
- **Vendor outage** (IDV / screening / payout down) → transfers hold in the pre-release state; the sender sees an honest "delayed" status, never a silent failure or an ungated release. (This is the brief's "leak shows up downstream of its cause" — surfaced as status, diagnosed at the vendor.)
- **Empty/oversized/malformed input, authz denial** → schema-rejected at the boundary; owner-scoped RLS denies cross-account reads.

### 4h. Test plan (AC → test)
Prod verification is **license-gated**, so the capstone is a full **sandbox** e2e against every vendor's sandbox, not a real-money prod run.

| Acceptance criterion | Level | Test |
|---|---|---|
| Quote shows exact payout before pay | unit | pricing engine: `principal, fx, fee → payout_amount` deterministic; disclosure object matches |
| No payout releases before screening clears | integration | `release_payout` refuses when `screening_result≠'clear'`; asserts no aggregator call |
| Screening hit opens a case, holds funds | integration | screening webhook (SDN test entity) → `compliance_case` row, transfer held |
| 30-min cancel honored, refund issued | integration | cancel at T+10m → cancelled + ledger reversed; cancel at T+40m → refused |
| Owner cannot read another's transfer | integration | RLS denies cross-uid SELECT on `transfer` |
| Duplicate payout webhook is a no-op | integration | second delivery on same event id → no state change |
| Ledger balances per transfer | unit | sum(debits)=sum(credits) invariant property test |
| Full happy path in sandbox | e2e | IDV-sandbox KYC → quote → fund(sandbox) → screen(clear) → payout(sandbox) → settle; disclosure + receipt fire |

### 4i. Non-goals (the overbuild guard, written down)
Explicitly **out of scope for v1** — build none of these until unit economics + reliability hold on the narrow pilot:
- Direct SPEI membership / a direct Mexican bank rail (use the aggregator first).
- Cash-pickup payout at launch (bank/SPEI first — the margin-protective config).
- Guatemala corridor (Mexico-first; Guatemala is phase 2).
- Debit-card funding at launch (ACH-first — protects the COGS mix, the single biggest margin lever).
- Any in-house KYC, sanctions, monitoring, FX, or card processing — all bought.
- An in-house ledger *if* the payment-ops buy-candidate fits.
- Recurring/scheduled sends, referral gamification, multi-tier rewards — after the core path is proven.
- 50-state footprint, a durable workflow engine, a custom subscriber portal — scale-triggered, not v1.

### 4j. Rollout & definition of done
- **Reversible + flagged:** corridor, state, funding method, and payout method are feature-flagged; a new state or corridor turns on behind a flag, never a redeploy.
- **Rollback:** host instant-rollback for the app; forward-only DB migrations (recovery = forward-fix); money-movement changes are demo/sandbox-scoped until verified.
- **Definition of done (adapted for a regulated build):** merged + CI green + **verified in the vendor sandboxes** (pre-license) — and, for the *money-moving* path, **not "done" in the full sense until licensure + sponsor-bank live + the go-live gate in §5 clears.** The skills' "done = verified in prod with a real transaction" is legally unreachable pre-license; sandbox-verified is the honest interim state, and it is stated as such, never reported as live.

---

## 5. Engineering & security posture

Milpa runs a real custom app backend, so the engineering-backbone's **security core applies in full** — but the payments spine must be re-derived off Stripe, and a set of **fintech-specific controls the backbone does not contain** must be added. Tags: `[STARTER]` inherited, `[CONFIG]` turn on, `[VENTURE]` build before launch.

### 5a. The SaaS security core that transfers cleanly (inherit; do not weaken)
- Three isolated envs (local/staging/prod), config env-only, `VITE_*`/public boundary sacred, no prod secret in a lower env. `[CONFIG]`
- Supabase Auth JWT as the only trusted identity; typed roles server-enforced; **RLS on by default** for sender-owned tables; system-managed tables (transfer, ledger, quote, kyc) get SELECT-own + documented write-omission. `[STARTER]`+`[VENTURE]`
- Every edge function explicit `verify_jwt`; webhooks/cron self-authenticate. `[STARTER]`+`[CONFIG]`
- Secrets env/vault only; pre-commit secret-guard; pinned + locked deps; `npm audit` + gitleaks + Dependabot in CI. `[STARTER]`+`[VENTURE]`
- Input validation at the boundary; CORS locked to origin; public endpoints rate-limited; security headers. `[VENTURE]`
- PII classification + minimization (store vendor refs, never raw KYC docs or PAN); encryption at rest + TLS. `[VENTURE]`
- Backups + a **tested restore**; health checks + uptime monitor; Sentry; consent-gated PostHog; append-only `audit_log`. `[VENTURE]`
- CI (lint · typecheck · unit · build · e2e) + branch protection + Conventional Commits + PR body format. `[STARTER]`+`[CONFIG]`

### 5b. Payments controls — re-derived off Stripe for the ACH / payout / FBO stack
The backbone's payment controls are principle-right but every concrete reference is Stripe (`stripe-webhook`, `STRIPE_WEBHOOK_SECRET`, `orders.stripe_event_id`, "Stripe Checkout → SAQ-A"). Re-derived:
- **Every inbound money webhook** (funding, payout, screening) is **signature-verified on the raw body and idempotent** on the provider event id — same discipline, three different providers, none of them Stripe. `[VENTURE]`
- **PCI SAQ-A** holds by the same principle: debit-card funding (roadmap) rides the processor's hosted tokenization so **PAN never touches Milpa servers or logs**. `[VENTURE]`
- There is **no Stripe** in the money path; Stripe/MRR revenue reads do not apply — revenue observability is GMV, take-rate, contribution, and float read from the **ledger**, not MRR.

### 5c. Fintech-specific controls the backbone does NOT contain (net-new for Milpa)
These are the controls that actually make a money-mover safe, and none is in the SaaS backbone:
- **Funds-release gated on OFAC clear** — `release_payout` is the single money-out choke point; it is structurally impossible to release before `screening_result='clear'`. A blocking invariant, enforced in code + asserted in tests. `[VENTURE]`
- **Append-only, immutable, double-entry ledger** with a per-transfer `sum(debits)=sum(credits)` invariant; no update/delete path exists. `[VENTURE]`
- **Reg E 30-minute cancellation window** as a server-side state-machine invariant (not UI). `[VENTURE]`
- **Reg E pre-payment disclosure + receipt + error-resolution + funds-availability date** rendered verbatim from the quote and persisted immutably. `[VENTURE]`
- **BSA recordkeeping:** 5-year retention of transfer + KYC decision + screening records; **Travel Rule** originator/beneficiary data attached on transmittals ≥ $3,000. `[VENTURE]`
- **SAR / CTR workflow** (SAR ≥ $2,000; CTR > $10,000/day cash — minimal, bank-funded) wired to the monitoring vendor + case queue, with filing audit trail. `[VENTURE]`
- **Treasury controls:** float sizing, FX exposure/hedging limits, daily reconciliation breaks flagged and cleared. `[VENTURE]`
- **Vendor due diligence + DPAs + oversight register** for every BSA-relevant third party (this is a compliance deliverable, not just procurement). `[VENTURE]`
- **GLBA Safeguards Rule** program (financial-data security) + **CCPA/CPRA** (California). `[VENTURE]`
- **SOC 2 readiness** — the sponsor bank and payout partners will require it; the backbone maps to the criteria, bake it in. `[VENTURE]`

### 5d. The go-live gate — re-derived for an MSB (not "switch to live Stripe keys")
The backbone's minimum-bar headline is "cleared to switch payments to live keys." For Milpa that is the wrong mental model. The correct go-live gate — the §9 money-transmission row + the "holding/moving others' funds" minimum-bar box, promoted from a buried line to the headline — is:

**Milpa may not move a real dollar until ALL hold (each human-gated per guardrails, with a rollback path):**
- [ ] FinCEN MSB registration (Form 107) filed. `[VENTURE]`
- [ ] State MTL granted in the operating state + surety bond posted + minimum net worth met (per state). `[VENTURE]`
- [ ] Sponsor-bank / FBO relationship live with pre-funded float in place (and ideally a redundant second bank). `[VENTURE]`
- [ ] Written BSA/AML program operating under a **named, senior Compliance Officer**; **independent AML audit passed**. `[VENTURE]`
- [ ] KYC/CIP, real-time OFAC screening, and transaction monitoring live and tested against known test entities. `[VENTURE]`
- [ ] Reg E disclosure / receipt / 30-min cancel / error-resolution flows verified. `[VENTURE]`
- [ ] The software is **sandbox-verified** end-to-end; the SaaS security core (§5a) + fintech controls (§5c) in force. `[VENTURE]`

*The software being shippable is one line on this list. The other lines are the business.*

### 5e. Access governance (§10)
Least-privilege + MFA on every account (Milpa's stack is ~9 sets of production vendor credentials — the largest secret surface in any Founder OS venture to date); scoped, revocable, named tokens **per vendor per environment**; secrets **names-only**, never materialized (guardrails); AI/service accounts read-first, drafts-only; a living access register reviewed quarterly; offboarding rotates every shared secret within 24h.

---

## 6. Tool / MCP stack

The tool-mcp-stack default is a software-venture stack (Supabase + Vercel + Stripe + Airtable + Workspace + SendGrid + Canva, "launch in 72h"). For Milpa, most of that stack serves the *app*, while the tools that actually gate the business are regulated vendors that appear **nowhere** in the default table and are **not in the MCP registry**.

### 6a. Available in-session (serve the app + ops layer)
| Tool | Here | Milpa use |
|---|---|---|
| **Supabase** | MCP LIVE | App backend: Postgres + Auth + Edge Functions + Storage; RLS; the orchestrator + ledger live here. |
| **Vercel** | MCP LIVE | The **responsive-web fallback** hosting only (the mobile app ships via app stores, not Vercel). |
| **GitHub** | Direct | Repo + CI. |
| **Airtable** | MCP LIVE + skills | Support intake, the **vendor-oversight register**, case tracking at v1. |
| **Twilio** | Skills + API | SMS/WhatsApp status + OTP (A2P/10DLC + WhatsApp sender registration gate traffic). |
| **SendGrid** | Skills + API | Receipts + Reg E receipt copies. |
| **Gmail / Drive** | MCP LIVE (drafts-only) | Founder + counsel comms (drafts only); the licensing data room. |
| **Sentry / PostHog** | Registry + SDK | Errors + consent-gated product analytics (add **mobile** crash reporting — the web Sentry default doesn't cover React Native). |
| **Canva / Lucid** | MCP LIVE | Brand assets; architecture/flow diagrams. |

### 6b. NEEDS TONY — the regulated vendor stack (not in the registry; procurement + due diligence; names-only)
None of these is a one-click MCP connect. Each is a contract + due-diligence + DPA + a scoped credential set, and several are launch-gating.
- **Sponsor bank + FBO** (the hardest; a §1 kill-gate) · **payout aggregator** (MX SPEI + cash pickup; then GT) · **FX/liquidity provider** · **ACH processor + account verification** · **card processor** (roadmap) · **IDV/KYC vendor** · **sanctions-screening vendor** · **transaction-monitoring/case-management platform** · **payment-ops/ledger service** (ledger buy-candidate) · **regulatory counsel + independent AML auditor + NMLS**.

### 6c. What does NOT apply from the default stack
- **Stripe** as the payment/subscription rail, and all **MRR revenue reads** — no subscriptions, no MRR, and Stripe is not the money rail. (Debit-card *funding* later may use a card processor with hosted tokenization; that is not the Stripe-Checkout-subscription pattern the stack assumes.)
- **Stripe Connect** — the stack's only "take a cut" trigger — is the wrong tool: it is marketplace split-payout + KYC, not a cross-border remittance rail to SPEI/Banrural/cash pickup, and it does not exempt Milpa from money transmission.
- The **"72h launch / MVP stack"** framing — Milpa's first legal dollar is ~9 months out behind licensing; there is no 72h path, and the stack doc offers no signal that a whole venture class can't launch fast.

---

## 7. Overbuild-guard summary (the one-screen "don't build the cathedral")

Milpa builds: a **bilingual app**, a **quote engine**, a **transfer orchestrator**, a **ledger** (buy-candidate first), a **disclosure generator**, and **internal consoles**. Milpa buys everything else. Milpa launches **one corridor (Mexico), one state at a time, ACH-funded, bank/SPEI payout** — the margin-protective, narrowest slice — and widens only after reliability + unit economics hold. The software is the screwdriver; the license stack is the cathedral, and it is being built on its own (mandatory, non-optional) track. The single most expensive mistake available here is building money-movement infrastructure that a vendor already sells — this package exists to prevent exactly that.

---

## Appendix A — Build-layer friction log (Build/Engineering-stage hardening)

Where the build-layer skills/docs assumed a custom SaaS app, RLS-as-the-boundary, Stripe/subscriptions/MRR, a single off-the-shelf platform, or a fast launch — and did not gracefully handle "mostly off-the-shelf regulated vendors + a thin custom slice + heavy non-software operations." Skill/doc · specific issue.

1. **venture-bootstrap — the buy-vs-build-vs-none *trichotomy* has no slot for Milpa's real shape.** Off-the-shelf = "configure one platform (Shopify/Cal.com/Square)"; custom = "the software is the moat." Milpa is neither: a *stack* of ~9 regulated vendors + a thin custom orchestrator, where the moat is the license, not the code. Had to record a fourth answer ("hybrid — vendor stack + thin slice"). The skill's hybrid is under-scaffolded ("Shopify + one edge function"); here the custom slice is an app + orchestrator + ledger.
2. **venture-bootstrap — the off-the-shelf branch assumes a single configurable platform and "one real test-mode order/booking" as the first-dollar milestone.** There is no remittance platform you configure and go live on, and the first real transaction is legally gated behind ~9 months of licensing. The milestone is unreachable at bootstrap — the same pre-license-illegality friction the concept package logged for sell-before-build, now recurring at the build layer.
3. **venture-bootstrap — the stack matrix is Stripe-for-payments + static-web-hosting by default.** Milpa's payment layer is ACH processor + payout aggregator + FX + sponsor-bank FBO (Stripe does none of the cross-border payout). "Mobile-first → Expo" is one deviation cell, but everything downstream (the starter, CI, "static dist/ to Vercel," e2e, the VITE_ boundary, the definition of done) stays web-only and doesn't carry to a React Native app-store build/release pipeline (TestFlight, Play Console, code-signing, app review, mobile crash reporting).
4. **venture-bootstrap / product-spec / CLAUDE.md — "definition of done = shipped + verified in prod with one real (test-mode) transaction."** For a licensed MSB, real money cannot move until licensure; "verified in prod" is legally impossible pre-launch. The build layer has no "verified in vendor sandbox / pre-production" notion, so the honest interim state (sandbox-verified, license-pending) has no vocabulary and risks being mis-reported as "not done" or, worse, "done/live."
5. **venture-bootstrap — `starters/saas` named as "the archetype" for the custom branch.** It is a web CRUD SaaS with a Stripe *subscription* (`notes`/`orders`). Milpa inherits the security *conventions* (RLS, secrets, CI, verify_jwt) but almost none of the *shape* — the custom slice is a money-movement orchestrator + ledger + mobile app. There is no fintech/orchestrator/mobile archetype; the starter's `orders` table (client-adjacent) actively models the wrong thing (money state is never client-authored).
6. **product-spec — the build-shape branch is binary (custom XOR off-the-shelf), and §4–5 fork one way.** Milpa needs *both at once*: a configuration schema for the vendor stack AND a data-model/interface spec for the orchestrator. Applied literally, the rule "don't force a data-model/RLS spec onto an off-the-shelf assembly" would suppress the (real, required) ledger data model, and "don't manufacture an RLS spec for a bought platform" collides with a venture that genuinely needs both. Had to run the two variants in parallel.
7. **product-spec — the off-the-shelf config-spec variant assumes ONE platform** (its objects/settings/automations) and a capstone "one real test-mode order end-to-end on the live platform." Milpa's buy-side is a multi-vendor regulated integration — each vendor needs due diligence + a DPA + ongoing BSA oversight, which is a compliance program, not "configure a platform + place a test order." And no live end-to-end test is possible pre-license.
8. **product-spec / engineering-backbone — the data-model/RLS template centers "every user-owned table → auth.uid() = user_id."** In a fintech the load-bearing tables (ledger, transfer state, screening results, SAR cases, FBO positions) are **system-managed, service-role-only, and immutable** — not user CRUD. The backbone covers system-managed tables as an aside; here they are the core, and the real data-integrity requirements (append-only ledger, double-entry invariant, 5-year retention, funds-release gating) have no template slot. RLS is real but far less load-bearing than in a typical SaaS.
9. **product-spec — the "security by default (custom)" line = "verify_jwt per function, validate input, RLS."** Correct but insufficient for money movement: no slot for funds-release-gated-on-OFAC-clear, the Reg E 30-min cancellation invariant, ledger immutability, or Travel-Rule data. The spec's security posture is the SaaS core, not the fintech core; had to add a whole control class (§5c).
10. **engineering-backbone — the go-live "MINIMUM BAR" headline is "cleared to switch payments to live keys" (Stripe live).** For Milpa the gate is licensure + sponsor-bank live + BSA/AML operating + independent AML audit. That gate *does* exist in the doc (§9 money-transmission row + the "holding/moving others' funds" minimum-bar box) — but it is one box among ~20 SaaS boxes, and the headline framing is the wrong mental model for a business where "switch to live keys" is the least of it. Had to promote the buried funds row to the headline and re-derive the gate.
11. **engineering-backbone — every concrete payment control is Stripe-specific** (`stripe-webhook`, `STRIPE_WEBHOOK_SECRET`, `orders.stripe_event_id`, "Stripe Checkout → SAQ-A"). The *principles* (signature-verified + idempotent webhook; PAN off-server → SAQ-A) transfer to the ACH/payout/FBO stack, but there is no non-Stripe payment reference anywhere, so the entire control set had to be re-derived for three different money providers, none of them Stripe.
12. **engineering-backbone §9 — the compliance matrix omits the two consumer-finance regimes that most shape Milpa's *software*: CFPB Reg E (Remittance Transfer Rule) and GLBA (Safeguards Rule).** The matrix has the money-transmission/KYC/AML row (licensing) but not the consumer-financial-*conduct* rows — yet Reg E is precisely what generates the app's pre-payment disclosure, 30-min cancel, receipt, and error-resolution *features*, and GLBA is the data-security program. For a doc whose thesis is "read the regime from the venture," missing the regime that produces the most product requirements is a genuine gap; had to add both.
13. **engineering-backbone / tool-mcp-stack — revenue observability assumes MRR/subscriptions throughout.** Milpa has no MRR, no seats, no subscription. The finance/observability reads are GMV, take-rate, contribution, and float, computed from the ledger — not MRR from Stripe. Pervasive small mismatch wherever "revenue" is assumed to mean subscription metrics.
14. **tool-mcp-stack — the Stripe row is "Payments / billing / subscriptions" and the only "take a cut" industry trigger points at Stripe Connect.** Neither maps: no subscriptions, and Stripe Connect is a marketplace split-payout/KYC tool, **not** a cross-border remittance rail to SPEI/Banrural/cash pickup, and it does not exempt Milpa from money transmission. The stack's single nod to transactional-cut businesses points at the wrong tool.
15. **tool-mcp-stack — no "regulated fintech / MSB / money-transmission" industry trigger, and the actual hard vendors appear nowhere in the master table.** The swap list has e-commerce, content, health/HIPAA, marketplace, enterprise, PLG, services — but not funds-handling. Sponsor bank, payout aggregator, IDV, sanctions screening, transaction monitoring, and FX — the expensive, gating tools Milpa actually runs on — have no row; they are correctly "not here," but the stack doc gives zero scaffolding for the vendor class that *is* the business.
16. **tool-mcp-stack — the "72h launch / minimum viable stack" spine is presented as the path to first dollar.** For Milpa first dollar is ~9 months out behind licensing; the MVP-stack + 72H_LAUNCH_RUNBOOK framing is structurally inapplicable, and nothing in the doc signals that a licensed-fintury venture cannot launch fast — a builder following it literally would badly mis-plan.

*Cross-cutting:* every skill's "load the active `ventures/<slug>/venture-context.md`" first step still assumes the intake artifact exists at a path that isn't populated in this eval (Milpa's context is the brief `00-venture-idea.md`) — minor, and inherited from the concept stage.

## Appendix B — What fit well (calibration, so the log is not just complaints)

- **The overbuild guard is the single most valuable lens here** and applied perfectly: "buy before build," "name the specific capability off-the-shelf can't deliver," "hybrid — buy the 90%, build the thin slice." It is exactly the discipline a fintech founder needs to not build KYC/screening/FX/payout themselves. This package leans on it as its spine.
- **The engineering-backbone *security core* transfers cleanly** to the app backend: environments/secrets discipline, the secret-guard, RLS-on-app-tables, verify_jwt with self-auth webhook exceptions, webhook signature + idempotency (by analogy, three providers), PII classification/minimization, backups + tested restore, Sentry + append-only audit log, CI + branch protection, and the §10 access-governance/MFA regime. None of this needed reinvention.
- **The backbone's system-managed-table pattern** (SELECT-own + documented write-omission, service-role writes) is exactly right for the ledger/transfer/quote tables — the doc anticipated it, even if it under-weighted how *central* it is in a fintech.
- **product-spec's Given/When/Then + AC→test discipline** works well for the custom slice, including the compliance-critical invariants (no release before screening clears; 30-min cancel).
- **The §9 money-transmission row itself is correct** — FinCEN MSB registration, state MTL licensing-or-exemption, KYC/CIP + BSA-AML + OFAC + SAR, segregated customer funds — the substance is present and accurate; the friction is that it's buried under a SaaS-shaped headline, not that it's wrong.
- **The engineering skill pack** (`engineering:architecture`, `system-design`, `code-review`, `testing-strategy`, `deploy-checklist`, `incident-response`) is archetype-agnostic and applies to the custom slice without adaptation.
- **The guardrails hold verbatim:** secrets names-only (a ~9-vendor credential surface makes this more important, not less), drafts-only comms, human-gated irreversibles (banking/license/fund-movement), $0 unvalidated spend — all fit a regulated fintech even better than a SaaS.

*The friction is concentrated exactly where the build layer hard-codes a SaaS/Stripe/subscription/single-platform/fast-launch assumption; the security, overbuild-guard, and guardrail machinery is archetype-agnostic and carried over cleanly.*
