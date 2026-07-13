---
name: Fable Master Build Brief — Milpa (Milpa Financial, Inc.)
venture: Milpa — mobile-first bilingual remittances, licensed US MSB (US → Mexico first, then Guatemala)
archetype: Regulated consumer fintech — cross-border remittance MSB; strictly transactional (fixed fee + FX spread)
stage: Capstone build brief (domain 15) — consumes domains 1–14; pre-license
date: 2026-07-13
skill: /fable-brief (SKILL.md + references/method.md)
loads honored: founder-profile/PROFILE.md, guardrails.md; docs/engineering-backbone.md; starters/saas/CLAUDE.md; docs/tool-mcp-stack.md; venture brief 00-venture-idea.md; concept 01-concept.md; GTM 02-gtm.md; build/eng 03-build-eng.md; ops 04-ops.md
note: This is a PLAN for approval, not an executed build. Nothing here deploys, sends, publishes, spends, files, signs, or moves a dollar without Tony's explicit approval at the named gate. Secrets/vendors are names-only. Every irreversible action is human-gated with a rollback path. Not legal/tax/accounting advice — regulated judgment points carry a review flag.
---

# Milpa — Fable Master Build Brief (the capstone)

**One line.** For Milpa, software is the screwdriver, not the cathedral. Fable builds a **thin custom slice** — a bilingual React-Native app, a deterministic quote/Reg-E-disclosure engine, a transfer orchestrator whose single money-out gate is *"no payout before OFAC clears,"* an append-only double-entry ledger, and role-gated internal consoles — and **wires ~9 regulated vendors by config-PR**. Everything that actually lets the app touch money — FinCEN registration, per-state MTLs + surety bonds, the sponsor-bank/FBO relationship, the BSA/AML program under a named Compliance Officer, the independent AML audit — is **non-software, on the critical path, and not executable by a coding agent.** This brief carries every upstream decision resolved so Fable never guesses, proves via a coverage matrix that all 15 domains landed, and separates the **pre-license-buildable software** from the **license-gated go-live** so nothing is ever mis-reported as live.

---

## 0. Preamble — how Fable executes this

**The operating contract (inherited, non-negotiable).**
- Inherit `starters/saas/CLAUDE.md` + `docs/engineering-backbone.md` wholesale for the app backend. **Definition of done = shipped + merged + verified** — but *"verified in prod with one real transaction"* is **legally unreachable pre-license**, so the honest interim DoD for the money path is **verified end-to-end in every vendor's sandbox** (§6 build-eng). Sandbox-verified, license-pending is stated as such and **never reported as live.**
- **Gates are never autonomous.** Deploy, app-store release, prod migration, payout release, fee/spread/promo change, capital commit, license filing, contract signature, and any send/publish are drafted with a rollback path and **human-approved** (§5 consolidated list). Secrets live in env/secret-store only, **names-only in this brief.** Comms are **drafts-only.**
- **Execute, don't re-derive.** Every stack, price, role, token, regime, and vendor decision is already made upstream and carried here resolved. A field that would force Fable to choose is a defect — it is marked **PREREQUISITE (run X)**, never invented.

**Build-authorization gate (read before starting — this brief honors the upstream verdict, it does not override it).**
The go/no-go (01-concept §5) returned **CONDITIONAL GO**: it funds the **pre-license de-risking bundle only** (sponsor-bank LOI + waitlist/CAC test + counsel's costed licensing plan). **The ~$1–2M license-and-float build is explicitly NOT authorized by that gate.** Therefore this brief is partitioned:
- **Authorized now (pre-license, reversible, ~$0-cash software + drafts):** WS-A/B/C code against vendor **sandboxes**, WS-F **drafts** (nothing publishes), WS-D partnership CRM, the waitlist. Buildable behind the gate without moving money or making a license claim.
- **NOT authorized until the capital gate clears (a separate, later founder commit):** every vendor production contract, the license filings, the float/bond/net-worth commit, and go-live. Fable **tracks** these as gates; it cannot execute them.

**Inputs consumed (with dates).** product-spec + build shape (03-build-eng, Jul 13) · economics gate + go-no-go CONDITIONAL GO (01-concept, Jul 13) · engineering-backbone v1 + minimum bar §9/§10 · starters/saas CLAUDE.md · tool-mcp-stack v1 · brand-design tokens (02-gtm Part 2) · gtm-marketing + content-engine/content-cadence/social-media (02-gtm Parts 3–5) · finance-ops (04-ops §1) · sales-crm (04-ops §2) · legal-pack (04-ops §3) · org-roles (04-ops §4) · analytics-stack + metrics-dashboard (04-ops §5) · support-success (04-ops §6). Full disposition of all 15 domains in the §4 coverage matrix.

**What Fable can and cannot execute (the honest scope — this is a *mostly-off-the-shelf + heavy-ops* venture, not a SaaS).** Fable executes **WS-A, WS-B, WS-C** (code) and drafts **WS-D/E/F/G config + WS-I in-app roles**. Fable **cannot execute WS-H** (licensing, banking, BSA/AML program, the two mandated senior hires) or the **vendor procurement/due-diligence/DPA track** — those are counsel + founder + compliance + procurement work. This brief represents them as **tracked gates and prerequisites**, not PRs, and says so plainly. A brief that implied a coding agent stands up a licensed MSB would be exactly the vibe-coding lie this skill exists to prevent.

---

## 1. Workstream map (the full stand-up)

Nine workstreams considered; **none forgotten**. The **Executor / executable-by-Fable** column is the load-bearing honesty for this venture: the software workstreams (A/B/C) are a minority of the venture; the gating majority (H, the vendor track, treasury) is human/counsel/procurement that the brief can only **gate and track**.

| WS | Goal | Source domain output | Type | Executor (Fable-executable?) | Definition of done |
|---|---|---|---|---|---|
| **A · Product/App** | Bilingual RN app + quote/Reg-E-disclosure engine + transfer orchestrator + double-entry ledger + disclosure/receipt generator + internal consoles | product-spec (03 §4), brand tokens (02 Part 2), starter | code PRs (RN + Supabase) | **Fable — YES** | Core send path works end-to-end **in vendor sandboxes**; ACs + tests green; **NOT "live" until §2 go-live gate** |
| **B · Security & Governance backbone** | Typed roles enum, RLS on owner tables, service-role/anon split, per-fn `verify_jwt`, signature+idempotent webhooks, CORS lock, rate-limit, input validation, PII minimization, tested restore, Sentry, append-only `audit_log` | engineering-backbone §1–§8, §10 | code + config | **Fable (code) + human (access)** | Minimum-bar boxes green; policy-audit (A)=0 rows, (B) all justified; restore drilled once |
| **C · Data & Analytics** | Consent-gated event taxonomy (12 events), KPI tree (NSM = active senders), **funding/payout mix as first-class leading input**, mobile attribution | analytics-stack + metrics-dashboard (04 §5) | instrumentation + config | **Fable (SDK) + Cowork+MCP** | Events fire post-consent, **zero PII/financial detail**; mix dashboard live; MMP+SKAN wired |
| **D · CRM & Sales** | **Partnership/BD CRM** (sponsor bank, payout aggregators, FX, vendors, community orgs) + pre-license waitlist. **No consumer sales pipeline** (funnel → WS-C/F/G) | sales-crm (04 §2) | tool-config (Airtable MCP) | **Cowork + Airtable MCP** | "Milpa — Partnerships & Rails" base live; sponsor-bank LOI row tracked with hard date; waitlist form captures cost-per-signup |
| **E · Finance ops** | Money-services COA (FBO/float/bond/net-worth), driver P&L, custom-ledger reconciliation (tri-party), NMLS Call Report inputs, treasury/float controls | finance-ops (04 §1) | config + code (ledger is WS-A) | **Cowork+MCP + Fable (ledger) + human (Treasury lead)** | COA in QBO; tri-party rec ties to the cent in sandbox; **Treasury is a mandated hire, not automatable** |
| **F · GTM / Marketing / Content & Social** | Marketing site + web fallback (starter) + **native-app store presence**, community-led + paid plan, WhatsApp-first lifecycle, Spanish-first content engine + TikTok/FB/WhatsApp/radio social, Día-de-las-Madres seasonality | gtm-marketing + content-engine/content-cadence/social-media (02 Parts 3–5) | code (site) + config + **drafts** | **Fable (site) + Cowork (content, drafts)** | Marketing site live+tracked; content/social **drafted only** (nothing publishes pre-license + Compliance sign-off); MMP attribution wired |
| **G · Support & Success** | Bilingual Spanish-first triage, money-anxiety SLAs (S1 ≤1h 24×7), **regulated hard-escalation lanes** (OFAC/anti-tipping-off/Reg E), bilingual KB, **Reg E error-resolution workflow** | support-success (04 §6) | tool-config (Airtable interim → Intercom) | **Cowork + MCP + human (regulated lanes)** | Triage live; hard lanes route to Compliance; Reg E clock is calendar-enforced |
| **H · Legal & Compliance + Licensing program** | FinCEN MSB reg, 6-state MTLs + surety bonds + net worth + control-person checks, BSA/AML 5-pillar under named Compliance Officer + independent audit, Reg E + GLBA + CCPA, all rail contracts | legal-pack (04 §3), backbone §9 | **docs + filings + gates (mostly NON-software)** | **Human-gated — counsel + Compliance Officer + founder. NOT Fable.** | Every regime control in force; MSB go-live gate (§2) all boxes checked; **this is the critical path and the business** |
| **I · Org & Access** | In-app RBAC (`owner>admin>compliance_officer>treasury>support>user`), team access register (~9 vendor credential sets), MFA, on/offboarding, the two mandated hires | org-roles (04 §4), backbone §10 | in-app roles (code) + access register (human) | **Fable (roles) + human (grants/hires)** | Roles server-enforced; register current + MFA everywhere; Compliance Officer + Treasury hired (gate) |

**Product-workstream shape (per the skill's mostly-off-the-shelf case).** WS-A is **present but deliberately thin** relative to the venture: buy every regulated capability, build only the orchestration + ledger + disclosures + app (03 §0). The genuinely *large* workstream is **WS-H (licensing + BSA/AML program)** — which is **not software at all**. Treat WS-A as a real, tightly-scoped code effort and WS-H as the true center of gravity a coding agent cannot touch.

---

## 2. Sequencing & parallelization

**Phase model — re-based for a licensed MSB (the software phases are the *small* track; the license track is the long pole).**

- **Phase 0 — Foundation** *(single-threaded; unblocks all code)*: clone `starters/saas` for the web/marketing surface; stand up the **RN (Expo) app shell + shared TS core**; apply brand tokens (web block from 02 Part 2 + the **native semantic layer** — PREREQUISITE: no mobile token pipeline in `brand-design`); `profiles` + roles enum + RLS + Supabase Auth (phone-first/OTP); CORS lock; secret-guard + branch protection; Sentry (web **+ RN**). **DoD:** app boots on device + web, auth works, CI green, policy-audit clean.
- **Phase 1 — Core value (sandbox)** *(parallelizable)*: quote/disclosure engine; recipient + saved-recipient; transfer orchestrator state machine; append-only ledger; the analytics taxonomy (WS-C); the partnership CRM + waitlist (WS-D). **DoD:** a full happy path clears **in vendor sandboxes**, instrumented, no PII in events.
- **Phase 2 — Money-out gate + release path (sandbox)** *(gated)*: `release_payout` OFAC choke point; funding/screening/payout webhooks (signature + idempotent); Reg E 30-min cancel + error-resolution; compliance case queue; treasury/float console; reconciler. **DoD:** sandbox e2e proves **zero payout before `screening_result='clear'`**; ledger balances per transfer.
- **Phase 3 — Operate** *(parallel)*: finance close wiring + NMLS Call Report inputs (WS-E); support stack + KB + Reg E workflow (WS-G); WS-F content **drafted**; access register + on/offboarding (WS-I). **DoD:** each function live/verified on its tool, still pre-launch.
- **Phase L — The license track (RUNS FROM DAY 0, ~9 months, NON-software, the critical path)** *(WS-H)*: sponsor-bank LOI → FinCEN Form 107 → per-state MTLs + bonds + net worth + control-person checks → BSA/AML program stand-up under the named Compliance Officer → independent AML audit → vendor production contracts + DPAs. **This gates go-live regardless of software readiness.**

**Dependency graph (what unblocks what).**
```
Phase 0 (starter+RN shell+roles+RLS+auth) ─┬─> Phase 1 (quote → orchestrator → ledger; WS-C; WS-D)
                                           │
Phase 1 ──> Phase 2 (release_payout OFAC gate; webhooks; Reg E cancel) ──> Phase 3 (operate)
                                           │
Phase L (LICENSE TRACK, day 0 →) ──────────┴──────────────────────────────> ⛔ MSB GO-LIVE GATE
   sponsor-bank LOI (KILL-GATE ~2026-11-15) → FinCEN → per-state MTL+bond → BSA/AML+audit → vendor prod contracts
```

**Critical path to first *legal* dollar (NOT to a code deploy):**
`sponsor-bank LOI → FinCEN registration → first-state MTL granted + bond posted + net worth met → BSA/AML program operating under named Compliance Officer → independent AML audit passed → software sandbox-verified → MSB GO-LIVE GATE.`
The software critical path (`Phase 0 → quote → orchestrator → release_payout`) finishes **months before** the license path; it then **waits** on Phase L. Marketing/paid acquisition (WS-F) cannot start until go-live + Compliance sign-off. *(The skill's default "critical path to first dollar = code" is inverted here; see friction note.)*

**Go-live gate sequence — re-derived for an MSB (the skill's "deploy → test-mode payments → payments go-live" Stripe sequence does NOT apply — there is no "switch to live keys").** Milpa may not move a real dollar until **ALL** hold, each human-gated with a rollback path:

⛔ **MSB GO-LIVE GATE** (promote from a buried backbone line to the headline, per 03 §5d):
- [ ] FinCEN MSB registration (Form 107) filed. `[VENTURE]`
- [ ] State MTL granted in the operating state + surety bond posted + minimum net worth met (per state). `[VENTURE]`
- [ ] Sponsor-bank / FBO relationship live with pre-funded float (redundant second bank ideally). `[VENTURE]`
- [ ] Written BSA/AML program operating under a **named, senior Compliance Officer**; **independent AML audit passed**. `[VENTURE]`
- [ ] KYC/CIP + real-time OFAC screening + transaction monitoring live and tested against known test entities. `[VENTURE]`
- [ ] Reg E disclosure / receipt / 30-min cancel / error-resolution verified. `[VENTURE]`
- [ ] Software **sandbox-verified** end-to-end; security core (§B) + fintech controls (§H) in force; app-store builds approved. `[VENTURE]`

> The software being shippable is **one line** on this list. The other six lines are the business.

---

## 3. The PR plan (phased, PR-by-PR)

**PR index (all PRs; representative set fully authored below).** Executor: **F** = Fable (code), **C** = Cowork+MCP (config, drafts), **H** = human-only (gate/procurement/hire — *not a PR Fable executes*).

| PR | Title | Phase · WS | Executor | Key gate |
|---|---|---|---|---|
| PR-1 | Clone starter (web) + scaffold RN/Expo app shell + shared TS core + brand tokens | 0 · A | F | app-store enrollment (H) |
| PR-2 | `profiles` + roles enum + RLS + phone-first Supabase Auth + server-side RBAC | 0 · A/B | F | none (reversible) |
| PR-3 | Backbone turn-ons: CORS lock · secret-guard hook · branch protection · CI supply-chain · Sentry (web + RN) | 0 · B | F | none |
| PR-4 | Recipient + saved-recipient (owner-scoped CRUD) | 1 · A | F | none |
| PR-5 | Quote / pricing engine + Reg E pre-payment disclosure generator (deterministic) | 1 · A | F | none |
| PR-6 | Transfer orchestrator state machine + append-only `transfer_event` + idempotency | 1 · A | F | none |
| PR-7 | Append-only double-entry ledger (`ledger_entry`) + per-transfer balance invariant | 1 · A/E | F | ledger buy-candidate check first (H) |
| PR-8 | Funding/screening/payout webhooks (verify_jwt=false, signature + idempotent) | 2 · A/B | F | none (sandbox) |
| PR-9 | `release_payout` OFAC choke point + `compliance_case` on hit (the money-out gate) | 2 · A/H | F | **payout release = OFAC-clear invariant + human** |
| PR-10 | Reg E 30-min cancel + error-resolution intake + receipt persistence | 2 · A/H | F | none (sandbox) |
| PR-11 | `pg_cron` reconciler (tri-party) + `paid_out→settled` + break flagging | 2 · A/E | F | none |
| PR-12 | Internal consoles: compliance queue · treasury/float · support lookup (role-gated) | 2/3 · A/B/I | F | none |
| PR-13 | Consent-gated analytics: PostHog + GA4 (web) + **MMP (Appsflyer/Adjust) + SKAN** + Sentry-RN; 12-event taxonomy; **mix dashboard** | 1/3 · C | F+C | connect PostHog/Sentry (registry); MMP direct |
| PR-14 | Marketing site + web fallback (starter) + UTM/GA4 + waitlist form | 1/3 · F | F+C | deploy gate (H) |
| PR-15 | WhatsApp/SMS status + OTP (Twilio) + transactional receipts (SendGrid) | 2/3 · A/F/G | F+C | A2P/10DLC + WhatsApp sender registration (H) |
| CFG-D | Airtable "Milpa — Partnerships & Rails" base + pre-license waitlist | 1 · D | C | none |
| CFG-E | Money-services COA in QBO + tri-party close + NMLS Call Report inputs | 3 · E | C+H | controller/CPA sign-off |
| CFG-F | Content engine + TikTok/FB/WhatsApp/radio social calendar (Spanish-first) | 3 · F | C | **drafts only → Compliance + Legal + Tony** |
| CFG-G | Support triage + bilingual KB + Reg E error-resolution SOP (Airtable → Intercom) | 3 · G | C+H | none |
| CFG-I | Team access register + MFA + on/offboarding SOP | 3 · I | C+H | none |
| **GATE-H** | **Licensing + BSA/AML program + sponsor-bank/FBO + vendor prod contracts** | **L · H** | **H (NOT Fable)** | **the MSB GO-LIVE GATE** |

---

### PR-1 · Clone starter (web) + scaffold RN/Expo app shell + shared TS core + brand tokens   [Phase 0 · WS-A]

**Problem.** The venture is mobile-first (iOS + Android; responsive web fallback), but `starters/saas` is a **web-only Vite SPA**. Fable must stand up the React-Native (Expo) app that carries the real product *and* the web surface (marketing site + fallback) that reuses the starter, sharing one TS core — before any feature lands.

**Scope.** In: `starters/saas` cloned for the web surface; a new **Expo (RN) app** + a shared `packages/core` TS module (types, pricing types, API client); brand tokens applied — the **web `:root`/`.dark` HSL block** (02 Part 2B, paste-ready) into `src/index.css`, and the **platform-neutral semantic layer** (02 Part 2A) into the RN theme (iOS asset catalog / Android `colors.xml` / RN theme). Out: any feature screen (PR-4+); native token *automation* (PREREQUISITE — `brand-design` ships no mobile token pipeline; the semantic layer is hand-mapped here and flagged).

**Data model + RLS policies.** none (scaffold only).

**Endpoints / edge functions.** none.

**Acceptance criteria (Given/When/Then).**
- Given a clean checkout, When Fable runs the web build, Then the marketing/fallback site builds with Milpa tokens (cream surface, milpa-green primary) and CI is green.
- Given a device/simulator, When the Expo app launches, Then it renders the themed shell in **Spanish by default** (`locale='es'`) with the semantic-layer colors, and shares types from `packages/core`.
- Given the token audit, When contrast is checked, Then maíz-gold is never used as body text on cream (documented AA fail, 02 Part 2) — gold is fill/large-only.

**Test plan.**
| AC | Level | Assertion |
| web build + tokens | unit/build | `npm run build` green; token vars resolve |
| RN shell + es-default | e2e (Detox/Expo) | app boots; default locale `es`; theme applied |
| contrast guard | unit | token lint asserts gold not used as small text on cream |

**Security checklist.** `VITE_*`/`EXPO_PUBLIC_*` public boundary respected [STARTER] · no secret in client bundle [STARTER] · secret-guard installed (PR-3) [CONFIG] · env-only config [STARTER].

**Secrets needed (names only).** `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY` (public web); `EXPO_PUBLIC_SUPABASE_URL`, `EXPO_PUBLIC_SUPABASE_ANON_KEY` (public mobile). No private key.

**Dependencies.** none.

**Human gate.** **App-store enrollment** (Apple Developer + Google Play Console — org accounts, needs the entity + payment; procurement, not code) — flag as a NEEDS-TONY prerequisite for any device distribution. Web deploy is gated at Phase-0 deploy. none irreversible in this PR.

---

### PR-5 · Quote / pricing engine + Reg E pre-payment disclosure generator   [Phase 1 · WS-A]

**Problem.** The exact-payout guarantee is the wedge *and* a CFPB Reg E pre-payment-disclosure duty: the sender must see amount paid · fee · exchange rate · **exact amount received** before paying. This must be **deterministic and unit-tested** — the disclosure is a legal artifact rendered verbatim from the quote and persisted immutably.

**Scope.** In: pure pricing function `(principal_usd, corridor, funding_method, payout_method, speed, fx_snapshot, promo_state) → {fee_usd, fx_rate, spread_bps, payout_amount_local, disclosure_json}`; the `quote` row it writes via service role; FX-rate snapshot onto the quote. Out: the FX **feed integration** (vendor, CFG/PR-8 webhook class); debit-card funding (roadmap, out per 03 §4i); cash-pickup pricing at launch (bank/SPEI first — margin-protective).

**Data model + RLS policies.**
```
table: quote (id uuid pk, owner_id uuid fk→profiles, corridor text, principal_usd numeric,
              fee_usd numeric, fx_rate numeric, spread_bps int, payout_amount_local numeric,
              funding_method text, payout_method text, speed text,
              disclosure_json jsonb /* verbatim Reg E disclosure */, expires_at timestamptz, created_at)
  ownership: owner_id = auth.uid()
  RLS: SELECT own (owner_id = auth.uid()); NO client INSERT/UPDATE/DELETE — the pricing engine writes
       via service role (system-managed table; write-policies omitted + documented per CLAUDE.md §5). [financial]
  migration: 20260713100000_create_quote.sql (append-only, forward-only); run npm run db:types after.
```

**Endpoints / edge functions.**
```
POST /quote — auth: JWT — verify_jwt: true. Rate-limited per-user/IP.
  input (zod): {corridor, principal_usd, funding_method, payout_method, speed}
  output: {quote_id, fee, fx_rate, payout_amount, disclosure_json, expires_at}
  errors: 400 invalid, 405 wrong method, 429 rate-limited. Snapshots FX rate onto the quote.
```

**Acceptance criteria.**
- Given `principal=$380, fx, fee=$2.99(waivable), spread=1.3%`, When `/quote` runs, Then `payout_amount_local` is deterministic and `disclosure_json` shows paid · fee · rate · **exact received** (unit-exact).
- Given first-transfer promo state, When `/quote` runs, Then fee is waived + rate boosted and the disclosure reflects the *actual* offered terms (no phantom fee).
- Given a quote, When `expires_at` passes, Then a later `/transfer` on it is rejected (rate moved) — enforced in PR-6.
- Given any quote request, When it fires, Then **no PII and no raw amount** leaves to analytics (bands only, WS-C).

**Test plan.**
| AC | Level | Assertion |
| deterministic payout + disclosure | unit | `price()` pure fn: fixture inputs → exact payout + disclosure object |
| promo terms honored | unit | waived-fee/boosted-rate path → disclosure matches offered terms |
| quote expiry | integration | expired quote → `/transfer` 409 |
| no PII to analytics | unit | event builder omits PII/amount keys |

**Security checklist.** verify_jwt=true explicit [STARTER] · input validated (zod) [VENTURE] · rate-limit public path [VENTURE] · system-managed table SELECT-own + write-omission documented [STARTER] · no PII/amount in logs/analytics [VENTURE] · disclosure persisted immutably [VENTURE].

**Secrets needed (names only).** `FX_PROVIDER_API_KEY` (edge env, server-only — read the rate feed; the feed *integration* lands in the webhook/PR-8 class). No public var.

**Dependencies.** PR-2 (profiles for owner scoping).

**Human gate.** **Any change to fee / spread / promo bands = a Reg E consumer-disclosure change → founder + Compliance co-sign** (04 §4.2, §7). Reversible migration; prod apply gated at deploy.

---

### PR-9 · `release_payout` OFAC choke point + case-on-hit — the single money-out gate   [Phase 2 · WS-A/H]

**Problem.** The one control that makes a money-mover safe: **it must be structurally impossible to release a payout before OFAC screening clears.** Vendors *detect*; the orchestration that *blocks payout until `screening_result='clear'`* and opens a case on a hit is Milpa's compliance-critical custom code (03 §5c). This is a blocking invariant enforced in code and asserted in tests — a breach is a launch-blocker, not a metric.

**Scope.** In: the internal `release_payout` step (service-role, **not client-reachable**) that runs only when `screening_result='clear'` AND `status='funded'` AND the 30-min cancel window is satisfied, then calls the payout aggregator; on a screening hit → block, open `compliance_case`, hold funds; every release written to `transfer_event` + `audit_log`. Out: the screening **vendor wiring** (PR-8 webhook); SAR filing UI (WS-H, Compliance-owned); Guatemala corridor (phase 2 of the business).

**Data model + RLS policies.**
```
table: transfer (…, status text, screening_result text, cancel_deadline_at timestamptz,
                 idempotency_key text unique, …)
  RLS: owner SELECT own; NO client INSERT/UPDATE/DELETE — created + advanced only by edge function
       via service role (system-managed; documented omission). [financial-sensitive]
table: transfer_event (id, transfer_id fk, from_status, to_status, actor, reason, vendor_payload_ref, at)
  APPEND-ONLY (no update/delete); service-role write; officer/support/owner SELECT scoped. [audit]
table: compliance_case (id, subject_type, subject_ref, type /* sanctions_hit|monitoring_alert|sar_candidate */,
                        status, assigned_to, disposition, sar_filed_ref, opened_at, closed_at)
  RLS: compliance_officer role ONLY; notes append-only. [internal — regulated]
  migration: 20260713140000_release_gate.sql
```

**Endpoints / edge functions.**
```
release_payout (internal step, service-role) — verify_jwt: n/a (never client-reachable; invoked by orchestrator).
  precondition (asserted): screening_result='clear' AND status='funded' AND now < cancel_deadline handled.
  on hit: status→held, INSERT compliance_case, NO aggregator call. Writes transfer_event + audit_log every path.
POST /webhooks/screening — verify_jwt: false — self-auth: provider signature on raw body; idempotent on event id.
  on clear → allow release; on hit → block + open case. THE compliance choke point.
```

**Acceptance criteria.**
- Given `screening_result≠'clear'`, When `release_payout` is invoked, Then it **refuses and makes no aggregator call**, and the refusal is logged.
- Given a screening webhook returning an SDN test-entity hit, When it is processed, Then a `compliance_case` row opens, the transfer is held, and funds are not released.
- Given a duplicate screening/payout webhook (same event id), When redelivered, Then it is a **no-op** (idempotent).
- Given any release, When it succeeds, Then `transfer_event` + `audit_log` both record actor/action/target/ts.
- Given a `user`-role client, When it calls any payout path, Then it is **unreachable** (service-role only).

**Test plan.**
| AC | Level | Assertion |
| no release before clear | integration | `release_payout` with `screening_result='pending'` → refuses, asserts zero aggregator calls |
| hit opens case + holds | integration | SDN test entity → `compliance_case` row + transfer held |
| idempotent webhook | integration | second delivery same event id → no state change |
| every release audited | integration | success path writes `transfer_event` + `audit_log` |
| not client-reachable | integration | RLS + routing deny any client invocation |

**Security checklist.** **Funds-release gated on OFAC-clear [VENTURE] (net-new; not in backbone)** · webhook signature-verified on raw body + idempotent [STARTER pattern, re-derived off Stripe → screening/payout provider] · service-role server-only [STARTER] · append-only ledger/event/case, no update-delete path [VENTURE] · `compliance_case` compliance_officer-only [VENTURE] · audit-log privileged action [VENTURE] · no PII/secret in logs [VENTURE].

**Secrets needed (names only).** `SANCTIONS_API_KEY`, `SANCTIONS_WEBHOOK_SECRET`, `PAYOUT_AGGREGATOR_API_KEY`, `PAYOUT_WEBHOOK_SECRET`, `SUPABASE_SERVICE_ROLE_KEY` — all edge env, server-only (`supabase secrets`), **per vendor per environment**, never `VITE_*`/`EXPO_PUBLIC_*`, never materialized.

**Dependencies.** PR-2 (roles), PR-6 (orchestrator + `transfer`), PR-7 (ledger), PR-8 (webhook self-auth pattern).

**Human gate.** **Payout release = the OFAC-clear system invariant + human accountability (Compliance Officer)** — and **pre-license, no real payout runs at all** (sandbox only). **SAR filing / OFAC-hit adjudication = Compliance Officer decision, never AI** (04 §4.2). Sandbox-verified is the DoD; live is behind the MSB GO-LIVE GATE.

---

### PR-13 · Consent-gated analytics + mobile attribution + the KPI/mix taxonomy   [Phase 1/3 · WS-C]   *(config-PR)*

**Problem.** metrics-dashboard sets **active senders** (distinct sender ≥1 delivered transfer) as the north-star, and the venture's single biggest margin lever is **funding/payout mix** — yet nothing measures either, and the backbone requires analytics be consent-gated with **zero** PII/financial detail. Note: the product is **native mobile**, so web GA4/UTM is insufficient — an **MMP + SKAN** stack is required that neither `analytics-stack` nor `tool-mcp-stack` names.

**Scope.** In: PostHog (product funnels/retention), GA4 (web acquisition), **Appsflyer/Adjust-class MMP + SKAdNetwork** (install attribution, iOS-privacy), Sentry (web + **RN**), behind a consent gate; the documented **12-event taxonomy** (04 §5.2) with **funding/payout mix** as a first-class leading input; the mix dashboard (ACH %, bank-payout %). Out: a warehouse/BI pipe (defer per tool-mcp-stack until data spans ≥3 systems); server-side event forwarding.

**Data model + RLS policies.** none new (external tools). Consent stored on `profiles.analytics_consent bool default false`; events fire only when true and DNT unset.

**Endpoints / edge functions.** none. Client SDK init (web + RN) is consent-gated.

**Acceptance criteria.**
- Given a user who has not consented, When they use the app, Then **no** PostHog/GA4/MMP event and no cookie/identifier fires.
- Given a consented user, When they complete a send, Then `payout_delivered` fires with `{user_uuid, corridor, time_to_deliver_band}` and **NO** name/amount/CLABE/KYC/sanctions property (bands + UUID only).
- Given a funded transfer, When it fires, Then `transfer_funded.funding_type` + `payout_released.payout_type` feed the **mix dashboard** (the margin lever).
- Given any edge-function error, Then Sentry captures it tagged by release+environment with no secret/PII; RN crashes report to Sentry-RN.

**Test plan.**
| AC | Level | Assertion |
| no consent → no fire | e2e | network shows zero analytics/MMP calls pre-consent |
| taxonomy PII-clean | unit | event builder rejects PII/amount keys; allows band+UUID only |
| mix computed | unit | funding_type/payout_type aggregate into ACH% / bank% |
| Sentry scrub | unit | beforeSend strips PII/secret; RN crash tagged |

**Security checklist.** Analytics consent-gated [VENTURE] · **no PII/financial detail in events (GLBA/BSA-heightened) [VENTURE]** · DNT respected [VENTURE] · Sentry web+RN env/release tagged [VENTURE] · ingest keys public-ok, private DSN server-only [CONFIG] · **BSA 5-yr recordkeeping overrides DSAR deletion for transaction records** — deletion flows must except regulated records [VENTURE].

**Secrets needed (names only).** `VITE_POSTHOG_KEY`, `VITE_GA4_ID`, `VITE_SENTRY_DSN` (public web ingest); `EXPO_PUBLIC_POSTHOG_KEY`, `EXPO_PUBLIC_MMP_KEY` (public mobile ingest); `SENTRY_DSN` (server edge env). No private key is public.

**Dependencies.** PR-1 (apps), PR-2 (consent column).

**Human gate.** **Connect-these-tools:** PostHog + Sentry via `SearchMcpRegistry` (REGISTRY); GA4 direct; **MMP is NOT in the registry — direct SDK + account (procurement)**. Connecting is a founder step — flag it. none irreversible.

---

### CFG-F · Content engine + Spanish-first social calendar   [Phase 3 · WS-F]   *(config-PR — DRAFTS ONLY)*

**Problem.** WS-F must stand up the content/social system (domain 7) — but for Milpa **nothing may publish** until go-live + Compliance/Legal sign-off, and every financial/licensure/speed claim is a regulated claim. This config-PR builds the machine and stages drafts; it does not run acquisition.

**Scope.** In: Canva brand kit mirroring the tokens; the 5-pillar content engine (lead = *Precio claro*, 02 Part 4); the TikTok(anchor)/Facebook(co-anchor)/WhatsApp(rail)/YouTube-Shorts/radio calendar (02 Part 5); the Día-de-las-Madres/Navidad/back-to-school seasonality; bilingual QA + claims-review gates. Out: **any publish**; any paid spend; any licensure claim (pre-license forbidden).

**Data model / tool config.** Airtable content calendar (base + status = DRAFT); Canva templates. No app schema.

**Acceptance criteria.**
- Given the two-week starter calendar (02 §5.5), When produced, Then every item is status **DRAFT** and routes Cowork → Compliance (if any claim) → Tony before it could ever publish.
- Given any asset with a price/rate/speed/licensure claim, When drafted, Then it carries the **regulated-claim flag** and cannot leave draft without Compliance + Legal.
- Given the voice, When copy is drafted, Then it is **Spanish-first, warm, plainspoken** (the documented register delta from the clinical default), banned words out.

**Security checklist.** Drafts-only [guardrail] · no pre-license licensure claim [guardrail/claims-gate] · no FDIC/insurance implication [claims-gate] · bilingual-QA + Compliance/Legal gate before any publish [VENTURE] · LYV firewall — no LYV audiences/networks [guardrail].

**Secrets needed (names only).** none new (Canva MCP live; no publish credential wired pre-launch).

**Dependencies.** PR-14 (site/waitlist for CTA destinations).

**Human gate.** **Publish/send = founder, after Compliance + Legal on any claim.** Paid spend = founder. Nothing autonomous.

---

### GATE-H · Licensing + BSA/AML program + sponsor-bank/FBO + vendor production contracts   [Phase L · WS-H]   *(NOT a Fable PR — a tracked human-gated program)*

**Problem.** This is **the business** and the **critical path**, and **none of it is software.** A coding agent cannot file FinCEN Form 107, obtain a state MTL, post a surety bond, secure an FBO relationship with a sponsor bank, stand up a 5-pillar BSA/AML program, hire a Compliance Officer, or pass an independent AML audit. The brief represents it as a gate program so it is **tracked, never assumed, never mis-reported as "built."**

**Scope (tracked milestones, each ⚖ counsel + human-gated with a rollback path = "do not commit; reallocate to Executive Edge"):**
- Sponsor-bank + FBO/pre-funded-float **LOI** (existential; **KILL-GATE: no LOI by ~2026-11-15 → shelve**, 01 §5) → executed agreement.
- FinCEN MSB registration (Form 107) within 180 days of establishment.
- Per-state MTLs via NMLS for CA/TX/AZ/GA/NC/FL + surety bond (~$25k–$1M+/state) + minimum net worth + control-person background/fingerprinting + approved AML program (6–18 mo/state).
- BSA/AML program (5 pillars) operating under a **named senior Compliance Officer** (mandated hire, WS-I) + **independent AML audit** passed.
- Vendor **production** contracts + **DPAs + GLBA safeguards attestations** for all ~9 regulated vendors (sponsor bank, payout aggregators MX→GT, FX, ACH, IDV, sanctions, monitoring, ledger buy-candidate) — the BSA third-party-oversight register.
- The ~$1–2M float + bond + net-worth + runway capital commit (separate later founder gate).

**Acceptance criteria.** Each milestone is **done only when counsel/regulator/bank confirms**, logged in the WS-D partnership CRM with a hard date, and surfaced in `/weekly-ops-review` under RAIL-READINESS. **The MSB GO-LIVE GATE (§2) cannot be cleared until every box holds.**

**Human gate.** Every line is human-gated: **capital commit** (founder + CPA); **FinCEN/MTL filings + bond binding** (founder + Compliance + counsel); **contract signatures** (founder + counsel, after review); **SAR/OFAC decisions** (Compliance Officer, never AI). Fable's only role: keep the sandbox software ready so software is never the blocker.

> *(Other PRs — PR-2/3/4/6/7/8/10/11/12/14/15, CFG-D/E/G/I — follow the same canonical template; authored in full during execution. Index above carries title · phase · WS · executor · gate for each; the five representative PRs + GATE-H above cover every distinct pattern: foundation, deterministic-disclosure, the compliance choke point, a regulated-vendor config-PR, a drafts-only content config-PR, and a non-software gate program.)*

---

## 4. Coverage matrix — the proof nothing is dropped

### 4a. product-spec acceptance criterion → PR (every AC mapped)
| Acceptance criterion (03 §4h / user stories) | PR |
|---|---|
| Quote shows exact payout before pay (deterministic + disclosure object) | PR-5 |
| Reg E pre-payment disclosure rendered verbatim + persisted immutably | PR-5 (+ PR-10 receipt) |
| No payout releases before screening clears (hard invariant, zero breach) | **PR-9** |
| Screening hit opens a case + holds funds; never auto-release | PR-9 |
| 30-min cancel honored + refund/compensation issued | PR-10 |
| Real-time status + delivery notification | PR-6 (status) + PR-15 (notify) |
| Owner cannot read another's transfer (RLS) | PR-2 (RLS) + PR-6 |
| Duplicate vendor webhook is a no-op (idempotent) | PR-8, PR-9 |
| Ledger balances per transfer (sum debits = credits) | PR-7 |
| Compliance Officer screens every sender/recipient/txn → case queue | PR-9 + PR-12 (console) |
| Treasury: every fee/spread/cost booked to immutable ledger, reconciled | PR-7 + PR-11 + CFG-E |
| Support looks up status/history without touching money state | PR-12 (role-gated lookup) |
| Full happy path in sandbox (IDV→quote→fund→screen→payout→settle) | e2e across PR-5→PR-11 |

### 4b. engineering-backbone control → PR / WS / gate
| Control (tag) | Where it lands |
|---|---|
| RLS on by default (owner tables) [STARTER]+[CONFIG] | PR-2, PR-4 |
| System-managed tables SELECT-own + documented write-omission [STARTER] | PR-5/6/7/9 (quote, transfer, ledger, case) |
| Typed roles + server-side admin check [VENTURE] | PR-2 (`owner>admin>compliance_officer>treasury>support>user`) |
| Every edge fn explicit `verify_jwt`; webhooks/cron self-auth [STARTER]+[CONFIG] | PR-5 (true), PR-8/9 (false+signature), PR-11 (cron secret) |
| CORS lock · secret-guard · branch protection · CI supply-chain [CONFIG]/[VENTURE] | PR-3 |
| Input validation at boundary · rate-limit public [VENTURE] | PR-5, PR-8 |
| Webhook signature + idempotent (re-derived off Stripe → 3 providers) [STARTER→VENTURE] | PR-8, PR-9 |
| PII classification + minimization; card data off-server (SAQ-A) [VENTURE] | PR-13 + data model (store vendor refs, never raw KYC/PAN) |
| Backups + **tested restore**; uptime; SLO [VENTURE] | WS-B DoD |
| Sentry (web + RN) + consent-gated analytics + append-only `audit_log` [VENTURE] | PR-3, PR-13, PR-9 |
| **Fintech net-new: funds-release-gated-on-OFAC; append-only double-entry ledger; Reg E 30-min invariant; Travel Rule; SAR/CTR; treasury controls; vendor DPAs/oversight; GLBA; SOC 2 readiness** | **PR-9, PR-7, PR-10, PR-5, GATE-H, CFG-E** |
| Compliance regime (§9) decided + controls in place [VENTURE] | WS-H + MSB GO-LIVE GATE (§2, §5d) |
| Access register + MFA + on/offboarding [VENTURE] | CFG-I |
| Minimum bar "holding/moving others' funds" box (promoted to headline) | **MSB GO-LIVE GATE (§2)** |

### 4c. All 15 Founder-OS domains → disposition + workstream
| # | Domain | Disposition | Landed at |
|---|---|---|---|
| 1 | Strategy & Concept | **CONSUMED** (01-concept: economics gate + market scan + CONDITIONAL GO) | Preamble build-auth gate; economics carried into WS-A/E |
| 2 | Product & Build | **CONSUMED** (03 §1–§4: HYBRID buy-vs-build; product-spec both variants) | WS-A (PRs 1,4,5,6,7,10,12) |
| 3 | Engineering & Infra backbone | **CONSUMED** (03 §3, §5; starter conventions) | WS-A/B |
| 4 | Security, Roles & Governance | **CONSUMED** (backbone §1–§8,§10; 03 §5) | WS-B (PR-2,3,8,9,13) |
| 5 | Brand & Design | **CONSUMED** (02 Part 2 tokens) — **flag: no native-mobile token pipeline** | PR-1 (web block) + native semantic layer (PREREQUISITE) |
| 6 | Marketing / GTM | **CONSUMED** (02 Part 3) — community-led + paid, licensing-gated | WS-F (PR-14, CFG-F) |
| 7 | **Content & Social** | **CONSUMED** (02 Parts 4–5: content-engine + content-cadence + social-media) — Spanish-first, TikTok/FB/WhatsApp/radio, **drafts-only** | WS-F (CFG-F) |
| 8 | Sales & CRM | **CONSUMED** (04 §2) — reframed to **partnership/BD CRM** + waitlist; no consumer pipeline | WS-D (CFG-D) |
| 9 | Finance & Accounting | **CONSUMED** (04 §1) — money-services COA, driver P&L, tri-party rec | WS-E (CFG-E, PR-7) |
| 10 | Legal, Entity & Compliance | **CONSUMED** (04 §3) — full BSA/AML/Reg E/GLBA regime + rail contracts | WS-H (GATE-H) |
| 11 | Operations, Org & Roles | **CONSUMED** (04 §4) — RBAC, access register, two mandated hires | WS-I (CFG-I) + PR-2 |
| 12 | Customer Support & Success | **CONSUMED** (04 §6) — bilingual, regulated hard lanes, Reg E workflow | WS-G (CFG-G) |
| 13 | Data & Analytics | **CONSUMED** (04 §5) — event taxonomy + KPI tree + mix lever | WS-C (PR-13) |
| 14 | Tool & MCP Stack | **CONSUMED** (tool-mcp-stack v1) — **+ the ~9 regulated vendors it has no row for** | §5c connect-these list |
| 15 | Fable-Ready Build Spec | **THIS DELIVERABLE** | 05-fable-brief.md |

**PREREQUISITE / interim-contract flags (not fabricated):** native-mobile design tokens (brand-design ships no mobile pipeline — semantic layer hand-mapped, PR-1); ledger buy-candidate (build the double-entry core only if no payment-ops vendor fits, PR-7); mobile attribution MMP (not in registry — direct SDK, PR-13). Nothing else is missing; no decision is invented.

---

## 5. Consolidated lists

### 5a. Human gates (one list, all PRs — the founder's attention hits exactly the irreversible points)
1. **⛔ MSB GO-LIVE GATE** — the 7-box checklist (§2). Master gate; nothing moves a real dollar until all hold. *(Founder + Compliance + counsel.)*
2. **The ~$1–2M capital / float / bond / net-worth commit** — separate later gate; rollback = do not commit, reallocate to Executive Edge. *(Founder + CPA.)*
3. **FinCEN registration · per-state MTL filings · surety-bond binding.** *(Founder + Compliance + regulatory counsel.)*
4. **Sponsor-bank/FBO · payout · FX · vendor contract signatures** — after `legal:review-contract`. *(Founder + counsel.)*
5. **Any dollar moved / payout release** — system OFAC-clear invariant (PR-9) **+** Compliance/Treasury; pre-license = none moves. *(Compliance + Treasury.)*
6. **SAR / CTR filing · OFAC-hit adjudication · monitoring-case disposition** — Compliance Officer decision, **never AI.**
7. **Fee / spread / promo (Reg E disclosure) change** — founder + Compliance co-sign.
8. **App-store release (TestFlight → production) + web deploy** — founder, with rollback (host instant-rollback; app-store phased release).
9. **Prod DB migration apply** — founder; migrations forward-only (recovery = forward-fix / tested restore).
10. **Any consumer or partner message / content publish** — drafts only; the send is the founder's, after Compliance + Legal on any claim.
11. **Board / investor / regulator (NMLS Call Report) filing** — controller/CPA sign-off; Gmail draft only.
12. **Spend on ads / paid vendors** — founder; $0 on unvalidated spend.

### 5b. Secrets register (names only — never a value; per vendor per environment)
| Secret (name) | Where set | Public? | PR |
|---|---|---|---|
| `VITE_SUPABASE_URL` · `VITE_SUPABASE_ANON_KEY` | host env (web) | **public** | PR-1 |
| `EXPO_PUBLIC_SUPABASE_URL` · `EXPO_PUBLIC_SUPABASE_ANON_KEY` | app config (mobile) | **public** | PR-1 |
| `SUPABASE_SERVICE_ROLE_KEY` | `supabase secrets` (edge) | server-only | PR-2/9 |
| `FX_PROVIDER_API_KEY` | `supabase secrets` | server-only | PR-5 |
| `SANCTIONS_API_KEY` · `SANCTIONS_WEBHOOK_SECRET` | `supabase secrets` | server-only | PR-8/9 |
| `IDV_API_KEY` | `supabase secrets` | server-only | PR (KYC) |
| `MONITORING_API_KEY` | `supabase secrets` | server-only | PR-8 |
| `ACH_PROCESSOR_API_KEY` · `ACH_WEBHOOK_SECRET` | `supabase secrets` | server-only | PR-8 |
| `PAYOUT_AGGREGATOR_API_KEY` · `PAYOUT_WEBHOOK_SECRET` | `supabase secrets` | server-only | PR-8/9 |
| `SPONSOR_BANK_STATEMENT_FEED_KEY` | `supabase secrets` | server-only | PR-11 |
| `RECONCILER_CRON_SECRET` | `supabase secrets` | server-only | PR-11 |
| `TWILIO_*` · `SENDGRID_API_KEY` | `supabase secrets` | server-only | PR-15 |
| `VITE_/EXPO_PUBLIC_ POSTHOG_KEY` · `VITE_GA4_ID` · `EXPO_PUBLIC_MMP_KEY` · `VITE_SENTRY_DSN` | host/app (ingest) | **public ingest** | PR-13 |
| `SENTRY_DSN` (server) | `supabase secrets` | server-only | PR-13 |

> **Milpa's secret surface is ~9 sets of production vendor credentials per environment — the largest in any Founder OS venture.** Least-privilege, scoped, revocable, named **per vendor per environment**; rotate on any suspected exposure and within 24h of any offboarding; **never materialized in text, logs, or commits** (guardrail).

### 5c. Connect-these-tools (tool · status · trigger · how)
- **LIVE in-session (no procurement):** Supabase (MCP) · Vercel (MCP — **web fallback only**; the app ships via App Store/Play, not Vercel) · Airtable (MCP) · Gmail (MCP, **drafts-only**) · Google Drive (MCP — licensing data room) · Canva (MCP) · Lucid (MCP) · GitHub (direct) · Twilio + SendGrid (skills/API — **A2P/10DLC + WhatsApp sender registration gate traffic**).
- **REGISTRY (`SearchMcpRegistry`, founder step):** PostHog + Sentry (at deploy) · QuickBooks (first revenue) · Intercom (ticket volume) · Docusign/SignNow (first contract) · Carta (raise) · Gusto (first W-2 hire = the Compliance Officer) · BigQuery/Metabase (defer until ≥3 systems).
- **DIRECT (no MCP):** GA4 (web) · Mercury/Ramp (post-entity + EIN) · **MMP (Appsflyer/Adjust) + SKAN** (mobile attribution — **not in registry**, direct SDK + account).
- **NEEDS TONY — the regulated vendor stack (NOT in any registry; each = contract + due diligence + DPA + a scoped credential set; several launch-gating):** sponsor bank + FBO (existential kill-gate) · payout aggregator MX (→ GT) · FX/liquidity · ACH processor + account verification · card processor (roadmap) · IDV/KYC · sanctions screening · transaction monitoring/case-management · payment-ops/ledger buy-candidate · regulatory counsel + independent AML auditor + NMLS. **None is a one-click MCP connect** — the "connect-these-tools" concept from the skill does not hold these; they are the GATE-H procurement program.

### 5d. Compliance regime + its controls (read from the venture, not defaulted)
**Regime set (03 §5, 04 §3.4, backbone §9 — the fintech stack the default §9 table lacked):** FinCEN MSB registration (Form 107) · per-state MTLs (CA/TX/AZ/GA/NC/FL) + surety bonds + minimum net worth + control-person checks · BSA/AML 5-pillar under a **named Compliance Officer** + independent audit · KYC/CIP (ITIN/passport) · **real-time OFAC screening before funds release** · SAR (≥$2k) / CTR (>$10k/day cash — minimal, bank-funded) · transaction monitoring · **BSA Travel Rule + 5-yr recordkeeping** · **CFPB Reg E Subpart B** (pre-payment disclosure · receipt · 30-min cancel · error-resolution · funds-availability date — the customer-facing regime, made the brand promise) · **GLBA + Safeguards Rule** · CCPA/CPRA · PCI-DSS **SAQ-A** (card roadmap; PAN never on Milpa servers) · in-country partners (MX CNBV / GT IVE/SIB — Milpa holds US licenses, contracts compliant local rails) · SOC 2 readiness · escheatment/unclaimed-property.
**Gate:** every launch-gating regime is a **hard dependency** on the MSB GO-LIVE GATE (§2). **No pre-license licensure claim** in any asset (claims-gate, guardrail). **No medical claims** — N/A to this venture. FX spread is a **disclosed service margin (Reg E), never speculation.**

---

## 6. Definition of done (whole brief)

The brief is complete when:
- Every workstream DoD (§1) is met — **software workstreams (A/B/C) sandbox-verified**, config workstreams (D/E/F/G/I) live-or-drafted on their tools, **WS-H tracked to the go-live gate**.
- CI green on `main` (lint · typecheck · unit · build · e2e), branch-protected; RN + web builds pass; app-store builds approved.
- Engineering-backbone **minimum bar** all-checked for the software surface **AND** the promoted **"holding/moving others' funds"** box satisfied.
- Every §4 coverage-matrix row mapped (every AC → a PR; every backbone control → a PR/WS/gate; all 15 domains → a disposition).
- The **MSB GO-LIVE GATE (§2)** cleared — every box, each human-approved with a rollback path. **Until then, the software is sandbox-verified, license-pending — never reported as live.**

---

## Appendix A — Capstone skill-fit friction log (hardening run)

Where `/fable-brief` (SKILL.md + method.md) assumed a software/SaaS shape, lacked a workstream this venture needs, or would make Fable guess. *(Consistent with the friction logs in 01–04; the capstone inherits their de-SaaS deltas and adds its own.)*

1. **The phase model + "critical path to first dollar" are code-shaped; Milpa's critical path is ~9 months of non-software licensing.** Method §phase-model puts revenue behind "Phase 2 payment & launch surfaces → deploy gate → test-mode payments → payments go-live." For an MSB the software finishes months before the license track and then waits; first *legal* dollar is gated on FinCEN + MTL + sponsor bank + BSA/AML + AML audit. Had to add **Phase L** and invert the critical path.
2. **The nine-workstream taxonomy has no home for the thing that IS the business.** Licensing + BSA/AML program + sponsor-bank/FBO procurement + the two mandated senior hires get crammed into **WS-H "Legal & Compliance,"** which the method frames as *"ToS/privacy/DPA + regime controls"* (docs + config + gates). A 6–18-month, ~$1–2M, multi-hire, banking-procurement program is not a document-drafting workstream. Represented it as **GATE-H** and flagged it explicitly non-executable-by-Fable.
3. **The go-live gate output ("deploy → test-mode payments → payments go-live") is a Stripe mental model that doesn't exist here.** There is no "switch to live keys." Had to re-derive the **7-box MSB GO-LIVE GATE** where "software shippable is one line." The skill's own §output-contract wording would make a builder plan the wrong gate.
4. **The skill implies Fable stands up the whole venture; here a coding agent can execute only a minority (WS-A/B/C).** WS-H (licensing/banking/BSA-AML), the vendor-procurement track, treasury, and the two mandated hires are human/counsel/procurement. The method has **no "not-executable-by-the-coding-agent" concept** — an honesty gap for a mostly-off-the-shelf + heavy-ops business. Added an **Executor/executable-by-Fable** column and the §0 scope statement.
5. **"Connect-these-tools" cannot hold the vendors that ARE the business.** The list assumes MCP/registry/direct connects. Milpa's core "tools" — sponsor bank + FBO, payout aggregators, IDV, sanctions, monitoring, FX, ACH — are **contracts + due-diligence + DPA + oversight**, none in any registry. Had to split the list and route them to GATE-H, not "connect."
6. **No Treasury/float workstream.** Pre-funded settlement float, tri-party reconciliation, permissible-investments, and a state-set net-worth floor are a first-class function with a mandated human owner. The nine-WS taxonomy has no Treasury slot; it splits awkwardly across WS-E (finance) and WS-A (ledger code). Flagged; owner is the Treasury lead (WS-I hire).
7. **WS-A "Product/App" + the entire starter/CI/deploy machinery is web-only; the product is native mobile.** `starters/saas` is a Vite SPA → `dist/` → Vercel; Milpa ships React-Native (Expo) via App Store/Play Console (TestFlight, code-signing, app review, phased release, Sentry-RN/Crashlytics). The "deploy gate → preview URL" and "critical path to first dollar" have **no app-store-review notion** — Fable would guess the release pipeline. Carried it explicitly in PR-1/§2/gates.
8. **The per-PR template's core fields (Data model + RLS, `verify_jwt`, Endpoints) are software-centric and empty for the biggest work.** For GATE-H (file FinCEN Form 107; secure a sponsor-bank LOI) there is no schema, no endpoint, no JWT — the template has no "non-software gate item with no schema." Method says config-PRs swap in "tool schema/actions," but a **license filing has neither.** Had to author GATE-H as a milestone/gate program, off-template.
9. **Content & Social (domain 7) IS enumerated (WS-F) — but its DoD assumes a launchable funnel.** The method's WS-F DoD ("funnel live + tracked; social calendar drafted") presumes acquisition can run. Milpa's WS-F is **frozen behind licensure + Compliance sign-off for ~9 months** and every claim is regulated. Real workstream, but "live" is false for it pre-launch; and WS-F assumes GA4/UTM **web** analytics where Milpa needs an **MMP + SKAN** mobile stack the skill/tool-mcp-stack never names. Adapted DoD to "drafted only" and added the MMP gap.
10. **The economics/build-authorization gate is treated as binary "closed → emit brief"; Milpa's go-no-go is a CONDITIONAL GO that does NOT authorize the build.** The skill's blocking gate greenlights a full build once economics "close." 01-concept explicitly funds **pre-license de-risking only** and holds the ~$1–2M build behind later conditions. Emitting a full build brief could jump a gate the founder deliberately held. Resolved by **partitioning the brief** (authorized-now-pre-license vs. NOT-authorized-until-capital-gate) in §0 — a distinction the skill has no scaffold for.
11. **"Every product-spec AC → exactly one PR" is too rigid for compliance invariants.** ACs like "no payout before OFAC clears" and "30-min cancel" map to a code PR **and** simultaneously to a compliance-program gate (they are legal minimums, not features). Mapped them to the PR for code and to GATE-H/§5d for the regime, rather than forcing a single owner.
12. **Cross-cutting (inherited):** every skill's load-first still points at `ventures/<slug>/venture-context.md`; Milpa's context is the `00-venture-idea.md` brief + 01–04 packages. Minor, but the capstone's load list repeats the assumption.

*What fit well (calibration):* the **coverage-matrix mechanism** forced all 15 domains to an explicit disposition and caught the vendor-stack and native-mobile gaps rather than hiding them; the **per-PR security-by-default contract** (RLS, explicit verify_jwt, signature+idempotent webhooks) carried cleanly and the **system-managed-table pattern** was exactly right for quote/transfer/ledger/case; the **[STARTER]/[CONFIG]/[VENTURE] tagging** made the fintech net-new controls (OFAC-gated release, append-only ledger, Reg E invariant) legible as [VENTURE] backlog; and the **guardrail wiring** (drafts-only, $0, names-only secrets — more important at a ~9-vendor credential surface, human-gated irreversibles) fit a regulated fintech even better than a SaaS. The friction concentrates exactly where the capstone hard-codes a **software critical path, a Stripe go-live gate, a nine-WS taxonomy with no licensing/treasury/procurement slot, a web/SPA build shape, and a coding-agent-executes-everything assumption.**

---

*[DRAFT / PLAN — Milpa is pre-license and pre-capital-commit. Nothing in this brief deploys, publishes, sends, spends, files, signs, or moves a dollar without Tony's approval at the named gate. Secrets/vendors are names-only. Every irreversible action is human-gated with a rollback path. FX spread is a disclosed service margin (Reg E), not speculation. No pre-license licensure claim; no FDIC/insurance implication; no medical claims (N/A). No LYV assets or audiences used.]*
