---
name: setup-checklists
description: >-
  The non-technical launch scaffolding for a venture — entity/legal, banking/finance, payments,
  compliance/data, ops/insurance, and physical-goods/logistics (when it ships product), produced as grouped,
  dependency-ordered checklists with an owner
  and a "needs professional review" flag on every judgment call. Industry-agnostic with jurisdiction
  flags; explicitly not legal/tax/financial advice. Use when getting a venture legally able to operate
  and take money. Triggers: "launch checklist", "form the entity", "set up business banking", "get set
  up to take payments", "what do I need to launch", "compliance setup", "incorporate".
---

# /setup-checklists — Launch Scaffolding

The get-legal-and-operational skill. Turns "what do I actually need in place to run and take money?" into grouped, sequenced checklists a cheaper operator can execute — flagging every point where a professional (lawyer / accountant / broker) must sign off. Not advice; a map of what to do and who confirms it.

**Composes with `/legal-pack`.** This skill produces the *operational* entity/compliance checklist — what to do, in what order, who signs off. `/legal-pack` produces the *substantive* legal foundation — the entity recommendation + rationale, the contract-template set (ToS / privacy / DPA / NDA / MSA / SOW / contractor / employment / referral, each flagged for review), the compliance matrix for the venture's regime, and the consolidated attorney-review-required gate list. When the Entity & Legal or Compliance & Data groups below need the drafts and the decision framing (not just the checklist), hand off to `/legal-pack`.

## Load first
1. `founder-profile/PROFILE.md` (+ `founder-profile/guardrails.md` claims/compliance; `founder-profile/operating-playbooks.md` §6 SOPs, §7 finance discipline).
2. Active `ventures/<slug>/venture-context.md` (jurisdiction, offer type — physical/digital/regulated, ownership, regulatory surface, constraints).

## Method (full detail + worked example in `references/method.md`)
1. **Read the venture's reality.** Pull jurisdiction, entity status, offer type, ownership, **how it takes money (web-app subscription · storefront/POS · marketplace with seller payouts · in-person · invoicing)**, and regulatory surface from the context. Never assume US/Delaware, and **never assume there's a web app or a Stripe checkout** — the payment path follows the channel.
2. **Select applicable groups + the payment path.** Include only what applies — skip inventory/logistics for a pure-digital venture; add licensing for a regulated one; add marketplace/seller-payout items for a two-sided venture; use invoicing/AR rather than a checkout for a services venture.
3. **Sequence by dependency.** Entity → tax ID → bank → payments → compliance → ops. Later items block on earlier ones; make that explicit.
4. **Flag every judgment call.** Anything legal, tax, or licensing-related gets a "needs professional review" flag — draft the question for the professional, never the ruling.
5. **Assign owners + jurisdiction flags.** Default owner = Founder; flag any item whose rules vary by country/state.

## Output contract
Up to six grouped checklists — **Entity & Legal · Banking & Finance · Payments · Compliance & Data · Ops & Insurance**, plus **Physical goods / logistics** only when the venture sells physical product — each item on one line:
`[ ] <item> — owner: <who> — [jurisdiction] — ⚠ review: <who signs off>` (⚠ only where a professional must confirm).
Plus: a one-line sequencing note (what blocks what) and the 3 items most likely to delay launch.

## Rules
- **Not legal/tax/financial advice.** Every judgment call carries ⚠ needs professional review with the right professional named. State this disclaimer at the top of the output.
- Jurisdiction-flag anything that varies (entity type, sales tax/VAT, employment, licensing, privacy law).
- **Select the payment/setup path from how the venture actually operates and takes money** — web-app subscription, storefront/POS, marketplace with seller payouts, in-person, or invoicing. Never assume a web app or a default processor; a services or local venture may have no online checkout at all.
- Sequence by dependency; call out the blocking chain so no launch date is promised before it can be met.
- Secrets/credentials never in text — reference where a credential will live (secret manager / env), never a value.
- Drafts only: prepare the checklist; no filings, account openings, or spend without Tony's approval. Respect the LYV firewall — keep venture entities/data/relationships siloed.

## Examples & evals
- `references/method.md` — the full checklist library per group, jurisdiction variants, the sequencing DAG + worked example.
- `evals/evals.md` — 4 cases (US digital SaaS, EU/UK physical goods, regulated category, marketplace/services).
