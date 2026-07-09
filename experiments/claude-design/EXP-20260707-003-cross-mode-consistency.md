---
id: EXP-20260707-003-cross-mode-consistency
product: claude-design
date: 2026-07-07
researcher: yuki
status: in-progress
protocol: protocols/behavioral-observation-v1.md
research_question: research/questions/RQ-002-intermediate-representation.md
---

# Cross-mode consistency: what survives a change of output mode

## Objective

Distinguish between "conversation context", "stable priors/templates", and "explicit shared representation" as explanations for design-decision consistency, by generating slides from the same intent under two conditions: continuing an existing prototype session versus a fresh session.

## Research question

[RQ-002: Is there a design intermediate representation?](../../research/questions/RQ-002-intermediate-representation.md)

## Pre-registration

### Controlled variables

- The intent is the registered P-FULL prompt of EXP-20260707-001 (adapted only by replacing "high-fidelity prototype" with the mode named in each condition).
- Conversion request in Condition A is exactly: "Now create a slide deck presenting this product." with no design guidance.
- Same account and access window for both conditions.

### Independent variables

- **Condition A (same session):** generate the prototype from P-FULL, then request the slide deck in the same session.
- **Condition B (fresh session):** submit the P-FULL intent, worded for slides, in a new session with no prior context.

### Dependent measures

Per decision dimension, whether the slide deck matches the prototype (A) and whether B matches A:

- Accent color and palette
- Typography choices
- Information architecture (which screens/features are surfaced and in what order)
- Copy tone and specific wording reuse
- Naming (product name, feature labels)

### Initial state

Condition A starts from the completed EXP-001 P-FULL run or an equivalent fresh run; Condition B starts from an empty session.

## Procedure

1. Run Condition A; capture prototype and slides (screenshots plus code/export) into `evidence/EXP-20260707-003-cross-mode-consistency/`.
2. Run Condition B in a fresh session.
3. For each dependent dimension, record match/mismatch between prototype↔slides (A) and A-slides↔B-slides as facts, with side-by-side captures.
4. Note any visible restatement of a brief before the slide generation in either condition.

## Deviations

1. Condition B was attempted (twice, 2026-07-08) with the registered P-FULL prototype wording kept verbatim plus the product's "Make a deck" mode chip, instead of rewording the intent for slides as registered. This created an unregistered conflicting-cue setup: text says prototype, chip says deck.
2. The manipulation failed in both runs: no slide deck was produced; both artifacts are interactive prototypes (OBS-20260709-018). The registered dependent measures cannot be tabulated from these runs, which are archived as evidence but do not constitute Condition B.
3. Condition A (same-session prototype → deck conversion) has not been run.
4. The image-choice intake questions could not receive the registered "Use your best judgment." response (no free-text affordance) and were left unanswered (OBS-20260709-019).
5. Evidence was captured into a working folder `evidence/0708/` and reorganized on ingestion; see manifest Transformations.

## Observations

- [OBS-20260709-018-deck-mode-overridden-by-prompt-text](../../observations/OBS-20260709-018-deck-mode-overridden-by-prompt-text.md)
- [OBS-20260709-019-intake-schema-varies-again](../../observations/OBS-20260709-019-intake-schema-varies-again.md)
- [OBS-20260709-020-craft-idiom-tracks-starter](../../observations/OBS-20260709-020-craft-idiom-tracks-starter.md)

## Evidence

See `evidence/EXP-20260707-003-cross-mode-consistency/manifest.md`.

## Hypothesis

Pre-registered interpretation matrix:

- A consistent, B divergent → consistency is carried by conversation/session context, not a stable representation.
- A consistent, B consistent → consistency comes from strong priors or templates given the same brief; a session-level representation is not required to explain it.
- A divergent → neither context nor representation reliably transfers decisions across modes; modes are more independent than the shared-canvas UI suggests.

Falsification of the "shared intermediate representation" reading requires only the first row to hold.

## Conclusion

Not yet adjudicable — the pre-registered interpretation matrix requires slide artifacts, and none were produced. What the failed attempts did yield: (a) the mode chip is overridden by conflicting prompt text, replicated ×2 (OBS-20260709-018), which matters for RQ-003 decision ownership; (b) further replication of the per-run intake schema (OBS-20260709-019) and craft-idiom oscillation, now with a starter co-occurrence (OBS-20260709-020). Conditions A and B still need to be run with slide-worded intents.

## Limitations

One intent domain; slide mode may legitimately re-prioritize information architecture, so IA mismatch is weaker evidence than color/typography mismatch; single run per condition.

## Next experiment

If A is consistent, repeat with a third mode (document) to test whether consistency degrades with distance between modes.
