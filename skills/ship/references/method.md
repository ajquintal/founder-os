# /ship — Full method & worked example

One level deep; does not fan out further. Lenses: the AI-native build conventions (`operating-playbooks.md` §8 — done = shipped + verified, tests travel with the asset, surgical/reversible, secrets in env), economics-first (Scale Mechanics — never build ahead of proven demand), and vertical-slice delivery (ship thin end-to-end capabilities, not horizontal layers). This skill *orchestrates*; the code is written by build agents and checked by the dev subagents, so premium-model time stays on authoring + evaluation.

## 0. Economics + spec gate (blocking)

Before cloning anything, confirm two things exist:
1. **Closed unit economics** — a priced offer whose math closes (`/offer-architect`), or an explicit "unproven, testing cheaply first" verdict (`/go-no-go`).
2. **A finished `/product-spec`** — problem + success metric, user stories, testable acceptance criteria, a data model with ownership/RLS, the interface surface, and a test plan.

Missing either → STOP and route to it. Building without a spec is the overbuild failure mode ("the cathedral before the screwdriver") in its most expensive form. No spec, no build.

## 1. Clone + brand the template

Clone `starters/saas` into the venture's repo. Rename package/app identifiers, apply the venture's brand tokens from the context, and strip capabilities the spec doesn't use (no `functions/` for a static MVP; no realtime/AI seam if unused — the overbuild guard applied to the starter). Inherit the starter's `CLAUDE.md` (stack, auth model, RLS, migration naming, CI, deploy path). If `/venture-bootstrap` already stood the repo up from the starter, skip the clone and build into the existing repo — this step is idempotent.

## 2. Slice the spec (vertical slices)

A slice is a thin capability that runs **all the way through** the stack — migration + RLS → interface/endpoint → UI → test — and delivers one observable, testable outcome. Not "build all the DB, then all the API": that defers the first working path and hides integration risk.

- Map every acceptance criterion from the spec onto the slice that satisfies it.
- Order slices by (a) dependency, then (b) path-to-first-dollar: **foundation (schema + auth + RLS) → core value slice → payment slice.**
- Keep each slice small enough to build, test, review, and merge independently. If a slice can't be tested on its own, it's too wide — split it.

Produce the **build plan**: an ordered table of `slice · acceptance criteria covered · depends-on · status`.

## 3. Build the slices

- **Foundation first**, single-threaded: the schema, auth, and RLS every other slice depends on. Green and reviewed before fanning out.
- **Then parallelize** independent slices via build agents. Each agent gets a finished-asset contract: the slice's acceptance criteria, the repo conventions, and "tests travel with the code." (Model policy: cheaper models / Cowork build the slices; the premium model authored this method and evaluates the result.)
- Feature-flag experimental or partial work so an incomplete slice never touches a live flow.

## 4. The per-slice quality loop (dev subagents)

Every slice passes through, in order:
1. **`tester`** — writes/extends tests over the slice's acceptance criteria (happy path, edge cases, authz/RLS, failure modes) and runs them to green. External providers (Stripe, email, AI) are mocked — no live/paid calls. If a test surfaces a real bug, it stops and reports rather than weakening the assertion.
2. **`code-reviewer`** — read-only review of the diff for correctness, security (authz/RLS gaps, injection, secrets in code, `verify_jwt=false` without an internal auth check), and performance (N+1, unbounded reads). Findings ranked by severity; the build agent fixes; the reviewer never edits.
3. **`debugger`** — on any failure or red test: reproduce → isolate → root-cause → smallest reversible fix → verify with a test that fails-before / passes-after. Escalates (does not self-apply) any production, irreversible, or data-migrating fix.

No slice merges red or with unresolved critical/high findings.

## 5. CI green

`lint · typecheck · unit · build` green across all merged slices; add the `e2e` job once a real user path (signup → core action, or checkout) exists to protect. Green CI is the **precondition** for the deploy gate — you do not request a deploy over red CI.

## 6. Deploy — [HUMAN-APPROVED GATE]

Deploying creates a live app, spend, and a public surface. Sequence: build the production artifact; stage the deploy (host per the repo `CLAUDE.md` — MCP where available, e.g. Vercel/Supabase, else the host CLI); then **request approval with the target URL and the rollback path** (redeploy previous build / tear down the app). On approval, deploy and verify the live URL loads and a smoke path works. Until approved, the output reads `ready to deploy — awaiting approval` naming this exact gate.

## 7. Payments: test-mode wire, then a separate go-live gate

- **Test mode (autonomous):** wire Checkout + the webhook. The webhook self-authorizes (`verify_jwt=false`) and is idempotent on the Stripe event id; keys live in env only. Smoke-test one real **test-mode** transaction end-to-end on the live URL and confirm the entitlement/state it grants (e.g., `is_member` flips, the gate opens).
- **Go-live [SEPARATE HUMAN-APPROVED GATE]:** swapping test keys for live keys = accepting real money, and it is a distinct approval from the deploy gate — never flipped autonomously. Draft the switch (which env vars change, which webhook endpoint, the rollback to test mode) and request approval. Note that Stripe's own account activation/underwriting can lag beyond the build — the product ships in test mode and goes live on money when both the account and this gate clear.

## 8. Hand off

Report the build plan, the live URL (or the pending gate), CI/test status, the gates hit, and the single smallest next step to the first dollar — normally the handoff into `/positioning` → `/landing-funnel` → `/launch-plan`. Because done = live + verified, the handoff names what is provably working in prod, not what was written.

## Worked example (abridged)

**Input:** a finished `/product-spec` for a paid-community SaaS MVP — email/OAuth auth, one core "saved playbooks" object, and a $19/mo subscription that gates it. Economics close at ~3-month CAC payback (from `/offer-architect`).

- **Gate:** economics closed + spec finished → proceed.
- **Clone:** `starters/saas` → `ventures/playbook-club`; brand tokens applied; realtime/AI capabilities stripped (spec doesn't use them).
- **Slices:** (1) foundation — `profile` + auth + RLS; (2) core — `playbook` CRUD, owner-scoped RLS, list/detail UI; (3) payment — Stripe subscription checkout + webhook that flips `profiles.is_member`, plus the gated route. Build plan: 3 slices, each with its acceptance criteria and tests.
- **Build:** foundation single-threaded → green + reviewed; slices 2 and 3 built in parallel by two build agents. Per slice: tester to green (Stripe mocked); code-reviewer clears (one High — a missing owner check on `playbook.update` — fixed); debugger not needed.
- **CI:** lint/type/unit/build green; e2e added for `signup → create playbook → subscribe(test) → gated page unlocks`.
- **Deploy gate:** staged to the host; approval requested with URL + rollback; on approval, live URL verified.
- **Payments:** test-mode checkout smoke-tested (test card → `is_member=true` → gate opens). Go-live gate left **pending** — real charges await approval.
- **Handoff:** live URL + "CI green, test-mode checkout verified, payments go-live pending approval; next step to first dollar → `/positioning`, then `/landing-funnel`."
