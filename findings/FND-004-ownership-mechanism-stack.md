---
id: FND-004-ownership-mechanism-stack
status: draft
---

# Decision ownership is allocated through a stack of mechanisms, each returning a different slice at a different time

## Claim

Claude Design does not have a single human/AI decision boundary; it has a *stack* of ownership-return mechanisms that fire at different moments, at different altitudes, with different reliability. Before generation, the intake form returns brief-level decisions — which ones tracks how identity-central they are to the artifact (the roaster's *name* is asked; the dashboard's company is silently invented), and delegation is a first-class answer. After generation, Tweaks controls return taste-level decisions — but contingently (3/0/0 across three domains) and sometimes only partially (a color control whose derived variants stay hardcoded). Per request, the feedback channel allocates the remaining ownership: chat keeps referent-resolution with the agent, an anchored comment moves referent-resolution to the human while the agent keeps execution idiom, and direct canvas editing moves both to the human — at which point the product stops defending its own abstraction (a save silently replaced a template binding with static values on an element the user never touched). Throughout, ownership transfer is one-directional and frictionless: across every mechanism observed, the agent never asked for confirmation and never defended a decision it had made.

The v0 contrast collapses the whole stack: v0 returns nothing at any stage — no intake, no controls observed, no comment affordance in the runs captured — so the only ownership a v0 user holds is post-hoc code editing. Ownership surface, not design capability, is where the two products most differ (their outputs converge; see FND-003).

## Supporting evidence

- Intake with delegation as first-class: [OBS-20260708-001](../observations/OBS-20260708-001-structured-intake-form.md); sliders inside intake mirror spec ranges: [OBS-20260708-013](../observations/OBS-20260708-013-sliders-mirror-spec-ranges.md)
- Ask-vs-assume tracks identity-centrality: [OBS-20260710-039](../observations/OBS-20260710-039-brand-vacuum-elicited-then-invented.md), [OBS-20260710-041](../observations/OBS-20260710-041-identity-vacuum-ask-or-assume-by-domain.md); audience never asked directly: [OBS-20260708-004](../observations/OBS-20260708-004-audience-removed-silent-default.md)
- Tweaks controls: inventory and partial wiring [OBS-20260710-036](../observations/OBS-20260710-036-tweaks-inventory-p-full.md); contingency [OBS-20260710-038](../observations/OBS-20260710-038-landing-page-zero-controls.md), [OBS-20260710-040](../observations/OBS-20260710-040-dashboard-zero-controls-inventory-complete.md); unresolved freedoms parameterized: [OBS-20260708-007](../observations/OBS-20260708-007-unspecified-dimensions-become-controls.md)
- Channel matrix (referent-resolution × execution): [OBS-20260710-042](../observations/OBS-20260710-042-channel-determines-element-and-layer.md); abstraction undefended at the direct-manipulation boundary: [OBS-20260710-043](../observations/OBS-20260710-043-canvas-edit-breaks-binding-comment-anchor-persists.md)
- v0 returns nothing pre- or mid-generation: [FND-001](FND-001-elicitation-is-product-policy.md) and its cited runs

## Conflicting evidence

- The Tweaks mechanism's contingency (3/0/0) means the "taste decisions get controls" rule fires unreliably; run-variance and intake-absorption are registered but undecided explanations ([OBS-20260710-040](../observations/OBS-20260710-040-dashboard-zero-controls-inventory-complete.md)). A stack whose middle layer fires 1 time in 3 is a weak stack claim.
- Returned ownership can be partly illusory: the accentColor control changes less than it offers (hardcoded dark/light variants), so holding the control is not the same as holding the decision.
- In the chat channel the agent *took* interpretive ownership (choosing which element is "primary") even while complying — compliance and ownership-taking are not mutually exclusive, which blurs the "frictionless transfer" reading.
- "Never defends" is 0 defenses over a handful of low-stakes style requests; a request that contradicts an accessibility or usability constraint has not been tested.

## Scope and limitations

Mechanism inventory is one product (Claude Design, research preview, Sonnet 5 Medium visible), 2026-07-07 to 2026-07-10, mostly n=1 per cell; the v0 contrast covers only the pre-generation stage directly (its comment/edit surfaces were not exercised). The channel matrix rests on one run per channel on one artifact; the canvas-edit binding loss has an unexcluded stray-interaction explanation. Brief-specificity and domain are confounded in the controls contingency.

## Confidence

Moderate-high that the mechanisms exist and sit at the described altitudes (each is directly observed, most more than once, several code-confirmed). Low for the rules governing *when* each mechanism fires (controls contingency unresolved; ask-vs-assume rests on one landing/dashboard pair). Moderate for the never-confirms/never-defends pattern (consistent across all EXP-004 interactions but untested under adversarial requests).

## Related hypotheses and concepts

[Human / AI decision ownership](../models/concepts/human-ai-decision-ownership.md) and [Decision boundary](../models/concepts/decision-boundary.md) (this finding replaces the single-boundary picture with a mechanism stack); [FND-001](FND-001-elicitation-is-product-policy.md) (the stack's first layer is the product-policy difference); [FND-002](FND-002-consistency-is-context-not-representation.md) (binding loss shows why undefended abstraction is costly); RQ-003.

## Replication status

Intake mechanism: ×10+ runs across EXP-001/003/004. Ask-vs-assume by identity-centrality: one landing/dashboard pair. Tweaks inventory: three domains, one run each. Channel matrix: one run per channel. Registered discriminators for the weakest links: styled one-liner re-run (controls), chat ×3 (referent stability), minimal canvas-edit reproduction (serialization width).
