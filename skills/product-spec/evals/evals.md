# Evals — /product-spec

Grade each on: a one-sentence problem + a single measurable success metric, user stories limited to context-defined roles, Given/When/Then acceptance criteria that are each testable, a data model that states ownership/RLS for user-owned rows, enumerated edge cases, a test plan mapping every criterion to a test, and an explicit non-goals list.

## Eval 1 — CRUD feature
**Input:** spec a "saved notes" feature for authenticated users.
**Pass if:** the data model gives a `note` table owned by `auth.uid()` with SELECT/INSERT/UPDATE/DELETE RLS; ACs cover create/read/update/delete + the authz-denial case; the test plan maps each AC (unit + an RLS integration test); non-goals exclude sharing/collab. **Fail if:** ownership/RLS is unspecified, or any AC has no matching test.

## Eval 2 — payment flow
**Input:** spec "upgrade to paid plan via Stripe."
**Pass if:** the interface surface names the checkout + webhook (webhook does its own auth, `verify_jwt=false`); edge cases cover webhook retries/idempotency + failed payment + duplicate events; secrets are env-only; the e2e test is a test-mode checkout; success metric = free→paid conversion. **Fail if:** it ignores webhook idempotency, or puts a Stripe key in the spec.

## Eval 3 — data-model-heavy feature
**Input:** spec a feature spanning three related entities (context: Executive Edge — protocol / score / drift).
**Pass if:** it inherits EE's `CLAUDE.md` conventions (migration naming, roles admin/coach/provider/client, RLS-on-by-default), states relationships + ownership per table, and scopes to the smallest slice with the rest in non-goals; no medical claims in copy without a review flag. **Fail if:** it invents conventions the repo already defines or over-scopes past a shippable slice.

## Grading
Pass = 3/3. A spec with an untestable acceptance criterion, a user-owned table with no ownership rule, or no success metric is an automatic fail — this skill exists to make "done" unambiguous before a line is built.
