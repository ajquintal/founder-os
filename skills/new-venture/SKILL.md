---
name: new-venture
description: >-
  Stand up a new Venture Context in minutes so the whole Founder OS instantly specializes to a new
  business or idea — any industry. Interviews Tony only for what can't be inferred, pre-fills from the
  Founder Profile, and writes ventures/<slug>/venture-context.md plus an approval card. Use when
  starting or capturing a new venture, product line, or serious idea. Triggers: "new venture",
  "start a venture", "set up <name>", "capture this idea as a venture", "spin up".
---

# /new-venture — Venture Intake

The scalability engine. One short intake → a complete venture context that every other skill reads. This is how the OS serves any number of businesses without hard-coding one.

## Load first
- `founder-profile/PROFILE.md` (to pre-fill defaults — voice, standards, guardrails, constraints)

## Method (full detail in `references/intake-method.md`)
1. **Pre-fill from the Profile.** Don't ask what the OS already knows (voice default, guardrails, time/budget constraints, kill discipline). Carry them in silently.
2. **Interview only for the unknowns**, in one pass, grouped and fast — ≤10 questions as a hard cap, but ask only genuine gaps — often 0–2 for a well-specified idea. Skip any the user already stated. The fields are the template in `references/venture-context-template.md`.
3. **Infer, then confirm.** Draft best-guess answers from anything provided and mark them for the user to correct, rather than asking open questions cold.
4. **Write** `ventures/<slug>/venture-context.md` from the template (slug = kebab-case name).
5. **Emit a one-screen approval card** — the venture in a glance — for a single yes/adjust before downstream skills run.

## Output contract
- `ventures/<slug>/venture-context.md` populated to the template.
- An approval card: name · thesis · ICP · model · wedge · stage · goal + kill criteria · the 3 riskiest unknowns.
- The obvious next skill to run (usually `/stress-test` for a raw idea, or `/market-scan` for a category not yet mapped).

## Rules
- Minutes, not a meeting. Every question must be one the OS genuinely can't infer.
- Stay industry-agnostic — capture the venture's reality; never impose Executive Edge's assumptions.
- Carry the guardrails into the new context (LYV firewall, drafts-only, claims limits) by default.

## Examples & evals
- `references/venture-context-template.md` — the exact file structure produced.
- `references/intake-method.md` — the interview script and inference rules.
- `evals/evals.md` — 3 cases (well-specified idea, vague one-liner, co-owned/regulated).
