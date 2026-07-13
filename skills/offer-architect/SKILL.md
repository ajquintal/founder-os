---
name: offer-architect
description: >-
  Design a venture's offer stack (value ladder) AND run the unit economics BEFORE anything is built, in
  the venture's OWN money model — goods (AOV, contribution margin after COGS + fulfillment, repeat, MER),
  services (billable rate, utilization, realization), marketplace (GMV, take-rate, both-sided unit
  economics, liquidity), or subscription (LTV, CAC-payback, NRR); SaaS is one archetype, never the
  default. Use when creating or fixing pricing/packaging, designing a funnel's offers, or deciding whether
  the model's math closes. Enforces Tony's "economics before build" rule. Triggers: "design the offer",
  "pricing", "offer stack", "value ladder", "do the economics", "does the math work", "unit economics",
  "contribution margin", "take rate".
---

# /offer-architect — Offer & Economics Architect

The money skill. Produces the offer stack and proves the numbers close before a line is built. Reads `/market-scan` output for price anchoring. **Every default — the offer shape, the money model, the sensitivity number — is read from the venture's business model; subscription/SaaS is one archetype, not the baseline (goods, services, and marketplace are equally first-class).**

## Load first
1. `founder-profile/PROFILE.md`, `founder-profile/decision-standards.md`, `founder-profile/operating-playbooks.md` (value equation, value ladder, economics-first), and `founder-profile/guardrails.md` (money, claims, drafts-only).
2. Active `ventures/<slug>/venture-context.md` — **including the business model / archetype (subscription · goods · services · marketplace, or a blend); this selects the money model in the method — read it before running any economics.**
3. The latest `/market-scan` brief for the category, if one exists.

## Method (full detail + worked examples in `references/method.md`)
1. **Pick the money model (do this first).** From the venture context, name the archetype — it sets the offer shape AND the economics vocabulary. Never default to LTV/CAC.

   | Archetype | The economics block speaks |
   |---|---|
   | Goods / commerce | AOV · contribution margin **after COGS + fulfillment** · repeat-purchase rate · MER (blended marketing-efficiency / ad break-even ROAS) |
   | Services | billable rate · utilization · realization · revenue per delivery unit · margin per engagement |
   | Marketplace | GMV · take-rate · **both-sided** unit economics (buyer CAC + supply-side CAC) · liquidity (match/fill rate, time-to-match) |
   | Subscription / recurring | LTV · CAC-payback · NRR / churn · MRR / ARPA |

2. **Dream outcome:** state the customer's desired result in their words (value-equation numerator).
3. **Value ladder:** design entry → core → expansion rungs (bump / OTO / recurring / backend where they apply). Each rung names who it's for and why it exists — not every model uses every rung.
4. **Economics gate (before build) — in the archetype's money model (Step 1):**
   - **Margin** per sale/order/engagement (price − COGS / delivery / fulfillment).
   - **Affordable CPA / CAC** from that margin + target payback — for a marketplace, on BOTH sides against the take-rate per matched transaction.
   - The archetype's **core metric**: goods → AOV + contribution margin + repeat + MER; services → rate × utilization × realization; marketplace → GMV × take-rate + liquidity; subscription → LTV + CAC-payback + NRR.
   - **AOV-lift toward ~10× the core price is a paid-acquisition-funnel heuristic ONLY** — recurring/services/marketplace/experiential models optimize margin-per-customer, repeat, take-rate, or LTV instead.
   - **Break-even** (units/orders/engagements/GMV to cover fixed + acquisition).
5. **Reconcile with reality:** anchor prices to the market-scan benchmarks; sanity-check conversion / repeat / liquidity assumptions.
6. **Verdict:** does the math close? If not, change the offer/model — do not "build and hope."

## Output contract
- Offer stack table: rung · name · price · billing · who it's for · why.
- Economics block **in the archetype's money model** (goods AOV/contribution-margin/repeat/MER · services rate/utilization/realization · marketplace GMV/take-rate/both-sided-CAC/liquidity · subscription LTV/CAC-payback/NRR): affordable CPA/CAC · the archetype's core metric · AOV-lift check (10× only where a paid-acquisition funnel applies) · break-even — with the assumptions stated.
- The self-liquidation read (where a paid-acquisition front end applies): at what CPA does the front end pay for itself? For a marketplace, the both-sided version — does one side's contribution fund the other's acquisition?
- Implementation priority: what to build/sell first (usually: sell/match manually before building the funnel or platform).
- The one number the whole model is most sensitive to.

## Rules
- **Read the venture's money model first; SaaS/subscription is one archetype, not the default.** Speak the archetype's economics vocabulary — never force LTV/CAC/MRR onto a goods, services, or marketplace venture.
- Numbers before structure. If a required input is unknown, mark it the make-or-break assumption and give the cheapest way to get it.
- Respect the venture's pricing guardrails (e.g., held price points, claims limits) from its context.
- Prefer selling the backend manually (or hand-matching a few transactions, for a marketplace) to validate before building front-end funnels or a platform.
- **Economics are illustrative planning figures, not advice or a guarantee.** State assumptions inline, confirm live prices/costs against the venture's actuals, and flag material tax/margin/entity calls for CPA review. Drafts only — this skill proves the math; it does not set prices live or spend.

## Examples & evals
- `references/method.md` — full method + worked examples across archetypes (services, subscription, goods, marketplace).
- `evals/evals.md` — 4 cases (service, goods/commerce, subscription, marketplace).
