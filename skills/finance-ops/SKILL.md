---
name: finance-ops
description: >-
  Stand up and run a venture's entire finance & accounting function — the financial model + unit
  economics (pulled from /offer-architect), a business-model-conditional chart of accounts +
  bookkeeping method (inventory + goods-COGS + working capital for goods, WIP + labor-COGS for
  services, deferred revenue for subscription/SaaS, GMV/take-rate + seller-payout liability for
  marketplace), the accounting stack (QuickBooks/Xero) and how it connects, billing/invoicing/AR
  (Stripe for subscription, commerce-platform→ledger bridge for goods), AP/expenses/corporate
  cards, payroll + contractors + taxes (sales-tax nexus, income, R&D), cash management + runway +
  13-week cash flow, FP&A (budget vs actual, forecasts), and board/investor reporting with a
  KPI-to-P&L link. Use when setting up finance for a venture, building or auditing the model,
  designing the chart of accounts, choosing the accounting/billing/payroll/card stack, running the
  monthly close, building the cash/runway view, or preparing board/investor financials. This is not
  licensed tax/accounting advice — it flags "needs CPA/controller review" at every judgment point.
  Triggers: "financial model", "unit economics", "chart of accounts", "bookkeeping", "QuickBooks",
  "Xero", "Stripe billing", "invoicing", "accounts receivable", "AP", "corporate cards", "payroll",
  "contractor payments", "sales tax nexus", "runway", "13-week cash flow", "budget vs actual",
  "forecast", "board reporting", "investor update", "monthly close", "set up finance", "inventory
  accounting", "COGS", "landed cost", "cash conversion cycle", "working capital", "GMV", "take
  rate", "AOV", "contribution margin", "deferred revenue", "WIP / unbilled".
---

# /finance-ops — Finance & Accounting Function

The finance backbone. Stands up the whole function for a venture — model, ledger, revenue, spend, payroll, tax, cash, FP&A, and reporting — then runs it on a monthly rhythm. Two truths held at once: **accrual books tell you whether the business works; cash tells you whether it survives.** Every default — the COA, the money model, the cash treatment — is read from the venture's business model; **subscription/SaaS is one archetype, not the baseline** (goods, services, and marketplace are equally first-class). Economics before build (pulled from `/offer-architect`); nothing external sends and no dollar moves without approval.

## Load first
1. `founder-profile/PROFILE.md` — governing question, voice, guardrails (money, secrets, drafts-only).
2. Active `ventures/<slug>/venture-context.md` — revenue lines, prices, stage, entity, constraints, **and the business model / archetype (subscription · goods · services · marketplace, or a blend). This selects the COA, the money model, and the cash treatment — read it before anything else.**
3. The venture's closed unit economics — margin, affordable CPA, and the archetype's money-model inputs (AOV/repeat for goods, MRR/churn/LTV for subscription, utilization/billable-rate for services, GMV/take-rate for marketplace) — the model is built on. Source, in order: the latest `/offer-architect` output; else the economics already closed in the venture context / an existing financial model (a live venture that predates the OS, e.g. EE, has these without a fresh `/offer-architect` run). **Do not re-derive economics here; consume them.** If neither exists, run `/offer-architect` first.
4. Latest `/metrics-dashboard` output — the KPIs that bridge to the P&L in board reporting (north-star → revenue line).

Derive everything from these. Never hard-code an industry or a business model.

## Method (full detail, worked examples, and the stack map in `references/method.md`)
**First read the venture's business model (Load-first #2) — it selects the treatment in areas 1, 2, 4, 6, 7, 9. Subscription/SaaS is one archetype, not the default.** Then cover all ten areas; for each, name the tool + MCP and flag the CPA/controller judgment point.
1. **Model + unit economics** — pick the archetype's money model first (subscription MRR/churn/LTV · goods AOV/repeat/contribution-margin · services utilization/rate/realization · marketplace GMV×take-rate), then build the driver-based model + 12-mo P&L off the `/offer-architect` numbers. Tool: `xlsx` skill; system of record for actuals (Stripe/commerce/POS/PSA); Airtable (MCP) for the assumptions log.
2. **Chart of accounts + bookkeeping method** — business-model-conditional numbered COA (base + archetype block: **inventory + goods-COGS + fulfillment** for goods, **WIP + labor-COGS** for services, **deferred revenue** for subscription, **seller-payout liability + net-vs-gross** for marketplace); accrual (GAAP) as the book of record, cash view for survival. Tool: the ledger's native COA; `finance:journal-entry`. *Flag CPA:* accrual-vs-cash election, ASC 606 rev-rec policy (incl. principal-vs-agent), inventory costing method + landed-cost capitalization.
3. **Accounting stack (QuickBooks vs Xero) + how it connects** — recommend + wire the integration graph (bank feeds, Stripe→ledger, payroll, AP, cards). Tool: QBO/Xero (**no first-party MCP connected here — flag to connect**); `finance:close-management`.
4. **Revenue: billing / invoicing / AR + revenue→ledger bridge** — per archetype: Stripe Billing/Invoicing (subscription), the **commerce platform→ledger bridge (A2X)** with COGS booked as units ship (goods), milestone/retainer billing + WIP accrual (services), GMV in → take-rate revenue + seller-payout liability (marketplace); AR aging; deferred revenue on prepaid terms. Tool: **Stripe** / commerce platform / marketplace ledger; `finance:reconciliation` (payout→bank→GL). *Flag CPA:* ASC 606 deferral, principal-vs-agent, over-time-vs-point-in-time.
5. **AP / expenses / corporate cards** — bill pay + card spend + receipt capture + the approval gate. Tool: Ramp/Brex/Bill.com (no MCP here — flag); Airtable (MCP) as the interim approval log. *Guardrail:* no spend without approval.
6. **Payroll + contractors + taxes** — payroll + 1099s; sales-tax **nexus + taxability** (destination-based for tangible goods, varies for SaaS, mostly exempt for services; **marketplace-facilitator** rules), income, and R&D **only if the venture does qualifying research** (§41 credit / §174 capitalization — N/A for most goods/services/marketplace). Tool: Gusto/Deel; Anrok (SaaS) / Avalara / TaxJar (goods) for sales tax (no MCP here — flag). *Flag CPA + jurisdiction:* heaviest review surface in the whole function.
7. **Cash / runway / working capital / 13-week cash flow** — direct-method rolling 13-week forecast; tax-reserve sweep. Runway = cash ÷ net burn **only for asset-light models**; for **goods (any inventory venture)** the survival number is the **cash-conversion cycle (DIO+DSO−DPO)** and the working-capital gap — cash tied up in stock, PO commitments on the outflow line, runway reported as "cash after funding the next PO." Tool: `xlsx` skill; revenue system of record + bank inflows + PO/inventory ledger; Airtable (MCP) weekly cash + open-PO log.
8. **FP&A: budget vs actual, forecasts** — annual budget → monthly BvA → rolling forecast, variances decomposed to drivers. Tool: `finance:variance-analysis` + `xlsx`.
9. **Board/investor reporting + KPI→P&L link** — monthly package: P&L + balance sheet + cash/runway + the KPI-to-revenue bridge **in the archetype's money model** (subscription MRR→NRR · goods orders×AOV×repeat→contribution margin · services utilization×rate×realization · marketplace GMV×take-rate→net revenue), **not a default MRR strip**; KPI names must match `/metrics-dashboard`. Tool: `finance:financial-statements`; `pptx`/Canva (MCP) for the deck; Gmail (MCP) draft only.
10. **Banking + entity/cap-table touchpoints** — operating vs tax-reserve accounts, entity election, cap table, 83(b)/QSBS hand-offs. Tool: Mercury/Relay; Carta/Pulley (no MCP here — flag). Hand off to `setup-checklists` + `legal-pack`. *Flag CPA + attorney.*

Then run the **monthly close** (sequenced checklist in `references/method.md`), gated on controller/CPA review before anything is filed or sent.

## Output contract
Deliver a venture's **finance setup**, filled (not a blank template), with these five components:
1. **Chart of accounts** — the numbered COA table, mapped to the venture's actual revenue lines and cost structure, **using the archetype-appropriate blocks** (inventory + goods-COGS + fulfillment for goods, WIP + labor-COGS for services, deferred revenue for subscription, seller-payout liability + net-vs-gross for marketplace).
2. **The model** — driver-based unit economics + 12-month P&L **in the archetype's money model** (goods contribution-margin/AOV/repeat · subscription MRR/churn/LTV · services utilization/rate/realization · marketplace GMV/take-rate), built from the `/offer-architect` numbers (deliver as an `xlsx` workbook when a spreadsheet is warranted).
3. **The stack** — the function→tool→MCP→status table + the integration graph (how Stripe, the ledger, payroll, cards, and the bank connect), with connect-these flags for anything without an MCP here.
4. **The monthly close checklist** — the sequenced Day-1..Day-N close, each step tied to its `finance:*` skill, ending in the CPA/controller review gate.
5. **The cash / runway view** — current cash, net monthly burn, runway in months, and the rolling 13-week cash-flow view — **plus, for goods (any inventory venture), the working-capital / cash-conversion-cycle view** (DIO+DSO−DPO, open-PO commitments, "cash after funding the next PO"), since cash ÷ burn alone understates the survival risk.
Every judgment point carries an explicit **"needs CPA/controller review"** flag. State assumptions inline.

## Rules
- **Read the venture's money model first; SaaS/subscription is one archetype, not the default.** The COA, the unit-economics vocabulary, and the cash treatment are all selected from the venture's business model: goods (inventory + goods-COGS + working capital), services (WIP + utilization/realization), marketplace (GMV/take-rate + seller-payout liability), subscription (deferred revenue + MRR). A venture can blend them. Never ship a deferred-revenue/MRR setup for a business that carries inventory.
- **Economics before build.** Consume `/offer-architect`'s numbers; if the model doesn't close, say so — don't paper over it.
- **Accrual is the book of record; cash is survival.** Always deliver both a P&L view and a runway/13-week view — never one without the other.
- **Not licensed tax/accounting advice.** Flag "needs CPA/controller review" at every judgment point (rev-rec, accrual election, nexus, R&D, entity, equity). Name the jurisdiction where it matters.
- **No spend without approval; drafts only for anything external** (investor updates, filings). Do the reversible setup work to finished; stop only at money, filings, commitments, and sends.
- **Secrets in env only** — never materialize or echo Stripe keys, bank, or ledger credentials in text, logs, or committed files.
- Clinical, precise voice; banned words out (journey, holistic, guru, revolutionary, game-changer, hack). Never hard-code an industry or a business model.

## Examples & evals
- **Worked example A (subscription/SaaS)** — Executive Edge finance setup (COA + model + stack + close + runway) end-to-end in `references/method.md`; deliverable in `ventures/executive-edge/outputs/finance-setup.md` + `ee-financial-model.xlsx`.
- **Worked example B (goods)** — a physical DTC brand with subscription refills in `references/method.md`: inventory + goods-COGS + fulfillment COA, contribution-margin money model, cash-conversion-cycle runway, destination sales tax, §174 marked N/A.
- Graded cases in `evals/evals.md` (correct archetype selected; economics pulled not re-derived; both P&L + cash delivered; CPA flags present; no-spend/drafts honored).
