---
name: paid-ads
description: >-
  Build a disciplined paid-acquisition plan — angles/hooks, a filled creative brief, targeting, and a
  budget-test structure that stays at $0 until demand is proven, then tests small against proven unit
  economics with hard kill thresholds. Use when planning paid media, writing ad angles/creative, setting
  an ad budget, or deciding whether to run ads at all. Triggers: "paid ads", "run ads", "Meta/Google ads",
  "ad angles", "ad creative", "ad budget", "should we run ads", "scale acquisition".
---

# /paid-ads — Paid Acquisition Plan

A paid plan that spends $0 until demand is proven, then tests small against known economics and kills losers fast. Reads `/offer-architect` (the economics gate) and `/market-scan` (angles from competitor gaps).

## Load first
1. `founder-profile/PROFILE.md`, `founder-profile/operating-playbooks.md` (economics-first, GTM), `founder-profile/decision-standards.md`, `founder-profile/guardrails.md` (money: no spend without approval)
2. Active `ventures/<slug>/venture-context.md`
3. Latest `/offer-architect` economics and `/market-scan` brief for this venture.

## Method (full detail + worked example in `references/method.md`)
1. **Demand gate.** Is demand proven (organic sales, waitlist, warm conversion)? If not → recommend $0 paid and fix offer/organic first. State it plainly.
2. **Lock economics.** From `/offer-architect`: margin, target CAC, payback window. Compute break-even ROAS (1 ÷ margin) and the **max CPA** you can pay. This is the discipline anchor for every later decision.
3. **Generate angles.** Distinct *value hypotheses* (Hormozi desire/objection; Christensen JTBD): mechanism, dream outcome, objection-crusher, status, speed. Not color swaps.
4. **Write hooks.** 2–3 per angle: problem / promise / proof; pattern-interrupt first line.
5. **Fill one creative brief** as the reusable template — angle, hook, format, primary text, headline, CTA, targeting, landing-page match, success metric.
6. **Design the test plan.** Small daily budget, one variable per test, a spend cap per angle, numeric kill thresholds (CPA ceiling, CTR floor, spend/time limit), and the scale rule for a winner.

## Output contract
- **Angle list:** # · angle · lens · core desire/objection · hook (lead) · offer rung.
- **Creative brief (filled once):** angle · hook · format · primary text · headline · CTA · audience/targeting · LP · success metric. **[DRAFT — creative not for publish; spend requires approval]**
- **Test plan:** test · variable · budget/day · spend cap · kill threshold (numeric) · scale rule.
- The single metric the whole plan lives or dies on (usually front-end CPA vs max CPA).

## Rules
- **No spend without approval.** The plan and creative are drafts; launching spend is Tony's call.
- $0 until demand is proven; then small tests only. Never scale an unproven angle.
- Kill fast: enforce the spend cap — a losing angle dies at the cap, no "one more day."
- Voice per `founder-profile/voice-and-brand.md`; no banned words. LYV firewall on audiences and creative.
- **Claims & capability (G-claims):** make only substantiated claims, and never imply a capability or deliverable the venture can't provide today. Honor the venture's own claims & regulatory constraints (from its `venture-context` + `engineering-backbone §9`); route any regulated claim (health / financial / legal / environmental) for professional review before publish.
- **Price:** pull prices from `/offer-architect`; if none exists, mark [PRICE TBD] and request it — never invent. Beside any emitted price, carry the venture caveat "prices evolving — confirm live before customer-facing use."

## Examples & evals
- `references/method.md` — full method + a worked example (Executive Edge).
- `evals/evals.md` — 3 cases with expected outputs.
