---
name: landing-funnel
description: >-
  Spec the structure of a funnel and its landing page(s): the on-page sections in order, the
  value-ladder flow across pages (entry → bump → OTO → recurring → backend), and the tracking/CTA
  events that make it measurable. Brunson funnel + Hormozi stack lens; lays out offers, doesn't
  design them. Use when planning a launch, building or auditing a funnel, or wiring up a landing
  page. Triggers: "funnel", "landing page structure", "sales funnel", "page sections", "value
  ladder flow", "funnel spec", "what sections should the page have".
---

# /landing-funnel — Funnel & Landing Structure

The structural blueprint: section order on the page, offer flow across pages, and the events that measure it. Consumes `/offer-architect` (the ladder) and `/positioning` (the pillars); feeds `/direct-response-copy`, which writes each section.

## Load first
1. `founder-profile/PROFILE.md`, `founder-profile/operating-playbooks.md` (value ladder + GTM), `founder-profile/decision-standards.md` (sell-before-build)
2. Active `ventures/<slug>/venture-context.md`
3. The `/offer-architect` value ladder (rungs + prices) and `/positioning` pillars for this venture.

## Method (full detail + worked example in `references/method.md`)
1. **Frame:** confirm the funnel's single conversion goal, the entry offer, and traffic temperature. Pull the ladder + pillars.
2. **Funnel shape (archetype-conditional):** match it to the venture's archetype, not a default DTC stack — goods/DTC → tripwire → bump/OTO → recurring checkout; services → diagnostic/pilot → engagement → retainer (application + booked call, not a checkout); marketplace → supply acquisition + demand acquisition → match / first transaction (no bump/OTO stack); subscription → free/trial → paid tier → expansion. Never force a high-ticket or two-sided offer through a checkout-and-bump flow.
3. **Page sections (in order):** hero/hook → problem → mechanism → proof → offer/stack → risk reversal → objections/FAQ → final CTA. Map each section to a pillar; each earns its place by advancing the CTA or removing an objection.
4. **Value-ladder flow (across pages) — mirror `/offer-architect`'s archetype ladder:** goods/DTC → entry → order bump → OTO1/OTO2 → recurring → high-ticket backend; services → diagnostic/pilot → core engagement → retainer/expansion; marketplace → get one side, then the other, then take a rate on the match (NOT a bump/OTO stack); subscription → free/trial → paid tier → expansion. Name each step's page, price, and the trigger to the next rung.
5. **Tracking/CTA events:** one primary CTA per page + the analytics event each step fires (view → lead → checkout → bump → purchase → subscribe → book-call), so the funnel is measurable end to end.

## Output contract
Block A — ordered page/section spec:

| # | Section | Job | Pillar / proof it carries | CTA |
|---|---|---|---|---|

Block B — funnel flow + tracking. **The FLOW shape is archetype-conditional** — emit the venture's, not a default DTC stack:
```
FLOW (goods/DTC):    Entry ($X, page) --bump--> Bump (+$Y) --OTO--> OTO ($Z) --> Recurring ($/mo) --> Backend ($$$)
FLOW (services):     Diagnostic/pilot ($X) --> Core engagement ($Y) --> Retainer ($/mo)
FLOW (marketplace):  Acquire supply + Acquire demand --> Match / first transaction (take-rate) — no bump/OTO
FLOW (subscription): Free/trial --> Paid tier ($/mo) --> Expansion
EVENTS (match the flow): DTC page_view → generate_lead → begin_checkout → add_bump → purchase → subscribe → book_call · services page_view → application_submit → call_booked → contract_sent · marketplace supply_signup / demand_signup → match_made → first_transaction · subscription page_view → sign_up → subscribe → expand
```
(Event names use the venture's analytics stack — GA4 for EE.)
(Prices come from `/offer-architect`; if a rung's price is unknown, use [PRICE TBD] and request it — never invent. Any emitted price carries the venture caveat "prices evolving — confirm live before customer-facing use.")

## Rules
- This skill *lays out* offers/prices from `/offer-architect`; it never invents them. Sections map to `/positioning` pillars.
- **Price:** pull prices from `/offer-architect`; if none exists, mark [PRICE TBD] and request it — never invent. Beside any emitted price, carry the venture caveat "prices evolving — confirm live before customer-facing use."
- One page, one goal, one primary CTA. Every section advances the CTA or kills an objection — cut the rest.
- Every step fires a tracking event; no unmeasured step. Match funnel shape to the venture's archetype (services/high-ticket = application/call, marketplace = match, not a checkout/bump stack).
- **Claims & capability (G-claims):** make only substantiated claims, and never imply a capability or deliverable the venture can't provide today. Honor the venture's own claims & regulatory constraints (from its `venture-context` + `engineering-backbone §9`); route any regulated claim (health / financial / legal / environmental) for professional review before publish.
- Spec only — the structure/spec is a draft; nothing goes live or published without approval.

## Examples & evals
- `references/method.md` — full method + a worked example (Executive Edge B2C $199 funnel + B2B cohort variant).
- `evals/evals.md` — 3 cases.
