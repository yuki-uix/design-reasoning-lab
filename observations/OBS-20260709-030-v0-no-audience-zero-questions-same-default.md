---
id: OBS-20260709-030-v0-no-audience-zero-questions-same-default
experiment: EXP-20260707-005-ambiguity-ladder-v0
timestamp: 2026-07-09T15:30:00+08:00
observer: yuki (run), claude (code tabulation)
---

# v0 P-NO-AUDIENCE: zero questions, and the silent audience default matches Claude Design's

## Fact

The registered P-NO-AUDIENCE prompt (P-FULL minus the audience clause), submitted verbatim to v0 on 2026-07-09 in a fresh session, produced no clarifying question. The first agent turn states "This is a Next.js 16 + Tailwind v4 project with base-ui and lucide-react. I have clear design direction, so I'll build the prototype with client-side state." — an explicit clear-direction claim over a brief with a removed dimension. The run completed in one turn ("Worked for 10m 24s" plus a closing "Worked for 23s", with one "Agent Paused / Automatically resuming" event and no user input after the prompt).

The silent audience default, read from the code export:

- Seed habits in `lib/habits.ts` are four generic adult self-care items: Morning stretch, Drink water, Read a few pages, Evening walk. The P-FULL export's parent-flavored seeds ("Read to the kids") have no counterpart.
- `components/today-view.tsx` greets with a time-aware `greeting()` and no persona name; the P-FULL export hardcoded "…, Riley".

Claude Design under the same condition (EXP-001, OBS-20260708-004) raised a 6-question intake form with no audience question, and its silent default was likewise generic adult self-care seed habits (Drink water, Morning walk, Read 10 pages, Stretch) — near-identical to v0's list.

## Interpretation

The first removed-dimension data point supports the hypothesis's v0 half (resolve by assumption, never ask) but does not discriminate between the products, because audience is the one dimension Claude Design also never asked about. Both products land on the same side of the boundary for audience, and even the assumed content converges on nearly the same four habits — suggesting a shared generic-self-care prior fills the audience vacuum in both. Within v0, persona invention tracks audience specification: "Riley" appears only when an audience is given (OBS-20260709-017), so the specified audience propagates into invented demo identity, and its absence removes it. Alternatives: the habit-list convergence may just be the most obvious generic set for a habit tracker; and the elicitation contrast (0 questions vs a 6-question form) still separates the products even in this condition.

## Evidence

- `evidence/EXP-20260707-005-ambiguity-ladder-v0/v0-p-no-audience-conversation.png`
- `evidence/EXP-20260707-005-ambiguity-ladder-v0/v0-p-no-audience-conversation-01.png`
- `evidence/EXP-20260707-005-ambiguity-ladder-v0/v0-p-no-audience-output.png`
- `evidence/EXP-20260707-005-ambiguity-ladder-v0/v0-p-no-audience-code/lib/habits.ts`
- `evidence/EXP-20260707-005-ambiguity-ladder-v0/v0-p-no-audience-code/components/today-view.tsx`

## Confidence and limitations

High for the zero-question fact on the captured portions; the middle of the process log was not captured, but the run was a single uninterrupted turn with no user input, so a blocking question is unlikely to hide there. Single run per condition per product; the cross-product default comparison rests on one run each.

## Follow-up

Run P-NO-CONTENT, P-NO-STYLE, and P-VAGUE — the conditions where Claude Design asked and the products can actually diverge.
