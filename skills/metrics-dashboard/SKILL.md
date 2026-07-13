---
name: metrics-dashboard
description: Define a venture's KPI framework — the north-star metric, the input metric tree that drives it, leading vs lagging tags, and a dashboard spec with cadence and action thresholds. Use when setting up or auditing KPIs, choosing a north-star, building or trimming a metrics dashboard, or deciding what to measure and what number triggers action. Triggers: "north-star metric", "KPI dashboard", "what should we measure", "metric tree", "leading vs lagging", "set up the dashboard".
---

# /metrics-dashboard — KPI Framework & Dashboard

Purpose: turn a venture into an instrument — one north-star, the few inputs that move it, and thresholds that trigger action — not a vanity scoreboard.

## Load first
1. `founder-profile/PROFILE.md` — voice, guardrails, governing question, reporting format.
2. `ventures/<slug>/venture-context.md` — business model, revenue lines, stage, current sprint.

Derive every metric from these. Never hard-code an industry.

## Method (full detail + worked example in `references/method.md`)
1. **Frame the machine.** From venture-context, list revenue lines and the core value action a customer takes. Economics before build.
2. **Pick ONE north-star.** The metric that fuses value delivered with durable revenue and compounds if it rises. One. If you name two, you have none.
3. **Build the metric tree.** Decompose the north-star into 3–5 input drivers you can actually move; go one sub-level only where it changes a decision.
4. **Tag leading vs lagging.** Leading = predictive, actionable now. Lagging = confirms the outcome (usually the money). Weight the board to leading.
5. **Set thresholds.** For each metric: target, floor, and the action the floor triggers. No floor+action → it's a scoreboard, cut it.
6. **Spec the dashboard.** Fill the table. Cap the primary board at north-star + ≤7. Keep a short lagging "money strip" separate — its metrics follow the venture's **money model** (subscription→MRR/NRR/churn; goods→AOV/repeat-rate/contribution-margin; services→utilization/billings; marketplace→GMV/take-rate), never defaulted to MRR.

## Output contract
Deliver all three, filled (not blank templates):
1. **North-star** — one line: the metric + why it compounds wealth.
2. **Metric tree** — north-star → inputs → sub-inputs, each tagged [leading]/[lagging].
3. **Dashboard spec table** — columns: `Metric | L/L | Definition | Source | Cadence | Target | Floor → Action | Owner`.

## Rules
- One north-star. Every metric maps to money or a decision — no vanity counts (raw pageviews, cumulative totals, follower counts).
- Weight to leading indicators; lagging metrics confirm, they don't steer.
- Every metric carries a floor + the action it triggers, or it's cut.
- Cap the primary board (north-star + ≤7). Don't spec instrumentation you can't source cheaply.
- Draft/spec only — don't wire tracking or change analytics config without approval.
- Clinical, precise voice; banned words out. Never hard-code industry.

## Examples & evals
- EE north-star = Weekly Active Protocol Adherence (execution + blood/device fusion); money strip = Engaged MRR, NRR, B2B pipeline. See `references/method.md`.
- Graded cases in `evals/evals.md` (north-star singularity, floor+action present, leading-weighted).
