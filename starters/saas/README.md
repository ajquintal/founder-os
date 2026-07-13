# SaaS Starter

**The world-class engineering architecture behind a vibe-coded idea.**

> **This is ONE starter — the custom-software (SaaS web-app) archetype — not the default path.**
> Most ventures should **buy or assemble off-the-shelf** instead of building custom: a Shopify
> storefront, a booking tool (Cal.com/Resy), a POS (Square/Toast), a site builder, or Airtable
> will take the first dollar faster and cheaper, with no code to maintain. Needless custom build is
> Tony's #1 failure mode. Choose per venture via the **buy-vs-build-vs-none decision** in
> [`/venture-bootstrap`](../../skills/venture-bootstrap/SKILL.md): default to off-the-shelf, and
> clone this starter only when the venture genuinely needs custom software (the core value *is* the
> software, a data/workflow moat, or an integration no platform delivers). Physical-product and
> service ventures usually need little or none of this.

An opinionated, production-grade starting point for a new SaaS venture. Clone it,
rename it, define your data model, and you begin from a proven architecture instead
of a blank repo. Every choice here is deliberate and documented.

This is a generalized, industry-agnostic distillation of a battle-tested stack: a
typed React frontend, a Postgres backend that is secure by default, real payments,
and CI that refuses to let broken code merge.

> The engineering contract that makes this "world-class" lives in
> [`CLAUDE.md`](./CLAUDE.md). Read it. It is the operating agreement for anyone —
> human or agent — working in this repo.

---

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│  Browser (static SPA, served from dist/)                      │
│  Vite + React 18 + TypeScript + Tailwind + shadcn/ui          │
│                                                               │
│   supabase-js (anon key)          fetch → edge functions      │
│        │                                   │                  │
└────────┼───────────────────────────────────┼─────────────────┘
         │ RLS-scoped queries                 │ create-checkout (verify_jwt)
         ▼                                     ▼
┌─────────────────────────┐        ┌──────────────────────────┐
│  Supabase Postgres       │        │  Supabase Edge Functions  │
│  • Auth (auth.users)     │        │  • create-checkout        │
│  • notes  (RLS: owner)   │        │  • stripe-webhook  ◄──────┼── Stripe
│  • orders (RLS: read own,│◄───────┤    (signature-verified,   │   (webhook)
│    service-role writes)  │ service│     idempotent)           │
└─────────────────────────┘  role  └──────────────────────────┘
```

### Why each choice

| Layer     | Choice                          | Why                                                                                                   |
| --------- | ------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Build/UI  | **Vite + React 18 + TS**        | Fast dev loop, typed end-to-end, huge ecosystem, ships a plain static bundle (cheap to host anywhere). |
| Styling   | **Tailwind + shadcn/ui**        | Design tokens + copy-in components you own (no black-box UI dependency). Consistent, themeable.        |
| Backend   | **Supabase**                    | Postgres + Auth + Edge Functions + Storage in one place. **RLS makes the DB the security boundary**, so shipping the anon key to the browser is safe. |
| Payments  | **Stripe**                      | Checkout for the flow, a signature-verified + idempotent webhook for the source of truth on payments. |
| Tests     | **Vitest + Playwright**         | Vitest for fast hermetic unit logic; Playwright for real browser e2e against the production build.    |
| CI        | **GitHub Actions**              | Lint, typecheck, unit, build, e2e on every PR. Broken code cannot merge.                              |
| Hosting   | **Static `dist/`**              | Vercel or DigitalOcean App Platform. The frontend is just static files + env at build time.           |

The security posture is the point: **Row Level Security is on for every user-owned
table by default**, edge functions require a JWT unless they self-authenticate, and
the payment webhook is signature-verified and idempotent. See `CLAUDE.md §5–§7`.

---

## Quickstart

```bash
# 1. Install (also generates package-lock.json — commit it so CI's `npm ci` works)
npm install

# 2. Configure env
cp .env.example .env.local
#    fill in VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY (from your Supabase project)

# 3. Install the pre-commit secret-guard (recommended)
ln -sf ../../scripts/check-secrets.sh .git/hooks/pre-commit

# 4. Run it
npm run dev            # http://localhost:5173

# Quality gates
npm run typecheck && npm run lint && npm run test
npm run test:e2e       # builds + previews, runs Playwright smoke tests
```

The app boots and the login page renders **before** you connect a backend — env is
non-fatal by design (placeholders + a console warning), so CI and a fresh clone work
out of the box. Auth and data start working once real Supabase values are set.

For the Supabase + Stripe + deploy setup, see
[`docs/DEPLOYMENT.md`](./docs/DEPLOYMENT.md). For turning this template into your
specific venture, follow [`docs/CUSTOMIZE.md`](./docs/CUSTOMIZE.md).

---

## Clone & rename for a new venture

This template uses obvious placeholders. Find/replace these, then work through
`docs/CUSTOMIZE.md`.

| Find                        | Replace with                          | Where                                             |
| --------------------------- | ------------------------------------- | ------------------------------------------------- |
| `saas-starter`              | your package/app slug                 | `package.json`, `.do/app.yaml`                    |
| `SaaS Starter`              | your product's display name           | `index.html`, `src/pages/Login.tsx`               |
| `your-project-ref`          | your Supabase project ref             | `.env.example`, `supabase/config.toml`            |
| `your-org/your-repo`        | your GitHub repo                      | `.do/app.yaml`                                    |
| `notes`                     | your first real domain table          | migration, `src/lib/notes.ts`, `useNotes.ts`, pages |
| price / product placeholders | your real Stripe price id            | set `STRIPE_PRICE_ID` (env, not code)             |

The `notes` feature is intentionally generic — it is the **template for your own
user-owned data**, not a feature to keep. Replace it with your product's model.

---

## What's real vs. stubbed

**Real and working (given env + a Supabase project):**

- Vite/React/TS/Tailwind/shadcn app that builds to static `dist/`.
- Email+password auth via Supabase (`useAuth`, `ProtectedRoute`, Login page).
- `notes` vertical slice: migration with **full RLS** (SELECT/INSERT/UPDATE/DELETE),
  a typed data hook (`useNotes`), and working CRUD UI.
- `orders` migration with RLS (read-own; service-role writes).
- `create-checkout` edge function: real Stripe Checkout session, JWT-gated.
- `stripe-webhook` edge function: real **signature verification** + **idempotency**
  (event-id short-circuit + unique constraint) writing `orders`.
- Pure validation/sort logic (`src/lib/notes.ts`) + a passing Vitest unit test.
- Playwright smoke e2e (login renders, unauth redirect) that needs no backend.
- GitHub Actions CI: lint, typecheck, unit, build, e2e.
- Pre-commit secret-guard (`scripts/check-secrets.sh`).

**Stubbed / intentionally not implemented** (each marked with `// STUB:` in code):

| Stub                              | Where                                        | To finish                                                        |
| --------------------------------- | -------------------------------------------- | ---------------------------------------------------------------- |
| Authenticated e2e CRUD flow       | `e2e/notes.spec.ts`                          | Seed a test user; set `E2E_EMAIL`/`E2E_PASSWORD` (skips if unset). |
| Entitlement / plan-gating         | `src/pages/Billing.tsx`                      | Derive "is on paid plan" from `orders` (or a subscriptions table). |
| Admin roles / admin endpoints     | `CLAUDE.md §7`                               | Add a `profiles.role` table + server-side checks (pattern given). |
| CORS origin lock-down             | `supabase/functions/_shared/cors.ts`         | Replace `*` with your app origin in production.                  |
| Supabase Storage usage            | (platform available, no slice wired)         | Add a bucket + RLS policies when you need file uploads.          |
| Generated DB types                | `src/types/database.types.ts`                | Hand-authored to match migrations; run `npm run db:types` once live. |

---

## Scripts

| Command                 | Does                                                |
| ----------------------- | --------------------------------------------------- |
| `npm run dev`           | Vite dev server                                     |
| `npm run build`         | `tsc --noEmit` then production build to `dist/`     |
| `npm run preview`       | Serve the built `dist/`                             |
| `npm run typecheck`     | Type-check only                                     |
| `npm run lint`          | ESLint                                              |
| `npm run test`          | Vitest unit tests                                   |
| `npm run test:e2e`      | Playwright e2e (builds + previews automatically)    |
| `npm run db:types`      | Regenerate `src/types/database.types.ts` (local)    |
| `npm run secrets:check` | Run the secret-guard against staged changes         |

---

## Project layout

```
saas/
├── README.md                    # this file
├── CLAUDE.md                    # engineering operating contract (read this)
├── .env.example                 # every env var, placeholder values
├── package.json  vite.config.ts  tsconfig.json  tailwind.config.ts
├── postcss.config.js  components.json  eslint.config.js  playwright.config.ts
├── index.html                   # Vite entry
├── vercel.json  .do/app.yaml    # static-deploy configs (Vercel / DigitalOcean)
├── .github/workflows/ci.yml     # lint · typecheck · unit · build · e2e
├── scripts/check-secrets.sh     # pre-commit secret-guard
├── src/
│   ├── main.tsx  App.tsx  index.css  vite-env.d.ts
│   ├── lib/        # supabase client, env, cn(), pure notes logic
│   ├── types/      # database.types.ts (generated-shape)
│   ├── hooks/      # useAuth (context), useNotes (typed data hook)
│   ├── components/ # ProtectedRoute + ui/ (shadcn primitives)
│   ├── pages/      # Login, Notes (vertical slice), Billing
│   └── test/       # Vitest setup + unit test
├── supabase/
│   ├── config.toml              # per-function verify_jwt settings
│   ├── migrations/              # <timestamp>_<slug>.sql (notes, orders)
│   └── functions/
│       ├── _shared/             # cors, supabase clients, stripe
│       ├── create-checkout/     # Stripe Checkout (JWT-gated)
│       └── stripe-webhook/      # signature-verified, idempotent
├── e2e/                         # Playwright specs
└── docs/
    ├── CUSTOMIZE.md             # per-venture checklist
    └── DEPLOYMENT.md            # Supabase + Stripe + host setup
```
