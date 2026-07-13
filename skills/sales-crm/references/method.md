# Sales & CRM — Method

## Principle
The commercial motion is one machine: capture → score → route → work → quote → close → hand off, on a CRM that forecasts in dollars and runs without the founder. Build the smallest system that faces the market, instrument it so every stage is measurable, and keep the founder on the four gates only — money, commitment, external send, and the physically-founder-only. Every outbound artifact is a draft; the send is always human.

The tool spine (name each when you build it):

| Layer | Tool / MCP | Role |
|---|---|---|
| System of record | **Airtable MCP** (`mcp__Airtable__*`) + `airtable:sales-ops` | base, tables, fields, links, rollups, forecast interface |
| Scripted base ops | `airtable:airtable-cli` (`airtable-mcp` CLI) | batch reads/writes, seed data, filtered pulls |
| Filter syntax | `airtable:airtable-filters` | triage queues, forecast slices, stalled-deal views |
| Link handoff | `airtable:show-airtable-link` | clickable link after any base touch (mandatory) |
| Inbound + outbound email | **Gmail MCP** (`mcp__Gmail__*`) | capture inbound threads; draft replies + sequences (never send) |
| SMS | **Twilio (SMS)** via `twilio-developer-kit:twilio-send-message` | SMS outreach drafts + inbound; TCPA quiet hours + A2P 10DLC compliance |
| Economics / price | `/offer-architect` | prices, floors, discount math (never invent a price) |
| Triage / reply drafts | `/lead-response` | inbound qualify + paste-ready reply |
| Copy | `/direct-response-copy` | outbound, demo, and proposal narrative |
| KPI tree | `/metrics-dashboard` | the north-star + inputs the forecast plugs into |
| CAC / LTV / payback | `finance-ops` | receives won-deal + acquisition inputs |
| Contract review + e-sign | `legal:review-contract` · `legal:signature-request` | redline + signature request (human-gated) |

---

## 0 — Pick the commercial-motion archetype (do this first)

The pipeline shape — and whether there's a "deal" pipeline at all — is **read from the venture's archetype** (the money model in `venture-context`, the same one `finance-ops` and `metrics-dashboard` key off). **A B2B deal ladder is one archetype, not the default.** Match the money layers:

| Archetype | Commercial motion | CRM / pipeline shape |
|---|---|---|
| **Subscription / SaaS / B2B / high-touch** | one team closes deals | **the deal ladder** (§1 template A): one pipeline, weighted-$ forecast, "Won" = contract + first dollar |
| **Marketplace / platform** | acquire + retain **two sides** | **two pipelines** — a **supply** pipeline (source → vet → activate → producing) and a **demand** side that is mostly a self-serve lifecycle, not deals. Instrument both; the binding constraint is usually supply / liquidity |
| **Goods (DTC + wholesale)** | most revenue is self-serve checkout | usually **no DTC deal pipeline** — DTC revenue lives in the commerce platform / POS, not the CRM. Run a CRM pipeline only for the **wholesale / retail-account** motion (sample → PO → reorder) |
| **Services (project / retainer)** | scope + win engagements | **project / retainer pipeline** (lead → scoping → SOW → won → delivery → renewal); "Won" = signed SOW + deposit |

Two rules that hold for every archetype:
- **Self-serve / on-platform revenue lives *outside* the CRM.** Don't model DTC checkout or on-platform marketplace transactions as CRM "deals." The CRM tracks the *relationship / account* motions (wholesale, partnerships, high-touch sales, supply onboarding); the **commerce platform / marketplace ledger / POS is the system of record** for self-serve revenue, and it feeds `finance-ops` directly, not the weighted deal forecast.
- **"Won" and the forecast are defined per model** (each template below). The weighted-$ forecast spans only what actually runs through a pipeline — a goods venture may forecast *wholesale* deals while DTC is a `metrics-dashboard` funnel, not a pipeline.

Pick the template(s) in §1; the rest of the method (capture/scoring, deal desk, metrics, automations) applies to whichever pipeline(s) you stand up.

---

## 1 — CRM setup (Airtable default)

Default to Airtable-as-CRM via the Airtable MCP and the `airtable:sales-ops` skill (compose it; don't re-derive schema shapes). Pick the shape by team size: a solo/small founder motion starts at the **4-table core** and adds tables only as volume demands. Never impose a 7-table CRM on a 3-person motion.

### The 4-table core

**Companies** (the account being sold to)
- `Name` (singleLineText, primary) · `Segment/Tier` (singleSelect — from venture ICP) · `Industry` · `Website` · `Employees`/`Size` (number) · `Owner` (singleCollaborator)
- `Fit score` (number 0–100, or formula) · `Source` (singleSelect: Inbound web / Outbound / Referral / Partner / Event / Owned audience)
- `Deals` (link → Deals) · `Contacts` (link → Contacts)
- Rollups: `Open pipeline $` (sum of `Weighted amount` on open Deals) · `Won $` (sum where Stage = Closed-Won) · `Last activity` (max from Activities)
- **Firewall field:** `Source origin` (singleSelect incl. an explicit `LYV (co-owned) — off-limits` value) so a co-owned origin is captured, flagged, and never silently prospected.

**Contacts** (the people)
- `Name` (primary) · `Email` (email) · `Phone` (phoneNumber) · `Title` · `Company` (link → Companies)
- `Role on deal` (multipleSelects: Champion / Economic buyer / Decision maker / Influencer / User / Detractor)
- `Intent score` (number) · `SMS opt-in` (checkbox — gates any Twilio touch) · `Source` · `Last contacted` (date)

**Deals** (opportunities in motion) — the forecasting table
- `Name` (primary, e.g. `[Company] — [motion]`) · `Company` (link) · `Contacts` (link)
- `Motion` (singleSelect — the venture's sale types, e.g. cohort / license / flagship) · `Owner` (singleCollaborator)
- `Stage` (singleSelect — see §pipeline) · `Amount` (currency) · `Probability` (number %, defaulted from Stage)
- `Weighted amount` (formula = `{Amount} * {Probability} / 100`)
- `Forecast category` (singleSelect: Commit / Best case / Pipeline / Omitted)
- `Expected close` (date) · `Stage entered at` (date — set by automation) · `Days in stage` (formula = `DATETIME_DIFF(TODAY(),{Stage entered at},'days')`)
- `Created` (createdTime) · `Cycle days` (formula = `DATETIME_DIFF({Closed at},{Created},'days')` on close)
- `Loss reason` (singleSelect: Price / Competitor / Status quo / Timing / No decision / Product gap / Other)
- `Discount %` (number) · `Deal desk request` (link → Deal Desk) · `Next action` + `Next action date` (date)

**Activities** (every interaction — the evidence layer)
- `Name` (primary) · `Type` (singleSelect: Call / Meeting / Demo / Email / SMS / LinkedIn / Note) · `Contact` (link) · `Company` (link) · `Deal` (link)
- `Owner` · `Start at` (dateTime) · `Summary` (multilineText) · `Outcome` (singleSelect: Positive / Neutral / Stalled / Negative / Next step set) · `Next action` + date

### Support tables (add as volume warrants)
- **Leads** — pre-qualification intake when inbound volume separates from Contacts (`Status`: New/Working/Qualified/Converted/Disqualified; `Fit`/`Intent` scores; `Assigned to`; `Converted to contact` link).
- **Sequences / Outbound drafts** — per-recipient drafts queued for review (`Recipient` link · `Channel`: Email/LinkedIn/SMS · `Step` · `Subject` · `Body` · `Status`: Draft/Approved/Sent/Skipped · `Reviewer`). Status never advances to Sent autonomously.
- **Deal Desk** — discount/term exception requests (see §6).

### Pipeline: stages, definitions, probabilities
Stages are gates with **exit criteria**, not a mood ring. Tune names to the venture; keep the discipline. **Use the stage template for the archetype picked in §0** — a marketplace stands up *two* of these (supply + demand), a goods venture usually only the wholesale one, and DTC / on-platform self-serve revenue is tracked in the commerce platform / `metrics-dashboard`, never as CRM deals.

**A. Subscription / SaaS / B2B / high-touch — the deal ladder** (the default *only* for this archetype):

| Stage | Exit criteria (what must be true to be IN this stage) | Default prob |
|---|---|---|
| **Prospect** | Identified as ICP-fit; not yet in two-way contact | 5% |
| **Engaged** | Two-way contact established (reply / call / meeting booked) | 10% |
| **Qualified** | Fit + intent confirmed: need, authority, budget signal, timeline | 25% |
| **Demo / Scoping** | Discovery or demo completed; the specific problem + success metric named | 40% |
| **Proposal** | Written proposal + quote delivered | 60% |
| **Negotiation** | Verbal yes / terms + redlines in motion | 80% |
| **Closed-Won** | Contract executed **and** first dollar collected | 100% |
| **Closed-Lost** | Dead; `Loss reason` captured | 0% |

**B. Marketplace / platform — two pipelines.** Supply is a recruit-and-activate pipeline; demand is mostly a self-serve lifecycle (track it in `metrics-dashboard` / the platform, and run a *demand* deal pipeline in the CRM only for high-value / enterprise buyer accounts, e.g. a fleet or corporate account). Tag Deals with a `Side` (Supply / Demand) field or keep two Deal views.

*Supply pipeline (recruit + activate providers / sellers):*

| Stage | Exit criteria | Default prob |
|---|---|---|
| **Sourced** | ICP-fit provider / seller identified | 5% |
| **Applied** | Applied / expressed interest | 20% |
| **Vetted** | Background / insurance / quality checks passed (a hard gate) | 50% |
| **Activated** | Onboarded; first listing / availability live | 80% |
| **Producing** | Completed first paid transaction (the real "won") | 100% |
| **Churned / Inactive** | No activity in N days / offboarded | 0% |

**C. Goods (DTC + wholesale) — wholesale / retail-account pipeline only** (DTC self-serve revenue is *not* a pipeline; it lives in the commerce platform / POS and feeds `finance-ops`):

| Stage | Exit criteria | Default prob |
|---|---|---|
| **Prospect** | Target stockist / retailer identified (ICP-fit) | 5% |
| **Engaged** | Buyer contact established | 15% |
| **Sampled** | Samples / line-sheet sent; buyer evaluating | 35% |
| **First PO** | Opening order placed | 70% |
| **Stocked** | Delivered + on shelf / live | 90% |
| **Reorder** | Repeat PO placed — the signal that matters (recurring) | 100% |

**D. Services (project / retainer) — engagement pipeline:**

| Stage | Exit criteria | Default prob |
|---|---|---|
| **Lead** | Inbound / sourced, ICP-fit | 10% |
| **Scoping** | Discovery done; problem + scope defined | 30% |
| **Proposal / SOW** | Written proposal / statement of work + quote sent | 60% |
| **Negotiation** | Terms / redlines in motion | 80% |
| **Won** | SOW signed + deposit collected | 100% |
| **Delivery → renewal** | Engagement delivered; retainer / renewal / expansion tracked | recurring |

### Weighted forecasting
- **Weighted pipeline** = Σ `Weighted amount` across open Deals (`Amount × Probability`).
- Slice by **period** (Expected close quarter/month), **owner**, and **segment/motion** — via `airtable:airtable-filters`.
- Carry a **forecast-category** cut alongside the probability cut: `Commit` (rep-committed) / `Best case` / `Pipeline`. Probability math and rep judgment disagree usefully — show both.
- **Pipeline coverage** = open weighted pipeline ÷ the period's target. Below 3× is a leading risk flag.

Build the **Forecast interface** (Airtable Interface / `mcp__Airtable__create_interface` + `create_page`): weighted pipeline by quarter (chart), by owner (chart), Commit/Best-case/Pipeline number tiles, and a stalled-deal list (Days in stage > stage SLA). Hand off with `airtable:show-airtable-link`.

---

## 2 — Lead capture + routing + scoring

**Capture** every source into one intake:
- Web form → Airtable Form (native) into Leads.
- Inbound email → **Gmail MCP** (`search_threads` / `get_thread`) → create Lead + Activity.
- SMS → **Twilio** inbound webhook → Lead + Activity.
- Referral / partner / owned audience → manual or CSV, tagged by `Source`.

**Score two axes** (this is the fit/intent engine; `/lead-response` applies the same rubric to a single inbound):

*Fit (ICP match — is this the right buyer?)* — weight the attributes that define the venture's ICP, e.g.:

| Signal | Points |
|---|---|
| Target segment/title match | +30 |
| Company size in range | +20 |
| Budget signal present | +20 |
| Geography / vertical fit | +15 |
| Disqualifier (wrong segment, competitor, off-limits origin) | −40 |

*Intent (buying signal — are they ready now?)* — behavioral:

| Signal | Points |
|---|---|
| Demo / call / pricing request | +30 |
| Replied / multi-touch engaged | +20 |
| Deadline or trigger event named | +20 |
| High-intent page view (pricing) | +15 |
| Cold / no engagement | 0 |

**Route by the Fit × Intent quadrant:**

| | High intent | Low intent |
|---|---|---|
| **High fit** | **A — call now** (route to owner, SLA < 1 business hour) | **B — nurture** (sequence + owned content) |
| **Low fit** | **C — self-serve** (entry offer / self-serve link) | **D — decline / deprioritize** (courteous no) |

Assignment via automation (round-robin or rule-based by segment/territory), with an owner notification. Route to the **highest-fit** offer from the ladder, never the highest price.

---

## 3 — Sales process, end-to-end

The table below is the **subscription / SaaS / B2B / high-touch** process (archetype A). Other archetypes run their §0/§1 pipeline instead: **marketplace** = a supply-onboarding process (source → vet → activate → producing) plus a self-serve demand lifecycle owned by `metrics-dashboard`, not this table; **goods** = the wholesale account motion (sample → PO → reorder) while DTC checkout is self-serve outside the CRM; **services** = scoping → SOW → delivery → renewal. Keep the discipline (an exit criterion + a composed skill + a draft per stage); swap the stages to the archetype.

Each stage names its exit criterion and the composed skill that produces the finished asset. Every customer-facing artifact is a draft.

| Stage | Do | Composes | Output (draft) |
|---|---|---|---|
| **Prospect** | Build the target list (never from LYV); enrich Company/Contact | `airtable:sales-ops` enrichment sub-workflow | scored Companies + Contacts |
| **Qualify** | Score fit/intent; confirm need/authority/budget/timeline | `/lead-response` | triage rubric + reply draft |
| **Demo / Scoping** | Discovery or demo to the named problem + success metric | `/direct-response-copy` (talk-track/deck narrative) | demo script + follow-up draft |
| **Proposal** | Package the offer; run the numbers; write the narrative | `/offer-architect` (price/economics) + `/direct-response-copy` (copy) | proposal + quote (draft) |
| **Close** | Handle terms; route any discount through deal desk; contract | §6 deal desk + `legal:review-contract` / `legal:signature-request` | redline + signature request (human-gated) |
| **Handoff** | Validate Closed-Won meets required fields; create downstream records; brief delivery | `airtable:sales-ops` sales-to-service handoff | handoff record + kickoff brief |

**Handoff gate:** a deal cannot leave Closed-Won until required fields are complete (signed contract, amount, start date, terms, primary contact). The handoff creates the onboarding/delivery record and briefs the delivery owner — the sale doesn't end at "won," it ends at "successfully handed off" (feeds a future `support-success` skill).

---

## 4 — Outbound system + inbound

**Outbound cadence** — a multi-touch sequence over ~2–3 weeks, every touch drafted to the Sequences queue, nothing auto-sent:

| Day | Channel | Draft angle |
|---|---|---|
| 1 | Email (Gmail MCP) | value hook — the wedge, in their words |
| 2 | LinkedIn | connect / engage (no pitch) |
| 4 | Email | proof point / relevant case |
| 7 | SMS (Twilio, opt-in only) | one-line nudge — respect TCPA quiet hours |
| 9 | Email | new angle / different problem |
| 14 | Email | breakup — permission to close the file |

Rules: copy from `/direct-response-copy`, one CTA per touch, banned words out, claims-reviewed. SMS only to `SMS opt-in = true` contacts, inside quiet-hour windows, on A2P-registered numbers (`twilio-developer-kit:twilio-compliance-*`). A human approves each send; the automation moves a draft to "Approved," never to "Sent" on its own.

**Inbound** — captured (§2), scored, routed, SLA'd. `/lead-response` drafts the reply; A-tier gets an owner + booking link, C-tier a self-serve route.

---

## 5 — Proposals, quotes, contracts / e-sign

- **Quote / CPQ in Airtable.** Build pricing as tables + tiered formulas in the base (the `airtable:sales-ops` pattern — build CPQ in Airtable, don't buy a CPQ tool for this scale). Every price and package comes from `/offer-architect`; if none exists, mark `[PRICE TBD]` and request it — never invent.
- **Proposal narrative** via `/direct-response-copy`: problem → mechanism (the wedge) → offer → terms → one CTA. Draft only; claims-reviewed; venture language guardrails enforced.
- **Contracts / e-sign.** Generate from a reviewed template; **flag legal review** (`legal:review-contract`) before anything goes out; route signature via `legal:signature-request` to an e-sign tool (DocuSign / Dropbox Sign). The signature is an **irreversible, human-gated** action — the OS prepares, Tony (or authorized signer) executes.

---

## 6 — Deal desk + discounting rules

A lightweight approval workflow so discounts don't leak margin and every exception has an audit trail.

**Discount ladder (tune per venture):**

| Discount / exception | Approver |
|---|---|
| ≤ 10% and standard terms | Deal owner — self-serve |
| 10–20% | Sales lead |
| > 20%, non-standard terms, or **below the venture price floor** | **Tony — approval gate** |

**Deal Desk table:** `Request type` (Discount / Custom terms / Pricing exception / Legal review) · `Deal` (link) · `Requested by` · `Amount impact` (currency) · `Justification` · `Approver` (set by automation from Amount + type) · `Status` (Submitted / Under review / Approved / Approved with conditions / Rejected) · `Decision` · `Decided at` (append-only audit).

No discount is applied to a Deal until its request is `Approved`. Below-floor pricing is never auto-approved — it is always a founder gate (guardrail: pricing/spend needs sign-off).

---

## 7 — Sales metrics (+ CAC feedback to finance-ops)

The instrument set the forecast and the weekly review report on (define the tree via `/metrics-dashboard`):

| Metric | Definition | Read |
|---|---|---|
| Stage conversion | count exiting stage N to N+1 ÷ entering N | where the funnel leaks |
| Win rate | Closed-Won ÷ (Won + Lost) | qualification quality |
| Average deal size | mean `Amount` of Won | mix / up-market drift |
| Sales cycle | mean `Cycle days` (Created → Closed-Won) | velocity; cash timing |
| Weighted pipeline | Σ `Weighted amount`, open | forecast |
| Pipeline coverage | weighted pipeline ÷ period target | is there enough to hit plan (flag < 3×) |
| Stalled deals | Days in stage > stage SLA | where to intervene |

**CAC handoff to `finance-ops`:** sales-crm owns the numerator inputs it can see — new customers won (count + dates), deal amounts, source/channel — and hands them to `finance-ops`, which owns **CAC, LTV, and payback** (it holds the blended sales+marketing cost). sales-crm does not compute CAC in isolation; it feeds the win + channel data so `finance-ops` closes the loop, and pulls the affordable-CPA / target-payback constraints back from `/offer-architect`. Report PIPELINE $ each cycle through `/weekly-ops-review`.

---

## 8 — CRM automations

Airtable Automations (built via the Airtable MCP; verify current MCP authoring support at build time, hand off the rest to the Airtable UI):

- **Stage timestamping** — on `Stage` change, set `Stage entered at` (drives Days-in-stage + Cycle days).
- **Lead routing** — on new Lead, compute fit/intent, assign owner (round-robin/rule), notify.
- **Next-action tasks** — on stage change, create the next Activity + due date.
- **Stalled-deal flag** — daily scan: open Deals with no Activity in N days → flag + notify owner.
- **Forecast rollup** — `Weighted amount` rolls to Company + period; refresh the Forecast interface.
- **Renewal / follow-up trigger** — X days before a renewal/close-anniversary date → create a task.
- **Draft generation** — on trigger (score threshold, stalled deal), generate an outbound **draft** into the Sequences queue for human review.

**Hard rule:** automations **draft**, they don't send. No autonomous outbound email/SMS — deliverability, CAN-SPAM, and TCPA make autonomous send a liability, and the guardrail forbids it regardless. Approved ≠ sent by the machine; the send is the founder's.

After any base operation, return the most-specific link via `airtable:show-airtable-link`.

---

# Worked example — Executive Edge OS: CRM + sales setup

> Loads `founder-profile/PROFILE.md` → `ventures/executive-edge/venture-context.md`. B2B sprint focus: corporate cohorts ($30–48k / 6 mo, **floor $30k**) and operator licenses ($25k setup + $2k/mo, or $10k + 15% rev-share). *Prices evolving — confirm live before customer-facing use.* Guardrails in force: DRAFTS ONLY · LYV firewall · only substantiated claims (regulated claims routed to review, per the venture's claims guardrails) · never promise a capability the venture can't deliver today.

## 1. Base: "Executive Edge — Revenue Engine" (Airtable MCP + `airtable:sales-ops`)

**Companies** — key fields tuned to EE: `Segment` (PE firm / Corporate / Clinic-operator / Coach-operator), `Employees`, `Exec count` (cohort sizing), `Source origin` (incl. `LYV (co-owned) — off-limits`), rollups `Open pipeline $` / `Won $`.
**Contacts** — `Role on deal` (Champion / Economic buyer / …), `SMS opt-in`, `Intent score`.
**Deals** — `Motion` (Corporate cohort / Operator license — setup+mo / Operator license — rev-share / Channel referral), `Amount`, `Probability`, `Weighted amount`, `Forecast category`, `Discount %`, `Expected close`, `Loss reason`.
**Activities** — calls/scoping-call/demo/email/SMS with `Outcome` + next action.
**Support:** Leads (inbound), Sequences (outbound drafts), Deal Desk.

## 2. Pipeline (tuned) + probabilities

| Stage | EE exit criterion | Prob |
|---|---|---|
| Prospect | ICP-fit firm identified; not contacted (never LYV-sourced) | 5% |
| Engaged | Reply / scoping call booked | 10% |
| Qualified | Exec count, budget signal, timeline, champion confirmed | 25% |
| Scoping call | Founder scoping call done; partner count + target outcomes named | 40% |
| Proposal | Cohort/license proposal + quote sent | 60% |
| Negotiation | Verbal yes; terms/redlines in motion | 80% |
| Closed-Won | Contract executed + deposit collected | 100% |
| Closed-Lost | Dead; loss reason captured | 0% |

## 3. Weighted forecast view (illustrative)

| Motion | Open deals | Amount | Weighted | Commit | Best case |
|---|---|---|---|---|---|
| Corporate cohorts | 4 | $152k | $64k | $30k | $78k |
| Operator licenses | 3 | $75k | $26k | $25k | $35k |
| Channel referral | 1 | $6k | $1.5k | — | $3k |
| **Total open** | **8** | **$233k** | **$91.5k** | **$55k** | **$116k** |

Coverage vs the sprint target drives the call. Forecast interface: weighted pipeline by motion + by month, Commit/Best-case tiles, stalled-deal list. Kill discipline from venture-context: **any rail with zero booked calls by Aug 3, 2026 gets killed and reallocated** — surfaced as a leading flag on the board.

## 4. Sales process (EE)

Prospect (target PE/corporate list, LYV-firewalled) → Qualify (`/lead-response`: fit = exec cohort ICP, intent = team-need + price question) → **Scoping call** (founder, 20 min — the one thing on Tony's plate) → Proposal (`/offer-architect` sizes cohort to partner count against the $30k floor; `/direct-response-copy` writes the narrative — leads with the closed-loop wedge, no medical claims, no live-dashboard promise) → Close (deal desk on any discount; `legal:review-contract` + `legal:signature-request`) → Handoff (validate signed + deposit; create delivery record; brief as N individual clients + the quarterly team report — **not** a live dashboard).

## 5. Lead scoring (EE)

Fit: PE/corporate + exec-team need (+30), 5–10 execs (+20), budget signal (+20); disqualifier −40 if origin traces to **LYV** (co-owned) → firewalled, not routed. Intent: scoping-call/pricing request (+30), replied (+20), trigger event e.g. "partners burning out" (+20). A-tier (high/high) → Tony scoping call, SLA < 1 hr.

## 6. Deal desk (EE)

Cohort floor **$30k** is hard. ≤10% off list and above floor → owner; >10% or **any price approaching/below $30k** → Tony approval gate, logged in Deal Desk. Licenses: standard $25k+$2k or $10k+15% rev-share; bespoke terms → founder gate.

## 7. Metrics → finance-ops

Track scoping-call→proposal→won conversion, cohort win rate, cycle days, weighted pipeline, coverage. Hand won-cohort count + amount + channel to `finance-ops` for CAC/payback against the sprint's affordable-CPA; report PIPELINE $ via `/weekly-ops-review`.

## 8. Automations (EE)

Stage-timestamp; route inbound exec-cohort leads to Tony with an SLA; stalled-deal flag at 10 days; forecast rollup to the interface; **draft** the outbound cohort sequence into the Sequences queue for Tony's approval — never auto-send. Zero-booked-calls-by-Aug-3 monitor feeds the weekly review.

**Flags:** LYV firewall (a `Source origin = LYV` lead is captured, flagged, and **not** prospected — escalate to Tony); claims-review on all copy; legal-review on cohort/license contracts; approval gate on any below-floor pricing. Handoff link via `airtable:show-airtable-link` after the base is built.
