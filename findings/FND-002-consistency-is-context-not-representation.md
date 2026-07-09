---
id: FND-002-consistency-is-context-not-representation
status: draft
---

# Observed design consistency is carried by session context and priors, not a persistent design representation

## Claim

Nothing in the behavioral record requires — and several observations count against — a stable design representation sitting between intent and artifact. Consistency splits cleanly by boundary: within a session, concrete craft values replicate exactly (colors, type pairings, even a screenshot pipeline reused across modes); across fresh sessions given the same brief, only the design-language family survives while every concrete value diverges as a near-miss. Inside the artifacts, repeated values have no single source of truth, component decomposition follows data shape rather than design structure, a token layer appears in some runs and not others, and the agent's stated rationale is produced after the artifact, not before it. The same layering shows up in v0 — identity family stable across accounts, concrete name sampled — which points to shared priors plus in-context carry-over as the mechanism, on both products, rather than a product-side design memory.

## Supporting evidence

- Same-session consistency is value-level; fresh-session consistency is language-level only: [OBS-20260709-026](../observations/OBS-20260709-026-same-session-consistency-is-value-level.md), [OBS-20260709-027](../observations/OBS-20260709-027-fresh-session-converges-on-language-not-values.md), [OBS-20260708-009](../observations/OBS-20260708-009-color-system-oscillates.md)
- Artifact internals lack an authoritative layer: [OBS-20260709-022](../observations/OBS-20260709-022-no-single-definition-for-repeated-values.md), [OBS-20260709-023](../observations/OBS-20260709-023-decomposition-follows-data-not-design.md), [OBS-20260709-028](../observations/OBS-20260709-028-token-layer-appears-run-contingently.md)
- Rationale is post-hoc: [OBS-20260709-024](../observations/OBS-20260709-024-design-rationale-post-hoc-only.md)
- v0 parallel — stable identity family, sampled name, third near-miss token clustering: [OBS-20260709-031](../observations/OBS-20260709-031-v0-rederives-same-brand-across-sessions.md), [OBS-20260709-034](../observations/OBS-20260709-034-same-brief-new-account-different-brand.md)

## Conflicting evidence

- Deck mode emits a written plan artifact before generating — a visible intermediate representation ([OBS-20260709-029](../observations/OBS-20260709-029-written-plan-artifact-appears-in-deck-mode.md)). It is mode-specific and generated per run; nothing shows it persisting or being consulted later, but it demonstrates the product *can* externalize a plan.
- Given specifications propagate into distant decisions ([OBS-20260708-012](../observations/OBS-20260708-012-spec-propagation.md)); this is fully explained by context carry-over but is also what a real representation would look like from outside.
- oklch token systems in exported code are design representations *in the artifact*; OBS-022/028 show they are neither complete nor consistently present, so they read as emitted style, not consulted state.

## Scope and limitations

Behavioral evidence only — internals of both products are inaccessible, so the claim is "no evidence of, and no explanatory need for", not "does not exist". Largely one brief family; cross-session tests are n=1 or n=2 per cell. The strongest discriminator (identical brief, many fresh sessions, value-distribution analysis) has not been run at sample size.

## Confidence

Moderate-high. The two-layer split (values within session, language across sessions) replicated across experiments and both products; the anti-representation reading of artifact internals rests on fewer runs.

## Related hypotheses and concepts

[Design intermediate representation](../models/concepts/design-intermediate-representation.md) (this finding argues the working hypothesis should stay unestablished); RQ-002.

## Replication status

The layer split: replicated across EXP-003 (Claude Design, 2 conditions), EXP-005/006 (v0, 4 runs, 2 accounts), consistent with EXP-001/002 corpus (5 exports, 5 idioms). Artifact-internal evidence: EXP-002 autopsy of one export plus spot checks of the v0 exports.
