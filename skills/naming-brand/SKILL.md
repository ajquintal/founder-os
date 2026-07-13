---
name: naming-brand
description: >-
  Generate and screen venture, product, or offer names against explicit criteria, then return a
  ranked candidate table with domain/trademark sanity flags and a short brand-direction brief —
  positioning- and voice-consistent. Use when naming a venture, sub-brand, product line, or offer,
  or setting a brand's verbal direction, in Concept stage. Flags legal risk; never asserts legal
  clearance. Triggers: "name this", "naming ideas", "what should we call it", "brand direction",
  "come up with names", "is this name taken".
---

# /naming-brand — Naming & Brand Direction

Turns positioning into a shortlist of ownable names + a verbal-identity brief. Reads `/market-scan` (wedge) and `/offer-architect` (the ladder it must stretch across).

## Load first
1. `founder-profile/PROFILE.md`, `founder-profile/voice-and-brand.md` (register, power words, **banned words**), `founder-profile/guardrails.md`.
2. Active `ventures/<slug>/venture-context.md` — the wedge, ICP, category, any brand delta. If net-new, use the idea + Founder Profile voice.
3. The latest `/market-scan` brief (wedge + competitor names to avoid colliding with), if one exists.

## Method (full detail + worked example in `references/method.md`)
1. **Frame** what's being named (venture / sub-brand / product / offer) + the wedge it must signal + the ICP who must "get it."
2. **Set criteria FIRST** — a weighted rubric before any name exists, so screening isn't vibes: distinctiveness/ownability, positioning fit, voice fit (premium; no banned register), pronounce/spell, extensibility (won't box the venture into one product or price rung), domain/handle plausibility, trademark-collision risk.
3. **Generate a batch (~12–18) across archetypes** so it's not one flavor: descriptive · evocative/metaphor · coined/invented · compound · lexical (real word repurposed) · founder/heritage.
4. **Screen + score** each against the weighted criteria; rank them.
5. **Domain/trademark sanity flags** — flag likely availability and obvious collision risk. FLAG, don't clear: recommend a formal trademark search + live domain check before commit.
6. **Brand-direction brief** for the top pick (and runner-up): positioning line, voice register (default + any venture delta), verbal-identity cues (tagline direction, sub-brand naming pattern), what to avoid, and the "before you commit" checklist.

## Output contract
- **Naming criteria** — the weighted rubric (5–7 criteria, weights sum to 100).
- **Ranked candidates table** — rank · name · archetype · positioning fit · voice fit · distinctiveness · domain/TM flag · score/notes (≥10 rows).
- **Brand-direction brief** — for the top pick: positioning statement, voice register, verbal identity (tagline direction + sub-brand pattern), avoid-list, and a "before you commit" checklist (formal TM search · domain purchase on approval · drafts only).

## Rules
- **Flag, never clear.** Domain/TM notes are risk signals, not legal opinions — a name is never "available" or "clear" here (guardrail: no legal claims without review). Formal search precedes commit.
- **Voice is a hard filter.** Any name or tagline using a banned register (`journey`, `wellness`-as-vibe, `holistic`, `hack`(n.), `revolutionary`, `guru`, hype) is auto-disqualified.
- **Industry-agnostic.** Read the venture context; never hard-code a category's naming conventions.
- **Extensibility over cleverness.** Prefer names that survive the whole value ladder and future lines; reject ones that lock in one product or the current price point.
- **Drafts only; no spend.** Domain/handle purchase and registration are spend + commitments — Tony approves; nothing is bought or filed here.
- **LYV firewall.** If a name crowds a co-owned brand or its market, flag it — don't proceed.

## Examples & evals
- `references/method.md` — full method + a worked example naming an EE sub-brand.
- `evals/evals.md` — 3 cases (venture with context, net-new no-context, a banned-word + TM-collision catch).
