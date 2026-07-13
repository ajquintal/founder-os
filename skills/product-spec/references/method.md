# /product-spec — Full method & worked example

One level deep; does not fan out further. Lenses: Christensen Jobs-To-Be-Done (spec the progress the user is trying to make, not a feature list) + the AI-native build conventions (`operating-playbooks.md` §8: done = shipped + verified, tests travel with the asset, surgical/reversible, secrets in env).

## Section-by-section template

**0. Build shape (read first).** From the venture context / the `/venture-bootstrap` buy-vs-build-vs-none decision, name whether this is a **custom-software** build or an **off-the-shelf/no-code** assembly. Steps 1–3 and 6–8 below are identical either way. Steps 4–5 branch: custom uses the data-model + interface-surface templates below; off-the-shelf uses the configuration-spec variant (after §8). Never manufacture an RLS/edge-function spec for a venture that is configuring a bought platform.

**1. Problem & success metric.** Problem in one sentence (the job + the pain today). Success metric = one measurable number (activation %, task time, conversion, error rate). If none can be named, the feature isn't ready to spec — stop.

**2. User stories.** `As <role>, I want <capability>, so that <outcome>.` Roles come from the venture context (e.g., admin / coach / provider / client), never invented. 3–7 stories for a feature; if it needs more, the slice is too big.

**3. Acceptance criteria (Given/When/Then).** Each story → one or more criteria:
```
Given <precondition>, When <action>, Then <observable result>.
```
Each must be checkable by a test. Ban vague verbs ("handles", "supports") — state the observable result.

**4. Data model.** For each entity: fields (name · type · nullable · default), relationships (FKs), and the **ownership rule / RLS policy** for every user-owned table (who can SELECT/INSERT/UPDATE/DELETE). Follow the repo's migration naming (`<timestamp>_<slug>.sql`). Example:
```
table: referral (id uuid pk, owner_id uuid fk→profiles, code text unique,
                 invitee_email text, status text default 'pending', created_at timestamptz)
RLS: owner_id = auth.uid() for SELECT/INSERT/UPDATE; no DELETE; service_role bypass for the redeem path.
```

**5. Interface surface.** Each endpoint/function/component: method + path or name, input schema, output schema, auth requirement (JWT? role? `verify_jwt`?), and error shapes (status + body). Note any edge function that must do its own authz.

**6. Edge cases & failure modes.** Enumerate: empty/oversized/malformed input, unauthorized vs forbidden, duplicate/idempotency, concurrent writes, external-service timeout/failure, rate limits, partial failure + rollback.

**7. Test plan (AC → test).** A table mapping every acceptance criterion to a test at the right level:

| Acceptance criterion | Test level | Test name / assertion |
|---|---|---|
| valid referral creates one pending row | unit | `referral.create` returns row, status='pending' |
| non-owner cannot read another's referral | integration | RLS denies SELECT for a different uid |
| subscribe → gated page unlocks | e2e | playwright: pay(test) → 200 on the gated route |

**8. Non-goals + rollout.** Explicit out-of-scope list (the overbuild guard, written down). Rollout: feature flag? migration order? (custom) or the config-change / undo path (off-the-shelf). Definition of done = merged + verified in prod (custom) or live + one real test-mode transaction on the platform (off-the-shelf); PR body = Problem→Root cause→Fix→Verification.

## Off-the-shelf configuration spec (variant of §4–5)

When the `/venture-bootstrap` decision was **off-the-shelf/no-code**, §4–5 are replaced by a configuration spec — everything a builder needs to stand the platform up with no further questions:

- **Platform + objects.** The chosen platform (e.g., Shopify, Cal.com, Square, Airtable) and its objects/collections you'll configure: products/services, prices, variants, availability, customer records. The real catalog, not placeholders.
- **Settings + permissions.** The concrete settings to set (checkout, shipping/tax, plan/tier), and the admin/permission model (least-privilege roles, MFA on the owner account).
- **Automations / flows.** The no-code automations (e.g., abandoned-cart email, booking confirmation, order→CRM sync) — trigger → action, stated testably.
- **Integrations.** The native connectors to wire (email/CRM/analytics/payments) and the data that crosses each. Flag any gap that would force a thin custom edge function (the hybrid case) — don't assume one.
- **Data ownership + export.** Where the system-of-record data lives, the export/backup path, and confirmation the account is venture-owned (not personal). Security posture = vendor-config (least-privilege, MFA, DPA where PII flows), not RLS/`verify_jwt`.
- **Acceptance = manual QA.** Each acceptance criterion maps to a manual-QA step; the capstone step is one real (test-mode) order/booking end-to-end on the live platform.

## Worked example (abridged)

### Custom-software build

**Input:** spec a "referral unlock" — an existing subscriber shares a code; a new signup using it gives both a free month.

- **Problem / metric:** subscribers have no incentive to invite; metric = % of new signups attributed to a referral code (target ≥15%).
- **Stories:** subscriber generates a code; invitee redeems at signup; both credited.
- **AC (sample):** *Given a valid unused code, When an invitee signs up with it, Then both accounts receive one credit and the code is marked redeemed.*
- **Data model:** `referral` + `referral_credit` tables with owner-scoped RLS; redeem runs in a `service_role` edge function, idempotent on the code.
- **Edge cases:** self-referral blocked, reused code rejected, expired code, concurrent redeem (idempotency key).
- **Test plan:** unit (code gen/uniqueness), integration (RLS denial + idempotent redeem), e2e (invite → signup → both credited).
- **Non-goals:** multi-tier rewards, dashboards, email automation — later. **Done** = merged + a real test-mode referral credited in prod.

### Off-the-shelf assembly

**Input:** spec the "buy a vessel, subscribe to refills" storefront for a physical home-fragrance brand (build shape from `/venture-bootstrap` = off-the-shelf → Shopify + a subscription app).

- **Problem / metric:** turn a one-off purchase into recurring revenue; metric = % of vessel buyers who attach a refill subscription (target ≥30%).
- **Stories:** shopper buys a vessel; attaches a refill cadence at checkout; manages/cancels the subscription self-serve.
- **AC (sample):** *Given a vessel in cart, When the shopper selects "subscribe to refills," Then a subscription is created at the chosen cadence and the first order is placed.*
- **Configuration schema:** Shopify products (vessel, refill SKUs, prices, variants); the subscription app's selling-plan (cadences, discount); customer + subscription objects owned in Shopify, exportable via admin.
- **Settings + automations:** checkout + shipping/tax settings; Klaviyo flows (welcome, upcoming-charge, failed-payment) as trigger→action; order→analytics via the GA4 connector.
- **Integrations:** Shopify Payments (test mode), Klaviyo, GA4 — all native connectors; no custom glue needed → no edge function.
- **Edge cases:** failed refill charge, subscription cancel/skip, out-of-stock refill, duplicate webhook from the subscription app.
- **Test plan (manual QA):** place one real test-mode subscription order end-to-end on the live store; confirm the subscription record, the first order, and the welcome flow fire.
- **Non-goals:** custom subscriber portal, bespoke bundling logic — later, and only as a thin slice if a real gap forces it. **Done** = live store + one test-mode subscription verified. Security = vendor-config (least-privilege staff accounts, MFA, DPA with Shopify/Klaviyo).
