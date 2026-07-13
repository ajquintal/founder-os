# Overnight hardening plan (Jul 13, 2026)

Tony is asleep. This session stays alive with the full framework loaded, so I run hardening
cycles back-to-back HERE (no scheduled task / no GitHub needed tonight). Each workflow's
completion re-invokes me; on each re-invocation I: (1) read the finished cycle's findings,
(2) confirm the safe auto-fixes applied cleanly, (3) launch the next cycle with the next
archetype, until the cap. Then I consolidate and (when the device bridge is up / in the morning)
sync everything to the Mac.

**Fix policy (Tony's setting):** auto-apply safe-mechanical fixes; propose substantive ones.

**Archetype rotation (deliberately spanning far from SaaS/EE to stress agnosticism):**
1. ✅ launched — Physical goods: specialty F&B, DTC + wholesale (run_20260713_032623)
2. Two-sided LOCAL SERVICES marketplace (supply/demand, take-rate economics, trust/safety)
3. Regulated FINTECH or health-adjacent service (compliance-gating, licensure, KYC/BSA or HIPAA)
4. B2B SERVICES / agency — project-based, NO product (stresses the software-shaped build layer + fable-brief thin/absent WS-A)
5. CREATOR / media business — content+social as the core revenue engine, non-traditional monetization

**Cap:** ~5 cycles total tonight (cost-bounded). After the last, STOP launching and write
`evals/hardening/OVERNIGHT_SUMMARY.md` consolidating systemic patterns across all runs +
the ranked substantive proposals for Tony's morning review. Do not exceed the cap unattended.

**State check on each re-invocation:** `ls evals/hardening/run_*` to count completed cycles →
decide launch-next vs consolidate.

**Durability (set up Jul 13):** the framework is pushed to GitHub `ajquintal/founder-os` (remote
`origin`, branch `main`). The harness script is committed at `evals/hardening/harness.js`. So even
if this cloud session is lost, nothing is gone — the framework, the harness, and all pushed
findings live on GitHub. On each cycle + at consolidation, commit results and push to `origin main`
(best-effort; credentials come from this session's context — NEVER write the PAT to any file, log,
or commit). If a push can't authenticate (PAT not in context), leave results in the cloud FS and
they get pushed at the morning consolidation instead.

**Tomorrow (needs Tony, in daylight):** flip this into a proper RECURRING nightly task. Options to
decide together: (a) a fresh-session `create_trigger` that clones from GitHub and runs `harness.js`
— needs a secure way to give that session the PAT (not decided tonight, to avoid putting the token
in a trigger prompt); or (b) a GitHub Actions runner. Also: rotate/revoke tonight's PAT.
