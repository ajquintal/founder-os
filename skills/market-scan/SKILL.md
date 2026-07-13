---
name: market-scan
description: >-
  Produce a sized, sourced market + competitor brief for a venture or idea's category, with the
  wedge (the one differentiated thing to lead with) called out. Use when validating demand, sizing
  an opportunity, pricing against the market, or mapping competitors — in Concept stage or before a
  pricing/positioning decision. Triggers: "market scan", "size this market", "who are the competitors",
  "competitive landscape", "is there demand for".
---

# /market-scan — Market & Competitor Scan

A sized, sourced view of a category and its players, ending in the wedge. Feeds `/offer-architect` and `/stress-test`.

## Load first
1. `founder-profile/PROFILE.md`, `founder-profile/decision-standards.md`
2. Active `ventures/<slug>/venture-context.md` if the idea belongs to a venture; else evaluate the idea as stated.

## Method (full detail + worked example in `references/method.md`)
1. Frame the category and the buyer from the venture context (or the idea).
2. **Multi-angle web research fan-out** — run these as independent searches, blind to each other:
   - Market size + growth (TAM, CAGR, recent capital invested)
   - Incumbents + their pricing (pricing pages, plans, filings)
   - Positioning + messaging (how each describes itself)
   - Gaps + complaints (reviews, forums — what buyers say is missing)
3. Dedupe + reconcile; keep only sourced facts.
4. Build the competitive-positioning table (competitor · price · what they do · where they're weak).
5. Name the **wedge**: the one thing none of them ship that this venture can own.

## Output contract
- One-paragraph market read (size, growth, momentum), each figure sourced.
- Competitor table (≥3 rows) with a "weakness we exploit" column.
- Pricing benchmarks: the observed range + where this venture should sit and why.
- The wedge (one sentence) + the single riskiest thing the scan could not confirm.
- Sources list — every claim linkable.

## Rules
- Every number carries a source. No source → label it an assumption, don't assert it.
- Prefer primary sources (pricing pages, filings) over secondary write-ups.
- **Needs web access.** If web is unavailable, produce a PROVISIONAL brief with every figure labeled unverified and say web was unavailable — never fabricate.

## Examples & evals
- `references/method.md` — full method + a worked example.
- `evals/evals.md` — 3 cases with expected outputs.
