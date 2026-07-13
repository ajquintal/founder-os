# /product-spec — Full method & worked example

One level deep; does not fan out further. Lenses: Christensen Jobs-To-Be-Done (spec the progress the user is trying to make, not a feature list) + the AI-native build conventions (`operating-playbooks.md` §8: done = shipped + verified, tests travel with the asset, surgical/reversible, secrets in env).

## Section-by-section template

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

**8. Non-goals + rollout.** Explicit out-of-scope list (the overbuild guard, written down). Rollout: feature flag? migration order? Definition of done = PR + merged + verified in prod; PR body = Problem→Root cause→Fix→Verification; rollback = revert migration + flag off.

## Worked example (abridged)

**Input:** spec a "referral unlock" — an existing subscriber shares a code; a new signup using it gives both a free month.

- **Problem / metric:** subscribers have no incentive to invite; metric = % of new signups attributed to a referral code (target ≥15%).
- **Stories:** subscriber generates a code; invitee redeems at signup; both credited.
- **AC (sample):** *Given a valid unused code, When an invitee signs up with it, Then both accounts receive one credit and the code is marked redeemed.*
- **Data model:** `referral` + `referral_credit` tables with owner-scoped RLS; redeem runs in a `service_role` edge function, idempotent on the code.
- **Edge cases:** self-referral blocked, reused code rejected, expired code, concurrent redeem (idempotency key).
- **Test plan:** unit (code gen/uniqueness), integration (RLS denial + idempotent redeem), e2e (invite → signup → both credited).
- **Non-goals:** multi-tier rewards, dashboards, email automation — later. **Done** = merged + a real test-mode referral credited in prod.
