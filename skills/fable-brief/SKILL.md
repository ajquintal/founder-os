---
name: fable-brief
description: >-
  Consume a whole validated venture — its `/product-spec`, `/brand-design` tokens, the
  engineering/security backbone (`docs/engineering-backbone.md`), the tool & MCP stack
  (`docs/tool-mcp-stack.md`), and every operational-setup output (`finance-ops`, `sales-crm`,
  `gtm-marketing`, `content-engine`/`content-cadence`/`social-media`, `support-success`,
  `analytics-stack`, `legal-pack`, `org-roles`) — and emit ONE
  self-contained, phased, PR-by-PR master build brief that Fable (the Claude Code coding agent)
  executes at a high level. Each PR carries Problem · Scope · Data model + RLS · Endpoints/edge
  functions (+ verify_jwt) · Acceptance criteria (Given/When/Then) · Test plan (unit/e2e) · Security
  checklist · Secrets (names only, never values) · Dependencies · Human gate. Around the PRs: the full
  workstream map (product code + the security backbone + the operational tooling wiring), the
  sequencing (what unblocks what, what runs in parallel), a definition-of-done per workstream, a
  coverage matrix proving nothing is dropped, and consolidated human-gate + secrets + connect-these-tools
  lists. The capstone — the anti-vibe-coding backbone in executable form. Use to turn a whole venture
  into the engineering-ready build spec, or to hand a venture off to engineering. Triggers: "fable
  brief", "build brief", "ready for fable", "hand off to engineering", "master build spec".
---

# /fable-brief — The Master Build Brief (capstone)

The domain-15 capstone. Consumes domains 1–14 and emits the single, self-contained, phased, PR-by-PR
build brief Fable executes to stand up the *whole* venture — product code **plus** the security
backbone **plus** the operational tooling (CRM / finance / support / analytics / legal / org on their
tools + MCPs). This is the "fully ready for Fable" deliverable: the opposite of vibe-coding, where
security, roles, structure, and whole functions get missed. **Nothing is left to guess** — every
decision is already made upstream and carried here; Fable executes, it does not re-derive.

> This skill *synthesizes*; it never re-authors what an upstream skill owns. It consumes their outputs,
> resolves them into an ordered build plan, and proves — with a coverage matrix — that every input
> landed somewhere. Missing an input is a gap it names, never a decision it invents.

## Load first
1. `founder-profile/PROFILE.md` + `founder-profile/guardrails.md` — governing question, voice, drafts-only, secrets never in text, irreversible/production actions gated, LYV firewall, claims review.
2. Active `ventures/<slug>/venture-context.md` — model, ICP, offers/prices, stage, actual stack, regulatory surface, constraints, kill gates.
3. **The build contract (blocking):** the latest `/product-spec` output (stories, acceptance criteria, data model + ownership/RLS, interface surface, test plan) **and** closed unit economics (`/offer-architect` or a `/go-no-go` "test cheaply" verdict).
4. **The engineering + security standard:** `docs/engineering-backbone.md` (the `[STARTER]`/`[CONFIG]`/`[VENTURE]` control tags + the minimum-bar go-live gate + the compliance-regime matrix §9) and `starters/saas/CLAUDE.md` + `README.md` (what the starter already enforces).
5. **The tool map:** `docs/tool-mcp-stack.md` (function → tool → MCP → availability; the minimum viable stack; connect-these triggers).
6. **The design hand-off:** `/brand-design` (the paste-ready `:root`/`.dark` HSL tokens + component spec that drop into the starter).
7. **The operational-setup outputs, each consumed if present:** `finance-ops`, `sales-crm`, `gtm-marketing`, **the content & social layer (`content-engine`, `content-cadence`, `social-media`)**, `support-success`, `analytics-stack`, `legal-pack`, `org-roles`. Any that does not exist yet is either marked **N/A for this venture (why)** or **prerequisite — run it first**; never fabricated, never silently dropped.

Derive everything from these. Never hard-code an industry — read it from the venture context.

## Method (full detail, the annotated PR template + a worked brief in `references/method.md`)
1. **Input gate + completeness pass (blocking).** Confirm a finished `/product-spec` AND closed economics exist — missing either → STOP and route (the overbuild guard, same as `/ship`). Then inventory all 14 upstream inputs: each is **consumed**, **N/A (reason)**, or **prerequisite (run X)**. This inventory is the seed of the coverage matrix — no input leaves the pass unaccounted for.
2. **Workstream map — the full stand-up.** Enumerate every workstream, not just app code: **WS-A Product/App**, **WS-B Security & Governance backbone**, **WS-C Data & Analytics**, **WS-D CRM & Sales**, **WS-E Finance ops**, **WS-F GTM/Marketing/Content & Social surfaces**, **WS-G Support & Success**, **WS-H Legal & Compliance**, **WS-I Org & Access**. Each row: goal · source domain output · type (code PRs / tool-config / hybrid) · executor (Fable / Cowork+MCP / human-gated) · **definition-of-done** (shipped + verified + tests).
3. **Decompose into PRs (phased, vertical slices).** Product code → vertical-slice PRs (foundation: schema+auth+RLS → core-value → payment), inheriting `/ship`'s slicing and `/product-spec`'s AC. Operational workstreams → **config-PRs** (Airtable base build, Stripe billing wiring, GA4/PostHog/Sentry instrumentation, helpdesk, e-sign, access register) — still full PR entries with AC, secrets, and gates, because "wire the tool" is as skippable as code if it isn't specified.
4. **Author each PR to the canonical template** (§ Output contract). Every field filled; no "TBD". Map each `/product-spec` acceptance criterion onto exactly one PR.
5. **Fold the security backbone into every PR.** For the controls in `docs/engineering-backbone.md`: `[STARTER]` = state it's inherited (RLS-by-default, anon/service-role split, signature-verified idempotent webhook, secret-guard, CI); `[CONFIG]` = a turn-on line in the relevant PR (CORS lock, branch protection, secrets set); `[VENTURE]` = its own PR/checklist item (typed roles + server-side admin checks, rate-limit, input-validation layer, PII classification, tested restore, Sentry, audit log). Decide the compliance regime (§9) and place its controls. Every minimum-bar box maps to a PR or a gate.
6. **Wire the operational tooling from the domain outputs + tool-mcp-stack.** For each of finance/CRM/GTM/support/analytics/legal/org, carry the *decided* tool + MCP + the concrete build steps from that domain's output into config-PRs; flag anything with no live MCP as a connect-these item (with its trigger).
7. **Sequence + parallelize.** Phase the PRs (Phase 0 foundation → 1 core value → 2 payment/launch surfaces → 3 operate), draw the dependency graph (what unblocks what), mark what runs in parallel, and name the **critical path to first dollar** + the go-live gate sequence (deploy → test-mode payments → payments go-live), each gate human-approved.
8. **Coverage matrix + consolidated lists + whole-brief DoD.** The matrix proves nothing is missed: every `/product-spec` AC → a PR; every engineering-backbone control → a PR/WS/gate; every domain output → a workstream. Then the four consolidated lists — **human gates**, **secrets (names only)**, **connect-these-tools**, **compliance regime + controls** — and the definition of done for the whole brief.

## Output contract — the paste-ready Fable master build brief
One document, self-contained, in this order:
0. **Preamble / how Fable executes this** — the operating contract (inherit `starters/saas/CLAUDE.md` + `docs/engineering-backbone.md`; done = shipped + merged + verified in prod; gates never autonomous; secrets in env only; drafts only), the exact inputs consumed (with dates/versions), and the "execute, don't re-derive" rule.
1. **Workstream map** — the table from Method 2 (all nine workstreams, each with source output · type · executor · DoD).
2. **Sequencing & parallelization** — the phase plan + dependency graph + critical path to first dollar + the go-live gate sequence.
3. **The PR plan (phased, PR-by-PR)** — grouped by phase; every PR authored to the **canonical PR template**:
   - **PR-N · <title>** — **Problem** (the job this PR does) · **Scope** (in / explicitly out) · **Data model + RLS policies** (tables · fields+types · ownership rule · the SELECT/INSERT/UPDATE/DELETE policy set) · **Endpoints / edge functions** (each: method, auth, **`verify_jwt` true/false + the self-auth mechanism if false**) · **Acceptance criteria** (Given/When/Then, each testable) · **Test plan** (unit / e2e, mapped to the AC) · **Security checklist** (the backbone controls that apply *here*) · **Secrets needed** (env-var **names only, never values**) · **Dependencies** (PRs that must land first) · **Human gate** (deploy / payments go-live / prod migration / spend / compliance sign-off — or "none").
   - Config-PRs (operational tooling) use the same template; "Data model / Endpoints" become the base schema / tool config, and the acceptance criteria assert the wired, verified result.
4. **Coverage matrix** — three sub-tables (AC → PR; engineering-backbone control → PR/WS/gate; domain output → workstream) that leave no row unmapped.
5. **Consolidated lists** — (a) **Human gates** (one list, all PRs) · (b) **Secrets register** (name · where set: `.env`/`supabase secrets`/host · which PR — never a value) · (c) **Connect-these-tools** (tool · MCP status · trigger · how) · (d) **Compliance regime + its controls**.
6. **Definition of done (whole brief)** — the brief is complete when every workstream DoD is met, CI green, the engineering-backbone **minimum bar** satisfied, and the go-live gates cleared.

## Rules
- **Execute, don't re-derive — nothing left to guess.** Every decision (stack, prices, roles, tokens, regime, tools) is already made upstream; the brief *carries* it, resolved, so Fable never has to choose. A field that would require Fable to decide is a defect — go get the decision upstream (or name the prerequisite).
- **Completeness is mechanical, not aspirational.** Every `/product-spec` AC maps to exactly one PR; every engineering-backbone minimum-bar box maps to a PR or a gate; every domain output maps to a workstream or is explicitly N/A with a reason. The coverage matrix *is* the "nothing gets missed" guarantee — emit it, don't assert it.
- **The full stand-up, not just app code.** Security backbone + operational tooling (CRM/finance/support/analytics/legal/org) are first-class workstreams with their own PRs and DoD — the whole point is that whole functions don't get skipped the way vibe-coding skips them.
- **Security is per-PR, by default.** Every product PR states its RLS policy set, every edge function its explicit `verify_jwt` (+ self-auth if `false`), and its security checklist. RLS-on-by-default and the anon/service-role split are inherited from the starter and never weakened.
- **Blocking gate first.** No finished `/product-spec` or no closed economics → STOP and route; do not emit a brief over a missing build contract (overbuild guard).
- **Gates are consolidated and never autonomous.** Deploy, payments go-live, production migrations, spend, and compliance sign-off are drafted with a rollback path and human-approved — collected into the one gate list so the founder's attention hits exactly the irreversible points.
- **Secrets are names only.** Never a key, token, or value in the brief — only the env-var name and where it is set. (Guardrail.)
- **Inherit, don't invent.** Stack, auth model, RLS, migration naming, CI, definition-of-done come from `starters/saas`/its `CLAUDE.md` and `docs/engineering-backbone.md`. Read the industry from the venture context; hard-code nothing.
- **Drafts only; $0 until proven.** The brief is a plan to execute against human gates — nothing it describes deploys, sends, publishes, or spends without Tony's approval. Honor venture claims guardrails (e.g. EE: no medical claims, never "physician review"/"medical team", never promise a live cohort/team dashboard pre-contract).
- Clinical, precise, premium voice; banned words out (journey, holistic, guru, revolutionary, game-changer, hack). Secrets never in text.

## Composition (what it consumes; degrade gracefully)
| Input | Consumed for | If missing |
|---|---|---|
| `/product-spec` | PRs, AC, data model, test plan | **STOP** — run it; no spec, no brief |
| `/offer-architect` / `/go-no-go` | economics gate, payment-slice pricing | **STOP** — run it (overbuild guard) |
| `docs/engineering-backbone.md` | per-PR security checklist, minimum bar, compliance regime | always present (repo standard) |
| `starters/saas` + `CLAUDE.md` | code baseline, inherited controls, conventions | always present (repo starter) |
| `docs/tool-mcp-stack.md` | tool/MCP per workstream, connect-these list | always present (repo reference) |
| `/brand-design` | token PR, component spec | provisional tokens + a flag |
| `finance-ops` | WS-E finance config-PRs | mark prerequisite — run `finance-ops` |
| `sales-crm` | WS-D CRM config-PRs | mark prerequisite — run `sales-crm` |
| `gtm-marketing` | WS-F tracking/lifecycle wiring | mark prerequisite — run `gtm-marketing` |
| `content-engine` / `content-cadence` / `social-media` | WS-F content system + per-platform social surfaces, calendar, templates | mark prerequisite — run the content/social skills |
| `support-success` | WS-G helpdesk/KB config-PRs | mark prerequisite — run `support-success` |
| `analytics-stack` | WS-C instrumentation config-PRs | mark prerequisite — run `analytics-stack` |
| `legal-pack` | WS-H ToS/privacy/DPA + regime controls | mark prerequisite — run `legal-pack` |
| `org-roles` | WS-I access register + in-app roles | mark prerequisite — run `org-roles` |

## Examples & evals
- `references/method.md` — the annotated canonical PR template, the workstream taxonomy + phase model, the completeness protocol, a worked master brief (Executive Edge at greenfield: workstream map, phase plan, two fully-authored PRs — a foundation product PR and an analytics config-PR — the coverage matrix, and the consolidated lists), and an agnosticism note (Ethos hospitality).
- `evals/evals.md` — 3 cases (full brief with per-PR security + coverage matrix + consolidated gates/secrets; missing product-spec/economics → blocks; a prod-migration + secret-in-brief attempt → escalates the gate and keeps secrets to names).
