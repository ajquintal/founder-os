# /venture-bootstrap — Full method & worked example

One level deep; does not fan out further. Lenses: Scale Mechanics (economics-first; don't build ahead of demand), Gerber E-Myth (systemize so it runs without the founder), and the AI-native build conventions in `operating-playbooks.md` §8.

## 0. Economics gate (blocking)

Before any scaffold, confirm in the venture context (or a `/offer-architect` brief): a named offer, a price, margin, and a model whose math **closes** — or is explicitly "unproven, testing cheaply first." If those are absent, stop and route to `/offer-architect`. Building ahead of proven economics is Tony's #1 failure mode; this gate is the guard made mechanical.

## 1. Stack decision matrix

Map need → leanest choice. The default column is Tony's proven stack; deviate only when a need in the venture context contradicts it.

| Need | Default choice | Deviate when → alternative |
|---|---|---|
| Frontend / UI | React 18 + Vite + TS + Tailwind + shadcn/ui | Heavy SEO/content or SSR → Next.js; mobile-first → Expo/React Native |
| Auth | Supabase Auth (email + OAuth) | Enterprise SSO/SAML → Auth0 / WorkOS |
| Relational data + row security | Supabase Postgres + RLS | Doc/graph fit or offline-first → reassess |
| Server logic | Supabase Edge Functions (Deno) | Long-running jobs/queues → a worker service |
| Payments | Stripe (Payment Links / Checkout first, API later) | VAT-heavy digital goods → Paddle / LemonSqueezy (merchant of record) |
| AI | Direct provider API behind a `lib/aiProvider.ts` seam | — (avoid gateway lock-in) |
| Hosting | Static `dist/` on DigitalOcean App Platform / Vercel / Netlify | Needs a server runtime → containerized service |
| Email / SMS | Resend / Twilio | — |
| Analytics | GA4 (+ PostHog if product analytics needed) | — |

Rule of thumb: if a need isn't in the venture context, it isn't in the stack. Every added dependency must earn its place against time-to-first-dollar.

## 2. Repo scaffold tree

```
<venture-slug>/
  CLAUDE.md              # project notes loaded every session (see §3)
  CONTRIBUTING.md        # definition of done: PR + merged + verified in prod
  README.md              # what it is, run/build commands
  .env.example           # placeholder keys only — real secrets never committed
  .gitignore             # .env*, node_modules, dist, .claude/
  package.json           # scripts: dev, build, lint, typecheck, test
  index.html
  vite.config.ts
  tsconfig.json
  src/
    main.tsx  App.tsx
    components/           # UI (shadcn/ui primitives)
    lib/                  # supabase client, stripe helpers, aiProvider seam
    pages/
    test/                # vitest unit tests (travel with the code)
  supabase/
    config.toml          # edge-function verify_jwt policy
    functions/           # edge functions; each does its own authz check
    migrations/          # <timestamp>_<slug>.sql
  e2e/                   # playwright — add once a critical path exists
  docs/
    agent-runbook.md     # operating envelope + work loop (see §4)
    playbooks/CHANGE_POLICY.md
  .github/workflows/ci.yml
```

Adapt names to the chosen stack; keep it one level deep. Do not scaffold folders for capabilities the venture doesn't need yet (no `supabase/functions/` for a no-backend landing page).

## 3. CLAUDE.md outline (for the new repo)

Headings to fill from the stack decision: Stack · Common commands (table) · Auth model (roles + RLS helper) · Database conventions (migration naming `<timestamp>_<slug>.sql`, RLS on by default, every user-owned table gets INSERT/UPDATE/SELECT policies) · Edge-function policy (`verify_jwt` default true; false only for webhooks/cron/OAuth callbacks, which self-authorize) · CI · Deployment (host, build command, env vars) · Repo conventions (branch names, conventional commits, PR body) · Don't-commit list (`.env*`, lockfile if the buildpack chokes, `.claude/`, `dist`).

## 4. agent-runbook.md outline (for the new repo)

Mirror this repo's runbook: load order · operating stance (drive reversible work to finished; stop only for the four gates — spend / commit / external-send / physical-only) · the standard loop · reporting format · guardrails one-liner · deploy path (MCP → CLI) · diagnostic recipes · known capability gaps.

## 5. CI (minimal)

`.github/workflows/ci.yml`: Node 20; jobs `lint`, `typecheck`, `unit` (coverage floor), `build` (build depends on the first three). If the host buildpack requires no committed lockfile, each job runs `npm install`. Add an `e2e` job only when a real user path exists to protect.

## 6. Hello-world deployed checklist (template)

1. Create repo, push scaffold on a branch, conventional commit.
2. `npm install && npm run dev` boots locally.
3. Provision the backend project (Supabase). **[approval: creates account/resource]**
4. Local `.env` from `.env.example`; commit only `.env.example`.
5. First migration: one table + INSERT/SELECT/UPDATE RLS policies.
6. One edge function (or route) returning real data with its own authz check.
7. One UI page reads/writes that data end-to-end.
8. Stripe test-mode product + payment link/checkout wired to one price. **[approval: connects account]**
9. CI green on the PR (lint/type/unit/build).
10. Deploy static build to the host; live URL loads. **[approval: creates app + domain/spend]**
11. Complete one real test-mode transaction on the live URL. Done = verified in prod.

## Worked example (abridged)

**Input:** bootstrap a paid-community SaaS (context: auth + $19/mo subscription + gated content; economics close at ~3-month CAC payback).

- **Gate:** economics present and closing → proceed.
- **Stack:** all defaults — React/Vite/TS + Supabase (Auth + Postgres + RLS) + Stripe subscription + static deploy. No realtime, no SSR (member-gated, not SEO-driven) → Next.js rejected. AI not needed yet → no provider seam scaffolded.
- **Scaffold:** the tree above minus `e2e/` (added in week 2 once "subscribe → access" is the critical path).
- **CI:** lint / typecheck / unit / build.
- **Week 1 ends:** a live URL where a test-mode card buys a $19/mo sub and unlocks one gated page; CI green; `CLAUDE.md` + `agent-runbook.md` committed. The first real dollar path is proven before any content or scale spend.
