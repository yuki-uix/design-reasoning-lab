---
id: OBS-20260715-050-embedded-lint-with-severity-feeds-agent-qa
experiment: EXP-20260714-007-tool-surface-inventory
timestamp: 2026-07-15T03:10:00Z
observer: claude (source extraction)
---

# A built-in lint engine grades the canvas and the prompt binds the agent to its verdicts

## Fact

`packages/core/src/tools/describe/issues.ts` (446 lines) computes issues over described nodes and classifies each as `error`/`warning`/`info` via pattern lists (`ERROR_PATTERNS`, `INFO_PATTERNS`, default `warning`). The sidebar prompt hard-wires the response policy: "Fix `error` issues always. Fix `warning` issues when possible. Ignore `info` issues — they're cosmetic", enumerates canonical fixes ("overflows → set `w=\"fill\"` or `overflow=\"hidden\"`"; "gap N not on 8px grid → fix the gap"), and mandates the loop ("render → IMMEDIATELY describe → fix ALL errors + warnings → ONLY NOW proceed").

## Interpretation

Design quality control is implemented as machine judgment: the product, not the model, decides what counts as a defect and how urgently — including opinionated calls like the 8px-grid warning (a taste rule graded as a defect class). This is the agent-facing analogue of the self-QA loop observed inside Claude Design artifacts, but externalized, versioned, and readable. On doctrine-free channels (terminal MCP) the lint still runs inside `describe` results, making it the one piece of OpenPencil design opinion that *does* cross every channel — embedded in tool output rather than prompt.

## Evidence

- `evidence/EXP-20260714-007-tool-surface-inventory/source/packages/core/src/tools/describe/issues.ts`
- `evidence/EXP-20260714-007-tool-surface-inventory/source/src/app/ai/chat/system-prompt.md` (Workflow, severity policy)

## Confidence and limitations

High on the mechanism. Which patterns fire in practice, and whether doctrine-free agents obey lint verdicts without the prompt's policy, is untested.

## Follow-up

Behavioral cross-check: over terminal MCP, seed a design violating the 8px grid, call `describe` — record whether the agent fixes warnings unprompted.
