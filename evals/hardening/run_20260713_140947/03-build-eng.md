---
name: Lustre — Build & Engineering Package
slug: lustre
artifact: 03-build-eng
stage: concept → pre-build (concierge liquidity test)
composes: venture-bootstrap (buy-vs-build-vs-none) · product-spec · engineering-backbone (§9 regime read) · tool-mcp-stack
loads-after: founder-profile/PROFILE.md · founder-profile/guardrails.md · 00-venture-idea.md · 01-concept.md
date: 2026-07-13
status: v0.1 — PRESSURE-TEST. Drafts-only, $0 spend, secrets names-only. Configuration is specified, not executed; nothing is provisioned, no live keys, no account created without Tony's approval gate.
note-on-path: Task named the output `undefined/03-build-eng.md`. That is an un-interpolated template variable; the brief requires "no stray undefined/ directory." Written to the run directory beside 00/01 per the NN- convention and the downstream-builder intent — same handling 01-concept.md used.
---

# Lustre — Build & Engineering Package

The single load-bearing fact for this layer: **Lustre is ~85% physical ops + trust coordination and ~15% software, and the 15% is bought, not built.** The business is gated by two-sided liquidity and by physical-world trust (vetting, insurance, dispatch, damage claims), not by a codebase. This package is deliberately bent to resist the software-shaped default — because "build a custom booking/detailer app before liquidity exists" is the sharpest, most expensive form of Tony's #1 failure mode, and this venture was invented to test exactly that guard.

The verdict that governs everything below (from `01-concept.md §5`): **CONDITIONAL GO — fund the concierge liquidity test, not the build.** So the primary build deliverable here is *the leanest assembly that can take one real two-sided dollar with no app*, plus a **conditional** Phase-1 spec that stays on the shelf until liquidity is proven.

---

## 0. Build-shape decision — buy vs build vs none (from `/venture-bootstrap`)

**Gate (blocking):** positioning exists (`01 §2` wedge) and unit economics close (`01 §3` take-rate math; binding constraint = liquidity). Both present → proceed. Not scaffolding speculatively.

The skill offers three branches (None / Off-the-shelf / Custom). Lustre needs a **phased read**, because its first correct build is a fourth shape the branch list doesn't cleanly name — a **concierge / manual-ops assembly** stitched from micro-tools (see FRICTION appendix):

| Phase | Trigger | Branch | What "bootstrap" produces | First-dollar milestone |
|---|---|---|---|---|
| **P0 — Concierge liquidity test (NOW)** | The `01` CONDITIONAL GO | **None / manual-ops** (a few off-the-shelf micro-tools, no app) | A landing page + an Airtable ops base + Stripe Connect payment links + Twilio SMS, matched **by hand** by ops. No repo, no Supabase, no Vercel, no code. | One real (test-mode) hand-matched job: customer charged → detailer completes → before/after photos logged → **payout reaches the detailer via Connect** |
| **P1 — Light platform (only if P0 clears the ~Aug-31 gate)** | Liquidity proven (≥10 matched jobs, acceptable time-to-match, ≥50% detailer 2nd/3rd-job retention) | **Off-the-shelf + thin custom slice (hybrid)** | Configure a booking tool + Stripe Connect + a field-service tool; build **only** the thin matching/guarantee slice if a real gap forces it | One real test-mode two-sided job through the configured platform |
| **P2 — Custom platform** | — | **REJECTED (do not build)** | — | This is the overbuild trap the venture is designed to catch. A custom detailer SaaS is specced **never** here; it earns itself only after a metro is liquid and a named capability is proven missing |

**Recorded decision + rejected branches (skill discipline):**
- **Chosen (P0): manual-ops / concierge.** Reason: liquidity — not software — is unproven; the cheapest evidence step needs no app. Zero reversibility cost (tear down in a day).
- **Rejected — Off-the-shelf single platform:** no *one* platform is being configured; the P0 need is coordination across payment-links + spreadsheet + SMS by a human. Naming it "off-the-shelf" would smuggle in a platform build.
- **Rejected — Custom software:** cannot name a capability off-the-shelf can't deliver *that liquidity has earned*. "It'll be cleaner as an app" is not a reason. This is the explicit anti-overbuild call.
- **Hybrid is the P1 destination, not the P0 start.** Buy the 90% (booking, payments, dispatch); build only the slice that must be custom — and only after P0.

---

## 1. What is actually software vs. physical ops

The generic build layer reasons about a product that *is* software. Lustre's product is a **clean car in a driveway**. Separating the two tracks is the whole game:

**Physical-ops / trust track (runs on SOPs + humans + vendors — NOT in any codebase):**
- Supply onboarding: identity verification, **FCRA background check** (vendor), **insurance verification** (commercial auto + GL + garage-keepers/CCC, kept current), skills-trial job, equipment/low-water-kit check.
- Dispatch & matching (by hand in P0): time-to-match, coverage, capacity.
- Job execution: arrival window, per-tier checklist, **before/after photo evidence**.
- Trust & safety: damage-claim adjudication, guarantee-reserve draw, two-sided ratings, deactivation policy, incident escalation.
- Money movement: split payment + **payout on job-verified**, 1099 issuance, TPT remittance.
- Environmental: low-water / **no-storm-drain** discharge standard (a documented SOP, not a feature).

**Software track (thin, bought, ~15% of the machine):**
- Capture a booking (a form → a row).
- Take payment and route the split + payout (Stripe **Connect**).
- Message both sides (SMS/email).
- Hold the records (Airtable) + the marketing page.

Everything in the software track is off-the-shelf. Nothing in the physical-ops track is solved by writing code — and most of the venture's risk and cost lives there. **The build layer's job is to stay out of the physical track's way and buy the thin software track.**

---

## 2. Off-the-shelf stack — the tool/MCP map applied (buy, don't build)

Format per `tool-mcp-stack.md` (function → default → here? → why → rejected). **"Here?"** uses that doc's availability tags against *this* environment. Rows marked **[ADDED]** are functions the generic master table has no row for but a physical-services marketplace needs (see FRICTION).

### P0 concierge minimum stack (the real "72h-equivalent" — an ops stack, not an app spine)

| Function | Chosen (P0) | Here? | Why this, not the default | Rejected / not used |
|---|---|---|---|---|
| Landing / marketing page | **Carrd** or **WordPress.com** | WordPress.com **OFF** (installable in-chat) | Static page to capture demand + set expectations; no app | Custom Vite/React frontend — nothing to build yet |
| Ops system-of-record | **Airtable** (+ `airtable:*` skills) | **LIVE** | Bookings, detailer roster, match log, job status, photo links, claims — the concierge "platform" | Supabase Postgres + RLS — **no app, no rows to secure with RLS** |
| **Booking / scheduling** **[ADDED]** | **Cal.com / Calendly / Square Appointments** | REGISTRY / DIRECT | A services marketplace's core coordination surface; the generic map has **no booking row** | Building a scheduler on Supabase |
| Payments + **split payout** | **Stripe Connect** (test mode) | Connector **OFF** + needs authorization; **names-only, no live keys** | Marketplace facilitator: split, **payout on job-verified**, payee KYC, **1099-K/NEC** — this is *not* "native checkout" | Vanilla Stripe Checkout (no payout/KYC/split); holding funds ourselves (would make Lustre a money transmitter) |
| SMS / comms | **Twilio** | **SKILL** (`twilio-*`) + API | Match confirmations, arrival windows, review requests; A2P/10DLC registration gates traffic | — |
| Founder / ops email | **Gmail** (drafts-only) | **LIVE** | Detailer + B2B outreach drafts; nothing auto-sends (guardrail) | Auto-send — prohibited |
| **Background checks (FCRA)** **[ADDED]** | **Checkr / Certn** (compliant vendor) | DIRECT (names-only) | FCRA permissible-purpose + adverse-action; **no map row** for it | Self-improvised checks — FCRA non-compliant |
| **Insurance verification** **[ADDED]** | Manual doc collection → **COI-tracking tool** (e.g. a lightweight COI tracker) | DIRECT (names-only) | Garage-keepers/CCC must be verified + current; **no map row** | Trusting a screenshot |
| Design / brand | **Canva** | **LIVE** | Logo, before/after templates, page assets | — |
| Docs / SOPs / data room | **Google Drive + Docs** | **LIVE** | Vetting SOP, IC agreement drafts, claims runbook | — |

**Deliberately absent from P0 (the point):** Supabase, Vercel, GitHub, any repo, any CI. The generic "minimum viable stack / launch in 72h" leads with those three — they exist only to run a custom codebase this phase must not write.

### P1 additions (only if liquidity proven)

| Function | Add | Trigger | Note |
|---|---|---|---|
| **Field-service management** **[ADDED]** | **Jobber / Housecall Pro** (vertical FSM: dispatch, job checklists, photos, routes, payments) | ≥~15 active detailers, hand-dispatch breaks | The off-the-shelf answer for "mobile field services." The generic map has **no FSM category and no swap trigger** for it — its instinct is "build on Supabase," the exact overbuild to avoid |
| E-sign | **Docusign / DocuSeal** | First IC agreement at volume | IC detailer agreement + customer terms |
| Accounting | **QuickBooks / Xero** + CPA | First real revenue / TPT filing | Confirm AZ + city TPT treatment of detailing (hard dependency) |
| Thin custom slice | *only* if a real gap forces it | A named capability no bought tool delivers | See §3; buy the 90% first |

**MCP availability, honestly:** Stripe and Supabase connectors report **needs-authorization** in this session. Supabase is **not needed** (no app). Stripe is used **names-only** for draft config — **no live keys, no charges, $0** — so authorization is not blocking here; it becomes a Tony-gated step only if/when a test-mode Connect account is actually stood up. Flag to Tony: authorize the Stripe connector (via claude.ai connector settings) *only* when P0 moves from spec to a real test-mode account.

---

## 3. Product-spec — the one custom surface (CONDITIONAL, P1 only)

Per `/product-spec`: read the build shape first. **Build shape = hybrid** (off-the-shelf booking + Stripe Connect + FSM, with a thin custom *matching/guarantee* slice **only if** a real gap forces it). This spec is written so a builder could execute it — but it is **gated behind P0 liquidity and NOT built during the concierge test.** In P0 the "spec" is an SOP, and its acceptance is a manual QA, below.

**Problem + success metric.** Job: reliably match a trust-seeking owner to a vetted detailer and prove the job was done well enough to release payout. Success metric = **time-to-match** and **fill rate** on available detailer capacity (the liquidity KPIs) — *not* a digital-funnel conversion rate. If the number can't be a liquidity metric, don't build.

**User stories (roles from the venture context — note two supply-side + ops, not one owner):**
- As a **customer**, I book a tier + time + address and pay, so that a vetted detailer comes to my driveway.
- As a **detailer**, I set my own availability, accept/decline a matched job, upload before/after photos, and get paid out, so that I keep my week full without chasing leads. *(Independence preserved — see §4 worker classification.)*
- As **ops/dispatch**, I match demand to an available vetted detailer and verify completion, so that liquidity and quality hold.
- As **admin**, I onboard/deactivate detailers and adjudicate a damage claim, so that the guarantee is real.

**Acceptance criteria (Given/When/Then — the two-sided ones are the point):**
- *Given* a paid booking and ≥1 available vetted detailer in the zip, *When* ops matches it, *Then* both parties get a confirmation + arrival window and the job enters `scheduled`.
- *Given* a job marked complete **with before/after photos logged**, *When* ops verifies it, *Then* funds are released to the detailer **net of the 22% take** and held until that moment — **never before job-verified**.
- *Given* a subscription (Maintenance Plan), *When* the customer requests cancellation, *Then* cancellation is **self-serve and immediate** (ROSCA / click-to-cancel — a hard dependency, not a UI nicety).
- *Given* a damage claim, *When* admin opens it, *Then* the before/after photos + coverage record are attached and the guarantee-reserve path is triggered.

**Configuration schema (off-the-shelf — the primary path):**
- **Stripe Connect:** connected accounts per detailer (payee KYC via Connect); destination charges or separate-charges-and-transfers with a **22% application fee**; funds captured at booking, **transfer/payout on job-verified**; 1099-K/NEC issuance by Connect. Ownership/export via Stripe dashboard.
- **Booking tool:** services = the five rungs (Express $49, Full Detail $189/$229, Ceramic $699, Maintenance $159/mo, B2B contract); availability owned by each detailer; customer + booking objects exportable.
- **Airtable / FSM:** roster, vetting status, insurance-expiry, match log, job status, photo links, claims.

**Data model — IF a thin custom slice is built (flag the marketplace wrinkle):** a `booking` row is **co-owned by three principals — customer + detailer + platform ops** — plus a `payout` row the service role writes. This is **not** the single-owner `owner_id = auth.uid()` shape the skill's RLS example models; multi-party row ownership (customer reads their booking; the matched detailer reads the same booking; ops reads all; payout is service-role-only, SELECT-own for the detailer) is the defining data wrinkle and must be specced explicitly, not inherited from the single-owner template.

**Edge cases & failure modes:** customer no-show; **detailer no-show** (guarantee + re-match); detailer declines (preserves independence — must be allowed); failed payout / Connect KYC incomplete; disputed damage claim; duplicate/idempotent booking; funds-held reconciliation (processing is levied on full GMV, not the take); subscription skip/cancel; weather cancellation (monsoon/heat window).

**Test plan — manual QA, two-sided (not the single-sided storefront capstone):** capstone = **one real test-mode two-sided job** — charge a test customer → detailer marks complete + uploads photos → ops verifies → **payout lands in the detailer's Connect test account**, net of 22%. Done ≠ "an order was placed"; done = **money reached the detailer only after a verified job.** Plus: cancel a test subscription in one click (ROSCA); open a test claim and confirm photos attach.

**Non-goals (overbuild guard, written down):** custom detailer mobile app, route optimization, ratings ML, dynamic pricing, multi-metro mechanics, priority-placement fees, supply wholesale — all deferred. Custom is specced **only** if P1 names a capability no bought tool delivers.

**Security posture:** neither pure RLS nor pure vendor-config — a **blended** posture (§4), because a Connect marketplace holds sensitive PII across several vendors plus (maybe) a thin custom slice.

---

## 4. Engineering & security posture that actually applies (from `engineering-backbone.md`, regime read from the venture)

The backbone says explicitly: **read the regime from the venture's model, not from an assumption that it is software.** Doing that honestly, most of the software *core* (RLS, `verify_jwt`, edge-function auth, the policy-audit query, CI/CD, Sentry/SLO) is **N/A in P0 — there is no app.** What actually governs Lustre:

**Go-live gate that applies = the physical/services minimum bar, NOT "cleared to switch to live Stripe keys."** The launch-gating boxes are: **insurance in force, licensure/permits issued, unit economics validated, and the marketplace-specific compliance cleared** — not a code-shipped gate.

**Identity & access = vendor-config (the §6b posture), not RLS.** Least-privilege + MFA on every tool account (Airtable, Stripe, Twilio, Gmail, booking, background-check vendor); no shared logins; break-glass in a vault. **Access register must include a data class the generic matrix omits: supply-side detailer PII + FCRA background-report data** — the most sensitive data Lustre holds — kept inside the vendor's controls, never exported (guardrail).

**Data & privacy.** Sensitive classes = customer **home addresses + vehicle/access details**, detailer PII, **background-check reports**, payment tokens, payout/tax data. Controls: PII classification + minimization; **DPAs with every vendor** (Stripe, Airtable, Twilio, booking, background-check); retention + deletion; publish a privacy policy; **card data stays with Stripe** (SAQ-A — never touches our systems); background data stays in the vendor's system (guardrail).

**Compliance-by-design (§9) — apply every matching regime. Three of Lustre's marquee regimes have NO row in the matrix and are added here (FRICTION):**

| Regime | Applies because | Control | Matrix row? |
|---|---|---|---|
| **Worker classification (1099 vs employee)** — FLSA + AZ common-law; ABC/AB5 on any CA expansion | Detailers are independent contractors; misclassification is the **marquee, product-shaping** risk | Preserve genuine independence: detailers set availability, use own kit, can decline, can multi-home; **do not over-control** (dictating price/uniforms/exclusivity raises reclassification). Shapes a product decision — *who sets the price*. IC attorney review before first paid match | **NONE — added** |
| **Environmental / Clean Water Act stormwater** | Wash-water runoff to storm drains is regulated; AZ water scarcity | **Low-water / no-storm-drain-discharge** standard documented as a supply SOP; a constraint turned into an operating standard | **NONE — added** |
| **FCRA background checks** | Running checks on detailers | Compliant vendor (Checkr/Certn); permissible purpose, disclosures, adverse-action notices | **NONE — added (adjacent to data regimes but unlisted)** |
| **Money transmission / KYC** | Marketplace holds + moves third-party funds | **Route funds through Stripe Connect as marketplace-facilitator so Lustre is NOT the transmitter**; Connect handles payee KYC + 1099. Never hold funds ourselves | **YES (§9 table B) — matrix handles this well** |
| **Licensure / permits + insurance** | AZ TPT + city privilege tax; garage-keepers/CCC | AZ + city TPT licenses; **confirm TPT treatment of detailing with a CPA (hard dependency)**; per-detailer commercial auto + GL + garage-keepers verified + current; platform GL; the damage guarantee **sits on verified coverage** | **YES (licensure + minimum-bar insurance box)** |
| **FTC Green Guides + ROSCA/click-to-cancel** | "Vetted/insured/guaranteed" claims; eco temptation; $159/mo subscription | Every claim literally true; **no eco/"waterless"/"non-toxic" overclaim** (guardrail); subscription = clear disclosure + one-click cancel | **YES (§9 FTC row)** |

**Reliability / observability — right-sized down.** P0's "backup" is an exported Airtable/Stripe record and a shared inbox, not PITR + Sentry + an SLO. The backbone's reliability section presumes an app to keep up; scale it to the phase.

**Rollout & definition of done.**
- **P0 done** = one real **test-mode** hand-matched two-sided job with a verified payout — no app, no code. Every spend / live-key / account-creation / contract step is **human-gated [approval: Tony]** with a stated rollback (a test-mode account and a spreadsheet tear down in a day).
- **P1 gate** = liquidity proven → *then* spec the thin slice; inherit the backbone's software core **only for that slice** (RLS on the co-owned `booking`/`payout` tables, `verify_jwt`, signature-verified idempotent Connect webhooks, CI).
- **Guardrails footer:** drafts-only (Gmail never auto-sends); **$0 spend** without Tony's sign-off; secrets names-only (no live keys materialized); irreversible/production actions (live payments, contracts, background checks) require explicit approval + rollback.

---

## Appendix — FRICTION: where the build layer fought the physical/off-the-shelf shape

Recorded for downstream builders (the same discipline `01-concept.md` used when it had to replace a demand-side formula). These skills/docs are **substantially hardened already** — explicit off-the-shelf branches, a physical-goods regime table (§9-B), and a marketplace→Stripe-Connect trigger — so this is **residual** friction, not wholesale. Each = source + specific issue.

1. **venture-bootstrap (branch list):** the three branches (None / Off-the-shelf / Custom) don't cleanly name the **concierge / Wizard-of-Oz manual-ops MVP** the concept prescribes — a payment-links + spreadsheet + SMS assembly matched by hand. It falls between "None" (undersells the coordination) and "Off-the-shelf" (no single platform is configured). Needed a 4th shape.
2. **venture-bootstrap (§6b off-the-shelf checklist):** the payment step is "wire payments via the platform's **native checkout**." A two-sided marketplace needs **split payments + payouts + payee KYC + funds-held-until-completion (Stripe Connect)** — none of which is native checkout. §6b models **single-sided buyer checkout only**; no two-sided/payout concept.
3. **venture-bootstrap (§1 stack matrix):** every "leanest stack" default routes to **Supabase Auth + Postgres + RLS + Edge Functions**. For the hybrid thin-slice, it pushes a full Supabase+RLS app where a Cal.com + Connect + Airtable/FSM assembly is leaner. **No field-service/booking/marketplace row** — every need becomes "build it on Supabase."
4. **venture-bootstrap (worked examples):** **both** off-the-shelf examples are the *same* Shopify DTC physical-goods storefront. **No services, booking, or two-sided-marketplace example** — a builder pattern-matching off these reaches for Shopify, wrong for a service marketplace.
5. **product-spec (build-shape branch):** binary — custom (data-model + RLS + interface) **or** off-the-shelf (config spec). Lustre's real surface (booking + Connect escrow-until-verified + thin slice) is a **hybrid that fits neither**; the two security postures offered (RLS/`verify_jwt` vs. vendor-config) don't cover a multi-vendor Connect marketplace holding home addresses + background reports.
6. **product-spec (data-model example + roles):** the RLS example is **single-owner** (`owner_id = auth.uid()`). A marketplace `booking` is **co-owned by customer + detailer + platform ops**; multi-party row ownership — the defining marketplace data wrinkle — isn't modeled or mentioned.
7. **product-spec (off-the-shelf capstone):** "one real test-mode **order/booking**" is a **single-sided** acceptance. A marketplace "done" is **two-sided** — payout reaching the detailer *only after job-verified + photos logged*. The manual-QA capstone has no notion of the payout/verification leg.
8. **product-spec (subscription example):** the off-the-shelf subscription worked example wires the **billing mechanics** (Shopify selling-plan) but never flags the **ROSCA / click-to-cancel** legal surface the venture treats as a hard dependency; and it assumes a subscription = a subscription-**app integration**, with no model for "recurring revenue sold/managed by hand in a concierge MVP."
9. **engineering-backbone (§9 compliance matrix):** **no row for worker classification (1099/FLSA/AZ common-law/AB5)** — a marketplace's #1, product-shaping legal risk has no home in "compliance-by-design," even though the matrix covers money transmission, licensure, PCI, HIPAA, etc.
10. **engineering-backbone (§9):** **no row for environmental / Clean Water Act stormwater.** The matrix reads what you "make/sell/serve/move," not the **environmental externality of *performing* a service** (wash-water runoff).
11. **engineering-backbone (§9):** **FCRA background-check compliance** — triggered by vetting supply-side workers — has no consumer-reporting row; a core marketplace-onboarding compliance surface is invisible.
12. **engineering-backbone (§2 + minimum bar "Identity & access"):** authored **RLS-first** ("RLS is ON for every user-owned table," `verify_jwt`). It says a hosted-platform venture "satisfies most through the platform," but — unlike venture-bootstrap §6b — it **doesn't restate the group in vendor-config terms**, so for a no-app concierge MVP the three identity boxes have **no target**.
13. **engineering-backbone (§10 access matrix + ownership summary):** the default access matrix is **Supabase/Stripe/GitHub/Vercel-centric** and presumes the venture runs its own repo + Supabase project. No **supply-side worker PII / background-report** access class — arguably Lustre's most sensitive data.
14. **tool-mcp-stack ("Minimum viable stack — 72h"):** the 8-tool spine leads with **Supabase + Vercel + GitHub** — three tools that exist only to run a bespoke codebase the concierge MVP must **not** write. **No "no-app / ops-only" minimum variant**, so the default launch presumes deploying software.
15. **tool-mcp-stack (master table):** **no booking/scheduling row.** A field-services venture's central coordination surface (Cal.com/Calendly/Square Appointments) is absent from "every tool to run and operate the business."
16. **tool-mcp-stack (industry triggers):** **no field-service-management (Jobber/Housecall Pro) category or swap trigger.** The list maps e-commerce→Shopify and marketplace→Stripe Connect, but nothing maps "mobile field services / dispatch / job photos / route" to the vertical SaaS that owns it — so the eventual-app instinct defaults to "build on Supabase," the exact overbuild the venture warns against.
17. **tool-mcp-stack (coverage gap):** despite claiming to map **"every tool to run and operate the business,"** there is **no background-check (Checkr/Certn) and no insurance-verification** vendor anywhere — marketplace supply-side trust-and-safety tooling is invisible.
18. **tool-mcp-stack (Payments row):** frames Stripe as "Checkout, subscriptions, webhooks." **Stripe Connect** (payouts, payee KYC, 1099-K/NEC, held funds) is a one-line *industry-trigger swap*, not a first-class function — understating the single most important money-rail decision for a take-rate marketplace.
