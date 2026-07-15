---
id: OBS-20260715-044-sidebar-system-prompt-is-design-doctrine
experiment: EXP-20260714-007-tool-surface-inventory
timestamp: 2026-07-15T03:10:00Z
observer: claude (source extraction)
---

# The sidebar system prompt is a 572-line design doctrine, not plumbing

## Fact

`src/app/ai/chat/system-prompt.md` (572 lines) is passed verbatim as the agent's `instructions` in `transports.ts`. Beyond tool mechanics, it contains prescriptive design content: a spacing system ("Pick from 4px grid: 4, 8, 12, 16, 20, 24, 32, 48"), corner-radius doctrine with a derivation formula ("Inner = outer − padding. Cards 16–24, buttons 8–12, chips 4–8, pill = height/2"), a named type scale ("Display 32–40, H1 24–28 … Overline 10–11. 2–3 weights max"), fixed text-hierarchy color values ("Light bg: primary #111827, secondary #6B7280, tertiary #9CA3AF"), a mandatory four-phase workflow ("Plan → Skeleton → Fill content → Polish", with "MANDATORY" in the headings), a per-render element cap ("NEVER render more than 40 elements in one render call"), a self-QA policy keyed to lint severity ("Fix error issues always. Fix warning issues when possible. Ignore info issues"), aesthetic prohibitions ("No emoji in UI elements"), and two fully worked examples with aesthetic guidance ("Procreate aesthetic: #2C2C2ECC semi-transparent panels, rounded={22} pill shapes").

## Interpretation

This falsifies pre-registered H1 (the "neutral pipe" hypothesis): the sidebar channel embeds a full house style and process doctrine. Under the sidebar channel, observed design behavior (spacing choices, radius relationships, type scales, workflow phasing) cannot be attributed to the model — the product instructs all of it. Alternative framing: the doctrine may be aimed at reliability (making weaker models produce valid layouts) rather than aesthetics; the two motives are indistinguishable statically, but either way the doctrine shapes outputs.

## Evidence

- `evidence/EXP-20260714-007-tool-surface-inventory/source/src/app/ai/chat/system-prompt.md`
- `evidence/EXP-20260714-007-tool-surface-inventory/source/src/app/ai/chat/transports.ts` (line 87: `instructions: SYSTEM_PROMPT`)

## Confidence and limitations

High that the text exists and is wired as instructions (verbatim copy, single import site). What the model actually complies with is untested here.

## Follow-up

Behavioral cross-check: same brief through sidebar vs terminal MCP (doctrine absent) — do spacing values, radius relationships, and phase structure differ as the doctrine predicts?
