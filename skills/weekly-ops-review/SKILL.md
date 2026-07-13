---
name: weekly-ops-review
description: Run the weekly operating review and output the filled SHIPPED / PIPELINE $ / KILLED / NEEDS TONY block — what shipped and the metric it moved, pipeline in dollars with the weekly delta, what's killed and why, and the ≤3 decisions that need the founder. Use for the weekly ops review, end-of-week roundup, or when asked "what shipped / where are we this week." Triggers: "weekly review", "ops review", "what shipped this week", "where are we this week", "end-of-week roundup", "weekly report".
---

# /weekly-ops-review — Weekly Operating Review

Purpose: compress the week into the founder's report block — evidence of compounding, pipeline in dollars, ruthless kills, and only the decisions that genuinely need the founder.

## Load first
1. `founder-profile/PROFILE.md` — governing question, DRIVE stance, reporting format.
2. `ventures/<slug>/venture-context.md` — current sprint, goals, prior review if present.
3. Latest `/metrics-dashboard` output — the north-star + KPIs this review reports movement on, if it exists.

Pull the week's activity from available sources; never hard-code an industry.

## Method (full detail + worked example in `references/method.md`)
1. **SHIPPED.** List reversible work finished this week (merged/deployed/finished assets, drafts the founder sent). Tie each to the metric or dollar it moved.
2. **PIPELINE $.** Sum open opportunities in dollars, weighted; show the delta vs last week (added / advanced / slipped). Split B2B and B2C if both exist. No "lots of interest" — numbers only.
3. **KILLED.** Name what you stopped or recommend stopping and why — failed kill-criteria, negative economics, or dilutes focus (apply the governing question). Killing nothing is a red flag; state none-and-why if so.
4. **NEEDS TONY.** ≤3 items, each ≤15 min, each genuinely gated: money / commitment / external-send / physical-only. Phrase as a decision with a recommended default. If it's reversible, you did it — it's in SHIPPED, not here.
5. **Assemble** the exact block, filled, and output only that.

## Output contract
Output ONLY this block, filled (no preamble, nothing appended):

```
SHIPPED
- <item> → <metric/$ moved>

PIPELINE $
- <line>: $<weighted> (<Δ vs last week>)
Total open: $<sum> | Δ $<change>

KILLED
- <item> — <reason: kill-criteria / economics / dilutes focus>

NEEDS TONY (≤3, ≤15 min each)
1. <decision> — recommended: <default>. [money|commit|send|physical]
```

## Rules
- The block IS the deliverable. Output it filled; append nothing.
- NEEDS TONY ≤3, each ≤15 min, each truly gated (money/commit/send/physical). Reversible work is already done and lives in SHIPPED.
- PIPELINE in weighted dollars with the delta — never vibes.
- KILL is mandatory: at least one candidate, or explicit none-and-why.
- Every SHIPPED line ties to a metric or dollar where possible.
- Drafts stay drafts; mark "sent" only if the founder sent it. No secrets in the block.

## Examples & evals
- EE mid-B2B-sprint example filled end-to-end in `references/method.md`.
- Graded cases in `evals/evals.md` (block-only output, NEEDS-TONY gating, kill present).
