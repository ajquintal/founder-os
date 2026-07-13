---
name: stress-test
description: >-
  Stress-test a raw idea, opportunity, or bet against Tony's decision standards and
  documented failure modes and return a GO / REFINE / KILL verdict with the make-or-break
  assumptions and the cheapest test for each. Use BEFORE building or spending — when weighing
  a new venture, feature, offer, price change, channel, hire, or partnership. Triggers:
  "should I", "is this worth doing", "stress-test this", "gut-check this idea".
---

# /stress-test — Idea Stress-Test & Kill Filter

Kills bad bets cheaply and sharpens good ones. This is the antidote to the overbuild and
too-many-fronts patterns — it makes narrowing and killing fast and unemotional.

## Load first
1. `founder-profile/PROFILE.md` — identity, failure modes, the governing question.
2. `founder-profile/decision-standards.md` — the go/refine/kill heuristics.
3. `founder-profile/guardrails.md` — the hard rules.
4. The active `ventures/<slug>/venture-context.md` **if the idea belongs to an existing venture.**
   If it's a brand-new idea with no context yet, evaluate against the Founder Profile + the idea as stated.

## When to use / when not
- **Use** for any decision to spend money, build, launch, hire, sign, or open a new front.
- **Don't use** for reversible, ~$0, already-decided execution — just do it (see `founder-profile/delegation-protocol.md`).

## Method (summary — full rubric in `references/method.md`)
1. **Restate the bet** in one sentence: the action + the claimed outcome. Reject fuzzy framing before anything else.
2. **Governing filter:** does this compound wealth, or feel productive while diluting focus?
3. **Make-or-break assumptions:** name the ≤3 things that must be true; rate confidence H/M/L; give the cheapest test for each.
4. **Red-team:** argue the strongest case to KILL (demand, economics, focus, timing, competition).
5. **Failure-mode filter** — auto-flag any that fire: new front · architecture-before-revenue · standards-as-bottleneck · future-state bias · founder-dependence.
6. **Economics gate:** do the unit economics plausibly close **(in the venture's money model — goods/services/marketplace/subscription, not a default AOV/LTV frame)**? If unknown → that's a make-or-break assumption, not a pass.
7. **Guardrail check:** any conflict (LYV firewall, reputation, legal, drafts-only, medical/legal claims)? A breach is an automatic KILL/escalate.
8. **Verdict** using the output contract below.

## Output contract — return exactly this block

```
BET:        <one sentence>
VERDICT:    GO | REFINE | KILL
WHY:        <2–4 sentences, Tony's voice — direct, no fluff>
MAKE-OR-BREAK ASSUMPTIONS:
  1. <assumption> — confidence H/M/L — cheapest test: <…>
  2. <…>
  3. <…>
FAILURE-MODE FLAGS:  <which traps fired, or "none">
ECONOMICS:  <plausible | unproven | doesn't close> — <one line>
GUARDRAILS:  <clear | CONFLICT: …>
FOCUS COST:  <what pursuing this displaces>
NEXT:        <if GO/REFINE: the single next action + its kill window>
```

## Rules
- Be brutal and specific. "It depends" is failure. Default toward protecting focus.
- A guardrail conflict makes the verdict KILL (or escalate to Tony) regardless of upside.
- Name the focus cost every time — every yes is a no to something else.
- Reserve premium-model reasoning for the red-team and the assumptions; the rest is mechanical.

## Examples & evals
- `examples/worked-example.md` — a full run on a non-wellness idea (proves it's industry-agnostic).
- `evals/evals.md` — 3 cases (a GO, a shiny distraction, a guardrail-breach KILL) with expected verdicts and a grading rubric.
