---
name: Operations Package — Milpa (Milpa Financial, Inc.)
venture: Milpa — mobile-first bilingual remittances, run as a licensed US MSB (US → Mexico, then Guatemala)
archetype: Regulated consumer fintech — cross-border remittance MSB; strictly transactional (fixed fee + FX spread)
stage: Operations design (post-concept, alongside build plan 03-build-eng.md)
date: 2026-07-13
skills run (each SKILL.md + references/method.md): finance-ops · sales-crm · legal-pack · org-roles · analytics-stack · support-success
loads honored: founder-profile/PROFILE.md, guardrails.md; venture brief 00-venture-idea.md; concept 01-concept.md; build plan 03-build-eng.md; docs/engineering-backbone.md §5/§7/§9/§10
note: Drafts/specs only. No entity filed, no contract signed, no license submitted, no vendor onboarded, no dollar moved, no message sent. Secrets/vendors are names-only. Every irreversible action is human-gated. Not legal, tax, or accounting advice — each judgment point carries a review flag.
---

# Milpa — Operations Package

**One line.** This stands up the six operating functions Milpa runs on — finance, partnership/BD CRM, legal/regulatory, org/roles, analytics, support — built for a *strictly transactional* licensed money-services business, not a SaaS. There is no subscription, no MRR, no seats, no deferred revenue, no invoiced AR, and no B2B sales pipeline to a paying customer. Revenue is a per-transfer fee plus a disclosed FX spread; the customer is a consumer sender; the moat and the cost are the license stack and the BSA/AML program. Where a skill's default machinery assumed recurring software revenue, a digital-only sales funnel, or a subscription lifecycle, the substance is adapted and the mismatch is logged in **Appendix A — Ops-layer skill-fit friction log**.

**Scope note (read first).** Milpa is a fifth business-model archetype the operations skills do not natively carry: **money transmission**. Money flows *through* Milpa (like the marketplace "payouts-payable" pattern) but Milpa is the **principal** service provider under a per-transaction take, not an agent matching buyers and sellers; and unlike any of the four archetypes (subscription · goods · services · marketplace) its survival number is **pre-funded settlement float + surety bonds + a state-set minimum-net-worth floor**, not `cash ÷ burn`, not a goods cash-conversion cycle, and not deferred revenue. Every function below selects the closest archetype block, states what it had to replace, and honors the guardrails: **drafts-only · no spend · secrets names-only · irreversible actions human-gated with a rollback path · disclosed FX margin (Reg E), never speculation · fully legal, no gray areas.**

**Failure-mode guard (Tony's documented patterns).** Overbuild is the live risk in a fintech — you can build KYC, screening, monitoring, treasury, a 50-state CRM, and a call center before the first legal transfer clears. The discipline holds: **2 corridors, 6 states, one product**; buy every regulated capability, build the thin slice; the *fewest* roles that remove the founder from a bottleneck (with the two exceptions regulation mandates); instrument only what changes a decision. Founder-dependence is designed out by a **named senior Compliance Officer and a Treasury lead** — both non-negotiable, neither systematizable to AI.

---

## 1. Finance & Accounting — `/finance-ops`

**Archetype selected: money transmission (a 5th archetype the skill lacks).** Closest existing block = **marketplace** (money held for others = a liability; recognize *net* take, never GMV, as revenue). Borrowed from **goods** = a working-capital survival lens (but the "inventory" is money-in-flight, plus regulatory bond/net-worth locks the goods model has no slot for). **Explicitly rejected: the subscription default** — there is no deferred revenue, no MRR, no ARR, no prepaid term to release, and no invoiced accounts-receivable/dunning cycle. Economics are **consumed** from the brief/concept (`/offer-architect` equivalent), not re-derived.

### 1.1 Chart of accounts (base + money-services block)

Numbered COA, mapped to Milpa's actual revenue lines and the money-in-flight structure. **The money-services block is the adaptation** — the skill's subscription/goods/services/marketplace blocks do not carry an FBO settlement, an outstanding-transmission payable, surety-bond collateral, or a permissible-investment float line.

| Range | Class | Milpa lines |
|---|---:|---|
| **1000–1999** | **Assets** | 1000 Operating cash (corporate) · 1010 Tax-reserve cash · **1100 FBO / settlement cash — customer funds (custodial; offsets 2100)** · **1110 Pre-funded float (Milpa working capital deployed as a permissible investment)** · 1200 Funding receivable (sender ACH/card initiated, unsettled) · 1210 Settlement receivable from payout aggregator · **1300 Surety-bond collateral / restricted deposits (per state)** · 1310 Prepaid expenses (bond premiums, licensing fees, insurance) · 1320 Vendor pre-fund / FX margin deposits · 1500 Capitalized software (orchestrator + app) · 1900 Fixed assets / accum. depreciation |
| **2000–2999** | **Liabilities** | **2100 Customer payout payable / outstanding transmissions (money owed to recipients — the core MSB liability; offsets 1100/1110)** · 2110 Undeliverable / unclaimed funds (escheatment) · 2200 Accounts payable · 2210 Corporate-card payable · 2300 Accrued vendor per-transaction costs · 2400 Payroll liabilities · **2500 Fraud / ACH-return / chargeback reserve** · 2600 Sales-tax payable (stub — largely N/A, see §1.6) |
| **3000–3999** | **Equity** | Common stock · APIC · Retained earnings · SAFE/convertible notes (if raised) · Distributions |
| **4000–4999** | **Revenue** | **4000 Transfer fee revenue (fixed fee)** · **4010 FX spread revenue** · 4090 Fee waivers / promo credits / referral credits (**contra-revenue**) |
| **5000–5999** | **Cost of revenue (per-transfer variable)** | 5000 Pay-in / funding cost (ACH + card interchange) · 5010 Payout cost (bank/SPEI + cash-pickup agent commission) · 5020 FX / liquidity & treasury slippage · 5030 Sanctions screening + transaction monitoring (per-txn) · 5040 Fraud / ACH-return / chargeback provision · 5050 Payment-network & misc · 5060 KYC / IDV (one-time per new customer — **CPA: COGS vs S&M classification**) |
| **6000–6999** | **OpEx (the fixed nut)** | **6000 Compliance program (Compliance Officer comp · AML platform base fees · independent AML audit · training)** · 6010 Payroll (non-compliance) · 6020 Contractors · **6030 Regulatory & legal (NMLS/MTL filing fees · regulatory counsel · exam costs)** · **6040 Surety-bond premiums (amortized)** · 6050 Software / hosting · 6060 Marketing / ads / referral subsidy · 6070 Professional fees (audit, CPA) · 6080 Insurance · 6090 Bank & vendor platform base fees · 6100 D&A |
| **7000–8999** | **Other** | **7000 Float / settlement interest income (treasury yield — UPSIDE, deliberately outside core operating revenue per the brief)** · 7100 Interest expense · 8000 Income tax |

**⚖ CPA / controller review points (drafted here, decided by a professional):**
- **Custodial-funds presentation** — customer money in the FBO grossed up on the balance sheet (asset 1100/1110 ↔ liability 2100) vs. off-balance-sheet disclosure. Materially changes the balance sheet.
- **ASC 606 principal-vs-agent + timing** — Milpa is **principal** for the transmission service; revenue = **fee + spread**, recognized **point-in-time at transfer completion**. Never book GMV as revenue (the ~$73M GMV run-rate is not the ~$1.4M revenue run-rate — a ~50× gap). No deferred revenue exists.
- **FX-spread split** — how much of the 1.3% spread is revenue (4010) vs. genuine COGS (5020 treasury slippage, modeled ~0.2%).
- **Permissible investments + minimum net worth** — state MTLs constrain *how* float cash (1110) may be held and set a net-worth floor; this is a regulatory-accounting constraint, **⚖ CPA + regulatory counsel** (bridges to §3).
- **Reserve methodology** (2500) · **surety-bond & prepaid-licensing capitalization/amortization** (1300/1310/6040) · **escheatment/unclaimed-property** accounting (2110).

### 1.2 The model — driver-based unit economics (transactional take-rate)

Money model is **per-transfer contribution × frequency × principal**, not MRR and not AOV-lift. Consumed from concept §3/§4 (average $380 send):

| Line | Per txn | Note |
|---|---:|---|
| Revenue — fixed fee (blended) | $2.50 | $2.99 headline; waivers/promos applied via 4090 |
| Revenue — FX spread @ 1.3% | $4.94 | disclosed customer rate vs. wholesale |
| **Gross revenue** | **$7.44** | ≈ 1.9% all-in take rate |
| Variable COGS (5000–5050) | ($3.51) | pay-in $0.90 · payout $1.20 · FX slippage $0.76 · screening+monitoring $0.25 · fraud reserve $0.30 · network $0.10 |
| **Contribution** | **$3.93** | **≈ 53%** |

- **Growth driver (the P&L build):** `active senders × transfers/sender/yr × gross rev/transfer`. Exit-Y1 ≈ 8,000 × 24 × $7.44 ≈ **$1.43M gross run-rate**. There is **no seat expansion and no ascension** — revenue-per-customer rises only through **frequency and principal**.
- **The single most-sensitive driver — protect it: COGS mix, not churn and not price.** ACH-vs-debit funding and bank-vs-cash payout swing contribution hardest ("can halve contribution"). Finance owns a **mix dashboard** (ACH %, bank-payout %) as a first-class P&L input — instrumented in §5.
- **Break-even (venture level):** a ~$150k/mo fixed nut ÷ $3.93 ≈ **~38k transfers/mo ≈ ~16k active senders**; ~$250k/mo ≈ **~64k transfers/mo ≈ ~27k active**. Exit-Y1 ~8,000 active → **structurally EBITDA-negative in Year 1**; break-even is a footprint-expansion (Year 2–3) event, not a Year-1 one. Consistent with the brief.
- **One-time per new customer:** KYC/IDV $1.50–$2.50; blended CAC ~$28; give-$10/get-$10 referral. First transfer is a **deliberate loss-leader** (fee waived + boosted rate), paid back over transfers #2–#12 (~5–6 months at 2/mo).

*Deliverable form:* the working model ships as an **`xlsx` workbook** on approval (driver block → 12-mo P&L → base/best/worst off one assumption sheet). Presented in-doc here to keep the reversible authoring finished and the build gated.

### 1.3 The stack (function → tool → MCP status)

| Function | Recommended tool | MCP here? | If no MCP |
|---|---|---|---|
| Model / cash-flow / mix | `xlsx` skill | ✅ skill | — |
| Assumptions / open-item / vendor-cost logs | Airtable | ✅ **Airtable MCP** | — |
| **Revenue system of record** | **Custom double-entry ledger (build-eng §2b) reconciled to sponsor bank + payout aggregator** | ⚠️ built, not a SaaS | **Stripe is NOT the rail** — it does not do cross-border SPEI/Banrural/cash-pickup payout; the subscription-billing/A2X bridges do not apply |
| General ledger | QuickBooks Online (US, CPA-standard) | ❌ | connect via `SearchMcpRegistry`; interim = ledger + Airtable + `xlsx` |
| Close / recs / JEs / statements / variance | `finance:*` skill pack | ✅ skills | — |
| Payroll + contractors | Gusto | ❌ | connect at first W-2 hire (the Compliance Officer) |
| AP / expenses / cards | Ramp / Bill.com | ❌ | interim = Airtable approval log; **spend gate = Tony** |
| Banking (corporate) | Mercury / Relay (operating + tax-reserve) | ❌ | flag to connect |
| **Sponsor bank / FBO / float** | **MSB-experienced sponsor bank** | ❌ (a banking relationship, not an MCP) | §3 contract + §2 CRM pipeline; **the existential kill-gate** |
| Sales tax | — | — | **largely N/A** (money transmission is a financial service; §1.6) |
| Cap table | Carta / Pulley | ❌ | flag to connect at first equity issuance |
| Board deck / investor update | `pptx` / Canva / Gmail | ✅ (Canva, Gmail MCP) | **Gmail = draft only** |

### 1.4 The monthly close (money-services variant)

Sequenced; each step names its `finance:*` skill; gated on controller/CPA sign-off before anything files or sends. **The workhorse rec is the tri-party settlement rec, not a Stripe-payout rec.**

| Day | Step | Skill / tool | Gate |
|---|---|---|---|
| D1 | Cutoff; pull sponsor-bank statement, payout-aggregator settlement files, ACH/card processor reports | ledger + bank/vendor feeds | — |
| D1–2 | **Tri-party settlement rec** — FBO bank ↔ ledger ↔ payout aggregator ↔ **outstanding payout-payable (2100)**; confirm every in-flight transfer is either paid or reserved | `finance:reconciliation` | **must tie to the cent** |
| D2 | **Treasury / float position** — pre-funded float vs. GMV-in-flight; permissible-investment + net-worth compliance check | `finance:reconciliation` + `xlsx` | *⚖ regulatory floor* |
| D2–3 | **Transfer revenue rec** — fee (4000) + spread split (4010 vs 5020); apply waivers/referral credits (4090). **No deferred-revenue schedule (none exists).** | `finance:journal-entry` | *⚖ CPA: 606 principal/point-in-time* |
| D3 | Per-transaction COGS accrual (pay-in, payout, screening, monitoring); fraud/return reserve true-up (2500) | `finance:journal-entry` | *⚖ CPA: reserve method* |
| D3 | AP + prepaids (bond premiums, licensing amortization); card reclass | `finance:journal-entry` | — |
| D3–4 | Payroll (incl. Compliance Officer + Treasury), contractor accruals | `finance:journal-entry` | — |
| D4 | Depreciation / capitalized-software amortization | `finance:journal-entry` | — |
| D4–5 | Balance-sheet recs — surety-bond collateral, escheatment, deferred nothing, equity | `finance:reconciliation` | all accounts recd |
| D5 | Financial statements (P&L / BS / CF) | `finance:financial-statements` | — |
| D5–6 | Budget vs actual — variance to drivers, **mix-decomposed** (contribution miss = funding-mix vs payout-mix vs volume) | `finance:variance-analysis` | materiality set |
| D6 | Cash / float / runway refresh + roll the 13-week forecast one week | `xlsx` + Airtable | — |
| D6–7 | **NMLS Money Services Businesses Call Report inputs** + any state financial reporting drafted | `finance:financial-statements` | **draft only** |
| D7 | Board / investor package (KPI→P&L bridge, §1.5) | `finance:financial-statements` + `pptx`/Canva | **draft only** |
| D7 | **Review gate** | — | **controller/CPA sign-off before filing or sending** |

*The "sales-tax nexus / R&D §174" steps that dominate the skill's close are near-absent here (§1.6). The regulated filing analog is the **NMLS Call Report + state MTL financial reporting**, which the skill's close has no step for — added above.*

### 1.5 Board / investor reporting — KPI→P&L bridge (transactional, not an MRR strip)

The bridge is the **transactional take-rate chain**, wired to match `/metrics-dashboard` + §5 names exactly:

> active senders → **transfers/sender/mo** → GMV (senders × transfers × avg principal) → **× take rate (1.9%)** → gross revenue → **− COGS (mix-driven)** → contribution → − fixed compliance nut → EBITDA.

Investors fund the **leading metric — active senders × repeat frequency** — because it predicts the lagging contribution. The money strip is **contribution/transfer, take rate, GMV, blended CAC/payback, active-sender count** — never MRR/NRR (they do not exist here). **⚖ controller** signs before any board/investor send; **Gmail draft only.**

### 1.6 Tax map (the skill's heaviest surface is nearly moot; a different surface replaces it)

| Item | Milpa reality | Who decides |
|---|---|---|
| **Sales / transaction tax (nexus + taxability)** | **Largely N/A** — money transmission is a financial *service*, not taxable tangible goods or SaaS. No Anrok/Avalara/TaxJar build. The skill's single heaviest review surface barely applies. | CPA confirms N/A per state |
| **Money-transmitter financial requirements** | **The actual heaviest surface** — surety bonds, permissible investments, minimum net worth, NMLS Call Report. The finance function **owns the numbers**; regulatory counsel owns the rule. Bridges to §3. | **⚖ CPA + regulatory counsel** |
| **Income tax** | Federal + state C-corp; quarterly estimates | CPA |
| **R&D §41/§174** | **N/A-leaning** — the software is thin orchestration, not the moat; flag only if genuine qualifying dev spend accrues | CPA |
| **QSBS / 83(b) / equity** | C-corp stock; relevant at raise/equity issuance | CPA + attorney |

---

## 2. Commercial Motion — `/sales-crm`, reframed

**The core mismatch, stated up front:** the paying customer is a **consumer sender** doing repeat ~$380 transfers at high frequency. There is **no B2B deal, no proposal, no quote, no e-sign contract, no discount ladder, and no weighted-dollar customer pipeline.** The skill's 4-table Companies/Contacts/Deals/Activities CRM, the prospect→qualify→demo→proposal→close ladder, the deal desk, and dollar-weighted forecasting **do not model the consumer motion.** Applied honestly, the skill splits into two surfaces:

### 2A. Partnership / BD CRM — *where the skill fits well*

Milpa's real relationship pipelines are not customer sales; they are the **partnerships that let the app touch money at all.** These are genuine, high-stakes, staged, one-Accountable relationships — exactly what the CRM machinery is built for. Default to **Airtable (MCP) + `airtable:sales-ops`**.

**Base: "Milpa — Partnerships & Rails."**
- **Organizations** (the counterparty): `Name` · `Type` (Sponsor bank / Payout aggregator MX / Payout aggregator GT / FX-liquidity / IDV / Sanctions / Monitoring / ACH processor / Card processor / Community org (HTA/church) / Regulatory counsel / AML auditor) · `Criticality` (Existential / High / Med) · `Corridor` · `Owner` · **`Source origin`** (incl. explicit `LYV (co-owned) — off-limits`).
- **Contacts** · **Relationships** (the "deal" table, renamed — a partnership in motion) · **Activities**.
- **Pipeline stages (partnership, not sales):**

| Stage | Exit criterion | Weight |
|---|---|---|
| Identified | Target counterparty named, ICP-fit for the rail | 5% |
| Engaged | Two-way contact; intro call held | 15% |
| Diligence / Term sheet | Mutual diligence; **LOI / term sheet** exchanged | 40% |
| Contracting | Legal review in motion (`legal:review-contract`) | 70% |
| **Live / Signed** | Agreement executed **and** sandbox/integration validated | 100% |
| Dead | Declined; reason captured | 0% |

- **Forecast, weighted by *criticality and gate-risk*, not dollars.** The board view is not $-pipeline; it is **"are the existential rails secured?"** The **sponsor-bank LOI is the concept's kill-gate** (no LOI by ~2026-11-15 → shelve) — it is the single most important row in the whole company and is tracked here with a hard date.
- **Deal desk → partnership term-sheet gate:** any sponsor-bank / payout / FX / vendor term sheet → **`legal:review-contract` + founder approval**; signature is an **irreversible, human-gated** action (guardrail). Vendor onboarding requires a **DPA + GLBA safeguards attestation** *before* data flows (bridges §3/§4).
- **Community/referral channel** (HTAs, churches, ambassadors) is a light partner pipeline in the same base — ambassadors are captured, agreements drafted, **never auto-contacted**; referral credits are a *policy* (below), not a per-deal discount.

### 2B. Consumer growth funnel — *where the skill does NOT fit; it hands off*

The consumer motion is an **acquisition → activation → retention → referral funnel**, owned by growth + analytics (§5) + support/lifecycle (§6), **not** a weighted deal pipeline. What legitimately lives in a CRM-shaped surface:

- **Pre-license waitlist (the one clean "lead capture" use).** The concept's pre-license CAC test = a bilingual waitlist + geo ad test measuring **cost-per-signup** (legal pre-license — collecting interest, not transmitting money). Capture via Airtable Form + Gmail MCP; the metric is cost-per-signup vs. the ~$28 CAC ceiling, **not** a fit/intent B2B lead score.
- **Everything after go-live is funnel, not pipeline:** signup → KYC cleared → first transfer (activation) → repeat (retention) → referral. Modeled as **rates and cohorts in §5**, serviced by lifecycle sequences in §6. There is no "close," no "handoff to delivery" — the transfer *is* the delivery.
- **Pricing / promo = a central policy, not a discount desk.** The $2.99 fee (waivable), first-transfer-free, boosted-rate bands, and give-$10/get-$10 are a **disclosed, Reg-E-compliant pricing policy** set once and applied uniformly — not per-customer negotiation. Any change to the fee/spread/promo structure is a **founder + compliance gate** (it is a consumer-disclosure change under Reg E), logged like a deal-desk exception but governed by disclosure law, not margin approval.

### 2C. Outbound, drafts-only, and the consumer-comms compliance overlay

- **DRAFTS ONLY holds absolutely** — no partnership email/DM and no consumer marketing send goes out without approval.
- The heavier constraint on the consumer side is **not CAN-SPAM sales etiquette but TCPA + A2P 10DLC + consent** on transactional status SMS/WhatsApp and marketing. Consent is captured at onboarding; marketing sends are drafts; transactional delivery notifications are a **product feature** governed by the messaging-compliance stack (`twilio-developer-kit:*`), covered operationally in §6.
- **LYV firewall** applies to the partnership base: any counterparty or community contact of ambiguous origin is treated as LYV-originated until Tony confirms, and is never cross-sourced.

*Metrics handed to `finance-ops`:* new activated senders (count + date + channel), principal, funding/payout mix → finance closes CAC/LTV/payback. Partnership PIPELINE (rail-readiness) reported via `/weekly-ops-review`. Link handoff via `airtable:show-airtable-link` after any base touch.

---

## 3. Legal, Entity & Regulatory — `/legal-pack`

> **NOT LEGAL ADVICE.** Every judgment point carries **⚖ <specialist>**. Every contract is a **draft to be reviewed**; every filing and signature is **irreversible and human-gated**. Compliance/licensure is treated as a **hard dependency gating launch and spend**, per the guardrails — not a formality. This is the function that fits the skill *best*, because the venture is regulated to its core.

### 3.1 Entity + governance + cap table

**Recommendation: Delaware C-corp — already the plan (Milpa Financial, Inc.).** The fundraising fork is decisive: ~$1–2M working capital (float + bonds + net worth + runway) plus the need for a clean control-person structure for MTL background checks makes the C-corp the correct container. **⚖ corporate + CPA.**
- Governance: Certificate of Incorporation + Bylaws + board consents + (on any co-founder/investor) Stockholders' Agreement, founder **vesting**, **83(b)** (30-day IRS clock), **IP/technology assignment to the entity at formation.**
- Cap table: authorized/issued/outstanding, option pool, fully-diluted, SAFE/note conversion, 409A, QSBS eligibility (C-corp, 5-yr hold). Tool: Carta/Pulley (flag to connect). Hand tax mechanics to `/finance-ops`.
- **MTL structural note:** state money-transmitter licensing requires disclosure and fingerprinting of **control persons** (typically ≥10%/≥25% owners + key officers). The cap table is therefore **regulatory-load-bearing**, not just finance — keep it clean and current. **⚖ regulatory + corporate.**

### 3.2 The contract set (review-flagged drafts) — near-universal + money-services rails

*Near-universal set (any venture with users, data, people, partners):*

| Contract | Milpa need | Template? | Operated by | Review |
|---|---|---|---|---|
| **Consumer User Terms / Remittance Agreement** | The contract with senders — **must embed CFPB Reg E disclosures, receipts, 30-min cancellation, error-resolution rights, funds-availability date** | **bespoke** (regulated consumer terms) | `legal:review-contract` + `legal:compliance-check` | ⚖ **regulatory + consumer-finance** (Reg E is the customer-facing regime) |
| **Privacy Policy** | Must match practice + **GLBA + CCPA/CPRA**; discloses data sharing with rails/vendors | templatable structure, bespoke content | `legal:compliance-check` | ⚖ **privacy** `[GLBA/CCPA]` |
| **DPA (+ GLBA safeguards attestation)** | With **every** vendor touching sender/recipient PII (IDV, sanctions, monitoring, ACH, payout, FX, hosting) | templatable (vendor paper) + review | `legal:review-contract` + `legal:vendor-check` | ⚖ privacy `[GLBA]` |
| Mutual + one-way **NDA** | Sponsor-bank / payout / vendor / investor talks | templatable | `legal:triage-nda` | ⚖ light |
| **MSA + SOW** | Vendor and professional-services umbrella | bespoke-leaning | `legal:review-contract` | ⚖ corporate (liability, IP, indemnity) |
| **Contractor / Employment agreements** | Compliance Officer, Treasury, product, bilingual support — **PIIA/IP assignment + classification** | bespoke by jurisdiction | `legal:review-contract` | ⚖ **employment** `[state]` |
| **Mutual-referral / community-partner** | HTA/church/ambassador referral terms | templatable | `legal:review-contract` | ⚖ corporate |

*Money-services rail set (the adaptation — the skill's model-specific menu has goods/lease/IP-license but no financial-rails contracts):*

| Contract | Milpa need | Review |
|---|---|---|
| **Sponsor-bank / FBO / settlement agreement** | The existential relationship — governs the FBO account, pre-funded float, settlement, Nacha/ACH obligations, and Milpa's BSA/AML obligations to the bank | ⚖ **regulatory + banking** (the single most important contract Milpa signs) |
| **Payout-aggregator agreements (MX + GT)** | Licensed local paying-agent rails (SPEI/CLABE + cash pickup; Banrural/Banco Industrial + cash pickup); allocate local AML obligations, SLAs, FX, liability, outage remedies | ⚖ regulatory + corporate `[cross-border]` |
| **FX / liquidity provider agreement** | Wholesale-rate sourcing, settlement, hedging limits on float | ⚖ corporate + treasury |
| **IDV / sanctions / monitoring vendor agreements** | BSA/AML third-party oversight built in; data-minimization (store reference + decision, not raw docs) | ⚖ regulatory + privacy |
| **Surety-bond agreements (per state)** | The bond backing each MTL (~$25k–$1M+/state) | ⚖ regulatory `[per state]` |

**Workflow:** draft from a reviewed baseline → `legal:review-contract` → store in **Google Drive (MCP live)** → `legal:signature-request` routes to e-sign → **the human signs.**

### 3.3 IP + trademark (flag, never clear)

- **IP assignment:** all orchestrator/app/ledger/disclosure-engine IP assigned to the entity at formation; every employee signs a **PIIA/CIIA**; every contractor carries a **present assignment + work-for-hire**.
- **Trademark:** knockout search on **"Milpa"** (a common Spanish/Nahuatl word → elevated collision + descriptiveness risk in financial-services classes) → **clearance opinion by TM counsel** → USPTO filing in the right classes → monitor. **Flag the risk and map the path — never declare the mark clear.** ⚖ IP/TM.

### 3.4 Compliance matrix — the regime set the skill's §9 table is *missing*

The skill's default §9 table (GDPR/CCPA · HIPAA · LegitScript · generic Licensure · SOC 2) **does not carry the fintech/BSA-AML/Reg-E/GLBA stack** — its only fintech touch is a one-line "money transmission" under Licensure. The skill's method **explicitly instructs adding industry regimes §9 lacks**, so this is the adaptation it anticipates. The full regime → requirement → gate:

| Regime | Concrete requirements | Gate |
|---|---|---|
| **FinCEN MSB registration** | Register as a money transmitter (**FinCEN Form 107**) within 180 days of establishment; renew every 2 years | Before operating; **⚖ regulatory** |
| **State Money Transmitter Licenses (MTLs)** — 6 states (CA, TX, AZ, GA, NC, FL) | Per-state license via **NMLS**; **surety bond** (~$25k–$1M+), **minimum net worth**, control-person background checks + fingerprinting, business plan, audited/GAAP financials, approved AML program; **6–18 mo/state — the true critical path** | Before operating **in each state**; **⚖ regulatory `[per state]`** — a hard gate on geography *and* revenue |
| **BSA/AML program (5 pillars)** | (a) **designated BSA/AML Compliance Officer** (senior, named — see §4); (b) policies/procedures/controls; (c) training; (d) **independent testing/audit**; (e) risk-based CDD | Before first transfer; **⚖ regulatory** |
| **KYC / CIP** | Collect + verify name, DOB, address, ID number (SSN/**ITIN**/passport) via IDV vendor; retain records | Onboarding; **⚖ regulatory + privacy** |
| **OFAC / sanctions screening** | Screen **every sender, recipient, transaction** vs. SDN + lists in real time, **before funds release** | Every transaction (hard invariant); **⚖ regulatory** |
| **SAR & CTR** | SARs (MSB threshold ≥ $2,000); CTRs (cash > $10k/day — **minimal**, Milpa is bank-funded, no US cash-in) | Ongoing; **⚖ regulatory** |
| **Transaction monitoring** | Structuring/velocity/corridor/mule rules + risk scoring + case management | Ongoing; **⚖ regulatory** |
| **BSA Travel Rule + recordkeeping** | Transmittals ≥ $3,000 carry originator/beneficiary info; retain records **5 years** | Ongoing |
| **CFPB Remittance Rule (Reg E, Subpart B)** | Pre-payment disclosures (rate, fees, taxes, exact amount received) · receipts · **30-min cancellation** · **error-resolution rights** · funds-availability date | Every consumer transfer; **⚖ consumer-finance** — the customer-facing regime, made the brand promise |
| **GLBA** (financial privacy + **Safeguards Rule**) | Privacy notices, safeguards program, vendor oversight | Before data collection; **⚖ privacy** |
| **CCPA/CPRA** (California) | Consumer privacy rights, DSAR/deletion, minimization | CA operation; **⚖ privacy** |
| **PCI-DSS** | Card funding — **SAQ-A** posture (PANs never stored; tokenized via processor) | Before card funding; **⚖ security** |
| **In-country (receive side)** | Contract **licensed local payout partners** holding MX (CNBV) / GT (IVE/SIB) authorizations; Milpa holds **US** licenses, contracts compliant local rails — **does not directly hold foreign licenses** | Before corridor launch; **⚖ regulatory `[MX/GT]`** |
| **SOC 2 (readiness)** | Backbone controls operating + evidence retained; formal audit when a bank/partner requires | Bake in; audit on demand |
| **Exams & renewals** | Periodic state exams + FinCEN oversight; annual MTL renewals; bond maintenance; **NMLS Call Report** | Ongoing |

### 3.5 Templatable-vs-lawyer split

**Templatable (OS drafts review-ready; lighter pass):** privacy policy matched to practice, NDAs, SOWs under a reviewed MSA, standard contractor agreement, community-referral terms, vendor-supplied DPAs (countersigned after review). **Must go to a lawyer (OS drafts only to frame): everything regulated** — entity/tax, governance/cap table, the **Reg-E consumer terms, the sponsor-bank/FBO agreement, payout/FX agreements, the entire BSA/AML program + MTL applications, OFAC/SAR procedures, GLBA safeguards, and any regulated consumer disclosure.** In a licensed MSB the bespoke/regulatory column is unusually heavy — which is the skill's point about regulated categories.

### 3.6 Consolidated ⚖ attorney/regulator gate list (filled)

- [ ] Entity + tax election — ⚖ corporate +CPA `[DE]`
- [ ] Governance + cap table + control-person structure (MTL-load-bearing) — ⚖ corporate + regulatory
- [ ] IP assignment (founders/employees/contractors) — ⚖ IP
- [ ] Trademark "Milpa" clearance + filing (flag, never clear) — ⚖ IP/TM
- [ ] Consumer Remittance Agreement + **Reg E disclosures** — ⚖ consumer-finance
- [ ] Privacy policy + **GLBA** safeguards + **CCPA** — ⚖ privacy
- [ ] Customer + vendor **DPAs** — ⚖ privacy
- [ ] **Sponsor-bank / FBO agreement** — ⚖ regulatory + banking (existential)
- [ ] **Payout-aggregator (MX/GT) + FX agreements** — ⚖ regulatory `[cross-border]`
- [ ] **FinCEN MSB registration + per-state MTLs + surety bonds** — ⚖ regulatory `[per state]` **(hard gate on launch + spend + geography)**
- [ ] **BSA/AML program (5 pillars) + OFAC + SAR/CTR + monitoring + Travel Rule** — ⚖ regulatory
- [ ] PCI-DSS SAQ-A posture — ⚖ security
- [ ] Signature + filing of anything above — **human-gated, after counsel review, with a rollback path**

---

## 4. Operations, Org & Roles — `/org-roles`

**Fits, with two regulation-forced exceptions to the "lean" default.** The skill's rule — *cover every function, mostly with founder + AI/Cowork + fractional; a hire must pass four tests* — holds **except** where federal/state law **mandates** a named senior human and **forbids** delegating a regulated decision to AI.

### 4.1 Org design by stage (launch, licensing-gated)

Seven functions × coverage. The bus test is acute and the founder-dependence fix is designed in:

| Function | Coverage at launch | Note |
|---|---|---|
| Product / eng | Vendor stack + thin custom build (build-eng) + founder approvals | buy the 90%, build the slice |
| GTM / growth | AI + Cowork (paid/ASO/referral) + community partners | consumer funnel, not a sales team |
| **Sales** | **N/A as consumer sales;** partnership/BD = **founder-led** (sponsor bank, payout, community) | §2A |
| Finance / Treasury | **Head of Payments/Treasury — a required senior hire** (owns float, reconciliation, permissible investments) | not systematizable to AI |
| Operations | AI + Cowork (rhythm, SOP library, vendor oversight register) | |
| **Support / success** | Bilingual (Spanish-first) support — AI-assisted triage + **human for regulated lanes** | §6 |
| **Legal / compliance** | **BSA/AML Compliance Officer — a MANDATED senior hire** + external regulatory counsel + independent AML auditor | §4.4 |

**The two hires the four-test rule cannot gate away (the adaptation):**
1. **BSA/AML Compliance Officer** — *required by federal MSB regulation and by every state MTL*, regardless of whether an SOP+AI "could" run it. This is a **legal mandate, not a bottleneck-economics judgment.** The designated officer is personally accountable; the role **cannot be AI, cannot be fractional-to-the-point-of-absent, and its regulated decisions (SAR filing, case disposition, OFAC-hit adjudication) cannot be made by a model.**
2. **Head of Payments/Treasury** — owns pre-funded float, tri-party reconciliation, and permissible-investment/net-worth compliance. Money-in-flight with a regulatory net-worth floor is not systematizable to drafts-only AI.

Everything else stays AI+Cowork+fractional (lean holds). **Next hires, trigger-gated:** bilingual support lead (trigger: transfer volume > AI-assisted triage capacity), a second compliance analyst (trigger: SAR/case volume), a growth lead (trigger: paid CAC proven + multi-state expansion funded). Org map in **Lucid** (`lucid_create_org_chart`); coverage table in **Airtable**.

### 4.2 RACI for core recurring processes (one Accountable each; regulated rows are the point)

| Recurring process | Owner/CEO | Compliance Officer | Treasury | Growth | Support | AI/Cowork |
|---|---|---|---|---|---|---|
| **OFAC screening / funds-release gate** | I | **A** | C | — | — | R (system enforces; never decides) |
| **SAR / CTR filing** | I | **A** · R | C | — | I | R (assembles case; **never files/decides**) |
| **Transaction-monitoring case disposition** | I | **A** · R | C | — | C | R (triage draft only) |
| **Treasury float replenishment / permissible investments** | I | C | **A** · R | — | — | R (reconcile) |
| **Tri-party settlement reconciliation** | I | I | **A** · R | — | — | R |
| **Consumer Reg E disclosure / pricing-promo change** | **A** ⛔ | **A(compliance co-sign)** | I | R | I | R (drafts) |
| **Reg E error-resolution (dispute)** | I | **A** | C | — | R | R (draft within the regulated timeline) |
| Spend / vendor purchase approval | **A** ⛔ | C | C | C | I | I |
| External send / publish (marketing) | **A** ⛔ | C (claims) | I | R | I | R (drafts) |
| Sponsor-bank / rail contract execution | **A** ⛔ | C | C | — | — | R (drafts) |
| Access grant / revoke (on/offboard) | **A** | C | C | I | I | R (checklist) |
| Monthly financial close | I | I | **A** · R (with Finance/CPA) | — | — | R |

Legend: **A**=Accountable (one) · R=Responsible · C=Consulted · I=Informed · **⛔**=founder gate (money/commit/send). **Note the deliberate design:** regulated decisions are Accountable to the **Compliance Officer**, not the founder and **never to AI** — AI is *Responsible* for assembling/triaging/drafting only. The funds-release gate is a **system invariant** (build-eng §5: no payout before OFAC clears) *plus* compliance accountability.

### 4.3 Roles + permissions matrix (composes engineering-backbone §10 + build-eng roles enum)

In-product RBAC (§2 of the backbone: `owner > admin > compliance_officer > treasury > support > user`) governs the *app*; this matrix governs the *team's* access to the *stack*. **Least-privilege, MFA everywhere, no shared logins, scoped/revocable tokens, AI read-first + drafts-only + never a funds-or-ledger god-key.**

| Tool / system | Owner/CEO | Compliance Officer | Treasury | Growth | Support | Contractor | AI / service acct |
|---|---|---|---|---|---|---|---|
| **Ledger + Supabase (prod)** | Owner | Read (case-linked) | **Read/write via service (recon)** | — | Read (lookup) | — | **service-role server-side only, scoped; never funds-release write** |
| **Compliance console / case queue** | Read | **Admin (sole)** | Read | — | — | — | Ingest/triage token, **no disposition** |
| **Sanctions-screening vendor** | Read | **Admin** | — | — | — | — | Screening API, least-scope |
| **Transaction-monitoring vendor** | Read | **Admin** | Read | — | — | — | Ingest only |
| **IDV / KYC vendor** | Read | **Admin** | — | — | Read (status only) | — | Verify API, ref-only |
| **Sponsor-bank / FBO portal** | Admin | Read | **Admin/operate** | — | — | — | — |
| **Payout aggregator (MX/GT)** | Admin | Read | **Operate** | — | Read (status) | — | Payout API (behind release gate) |
| **ACH / card processor** | Admin | Read | **Operate** | — | — | — | Scoped funding token |
| **FX / liquidity provider** | Admin | — | **Operate** | — | — | — | Rate API read |
| **Airtable (registers/CRM/ops)** | Owner | Editor (compliance base) | Editor (treasury base) | Editor (growth base) | Editor (support base) | one scoped base | scoped PAT |
| **Twilio / WhatsApp / email** | Owner | C (claims) | — | Send (campaigns, drafts) | Send (drafts) | — | scoped key, drafts-only |
| **Analytics (PostHog/GA4)** | Owner | Read | Read | Member | Read | — | ingest key only |
| **Gmail / Drive / Canva** | Owner | Editor (scoped) | Editor (scoped) | Editor | Editor (scoped) | Editor (one folder) | **draft-only** |
| **Password vault (1Password)** | Owner | Member (scoped) | Member (scoped) | Member (scoped) | Member (scoped) | Member (scoped) | — |
| **Payroll / Accounting** | Admin | — | **Admin** | — | — | self-service | read-only sync |
| **GitHub / Vercel** | Owner | — | — | — | — | scoped repo, PR-only | CI/deploy token |
| **Domain / DNS** | Owner | — | — | — | — | — | — |

High-blast-radius cells (funds-release, ledger write, sponsor-bank operate, sanctions admin, DNS, vault) stay with the Owner + the *one* role that must hold them, and are first-checked in the quarterly access review and first-revoked at offboarding. **Access register** (Airtable): `Principal · Type · Tool · Access · Scope · MFA? · Granted · Last reviewed · Status`.

### 4.4 Hiring kit — the first role is the Compliance Officer (drafts only)

**Scorecard first, always.** The first scorecard is the **BSA/AML Compliance Officer** (the gating, mandated hire):
- **Mission:** own Milpa's BSA/AML program so no sanctioned or illicit payout is ever released and every regulatory obligation is met on time, across 6 states and 2 corridors.
- **Outcomes (ranked, measurable, 12-mo):** (1) an approved, examinable 5-pillar AML program before first transfer; (2) 100% of transfers OFAC-screened before release, zero breaches; (3) SARs filed within regulatory timelines, 100%; (4) MTL/FinCEN filings and the independent AML audit passed with no material finding; (5) monitoring false-positive rate tuned to a target without missing true hits.
- **Competencies:** MSB/BSA-AML depth, sanctions/OFAC expertise, exam experience, NMLS/MTL familiarity, bilingual/corridor fluency a plus.
- **JD draft** (voice-compliant), **structured interview loop** (screen → topgrading "Who" → competency → reference), **reference script** — all drafts. **Comp is a placeholder; no offer drafted — that is Tony's gate.** No real-candidate PII fabricated.

### 4.5 Onboarding / offboarding (access + regulated-role heightening)

- **Onboarding:** pre-start docs (employment + PIIA + IP assignment → `legal-pack`/e-sign, **commit gate → founder**); Day-1 **least-privilege provisioning** per §4.3 + MFA + register entry; Week-1 SOPs; 30/60/90 against the scorecard. For the Compliance Officer, **the FinCEN designation + control-person disclosure is part of onboarding** (⚖ regulatory).
- **Offboarding (security-critical, ≤24h):** walk the §4.3 row for the departing principal — **revoke every account/token; rotate any shared secret they saw; for a compliance/treasury departure, rotate sponsor-bank + payout + sanctions credentials and re-file control-person changes with regulators as required**; transfer sole-owned assets; recover hardware; final pay via `/finance-ops`; re-audit the register to zero residual access.

### 4.6 SOP library, PM, vendor management, operating rhythm

- **SOP library** (Airtable register → `/sop-writer` authors each, stored in Drive): seed from every RACI row — **funds-release gate, OFAC-hit handling, SAR workflow, monitoring-case triage, tri-party reconciliation, Reg E error-resolution, KYC exception, access grant/revoke, vendor onboarding.** These are the founder-dependence fix made concrete.
- **Vendor management** (composes `operations:vendor-review`): the **vendor-oversight register** — the BSA/AML third-party-oversight deliverable — `Vendor · Capability · Owner · Cost · Renewal · Data access · DPA/GLBA/BAA? · Criticality · Alternative`. Onboard = **DPA + GLBA safeguards before data flows** + least-privilege; review = quarterly for critical/data-touching rails; offboard = revoke + confirm data deletion. Redundancy for the **sponsor bank** (existential) and payout aggregators is a standing register requirement.
- **Operating rhythm:** async daily huddle (once >1 person) · **weekly ops review** (`/weekly-ops-review` block: SHIPPED / RAIL-READINESS / KILLED / NEEDS-TONY) · monthly (finance close + metrics + a **compliance/monitoring review**) · quarterly (priorities + **access review** + org review + **regulatory calendar**: renewals, exams, bond maintenance).

---

## 5. Analytics & Measurement — `/analytics-stack`

**Fits, with governance heightened to financial-data (GLBA/BSA), and the offer-ladder mapping replaced.** Draft/spec only — nothing fires, wires, or reconfigures without approval.

### 5.1 The stack

| Layer | Tool | Here? | Note |
|---|---|---|---|
| Event sink / substrate | **Supabase** (build-eng) | ✅ LIVE (Supabase MCP) | first-party event log, queried by `data:sql-queries` |
| Registers / tracking-plan source of truth | **Airtable** | ✅ LIVE | — |
| Web / acquisition / ASO | **GA4** | DIRECT / REGISTRY | consent-gated `gtag`; query via BigQuery export |
| Product analytics (funnels/retention/flags) | **PostHog** | REGISTRY | connect via `SearchMcpRegistry` + SDK |
| Warehouse | **BigQuery** | REGISTRY | **defer** until data spans ≥3 systems (Supabase + Stripe-equiv + GA4 + CRM) |
| BI | **Metabase** | REGISTRY | when a non-founder needs self-serve views |
| Analysis / dashboards / stats | **`data:*` + `dataviz` + `xlsx`** | ✅ SKILL | in use now |
| Error / obs | **Sentry** | REGISTRY | reliability half of observability (§7) |

Launch on **Supabase events + `data:*` + GA4-lite + Sentry**; add PostHog when funnels/retention exceed cheap SQL. **Flag every REGISTRY/DIRECT item as a connect step.**

### 5.2 Instrumentation plan (event taxonomy) — `object_action`, snake_case, past tense

The **core value action = a completed, delivered transfer.** Funnel = acquisition → activation → retention → referral. **The skill's "offer-ladder rung" has no analog** (one product, no ladder) — replaced with a **funding × payout × speed config + first-vs-repeat** tag.

| Event | Trigger | Key properties (typed, bounded — no PII) | Funnel stage | Config / first-repeat | Consent | PII |
|---|---|---|---|---|---|---|
| `waitlist_joined` | pre-license signup | `state`, `corridor`, `referrer_source` | acquisition | — | marketing | none |
| `signup_completed` | account created | `method`, `referrer_source` | acquisition | — | analytics | none |
| `kyc_submitted` | IDV started | `id_type_band` (ssn/itin/passport) | activation | — | analytics | none |
| `kyc_cleared` | IDV pass | `attempts` | activation | — | analytics | none |
| `quote_viewed` | pre-payment quote shown | `corridor`, `principal_band`, `funding_type`, `payout_type`, `speed_tier` | activation | config | analytics | none |
| `transfer_started` | payment initiated | `funding_type`, `payout_type`, `speed_tier`, `principal_band` | activation | first/repeat | analytics | none |
| `transfer_funded` | sender funds confirmed | `funding_type` | activation/revenue | first/repeat | analytics | none |
| `payout_released` | funds-release gate passed | `payout_type`, `corridor` | revenue | — | analytics | none |
| `payout_delivered` | recipient received | `time_to_deliver_band` | retention | — | analytics | none |
| `recipient_saved` | saved recipient added | `corridor` | retention | — | analytics | none |
| `transfer_repeated` | ≥2nd completed transfer | `days_since_last_band` | retention | repeat | analytics | none |
| `referral_sent` | referral shared | `channel` | referral | — | analytics | none |

**Hard rule enforced in the schema:** **no PII and no financial-account detail in any event property** — no names, no addresses, no CLABE/account numbers, **no raw transfer amounts** (bands only), no KYC document data, **and no sanctions/monitoring data ever.** Identify only post-consent + post-auth, keyed to the **user UUID**, never a name or ID number. Sensitive detail stays in Supabase behind RLS; analytics sees only de-identified behavioral events. Super-properties: `home_state`, `primary_corridor`, `signup_cohort`. QA the plan + stream with `data:validate-data` (schema conformance + PII-leak + orphan-event check).

### 5.3 KPI tree (instrumented) — composed from `/metrics-dashboard`, not re-derived

| Node | L/L | Sourcing event(s) / table | Owning domain | Query / tool |
|---|---|---|---|---|
| **Active senders** (NSM: distinct senders ≥1 completed transfer, trailing 30/90d) | L | `payout_delivered` distinct users | metrics-dashboard | `data:sql-queries` on Supabase |
| Activation rate | L | funnel `signup_completed` → first `payout_delivered` ≤ N days (KYC is the big drop-off) | analytics-stack | PostHog funnel |
| Transfers / sender / mo | L | `transfer_repeated` per active user | analytics-stack | `data:analyze` |
| Repeat / retention (cohort) | L | prior-cohort return `transfer_started` | analytics-stack | PostHog retention |
| **Funding mix (ACH %)** · **Payout mix (bank %)** | L | `transfer_funded.funding_type` · `payout_released.payout_type` | **finance-ops (margin lever)** | `data:sql-queries` |
| On-time delivery % | L | `payout_delivered.time_to_deliver_band` vs. disclosed window | support-success + ops | `data:analyze` |
| Screening false-positive rate | L | compliance case outcomes (aggregate counts only) | compliance | `data:analyze` (aggregate, no case PII) |
| **Contribution / transfer · take rate · GMV · CAC/payback** | Lag | ledger + funding/payout events | **finance-ops (definitions)** | ledger → `finance:*` |

The **funding/payout mix is a first-class leading input** — it is the venture's biggest margin lever (§1.2), so analytics instruments COGS-mix, not just the funnel. The lagging strip is defined by `finance-ops`, not re-invented. This is the physical KPI→P&L bridge: `payout_delivered` (leading) predicts contribution (lagging), the revenue line on the P&L.

### 5.4 Dashboards + cadence

Operating board = **Active senders (target stat-tile with break-even floor) + ≤7 leading inputs** (activation, transfers/sender, retention, ACH %, bank-payout %, on-time %, false-positive %) to `dataviz` standards; money strip below (contribution/transfer, take rate, GMV, CAC/payback). Build via `data:build-dashboard`.

| View | Audience | Cadence | Source / tool | Feeds |
|---|---|---|---|---|
| Ops-health + **funds-release integrity** strip | Operator / Compliance | real-time / daily | Sentry + Supabase logs | incident + compliance |
| Operating board (NSM + leading inputs incl. mix) | Founder / operator | **weekly** | `data:build-dashboard` over Supabase | `/weekly-ops-review` |
| Money strip + KPI→P&L | Founder / board | **monthly** | `finance-ops` + `pptx`/Canva | board (**draft only**) |
| Experiment readouts | Founder / product | per test | PostHog + `data:statistical-analysis` | ship/kill/iterate |

### 5.5 Experiment framework (pre-registered)

> *We believe an **in-line KYC guidance step at document capture** will move **activation rate** (signup → first `payout_delivered` ≤7d) from **[baseline]% to ≥[+8pp]%** because KYC document/selfie friction is the primary drop-off, at **95%** within **[N] weeks**, without harming **fraud/false-positive rate or on-time delivery** (guardrails).*

One primary metric (OEC = activation rate); explicit guardrails (fraud/false-positive, on-time delivery); pre-registered MDE/power/sample/duration via `data:statistical-analysis`; decision rule fixed in advance (ship/kill/iterate, no peeking, no metric-shopping); logged in the Airtable experiment register. **Compliance guardrail:** no experiment may weaken KYC/OFAC/screening rigor — those are legal minimums, not variables to optimize down. Cap concurrent tests.

### 5.6 Data governance (GLBA/BSA-heightened — the skill's HIPAA callout, translated)

- **Consent-gated** — nothing fires before consent; respect DNT (§7).
- **PII / financial-data minimization is absolute** — UUIDs not names, bands not amounts, references not account numbers; **card data stays with the processor (PCI SAQ-A), KYC/clinical-equivalent sensitive data and all sanctions/monitoring data stay in Supabase behind RLS and never leave to analytics.** The skill names **HIPAA** as the "not-eligible for standard PostHog/GA4/Vercel" regime; **for Milpa the equivalent flag is GLBA/BSA financial data** — same posture: exclude regulated financial detail from third-party analytics entirely (send only de-identified behavioral events), treat compliance sign-off as a **hard gate**.
- **Retention + deletion** per data class; wire **CCPA/DSAR deletion** through to PostHog/GA4, not just the app DB — but note **BSA recordkeeping (5 years) overrides deletion** for transaction records (a deletion request cannot erase a regulated transaction record — a tension the skill's DSAR flow doesn't anticipate; **⚖ privacy + regulatory**).
- **DPAs** with every analytics subprocessor (Google, PostHog, Sentry) before personal data flows. **No vanity metric as a primary** (raw pageviews/app installs demoted to activation rate).

---

## 6. Support & Success — `/support-success`

**Fits, with the escalation matrix and the CS model rebuilt for a regulated money business.** Drafts only; never auto-sends; escalates anything regulated. Bilingual, **Spanish-first** support is a **product feature and a trust driver**, not an afterthought.

### 6.1 Stack + channels

| Signal | Recommendation |
|---|---|
| Live consumer app, growing volume, in-app + WhatsApp community | **Intercom** (in-app messenger + KB + onboarding) once volume warrants; **Airtable base** as the interim ticket store + CS records |
| Channels | In-app chat (Intercom) · **WhatsApp** (community-native, the primary informal channel) · **SMS** status + activation (Twilio) · Email (Gmail draft for founder/CS; transactional via the app's ESB) |

**Flag:** no dedicated helpdesk today — recommend Intercom, don't assume it. WhatsApp/SMS are **A2P/TCPA-governed** (`twilio-developer-kit:*`), consent-captured, quiet-hours respected; **transactional delivery notifications** (a product promise) are distinct from marketing sends (drafts, approval-gated).

### 6.2 Triage → SLA (tuned to money-in-flight anxiety)

Every ticket gets a severity + SLA before a reply is drafted. Money-not-arrived is emotionally S1 even when operationally lower — the SLA reflects that.

| Tier | Milpa definition | First response | Route |
|---|---|---|---|
| **S1** | Money sent but **not delivered** / stuck payout · account or funds lockout · **suspected fraud/account takeover** · **data/PII exposure** | ≤1 hr, 24×7 | Founder + Treasury/Compliance; open escalation |
| **S2** | Delivery **delayed past disclosed window** · wrong status · funding failed/returned · corridor/endpoint outage | ≤4 hrs | Treasury/ops + product |
| **S3** | How-to (KYC upload, saved recipient, rate question) · account change | ≤1 business day | Support; KB-first |
| **S4** | Feature request · cosmetic | ≤2 business days | Feedback register |

### 6.3 Escalation matrix — the hard lanes (the venture-critical adaptation)

The skill's flagship hard-lane is *"clinical question → clinician, never answered."* Milpa's equivalents are **regulated financial/compliance lanes** — richer and legally sharper. Some are answered by **no one at support, by law:**

| Trigger | Escalate to | Support / model must **NOT** |
|---|---|---|
| **Sanctions hit / OFAC block / frozen funds** | **Compliance Officer only** | tell the customer they are on a sanctions list, explain the block, or predict a timeline — sanctions communications are compliance-governed |
| **Suspected money-laundering / structuring / mule / SAR-relevant behavior** | **Compliance Officer** | **tip off the customer** — **anti-tipping-off is a BSA legal prohibition**; support must never indicate an investigation or SAR is underway |
| **"My money didn't arrive" as a formal dispute** | **Reg E error-resolution workflow** (§6.6) | improvise a remedy — Reg E sets **legal timelines and rights**; follow the regulated process, don't ad-hoc it |
| **Legal threat / CFPB complaint / regulator contact** | Founder + legal | admit fault, promise a remedy, or make a legal claim |
| **Security / privacy incident, PII exposure** | Founder + eng (incident) | expose data or speculate publicly |
| **FX-rate / "is this a good rate" / financial-advice bait** | Disclosed-quote facts only | give financial advice, guarantee a future rate, or promise a rate that isn't the disclosed quote |

*The guardrail "no medical claims" maps here to: **no compliance/sanctions disclosure, no financial advice, no anti-tipping-off breach, and strict adherence to the Reg E process.***

### 6.4 Knowledge base (bilingual, self-serve)

Category tree (Spanish-first, mirrored English): *Empezar / Getting started · Enviar dinero (funding × payout × speed) · KYC y verificación · Recipients & saved recipients · Rastreo y entrega (tracking/delivery) · Tarifas y tipo de cambio (fees & rate — Reg E transparency) · Cuenta y seguridad · Problemas / Troubleshooting.* Each article on the template; **KB is self-serve truth, not marketing** — the fee/rate article restates the Reg E disclosure, never a "cheapest" claim the venture can't defend.

### 6.5 Onboarding + activation

**Activation milestone = first completed, delivered transfer within N days of signup** (= the NSM activation rate in §5, one shared number). **KYC is the activation choke point** — the sequence front-loads clearing it:

| Step | Channel | Trigger |
|---|---|---|
| Welcome + "send your first transfer free" + the KYC ask | in-app + email (draft) | `signup_completed` |
| KYC nudge (document/selfie help, bilingual) | SMS/WhatsApp (Twilio) | `kyc_submitted` stalled / not `kyc_cleared` in 24h |
| First-transfer boosted-rate reminder | in-app + email | `kyc_cleared`, no `transfer_started` in 48h |
| Delivery confirmation + save-recipient prompt | SMS/WhatsApp + in-app | `payout_delivered` |
| Habit / second transfer | in-app + email | 14-day active, no repeat |

Activation floor → action: activation < target → rework the **KYC capture flow** first (the biggest lever). Sequences are drafts/scheduled-with-approval, consent- and quiet-hours-honored — never blasted.

### 6.6 Customer success — retention, not renewal (the CS-model adaptation)

**There is no subscription, no contract, no seat, no renewal date, and no QBR.** The skill's QBR / T-60 renewal / contract-runway / seat-expansion machinery **does not apply.** Reframed to a consumer-habit model:

- **Health score** (Airtable CS base, per active sender) = **transfer recency + frequency** (high, leading) + delivery reliability *experienced* (on-time %) + support sentiment/open S1-S2 + funding/payout mix (a margin signal) + **no lagging "contract runway"** — replaced by **"months-active + trailing frequency trend."**
- **Green** (recent + frequent) → nurture + referral prompt. **Yellow** (frequency dropping) → lifecycle re-engagement (a boosted-rate band, a "your family is one tap away" nudge — drafts). **Red** (lapsed — stopped sending, likely defected to WU/competitor) → **win-back**, not a churn-save-QBR: a targeted reactivation offer within policy, no unilateral off-Reg-E pricing.
- **"Expansion" = more frequency + larger principal + referral**, never a seat/tier upsell. The only "up-ladder" motion is **referral into the diaspora network** (the real growth loop).
- **Renewal timeline / QBR / expansion-to-operator-license: N/A** — logged as friction (Appendix A). Named-account CS applies only to **partnership** relationships (§2A), not consumers.

### 6.7 Reg E error-resolution — a *regulated* support workflow the skill has no slot for

A **legally-timed** process, not generic escalation: a sender notice of error (e.g., money not received, wrong amount) triggers a defined **acknowledge → investigate → remedy-or-explain** sequence with **statutory deadlines and consumer rights** under Reg E Subpart B. Support **initiates the regulated workflow**, the Compliance Officer is Accountable, AI may **draft within** the timeline but never decides the remedy or lets a deadline slip. This is an SOP (`/sop-writer`) with a compliance owner and a **calendar-enforced clock** — the skill treats disputes as ad-hoc escalation; here it is a compliance obligation.

### 6.8 Feedback loop

Theme-tag every ticket (bug / friction / gap / **compliance-signal** / pricing); weekly roll-up → `product-spec` backlog + a **support-signal metric** into `/metrics-dashboard`: *time-to-first-delivery*, *tickets per active sender*, *on-time-delivery %*, *first-response SLA hit-rate* (leading); *Reg E disputes opened/closed within timeline* and *escalations closed* (compliance + money strip). A recurring "payout stuck at [endpoint]" theme is an **upstream payout-partner signal** (the leak shows up downstream of its cause) → routed to ops/treasury, not treated as isolated tickets.

---

## 7. Cross-function guardrail & human-gate ledger (consolidated)

Every irreversible or regulated action, in one place, so nothing is missed:

| Action | Gate | Owner |
|---|---|---|
| Any dollar moved / payout released | **System invariant (OFAC-clear) + human-gated** | Compliance + Treasury |
| The ~$1–2M capital / float / bond / net-worth commit | **Human-gated, rollback path** | Founder + CPA |
| FinCEN registration · MTL filings · bond binding | **Human-gated, ⚖ regulatory** | Founder + Compliance + counsel |
| Sponsor-bank / payout / FX / vendor contract signature | **Human-gated, ⚖ review first** | Founder + counsel |
| Fee / spread / promo (Reg E disclosure) change | **Founder + Compliance co-sign** | Founder + Compliance |
| SAR / CTR filing · OFAC-hit adjudication | **Compliance Officer decision — never AI** | Compliance |
| Any consumer or partner message | **Draft only — the send is the founder's** | Founder |
| Secrets / API keys / EIN / SSN / bank creds | **Names-only; read at use-time; never echoed** | All |
| Board / investor / regulator filing | **Draft only until controller/CPA sign-off** | Finance |

**Guardrails honored throughout:** drafts-only · $0 unvalidated spend · secrets names-only · irreversible actions human-gated with a rollback path · disclosed FX margin (Reg E), no speculation · no unsubstantiated financial claims · customer PII stays in-system · LYV firewall · fully legal, no gray areas · lean-not-bloated (overbuild guard) · founder-dependence designed out (Compliance + Treasury).

---

## Appendix A — Ops-layer skill-fit friction log

Where the six operations skills assumed SaaS/subscription revenue, deferred revenue, a digital-only/B2B sales funnel, or otherwise did not fit a strictly-transactional licensed-MSB consumer business. Skill · specific issue.

**finance-ops**
1. **No archetype for money transmission.** The skill carries four archetypes (subscription · goods · services · marketplace); Milpa is a **fifth (money transmission)** it lacks. Closest is marketplace (money-through-you = a liability, book *net* not GMV) but Milpa is the **principal**, not an agent — had to author a bespoke money-services COA block (FBO settlement, outstanding-transmission payable, surety-bond collateral, permissible-investment float).
2. **Deferred-revenue / MRR default is actively wrong.** The skill's default treatment and its worked example A (Executive Edge) center on deferred revenue, MRR/ARR, churn, NRR, and prepaid-term release. **None exist here** — revenue is recognized **point-in-time at transfer completion**, nothing is prepaid or deferred. The skill warns "never ship a deferred-revenue/MRR setup for a business that carries inventory" — the same warning applies to a transactional MSB, which the skill doesn't name.
3. **Billing/invoicing/AR + the revenue→ledger bridge doesn't apply.** The skill's revenue area assumes **Stripe Billing (subscription)** or an **A2X commerce→ledger bridge (goods)**, plus **AR aging and dunning.** Milpa has **no invoices, no AR, no dunning** — the sender pre-funds each transfer at point of sale, and **Stripe is not even the rail** (no cross-border SPEI/Banrural/cash-pickup payout). The revenue system of record is a **custom ledger reconciled to a sponsor bank + payout aggregator**, which the skill's stack table has no row for.
4. **Runway model has no slot for pre-funded float + regulatory locks.** The skill offers exactly two survival models: `cash ÷ burn` (asset-light) and the goods **cash-conversion cycle.** Milpa's survival number is a **third kind**: corporate opex runway **plus** pre-funded settlement float (sized to 1–2 days of GMV-in-flight) **plus** restricted surety-bond collateral **plus** a state-set **minimum-net-worth floor** — a working-capital problem where the "inventory" is money-in-transit and there's a regulatory permissible-investment constraint the goods CCC has no concept of. Had to build a bespoke float/bond/net-worth cash view.
5. **The heaviest review surface (sales-tax nexus) is nearly moot; the real one (MTL financial requirements) has no home.** The skill calls sales-tax nexus + taxability "the heaviest review surface in the whole function" and builds an Anrok/Avalara/TaxJar step into the close. Money transmission is a **financial service — largely not sales-taxable**, so that entire surface nearly vanishes; meanwhile the **actual** heaviest finance-regulatory surface — **surety bonds, permissible investments, minimum net worth, the NMLS Call Report** — is something the skill hands entirely to "licensure/legal-pack" and gives finance no step for, even though finance **owns the numbers.**
6. **§174 R&D and the KPI→P&L "MRR strip" both misfire.** §41/§174 is N/A-leaning (thin orchestration software, not the moat). The board KPI→P&L bridge examples default to an **MRR/NRR** strip; had to replace with a **transactional take-rate chain** (active senders × frequency × principal × take rate → contribution).

**sales-crm**
7. **The entire B2B-sales spine doesn't model the consumer customer.** The paying customer is a **consumer sender** doing repeat ~$380 transfers. There is **no deal, no proposal, no quote/CPQ, no e-sign customer contract, no deal desk, no discount ladder, and no weighted-$ customer pipeline.** The 4-table Companies/Contacts/Deals/Activities CRM, the prospect→qualify→demo→proposal→close ladder, and dollar-weighted forecasting are built for a **founder-led B2B motion the venture doesn't run** — the skill's worked example ("30–50 warm companies," cohort deals with a $30k floor) is the opposite of a cold-start consumer app.
8. **Had to split the skill into two surfaces.** The machinery fits only when repurposed as a **partnership/BD CRM** (sponsor bank, payout aggregators, FX, vendors, community orgs) — genuine staged relationships — while the actual customer motion is an **acquisition→activation→retention→referral funnel** that is not a pipeline at all and hands off to analytics (§5) + support/lifecycle (§6). The skill has no consumer-funnel mode.
9. **Deal-desk/discount gate ≠ consumer pricing.** The skill's discount-approval ladder (≤10% owner, >20% founder) assumes per-deal negotiation. Milpa's price is a **central, Reg-E-disclosed policy** (the $2.99 fee, waivers, boosted-rate bands, referral credits) — a **consumer-disclosure change governed by law**, not a margin approval; reframed as a founder+compliance gate.
10. **"Forecast in weighted dollars" doesn't fit the partnership pipeline either.** The existential rows (sponsor-bank LOI) are weighted by **criticality and gate-risk**, not expected $ — the board question is "are the rails secured," not "what's the weighted pipeline value."

**legal-pack** *(the best-fitting skill — but its default regime table is thin on fintech)*
11. **The §9 compliance-matrix omits the entire fintech regime stack.** The skill's default regime table lists GDPR/CCPA · HIPAA · LegitScript · generic Licensure · SOC 2. It carries **no BSA/AML, no FinCEN MSB registration, no OFAC/SAR/CTR, no BSA Travel Rule, no CFPB Reg E Remittance Rule, and only a one-line "money transmission" under Licensure** — and it under-weights **GLBA** (named in the brief but not in the skill's regime table). The skill's method *does* say "add regimes §9 lacks," so this was anticipated, but the default table would badly under-serve a fintech if followed literally.
12. **The model-specific contract menu has no financial-rails contracts.** The skill's model-specific set covers commercial lease · vendor/supply · sale-of-goods · IP-license (goods/retail/franchise). It has **no sponsor-bank/FBO agreement, no payout-aggregator agreement, no FX/liquidity agreement, no surety-bond agreement, and no Reg-E consumer remittance agreement** — the exact contracts that define a money-services business. Had to author the rail set.

**org-roles**
13. **The "four-test" hire gate can't model a regulatorily-mandated hire.** The skill says a function becomes a hire only if it's recurring + unblocks the founder + economics support it + **not SOP-able**. The **BSA/AML Compliance Officer is mandated by federal + state law regardless** of those tests, and the **Head of Payments/Treasury** is forced by money-in-flight + net-worth compliance. The skill's lean default ("cover most functions with founder + AI/Cowork + fractional") collides with two non-negotiable senior humans.
14. **AI-drafts-only collides with a legal prohibition on AI decisions.** The skill's pattern is "AI is Responsible (drafts/triage), a human is Accountable." That holds — but the skill doesn't flag that **SAR filing, OFAC-hit adjudication, and monitoring-case disposition legally cannot be made by a model** at all (not merely "drafted then approved"); the Compliance Officer must decide. A sharper line than the generic drafts-only guardrail.
15. **RACI needs regulated rows the default table lacks** — funds-release gate, SAR/CTR, monitoring-case disposition, Reg E error-resolution, treasury float/permissible-investments — none appear in the skill's default core-process list; had to add them and put the Compliance Officer (not the founder) as Accountable.

**analytics-stack**
16. **"Offer-ladder rung" mapping has no analog.** The skill maps every event to a rung of the **offer ladder from `/offer-architect`** (entry→core→flagship→expansion). Milpa has **one product and no ladder** — replaced the rung column with a **funding × payout × speed config + first-vs-repeat** tag.
17. **The "HIPAA / not-eligible" governance flag had to be translated to GLBA/BSA.** The skill names HIPAA as *the* sensitive-data regime that makes standard PostHog/GA4/Vercel ineligible. Milpa's sensitive data is **GLBA/BSA financial data** (account numbers, transfer amounts, KYC, sanctions/monitoring) — same exclusion posture, different regime; the skill only scaffolds the health case.
18. **DSAR deletion vs. BSA 5-year recordkeeping is an unhandled tension.** The skill wires CCPA/DSAR deletion through to analytics tools as an unqualified good. For an MSB, **BSA recordkeeping (5 years) overrides deletion** on transaction records — a deletion request cannot erase a regulated transaction — which the skill's deletion flow doesn't anticipate.
19. **Its biggest leading metric is a COGS mix, not a funnel step.** The skill's leading inputs are product/funnel events (activation, adherence, retention). Milpa's single most decision-relevant leading input is **funding/payout mix** (a cost-side lever that swings contribution), which the skill's funnel-centric instrumentation doesn't anticipate as a primary.

**support-success**
20. **The CS engine (QBR / renewal / expansion / contract runway) assumes contracted B2B accounts.** Consumer remittance has **no subscription, no contract, no renewal date, no seats, no QBR.** "Renewal at T-60/T-30," "contract runway" as a health input, and "expansion up-ladder" have **no analog** — had to rebuild CS as a **habit/frequency retention + win-back** model where "expansion" = more frequency/principal/referral.
21. **The hard-escalation matrix is built around clinical, not financial-compliance, lanes.** The skill's flagship never-answer lane is "clinical question → clinician." Milpa's equivalents — **sanctions-hit / OFAC block (compliance-governed), suspected ML/structuring (BSA anti-tipping-off — support must never tip off the customer), and financial-advice bait** — are richer and legally sharper, and the anti-tipping-off prohibition has no parallel in the skill.
22. **Reg E error-resolution is a legally-timed workflow the skill treats as generic escalation.** A "my money didn't arrive" dispute triggers a **statutory acknowledge→investigate→remedy process with deadlines and consumer rights** under Reg E — a *regulated support obligation with a compliance owner and an enforced clock*, not the ad-hoc escalation the skill models.
23. **Activation is gated by KYC, an onboarding step the skill's activation flow doesn't contemplate.** The activation choke point is clearing **identity verification** (document/selfie), a regulated onboarding gate — the skill's activation sequence assumes a product first-run, not a compliance gate between signup and first value.

**Cross-cutting**
24. **Every skill's "load `ventures/<slug>/venture-context.md`" step** points at an intake artifact that doesn't exist for Milpa (its context is the `00-venture-idea.md` brief + `01-concept.md`); minor, but each skill's load-first assumes the `/new-venture` intake output is populated. *(Consistent with concept Appendix A #18 and build Appendix A.)*

*What fit well (calibration, not just complaints):* the finance economics-gate discipline (consume, don't re-derive; both P&L and cash), the numbered-COA method (extended cleanly to a new block), the monthly-close sequencing, legal-pack's whole regulated-category philosophy and templatable-vs-lawyer split (**it fit Milpa better than any other skill** — it explicitly expects added regimes and treats licensure as a hard gate), org-roles' least-privilege access matrix and RACI-one-Accountable discipline (composed the build-eng roles enum cleanly), analytics' compose-don't-re-derive KPI-tree method and PII-minimization-by-design, and support-success's triage-before-reply + drafts-only + feedback-loop spine. The friction concentrates wherever a skill hard-codes a **subscription/MRR default, a B2B/founder-led sales funnel, a subscription lifecycle (renewal/QBR), or an offer-ladder** — and dissolves wherever a skill is built around **regulated compliance**, which this venture has in abundance.
