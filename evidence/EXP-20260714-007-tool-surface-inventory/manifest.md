# Evidence manifest: EXP-20260714-007-tool-surface-inventory

Pre-run stub created at registration (PR #14); filled at extraction on 2026-07-15. Two evidence classes per the tool-surface-analysis-v1 protocol: **verbatim source copies** (`source/`, mirroring repository paths) and **derived extractions** (`extracted/`, produced by the scripts included alongside them).

| File | Type | Captured at | Provenance | SHA-256 | Notes |
| --- | --- | --- | --- | --- | --- |
| `source/src/app/ai/chat/system-prompt.md` | verbatim source copy | 2026-07-15T02:50:00Z | repo path `src/app/ai/chat/system-prompt.md` @ pinned commit | `a3b6b1ac4880649868aaf824d5a7cf46e1c46d0a99c80bbfe49ffb8157174657` | sidebar chat system prompt, 572 lines |
| `source/src/app/ai/chat/transports.ts` | verbatim source copy | 2026-07-15T02:50:00Z | repo path `src/app/ai/chat/transports.ts` @ pinned commit | `91306d415dff5e5ca60f72d34bb9de38da2715ff99a5b9903af28ac35d06d9bc` | wires SYSTEM_PROMPT as `instructions`; step cap |
| `source/src/app/ai/acp/design-context.md` | verbatim source copy | 2026-07-15T02:50:00Z | repo path `src/app/ai/acp/design-context.md` @ pinned commit | `0377ffc69822c46f198ed9618f57b670a2abe0061a7175ede8fe391b4d455140` | one-paragraph context; no consumer found at pinned commit |
| `source/src/app/ai/acp/transport.ts` | verbatim source copy | 2026-07-15T02:50:00Z | repo path `src/app/ai/acp/transport.ts` @ pinned commit | `32aa5ffe46dab97ab873fcb6fa37d10a591403dc26c97882c29553118ef5e2db` | prepends full SYSTEM_PROMPT to first ACP message; auto-registers MCP server |
| `source/src/app/ai/tools/index.ts` | verbatim source copy | 2026-07-15T02:50:00Z | repo path `src/app/ai/tools/index.ts` @ pinned commit | `6e0f0293b14478374f24d3026a4645146b9ddbf8db59dd386b32f08f11c7b21e` | sidebar tool wiring from CORE_TOOLS; undo labeling; step budget |
| `source/packages/core/src/tools/registry.ts` | verbatim source copy | 2026-07-15T02:50:00Z | repo path `packages/core/src/tools/registry.ts` @ pinned commit | `d9ddfdcbd19662f5d5e733ce4c8d96de0d9299c73ad11a07effe5eeff8a9ef4c` | ALL_TOOLS = CORE + EXTENDED |
| `source/packages/core/src/tools/registry-core.ts` | verbatim source copy | 2026-07-15T02:50:00Z | repo path `packages/core/src/tools/registry-core.ts` @ pinned commit | `9c8ae16e07ec47a04f385b4237b97a1979f73b785fabcad302b6c65d890ffcc6` | 22 tools; "90%+ of design sessions" rationale comment |
| `source/packages/core/src/tools/registry-extended.ts` | verbatim source copy | 2026-07-15T02:50:00Z | repo path `packages/core/src/tools/registry-extended.ts` @ pinned commit | `774a502c387caac68c927542eec65a3c8a4c91d51c7dc4a5205fcb3132f3e889` | 83 tools incl. all 12 variables tools |
| `source/packages/core/src/tools/prompts/jsx-reference.md` | verbatim source copy | 2026-07-15T02:50:00Z | repo path `packages/core/src/tools/prompts/jsx-reference.md` @ pinned commit | `263d7476bc76c3b25f1d984affc8210edfaf3af1cd3da03335597884bfb3a1c0` | exported as JSX_REFERENCE constant; not auto-injected |
| `source/packages/core/src/tools/prompts/codegen.md` | verbatim source copy | 2026-07-15T02:50:00Z | repo path `packages/core/src/tools/prompts/codegen.md` @ pinned commit | `6cf548da009f1f052140ca02fda6eae46369df05cdc5ac8160c4113d78752e6c` | served via `get_codegen_prompt` MCP tool |
| `source/packages/core/src/tools/describe/issues.ts` | verbatim source copy | 2026-07-15T02:50:00Z | repo path `packages/core/src/tools/describe/issues.ts` @ pinned commit | `925b599623d35aa14f5b84707f6dbcd3ba32dcb4f895d84b95181c57338647ba` | embedded lint engine, error/warning/info severity |
| `source/packages/mcp/src/tool/registration.ts` | verbatim source copy | 2026-07-15T02:50:00Z | repo path `packages/mcp/src/tool/registration.ts` @ pinned commit | `15ef6d3f44a0e2a7bbedec7acf066247f9c0756e2eb4fd9d1d47ce1af650f1c0` | registers ALL_TOOLS + 5 wrappers; eval gated |
| `source/packages/mcp/src/stdio.ts` | verbatim source copy | 2026-07-15T02:50:00Z | repo path `packages/mcp/src/stdio.ts` @ pinned commit | `02e77287af320d8690e9251b3589c228cee07a4cc4f22d0797cd691b67e7b376` | McpServer created without `instructions` |
| `extracted/extract-tools.mjs` | extraction script | 2026-07-15T02:30:00Z | written for this experiment | `7a6c58478bb938b4ca5279258d4fdab7a0e86380c8ef4603c632d335d871459f` | regex extraction of defineTool blocks |
| `extracted/tool-inventory.json` | derived extraction | 2026-07-15T02:30:00Z | output of `extract-tools.mjs` over pinned source | `5db20240435fad03756b170a3d7f8e7bc5f0bbbbae107c7cd688965791a61f52` | 105 defs: name, mutates, description, channel |
| `extracted/classify.mjs` | classification script | 2026-07-15T03:00:00Z | written for this experiment; encodes pre-registered criteria | `a945a618d5f69a1412cfb15e1df18a825f75ee6f93aa438cfcfdb11dba86c051` | validates 100% coverage before emitting |
| `extracted/classification.md` | derived extraction | 2026-07-15T03:00:00Z | output of `classify.mjs` over `tool-inventory.json` | `99add9bcdf7105ed7982af4e40b767c8397e10a5dda4d38360c1acdcd7c35af6` | altitude table + absence map |

## Environment

- Product and visible version: OpenPencil (`open-pencil/open-pencil`), `package.json` version 0.13.2; `git describe`: `v0.13.2-222-g12031b76`
- Repository URL: https://github.com/open-pencil/open-pencil
- Pinned commit hash: `12031b76c9e0416a1c0d505a0af65780c011346e` (commit date 2026-07-13T14:47:48+03:00)
- Access date: 2026-07-15 (clone at 2026-07-15T02:17:49Z)
- Extraction method: fresh `git clone`; verbatim file copies; regex extraction of `defineTool({...})` blocks via `extract-tools.mjs` (Node v23.7.0) — see Transformations
- Account or feature context: not applicable (source-only)
- Browser/device: not applicable (source-only)

## Transformations and redactions

- `tool-inventory.json` is a mechanical transformation: `defineTool` blocks parsed by brace matching; `description` string-concatenation expressions (`'a' + 'b'`) joined into single strings; `\n` and `\'` escapes resolved. Validation: 105 extracted defs exactly match the 22+83 registry identifiers, zero unmatched, zero missing descriptions; spot-checked against `bindings.ts` source.
- `classification.md` applies the pre-registered category criteria and tie-break rules; the mapping is hand-authored inside `classify.mjs` (reviewable line by line) and the script fails on incomplete coverage.
- No redactions.

## Missing evidence

- The intended extraction path (importing the registries at runtime to dump canonical `ToolDef` objects) was unavailable: the repository requires `bun`, which is not installed in the analysis environment. Regex extraction was used instead; risk is limited to description-string edge cases and is bounded by the validation above.
- Sidebar UI wiring beyond `transports.ts` (e.g. how chat renders tool activity) was not captured — out of scope for the dependent measures.
