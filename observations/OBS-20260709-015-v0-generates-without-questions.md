---
id: OBS-20260709-015-v0-generates-without-questions
experiment: EXP-20260707-005-ambiguity-ladder-v0
timestamp: 2026-07-09T09:00:00+08:00
observer: yuki
---

# v0 generates immediately on P-FULL with zero clarifying questions

## Fact

The registered P-FULL prompt, submitted verbatim to v0 (anonymous Drafts session, 2026-07-08), produced no clarifying question of any kind. The first agent turn after "Thought for 1s" was "I'll build this habit-tracking prototype. Let me start by understanding the project structure and generating design direction." followed directly by build steps (scanned project structure, generated design direction, wrote theme/files). There is no intake form, no inline question, and no pause for user input anywhere in the run. The product's own counter reports "Worked for 5m 11s"; the finished prototype was delivered in a single uninterrupted turn.

## Interpretation

Under a fully specified brief, v0 resolves nothing through elicitation — consistent with the pre-registered hypothesis that v0 resolves ambiguity by assumption. In the same condition, Claude Design raised a 7-question intake form (EXP-001 P-FULL, OBS-20260708-001). Note the discriminating comparison is still open: P-FULL is the condition where a tool has the least reason to ask, so this alone cannot distinguish "v0 never asks" from "v0 asks only under ambiguity" — the removed-dimension conditions are needed.

## Evidence

- `evidence/EXP-20260707-005-ambiguity-ladder-v0/v0-p-full-output.png`
- `evidence/EXP-20260707-005-ambiguity-ladder-v0/v0-p-full-conversation.png`
- `evidence/EXP-20260707-005-ambiguity-ladder-v0/v0-p-full-conversation-01.png`

## Confidence and limitations

High for this run (the full conversation is short and captured end to end). Single run; anonymous tier; v0's behavior may differ signed-in or across dates.

## Follow-up

Run the four remaining ladder conditions on v0, especially P-VAGUE, where Claude Design asked direction-level questions.
