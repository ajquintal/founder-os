---
name: direct-response-copy
description: >-
  Write conversion copy in Tony's voice for one asset — a sales-page section, an email, or an ad —
  on the hook → problem → mechanism → offer → CTA skeleton (Hormozi value equation + Brunson
  hook/story/offer). DRAFTS ONLY, never sent or published. Use when you need copy that converts for
  a specific asset and goal. Triggers: "write copy", "sales page", "write the email", "ad copy",
  "landing page copy", "write the hook", "rewrite this to convert".
---

# /direct-response-copy — Direct-Response Copy

Finished, on-brand conversion copy for one asset: one goal, one CTA. Draws the offer from `/offer-architect` and the pillars from `/positioning`. Output is always a draft.

## Load first
1. `founder-profile/PROFILE.md`, `founder-profile/voice-and-brand.md` (power vocabulary + banned words — enforced), `founder-profile/guardrails.md` (drafts-only, claims)
2. Active `ventures/<slug>/venture-context.md` (brand deltas + claims guardrails)
3. `/positioning` pillars and the `/offer-architect` offer for this venture, if they exist — do not invent price or claims.

## Method (full detail + worked example in `references/method.md`)
1. **Frame:** confirm asset type, the single goal + CTA, and audience temperature (cold / warm / hot). Pull the offer + pillars.
2. **Hook:** open on the dream outcome in the buyer's words — promise, curiosity, or pattern-interrupt. Draft 3; keep the strongest as lead + 2 alternates.
3. **Problem:** name and agitate the struggling moment; make the cost of the status quo felt — precise, never fear-mongering.
4. **Mechanism:** name the unique mechanism (the wedge) — why this works when the alternatives didn't. This is the belief shift.
5. **Offer + CTA:** stack the value (value-equation framing), state terms + any risk reversal, one CTA. Real scarcity only. Voice pass; label DRAFT.

## Output contract
```
[ASSET · GOAL · AUDIENCE · CTA]
HOOK:       …
PROBLEM:    …
MECHANISM:  …
OFFER:      …
CTA:        …
—
ALT HOOK 1: …
ALT HOOK 2: …
[DRAFT — not for send/publish until Tony approves]
```
Section labels map to the asset: email → HOOK = subject line; ad → HOOK = headline / first line. The five beats stay; the container flexes.

## Rules
- **Drafts only.** Never send or publish; every output carries the DRAFT line. (Guardrail.)
- Voice is law: power vocabulary, active voice, lead with the point. Banned words, fake urgency, and crying-testimonial emotionalism are automatic rejects.
- **Claims & capability (G-claims):** make only substantiated claims, and never imply a capability or deliverable the venture can't provide today. Honor the venture's own claims & regulatory constraints (from its `venture-context` + `engineering-backbone §9`); route any regulated claim (health / financial / legal / environmental) for professional review before publish.
- One asset, one goal, one CTA.
- **Price:** pull prices from `/offer-architect`; if none exists, mark [PRICE TBD] and request it — never invent. Beside any emitted price, carry the venture caveat "prices evolving — confirm live before customer-facing use."

## Examples & evals
- `references/method.md` — full method + a worked example (Executive Edge $199 hero).
- `evals/evals.md` — 3 cases (sales-page section, email, ad).
