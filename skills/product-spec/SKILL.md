---
name: product-spec
description: >-
  Author an implementation-ready product/feature spec a dev or Claude Code can build from with no
  further questions — problem + success metric, user stories, testable acceptance criteria, then either a
  data model with ownership/RLS + interface surface (custom software) or a configuration spec — platform,
  objects/settings, automations, integrations, manual-QA acceptance (off-the-shelf/no-code) — plus edge
  cases and a test plan mapped 1:1 to the criteria. Reads the build shape from context; scopes to the
  smallest shippable slice (overbuild guard). Use when specifying a feature or product before build.
  Triggers: "write a spec", "spec out this feature", "product spec", "PRD", "requirements for", "what
  should we build for", "spec the storefront/config".
---

# /product-spec — Implementation-Ready Spec

The build-brief skill. Produces a spec concrete enough that a dev (or Claude Code) ships it without a follow-up meeting, and testable enough that "done" is unambiguous. Scopes ruthlessly to the smallest slice that delivers the outcome; everything else goes to non-goals.

## Load first
1. `founder-profile/PROFILE.md` (+ `founder-profile/operating-playbooks.md` §8 AI-native build; the JTBD lens).
2. Active `ventures/<slug>/venture-context.md`.
3. The target repo's `CLAUDE.md` if it exists — inherit its auth model, DB/migration conventions, and stack. Never invent conventions the repo already has.

## Method (full detail + worked example in `references/method.md`)
0. **Build-shape branch (read first).** From the venture context / the `/venture-bootstrap` buy-vs-build-vs-none decision: is this a **custom-software** build or an **off-the-shelf/no-code** assembly? Steps 1–3 and 6–8 apply to both. Steps 4–5 branch: custom → data model + interface surface; off-the-shelf → a configuration spec (§4–5 in the method). Don't force an RLS/data-model spec onto an assembly of bought tools.
1. **Problem + success metric.** One sentence each: the job the user is hiring this to do, and the single number that proves it worked. No metric → stop and get one.
2. **User stories.** `As <role>, I want <capability>, so that <outcome>.` Only the roles the venture context defines.
3. **Acceptance criteria.** Given/When/Then, each independently testable.
4. **Data model (custom) / Configuration schema (off-the-shelf).** Custom: entities, fields + types, relationships, and the ownership/RLS rule for every user-owned row, in the repo's migration conventions. Off-the-shelf: the platform's objects/collections, the fields/settings you'll configure, and how data is owned/exported.
5. **Interface surface (custom) / Platform settings + automations (off-the-shelf).** Custom: endpoints/functions/components — inputs, outputs, auth, error shapes. Off-the-shelf: the flows/automations, the native integrations, and the admin/permission settings you'll set.
6. **Edge cases & failure modes.** Empty/invalid input, authz denial, concurrency, external-service failure, rate limits (custom); bad/duplicate orders, failed payment/webhook, integration outage, refund/cancel (off-the-shelf).
7. **Test plan.** Map each acceptance criterion to a unit/integration/e2e test (custom); or to a manual-QA step ending in one real (test-mode) transaction on the platform (off-the-shelf). The verification travels with the asset.
8. **Non-goals + rollout.** What's explicitly out of scope; flags/rollback (custom) or the config-change/undo path (off-the-shelf); definition of done.

## Output contract
A spec with these concrete sections: **Build shape (custom / off-the-shelf) · Problem & success metric · User stories · Acceptance criteria (Given/When/Then) · Data model (with ownership/RLS) OR Configuration schema · Interface surface OR Platform settings + automations · Edge cases & failure modes · Test plan (AC → test, or AC → manual-QA / one real test-mode transaction) · Non-goals · Rollout & definition of done.** Every acceptance criterion has a matching verification; every user-owned entity states its ownership rule (custom) or its ownership/export path (off-the-shelf).

## Rules
- Read the build shape first; don't force a data-model/RLS/interface spec onto an off-the-shelf assembly — spec the configuration + manual-QA acceptance instead. Default to buying/assembling; custom is specced only when `/venture-bootstrap` chose that branch.
- Smallest shippable slice that delivers the outcome; push the rest to non-goals (overbuild guard).
- Every acceptance criterion is verifiable; every criterion maps to a test (custom) or a manual-QA step (off-the-shelf). No untestable "shoulds."
- Inherit the target repo's conventions (auth, RLS, migration naming) from its `CLAUDE.md`; default to the venture's stack, don't assume one. For off-the-shelf, inherit the platform's own conventions.
- Security by default, matched to the surface: **custom** → state ownership/RLS for user-owned data, `verify_jwt` per function, validate all external input; **off-the-shelf** → vendor-config (least-privilege admin, MFA, a DPA where PII flows through the vendor). Secrets in env only in both.
- No medical/legal claims in user-facing copy without a review flag. Drafts only — the spec is built after review.

## Examples & evals
- `references/method.md` — the section-by-section template, the off-the-shelf configuration-spec variant, a Given/When/Then + data-model example, the AC→test mapping + worked examples (custom + off-the-shelf).
- `evals/evals.md` — 4 cases (CRUD feature, payment flow, data-model-heavy feature, off-the-shelf configuration spec).
