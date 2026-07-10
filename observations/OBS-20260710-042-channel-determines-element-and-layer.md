---
id: OBS-20260710-042-channel-determines-element-and-layer
experiment: EXP-20260707-004-slider-comment-ownership
timestamp: 2026-07-10T17:30:00+08:00
observer: yuki (run), claude (template diffing)
---

# The same sentence through three channels changes different elements in different layers

## Fact

The identical request ("Make the primary action stand out more.") was delivered to three byte-identical duplicates of the EXP-001 P-FULL project (duplication verified by normalized template diff). Results:

- **Chat**: the agent resolved "the primary action" to the create-habit sheet's Continue/"Add habit" button — not the Today view's "+" FAB — and edited the *logic layer*: enlarged `primaryButtonStyle`, added a new `primaryButtonHoverStyle` const and a `style-hover` template binding, preserving the disabled-state conditional. Response text names the element. No clarifying question, no defense.
- **Element comment on the FAB**: "Send to Claude" compiled the comment into a structured prompt embedding the anchor (`data-comment-anchor`), the React component name, the DOM path, and a selector. The agent edited exactly the anchored element, in the *template layer*: FAB enlarged 56→64px with scaled icon, given a 4px ring in the app's cream family (`oklch(98% 0.006 85)`) and a stronger shadow. It also resolved the comment thread ("Resolved comments" step). No question, no defense.
- **Direct canvas edit**: the properties panel wrote raw values onto the FAB's inline style (shadow rewritten, `border-width/style/color` appended after the still-present `border: none`, plus an editor-injected `font-weight: 400`), with the border color as hex (`#24502E`) against the artifact's oklch idiom. No agent involvement.

Both agent-mediated changes were single-element in scope; neither restyled siblings or the page.

## Interpretation

The pre-registered hypothesis (comments produce *narrower-scoped* changes than chat) is falsified in blast-radius terms — both agent channels were equally narrow — but the channel effect is real and lives elsewhere: **the channel allocates who resolves the referent and which layer absorbs the edit**. Chat delegates element resolution to the agent (which chose a defensible but different "primary action" than the human pointed at); comments transfer element resolution to the human via anchor metadata while the agent keeps execution idiom (its ring color stays in the artifact's token family); canvas editing removes the agent entirely and with it the idiom coherence (hex color, contradictory style string). Read against RQ-003: the three channels are three ownership splits — agent-resolves/agent-executes, human-resolves/agent-executes, human-resolves/human-executes. The chat/comment referent divergence is also a concrete cost model for users: an unanchored instruction can be correctly executed against the wrong element with no confirmation sought. Alternatives: n=1 per channel; the chat resolution might vary run to run (the artifact's own code names the sheet button `primaryAction`, which plausibly steered it).

## Evidence

- `evidence/EXP-20260707-004-slider-comment-ownership/baseline-Habit Tracker (standalone).html`
- `evidence/EXP-20260707-004-slider-comment-ownership/channel-a-Habit Tracker (standalone).html`
- `evidence/EXP-20260707-004-slider-comment-ownership/channel-b-Habit Tracker (standalone).html`
- `evidence/EXP-20260707-004-slider-comment-ownership/channel-c-Habit Tracker (standalone).html`
- `evidence/EXP-20260707-004-slider-comment-ownership/channel-a.png`, `channel-b-output.png`, `channel-c-edit-update.png`

## Confidence and limitations

High for the diffs (all four exports committed; duplication verified). One run per channel; latency unmeasured; the element-resolution divergence could be steered by the artifact's internal naming.

## Follow-up

Repeat chat channel ×3 to see whether "primary action" resolution is stable; try an anchored comment whose text contradicts the anchor (points at A, describes B) to see which wins.
