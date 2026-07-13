---
name: Emberline — Operations Package
slug: emberline
artifact: 04-ops
stage: concept → validation-sprint (pre-launch)
composed-by: Founder OS OPERATIONS skills — finance-ops · sales-crm · legal-pack · org-roles · analytics-stack · support-success; docs — engineering-backbone §9/§10 (referenced)
loads-after: founder-profile/PROFILE.md · founder-profile/guardrails.md · undefined/00-venture-idea.md · undefined/01-concept.md · undefined/03-build-eng.md
status: v0.1 — PRESSURE-TEST. Exercises the six OPERATE skills (built around recurring digital revenue + a custom app) against a physical, inventory-heavy DTC+wholesale brand. All numbers illustrative — inherited from 01's delivered-margin correction, not real Emberline data. Drafts/spec only; $0 committed; every irreversible/production step gated to Tony.
date: 2026-07-13
---

# Emberline — Operations Package

> Reading order: (0) ops verdict + the reframe, (1) finance on goods economics + COGS/inventory, (2) wholesale CRM + pipeline, (3) legal/entity/compliance incl. lease + supply + sale-of-goods, (4) org + roles, (5) analytics, (6) support + success, (7) guardrails honored, (8) FRICTION log. This package **consumes** the economics closed in 01 (it does not re-derive them) and **composes** the build/stack decisions locked in 03 (Shopify + Skio/Recharge + Klaviyo + Faire + 3PL + Airtable). It answers one question: **what does the OPERATE layer look like when the business is inventory, freight, fire-safety and two parallel go-to-market motions — not MRR and a codebase.**

---

## 0. Ops verdict — the reframe before the setup

Applying the governing question ("does this compound wealth, or feel productive while diluting focus?") to the operate layer: the finance, CRM, legal, org, analytics, and support skills all **transfer in structure** to Emberline, but each was written around a **recurring-digital-revenue business with a custom app** — SaaS MRR, a Stripe billing spine, a product SDK to instrument, a ToS/MSA contract set, and a digital-only funnel that runs through one CRM. Emberline breaks four of those assumptions at once, and the operate package's real job is to state the reframe explicitly at each skill rather than fill the SaaS-shaped template.

Four reframes govern everything below:

1. **Revenue is goods, not MRR.** Cash is collected at purchase (DTC) or on net-30 (wholesale). There is almost **no deferred revenue** and **no ASC 606 subscription-recognition crux** — the accounting complexity the skills emphasize is the wrong complexity. The real complexity is **inventory: raw-material/WIP/finished-goods capitalization, landed COGS, freight, breakage, and a cash-conversion cycle that ties up cash 8–12 weeks *ahead* of a Q4-heavy demand curve.** That is the finance stress test 01 flagged, and it is invisible in every skill's chart of accounts.
2. **There are two motions, and the CRM only owns one.** The **primary** revenue (DTC refill subscription) is **self-serve commerce** — it never touches a CRM; it lives in Shopify + Klaviyo. The `sales-crm` skill's weighted-pipeline machine fits **wholesale only** (boutiques, designers, hotels). A single-CRM commercial motion is a SaaS-shaped assumption; here the CRM is a wholesale-account system beside a self-serve funnel.
3. **The gating regime is physical safety and labeling, not data privacy.** GDPR/CCPA still apply (there is a storefront collecting PII), but the regimes that gate the **first sale** — product-liability insurance, ASTM F2417 burn testing, FPLA/F2058 labeling, IFRA, Prop 65, FTC Green Guides — are absent from the compliance source (`engineering-backbone §9`). No PHI/HIPAA surface exists; the no-medical-claims guardrail is a **marketing-claims** compliance surface, not a privacy one.
4. **The "product" is physical, so there is no app to instrument or to support in-app.** Analytics reads **commerce events** (Shopify/Klaviyo), not a product SDK. Support's number-one ticket is **breakage and "where is my package,"** and its S1 hard-escalate lane is a **fire/injury/recall** incident, not a clinical question or a service outage.

The skills that transfer cleanest: **org-roles** (structure, RACI, hiring kit, access governance — with the tool list swapped and a physical-production/physical-access dimension added) and the **wholesale half of sales-crm**. The skills that strain most: **finance-ops** (no inventory/COGS/working-capital model) and **analytics-stack** (built on a product SDK + MRR money strip). Everything below is written to that verdict; §8 logs every strain point by skill.

---

## 1. Finance-ops — finance & accounting on goods economics

**Economics consumed, not re-derived (Load-first #3).** 01 §3 already closed — and corrected — the unit economics. The two truths finance holds together (accrual = does it work; cash = does it survive) both bind harder here than in a SaaS venture, because a profitable-on-paper order can be cash-negative for a quarter while inventory sits poured-but-unsold. The single most-sensitive driver to protect is **refill-subscription retention (active months)**; runner-up is **delivered contribution per refill shipment** (≈$0 unless batched). Finance's job is to instrument both in the ledger, not re-argue them.

### 1a. Unit economics — delivered contribution (the physical-goods correction)

The brief's headline margins (vessel 72%, refill 60%) are **ex-freight**. Finance books the **delivered** figure — after pick-pack, protective packaging, dim-weight freight, breakage allowance and processor fees — because that is what hits the P&L. From 01 §3:

| Revenue line | Price | Delivered COGS + fulfillment | Delivered contribution | Read |
|---|---|---|---|---|
| Vessel (first order) | $58 | COGS $16 + pack $6 + ship $10 + fees $2 = **$34** | **~$24 (~41%)** | acquisition anchor; sits **below** blended CAC $28–40 → acquire at a slight loss, recover on refills |
| Refill — shipped **singly** | $19.20 (sub) | COGS $9.70 + pack $3 + ship $6 + fees $0.60 = **$19.30** | **≈ −$0.10 (~0%)** | the ≈$0 engine — **do not ship singly** (the model's single most important finding) |
| Refill — **quarterly 3-pack** | $57.60 | COGS $29.10 + pack $5 + ship $8 + fees $1.70 = **$43.80** | **~$13.80/qtr (~$55/yr)** | the fix — batched cadence makes the recurring engine carry margin |
| Discovery set | $18 | COGS $8 + pack $2 + ship $4 + fees $0.55 = **$14.55** | **~$3.45** | **does not self-liquidate** a $28–40 CAC alone (01 corrected the brief) |
| Wholesale vessel (keystone) | $29 | COGS $16 (bulk carton; freight to buyer/Faire) | **~$13 gross, less ~15–25% Faire commission on Faire orders** | thin; volume + shelf presence |
| Wholesale refill (keystone) | $12 | COGS $9.70 | **~$2.30 gross** | very thin; a volume/visibility play, not a margin play |

**Derived economics (from 01):** first-order AOV ~$70; **Year-1 contribution LTV ≈ $65–80** (vessel ~$24 + 2–3 retained refill quarters); therefore **affordable CAC ≤ ~$55–65** to recover inside 12 months; the ~10× AOV heuristic **does not apply** (recurring/physical model → optimize margin-per-customer + LTV, per operating-playbook #2/#3). *`Needs CPA/controller review`: capitalize-vs-expense of the protective-packaging and freight-in components; whether outbound shipping sits in COGS (cost of delivery) or OpEx — it materially changes gross-margin reporting.*

### 1b. Chart of accounts — mapped to a maker/goods business

Numbered COA, tuned to Emberline's actual lines. **The additions the SaaS COA lacks are the inventory asset block (1200s) and the cost-of-goods/fulfillment block (5000s) — bolded.**

| Range | Class | Emberline accounts |
|---|---|---|
| 1000–1199 | Assets — cash/receivable | 1000 Operating cash · 1010 Tax-reserve cash · 1050 Shopify Payments clearing (undeposited) · 1060 Faire clearing/receivable · 1100 **A/R — wholesale net-30** · 1250 Prepaid (insurance, studio deposit) |
| **1200–1299** | **Assets — inventory (NEW)** | **1200 Raw materials (wax, fragrance oil, wicks) · 1210 Vessels (ceramic) · 1220 WIP (poured / curing / pre-burn-test) · 1230 Finished goods · 1240 Packaging & protective materials** |
| 1300–1399 | Assets — fixed | 1300 Pour/production equipment · 1310 Accum. depreciation |
| 2000–2999 | Liabilities | 2000 A/P — suppliers · 2010 Card payable · 2100 Accrued expenses · 2200 Sales-tax payable · 2210 **Marketplace-facilitator tax (Faire/Shopify collected & remitted)** · 2300 Gift-card / store-credit liability · **2350 Customer deposits / pre-sale deferred revenue (founding-refill cohort, gift cards)** · 2400 Payroll liabilities |
| 3000–3999 | Equity | 3000 Member capital · 3100 Distributions · 3900 Retained earnings |
| 4000–4999 | Revenue (one line per stream) | 4000 Vessel · 4010 Refill one-off · 4020 **Refill subscription** · 4030 Diffuser *(deferred — hazmat)* · 4040 Discovery set · 4050 Seasonal/limited drops · 4100 Wholesale — vessels · 4110 Wholesale — refills · 4200 Events/markets · 4900 Discounts (contra) · 4910 **Returns & breakage refunds (contra)** |
| **5000–5999** | **COGS + cost of delivery (NEW shape)** | **5000 Wax · 5010 Fragrance oil · 5020 Vessels · 5030 Wicks · 5040 Packaging (incl. protective) · 5050 Pour/production labor · 5060 Freight-in (inbound) · 5070 Outbound shipping · 5080 3PL pick-pack · 5090 Breakage/shrinkage reserve · 5095 Processing + marketplace fees (Shopify/Faire)** |
| 6000–6999 | OpEx | 6000 Founder/ops payroll · 6010 Contractors (bookkeeper, creative) · 6100 Software (Shopify/Skio/Klaviyo) · 6200 Marketing/ads **(= $0 until economics proven)** · 6300 Professional fees (legal/CPA) · 6400 **Insurance — product-liability + GL** · 6450 **Burn-testing / lab fees (ASTM F2417)** · 6500 **Rent — pour studio (lease, §3)** · 6600 Bank/card fees · 6900 D&A |
| 7000+ | Other | 7000 Interest income (tax-reserve) · 7100 Interest expense |

- **Method:** accrual (GAAP) as the book of record — mandatory the moment you hold inventory, because **perpetual inventory + COGS-at-shipment is an accrual concept** (cash-basis would misstate margin every month product is poured but unsold). Cash view alongside for survival.
- **Deferred revenue — the narrow real case.** Unlike SaaS, there is no multi-month subscription-recognition problem (refills are shipped-and-earned each cycle). Deferred revenue applies **only** to (a) the **pre-sold founding-refill cohort** (01 §5 first milestone — cash in before goods are poured → a liability until fulfilled) and (b) **gift cards**. Small, but it exists — book it to 2350. *`Needs CPA/controller review`: pre-sale recognition timing.*
- **Tool:** the ledger's native COA (QBO); `finance:journal-entry` for the inventory/COGS accruals, breakage reserve, and pre-sale deferral.

### 1c. COGS, inventory & the cash-conversion cycle — the core stress test

This is the section with **no analog in the finance-ops method** (its COGS examples are hosting/AI/API/payment-processing — zero cost-of-goods, zero freight, zero inventory). It is also the section 01 named as the venture's defining finance risk.

- **Landed COGS + inventory valuation.** Every SKU carries a landed cost = materials + inbound freight + pour labor + packaging, capitalized into inventory (1200s) and released to COGS (5000s) **at shipment**, not at purchase. Valuation method **weighted-average** (simplest for a pour studio) or FIFO — *`Needs CPA/controller review`: method election + whether to run periodic vs perpetual at sprint scale.*
- **Breakage/shrinkage reserve.** A 2–5% allowance (glass/ceramic) accrued monthly to 5090 — a real margin line the headline GM ignores.
- **Cash-conversion cycle (CCC = DIO + DSO − DPO)** — the survival metric for this venture:
  - **DIO (days inventory outstanding): high and lumpy.** Ceramic vessels carry an **8–12 week lead time** and fragrance oils buy at MOQ; inventory is committed a full quarter before the Q4 demand it serves.
  - **DSO:** DTC ≈ **0–2 days** (card at purchase — the one place cash timing is *better* than SaaS); wholesale direct = **net-30**; Faire pays out ~on-ship/net-few-days (Faire carries the buyer-credit risk).
  - **DPO:** supplier terms (often prepay/50-deposit for ceramics → **low DPO**, which worsens CCC).
  - **Net:** a **strongly positive CCC** — cash out well before cash in — **amplified by Q4 seasonality.** This is why 01 concluded "collected ≈ booked, but net cash is *worse* than revenue suggests because cash is tied up in inventory."
- **Purchase-planning / MOQ reorder view (Airtable + xlsx):** a forward inventory plan — on-hand + on-order vs a demand forecast, with **reorder points that respect the 8–12 wk lead** and a **Q4 build schedule**. This is where a stock-out (lost sale) and an over-buy (dead cash) are both prevented. The 03 build package puts the SKU/lot/batch records in Airtable `product-ops`; finance overlays the **valuation + reorder-cash** layer on the same base.

### 1d. The 12-month model (driver-based) — delivered to xlsx when productionized

Built off 01's base case, driven by labeled assumptions (never hard-coded mid-row); three scenarios off one assumption block. Delivered here as a summary; the **xlsx workbook is the productionization step** (finance-ops output-contract component 2 — kept as tables in this pressure-test artifact to match the sibling 03 house style).

**Key drivers (base):** first-time DTC buyers (unpaid) 600–1,500 → base ~1,000; first-order AOV ~$70; refill-sub start 40–55%; retention 6–9 mo; **refills ship as a quarterly 3-pack** (the margin guard); wholesale 12–40 accounts × opening order $300–800 × 1.5–2.5 reorders/yr; ads $0.

| Line (illustrative, base) | Amount | Note |
|---|---|---|
| Revenue — DTC (vessels + refills + discovery + drops) | ~$117k | primary motion |
| Revenue — Wholesale | ~$30k | net-30 / Faire |
| Revenue — Events/markets | ~$12k | some buyers also counted in DTC |
| **Total revenue (booked ≈ collected)** | **~$159k** | matches 01 §4 base |
| COGS + cost of delivery (delivered) | ~$78k (~49%) | goods + freight + pick-pack + breakage + fees |
| **Gross profit** | **~$81k (~51%)** | the delivered-margin reality, not the 60–72% headline |
| OpEx — studio rent, part-time pour/pack labor, insurance, burn-testing, software, legal/CPA, bookkeeper (ads $0) | ~$70–90k | fixed base of a physical sprint |
| **Operating result** | **~break-even to modest loss** | expected for a validation sprint; break-even ≈ several hundred vessels + their retained refill streams (01 §3) |

Scenarios: conservative ~$75k / base ~$159k / stretch ~$285k booked (01 §4). **Most-sensitive driver flagged: refill retention months** (flip it and the whole LTV moves); runner-up **delivered contribution/shipment** (≈$0 if cadence drifts to single). The 03 **Delivered-Margin Ledger** feeds finance the per-shipment contribution actuals to calibrate this driver.

### 1e. The stack (function → tool → MCP status), and how the money connects

QBO alone does **not** do perpetual inventory/COGS well for a maker — the stack needs a **commerce→ledger bridge** and an **inventory/production layer** the finance-ops stack table omits (added, bolded).

| Function | Recommended tool | MCP here? | If no MCP |
|---|---|---|---|
| Model / cash-flow / reorder plan | `xlsx` skill | ✅ skill | — |
| Assumptions / cash log / **inventory & reorder register** | Airtable | ✅ **Airtable MCP** | — |
| **Revenue system-of-record** | **Shopify Payments** (not Stripe) | ❌ no live MCP | flag to connect; Shopify Analytics interim |
| **Commerce → ledger bridge** | **A2X** (Shopify→QBO: maps payouts, fees, COGS, marketplace tax) | ❌ | **connect — this is the piece that makes inventory/COGS books tie** |
| **Inventory / production (batch, lot, landed cost)** | **Shopify inventory** → **Katana**-class at volume (maker MRP) | ❌ | Airtable `product-ops` base interim (per 03) |
| General ledger | **QuickBooks Online** (US, CPA-standard) | ❌ | connect via `SearchMcpRegistry` |
| Sales tax / nexus | **Shopify Tax** (+ Avalara at scale) | ❌ | flag |
| AP / cards | Ramp/Bill.com | ❌ | Airtable approval log interim |
| Banking | Mercury/Relay (operating + tax-reserve) | ❌ | flag |
| Payroll / contractors | Gusto | ❌ | connect at first W-2/1099 |

**Money path:** `Suppliers → A/P → COGS/Inventory` and `Shopify Payments + Faire + events → A2X → QBO ← bank feed (Mercury) ← payroll (Gusto) / cards (Ramp)`. Stripe does **not** appear — Shopify Payments is the processor (03 F16). *`Needs CPA/controller review`: the A2X revenue/COGS mapping rules before the first close, so Shopify payouts, fees, and marketplace-collected tax land in the right accounts.*

### 1f. Taxes — the physical-goods surface

- **Sales tax / nexus:** physical goods are **destination-taxed**; **economic nexus** (a common ~$100k-or-200-txn threshold, but it varies by state and changes) trips fast for nationwide DTC. **Shopify Tax** computes/collects; register only where nexus exists. **Marketplace-facilitator** rules mean **Faire (and Shopify as a marketplace) collect & remit** for those channels — reconcile to 2210, do not double-remit. *`Needs CPA + state-by-state`: nexus determination; product taxability of candles by state; marketplace-facilitator reconciliation.*
- **Income tax:** pass-through LLC (§3); quarterly estimates. **R&D §41/§174 does not apply** (no qualifying software dev) — a SaaS-specific feature to strike from the finance-ops tax map.
- **Guardrail:** payroll/tax and Shopify/bank credentials in env/vault only; never echoed.

### 1g. Monthly close — physical-goods adaptations

The Day-1..Day-7 close from the method holds, with **four inserted steps** (bolded) the SaaS close lacks:

| Day | Step | Skill / tool | Gate |
|---|---|---|---|
| D1 | Cutoff — pull Shopify payouts + Faire + bank + card | Shopify/A2X, bank | — |
| D1–2 | Reconcile Shopify-payout→bank→GL (via A2X), bank, cards | `finance:reconciliation` | recs tie |
| **D2–3** | **Inventory count/valuation + COGS true-up** (release WIP→FG→COGS at shipment; landed-cost roll) | `finance:journal-entry` | *CPA: valuation method* |
| **D3** | **Breakage/shrinkage reserve** accrual | `finance:journal-entry` | — |
| D3 | A/P + prepaids (insurance amortization) | `finance:journal-entry` | — |
| **D3–4** | **Marketplace-facilitator tax reconciliation** (Faire/Shopify collected vs remitted → 2210/2200) | `finance:reconciliation` | *CPA: nexus* |
| D4 | Depreciation (pour equipment) | `finance:journal-entry` | — |
| **D4–5** | **Pre-sale/gift-card deferred-revenue release** on fulfillment | `finance:journal-entry` | *CPA: timing* |
| D5 | Financial statements (P&L / BS / CF) | `finance:financial-statements` | — |
| D5–6 | Budget vs actual — variances to drivers (volume/mix/freight) | `finance:variance-analysis` | materiality set |
| D6 | **Cash / inventory-adjusted runway + roll the 13-week** | `xlsx` + Airtable | — |
| D7 | Review gate | — | **controller/CPA sign-off before filing/sending** |

### 1h. Cash / runway / 13-week — inventory-aware

Runway is **not** simply cash ÷ burn here. Net working-capital investment in inventory is a real cash outflow that a burn-only view misses. The 13-week direct cash-flow model must timeline: **lumpy MOQ purchase outflows** (ceramics 8–12 wk lead; oils at MOQ), the **Q4 inventory build**, **wholesale net-30 collection lag**, and DTC's immediate collection. Report: current cash · net operating burn · **inventory purchase commitments (on-order)** · inventory-adjusted runway · the date cash hits zero at current pace. **The forecastable cash crunch is the pre-Q4 inventory build**, not a monthly SaaS burn — flag it a quarter ahead. *`Needs CPA/controller review`: tax-reserve sweep % on collections given inventory timing.*

---

## 2. Sales-crm — the wholesale commercial motion (DTC is self-serve, not CRM)

**Scope call first (the reframe).** The `sales-crm` skill treats one CRM as *the* commercial motion. For Emberline that is wrong by half: the **primary** revenue — DTC refill subscription — is **self-serve commerce** that runs through Shopify + Klaviyo and **never enters a CRM** (its "pipeline" is a storefront funnel, instrumented in §5 and retained in §6). The CRM/weighted-pipeline machine is built **for wholesale** — boutiques, interior designers, boutique hotels/STR operators — where there is a real relationship sale with stages, a forecast, and reorders. Everything in this section is the wholesale motion; DTC is cross-referenced, not pipelined.

### 2a. CRM base — Airtable 4-table core (build-ready for the Airtable MCP + `airtable:sales-ops`)

**Companies (the account being sold to)** — tuned to wholesale:
- `Name` (primary) · `Account type` (singleSelect: **Boutique / Interior designer / Home stager / Boutique hotel / STR operator**) · `Region` · `Website` · `Est. doors/rooms` (number — sizing) · `Owner`
- `Fit score` (0–100) · `Source` (singleSelect: **Faire / Direct outreach / Trade show / Referral / Inbound**) · `Faire account?` (checkbox — flags marketplace-collected tax + commission)
- `Credit terms` (singleSelect: **Prepaid / Net-30**) · `MOQ met?` (checkbox)
- Rollups: `Open pipeline $` · `Opening-order $` · `Reorder $ (LTV)` · `Last order date` · `Reorder due?` (formula)
- **Firewall field:** `Source origin` (incl. `LYV (co-owned) — off-limits`).

**Contacts** — `Name` · `Email` · `Phone` · `Title` (Owner/Buyer/Designer) · `Company` (link) · `SMS opt-in` (gates Twilio) · `Role on deal` (Buyer / Owner / Influencer).

**Deals (opportunities)** — the forecast table, **re-staged for wholesale** (see 2b): `Name` · `Company` (link) · `Motion` (singleSelect: **Opening order / Reorder / Hotel amenity program / Designer project**) · `Amount` · `Probability` · `Weighted amount` (formula) · `Forecast category` · `Expected order date` · `Stage entered at` · `Terms` (Prepaid/Net-30) · `Channel` (Faire/Direct) · `Loss reason`.

**Activities** — Call / Meeting / **Sample sent** / **Line-sheet sent** / Email / Market booth · `Outcome` · `Next action` + date.

**Support tables:** Leads (inbound wholesale), Sequences (outbound drafts — never auto-sent), Deal Desk (§2e).

### 2b. Pipeline — wholesale stages (not the B2B-SaaS demo/proposal ladder)

The method's default ladder (Demo/Scoping → Proposal → Negotiation) is SaaS-deal-shaped and has **no sample/line-sheet stage** and **no reorder motion**. Re-cut for how boutiques actually buy:

| Stage | Exit criterion (what's true to be IN this stage) | Default prob |
|---|---|---|
| **Prospect** | ICP-fit account identified (never LYV-sourced); not contacted | 5% |
| **Engaged** | Two-way contact; line sheet sent | 15% |
| **Sampled** | Physical **samples shipped** (the wholesale "demo") | 35% |
| **Opening order** | PO placed / Faire order in cart; terms + MOQ agreed | 65% |
| **Fulfilled — active account** | First order shipped **and** (prepaid collected **or** net-30 invoice issued) | 100% (won) |
| **Reorder cycle** | *Recurring* — active account with a due reorder (the real LTV) | tracked as new Deals, not a one-time close |
| **Closed-Lost / Dormant** | No order, or lapsed >2 reorder cycles; loss reason captured | 0% |

**Two structural departures from the skill, both required:** (1) **"Closed-Won" ≠ "contract executed + first dollar collected"** — a wholesale opening order is a **PO** (often via Faire), and **net-30 means the dollar is collected *later*** (→ A/R + credit risk to finance §1). Won = *shipped + invoiced/collected*. (2) **The account's value is reorders**, so there is a **recurring Reorder motion** — the pipeline does not end at the opening order the way a SaaS deal ends at signature. Reorder LTV is the wholesale analog of subscription retention.

**Weighted forecast** = Σ(Amount × Probability) sliced by month / account-type / channel, via `airtable:airtable-filters`; coverage vs the wholesale target (flag < 3×). Faire orders are flagged separately because **Faire is a marketplace facilitator** — it collects payment + tax and takes commission (~15–25% first order, lower on repeat), so the *net* to Emberline and the tax treatment differ from a direct account. Forecast interface via `mcp__Airtable__create_interface`; hand off with `airtable:show-airtable-link`.

### 2c. Lead scoring + routing (Fit × Intent)

*Fit:* boutique/designer/hotel ICP + region match (+30), est. doors/rooms in range (+20), design tier match (+15); disqualifier −40 (wrong category, mass discounter that would break MAP, or **LYV-origin → firewalled, not routed**). *Intent:* sample/line-sheet request (+30), replied/multi-touch (+20), a project or season named e.g. "refreshing 40 rooms in Q3" (+20). **A-tier (high/high) → Tony or accounts owner, SLA < 1 business hour.**

### 2d. Sales process (wholesale, end-to-end)

Prospect (build target list — never LYV) → Engaged (`/direct-response-copy` drafts the line-sheet cover note; lead with the **refill-system wedge**, never "scent" — positioning-before-promotion) → **Sampled** (physical samples; the wholesale demo) → Opening order (`/offer-architect` sets **keystone** pricing — vessel ~$29, refill ~$12; MOQ per account) → Close (terms: prepaid vs net-30; deal desk on any exception; PO/wholesale terms → `legal:review-contract`) → **Handoff to fulfillment** (validate PO + terms; create the pick-pack order to the 3PL; set the reorder-reminder). Every customer-facing artifact is a **draft**.

### 2e. Deal desk — keystone floor + MAP (not a SaaS discount ladder)

| Exception | Approver |
|---|---|
| Standard keystone (50% off MSRP), MOQ met, prepaid or approved net-30 | Accounts owner — self-serve |
| Extra 5–10% (volume/first-order incentive), MOQ met | Sales lead |
| **Below keystone, extended net terms, MOQ waiver, or a MAP exception** | **Tony — approval gate** (logged in Deal Desk, audit trail) |

Two wholesale-specific rules the skill's generic ladder lacks: **keystone is the floor** (below it, wholesale stops making sense), and **MAP (minimum advertised price)** must be enforced on resellers so DTC pricing isn't undercut — a reseller resale/MAP term the SaaS discount model has no concept of. Net-30 approval is also a **credit decision** (feeds A/R risk in finance §1), not just a discount.

### 2f. Metrics → finance-ops

Track: sample→opening-order conversion, opening-order win rate, **reorder rate + reorder cadence** (the wholesale-LTV metric), average opening-order $, A/R aging on net-30 accounts, weighted pipeline, coverage. Hand **won-account count + order $ + channel + net-terms exposure** to `finance-ops` for CAC/LTV/payback and A/R management; pull the affordable-CAC/keystone-floor constraints back from `/offer-architect`. Report PIPELINE $ via `/weekly-ops-review`.

### 2g. Automations (draft, never send)

Stage-timestamp; route inbound wholesale leads by region/type with SLA; **reorder-reminder trigger** (X days after last order by account cadence → task); stalled-deal flag (no activity N days); forecast rollup; **draft** the outbound line-sheet/sample-follow-up sequence into the Sequences queue for approval. **Hard rule:** automations draft, they never send (CAN-SPAM/TCPA + guardrail). SMS only to opt-in contacts on A2P-registered numbers.

**Flags:** LYV firewall (a `Source origin = LYV` account is captured, flagged, **not** prospected); claims-review on all copy (no medical/aromatherapy language); legal-review on wholesale terms + any hotel-amenity contract; approval gate on below-keystone/net-terms. `airtable:show-airtable-link` after any base build.

---

## 3. Legal-pack — entity, contracts (lease + supply + sale-of-goods) & the physical-product regime

> **NOT LEGAL ADVICE.** Every judgment point carries a **⚖ attorney review** flag naming the specialist. Every contract is a **draft to be reviewed**, never filed or signed autonomously — signature and filing are irreversible, human-gated actions.

### 3a. Entity + governance

- **Recommendation: LLC** (solely owned, bootstrapped, cash-flow-first, not raising institutional capital — the fundraising fork that would force a Delaware C-corp does not fire). Evaluate an **S-corp election** with the CPA once profit makes the SE-tax saving exceed the payroll/compliance cost. **⚖ corporate + CPA** `[jurisdiction]`.
- **The liability shield is load-bearing here in a way it is not for SaaS:** a candle is a **fire-risk product**. The single-member LLC operating agreement (shield hygiene) plus **product-liability insurance bound before the first sale** (a hard gate, §3d) is the risk container. Tax mechanics (nexus, S-corp) → `/finance-ops`.

### 3b. Contract set — the model-specific goods/retail set the task calls for

The near-universal set applies **selectively**: **ToS + Privacy Policy + cookie/consent** for the Shopify storefront, and **DPAs** with subprocessors (Shopify, Klaviyo, the 3PL, GA4). **MSA/SOW are N/A** (those are B2B-services/SaaS paper — mark N/A, don't force them). The primary customer contract is **not** ToS — it is **Sale-of-Goods Terms**. The set Emberline actually needs:

| Contract | Why Emberline needs it | Template? | Operated by | ⚖ Review |
|---|---|---|---|---|
| **Commercial lease — pour studio** | The physical premises; **the largest fixed liability the venture signs** | **bespoke** (landlord paper — negotiate) | `legal:review-contract` + `legal:legal-risk-assessment` | ⚖ **corporate/real-estate** — **personal guaranty**, use clause (candle-pouring / open-flame + zoning/fire-code), CAM, build-out, exit `[jurisdiction]` |
| **Fragrance-house supply agreement** | Buy fragrance oils **with IFRA certificate + SDS obligations**; discontinuation/reformulation risk | **templatable** structure, bespoke terms | `legal:review-contract` | ⚖ corporate — spec/quality, **IFRA-cert + SDS delivery duty**, discontinuation notice, indemnity |
| **Vessel / raw-material purchase agreement** | Ceramics (8–12 wk lead), wax, wicks, packaging — pricing, MOQ, lead time, quality spec | **templatable** structure | `legal:review-contract` | ⚖ corporate — warranty, defect/return, delivery, price protection |
| **Co-manufacturer agreement** *(post-validation)* | Migrating high-volume scents to a candle co-man — **the supply contract the skill has no row for** | **bespoke** | `legal:review-contract` + `legal:legal-risk-assessment` | ⚖ corporate — **min-order commitment, quality spec, batch/lot records, recall responsibility, product-liability indemnity, IP ownership of formulas** |
| **3PL / fulfillment agreement** | Pick-pack-ship + storage; **breakage/loss liability**, insurance, SLAs | **templatable** | `legal:review-contract` | ⚖ corporate — liability for damage/loss, insurance, data (customer PII) → **DPA** |
| **Sale-of-Goods Terms + Returns/Warranty (DTC)** | The **primary customer contract** (UCC Art. 2) — sale, risk-of-loss, warranty/disclaimer, returns/refunds | **templatable** baseline | `legal:review-contract` | ⚖ **consumer-protection** — warranty, refund law, **auto-renew statutes** `[jurisdiction]` |
| **Subscription / auto-renewal terms (DTC refills)** | **Negative-option / auto-renew disclosure + easy cancel** — a real regime for subscription commerce | **templatable** | `legal:compliance-check` + `legal:review-contract` | ⚖ **consumer-protection** — **CA ARL + FTC Negative-Option/"Click-to-Cancel" Rule**: clear disclosure, affirmative consent, simple cancellation |
| **Wholesale terms (line-sheet T&Cs)** | Net-30, MOQ, **MAP/resale terms**, title/risk transfer, returns | **templatable** | `legal:review-contract` | ⚖ corporate — credit terms, MAP enforceability, reseller obligations |
| **Hotel/STR amenity agreement** | Amenity + resale programs for hospitality accounts | **bespoke**-leaning | `legal:review-contract` | ⚖ corporate — volume, liability, brand-use |
| **Contractor agreement (pour/pack labor, creative, ceramicist)** | **Present IP assignment + work-for-hire** — critical for the **vessel design** | **templatable** | `legal:review-contract` | ⚖ **employment** — IP assignment, **worker classification** `[jurisdiction]` |
| **Employment / offer letter** *(at first W-2 hire)* | At-will comp, PIIA/IP assignment | **bespoke** by jurisdiction | `legal:review-contract` | ⚖ employment `[jurisdiction]` |
| **ToS + Privacy Policy + cookie/consent** | Storefront users + PII | **templatable** | `legal:compliance-check` | ⚖ privacy `[GDPR/CCPA]` |
| **DPA (with each subprocessor)** | Shopify, Klaviyo, 3PL, GA4 hold customer PII | **templatable** (vendors supply) | `legal:vendor-check` + `legal:review-contract` | ⚖ privacy |

Workflow per contract: draft from reviewed baseline → `legal:review-contract` → store in **Google Drive (MCP LIVE)** → `legal:signature-request` to e-sign → **the human signs.**

### 3c. IP + trademark (flag, never clear)

- **IP assignment:** all venture IP owned by the entity — founder IP-assignment at formation; **every contractor (especially the ceramicist/vessel designer and any creative) carries a present assignment + work-for-hire** (US "work made for hire" does not auto-cover commissioned design — the vessel is a brand asset and the most common silent defect). **⚖ IP.**
- **Trademark:** knockout search on **"Emberline"** + scent/collection names + domain/handles → **clearance opinion by TM counsel** in the right classes (candles/home-fragrance = Class 4/3/21) → USPTO 1(b)/1(a). **Flag collision risk; never declare the mark "clear."** 01 lists this as an open dependency before public launch. **⚖ IP/TM.**

### 3d. Compliance regime — the physical-product set the source matrix omits

`legal-pack` says "consume `engineering-backbone §9`, do not re-derive." **That instruction fails here:** §9's matrix is **GDPR/CCPA · HIPAA · LegitScript · licensure · PCI-DSS · SOC2** — none is the regime that gates Emberline's first sale (03 F13 found the same gap in the build layer). GDPR/CCPA genuinely applies (storefront PII); **HIPAA/LegitScript/PCI-SAQ-A/SOC2 are N/A or platform-owned.** The gating set must be **added** (it is the same set 03 §3D surfaced, here owned by legal):

| Regime (add — absent from §9) | Applies when | Requirement | Gate |
|---|---|---|---|
| **Product-liability insurance** | Fire-risk product | Bound **before first sale** (01 condition #2) | **Before first sale** — a hard gate |
| **FDA cosmetic / FPLA labeling** | Any scented consumer product, US | Identity · net quantity · maker name/address; **sensory scent language only** | Before first sale |
| **ASTM F2417 burn testing** | Every scent × vessel × wick combo | Non-optional product-dev safety gate; pass logged before a SKU is sellable | Before that SKU sells |
| **ASTM F2058 candle safety warnings** | Every candle unit | Mandatory warning label (never leave unattended, keep from children/pets) | On every unit |
| **IFRA fragrance limits** | Every formula | Respect per-material usage limits; IFRA cert + SDS on file | Before formulation final |
| **DOT/IATA + CPSC/FHSA hazmat** | Flammable diffuser oils | Limited-quantity shipping + hazard labeling — **why the diffuser line is deferred** | Before any diffuser sale (deferred) |
| **CA Prop 65** | Listed fragrance components | Warning or reformulation | Before selling into CA |
| **FTC Green Guides** | "clean / natural / non-toxic / recyclable / refill" claims | Substantiate or don't say it | At copy/label review |
| **GDPR/CCPA** *(does transfer from §9)* | Storefront collects PII | Privacy policy · consent · DSAR/deletion via Shopify/Klaviyo · DPAs · minimization | Before collecting PII |

Plus the **no-medical/aromatherapy-claims guardrail** (hard): candles cannot be described as reducing stress, improving sleep, purifying air, or any health effect (FDA drug-reclassification + FTC risk). Scent described **sensorially only**, everywhere. **⚖ regulatory** owns the regime determination; product-liability + burn-testing + labeling are **hard dependencies gating launch**, not formalities.

### 3e. Attorney-review-required gate list (filled)

- [ ] Entity + S-corp election — ⚖ corporate **+CPA** `[jurisdiction]`
- [ ] LLC operating agreement — ⚖ corporate
- [ ] **Commercial lease** (personal guaranty, use/fire-code, exit) — ⚖ corporate/real-estate `[jurisdiction]`
- [ ] **Co-manufacturer + 3PL** (recall, liability indemnity, batch records) — ⚖ corporate
- [ ] **Supply agreements** (IFRA/SDS duty, discontinuation) — ⚖ corporate
- [ ] **Sale-of-Goods + Returns/Warranty** (UCC) — ⚖ consumer-protection `[jurisdiction]`
- [ ] **Auto-renewal/subscription terms** (CA ARL + FTC Click-to-Cancel) — ⚖ consumer-protection
- [ ] Wholesale terms + **MAP** — ⚖ corporate
- [ ] Contractor/ceramicist **IP assignment + classification** — ⚖ employment/IP `[jurisdiction]`
- [ ] ToS + Privacy + DPAs — ⚖ privacy
- [ ] **Trademark** clearance + filing (flag, never clear) — ⚖ IP/TM
- [ ] **Physical-product regime** (product-liability insurance, ASTM F2417/F2058, FPLA, IFRA, hazmat, Prop 65, Green Guides) + no-medical-claims — ⚖ regulatory **(hard gate on launch)**
- [ ] Signature/filing of any of the above — human-gated, after counsel review

---

## 4. Org-roles — structure, RACI, access, hiring, on/offboarding

**Stage = solo / pre-launch validation sprint.** Lean, not bloated: the answer is founder + AI/Cowork + a few fractional/part-time specialists, **plus one thing the SaaS org has no slot for — physical production/fulfillment labor.**

### 4a. Function → coverage map + next 3 hires (trigger-gated)

The seven functions, with a **physical-production/fulfillment function added** (the method's "Product/engineering" collapses manufacturing, QA, and pack into one software-shaped box — split out here):

| Function | Current coverage (sprint) |
|---|---|
| Product / **manufacturing** (pour, scent dev, **burn-test QA/safety gate**, batch records) | **Founder + part-time pour/pack operator**; burn-testing outsourced to a lab |
| **Fulfillment / inventory** (pick-pack, breakage-aware packing, ship, reorder) | **In-house (founder + operator)** → **3PL** as volume grows (per 03) |
| GTM / marketing / content | AI + Cowork (Klaviyo flows, PDPs, line sheet — drafts); Canva |
| Sales — **wholesale** | Founder (relationship calls) + AI (sourcing/drafts); DTC is self-serve |
| Finance | `/finance-ops` + **fractional bookkeeper (e-com/inventory experience)** |
| Operations | AI + Cowork (rhythm, SOP library, Airtable ops base) |
| Support / success | AI (draft replies) + founder (escalations); Gorgias/Airtable |
| Legal / compliance | `legal-pack` + counsel (gated); insurance broker |

**No FT hires clear the four tests at sprint stage.** Next 3 hires, trigger-gated:
1. **Pour/fulfillment operator (part-time → FT)** — *trigger:* order volume exceeds the founder's pack capacity **or** burn-testing/batch-record load blocks pouring. Owns pour + pack + inventory so the founder only approves and sells. (The physical labor function has no SaaS analog — it is hands-on and hourly.)
2. **Fractional bookkeeper (e-com + inventory)** — *trigger:* first real inventory + wholesale A/R on the books (immediately, effectively) — perpetual inventory/COGS needs a human who has closed goods books.
3. **Wholesale/accounts coordinator (contract)** — *trigger:* active wholesale accounts exceed the founder's reorder-management capacity; owns reorders + net-30 follow-up.

Design/eng stay AI+fractional (03: no custom app at launch). Org map → **Lucid** (`lucid_create_org_chart`); coverage table → Airtable.

### 4b. RACI — physical-goods recurring processes (one Accountable each)

The method's default processes (deploy-to-prod, Sev-1 outage, product release) are software-shaped. Emberline's core processes — bolded ones have **no analog in the skill's table**:

| Recurring process | Owner(founder) | Operator | Bookkeeper | AI/Cowork |
|---|---|---|---|---|
| Weekly operating review | I* | **A** | C | R |
| **Burn-test sign-off (ASTM F2417 — safety gate)** | **A** ⛔(safety) | R | I | R (log) |
| **Batch / lot record + IFRA/SDS control** | I | **A** · R | I | R |
| **Inventory reorder / MOQ purchase** | **A** ⛔(spend) | R | C | R (reorder calc) |
| **Pick-pack QA (breakage-aware) + ship** | I | **A** · R | I | R (label) |
| **Wholesale order fulfillment + net-30 invoicing** | I | **A** | R | R |
| **Product-safety incident / recall response** | **A** ⛔ | C | I | R (draft; never publish) |
| External send / publish (email · PDP · ad · **label artwork**) | **A** ⛔ | C | I | R (drafts) |
| Spend / vendor purchase approval | **A** ⛔ | R | C | I |
| Customer escalation (breakage, refund) | I | **A** | I | R (draft reply) |
| Monthly financial close (incl. inventory valuation) | I* | C | **A** · R | R |
| Access grant / revoke (on/offboard) | **A** | R | I | R (checklist) |

⛔ = founder gate (money / commitment / external-send / **product-safety**). Note the safety gate is a **new gate class** the skill's money/commit/send/Tony-only set does not name.

### 4c. Roles + permissions matrix — the right tools + a physical-access dimension

The engineering-backbone §10 matrix (which org-roles composes) lists **GitHub/Supabase/Vercel/Stripe/Twilio/PostHog** — none of which Emberline uses (03 F17). Swapped for the real stack, **and extended with a physical-access dimension the digital matrix entirely lacks** (bolded):

| Resource | Owner | Operator | Bookkeeper | Contractor | AI / service acct |
|---|---|---|---|---|---|
| **Shopify** (store/orders/PII/payments) | Owner | Staff (orders/fulfillment) | Staff (finance reports) | — | Custom-app token, least-scope |
| **Subscription app** (Skio/Recharge) | Owner | Manage subs | Read | — | Scoped API key |
| **Klaviyo** (email/SMS) | Owner | Manage/send-config | — | — | Scoped key; **drafts only** |
| **Faire / Shopify B2B** | Owner | Account mgr | Read (payouts) | — | — |
| **3PL / ShipStation** | Owner | Fulfillment ops | — | — | Scoped API key |
| **Airtable** (ops/CRM/inventory/compliance base) | Owner | Editor | Editor (finance base) | Editor (one scoped base) | Scoped PAT |
| **QBO / A2X** (accounting) | Owner | — | Accountant/admin | — | Read-only sync |
| **Bank (Mercury) / cards (Ramp)** | Owner/Admin | Analyst (read) | Analyst / bill-pay | — | — |
| **Drive / Canva / Gmail** | Owner | Editor | — | Editor (scoped) | **Draft-only** |
| **Password manager / vault** | Owner | Member (scoped) | Member (scoped) | Member (scoped) | — |
| **Physical: pour studio access / keys** | **Owner** | **Granted (badge/key)** | **—** | **Escorted or scoped hours** | **—** |
| **Physical: inventory / finished-goods storage** | **Owner** | **Granted** | **—** | **Task-scoped** | **—** |
| **Physical: sign for received inventory (MOQ deliveries)** | **Owner + Operator** | **Yes** | **—** | **—** | **—** |

Least-privilege, MFA on every account, no shared logins, scoped/revocable tokens, AI read-first + drafts-only, quarterly review. **Access register** (Airtable): `Principal · Type · Resource · Access level · Scope · MFA? · Granted (date/by) · Last reviewed · Status` — with `Resource` now including **physical** rows (studio key, storage, delivery authorization). Secrets by reference only; the register records access levels, never keys.

### 4d. Hiring kit — the pour/fulfillment operator (drafts only)

- **Scorecard (authored first).** *Mission:* run pour + pack + inventory to the quality/safety bar so the founder only approves and sells. *Outcomes (12 mo, ranked, measurable):* (1) 100% of SKUs pass ASTM F2417 burn-test sign-off before sale, zero exceptions; (2) breakage rate held ≤3% of DTC shipments; (3) pack-out throughput to meet Q4 peak without stock-out; (4) batch/lot records + IFRA/SDS control kept audit-clean. *Competencies:* meticulous process discipline, safety-first judgment, hands-on stamina, inventory accuracy.
- **JD draft** — voice-compliant, comp range **[placeholder — founder gate]**, not posted.
- **Structured loop:** Screen → chronological "Who"/topgrading walk → focused competency (a real pack-out + burn-test-log exercise) → reference (candidate-arranged). Same questions each candidate; scored 1–5 against the scorecard.
- **Guardrails:** process + drafts only; **no offer, no comp number** (founder gate); non-discriminatory criteria; **no fabricated candidate PII** (roles/placeholders only).

### 4e. Onboarding + offboarding (digital + physical)

- **Onboarding:** pre-start (contractor/employment + NDA + **IP assignment** → `legal-pack`/e-sign, a commit gate) → Day-1 **least-privilege access** per §4c incl. **physical grants (studio key, storage, delivery authorization)** + MFA + register entry → Week-1 SOPs (pour, burn-test, pack, ship) + first shippable outcome → 30/60/90 vs the scorecard.
- **Offboarding (security-critical, 24h):** revoke every tool account + token; **rotate any shared secret they saw**; **recover physical keys/badge + confirm studio/storage access removed** (the physical revoke the digital checklist omits); transfer any solely-owned records; final pay → `/finance-ops`; update + re-audit the register; LYV-adjacency check on anything touched.

### 4f. SOP library, PM, vendors, rhythm

- **SOP library (Airtable register; authored by `/sop-writer`; stored in Drive):** pour procedure, **burn-test protocol + pass/fail gate**, breakage-aware pack-out, ship/label, wholesale fulfillment + net-30 invoicing, **inventory reorder (MOQ + 8–12 wk lead)**, batch/lot + IFRA/SDS control, refund/returns, product-safety-incident runbook (`operations:runbook`). Every RACI row + every bus-test-flagged process gets one.
- **Vendor register** (composes `operations:vendor-review`): ceramicist, fragrance house, wax/wick/packaging suppliers, co-man (later), 3PL, Shopify/Skio/Klaviyo/Faire, insurer, burn-test lab — with `Data access · DPA/BAA? · Criticality · Lead time · Alternative`. **Lead time and single-source risk are first-class fields** here (the ceramicist at 8–12 wk is a key-person/supply risk → `operations:risk-assessment`). DPAs with PII-touching vendors (Shopify/Klaviyo/3PL). Renewals + spend → `/finance-ops` gate.
- **Rhythm (Rockefeller Habits):** daily async huddle (once operator joins) · **weekly ops review** (`/weekly-ops-review` block: SHIPPED / PIPELINE $ / KILLED / NEEDS TONY) · monthly business review (close incl. inventory + metrics) · quarterly (priorities · **access review incl. physical** · next-3-hires trigger check · **supply/inventory risk review**).

---

## 5. Analytics-stack — the measurement backbone (commerce events, not a product SDK)

**[DRAFT/SPEC — nothing instruments, fires, or reconfigures without Tony's approval.]**

**Two dependency notes up front.** (1) `analytics-stack` Load-first #3 requires a `/metrics-dashboard` output to instrument — **none exists in this run** (no 02 metrics artifact). Per the skill, `/metrics-dashboard` should run first; below I derive a **minimal north-star** from 01's load-bearing number and flag it as provisional. (2) The skill's core method — "instrument the **core value action** via events your app fires (`object_action`, snake_case, identify/super-properties)" — assumes **a product with an SDK**. Emberline has **no app**; the core value action (a candle burning at home; a refill re-order) is physical/commerce. So the "product-analytics" layer is **Shopify + Klaviyo commerce events consumed**, not a designed event SDK.

### 5a. The stack (stage-appropriate; connect status honest)

| Layer | Emberline pick | Status here | Note |
|---|---|---|---|
| Web analytics | **GA4** (+ Shopify Analytics) | DIRECT instrument (consent-gated); BigQuery export REGISTRY | acquisition + storefront funnel |
| "Product"/commerce analytics | **Shopify + Klaviyo events** (orders, subscriptions, flows) | no live MCP — REGISTRY/DIRECT | **replaces a product SDK**; PostHog only if storefront funnels outgrow it |
| Retention/lifecycle | **Klaviyo** (segments, flow performance, churn reasons) | REGISTRY | owns the retention read the whole model rests on |
| Event sink / registers | **Airtable** (tracking-plan SoT + experiment register) + the 03 **Delivered-Margin Ledger** | ✅ Airtable MCP (Supabase only if the 03 ledger ships) | live substrate |
| Analysis / dashboards | **`data:*` + `dataviz` + `xlsx`** | ✅ skills | in-session now |
| Warehouse / BI | BigQuery + Metabase | REGISTRY | **defer** until data spans ≥3 systems (Shopify + Klaviyo + QBO + CRM) |

### 5b. Instrumentation plan — commerce funnel (consumed, not SDK-designed)

Events map to the commerce funnel; they are emitted by Shopify/Klaviyo (and the 03 ledger), consumed here — **no PII, no PHI (N/A), values as bands**:

| Event (source) | Trigger | Key properties | Funnel stage | Ladder rung | Consent | PII |
|---|---|---|---|---|---|---|
| `discovery_set_purchased` (Shopify) | order | scent_set, referrer_source | acquisition | entry | analytics | none |
| `vessel_purchased` (Shopify) | order | colorway, first_order (bool) | activation | core | analytics | none |
| `subscription_started` (Skio) | first refill sub created | cadence, pack_size *(batching signal)* | revenue/retention | recurring | analytics | none |
| `refill_shipped` (Shopify+ledger) | fulfillment | units, delivered_contribution_band | retention/revenue | recurring | analytics | none |
| `subscription_cancelled` (Skio) | churn | cancel_reason, active_months | retention | recurring | analytics | none |
| `wholesale_order_placed` (Faire/B2B) | PO | account_type, order_band, reorder (bool) | revenue | wholesale | n/a (B2B) | none |
| `checkout_started` / `discovery_to_vessel` (GA4) | funnel step | tier | acquisition/activation | entry→core | analytics | none |

Naming/`identify` conventions apply **where we control emission**; where Shopify/Klaviyo emit their own schema, we consume and normalize in Airtable rather than re-design. Quality-gate with `data:validate-data`.

### 5c. KPI tree (instrumented) — derived north-star, flagged provisional

Since no `/metrics-dashboard` exists, the north-star is derived from 01's finding that **refill retention is the entire model**:

| Node | L/L | Sourcing | Owning domain | Query/tool |
|---|---|---|---|---|
| **North-star (provisional): active refill subscribers** (distinct subs with a shipped refill in trailing 90d) | L | `subscription_started` − `subscription_cancelled`; `refill_shipped` | metrics-dashboard *(to be run)* | `data:sql-queries` / Skio + Airtable |
| Discovery→vessel conversion | L | GA4 funnel + `vessel_purchased` | gtm/analytics | GA4 |
| Vessel→refill-sub start rate | L | `vessel_purchased`→`subscription_started` | analytics | `data:analyze` |
| **Refill retention (month-2 & month-3 re-order)** | L | cohort return on `refill_shipped` | analytics (**the crux**) | `data:sql-queries` |
| **Delivered contribution / shipment + % below $8 floor** | L | 03 Delivered-Margin Ledger | finance-ops | ledger rollup |
| Wholesale reorder rate | L | `wholesale_order_placed` (reorder) | sales-crm | Airtable |
| Blended CAC (organic) | Lag | spend (=$0) + acquisition counts | gtm/finance | `finance-ops` |
| **Money strip: retained refill revenue · contribution LTV · wholesale reorder revenue · first-order contribution** | Lag | Shopify/QBO | **finance-ops** (definitions) | QBO/A2X |

**The money strip is *not* MRR/NRR** (SaaS metrics the skill defaults to) — for a goods brand it is **retained refill revenue, repeat-purchase rate, contribution LTV, and wholesale reorder revenue.** finance-ops owns the definitions; analytics instruments them. This is the honest KPI→P&L bridge: refill retention (leading) → retained refill revenue (the P&L line).

### 5d. Dashboard + cadence, experiments, governance

- **Board** (`dataviz` standards, `data:build-dashboard`): north-star (retained refill subscribers, as a target stat-tile with its floor) + ≤7 leading inputs (conversion, sub-start, **retention**, delivered contribution/shipment, wholesale reorder) + a money strip below. **Cadence:** daily ops-health (fulfillment/breakage/stock-outs) · **weekly** operating board → feeds `/weekly-ops-review` · **monthly** money strip + KPI→P&L → finance-ops board pack (draft only).
- **Experiment framework** — with a physical caveat: digital surfaces (PDP, discovery→vessel quiz, **batched-cadence default**, email flow) can be A/B'd via storefront/Klaviyo; **physical variables (scent, vessel, packaging) are validated by pop-ups/pre-sell/sampling, not feature flags** (the skill's PostHog-flag model assumes a digital product). Worked, pre-registered example: *"A quarterly-3-pack default at checkout moves **delivered contribution/shipment** from ≈$0 (single) to ≥$8 without harming **sub-start rate or refund rate**, at 95% within 4 weeks."* One primary (OEC = contribution/shipment), explicit guardrails, sized via `data:statistical-analysis`, decision rule fixed in advance; logged in the Airtable experiment register.
- **Governance:** consent-gated (GA4/Klaviyo fire post-consent; respect DNT); **no PII in events (UUIDs/bands)**; DPAs with Shopify/Klaviyo/GA4; DSAR/deletion wired **through Shopify + Klaviyo** tooling; retention schedule per data class; **no vanity metric as primary** (pageviews → conversion). **HIPAA/PHI is N/A** — but the analog compliance surface is **marketing-claims** (no-medical-claims + FTC Green Guides substantiation + auto-renew disclosure), which is a claims/legal gate (§3), *not* a data-privacy control the skill's governance block covers. Flag both.

**Connect-these / needs-Tony:** GA4 + BigQuery export, Klaviyo (registry OAuth), PostHog (only if needed), later BigQuery + Metabase; confirm DPAs; **run `/metrics-dashboard` to own the north-star** (this section instruments it provisionally).

---

## 6. Support-success — post-sale for a physical product

### 6a. Stack + channels

The method's options (Intercom/Zendesk/Front) are SaaS-support-shaped; the **e-com-native** helpdesk that plugs into Shopify orders/subscriptions is **Gorgias** — recommend it (or an **Airtable base** at sprint volume). Channels: email (founder/CS inbox → **Gmail MCP drafts**), SMS + lifecycle (**Klaviyo**/Twilio), chat widget on the storefront. Ticket store + CS records in **Airtable** (system of record at this stage). Match the venture's real stack — flag, don't assume.

### 6b. Triage → severity → escalation (recast for physical goods)

The method's severity examples are software-outage-shaped ("service down, data loss, core value action broken"). Emberline's **real ticket mix** is physical, and the S1 hard-escalate lane is a **fire/injury/recall** incident — the physical analog of the clinical hard-escalate lane:

| Tier | Emberline definition | First response | Route |
|---|---|---|---|
| **S1 Critical** | **Product-safety event — a fire, a burn/injury, a shattered-in-use vessel; a PII exposure; a payment lockout** | ≤1 hr (24×7) | **Founder + legal + insurer**; open incident; **assess CPSC-report / recall** |
| **S2 High** | Breakage in transit (shattered vessel), wrong/missing item, lost shipment for a paying customer, subscription billing error | ≤4 hrs | Fulfillment/ops; replacement authorized per policy |
| **S3 Normal** | "Where is my package" (WISMO — the #1 e-com ticket), how refills work, skip/swap/cancel, scent question, address change | ≤1 business day | Support; KB-first |
| **S4 Low** | Product/scent request, gift question, cosmetic | ≤2 business days | Feedback register |

**Escalation matrix — the hard lanes the model must never cross:**

| Trigger | Escalate to | Model must NOT |
|---|---|---|
| **Fire / burn / injury / product-safety** | **Founder + legal + insurer** (+ CPSC assessment) | admit fault, promise a remedy, speculate on cause, or discuss publicly |
| **Health/aromatherapy question** ("will this help my anxiety/sleep?") | Answer with **scent description only**; flag to founder | make **any** medical/therapeutic claim (guardrail) |
| Legal threat / liability / regulator | Founder + legal | admit fault or make a legal claim |
| PII exposure | Founder (incident) | expose data or speculate publicly |
| Wholesale churn threat / at-risk hotel account above $ | Founder (relationship) | discount or commit terms |
| A "clean/non-toxic/natural" claim invited | Review before reply | assert an unsubstantiated eco/Green-Guides claim |

Every ticket gets a severity + SLA **before** a reply is drafted.

### 6c. Knowledge base

Category tree (from the real ticket mix): *Getting started (your vessel + first burn) · How refills work + managing your subscription (skip/swap/cancel) · Candle care & safety (ties to ASTM F2058 warnings) · Shipping, tracking & breakage · Returns & warranty (UCC) · Billing & account.* Article template per the method; **KB is self-serve truth, not marketing** — no claim that would need review, no capability the product lacks. Deflect WISMO and subscription-management (the two highest-volume themes) first.

### 6d. Response drafting in-voice

`customer-support:draft-response` in the founder voice (clinical, precise; banned words out). Structure: acknowledge → fix/honest status → one next step. **Draft only** (Gmail/helpdesk). Worked S2 (breakage): *"[Name] — sorry your vessel arrived broken; that's on us, not you. A replacement ships today at no charge and I've added extra protective packaging to your account's future shipments. No need to return the damaged piece. Tracking follows within 24 hours."* No claim, no fault-admission beyond the breakage, one action.

### 6e. Onboarding / activation

**Activation milestone = first burn + first refill re-order** (the "fast visible win → recurring" loop from operating-playbook #5) — measured via Shopify/Klaviyo, reused as the analytics activation definition (§5). Sequence (`step → channel → trigger`, drafts/scheduled with approval): welcome + "how to get the best first burn" (Klaviyo email) → 48h no-first-burn-info nudge → **refill-reminder timed to burn-through** (the key retention touch) → post-first-refill habit email → founder note for high-value/gift buyers. **Activation floor → action:** refill-sub start rate < 40% (01's kill threshold) → rework the vessel→sub prompt + discovery→vessel flow.

### 6f. Customer success — two motions

- **DTC subscribers (the model's core):** health = refill cadence adherence + burn-through vs. reorder timing + support signal + on-time payment. **Red = churn-save on a refill cancellation** — diagnose (scent fatigue → offer a scent swap; too much product → offer a longer cadence; price → the value-per-burn story), no unilateral discount, escalate above a $ threshold. **This replaces "renewal at T-60/T-30"** — DTC refills auto-renew continuously; there is no contract-renewal date, so the motion is **continuous churn-prevention**, not a dated renewal.
- **Wholesale accounts:** health = **reorder cadence + sell-through + on-time net-30 payment** + relationship. **QBR** for hotel/designer accounts (outcomes vs. their goal → sell-through → reorder/expansion ask). Expansion signals: a boutique adding doors, a hotel expanding rooms, a designer starting a new project → the fitting up-ladder offer (highest-fit, not highest-price). "Renewal" = the **next reorder**, tracked in the CRM (§2b).

### 6g. Feedback loop

Theme-tag every ticket (**breakage · WISMO · scent complaint · subscription-management friction · pricing · safety**). Weekly roll-up → product (scent/packaging fixes — e.g. "breakage clusters on the large vessel → repack profile") and → the metrics board as **leading support-signal metrics: breakage rate, WISMO rate, tickets per order, refill-churn reason mix, first-response SLA hit-rate.** Escalations-closed + NRR-analog (retained refill + wholesale reorder revenue) sit in the money strip. Customer data stays in-system; never exported or pasted into drafts/logs.

---

## 7. Guardrails honored

- **Drafts / spec only.** Every CRM sequence, Klaviyo flow, PDP, line sheet, label artwork, support reply, board, and investor/finance package above is a **draft or spec**; nothing is published, sent, or instrumented — no email/SMS auto-fires, no listing goes live, no analytics event wires — without Tony's explicit approval.
- **No spend / $0 default — with the one honest exception 01 already escalated.** This is the rare venture that cannot be validated at literal $0 (ceramic MOQ + product-liability insurance + burn testing precede any sale). The ops layer commits **$0** on its own; every account creation, app connect, vendor commitment, and MOQ purchase is flagged **[approval: Tony]** with a rollback path.
- **Secrets are names-only.** Every credential (Shopify Admin/API token, Skio/Klaviyo/Faire/3PL keys, bank, QBO/A2X) is referenced by **name only**; real values live in env/vault, never printed/logged/committed, rotated on exposure or offboarding. The access register records access levels, never keys.
- **No medical / aromatherapy claims.** Hard gate at every copy, label, PDP, sequence, and support reply — no "stress," "sleep," "purify," "wellness," "aromatherapy benefit." Scent described sensorially only. Banned-word list (00 + voice-and-brand) enforced.
- **Human-gate irreversible / production actions.** MOQ purchases (8–12 wk lead), the co-manufacturer/lease/3PL contracts, going live on Shopify, any live customer send, any spend, and **any product-safety/recall action** are stopped and escalated to Tony with a stated rollback path — never taken unattended. **Product-safety sign-off (burn testing) is a hard gate before a SKU sells.**
- **LYV firewall.** Wholesale CRM is never sourced/enriched from LYV mailboxes, relationships, or lists; ambiguous origin = LYV until Tony confirms.

---

## 8. FRICTION log — where the operations layer strained

Every place an OPERATE skill assumed **SaaS/subscription revenue, deferred SaaS revenue, a digital-only funnel, or a custom app** — and did not fit **inventory / wholesale / retail / physical product-safety**. Skill + specific issue. Findings for the hardening pass, not applied edits.

**finance-ops**
- **P1 — Revenue = Stripe.** Area 4 ("Revenue: Stripe billing / invoicing / AR") and the stack table make **Stripe** the revenue spine. Emberline's processor is **Shopify Payments**; Stripe never appears. A builder following the skill wires Stripe billing that conflicts with the commerce layer (matches 03 F16).
- **P2 — Subscription = Stripe Billing / MRR.** The recurring engine is a **Shopify commerce-subscription app (Skio/Recharge) on the order**, not Stripe Billing seats. The KPI→P&L bridge example ("north-star → engaged users → subscription **MRR**") is a SaaS chain; Emberline's is refill retention → retained refill revenue.
- **P3 — Deferred revenue / ASC 606 is framed as the rev-rec crux.** Area 4 + the close emphasize "deferred revenue on prepaid terms" and "ASC 606 deferral for multi-month prepaid." For physical DTC, **cash ≈ collected at purchase; deferral barely applies** (only pre-sales + gift cards). The skill spends its rev-rec attention on the wrong problem.
- **P4 — The chart of accounts has no inventory and no cost-of-goods (biggest finance gap).** method §2's COGS examples are hosting/AI/API/payment-processing/delivery-labor — **zero raw-material/WIP/finished-goods inventory assets, zero freight-in, zero landed-cost, zero breakage.** The entire 1200s inventory block and the 5000s cost-of-goods/fulfillment block had to be added. This is the accounting core of a goods business and it is absent.
- **P5 — No cash-conversion-cycle / working-capital-for-inventory model.** Runway is defined as "cash ÷ net burn" and the 13-week as "burn = cash out − cash in" — a SaaS burn-rate lens. Emberline's cash risk is **inventory bought at MOQ 8–12 weeks ahead of a Q4-heavy demand curve** (a strongly positive CCC). No DIO/DSO/DPO, no seasonal working-capital build, no inventory-adjusted runway anywhere in the method.
- **P6 — Tax map is SaaS-shaped.** R&D **§41/§174** (a software feature) is prominent and is **N/A** here; nexus is framed as "**SaaS** is taxable in some states and not others." The real surface is **destination sales tax on physical goods + marketplace-facilitator collection (Faire/Shopify)** — neither concept is in the tax map.
- **P7 — Stack table omits the goods-accounting layer.** No row for a **commerce→ledger bridge (A2X)** or an **inventory/production/landed-cost tool (Katana-class)** — QBO alone can't run perpetual inventory/COGS for a maker.

**sales-crm**
- **P8 — Assumes one CRM is the whole commercial motion.** Emberline's **primary** revenue (DTC refill subscription) is **self-serve commerce (Shopify + Klaviyo)** and never enters a CRM. The skill has no concept of a venture whose main revenue is a digital funnel outside the pipeline; the CRM fits **wholesale only**.
- **P9 — Pipeline stages are B2B-SaaS-shaped.** Demo/Scoping → Proposal → Negotiation with **no sample/line-sheet stage** and — critically — **no reorder motion.** Wholesale value is **repeat reorders**; the skill closes the deal at the opening order and "hands off," with nothing modeling the recurring account.
- **P10 — "Closed-Won = contract executed + first dollar collected" misfits wholesale.** A wholesale opening order is a **PO** (often via Faire), and **net-30 collects the dollar later** (A/R + credit risk). Won must mean *shipped + invoiced/collected*, and net-terms is a credit decision the pipeline doesn't represent.
- **P11 — No marketplace-facilitator channel concept.** **Faire** collects payment + tax, carries buyer-credit risk, and takes commission — the CRM assumes you own the entire funnel and revenue; it can't represent a channel where the marketplace owns part of it (affects both forecast net and tax).
- **P12 — Discount ladder has no keystone-floor / MAP / resale-terms concept.** Wholesale pricing is **keystone (50% off MSRP)** by convention with **MAP enforcement** on resellers — a retail-distribution construct absent from the generic %-discount deal desk.

**legal-pack**
- **P13 — "Consume engineering-backbone §9, don't re-derive" fails for a physical product (biggest legal gap).** §9's regime matrix (GDPR/CCPA · HIPAA · LegitScript · licensure · PCI · SOC2) contains **none** of the regimes that gate Emberline's first sale — **product-liability insurance, ASTM F2417/F2058, FPLA, IFRA, DOT/IATA hazmat, Prop 65, FTC Green Guides.** The instruction to consume §9 cannot produce the actual gating set; it had to be added (matches 03 F13).
- **P14 — Contract library leans SaaS/services (ToS/MSA/SOW) as the near-universal set.** MSA/SOW are **N/A**; the **primary customer contract is Sale-of-Goods (UCC Art. 2)**, not ToS. The skill *does* have a model-specific block (lease/supply/sale-of-goods) — a real strength — but the output contract, templatable-vs-lawyer split, and attorney-gate list are still ToS/MSA/DPA-centric.
- **P15 — No row for a co-manufacturer, 3PL, or fragrance-house supply agreement.** Even the model-specific "Vendor/Supply/Purchase" row doesn't cover **contract-manufacturing (batch/lot, recall, product-liability indemnity, IP-of-formula)**, **3PL fulfillment (breakage/loss liability)**, or **IFRA-cert + SDS delivery duties** — the core physical-goods supply-chain contracts.
- **P16 — Subscription-commerce consumer law is buried.** The DTC refill auto-renewal triggers **CA ARL + FTC Negative-Option / "Click-to-Cancel"** (disclosure, affirmative consent, easy cancel). The skill mentions "auto-renew statutes" only in passing under a goods row; for a subscription-DTC brand it is a first-class gating regime.
- **P17 — Product-liability insurance treated as a setup/finance item, not a legal launch gate.** For a fire-risk product it is a **hard dependency before first sale** (01), but neither §9 nor the legal method surfaces insurance as a gate.

**org-roles**
- **P18 — No physical-production / fulfillment function.** The seven functions collapse manufacturing (pour studio), **QA/burn-test safety gate**, pick-pack, and inventory into "Product/engineering," framed as software. **Pouring, packing, and fulfillment are hands-on hourly labor** — a distinct function (and the likely first hire) with no slot in the org model.
- **P19 — Permissions matrix lists the wrong stack and has no physical-access dimension.** The §10 matrix names GitHub/Supabase/Vercel/Stripe/Twilio/PostHog — none used here (matches 03 F17). Beyond swapping in Shopify/Skio/Klaviyo/Faire/3PL, the matrix has **no concept of physical access** — pour-studio keys, inventory/finished-goods storage, authorization to sign for MOQ deliveries — which least-privilege must also govern.
- **P20 — RACI default processes are software processes.** "Deploy to prod / Sev-1 outage / product release" don't exist; the real recurring processes — **burn-test sign-off (a new *safety* gate class), batch/lot record, MOQ reorder purchase, breakage-aware pick-pack, wholesale fulfillment + net-30, product-safety/recall response** — have no template rows, and "incident response" means a software outage, not a product-safety incident.
- **P21 — Offboarding revoke is digital-only.** The 24h checklist revokes tokens and rotates shared secrets but has **no physical-key/badge recovery or studio/storage-access removal** step — a real offboarding gap for a premises-based venture.
- *(Strength: the hiring kit — scorecard/Who/topgrading — the bus test, and the four-tests hiring logic transfer cleanly; org-roles is the best-fitting skill once tools + the physical dimensions are added.)*

**analytics-stack**
- **P22 — "Product analytics = a product SDK on your app" has no target.** There is **no app** — the digital surface is a **storefront + email**. The core value action (a candle burning; a refill re-order) is **physical/commerce**, so the product-analytics layer is **Shopify + Klaviyo events consumed**, not an SDK you instrument. The whole `object_action` event-design + identify/super-property model assumes emission you control.
- **P23 — Money strip defaults to MRR / NRR.** Pulled from finance-ops as "Engaged MRR, NRR, CAC-payback" — **SaaS metrics.** A goods brand's money strip is **retained refill revenue, repeat-purchase rate, contribution LTV, wholesale reorder revenue** — none of which are MRR/NRR.
- **P24 — Governance is data-privacy-only; the real analytics-adjacent compliance surface is marketing-claims.** The governance block is consent/PII/PHI/DPA/retention with a heavy **HIPAA** thread (N/A — no health data). Emberline's analog gate is **claims substantiation (no-medical-claims + FTC Green Guides) + auto-renew disclosure** — a marketing/claims-compliance lane the skill's governance has no room for.
- **P25 — Experiment framework assumes a flag-gatable digital product.** PostHog feature-flag A/B tests fit storefront/email, but **physical variables (scent, vessel, packaging) are validated by pop-ups/pre-sell/sampling**, which the framework can't represent.
- **P26 — Broken dependency (not SaaS-specific).** Load-first #3 requires a `/metrics-dashboard` output; **none exists in this run**, so the north-star had to be derived provisionally. The skill correctly says "run `/metrics-dashboard` first" — flagged.

**support-success**
- **P27 — Helpdesk options are SaaS-support-shaped.** Intercom/Zendesk/Front are named; the **e-com-native helpdesk (Gorgias)** that integrates Shopify orders/subscriptions/refunds is absent — the natural pick for this archetype.
- **P28 — S1 hard-escalate lane is modeled on clinical, not product-safety.** The escalation matrix has clinical/legal/security/churn triggers but **no fire / burn / injury / recall lane** — which is Emberline's true S1 (product-liability + potential CPSC report). This is the physical analog of the food-safety/health-code + injury lane a restaurant would need, and it is missing.
- **P29 — Severity examples are software-outage-shaped.** "Service down / data loss / core value action broken" don't map; the real ticket mix — **breakage in transit, WISMO (the #1 e-com ticket), wrong/missing item, subscription skip/swap/cancel, returns/warranty** — has no representation in the tiers.
- **P30 — CS renewal motion assumes dated contracts.** "Renewal at T-60/T-30, contract runway, NRR" fits B2B-SaaS. **DTC refills auto-renew continuously (no renewal date → continuous churn-prevention), and wholesale "renews" as the next on-demand reorder** — neither is a dated renewal cycle.

**Systemic pattern.** All six OPERATE skills share the build layer's root assumption (03 §6): the business is **recurring digital revenue on a custom app.** So finance defaults to MRR + Stripe + deferred-revenue and omits inventory/COGS/working-capital; CRM assumes one funnel it owns; legal's compliance source omits physical-product safety; org models software roles/tools; analytics instruments an SDK against an MRR strip; support triages software outages and clinical questions. For a physical DTC+wholesale brand the operate layer's real spine is **inventory + landed COGS + a cash-conversion cycle, two parallel motions (self-serve DTC + relationship wholesale with reorders), a physical-product-safety/recall regime, physical production + fulfillment as an org function, commerce-event analytics on a goods money strip, and breakage/WISMO/safety support** — each only partially expressed by the current skills. **Highest-value fixes:** give **finance-ops** an inventory/COGS/cash-conversion module + a non-Stripe commerce-revenue path; give **legal-pack**/`engineering-backbone §9` a **physical-product compliance regime** row-set with insurance-as-gate; give **sales-crm** a **wholesale/marketplace + reorder** motion distinct from the DTC self-serve funnel; and give **org-roles**/**support-success** a **physical-production + product-safety** dimension (function, RACI gate, access, and S1 escalation lane).
