---
id: OBS-20260709-016-v0-self-qa-browser-loop
experiment: EXP-20260707-005-ambiguity-ladder-v0
timestamp: 2026-07-09T09:05:00+08:00
observer: yuki
---

# v0 runs a self-verification loop in an embedded browser and ships its screenshots

## Fact

After writing the code, v0's process log shows "Now let me verify it works in the browser." → "Loaded agent-browser skill" → "Opened preview", then a walkthrough of the running app. The final message claims specific verified behaviors: "the new 'Stretch for 5 minutes' habit was added and now appears in the Today list, with the count updated to '2 of 5'. All three core screens and the full creation flow are verified working." The project download contains the agent's own verification screenshots at the project root (`today.png`, `progress.png`, `create1.png`–`create3.png`, `checked.png`, `after-add.png`), timestamped with the run.

## Interpretation

Post-generation self-QA against the live artifact is present in both products: Claude Design runs a verifier/fix pass (OBS-20260708-011; also "Found issues — fixing…" in the EXP-003 run 2), and v0 drives a browser and screenshots its checks. This weakens any reading of self-QA as a Claude Design-distinctive behavior; it looks category-generic for agentic design tools. Alternative: both may inherit the pattern from similar agent scaffolding rather than convergent product design.

## Evidence

- `evidence/EXP-20260707-005-ambiguity-ladder-v0/v0-p-full-conversation.png`
- `evidence/EXP-20260707-005-ambiguity-ladder-v0/v0-p-full-conversation-01.png`
- `evidence/EXP-20260707-005-ambiguity-ladder-v0/v0-p-full-code/` (root-level `*.png` verification screenshots)

## Confidence and limitations

High that the loop ran and screenshots were produced; the depth of verification (vs. narrated confidence) is not independently checked. Single run.

## Follow-up

Compare failure handling: does v0 also report "found issues and fixed them" mid-run on a harder brief, as Claude Design does?
