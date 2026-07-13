# Executive Edge OS — Finance Setup

**Jul 13, 2026 · Produced by `/finance-ops` · Loads: `founder-profile/PROFILE.md` → `ventures/executive-edge/venture-context.md` → `/offer-architect` economics → `/metrics-dashboard` KPIs.**

The whole finance function, stood up for a US, solely-owned, live-revenue health-tech SaaS venture. Accrual books are the record of truth; cash is survival — both are delivered here. **This is not licensed tax/accounting advice.** Every judgment point is flagged **[CPA]** or **[CPA+attorney]** for controller/CPA review. Nothing sends, files, or spends without Tony's approval.

The working model lives in `ee-financial-model.xlsx` (this folder): Assumptions · UnitEconomics · PnL · Cash13Week · Runway. All figures are assumptions to confirm live (April pricing docs are stale per the venture context); blue cells are the levers to edit.

---

## 1. Chart of accounts

Numbered COA, accrual basis, mapped to EE's actual revenue lines and cost structure. Load into QuickBooks Online at setup.

| # | Account | Notes |
|---|---|---|
| **1000** | **Assets** | |
| 1000 | Operating cash — Mercury | primary |
| 1010 | Tax-reserve cash | sweep target from collections **[CPA]** |
| 1100 | Accounts receivable | B2B invoices on terms |
| 1200 | Prepaid expenses | annual tools, insurance |
| 1300 | Stripe clearing / undeposited funds | payouts in transit |
| 1500 | Capitalized software | if §174 capitalization applies **[CPA]** |
| 1510 | Accumulated amortization | contra |
| **2000** | **Liabilities** | |
| 2000 | Accounts payable | vendor bills |
| 2100 | Corporate-card payable — Ramp | |
| 2200 | Accrued expenses | month-end accruals |
| 2300 | **Deferred revenue — current** | cohorts + annual prepay, earned <12mo **[CPA: ASC 606]** |
| 2310 | Deferred revenue — long-term | earned >12mo |
| 2400 | Payroll liabilities | withholdings, taxes |
| 2500 | **Sales tax payable** | per-state, where nexus exists **[CPA]** |
| **3000** | **Equity** | |
| 3000 | Common stock / member capital | entity-dependent **[CPA+attorney]** |
| 3100 | Additional paid-in capital | |
| 3200 | Retained earnings | |
| 3900 | Distributions | |
| **4000** | **Revenue** | |
| 4000 | Subscription ($99/mo) | B2C recurring |
| 4010 | Unlock ($199 one-time) | B2C entry |
| 4020 | Flagship ($4,997) | high-ticket B2C |
| 4030 | Private client ($1,750/mo) | capped |
| 4100 | Cohort revenue (B2B, $30–48k / 6mo) | recognized over term |
| 4110 | License setup ($15k) | |
| 4120 | License recurring ($1.5k/mo) | |
| 4200 | Rev-share / referral (15%) | |
| 4900 | Discounts & refunds | contra-revenue |
| **5000** | **COGS** | |
| 5000 | Hosting / infra (Supabase, DigitalOcean) | |
| 5010 | AI / API (Anthropic) | base + per active member |
| 5020 | Labs / panels (Junction, Quest/Labcorp) | |
| 5030 | Payment processing (Stripe) | ~3% of revenue |
| 5040 | Clinical / coach delivery labor | cohort + flagship + private |
| **6000** | **Operating expenses** | |
| 6000 | Payroll & wages · 6010 Contractors · 6100 Software/tools · 6200 Marketing/ads · 6300 Professional fees (legal/CPA) · 6400 Bank/card fees · 6600 Insurance · 6800 Depreciation/amortization | one row each in QBO |
| **7000** | **Other** | 7000 Interest income (treasury) · 8000 Income tax **[CPA]** |

**Bookkeeping method: accrual (GAAP).** EE collects 6-month cohorts and annual plans upfront — that cash is a **liability (deferred revenue, 2300)** that releases to revenue as earned, never booked as day-one revenue. Cash-basis is not appropriate here. **[CPA]** confirm the accrual election and the ASC 606 recognition policy before the first close.

---

## 2. The model — unit economics + 12-month P&L

Built in `ee-financial-model.xlsx`, driver-based, consuming the `/offer-architect` economics (not re-derived). Key outputs on the seeded assumptions:

- **Year-1 revenue ≈ $1.00M** (blended B2C ladder + B2B cohorts/licenses) — directly serves the $1M-by-2026 mandate.
- **B2C subscription unit economics:** ~89% gross margin, **LTV ≈ $1,760**, CAC payback ≈ **2.8 months**, **LTV:CAC ≈ 7.0x** (CAC assumption $250 — confirm live).
- **B2B cohort:** contract gross margin ~67% after manual quarterly-report delivery labor; recognized over 6 months as deferred revenue releases.
- **The two numbers the model swings on:** **B2B cohort close rate** (the sprint thesis) and **subscriber churn** (the LTV lever). Protect these; everything else is second-order.

Model discipline: every projected cell references a labeled assumption cell (no hardcoded literals), so the whole model recomputes when a lever changes. 687 formulas, recalculated clean.

---

## 3. The stack + how it connects

| Function | Recommended tool | MCP here? | Action |
|---|---|---|---|
| Model / cash flow / BvA | **`xlsx` skill** | ✅ skill | in use (this workbook) |
| Assumptions / AR-AP / cash logs / approvals | **Airtable** | ✅ **Airtable MCP** | build tables |
| Billing / invoicing / AR / revenue data | **Stripe** (LIVE already) | ✅ Stripe | connect to ledger |
| Close / recs / JEs / statements / variance | **`finance:*` pack** | ✅ skills | run monthly |
| General ledger | **QuickBooks Online** | ❌ | **connect — `SearchMcpRegistry`; flag to Tony** |
| Payroll + contractors | Gusto (Deel intl) | ❌ | flag to connect |
| AP / expenses / cards | Ramp | ❌ | interim = Airtable approval log |
| Sales tax / nexus | **Anrok** (SaaS-native) | ❌ | flag to connect **[CPA]** |
| Banking | Mercury (operating + tax-reserve) | ❌ | flag to connect |
| Cap table | Carta / Pulley | ❌ | flag if equity issued **[CPA+attorney]** |
| Board deck / investor update | `pptx` / Canva / Gmail | ✅ (Canva, Gmail MCP) | **draft only** |

**Recommendation: QuickBooks Online** — US-standard, lowest close friction with a CPA, deepest integration ecosystem. Choose Xero only if multi-entity/international lands on the roadmap.

**Integration graph (the money's path):**
```
Mercury (bank) ──feed──▶ QuickBooks Online ◀──sync── Stripe (billing + invoicing → payout)
      ▲                        ▲        ▲                         │ payout (net of fees)
      │                        │        │                         ▼
 Gusto (payroll) ─────────────┘        └──── Ramp (cards/AP)   Mercury
```
No first-party QBO/Xero/Gusto/Ramp/Anrok/Mercury/Carta MCP is connected in this environment — **surface these to Tony to connect** (`SearchMcpRegistry`). Until then, Stripe + Airtable (MCP) + the `xlsx` model + the `finance:*` skills are the working layer, and the control (approval logs, recs, close) exists from day one.

---

## 4. Monthly close checklist

Target: books closed by business day 5–7, review-gated before anything external.

| Day | Step | Skill / tool | Gate |
|---|---|---|---|
| Ongoing | Categorize txns, capture receipts, keep AR/AP current | QBO + Ramp | — |
| D1 | Cutoff; pull Stripe payouts + bank + card statements | Stripe, Mercury | — |
| D1–2 | **Reconcile** Stripe payout→bank→GL, bank, card | `finance:reconciliation` | recs tie |
| D2–3 | **Revenue rec** — release deferred revenue for cohorts/annual; AR aging | `finance:journal-entry` | **[CPA: ASC 606]** |
| D3 | AP + prepaids — accrue bills, amortize prepaids, reclass card spend | `finance:journal-entry` | — |
| D3–4 | Payroll + contractor accruals | `finance:journal-entry` | — |
| D4 | Depreciation / amortization (capitalized software) | `finance:journal-entry` | **[CPA: §174]** |
| D4–5 | Balance-sheet recs — prepaids, deferred rev, sales-tax payable, equity | `finance:reconciliation` | all recd |
| D5 | Financial statements — P&L, balance sheet, cash flow | `finance:financial-statements` | — |
| D5–6 | Budget vs actual — variances to drivers, commentary | `finance:variance-analysis` | materiality set |
| D6 | Cash / runway refresh + roll 13-week forward one week | `xlsx` + Airtable | — |
| D6–7 | Board/investor package — KPI→P&L bridge | `finance:financial-statements` + `pptx`/Canva | **draft only** |
| D7 | **Review gate** | — | **controller/CPA sign-off before filing/sending** |

Audit readiness runs alongside via `finance:audit-support` (keep workpapers/support so future diligence isn't a scramble).

---

## 5. Cash & runway view

From `ee-financial-model.xlsx` on the seeded assumptions:

- **Current cash:** $120,000 (starting; confirm live). **Structure:** Mercury operating + a **tax-reserve sub-account** — sweep an estimated % of collections aside so tax season isn't a cash shock. **[CPA]** set the reserve %.
- **Runway:** on the modeled assumptions the venture is **cash-flow positive from M1** (avg M1–M3 EBITDA positive), so runway is not burn-limited — but the model is only as good as the close rates and churn behind it; treat "positive" as conditional on hitting the plan.
- **13-week direct cash flow (Cash13Week tab):** rolling weekly beginning → collections (Stripe payouts + invoice payments, timed to when cash lands) → outflows (payroll, contractors, tools, taxes, pro fees). Lumpy items (B2B cohort deposits, quarterly tax) are placed in the week cash actually moves. **Lowest weekly ending balance over the 13 weeks stays positive.**
- **Scenarios (Runway tab):** revenue flexed −20% / base / +20% with costs held — the sensitivity read on whether a demand miss threatens cash.
- **Accrual ≠ cash reminder:** a profitable month can still be cash-negative when a cohort's deferred revenue was *collected in a prior period*. Always read the P&L and the 13-week together.

---

## Tax map — jurisdiction + CPA flags

| Tax | Trigger | Tool | Decides |
|---|---|---|---|
| **Sales tax** | Economic **nexus** per state (varies; ~$100k/200-txn common but not universal); **SaaS taxability differs by state** — EE sells SaaS across states, so nexus is live the moment thresholds trip | Anrok / Avalara | **[CPA] state-by-state** |
| **Income tax** | Federal + state; entity-dependent; quarterly estimates | QBO + CPA | **[CPA]** |
| **R&D** | §41 credit (may offset payroll tax); §174 capitalize + amortize the platform build | CPA | **[CPA]** |
| **Payroll tax** | W-2 employees; auto-filed | Gusto | Gusto files; CPA reviews |
| **Entity / QSBS / 83(b)** | C-corp stock, 5-yr hold; 83(b) 30-day clock | Carta + CPA + attorney | **[CPA+attorney]** |

`/finance-ops` **maps** the obligation and drafts readiness; a licensed professional **decides and files.** Hand off entity/cap-table/banking setup to `setup-checklists` + `legal-pack`.

---

## Guardrails (non-negotiable)

No spend without Tony's approval; **$0 on unvalidated ideas.** Secrets (Stripe, bank, ledger keys) in env only — never echoed, logged, or committed. Anything external (investor updates, filings) is a **draft** until approved; statements need controller/CPA sign-off before a board or investor sees them. Not licensed tax/accounting advice — every **[CPA]** flag above is a real review gate, not a formality. Clinical, precise voice; banned words out.
