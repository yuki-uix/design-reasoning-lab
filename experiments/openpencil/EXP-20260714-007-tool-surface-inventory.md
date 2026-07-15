---
id: EXP-20260714-007-tool-surface-inventory
product: openpencil
date: 2026-07-14 (registered), 2026-07-15 (run)
researcher: claude (extraction), yuki (review)
status: complete
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

1. **A third channel configuration surfaced during extraction.** The sidebar contains two sub-pipelines: API-provider chat and ACP desktop agents (Claude Code, Codex, Gemini CLI). The ACP path was analyzed as part of the sidebar scope but is reported distinctly ([OBS-045](../../observations/OBS-20260715-045-acp-agents-get-doctrine-in-first-message.md)); the pre-registration's two-channel estimand is unchanged.
2. **Extraction method fallback.** The repository requires `bun` (unavailable in the analysis environment), so tool definitions were extracted by script-driven regex over `defineTool` blocks instead of runtime import. Validation: 105/105 extracted definitions match the registry identifiers exactly; zero missing descriptions; spot-checked against source. Recorded in the evidence manifest.
3. **MCP wrapper tools included.** Five tools registered only in `packages/mcp` (outside the shared registry) were inventoried and classified; `eval`'s MCP gating (`enableEval`) is noted.

## Observations

- [OBS-044 sidebar system prompt is a 572-line design doctrine](../../observations/OBS-20260715-044-sidebar-system-prompt-is-design-doctrine.md)
- [OBS-045 ACP agents get the same doctrine in the first user message, plus the full MCP surface](../../observations/OBS-20260715-045-acp-agents-get-doctrine-in-first-message.md)
- [OBS-046 one shared registry, asymmetrically exposed: 22 sidebar vs 110 MCP](../../observations/OBS-20260715-046-mcp-tool-registry-is-superset-of-sidebar.md)
- [OBS-047 variable write tools absent from the sidebar](../../observations/OBS-20260715-047-variable-write-tools-absent-from-sidebar.md)
- [OBS-048 MCP ships the full surface with zero doctrine; guidance is opt-in](../../observations/OBS-20260715-048-mcp-channel-ships-tools-without-doctrine.md)
- [OBS-049 the agent-facing representation is a round-trippable JSX DSL](../../observations/OBS-20260715-049-agent-representation-is-a-jsx-dsl.md)
- [OBS-050 embedded lint with severity levels feeds the agent QA loop](../../observations/OBS-20260715-050-embedded-lint-with-severity-feeds-agent-qa.md)
- [OBS-051 AI mutations are snapshotted and signed in the undo history](../../observations/OBS-20260715-051-ai-mutations-signed-in-undo-history.md)
- [OBS-052 absence map: system-level decisions have no tools; no tool addresses the human](../../observations/OBS-20260715-052-absence-map-doctrine-in-prompt-not-tools.md)

## Evidence

See `evidence/EXP-20260714-007-tool-surface-inventory/manifest.md`.

## Hypothesis

Adjudication of the pre-registered hypotheses:

- **H1 (neutral pipe) — falsified.** The sidebar system prompt is a 572-line document dominated by design guidance: spacing system, corner-radius formulas, type scale, fixed text-hierarchy hex values, a mandatory four-phase workflow, a lint-severity response policy, aesthetic prohibitions, and worked examples with aesthetic direction ([OBS-044](../../observations/OBS-20260715-044-sidebar-system-prompt-is-design-doctrine.md)). One element of H1 survives: no elicitation instruction exists anywhere — the prompt never tells the agent to ask the user questions.
- **H2 (shared tool registry) — falsified.** Both channels draw on one definition set, but the sidebar exposes 22 tools (CORE) while MCP exposes 105 plus five MCP-only wrappers; the stated rationale is schema-token budget ([OBS-046](../../observations/OBS-20260715-046-mcp-tool-registry-is-superset-of-sidebar.md)).
- **H3 (tokens first-class) — split by channel.** At the MCP boundary, fully confirmed: 12 variables tools covering definition, binding, and unbinding. In sidebar chat, falsified: zero variables tools; the prompt routes token work to the `eval` escape hatch ([OBS-047](../../observations/OBS-20260715-047-variable-write-tools-absent-from-sidebar.md)).

## Conclusion

**The estimand — what the sidebar adds beyond the shared tool surface — resolves to: a 572-line design doctrine, a curated 22-tool subset, and a provenance/undo layer; what the MCP boundary adds beyond the sidebar is the other 88 tools, including the entire token-write layer.** OpenPencil is not a neutral pipe, but its opinions are distributed asymmetrically (evidence: manifest, all nine observations):

1. **Doctrine follows the UI surface, not the protocol.** Sidebar sessions (API chat and ACP alike) carry the full design doctrine; terminal MCP sessions get silence plus opt-in guidance (`get_codegen_prompt`, exported `JSX_REFERENCE`) ([OBS-044](../../observations/OBS-20260715-044-sidebar-system-prompt-is-design-doctrine.md), [OBS-045](../../observations/OBS-20260715-045-acp-agents-get-doctrine-in-first-message.md), [OBS-048](../../observations/OBS-20260715-048-mcp-channel-ships-tools-without-doctrine.md)).
2. **The one opinion that crosses every channel is the lint.** `describe` embeds a severity-graded issue engine, so OpenPencil's quality judgments travel inside tool output even where the prompt does not ([OBS-050](../../observations/OBS-20260715-050-embedded-lint-with-severity-feeds-agent-qa.md)).
3. **The representation bet is a JSX DSL**, round-trippable via `render`/`get_jsx`, recruiting web-frontend priors while constraining them ([OBS-049](../../observations/OBS-20260715-049-agent-representation-is-a-jsx-dsl.md)).
4. **System-level design decisions have no tools** (palette, spacing scale, type scale, breakpoints) and **no tool addresses the human** — elicitation is structurally impossible at the tool layer, in direct contrast to Claude Design's product-policy intake (FND-001) ([OBS-052](../../observations/OBS-20260715-052-absence-map-doctrine-in-prompt-not-tools.md)).
5. **Ownership machinery exists but is passive and reversible** rather than negotiated: per-tool-call snapshots, `AI:`-labeled undo entries, canvas flashes ([OBS-051](../../observations/OBS-20260715-051-ai-mutations-signed-in-undo-history.md)).

Confidence: high for all interface facts (verbatim source at a pinned commit, mechanically validated extraction); all claims about resulting agent *behavior* are interpretations pending the registered cross-checks.

## Limitations

- Static analysis only: tool existence is an interface fact, not a usage fact. Nothing here says what an agent *does* with the surface.
- Single commit of a fast-moving project (`v0.13.2-222-g12031b76`); the dead `design-context.md` suggests the ACP context strategy is in flux.
- Channel B analyzed at the OpenPencil boundary only; external harness contributions (Claude Code skills, CLAUDE.md) remain out of scope and unattributed, per the estimand.
- Six tools sit in the `unresolved` classification bucket; the pre-registered scheme lacks a category for organizational metadata (`rename_node`, `set_locked`).
- The sidebar's per-message canvas/selection context injection (beyond the system prompt) was not fully traced; `describe`-mediated context is the documented mechanism, but message assembly in `chat/use.ts` was not audited.

## Next experiment

Registered behavioral cross-checks, in priority order (each follow-up section of OBS-044–052 lists the concrete design):

1. **Doctrine on/off contrast** — same brief, same model, sidebar chat vs terminal MCP: measures what the 572-line doctrine actually buys (OBS-044/048/050 cross-checks). This is also the two-channel behavioral contrast from the scope note.
2. **Token-layer usage probe** — styled brief over MCP with variables available: does the agent bind or hardcode? Gateway to RQ-004's persistence probes (OBS-047 cross-check).
3. **Brand-vacuum elicitation probe over MCP** — three-product comparison with Claude Design (elicits) and v0 (invents) on the ask-or-assume boundary (OBS-052 cross-check).
