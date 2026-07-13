# /finance-ops — Full method, stack map & worked example

One level deep; does not fan out further. Lenses: accrual GAAP for the book of record, direct-method cash for survival, driver-based FP&A for forecasting, business-model-conditional treatment (read the venture's archetype first — subscription/SaaS is one archetype, not the default), and Tony's economics-before-build rule (the model is *consumed* from `/offer-architect`, never re-invented here).

## Principle

Finance is an instrument, not a scoreboard. Two truths, always held together:
- **Accrual books** answer *does the business work?* — revenue earned, costs matched, margin real.
- **Cash** answers *does the business survive?* — a profitable company with an empty account is dead.

Every deliverable therefore ships both a P&L view and a runway/cash view. And this skill is not a CPA: it produces finished, review-ready work and marks the exact points a licensed professional must sign off. It never files, never sends, never spends.

---

## First, read the money model — then pick the treatment

Before any COA, model, or cash view, read the venture's **business model** from the venture context (Load-first #2/#3). It is the single input that decides the accounting treatment, the unit-economics vocabulary, and how cash behaves. **Subscription/SaaS is one archetype, not the default.** A venture can also **blend** archetypes — a physical brand with subscription refills is *goods + subscription*; an agency with a productized retainer is *services + subscription* — so apply each block where it fits.

| Archetype | Revenue engine | COA it needs (beyond the base) | Money model (unit economics) | How cash behaves |
|---|---|---|---|---|
| **Subscription / SaaS** | recurring plans, prepaid terms | **Deferred revenue** (liability); digital COGS | MRR/ARR, gross + net churn, LTV, CAC payback, NRR | cash often collected *ahead* of earning; runway ≈ cash ÷ burn |
| **Goods** (DTC / wholesale / retail) | sell physical units | **Inventory** (asset); goods-COGS (materials, freight-in, duty, landed cost, production labor); fulfillment (pick-pack, shipping, breakage) | AOV, repeat/reorder rate, **contribution margin after COGS + fulfillment**, blended CAC / MER, payback | cash **tied up in inventory** — the cash-conversion cycle, not burn, is the survival number |
| **Services** (agency / consulting / studio) | bill time or scope | **WIP / unbilled revenue** (asset); retainer deferred revenue; labor-COGS (delivery staff, subcontractors) | utilization, billable rate, **realization**, effective gross margin per delivery hour | collections lag delivery — DSO on receivables is the pinch |
| **Marketplace / platform** | take-rate on third-party GMV | **Payouts payable** (liability — money held for sellers); net-vs-gross revenue split; facilitator sales-tax liability | GMV, take rate, **net revenue** (not GMV), both-sided retention, liquidity | seller money flows *through* you — payout float is not your cash |

Read the archetype, select the matching blocks in areas 1, 2, 4, 6, 7, and 9 below, and state which you applied. Everything else in this method is shared.

---

## The ten areas — what to do, the tool + MCP, and the judgment flag

### 1. Financial model + unit economics
Consume the venture's closed economics (Load-first #3 — the `/offer-architect` output, or the economics already closed in the venture's existing model/context for a live venture). Do **not** re-derive them. **First pick the money model for the venture's archetype** (the table above) — don't default to MRR/subscription:
- **Subscription / SaaS:** MRR/ARR, gross & net churn, LTV, CAC payback, LTV:CAC, NRR.
- **Goods:** AOV, units, repeat/reorder rate, **contribution margin after COGS *and* fulfillment** (not gross margin alone), blended CAC (MER), payback on the first order vs on LTV.
- **Services:** utilization, billable rate, **realization** (billed ÷ standard), effective gross margin per delivery hour, revenue per head.
- **Marketplace:** GMV, take rate, **net revenue** (take-rate × GMV — never book GMV as revenue), both-sided retention, contribution after payment + support cost.

Then build:
- **Unit economics block** per revenue line, in the archetype's vocabulary (goods: price → landed COGS → fulfillment → contribution margin → CAC → payback; subscription: price → COGS → gross margin → LTV → CAC payback → LTV:CAC).
- **Driver-based 12-month P&L**: revenue by line built on the archetype's driver — units × AOV × repeat, or subscribers × price × retention, or GMV × take rate, or billable hours × rate × realization — then COGS, gross profit, OpEx by category, EBITDA, net. Every projected cell references a labeled assumption cell — never a hardcoded literal mid-row.
- Three scenarios (base / best / worst) driven off the same assumption block.
- **Tool:** `xlsx` skill (the model workbook). **Data:** the system of record for actuals — Stripe (subscription), the commerce platform / POS (goods), the PSA/time system (services), the marketplace ledger (GMV/payouts). **MCP:** Airtable — the living assumptions log so drivers aren't buried in a cell.
- **Flag:** the single most-sensitive driver (from `/offer-architect`) is the number to protect; state it (subscription: churn; goods: repeat rate / landed margin; services: utilization; marketplace: take rate / liquidity).

### 2. Chart of accounts + bookkeeping method
A numbered COA scales cleanly and maps 1:1 to statement lines. **The COA is business-model-conditional:** start from the base, then add the block(s) for the venture's archetype(s). Don't ship a SaaS COA for a goods business.

**Base COA (every venture):**

| Range | Class | Always includes |
|---|---|---|
| 1000–1999 | **Assets** | Operating cash · Tax-reserve cash · Accounts receivable · Prepaid expenses · Payment-processor clearing / undeposited funds · Fixed assets · Accum. depreciation |
| 2000–2999 | **Liabilities** | Accounts payable · Corporate-card payable · Accrued expenses · Payroll liabilities · **Sales-tax payable** |
| 3000–3999 | **Equity** | Common stock / members' capital · Additional paid-in capital · Retained earnings · Distributions |
| 4000–4999 | **Revenue** | One line per revenue stream · Discounts/refunds (contra) |
| 5000–5999 | **COGS / cost of revenue** | Payment processing · direct delivery cost (archetype-specific, below) |
| 6000–6999 | **OpEx** | Payroll · contractors · software · marketing/ads · professional fees · bank/card fees · insurance · D&A |
| 7000–8999 | **Other** | Interest income · interest expense · income tax |

**Then add by archetype:**

- **Subscription / SaaS** — *Assets:* capitalized software. *Liabilities:* **Deferred revenue** (current + long-term) — prepaid/annual terms are a liability that releases as earned. *COGS:* hosting/infra · AI/API · third-party data/lab costs · delivery labor.
- **Goods (DTC / wholesale / retail)** — *Assets:* **Inventory** (split *raw materials · WIP · finished goods* if you manufacture; else finished goods) · inventory in-transit · **vendor deposits / prepaid inventory** (POs paid before goods land). *COGS:* **product/materials · freight-in (inbound) · duty & tariffs → all capitalized into landed finished-goods cost** · production/assembly labor. *Fulfillment* (own 5x00 block): pick-pack · outbound shipping · packaging · **breakage/shrinkage/returns provision** · 3PL/warehouse fees · merchant fees. *Contra-revenue:* returns & allowances. *(A subscription-refill brand blends this with the subscription block — inventory **and** deferred revenue.)*
- **Services (agency / consulting / studio)** — *Assets:* **WIP / unbilled revenue** (work performed, not yet invoiced) · **retainer/deposit deferred revenue** (liability, collected ahead of delivery). *COGS:* **direct labor** (delivery staff/freelancers on client work) · subcontractor cost · project pass-throughs.
- **Marketplace / platform** — *Liabilities:* **Payouts payable / seller balances** (money collected on sellers' behalf — a liability, *not* revenue) · **sales tax collected as marketplace facilitator** (remit on sellers' behalf). *Revenue:* recognize **net revenue = take rate × GMV** if you're an *agent*; book GMV gross with an offsetting seller-payout cost only if you're the *principal*. *COGS:* payment processing on the *full* GMV · fraud/chargeback · buyer-side support.

- **Method:** **accrual (GAAP)** is the book of record for any venture with prepaid terms, deferred revenue, **inventory**, WIP, or investors; keep a cash view alongside for survival. Cash-basis is defensible only for the tiniest pre-revenue setups. **Inventory ventures must use accrual** — expensing inventory as bought misstates margin and hides the working-capital problem.
- **Inventory bookkeeping (goods only):** pick a costing method (**FIFO** or **weighted-average**; specific-ID for high-value SKUs) and perpetual vs periodic tracking; capitalize inbound freight + duty into **landed cost**, don't expense them as period OpEx; book COGS as inventory **sells**, not as it's **bought**.
- **Tool:** the ledger's native COA (QBO/Xero); `finance:journal-entry` for accruals/deferrals **and inventory/COGS entries**. For goods, a commerce/inventory system feeds the ledger (see area 4). **MCP:** none native here.
- **Flag (CPA):** the accrual-vs-cash election; the **ASC 606 revenue-recognition policy** (when revenue is *earned* — including **principal-vs-agent** for marketplaces and **over-time vs point-in-time** for services); and the **inventory costing method + landed-cost capitalization** for goods. Draft the policy, don't set it unilaterally.

### 3. Accounting stack (QuickBooks vs Xero) + how it connects
Recommend one and draw the integration graph.

| | **QuickBooks Online** (default for US) | **Xero** |
|---|---|---|
| Best when | US venture, CPA-standard, deepest app ecosystem | multi-entity / international-leaning, strong bank-feed UX, unlimited users |
| Stripe | native + connectors (A2X, Synder) for clean payout→deposit mapping | native + connectors |
| Payroll / AP / cards | Gusto, Bill.com, Ramp/Brex all integrate | integrates; slightly fewer US-first apps |

**Default recommendation: QuickBooks Online** for a US venture — it's what the venture's CPA will already use, which lowers close friction and audit cost. Choose **Xero** if multi-entity/international is on the near roadmap.

**Integration graph (the money's path):**
```
Bank (Mercury/Relay) ──feed──▶ Ledger (QBO/Xero) ◀──sync── Stripe (billing, invoicing)
        ▲                          ▲        ▲                        │
        │                          │        │                        └─ payout → bank
   Payroll (Gusto) ────────────────┘        └──── Cards/AP (Ramp/Brex/Bill.com)
```
- **Tool:** QBO/Xero. **MCP:** **no first-party QBO/Xero MCP connected in this environment — surface to Tony to connect** (check `SearchMcpRegistry`). Until connected, Stripe + Airtable (MCP) + the `xlsx` model + the `finance:*` skills are the working layer.
- **Flag (CPA/controller):** chart-of-accounts finalization and the connector's revenue-mapping rules should be reviewed before the first close so Stripe activity lands in the right accounts.

### 4. Revenue: billing, collections, AR, and the revenue→ledger bridge
Wire the revenue channel the venture's model actually uses, then bridge it into the ledger:
- **Subscription / SaaS** — **Stripe Billing** (recurring + one-time, self-serve) / **Stripe Invoicing** (B2B on Net-15/30 terms, dunning). Prepaid annual or multi-month cohorts are **deferred revenue**, released as earned — never day-one revenue.
- **Goods** — the **commerce platform is the revenue system of record** (Shopify / Amazon / retail POS / wholesale), not Stripe alone. Bridge orders → ledger via **A2X or a native connector** so each payout maps to gross sales, discounts, shipping income, **sales tax collected (a liability, not revenue)**, and processor fees — and so **COGS is booked against inventory as units ship**. Wholesale bills on terms; DTC collects at checkout.
- **Services** — invoice on milestone / retainer / T&M; retainers collected upfront are **deferred revenue**; work delivered but not yet billed is **WIP / unbilled** (accrue it).
- **Marketplace** — you collect **gross GMV** but only **take-rate is your revenue**; the rest is **payouts payable** to sellers. Reconcile GMV in → platform fee (revenue) + seller payout (liability settled) + processing cost.
- **AR aging** — open invoices bucketed 0–30 / 31–60 / 61–90 / 90+ with a per-bucket follow-up cadence (drafts only). Heaviest for services + wholesale (terms); light for DTC/self-serve (collected at sale).
- **Tool:** Stripe (subscription/invoicing) · commerce platform + A2X (goods) · marketplace ledger. **Skills:** `finance:reconciliation` (payout → bank deposit → GL — payouts land **net of fees** and **cross period-ends**, the #1 recurring rec), `finance:journal-entry` (deferred-revenue + WIP schedules).
- **Flag (CPA):** ASC 606 — deferral schedules (subscription/retainers), **principal-vs-agent** (marketplace gross-vs-net), **over-time vs point-in-time** (services).
- **Guardrail:** processor/platform keys live in env only — never echoed. Customer-facing dunning copy is a draft until approved.

### 5. AP / expenses / corporate cards
- **Corporate cards + expense management:** **Ramp** or **Brex** — issue cards, capture receipts, auto-categorize, enforce policy. **Bill.com** for heavier vendor AP with approval routing.
- **Approval gate:** every bill and card charge above a threshold routes for approval before payment. This encodes the guardrail — **no spend without approval; $0 on unvalidated ideas**.
- **Tool:** Ramp/Brex/Bill.com. **MCP:** none connected here — flag to connect; use **Airtable (MCP)** as the interim approval/expense log so the control exists from day one.
- **Flag (controller):** capitalize-vs-expense policy for larger purchases and any software development costs.

### 6. Payroll + contractor payments + taxes
The heaviest review surface in the function.
- **Payroll + contractors:** **Gusto** (US W-2 payroll, benefits, automatic payroll-tax filing, 1099 contractor pay + year-end forms). **Deel** for international contractors/EOR.
- **Taxes — jurisdiction-specific, and what's taxable depends on the model:**
  1. **Sales / transaction tax — nexus + taxability, both model-dependent.** Economic nexus thresholds vary by state (a common trigger is ~$100k revenue *or* ~200 transactions, but it varies and changes). *What* is taxable differs by archetype: **tangible goods are taxable in nearly every state** — destination-based, at the *ship-to* state's rate; **SaaS is taxable in some states and not others**; **services are mostly exempt but taxable in some states for some categories.** **Marketplace facilitator:** if you *sell through* a marketplace (Amazon/Etsy), it likely collects & remits for you; if you *are* the marketplace, you may be the **facilitator obligated to collect & remit on your sellers' behalf** (booked as a liability — area 2). Register only where nexus exists. **Tool:** **Anrok** (SaaS-focused) or **Avalara / TaxJar** (goods/omni-channel) — tracks nexus, applies destination rates, files. **MCP:** none here — flag.
  2. **Income tax** — federal + state, entity-dependent (pass-through LLC vs C-corp). Requires quarterly estimates.
  3. **R&D (only if the venture actually does qualifying research)** — the **§41 R&D credit** can offset payroll tax for a venture doing qualified research (typically software/product engineering); **§174 requires capitalizing and amortizing R&D costs** rather than expensing. **N/A to most goods / services / marketplace ventures** — don't foreground it unless there is genuine development spend. CPA-computed when it applies.
- **Flag (CPA + jurisdiction, mandatory):** nexus + taxability determination, entity/income-tax strategy, and (where relevant) §41/§174 treatment are **not** to be decided here. Draft the map of *where* obligations likely exist — naming the states — and route to the CPA.
- **Guardrail:** payroll/tax-account credentials in env only; never expose employee/contractor PII.

### 7. Cash management, runway, working capital & 13-week cash flow
- **Account structure:** operating account + a **tax-reserve account** (sweep an estimated % of collections aside so tax season isn't a cash shock) + optional treasury/savings for idle cash.
- **Runway** = current cash ÷ average net monthly burn (burn = cash out − cash in). Report it in months, with the date cash hits zero. **This is sufficient only for asset-light models (subscription / services).**
- **Working capital & the cash-conversion cycle (goods — any inventory venture): `cash ÷ burn` is the wrong survival number.** Cash is tied up in stock, so a *profitable, growing* goods business can still run out of cash — it must pay for the next (larger) purchase order **before** it collects on the last one. Track the **cash-conversion cycle: CCC = DIO + DSO − DPO** (days inventory held + days to collect receivables − days of supplier credit). Model the **working-capital gap** — cash committed to open POs, vendor deposits, in-transit inventory, and safety stock that won't convert to cash until sold *and* collected. Runway for a goods venture must **net out committed inventory outflows**, not just operating burn: surface "cash after funding the next PO," not only "cash ÷ burn."
- **13-week direct cash flow (TWCF):** a rolling, weekly, cash-in/cash-out forecast — the survival instrument. Beginning cash → operating collections (payouts + invoice payments + POS/commerce settlements, *timed* to when cash actually lands) → outflows (payroll, contractors, tools, ad spend, taxes, pro fees, **and — for goods — inventory/PO payments, vendor deposits, duty & freight**) → net → ending cash. Roll forward one week each week. For goods, put **PO commitments and their payment dates on the TWCF** — they're the biggest, lumpiest outflows.
- **Tool:** `xlsx` skill (the 13-week model + runway + CCC). **Data:** the revenue system of record (inflows), bank feed (actuals), the PO/inventory ledger (committed outflows). **MCP:** Airtable — the weekly cash + open-PO log.
- **Flag:** distinguish accrual profit from cash — a profitable month can be cash-negative when deferred revenue was collected in a *prior* period, or (goods) when cash just went into inventory that hasn't sold. For goods, **flag the working-capital-funding decision** (inventory financing / larger reserve) to Tony + CPA.

### 8. FP&A: budget vs actual, forecasts
- **Annual budget** built off the model's driver assumptions, phased by month.
- **Budget vs actual (BvA)** monthly: actual − budget per line, with **variances decomposed to drivers** (a revenue miss = volume vs price vs mix; a cost overrun = rate vs usage). Narrative, not just numbers.
- **Rolling forecast** re-based on actuals so the outlook stays honest as the year progresses.
- **Tool:** `finance:variance-analysis` (driver decomposition, waterfall, materiality thresholds, commentary) + `xlsx` (the BvA workbook). **MCP:** Airtable to capture actuals if the ledger isn't connected.
- **Flag:** set a **materiality threshold** (e.g., explain any line off by >10% and >$X) so the analysis targets what matters.

### 9. Board / investor reporting + KPI-to-P&L link
- **Monthly package:** P&L (actual vs budget) + balance sheet + cash/runway + the KPI section from `/metrics-dashboard`.
- **The KPI→P&L bridge — in the archetype's money model, not a default MRR strip.** Show how the operating metric *becomes* a financial line; the chain depends on the model:
  - **Subscription:** north-star activity → engaged users → **MRR/ARR → NRR** → the revenue line.
  - **Goods:** sessions → conversion → orders × **AOV** → **repeat rate** → net revenue, with **contribution margin** after COGS + fulfillment.
  - **Services:** pipeline → bookings → **utilization × billable rate × realization** → recognized revenue.
  - **Marketplace:** active buyers/sellers → **GMV × take rate → net revenue**, with both-sided retention.
  Investors fund the leading metric because it predicts the lagging dollars — pick the leading metric that actually drives *this* venture's revenue.
- **Tool:** `finance:financial-statements` (GAAP-presented statements, period-over-period, variance flags). **Deck:** `pptx` skill or **Canva (MCP)**. **Send:** **Gmail (MCP)** — **draft only**, never auto-sent.
- **Flag (controller):** statements are review-ready drafts; a controller/CPA signs off before anything reaches a board or investor.
- **Reconcile with `/metrics-dashboard`:** the money-strip KPI names here must match the ones `/metrics-dashboard` defines for the venture's archetype (both read the same archetype from the venture context) — same metric, same definition, no drift between the dashboard and the board P&L bridge.

### 10. Banking + entity / cap-table finance touchpoints
- **Banking:** startup-friendly (**Mercury**, Relay) for sub-accounts, virtual cards, treasury sweep, and clean API/feed; or a traditional bank at scale. Separate operating vs tax-reserve (area 7).
- **Entity:** LLC (pass-through, simple) vs **C-corp** (required for priced venture rounds; enables **QSBS** — potential capital-gains exclusion on qualifying C-corp stock held 5+ years). Finance flags the trade-off; the choice is legal + CPA.
- **Cap table:** **Carta** or **Pulley** — equity ledger, option grants, **83(b)** election tracking, safe/round modeling. The cap table and the P&L meet at stock-based-compensation expense and at fully-diluted ownership in the board package.
- **Tool:** Mercury/Relay; Carta/Pulley. **MCP:** none connected here — flag. **Hand-off:** `setup-checklists` (banking/entity/payments checklists) + `legal-pack` (operating agreement, equity docs).
- **Flag (CPA + attorney):** entity election, QSBS eligibility, 83(b) timing (a 30-day IRS clock), and stock-comp accounting.

---

## The stack at a glance (function → tool → MCP → status here)

| Function | Recommended tool | MCP available here? | If no MCP |
|---|---|---|---|
| Model / cash-flow / BvA | `xlsx` skill | ✅ skill | — |
| Assumptions / trackers / logs | Airtable | ✅ **Airtable MCP** | — |
| Billing / invoicing / AR / revenue data | **Stripe** (subscription/invoicing) | ✅ Stripe (integration) | — |
| Commerce / revenue system of record (goods) | Shopify / Amazon / POS + A2X bridge | ❌ | connect; interim = commerce export + Airtable |
| Inventory / COGS / fulfillment (goods) | IMS / 3PL / ShipStation | ❌ | flag to connect; interim = Airtable inventory + open-PO log |
| Close / recs / JEs / statements / variance | `finance:*` skill pack | ✅ skills | — |
| General ledger | QuickBooks Online (or Xero) | ❌ | connect via `SearchMcpRegistry`; interim = Stripe + Airtable + xlsx |
| Payroll + contractors | Gusto (Deel intl) | ❌ | flag to connect |
| AP / expenses / cards | Ramp / Brex / Bill.com | ❌ | interim = Airtable approval log |
| Sales tax / nexus | Anrok (SaaS) / Avalara / TaxJar (goods) | ❌ | flag to connect |
| Banking | Mercury / Relay | ❌ | flag to connect |
| Cap table | Carta / Pulley | ❌ | flag to connect |
| Board deck / investor update | `pptx` skill / Canva / Gmail | ✅ (Canva, Gmail MCP) | Gmail = draft only |

`finance:*` skill pack used: **close-management** (the close calendar), **reconciliation** (bank/Stripe/GL recs), **journal-entry** (accruals, deferrals, depreciation), **financial-statements** (GAAP P&L / BS / CF), **variance-analysis** (BvA driver decomposition), **audit-support** (control/workpaper readiness). Every one of these states it does not provide financial advice — consistent with this skill's CPA-review flags.

---

## The monthly close checklist (the operating rhythm)

Sequenced; each step names its `finance:*` skill. Target: books closed by business day 5–7, review-gated before anything external.

| Day | Step | Skill / tool | Gate |
|---|---|---|---|
| Ongoing | Categorize transactions, capture receipts, keep AR/AP current | Ledger + Ramp/Bill.com | — |
| D1 | **Cutoff.** Pull month's Stripe payouts + bank + card statements | Stripe, bank feed | — |
| D1–2 | **Reconcile** Stripe payout→bank→GL, bank, and card accounts | `finance:reconciliation` | recs must tie |
| D2–3 | **Revenue rec** — release/roll deferred revenue for prepaid terms; accrue WIP/unbilled (services); review AR aging | `finance:journal-entry` | *CPA: ASC 606* |
| D2–3 | **Inventory & COGS** (goods) — reconcile inventory on-hand, book COGS for units shipped, capitalize landed cost, provision shrinkage/returns | `finance:journal-entry` + `finance:reconciliation` | *CPA: costing method* |
| D3 | **AP + prepaids** — accrue unpaid bills; amortize prepaids; reclass card spend | `finance:journal-entry` | — |
| D3–4 | **Payroll** — book payroll, benefits, and contractor accruals | `finance:journal-entry` | — |
| D4 | **Depreciation / amortization** — fixed assets + capitalized software (§174, if applicable) | `finance:journal-entry` | *CPA: §174 (if R&D)* |
| D4–5 | **Balance-sheet recs** — prepaids, fixed assets, deferred revenue, sales-tax payable, equity | `finance:reconciliation` | all accounts recd |
| D5 | **Financial statements** — P&L, balance sheet, cash flow, period-over-period | `finance:financial-statements` | — |
| D5–6 | **Budget vs actual** — variances decomposed to drivers, commentary | `finance:variance-analysis` | materiality set |
| D6 | **Cash / runway** — refresh runway + roll the 13-week forecast one week | `xlsx` + Airtable | — |
| D6–7 | **Board/investor package** — assemble; KPI→P&L bridge | `finance:financial-statements` + `pptx`/Canva | **draft only** |
| D7 | **Review gate** | — | **controller/CPA sign-off before filing or sending** |

Audit readiness runs in parallel via `finance:audit-support` — keep workpapers and support so a future diligence or audit isn't a scramble.

---

## Worked example A — Executive Edge OS (the subscription / SaaS archetype, abridged)

**Input:** stand up finance for Executive Edge (health-tech SaaS, solely owned, live revenue, US). **Archetype: subscription/SaaS.** Economics consumed from EE's existing financial model + venture context (its closed economics — the `/offer-architect` equivalent for a live venture); KPIs from `/metrics-dashboard` (WAPA north-star, Engaged MRR / NRR / CAC-payback money strip).

- **COA:** revenue split to match the actual lines — 4000 Subscription ($99/mo), 4010 Unlock ($199 one-time), 4020 Flagship ($4,997), 4100 Cohort (B2B $30–48k), 4110 License setup ($15k), 4120 License recurring ($1.5k/mo), 4200 Rev-share/referral. COGS carries 5000 Hosting (Supabase/DO), 5010 AI (Anthropic), 5020 Labs (Junction/Quest), 5030 Stripe fees, 5040 Clinical/coach delivery labor.
- **Model:** driver-based P&L off the ladder + B2B pricing; ~80% software gross margin, cohort margin lower for manual quarterly-report delivery labor. Most-sensitive driver flagged = **B2B cohort close rate** (the sprint's whole thesis) and **subscription churn** (LTV lever).
- **Stack:** QuickBooks Online (US, CPA-standard); Stripe LIVE already in place → QBO; Gusto for any payroll/contractors; Ramp for cards; Anrok for SaaS sales-tax nexus (EE sells SaaS across states — nexus is live the moment thresholds trip); Mercury operating + tax-reserve; Carta if equity is issued. **Deferred revenue** is material — 6-month cohorts collected upfront release over the term.
- **Close:** the Day-1..Day-7 checklist above; the Stripe-payout→bank rec is the workhorse.
- **Cash/runway:** operating cash ÷ net monthly burn; 13-week rolling forecast timing Stripe payouts and B2B invoice collections against payroll/tools/ad spend; tax-reserve sweep on collections.
- **CPA flags raised:** ASC 606 deferral on cohorts/annual; **sales-tax nexus + SaaS taxability by state** (register where nexus trips); §41/§174 R&D on the platform build; entity/QSBS if a raise is contemplated. All routed to CPA, none decided here.

Full deliverable: `ventures/executive-edge/outputs/finance-setup.md` + `ee-financial-model.xlsx`.

---

## Worked example B — a physical-goods DTC brand with subscription refills (the goods archetype)

**Input:** stand up finance for a premium refillable physical-product brand (US, DTC + wholesale, pre-launch): a durable unit bought once, then consumable refills reordered on subscription. Economics consumed from `/offer-architect` (landed unit cost, AOV, target repeat rate, contribution margin, blended CAC). **Archetype: goods + subscription** (a blend — inventory *and* deferred revenue).

- **COA:** base + **goods block** + **subscription block**. Assets carry **1300 Inventory — finished goods**, **1310 Inventory in-transit**, **1320 Vendor deposits / prepaid inventory** (POs paid before goods land). COGS carries **5000 Product/materials**, **5010 Freight-in**, **5020 Duty/tariffs** (all capitalized into landed cost), **5040 Processing fees**, then a fulfillment block **5100 Pick-pack**, **5110 Outbound shipping**, **5120 Packaging**, **5130 Breakage/returns provision**. Liabilities carry **2400 Deferred revenue** (prepaid refill subscriptions) and **2200 Sales-tax payable**. Contra-revenue **4900 Returns & allowances**.
- **Model:** driver-based P&L off **units × AOV × repeat rate**; the money model is **contribution margin after COGS *and* fulfillment** (not gross margin alone) plus **blended CAC / payback** — the durable unit may sell near cost to seed the recurring refill stream, so LTV lives in the refill repeat rate (the flagged most-sensitive driver). Runway is **not** cash ÷ burn: the survival number is the **cash-conversion cycle** and the **working-capital gap** — cash leaves for a PO (with duty + inbound freight) weeks before goods land and months before they sell and collect.
- **Stack:** QuickBooks Online; **Shopify as revenue system of record** bridged to QBO via **A2X** (maps payouts → gross sales, discounts, shipping income, sales tax, fees; books COGS as units ship); an inventory/PO system or an Airtable interim PO log; **Avalara/TaxJar** for destination sales tax (tangible goods taxable in most ship-to states); a 3PL/ShipStation for fulfillment; Gusto, Ramp, Mercury (operating + tax-reserve) as before.
- **Close:** the Day-1..Day-7 checklist, **plus the inventory & COGS step** (reconcile on-hand, book COGS on units shipped, capitalize landed cost, provision returns/shrinkage).
- **Cash/runway:** 13-week TWCF with **PO commitments, vendor deposits, duty/freight on the outflow line**; runway reported as "cash after funding the next PO," and the working-capital-funding decision flagged to Tony + CPA.
- **CPA flags raised:** **inventory costing method (FIFO/weighted-avg) + landed-cost capitalization**; **ASC 606** on prepaid refill subscriptions (deferred); **sales-tax nexus + destination taxability of tangible goods** state-by-state (+ marketplace-facilitator if it also sells on Amazon/Etsy); entity/QSBS if a raise is contemplated. **§41/§174 R&D — N/A** (no qualifying research). All routed to CPA; none decided here.

---

## The tax map (jurisdiction + CPA flags, condensed)

| Tax | Trigger | Tool | Who decides |
|---|---|---|---|
| **Sales / transaction tax** | Economic **nexus** per state (varies; ~$100k/200-txn common but not universal). Taxability is model-dependent: **tangible goods taxable in nearly every ship-to state (destination-based)**; **SaaS varies by state**; **services mostly exempt**. **Marketplace facilitator** collects/remits when you sell *through* one — or obligates *you* when you *are* one. | Anrok (SaaS) / Avalara / TaxJar (goods) | **CPA + state-by-state** |
| **Income tax** | Federal + state; entity-dependent; quarterly estimates | CPA + ledger | **CPA** |
| **R&D (only if qualifying research)** | §41 credit (may offset payroll tax); §174 capitalize + amortize dev costs. **N/A for most goods/services/marketplace ventures.** | CPA | **CPA** |
| **Payroll tax** | W-2 employees; auto-filed | Gusto | Gusto files; CPA reviews |
| **QSBS / equity** | C-corp stock, 5-yr hold; 83(b) 30-day clock | Carta + CPA + attorney | **CPA + attorney** |

The rule across all five: `finance-ops` **maps** the obligation and drafts the readiness; a licensed professional **decides and files**. Name the jurisdiction; never assert a tax position as settled.
