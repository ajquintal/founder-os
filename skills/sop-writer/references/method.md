# /sop-writer — Full method & worked example

One level deep; does not fan out further. Lens: Gerber (E-Myth) — work *on* the business; systemize so it runs without the founder. An SOP that only Tony can run is not done.

## What an SOP is for here

The test of a system is that a cheaper model, Cowork, or a junior operator can run it correctly with no founder context and no tacit knowledge. Every part of the template exists to remove a reason the runner would otherwise have to ask Tony.

## The eight moves

1. **Capture the task.** Name it as a verb-object ("triage inbound B2B lead"). State the *trigger* (the event or schedule that starts it) and the one-line *outcome*. If scope is fuzzy, tighten it before writing steps — a vague SOP fails silently.
2. **Inputs & access.** Enumerate everything the runner needs before step 1: data, files, tools, tables, permissions. Name credentials by *reference* (where they live), never by value.
3. **Numbered steps.** One imperative action per step. No compound steps, no tacit knowledge — "check it looks right" is a defect; say what *right* is. Write for a runner who has never seen the task.
4. **Decision points.** Wherever the path branches, state the *condition*, each *branch*, and the *default*. Unresolvable ambiguity resolves to the safest reversible branch (delegation-protocol, unattended behavior) — never to an irreversible action.
5. **Guardrails as stop-conditions.** Identify which of the four gates the task can hit — spend / commit / external-send / Tony-only — plus the venture's own guardrails (LYV firewall, drafts-only, no medical or legal claims, secrets by reference). At a gate the runner *stops, produces the draft, and escalates*; it never crosses on its own.
6. **Output.** The exact finished artifact and where it lands — file path, drafts folder, CRM row. "Done" is a specific place, not a feeling.
7. **Check.** A verification the runner performs before declaring done: a checklist or test that confirms the artifact is correct and no guardrail was crossed. No SOP ships without a check.
8. **Founder-independence test.** Re-read as a zero-context runner. Any step that still needs Tony's judgment is extracted into an explicit escalation condition, and the rest of the procedure is written to run around it. If the whole task collapses to "Tony decides," say so — don't fabricate a delegable rule for an irreducible judgment call.

## Worked example (abridged) — weekly B2B sprint report (Executive Edge)

```
SOP:        Weekly B2B sprint report
OWNER:      Cowork (cheap model), unattended
TRIGGER:    Monday 08:00 schedule                         CADENCE: weekly
OUTCOME:    A finished sprint report (shipped / pipeline $ / killed / needs-Tony) in the sprint log
INPUTS & ACCESS:
  - the pipeline table in Supabase; the WEALTH_OPERATOR sprint log; Stripe collected-revenue (read)
  - venture context (offers, kill dates)                  (restricted Stripe key stored as an edge-function secret per operations-stack.md — never inline)
STEPS:
  1. Pull the week's collected revenue from Stripe (read-only).
  2. Pull pipeline by stage from the pipeline table in Supabase; total the dollars in motion.
  3. List assets shipped this week from the sprint log.
  4. DECISION: for each sales rail — if booked calls = 0 and today >= its kill date -> mark KILL-CANDIDATE; else carry forward.
  5. Assemble the block: SHIPPED / PIPELINE ($) / KILLED / NEEDS TONY (<=3, each <=15 min).
  6. Write the dated block to the sprint log; leave prior weeks intact.
GUARDRAILS (stop + escalate if hit):
  - secrets by reference — never echo the Stripe key or raw customer PII into the report.
  - LYV firewall — never pull lead/contact data from LYV sources.
  - drafts-only — the report is internal; send nothing external.
OUTPUT:     Dated report block -> the WEALTH_OPERATOR sprint log
CHECK (before done):
  - [ ] all four sections present   - [ ] pipeline $ reconciles to the pipeline table total   - [ ] no secret or raw PII in the text   - [ ] NEEDS-TONY <= 3 items
ESCALATE TO TONY WHEN: a kill-candidate rail needs a cut decision · revenue can't be read · a pipeline figure looks anomalous
```

Why it's delegable: every judgment the runner could get wrong is either a scripted decision (step 4) or an escalation (bottom line). Tony reads the report and acts on the <=3 asks — the machine did the rest. This is the delegation-protocol reporting rhythm turned into a procedure a cheap model runs every Monday without him.
