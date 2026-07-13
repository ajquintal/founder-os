---
name: positioning
description: >-
  Produce a venture's positioning — market category, target segment, unique value, proof, and the
  3–5 messaging pillars every asset repeats — using the April Dunford method (position against the
  alternatives, don't assert in a vacuum). Use before writing copy, naming a category, building a
  page, or when messaging feels generic or "sounds like everyone else." Triggers: "positioning",
  "how do we position this", "what category are we", "value proposition", "messaging pillars",
  "what makes us different", "we sound generic".
---

# /positioning — Positioning & Messaging Pillars

The venture's context-setting frame: the category, who it's for, why it wins, and the pillars every asset repeats. Reads `/market-scan` for the wedge + alternatives; feeds `/direct-response-copy` and `/landing-funnel`.

## Load first
1. `founder-profile/PROFILE.md`, `founder-profile/voice-and-brand.md` (this output becomes customer-facing language), `founder-profile/operating-playbooks.md` (GTM #4 + Dunford lens)
2. Active `ventures/<slug>/venture-context.md`
3. The latest `/market-scan` brief (wedge + competitor set), if one exists.

## Method (full detail + worked example in `references/method.md`)
1. **Competitive alternatives:** list what the buyer would actually use if the venture didn't exist — including "do nothing" and DIY, not just direct competitors.
2. **Unique attributes:** the capabilities the venture has that those alternatives lack (from the wedge). Be concrete.
3. **Value + proof:** translate each attribute into the value a buyer cares about, plus the proof it's real. No value or no proof → cut the attribute.
4. **Target segment:** name the buyers who care *most* about that value, and how to spot them — this is who positioning is FOR.
5. **Category frame:** choose the market context that makes the value obvious — deliberately, not the crowded default. Draft the positioning statement + 3–5 messaging pillars.

## Output contract
A positioning statement block:
```
CATEGORY:   <the frame we compete in>
FOR:        <target segment — who feels the value most + how to spot them>
WHO:        <the struggling moment / job to be done>
<VENTURE> IS THE <category> THAT <unique value>.
UNLIKE:     <competitive alternatives>
BECAUSE:    <unique attributes / mechanism that make the value real>
PROOF:      <evidence the value is delivered>
TREND:      <optional — a shift that makes this urgent now>
```
Plus a pillars table (3–5 rows):

| # | Pillar | The claim (one line) | Proof / why believable | Objection it answers |
|---|---|---|---|---|

## Rules
- Position *against the alternatives* — every unique attribute must map to a value a named segment cares about, or cut it.
- Category is a chosen frame that makes the value obvious; reject the crowded default label if a sharper frame wins.
- Every pillar carries proof — a claim with no evidence is a slogan. Honor the venture's own claims & regulatory constraints (from its `venture-context` + `engineering-backbone §9`); make only substantiated claims and route any regulated claim (health / financial / legal / environmental) for professional review.
- Sharpen the market-scan wedge; don't reinvent it. Lead with it.

## Examples & evals
- `references/method.md` — full Dunford method + a worked example (Executive Edge).
- `evals/evals.md` — 3 cases with expected outputs.
