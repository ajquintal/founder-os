# Metrics Dashboard — Method

## Principle
A dashboard is an operating instrument, not a report. If a number can't change a decision this week, it doesn't earn a row. Economics before build: instrument what maps to money or to the one decision the metric drives, and nothing else.

## Step 1 — Frame the machine
From `venture-context.md`, write down:
- Revenue lines and their price points, and the venture's **money model** (subscription / goods-commerce / services / marketplace) — this sets the money strip in Step 4.
- The **core value action** — the single thing a customer does that means they're getting the value they pay for.
- Stage + current sprint goal (the north-star serves the active sprint, not a hypothetical future state).

## Step 2 — Pick ONE north-star
Criteria: (a) rises only when real value is delivered, (b) leads durable revenue, (c) compounds — this quarter's gains raise next quarter's floor. Reject vanity (totals, reach) and reject pure lagging money (that's the scoreboard, not the steering wheel). One metric. Write it as: `<metric> = <precise definition>; compounds because <link to revenue>`.

## Step 3 — Build the metric tree
Decompose into 3–5 **input drivers** you can move directly (acquisition, activation, depth, retention, expansion are the usual shape). Go one sub-level deep only when it changes what you'd do (e.g. split activation into signups × signup→activation rate because they have different owners). Stop there — deeper trees are overbuild.

## Step 4 — Tag leading vs lagging
- **Leading**: predictive, movable this week (activation rate, adherence depth, retention curve).
- **Lagging**: confirms outcome, usually money. The money-strip metrics follow the venture's **money model** (from venture-context), never defaulted to subscription:

| Money model | Money strip (lagging) |
|---|---|
| Subscription / recurring | MRR, NRR, churn, CAC payback |
| Goods / commerce | AOV, repeat-purchase rate, contribution margin, CAC payback |
| Services | utilization, billings / realization, revenue per delivery unit |
| Marketplace | GMV, take-rate, buyer/seller retention |

Primary board is leading-weighted; lagging lives in a short "money strip."

## Step 5 — Set thresholds
For every metric: **target** (where it should be), **floor** (the line that means something's wrong), **action** (what you do when it hits the floor). A metric with no floor+action is a scoreboard — cut it or demote it to the money strip.

## Step 6 — Spec the dashboard
Fill the table. Cap the primary board at north-star + ≤7 inputs. Assign one owner per metric (default: founder for the north-star and money strip). Set cadence — most leading metrics weekly, money strip weekly/monthly.

---

## Worked example — Executive Edge OS
Model: B2C ladder (freemium → $199 → ~$99/mo → $4,997) + B2B ($30–48k cohorts, $25k + $2k licenses). Wedge: execution layer + blood+device fusion. Core value action: executing a protocol step and fusing a blood/device data point.

**North-star:** Weekly Active Protocol Adherence (WAPA) = paying members with ≥1 protocol execution AND ≥1 blood/device sync in the trailing 7 days. Compounds because adherence → measurable results → retention + ladder expansion + B2B proof, and the fused-data requirement widens a moat competitors can't copy.

**Metric tree:**
- WAPA [leading]
  - New activated members / wk [leading]
    - Freemium signups / wk [leading]
    - Activation rate (signup → first execution ≤7d) [leading]
  - Adherence depth — median protocol actions / active member / wk [leading]
  - Data-fusion rate — % active with device + blood in 30d [leading] (the wedge)
  - Weekly retention — % of prior-week active still active [leading]
  - Ladder expansion — members up ≥1 tier / wk [leading of revenue]
- Money strip: Engaged MRR [lagging], NRR [lagging], B2B cohort pipeline $ [lagging], CAC payback [lagging]

**Dashboard spec:**

| Metric | L/L | Definition | Source | Cadence | Target | Floor → Action | Owner |
|---|---|---|---|---|---|---|---|
| WAPA (north-star) | L | Paying members w/ ≥1 execution + ≥1 sync, 7d | app db | Weekly | +8%/wk | <+2%/wk for 2wk → diagnose activation vs retention | Founder |
| Activation rate | L | signup → first execution ≤7d | app db | Weekly | ≥40% | <30% → rework onboarding | Growth |
| Adherence depth | L | median protocol actions/active/wk | app db | Weekly | ≥4 | <2 → protocol-friction review | Product |
| Data-fusion rate | L | % active w/ device + blood, 30d | app db | Weekly | ≥60% | <45% → in-app fusion prompt | Product |
| Weekly retention | L | % prior-wk active still active | app db | Weekly | ≥85% | <75% → 5 churn interviews | Founder |
| Ladder expansion | L | members up ≥1 tier/wk | Stripe+db | Weekly | ≥3% of base | <1% → offer/price review | Founder |
| Engaged MRR | Lag | MRR from members active in 30d | Stripe | Weekly | +6%/mo | flat 2mo → retention+pricing review | Founder |
| B2B cohort pipeline | Lag | Σ open cohorts, weighted | CRM | Weekly | $150k open | <$90k → outbound sprint | Founder |
| NRR | Lag | (start + expansion − churn)/start MRR | Stripe | Monthly | ≥110% | <100% → churn root-cause | Founder |
| CAC payback | Lag | blended CAC / (new MRR × margin) | Stripe+ads | Monthly | ≤4mo | >6mo → pause paid | Founder |

Note: primary board = WAPA + 5 leading inputs (6 rows, under cap); the money strip is the 4-row lagging block — reviewed, not steered by.
