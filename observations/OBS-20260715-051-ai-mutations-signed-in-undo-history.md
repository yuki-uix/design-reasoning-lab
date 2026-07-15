---
id: OBS-20260715-051-ai-mutations-signed-in-undo-history
experiment: EXP-20260714-007-tool-surface-inventory
timestamp: 2026-07-15T03:10:00Z
observer: claude (source extraction)
---

# Every AI mutation is snapshotted and signed in the undo history; the step budget is enforced in code

## Fact

In the sidebar wiring (`src/app/ai/tools/index.ts`), every tool marked `mutates: true` is wrapped: a page snapshot is taken before execution, and afterwards an undo entry is pushed with the label `AI: <tool name>`, whose forward/inverse restore the after/before snapshots. Mutated nodes are also visually flashed on the canvas (`aiFlashDone`). `MAX_AGENT_STEPS = 50` is enforced via `stopWhen: stepCountIs(MAX_AGENT_STEPS)` — the same "50 steps" the prompt states as budget.

## Interpretation

This is an ownership mechanism of a kind not observed in Claude Design (FND-004): provenance-labeled, per-tool-call reversibility. The human can see *that* the AI made a specific change and revert it at tool-call granularity — ownership transfer back to the human is built into the mutation path itself rather than offered through separate controls. The canvas flash is attention-direction: the product tells the human where the agent just acted. Note the mechanism lives in the sidebar wiring; whether MCP-driven mutations get equivalent labeling was not determined here.

## Evidence

- `evidence/EXP-20260714-007-tool-surface-inventory/source/src/app/ai/tools/index.ts` (createAITools: onBeforeExecute/onAfterExecute, MAX_AGENT_STEPS)

## Confidence and limitations

High for the sidebar path. MCP-path undo labeling not audited (different wiring, out of this file's scope).

## Follow-up

Check the MCP/automation bridge for equivalent undo labeling; behaviorally, verify the undo stack after an MCP session shows per-tool entries.
