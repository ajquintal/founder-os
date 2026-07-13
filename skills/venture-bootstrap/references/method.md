# /venture-bootstrap — Full method & worked example

One level deep; does not fan out further. Lenses: Scale Mechanics (economics-first; don't build ahead of demand), Gerber E-Myth (systemize so it runs without the founder), and the AI-native build conventions in `operating-playbooks.md` §8.

## 0. Economics gate (blocking)

Before any scaffold, confirm in the venture context (or a `/offer-architect` brief): a named offer, a price, margin, and a model whose math **closes** — or is explicitly "unproven, testing cheaply first." If those are absent, stop and route to `/offer-architect`. Building ahead of proven economics is Tony's #1 failure mode; this gate is the guard made mechanical.

## 0.5 Buy-vs-build-vs-none decision (blocking — before any stack talk)

The economics gate proves the venture *should* exist; this decides *what to build, if anything*. The default is the cheapest thing that ships. Standing up custom software you didn't need is Tony's #1 failure mode in its most expensive form — so a custom codebase is the exception that must earn itself, never the reflex. Read the product/delivery shape from the venture context (`Business model & revenue architecture`, `Stack`, `regulatory-surface`) and pick one branch:

| Branch | When it fits | What "bootstrap" produces | First-dollar milestone |
|---|---|---|---|
| **None** (no software yet) | Little/no software needed to take the first dollar — physical goods sold wholesale / in person, a service sold by invoice or DM, a pop-up | Nothing stood up. A one-line note of the manual path + the concrete trigger that would later justify software | First invoice / PO / in-person sale logged |
| **Off-the-shelf / no-code** (default when software is needed) | The need is served by configuring an existing platform — storefront (Shopify), booking (Cal.com/Calendly/Resy), POS (Square/Toast), site builder, CRM (Airtable) | The off-the-shelf setup checklist (§6b) — pick platform → configure → wire domain/payments/integrations → one real test transaction. No repo, no code | One real (test-mode) order/booking through the configured platform |
| **Custom software** | Off-the-shelf genuinely can't serve it: the core value *is* the software, a proprietary data/workflow moat, or an integration / unit-economics no platform delivers | The stack decision + scaffold below (§1–§6a). `starters/saas` is this branch's archetype | Live URL + one test-mode transaction |

Rules for this gate:
- **Default off-the-shelf.** Choosing "custom" requires naming the specific capability off-the-shelf can't deliver. "It'll be cleaner if we build it" is not a reason.
- Most **physical-product** and **service-delivery** ventures land in None or Off-the-shelf for their software footprint — the real build (sourcing → production → fulfillment, or the delivery system + SOPs) runs on its own track, not here.
- A venture can be **hybrid** — e.g., a physical brand on a Shopify storefront (off-the-shelf) with one custom edge function for a bespoke bundling rule (a thin custom slice). Buy the 90%, build only the slice that must be custom.
- Record the branch, the reason, and the rejected branches — same discipline as the stack matrix.

> **On the None / Off-the-shelf branches, skip §1–§6a entirely and go to §6b.** Sections 1–6a below are the custom-software branch.

## 1. Stack decision matrix (custom-software branch)

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

## 6a. Hello-world deployed checklist (template — custom-software branch)

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

## 6b. Off-the-shelf setup checklist (template — off-the-shelf branch)

No repo, no scaffold. The deliverable is a configured, live platform taking one real test transaction.

1. Pick the platform against the need (storefront / booking / POS / CRM / site builder) — record it + the rejected alternative, same discipline as the stack matrix.
2. Create the account. **[approval: creates account/spend]**
3. Configure the core object (products / services, prices, availability) — the real catalog, not placeholders.
4. Apply brand (theme, logo, tokens from the venture context).
5. Connect the domain. **[approval: domain/spend]**
6. Wire payments via the platform's native checkout, in test mode. **[approval: connects processor]**
7. Wire the integrations the venture needs (email / CRM / analytics) via native connectors — no custom glue unless a real gap forces a single thin edge function (the hybrid case).
8. Own your data: confirm the export/backup path and that the account sits under a venture-controlled login (not a personal one).
9. Complete one real **test-mode** order/booking end-to-end on the live platform. Done = verified on the platform.

Items 3–8 are configuration, not code; the security posture here is **vendor-config** (least-privilege admin roles, MFA on the owner account, a DPA where customer PII flows through the vendor) — not RLS / `verify_jwt`. Physical-product and service ventures typically stop here for their software footprint; their manufacturing/fulfillment or service-delivery build runs on its own track.

## Worked example (abridged)

### Custom-software branch

**Input:** bootstrap a paid-community SaaS (context: auth + $19/mo subscription + gated content; economics close at ~3-month CAC payback).

- **Gate:** economics present and closing → proceed.
- **Buy-vs-build:** the core value *is* the gated app + member data — no off-the-shelf tool serves owner-scoped content behind a custom subscription. Branch = **custom software**; off-the-shelf rejected. `starters/saas` is the archetype.
- **Stack:** all defaults — React/Vite/TS + Supabase (Auth + Postgres + RLS) + Stripe subscription + static deploy. No realtime, no SSR (member-gated, not SEO-driven) → Next.js rejected. AI not needed yet → no provider seam scaffolded.
- **Scaffold:** the tree above minus `e2e/` (added in week 2 once "subscribe → access" is the critical path).
- **CI:** lint / typecheck / unit / build.
- **Week 1 ends:** a live URL where a test-mode card buys a $19/mo sub and unlocks one gated page; CI green; `CLAUDE.md` + `agent-runbook.md` committed. The first real dollar path is proven before any content or scale spend.

### Off-the-shelf branch

**Input:** bootstrap a refillable home-fragrance DTC brand (context: physical product; sells via a storefront + subscription refills; economics close on delivered margin).

- **Gate:** economics present and closing → proceed.
- **Buy-vs-build:** the product is a physical good; the software footprint is a storefront + subscription billing, all served off-the-shelf. Branch = **off-the-shelf**; custom rejected (no capability a storefront + subscription app lacks). `starters/saas` **not** cloned; no repo.
- **Setup (§6b):** Shopify + a subscription app (test mode); real catalog + prices; brand theme applied; domain connected; Shopify Payments in test mode; Klaviyo + GA4 wired via native connectors; data export/backup confirmed and the store under a venture-controlled login.
- **Week 1 ends:** the live storefront takes one real test-mode subscription order — no repo, no code, no Vite/Supabase scaffold. The physical build (sourcing → production → fulfillment) proceeds on its own track, not in this skill.
