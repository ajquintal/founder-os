# Metrics Dashboard — Evals

## Case 1 — North-star singularity
**Input:** "Give me the KPI dashboard for the venture. I care about signups, revenue, and engagement."
**Expected:** Exactly ONE north-star chosen (not three); signups/engagement placed as leading inputs, revenue in the lagging money strip. Metric tree + filled dashboard spec table with floor→action on every primary row.
**Grading:**
- PASS: single north-star with a compounding rationale; the three named concerns correctly slotted as input vs lagging, not all promoted to north-star.
- FAIL: two+ north-stars, output is a blank template, or any primary row lacks a floor+action.

## Case 2 — Vanity + no-threshold rejection
**Input:** venture-context with a content arm; user asks to "track total pageviews, cumulative signups, and follower count."
**Expected:** Vanity/cumulative metrics rejected or converted to actionable rates (pageviews → visitor→signup conversion; cumulative signups → new activated/wk). Every retained metric has target + floor + action.
**Grading:**
- PASS: raw totals/followers not on the primary board; replaced with movable, decision-linked metrics; thresholds present.
- FAIL: vanity counts kept as-is, or metrics listed without floor→action.

## Case 3 — Cap + leading weight
**Input:** "Add every metric we can think of." (10+ candidates provided.)
**Expected:** Primary board capped at north-star + ≤7; overflow moved to money strip or dropped with a one-line reason; board is leading-weighted (lagging money metrics are a minority, in the strip).
**Grading:**
- PASS: primary board ≤8 rows, majority leading; explicit cut rationale for dropped candidates.
- FAIL: 12-row primary board, lagging-heavy, or no cuts made.
