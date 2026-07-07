---
id: EXP-20260707-002-artifact-code-autopsy
product: claude-design
date: 2026-07-07
researcher: yuki
status: planned
protocol: protocols/behavioral-observation-v1.md
research_question: research/questions/RQ-002-intermediate-representation.md
---

# Artifact code autopsy: does the generated code carry a token layer

## Objective

Inspect the source of a generated prototype for evidence that design decisions are persisted in structured, reusable form (design tokens, CSS variables, semantic component structure) rather than scattered as hardcoded values.

## Research question

[RQ-002: Is there a design intermediate representation?](../../research/questions/RQ-002-intermediate-representation.md)

## Pre-registration

### Controlled variables

- Prototype generated from the registered P-FULL prompt of EXP-20260707-001 (reuse that run's artifact if code is obtainable; otherwise one fresh run, logged as such).
- No design system connected, so any token layer observed is agent-initiated rather than imported.
- Code obtained through official paths only (export, or hand-off to Claude Code); record the path used.

### Independent variables

None; this is a descriptive audit of one artifact.

### Dependent measures

- Count of color/spacing/typography values defined as CSS variables or tokens versus hardcoded occurrences.
- Whether repeated design values (accent color, radius, spacing steps) resolve to a single definition.
- Semantic quality of naming (for example `--accent` / `HabitCard` versus `#7a9b76` / `div3`).
- Component decomposition: whether repeated UI elements are factored into reusable components.
- Whether the conversation contains an explicit written brief or plan preceding generation.

### Initial state

Same as the source run: fresh session, no design system, no uploads.

## Procedure

1. Generate or reuse the P-FULL prototype; record version context.
2. Obtain the artifact source code via export or Claude Code hand-off; preserve all files unmodified in `evidence/EXP-20260707-002-artifact-code-autopsy/`.
3. Enumerate every color, spacing, radius, and font declaration; classify each as tokenized or hardcoded.
4. Record component structure and naming as facts.
5. Search the conversation transcript for any explicit brief, plan, or requirements restatement; capture verbatim.

## Deviations

None.

## Observations

Link atomic observation records. Do not interpret behavior in this section.

## Evidence

See `evidence/EXP-20260707-002-artifact-code-autopsy/manifest.md`.

## Hypothesis

The generated code functions as a persisted intermediate representation: core design decisions appear once as named tokens and are referenced elsewhere. Falsified if values are predominantly hardcoded and inconsistent across the artifact.

Alternative explanation to keep open: tokenized output may reflect generic code-quality training rather than a design-specific representation; the cross-mode test (EXP-003) is needed to separate these.

## Conclusion

Not yet run.

## Limitations

One artifact from one prompt; code export path may transform the artifact; tokenization is necessary but not sufficient evidence for an intermediate representation.

## Next experiment

[EXP-20260707-003-cross-mode-consistency](EXP-20260707-003-cross-mode-consistency.md) tests whether the decisions found here survive a change of output mode.
