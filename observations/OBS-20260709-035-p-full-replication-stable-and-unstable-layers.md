---
id: OBS-20260709-035-p-full-replication-stable-and-unstable-layers
experiment: EXP-20260709-006-little-wins-cross-account
timestamp: 2026-07-09T19:40:00+08:00
observer: yuki (run), claude (code tabulation)
---

# The P-FULL replication separates v0's stable behaviors from run-to-run variance

## Fact

The second P-FULL run (different account, 2026-07-09) replicated, against the first (2026-07-08): zero clarifying questions ("I'll build a high-fidelity habit-tracking prototype. Let me start by understanding the project structure and generating a design direction in parallel."); a "Generated design direction" process step with contents not shown; a single uninterrupted turn of comparable length ("Worked for 5m 34s" vs "5m 11s"); an embedded-browser self-QA pass ending in "Cleaned up screenshots"; and the same stack (Next.js 16.2.6, Tailwind 4, scaffold name "my-project").

It did not replicate: the persona — account 1's today-view hardcoded "…, Riley", account 2's `greeting()` returns a bare time-of-day greeting with no name anywhere in the export; the brand name (OBS-20260709-034); and the component decomposition (`habit-app.tsx`/`create-habit.tsx`/`habit-icon.tsx`, a third arrangement matching neither account-1 export).

## Interpretation

With two P-FULL runs, v0's behaviors sort into layers by stability: elicitation policy (zero questions, now 4-for-4 across all v0 runs), the internal design-direction step, the self-QA loop, and build time look like product-level constants; persona invention, brand name, and code decomposition vary run to run. This demotes "v0 personifies even a fully specified brief" (OBS-20260709-017) from a product behavior to a sampled one — the run-to-run-variance alternative that observation flagged is now the supported reading. It also mirrors the Claude Design record: neither product's within-condition variance touches the elicitation contrast, which is the experiment's primary measure. Alternative: the persona difference could be account- rather than sampling-driven; two runs cannot distinguish these.

## Evidence

- `evidence/EXP-20260709-006-little-wins-cross-account/new-account-p-full-v0-conversation.png`
- `evidence/EXP-20260709-006-little-wins-cross-account/new-account-p-full-v0-conversation-01.png`
- `evidence/EXP-20260709-006-little-wins-cross-account/new-account-p-full-v0-code/components/today-view.tsx`
- `evidence/EXP-20260707-005-ambiguity-ladder-v0/v0-p-full-code/components/today-view.tsx` (contrast)

## Confidence and limitations

High for the tabulated facts. Two runs, two accounts: stability claims are 2/2 observations, not proof; the unstable layers are confirmed unstable (a single counterexample suffices).

## Follow-up

None new; folded into EXP-20260709-006's next-experiment note (same-account replications if v0 access returns).
