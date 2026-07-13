---
name: opportunity-size
description: >-
  Size an opportunity two ways — tops-down (TAM/SAM/SOM) and bottoms-up (reachable buyers ×
  conversion × price), every assumption explicit — and return a reconciled, realistic 12-month
  revenue range plus the single load-bearing assumption. Use when quantifying a market, a segment,
  or a sprint's revenue potential, or pressure-testing a projection, in Concept stage. Consumes
  `/market-scan`. Triggers: "how big is this", "size the opportunity", "TAM SAM SOM", "revenue
  potential", "how much could this make", "is this big enough".
---

# /opportunity-size — Opportunity Sizing

Bounds the ceiling (tops-down) and grounds the plan (bottoms-up), then reconciles to a defensible 12-month range. Reads `/market-scan` for TAM/pricing and `/offer-architect` for ACV/ladder.

## Load first
1. `founder-profile/PROFILE.md`, `founder-profile/decision-standards.md`, `founder-profile/operating-playbooks.md` (economics-first, cash discipline).
2. Active `ventures/<slug>/venture-context.md` — category, ICP, price points, reach/assets, kill gates.
3. The latest `/market-scan` (TAM, growth, competitor pricing) and `/offer-architect` (ACV, rungs) if they exist.

## Method (full detail + worked example in `references/method.md`)
1. **Pull inputs.** Take TAM + prices from `/market-scan`/`/offer-architect` where they exist; else from the venture context. No sourced figure → label it assumed and mark the brief provisional (never fabricate a TAM).
2. **Tops-down (TAM → SAM → SOM).** TAM = full category revenue. SAM = the slice this venture can actually serve (geo × ICP × channel). SOM = realistic obtainable share in the window — a small, justified % of SAM. Show every multiplier + its source/assumption.
3. **Bottoms-up — in the venture's money model.** Build from *real* reach using the archetype's formula: goods → reachable buyers × conversion × AOV × repeat-orders/yr; services → reachable clients × close rate × engagement value × frequency (bounded by delivery capacity); subscription → subs × ARPA × months retained; **marketplace → active buyers × orders × AOV = GMV, then × take-rate = net revenue** (size both sides; the constrained side caps it). Sum across segments/rungs. This is the reality check on tops-down.
4. **Reconcile.** The two rarely agree. Bottoms-up anchors the 12-month plan; SOM caps the ceiling. Return a conservative / base / stretch range, stating which method anchors it and why.
5. **Load-bearing assumption.** Name the one input the range is most sensitive to (usually reachable-buyer count or conversion) + the cheapest way to de-risk it.

## Output contract
- **Tops-down block** — TAM → SAM → SOM, each multiplier + source/assumption labeled.
- **Bottoms-up block** — the archetype's build (buyers × conversion × AOV × repeat for goods; GMV × take-rate for marketplace; subs × ARPA × months for subscription; clients × value × frequency for services) = 12-mo revenue; arithmetic shown; multiple segments/rungs summed where relevant.
- **Reconciled realistic range** — conservative / base / stretch 12-month revenue, naming the anchoring method, reporting the archetype's top line (**GMV *and* net revenue for a marketplace**; units×AOV for goods; billings for services; ARR/collected for subscription), and distinguishing **booked vs collected**.
- **Load-bearing assumption** — the single most sensitive input + its cheapest test.
- **Assumptions ledger** — every number tagged `sourced` / `benchmarked` / `assumed`.

## Rules
- **Bottoms-up anchors the plan; tops-down only bounds the ceiling.** Never sell a SOM as bankable revenue.
- **Every number is tagged** sourced / benchmarked / assumed. An unsourced TAM is labeled assumed and the brief is marked provisional — mirror `/market-scan`'s no-fabrication rule.
- **Reachable buyers come from real reach**, not "1% of the market." If reach is unknown, that's the load-bearing assumption.
- **Ranges, not false precision.** Report bands; distinguish revenue booked from cash collected in the window. **Cash can lag booked (deposits, multi-month terms — services/subscription) OR lead it (paid at checkout — goods/commerce); an inventory venture is worse than either — working capital is committed to stock BEFORE any sale, so cap the range by the capital that can fund inventory ahead of demand, not by demand alone.**
- **Respect the venture's price/claims guardrails**; use held price points from the context.

## Examples & evals
- `references/method.md` — full method + a worked example on the EE B2B sprint.
- `evals/evals.md` — 4 cases (data-rich, thin-data niche, projection pressure-test, marketplace GMV).
