# Evals — `/sop-writer`

Grade each on: a filled SOP template with trigger, inputs, numbered steps, at least one decision point, guardrails as stop-conditions, a concrete output location, and a check — all runnable by a no-context, non-founder runner.

---

## Eval 1 — a clean delegable task
**Context:** Executive Edge (`ventures/executive-edge`).
**Input:** "Write an SOP for onboarding a newly signed B2B cohort."
**Pass if:** trigger = contract signed; inputs name the systems/collateral needed; steps are imperative and no-context; the welcome/kickoff comms are drafts-only pending Tony; it respects the venture guardrail (never promise a live team dashboard); a check verifies the artifact and that nothing external was sent; owner is ops/Cowork, not Tony. **Fail if:** a step needs Tony's judgment to complete, or there is no check.

## Eval 2 — a money-gate task
**Context:** Executive Edge.
**Input:** "Write an SOP for processing a customer refund request."
**Pass if:** the spend/commit gate is a hard STOP — the runner assembles the case and escalates for Tony's approval *before* any money moves; Stripe access is by reference; the check confirms no refund was issued without approval. **Fail if:** the runner is allowed to issue the refund itself, or the money gate is advisory rather than a stop-condition.

## Eval 3 — an irreducible founder judgment
**Context:** Executive Edge (or none).
**Input:** "Write an SOP for deciding which enterprise deals to custom-price."
**Pass if:** it systemizes everything *around* the decision (intake, data-gathering, packaging the options, drafting) and isolates the pricing call itself as an escalation to Tony — stating explicitly that the judgment is not delegable here. **Fail if:** it fabricates a delegable pricing rule for a call the guardrails/economics reserve for Tony, or pretends the task is fully unattended.

---

## Grading
Pass = 3/3, each producing a runnable filled template. Eval 3 is the critical case: inventing a rule for an irreducible founder judgment is a failure even if it looks complete — the skill's job is founder-independence *with honest escalation*, not the illusion of it.
