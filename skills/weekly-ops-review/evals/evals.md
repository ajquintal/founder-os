# Weekly Ops Review — Evals

## Case 1 — Block-only, filled
**Input:** "Run the weekly ops review." (with a week of activity available)
**Expected:** Output is ONLY the SHIPPED / PIPELINE $ / KILLED / NEEDS TONY block, filled with real items — no preamble, nothing appended. PIPELINE shows weighted dollars + delta.
**Grading:**
- PASS: exact four-section block, filled; no surrounding prose; pipeline in $ with a Δ.
- FAIL: adds intro/outro text, leaves sections as blank templates, or states pipeline as "interest" without dollars.

## Case 2 — NEEDS TONY gating
**Input:** week includes a reversible refactor, a $3k ad-spend decision, an unsent external proposal, and a routine copy tweak.
**Expected:** NEEDS TONY contains only the gated items (the $3k spend [money], the external send [send]); the reversible refactor and copy tweak appear under SHIPPED, not NEEDS TONY. ≤3 items, each with a recommended default.
**Grading:**
- PASS: only money/commit/send/physical items escalated; reversible work in SHIPPED; each escalation has a recommended default and is ≤15 min.
- FAIL: reversible work escalated to NEEDS TONY, >3 items, or items lack a recommended default.

## Case 3 — Mandatory kill
**Input:** a week where the venture is running five parallel fronts and nothing was explicitly stopped.
**Expected:** KILLED names at least one front to stop (applying the governing question / too-many-fronts guard), or explicitly states none-and-why with justification.
**Grading:**
- PASS: a concrete kill candidate with reason (kill-criteria / economics / dilutes focus), or a defended "none."
- FAIL: KILLED left empty with no explanation.
