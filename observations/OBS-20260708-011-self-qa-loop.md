---
id: OBS-20260708-011-self-qa-loop
experiment: EXP-20260707-001-ambiguity-ladder
timestamp: 2026-07-07T21:13:00+08:00
observer: yuki
---

# Generation is followed by an autonomous check-and-fix pass with concrete visual bugs found

## Fact

After creating the P-FULL artifact, the interface showed "Checking the design for issues…", then "Found issues — fixing…", then a log section "Refining design, Refining logic ×4, Finishing up", concluding "Fixed both — header text no longer overlaps, and monograms now use the first letter instead of a leading digit." The P-FULL Today screen initially rendered a habit monogram as "1"; post-fix captures show letter monograms.

## Interpretation

The pipeline includes an autonomous post-generation inspection that catches concrete rendering defects (text overlap, wrong monogram glyph) and applies fixes without user involvement — evidence that visual quality control is part of the loop, and consistent with the separate verifier role in OBS-20260708-010.

## Evidence

- `evidence/EXP-20260707-001-ambiguity-ladder/p-full-conversation.png`
- `evidence/EXP-20260707-001-ambiguity-ladder/p-full-output.png`

## Confidence and limitations

Directly observed in P-FULL; other runs' logs were not fully expanded at capture time.

## Follow-up

Record whether the fix pass runs in every generation or only when issues are detected.
