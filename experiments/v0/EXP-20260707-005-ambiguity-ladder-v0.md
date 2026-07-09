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

1. Two of five conditions have been run (P-FULL 2026-07-08, P-NO-AUDIENCE 2026-07-09); the remaining three are pending, so the ladder is incomplete and the hypothesis is only partially adjudicable.
2. The P-FULL captures show "Sign In" / "Sign Up" buttons, which was originally recorded as an anonymous session; the researcher later reported both runs used the same personal free-tier account, so the registered "account tier" is recorded as personal free tier, with the P-FULL anonymity inference superseded (see manifest Environment). No model/version indicator is exposed anywhere in v0's UI.
3. The phrase "high-fidelity prototype" was kept verbatim (v0 has no mode selector, and keeping the registered wording is the byte-identical default; the registered permission to drop it was not needed).
4. Evidence was captured into working folders (`evidence/0708/`, `evidence/0709/`) and reorganized on ingestion; see manifest Transformations.
5. The middle of the P-NO-AUDIENCE process log (between the opening turn and the captured tail) was not expanded before capture; the zero-question reading rests on the captured portions plus the run being a single uninterrupted turn with no user input after the prompt.

## Observations

- [OBS-20260709-015-v0-generates-without-questions](../../observations/OBS-20260709-015-v0-generates-without-questions.md)
- [OBS-20260709-016-v0-self-qa-browser-loop](../../observations/OBS-20260709-016-v0-self-qa-browser-loop.md)
- [OBS-20260709-017-v0-invents-brand-and-persona](../../observations/OBS-20260709-017-v0-invents-brand-and-persona.md)
- [OBS-20260709-021-cross-product-design-language-convergence](../../observations/OBS-20260709-021-cross-product-design-language-convergence.md)
- [OBS-20260709-030-v0-no-audience-zero-questions-same-default](../../observations/OBS-20260709-030-v0-no-audience-zero-questions-same-default.md)
- [OBS-20260709-031-v0-rederives-same-brand-across-sessions](../../observations/OBS-20260709-031-v0-rederives-same-brand-across-sessions.md)

## Evidence

See `evidence/EXP-20260707-005-ambiguity-ladder-v0/manifest.md`.

## Hypothesis

v0 generates immediately across all conditions, resolving ambiguity by assumption rather than by question, while Claude Design shifts from generating to asking as dimensions are removed. Falsified if v0's questioning behavior matches Claude Design's, which would indicate the elicitation pattern is generic to the category rather than a Claude Design design choice.

### Outcome (partial)

Consistent so far, but still not discriminating. On P-FULL, v0 generated immediately with zero questions (OBS-20260709-015), where Claude Design raised a 7-question intake form — matching the hypothesis's v0 half in the one condition where any tool has the least reason to ask. On P-NO-AUDIENCE, the first removed-dimension condition, v0 again asked nothing and opened with an explicit "I have clear design direction" (OBS-20260709-030) — but this condition cannot separate the products, because audience is the one dimension Claude Design also never asked about (OBS-20260708-004): both products silently defaulted it, and their defaults converge on near-identical generic self-care seed content. The falsification test now lives entirely in P-NO-CONTENT, P-NO-STYLE, and P-VAGUE — the conditions where Claude Design asked.

## Side-by-side, per condition run

### P-FULL

| Measure | Claude Design (EXP-001) | v0 (this run) |
| --- | --- | --- |
| Questions before generation | 7-question intake form, all delegated | none (OBS-20260709-015) |
| Generation proceeds unprompted | after form submission | yes, single turn |
| Time to artifact | not precisely recorded | "Worked for 5m 11s" (product's own counter) |
| Visible plan/brief | intake form echo | "Generated design direction" step, contents not shown |
| Self-QA | verifier/fix pass (OBS-20260708-011) | embedded-browser verification with screenshots (OBS-20260709-016) |
| Brand/persona invention | none on P-FULL; "Sprout" only under P-NO-CONTENT | "Little Wins" + persona "Riley" on P-FULL (OBS-20260709-017) |
| Design language | warm base + sage green, oklch (this run) | same structure, Nunito + oklch (OBS-20260709-021) |

### P-NO-AUDIENCE

| Measure | Claude Design (EXP-001) | v0 (this run) |
| --- | --- | --- |
| Questions before generation | 6-question intake form, none about audience (OBS-20260708-003, -004) | none; opens with "I have clear design direction" (OBS-20260709-030) |
| Generation proceeds unprompted | after form submission | yes, single turn (one auto-resumed "Agent Paused") |
| Time to artifact | not precisely recorded | "Worked for 10m 24s" + "Worked for 23s" (product's own counters) |
| Silent audience default | generic adult self-care seeds: Drink water, Morning walk, Read 10 pages, Stretch (OBS-20260708-004) | generic adult self-care seeds: Morning stretch, Drink water, Read a few pages, Evening walk (OBS-20260709-030) |
| Persona | none | none — P-FULL's "Riley" disappears with the audience clause (OBS-20260709-030) |
| Brand/persona invention | no brand invented | same brand "Little Wins" re-derived in a fresh session (OBS-20260709-031) |
| Self-QA | verifier/fix pass | embedded-browser verification again, then deletes its own screenshots ("Cleaned up screenshots") |

## Conclusion

Partial (2 of 5 conditions). The elicitation contrast is stable so far: v0 has asked nothing in either condition, while Claude Design raised an intake form in both. But P-NO-AUDIENCE is a non-discriminating rung of the ladder — audience is the dimension Claude Design also silently defaults (OBS-20260708-004), and both products fill the vacuum with near-identical generic self-care content (OBS-20260709-030), consistent with a shared prior rather than product-specific judgment. v0's cross-session behavior adds a wrinkle: it re-derives the identical invented brand "Little Wins" in a fresh session while its token values only near-miss (OBS-20260709-031), echoing Claude Design's language-not-values split (OBS-20260709-027) but converging harder at the naming layer. The candidate Claude Design-distinctive behavior remains elicitation itself, now adjudicable only by the three pending conditions where Claude Design demonstrably asked.

## Limitations

Different underlying models confound product-level and model-level explanations; one run per condition; v0's product surface changes frequently, so the access date bounds the claim.

## Next experiment

If results diverge, repeat the ladder on a second contrast product (Figma Make or Lovable) to separate "Claude Design is distinctive" from "v0 is distinctive".
