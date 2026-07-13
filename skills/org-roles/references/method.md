# /org-roles — Full method, matrices & worked example

One level deep; does not fan out further. Lenses: **Geoff Smart — Who / topgrading** (scorecard-based A-player hiring; hire to remove founder-dependence, not to add headcount), **Michael Gerber — E-Myth** (work *on* the business; systemize so it runs without the founder), **Verne Harnish — Rockefeller Habits** (priorities · a metrics rhythm · a meeting cadence). The organizational complement to `docs/engineering-backbone.md`.

## Principle

A venture fails organizationally the same way it fails technically: no owners, no roles, no access discipline, everything in the founder's head. The fix is not a big org chart — that is the overbuild trap. The fix is a **small, explicit structure**: every function has a *coverage* (a human, a contractor, or an AI+SOP), every recurring process has exactly *one* accountable owner, every principal has *least-privilege* access that is recorded and revocable, and every repeatable task has an SOP a cheaper runner executes. The test for the whole layer is the **bus test**: *if the founder is unavailable for two weeks, what stops?* Everything that stops needs an owner or an SOP before it is a system.

Two rules hold the layer honest:
- **Lean beats complete.** The right org at launch is mostly the founder + AI/Cowork + a few fractional specialists. Add a role only when it passes four tests (below). A role added for a stage you're not at is dilution wearing the costume of progress.
- **Structure produces drafts, not commitments.** This skill designs *how* people are hired and granted access; it never extends an offer, sets a comp number, or provisions a credential on its own. Those are founder gates.

---

## The eight areas — what to do, the tool + MCP, and the guardrail

### 1. Org design by stage
Start from **functions, not titles.** Every venture must *cover* seven functions regardless of industry:

| Function | What it owns |
|---|---|
| Product / engineering | the thing that's sold gets built, shipped, and kept up |
| GTM / marketing | demand, positioning, content, channels |
| Sales | pipeline → closed revenue |
| Finance | model, books, cash, spend control |
| Operations | the machine runs — rhythm, SOPs, PM, vendors, access |
| Support / success | post-sale delivery, retention, escalation |
| Legal / compliance | entity, contracts, the applicable regime |

For the venture's **current stage**, assign each function a **coverage**:

| Stage | Typical shape | Default coverage |
|---|---|---|
| **Solo / pre-PMF** (0 employees) | founder + AI/Cowork + a contractor or two | Every function = founder or AI+SOP; specialists are contract, hired by the task, not the month. **Do not hire FT.** |
| **Launch / early traction** (1–3) | founder + an operator + fractional specialists | First hire removes the founder from the highest-leverage *recurring* work (usually ops or delivery), *not* the fun work. Design/finance/eng stay fractional/AI. |
| **Scale** (4–15) | functional leads emerge | One accountable owner per function; the founder exits day-to-day execution entirely. |
| **Growth** (15+) | departments under leads | Managers of managers; this skill hands off to real HR/People systems. |

**A function becomes a hire only when it passes all four:**
1. **Recurring** — steady, not a one-off (one-offs = contractor or SOP).
2. **Unblocks the founder** — it removes the founder from a bottleneck the bus test exposed.
3. **Economics support it** — the model (`/finance-ops`) carries the fully-loaded cost with margin to spare.
4. **Not SOP-able** — it genuinely needs a human's judgment; if an SOP + AI can run it, systematize instead of hiring.

**Output:** the current-stage coverage map, **plus the "next 3 hires"** as a ranked list, each with its *trigger condition* (the metric or event that makes the hire pass the four tests) — so hiring is a decision waiting on a number, not a vibe. Draw the org map in **Lucid** (`lucid_create_org_chart`); keep the function/coverage table in **Airtable**.

> **Failure-mode guard:** the deliverable that lists ten roles for a three-person company has failed. The founder-dependence fix is *coverage of every function* (often by AI+SOP), not *a person per function*.

### 2. RACI for the core recurring processes
RACI assigns, per process, exactly one of each where it matters:
- **R — Responsible:** does the work (can be several).
- **A — Accountable:** the single owner answerable for the outcome. **Exactly one per row.** Zero A's (nobody owns it) or two A's (nobody really owns it) is the #1 RACI defect and the exact shape of the "no roles, no structure" failure.
- **C — Consulted:** two-way input *before* the work.
- **I — Informed:** one-way notice *after*.

**The gate rule:** any process that touches a founder gate — **spend / commit / external-send / Tony-only** — has the **founder as Accountable** there. Any fully reversible process has the **Operator or AI/Cowork as Accountable** and the founder merely **Informed** (this is what "drive the bus" looks like in a table).

Default core processes (tune to the venture); filled example uses generic roles **Owner(founder) · Operator · Delivery · Growth · Finance · AI/Cowork**:

| Recurring process | Owner | Operator | Delivery | Growth | Finance | AI/Cowork |
|---|---|---|---|---|---|---|
| Weekly operating review | I* | **A** | C | C | C | R |
| Product release / deploy to prod | I | C | **A** · R | I | I | R** |
| Incident response (Sev 1/2) | I* | C | **A** · R | I | I | R |
| Hiring decision / offer | **A** ⛔ | R | C | C | C | R (process + drafts) |
| Spend / vendor purchase approval | **A** ⛔ | R | C | C | C (recommends) | I |
| External send / publish (email · post · ad) | **A** ⛔ | C | I | R | I | R (drafts) |
| Customer escalation | I | **A** | C | R | I | R (draft reply) |
| Monthly financial close | I* | C | I | I | **A** · R | R |
| Access grant / revoke (on/offboard) | **A** | R | C | I | I | R (checklist) |
| Security / compliance review | **A** | C | R | I | C | R |

Legend: **A** = Accountable (one only) · R = Responsible · C = Consulted · I = Informed · **⛔** = a founder gate (money / commitment / external send) · *Founder is Informed except the decisions the review/close surfaces for him (the NEEDS-TONY items, the sign-off) · **AI runs the pipeline but deploy-to-prod is human-gated per the backbone + guardrails.

Keep the table in **Airtable**; a visual matrix in **Lucid** if a diagram helps a new hire.

### 3. Roles + permissions matrix across the tool stack
This is people/vendor access — **who can touch which tool** — and it **composes `docs/engineering-backbone.md` §10**. It is *distinct from* in-product RBAC (§2: the app's `owner/admin/staff/user` roles enforced in RLS); cross-reference §2, don't merge the two. The app's users are governed by §2; the *team's* access to the *stack* is governed here.

**Principles (from §10, non-negotiable):** least privilege by default (when in doubt, grant less) · MFA on every account · SSO (Google Workspace) where supported · no shared logins · the Owner holds break-glass creds in a vault · service accounts & AI agents get **scoped, revocable, read-first, drafts-only** tokens, never a god-key · every grant recorded in the access register · reviewed quarterly.

**Default matrix** (principal × tool → least-privilege level; tune per venture, keep the principle). Principals: **Owner** (founder) · **Operator** (COO/ops) · **Delivery** (dev/eng) · **Growth** (GTM/sales) · **Finance** · **Contractor** (scoped) · **AI / service account**.

| Tool (stack) | Owner | Operator | Delivery | Growth | Finance | Contractor | AI / service acct |
|---|---|---|---|---|---|---|---|
| **GitHub** (code) | Admin | Read | Write (branch + PR) | — | — | Write, single repo, PR-only | CI token, least-scope |
| **Supabase** (DB/auth/fns) | Owner | Read (dashboard) | Developer | — | — | — | **service-role in prod server-side only**, scoped |
| **Stripe** (payments, live) | Admin | Analyst (read) | — | — | Analyst / support | — | **restricted key (`rk_`)** |
| **Vercel / host** (deploy) | Owner | Deploy | Deploy | — | — | — | Deploy token |
| **Airtable** (CRM/ops/registers) | Owner | Editor (all bases) | — | Editor (scoped base) | Editor (finance base) | Editor/commenter (one scoped base) | Scoped PAT |
| **Twilio / SendGrid** (comms) | Owner | Send / config | — | Send (campaigns) | — | — | Scoped API key |
| **PostHog / Sentry** (analytics/errors) | Owner | Member | Member | Read | — | — | Ingest key only |
| **Canva / Drive / Gmail** (content/docs) | Owner | Editor | Editor (scoped) | Editor | — | Editor (scoped folder) | **Draft-only** (per backbone Layer 5) |
| **Password manager / vault** (1Password) | Owner | Admin | Member (scoped vault) | Member (scoped) | Member (scoped) | Member (scoped vault) | — |
| **Payroll / HR** (Gusto / Deel) | Admin | Admin | — | — | Admin / run payroll | Self-service (own profile) | — |
| **Accounting** (QuickBooks / Xero) | Owner | — | — | — | Accountant / admin | — | Read-only sync |
| **E-sign** (Docusign) | Admin | Sender | — | Sender | Sender | — | — |
| **Domain / DNS** | Owner | — | — | — | — | — | — |
| **Product app** (in-product) | → governed by **RBAC §2** (`owner/admin/staff/user`, RLS-enforced) — *not* a stack grant | | | | | | |

Read the cells as *ceilings*, not entitlements: a contractor gets the **one** base/repo/folder they need and nothing else; the AI service account never holds a write key to money or prod data; Finance touches the money tools and not the code. High-blast-radius cells (Supabase service-role, Stripe live keys, DNS, the vault) stay with the Owner + the single role that must have them, and are the first things checked in the quarterly review and the first things revoked at offboarding.

**Access register schema** (the living source of truth, in Airtable): `Principal · Type (human/service) · Tool · Access level · Scope (repo/base/vault) · MFA on? · Granted (date, by) · Last reviewed · Status (active/revoked)`.

### 4. Hiring kit — Geoff Smart's "Who" / topgrading
The order is fixed: **scorecard first, always.** Sourcing or interviewing before the scorecard exists is how you hire a résumé instead of an outcome.

**a) Scorecard** (authored before any sourcing; it is the spine of the JD, the loop, and the reference):
- **Mission** — one sentence: why the role exists and the outcome it delivers.
- **Outcomes** — 3–5 *measurable, ranked* results the person must produce in 12 months (e.g. "book 15 qualified B2B calls/month by month 3"), not activities.
- **Competencies** — the role-specific skills + the cultural/behavioral must-haves (the venture's operating values), each rateable.

**b) JD draft** — derived directly from the scorecard, in the venture's voice: role · mission · the outcomes (as "what you'll own") · must-haves · nice-to-haves · comp range *placeholder* (a founder gate — never fill a number) · how to apply. **Draft only, never posted.**

**c) Structured interview loop** — four interviews, **the same questions for every candidate** so they're comparable, each answer scored against the scorecard (1–5):
1. **Screen** (15–30 min) — mission fit, dealbreakers, comp expectation range, logistics.
2. **The "Who" / topgrading interview** (the core) — a **chronological walk of every job**: for each — *What were you hired to do? What did you accomplish? What were the low points? Who was your boss and what would they say about you (on a 1–10, and why)? Why did you leave?* The pattern across jobs is the signal.
3. **Focused / competency** (per key competency) — behavioral, evidence-based: "Tell me about a time you owned [outcome] — what did you do, what happened, what would you do differently?"
4. **Reference** (see d).
Score each interview on the scorecard; decide against the outcomes, not on chemistry.

**d) Reference script** — candidate-arranged (the "Who" method: the candidate sets up references with former bosses, which itself is a signal), structured questions: *In what context did you work together? What were their biggest strengths? Biggest areas for development? How would you rate their overall performance 1–10, and what would make it a 10? Would you hire them again?* Listen for hesitation as much as content.

> **Guardrails, hard:** this kit is **process + drafts**. An **offer, a comp figure, or any commitment is a founder gate** — assemble the recommendation and escalate; never issue. Criteria stay job-related and non-discriminatory (a legal line). **Never fabricate PII or details of a real candidate** — use roles/placeholders in all examples; if handed real candidate data, keep it within access controls and invent nothing.

### 5. Onboarding + offboarding (with access)
**Onboarding** (day-0 → 90; produces a checklist, comms are drafts):

| Phase | Steps |
|---|---|
| **Pre-start** | Employment/contractor agreement + NDA + IP assignment → `legal-pack` / e-sign (**commit gate → founder**, drafted here); confirm start date, equipment, comp (finance). |
| **Day 1 — access provisioning** | Grant **least-privilege** accounts per the §3 matrix; enforce **MFA**; add to **SSO**; issue **scoped, named** tokens (never the Owner's personal key); **record every grant in the access register.** |
| **Week 1** | Assign the SOPs they run (from the library, §6); a buddy; the first small, shippable outcome; the operating-rhythm meetings they attend. |
| **30 / 60 / 90** | Review against the **scorecard outcomes** — the same document that hired them now measures them. |

**Offboarding** (**security-critical — the highest-risk moment in the whole layer**; the §10 revoke checklist, **within 24h of departure**):

- [ ] **Revoke every tool account + token** the person held (walk the §3 matrix row-by-row for their principal type).
- [ ] **Rotate any shared secret they could have seen** (§3 of the backbone) — a departed person + a live shared key = an open door.
- [ ] Remove from GitHub, Supabase, Stripe, host, Airtable, comms, analytics, payroll/billing, vault, e-sign, DNS.
- [ ] **Transfer ownership** of anything they solely owned (repos, bases, docs, domains, vendor relationships).
- [ ] Recover assets (laptop, hardware keys, physical access).
- [ ] Final pay / contractor settlement → `/finance-ops`.
- [ ] Knowledge transfer — their SOPs are current and reassigned.
- [ ] **Update the access register and re-audit** to confirm zero residual access.

The onboarding grant and the offboarding revoke are two ends of the *same* access register — if provisioning wasn't recorded, deprovisioning can't be verified, which is exactly how ex-contractors keep live keys.

### 6. The SOP system (composes `/sop-writer`)
org-roles owns the **library**; `/sop-writer` authors each **SOP**. Division of labor:
- org-roles decides *what* needs an SOP: **every RACI row**, plus anything the **bus test** flags as founder-only-knowledge. Each becomes a library entry with an owner and a review date.
- `/sop-writer` writes each one to its contract (trigger · inputs · numbered steps · decision points · guardrails-as-stops · output · check).
- The **SOP register** (Airtable): `SOP · Owner (a cheap runner, never the founder) · Trigger · Cadence · Last reviewed · Link (Drive)`. SOPs live in **Google Drive**; process maps via `operations:process-doc`; incident/runbook procedures via `operations:runbook`.

The SOP library *is* the founder-dependence fix made concrete: the goal is that every recurring process in the RACI has an SOP a non-founder runs.

### 7. PM/tooling setup + vendor management
**Work management:** **Airtable** (ops board) now → add **Linear** (`REGISTRY`) when the eng team grows past the founder + AI. The flow is the same regardless of tool: **intake → prioritize → assign one owner → status → done**, reviewed on the weekly cadence (§8). Keep one board; every item has an owner and a due date (the RACI, applied to work).

**Vendor management** (composes `operations:vendor-review`): stand up the **vendor register** (Airtable): `Vendor · Service · Owner · Cost · Renewal date · Data access (none/PII/PHI) · DPA/BAA signed? · Criticality · Alternative`. The lifecycle:
- **Onboard a vendor:** sign the **DPA** (or **BAA** if it touches PHI — backbone §9) *before* data flows; grant it **least-privilege** access (§3); record it.
- **Review:** on renewal (and quarterly for critical/data-touching vendors) run `operations:vendor-review` — cost vs. value, security posture, alternatives. Renewals and spend route through the **spend gate** (`/finance-ops`; no spend without approval).
- **Offboard a vendor:** revoke access, confirm **data deletion**, close billing, update the register.

### 8. The weekly operating rhythm (composes `/weekly-ops-review`)
Set the cadence (Rockefeller Habits); org-roles owns the *calendar and the RACI per meeting*, `/weekly-ops-review` produces the *weekly block*:

| Cadence | Meeting | Owner | Attendees | Purpose |
|---|---|---|---|---|
| Daily (when >1 person) | Async huddle | Operator | Team | Yesterday / today / blockers — 5 lines, no meeting |
| **Weekly** | **Ops review** | Operator | Founder + function owners | The `SHIPPED / PIPELINE $ / KILLED / NEEDS TONY` block (`/weekly-ops-review`) |
| Monthly | Business review | Operator | Founder + owners | Finance close (`/finance-ops`) + metrics (`/metrics-dashboard`) + priorities |
| Quarterly | Planning + governance | Founder | Owners | Next-quarter priorities · **access review (§3)** · **org review (§1 — do the next-3-hires triggers fire?)** |

The founder's time appears only where a gate requires it (the NEEDS-TONY items, sign-offs, sales calls) — the rhythm exists so the machine reports to him, not the reverse.

---

## Composition map (what this skill calls, and what owns what)

| Need | Composed skill / doc | Division |
|---|---|---|
| Author each SOP | `/sop-writer` | org-roles picks the processes + owns the library; sop-writer writes each SOP |
| The weekly block | `/weekly-ops-review` | org-roles owns the cadence/RACI; weekly-ops-review produces the report |
| Permissions matrix + access governance | `docs/engineering-backbone.md` §10 | org-roles' matrix **extends** §10; never contradicts it |
| In-product RBAC (app roles) | `docs/engineering-backbone.md` §2 | referenced, kept **distinct** from stack access |
| Comp · payroll · spend gate · vendor cost | `/finance-ops` | org-roles routes money decisions there; never sets a number |
| Employment / contractor / NDA / IP docs | `legal-pack` · `setup-checklists` | org-roles triggers the draft; signing is a commit gate |
| Process maps · runbooks | `operations:process-doc` · `operations:runbook` | for the visual/procedural artifacts |
| Vendor reviews | `operations:vendor-review` | the renewal/security review itself |
| Capacity · risk · status artifacts | `operations:capacity-plan` · `operations:risk-assessment` · `operations:status-report` | pulled when planning headcount, assessing an org/access risk, or reporting up |
| Org chart · RACI visual | **Lucid MCP** (`lucid_create_org_chart`) | the diagrams |
| Registers (org · RACI · access · SOP · vendor) | **Airtable MCP** (`create_table` / `create_records_for_table`) | the living tables |
| SOP / doc storage | **Google Drive MCP** | where SOPs live |

`operations:*` pack used: **process-doc** (process maps), **runbook** (incident/operational runbooks), **capacity-plan** (headcount/capacity when sizing the next hire), **vendor-review** (vendor renewals/security), **risk-assessment** (org/key-person/access risk), **status-report** (rollup reporting). Each honors the same guardrails as this skill.

## The stack at a glance (function → tool → MCP → status here)

| Function | Recommended tool | MCP available here? | If no MCP |
|---|---|---|---|
| Org chart / RACI visual | **Lucid** | ✅ **Lucid MCP** (`lucid_create_org_chart`) | — |
| Registers: org · RACI · access · SOP · vendor | **Airtable** | ✅ **Airtable MCP** | — |
| SOP / process-doc storage | **Google Drive** | ✅ **Drive MCP** | — |
| Draft comms (offers-as-drafts, ref outreach) | **Gmail** | ✅ **Gmail MCP** (drafts-only) | never auto-sends |
| Process maps · runbooks · reviews | `operations:*` skill pack | ✅ skills | — |
| SOP authoring · weekly block | `/sop-writer` · `/weekly-ops-review` | ✅ skills | — |
| Work management (PM) | **Airtable** (ops) → **Linear** (eng) | ✅ Airtable / ❌ Linear | Airtable now; connect Linear when eng team grows |
| Payroll / HR | **Gusto** (US) / **Deel** (global) | ❌ | connect at first W-2 hire / contractor-at-scale |
| E-sign (offers, NDAs, MSAs) | **Docusign** | ❌ + `legal:*` skills | `legal:signature-request` drafts + routes; signing is a gate |
| Password manager / vault | **1Password** | ❌ | Owner holds break-glass; add at first hire |

---

## Worked example — Executive Edge OS (the deliverable, abridged)

**Input:** stand up the org + roles layer for Executive Edge (live health-tech SaaS, **solely owned**, Tony ≤2 hrs/week = approvals + sales calls only, $10k ceiling, mid a 90-day B2B sprint, LYV firewall, drafts-only). Loads PROFILE + the EE context + engineering-backbone §2/§10.

- **Org design (stage = launch / live revenue, solo-owned).** The bus test is *acute*: today Tony is the single point of failure across sales, delivery, and approvals. Functions are covered thus — Product/eng: **Claude Code/Fable + Tony** (approvals only); Marketing/content: **AI+Cowork** on the OS skills; Sales: **Tony (calls) + AI (sourcing/drafts)**; Finance: **`/finance-ops` + a fractional bookkeeper**; Ops: **AI+Cowork (the rhythm/SOP library)**; Support/delivery: **Tony + AI** (the manual cohort layer); Legal/compliance: **`legal-pack` + counsel (gated)**. **No FT hires yet** — none clears the four tests against the $10k ceiling. **Next 3 hires, trigger-gated:** (1) **Fractional ops/operator** — trigger: >2 signed cohorts *or* the SOP library exceeds what Cowork can run solo; owns the machine so Tony only sells. (2) **B2B setter/SDR (contract)** — trigger: booked-call demand exceeds Tony's calendar *and* the sprint's economics fund it; sources + books (never sources from LYV; drafts-only). (3) **Delivery/clinical-ops coordinator (contract)** — trigger: cohort count makes the manual quarterly report a bottleneck; owns cohort delivery. Design stays `brand-design`+Canva; eng stays Fable+Tony.
- **RACI.** Filled for EE's real processes — **deploy to prod** (Delivery A, Tony I, AI runs pipeline but deploy is gated), **B2B cohort delivery** (a delivery coordinator A once hired; Tony A until then), **spend approval** ⛔ (Tony A), **external send** ⛔ (Tony A — every DM/email/post is a draft), **monthly close** (Finance/bookkeeper A, `/finance-ops`), **access grant/revoke** (Tony A). One Accountable per row; all three gates land on Tony.
- **Permissions matrix (EE's actual stack).** GitHub `executive-edge-os` · Supabase (342 migrations — **service-role prod-only, server-side**) · DO App Platform · **Stripe LIVE (restricted `rk_` for any automation)** · Airtable · Twilio + Resend · GA4/Sentry/PostHog · Canva/Drive/Gmail (**drafts-only**) · domain. The **B2B setter** contractor gets exactly: one scoped Airtable base (pipeline) + Gmail drafts-only + read CRM — and explicitly **no Stripe, no Supabase, no prod data, no DNS**. In-product RBAC (`owner/admin/staff/user` on `app.executivesedge.ai`) is governed by §2 and kept separate. Access register seeded in Airtable.
- **Hiring kit.** A filled **scorecard + JD draft** for the **B2B setter** (mission: fill Tony's sales calendar with qualified cohort/operator conversations; outcomes: 15 qualified calls/mo by month 3, 0 sourced from LYV; competencies: outbound rigor, clinical-category fluency, CRM discipline), the 4-interview loop scored on those outcomes, and the reference script. **Comp left as a placeholder; no offer drafted — that's Tony's gate.** No real candidate data invented.
- **Onboarding / offboarding.** Contractor onboarding: NDA + IP + contractor agreement drafted → e-sign (gate); Day-1 least-privilege grants per the matrix + MFA + register entry; Week-1 SOPs (lead-response, CRM hygiene) assigned. Offboarding within 24h: revoke the Airtable base + Gmail + CRM, **rotate any shared Airtable PAT**, transfer any solely-owned records, settle final pay via `/finance-ops`, re-audit the register — with an explicit **LYV-adjacency check** on anything the setter touched.
- **SOP library / rhythm.** Library seeded from the RACI rows (weekly review, lead-response, cohort onboarding, refund handling, access grant/revoke) → each authored by `/sop-writer`, stored in Drive, registered in Airtable. Rhythm: async daily huddle (once the setter joins) · **weekly ops review** (`/weekly-ops-review` block) · monthly close+metrics · quarterly priorities + access review. Vendor register seeded (Supabase, Stripe, Twilio, Resend, DO, Anthropic — DPA/BAA status flagged; PHI-touching vendors need a **BAA** per backbone §9).

Full deliverable: `ventures/executive-edge/outputs/org-roles-setup.md`.

---

## Guardrail summary (baked into every run)

- **Lean, not bloated** — fewest roles that remove founder-dependence; a hire passes the four tests or it's a contractor/SOP.
- **Hiring = process + drafts** — no offer, no comp number, no commitment; those escalate to Tony. No discriminatory criteria. **No fabricated real-candidate PII.**
- **Least-privilege access** — grant less when unsure; MFA everywhere; scoped/revocable tokens; AI read-first + drafts-only; offboarding revokes + rotates within 24h (security-critical).
- **Compose, don't duplicate** — sop-writer / weekly-ops-review / finance-ops / legal-pack / engineering-backbone own their layer; org-roles owns the structure.
- **Secrets by reference** — the register records access levels, never keys. Drafts only for comms. Clinical voice; banned words out; industry-agnostic.
