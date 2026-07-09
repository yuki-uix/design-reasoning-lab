---
id: OBS-20260709-033-v0-style-vacuum-flips-register
experiment: EXP-20260707-005-ambiguity-ladder-v0
timestamp: 2026-07-09T18:20:00+08:00
observer: yuki (run), claude (code tabulation)
---

# With no style clause, v0's default is a technical-quantified register, and "Little Wins" does not reappear

## Fact

The P-VAGUE artifact is branded "Cadence" ("HABIT SYSTEM / Cadence"; `app/layout.tsx` metadata "Cadence — Habit Tracker") and speaks a technical-quantified register: Geist + Geist Mono fonts, uppercase tracked monospace labels ("TOTAL EXECUTIONS", "30-DAY EFFICIENCY", "CONSISTENCY MATRIX"), a GitHub-style 26-week contribution grid, creation copy "Initialize routine" over a field labeled "IDENTIFIER", and seed habits in a productivity register (Read 30 mins, Hydration, Deep work, Meditation). Tokens sit on a cool near-neutral axis: background `oklch(0.968 0.002 247)`, foreground and primary at hue 260 with chroma ≤ 0.006.

Both styled runs (P-FULL, P-NO-AUDIENCE), whose prompts specified "calm and warm … muted green … encouraging, never guilt-inducing", produced "Little Wins": Nunito, warm hue-92–95 backgrounds, green-150 primary, and coaxing copy ("No rush on the rest.", "you're moving gently forward"). None of that language survives in P-VAGUE — completion is scored as an efficiency percentage, exactly the guilt-adjacent framing the styled briefs forbade.

## Interpretation

The calm-warm identity of the first two runs came from the prompt, not from a v0 house style: remove the style and tone clauses and every layer flips together — brand name, fonts, palette temperature, copy register, even what the seed data says the user's life is about (self-care → productivity). This extends OBS-20260709-031: "Little Wins" is not v0's answer to "habit tracker", it is v0's answer to "calm, warm, muted-green habit tracker", which strengthens the prior-recall reading (a stored brief-family → identity mapping) over account memory — the different account in this run removes the account-memory channel for the non-recurrence, though the prompt also changed, so the two explanations are not fully separated. Claude Design's counterpart behavior differs in mechanism: it also invents brands in vacuums (Sprout, HABITLY — OBS-20260708-014) but put direction-level choices ("overall vibe") to the user as intake questions on this same prompt. Alternatives: n=1; "Cadence" may itself be a stored default for unstyled habit trackers (a second unstyled run would tell); the cool-technical default may be Vercel/Geist house styling rather than a model prior.

## Evidence

- `evidence/EXP-20260707-005-ambiguity-ladder-v0/v0-p-vague-conversation.png`
- `evidence/EXP-20260707-005-ambiguity-ladder-v0/v0-p-vague-code/app/layout.tsx`
- `evidence/EXP-20260707-005-ambiguity-ladder-v0/v0-p-vague-code/app/globals.css`
- `evidence/EXP-20260707-005-ambiguity-ladder-v0/v0-p-vague-code/components/stat-card.tsx`
- `evidence/EXP-20260707-005-ambiguity-ladder-v0/v0-p-vague-code/lib/habits.ts`
- `evidence/EXP-20260707-005-ambiguity-ladder-v0/v0-p-full-code/app/globals.css` (contrast)

## Confidence and limitations

High for the artifact facts (code export committed). The register-flip attribution rests on one unstyled run against two styled ones, with account and date partially confounded; Geist is Vercel's own type family, so platform branding is a live alternative for the font choice specifically.

## Follow-up

A second unstyled run (any account) tests whether "Cadence" and the technical register are themselves stable priors; an explicit "calm and warm" prompt on the second account would test whether "Little Wins" follows the brief family across accounts.
