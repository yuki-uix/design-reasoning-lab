---
id: EXP-20260707-005-ambiguity-ladder-v0
product: v0
date: 2026-07-07
researcher: yuki
status: in-progress
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

1. Only the P-FULL condition has been run (2026-07-08); the four removed-dimension conditions are pending, so the ladder is incomplete and the hypothesis is not yet adjudicable.
2. The run used an anonymous v0 "Drafts" session (not signed in), so the registered "account tier" is recorded as anonymous; no model/version indicator is exposed anywhere in v0's UI.
3. The phrase "high-fidelity prototype" was kept verbatim (v0 has no mode selector, and keeping the registered wording is the byte-identical default; the registered permission to drop it was not needed).
4. Evidence was captured into a working folder `evidence/0708/` and reorganized on ingestion; see manifest Transformations.

## Observations

- [OBS-20260709-015-v0-generates-without-questions](../../observations/OBS-20260709-015-v0-generates-without-questions.md)
- [OBS-20260709-016-v0-self-qa-browser-loop](../../observations/OBS-20260709-016-v0-self-qa-browser-loop.md)
- [OBS-20260709-017-v0-invents-brand-and-persona](../../observations/OBS-20260709-017-v0-invents-brand-and-persona.md)
- [OBS-20260709-021-cross-product-design-language-convergence](../../observations/OBS-20260709-021-cross-product-design-language-convergence.md)

## Evidence

See `evidence/EXP-20260707-005-ambiguity-ladder-v0/manifest.md`.

## Hypothesis

v0 generates immediately across all conditions, resolving ambiguity by assumption rather than by question, while Claude Design shifts from generating to asking as dimensions are removed. Falsified if v0's questioning behavior matches Claude Design's, which would indicate the elicitation pattern is generic to the category rather than a Claude Design design choice.

### Outcome (partial)

Consistent so far, but not yet discriminating. On P-FULL, v0 generated immediately with zero questions (OBS-20260709-015), where Claude Design raised a 7-question intake form — matching the hypothesis's v0 half in the one condition where any tool has the least reason to ask. The falsification test lives in the removed-dimension conditions, which have not been run.

## Side-by-side, P-FULL only

| Measure | Claude Design (EXP-001) | v0 (this run) |
| --- | --- | --- |
| Questions before generation | 7-question intake form, all delegated | none (OBS-20260709-015) |
| Generation proceeds unprompted | after form submission | yes, single turn |
| Time to artifact | not precisely recorded | "Worked for 5m 11s" (product's own counter) |
| Visible plan/brief | intake form echo | "Generated design direction" step, contents not shown |
| Self-QA | verifier/fix pass (OBS-20260708-011) | embedded-browser verification with screenshots (OBS-20260709-016) |
| Brand/persona invention | none on P-FULL; "Sprout" only under P-NO-CONTENT | "Little Wins" + persona "Riley" on P-FULL (OBS-20260709-017) |
| Design language | warm base + sage green, oklch (this run) | same structure, Nunito + oklch (OBS-20260709-021) |

## Conclusion

Partial (1 of 5 conditions). The P-FULL contrast is as hypothesized: v0 resolves everything by assumption and asks nothing, while Claude Design elicits even a fully specified brief through its intake form. What v0 assumed and Claude Design also assumed converge on the same design language (OBS-20260709-021), and both products self-QA (OBS-20260709-016) — so the candidate Claude Design-distinctive behavior narrows to elicitation itself, pending the four remaining conditions.

## Limitations

Different underlying models confound product-level and model-level explanations; one run per condition; v0's product surface changes frequently, so the access date bounds the claim.

## Next experiment

If results diverge, repeat the ladder on a second contrast product (Figma Make or Lovable) to separate "Claude Design is distinctive" from "v0 is distinctive".
