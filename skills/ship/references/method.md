# /ship — Full method & worked example

One level deep; does not fan out further. Lenses: the AI-native build conventions (`operating-playbooks.md` §8 — done = shipped + verified, tests travel with the asset, surgical/reversible, secrets in env), economics-first (Scale Mechanics — never build ahead of proven demand), and vertical-slice delivery (ship thin end-to-end capabilities, not horizontal layers). This skill *orchestrates*; the code is written by build agents and checked by the dev subagents, so premium-model time stays on authoring + evaluation.

## 0. Economics + spec gate (blocking)

Before cloning anything, confirm two things exist:
1. **Closed unit economics** — a priced offer whose math closes (`/offer-architect`), or an explicit "unproven, testing cheaply first" verdict (`/go-no-go`).
2. **A finished `/product-spec`** — problem + success metric, user stories, testable acceptance criteria, and either a data model with ownership/RLS + interface surface + test plan (custom) or a configuration spec + manual-QA plan (off-the-shelf).

Missing either → STOP and route to it. Building without a spec is the overbuild failure mode ("the cathedral before the screwdriver") in its most expensive form. No spec, no build.

## 0.5 Build-shape branch

Read the build shape from `/venture-bootstrap`'s buy-vs-build-vs-none decision (or the venture context). **Custom software** → the full pipeline §1–§8 below. **Off-the-shelf/no-code** → skip §1–§7 (clone, slice, build, subagent loop, CI) and follow the *Off-the-shelf configuration path* immediately below, then §8 hand-off. Physical/service ventures usually take the off-the-shelf path for their software footprint; their manufacturing/fulfillment or service-delivery build runs on its own track, not in this skill. **Never clone the SaaS starter for a venture an off-the-shelf platform already serves** — that is the needless-custom-build failure mode this branch exists to prevent.

## Off-the-shelf configuration path (off-the-shelf branch — replaces §1–§7)

No repo, no slices, no CI. The `/product-spec` configuration spec is the build contract; the deliverable is a configured, live platform proven by one real test-mode transaction.

1. **Configure the platform.** Stand up the chosen platform (storefront/Shopify, booking/Cal.com, POS/Square, CRM/Airtable) with the real objects/prices/availability from the config spec — not placeholders. Apply the venture's brand (theme, tokens).
2. **Wire integrations.** Connect the native connectors the spec names (email/CRM/analytics/payments). Only if the spec flagged a real gap, build the single thin edge function that closes it (the hybrid case) — and that slice alone passes through §2–§4's build+review loop.
3. **Manual QA against the acceptance criteria.** Walk each acceptance criterion as a manual-QA step; the capstone is one real **test-mode** order/booking end-to-end on the live platform, confirming the state it grants (subscription created, confirmation sent).
4. **Security = vendor-config.** Least-privilege staff/admin roles, MFA on the owner account, a DPA where customer PII flows through the vendor. There is no RLS/`verify_jwt` surface to check; confirm data export/ownership instead.

Then take the **deploy/publish** gate (§6) and the **payments go-live** gate (§7) in their off-the-shelf form, and hand off (§8).

## 1. Clone + brand the template (custom-software branch)

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

## 6. Deploy / publish — [HUMAN-APPROVED GATE]

Going live creates a public surface + spend. **Custom:** build the production artifact; stage the deploy (host per the repo `CLAUDE.md` — MCP where available, e.g. Vercel/Supabase, else the host CLI). **Off-the-shelf:** stage publishing the configured platform to its live domain. Either way: **request approval with the target URL and the rollback path** (redeploy previous build / tear down the app; or unpublish / revert the platform). On approval, go live and verify the live URL loads and a smoke path works. Until approved, the output reads `ready to deploy — awaiting approval` naming this exact gate.

## 7. Payments: test-mode wire, then a separate go-live gate

- **Test mode (autonomous):** *Custom* — wire Stripe Checkout + the webhook; the webhook self-authorizes (`verify_jwt=false`) and is idempotent on the event id; keys live in env only. *Off-the-shelf* — enable the platform's native checkout in test mode. Either way, smoke-test one real **test-mode** transaction end-to-end on the live surface and confirm the entitlement/state it grants (e.g., `is_member` flips / the subscription is created, the confirmation fires).
- **Go-live [SEPARATE HUMAN-APPROVED GATE]:** accepting real money is a distinct approval from the deploy gate — never flipped autonomously. *Custom:* swap test keys for live keys (which env vars change, which webhook endpoint, the rollback to test mode). *Off-the-shelf:* flip the platform's payment mode from test to live (rollback = back to test mode). Draft the switch and request approval. Note the processor's own account activation/underwriting can lag beyond the build — the product ships in test mode and goes live on money when both the account and this gate clear.

## 8. Hand off

Report the build plan, the live URL (or the pending gate), CI/test status, the gates hit, and the single smallest next step to the first dollar — normally the handoff into `/positioning` → `/landing-funnel` → `/launch-plan`. Because done = live + verified, the handoff names what is provably working in prod, not what was written.

## Worked example (abridged)

### Custom-software branch

**Input:** a finished `/product-spec` for a paid-community SaaS MVP — email/OAuth auth, one core "saved playbooks" object, and a $19/mo subscription that gates it. Economics close at ~3-month CAC payback (from `/offer-architect`).

- **Gate:** economics closed + spec finished → proceed.
- **Build-shape:** the core value *is* the gated app — custom software; off-the-shelf rejected. Proceed with the starter.
- **Clone:** `starters/saas` → `ventures/playbook-club`; brand tokens applied; realtime/AI capabilities stripped (spec doesn't use them).
- **Slices:** (1) foundation — `profile` + auth + RLS; (2) core — `playbook` CRUD, owner-scoped RLS, list/detail UI; (3) payment — Stripe subscription checkout + webhook that flips `profiles.is_member`, plus the gated route. Build plan: 3 slices, each with its acceptance criteria and tests.
- **Build:** foundation single-threaded → green + reviewed; slices 2 and 3 built in parallel by two build agents. Per slice: tester to green (Stripe mocked); code-reviewer clears (one High — a missing owner check on `playbook.update` — fixed); debugger not needed.
- **CI:** lint/type/unit/build green; e2e added for `signup → create playbook → subscribe(test) → gated page unlocks`.
- **Deploy gate:** staged to the host; approval requested with URL + rollback; on approval, live URL verified.
- **Payments:** test-mode checkout smoke-tested (test card → `is_member=true` → gate opens). Go-live gate left **pending** — real charges await approval.
- **Handoff:** live URL + "CI green, test-mode checkout verified, payments go-live pending approval; next step to first dollar → `/positioning`, then `/landing-funnel`."

### Off-the-shelf branch

**Input:** a finished `/product-spec` (configuration spec) for a refillable home-fragrance storefront — Shopify + a subscription app, Klaviyo + GA4 connectors. Economics close on delivered margin. `/venture-bootstrap` decision = off-the-shelf.

- **Gate:** economics closed + config spec finished → proceed.
- **Build-shape:** physical product, storefront footprint fully served off-the-shelf → **no clone, no repo**. Follow the Off-the-shelf configuration path.
- **Configure:** Shopify products (vessel + refill SKUs, prices, variants) + the subscription app's selling-plan, per the spec; brand theme applied. No `starters/saas`, no slices, no CI.
- **Integrations:** Klaviyo (welcome / upcoming-charge / failed-payment flows) + GA4 wired via native connectors; no gap forcing a custom edge function → no code at all.
- **Manual QA:** each acceptance criterion walked by hand; capstone = one real test-mode subscription order end-to-end (subscription created, first order placed, welcome flow fires).
- **Deploy/publish gate:** staged publishing the store to its live domain; approval requested with URL + rollback (unpublish); on approval, live store verified.
- **Payments:** Shopify Payments smoke-tested in **test mode**; go-live gate (flip to live payments) left **pending**.
- **Security:** vendor-config — least-privilege staff accounts, MFA on the owner login, DPA with Shopify/Klaviyo; data export confirmed.
- **Handoff:** live storefront + "test-mode subscription verified, payments go-live pending approval; next step to first dollar → `/positioning`, then `/landing-funnel`." The physical build (sourcing → production → fulfillment) tracks separately.
