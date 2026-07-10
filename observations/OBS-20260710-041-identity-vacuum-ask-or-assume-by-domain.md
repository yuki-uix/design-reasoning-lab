---
id: OBS-20260710-041-identity-vacuum-ask-or-assume-by-domain
experiment: EXP-20260707-004-slider-comment-ownership
timestamp: 2026-07-10T15:20:00+08:00
observer: yuki (run), claude (code tabulation)
---

# The same identity vacuum is asked about for the landing page but silently filled for the dashboard

## Fact

Both one-liner briefs left the company/brand unspecified. The landing-page intake asked for it as its first question ("Roaster name (or should I make one up?)", OBS-20260710-039). The dashboard intake, run the same afternoon, asked no identity question — its 8 questions covered use case, metrics, viewer, style, density, scope, variations, and data — and the artifact silently shipped an invented store ("Sundial Goods"), an invented user persona ("Jamie Ma — Ops Lead" avatar), five named products with SKUs and revenue figures, and four inventory alerts. The dashboard intake did ask "Who's the primary viewer?" — an audience-type question, which EXP-001 never observed for the habit brief (OBS-20260708-004).

## Interpretation

Within one product, on one day, the identity vacuum crossed the ask/assume boundary depending on the artifact: asked where identity is the artifact's subject (a brand landing page), assumed where identity is set dressing for the artifact's real subject (metrics presentation). This is the cleanest support yet for the cost-of-error reading of the boundary — the same missing fact is load-bearing in one domain and incidental in the other — and it refines EXP-001's dimension-level map (audience→assume) into a decision-level rule: what gets asked is whatever the artifact cannot be wrong about. The viewer question fits the same rule (a dashboard built for the wrong viewer is the wrong dashboard; a habit app's sample data is not). Alternatives: intake schemas vary run to run (OBS-20260708-002), so one landing/dashboard pair cannot exclude schema sampling noise; "Jamie Ma" and the product catalog may also just be dashboard-idiom furniture (every dashboard template needs a logged-in user).

## Evidence

- `evidence/EXP-20260707-004-slider-comment-ownership/dashboard-questions.png` (no identity question; viewer question)
- `evidence/EXP-20260707-004-slider-comment-ownership/dashboard-output.png` (Sundial Goods; Jamie Ma — Ops Lead)
- `evidence/EXP-20260707-004-slider-comment-ownership/landing-page-questions.png` (contrast: name question first)
- `evidence/EXP-20260707-004-slider-comment-ownership/dashboard-Ecommerce Analytics Dashboard.html`

## Confidence and limitations

High for the facts. The domain-dependence interpretation rests on one run per domain with per-run schema variance known to exist; a second landing/dashboard pair would separate rule from sample.

## Follow-up

Feeds RQ-003 and the FND-003 layer picture (invented names again: "Sundial", "Jamie Ma" join "Maya ×2" in the small-name-pool tally). A repeat pair of the two one-liners tests schema-noise vs rule.
