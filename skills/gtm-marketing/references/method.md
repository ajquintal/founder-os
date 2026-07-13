# /gtm-marketing — Full method & worked example

One level deep; composes the Launch skills but does not fan out further into them (it cites or runs them). Lenses: **Dunford** (positioning → message-market fit; don't re-derive it), **Christensen JTBD** (the message per segment = the progress the buyer hires the product for), **Hormozi** (offer economics set the affordable CAC), **Brunson** (funnel + launch sequencing), **Skok** (CAC/LTV, payback, channel economics + attribution), **Gerber/E-Myth** (marketing as a repeatable calendar/system, not founder heroics), **Decision Standards** (the demand gate, $0-until-proven, dated kills, one primary bet).

The job: turn a pile of individually-correct Launch assets into **one motion with a budget behind it**. The failure this prevents is a founder with good positioning, a good funnel, and good content who still can't answer "which channel, what spend, what CAC, what next" — and who overbuilds the machine instead of booking the call.

---

## Step 1 — Set the motion
A "motion" is the dominant way the venture converts a stranger into revenue. Pick the **primary** and name the **secondary** — most ventures are one plus a supporting flywheel. Decide on ACV × sales-complexity × time-to-value:

**Motion decision matrix**
| If… | Primary motion | Looks like |
|---|---|---|
| High ACV (≈$15k+), considered/committee buy, founder's warm network is the wedge | **Sales-led** | Warm outbound → booked calls → proposals/contracts |
| Free/low-friction entry, fast time-to-value, self-serve checkout, low ACV/high volume | **Product-led (PLG)** | Funnel → activation → in-product expansion |
| Identity/trust-driven category, word-of-mouth compounds, the audience congregates | **Community-led** | Owned audience → content → referrals → partnerships |
| Reach the buyer through operators/resellers who already own the relationship | **Channel/partner-led** | Recruit + enable partners; rev-share |

**The default posture (Tony's profile):** whatever the eventual motion, start **warm-outbound + owned-audience, founder-led, at $0** to prove demand (operating-playbooks GTM #4: sell before you build; highest-EV channel first). Layer product-led/paid **only after** demand is evidenced. State the **phase gate** explicitly: *prove <X> before scaling <Y>.* A plan that opens with a paid budget on an unproven offer is the "architecture before revenue" tell — hold spend and say so.

## Step 2 — Message-market fit per segment
Pull the segments and pillars from `/positioning` (run it first if absent — do not invent pillars). For each segment write one row: **who → the one message (a pillar, in their words) → the proof → the single channel they already live on.** One message per segment, one anchor channel per segment. If two segments need opposite messages on the same channel, they are two motions — sequence them, don't blur them.

## Step 3 — Channel portfolio
Assemble from the default set below; keep only what serves the motion. Each channel gets a **role** (acquire / nurture / convert), an **owning skill**, and a **phase** (prove now / scale later). One anchor channel carries the prove phase — resist lighting up six at once (too-many-fronts guard).

**Default channel portfolio (industry-agnostic)**
| Channel | Typical role | Owning skill | Default phase |
|---|---|---|---|
| Warm/direct outbound (founder network, LinkedIn, email) | acquire (sales-led) | this skill + `/lead-response` | prove (first) |
| Owned audience / organic content | acquire + nurture | `/content-engine` → `/content-cadence` | prove |
| Lifecycle email + SMS (owned list) | nurture + convert | this skill (step 5) + `marketing:email-sequence` | prove → scale |
| Referral / affiliate / channel partners | acquire | this skill (step 6) | prove → scale |
| SEO + generative-engine (AI answers) | acquire (compounding) | `/seo-geo` | scale |
| Paid (Meta/Google/LinkedIn) | acquire (scale) | `/paid-ads` | **scale only, post-proof** |
| PR / launch platforms (Product Hunt, press) | awareness + credibility | this skill (step 7) + `/launch-plan` | launch moment |

## Step 4 — Budget + CAC/ROI allocation
Baseline is **$0**. Then anchor everything to the economics from `/offer-architect`:
- **Max CAC** = affordable acquisition cost given margin and the target payback window (Skok). Compute it once; it is the discipline anchor for every paid decision.
- Per channel, fill: stage · budget (0 → $X once proven) · expected CAC · payback/ROI · scale rule · **numeric kill threshold**.
- Warm/owned channels cost founder+AI time, ~$0 cash → they run first and their ROI is effectively unbounded; that is *why* they lead.
- Once demand is proven, allocate roughly **70/20/10** — 70% to the proven channel, 20% to a promising one, 10% experimental — reassessed at the weekly rhythm. Never scale an unproven angle; a losing channel dies at its cap.

## Step 5 — Lifecycle: email + SMS
Owned list is the highest-margin channel; monetize it deliberately. Default stack **SendGrid** (email) + **Twilio** (SMS); if the venture already runs an ESP, use it (the sequences are provider-agnostic). Draft three core sequences (+ transactional triggers):
- **Welcome (0–7 days):** deliver the *fast visible win* immediately, set the relationship, make the first ascension offer. This is where retention is actually won (operating-playbooks #5).
- **Nurture (ongoing):** pillar value → soft offers, segmented by behavior; each email points at one rung.
- **Winback (dormant 30/60/90d):** re-engage, one incentive, then sunset — don't nurture the dead forever.
Every sequence: trigger · message count/cadence · channel · the rung it ascends toward. All **[DRAFT]**, claims-clean, no live-dashboard implication.

## Step 6 — Partnerships / affiliates / referrals
Performance-based before fixed spend. Pick what fits:
- **Customer referral** — existing customers → new ones; reward on the referred customer's *activation* (the fast win), not on signup.
- **Affiliate / creator** — niche creators → tracked-link rev-share; pay on closed revenue.
- **Channel / operator partner** — a partner who owns the relationship runs or resells the offer under guided terms (setup fee + rev-share, or pure rev-share).
Each: structure/terms · the fast visible win it rides on · the trigger to launch it. **LYV firewall: never source partners or leads from LYV relationships.**

## Step 7 — PR / launch
Earned attention, only where it compounds. **Product Hunt** suits product-led/tool launches (a spike of trials + backlinks). **Press/narrative** suits credibility for high-ACV/sales-led motions. Both are *sequenced into* `/launch-plan` (they are launch-moment events, not an always-on channel) and are drafted, never fired. Don't manufacture a launch with nothing behind it.

## Step 8 — Calendar + weekly cadence
Make marketing a system, not heroics (Gerber). Two artifacts:
- **Weekly marketing rhythm:** plan/prioritize the anchor channel → produce the anchor asset + batch outbound → queue lifecycle drafts → measure vs the KPI → feed `/weekly-ops-review`. Owner per slot.
- **Campaign calendar:** month/quarter → theme → the offer/rung pushed → channels engaged. It feeds `/content-cadence` (which runs the steady-state content rhythm) so content and campaigns share one clock.

## Step 9 — Attribution + marketing KPI tree
**Attribution (don't overbuild — complexity-bias guard):** start with self-reported attribution ("how did you hear about us" on the signup/booked-call form) + UTM → GA4 last-touch (+ product analytics like PostHog where it exists). Move to multi-touch **only** when volume makes last-touch lie. 

**Marketing KPI sub-tree:** build the acquisition branch that ladders *into* the venture north-star — never a parallel vanity scoreboard. The marketing north-star is usually **qualified pipeline created / week** ($ and/or booked calls). Inputs: touches→reply rate, reply→booked-call rate, signups/wk, signup→paid conversion (leading); CAC by channel, blended CAC payback (lagging). **Hand this to `/metrics-dashboard`**, which owns the venture north-star: this sub-tree plugs into its "new activated customers/wk" node and its money strip (pipeline $, CAC payback). One tree, two skills, no duplication.

---

## Worked example (abridged) — Executive Edge OS (two-motion)

**Input:** GTM for the live venture in its 90-day B2B sprint (max dollars collected by ~Oct 1; kill any rail with zero booked calls by Aug 3). Prices per venture-context — *evolving, confirm live.*

**1 · Motion.** `PRIMARY: sales-led (warm-outbound-first) · SECONDARY: product-led B2C ladder + content flywheel · PHASE GATE: prove booked calls from warm outbound before any paid spend or PLG scale.` Rationale: B2B ACV $25k–$48k, considered buy, and the wedge into it is Tony's warm network (LinkedIn ~3,217 + the Nov-2025 transformation audience) — that is a sales-led, $0-cash motion. The B2C ladder (freemium labs → $199 → ~$99/mo) is the product-led flywheel that produces proof and pipeline underneath it.

**2 · Message-market fit.** Corporate-cohort buyer → "an execution layer that measurably raises your executives' performance" (proof: the closed-loop protocol↔score↔drift↔adjust + blood+device fusion) → channel: warm LinkedIn/email. Operator (clinic/coach) → "run EE under your brand, we power the loop" → channel: warm + referral. B2C performer → "the operating system for men who refuse to decline" → channel: owned content + freemium. (Pillars pulled from `/positioning`.)

**3 · Channel plan**
| Channel | Role | Motion fit | Owning skill | Phase | Primary metric | Owner |
|---|---|---|---|---|---|---|
| Warm outbound (LinkedIn + email) | acquire | sales-led | this + `/lead-response` | prove (now) | booked calls | Tony/AI |
| Owned content (LinkedIn) | acquire+nurture | both | `/content-engine`→`/content-cadence` | prove | qualified replies, list adds | AI |
| Lifecycle email+SMS (freemium list) | nurture+convert | PLG | this + `marketing:email-sequence` | prove→scale | freemium→$199 conv | AI |
| Referral / operator partners | acquire | channel | this | prove→scale | partner-sourced pipeline | Tony |
| SEO/GEO | acquire | PLG | `/seo-geo` | scale | organic signups + AI citations | AI |
| Paid (Meta/LinkedIn) | acquire | PLG | `/paid-ads` | **scale (locked until proof)** | CPA vs max CPA | AI |
| PR / Product Hunt | awareness | both | this + `/launch-plan` | launch moment | referral signups | AI |

**4 · Budget + CAC/ROI** (baseline **$0 cash**)
| Channel | Stage | Budget now → proven | Expected CAC | Payback/ROI | Scale rule | Kill threshold |
|---|---|---|---|---|---|---|
| Warm outbound | prove | $0 → $0 (founder+AI time) | ~$0 cash | immediate on close | raise cadence if reply→call clears target | **0 booked calls by Aug 3 → kill rail** (context) |
| Owned content | prove | $0 → $0 | ~$0 cash | compounds | double down on best pillar | best pillar < list-add target in 60d |
| Lifecycle email/SMS | prove | $0 (owned list) → tooling only | ~$0 | high (owned) | expand segments on lift | sequence < control after 2 sends |
| Referral/operators | prove | $0 → 15% first-yr rev-share (pay-on-close) | pay-on-close only | positive by design | recruit more operators once first closes | no partner pipeline in 90d |
| Paid Meta/LinkedIn | scale (locked) | $0 → small test only | max CPA = margin×payback [compute at unlock; illustrative] | ≤ offer-architect payback | scale winner per `/paid-ads` | spend cap hit → kill angle |
| SEO/GEO | scale | $0 → content time | organic | long, compounding | widen cluster once ranking | beachhead flat 2 quarters |

Once proven: 70% the channel that booked the calls / 20% lifecycle+referral / 10% a paid test. Max CPA is computed from margin at unlock — never a guess, and no spend without approval.

**5 · Lifecycle** (default SendGrid/Twilio; EE runs **Resend** live for email — use it; Twilio for SMS) — all **[DRAFT]**
| Sequence | Trigger | Msgs/cadence | Channel | Goal/ascension |
|---|---|---|---|---|
| Welcome | freemium signup / labs upload | 4 over 7d | email + 1 SMS | deliver first Edge Score win → $199 unlock |
| Nurture | on list, unconverted | weekly, behavior-segmented | email | pillar value → $199 → ~$99/mo |
| Winback | dormant 30/60/90d | 3 touches | email + 1 SMS | re-activate or sunset |
No medical claims; no "physician review"/"medical team"; never imply a live cohort dashboard.

**6 · Partnerships/referral**
| Program | Partner type | Structure | Built on |
|---|---|---|---|
| Customer referral | existing members | reward on referred member's activation | the fast Edge Score win |
| Operator/channel | clinics, coaches | 15% first-year rev-share, or license $25k+$2k/mo / $10k+15% [confirm live] | operator runs EE under guided terms |
| Affiliate | niche performance creators | tracked-link rev-share, pay-on-close | content proof |
LYV firewall: none sourced from LYV.

**7 · PR/launch.** Product Hunt for the B2C app at the $199 open-cart; press angle "the operating system for the body" for credibility on the B2B pitch — both sequenced into `/launch-plan`, drafted, earned only.

**8 · Calendar/cadence.** Weekly: Mon prioritize the outbound + anchor-content batch → produce → queue lifecycle drafts → Fri measure vs KPI → into `/weekly-ops-review`. Campaign calendar this sprint: Month 1 B2B cohort outbound push → Month 2 $199 open-cart (B2C proof) → Month 3 operator-license recruitment. Feeds `/content-cadence`.

**9 · Attribution + KPI tree.** Self-report on the booked-call + signup forms + UTM→GA4 last-touch + PostHog for the product funnel; no multi-touch yet. Marketing north-star = **qualified pipeline created / wk** (B2B $ + booked calls). Inputs: warm-touch→reply, reply→call, freemium signups/wk, signup→$199 (leading); CAC/channel, blended payback (lagging). **Hands to `/metrics-dashboard`**: plugs into its `new activated members/wk` node and money strip (`B2B cohort pipeline $`, `CAC payback`) under the venture north-star **WAPA** — no second scoreboard.

**Single metric it lives on now:** booked qualified B2B calls (the Aug 3 kill gate). **Demand gate:** B2C partially proven (live revenue); B2B unproven → $0 paid, warm-outbound-first. **Failure-mode flags:** resist building the full lifecycle/PR/paid machine before the outbound books calls (overbuild + architecture-before-revenue).

**Guardrails applied:** drafts only; $0 until proven; LYV firewall on audiences/partners; no medical claims / no "physician review"; no live-dashboard implication pre-contract; prices "evolving — confirm live".

---

## Cross-venture agnosticism check — Ethos Hospitality (non-wellness)
Runs clean with no clinical/SaaS leakage: **motion** = demand/experience-led + local (not PLG — you don't "free-trial" a restaurant); **channels** = local partnerships (hotels, concierges), events/private hire, reservation platforms (Resy-class), an owned loyalty list, local press/PR, referrals; **budget/CAC** = cost per guest acquired, payback measured in covers/repeat visits — **not** a subscription CAC and **not** the 10×-AOV funnel heuristic; **lifecycle** = reservation reminders + loyalty (still SendGrid/Twilio), no medical claims (N/A here) but food-safety/liquor compliance respected; **KPI tree** feeds the venture's contribution-margin north-star, not WAPA. Confirms the method reasons from the active context, not from Executive Edge.

## Anti-patterns (flag these)
- A paid budget on an unproven offer (violates $0-until-proven; the architecture-before-revenue tell).
- Re-authoring positioning, pillars, or economics instead of pulling them from the owning skill (duplication → message drift).
- Six channels lit at once instead of one anchor + highest-EV-first (too-many-fronts).
- Overbuilding multi-touch attribution or the full lifecycle/PR stack before volume/demand justifies it (complexity bias; delays the call that actually closes).
- A marketing KPI tree that doesn't ladder into the venture north-star (vanity reach).
- Implying a live cohort dashboard, or making a medical/legal claim, to make the pitch land.
- Auto-sending lifecycle emails/SMS or publishing PR without Tony's approval.
