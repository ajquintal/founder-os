---
name: launch-plan
description: >-
  Build a launch sequence — pre-launch → launch → post-launch — with owners, relative dates, the assets
  each phase needs, a hard launch-readiness gate, and an hour-by-hour launch-day runbook. Use when planning a
  launch of an offer, feature, or product, building a launch checklist/runbook, or deciding whether
  you're ready to launch. External sends and cart-open are approval gates — the plan is drafted, not
  fired. Triggers: "launch plan", "launch this", "launch checklist", "launch-day runbook",
  "waitlist/cart-open", "are we ready to launch".
---

# /launch-plan — Launch Sequence

A phased launch plan with owners, relative dates, a hard launch-readiness gate, and a launch-day runbook. Reads `/offer-architect` (the offer being launched), `/landing-funnel` (the converting page/flow), and `/direct-response-copy` (the launch copy); runs after the `/go-no-go` commit gate has greenlit the venture. Applies `founder-profile/decision-standards.md` (go/refine/kill) at the gate.

> The launch-readiness gate below is distinct from the `/go-no-go` skill: `/go-no-go` commits money and founder-time to the venture; this gate only confirms the launch itself is ready to fire.

## Load first
1. `founder-profile/PROFILE.md`, `founder-profile/decision-standards.md` (go/no-go, reversibility), `founder-profile/operating-playbooks.md` (sell before build), `founder-profile/guardrails.md` (drafts only, no spend, irreversible actions)
2. Active `ventures/<slug>/venture-context.md`
3. Latest `/offer-architect` (the offer, economics, rung), `/landing-funnel` (the converting page/flow), and `/direct-response-copy` (the launch copy) outputs, if they exist.
4. The `/go-no-go` verdict for this venture, if it exists — this launch plan runs after that commit gate greenlights the venture (a separate decision from the launch-readiness gate below).

## Method (full detail + worked example in `references/method.md`)
1. **Define the launch.** What ships, the launch type (seed / waitlist / open-cart / feature), the *single* success metric + target, and the window.
2. **Set the launch-readiness gate.** The objective criteria that must *all* be true to launch: offer validated, assets finished, tech verified in prod, economics proven, support ready. Miss one → no-go. (Ship live over perfect — but never launch broken.)
3. **Pre-launch (T-minus).** Warm the audience, finish assets, verify tech, seed proof. Owner + relative date per item.
4. **Launch (T-0…T+N).** The send/open sequence + monitoring. Every external send is an approval gate.
5. **Post-launch (T+N…).** Follow-up, downsell/nurture, retro, and the kill/scale decision against the metric.
6. **Assets register.** Every asset, owner, status — so nothing ships half-done.

## Output contract
- **Phased checklist:** phase · item · relative date (T-14…T+14) · owner · asset needed · done-criteria — for Pre-launch / Launch / Post-launch.
- **Launch-readiness gate (boxed):** the objective pass/fail criteria; miss one = no-go.
- **Launch-day runbook:** ordered steps with time (T-0, +1h, +4h…) · action · what to monitor · approval gate · rollback/abort trigger.
- **Assets register:** asset · owner · status — so nothing ships half-done.

## Rules
- Drafts only; external sends and cart-open are explicit approval gates — never auto-fire.
- No-go if any gate criterion fails. State it plainly; don't launch to hit a date.
- No spend without approval. Voice per `founder-profile/voice-and-brand.md`; no banned words. LYV firewall on audience/assets.
- Respect venture claims guardrails (EE: no medical claims; never "physician review"/"medical team"); on public pages, Rx/peptide/GLP or health claims must be compliance-reviewed (LegitScript-grade).
- Never imply a live team/cohort dashboard pre-contract — reference only what ships today.
- Any emitted copy or email sequence carries a **[DRAFT — not for send/publish until approved]** label.

## Examples & evals
- `references/method.md` — full method + a worked example (Executive Edge).
- `evals/evals.md` — 3 cases with expected outputs.
