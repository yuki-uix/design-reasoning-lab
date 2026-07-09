---
id: OBS-20260709-032-v0-vague-zero-questions-hypothesis-test
experiment: EXP-20260707-005-ambiguity-ladder-v0
timestamp: 2026-07-09T18:10:00+08:00
observer: yuki (run), claude (code tabulation)
---

# v0 generates without questions even on the five-word P-VAGUE prompt

## Fact

The registered P-VAGUE prompt ("Design a habit tracking app."), submitted verbatim to v0 on 2026-07-09 in a fresh session on a different account, produced no clarifying question. The first agent turn is "I'll design a habit tracking app for you. Let me start by understanding the current project structure and generating a design direction in parallel." followed by a "Generated design direction" step and the declaration "The design direction is clear: a clean, minimal habit tracker with a monospace-accented interface, green success accents, a consistency matrix, and streak stats." The run completed in one uninterrupted turn ("Worked for 7m 55s", finished 5:05 PM) with an embedded browser-verification pass ("Tested interactions") and a self-fix of a React hydration mismatch (replacing `Math.random()` seed data with deterministic values).

Under the same prompt, Claude Design raised an 8-question intake form addressing foundational choices — form factor, overall vibe, tracking model, gamification emphasis, fidelity (EXP-001, OBS-20260708-003).

## Interpretation

This is the discriminating condition the pre-registered hypothesis needed, and it resolves in the hypothesis's favor: P-VAGUE is where a tool that asks-under-ambiguity would ask, and v0 did not — it manufactured a "design direction" internally and asserted it as clear. Across the three v0 conditions run (P-FULL, P-NO-AUDIENCE, P-VAGUE), question count is uniformly zero while Claude Design's is uniformly nonzero (7/6/8), so the elicitation contrast now looks like a product-level policy difference, not an ambiguity response. Note the asymmetric phrasing of v0's clear-direction claims: on the styled briefs it read the direction from the prompt; here it generated one and then called it clear. Alternatives: different account and later access time than the other runs; n=1 per condition; v0 might ask under prompts that are ambiguous in other ways (e.g. contradictory constraints) rather than merely sparse.

## Evidence

- `evidence/EXP-20260707-005-ambiguity-ladder-v0/v0-p-vague-conversation.png`
- `evidence/EXP-20260707-005-ambiguity-ladder-v0/v0-p-vague-conversation-01.png`
- `evidence/EXP-20260707-001-ambiguity-ladder/p-vague-question.png` (Claude Design contrast)

## Confidence and limitations

High for the zero-question fact (prompt bubble and opening turn captured together; run was a single turn). The middle of the process log was not captured. Single run; the account differs from the other two v0 runs, though an account change is unlikely to explain elicitation policy.

## Follow-up

P-NO-CONTENT and P-NO-STYLE would complete the ladder but are now credit-blocked; the ladder's discriminating endpoints (P-FULL, P-VAGUE) are both observed.
