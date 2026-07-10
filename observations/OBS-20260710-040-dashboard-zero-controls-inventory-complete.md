---
id: OBS-20260710-040-dashboard-zero-controls-inventory-complete
experiment: EXP-20260707-004-slider-comment-ownership
timestamp: 2026-07-10T15:10:00+08:00
observer: yuki (run), claude (template extraction)
---

# The dashboard also ships zero controls; Part 1's inventory closes at 3–0–0

## Fact

The e-commerce dashboard run (2026-07-10, Sonnet 5 Medium, one-sentence registered prompt, all 8 intake questions delegated) declared no tweakable variables: the Tweaks button opens only the "Describe a tweak…" free-text box, and the export's `<script type="text/x-dc">` has no `data-props` attribute. Part 1's control inventory across the three registered domains is therefore: habit tracker 3, landing page 0, dashboard 0. Two subsidiary facts: the *intake* for this run itself used a native slider (layout variations, 1–3) — the slider mechanism exists and fired pre-generation; and the artifact is internally interactive (working 7D/30D/90D data toggle) without any of that interactivity being exposed as a Tweaks parameter.

## Interpretation

The dashboard was OBS-20260710-038's discriminator, and it resolved against domain-richness: the most parameter-shaped domain of the three produced no parameters. The surviving readings are (a) run-variance — control generation is high-variance product behavior, like the token layer (OBS-20260709-028) — and (b) the intake-absorption rule: the only run that produced controls is the only run whose brief specified the taste space, so intake never claimed it; both one-liner runs spent their ownership-return through the 8-question intake and shipped nothing residual. (a) and (b) are indistinguishable at n=3, but (b) makes a testable prediction: re-running the one-liner briefs with fully specified style clauses should produce controls. Either way, the pre-registered hypothesis's premise — that controls reliably appear and their *category* is the variable — was wrong; the variable is whether controls appear at all. Where they did appear, the taste/structure split held (OBS-20260710-036).

## Evidence

- `evidence/EXP-20260707-004-slider-comment-ownership/dashboard-tweak.png`
- `evidence/EXP-20260707-004-slider-comment-ownership/dashboard-Ecommerce Analytics Dashboard.html` (no `data-props`)
- `evidence/EXP-20260707-004-slider-comment-ownership/dashboard-questions.png` (intake slider)

## Confidence and limitations

High for the inventory facts (UI and code agree in all three runs). One run per domain; run-variance vs intake-absorption is unresolved; the two zero-control runs are also the two one-sentence briefs, so brief-specificity and domain are confounded.

## Follow-up

The (b)-testing run: one of the two one-liner domains re-run with a fully specified style/tone clause; controls appearing would support intake-absorption over run-variance.
