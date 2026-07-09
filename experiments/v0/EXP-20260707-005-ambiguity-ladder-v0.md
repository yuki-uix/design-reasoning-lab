---
id: EXP-20260707-005-ambiguity-ladder-v0
product: v0
date: 2026-07-07
researcher: yuki
status: completed
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

1. Three of five conditions were run (P-FULL 2026-07-08; P-NO-AUDIENCE and P-VAGUE 2026-07-09), out of registered order: after P-NO-AUDIENCE exhausted the first account's credits, remaining budget was spent on P-VAGUE as the most hypothesis-discriminating condition. P-NO-CONTENT and P-NO-STYLE are credit-blocked and were not run; the experiment is closed with the ladder's two endpoints (fully specified, fully vague) observed and its middle rungs partially observed.
2. The P-FULL captures show "Sign In" / "Sign Up" buttons, which was originally recorded as an anonymous session; the researcher later reported P-FULL and P-NO-AUDIENCE used the same personal free-tier account, so the registered "account tier" is recorded as personal free tier, with the P-FULL anonymity inference superseded (see manifest Environment). P-VAGUE ran signed in with a second GitHub account (fresh credits), so account is not held constant across all conditions. No model/version indicator is exposed anywhere in v0's UI.
3. The phrase "high-fidelity prototype" was kept verbatim (v0 has no mode selector, and keeping the registered wording is the byte-identical default; the registered permission to drop it was not needed).
4. Evidence was captured into working folders (`evidence/0708/`, `evidence/0709/`) and reorganized on ingestion; see manifest Transformations.
5. The middles of the P-NO-AUDIENCE and P-VAGUE process logs (between the opening turn and the captured tail) were not expanded before capture; the zero-question readings rest on the captured portions plus each run being a single uninterrupted turn with no user input after the prompt.
6. The registered response policy ("Use your best judgment.") was never exercised: v0 asked no question in any condition run. The P-VAGUE run has no standalone output captures; its artifact is documented by the canvas in the conversation capture plus the code export.

## Observations

- [OBS-20260709-015-v0-generates-without-questions](../../observations/OBS-20260709-015-v0-generates-without-questions.md)
- [OBS-20260709-016-v0-self-qa-browser-loop](../../observations/OBS-20260709-016-v0-self-qa-browser-loop.md)
- [OBS-20260709-017-v0-invents-brand-and-persona](../../observations/OBS-20260709-017-v0-invents-brand-and-persona.md)
- [OBS-20260709-021-cross-product-design-language-convergence](../../observations/OBS-20260709-021-cross-product-design-language-convergence.md)
- [OBS-20260709-030-v0-no-audience-zero-questions-same-default](../../observations/OBS-20260709-030-v0-no-audience-zero-questions-same-default.md)
- [OBS-20260709-031-v0-rederives-same-brand-across-sessions](../../observations/OBS-20260709-031-v0-rederives-same-brand-across-sessions.md)
- [OBS-20260709-032-v0-vague-zero-questions-hypothesis-test](../../observations/OBS-20260709-032-v0-vague-zero-questions-hypothesis-test.md)
- [OBS-20260709-033-v0-style-vacuum-flips-register](../../observations/OBS-20260709-033-v0-style-vacuum-flips-register.md)

## Evidence

See `evidence/EXP-20260707-005-ambiguity-ladder-v0/manifest.md`.

## Hypothesis

v0 generates immediately across all conditions, resolving ambiguity by assumption rather than by question, while Claude Design shifts from generating to asking as dimensions are removed. Falsified if v0's questioning behavior matches Claude Design's, which would indicate the elicitation pattern is generic to the category rather than a Claude Design design choice.

### Outcome

Supported at the discriminating endpoint. On P-FULL, v0 generated immediately with zero questions (OBS-20260709-015), where Claude Design raised a 7-question intake form — the hypothesis's v0 half, but in the condition where any tool has the least reason to ask. On P-NO-AUDIENCE, v0 again asked nothing (OBS-20260709-030) — non-discriminating, because audience is the one dimension Claude Design also never asked about (OBS-20260708-004): both products silently defaulted it to near-identical generic self-care content. P-VAGUE is where the hypothesis could have failed and did not: on the five-word prompt where Claude Design asked eight direction-level questions, v0 generated a "design direction" internally, declared it clear, and built without a single question (OBS-20260709-032). Across three conditions spanning both ends of the ladder, v0's question count is uniformly zero and Claude Design's uniformly nonzero (7/6/8). The falsification condition — v0's questioning matching Claude Design's — did not occur anywhere. Caveat: P-NO-CONTENT and P-NO-STYLE were not run, so v0's zero-question policy is interpolated, not observed, on the ladder's middle rungs.

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

### P-VAGUE

| Measure | Claude Design (EXP-001) | v0 (this run) |
| --- | --- | --- |
| Questions before generation | 8-question intake form at direction altitude: form factor, overall vibe, tracking model, gamification, fidelity (OBS-20260708-003) | none; generates its own direction and declares it clear (OBS-20260709-032) |
| Generation proceeds unprompted | after form submission | yes, single turn |
| Time to artifact | not precisely recorded | "Worked for 7m 55s" (product's own counter) |
| Visible plan/brief | intake form echo | one-sentence direction statement in the log ("clean, minimal … monospace-accented … consistency matrix") |
| Self-QA | verifier/fix pass | "Tested interactions" browser pass; self-fixed a React hydration mismatch (OBS-20260709-032) |
| Brand/persona invention | direction delegated via intake; no brand recorded on this condition | "Cadence" — a different brand than the styled runs' "Little Wins" (OBS-20260709-033) |
| Design language | (chosen through delegated intake answers) | cool near-neutral oklch (hue 247–260), Geist/Geist Mono, technical-quantified register — the warm calm language of P-FULL/P-NO-AUDIENCE does not survive the style clause's removal (OBS-20260709-033) |

## Conclusion

Supported on 3 of 5 conditions, including both endpoints of the ladder. Elicitation is the product-level difference this experiment was designed to isolate: v0 asked zero questions under a fully specified brief, a partially specified one, and a five-word one, while Claude Design raised an intake form in all five of its conditions — the contrast holds where it is hardest for the hypothesis (P-VAGUE, OBS-20260709-032). Everything downstream of elicitation converges more than it differs: both products silently default audience to the same generic self-care content (OBS-20260709-030), both self-QA in a browser loop (OBS-20260709-016), and both map the same styled brief onto the same design language (OBS-20260709-021). The brand evidence sharpens into a prior-recall account: "Little Wins" recurs across fresh sessions for the calm-warm brief (OBS-20260709-031) and vanishes — replaced by "Cadence" and a technical-quantified register — the moment the style clause is removed (OBS-20260709-033), so v0's invented identities look like stored brief-family mappings, not per-session creativity. Where Claude Design put "overall vibe" to the user as a question on the vague prompt, v0 answered it from its prior; that single policy difference is what the ladder ends up measuring.

**Addendum (2026-07-09, after [EXP-20260709-006](EXP-20260709-006-little-wins-cross-account.md)):** the prior-recall sentence above over-claimed at the name level. A same-brief different-account replication produced "Rooted", not "Little Wins" (OBS-20260709-034): the stored brief-family mapping holds for the identity family (tagline, typeface, palette, seed content, register) but the name itself is sampled per account or session. The elicitation conclusion is unaffected — the replication was a fourth zero-question run (OBS-20260709-035).

## Limitations

Different underlying models confound product-level and model-level explanations; one run per condition; v0's product surface changes frequently, so the access dates bound the claim. P-NO-CONTENT and P-NO-STYLE were never run (credit-blocked), so the middle of v0's ladder is interpolated. Account was not constant: P-VAGUE ran on a second account, which is simultaneously a confound for cross-run comparisons and the control that rules out account memory for the "Little Wins" non-recurrence (OBS-20260709-033).

## Next experiment

Repeat the ladder's endpoints (P-FULL, P-VAGUE) on a second contrast product (Figma Make or Lovable) to separate "Claude Design is distinctive" from "v0 is distinctive"; a second unstyled v0 run would additionally test whether "Cadence" and the technical register are themselves stable priors (OBS-20260709-033 follow-up). The OBS-031/033 brand question was followed up in [EXP-20260709-006-little-wins-cross-account](EXP-20260709-006-little-wins-cross-account.md).
