---
name: ship
description: >-
  The build-orchestration skill — turns a finished `/product-spec` into a live, verified product taking a
  real (test-mode) transaction. Branches on build shape. Custom software: clones the `starters/saas` template,
  decomposes the spec into vertical feature slices, builds them (parallel build agents) each with tests, runs
  the dev subagents to green + reviewed, gets CI green, then deploys to a live URL and wires Stripe test-mode
  checkout. Off-the-shelf/no-code: configures the chosen platform + integrations per the config spec to live +
  one real test transaction, no clone. Human-approved gates on deploy/go-live either way. Use to build and ship
  an MVP from a spec. Triggers: "ship it", "build and deploy", "turn the spec into a working product", "stand up
  the MVP", "build this", "launch the storefront".
---

# /ship — Build Orchestration

The executable build layer. Takes a validated venture with a finished `/product-spec` and drives it to a live, verified product taking a real (test-mode) transaction. It first reads the build shape from `/venture-bootstrap`'s buy-vs-build-vs-none decision: **custom software** → clone the starter, slice, build, deploy; **off-the-shelf/no-code** → configure the chosen platform + integrations to live, no clone. **Done = live and verified in production**, not "written." Optimizes time-to-first-dollar and reversibility: it builds (or configures) the smallest thing that ships, and gates anything irreversible.

## Load first
1. `founder-profile/PROFILE.md` (+ `founder-profile/operating-playbooks.md` §8 AI-native build — definition-of-done, change policy) and `founder-profile/guardrails.md` (irreversible/production actions, secrets, drafts-only).
2. Active `ventures/<slug>/venture-context.md`.
3. The latest `/product-spec` output for this venture — its slices, acceptance criteria, data model, and test plan are the build contract.
4. **Custom-software branch only:** `starters/saas/` — the SaaS template (stack, conventions, CI, deploy) — and the venture repo's `CLAUDE.md` once it exists. Inherit conventions; never invent a stack. On the off-the-shelf branch there is no starter to clone — the build contract is the `/product-spec` configuration spec + the platform's own conventions.

## Method (full detail + worked example in `references/method.md`)
1. **Economics + spec gate (blocking).** Confirm BOTH closed unit economics (from `/offer-architect` or `/go-no-go`) AND a finished `/product-spec` exist. Missing either → STOP and route to it. This is the overbuild guard made mechanical: no spec, no build.
2. **Build-shape branch.** Read the build shape from `/venture-bootstrap`'s buy-vs-build-vs-none decision (or the venture context). **Custom software** → steps 3–11 below (clone → slice → build → deploy → wire payments). **Off-the-shelf/no-code** → the method's *Off-the-shelf configuration path*: configure the platform + objects/prices per the config spec, wire integrations + native checkout (test mode), manual-QA one real test transaction, then the go-live gate — no clone, no slices; steps 4–7 (the slice/build/subagent/CI loop) don't apply. Physical/service ventures usually take this path for their software footprint. Never clone the SaaS starter for a venture a platform already serves.
3. **Clone the template (custom branch).** Clone `starters/saas` into the venture's repo, rename/brand per the context, strip capabilities the spec doesn't use. If `/venture-bootstrap` already stood the repo up from the starter, build *into* it — don't re-clone (idempotent).
4. **Slice the spec (custom branch).** Decompose into vertical feature slices — each DB → interface → UI → test, independently shippable and testable — ordered by dependency then path-to-first-dollar (foundation/auth → core value → payment). Map every acceptance criterion onto the slice that satisfies it.
5. **Build the slices (custom branch).** Foundation slice first (schema + auth + RLS), single-threaded; then parallelize independent slices via build agents, each with a finished-asset contract and "tests travel with the code." Feature-flag anything experimental.
6. **Run the dev subagents per slice (custom branch).** `tester` writes + runs tests to green (external providers mocked); `code-reviewer` (read-only) reviews the diff for security/correctness/performance; `debugger` root-causes any failure and applies the smallest reversible fix. No slice merges red or with unresolved critical/high findings.
7. **CI green (custom branch).** lint · typecheck · unit · build (+ e2e once a critical path exists) green across all merged slices. Green CI is the precondition for the deploy gate — never request a deploy over red CI.
8. **Deploy to a live URL / publish the platform — [HUMAN-APPROVED GATE].** Custom: deploy to the venture's host (per the repo `CLAUDE.md`; MCP where available, else CLI). Off-the-shelf: publish the configured platform to its live domain. Either way a live surface + spend is never autonomous: stage it, request approval with the target URL + rollback path, then fire and verify the URL loads.
9. **Wire payments in test mode.** Custom: Stripe Checkout + webhook (webhook self-authorizes, `verify_jwt=false`, idempotent on the event id); keys in env only. Off-the-shelf: the platform's native checkout in test mode. Smoke-test one real **test-mode** transaction end-to-end on the live surface and confirm the state/entitlement it grants.
10. **Payments go-live — [SEPARATE HUMAN-APPROVED GATE].** Switching from test to live (accepting real money) is a distinct approval from the deploy gate — swapping Stripe keys (custom) or flipping the platform's payment mode (off-the-shelf). Draft the switch + its rollback; never flip it autonomously.
11. **Hand off.** Report the build plan, the live URL (or the pending gate), CI/test status (custom) or manual-QA status (off-the-shelf), the gates hit, and the single smallest next step to the first dollar — the handoff into `/positioning` → `/landing-funnel` → `/launch-plan`.

## Output contract
- **Build / config plan** — custom: the ordered slice list (slice · acceptance criteria covered · depends-on · status), foundation slice first. Off-the-shelf: the ordered config checklist (platform setup · integrations · acceptance criteria covered · status).
- **Deployed URL** — the live URL, or `ready to deploy — awaiting approval` with the exact gate pending.
- **CI / test status (custom) or manual-QA status (off-the-shelf)** — custom: pass/fail per stage (lint/type/unit/build/e2e), tester coverage, code-reviewer findings resolved. Off-the-shelf: each acceptance criterion's manual-QA result + the one-real-transaction check.
- **Human-gates hit** — deploy/publish · payments go-live · any production/irreversible change — each marked approved / pending.
- **Smallest next step to first dollar** — the single next action (usually the launch/positioning handoff), ≤1 line.

## Rules
- **Buy before build.** Branch on `/venture-bootstrap`'s decision: never clone the SaaS starter or write custom code for a venture an off-the-shelf platform already serves — configure and go live instead. Needless custom build is the #1 failure mode.
- **Gates are never autonomous.** Deploy/publish, payments go-live, production changes, and anything irreversible require explicit human approval and a stated rollback path. Draft → request → fire.
- **Definition of done = live + verified in prod**, not written or merged. A slice not verified against its acceptance criteria — or, off-the-shelf, a config not proven by one real test-mode transaction — isn't done.
- **Surgical + reversible.** Smallest change that ships the slice (or the smallest configuration that goes live); feature-flag experimental work so live flows stay untouched. A prod-schema migration or other irreversible change escalates *with* a rollback path — never applied silently.
- **Secrets in env only.** Stripe/DB/AI/platform keys never in code, logs, or committed files. Ship `.env.example` with placeholders; use test-mode keys for smoke tests.
- **Verification travels with every capability.** Custom: no slice merges without tests mapped to its acceptance criteria. Off-the-shelf: every acceptance criterion has a manual-QA step ending in one real test-mode transaction. Never weaken an assertion or skip the check to force green.
- **Inherit, don't invent.** Custom: stack, auth model, RLS, migration naming come from `starters/saas` / the repo `CLAUDE.md`. Off-the-shelf: inherit the platform's own conventions; security is vendor-config (least-privilege, MFA, DPA), not RLS/`verify_jwt`. Read the industry and build shape from the venture context; hard-code nothing.

## Examples & evals
- `references/method.md` — the build-shape branch, the off-the-shelf configuration path, slice decomposition + the per-slice build+review loop (custom), the deploy/payments gate sequence + worked examples (custom + off-the-shelf).
- `evals/evals.md` — 4 cases (clean MVP spec → gated deploy, spec with no economics → blocks, prod-migration change → escalates with rollback, off-the-shelf spec → configure + go live with no clone).
