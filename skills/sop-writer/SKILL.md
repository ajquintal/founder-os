---
name: sop-writer
description: >-
  Turn any repeatable task into a standard operating procedure a cheaper model, a junior
  operator, or Cowork can run unattended — trigger, inputs, numbered steps, decision points,
  guardrails, output, and a check. Use to systemize recurring work so it runs without the
  founder. Triggers: "write an SOP", "document this process", "make this repeatable",
  "how do I hand this off", "turn this into a procedure", "systemize this".
---

# /sop-writer — Standard Operating Procedure Writer

Converts a repeatable task into a finished SOP that runs without Tony. The direct counter to the
founder-dependence failure mode: if only Tony can run it, it isn't a system yet.

## Load first
1. `founder-profile/PROFILE.md` — failure modes (founder-dependence above all).
2. `founder-profile/operating-playbooks.md` — SOPs (#6), AI-native conventions + E-Myth (#8/lenses).
3. `founder-profile/delegation-protocol.md` — the four gates + unattended behavior.
4. `founder-profile/guardrails.md` — the hard rules to bake into every SOP as stop-conditions.
5. Active `ventures/<slug>/venture-context.md` — venture systems, tools, and guardrails (e.g. LYV firewall).

## Method (full detail + worked example in `references/method.md`)
1. Capture the task: name it, state the trigger and the one-line outcome. Reject fuzzy scope.
2. List inputs & access: data, files, tools, permissions — credentials by reference, never values.
3. Write numbered steps: one imperative action each, no tacit knowledge, concrete for a no-context runner.
4. Mark decision points: state the condition, each branch, and the default; ambiguity → safest reversible branch.
5. Embed guardrails as stop-conditions: which of the four gates the task can hit + venture guardrails.
6. Define the output: the exact finished artifact + where it lands.
7. Add the check: a verification the runner performs before declaring done. No check → not done.
8. Founder-independence test: re-read as a zero-context runner; extract any founder step into an escalation.

## Output contract — a filled SOP template
```
SOP:        <name>
OWNER:      <role that runs it — model / Cowork / junior operator, not Tony>
TRIGGER:    <event or schedule that starts it>     CADENCE: <one-off | daily | weekly | on-trigger>
OUTCOME:    <the finished thing produced, one line>
INPUTS & ACCESS:
  - <data / file / tool / permission>              (credentials by reference only)
STEPS:
  1. <imperative action>
  2. DECISION: if <condition> → <branch>; else → <default>
  3. ...
GUARDRAILS (stop + escalate if hit):
  - <gate this can touch: spend / commit / external-send / Tony-only> → stop, draft, escalate
  - <venture guardrail: LYV firewall / drafts-only / no medical claims / secrets by reference>
OUTPUT:     <exact artifact> → <where it lands>
CHECK (before done):
  - [ ] <verification 1>    - [ ] <verification 2>
ESCALATE TO TONY WHEN: <≤3 exception conditions, each ≤15 min>
```

## Rules
- Write for the cheapest capable runner, not for Tony. A step that needs founder judgment is a defect — pull it into an escalation.
- Every SOP ends in a check; no check = not done (evals travel with the asset).
- Encode the four gates + the venture's guardrails as hard stops. A runner never spends, sends, commits, or echoes a secret on its own.
- One action per step, imperative, no tacit knowledge. Ambiguity resolves to the safest reversible branch.
- Keep it the simplest version that runs — don't script branches the task never hits (overbuild guard).

## Examples & evals
- `references/method.md` — full method + a worked SOP on Executive Edge.
- `evals/evals.md` — 3 cases (clean delegable task, money-gate task, irreducible founder judgment).
