---
name: product-spec
description: >-
  Author an implementation-ready product/feature spec a dev or Claude Code can build from with no
  further questions — problem + success metric, user stories, testable acceptance criteria, a data model
  with ownership/RLS, the interface surface, edge cases, and a test plan mapped 1:1 to the criteria.
  Scopes to the smallest shippable slice (overbuild guard). Use when specifying a feature or product
  before build. Triggers: "write a spec", "spec out this feature", "product spec", "PRD", "requirements
  for", "what should we build for".
---

# /product-spec — Implementation-Ready Spec

The build-brief skill. Produces a spec concrete enough that a dev (or Claude Code) ships it without a follow-up meeting, and testable enough that "done" is unambiguous. Scopes ruthlessly to the smallest slice that delivers the outcome; everything else goes to non-goals.

## Load first
1. `founder-profile/PROFILE.md` (+ `founder-profile/operating-playbooks.md` §8 AI-native build; the JTBD lens).
2. Active `ventures/<slug>/venture-context.md`.
3. The target repo's `CLAUDE.md` if it exists — inherit its auth model, DB/migration conventions, and stack. Never invent conventions the repo already has.

## Method (full detail + worked example in `references/method.md`)
1. **Problem + success metric.** One sentence each: the job the user is hiring this to do, and the single number that proves it worked. No metric → stop and get one.
2. **User stories.** `As <role>, I want <capability>, so that <outcome>.` Only the roles the venture context defines.
3. **Acceptance criteria.** Given/When/Then, each independently testable.
4. **Data model.** Entities, fields + types, relationships, and the ownership/RLS rule for every user-owned row. Use the repo's migration conventions.
5. **Interface surface.** Endpoints/functions/components: inputs, outputs, auth, error shapes.
6. **Edge cases & failure modes.** Empty/invalid input, authz denial, concurrency, external-service failure, rate limits.
7. **Test plan.** Map each acceptance criterion to a unit/integration/e2e test. Tests travel with the asset.
8. **Non-goals + rollout.** What's explicitly out of scope; flags/rollback; definition of done.

## Output contract
A spec with these concrete sections: **Problem & success metric · User stories · Acceptance criteria (Given/When/Then) · Data model (with ownership/RLS) · Interface surface · Edge cases & failure modes · Test plan (AC → test) · Non-goals · Rollout & definition of done.** Every acceptance criterion has a matching test; every user-owned entity states its ownership rule.

## Rules
- Smallest shippable slice that delivers the outcome; push the rest to non-goals (overbuild guard).
- Every acceptance criterion is testable; every test maps to a criterion. No untestable "shoulds."
- Inherit the target repo's conventions (auth, RLS, migration naming) from its `CLAUDE.md`; default to the venture's stack, don't assume one.
- Security by default: state ownership/RLS for user-owned data; secrets in env only; validate all external input.
- No medical/legal claims in user-facing copy without a review flag. Drafts only — the spec is built after review.

## Examples & evals
- `references/method.md` — the section-by-section template, a Given/When/Then + data-model example, the AC→test mapping + worked example.
- `evals/evals.md` — 3 cases (CRUD feature, payment flow, data-model-heavy feature).
