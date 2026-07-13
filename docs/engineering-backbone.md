# Engineering, Security & Governance Backbone

**The world-class spine every Founder OS venture inherits — the opposite of the vibe-coding nightmare (no security, no roles, no structure).**

This is the non-negotiable standard. Hand it to Fable / Claude Code / any builder as the contract: a venture is not "world-class engineered" until every control here is either **enforced by the starter** or **explicitly added by the venture**. It is industry-agnostic — it reads nothing about the business, so every venture, current and future, runs on it.

It pairs with two things and never contradicts them:
- **`starters/saas/CLAUDE.md`** — the per-repo operating contract (definition of done, commits, secrets, RLS, edge-function auth, admin authz, testing). This doc is the *why* and the *full-stack checklist*; `CLAUDE.md` is the *in-repo enforcement*. Where this doc cites a control the starter already ships, it points at the exact file.
- **`founder-profile/guardrails.md`** — the human/business guardrails (secrets never in text, drafts-only, reversible/production actions need approval + rollback, no medical/legal claims without review). This doc operationalizes those into engineering controls.

> Referenced by the Master Architecture as domains **3 (Engineering & Infra backbone)** and **4 (Security, Roles & Governance)**. `starters/saas` is the executable form of most of this; this doc is the complete standard including what the starter leaves as a stub.

---

## How to read the control tags

Every control is tagged with where it lives today, so a builder knows what is free vs. what they must do:

| Tag | Meaning |
| --- | --- |
| **`[STARTER]`** | Already enforced/shipped by `starters/saas` out of the box. Inherit it; don't re-invent it. Don't weaken it. |
| **`[CONFIG]`** | The starter ships the *mechanism*; the venture must turn it on or fill it in per-environment (e.g. install the hook, set the origin, add the secret). |
| **`[VENTURE]`** | Not in the starter. The venture must build or wire it before the relevant gate (usually before a real-money launch). |

Tags are greppable on purpose. `grep '\[VENTURE\]'` = your build backlog. `grep '\[CONFIG\]'` = your setup checklist.

---

# ⭐ MINIMUM BAR — before any real-money launch (one page)

> Taking real money = accepting real liability. If **any** box below is unchecked, you are **not** cleared to switch Stripe to live keys. This is the go-live gate; the full standard is below. (Mirrors `CLAUDE.md §1` definition of done and the `/ship` payments-go-live gate.)

**Environments & secrets**
- [ ] Prod is a **separate** Supabase project + Stripe **live** account from staging/local; no prod secret exists in any lower env. `[CONFIG]`
- [ ] Every secret is in env / secret store only — nothing in code, commits, or logs; secret-guard hook installed. `[STARTER]`+`[CONFIG]`
- [ ] No secret behind a `VITE_*` prefix; service-role key never reachable from the browser. `[STARTER]`

**Identity & access**
- [ ] **RLS is ON for every user-owned table** and the policy-audit query (§2) returns zero unexpected rows. `[STARTER]`+`[CONFIG]`
- [ ] Roles are typed and enforced **server-side**; no admin action trusts a client flag. `[VENTURE]`
- [ ] Every edge function has an explicit `verify_jwt`; each `false` self-authenticates (signature/secret). `[STARTER]`+`[CONFIG]`

**Runtime safety**
- [ ] CORS locked to the prod origin (no `*`). `[CONFIG]`
- [ ] All external input validated at the boundary; public endpoints rate-limited. `[VENTURE]`
- [ ] Payment/webhook path is signature-verified **and** idempotent. `[STARTER]`

**Data, reliability, observability**
- [ ] PII is classified and minimized; nothing sensitive in logs/analytics. `[VENTURE]`
- [ ] Backups on **and a restore has actually been performed once** (a backup you've never restored is not a backup). `[VENTURE]`
- [ ] Error tracking (Sentry) live; audit log records privileged actions. `[VENTURE]`
- [ ] Analytics is consent-gated. `[VENTURE]`

**Quality & compliance**
- [ ] CI green on `main` (lint · typecheck · unit · build · e2e); `main` is branch-protected. `[STARTER]`+`[CONFIG]`
- [ ] A written **rollback path** exists for this deploy (host rollback + DB forward-fix). `[VENTURE]`
- [ ] The **applicable compliance regime is decided and its controls are in place** (§9) — GDPR/CCPA almost always; PCI-DSS (SAQ-A) whenever you take card payments; HIPAA/LegitScript if health; SOC2-readiness if B2B. `[VENTURE]`
- [ ] Access register current; MFA on every tool account; no shared logins. `[VENTURE]`

**One-line rule:** *shipped + merged + verified in prod, secure by default, with a rollback path and the right compliance regime in force — or it does not take money.*

---

# 1. Environments & config

**Intent:** three isolated tiers — **local → staging → prod** — that never share state or secrets, with all config injected via environment variables (12-factor). A mistake in a lower env must never be able to touch prod data or prod money.

### Controls
- **Three isolated environments.** Each tier is its own Supabase project, its own Stripe context (local/staging = **test mode**, prod = **live**), its own host deploy target, and its own secret set. Never point staging at the prod database. `[CONFIG]`
- **Config is env-only.** No URLs, keys, or feature flags hard-coded. Client reads `import.meta.env.VITE_*`; server reads `Deno.env.get(...)`. `[STARTER]` (`src/lib/env.ts`, edge functions)
- **The `VITE_*` public boundary is sacred.** Anything `VITE_*` is bundled into the browser and is therefore **public**. The Supabase **anon** key is safe to ship; the **service-role** key and all Stripe secrets are not and must never get a `VITE_` prefix. `[STARTER]` (`CLAUDE.md §4`, `.env.example`)
- **No prod secrets in lower envs.** Staging/local use Stripe **test** keys and a non-prod Supabase project. Prod live keys exist only in the prod host build env + `supabase secrets` for the prod project. `[CONFIG]`
- **Documented, non-fatal config.** `.env.example` lists every variable with **placeholder** values; real values live in `.env.local` (git-ignored). Missing config degrades gracefully (UI still renders, calls fail loudly) so a fresh clone and CI work without secrets. `[STARTER]` (`.env.example`, `src/lib/env.ts`)
- **Environment parity + promotion.** The same migrations and the same build promote up the tiers; you never hand-edit prod to match. Branch → environment mapping is explicit (e.g. `main` → prod, `staging` → staging). `[CONFIG]`

### Checklist
- [ ] Separate Supabase project per tier (local via CLI, staging, prod). `[CONFIG]`
- [ ] Stripe test mode for local/staging; live only in prod. `[CONFIG]`
- [ ] All config via env vars; nothing environment-specific hard-coded. `[STARTER]`
- [ ] No secret carries a `VITE_` prefix. `[STARTER]`
- [ ] `.env.example` documents every var; `.env.local` git-ignored; host build env set for `VITE_*`; `supabase secrets set` for server vars. `[CONFIG]`
- [ ] Branch → environment mapping written down. `[VENTURE]`

---

# 2. Identity, authn/authz & RBAC

**Intent:** one server-trusted identity, typed roles, least privilege, and a database that **denies by default**. The client is never a security boundary.

### Authentication
- Supabase Auth is the identity provider; the user's **JWT** is the identity. Email/password is wired; OAuth/magic-link are added in Supabase Auth + `useAuth` when needed. `[STARTER]` (`src/hooks/useAuth.tsx`)

### Roles (RBAC)
- **Typed role hierarchy:** `owner` > `admin` > `staff` > `user`. Single source of truth is a `profiles.role` column (a Postgres `enum`/`check`), never a client-sent value. `[VENTURE]`
- **Server-enforced, always.** Route guards like `ProtectedRoute` are **UX only** — they hide screens, they do not protect data. Every privileged read/write is enforced in RLS and/or an edge-function role check. `[STARTER]` for the pattern (`CLAUDE.md §7`, `src/components/ProtectedRoute.tsx`); `[VENTURE]` to add the actual roles.
- **Admin/privileged endpoints check role server-side** against `profiles.role` after resolving the user from their JWT (pattern in `CLAUDE.md §7`). A client `isAdmin` flag is a suggestion, not authorization. `[VENTURE]`

### Least privilege
- Browser uses the **anon** key and is fully constrained by RLS. The **service-role** key (which *bypasses* RLS) is used only in trusted server code and is never sent to the client. Use the `userClient(jwt)` vs `serviceClient()` split. `[STARTER]` (`supabase/functions/_shared/supabase.ts`)

### RLS on by default (the security boundary)
- **Every user-owned table:** `enable row level security` + the policy set for the operations clients actually perform (SELECT/INSERT/UPDATE/DELETE keyed on `auth.uid() = user_id`; INSERT uses `with check`, UPDATE uses both). Without a policy, RLS denies everything — that is the point. `[STARTER]` (`supabase/migrations/...create_notes.sql`)
- **System-managed tables** (written only by a server/webhook via the service role) get a SELECT-own policy and **deliberately omit** client write policies — documented in the migration, not "completed for symmetry." `[STARTER]` (`...create_orders.sql`)
- Consider `force row level security` on tables where even the table owner role must be subject to policies.

### verify_jwt policy for edge functions
- **Default `verify_jwt = true`** — a valid Supabase user JWT is required. `[STARTER]` (`supabase/config.toml`)
- **The only functions that may set `verify_jwt = false`** — and each **must** self-authenticate by another mechanism:

  | Exception | Self-auth mechanism |
  | --- | --- |
  | **Webhooks** (e.g. `stripe-webhook`) | verify the provider **signature** |
  | **Auth hooks** | verify the **hook secret** |
  | **Public OAuth callbacks** | validate `state` + the provider token exchange |
  | **Cron / scheduled jobs** | shared secret, or run under a trusted role |

  Set the flag explicitly per function and comment *why*. `[STARTER]` (`supabase/config.toml`, `CLAUDE.md §6`)

### Policy-audit query (run before every launch and in review)
Run in Supabase Studio SQL editor (or the automated equivalent: `get_advisors(type: 'security')`).

```sql
-- (A) DANGER: user-facing tables with RLS turned OFF. EXPECT: zero rows.
select c.relname as table_name
from pg_class c
join pg_namespace n on n.oid = c.relnamespace
where n.nspname = 'public' and c.relkind = 'r'
  and c.relrowsecurity = false
order by 1;

-- (B) RLS on but NO policies (table is locked). Every row here must be a
--     deliberately service-role-only table, documented in its migration.
select c.relname as table_name
from pg_class c
join pg_namespace n on n.oid = c.relnamespace
where n.nspname = 'public' and c.relkind = 'r'
  and c.relrowsecurity = true
  and not exists (
    select 1 from pg_policies p
    where p.schemaname = 'public' and p.tablename = c.relname
  )
order by 1;

-- (C) Full policy inventory — eyeball that each table's policies match intent.
select tablename, policyname, cmd, roles, qual, with_check
from pg_policies
where schemaname = 'public'
order by tablename, cmd;
```
`[CONFIG]` — the queries are standard; run them per project.

### Checklist
- [ ] Auth provider wired; JWT is the only trusted identity. `[STARTER]`
- [ ] `profiles.role` enum (`owner/admin/staff/user`), server-side source of truth. `[VENTURE]`
- [ ] Every user-owned table has RLS on + correct policy set. `[STARTER]`+`[CONFIG]`
- [ ] System-managed tables: SELECT-own only, write-policies omitted + documented. `[STARTER]`
- [ ] Admin endpoints role-checked server-side; no client authority. `[VENTURE]`
- [ ] Anon-key-only in browser; service-role only server-side. `[STARTER]`
- [ ] Every edge function has explicit `verify_jwt`; each `false` self-authenticates. `[STARTER]`+`[CONFIG]`
- [ ] Policy-audit query (A) returns **zero rows**; (B) rows are all justified. `[CONFIG]`

---

# 3. Secrets & supply chain

**Intent:** a secret never touches source control or a log, and a dependency never enters the build unvetted or unpinned. (Directly enforces `guardrails.md` → "secrets never in text/logs/committed files.")

### Secrets
- **Env / vault only.** Server secrets via `supabase secrets set` + the host env; never in the repo, a commit, or a log line. `[STARTER]` posture (`CLAUDE.md §4`)
- **Pre-commit secret-guard** scans staged diffs for live-key patterns (`sk_live_`, `rk_live_`, `whsec_`, JWTs, `AKIA…`, private keys) and blocks the commit. Install once as a git hook; also runs via `npm run secrets:check`. `[STARTER]` (`scripts/check-secrets.sh`) / install is `[CONFIG]` (`ln -sf ../../scripts/check-secrets.sh .git/hooks/pre-commit`)
- **Rotation.** Rotate immediately on any suspected exposure (and treat a leaked key as compromised even if "probably fine"). Rotate long-lived keys on a schedule. Prefer **restricted** keys (e.g. Stripe `rk_`) and short-lived, scoped tokens over god-keys — matches the Layer-5 MCP principle (`docs/mcp-proprietary-layer.md`). `[VENTURE]`

### Supply chain
- **Pinned + locked deps.** Commit `package-lock.json`; CI uses `npm ci` (exact, reproducible installs). `[STARTER]` (`.github/workflows/ci.yml`)
- **Dependency scanning in CI.** Add `npm audit --audit-level=high` as a gate and enable **Dependabot** (or Renovate) alerts + PRs. `[VENTURE]`
- **Secret scanning in CI + on the host.** Run the secret-guard in CI too (belt-and-suspenders), add a history scanner (**gitleaks**/**trufflehog**), and enable **GitHub secret scanning + push protection** on the repo. `[VENTURE]`
- **Deno function integrity.** Edge-function deps are imported by pinned URL (`esm.sh/...@2.45.4`); keep versions pinned, not floating. `[STARTER]` (`_shared/supabase.ts`)

### Checklist
- [ ] All secrets in env/vault; none in code/commits/logs. `[STARTER]`
- [ ] Secret-guard installed as a pre-commit hook. `[CONFIG]`
- [ ] `package-lock.json` committed; CI on `npm ci`. `[STARTER]`
- [ ] `npm audit` gate + Dependabot/Renovate enabled. `[VENTURE]`
- [ ] GitHub secret scanning + push protection on; gitleaks in CI. `[VENTURE]`
- [ ] Key rotation policy written; restricted/short-lived keys preferred. `[VENTURE]`

---

# 4. Runtime safety

**Intent:** assume every request is hostile. Validate input, throttle the front door, restrict origins, and make external-event handlers both authenticated and replay-safe.

### Controls
- **Input validation at the boundary.** Parse and validate every external payload (edge function + client) with a schema (e.g. `zod`) before use; reject on failure. DB `CHECK` constraints are the last line, not the only line. `[STARTER]` for DB checks (`create_notes.sql` → `char_length` checks); `[VENTURE]` for the schema-validation layer.
- **Rate-limit public endpoints.** Unauthenticated/public edge functions and auth flows must be throttled per-IP and per-user (token bucket in Postgres/Upstash, or a WAF/CDN like Cloudflare in front). Rely on Supabase Auth's built-in limits for auth, but add explicit limits for custom public functions. `[VENTURE]`
- **CORS locked to origins.** Replace the dev-only `*` with an allow-list that echoes your app origin(s) only. `[CONFIG]` (`supabase/functions/_shared/cors.ts` — shipped as a `STUB: '*'`)

  ```ts
  const ALLOWED = new Set([Deno.env.get('APP_URL')!]) // e.g. https://app.yourvent.com
  const origin = req.headers.get('Origin') ?? ''
  const cors = {
    'Access-Control-Allow-Origin': ALLOWED.has(origin) ? origin : 'null',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Vary': 'Origin',
  }
  ```
- **Webhook signature verification.** Any inbound webhook verifies the provider signature against a secret, using the **raw** body. `[STARTER]` (`stripe-webhook/index.ts` → `constructEventAsync` with `STRIPE_WEBHOOK_SECRET`)
- **Idempotency.** Any handler for external events is safe to run twice: short-circuit on the provider event id + a unique constraint + `upsert(..., { ignoreDuplicates: true })`. `[STARTER]` (`stripe-webhook` + `orders.stripe_event_id unique`)
- **Method guards + safe errors.** Reject wrong methods (`405`); return generic error messages to clients while logging detail server-side (never leak stack traces or internals). `[STARTER]` (functions guard method + shape errors)
- **Security headers** on the static host: `Content-Security-Policy`, `Strict-Transport-Security`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `X-Frame-Options`/frame-ancestors. `[VENTURE]`

### Checklist
- [ ] Schema validation on every external input; DB CHECK constraints as backstop. `[STARTER]`+`[VENTURE]`
- [ ] Public endpoints rate-limited (per-IP + per-user). `[VENTURE]`
- [ ] CORS allow-list set to prod origin(s); no `*`. `[CONFIG]`
- [ ] Every inbound webhook signature-verified on the raw body. `[STARTER]`
- [ ] External-event handlers idempotent (event-id + unique constraint). `[STARTER]`
- [ ] Security headers set on the host. `[VENTURE]`

---

# 5. Data & privacy

**Intent:** the schema evolves safely, you hold the minimum personal data possible, everything is encrypted, and data has a defined end-of-life.

### Controls
- **Migrations versioned, append-only, forward-only.** Filename `<timestamp>_<slug>.sql` (e.g. `20260101000000_create_notes.sql`) for deterministic ordering; never edit an applied migration — add a new one. Regenerate types after any schema change (`npm run db:types`; treat `src/types/database.types.ts` as generated). `[STARTER]` (`CLAUDE.md §5`, `supabase/migrations/`)
- **PII classification + minimization.** Classify every column: `public` / `internal` / `PII` / `sensitive (PHI / financial)`. Collect only what the product needs; don't store what you can reference. Card data stays with **Stripe** — you store Stripe ids, never PANs. Never log or send PII/PHI to analytics. `[VENTURE]` (starter models this: `orders` holds Stripe ids + amounts, no card data).
- **Encryption at rest + in transit.** Postgres/Supabase storage is encrypted at rest; all traffic is HTTPS/TLS (Supabase + hosts enforce). Don't build plaintext side-channels (exports, temp files, logs). `[STARTER]` (platform) / `[VENTURE]` (don't defeat it).
- **Retention + deletion.** Define a retention period per data class; delete or anonymize on schedule. Support data-subject deletion: FK `on delete cascade` for user-owned data (see `notes`) and `on delete set null` where a record must survive for financial/audit reasons (see `orders`). Wire a deletion workflow for DSAR/CCPA requests. `[STARTER]` models the cascade/set-null intent; `[VENTURE]` owns the retention schedule + deletion workflow.

### Checklist
- [ ] Migrations named `<ts>_<slug>.sql`, append-only, forward-only. `[STARTER]`
- [ ] Types regenerated after every schema change. `[CONFIG]`
- [ ] Every column classified; PII minimized; card data left to Stripe. `[VENTURE]`
- [ ] No PII/PHI in logs or analytics. `[VENTURE]`
- [ ] Encryption at rest + TLS in transit verified; no plaintext side-channels. `[STARTER]`+`[VENTURE]`
- [ ] Retention schedule + data-subject deletion workflow defined. `[VENTURE]`

---

# 6. Reliability

**Intent:** you can lose the database and get it back, you know when you're down, and you spend reliability budget deliberately.

### Controls
- **Backups + a TESTED restore (DR).** Enable automated backups (Supabase daily; **PITR** on paid tiers). *A backup you have never restored is not a backup* — perform a restore into a scratch project at least once before launch and on a recurring drill (quarterly). Record your **RPO** (max acceptable data loss) and **RTO** (max acceptable downtime). `[VENTURE]`
- **Health checks + uptime monitoring.** Expose a lightweight health signal (app URL or a cheap edge function) and monitor it externally (UptimeRobot / Better Uptime / host monitor) with alerting to a real channel. `[VENTURE]`
- **Error budgets / SLO.** Set an SLO for the core path (e.g. 99.9% availability of checkout + auth). Track burn; when the budget is exhausted, freeze feature work and fix reliability first. `[VENTURE]`
- **Resilience already in the stack:** the payment webhook is idempotent (safe on Stripe retries), migrations are forward-only (recoverable schema history), and CI archives the built `dist/`. `[STARTER]`

### Checklist
- [ ] Automated backups on (PITR where available). `[CONFIG]`
- [ ] **At least one real restore performed**; RPO/RTO recorded; drill scheduled. `[VENTURE]`
- [ ] Health endpoint + external uptime monitor + alerting. `[VENTURE]`
- [ ] SLO + error budget defined for the core path. `[VENTURE]`

---

# 7. Observability

**Intent:** when something breaks you see it, when someone privileged acts you have a record, and you measure product behavior without violating consent.

### Controls
- **Structured logs.** JSON where possible, one correlation id per request, **no PII/secrets in log lines**. Edge functions `console.error(...)` with context land in Supabase logs (`get_logs`). `[STARTER]` (functions log with context; error shape is disciplined) / `[VENTURE]` for correlation ids + PII scrubbing.
- **Error tracking (Sentry).** Wire Sentry on the frontend and edge functions, tagged by release + environment, source maps uploaded, alerting on new/spiking issues. `[VENTURE]`
- **Product analytics (PostHog), consent-gated.** No analytics/tracking fires before the user consents; respect Do-Not-Track; document the event taxonomy. Never send PII/PHI as event properties. `[VENTURE]`
- **Audit logs for privileged actions.** Append-only `audit_log` table (actor, action, target, timestamp, metadata) written by the service role for role changes, data exports, admin overrides, and billing changes; admins read, no one edits. Mirrors `mcp-proprietary-layer.md` → "every action audited." `[VENTURE]`

### Checklist
- [ ] Structured logs; correlation ids; zero PII/secrets in logs. `[STARTER]`+`[VENTURE]`
- [ ] Sentry live (frontend + functions), env/release tagged, alerting on. `[VENTURE]`
- [ ] PostHog consent-gated; DNT respected; no PII in events. `[VENTURE]`
- [ ] `audit_log` table + writes on every privileged action. `[VENTURE]`

---

# 8. CI/CD & quality gates

**Intent:** broken or unreviewed code cannot reach `main` or prod, and "done" means verified in production with a way back.

### Controls
- **The pipeline.** Every PR runs **lint · typecheck · unit · build · e2e**; broken code cannot merge. `[STARTER]` (`.github/workflows/ci.yml`; Vitest unit + Playwright e2e that runs with no secrets)
- **Extend CI** with the supply-chain gates from §3 (secret-guard, `npm audit`, gitleaks) and `deno check` for edge functions. `[VENTURE]`
- **Branch protection posture** on `main`: require the `verify` + `e2e` checks green, require PR review, disallow direct pushes, require branch up-to-date, prefer linear history. `[CONFIG]` (`docs/CUSTOMIZE.md §5`)
- **Conventional Commits + structured PRs.** `type(scope): summary`; PR body = Problem / Root cause / Fix / Verification; small, focused PRs. `[STARTER]` (`CLAUDE.md §2–§3`)
- **Definition of done = shipped + merged + verified in prod** — CI green, behavior observed in the deployed environment (not assumed), and a **rollback path** documented for the change. Never report unverified work as done. `[STARTER]` (`CLAUDE.md §1`, `/ship`)
- **Rollback path (required for every deploy).** Host instant-rollback to the previous deploy; DB changes are forward-only so recovery is a forward-fix migration (or a tested restore for data loss); experimental changes are feature-flagged so live flows stay untouched. `[VENTURE]` to write it per deploy.

### Checklist
- [ ] CI runs lint · typecheck · unit · build · e2e on every PR. `[STARTER]`
- [ ] Secret-guard + `npm audit` + gitleaks + `deno check` added to CI. `[VENTURE]`
- [ ] `main` branch-protected: required checks + review, no direct pushes. `[CONFIG]`
- [ ] Conventional Commits + PR body format followed. `[STARTER]`
- [ ] Change verified in prod before "done"; rollback path documented. `[STARTER]`+`[VENTURE]`

---

# 9. Compliance-by-design

**Intent:** the applicable regime is decided **at concept (go/no-go)**, not discovered after launch — because it constrains vendor choice, data model, and GTM. This operationalizes `guardrails.md` ("regulated categories = a hard dependency, not a formality; no medical/legal claims without review").

**Decision rule:** in `/go-no-go`, answer *"which regimes apply?"* If health/PHI or regulated advertising is in scope, that is a **hard dependency** gating launch and spend — flag it to Tony.

### Regime → controls matrix

| Regime | Applies when | Concrete controls (→ section) | Gate |
| --- | --- | --- | --- |
| **GDPR / CCPA-CPRA** | You process personal data of EU/UK (GDPR) or CA/US-state (CCPA) residents — **nearly every consumer venture**. | PII classification + minimization + retention + DSAR deletion (§5); consent-gated analytics (§7); encryption in transit/rest (§5); **DPAs** signed with every subprocessor (Supabase, Stripe, PostHog, Sentry, email/SMS); public privacy policy + cookie/consent banner; breach-notification plan (§6/§7). | Before collecting any personal data. |
| **HIPAA** | You create/receive/store/transmit **PHI** (identifiable health info) — telehealth, health coaching tied to identity, clinical data. | **BAA with every subprocessor that touches PHI** (Supabase HIPAA add-on + BAA; Stripe; Twilio HIPAA-eligible + BAA) — **note: standard Vercel and PostHog Cloud are *not* HIPAA-eligible**, so exclude PHI from them or self-host; minimum-necessary data (§5); access control + RBAC (§2); **audit logs** (§7); encryption (§5); no PHI in logs/analytics; breach notification; workforce training. | Before any PHI is handled — **constrains the vendor stack**, so decide at concept. |
| **LegitScript** | You advertise or take payment for health, pharma, addiction-treatment, supplements, telehealth, or similar regulated categories (required by Google/Meta ads + many processors). | **LegitScript certification before running ads or taking payment** in the category; accurate claims only (`guardrails.md` — no medical claims without review); verified licensure/credentials; clear disclaimers; compliant checkout. | Before paid GTM **and** before real-money launch in the category. |
| **PCI-DSS** | You accept card payments — **almost every venture that takes money**. Scope depends entirely on *how* card data is handled. | **Use a hosted processor (Stripe Checkout / Elements / Payment Links) so card data (PAN) never touches your servers or logs — this keeps you in the lightest self-assessment tier (SAQ-A).** Never store/transmit/log full card numbers; TLS everywhere (§5); processor's PCI DSS Level-1 attestation on file; if you ever handle raw PAN, scope explodes (SAQ-D + QSA) — don't, unless a lawyer/QSA signs off. | Before taking live card payments. |
| **SOC 2 (readiness)** | You sell to businesses/enterprise that will ask for it. Not required to *start*, but readiness is cheap to bake in. | The whole backbone maps to Trust Services Criteria: access control + RBAC (§2), change management via CI + branch protection (§8), encryption (§5), monitoring/logging/**audit** (§7), backups/DR (§6), vendor management (§10), incident response. **Readiness = these controls operating + evidence retained** (CI logs, access register, audit logs) — not yet a formal audit. | Bake in from day one if B2B; formal audit when a deal requires it. |

### Checklist
- [ ] Applicable regime(s) decided in `/go-no-go`, documented in the venture context. `[VENTURE]`
- [ ] GDPR/CCPA baseline (privacy policy, consent, DSAR/deletion, DPAs) in place before collecting personal data. `[VENTURE]`
- [ ] If health: HIPAA BAAs signed and the stack confirmed HIPAA-eligible **before** any PHI. `[VENTURE]`
- [ ] If regulated category: LegitScript certification obtained before ads/payments. `[VENTURE]`
- [ ] If taking card payments: PAN kept off your servers via a hosted processor (SAQ-A), never logged/stored. `[VENTURE]`
- [ ] If B2B: SOC2-readiness controls operating + evidence retained. `[VENTURE]`

---

# 10. Roles & access governance

**Intent:** least-privilege, MFA-everywhere control over *who can do what across the tool stack* (this is people/vendor access — distinct from the app's in-product RBAC in §2). No shared logins; every grant is recorded, reviewed, and revocable.

### Principles
- **Least privilege + MFA on every account.** SSO (Google Workspace) where the tool supports it; no shared passwords; the Owner holds break-glass credentials in a vault. `[VENTURE]`
- **Service accounts & AI agents get scoped, revocable tokens** — read-first, drafts-only, never god-keys (matches `mcp-proprietary-layer.md` + `guardrails.md`: reads before writes, drafts not sends, every action audited).
- **Access register.** Maintain a living table of principal × tool × access level; review quarterly.

### Who can do what (default access matrix)

| Tool (stack) | Owner (Tony) | Admin / operator | Staff / contractor | Automation / AI agent |
| --- | --- | --- | --- | --- |
| **GitHub** (code) | Admin | Maintain | Write to branches, PR only | CI token, least-scope |
| **Supabase** (DB/auth/functions) | Owner | Developer | Read/limited | Service-role in prod only, scoped |
| **Stripe** (payments) | Admin | Analyst / support | None (or read-only) | Restricted key (`rk_`) |
| **Vercel / DO** (hosting) | Owner | Deploy | None | Deploy token |
| **Airtable** (CRM/ops) | Owner | Editor | Editor/commenter (scoped base) | Scoped PAT |
| **Twilio / SendGrid** (comms) | Owner | Send/config | None | Scoped API key |
| **PostHog / Sentry** (analytics/errors) | Owner | Member | Read | Ingest key only |
| **Canva / Drive / Gmail** (content/docs) | Owner | Editor | Editor (scoped) | Draft-only (per Layer 5) |
| **Domain / DNS** | Owner | — | None | None |

*Adjust per venture; the principle — least privilege, role-appropriate, revocable — does not change.*

### Onboarding access checklist (grant)
- [ ] Provision **least-privilege** role per tool from the matrix. `[VENTURE]`
- [ ] Enforce **MFA**; add to **SSO** where available; no shared login. `[VENTURE]`
- [ ] Issue **scoped, named** API tokens (never the Owner's personal key). `[VENTURE]`
- [ ] Record the grant in the **access register** (who / tool / level / date). `[VENTURE]`

### Offboarding access checklist (revoke — within 24h of departure)
- [ ] Revoke every tool account + token the person held. `[VENTURE]`
- [ ] **Rotate any shared secret** they could have seen (§3). `[VENTURE]`
- [ ] Remove from GitHub, Supabase, Stripe, host, Airtable, comms, billing. `[VENTURE]`
- [ ] Transfer ownership of anything they solely owned. `[VENTURE]`
- [ ] Update the access register; confirm removal with a re-audit. `[VENTURE]`

### Checklist (steady state)
- [ ] Access register exists and is current. `[VENTURE]`
- [ ] MFA on every account; no shared logins; break-glass in a vault. `[VENTURE]`
- [ ] Quarterly access review performed and logged. `[VENTURE]`
- [ ] AI agents / service accounts are scoped, revocable, read-first, drafts-only. `[VENTURE]`

---

## Ownership summary — starter vs. venture

- **The starter (`starters/saas`) already enforces the hard security core:** RLS-by-default with the full policy pattern, the anon/service-role split, explicit per-function `verify_jwt` with self-auth exceptions, signature-verified + idempotent webhooks, the `VITE_*` public boundary, the pre-commit secret-guard, versioned append-only migrations, DB CHECK constraints, and CI (lint · typecheck · unit · build · e2e) + Conventional Commits + the definition of done. Inherit these; never weaken them.
- **Every venture must add, before a real-money launch:** typed roles + server-side admin checks, CORS lock + input-validation layer + rate limiting, PII classification/retention/deletion, a **tested** backup restore + uptime monitor + SLO, Sentry + consent-gated PostHog + an audit log, branch protection + supply-chain scanning in CI, a documented rollback path, the **decided compliance regime** (§9), and the **access register + MFA + on/offboarding** discipline (§10).

**If a control is `[STARTER]`, you keep it. If it's `[CONFIG]`, you turn it on. If it's `[VENTURE]`, it's on your pre-launch backlog — and it's on the minimum bar for a reason.**
