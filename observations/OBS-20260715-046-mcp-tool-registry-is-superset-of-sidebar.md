---
id: OBS-20260715-046-mcp-tool-registry-is-superset-of-sidebar
experiment: EXP-20260714-007-tool-surface-inventory
timestamp: 2026-07-15T03:10:00Z
observer: claude (source extraction)
---

# One shared registry, asymmetrically exposed: sidebar gets 22 tools, MCP gets 110

## Fact

All tools are defined once in `packages/core/src/tools/` and split into `CORE_TOOLS` (22) and `EXTENDED_TOOLS` (83); `ALL_TOOLS = CORE + EXTENDED` (105). The sidebar chat wires only `CORE_TOOLS` (`src/app/ai/tools/index.ts`); the MCP server registers `ALL_TOOLS` plus five MCP-only wrappers (`list_documents`, `save_file`, `open_file`, `new_document`, `get_codegen_prompt`), with `eval` excluded unless `enableEval` is set. The registry comment states the design rationale: "Core tools registered by default in AI chat (~30 tools, ~3K schema tokens). Covers 90%+ of design sessions."

## Interpretation

Falsifies pre-registered H2 (identical registries): the channels differ at the tool layer itself, and in the opposite direction from a "sidebar = full product" intuition — the machine-facing channel is the superset. The stated rationale is schema-token budget, i.e. an economic constraint on the sidebar's context window, not a capability judgment. Consequence for attribution: any behavior requiring an EXTENDED tool (components, variables, boolean ops, analysis, export) is impossible in sidebar chat except through `eval`, so its absence there says nothing about the model.

## Evidence

- `evidence/EXP-20260714-007-tool-surface-inventory/source/packages/core/src/tools/registry-core.ts`
- `evidence/EXP-20260714-007-tool-surface-inventory/source/packages/core/src/tools/registry-extended.ts`
- `evidence/EXP-20260714-007-tool-surface-inventory/source/packages/mcp/src/tool/registration.ts`
- `evidence/EXP-20260714-007-tool-surface-inventory/extracted/tool-inventory.json`

## Confidence and limitations

High — registry membership is mechanical (105/105 extraction–registry match). Single commit.

## Follow-up

Behavioral cross-check: give the sidebar agent a task requiring a component or variable — does it route through `eval`, refuse, or improvise structure?
