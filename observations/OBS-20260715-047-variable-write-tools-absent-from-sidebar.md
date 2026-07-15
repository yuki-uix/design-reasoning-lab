---
id: OBS-20260715-047-variable-write-tools-absent-from-sidebar
experiment: EXP-20260714-007-tool-surface-inventory
timestamp: 2026-07-15T03:10:00Z
observer: claude (source extraction)
---

# The token layer is agent-writable — but only on the machine-facing channels

## Fact

Twelve variables tools exist (`create_variable`, `set_variable`, `delete_variable`, `bind_variable`, `unbind_variable`, `create_collection`, `delete_collection`, plus five read tools), covering definition, binding, and unbinding — `bind_variable`'s description enumerates ~30 bindable property fields. All twelve are in `EXTENDED_TOOLS`: available over MCP/ACP/CLI, absent from sidebar chat. The sidebar prompt explicitly routes this gap to the escape hatch: "`eval` is for operations not covered by core tools (variables, boolean ops, components, export)."

## Interpretation

Pre-registered H3 (tokens first-class) splits by channel: at the MCP boundary the token layer is fully first-class (confirming the node-tree product premise for RQ-004); in the sidebar — the surface a human designer actually chats with — token work is second-class, reachable only through raw plugin-API code. Statically, the sidebar agent is therefore *pushed toward* hardcoding literal values (its 22 tools write literals directly; bindings cost an `eval` detour), echoing the hardcoded-derived-values pattern seen in Claude Design (FND-004's partially wired controls). Alternative: models may use `eval` fluently enough that the detour costs nothing in practice.

## Evidence

- `evidence/EXP-20260714-007-tool-surface-inventory/source/packages/core/src/tools/registry-extended.ts` (variables block)
- `evidence/EXP-20260714-007-tool-surface-inventory/extracted/tool-inventory.json` (bind_variable description)
- `evidence/EXP-20260714-007-tool-surface-inventory/source/src/app/ai/chat/system-prompt.md` ("Advanced tools" section)

## Confidence and limitations

High on registry membership and descriptions. The "pushed toward literals" claim is interface-shape inference only.

## Follow-up

Behavioral cross-check (RQ-004 gateway): styled brief via MCP with variables available — does the agent create/bind variables unprompted, or write literals anyway?
