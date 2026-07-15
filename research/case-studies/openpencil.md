# OpenPencil: scope note

## Status

Scope registered 2026-07-14. Experiment slug: `experiments/openpencil/`. First experiment complete: [EXP-007 tool-surface inventory](../../experiments/openpencil/EXP-20260714-007-tool-surface-inventory.md) (2026-07-15, source-only; H1 "neutral pipe" falsified, H2 falsified, H3 split by channel — see its conclusion for the registered behavioral follow-ups).

## Identification

This case study covers **open-pencil/open-pencil** (github.com/open-pencil/open-pencil, openpencil.dev), the MIT-licensed design editor. It does **not** cover `ZSeven-W/openpencil`, an unrelated project with a nearly identical name. Every evidence item must record the repository URL and commit hash to keep provenance unambiguous.

## Product snapshot

From project documentation, access date 2026-07-14; unverified against the running product except where noted:

- Open-source design editor; opens `.fig` and `.pen` files; core premise is that a design is a node tree, not a picture — the document can be opened, queried, transformed, linted, and diffed.
- Built-in AI chat with 100+ editor tools (shapes, fills/strokes, auto-layout, components, variables); user-selectable model providers (OpenAI, Anthropic, Google AI, OpenRouter).
- MCP server (stdio/HTTP) and desktop-agent integrations (Claude Code, Codex, Gemini CLI); CLI for inspection, query, export, linting, token analysis; headless Vue SDK.
- Runs locally (desktop app or browser); files stay on the machine.

## Why it is in scope

1. **Explicit representation ([RQ-004](../questions/RQ-004-explicit-representation.md)).** The persistent, diffable node tree is the direct contrast condition for [FND-002](../../findings/FND-002-consistency-is-context-not-representation.md).
2. **Semi-white-box access.** The agent-facing tool surface is readable source: how the product decomposes design decisions into tools is directly inspectable ([tool-surface-analysis-v1](../../protocols/tool-surface-analysis-v1.md)), and tool-call traces can upgrade behavioral evidence from screenshots to logs.
3. **Model-agnostic harness.** The same brief can run with different underlying models inside the same product shell. This separates product policy from model behavior — the confound the Claude Design case study could not remove, because every prior comparison varied product and model together.

## Candidate first experiments

To be pre-registered individually before running:

1. **Tool-surface inventory** (tool-surface-analysis-v1, pinned commit): enumerate and classify the editor/MCP tools by decision altitude. Produces the map later behavioral runs are read against; no behavioral claims on its own.
2. **Ambiguity ladder replication** (behavioral-observation-v1, one fixed provider): comparability with [EXP-001](../../experiments/claude-design/EXP-20260707-001-ambiguity-ladder.md) and [EXP-005](../../experiments/v0/EXP-20260707-005-ambiguity-ladder-v0.md). Does an editor-native agent elicit at all ([FND-001](../../findings/FND-001-elicitation-is-product-policy.md) discriminator)?
3. **Same brief × two providers**: hold the product shell constant, vary the model. Which behaviors (elicitation, priors, decomposition) travel with the product, and which with the model?
4. **Representation persistence probe** ([RQ-004](../questions/RQ-004-explicit-representation.md)): fresh sessions against the same `.pen` document; does value-level consistency appear where FND-002 found none?

## Method notes

- Record per run: app version, repository commit (if built from source), provider and model, account/API context.
- Keep source/tool-definition evidence and behavioral evidence in separate manifest sections per the tool-surface protocol.
- `.pen` documents are valid evidence artifacts; copy the file per checkpoint into `evidence/<experiment-id>/`, never overwrite.
