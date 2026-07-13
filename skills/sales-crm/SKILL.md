---
name: sales-crm
description: >-
  Stand up and run a venture's entire commercial motion. CRM (Airtable by default — companies,
  contacts, deals, activities) + pipeline stages/definitions/weighted forecasting; lead capture,
  routing, and fit+intent scoring; the end-to-end sales process (prospect → qualify → demo →
  proposal → close → handoff); outbound sequences/cadence + inbound; proposals, quotes, and
  contracts/e-sign; deal desk + discounting rules; sales metrics (conversion, cycle, CAC feedback
  to finance-ops); and CRM automations. Composes lead-response, direct-response-copy,
  offer-architect. DRAFTS ONLY — never auto-sends outreach or executes a signature. Use when
  setting up a CRM, building a pipeline or forecast, designing the sales process, scoring/routing
  leads, drafting outbound, running a deal desk, or wiring sales automations. Triggers: "set up a
  CRM", "build the pipeline", "sales forecast", "lead scoring", "route this lead", "sales process",
  "outbound sequence", "deal desk", "discount approval", "proposal / quote", "sales metrics",
  "CRM automation".
---

# /sales-crm — CRM & the Whole Commercial Motion

Purpose: turn a venture into a running sales machine — one CRM as system of record, a weighted pipeline that forecasts in dollars, a documented process from first touch to signed-and-handed-off, and the automations that let cheaper models / Cowork operate it. The system captures, scores, sequences, quotes, and closes; the founder only approves the four gates.

## Load first
1. `founder-profile/PROFILE.md` + `founder-profile/guardrails.md` — voice, DRAFTS-ONLY, LYV firewall, claims review, approval gates.
2. `founder-profile/voice-and-brand.md` — power vocabulary + banned words (enforced in every script, email, and proposal line).
3. `ventures/<slug>/venture-context.md` — ICP, offer ladder + pricing + floors, sales motions, sprint priority, venture guardrails.
4. Composed skills where they exist: `/offer-architect` (prices, economics, discount floors — never invent price), `/lead-response` (inbound triage + reply drafts), `/direct-response-copy` (outbound + proposal copy), `/metrics-dashboard` (the KPI tree the forecast plugs into).

Everything routes to the offers and motions defined in venture-context. Never hard-code an industry.

## Method (full detail + worked example in `references/method.md`)
1. **CRM setup.** Default to Airtable via the **Airtable MCP** + `airtable:sales-ops`. Scaffold the 4-table core — **Companies · Contacts · Deals · Activities** (+ Leads / Sequences / Deal Desk as scale warrants). Define **pipeline stages with entry/exit criteria and default probabilities**; set the **weighted forecast** = Σ(Amount × Probability) by period / owner / segment.
2. **Lead capture + routing + scoring.** Capture via Airtable Form + **Gmail MCP** (inbound email) + **Twilio SMS**. Score two axes — **Fit** (ICP match) and **Intent** (buying signal) — into a Fit×Intent quadrant; route each quadrant to its motion (A → call now; nurture; self-serve; decline). Round-robin or rule-based owner assignment via automation.
3. **Sales process, end-to-end.** Run **prospect → qualify → demo → proposal → close → handoff**, composing `/lead-response` (qualify + reply), `/offer-architect` (price + package), `/direct-response-copy` (demo/proposal narrative). Each stage has exit criteria and a paste-ready script.
4. **Outbound + inbound.** A multi-touch **sequence/cadence** across email + LinkedIn + SMS — every touch a DRAFT in a review queue, nothing auto-sent. Inbound gets an SLA and routes through step 2.
5. **Proposals · quotes · contracts.** Build the quote in Airtable (pricing from `/offer-architect`); narrative via `/direct-response-copy`. Contracts / e-sign → **flag legal review** and treat the signature as an irreversible, human-gated action.
6. **Deal desk + discounting.** Discount ladder with approval tiers; anything past threshold or below the venture's price floor → approval gate, logged in a Deal Desk table with an audit trail.
7. **Sales metrics.** Stage conversion, win rate, cycle length, pipeline coverage; hand the won-deal + acquisition inputs to **`finance-ops`** for CAC/LTV/payback. Report PIPELINE $ through `/weekly-ops-review`.
8. **Automations.** Stage-timestamping, routing, next-action tasks, stalled-deal + renewal flags, forecast rollups, and **draft-generation to a review queue — never autonomous send.**

## Output contract — a venture's CRM + sales setup
1. **Airtable base schema** — tables (Companies/Contacts/Deals/Activities + any support tables), key fields, links, rollups, formulas — build-ready for the Airtable MCP / `airtable:sales-ops`.
2. **Pipeline** — stages with definitions/exit criteria + default probabilities + the weighted-forecast formula.
3. **Sales process** — the stage-by-stage playbook with the composed skill at each step and paste-ready scripts (drafts).
4. **Forecast view** — weighted pipeline by period/owner/segment + the sales-metrics set + the CAC handoff to `finance-ops`.
5. **The operating layer** — lead capture/scoring/routing rules, the outbound cadence, deal-desk/discount rules, and the automation list.
6. **Flags + handoff** — LYV firewall / claims-review / legal-review / approval flags, and an `airtable:show-airtable-link` link after any base touch.

## Rules
- **DRAFTS ONLY.** No email, SMS, DM, or post is ever sent; every outreach is a labeled draft in a review queue. Automations draft — they never autonomously send outbound (deliverability + CAN-SPAM/TCPA). The send is the founder's. (Guardrail.)
- **LYV firewall.** Never source, import, or enrich a solely-owned venture's CRM from LYV mailboxes, relationships, or lists. Ambiguous origin = LYV-originated until Tony confirms. Flag, don't cross-source.
- **Contracts & signatures are gated.** Any contract/e-sign → flag legal review (compose `legal:review-contract` / `legal:signature-request`); execution is an irreversible, human-approved action.
- **Discounts & pricing are gated.** Pull every price from `/offer-architect`; never invent one. Respect venture floors. Discounts past the approval threshold or below floor → approval gate, never auto-applied.
- **No medical/legal claims** in scripts, sequences, or proposals; compliance-review regulated copy. Honor venture language guardrails (e.g., EE: never "physician review"/"medical team"; never promise a live team/cohort dashboard pre-contract).
- **Route to highest-FIT offer, not highest price.** A mis-sold deal churns and costs more than it books.
- **Forecast in weighted dollars**, never vibes. Every metric maps to money or a decision.
- Clinical, precise, active voice; banned words out. Secrets never in text. Never hard-code an industry.

## Composition
- **founder-os siblings:** `/lead-response` · `/direct-response-copy` · `/offer-architect` (core); `/metrics-dashboard` (KPI tree), `/weekly-ops-review` (PIPELINE $ report), `finance-ops` (CAC/LTV/payback), `legal:review-contract` + `legal:signature-request` (contracts).
- **Airtable plugin:** `airtable:sales-ops` (the build engine — schema shapes + sub-workflows; don't reinvent), `airtable:airtable-cli` (scripted base ops), `airtable:airtable-filters` (triage/forecast filter syntax), `airtable:show-airtable-link` (mandatory link handoff).
- **MCPs / tools:** **Airtable MCP** (system of record + forecast interface), **Gmail MCP** (inbound capture + outbound drafts), **Twilio SMS** (SMS outreach drafts + inbound; TCPA/A2P compliance via `twilio-developer-kit:*`).

## Examples & evals
- `references/method.md` — full 8-part method + a complete worked example (Executive Edge CRM + sales setup: schema, pipeline, process, forecast view).
- `evals/evals.md` — graded cases (drafts-only automations, deal-desk gating, LYV firewall on CRM sourcing).
