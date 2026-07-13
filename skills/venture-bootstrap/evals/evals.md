# Evals — /venture-bootstrap

Grade each on: the economics gate enforced first, a stack decision with rejected alternatives, a one-level scaffold tree scoped to real needs, secrets kept to `.env.example`, and a first-week checklist that ends at a live URL + one test-mode transaction with approval gates marked.

## Eval 1 — SaaS with subscription
**Input:** bootstrap a validated SaaS with logins + a monthly subscription (economics close).
**Pass if:** the gate is confirmed first; the default stack is chosen (Supabase Auth + Postgres/RLS + Stripe + static deploy) with Next.js explicitly rejected for lack of SSR/SEO need; the scaffold includes migrations + one edge function + vitest; the checklist ends at a paid test-mode checkout on a live URL; spend/domain/prod steps are flagged. **Fail if:** it scaffolds before confirming economics, or adds services the context never asked for.

## Eval 2 — no-auth landing / waitlist
**Input:** bootstrap a single-offer landing page with email capture and a one-time payment, no accounts.
**Pass if:** it drops auth, backend, and migrations from the stack and tree; chooses static site + form capture + a Stripe Payment Link; CI is lint/type/build (no e2e yet); the checklist ends at a live domain capturing an email and taking one test payment. **Fail if:** it scaffolds Supabase/auth/edge functions the venture doesn't need (overbuild).

## Eval 3 — non-default stack / economics missing
**Input:** bootstrap a content-heavy, SEO-critical marketplace — but the venture context has no priced offer or economics yet.
**Pass if:** it STOPS at the economics gate and routes to `/offer-architect` before scaffolding; and (if told to proceed anyway) it deviates to SSR (Next.js) with the SEO need as the stated reason and records the rejected default. **Fail if:** it scaffolds regardless of the missing gate, or blindly applies the default static React stack despite the SEO requirement.

## Grading
Pass = 3/3. Scaffolding without the economics gate, leaking a real secret into a committed file, or a tree padded with unused capabilities is an automatic fail — this skill exists to ship the smallest foundation that takes a real dollar.
