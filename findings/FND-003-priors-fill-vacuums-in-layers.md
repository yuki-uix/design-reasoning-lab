---
id: FND-003-priors-fill-vacuums-in-layers
status: draft
---

# Unspecified dimensions are filled by shared priors, with stability decreasing layer by layer

## Claim

When a brief leaves a dimension open, neither product behaves randomly and neither asks (except Claude Design at the artifact level): the vacuum is filled from priors that are strikingly *shared* — across runs, accounts, and even products. The fill is layered, and the layers have different stability. At the bottom, near-deterministic: the same styled brief maps to the same design language on both products (warm hue-90–95 base, sage green ~150, rounded warm sans from a nameable pool) and to near-identical seed content (both products default a missing audience to the same four generic self-care habits; two of v0's seeds recur verbatim across accounts, as does the tagline "Gentle habit tracking"). In the middle, family-stable but value-sampled: concrete tokens cluster as near-misses, never equal. At the top, sampled per run or account: brand name ("Little Wins" / "Rooted") and persona ("Riley" appearing in one of two identical runs). And the fill is *coherent*: removing the style clause did not degrade the artifact into defaults but swapped in a complete alternative identity — different name, fonts, palette temperature, copy register, and even a different implied user (self-care → productivity metrics).

## Supporting evidence

- Audience vacuum → same generic content on both products: [OBS-20260708-004](../observations/OBS-20260708-004-audience-removed-silent-default.md), [OBS-20260709-030](../observations/OBS-20260709-030-v0-no-audience-zero-questions-same-default.md)
- Cross-product design-language convergence on the same brief: [OBS-20260709-021](../observations/OBS-20260709-021-cross-product-design-language-convergence.md)
- Branding fills the vacuum in both products: [OBS-20260708-014](../observations/OBS-20260708-014-branding-fills-vacuum.md), [OBS-20260709-017](../observations/OBS-20260709-017-v0-invents-brand-and-persona.md)
- Name sampled, identity family stable, across accounts: [OBS-20260709-031](../observations/OBS-20260709-031-v0-rederives-same-brand-across-sessions.md), [OBS-20260709-034](../observations/OBS-20260709-034-same-brief-new-account-different-brand.md), [OBS-20260709-035](../observations/OBS-20260709-035-p-full-replication-stable-and-unstable-layers.md)
- Style vacuum flips the whole register coherently: [OBS-20260709-033](../observations/OBS-20260709-033-v0-style-vacuum-flips-register.md)
- Language-not-values across fresh sessions: [OBS-20260709-027](../observations/OBS-20260709-027-fresh-session-converges-on-language-not-values.md)

## Conflicting evidence

- Claude Design's color *system* (not just values) oscillated across runs ([OBS-20260708-009](../observations/OBS-20260708-009-color-system-oscillates.md)), so even the "stable" bottom layer has run-contingent structure on one product.
- Persona invention contradicts itself across the corpus (Riley present/absent on identical briefs; Maya appearing under EXP-003), which is accommodated as "top layer = sampled" but could equally read as noise swamping the layering for small n.
- The convergence could reflect shared training lineage or shared web-design idiom rather than a meaningful "prior stack"; the lab cannot distinguish these from behavior alone.

## Scope and limitations

One brief family (calm-warm habit tracker) plus one unstyled prompt; the layering has not been tested on a brief with unusual style vocabulary (OBS-021's registered follow-up), where priors should be weakest. Cell sizes are 1–4 runs. "Shared across products" rests on two products that may share model lineage.

## Confidence

Moderate. The layer ordering (register/content most stable → tokens near-miss → names sampled) is consistent with every observation to date, but the sample is small and one domain deep.

## Related hypotheses and concepts

[Decision boundary](../models/concepts/decision-boundary.md) (silent defaults are where priors act); FND-002 (the same layering, read as a mechanism claim); RQ-001.

## Replication status

Audience-default convergence: 2 products × 1 run each. Design-language convergence: 3 v0 runs + ~7 Claude Design runs on the styled brief. Name-sampling: 4 v0 runs across 2 accounts. Register flip: 1 unstyled v0 run (its stability is untested); Claude Design's unstyled conditions elicited instead, so the flip has no Claude Design counterpart yet.
