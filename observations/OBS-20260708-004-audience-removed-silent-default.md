---
id: OBS-20260708-004-audience-removed-silent-default
experiment: EXP-20260707-001-ambiguity-ladder
timestamp: 2026-07-07T22:23:00+08:00
observer: yuki
---

# Removing the audience produced no question; content silently went generic

## Fact

In P-NO-AUDIENCE, no intake question mentioned target users, audience, or use context. The generated sample habits were generic adult self-care items (Drink water, Morning walk, Read 10 pages, Stretch). In every condition where the audience was specified (P-FULL, P-NO-CONTENT, P-NO-STYLE), sample habits were parent-specific (Bedtime Story, 10-Minute Tidy, Family dinner phones away, Read to kids, Meal prep check). No condition asked an abstract audience question; the closest observed was P-FULL's concrete "What kind of habits should sample data show?" with audience-flavored options.

## Interpretation

Audience sits on the silent-default side of the decision boundary: given, it demonstrably propagates into content decisions; absent, it is assumed rather than elicited. A candidate refinement: the system asks only artifact-level questions (what to show) and never brief-level questions (who is this for), so audience can only be elicited through concrete proxies. Alternative: with one run per condition, the omission could be sampling noise.

## Evidence

- `evidence/EXP-20260707-001-ambiguity-ladder/p-no-audience-questions.png`
- `evidence/EXP-20260707-001-ambiguity-ladder/p-no-audience-output.png`
- `evidence/EXP-20260707-001-ambiguity-ladder/p-full-output.png`
- `evidence/EXP-20260707-001-ambiguity-ladder/p-no-content-output.png`

## Confidence and limitations

Single run per condition; the propagation half (audience → content) replicated across three conditions and is higher confidence than the no-question half.

## Follow-up

Re-run P-NO-AUDIENCE twice; also test a domain where audience is business-critical (for example a medical intake form).
