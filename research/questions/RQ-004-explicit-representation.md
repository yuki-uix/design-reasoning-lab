# RQ-004: What changes when the design representation is explicit and persistent?

## Question

When a product stores the design as a persistent, agent-writable document (a node tree living in the repository) rather than regenerating artifacts from conversation, which behaviors change: do concrete values survive fresh sessions, does iteration mutate the document or rewrite it, and do human edits survive subsequent agent passes?

## Motivation

[FND-002](../../findings/FND-002-consistency-is-context-not-representation.md) concluded that Claude Design's cross-output consistency is explained by conversational context plus model priors, with no persistent design representation; across fresh sessions only the design-language family survives. OpenPencil and Pencil.dev make the opposite product bet: the document itself is the representation — explicit, diffable, and shared between human and agent. They are a natural contrast condition for FND-002: if value-level consistency appears across fresh sessions *when the document is present*, the representation is doing work that context alone did not.

## Observable indicators

- Value-level decision stability across fresh sessions operating on the same design document
- Whether agent iteration produces targeted node mutations or wholesale subtree regeneration (visible in document diffs)
- Whether human canvas edits survive later agent passes, or are silently rewritten (contrast [OBS-043](../../observations/OBS-20260710-043-canvas-edit-breaks-binding-comment-anchor-persists.md), where a human save broke a template binding)
- Whether tokens/variables in the document are authoritative (referenced by other nodes) or decorative (defined but bypassed)
- Whether the agent reads the existing document state before acting, or acts from conversation alone

## Related experiments

- None yet. Candidate designs are listed in the [OpenPencil](../case-studies/openpencil.md) and [Pencil.dev](../case-studies/pencil-dev.md) scope notes.

## Status

Open. Registered 2026-07-14.
