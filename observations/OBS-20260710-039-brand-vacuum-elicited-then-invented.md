---
id: OBS-20260710-039-brand-vacuum-elicited-then-invented
experiment: EXP-20260707-004-slider-comment-ownership
timestamp: 2026-07-10T14:40:00+08:00
observer: yuki (run), claude (template extraction)
---

# Claude Design asks for the missing brand name first, and invents only after explicit delegation

## Fact

The landing-page intake's first question was "Roaster name (or should I make one up?) — Also any tagline you already use". After the registered "Use your best judgment." answer, the artifact shipped the invented brand "Millbrook & Co." plus a full invented identity: founder persona "Maya Reyes" with a garage-origin story, four named bean products with prices, opening hours, and a street address ("4118 Telegraph Ave, Oakland CA"). One coherence slip: the hero kicker says "ROASTED IN THE MISSION" (a San Francisco district) while the badge and address place the roastery in Oakland.

Contrast points: v0 invented brands ("Little Wins", "Rooted", "Cadence") without ever asking (EXP-005/006); Claude Design's own P-FULL runs, where the brief's domain implied no company, invented no brand (plain "Habit Tracker", OBS-20260709-017 contrast half). The founder name "Maya" is Claude Design's second "Maya" on this corpus (EXP-003 run 1 invented persona "Maya" for the habit brief, per OBS-20260709-017's alternatives note).

## Interpretation

The brand vacuum sits on the *ask* side of Claude Design's decision boundary — inverting v0's placement of the identical decision and refining EXP-001's boundary map (audience→assume, content/style→ask) with a case where the elicited dimension is identity itself. Invention is downstream of delegation, not a default: the same product that never branded the habit tracker builds a complete fictional company once the user explicitly hands the decision over. The recurring "Maya" suggests the invented-persona name pool is small (matching v0's name-sampling behavior, OBS-20260709-034). The Mission/Oakland slip shows invented specifics are locally sampled rather than globally checked — consistent with FND-002's no-authoritative-layer picture, extended from style values to content facts. Alternative: one run; "should I make one up?" phrasing may itself be templated for commerce briefs rather than generated from the vacuum.

## Evidence

- `evidence/EXP-20260707-004-slider-comment-ownership/landing-page-questions.png` (name question)
- `evidence/EXP-20260707-004-slider-comment-ownership/landing-page-conversation.png` (delegation echo; summary)
- `evidence/EXP-20260707-004-slider-comment-ownership/landing-page-Millbrook Coffee Landing.html` (Maya Reyes story; address; bean products)
- `evidence/EXP-20260707-004-slider-comment-ownership/landing-page-output.png` (Mission kicker vs Oakland badge/address)

## Confidence and limitations

High for the facts. Boundary-placement interpretation rests on one run in one commerce domain; the dashboard run tests whether identity elicitation recurs when a company is implied but unnamed.

## Follow-up

Dashboard run: does the intake ask for the company/product name again? Longer term: give the same brief *with* a name and check the invention machinery stays off (parallel to OBS-20260709-031's follow-up on v0).
