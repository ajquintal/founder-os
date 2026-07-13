# Support & Success — Method

## Principle
Support and success are one post-sale machine, not two teams. Support **protects** delivered value (deflect → resolve → escalate); success **compounds** it (activate → retain → expand). Both are instruments: every ticket, every health score, every save is a data point that feeds product and the metrics. The founder's time enters only at approvals, at-risk logos, and relationship calls — everything else runs on cheaper models against this method. Drafts only; the send is always human.

Load `PROFILE.md` then the active `venture-context.md` first. Derive channels, tiers, and offers from the venture; never hard-code an industry.

---

## 1 — Support stack + channels
Recommend the helpdesk by **stage and volume**, not by what's fashionable:

| Stage / signal | Recommended helpdesk | Why |
|---|---|---|
| Pre-scale / <~30 tickets/wk / B2B-heavy | **Airtable base** (Airtable MCP) or **Front** | A tickets table + views is enough; Front unifies a shared inbox without a full ITSM. Don't over-tool. |
| Product-led B2C / in-app + self-serve | **Intercom** | In-app messenger, product tours, KB (Articles), and onboarding in one; strongest for activation. |
| High-volume / multi-team / macros + reporting | **Zendesk** | Mature routing, SLAs, macros, analytics at scale. |

**Channel → tool map** (wire only the channels the venture actually uses):

| Channel | Tool / MCP | Use |
|---|---|---|
| Email (founder/CS inbox) | **Gmail MCP** (`create_draft`) | Draft replies into the inbox — never send. |
| Email (transactional/bulk) | **SendGrid** (or the venture's ESB, e.g. Resend) | Onboarding sequences, receipts, renewal notices (drafts/scheduled with approval). |
| SMS / voice | **Twilio** | Activation nudges, S1 outage notices, appointment/reminder texts. Honor consent + quiet hours. |
| Chat / in-app | Intercom (or live-chat widget) | Real-time deflection + bot handoff. |
| Ticket store + CS records | **Airtable MCP** | Tickets, health scores, renewals, feedback register — the system of record if no full helpdesk. |

Deliverable: the helpdesk pick with a one-line rationale + the channel→tool table, scoped to the venture's stage.

## 2 — Ticket intake → triage → routing → escalation
Intake normalizes every channel into one ticket shape: `who · account/tier · channel · request · signal (deadline, sentiment, $) · severity`. Then run **`customer-support:ticket-triage`** to categorize, assign severity, dedupe against known issues, and route.

**Severity tiers + SLAs** (business hours unless stated; tune per venture SLA commitments):

| Tier | Definition | First response | Resolution target | Route |
|---|---|---|---|---|
| **S1 Critical** | Service down, data loss/exposure, security, payment/access lockout, safety | ≤1 hr (24×7) | ASAP, hourly updates | Founder + eng immediately; open `customer-escalation` |
| **S2 High** | Core value action broken, no workaround, blocks a paying cohort | ≤4 hrs | 1–2 business days | Product/eng queue; notify owner |
| **S3 Normal** | Bug with workaround, config/how-to, account change | ≤1 business day | 3–5 business days | Support; KB-first |
| **S4 Low** | Feature request, cosmetic, general question | ≤2 business days | Backlog / self-serve | KB + feedback register |

**Escalation matrix** — the hard lane. Some requests are never answered by the model; they are packaged with **`customer-support:customer-escalation`** and handed to a human:

| Trigger | Escalate to | Model must NOT |
|---|---|---|
| Clinical/medical question, symptom, "is it safe to take X", dosage | Clinician / clinical partner (refer-out) | give medical advice, interpret labs, or state a clinical outcome |
| Legal threat, liability, contract dispute, regulator | Founder + legal | admit fault, promise remedy, or make a legal claim |
| Security/privacy incident, PII exposure | Founder + eng (incident) | expose data, speculate on cause publicly |
| Churn threat / at-risk logo above $ threshold | Founder (relationship) | discount or commit terms |
| Regulated claim invited (e.g. LegitScript surface) | Review before any reply | assert the claim |

Deliverable: filled triage rubric + severity table with SLAs + the escalation matrix.

## 3 — Knowledge base / self-serve
Deflect the top ticket themes before they become tickets. Build a **category tree** (6–8 top categories max) from the actual ticket mix, and draft each article with **`customer-support:kb-article`** (research context via **`customer-support:customer-research`**).

Default category shape (rename to the venture): *Getting started · Core workflow / product · Data & integrations · Billing & account · Troubleshooting · Policies (privacy, security, terms).*

**Article template:**
```
Title (searchable, states the task or question)
Applies to: [plan/tier/version]     Last reviewed: [date]
Summary: one line — what this solves.
Steps: numbered, one action each; screenshots where a UI step is non-obvious.
If it doesn't work: the top 1–2 failure modes + fix.
Related: 2–3 links.        Still stuck? → contact route.
```
Rule: KB is self-serve truth, not marketing — no claims that would need review, no capability the product lacks.

## 4 — Response drafting in-voice
Compose **`customer-support:draft-response`**, constrained to the founder voice (clinical, precise, premium; banned words out) and the venture's guardrails. Structure: acknowledge the specific issue → the fix or the honest status → one clear next step. Deliver as a **Gmail/helpdesk draft** — never send. If the request hit the escalation matrix, the draft holds the line (no claim, no medical/legal answer) and routes to the human.

## 5 — Onboarding + activation
Activation is where support prevents churn cheapest. Define the **activation milestone** = the venture's core value action, reached inside a set window — reuse the `activation rate` definition from `metrics-dashboard` so support and metrics share one number.

Design the sequence as `step → channel → trigger`, front-loaded to first value:

| Step | Channel (tool) | Trigger |
|---|---|---|
| Welcome + the one first action | Email (SendGrid/Gmail draft) | signup |
| Setup nudge | SMS (Twilio) / in-app (Intercom) | no first action in 24–48h |
| First-value confirmation | In-app + email | milestone reached |
| Habit / second value | Email + in-app | 7-day active |
| Human check-in (high-tier only) | Founder/CS | tier ≥ threshold or stalled |

Set the **activation floor → action**: e.g. activation rate <30% → rework the first-run flow (this is the same floor the metrics dashboard trips). Onboarding sequences are drafted/scheduled with approval, not blasted.

## 6 — Customer success: health, QBR, renewal, expansion, churn-save
**Health score** — a composite, stored in the Airtable CS base (MCP), rolled to a color:

| Dimension | Example signal | Weight |
|---|---|---|
| Product usage | north-star activity vs benchmark (from metrics-dashboard) | high (leading) |
| Breadth | seats/features/use-cases adopted | med |
| Support signal | open S1/S2, CSAT, sentiment | med |
| Relationship | QBR attendance, exec sponsor, NPS | med |
| Commercial | on-time payment, tier, contract runway | high (lagging) |

**Green** (healthy) → nurture + expansion watch. **Yellow** (drifting) → CS outreach + re-onboard the unused value. **Red** (at-risk) → **churn-save**: diagnose the gap → reset to the original goal → targeted fix/offer → escalate to founder above the $ threshold. No unilateral discounts.

**QBR** (per named/cohort account, quarterly): outcomes vs the goal they bought → usage/health → value delivered (metric or $) → roadmap alignment → renewal/expansion ask. Deck via Canva/pptx.

**Renewal timeline:** T-90 health review → **T-60 QBR + renewal intent** → T-30 paper/terms (founder) → close. **Expansion signals:** usage at a seat/tier cap, a new use case, a new stakeholder — route to the fitting up-ladder offer (highest-fit, not highest-price).

## 7 — Feedback loop back to product + metrics
Every ticket carries a **theme tag** (bug / friction / gap / request / pricing). Weekly, roll up the top themes from the Airtable base and route:
- **Bugs & blocking friction** → `customer-support:customer-escalation` → the venture's **`product-spec`** backlog (as a problem statement + frequency + affected tier).
- **Feature requests** → a product feedback register (Airtable), ranked by frequency × tier value.
- **Add a support-signal metric to `metrics-dashboard`**: e.g. *tickets per active user* (friction), *CSAT/first-response SLA hit-rate* (quality), *time-to-first-value* (activation). These sit as leading inputs; escalations closed and NRR sit in the money strip.

The loop closes the founder-profile failure modes: it turns support noise into prioritized product signal instead of an ever-growing queue.

---

## Worked example — Executive Edge OS
Model: B2C ladder (freemium → $199 → ~$99/mo → $4,997) + B2B (cohorts $30–48k/6mo, operator licenses $25k + $2k/mo). Core value action: executing a protocol step + fusing a blood/device data point. Regulatory surface: health claims (review) + Rx/peptides via partners. Actual stack: Twilio (SMS), Resend (email), Supabase, Stripe.

**1. Stack + channels.** Live platform, growing B2C self-serve + high-touch B2B cohorts → **Intercom** for B2C (in-app messenger + product tours + KB, drives activation) + a **shared inbox (Front)** for named B2B cohort accounts + an **Airtable CS base** (health, renewals, feedback). Channels: transactional email stays on **Resend** (in-app, don't rip out a working ESB); founder/CS replies drafted via **Gmail MCP**; activation + outage SMS via **Twilio** (already in stack). Flag: EE has no dedicated helpdesk today — recommend Intercom, don't assume it.

**2. Triage + SLAs + escalation.**

| Tier | EE example | First response | Route |
|---|---|---|---|
| S1 | Can't log in / billing lockout / lab PDF exposed to wrong user | ≤1 hr 24×7 | Founder + eng; escalation opened |
| S2 | Daily Edge Score not computing, Oura/Withings sync down for a cohort | ≤4 hrs | Product/eng |
| S3 | "How do I upload my labs?", change email, protocol step unclear | ≤1 business day | Support; KB-first |
| S4 | "Add a Garmin integration", cosmetic | ≤2 business days | Feedback register |

Hard-escalate lane (never answered by the model): **"Is it safe to take this peptide with my meds?" / "What does my TSH of X mean?" / "Should I stop my prescription?"** → refer to the **clinical partner**; the model states it can't advise clinically and routes. Legal/claims → founder. Guardrail: never say "physician review" / "medical team" (refer-out model); never promise a live cohort dashboard pre-contract.

**3. KB structure.** *Getting started · Protocols & scoring (Daily Edge / Drift / BRI) · Labs & data (upload, Junction panels) · Devices & sync (Oura, Withings) · Billing & account · Troubleshooting.* Each article on the template; clinical content is member-gated and claim-reviewed, distinct from public pages.

**4. Draft (in-voice, S3).** Ticket: "My labs uploaded but no score yet."
> [Name] — your panel is in; the Daily Edge Score computes once at least one wearable day is synced alongside it, so the fusion has both inputs. Connect Oura or Withings under Settings → Devices and the score populates within a few hours. If it's still blank tomorrow, reply here and I'll have the team check the pipeline directly. — EE Support

Delivered as a **draft**. No score interpretation (that would be clinical) — mechanics only.

**5. Onboarding / activation.** Milestone = first protocol execution + first blood/device sync ≤7 days (the metrics-dashboard `activation rate`, target ≥40%, floor <30% → rework onboarding). Sequence: welcome + "upload one panel or connect one device" (Resend) → 48h no-action SMS nudge (Twilio) → activation confirmation (in-app) → 7-day habit email → founder check-in for $4,997 / private-client tiers.

**6. CS health + renewal.** Health = WAPA activity vs benchmark (high) + panels/devices connected (breadth) + open S1/S2 + CSAT (support) + QBR/sponsor (relationship) + on-time pay + contract runway (commercial). Cohort ($30–48k/6mo) renewal: T-90 health review → **T-60 QBR** (the manual quarterly team report is the artifact — deliver what ships, don't over-promise) → T-30 terms (founder) → close. Expansion: cohort at seat cap → add seats; strong cohort → **operator license** ($25k + $2k/mo). Red health on a cohort → founder-led churn-save, no unilateral discount.

**7. Feedback loop.** Theme-tag tickets in Airtable; weekly top themes → EE's `product-spec` backlog (e.g. "activation stalls when users upload labs before connecting a device" → onboarding-order fix). Add to `metrics-dashboard`: *time-to-first-value*, *tickets per active member*, *first-response SLA hit-rate* as leading inputs; *escalations closed* + *NRR* in the money strip.
