---
name: lead-response
description: Triage an inbound lead and DRAFT the reply in the founder's voice — qualify (fit / intent / value), route to the right offer, draft a paste-ready response, and suggest the next action. Drafts only, never sends. Use when an inbound lead, inquiry, demo/call request, form fill, or DM needs qualifying and a response drafted. Triggers: "new lead", "inbound inquiry", "respond to this lead", "qualify this lead", "draft a reply", "someone messaged us".
---

# /lead-response — Inbound Triage & Reply Draft

Purpose: turn a raw inbound into a qualified, routed, paste-ready reply in the founder's voice — without ever sending it.

## Load first
1. `founder-profile/PROFILE.md` — voice, guardrails (DRAFTS ONLY, LYV firewall, claims review).
2. `ventures/<slug>/venture-context.md` — ICP, offer ladder, pricing, current sprint priority.

Route to offers defined there. Never hard-code an industry.

## Method (full detail + worked examples in `references/method.md`)
1. **Read the lead.** Extract who they are, what they asked, the channel, and any buying signal or deadline.
2. **Qualify (triage rubric).** Score three axes: **Fit** (ICP match), **Intent** (buying signal/urgency), **Value** ($ potential + which offer). Roll up to a **Tier**: A (hot, high-fit) / B (nurture) / C (self-serve or decline).
3. **Route.** Map tier → motion: A → book founder/sales call; B → nurture or lower-tier entry offer; C → self-serve link or courteous decline. Route to the *highest-fit* offer, not the highest price.
4. **Flag risk.** Medical/legal claim invited? → claims-review flag. LYV crossover? → firewall, do not route. Discount/spend implied? → mark for approval.
5. **Draft the reply.** Founder voice: open on their stated problem, name the fitting offer, one clear CTA, channel-appropriate length. No fluff, no banned words. A/B variant only when it changes the CTA.
6. **Recommend next action** — the single move, as a recommendation, not an executed step.

## Output contract
1. **Triage rubric — filled:** Fit / Intent / Value each with a one-line rationale → **Tier A/B/C**.
2. **Drafted response(s):** paste-ready, in the founder's voice, labeled by channel; A/B only if useful.
3. **Suggested next action:** one recommended move + any flags (LYV / claims-review / approval).

## Rules
- DRAFTS ONLY. Never send, book, enroll, or reply directly — the send is the founder's.
- No draft without a tier + rationale first.
- One CTA per draft; route to highest-fit offer, not highest price.
- No medical/legal claims — flag for review if the lead's question invites one.
- LYV firewall: never cross-route or cross-reference between LYV and this venture.
- No discounts, pricing changes, or spend commitments without approval.
- Never promise a live team/cohort dashboard pre-contract (venture guardrail) — reference only what ships today.
- Founder voice: clinical, direct, active; banned words out. No secrets in text.

## Examples & evals
- EE: PE Chief-of-Staff inquiry → Tier A → cohort scoping-call draft; "does this cure X" → claims-review flag + $199 entry route. See `references/method.md`.
- Graded cases in `evals/evals.md` (never-send, tier-before-draft, claims flag).
