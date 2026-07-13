# Deployment

Three parts: the Supabase backend, the Stripe wiring, and the static frontend.
Do them in that order. Nothing here contains secrets — they are set via CLI/host.

## Prerequisites

- Supabase CLI (`npm i -g supabase` or `brew install supabase/tap/supabase`)
- Stripe CLI (for local webhook testing) — optional but recommended
- A GitHub repo with the CI workflow (already included)

## 1. Supabase (database + auth + functions)

```bash
supabase login
supabase link --project-ref <your-project-ref>

# Apply migrations (creates notes + orders with RLS)
supabase db push

# Verify RLS is on and policies exist
#   Supabase Studio → Authentication → Policies, or:
#   select tablename, policyname, cmd from pg_policies where schemaname = 'public';

# Deploy edge functions
supabase functions deploy create-checkout
supabase functions deploy stripe-webhook

# Set server secrets (never commit these)
supabase secrets set \
  STRIPE_SECRET_KEY=sk_test_xxx \
  STRIPE_PRICE_ID=price_xxx \
  APP_URL=https://your-domain.com
```

`SUPABASE_URL`, `SUPABASE_ANON_KEY`, and `SUPABASE_SERVICE_ROLE_KEY` are injected
into functions automatically — you do not set them by hand in the cloud.

**verify_jwt recap** (from `supabase/config.toml`): `create-checkout` requires a
user JWT; `stripe-webhook` has `verify_jwt = false` and instead verifies the Stripe
signature. Keep it that way.

## 2. Stripe (payments)

1. Dashboard → **Products** → create a product + price (test mode). Copy the price
   id into `STRIPE_PRICE_ID` (step 1).
2. Dashboard → **Developers → Webhooks** → add endpoint:
   `https://<project-ref>.functions.supabase.co/stripe-webhook`
   Subscribe to at least `checkout.session.completed`.
3. Copy the endpoint's **Signing secret** and set it:
   `supabase secrets set STRIPE_WEBHOOK_SECRET=whsec_xxx`
4. Test the webhook:
   ```bash
   # Local: forward events to a locally served function
   supabase functions serve stripe-webhook --no-verify-jwt
   stripe listen --forward-to http://localhost:54321/functions/v1/stripe-webhook
   stripe trigger checkout.session.completed
   ```
   Confirm a row appears in `orders`. Trigger it twice — you should get exactly one
   row (idempotency working).

## 3. Frontend (static `dist/`)

The build inlines `VITE_*` env at build time, so set them in the host's
**build environment**.

### Vercel

- Import the repo. Framework preset: **Vite** (or rely on `vercel.json`).
- Build command `npm run build`, output `dist`. `vercel.json` adds the SPA rewrite
  so client-side routes resolve to `index.html`.
- Project → Settings → Environment Variables: set `VITE_SUPABASE_URL`,
  `VITE_SUPABASE_ANON_KEY`, `VITE_APP_URL` (your production URL).

### DigitalOcean App Platform

- Use `.do/app.yaml` (edit `github.repo`/`branch`). It sets build command,
  `output_dir: dist`, and `catchall_document: index.html` for SPA routing.
- Set the `VITE_*` values as app-level env (BUILD_TIME scope).

### Post-deploy

- Set `APP_URL` (Supabase secret) and `VITE_APP_URL` (host build env) to the real
  domain so Stripe redirects and auth email links point at production.
- Lock down CORS in `supabase/functions/_shared/cors.ts` to your origin.

## 4. Verification checklist (definition of done — see CLAUDE.md §1)

- [ ] Sign up / sign in works on the deployed URL.
- [ ] A user sees only their own rows (RLS): a second account cannot read the first
      account's data.
- [ ] `Start checkout` opens Stripe Checkout; completing it (test card `4242 …`)
      returns to `/billing?status=success`.
- [ ] The completed payment produced exactly one `orders` row via the webhook.
- [ ] CI (lint · typecheck · unit · build · e2e) is green on `main`.
