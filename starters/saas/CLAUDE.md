# CLAUDE.md — Operating contract for this repository

This file is the agent (and human) operating contract. It encodes the engineering
conventions that make this repo production-grade. Read it before making changes.
When a rule here conflicts with a quick shortcut, the rule wins.

---

## 1. Definition of done

Work is **not** done when the code is written. It is done when it is:

**shipped + merged + verified in production** — not "written", not "should work".

Concretely, a change is done when:

1. It is merged to `main`.
2. CI is green (lint, typecheck, unit, build, e2e).
3. It has been verified in the deployed environment (prod or a preview deploy),
   with the actual behavior observed — not assumed.

If you cannot verify it in a running environment, say so explicitly and mark it
as unverified. Never report an unverified change as done.

## 2. Commits — Conventional Commits

Format: `type(scope): summary`

- Types: `feat`, `fix`, `chore`, `refactor`, `docs`, `test`, `perf`, `build`, `ci`.
- Imperative mood, lower-case summary, no trailing period.
- Examples:
  - `feat(notes): add archive action`
  - `fix(stripe-webhook): dedupe on event id`
  - `chore(deps): bump vite to 5.4`

## 3. Pull requests — required body format

Every PR body follows this structure:

```
## Problem
What was wrong or missing, and why it matters.

## Root cause
Why it happened (for fixes) / why this approach (for features).

## Fix
What changed. Call out anything non-obvious.

## Verification
How you proved it works: commands run, environment tested, what you observed.
```

Small, focused PRs. One logical change per PR.

## 4. Secrets — env only, never in code or commits

- Secrets live in **environment variables only**. Never in source, never in a commit,
  never in a log.
- `VITE_*` variables are **public** (bundled into the browser). Never put a secret
  behind a `VITE_` prefix. The Supabase **anon** key is safe to ship; the
  **service role** key is not and must never reach client code.
- Server secrets (`STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, service role key)
  are set via `supabase secrets set ...` and the host's env, not in the repo.
- `.env.example` documents every variable with **placeholder** values. Real values
  go in `.env.local` (git-ignored).
- **Secret-guard:** `scripts/check-secrets.sh` scans staged diffs for live-key
  patterns and blocks the commit. Install it as a pre-commit hook:
  `ln -sf ../../scripts/check-secrets.sh .git/hooks/pre-commit`. It also runs via
  `npm run secrets:check`.

## 5. Database & migrations

- **RLS is on by default.** Every user-owned table MUST `enable row level security`
  and define the policies for the operations clients actually perform.
  - A table the client does full CRUD on (e.g. `notes`) gets **SELECT + INSERT +
    UPDATE + DELETE** policies, all keyed on `auth.uid() = user_id`.
  - INSERT uses `with check`; UPDATE uses both `using` and `with check`.
  - A **system-managed** table (e.g. `orders`, written only by a webhook via the
    service role) gets a SELECT policy for owners and **deliberately omits** client
    write policies. Document the omission in the migration — do not add a write
    policy "for completeness". The service role bypasses RLS to write.
- **Migration filenames:** `<timestamp>_<slug>.sql`, e.g.
  `20260101000000_create_notes.sql`. Timestamps keep ordering deterministic.
- Migrations are **append-only and forward-only**. To change schema, add a new
  migration; never edit an applied one.
- After any schema change, regenerate types: `npm run db:types` (writes
  `src/types/database.types.ts`). Treat that file as generated.

## 6. Edge functions — auth

- **Default is `verify_jwt = true`.** A function requires a valid Supabase user JWT
  unless it has a specific reason not to.
- **Exceptions that may set `verify_jwt = false`** — each MUST self-authenticate by
  another mechanism:
  - **Webhooks** (e.g. `stripe-webhook`) → verify the provider signature.
  - **Auth hooks** → verify the hook secret.
  - **Public OAuth callbacks** → validate `state` / the provider exchange.
  - **Cron / scheduled jobs** → verify a shared secret or run under a trusted role.
- Set the flag explicitly per function in `supabase/config.toml` and comment why.
- **Idempotency:** any function processing external events (webhooks) must be safe
  to call twice. Key on the provider's event id and short-circuit on repeats
  (see `stripe-webhook` + the `orders.stripe_event_id` unique constraint).

## 7. Admin & authorization

- **Never trust the client** for authorization. A client-sent `isAdmin` flag is not
  authorization; it is a suggestion.
- Route guards (`ProtectedRoute`) are UX only, not a security boundary.
- Admin/privileged endpoints check role **server-side** against a trusted source.
  Pattern (a `profiles.role` column is the usual source of truth):

  ```ts
  // In an edge function, after resolving the user from their JWT:
  const { data: profile } = await admin
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .single()
  if (profile?.role !== 'admin') return json({ error: 'Forbidden' }, 403)
  ```

  ```sql
  -- Or enforce it in RLS:
  create policy "admin_manage" on public.some_table for all
    using (exists (
      select 1 from public.profiles p
      where p.id = auth.uid() and p.role = 'admin'
    ));
  ```

  > STUB: this starter ships no `profiles` table or admin endpoint — add one when
  > your product needs roles. The pattern above is the convention to follow.

## 8. Testing

- **Unit (Vitest, `src/test/`)**: fast and hermetic. Extract logic into pure
  functions (see `src/lib/notes.ts`) and test those. No network in unit tests.
- **E2E (Playwright, `e2e/`)**: smoke tests must run with no backend/secrets.
  Flows that need real data are gated on env (e.g. `E2E_EMAIL`/`E2E_PASSWORD`) and
  skip cleanly when unset.
- CI must be green before merge. Treat lint/type errors as blocking.

## 9. Stack & commands

| Concern    | Choice                                             |
| ---------- | -------------------------------------------------- |
| Frontend   | Vite + React 18 + TypeScript + Tailwind + shadcn/ui |
| Backend    | Supabase (Postgres + Auth + Edge Functions + Storage) |
| Payments   | Stripe (Checkout + signature-verified webhook)     |
| Tests      | Vitest (unit) + Playwright (e2e)                   |
| CI         | GitHub Actions                                     |
| Hosting    | Static `dist/` (Vercel or DigitalOcean App Platform) |

```
npm run dev         # local dev server (http://localhost:5173)
npm run build       # typecheck + production build to dist/
npm run typecheck   # tsc --noEmit
npm run lint        # eslint
npm run test        # vitest unit tests
npm run test:e2e    # playwright e2e (builds + previews)
npm run db:types    # regenerate Supabase types (local stack)
npm run secrets:check
```

## 10. Path & layout conventions

- Import from `@/…` (alias to `src/`); avoid deep `../../..` paths.
- `src/lib/` = pure/shared logic; `src/hooks/` = React data/state; `src/pages/` =
  routed screens; `src/components/ui/` = shadcn primitives.
- Edge functions never import from `src/` (different runtime — Deno). Shared
  server helpers live in `supabase/functions/_shared/`.

## 11. Don'ts

- Don't put secrets in `VITE_*`, source, or commits.
- Don't disable RLS to "make it work"; fix the policy.
- Don't edit an applied migration; add a new one.
- Don't trust the client for authorization.
- Don't mark work done without verifying it in a running environment.
