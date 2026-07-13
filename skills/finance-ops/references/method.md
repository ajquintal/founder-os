# /finance-ops — Full method, stack map & worked example

One level deep; does not fan out further. Lenses: accrual GAAP for the book of record, direct-method cash for survival, driver-based FP&A for forecasting, and Tony's economics-before-build rule (the model is *consumed* from `/offer-architect`, never re-invented here).

## Principle

Finance is an instrument, not a scoreboard. Two truths, always held together:
- **Accrual books** answer *does the business work?* — revenue earned, costs matched, margin real.
- **Cash** answers *does the business survive?* — a profitable company with an empty account is dead.

Every deliverable therefore ships both a P&L view and a runway/cash view. And this skill is not a CPA: it produces finished, review-ready work and marks the exact points a licensed professional must sign off. It never files, never sends, never spends.

---

## The ten areas — what to do, the tool + MCP, and the judgment flag

### 1. Financial model + unit economics
Consume the venture's closed economics (Load-first #3 — the `/offer-architect` output, or the economics already closed in the venture's existing model/context for a live venture) — margin, affordable CPA, target AOV, break-even, LTV, self-liquidation. Do **not** re-derive them. Build:
- **Unit economics block** per revenue line: price → COGS → gross margin → CAC → LTV → CAC payback → LTV:CAC.
- **Driver-based 12-month P&L**: revenue by line (volume × price × conversion/retention), COGS, gross profit, OpEx by category, EBITDA, net. Every projected cell references a labeled assumption cell — never a hardcoded literal mid-row.
- Three scenarios (base / best / worst) driven off the same assumption block.
- **Tool:** `xlsx` skill (the model workbook). **Data:** Stripe (actuals to calibrate assumptions). **MCP:** Airtable — the living assumptions log so drivers aren't buried in a cell.
- **Flag:** the single most-sensitive driver (from `/offer-architect`) is the number to protect; state it.

### 2. Chart of accounts + bookkeeping method
A numbered COA scales cleanly and maps 1:1 to statement lines. Standard blocks:

| Range | Class | Examples (tune to the venture) |
|---|---|---|
| 1000–1999 | **Assets** | Operating cash · Tax-reserve cash · Accounts receivable · Prepaid expenses · Stripe clearing / undeposited funds · Capitalized software · Accum. depreciation |
| 2000–2999 | **Liabilities** | Accounts payable · Corporate-card payable · Accrued expenses · **Deferred revenue** (current + long-term) · Payroll liabilities · **Sales tax payable** |
| 3000–3999 | **Equity** | Common stock / members' capital · Additional paid-in capital · Retained earnings · Distributions |
| 4000–4999 | **Revenue** | One line per revenue stream (subscription, one-time, cohort, license, rev-share) · Discounts/refunds (contra) |
| 5000–5999 | **COGS** | Hosting/infra · AI/API · payment processing · direct delivery labor · third-party data/lab costs |
| 6000–6999 | **OpEx** | Payroll · contractors · software · marketing/ads · professional fees · bank/card fees · insurance · D&A |
| 7000–8999 | **Other** | Interest income (treasury) · interest expense · income tax |

- **Method:** **accrual (GAAP)** is the book of record for any venture with prepaid terms, deferred revenue, or investors; keep a cash view alongside for survival. Cash-basis is defensible only for the tiniest pre-revenue setups.
- **Tool:** the ledger's native COA (QBO/Xero); `finance:journal-entry` for manual accruals/deferrals. **MCP:** none native here.
- **Flag (CPA):** the accrual-vs-cash election and the **ASC 606 revenue-recognition policy** (when revenue is *earned* vs *collected*) are a controller/CPA decision — draft the policy, don't set it unilaterally.

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

### 4. Revenue: Stripe billing, invoicing, AR
- **Stripe Billing** — recurring subscriptions + one-time charges (self-serve B2C). **Stripe Invoicing** — B2B deals billed on terms (Net-15/30), with dunning.
- **AR aging** — open invoices bucketed 0–30 / 31–60 / 61–90 / 90+; a follow-up cadence per bucket (drafts only).
- **Revenue recognition** — a prepaid annual plan or a 6-month cohort collected upfront is a **liability (deferred revenue)** that releases to revenue as earned; never book the full cash as revenue on day one.
- **Tool:** **Stripe** (billing/invoicing/AR data). **Skills:** `finance:reconciliation` (Stripe payout → bank deposit → GL — payouts are net of fees and cross period-ends, the #1 recurring rec), `finance:journal-entry` (deferred-revenue schedule).
- **Flag (CPA):** the ASC 606 deferral schedule for multi-month prepaid terms.
- **Guardrail:** Stripe keys live in env only — never echoed. Any customer-facing dunning copy is a draft until approved.

### 5. AP / expenses / corporate cards
- **Corporate cards + expense management:** **Ramp** or **Brex** — issue cards, capture receipts, auto-categorize, enforce policy. **Bill.com** for heavier vendor AP with approval routing.
- **Approval gate:** every bill and card charge above a threshold routes for approval before payment. This encodes the guardrail — **no spend without approval; $0 on unvalidated ideas**.
- **Tool:** Ramp/Brex/Bill.com. **MCP:** none connected here — flag to connect; use **Airtable (MCP)** as the interim approval/expense log so the control exists from day one.
- **Flag (controller):** capitalize-vs-expense policy for larger purchases and any software development costs.

### 6. Payroll + contractor payments + taxes
The heaviest review surface in the function.
- **Payroll + contractors:** **Gusto** (US W-2 payroll, benefits, automatic payroll-tax filing, 1099 contractor pay + year-end forms). **Deel** for international contractors/EOR.
- **Taxes — three fronts, all jurisdiction-specific:**
  1. **Sales tax / nexus** — economic nexus thresholds vary by state (a common trigger is ~$100k revenue *or* ~200 transactions in a state, but it varies and changes); **SaaS is taxable in some states and not others.** Register only where nexus exists. **Tool:** **Anrok** (SaaS-specialized) or Avalara — tracks nexus and files. **MCP:** none here — flag.
  2. **Income tax** — federal + state, entity-dependent (pass-through LLC vs C-corp). Requires quarterly estimates.
  3. **R&D** — the **§41 R&D credit** can offset payroll tax for a qualifying software venture; **§174 requires capitalizing and amortizing R&D costs** (5-year domestic) rather than expensing — a real cash-tax and book difference. Both are CPA-computed.
- **Flag (CPA + jurisdiction, mandatory):** nexus determination, entity/income-tax strategy, and §41/§174 treatment are **not** to be decided here. Draft the map of *where* obligations likely exist and route to the CPA. Name the states.
- **Guardrail:** payroll/tax-account credentials in env only; never expose employee/contractor PII.

### 7. Cash management, runway, 13-week cash flow
- **Account structure:** operating account + a **tax-reserve account** (sweep an estimated % of collections aside so tax season isn't a cash shock) + optional treasury/savings for idle cash.
- **Runway** = current cash ÷ average net monthly burn (burn = cash out − cash in). Report it in months, with the date cash hits zero at the current burn.
- **13-week direct cash flow (TWCF):** a rolling, weekly, cash-in/cash-out forecast — the survival instrument. Beginning cash → operating collections (Stripe payouts + invoice payments, *timed* to when cash actually lands) → outflows (payroll, contractors, tools, ad spend, taxes, pro fees) → net → ending cash. Roll it forward one week each week.
- **Tool:** `xlsx` skill (the 13-week model + runway). **Data:** Stripe (inflows), bank feed (actuals). **MCP:** Airtable — the weekly cash log.
- **Flag:** distinguish accrual profit from cash — a profitable month can still be cash-negative when deferred revenue was collected in a *prior* period.

### 8. FP&A: budget vs actual, forecasts
- **Annual budget** built off the model's driver assumptions, phased by month.
- **Budget vs actual (BvA)** monthly: actual − budget per line, with **variances decomposed to drivers** (a revenue miss = volume vs price vs mix; a cost overrun = rate vs usage). Narrative, not just numbers.
- **Rolling forecast** re-based on actuals so the outlook stays honest as the year progresses.
- **Tool:** `finance:variance-analysis` (driver decomposition, waterfall, materiality thresholds, commentary) + `xlsx` (the BvA workbook). **MCP:** Airtable to capture actuals if the ledger isn't connected.
- **Flag:** set a **materiality threshold** (e.g., explain any line off by >10% and >$X) so the analysis targets what matters.

### 9. Board / investor reporting + KPI-to-P&L link
- **Monthly package:** P&L (actual vs budget) + balance sheet + cash/runway + the KPI section from `/metrics-dashboard`.
- **The KPI→P&L bridge** — the point of the whole exercise: show how the operating metric *becomes* a financial line. Example chain: north-star activity → engaged users → subscription MRR → the revenue line on the P&L. Investors fund the leading metric because it predicts the lagging dollars.
- **Tool:** `finance:financial-statements` (GAAP-presented statements, period-over-period, variance flags). **Deck:** `pptx` skill or **Canva (MCP)**. **Send:** **Gmail (MCP)** — **draft only**, never auto-sent.
- **Flag (controller):** statements are review-ready drafts; a controller/CPA signs off before anything reaches a board or investor.

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
| Billing / invoicing / AR / revenue data | **Stripe** | ✅ Stripe (integration) | — |
| Close / recs / JEs / statements / variance | `finance:*` skill pack | ✅ skills | — |
| General ledger | QuickBooks Online (or Xero) | ❌ | connect via `SearchMcpRegistry`; interim = Stripe + Airtable + xlsx |
| Payroll + contractors | Gusto (Deel intl) | ❌ | flag to connect |
| AP / expenses / cards | Ramp / Brex / Bill.com | ❌ | interim = Airtable approval log |
| Sales tax / nexus | Anrok (or Avalara) | ❌ | flag to connect |
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
| D2–3 | **Revenue rec** — release/roll deferred revenue for prepaid terms; review AR aging | `finance:journal-entry` | *CPA: ASC 606* |
| D3 | **AP + prepaids** — accrue unpaid bills; amortize prepaids; reclass card spend | `finance:journal-entry` | — |
| D3–4 | **Payroll** — book payroll, benefits, and contractor accruals | `finance:journal-entry` | — |
| D4 | **Depreciation / amortization** — fixed assets + capitalized software (§174) | `finance:journal-entry` | *CPA: §174* |
| D4–5 | **Balance-sheet recs** — prepaids, fixed assets, deferred revenue, sales-tax payable, equity | `finance:reconciliation` | all accounts recd |
| D5 | **Financial statements** — P&L, balance sheet, cash flow, period-over-period | `finance:financial-statements` | — |
| D5–6 | **Budget vs actual** — variances decomposed to drivers, commentary | `finance:variance-analysis` | materiality set |
| D6 | **Cash / runway** — refresh runway + roll the 13-week forecast one week | `xlsx` + Airtable | — |
| D6–7 | **Board/investor package** — assemble; KPI→P&L bridge | `finance:financial-statements` + `pptx`/Canva | **draft only** |
| D7 | **Review gate** | — | **controller/CPA sign-off before filing or sending** |

Audit readiness runs in parallel via `finance:audit-support` — keep workpapers and support so a future diligence or audit isn't a scramble.

---

## Worked example — Executive Edge OS (the deliverable, abridged)

**Input:** stand up finance for Executive Edge (health-tech SaaS, solely owned, live revenue, US). Economics consumed from EE's existing financial model + venture context (its closed economics — the `/offer-architect` equivalent for a live venture); KPIs from `/metrics-dashboard` (WAPA north-star, Engaged MRR / NRR / CAC-payback money strip).

- **COA:** revenue split to match the actual lines — 4000 Subscription ($99/mo), 4010 Unlock ($199 one-time), 4020 Flagship ($4,997), 4100 Cohort (B2B $30–48k), 4110 License setup ($15k), 4120 License recurring ($1.5k/mo), 4200 Rev-share/referral. COGS carries 5000 Hosting (Supabase/DO), 5010 AI (Anthropic), 5020 Labs (Junction/Quest), 5030 Stripe fees, 5040 Clinical/coach delivery labor.
- **Model:** driver-based P&L off the ladder + B2B pricing; ~80% software gross margin, cohort margin lower for manual quarterly-report delivery labor. Most-sensitive driver flagged = **B2B cohort close rate** (the sprint's whole thesis) and **subscription churn** (LTV lever).
- **Stack:** QuickBooks Online (US, CPA-standard); Stripe LIVE already in place → QBO; Gusto for any payroll/contractors; Ramp for cards; Anrok for SaaS sales-tax nexus (EE sells SaaS across states — nexus is live the moment thresholds trip); Mercury operating + tax-reserve; Carta if equity is issued. **Deferred revenue** is material — 6-month cohorts collected upfront release over the term.
- **Close:** the Day-1..Day-7 checklist above; the Stripe-payout→bank rec is the workhorse.
- **Cash/runway:** operating cash ÷ net monthly burn; 13-week rolling forecast timing Stripe payouts and B2B invoice collections against payroll/tools/ad spend; tax-reserve sweep on collections.
- **CPA flags raised:** ASC 606 deferral on cohorts/annual; **sales-tax nexus + SaaS taxability by state** (register where nexus trips); §41/§174 R&D on the platform build; entity/QSBS if a raise is contemplated. All routed to CPA, none decided here.

Full deliverable: `ventures/executive-edge/outputs/finance-setup.md` + `ee-financial-model.xlsx`.

---

## The tax map (jurisdiction + CPA flags, condensed)

| Tax | Trigger | Tool | Who decides |
|---|---|---|---|
| **Sales tax** | Economic **nexus** per state (varies; ~$100k/200-txn is a common but not universal threshold); **SaaS taxability differs by state** | Anrok / Avalara | **CPA + state-by-state** |
| **Income tax** | Federal + state; entity-dependent; quarterly estimates | CPA + ledger | **CPA** |
| **R&D** | §41 credit (may offset payroll tax); §174 capitalize + amortize dev costs | CPA | **CPA** |
| **Payroll tax** | W-2 employees; auto-filed | Gusto | Gusto files; CPA reviews |
| **QSBS / equity** | C-corp stock, 5-yr hold; 83(b) 30-day clock | Carta + CPA + attorney | **CPA + attorney** |

The rule across all five: `finance-ops` **maps** the obligation and drafts the readiness; a licensed professional **decides and files**. Name the jurisdiction; never assert a tax position as settled.
