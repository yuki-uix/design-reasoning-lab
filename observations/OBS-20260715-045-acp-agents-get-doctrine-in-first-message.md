---
id: OBS-20260715-045-acp-agents-get-doctrine-in-first-message
experiment: EXP-20260714-007-tool-surface-inventory
timestamp: 2026-07-15T03:10:00Z
observer: claude (source extraction)
---

# ACP desktop agents receive the same doctrine — prepended to the first user message, with the full MCP tool surface

## Fact

The sidebar's desktop-agent path (ACP: Claude Code, Codex, Gemini CLI) in `src/app/ai/acp/transport.ts`: (1) imports the same 572-line `system-prompt.md`; (2) prepends it to the *first user message text* of a session (`promptText = this.sentContext ? text : SYSTEM_PROMPT + '\n\n' + text`), not to a system-role slot; (3) creates the ACP session with OpenPencil's own MCP server pre-registered (`mcpServers: [{ type: 'http', name: 'open-pencil', url: 'http://127.0.0.1:7600/mcp', ... }]`). A separate one-paragraph `design-context.md` exists in the same directory ("You are inside OpenPencil… Do NOT write HTML files or use terminal commands") but has no consumer at the pinned commit — it is imported and re-exported in `src/constants.ts` and referenced nowhere else in `.ts`/`.vue` sources.

## Interpretation

Three channel configurations therefore exist, not two: sidebar API chat (22 tools + doctrine as system instructions), sidebar ACP (full MCP surface + doctrine as first-message text), and external MCP (full surface, no doctrine). For ACP agents the doctrine competes with the harness's own system prompt, skills, and CLAUDE.md rather than occupying the system slot — its authority is weaker and dilutes as the session grows. The dead `design-context.md` suggests a recent or upcoming rewiring of the ACP context strategy. Alternative: it may be consumed through a build-time mechanism the search missed, though the re-export with no importer makes plain dead code more likely.

## Evidence

- `evidence/EXP-20260714-007-tool-surface-inventory/source/src/app/ai/acp/transport.ts` (lines 13, 140, 261–275)
- `evidence/EXP-20260714-007-tool-surface-inventory/source/src/app/ai/acp/design-context.md`

## Confidence and limitations

High on the transport wiring (direct source). Moderate on "no consumer" — based on exhaustive text search of `.ts`/`.vue`/`.tsx` at one commit.

## Follow-up

Behavioral cross-check: in a sidebar Claude Code session, inspect the first message the harness receives (yuki can check session transcripts) — does the 572-line doctrine appear as user-message text, and does the agent treat it as binding after long sessions?
