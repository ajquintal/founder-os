---
name: finance-ops
description: >-
  Stand up and run a venture's entire finance & accounting function — the financial model + unit
  economics (pulled from /offer-architect), chart of accounts + bookkeeping method, the accounting
  stack (QuickBooks/Xero) and how it connects, Stripe billing/invoicing/AR, AP/expenses/corporate
  cards, payroll + contractors + taxes (sales-tax nexus, income, R&D), cash management + runway +
  13-week cash flow, FP&A (budget vs actual, forecasts), and board/investor reporting with a
  KPI-to-P&L link. Use when setting up finance for a venture, building or auditing the model,
  designing the chart of accounts, choosing the accounting/billing/payroll/card stack, running the
  monthly close, building the cash/runway view, or preparing board/investor financials. This is not
  licensed tax/accounting advice — it flags "needs CPA/controller review" at every judgment point.
  Triggers: "financial model", "unit economics", "chart of accounts", "bookkeeping", "QuickBooks",
  "Xero", "Stripe billing", "invoicing", "accounts receivable", "AP", "corporate cards", "payroll",
  "contractor payments", "sales tax nexus", "runway", "13-week cash flow", "budget vs actual",
  "forecast", "board reporting", "investor update", "monthly close", "set up finance".
---

# /finance-ops — Finance & Accounting Function

The finance backbone. Stands up the whole function for a venture — model, ledger, revenue, spend, payroll, tax, cash, FP&A, and reporting — then runs it on a monthly rhythm. Two truths held at once: **accrual books tell you whether the business works; cash tells you whether it survives.** Economics before build (pulled from `/offer-architect`); nothing external sends and no dollar moves without approval.

## Load first
1. `founder-profile/PROFILE.md` — governing question, voice, guardrails (money, secrets, drafts-only).
2. Active `ventures/<slug>/venture-context.md` — revenue lines, prices, stage, entity, constraints.
3. The venture's closed unit economics — margin, affordable CPA, AOV, LTV, break-even — the model is built on. Source, in order: the latest `/offer-architect` output; else the economics already closed in the venture context / an existing financial model (a live venture that predates the OS, e.g. EE, has these without a fresh `/offer-architect` run). **Do not re-derive economics here; consume them.** If neither exists, run `/offer-architect` first.
4. Latest `/metrics-dashboard` output — the KPIs that bridge to the P&L in board reporting (north-star → revenue line).

Derive everything from these. Never hard-code an industry.

## Method (full detail, worked example, and the stack map in `references/method.md`)
Cover all ten areas; for each, name the tool + MCP and flag the CPA/controller judgment point.
1. **Model + unit economics** — build the driver-based model + 12-mo P&L off the `/offer-architect` numbers. Tool: `xlsx` skill; Stripe for actuals; Airtable (MCP) for the assumptions log.
2. **Chart of accounts + bookkeeping method** — numbered COA (Assets 1000s → OpEx 6000s); accrual (GAAP) as the book of record, cash view for survival. Tool: the ledger's native COA; `finance:journal-entry`. *Flag CPA:* accrual-vs-cash election + ASC 606 rev-rec policy.
3. **Accounting stack (QuickBooks vs Xero) + how it connects** — recommend + wire the integration graph (bank feeds, Stripe→ledger, payroll, AP, cards). Tool: QBO/Xero (**no first-party MCP connected here — flag to connect**); `finance:close-management`.
4. **Revenue: Stripe billing / invoicing / AR** — subscriptions + one-time via Stripe Billing; B2B via Stripe Invoicing; AR aging; deferred revenue on prepaid terms. Tool: **Stripe**; `finance:reconciliation` (payout→bank→GL). *Flag CPA:* ASC 606 deferral.
5. **AP / expenses / corporate cards** — bill pay + card spend + receipt capture + the approval gate. Tool: Ramp/Brex/Bill.com (no MCP here — flag); Airtable (MCP) as the interim approval log. *Guardrail:* no spend without approval.
6. **Payroll + contractors + taxes** — payroll + 1099s; sales-tax **nexus**, income, and R&D (§41 credit / §174 capitalization). Tool: Gusto/Deel; Anrok/Avalara for sales tax (no MCP here — flag). *Flag CPA + jurisdiction:* heaviest review surface in the whole function.
7. **Cash / runway / 13-week cash flow** — direct-method rolling 13-week forecast; runway = cash ÷ net burn; tax-reserve sweep. Tool: `xlsx` skill; Stripe + bank inflows; Airtable (MCP) weekly cash log.
8. **FP&A: budget vs actual, forecasts** — annual budget → monthly BvA → rolling forecast, variances decomposed to drivers. Tool: `finance:variance-analysis` + `xlsx`.
9. **Board/investor reporting + KPI→P&L link** — monthly package: P&L + balance sheet + cash/runway + the KPI-to-revenue bridge. Tool: `finance:financial-statements`; `pptx`/Canva (MCP) for the deck; Gmail (MCP) draft only.
10. **Banking + entity/cap-table touchpoints** — operating vs tax-reserve accounts, entity election, cap table, 83(b)/QSBS hand-offs. Tool: Mercury/Relay; Carta/Pulley (no MCP here — flag). Hand off to `setup-checklists` + `legal-pack`. *Flag CPA + attorney.*

Then run the **monthly close** (sequenced checklist in `references/method.md`), gated on controller/CPA review before anything is filed or sent.

## Output contract
Deliver a venture's **finance setup**, filled (not a blank template), with these five components:
1. **Chart of accounts** — the numbered COA table, mapped to the venture's actual revenue lines and cost structure.
2. **The model** — driver-based unit economics + 12-month P&L, built from the `/offer-architect` numbers (deliver as an `xlsx` workbook when a spreadsheet is warranted).
3. **The stack** — the function→tool→MCP→status table + the integration graph (how Stripe, the ledger, payroll, cards, and the bank connect), with connect-these flags for anything without an MCP here.
4. **The monthly close checklist** — the sequenced Day-1..Day-N close, each step tied to its `finance:*` skill, ending in the CPA/controller review gate.
5. **The cash / runway view** — current cash, net monthly burn, runway in months, and the rolling 13-week cash-flow view.
Every judgment point carries an explicit **"needs CPA/controller review"** flag. State assumptions inline.

## Rules
- **Economics before build.** Consume `/offer-architect`'s numbers; if the model doesn't close, say so — don't paper over it.
- **Accrual is the book of record; cash is survival.** Always deliver both a P&L view and a runway/13-week view — never one without the other.
- **Not licensed tax/accounting advice.** Flag "needs CPA/controller review" at every judgment point (rev-rec, accrual election, nexus, R&D, entity, equity). Name the jurisdiction where it matters.
- **No spend without approval; drafts only for anything external** (investor updates, filings). Do the reversible setup work to finished; stop only at money, filings, commitments, and sends.
- **Secrets in env only** — never materialize or echo Stripe keys, bank, or ledger credentials in text, logs, or committed files.
- Clinical, precise voice; banned words out (journey, holistic, guru, revolutionary, game-changer, hack). Never hard-code an industry.

## Examples & evals
- Executive Edge finance setup (COA + model + stack + close + runway) worked end-to-end in `references/method.md`; deliverable in `ventures/executive-edge/outputs/finance-setup.md` + `ee-financial-model.xlsx`.
- Graded cases in `evals/evals.md` (economics pulled not re-derived, both P&L + cash delivered, CPA flags present, no-spend/drafts honored).
