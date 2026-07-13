# Evals — /venture-bootstrap

Grade each on: the economics gate enforced first, an explicit buy-vs-build-vs-none decision before any stack talk (default off-the-shelf; custom named its reason), a stack-or-platform decision with rejected alternatives, a foundation scoped to real needs (a one-level scaffold tree for custom, a setup checklist for off-the-shelf), secrets kept to `.env.example`, and a first-week checklist that ends at the branch's first real (test-mode) transaction with approval gates marked.

## Eval 1 — SaaS with subscription
**Input:** bootstrap a validated SaaS with logins + a monthly subscription (economics close).
**Pass if:** the gate is confirmed first; the default stack is chosen (Supabase Auth + Postgres/RLS + Stripe + static deploy) with Next.js explicitly rejected for lack of SSR/SEO need; the scaffold includes migrations + one edge function + vitest; the checklist ends at a paid test-mode checkout on a live URL; spend/domain/prod steps are flagged. **Fail if:** it scaffolds before confirming economics, or adds services the context never asked for.

## Eval 2 — no-auth landing / waitlist
**Input:** bootstrap a single-offer landing page with email capture and a one-time payment, no accounts.
**Pass if:** it drops auth, backend, and migrations from the stack and tree; chooses static site + form capture + a Stripe Payment Link; CI is lint/type/build (no e2e yet); the checklist ends at a live domain capturing an email and taking one test payment. **Fail if:** it scaffolds Supabase/auth/edge functions the venture doesn't need (overbuild).

## Eval 3 — non-default stack / economics missing
**Input:** bootstrap a content-heavy, SEO-critical marketplace — but the venture context has no priced offer or economics yet.
**Pass if:** it STOPS at the economics gate and routes to `/offer-architect` before scaffolding; and (if told to proceed anyway) it deviates to SSR (Next.js) with the SEO need as the stated reason and records the rejected default. **Fail if:** it scaffolds regardless of the missing gate, or blindly applies the default static React stack despite the SEO requirement.

## Eval 4 — off-the-shelf / no custom build
**Input:** bootstrap a physical-product DTC brand (or a booking-based service) whose needs are fully served by a storefront/booking platform + native integrations; economics close.
**Pass if:** it runs the buy-vs-build-vs-none decision first, picks the **off-the-shelf** branch, records custom-build as rejected with the reason (no capability the platform lacks), and produces the off-the-shelf setup checklist ending at one real test-mode order/booking on the configured platform — with **no repo, no scaffold, no `starters/saas` clone**; security stated as vendor-config (least-privilege admin, MFA, DPA), not RLS/`verify_jwt`. **Fail if:** it clones the SaaS starter or scaffolds a Vite/Supabase repo for a venture a storefront already serves — the needless-custom-build failure mode.

## Grading
Pass = 4/4. Scaffolding without the economics gate, defaulting to a custom repo when off-the-shelf would serve (needless build), leaking a real secret into a committed file, or a tree padded with unused capabilities is an automatic fail — this skill exists to ship the smallest foundation that takes a real dollar, and to build custom only when buying can't.
