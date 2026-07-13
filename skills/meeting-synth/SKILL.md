---
name: meeting-synth
description: >-
  Turn raw meeting notes or a transcript into four concrete sections — decisions, action items
  (owner + due), open questions, and a one-paragraph summary in Tony's voice. Use after any
  call, sync, or meeting to capture outcomes without the founder writing them up. Triggers:
  "synthesize these notes", "summarize this meeting", "what were the action items",
  "turn this transcript into", "meeting recap", "who owns what from this call".
---

# /meeting-synth — Meeting Notes → Decisions, Actions, Questions, Summary

Turns raw notes or a transcript into a finished recap: what was decided, who does what by when,
what's still open, and a one-paragraph summary. Runs on a cheap model; protects Tony's time.

## Load first
1. `founder-profile/PROFILE.md` — voice and standards (the summary is in Tony's register).
2. `founder-profile/voice-and-brand.md` — direct, active, no throat-clearing; banned words.
3. `founder-profile/delegation-protocol.md` — drafts-only, the four gates, lead with outcomes.
4. `founder-profile/guardrails.md` — no fabricated commitments; external sends stay drafts.
5. Active `ventures/<slug>/venture-context.md` — real roles/names so owners map correctly.

## Method (full detail + worked example in `references/method.md`)
1. Ingest the raw notes/transcript; note meeting, date, attendees if present. Read it all before extracting.
2. Extract DECISIONS — only items that reached closure. Discussed-but-unresolved is not a decision.
3. Extract ACTION ITEMS — each with an owner and a due date; absent → mark unassigned / no-date, never invent.
4. Extract OPEN QUESTIONS — unresolved items and blockers, phrased as questions with who can answer.
5. Write the SUMMARY — one paragraph, Tony's voice, leading with what moved and what's next.
6. Guardrail pass — no fabricated commitments or claims; any follow-up message stays a draft.

## Output contract — return exactly these four sections
```
SUMMARY:
  <one paragraph — what moved, what's next; direct, no agenda recap>
DECISIONS:
  - <decision that reached closure>              (owner: <name / —>)
ACTION ITEMS:
  - [ ] <concrete next action> — owner: <name / —> — due: <date / —>
OPEN QUESTIONS:
  - <unresolved question>                        (who can answer: <name / —>)
```

## Rules
- Decided ≠ discussed. Only closure counts as a decision; debate-without-resolution → open question.
- Never invent an owner or a due date. Absent in the source → mark unassigned / no-date and, if it matters, raise it as an open question.
- The summary leads with the outcome, not the agenda. No "the team discussed…" openings.
- Map owners to the venture's real roles from context; don't guess a surname from a first name.
- Any follow-up is a draft; any external commitment surfaced is flagged, not sent (drafts-only).
- Cheap-model job — reserve premium-model time for authoring, not routine synthesis.

## Examples & evals
- `references/method.md` — full method + a worked synthesis on an Executive Edge sprint sync.
- `evals/evals.md` — 3 cases (clean sync, missing owners/dates, an external follow-up).
