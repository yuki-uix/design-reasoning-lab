---
id: OBS-20260715-052-absence-map-doctrine-in-prompt-not-tools
experiment: EXP-20260714-007-tool-surface-inventory
timestamp: 2026-07-15T03:10:00Z
observer: claude (source extraction)
---

# Absence map: system-level design decisions have no tools — and no tool addresses the human

## Fact

Against the pre-registered decision categories, the 110-tool surface contains: no tool that derives or applies a palette or color system (`analyze_colors` reads usage only); no tool that defines or applies a spacing scale (the 4px grid exists only as prompt text and a lint warning); no tool that defines a type scale; no breakpoint or viewport-variant tools for responsive behavior (only per-node `set_constraints`/`set_min_max`). Beyond the pre-registered list, one further absence: no tool addresses the human — the surface contains no elicitation, confirmation, or question mechanism of any kind. Classification totals: structure 21, layout 12, style 11, tokens 7, content 3, meta 45, unresolved 6.

## Interpretation

The tool surface operates at element altitude; system-level design decisions (palette, scale, rhythm) exist only as prompt doctrine and lint patterns — so on doctrine-free channels, those decisions fall entirely to the model's priors, and even on the sidebar channel the agent can hold a design system only in its head (or in variables, where it has no sidebar tools — OBS-047). The missing elicitation surface means OpenPencil, unlike Claude Design (FND-001), has no product-level ask-the-human mechanism: any question the agent asks is model-initiative in plain chat, ungoverned by the product. The 45-tool meta majority quantifies the product's real bet: rich machine-side inspection (describe/analyze/diff) substituting for human-in-the-loop checkpoints.

## Evidence

- `evidence/EXP-20260714-007-tool-surface-inventory/extracted/classification.md` (absence map, totals)
- `evidence/EXP-20260714-007-tool-surface-inventory/extracted/tool-inventory.json`

## Confidence and limitations

High on tool absence (mechanical over the full inventory). "Falls to priors" on doctrine-free channels is inference; six tools sit in the unresolved bucket and could shift totals slightly under different criteria.

## Follow-up

Behavioral: over terminal MCP, ask for "a landing page in our brand style" with no brand available — does the agent ask in chat (model initiative), or invent (as v0 does)? Direct FND-001 three-product comparison.
