# Executive Edge OS — Operations, Org & Roles Setup

> Produced by `/org-roles`. Loads `founder-profile/PROFILE.md` → `ventures/executive-edge/venture-context.md` → `docs/engineering-backbone.md` §2 (RBAC) + §10 (access governance). Industry-agnostic method, applied to EE.
>
> **Assumptions stated up front:** stage = *launched, live revenue, solely owned*; Tony ≤2 hrs/week (approvals + sales calls only); $10k ceiling, $0 until demand proven; mid a 90-day B2B sprint (kill-date Aug 3, 2026); LYV firewall; drafts-only. Pricing per the context (confirm live before any external use). Nothing here is an offer, a spend, or a send.

---

## 1. Stage-appropriate org map

**Bus test (today):** if Tony is unavailable for two weeks, *sales stalls, cohort delivery stalls, and every approval/send stalls.* Tony is the single point of failure — the founder-dependence failure mode, live. The fix at this stage is **coverage + SOPs**, not headcount ($10k ceiling clears no FT role).

### Current-stage coverage (functions → who covers them)

| Function | Coverage today | Notes |
|---|---|---|
| Product / engineering | **Fable / Claude Code + Tony (approvals)** | Deploy is human-gated; Tony approves, doesn't build |
| GTM / marketing | **AI + Cowork** (OS Launch skills) | Drafts only; nothing publishes without Tony |
| Sales | **Tony (calls) + AI (sourcing + drafts)** | Tony's calendar is the scarce input; AI books around it |
| Finance | **`/finance-ops` + fractional bookkeeper** | Monthly close; CPA flags routed |
| Operations | **AI + Cowork** (this layer: rhythm, SOP library, registers) | The machine that lets Tony step out |
| Support / delivery | **Tony + AI** (manual cohort layer) | The product gap: cohorts = N clients + a manual quarterly report |
| Legal / compliance | **`legal-pack` + counsel (gated)** | Health-claims review; LegitScript on public Rx/peptide pages |

**No full-time hires yet.** None clears the four tests (recurring · unblocks Tony · economics support it · not SOP-able) against the current ceiling and cash.

### Next 3 hires (ranked, trigger-gated — contract first, not FT)

| # | Role | Trigger condition (the number that makes it pass the four tests) | Removes Tony from |
|---|---|---|---|
| 1 | **Fractional ops / operator** | ≥2 signed cohorts **or** the SOP library outgrows solo-Cowork operation | Running the machine (rhythm, CRM hygiene, SOP upkeep) |
| 2 | **B2B setter / SDR (contract)** | Booked-call demand exceeds Tony's calendar **and** sprint dollars fund it | Sourcing + booking (never from LYV; drafts-only) |
| 3 | **Delivery / clinical-ops coordinator (contract)** | Cohort count makes the manual quarterly report the bottleneck | Cohort delivery + client management |

Design stays `brand-design` + Canva; engineering stays Fable + Tony. **Diagram:** Lucid `lucid_create_org_chart` (Tony at top; AI/Cowork ops layer; contract specialists as dashed nodes gated on their triggers).

---

## 2. RACI — core recurring processes

Exactly one **A** per row. **⛔** = a founder gate (money / commit / external send).

| Recurring process | Tony (Owner) | Ops (fractional, when hired) | Delivery/Eng | Sales/Growth | Finance (bookkeeper) | AI/Cowork |
|---|---|---|---|---|---|---|
| Weekly operating review | I* | **A** | C | C | C | R |
| Deploy to prod (`executive-edge-os`) | I | C | **A** · R | I | I | R** |
| Incident response (Sev 1/2) | I* | C | **A** · R | I | I | R |
| B2B cohort delivery | **A**† | C | C | I | I | R |
| Hiring decision / offer | **A** ⛔ | R | C | C | C | R (process + drafts) |
| Spend / vendor purchase | **A** ⛔ | R | C | C | C (recommends) | I |
| External send / publish (DM · email · post · ad) | **A** ⛔ | C | I | R | I | R (drafts) |
| Customer escalation | I | **A** | C | R | I | R (draft reply) |
| Monthly financial close | I* | C | I | I | **A** · R | R |
| Access grant / revoke (on/offboard) | **A** | R | C | I | I | R (checklist) |
| Health-claim / compliance review | **A** | C | R | I | C | R |

\*Informed except the decisions the review/close surfaces (NEEDS-TONY items, sign-off). \**AI runs the deploy pipeline; the deploy itself is human-gated (backbone + guardrails). †Tony is Accountable for cohort delivery **until** the delivery coordinator (hire #3) is engaged, then it moves to that role.

---

## 3. Roles + permissions matrix (EE's actual stack)

Composes **engineering-backbone §10**. Distinct from **in-product RBAC (§2)** — the app's `owner/admin/staff/user` on `app.executivesedge.ai` is RLS-enforced and governs *users*, not this team-access layer. Principles: least-privilege · MFA everywhere · SSO (Google Workspace) where supported · no shared logins · break-glass in a vault · AI/service accounts scoped + revocable + read-first + drafts-only · quarterly review.

| Tool (EE stack) | Tony (Owner) | Ops | Delivery/Eng | Sales/Growth | Finance | **B2B setter (contractor)** | AI / service acct |
|---|---|---|---|---|---|---|---|
| GitHub `executive-edge-os` | Admin | Read | Write (branch + PR) | — | — | **—** | CI token, least-scope |
| Supabase (342 migrations) | Owner | Read (dashboard) | Developer | — | — | **—** | service-role **prod, server-side only** |
| Stripe **LIVE** | Admin | Analyst (read) | — | — | Analyst | **—** | restricted key (`rk_`) |
| DigitalOcean App Platform | Owner | Deploy | Deploy | — | — | **—** | deploy token |
| Airtable (CRM/ops/registers) | Owner | Editor (all) | — | Editor (pipeline) | Editor (finance) | **Editor — pipeline base only** | scoped PAT |
| Twilio (SMS) + Resend (email) | Owner | Send/config | — | Send (campaigns) | — | **—** | scoped API key |
| GA4 / Sentry / PostHog | Owner | Member | Member | Read | — | **—** | ingest key only |
| Canva / Google Drive / Gmail | Owner | Editor | Editor (scoped) | Editor | — | **Gmail drafts-only + Drive scoped folder** | draft-only |
| 1Password (vault) | Owner | Admin | Member (scoped) | Member (scoped) | Member (scoped) | **—** | — |
| Domain / DNS (`executivesedge.ai`) | Owner | — | — | — | — | **—** | — |

**The setter contractor gets exactly:** the pipeline Airtable base + Gmail drafts-only + a scoped Drive folder — and **explicitly no Stripe, no Supabase, no prod data, no GitHub prod, no DNS, no vault.** High-blast-radius cells (Supabase service-role, Stripe live, DNS, vault) stay with Tony + the one role that must hold them.

**Access register** (Airtable — seed): `Principal · Type · Tool · Access level · Scope · MFA? · Granted (date, by) · Last reviewed · Status`.

---

## 4. Hiring kit — B2B setter/SDR (the trigger-gated next role)

> **Drafts only. No offer, no comp figure — those are Tony's gate.** No real-candidate data invented.

### Scorecard
- **Mission:** Keep Tony's sales calendar full of *qualified* cohort/operator-license conversations so his hours convert to closed dollars.
- **Outcomes (ranked, 12-mo):** (1) ≥15 qualified B2B calls booked/month by month 3; (2) 0 prospects sourced from LYV relationships/data; (3) CRM 100% current (every lead staged, no ghost records); (4) ≥30% booked→showed rate.
- **Competencies:** outbound rigor + follow-up discipline · clinical-category fluency (can speak to executives credibly) · CRM/pipeline hygiene · written comms in EE's voice (clinical, precise) · coachable, high-integrity.

### JD (draft)
> **Role:** B2B Setter (contract), Executive Edge OS. **Mission:** fill the founder's calendar with qualified executive-health cohort and operator-license conversations. **You'll own:** outbound to fit-profile companies/clinics; qualifying and booking; keeping the pipeline immaculate. **Must-haves:** proven outbound booking record; comfort with a clinical/executive buyer; disciplined CRM habits; precise writing. **Nice-to-haves:** health/longevity category exposure; Airtable. **Comp:** _[range — founder to set]_. **How to apply:** _[link — draft]_.

### Structured interview loop (same questions every candidate; score 1–5 vs. scorecard)
1. **Screen (20 min):** mission fit, dealbreakers, comp-range expectation, availability.
2. **"Who"/topgrading (core):** chronological walk of each role — hired to do what · accomplishments · low points · boss's 1–10 rating and why · why left.
3. **Focused (competency):** "Walk me through a time you built a booking pipeline from zero — cadence, tools, numbers, what you'd change."
4. **Reference (candidate-arranged):** context · strengths · development areas · 1–10 overall + what makes it a 10 · rehire?

### Reference script
Same five questions each reference; listen for hesitation as much as content.

---

## 5. Onboarding + offboarding (with access)

### Onboarding — the setter contractor
- **Pre-start:** contractor agreement + NDA + IP assignment drafted → e-sign (**commit gate → Tony**). Confirm start, comp (finance), equipment.
- **Day 1 — provision (least-privilege, §3):** pipeline Airtable base + Gmail drafts-only + scoped Drive folder; enforce **MFA**; issue a **scoped, named** Airtable PAT (never Tony's key); **record every grant in the access register.**
- **Week 1:** assign SOPs (lead-response, CRM hygiene, outbound cadence); buddy = Ops/Cowork; first outcome = 5 qualified calls booked; add to the weekly ops review.
- **30/60/90:** review against the scorecard outcomes.

### Offboarding — security-critical, within 24h of departure
- [ ] **Revoke** the pipeline base, Gmail access, Drive folder, and the Airtable PAT.
- [ ] **Rotate any shared secret** the setter could have seen (shared Airtable PAT, any shared link).
- [ ] Confirm removal across every tool row of their matrix column.
- [ ] **Transfer** any records/notes they solely owned into the team base.
- [ ] Recover equipment / hardware keys.
- [ ] Final contractor settlement → `/finance-ops`.
- [ ] **LYV-adjacency check** — audit everything they touched for any LYV-originated contact; quarantine if ambiguous.
- [ ] **Update the access register + re-audit** to confirm zero residual access.

---

## 6. SOP library (→ `/sop-writer`)

Seeded from the RACI rows + bus-test gaps; each authored by `/sop-writer`, stored in Drive, registered in Airtable (`SOP · Owner · Trigger · Cadence · Last reviewed · Link`). Priority set:

| SOP | Owner (not Tony) | Trigger |
|---|---|---|
| Weekly operating review | Ops/Cowork | Weekly |
| Inbound lead → routed draft reply | AI/Cowork | On new lead |
| B2B cohort onboarding | Delivery/Cowork | Contract signed |
| Refund request handling | Ops/Cowork | On request (money gate → Tony) |
| Access grant / revoke | Ops/Cowork | On/offboard |
| Outbound booking cadence | Setter/Cowork | Daily (once hired) |

---

## 7. PM + vendor management

- **PM:** Airtable ops board now (intake → prioritize → one owner → status → done, reviewed weekly). Add **Linear** when eng grows past Fable + Tony.
- **Vendor register** (Airtable): seed with **Supabase, Stripe, DigitalOcean, Twilio, Resend, Anthropic, Oura, Withings, Junction, GA4/Sentry/PostHog** — each with `Owner · Cost · Renewal · Data access · DPA/BAA? · Criticality`. **PHI-touching vendors need a BAA** (backbone §9) — flag Supabase/Twilio/Junction/wearables for BAA review before any identifiable health data flows. Renewals + spend route through `/finance-ops` (no spend without approval). Reviews via `operations:vendor-review`.

---

## 8. Operating rhythm (→ `/weekly-ops-review`)

| Cadence | Meeting | Owner | Purpose |
|---|---|---|---|
| Daily (once >1 person) | Async huddle | Ops | Yesterday / today / blockers |
| **Weekly** | **Ops review** | Ops | `SHIPPED / PIPELINE $ / KILLED / NEEDS TONY` (`/weekly-ops-review`) |
| Monthly | Business review | Ops | Close (`/finance-ops`) + metrics (`/metrics-dashboard`) + priorities |
| Quarterly | Planning + governance | Tony | Priorities · **access review (§3)** · **org review (§1 — do the hire triggers fire?)** |

Tony appears only at the gates: NEEDS-TONY items, sign-offs, sales calls. The rhythm reports to him; he doesn't run it.

---

### Composition used
`/sop-writer` (each SOP) · `/weekly-ops-review` (weekly block) · `/finance-ops` (comp, spend gate, vendor cost) · `legal-pack`/`setup-checklists` (contractor/NDA/IP docs — signing gated) · `operations:vendor-review`/`process-doc`/`runbook` · engineering-backbone §2 (RBAC) + §10 (access governance) · Lucid MCP (org chart) · Airtable MCP (registers) · Google Drive MCP (SOPs) · Gmail MCP (drafts-only).
