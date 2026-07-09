---
id: EXP-20260707-003-cross-mode-consistency
product: claude-design
date: 2026-07-07
researcher: yuki
status: completed
protocol: protocols/behavioral-observation-v1.md
research_question: research/questions/RQ-002-intermediate-representation.md
---

# Cross-mode consistency: what survives a change of output mode

## Objective

Distinguish between "conversation context", "stable priors/templates", and "explicit shared representation" as explanations for design-decision consistency, by generating slides from the same intent under two conditions: continuing an existing prototype session versus a fresh session.

## Research question

[RQ-002: Is there a design intermediate representation?](../../research/questions/RQ-002-intermediate-representation.md)

## Pre-registration

### Controlled variables

- The intent is the registered P-FULL prompt of EXP-20260707-001 (adapted only by replacing "high-fidelity prototype" with the mode named in each condition).
- Conversion request in Condition A is exactly: "Now create a slide deck presenting this product." with no design guidance.
- Same account and access window for both conditions.

### Independent variables

- **Condition A (same session):** generate the prototype from P-FULL, then request the slide deck in the same session.
- **Condition B (fresh session):** submit the P-FULL intent, worded for slides, in a new session with no prior context.

### Dependent measures

Per decision dimension, whether the slide deck matches the prototype (A) and whether B matches A:

- Accent color and palette
- Typography choices
- Information architecture (which screens/features are surfaced and in what order)
- Copy tone and specific wording reuse
- Naming (product name, feature labels)

### Initial state

Condition A starts from the completed EXP-001 P-FULL run or an equivalent fresh run; Condition B starts from an empty session.

## Procedure

1. Run Condition A; capture prototype and slides (screenshots plus code/export) into `evidence/EXP-20260707-003-cross-mode-consistency/`.
2. Run Condition B in a fresh session.
3. For each dependent dimension, record match/mismatch between prototype↔slides (A) and A-slides↔B-slides as facts, with side-by-side captures.
4. Note any visible restatement of a brief before the slide generation in either condition.

## Deviations

1. Condition B was attempted (twice, 2026-07-08) with the registered P-FULL prototype wording kept verbatim plus the product's "Make a deck" mode chip, instead of rewording the intent for slides as registered. This created an unregistered conflicting-cue setup: text says prototype, chip says deck.
2. The manipulation failed in both runs: no slide deck was produced; both artifacts are interactive prototypes (OBS-20260709-018). The registered dependent measures cannot be tabulated from these runs, which are archived as evidence but do not constitute Condition B.
3. The image-choice intake questions could not receive the registered "Use your best judgment." response (no free-text affordance) and were left unanswered (OBS-20260709-019); this recurred in Condition A's step-1 green-swatch question. Condition B's intake had no image-choice question.
4. Evidence was captured into working folders `evidence/0708/` and `evidence/0709/` and reorganized on ingestion; see manifest Transformations.
5. Both registered conditions were successfully run on 2026-07-09. Condition A used the registered wording verbatim in both steps. Condition B used the intent reworded to "Design a slide deck of a habit-tracking web app…" (the registered adaptation); the submitted message displays a "Make a deck" chip consistent with that wording — an aligned-cue setup, unlike the conflicting-cue failures of deviation 1.
6. In Condition A step 1, the `empty_states` intake answer was entered with stray trailing backticks ("Use your best judgment.``"); all other answers used the registered wording exactly.
7. Both deck requests triggered structured intake forms not anticipated by the registration (5 fields in A step 2, 8 in B); per the response policy all were answered "Use your best judgment." (OBS-20260709-025).
8. The Condition A PPTX export flattens all typefaces to Arial; the typography measure was taken from the `.dc.html` standalone exports instead.

## Observations

- [OBS-20260709-018-deck-mode-overridden-by-prompt-text](../../observations/OBS-20260709-018-deck-mode-overridden-by-prompt-text.md)
- [OBS-20260709-019-intake-schema-varies-again](../../observations/OBS-20260709-019-intake-schema-varies-again.md)
- [OBS-20260709-020-craft-idiom-tracks-starter](../../observations/OBS-20260709-020-craft-idiom-tracks-starter.md)
- [OBS-20260709-025-deck-conversion-triggers-second-intake](../../observations/OBS-20260709-025-deck-conversion-triggers-second-intake.md)
- [OBS-20260709-026-same-session-consistency-is-value-level](../../observations/OBS-20260709-026-same-session-consistency-is-value-level.md)
- [OBS-20260709-027-fresh-session-converges-on-language-not-values](../../observations/OBS-20260709-027-fresh-session-converges-on-language-not-values.md)
- [OBS-20260709-028-token-layer-appears-run-contingently](../../observations/OBS-20260709-028-token-layer-appears-run-contingently.md)
- [OBS-20260709-029-written-plan-artifact-appears-in-deck-mode](../../observations/OBS-20260709-029-written-plan-artifact-appears-in-deck-mode.md)

## Results

Per registered dimension — A: prototype↔deck (same session); B↔A: fresh-session deck vs A's deck:

| Dimension | A: prototype↔slides | B↔A |
| --- | --- | --- |
| Accent color / palette | Match, value-level: 7 hex reused exactly incl. accent `#6B8E7F` (OBS-026) | Structure match, zero shared values: accent `#7C9473` vs `#6B8E7F`; every B color a near-miss (OBS-027) |
| Typography | Match: Nunito both sides | Mismatch: Quicksand+Karla vs Nunito |
| Information architecture | Match: slides 4–6 = the three core screens in nav order, shown as live screenshots | Same skeleton (title→problem→principles→screens→close), 10 vs 8 slides; screens re-created as mockups; B adds a design-spec slide |
| Copy tone / wording | Tone match; zero literal UI-string reuse; brief phrases recur | Tone match; shared subtitle stem; B invents audience specifics ("kids ages 3 to 12") and a user quote |
| Naming | "Habit Tracker" both sides | "Habit Tracker for Busy Parents" vs "Habit Tracker" |

## Evidence

See `evidence/EXP-20260707-003-cross-mode-consistency/manifest.md`.

## Hypothesis

Pre-registered interpretation matrix:

- A consistent, B divergent → consistency is carried by conversation/session context, not a stable representation.
- A consistent, B consistent → consistency comes from strong priors or templates given the same brief; a session-level representation is not required to explain it.
- A divergent → neither context nor representation reliably transfers decisions across modes; modes are more independent than the shared-canvas UI suggests.

Falsification of the "shared intermediate representation" reading requires only the first row to hold.

### Outcome

Both conditions ran on 2026-07-09. The matrix adjudicates differently by altitude. At the craft-value level (specific hex values, font families, product title), the first row holds: A is consistent — exactly, seven hex values reused verbatim — and B is divergent on every value (OBS-026, OBS-027). Consistency at this level is carried by session context, with the carrier directly visible: the deck pipeline screenshots the running prototype and copies its literals. At the design-language level (warm ivory + muted sage + rounded sans + guilt-free tone), the second row holds: A and B both land in the brief's family, so priors given the same brief explain that layer without a session representation. The "shared intermediate representation" reading is therefore falsified at the value level, and unnecessary at the language level — the same stability split OBS-009 found across runs reappears across modes. Additionally, cross-mode style matching is not automatic: it is surfaced as a delegated intake question (OBS-025), making it an ownership decision rather than a representational guarantee.

## Conclusion

Supported by evidence: same-session conversion transfers design decisions at value fidelity via visible procedural means — screenshot capture of the source artifact plus in-context literals (OBS-026); a fresh session given the same intent reproduces the design language but re-derives every craft value (OBS-027); whether the deck should match the app's style is itself parameterized and handed to the user (OBS-025). Unexpected structural findings: a complete semantic CSS token system appeared in the B deck — the first in nine audited artifacts — showing tokenization is run-contingent and bounding EXP-002's conclusion (OBS-028); and the B run wrote a `scratchpad.md` before designing, the first observed pre-generation planning artifact, with the deck also articulating its own design system as a spec slide (OBS-029). Confidence: moderate — single run per condition, but the value-level facts are exact and the corpus of prior runs (EXP-001/002) makes value-level coincidence in B implausible.

## Limitations

One intent domain; slide mode may legitimately re-prioritize information architecture, so IA mismatch is weaker evidence than color/typography mismatch; single run per condition; the delegated `visual_style` answer means A's "match" outcome reflects the agent's default, not the only reachable behavior; B's message carried an aligned "Make a deck" chip, so pure-text triggering was not isolated.

## Next experiment

A was consistent: repeat with a third mode (document) to test whether consistency degrades with distance between modes. Two additional follow-ups registered by the observations: re-run the conversion answering `visual_style` with the divergent option (OBS-026), and tabulate token presence against source-artifact availability across further deck runs (OBS-028).
