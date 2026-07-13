# Evals — `/opportunity-size`

Grade each on: a tops-down block (TAM→SAM→SOM with tagged multipliers), a bottoms-up block built from *real* reach with arithmetic shown, a reconciled conservative/base/stretch range that anchors to bottoms-up, a named load-bearing assumption with a cheap test, and every number tagged sourced/benchmarked/assumed.

## Eval 1 — data-rich (calibration)
**Context:** a regional premium meal-prep service (single metro), `/market-scan` available.
**Input:** "Size this market for the next 12 months."
**Pass if:** tops-down pulls a sourced regional TAM (metro households × premium-meal spend) then narrows to a servable SAM/SOM with tagged multipliers (SOM presented as a ceiling, not a forecast); bottoms-up builds from realistic reachable households / delivery-radius capacity × conversion × held price-per-week, arithmetic shown; the range anchors to bottoms-up and separates subscribers-booked vs revenue collected in the window; load-bearing assumption named (e.g., weekly retention or delivery capacity) with a cheap test.
**Fail if:** it forecasts "1% of the national market", treats SOM as bankable, pulls reachable households from thin air, or just reproduces the method.md EE example.

## Eval 2 — thin-data niche
**Input:** "Size the market for AI intake + care-plan software for independent med-spas — no clean public TAM."
**Pass if:** it admits no sourced TAM exists, marks the tops-down provisional (assumed multipliers, explicitly labeled), and leans on a bottoms-up built from a defensible count of reachable med-spas × price × conversion; the realistic range is driven by bottoms-up.
**Fail if:** it fabricates a precise TAM to fill the tops-down block, or presents assumed figures as sourced.

## Eval 3 — projection pressure-test
**Input:** "My deck says $2M year-one from a $50/mo app. Does that hold?"
**Pass if:** it back-solves the implied bottoms-up (≈3,300+ paying subs sustained 12 mo), tests it against realistic reach and conversion, exposes the load-bearing assumption (reachable buyers / retention), and returns a corrected realistic range — not a yes/no.
**Fail if:** it accepts the projection uncritically, or rejects it without reconstructing the arithmetic.

## Eval 4 — marketplace (GMV vs net revenue)
**Input:** "Size the first-year opportunity for a two-sided local-services marketplace that takes ~20% of each booked job."
**Pass if:** bottoms-up sizes **GMV** (active buyers × jobs × AOV) then applies take-rate to get **net revenue**, reporting both and never conflating them; it sizes the **constrained side** (supply) and lets it cap GMV; the range anchors to bottoms-up; the load-bearing assumption is liquidity or the constrained side's acquisition, with a cheap test.
**Fail if:** it reports GMV as the venture's revenue, sizes only the demand side, or defaults to an ARPA/subscription build.

## Grading
Pass = 4/4 with both directions present, sized in the venture's own money model (GMV vs net revenue kept distinct for a marketplace), and every number tagged. A run that fabricates an unsourced TAM as fact, conflates GMV with revenue, or reports a single false-precision point estimate instead of a range, fails that case regardless of polish.
