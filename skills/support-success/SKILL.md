---
name: support-success
description: >-
  Stand up or audit a venture's entire post-sale function — the support stack (helpdesk + channels),
  a ticket intake → triage → routing → escalation rubric with severity tiers and SLAs, a self-serve
  knowledge base, in-voice reply drafts, onboarding/activation flows, and the customer-success
  playbook (health scores, QBRs, renewal/expansion, churn-save) — plus the feedback loop back to
  product and the metrics. Drafts only; never auto-sends; escalates anything needing a
  human/clinician/lawyer. Use when setting up or auditing support & success, choosing a helpdesk,
  defining SLAs, building a KB, designing onboarding, or running health/renewal/churn motions.
  Triggers: "set up support", "helpdesk", "ticket triage", "SLA tiers", "knowledge base",
  "onboarding flow", "customer success", "health score", "QBR", "renewal", "expansion",
  "churn save", "reduce churn", "post-sale", "support playbook".
---

# /support-success — Post-Sale Support & Customer Success

Purpose: stand up the whole post-sale machine — support (deflect → resolve → escalate) and success (activate → retain → expand) — as one instrumented system that feeds product and metrics, and never sends or claims on its own.

## Load first
1. `founder-profile/PROFILE.md` — voice, guardrails (DRAFTS ONLY, no medical/legal claims, escalate to a human, LYV firewall, customer data stays in-system, secrets never in text).
2. `ventures/<slug>/venture-context.md` — model, revenue lines, ICP, offer ladder, stage, actual stack, regulatory surface, and the **core value action**.

Reuse the venture's north-star + activation definition from `metrics-dashboard`; route feedback to `product-spec`. Never hard-code an industry or a channel the venture doesn't use.

## Composes (customer-support pack + OS siblings)
- `customer-support:ticket-triage` — categorize, assign P1–P4, route, dedupe.
- `customer-support:customer-escalation` — package an issue for eng/product/leadership.
- `customer-support:draft-response` — the in-voice customer reply (drafts only).
- `customer-support:kb-article` — publish-ready self-serve article.
- `customer-support:customer-research` — account/issue context before drafting.
- `metrics-dashboard` (activation + health inputs) · `product-spec` (feedback → build).

## Method (full detail + worked example in `references/method.md`)
1. **Stack + channels.** Recommend the helpdesk (Intercom / Zendesk / Front — or an Airtable base at small scale) and the channel map: email, SMS/voice, chat, in-app. Match the venture's stage and actual tools; don't over-tool a pre-scale venture.
2. **Triage → route → escalate.** Define severity tiers (S1–S4) with response + resolution **SLAs**, the routing map, and the escalation matrix — including the hard lane: anything clinical/legal/safety/churn-threat escalates to a human/clinician/lawyer, never answered by the model.
3. **Knowledge base / self-serve.** Category tree + a reusable article template; deflect the top ticket themes before they become tickets.
4. **Response drafting in-voice.** Compose `customer-support:draft-response` in the founder voice; deliver as a draft only.
5. **Onboarding + activation.** The activation milestone (tie to the north-star's activation rate) + a step sequence with the channel and trigger for each, and the activation floor → action.
6. **Customer success.** Health-score model (usage + breadth + support signal + relationship + commercial) → Green/Yellow/Red plays; QBR structure; renewal timeline; expansion signals; churn-save motion.
7. **Feedback loop.** Tag every ticket with a theme; weekly roll-up → `product-spec` (problem input) + a support-signal metric added to the `metrics-dashboard`.

## Output contract
A venture's support + success setup, all filled (not blank templates):
1. **Stack + channel map** — helpdesk pick with rationale + channel→tool table.
2. **Triage rubric + severity tiers** — S1–S4 definitions with response/resolution SLAs and routing.
3. **Escalation matrix** — trigger → target → what the model must NOT do.
4. **KB structure** — category tree + article template.
5. **Onboarding/activation flow** — milestone + step sequence (channel, trigger) + floor → action.
6. **CS health/renewal playbook** — health-score inputs + Green/Yellow/Red plays + QBR outline + renewal timeline + expansion + churn-save.
7. **Feedback loop wiring** — theme tags → product + the added support metric.

## Rules
- **DRAFTS ONLY** for anything customer-facing — never auto-send email, SMS, or chat. Deliver as a Gmail/helpdesk draft; the send is the founder's.
- **No medical or legal claims.** Escalate anything needing a human/clinician/lawyer (clinical questions, safety, legal threats, regulated claims) — refer out; never answer it.
- Every ticket gets a severity + SLA before a reply is drafted; no reply without triage first.
- **Customer/patient data stays in its system.** Never export, echo, or paste PII into drafts, logs, or committed files. Secrets never in text.
- LYV firewall extends to support: never cross-reference LYV contacts/mailboxes with this venture.
- Never promise a capability the venture can't deliver today (e.g. a live cohort/team dashboard pre-contract).
- Clinical, precise, premium voice; banned words out. Match the venture's real stack — flag, don't assume, a tool it lacks.

## Examples & evals
- EE: Intercom (B2C self-serve + in-app) + shared inbox for B2B cohorts + Airtable CS base; S1–S4 SLAs; "is it safe to take this peptide?" → hard-escalate to clinical partner, never answered; health score built on WAPA; cohort renewal at T-60/T-30. See `references/method.md`.
- Graded cases in `evals/evals.md` (clinical hard-escalate, never-send, triage-before-reply, health→play mapping).
