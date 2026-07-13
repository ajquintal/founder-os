---
name: ship
description: >-
  The build-orchestration skill — turns a finished `/product-spec` into deployed, tested, payment-ready
  software. Clones the `starters/saas` template, decomposes the spec into vertical feature slices, builds
  them (parallel build agents) each with tests, runs the dev subagents to green + reviewed, gets CI green,
  then deploys to a live URL and wires Stripe test-mode checkout — with human-approved gates on deploy and
  payments go-live. Use to build and ship an MVP from a spec. Triggers: "ship it", "build and deploy",
  "turn the spec into a working product", "stand up the MVP", "build this".
---

# /ship — Build Orchestration

The executable build layer. Takes a validated venture with a finished `/product-spec` and drives it to deployed, verified software taking a real (test-mode) transaction. **Done = live and verified in production**, not "written." Optimizes time-to-first-dollar and reversibility: it builds the smallest slice that ships, and gates anything irreversible.

## Load first
1. `founder-profile/PROFILE.md` (+ `founder-profile/operating-playbooks.md` §8 AI-native build — definition-of-done, change policy) and `founder-profile/guardrails.md` (irreversible/production actions, secrets, drafts-only).
2. Active `ventures/<slug>/venture-context.md`.
3. The latest `/product-spec` output for this venture — its slices, acceptance criteria, data model, and test plan are the build contract.
4. `starters/saas/` — the SaaS template (stack, conventions, CI, deploy) — and the venture repo's `CLAUDE.md` once it exists. Inherit conventions; never invent a stack.

## Method (full detail + worked example in `references/method.md`)
1. **Economics + spec gate (blocking).** Confirm BOTH closed unit economics (from `/offer-architect` or `/go-no-go`) AND a finished `/product-spec` exist. Missing either → STOP and route to it. This is the overbuild guard made mechanical: no spec, no build.
2. **Clone the template.** Clone `starters/saas` into the venture's repo, rename/brand per the context, strip capabilities the spec doesn't use. If `/venture-bootstrap` already stood the repo up from the starter, build *into* it — don't re-clone (idempotent).
3. **Slice the spec.** Decompose into vertical feature slices — each DB → interface → UI → test, independently shippable and testable — ordered by dependency then path-to-first-dollar (foundation/auth → core value → payment). Map every acceptance criterion onto the slice that satisfies it.
4. **Build the slices.** Foundation slice first (schema + auth + RLS), single-threaded; then parallelize independent slices via build agents, each with a finished-asset contract and "tests travel with the code." Feature-flag anything experimental.
5. **Run the dev subagents per slice.** `tester` writes + runs tests to green (external providers mocked); `code-reviewer` (read-only) reviews the diff for security/correctness/performance; `debugger` root-causes any failure and applies the smallest reversible fix. No slice merges red or with unresolved critical/high findings.
6. **CI green.** lint · typecheck · unit · build (+ e2e once a critical path exists) green across all merged slices. Green CI is the precondition for the deploy gate — never request a deploy over red CI.
7. **Deploy to a live URL — [HUMAN-APPROVED GATE].** Deploy to the venture's host (per the repo `CLAUDE.md`; MCP where available, else CLI). A live app + spend + a public surface is never autonomous: stage it, request approval with the target URL + rollback path, then fire and verify the URL loads.
8. **Wire Stripe in test mode.** Checkout + webhook (webhook self-authorizes, `verify_jwt=false`, idempotent on the event id); keys in env only. Smoke-test one real **test-mode** transaction end-to-end on the live URL and confirm the entitlement it grants.
9. **Payments go-live — [SEPARATE HUMAN-APPROVED GATE].** Swapping test keys for live keys (accepting real money) is a distinct approval from the deploy gate. Draft the switch + its rollback; never flip it autonomously.
10. **Hand off.** Report the build plan, the live URL (or the pending gate), CI/test status, the gates hit, and the single smallest next step to the first dollar — the handoff into `/positioning` → `/landing-funnel` → `/launch-plan`.

## Output contract
- **Build plan** — the ordered slice list (slice · acceptance criteria covered · depends-on · status), foundation slice first.
- **Deployed URL** — the live URL, or `ready to deploy — awaiting approval` with the exact gate pending.
- **CI / test status** — pass/fail per stage (lint/type/unit/build/e2e), tester coverage of the change, code-reviewer findings resolved.
- **Human-gates hit** — deploy · payments go-live · any production migration — each marked approved / pending.
- **Smallest next step to first dollar** — the single next action (usually the launch/positioning handoff), ≤1 line.

## Rules
- **Gates are never autonomous.** Deploy, payments go-live, production changes, and anything irreversible require explicit human approval and a stated rollback path. Draft → request → fire.
- **Definition of done = live + verified in prod**, not written or merged. A slice not verified against its acceptance criteria isn't done.
- **Surgical + reversible.** Smallest change that ships the slice; feature-flag experimental work so live flows stay untouched. A prod-schema migration or other irreversible change escalates *with* a rollback path — never applied silently.
- **Secrets in env only.** Stripe/DB/AI keys never in code, logs, or committed files. Ship `.env.example` with placeholders; use test-mode keys for smoke tests.
- **Tests travel with every slice.** No capability merges without tests mapped to its acceptance criteria; never weaken an assertion to force green.
- **Inherit, don't invent.** Stack, auth model, RLS, migration naming come from `starters/saas` / the repo `CLAUDE.md`. Read the industry from the venture context; hard-code nothing.

## Examples & evals
- `references/method.md` — slice decomposition, the per-slice build+review loop, the deploy/payments gate sequence + worked example.
- `evals/evals.md` — 3 cases (clean MVP spec → gated deploy, spec with no economics → blocks, prod-migration change → escalates with rollback).
