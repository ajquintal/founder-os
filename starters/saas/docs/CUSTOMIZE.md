# Customize this starter for your venture

A concrete checklist for turning this template into your product. Work top to
bottom; each step is small. Anything marked (once) you do a single time.

## 0. Clone & rename

- [ ] Copy the template to your new repo, `git init`, first commit.
- [ ] Find/replace the placeholders from the README's rename table:
  - `saas-starter` → your slug (`package.json`, `.do/app.yaml`)
  - `SaaS Starter` → your display name (`index.html`, `src/pages/Login.tsx`)
  - `your-project-ref` → Supabase ref (`.env.example`, `supabase/config.toml`)
  - `your-org/your-repo` → your GitHub repo (`.do/app.yaml`)
- [ ] (once) `npm install` to generate `package-lock.json`, then **commit it** so
      CI's `npm ci` works.
- [ ] (once) Install the secret-guard hook:
      `ln -sf ../../scripts/check-secrets.sh .git/hooks/pre-commit`

## 1. Set environment

- [ ] Create a Supabase project; copy its URL and **anon** key.
- [ ] `cp .env.example .env.local` and fill `VITE_SUPABASE_URL`,
      `VITE_SUPABASE_ANON_KEY`, `VITE_APP_URL`.
- [ ] Confirm the app runs: `npm run dev`, then sign up / sign in.
      (For local dev you may want to disable email confirmation in Supabase Auth
      settings so signup logs you straight in.)

## 2. Define your data model (replace `notes`)

The `notes` table is a worked example of a **user-owned table**. Model your
product's real entities the same way. Using your product spec:

- [ ] Write a migration `supabase/migrations/<timestamp>_<slug>.sql` for each
      table. Timestamp format `YYYYMMDDHHMMSS` (e.g. `20260210143000_create_projects.sql`).
- [ ] For every user-owned table: `enable row level security` and add the policy
      set for the operations clients perform (SELECT/INSERT/UPDATE/DELETE keyed on
      `auth.uid() = user_id`). Copy the `notes` migration as your model.
- [ ] For system-managed tables (written only by a server/webhook): SELECT-own
      policy, no client write policies (copy the `orders` migration's pattern).
- [ ] Apply: `supabase db push` (remote) or `supabase migration up` (local).
- [ ] Regenerate types: `npm run db:types` (or the `--project-id` variant).
- [ ] Replace `src/lib/notes.ts`, `src/hooks/useNotes.ts`, and the Notes page with
      hooks/UI for your entities. Keep the shape: pure validation in `lib/`, data
      access in `hooks/`, screens in `pages/`.
- [ ] Update the Vitest test to cover your new pure logic.

## 3. Wire Stripe (test mode first)

- [ ] In the Stripe dashboard (test mode), create your Product(s) and Price(s).
- [ ] Copy the Price id into `STRIPE_PRICE_ID` (env/secret — not code).
- [ ] Set edge-function secrets:
      `supabase secrets set STRIPE_SECRET_KEY=sk_test_... STRIPE_PRICE_ID=price_... APP_URL=https://...`
- [ ] Deploy functions: `supabase functions deploy create-checkout` and
      `supabase functions deploy stripe-webhook`.
- [ ] Add a webhook endpoint in Stripe pointing at the deployed `stripe-webhook`
      URL; subscribe to `checkout.session.completed`. Copy its signing secret into
      `supabase secrets set STRIPE_WEBHOOK_SECRET=whsec_...`.
- [ ] Test with `stripe trigger checkout.session.completed` or a test checkout;
      confirm a row lands in `orders`. See `docs/DEPLOYMENT.md` for details.
- [ ] Decide `mode` in `create-checkout`: `subscription` (default) vs `payment`.

## 4. Auth & authorization

- [ ] Choose auth methods (password is wired; add OAuth/magic-link providers in
      Supabase Auth if you want them, then extend `useAuth`).
- [ ] If you need roles/admin: add a `profiles` table with a `role` column, and
      enforce it **server-side** (RLS and/or an edge-function check). See
      `CLAUDE.md §7` for the exact pattern.

## 5. CI & repo settings

- [ ] Push and confirm the GitHub Actions CI run is green.
- [ ] Add branch protection on `main` requiring the `verify` and `e2e` checks.
- [ ] (optional) To run the authenticated e2e flow in CI, seed a confirmed test
      user and add `E2E_EMAIL` / `E2E_PASSWORD` as repository secrets, then pass
      them into the e2e job env.

## 6. Deploy

- [ ] Follow `docs/DEPLOYMENT.md` to deploy the frontend (Vercel or DigitalOcean)
      with build-time `VITE_*` env, and to point `APP_URL` at the real domain.
- [ ] Verify in the deployed environment: sign up, exercise your data model, run a
      test checkout end-to-end. Only then is it done (see `CLAUDE.md §1`).

## 7. Prune the example

- [ ] Once your own model works, delete the leftover `notes` scaffolding you no
      longer use and update the README to describe **your** product.
