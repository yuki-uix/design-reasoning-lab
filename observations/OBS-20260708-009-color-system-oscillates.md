---
id: OBS-20260708-009-color-system-oscillates
experiment: EXP-20260707-001-ambiguity-ladder
timestamp: 2026-07-08T08:30:00+08:00
observer: yuki
---

# The color encoding oscillates between oklch and hex across runs; palette structure is stable

## Fact

Color formats per extracted template: P-FULL 94 oklch values on exactly two hues (85 ×74, 150 ×20), zero hex; P-NO-AUDIENCE 80 oklch values on eight hues clustered in two families (50–75 warm, 130–155 green), zero hex; P-NO-CONTENT and P-NO-STYLE all hex, zero oklch; P-VAGUE mixed (4 oklch, 7 distinct hex). P-FULL's logic block defined named constants (`GREEN`, `GREEN_SOFT`, `GREEN_DARK`, `BORDER`); no other run did. No run used CSS custom properties. Font pairings differed every run: Sora+Karla, Fredoka+Inter, Nunito+Inter, Figtree, Inter alone. All five palettes share the same structure: warm neutral base, muted sage-green primary accent, small set of per-habit accent colors.

## Interpretation

The craft implementation (color encoding, token constants, font choice) is non-deterministic run to run, while the palette architecture is stable. This falsifies the single-run inference from P-FULL that "a parametric oklch color system" is the product's mechanism — it is one of several emitted styles. Stability lives at the design-language level (warm + sage green under a "calm and warm" family of briefs), not the code-idiom level. Alternative: different starters (OBS-20260708-010) may carry different color idioms.

## Evidence

- `evidence/EXP-20260707-002-artifact-code-autopsy/derived/app.html`
- `evidence/EXP-20260707-002-artifact-code-autopsy/derived/p-no-audience-app.html`
- `evidence/EXP-20260707-002-artifact-code-autopsy/derived/p-no-content-app.html`
- `evidence/EXP-20260707-002-artifact-code-autopsy/derived/p-no-style-app.html`
- `evidence/EXP-20260707-002-artifact-code-autopsy/derived/p-vague-app.html`

## Confidence and limitations

Counts are exact for these exports; the oscillation's cause (sampling, starters, model version) is unidentified.

## Follow-up

Correlate color idiom with the starter file named in each run's process log.
