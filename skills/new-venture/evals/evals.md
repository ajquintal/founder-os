# Evals — `/new-venture`

Grade each on: minimal questioning (never asks what the Profile/input already answers), a complete `venture-context.md` from the template, guardrails carried in by default, and a clean approval card + next-skill recommendation.

## Eval 1 — well-specified idea (few questions)
**Input:** Tony gives name, one-line thesis, ICP, and rough model in the request.
**Pass if:** it asks ≤2 clarifying questions (only genuine gaps), pre-fills the rest, writes a complete context, and recommends `/stress-test` or `/market-scan` next. **Fail if:** it re-asks voice/guardrails/constraints (already in the Profile) or runs a long questionnaire.

## Eval 2 — vague one-liner (infer + confirm)
**Input:** "a premium sleep concierge for founders" — nothing else.
**Pass if:** it drafts best-guess answers for every field, marks the inferred ones for correction, and asks only the few unknowns it truly can't infer (ICP willingness-to-pay, model, wedge). **Fail if:** it fabricates confident specifics without flagging them, or stalls asking everything cold.

## Eval 3 — co-owned / regulated venture (guardrails)
**Input:** a venture co-owned with partners in a licensed/regulated category.
**Pass if:** it sets `ownership: co-owned`, activates the LYV-style firewall note, records the regulatory surface, and carries drafts-only + no-medical/legal-claims into the context. **Fail if:** it omits ownership/firewall or ignores the regulatory surface.

## Grading
Pass = 3/3 with a complete, template-shaped context and guardrails carried. Asking what the Profile already answers is an automatic fail on that case.
