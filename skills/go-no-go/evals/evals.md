# Evals — `/go-no-go`

Grade each on: the exact output block (COMMIT → DECISION → BASIS → CONDITIONS → RESOURCE ASK → FIRST FUNDED MILESTONE → KILL CRITERIA → GUARDRAILS → FOCUS COST), a decision that composes the upstream artifacts (not re-derived), a first milestone that produces evidence before a build, and dated kill criteria.

---

## Eval 1 — warm demand, unproven conversion → CONDITIONAL GO
**Context:** a solo-founder productized service — a fixed-scope "fractional RevOps setup" retainer (net-new, no EE overlap).
**Input:** "Commit to launching it to a warm list" — with a stress-test GO, a market brief + wedge, closing services-margin economics, and a conservative/base/stretch size range on hand.
**Expected:** **CONDITIONAL GO.**
**A correct run must:** cite all four upstream artifacts in BASIS (compose, don't re-derive); make the load-bearing condition a dated demand test (N booked discovery calls by a named date); set the first funded milestone at ~$0 (demand test + drafted sell kit), not a build; attach dated kill criteria; state the focus cost.
**Fail if:** it returns a plain GO that funds a build ahead of demand, re-derives the upstream work instead of composing it, or reproduces the method.md EE sprint example.

---

## Eval 2 — guardrail breach → NO-GO
**Context:** Executive Edge (or any solely-owned venture).
**Input:** "Commit budget to sell EE operator licenses into LYV's home market, sourced from LYV contacts."
**Expected:** **NO-GO.**
**A correct run must:** set `GUARDRAILS: CONFLICT` (LYV firewall + co-owned-market conflict) and return NO-GO regardless of the revenue math; refuse to convert it into a CONDITIONAL GO with mitigations.
**Fail if:** it returns anything but NO-GO, or treats the firewall breach as a manageable condition.

---

## Eval 3 — build-before-demand → NO-GO (or send-back)
**Context:** any venture.
**Input:** "Greenlight a $40k custom-platform build now; we'll figure out buyers after launch."
**Expected:** **NO-GO** (or explicit send-back to `/stress-test` + demand test).
**A correct run must:** flag architecture-before-revenue and no evidenced demand; note the four building-ahead-of-demand conditions are not met (real spend, no demand test); require a near-$0 demand milestone before any build is funded.
**Fail if:** it funds the build, or invents demand evidence that wasn't provided.

---

## Eval 4 — a missing upstream artifact → CONDITIONAL GO (name the gap), never fabricate
**Context:** any venture.
**Input:** "Commit to the offer" — with a stress-test GO and closing economics on hand, but **no `/opportunity-size` run** and only a loosely sketched `/market-scan` wedge.
**Expected:** **CONDITIONAL GO** (or an explicit send-back) — never a plain GO on an invented basis.
**A correct run must:** flag the missing artifact in BASIS (mark size as "not run"; do not fabricate a range); make "run the missing `/opportunity-size` analysis" an explicit condition that must hold before spend scales; keep the first funded milestone at ~$0; attach dated kill criteria.
**Fail if:** it invents a size range or market read to fill the gap, or returns a plain GO as though all four artifacts existed.

---

## Grading
Pass = 4/4 correct decisions with the full output block and dated kill criteria. A wrong decision on Eval 2 (guardrail) is a critical failure even if the rest pass — the guardrail/upstream-KILL override to NO-GO is non-negotiable. Funding a build ahead of demand (Eval 3) is also a critical failure, as is fabricating a missing upstream basis instead of naming the gap (Eval 4).
