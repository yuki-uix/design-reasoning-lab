# Design Intermediate Representation

## Status

Working hypothesis; not established as an internal product mechanism.

## Definition

A proposed structured layer between user intent and generated artifacts that may encode requirements, hierarchy, narrative, constraints, or design decisions.

## Evidence

From EXP-20260707-001/002 (Claude Design):

- The artifact format itself is the strongest observed IR candidate: a proprietary template DSL (`.dc.html`: `x-dc`, `sc-if`/`sc-for`, `{{ }}` bindings, `DCLogic` state class, dedicated runtime), identical across all five runs (OBS-20260708-008).
- Parameterization is continuous across the pipeline: named intake variables → named state bindings → declared tweak variables with editor metadata (OBS-20260708-002, -007).
- No CSS-variable token layer exists; code-level color idiom oscillates between runs while palette structure is stable, locating stability at the design-language level rather than the code level (OBS-20260708-009).
- The EXP-002 audit narrows the candidate: the artifact persists structure and behavior once-and-referenced, but visual decisions are re-derived at each use site with within-artifact drift, and the format provides no mechanism for markup and logic to share a style definition (OBS-20260709-022, -023).
- The only decision-shaped record of visual design is a post-generation prose summary in the conversation; rationale and artifact are disjoint representations, neither derivable from the other (OBS-20260709-024).

## Related experiments

- [EXP-20260707-002-artifact-code-autopsy](../../experiments/claude-design/EXP-20260707-002-artifact-code-autopsy.md) (completed)
- [EXP-20260707-003-cross-mode-consistency](../../experiments/claude-design/EXP-20260707-003-cross-mode-consistency.md) (in progress)

## Competing definitions

Observed consistency may be explained by conversation context, templates, or direct generation without a distinct representation.

## Open questions

- What observable behavior would uniquely predict such a layer?
- Can controlled prompt changes reveal stable latent structure?
- Is the representation shared across output modes?

## Revision history

- 2026-07-02: Initial working hypothesis.
- 2026-07-08: First evidence: the `.dc.html` template DSL identified as the leading IR candidate; CSS-token hypothesis revised after cross-run comparison.
- 2026-07-09: EXP-002 audit completed: persisted-IR reading holds for structure/behavior, falsified for visual styling; rationale exists only as post-hoc conversational prose.

