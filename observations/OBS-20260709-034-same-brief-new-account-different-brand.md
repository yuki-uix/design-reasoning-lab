---
id: OBS-20260709-034-same-brief-new-account-different-brand
experiment: EXP-20260709-006-little-wins-cross-account
timestamp: 2026-07-09T19:30:00+08:00
observer: yuki (run), claude (code tabulation)
---

# Same brief, new account: the brand changes to "Rooted", the identity beneath it recurs

## Fact

The P-FULL prompt, byte-identical to the EXP-005 runs, submitted on a second account (2026-07-09, fresh chat), produced an artifact branded "Rooted": summary prose "Your habit-tracking prototype, Rooted, is built and verified end-to-end", `app/layout.tsx` metadata "Rooted · Gentle habit tracking". "Little Wins" — produced twice on account 1, from this prompt and from P-NO-AUDIENCE — does not appear.

Every layer beneath the name recurred:

- Tagline: "Gentle habit tracking" verbatim matches both account-1 metadata titles ("Little Wins — gentle habit tracking" / "Little Wins — Gentle Habit Tracking").
- Typeface: Nunito via `next/font`, third time.
- Tokens: background `oklch(0.976 0.012 88)` vs account 1's `oklch(0.981 0.012 92)` and `oklch(0.975 0.012 95)`; primary `oklch(0.63 0.078 152)` vs `oklch(0.63 0.09 150)` and `oklch(0.62 0.078 150)` — a third near-miss clustering, no exact value shared.
- Seed habits: "Drink a glass of water" and "Three deep breaths" verbatim-match account 1's P-FULL seeds; "Read with the kids" and "Walk around the block" paraphrase its "Read to the kids" and "10-minute walk outside".
- Copy register: warm and non-judgmental ("A fresh start whenever you're ready. No rush.", "Missed days aren't failures").

## Interpretation

This falsifies the deterministic prior-recall reading of OBS-20260709-031 (and the corresponding sentence in EXP-005's conclusion): "Little Wins" is not v0's stored answer to the calm-warm habit brief, because holding the brief fixed and changing only the account changed the name. Name reproduction tracked the account — same account, different briefs → same name; different account, same brief → different name — which fits account-level carryover, though per-session sampling from a small brief-conditioned name pool (with account 1 drawing "Little Wins" twice) also fits. What survives, strengthened, is the layer distinction from OBS-20260709-027 and OBS-20260709-033: the brief family deterministically selects an identity family (tagline, typeface, palette values to within a few token units, seed content, register), and only the name on top is sampled. Alternatives: n=1 on this cell; the tagline recurrence could itself be account-independent prior recall — it is now the strongest candidate for a genuinely stored string.

## Evidence

- `evidence/EXP-20260709-006-little-wins-cross-account/new-account-p-full-v0-code/app/layout.tsx`
- `evidence/EXP-20260709-006-little-wins-cross-account/new-account-p-full-v0-code/app/globals.css`
- `evidence/EXP-20260709-006-little-wins-cross-account/new-account-p-full-v0-code/lib/habits.ts`
- `evidence/EXP-20260709-006-little-wins-cross-account/new-account-p-full-v0-conversation-01.png`
- `evidence/EXP-20260707-005-ambiguity-ladder-v0/v0-p-full-code/app/layout.tsx` (contrast)
- `evidence/EXP-20260707-005-ambiguity-ladder-v0/v0-p-no-audience-code/app/layout.tsx` (contrast)

## Confidence and limitations

High for the facts (all three code exports committed as evidence). The account-memory vs sampling split is unresolved and unresolvable with current access (credits exhausted on both accounts).

## Follow-up

Three same-account P-FULL runs would estimate the name pool; a pristine account with no prior chats would remove the carryover channel entirely.
