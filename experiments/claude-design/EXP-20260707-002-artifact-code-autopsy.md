---
id: EXP-20260707-002-artifact-code-autopsy
product: claude-design
date: 2026-07-07
researcher: yuki
status: completed
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

1. Scope expanded beyond pre-registration: standalone exports were captured for all five EXP-001 conditions, not only P-FULL, enabling cross-run comparison. Preliminary structural findings are recorded in OBS-20260708-008 and OBS-20260708-009.
2. Code was obtained via the product's standalone export (a bundler wrapper); templates were extracted by decoding the bundle rather than via Claude Code hand-off. The hand-off comparison remains to be done and is deferred to a follow-up; it does not block the registered audit, whose procedure permitted either path.
3. The tabulation (procedure steps 3–4) was performed programmatically on 2026-07-09 by regex classification over the extracted templates; the script is preserved as `evidence/EXP-20260707-002-artifact-code-autopsy/derived/tabulate.py` so counts are reproducible. `@font-face` blocks were excluded as infrastructure.
4. The brief/plan measure (procedure step 5) was assessed from the archived EXP-001 conversation screenshots rather than a live transcript search, bounded by EXP-001 deviation 5 (process logs not fully expanded at capture time).

## Observations

- [OBS-20260708-008-proprietary-artifact-dsl](../../observations/OBS-20260708-008-proprietary-artifact-dsl.md) (preliminary, recorded during EXP-001 ingestion)
- [OBS-20260708-009-color-system-oscillates](../../observations/OBS-20260708-009-color-system-oscillates.md) (preliminary, recorded during EXP-001 ingestion)
- [OBS-20260709-022-no-single-definition-for-repeated-values](../../observations/OBS-20260709-022-no-single-definition-for-repeated-values.md)
- [OBS-20260709-023-decomposition-follows-data-not-design](../../observations/OBS-20260709-023-decomposition-follows-data-not-design.md)
- [OBS-20260709-024-design-rationale-post-hoc-only](../../observations/OBS-20260709-024-design-rationale-post-hoc-only.md)

## Evidence

See `evidence/EXP-20260707-002-artifact-code-autopsy/manifest.md`.

## Hypothesis

The generated code functions as a persisted intermediate representation: core design decisions appear once as named tokens and are referenced elsewhere. Falsified if values are predominantly hardcoded and inconsistent across the artifact.

Alternative explanation to keep open: tokenized output may reflect generic code-quality training rather than a design-specific representation; the cross-mode test (EXP-003) is needed to separate these.

### Outcome

Falsified at the visual-styling layer. Zero CSS custom properties, zero `var()` references, and zero class attributes across all five templates; 26–40 unique color literals per artifact re-stated inline at 86–137 use sites (OBS-022). The single partial token layer observed (P-FULL's four JS color constants) is referenced only inside the logic script and coexists with near-duplicate inline literals for the same visual roles — the "muted green accent" resolves to 9 distinct oklch values within one artifact. The hypothesis's tokenization criterion fails; what does persist once-and-referenced is the behavior/content layer (state models, bindings, iteration — OBS-008, OBS-023), not visual decisions.

## Conclusion

The exported artifact is a persisted intermediate representation of structure and behavior, but not of visual design. Supported by evidence: design values are predominantly hardcoded and drift within a single artifact, with no mechanism in the format for markup and logic to share a definition (OBS-022); decomposition and naming follow the data model, with high semantic quality wherever the format provides a naming surface and no naming surface at all for visual roles (OBS-023); no written brief precedes generation, and the only decision-shaped record of the visual design is a post-generation prose summary that is not recoverable from the code (OBS-024). Combined with OBS-009 (code idiom oscillates across runs while palette structure is stable), the candidate location for a design intermediate representation narrows to the conversation/design-language level and the DSL's structural layer; the styling code itself is an output surface, not a representation. Confidence: high for the code-layer facts (exhaustive, reproducible counts over five exports); moderate for the brief/plan measure (screenshot-bounded, single condition).

## Limitations

One prompt family from one product window; the standalone export path may transform or inline an upstream working format, so claims apply to shipped code, not internal state; the Claude Code hand-off comparison (deviation 2) remains open; the brief/plan measure is bounded by partially collapsed process logs at capture time; tokenization is necessary but not sufficient evidence for an intermediate representation, and its absence in exports does not rule out an internal one.

## Next experiment

[EXP-20260707-003-cross-mode-consistency](EXP-20260707-003-cross-mode-consistency.md) tests whether the decisions found here survive a change of output mode.
