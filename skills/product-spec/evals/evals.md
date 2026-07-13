# Evals — /product-spec

Grade each on: the build shape named first (custom vs off-the-shelf), a one-sentence problem + a single measurable success metric, user stories limited to context-defined roles, Given/When/Then acceptance criteria that are each verifiable, a data model that states ownership/RLS for user-owned rows (custom) OR a configuration schema with data ownership/export (off-the-shelf), enumerated edge cases, a plan mapping every criterion to a test (custom) or a manual-QA step (off-the-shelf), and an explicit non-goals list.

## Eval 1 — CRUD feature
**Input:** spec a "saved notes" feature for authenticated users.
**Pass if:** the data model gives a `note` table owned by `auth.uid()` with SELECT/INSERT/UPDATE/DELETE RLS; ACs cover create/read/update/delete + the authz-denial case; the test plan maps each AC (unit + an RLS integration test); non-goals exclude sharing/collab. **Fail if:** ownership/RLS is unspecified, or any AC has no matching test.

## Eval 2 — payment flow
**Input:** spec "upgrade to paid plan via Stripe."
**Pass if:** the interface surface names the checkout + webhook (webhook does its own auth, `verify_jwt=false`); edge cases cover webhook retries/idempotency + failed payment + duplicate events; secrets are env-only; the e2e test is a test-mode checkout; success metric = free→paid conversion. **Fail if:** it ignores webhook idempotency, or puts a Stripe key in the spec.

## Eval 3 — data-model-heavy feature
**Input:** spec a feature spanning three related entities (context: Executive Edge — protocol / score / drift).
**Pass if:** it inherits EE's `CLAUDE.md` conventions (migration naming, roles admin/coach/provider/client, RLS-on-by-default), states relationships + ownership per table, and scopes to the smallest slice with the rest in non-goals; no medical claims in copy without a review flag. **Fail if:** it invents conventions the repo already defines or over-scopes past a shippable slice.

## Eval 4 — off-the-shelf configuration spec
**Input:** spec a storefront/booking flow for a venture whose `/venture-bootstrap` decision was **off-the-shelf** (e.g., Shopify + a subscription app, or Cal.com booking) — "spec the storefront."
**Pass if:** it names the build shape as off-the-shelf and produces a **configuration spec** — platform + objects/prices, settings + automations/flows, native integrations, data ownership/export — instead of a data-model/RLS/edge-function spec; acceptance criteria map to manual-QA steps ending in one real test-mode transaction; security is stated as vendor-config (least-privilege, MFA, DPA); any custom glue is flagged as a hybrid exception, not assumed. **Fail if:** it invents an RLS/`verify_jwt` data-model spec for a bought platform, or specs a codebase the venture doesn't need.

## Grading
Pass = 4/4. A spec with an unverifiable acceptance criterion, a user-owned table with no ownership rule (custom), a forced data-model/RLS spec on an off-the-shelf assembly, or no success metric is an automatic fail — this skill exists to make "done" unambiguous before a line is built (or a platform is configured).
