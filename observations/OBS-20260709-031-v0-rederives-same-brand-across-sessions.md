---
id: OBS-20260709-031-v0-rederives-same-brand-across-sessions
experiment: EXP-20260707-005-ambiguity-ladder-v0
timestamp: 2026-07-09T15:40:00+08:00
observer: yuki (run), claude (code tabulation)
---

# A fresh v0 session re-derives the identical invented brand "Little Wins"

## Fact

The P-NO-AUDIENCE run (2026-07-09, fresh session, researcher-confirmed; same personal free-tier account as P-FULL) again produced an artifact branded "Little Wins" with a leaf logo — the same invented name as the P-FULL run a day earlier, from a different prompt, with no name given in either. `app/layout.tsx` metadata: "Little Wins — Gentle Habit Tracking" vs P-FULL's "Little Wins — gentle habit tracking". The oklch tokens are near-miss, not identical: background `oklch(0.975 0.012 95)` vs `oklch(0.981 0.012 92)`, primary `oklch(0.62 0.078 150)` vs `oklch(0.63 0.09 150)`. The component decomposition differs entirely (`habit-app.tsx`, `create-habit-flow.tsx`, `habit-icon.tsx` vs P-FULL's `app-shell.tsx`, `create-habit.tsx`, `habit-store.tsx`), and the project name is again the scaffold default "my-project" — both corroborating a fresh session rather than a resumed one.

## Interpretation

This is the v0 counterpart of OBS-20260709-027, with a stronger naming layer: Claude Design's fresh sessions converged on design language but diverged on every craft value and never re-derived a name, while v0 reproduced the invented brand verbatim across sessions and prompts. That reads OBS-20260709-017's "brand invention" as prior recall — "Little Wins" looks like the model's stored answer for a gentle habit tracker, not a per-session creative act. The value layer behaves like Claude Design's: near-miss tokens, same language, no shared values. Alternatives: account-level memory or personalization could carry the name across sessions despite the fresh-session control (both runs were signed in to the same account, and v0's internals are undisclosed); two runs cannot rule out coincidence over a small name pool.

## Evidence

- `evidence/EXP-20260707-005-ambiguity-ladder-v0/v0-p-no-audience-code/app/layout.tsx`
- `evidence/EXP-20260707-005-ambiguity-ladder-v0/v0-p-no-audience-code/app/globals.css`
- `evidence/EXP-20260707-005-ambiguity-ladder-v0/v0-p-full-code/app/layout.tsx`
- `evidence/EXP-20260707-005-ambiguity-ladder-v0/v0-p-full-code/app/globals.css`
- `evidence/EXP-20260707-005-ambiguity-ladder-v0/v0-p-no-audience-output.png`

## Confidence and limitations

High for the facts (both code exports committed as evidence). The prior-recall interpretation rests on two runs and is confounded by the shared account; an anonymous or different-account replication would separate model prior from account memory.

## Follow-up

Run one ladder condition in a signed-out session and check whether "Little Wins" appears again; test whether an explicitly supplied product name suppresses it.
