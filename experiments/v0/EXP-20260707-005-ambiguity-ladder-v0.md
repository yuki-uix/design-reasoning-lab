---
id: EXP-20260707-005-ambiguity-ladder-v0
product: v0
date: 2026-07-07
researcher: yuki
status: planned
protocol: protocols/behavioral-observation-v1.md
research_question: research/questions/RQ-001-intent-to-artifact.md
---

# Ambiguity ladder on v0: contrast condition

## Objective

Repeat EXP-20260707-001 verbatim on v0 (Vercel) to test whether Claude Design's questioning and delegation behavior is distinctive or generic to code-first AI design tools. This is the control condition for any claim that Claude Design behaves differently from other tools.

## Research question

[RQ-001: From intent to artifact](../../research/questions/RQ-001-intent-to-artifact.md)

## Pre-registration

### Controlled variables

- The five prompts are byte-identical to those registered in [EXP-20260707-001-ambiguity-ladder](../claude-design/EXP-20260707-001-ambiguity-ladder.md); only the phrase "high-fidelity prototype" may be dropped if v0 has no equivalent mode selector, and any such adaptation is logged as a deviation.
- Same response policy: every clarifying question is answered with exactly "Use your best judgment."
- Fresh v0 session per condition; record v0 version context and account tier.

### Independent variables

Same five conditions: P-FULL, P-NO-AUDIENCE, P-NO-CONTENT, P-NO-STYLE, P-VAGUE.

### Dependent measures

Identical to EXP-20260707-001: questions asked before generation (verbatim, ordered, categorized), silent defaults per removed dimension, whether generation proceeds unprompted, time-to-first-artifact, any visible plan or brief.

### Initial state

Fresh v0 session per condition; no connected repositories or design context.

## Procedure

1. Record environment and version context.
2. Run the five conditions in the same order as EXP-001, one fresh session each, prompts verbatim.
3. Capture conversations and artifacts (screenshots plus generated code) into `evidence/EXP-20260707-005-ambiguity-ladder-v0/`.
4. Tabulate the same measures as EXP-001, then produce a side-by-side comparison table against the EXP-001 results.

## Deviations

None.

## Observations

Link atomic observation records. Do not interpret behavior in this section.

## Evidence

See `evidence/EXP-20260707-005-ambiguity-ladder-v0/manifest.md`.

## Hypothesis

v0 generates immediately across all conditions, resolving ambiguity by assumption rather than by question, while Claude Design shifts from generating to asking as dimensions are removed. Falsified if v0's questioning behavior matches Claude Design's, which would indicate the elicitation pattern is generic to the category rather than a Claude Design design choice.

## Conclusion

Not yet run.

## Limitations

Different underlying models confound product-level and model-level explanations; one run per condition; v0's product surface changes frequently, so the access date bounds the claim.

## Next experiment

If results diverge, repeat the ladder on a second contrast product (Figma Make or Lovable) to separate "Claude Design is distinctive" from "v0 is distinctive".
