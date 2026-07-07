---
id: OBS-20260708-007-unspecified-dimensions-become-controls
experiment: EXP-20260707-001-ambiguity-ladder
timestamp: 2026-07-07T23:04:00+08:00
observer: yuki
---

# Unspecified taste dimensions were parameterized into user-facing controls

## Fact

P-NO-STYLE's artifact shipped with a Tweaks panel containing a `primaryAccent` three-swatch color control, a `tone` toggle (encouraging | minimal), and a `userName` text field; the build summary announced "Tweaks: accent color, tone, and name." P-NO-CONTENT's summary announced "Tweakable: streak framing (words vs numbers), density, and accent palette." In the extracted P-NO-STYLE template, `primaryAccent` is referenced 22 times as a `{{ primaryAccentColor }}` binding, and the file embeds editor metadata of the form `"primaryAccent": {"editor": "color…"}`.

## Interpretation

Dimensions the prompt leaves unspecified — and that the intake form did not resolve, because answers were delegated back — tend to be exposed as runtime controls rather than fixed: the agent converts unresolved taste decisions into parameters and returns ownership to the human. The editor metadata shows "which decisions are variables versus constants" is encoded in the artifact format itself. Alternative: controls may be a generic feature added regardless of specification gaps; P-FULL's artifact controls were not inventoried, so the correlation with unspecified dimensions is suggestive, not established.

## Evidence

- `evidence/EXP-20260707-001-ambiguity-ladder/p-no-style-output.png`
- `evidence/EXP-20260707-001-ambiguity-ladder/p-no-content-output-02.png`
- `evidence/EXP-20260707-002-artifact-code-autopsy/derived/p-no-style-app.html`

## Confidence and limitations

Mechanism (declared tweak variables) is high confidence; the "unspecified → control" selection rule is a hypothesis pending a Tweaks inventory across all five artifacts.

## Follow-up

EXP-20260707-004 Part 1 should inventory Tweaks controls per artifact against each prompt's specified dimensions.
