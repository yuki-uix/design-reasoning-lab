---
id: EXP-20260707-003-cross-mode-consistency
product: claude-design
date: 2026-07-07
researcher: yuki
status: planned
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

None.

## Observations

Link atomic observation records. Do not interpret behavior in this section.

## Evidence

See `evidence/EXP-20260707-003-cross-mode-consistency/manifest.md`.

## Hypothesis

Pre-registered interpretation matrix:

- A consistent, B divergent → consistency is carried by conversation/session context, not a stable representation.
- A consistent, B consistent → consistency comes from strong priors or templates given the same brief; a session-level representation is not required to explain it.
- A divergent → neither context nor representation reliably transfers decisions across modes; modes are more independent than the shared-canvas UI suggests.

Falsification of the "shared intermediate representation" reading requires only the first row to hold.

## Conclusion

Not yet run.

## Limitations

One intent domain; slide mode may legitimately re-prioritize information architecture, so IA mismatch is weaker evidence than color/typography mismatch; single run per condition.

## Next experiment

If A is consistent, repeat with a third mode (document) to test whether consistency degrades with distance between modes.
