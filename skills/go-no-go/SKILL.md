---
name: go-no-go
description: >-
  The formal commit gate. Composes `/stress-test`, `/market-scan`, `/offer-architect`, and
  `/opportunity-size` into ONE resource-commitment decision — GO / CONDITIONAL GO / NO-GO — with the
  conditions that must hold, the first funded milestone, and dated kill criteria. Use when deciding
  whether to actually commit money, founder-hours, or a build to a venture/offer/channel — the gate
  AFTER the early idea filter, not a replacement for it. Triggers: "should we commit", "greenlight
  this", "go/no-go", "are we funding this", "commit gate", "do we pull the trigger".
---

# /go-no-go — Commit Gate

The resource-commitment decision. `/stress-test` filters ideas cheaply; this gate commits money, time, and build — and only after the upstream work exists. It synthesizes; it does not re-derive.

## Load first
1. `founder-profile/PROFILE.md`, `founder-profile/decision-standards.md`, `founder-profile/guardrails.md`.
2. Active `ventures/<slug>/venture-context.md` — the primary bet, budget ceiling, founder-time cap, kill gates.
3. The four upstream artifacts if they exist: `/stress-test` verdict · `/market-scan` brief · `/offer-architect` economics · `/opportunity-size` range. **Missing one → run it or name the gap as a condition; never hand-wave.**

## Method (full detail + worked example in `references/method.md`)
1. **Assemble the basis.** Gather the four inputs. An upstream **KILL** or a guardrail conflict ends it → NO-GO (don't relitigate). A REFINE must be resolved before this gate.
2. **Score the commit on the axes** (each pass / concern / fail): compounds vs new front · economics close · demand evidenced · focus cost acceptable · reversibility/kill-ability · founder-dependence · guardrails clear.
3. **Size the resource ask** explicitly: $ spend, founder-hours, calendar time, and what it displaces — measured against the mandate (Tony ≤2 hrs/wk, budget ceiling, $0 until demand proven).
4. **Decide** (thresholds in `references/method.md`): **GO** (commit the first milestone now), **CONDITIONAL GO** (fund the test, not the build — commit only if named conditions hold), **NO-GO** (guardrail breach, economics don't close, taxes the primary bet, or demand unproven and the test isn't cheap).
5. **Fund the smallest evidence-producing step.** The first milestone must produce revenue evidence or de-risk the load-bearing assumption — usually a manual sale, not a build. Attach dated kill criteria consistent with the venture's gates.

## Output contract — return exactly this block
```
COMMIT:      <one sentence — the resource commitment being gated>
DECISION:    GO | CONDITIONAL GO | NO-GO
BASIS:       stress-test <verdict> · market <read+wedge> · economics <closes/unproven> · size <range>
CONDITIONS THAT MUST HOLD:
  1. <condition> — verified by <test/date>
  2. <…>
RESOURCE ASK:  $<spend> · <founder-hours> · <calendar> · displaces <what>
FIRST FUNDED MILESTONE:  <smallest resourced step that produces evidence> — budget $<…> — by <date>
KILL CRITERIA:  <metric + threshold + date> → stop & reallocate
GUARDRAILS:  clear | CONFLICT: <…>
FOCUS COST:  <what committing displaces from the primary bet>
```

## Rules
- **Compose, don't re-derive.** Cite the upstream artifacts; if one is missing, run it or make its absence a condition.
- **Guardrail conflict or upstream KILL = NO-GO.** Non-negotiable, regardless of upside.
- **Sell before build.** Fund the cheapest evidence step first; a build milestone with no demand test is a NO-GO tell (unless all four "building-ahead-of-demand" conditions in `founder-profile/decision-standards.md` hold).
- **Kill criteria are mandatory and dated.** No open-ended commitments.
- **Protect the primary bet.** State the focus cost; if the commit taxes the current primary bet, cap the verdict at CONDITIONAL GO.
- **Drafts/approval boundary.** This gate recommends; actual spend, signing, and sends still require Tony's explicit approval.

## Examples & evals
- `references/method.md` — full method + a worked example on the EE B2B sprint.
- `evals/evals.md` — 3 cases (conditional-go with warm demand, no-go guardrail breach, no-go build-before-demand).
