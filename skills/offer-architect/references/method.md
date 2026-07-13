# /offer-architect — Full method & worked examples

One level deep; does not fan out further. Lenses: Hormozi (value equation), Brunson (value ladder), Scale Mechanics (economics-first / self-liquidation). **The offer shape and the economics vocabulary are read from the venture's archetype; the funnel / value-ladder framing below is one archetype (paid-acquisition / info-product / DTC), not the universal shape.**

## Step 0 — Pick the money model (do this first)

The archetype selects which economics you run and which number the model lives or dies on. Never default to LTV/CAC.

| Archetype | Core economics | Sensitivity usually |
|---|---|---|
| **Goods / commerce** | AOV · contribution margin **after COGS + fulfillment** (freight, pick/pack, breakage, returns) · repeat-purchase rate · MER (blended marketing-efficiency ratio) / ad break-even ROAS | thin contribution vs. paid CAC → repeat rate |
| **Services** | billable rate · utilization (% of capacity sold) · realization (% of billed collected) · margin per engagement | utilization, or core→recurring conversion |
| **Marketplace** | GMV · take-rate · **both-sided** unit economics (buyer CAC AND supply-side CAC) · liquidity (match/fill rate, time-to-match) | the constrained side's CAC, and liquidity |
| **Subscription / recurring** | LTV · CAC-payback · NRR / churn · MRR / ARPA | churn / NRR (moves LTV more than logo acquisition) |

A venture can blend (e.g., goods + subscription refills → run both). Speak the selected model's vocabulary throughout the output.

## Value equation (the numerator/denominator to move)

Value = (Dream Outcome × Perceived Likelihood of Achievement) ÷ (Time Delay × Effort & Sacrifice). Every rung either raises the top or lowers the bottom. Write the dream outcome in the customer's language, not the product's features.

## Value ladder (a paid-acquisition / DTC shape — adapt per archetype)

| Rung | Price band | Job it does |
|---|---|---|
| Core / front-end | low, self-liquidating | acquire a buyer, cover ad cost |
| Order bump | +small | lift AOV at point of sale |
| OTO1 / OTO2 | mid | lift AOV (toward ~10× in funnel models only) |
| Recurring | monthly/annual | the durable revenue |
| High-ticket backend | high | the profit rung **where the model has one** |

Not every venture needs all rungs — but always know the next rung up and why a buyer climbs. **Some archetypes have no high-ticket backend at all** (a recurring-consumable or low-price physical line): there the profit lives in retained repeat purchase / LTV, not a backend. For services the ladder is usually entry (paid diagnostic / pilot) → core engagement → retainer / expansion; for a marketplace it is get one side, then the other, then take a rate on the match — not a bump/OTO stack.

## Economics gate (run BEFORE building — in the archetype's money model from Step 0)

1. **Margin** per sale/order/engagement (price − COGS / delivery / fulfillment). For goods, subtract COGS **and** fulfillment (freight-in, pick/pack, shipping, breakage, returns) to reach true contribution margin — gross margin flatters.
2. **Affordable CPA / CAC** = margin × target payback fraction (recover CAC within N orders/months). **Marketplace: compute it on both sides** — buyer CAC and supply-side CAC — against the take-rate per matched transaction.
3. **The archetype's core metric:**
   - Goods → AOV + contribution margin + repeat rate + MER; push AOV toward ≈10× the core price **only in a paid-acquisition funnel** (not a law).
   - Services → billable rate × utilization × realization; margin per engagement.
   - Marketplace → GMV × take-rate = net revenue; plus liquidity (fill rate, time-to-match) — a marketplace with a great take-rate and no liquidity is dead.
   - Subscription → LTV (first-year and max, from retention / churn) + CAC-payback + NRR.
4. **Break-even** = fixed costs ÷ per-unit contribution; also ad break-even ROAS / GMV-to-break-even for a marketplace.
5. **Self-liquidation** (where a paid-acquisition front end applies): the CPA at which front-end revenue ≥ acquisition cost. Above it, scaling is free. For a marketplace, the both-sided form — does one side's contribution fund the other side's acquisition?

Three outcomes: **closes** (proceed), **unproven** (one assumption is load-bearing → test it cheaply first), **doesn't close** (change price, stack, or model).

## Worked example (abridged)

**Input:** offer-architect for a high-ticket advisory service (generic B2B).

- **Dream outcome:** "a revenue machine installed in 90 days, not a PDF of advice."
- **Ladder:** free diagnostic call (acquire) → $2–5k paid audit (bump/qualifier) → $50–150k install (backend) → $10–20k/mo retainer (recurring).
- **Economics:** margin ~85% (services); one $75k install covers months of pipeline cost; AOV driven by backend, not front end; break-even ≈ 1 install/quarter; LTV lifted by retainer conversion. **Closes** on conservative close-rate assumptions.
- **Self-liquidation:** the paid audit funds outreach; the install is pure margin.
- **Sensitivity:** the whole model swings on **install→retainer conversion** — that's the number to protect.
- **Implementation priority:** sell 1–2 installs manually from warm outreach before building any funnel or content engine.

## Worked mini-example — subscription / SaaS

**Input:** offer-architect for a B2B analytics subscription (generic SaaS).

- **Tiers → jobs (not a 10× stack):** self-serve $49/mo (a lone analyst who needs the answer) → team $299/mo (assisted onboarding + shared workspace) → enterprise (SSO, SLA, done-with-you). Each tier maps to a bigger job, not a bigger feature count.
- **Economics:** no 10× AOV target — optimize margin-per-customer and LTV. Gross margin ~80%; LTV = ARPA × gross-margin ÷ monthly churn; hold CAC payback under ~12 months on the team tier.
- **Sensitivity:** **net revenue retention** — expansion and churn move LTV far more than logo acquisition. That's the number to protect.
- **Implementation priority:** prove one team-tier cohort converts and retains before funding self-serve funnel automation.

## Worked mini-example — goods / commerce

**Input:** offer-architect for a DTC premium refillable candle brand (buy a $58 ceramic vessel once, reorder $24 wax refills, $19.20 subbed).

- **Money model (Step 0):** goods + subscription-refill blend — run contribution margin + repeat + MER, not LTV-as-headline.
- **Ladder → jobs:** vessel (acquire; near-break-even after fulfillment) → refill (the durable margin) → subscribe-and-save (lifts repeat) → gift / multi-pack bump (lifts AOV). No high-ticket backend — profit is in refill repeat.
- **Economics:** vessel margin **after COGS + freight + pick/pack + breakage** is thin → the vessel is an acquisition cost, not the profit. Contribution lives in refills at scale; **MER / ad break-even ROAS** is the gate (first-order contribution vs. paid CAC is negative → the model needs ≥N refills to clear CAC). AOV lifted a realistic amount via multi-pack, **not** a forced ~10× cart.
- **Sensitivity:** **refill repeat rate** — everything rides on reorders clearing CAC. That's the number to protect.
- **Implementation priority:** pre-sell or run a small sample batch before committing to inventory/tooling; prove repeat on one cohort before funding paid acquisition.

## Worked mini-example — marketplace

**Input:** offer-architect for a two-sided mobile car-detailing marketplace (customers book vetted, insured detailers who come to them; the platform keeps ~22% of the job).

- **Money model (Step 0):** marketplace — GMV × take-rate, both-sided unit economics, liquidity. LTV/CAC is a secondary lens, not the headline.
- **"Offer" on each side:** demand = a booked, insured, vetted detail at the driveway; supply = a filled calendar + payment handling + demand they can't self-source. The take-rate is the price of the match.
- **Economics:** net revenue = GMV × ~22% take-rate; run **buyer CAC AND detailer CAC** separately against take-rate-per-job; the model closes only if **liquidity** holds (jobs match fast enough that both sides stay). A great take-rate with poor fill rate is dead.
- **Sensitivity:** the **constrained side's CAC** (usually supply) and **time-to-match** — not logo acquisition.
- **Implementation priority:** hand-match the first jobs (concierge, no platform) to prove liquidity and the take-rate economics before building any booking software.
