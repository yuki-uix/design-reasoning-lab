# Evidence manifest: EXP-20260707-002-artifact-code-autopsy

Raw artifacts are the five standalone HTML exports archived under `evidence/EXP-20260707-001-ambiguity-ladder/` (see that manifest for hashes). This folder holds derived files only.

| File | Type | Captured at | Provenance | SHA-256 | Notes |
| --- | --- | --- | --- | --- | --- |
| `derived/app.html` | extracted template | 2026-07-07 | script extraction | pending | P-FULL `.dc.html` template, un-bundled |
| `derived/p-no-audience-app.html` | extracted template | 2026-07-07 | script extraction | pending | |
| `derived/p-no-content-app.html` | extracted template | 2026-07-08 | script extraction | pending | |
| `derived/p-no-style-app.html` | extracted template | 2026-07-08 | script extraction | pending | |
| `derived/p-vague-app.html` | extracted template | 2026-07-08 | script extraction | pending | |
| `derived/200c92cc-…` | runtime JS | 2026-07-07 | bundle asset | pending | dc-runtime, header: "GENERATED from dc-runtime/src/*.ts" |
| `derived/0003af38-…`, `3a9556ba-…`, `5454ebc3-…`, `65b6e1bf-…` | WOFF2 fonts | 2026-07-07 | bundle assets | pending | self-hosted Karla/Sora subsets (P-FULL) |
| `derived/tabulate.py` | analysis script | 2026-07-09 | written for this audit | pending | regex tabulation producing the counts cited in OBS-022/023; not evidence of product behavior |

## Environment

Same runs as EXP-20260707-001; see that manifest.

## Transformations and redactions

- Templates were extracted by decoding the `__bundler/template` JSON script tag of each standalone export (Python, no content edits).
- P-FULL bundle assets were additionally extracted from the base64+gzip `__bundler/manifest` entries.

## Missing evidence

- Bundle assets (runtime/fonts) were extracted for P-FULL only; other runs' assets remain inside their archived exports.
