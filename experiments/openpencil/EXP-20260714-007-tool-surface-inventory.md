---
id: EXP-20260714-007-tool-surface-inventory
product: openpencil
date: 2026-07-14
researcher: claude (extraction), yuki (review)
status: planned
protocol: protocols/tool-surface-analysis-v1.md
research_question: research/questions/RQ-004-explicit-representation.md
---

# OpenPencil tool-surface inventory: what does the channel add?

## Objective

Determine what OpenPencil inserts between the human and the model, by statically inventorying both of its agent channels and diffing them:

- **Channel A (sidebar)**: the desktop app's built-in AI chat — OpenPencil authors the system prompt, the canvas serialization, and the tool registry.
- **Channel B (MCP)**: the MCP server boundary that external harnesses (e.g. Claude Code) drive the canvas through — OpenPencil contributes only the tool surface and its description strings.

**Estimand.** The comparison is *sidebar pipeline vs the OpenPencil MCP boundary*, both read exclusively from OpenPencil's own source at the pinned commit. No external harness's code, prompts, or context handling is read, measured, or attributed to OpenPencil; what a harness like Claude Code adds on its side of the MCP boundary is a separate (behavioral) question, listed under next experiments. Within that definition, the channel diff measures exactly what the sidebar adds beyond the shared tool surface. The output places OpenPencil on a spectrum from "neutral pipe" to "product with design opinions" and identifies which layer any opinions live in.

This is a static, source-only experiment under [tool-surface-analysis-v1](../../protocols/tool-surface-analysis-v1.md). No behavioral claims are made; every interpretive claim must register a behavioral cross-check candidate.

## Research question

Primary: [RQ-004](../../research/questions/RQ-004-explicit-representation.md) — this inventory establishes whether the persistent representation (node tree, variables, components) is a first-class citizen of the agent interface, a precondition for the later persistence probes.

Secondary framing: the agent-facing analogue of [FND-004](../../findings/FND-004-ownership-mechanism-stack.md) — FND-004 mapped the control surface a product gives the *human*; this maps the control surface OpenPencil gives the *agent*.

## Pre-registration

### Controlled variables

- Single pinned commit of `open-pencil/open-pencil` (hash recorded in the evidence manifest before analysis begins; latest default-branch commit at time of pinning).
- Source-reading only; no product runs, no informal impressions used as evidence.

### Independent variables

- Channel: sidebar pipeline vs MCP server pipeline.

### Dependent measures

1. **Tool inventory per channel**: names, parameter schemas, description strings, extracted verbatim.
2. **Prompt layer (channel A only)**: system prompt text and any injected instructions, verbatim.
3. **Context layer**: how canvas state reaches the model in each channel (serialization format, scope: full tree / selection / other).
4. **Channel diff**: tools, prompts, or context present in one channel and absent in the other.
5. **Altitude classification**: each tool assigned to exactly one primary category by its *operation target* — the document state it mutates or reads — not by its parameter list:
   - **document structure**: creates, deletes, reparents, or reorders nodes (frames, groups, components, instances)
   - **layout**: mutates position, size, constraints, or auto-layout properties of existing nodes
   - **style values**: writes literal visual values (fills, strokes, effects, corner radius, typography properties) onto nodes
   - **tokens & variables**: creates, edits, binds, or unbinds named reusable values (variables, styles, tokens); a tool belongs here only if it operates on the definition or the binding itself, even when the bound value is visual
   - **content**: writes text content or image/media data
   - **meta**: reads without mutating, or operates outside the document (query, selection, export, lint, viewport)

   Tie-break rules, fixed before extraction: (1) a compound tool (e.g. create-and-style) is classified by its primary verb — the operation named first in its name/description — with secondary capabilities recorded in a `secondary` column of the inventory, never as a second row; (2) writing a literal visual value classifies as *style values* even where a variable could have been bound — *tokens & variables* requires touching the definition or binding; (3) read-only tools are always *meta*, regardless of what they read; (4) a tool that resists these rules goes into an explicit `unresolved` bucket with a stated rationale rather than being forced into a category.
6. **Absence map**: decision categories from prior case studies (palette derivation, spacing systems, type scale, responsive behavior) with *no* corresponding tool — decisions that can only be resolved inside the model.

### Initial state

Fresh clone of the repository; no prior modifications; pinned commit recorded before any file is read in depth.

## Pre-registered hypotheses

- **H1 (yuki's "wrapper" intuition)**: OpenPencil is a neutral pipe — the sidebar system prompt contains plumbing (tool usage mechanics, format constraints) but no design guidance (no style advice, no layout doctrine, no elicitation instructions). Falsified if the prompt steers design decisions or instructs the agent to ask the user questions.
- **H2**: sidebar and MCP expose the same tool registry (diff is empty at the tool layer; the channels differ only in prompt and context). Falsified by any tool present in one channel only.
- **H3**: tokens/variables are first-class in the tool surface (creation, binding, and reading tools exist), consistent with the product's node-tree premise. Falsified if variables are readable but not writable/bindable by the agent.

## Procedure

1. Clone `open-pencil/open-pencil`; record commit hash, tag/release, and access date in the evidence manifest.
2. Locate the sidebar chat pipeline: system prompt construction, canvas serialization, tool registry. Record file paths.
3. Locate the MCP server: tool registry, schemas, description strings. Record file paths.
4. Extract all dependent measures verbatim into `evidence/EXP-20260714-007-tool-surface-inventory/`, preserving source file copies.
5. Apply the altitude classification; produce the per-channel inventory, the channel diff, and the absence map.
6. Record observations (facts first, interpretations separately, per protocol). For every interpretive claim, register one behavioral cross-check candidate.
7. yuki reviews classification decisions and interpretations before anything is synthesized.

## Deviations

None.

## Observations

Link atomic observation records. Do not interpret behavior in this section.

## Evidence

See `evidence/EXP-20260714-007-tool-surface-inventory/manifest.md`.

## Hypothesis

See pre-registered hypotheses above; adjudicated in the conclusion after extraction.

## Conclusion

To be written after the run.

## Limitations

- Static analysis only: tool existence is an interface fact, not a usage fact. Nothing here says what an agent *does* with the surface.
- Single commit: the project is young and moving; the inventory is a snapshot.
- Channel B is analyzed at the OpenPencil boundary only; the external harness (Claude Code skills, CLAUDE.md, agent loop) is out of scope for this experiment.

## Next experiment

Candidate follow-ups, to be chosen after adjudication:

- Two-channel behavioral contrast: same brief through sidebar and through Claude Code + MCP; attribute behavioral differences to the layers this inventory mapped.
- Same brief × two providers through channel A (product shell constant, model varied).
- Ambiguity ladder replication (comparability with EXP-001/EXP-005).
