---
name: offer-architect
description: >-
  Design a venture's offer stack (value ladder) AND run the unit economics BEFORE anything is built —
  affordable CPA, target AOV, break-even, LTV. Use when creating or fixing pricing/packaging, designing
  a funnel's offers, or deciding whether the model's math closes. Enforces Tony's "economics before build"
  rule. Triggers: "design the offer", "pricing", "offer stack", "value ladder", "do the economics",
  "does the math work".
---

# /offer-architect — Offer & Economics Architect

The money skill. Produces the offer stack and proves the numbers close before a line is built. Reads `/market-scan` output for price anchoring.

## Load first
1. `founder-profile/PROFILE.md`, `founder-profile/decision-standards.md`, `founder-profile/operating-playbooks.md` (value equation, value ladder, economics-first)
2. Active `ventures/<slug>/venture-context.md`
3. The latest `/market-scan` brief for the category, if one exists.

## Method (full detail + worked example in `references/method.md`)
1. **Dream outcome:** state the customer's desired result in their words (value-equation numerator).
2. **Value ladder:** design core → order bump → OTO1 → OTO2 → recurring → high-ticket backend. Each rung names who it's for and why it exists.
3. **Economics gate (before build):**
   - Affordable CPA (from margin + target payback)
   - Target AOV and how the stack lifts it — toward ~10× the core price in paid-acquisition / funnel models only; recurring/experiential/enterprise models optimize margin-per-customer / LTV instead
   - Break-even (units to cover fixed + acquisition)
   - First-year / max LTV per customer
4. **Reconcile with reality:** anchor prices to the market-scan benchmarks; sanity-check conversion assumptions.
5. **Verdict:** does the math close? If not, change the offer/model — do not "build and hope."

## Output contract
- Offer stack table: rung · name · price · billing · who it's for · why.
- Economics block: CPA affordable / AOV target / AOV-lift check (10× only where a paid-acquisition funnel applies) / break-even / LTV — with the assumptions stated.
- The self-liquidation read: at what CPA does the front end pay for itself?
- Implementation priority: what to build/sell first (usually: sell the highest rung manually before building the funnel).
- The one number the whole model is most sensitive to.

## Rules
- Numbers before structure. If a required input is unknown, mark it the make-or-break assumption and give the cheapest way to get it.
- Respect the venture's pricing guardrails (e.g., held price points, claims limits) from its context.
- Prefer selling the backend manually to validate before building front-end funnels.

## Examples & evals
- `references/method.md` — full method + a worked example.
- `evals/evals.md` — 3 cases (service, product/commerce, SaaS).
