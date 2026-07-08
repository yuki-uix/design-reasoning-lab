---
id: OBS-20260709-021-cross-product-design-language-convergence
experiment: EXP-20260707-005-ambiguity-ladder-v0
timestamp: 2026-07-09T09:30:00+08:00
observer: yuki
---

# Two different products converge on the same concrete design language for the same brief

## Fact

Given the same P-FULL brief ("calm and warm, soft rounded corners, generous whitespace, a muted green accent color, sans-serif typography"), v0 and Claude Design landed on near-identical concrete choices. v0: Nunito, oklch tokens, background `oklch(0.981 0.012 92)`, primary green `oklch(0.63 0.09 150)`. Claude Design run 2 of the same-day deck-mode pair: Nunito, oklch tokens, base surfaces at hue ~95, greens at hue 150 (e.g. `oklch(0.58 0.08 150)`). Across all Claude Design runs of this brief (EXP-001 + EXP-003), fonts sample from a small warm-rounded-sans pool that includes Nunito and Quicksand; Claude Design's own intake options literally name the pool ("One warm, friendly sans (e.g. Nunito/Quicksand-style rounded sans)"), and v0's summary name-checks the same family ("the Nunito sans-serif"). Both products' palettes share one structure: warm off-white base around hue 90–95, muted sage-green accent around hue 150, small warm per-habit tints (v0's green/sage/apricot/clay vs. Claude Design's sage/apricot/clay noted in v0's summary and EXP-001 palettes).

## Interpretation

The brief-to-design-language mapping looks like a shared prior rather than a product-specific system: two different products (one on a disclosed Sonnet 5 Medium, one on an undisclosed model) translate "calm/warm/muted green" into nearly the same hue numbers and font shortlist. Alternatives: both products may share training lineage or similar design-system defaults (both emit oklch-token CSS, a recent-idiom marker); or the brief is specific enough that any competent executor converges. This bounds how much of EXP-001's "design language stability" should be credited to Claude Design as a product.

## Evidence

- `evidence/EXP-20260707-005-ambiguity-ladder-v0/v0-p-full-code/app/globals.css`
- `evidence/EXP-20260707-005-ambiguity-ladder-v0/v0-p-full-code/app/layout.tsx`
- `evidence/EXP-20260707-003-cross-mode-consistency/derived/p-full-slide-v2-app.html`
- `evidence/EXP-20260707-001-ambiguity-ladder/` (EXP-001 exports, via OBS-20260708-009)

## Confidence and limitations

High for the token/font facts; the convergence claim rests on few runs and one brief. "Same hue numbers" is read from tokens, not perceptual measurement.

## Follow-up

Try a brief with an unusual style vocabulary (e.g. "brutalist, acid green") on both products to see whether convergence survives off the beaten path of priors.
