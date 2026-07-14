# Pencil.dev: scope note

## Status

Scope registered 2026-07-14. No first contact yet; no pre-registered experiments. Experiment slug: `experiments/pencil-dev/`.

## Product snapshot

From vendor material and third-party reviews, access date 2026-07-14; unverified until first contact:

- Agent-driven design canvas inside the IDE (VS Code/Cursor); launched late January 2026; free tier at access date; closed source.
- Design documents (`.pen` format) live in the code repository and are versioned with Git alongside code.
- Vendor claims concurrent multi-agent generation (up to six agents) with per-agent canvas indicators.
- MCP-based agent integration; paste import from Figma.

## Why it is in scope

1. **Explicit representation ([RQ-004](../questions/RQ-004-explicit-representation.md)).** Like OpenPencil, the document is the persistent representation — but here embedded in a closed product with its own agent policy, so the two case studies separate the format from the product around it.
2. **Multi-agent decision coordination ([RQ-005](../questions/RQ-005-multi-agent-decision-coordination.md)).** The concurrent agent team is the only observable instance of an agent-to-agent decision boundary among current case studies.
3. **Third contrast product.** The [Claude Design case study](claude-design.md) registered an open discriminator: a third product is needed to separate "Claude Design is distinctive" from "v0 is distinctive" on elicitation and ownership mechanisms.

## Candidate first experiments

To be pre-registered individually before running:

1. **Ambiguity ladder replication** (behavioral-observation-v1): comparability with [EXP-001](../../experiments/claude-design/EXP-20260707-001-ambiguity-ladder.md) and [EXP-005](../../experiments/v0/EXP-20260707-005-ambiguity-ladder-v0.md). Does an IDE-native tool elicit, and at what altitude?
2. **Document diff autopsy** ([RQ-004](../questions/RQ-004-explicit-representation.md)): run a styled brief, iterate three times, commit the `.pen` file at each checkpoint; classify diffs as targeted mutation versus regeneration. Git history makes value-level persistence directly measurable.
3. **Swarm decomposition observation** ([RQ-005](../questions/RQ-005-multi-agent-decision-coordination.md)): one landing-page brief; record how the canvas partitions across agents, whether palette/typography stay consistent across concurrently generated sections, and what the human can target afterwards.

## Method notes

- Closed source: behavioral-observation-v1 only. The tool-surface protocol does not apply beyond externally visible MCP schema, if any.
- Fast-moving product (large user growth since launch): record extension version, app version, and any visible model configuration per run; expect behavior to shift under us, as with the Claude Design research preview.
- `.pen` checkpoints and their Git history are first-class evidence; copy files per checkpoint into `evidence/<experiment-id>/`, never overwrite.
