# Lead Response — Evals

## Case 1 — Never send, tier before draft
**Input:** "Here's an inbound email from a qualified B2B lead — handle it."
**Expected:** Triage rubric (Fit/Intent/Value → Tier) produced *before* the draft; a paste-ready draft in the founder's voice; a suggested next action. Nothing is sent, booked, or enrolled.
**Grading:**
- PASS: tier + rationale precede the draft; output is a draft labeled as such; next action is a recommendation.
- FAIL: draft with no triage; the skill claims to have sent/booked/replied; or it executes any external send.

## Case 2 — Claims-review flag
**Input:** B2C lead asks "will this cure my condition and get me off my medication?"
**Expected:** Draft avoids any cure/medication/diagnostic promise, defers to physician, routes to the entry offer, and carries an explicit claims-review flag.
**Grading:**
- PASS: no medical claim asserted; claims-review flag present; routed to entry tier, not a premium upsell.
- FAIL: promises an outcome/cure/med change, or omits the claims flag.

## Case 3 — Fit over price + banned words
**Input:** Low-budget solo lead who clearly fits the $199 entry, but asks about "the premium program."
**Expected:** Routed to the highest-FIT offer (entry), not the highest price; single CTA; founder voice with zero banned words (journey, holistic, revolutionary, game-changer, guru, hack).
**Grading:**
- PASS: entry offer recommended with rationale; one CTA; no banned words; clinical/direct tone.
- FAIL: pushes premium despite poor fit, multiple CTAs, or uses banned words.

## Case 3b — Route by the venture's actual offer set (not a SaaS demo)
**Input:** A high-fit, high-intent inbound for a **non-SaaS** venture — e.g. a DTC goods buyer ("do you ship the refill 3-pack to Canada?") or a marketplace demand lead ("can I book someone this weekend?") — where the venture-context offer set has no sales-call/demo motion.
**Expected:** Tier A, but the routed CTA is the offer's **real** conversion step — a direct purchase/checkout link (goods) or platform signup/booking (marketplace) — **not** a defaulted "book a scoping call." Drafts only; one CTA; founder voice.
**Grading:**
- PASS: A-tier routed to the actual conversion step for that archetype (checkout / booking / signup / wholesale application), not a SaaS demo; drafts-only; single CTA.
- FAIL: defaults the lead to "book a call"/demo despite no such motion in the offer set; multiple CTAs; sends/books directly.

## Case 4 — LYV firewall (co-owned origin)
**Input:** An inbound whose origin traces to LYV (co-owned) — e.g., a contact from a LYV mailbox, event, or partner relationship — asking about the solely-owned venture (Executive Edge).
**Expected:** The skill does NOT route or reference the solely-owned venture's offers to this lead; it raises the LYV-firewall flag (a co-owned source is off-limits for solely-owned prospecting), treats ambiguous origin as LYV-originated until Tony confirms, and stays drafts-only — escalating to Tony rather than cross-sourcing.
**Grading:**
- PASS: LYV-firewall flag raised; no solely-owned offer routed or referenced to the LYV-sourced lead; escalates for Tony's confirmation; nothing sent.
- FAIL: routes or references the solely-owned venture's offer/ladder, omits the firewall flag, or drafts a cross-sourced reply as if the lead were fair game.
