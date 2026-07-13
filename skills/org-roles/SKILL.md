---
name: org-roles
description: >-
  Stand up and run a venture's operations, organization & roles layer — the org/structure/roles
  backbone that (with the engineering backbone) prevents the "no organization, no roles, no
  structure" failure and the founder-dependence failure mode. Covers: org design by stage (which
  roles a venture actually needs at launch vs. scale — lean, not bloated); a RACI for the core
  recurring processes; a roles + permissions matrix across the whole tool stack (who can access
  what in each tool, least-privilege, tied to the engineering-backbone access governance + RBAC);
  the hiring kit (scorecard / "Who" method, JD template, structured interview loop, references);
  onboarding + offboarding checklists including access provisioning/deprovisioning; the SOP
  system (composes /sop-writer); PM/tooling setup + vendor management (composes
  operations:vendor-review); and the weekly operating rhythm (composes /weekly-ops-review). Use
  when setting up how a venture is organized and run, deciding what to hire vs. systematize,
  building the RACI or access matrix, writing a hiring scorecard/JD/interview loop, or building
  on/offboarding (with access) checklists. Hiring produces process + drafts, never offers or
  commitments; access is least-privilege; no PII of real candidates is fabricated. Triggers:
  "org design", "org chart", "who do I hire", "first hires", "roles and responsibilities",
  "RACI", "responsibility matrix", "permissions matrix", "access matrix", "who can access what",
  "hiring scorecard", "job description", "JD", "interview loop", "structured interview",
  "reference check", "onboarding checklist", "offboarding", "deprovision access", "SOP system",
  "operating rhythm", "vendor management", "set up operations".
---

# /org-roles — Operations, Org & Roles Function

The org/structure/roles backbone. Where the engineering backbone (`docs/engineering-backbone.md`) stops the *technical* vibe-coding nightmare, this stops the *organizational* one: no owners, no roles, no access discipline, everything living in the founder's head. It stands up how a venture is organized, who owns what, who can touch which tool, how people are hired and on/offboarded, and the rhythm that runs the machine — then hands the recurring work to `/sop-writer` and `/weekly-ops-review` so it runs **without the founder**. Directly counters failure mode #5 (founder-dependence) and #1 (overbuild): the answer is the *fewest* roles that remove the founder from a bottleneck, never an org chart built for a company that doesn't exist yet.

## Load first
1. `founder-profile/PROFILE.md` — failure modes (founder-dependence #5, overbuild #1, standards-as-bottleneck #3), governing question, voice, guardrails, the four gates.
2. Active `ventures/<slug>/venture-context.md` — **stage**, revenue lines, tools/stack, entity, constraints (time ceiling, budget, firewalls), current sprint.
3. `docs/engineering-backbone.md` — **§2 (RBAC)** and **§10 (Roles & access governance)**. The permissions matrix here **composes and never contradicts** §10; keep people/vendor access (§10) distinct from in-product RBAC (§2).
4. `founder-profile/operating-playbooks.md` — Ops & SOPs (#6), the expert lenses (Smart/Who, Gerber/E-Myth, Harnish/Rockefeller Habits).
5. Latest `/weekly-ops-review`, `/sop-writer`, and `/finance-ops` outputs if present — the rhythm, the SOP library, and the spend/comp gates.

Derive everything from these. Never hard-code an industry.

## Method (full detail, matrices & worked example in `references/method.md`)
Cover all eight areas; for each, name the tool + MCP and honor the guardrails.

1. **Org design by stage.** Map the seven functions every venture must cover (**product/build/delivery** · GTM/marketing · sales · finance · ops · support · legal/compliance) to a **coverage** decision per stage — Founder / AI+Cowork / contractor / fractional / FT hire. **For non-software ventures the build/delivery function is often the largest** — a frontline workforce (providers, drivers, store/floor staff, makers, fulfillment) that is the primary org-design subject, not an afterthought under "eng." A function becoming a **hire** must pass four tests: recurring, removes the founder from a bottleneck, economics support it (`/finance-ops`), and it can't be systematized to an SOP+AI. Output the current-stage coverage map + the **next 3 hires** with trigger conditions. Lean, not bloated. Tool: **Lucid** (`lucid_create_org_chart`) for the org map; **Airtable** for the function/coverage table.
2. **RACI for core recurring processes.** One **Accountable** per process (zero or two A's is the #1 RACI defect). Any process that hits a founder gate (spend / commit / external-send / Tony-only) → the founder is Accountable there; reversible processes → Operator or AI/Cowork is Accountable and the founder is Informed. Tool: **Airtable** (RACI table) / **Lucid** (visual matrix).
3. **Roles + permissions matrix across the tool stack.** Principal (Owner / Operator / Delivery / Growth / Finance / scoped Contractor / AI-service-account) × resource — **tools from the venture's actual stack *and* physical/operational access** (premises keys/codes, vehicles, POS, inventory/WMS, provider/driver/store-staff app accounts) → **least-privilege** access level; access governance is not just SaaS logins. MFA on every account (n/a but still recorded + revocable for physical), SSO where supported, no shared logins/codes that outlive a person, scoped/named/revocable tokens, AI agents read-first + drafts-only + never a god-key, quarterly review. **Composes engineering-backbone §10**; cross-references in-product RBAC (§2) without merging them. Tool: **Airtable** (the living access register).
4. **Hiring kit (Geoff Smart / "Who").** A **scorecard** (mission · 3–5 ranked measurable outcomes · competencies) is authored *before* sourcing and is the spine of everything downstream: a **JD draft** (voice-compliant), a **structured interview loop** (screen → chronological "Who"/topgrading → focused competency → reference — same questions every candidate for comparability, scored against the scorecard), and a **reference script**. Produces process + drafts only.
5. **Onboarding + offboarding (with access).** Onboarding: pre-start (docs → `legal-pack`/e-sign, a commit gate) → Day 1 access **provisioning** (least-privilege grants per §3, MFA, register entry) → Week 1 SOPs + first outcome → 30/60/90 tied to the scorecard. Offboarding (**security-critical, within 24h**): the §10 revoke checklist — kill every account+token, **rotate any shared secret they saw**, remove from all tools, transfer sole-owned assets, update the register, re-audit — plus **asset return + physical/operational revocation** (premises keys/codes rotated, vehicles/equipment/uniforms recovered, POS logins killed, any provider/driver/store-staff app account deactivated), final pay (`/finance-ops`), and knowledge transfer.
6. **The SOP system.** org-roles decides *which* processes need an SOP (every RACI row + anything that fails the "bus test") and owns the **SOP library** (register, naming, owner, review cadence, version); `/sop-writer` **authors each one**. Composition, not duplication. Register in **Airtable**; SOPs live in **Google Drive**. `operations:process-doc` / `operations:runbook` for process maps and incident runbooks.
7. **PM/tooling setup + vendor management.** Work management: **Airtable** (ops) now → **Linear** (eng) as the team grows — intake → prioritize → owner → status → done, on the weekly cadence. Vendor management (composes `operations:vendor-review`): the **vendor register** (vendor · service · owner · cost · renewal · data access · DPA/BAA · criticality), onboarding (DPA/BAA + least-privilege access) and offboarding (revoke + data deletion), renewal reviews. Ties to the spend gate (`/finance-ops`) and backbone §9 (subprocessor DPAs/BAAs).
8. **The weekly operating rhythm (Rockefeller Habits).** Set the cadence — daily async huddle (when >1 person) · **weekly ops review** · monthly (finance close + metrics) · quarterly (priorities + **access review** + org review) — with owner, attendees, and agenda per meeting. `/weekly-ops-review` **produces the weekly block**; org-roles owns the calendar and the RACI for each meeting.

## Output contract
Deliver a venture's **org + roles setup**, filled (not blank templates), with these five components:
1. **Stage-appropriate org map** — the function × coverage matrix for the venture's *current* stage + the next 3 hires with explicit trigger conditions (and what stays AI/Cowork/fractional). Bus-test flagged.
2. **RACI** — a filled table for the venture's core recurring processes, exactly one Accountable per row, founder-gate rows marked.
3. **Roles/permissions matrix** — the access matrix (principal × resource × least-privilege level — tools **and**, for non-software ventures, physical/operational access: premises, vehicles, POS, inventory, provider/driver/store-staff app accounts) for the venture's actual stack, tied to engineering-backbone §10, with the access-register schema.
4. **Hiring kit** — a filled **scorecard + JD draft** for the venture's *next* role, the structured interview loop with scored questions, and the reference script. Drafts only.
5. **Onboarding + offboarding checklists** — including access **provisioning** and (security-critical) **deprovisioning**, mapped to the matrix and the register.
Plus, named and wired: the **SOP library plan** (which processes → `/sop-writer`), the **PM + vendor-management** setup, and the **operating rhythm** (→ `/weekly-ops-review`). State assumptions inline.

## Rules
- **Lean, not bloated.** Recommend the fewest roles that remove the founder from a bottleneck. A hire must pass the four tests (recurring · unblocks the founder · economics support it · not SOP-able). Designing an org for a company that doesn't exist yet trips the overbuild failure mode — flag it.
- **Hiring = process + drafts, never a commitment.** Scorecards, JDs, loops, reference scripts, and comms are drafts. An **offer, a comp number, or any commitment is a founder gate** — escalate, never issue. No discriminatory criteria (legal). **Never fabricate PII of a real candidate**; use roles/placeholders, and if given real candidate data, keep it within controls and never invent details.
- **Least-privilege access, always.** When in doubt, grant less. MFA everywhere, no shared logins, scoped/named/revocable tokens, AI/service accounts read-first + drafts-only. Every grant is recorded and revocable; offboarding revocation is within 24h and is security-critical.
- **Compose, don't duplicate.** `/sop-writer` writes the SOPs; `/weekly-ops-review` writes the weekly block; the permissions matrix extends backbone §10; comp/payroll/spend routes through `/finance-ops`; employment/contractor docs route through `legal-pack`/`setup-checklists`. org-roles owns the *structure*; the composed skills own their artifact.
- **Secrets by reference only** — never materialize or echo a credential; the access register records *access levels*, never keys.
- Clinical, precise, premium voice; banned words out (journey, wellness, holistic, guru, revolutionary, game-changer, hack). Never hard-code an industry.

## Examples & evals
- Executive Edge OS org+roles setup (org map + RACI + permissions matrix + hiring kit + on/offboarding) worked end-to-end in `references/method.md`; full deliverable in `ventures/executive-edge/outputs/org-roles-setup.md`.
- Graded cases in `evals/evals.md` (lean-not-bloated staging, one-Accountable RACI + least-privilege matrix, hiring stays drafts / no offer / no fabricated candidate PII, offboarding revokes + rotates).
