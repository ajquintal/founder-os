export const meta = {
  name: 'founder-os-hardening-run',
  description: 'Stress-test Founder OS: invent a venture in a chosen archetype, run the whole OS on it (all 15 domains, reading the real skill files), adversarially audit the result against the OS\u2019s own promises, then apply safe fixes + propose substantive ones.',
  phases: [
    { title: 'Invent', detail: 'invent a concrete venture in the target archetype' },
    { title: 'Construct', detail: 'run the OS end-to-end on it (concept \u2192 gtm \u2192 build \u2192 ops \u2192 fable-brief)' },
    { title: 'Audit', detail: 'adversarial panel grades completeness/agnosticism/guardrails/buildability/framework-defects' },
    { title: 'Synthesize', detail: 'dedup, apply safe fixes, propose substantive, write findings + ledger' },
  ],
}

const REPO = '/home/claude/founder-os'
const runDir = args.runDir
const archetype = args.archetype
// Fail loud if config didn't arrive. In a scheduled/headless run on 2026-07-13
// (run_20260713_181052), Workflow `args` did NOT propagate into this script: the invent
// agent silently freelanced the wrong archetype and wrote to the wrong path. Workflow
// scripts have no filesystem access, so when args are missing the only reliable fix is to
// instantiate a run-specific copy of this file with runDir/archetype hardcoded. This guard
// turns that silent failure into an immediate error instead of burning a full ~12-agent run.
if (!runDir || !archetype) {
  throw new Error(
    'founder-os hardening harness: runDir and archetype are REQUIRED but missing ' +
    '(runDir=' + JSON.stringify(runDir) + ', archetype=' + JSON.stringify(archetype) + '). ' +
    'Pass them via Workflow args {runDir, archetype}, or run a run-specific copy with them ' +
    'hardcoded. NOTE: scheduled/headless sessions in this environment did not reliably ' +
    'propagate Workflow args — prefer a hardcoded run-specific instantiation there.'
  )
}

const FINDINGS_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    findings: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          severity: { type: 'string', enum: ['critical', 'high', 'medium', 'low'] },
          domain: { type: 'string', description: 'which of the 15 domains / which skill this concerns' },
          file: { type: 'string', description: 'repo-relative file the defect lives in, e.g. skills/finance-ops/references/method.md; or "output" if it is only an output-quality issue' },
          defect: { type: 'string', description: 'the specific problem' },
          evidence: { type: 'string', description: 'the exact text/line or output passage that shows it' },
          proposed_fix: { type: 'string', description: 'the minimal concrete fix' },
          fix_class: { type: 'string', enum: ['safe-mechanical', 'substantive'], description: 'safe-mechanical = typo/wording/count/stale-label/consistency with no behavior change; substantive = changes meaning, instructions, or content' },
        },
        required: ['severity', 'domain', 'file', 'defect', 'proposed_fix', 'fix_class'],
      },
    },
    summary: { type: 'string' },
  },
  required: ['findings', 'summary'],
}

const LOAD = `Always first read ${REPO}/founder-profile/PROFILE.md and ${REPO}/founder-profile/guardrails.md so you honor Tony's standards, voice, and guardrails (drafts-only; no spend; secrets are names-only; no medical claims; human-gate irreversible actions).`

phase('Invent')
const venture = await agent(
  `You are inventing a realistic test venture to stress-test an industry-agnostic "Founder OS". ${LOAD}
TARGET ARCHETYPE (invent within this, do not drift to software): ${archetype}
Invent ONE concrete, specific venture: a name, the exact product line, the customer, the business model and how it makes money, rough unit economics (price, COGS, channels), geography, and the realistic regulatory/operational surface (e.g. food safety, labeling, lease, suppliers). Make it specific enough that every business function can be worked on. Keep it grounded and ordinary \u2014 a plausible real business, not a moonshot.
Write the full venture brief to ${runDir}/00-venture-idea.md. Return a tight 150-word summary of the venture (name, model, economics, regulatory surface) that downstream builders will use.`,
  { label: 'invent-venture', phase: 'Invent' }
)

phase('Construct')
const concept = await agent(
  `You are exercising the Founder OS CONCEPT skills on a venture, to test whether the skills produce a complete, correct concept package for THIS venture, whatever its archetype (this run's archetype: ${archetype}). ${LOAD}
Read and faithfully FOLLOW these skill files (each has SKILL.md + references/method.md): ${REPO}/skills/stress-test, ${REPO}/skills/market-scan, ${REPO}/skills/offer-architect, ${REPO}/skills/opportunity-size, ${REPO}/skills/go-no-go. Run them in sequence on the venture below. Use web knowledge for realistic market/economics reasoning but do not fabricate precise citations.
VENTURE: ${venture}
Write the combined concept package (stress-test verdict, market scan, offer + economics, sizing, go/no-go) to ${runDir}/01-concept.md.
Return: a 200-word summary of the concept package PLUS a bulleted list of "FRICTION" \u2014 every place a skill's instructions were unclear, assumed software/SaaS/subscriptions, assumed a digital product, or otherwise did not fit this venture's archetype (${archetype}). Be specific with skill name + what broke.`,
  { label: 'construct-concept', phase: 'Construct' }
)

const [gtm, buildEng, ops] = await parallel([
  () => agent(
    `Exercise the Founder OS GO-TO-MARKET + BRAND + CONTENT skills on the venture, testing fit for THIS venture (archetype: ${archetype}). ${LOAD}
Read and FOLLOW: ${REPO}/skills/positioning, ${REPO}/skills/brand-design, ${REPO}/skills/gtm-marketing, ${REPO}/skills/content-engine, ${REPO}/skills/social-media (SKILL.md + references/method.md each). Also read ${runDir}/01-concept.md for the offer/positioning inputs.
VENTURE: ${venture}
Write the GTM package (positioning, brand direction + design tokens, GTM plan, content system, social plan) to ${runDir}/02-gtm.md.
Return a 150-word summary PLUS a "FRICTION" bullet list: every instruction that leaked SaaS/subscription/B2B assumptions, or didn't fit this venture's archetype (${archetype}). Skill name + specific issue.`,
    { label: 'construct-gtm', phase: 'Construct' }
  ),
  () => agent(
    `Exercise the Founder OS PRODUCT/BUILD + ENGINEERING skills on the venture. The point is to see how the build layer handles THIS venture's product/delivery shape (physical, service, marketplace, or software) per its archetype (${archetype}) — starting from buy-vs-build-vs-none, never assuming a custom app. ${LOAD}
Read and FOLLOW: ${REPO}/skills/product-spec, ${REPO}/skills/venture-bootstrap (SKILL.md + references/method.md), and the docs ${REPO}/docs/engineering-backbone.md + ${REPO}/docs/tool-mcp-stack.md. Also read ${runDir}/01-concept.md.
VENTURE: ${venture}
Write the build/engineering package (what software is actually needed vs bought off-the-shelf like Shopify; a product-spec for whatever custom surface exists; the engineering/security posture that applies; the tool/MCP stack) to ${runDir}/03-build-eng.md.
Return a 150-word summary PLUS a "FRICTION" bullet list: every place the build layer ASSUMED a custom SaaS app, RLS/Supabase, subscriptions, or otherwise didn't gracefully handle this venture's real build shape (buy-vs-build-vs-none per ${archetype}). Skill/doc name + specific issue.`,
    { label: 'construct-build', phase: 'Construct' }
  ),
  () => agent(
    `Exercise the Founder OS OPERATIONS skills on the venture: finance, sales/CRM, legal, org/roles, analytics, support. Test fit for THIS venture (archetype: ${archetype}). ${LOAD}
Read and FOLLOW: ${REPO}/skills/finance-ops, ${REPO}/skills/sales-crm, ${REPO}/skills/legal-pack, ${REPO}/skills/org-roles, ${REPO}/skills/analytics-stack, ${REPO}/skills/support-success (SKILL.md + references/method.md each). Also read ${runDir}/01-concept.md.
VENTURE: ${venture}
Write the operations package (finance model on THIS archetype's economics; CRM/pipeline fit to the venture's sales motion; the legal/contract set the model actually needs; org/roles; analytics; support) to ${runDir}/04-ops.md.
Return a 150-word summary PLUS a "FRICTION" bullet list: every instruction that assumed a default revenue model (e.g. SaaS/subscription, deferred SaaS revenue, a digital-only funnel) or otherwise didn't fit this venture's archetype (${archetype}). Skill name + specific issue.`,
    { label: 'construct-ops', phase: 'Construct' }
  ),
])

const fableBrief = await agent(
  `You are exercising the Founder OS CAPSTONE skill (fable-brief), which is supposed to turn a whole validated venture into ONE phased, PR-by-PR build brief that a coding agent (Fable) executes with zero guesswork, and to PROVE via a coverage matrix that no business function was dropped. ${LOAD}
Read and FOLLOW ${REPO}/skills/fable-brief/SKILL.md + ${REPO}/skills/fable-brief/references/method.md. Consume the constructed venture: ${runDir}/00-venture-idea.md, 01-concept.md, 02-gtm.md, 03-build-eng.md, 04-ops.md.
VENTURE: ${venture}
Produce the master build brief (workstream map incl. thin/absent product workstream for a mostly-off-the-shelf business, sequencing, representative PRs/config-PRs, the coverage matrix mapping all 15 domains to a disposition, and the consolidated human-gate/secrets/connect-these/compliance lists). Write it to ${runDir}/05-fable-brief.md.
Return a 200-word summary PLUS a "FRICTION" bullet list: every place the capstone forced a software/SaaS shape, failed to enumerate a domain (especially content/social, legal, or a physical-ops workstream), or would make Fable guess. Specific.`,
  { label: 'construct-fable-brief', phase: 'Construct' }
)

phase('Audit')
const auditContext = `The Founder OS constructed a full business for this venture. Artifacts are in ${runDir}/ (00-venture-idea.md, 01-concept.md, 02-gtm.md, 03-build-eng.md, 04-ops.md, 05-fable-brief.md). The 15-domain contract is defined in ${REPO}/FOUNDER_OS_MASTER_ARCHITECTURE.md. The skills live in ${REPO}/skills/<name>/ and docs in ${REPO}/docs/. ${LOAD}
You are an ADVERSARIAL auditor. Your job is to FIND DEFECTS, not to praise. Be skeptical and specific. Every finding must cite a concrete file (repo-relative) or output passage, and give a minimal fix. Classify each fix as safe-mechanical (typo/wording/count/stale-label/consistency, no behavior change) or substantive (changes meaning/instructions/content). VENTURE: ${venture}`

const audits = await parallel([
  () => agent(
    `${auditContext}
LENS = COMPLETENESS. Cross-check the constructed business against all 15 domains in FOUNDER_OS_MASTER_ARCHITECTURE.md. For each domain: is it present AND substantive in the artifacts, or missing/thin/hand-waved? Flag any domain that the OS failed to produce real output for, and any skill whose output is a hollow template rather than a filled deliverable.`,
    { label: 'audit-completeness', phase: 'Audit', schema: FINDINGS_SCHEMA }
  ),
  () => agent(
    `${auditContext}
LENS = INDUSTRY-AGNOSTICISM (the most important lens \u2014 this run's archetype is: ${archetype}). Hunt for ANY assumption that leaked from SaaS / subscriptions / health / Executive Edge into either the outputs OR the skill instructions themselves. Examples: assuming recurring/subscription revenue, deferred SaaS revenue recognition, RLS/Supabase/edge-functions as the only build path, a digital-only funnel, "MRR/churn" as the default KPI, ToS as the primary customer contract instead of sale-of-goods. For each leak, cite the skill file where the assumption is baked in and propose an agnostic fix.`,
    { label: 'audit-agnosticism', phase: 'Audit', schema: FINDINGS_SCHEMA }
  ),
  () => agent(
    `${auditContext}
LENS = GUARDRAILS. Verify the constructed business honors, and the skills instruct: drafts-only (nothing sent/published/filed); no spend without approval; secrets as names-only; no unlicensed legal/medical/financial claims; irreversible actions human-gated; professional-review flags (CPA/attorney) at judgment points. Flag any output that violates a guardrail and any skill whose instructions fail to enforce one.`,
    { label: 'audit-guardrails', phase: 'Audit', schema: FINDINGS_SCHEMA }
  ),
  () => agent(
    `${auditContext}
LENS = BUILDABILITY (role-play Fable). Read ${runDir}/05-fable-brief.md as if you are the coding/execution agent who must build this venture from it with ZERO ability to ask questions. Walk it top to bottom. Every point where you would have to GUESS a decision, where a value/spec/owner is missing, where a PR/config-PR lacks acceptance criteria or a data model or a gate, or where two parts contradict \u2014 is a finding. Also flag anything that assumes a custom app when this business is mostly off-the-shelf (does the brief handle a thin/absent product workstream cleanly?). Map findings to fable-brief SKILL.md/method.md where the template is the cause.`,
    { label: 'audit-buildability', phase: 'Audit', schema: FINDINGS_SCHEMA }
  ),
  () => agent(
    `${auditContext}
LENS = FRAMEWORK DEFECTS (the meta-auditor that most directly hardens the OS). For each skill actually exercised (concept, gtm, brand, content, social, product-spec, engineering-backbone, tool-mcp-stack, finance, sales-crm, legal, org, analytics, support, fable-brief): read its SKILL.md + references/method.md and find internal contradictions, instructions that don't compose with the skills they claim to compose with, stale/incorrect cross-references, count/label drift, broken load-order, or gaps a user would hit. Cite file + the exact text. This lens is about the INSTRUCTIONS, not the outputs.`,
    { label: 'audit-framework', phase: 'Audit', schema: FINDINGS_SCHEMA }
  ),
])

phase('Synthesize')
const allFindings = audits.filter(Boolean).flatMap((a) => a.findings || [])
const synthesis = await agent(
  `You are the synthesizer for a Founder OS hardening run. Here are ${allFindings.length} raw findings from 5 adversarial auditors (JSON):
${JSON.stringify(allFindings)}

Do the following, in order:
1. DEDUP + CLUSTER: merge duplicates/near-duplicates; keep the sharpest wording; group by the skill/file they touch. Drop any finding that is actually wrong on re-read (an auditor over-reaching) \u2014 note how many you dropped and why.
2. RANK by severity (critical \u2192 low) and by whether it recurs across lenses.
3. APPLY THE SAFE FIXES: for every surviving finding with fix_class = "safe-mechanical" (typos, wording, count/label drift, stale references, consistency), APPLY the edit directly to the repo file using your Edit tool. Only safe-mechanical, and only edits under ${REPO}/skills, ${REPO}/docs, ${REPO}/commands, ${REPO}/README.md, ${REPO}/skills/README.md, ${REPO}/FOUNDER_OS_MASTER_ARCHITECTURE.md. Never delete files, never large rewrites. Keep a log of each file+change you applied.
4. Do NOT apply substantive findings \u2014 write them up as proposals with the exact suggested change so Tony can approve.
5. WRITE ${runDir}/findings.md : a clean report \u2014 headline, counts (by severity, #auto-fixed, #proposed, #dropped), then two sections "AUTO-FIXED (safe)" and "PROPOSED (needs Tony's approval)", each finding with domain/file/defect/evidence/fix.
6. APPEND one row to ${REPO}/evals/HARDENING_LEDGER.md (create it with a header if missing): date/runId, the ACTUAL archetype of THIS run (concisely summarize: ${archetype}), venture name, #findings by severity, #auto-fixed, #proposed, and the single most important systemic issue. Keep the row concise.
Return: the headline counts, the top 5 most important findings (with file), a list of exactly which files you auto-edited, and the one systemic weakness this run exposed in the OS.`,
  { label: 'synthesize', phase: 'Synthesize' }
)

return {
  runDir,
  totalRawFindings: allFindings.length,
  synthesis,
}
