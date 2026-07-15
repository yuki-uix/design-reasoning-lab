---
id: OBS-20260715-049-agent-representation-is-a-jsx-dsl
experiment: EXP-20260714-007-tool-surface-inventory
timestamp: 2026-07-15T03:10:00Z
observer: claude (source extraction)
---

# The agent-facing representation is a JSX dialect, round-trippable in both directions

## Fact

The primary creation tool `render` takes JSX (elements: Frame, Text, Rectangle, Ellipse, Line, Star, Polygon, Group, Section, Component, Icon; props-only styling, "no `style`, `className`, or CSS"; JavaScript expressions permitted). The inverse exists: `get_jsx` returns "JSX representation of a node and its children. Compact round-trip format — same syntax as the render tool." Inspection is semantic rather than pixel-based: `describe` returns structured summaries with auto-adaptive depth, and the sidebar prompt prohibits the pixel path ("Never use `export_image` — slow and wastes tokens. Use `describe` instead.").

## Interpretation

OpenPencil's answer to "what does the agent see and write" is neither raw node-tree JSON nor screenshots but a third representation — a code-like DSL sitting between the model's web-frontend priors and the document. This choice recruits the model's massive JSX/React prior while filtering it (no CSS, no percentages, closed prop set), and makes the read and write formats symmetric, which is the precondition for iterate-in-place rather than regenerate (RQ-004). The 40-element render cap plus mandated `describe` loop structures generation as draft–inspect–repair over this DSL. Alternative: the DSL may exist chiefly to compress schema/context tokens, with representational fit as a side effect.

## Evidence

- `evidence/EXP-20260714-007-tool-surface-inventory/extracted/tool-inventory.json` (render, get_jsx, describe descriptions)
- `evidence/EXP-20260714-007-tool-surface-inventory/source/src/app/ai/chat/system-prompt.md` (Rendering / Props reference sections)
- `evidence/EXP-20260714-007-tool-surface-inventory/source/packages/core/src/tools/prompts/jsx-reference.md`

## Confidence and limitations

High on the interface facts. Whether agents actually iterate via `get_jsx`→edit→`render` rather than regenerating is untested.

## Follow-up

Behavioral cross-check: request a small change to an existing design over MCP — does the agent `get_jsx` and re-render the subtree, mutate via setters, or rebuild from scratch?
