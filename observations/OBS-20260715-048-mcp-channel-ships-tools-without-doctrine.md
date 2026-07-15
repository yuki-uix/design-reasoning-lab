---
id: OBS-20260715-048-mcp-channel-ships-tools-without-doctrine
experiment: EXP-20260714-007-tool-surface-inventory
timestamp: 2026-07-15T03:10:00Z
observer: claude (source extraction)
---

# The MCP channel ships the full tool surface with zero doctrine — guidance exists but is opt-in

## Fact

The MCP server is created as `new McpServer({ name: 'open-pencil', version: MCP_VERSION })` — no `instructions` field, no prompt of any kind at the server level. OpenPencil's only voice on this channel is tool description strings. Doctrine-adjacent content exists on the machine channels only as pull, not push: a `get_codegen_prompt` tool ("Get design-to-code generation guidelines. Call before generating frontend code.") returns `codegen.md` (246 lines), and a 175-line `jsx-reference.md` is exported as the `JSX_REFERENCE` library constant with no automatic injection found.

## Interpretation

Combined with OBS-044, the design doctrine follows the *UI surface*, not the protocol: the same agent binary (e.g. Claude Code) gets the doctrine when driven from the sidebar and silence when driven from the terminal — as directly experienced in this lab's informal first contact, where terminal sessions relied entirely on the harness's own priors. The channel diff is therefore maximal at the prompt layer (572 lines vs 0) and inverted at the tool layer (22 vs 110). Alternative: MCP client conventions around server `instructions` are inconsistent, so the omission may be pragmatic rather than a deliberate neutrality stance.

## Evidence

- `evidence/EXP-20260714-007-tool-surface-inventory/source/packages/mcp/src/stdio.ts` (line 33)
- `evidence/EXP-20260714-007-tool-surface-inventory/source/packages/mcp/src/tool/registration.ts` (`get_codegen_prompt`)
- `evidence/EXP-20260714-007-tool-surface-inventory/source/packages/core/src/tools/prompts/jsx-reference.md`
- `evidence/EXP-20260714-007-tool-surface-inventory/source/packages/core/src/tools/prompts/codegen.md`

## Confidence and limitations

High. HTTP server entry not separately audited beyond shared registration; single commit.

## Follow-up

Behavioral cross-check: identical brief via sidebar chat vs terminal MCP with the same underlying model — measure doctrine-predicted deltas (4px grid adherence, radius formula, phase structure).
