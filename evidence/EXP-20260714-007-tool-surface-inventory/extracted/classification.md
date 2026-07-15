# EXP-007 altitude classification (derived)

Derived from `tool-inventory.json` by `classify.mjs`; criteria and tie-break rules (TB1–TB4) are fixed in the pre-registration. Repository `open-pencil/open-pencil` @ `12031b76c9e0416a1c0d505a0af65780c011346e`.

## Summary

| Category | CORE (sidebar + MCP) | EXTENDED (MCP/ACP only) | Total |
| --- | --- | --- | --- |
| structure | 3 | 18 | 21 |
| layout | 3 | 9 | 12 |
| style | 4 | 7 | 11 |
| tokens | 0 | 7 | 7 |
| content | 2 | 1 | 3 |
| meta | 7 | 38 | 45 |
| unresolved | 3 | 3 | 6 |
| **total** | **22** | **83** | **105** |

MCP wrapper tools (registered in `packages/mcp/src/tool/registration.ts`, outside the shared registry): `list_documents`, `save_file`, `open_file` (root-gated), `new_document` (root-gated), `get_codegen_prompt` — all classified **meta** (document lifecycle / file IO / prompt retrieval). `eval` is excluded from MCP unless `enableEval` is set.

## CORE_TOOLS (22) — sidebar chat and all channels

| Tool | Mutates | Category | Note |
| --- | --- | --- | --- |
| `eval` | yes | unresolved | TB4: escape hatch with full plugin-API scope, spans all categories |
| `calc` | no | meta | outside document |
| `render` | yes | structure | TB1: primary verb renders/creates nodes; secondary: layout, style, content via JSX props |
| `describe` | no | meta | TB3 |
| `set_radius` | yes | style |  |
| `set_layout` | yes | layout |  |
| `set_layout_child` | yes | layout |  |
| `set_fill` | yes | style |  |
| `set_stroke` | yes | style |  |
| `set_text` | yes | content |  |
| `set_text_properties` | yes | style |  |
| `update_node` | yes | unresolved | TB4: generic property mutator spanning layout/style/content with no primary operation |
| `get_jsx` | no | meta | TB3 |
| `get_node` | no | meta | TB3 |
| `find_nodes` | no | meta | TB3 |
| `get_selection` | no | meta | TB3 |
| `stock_photo` | yes | content | image/media data onto leaf shapes |
| `delete_node` | yes | structure |  |
| `node_resize` | yes | layout |  |
| `batch_update` | yes | unresolved | TB4: batch generic property mutator, same rationale as update_node |
| `reparent_node` | yes | structure |  |
| `viewport_zoom_to_fit` | yes | meta | viewport |

## EXTENDED_TOOLS (83) — MCP/ACP/CLI only

| Tool | Mutates | Category | Note |
| --- | --- | --- | --- |
| `analyze_clusters` | no | meta | TB3 |
| `analyze_colors` | no | meta | TB3 |
| `diff_create` | no | meta | TB3 |
| `diff_show` | no | meta | TB3 |
| `analyze_overlaps` | no | meta | TB3 |
| `analyze_spacing` | no | meta | TB3 |
| `analyze_typography` | no | meta | TB3 |
| `design_to_component_map` | no | meta | TB3 |
| `design_to_tokens` | no | meta | TB3 (read-only token extraction) |
| `create_shape` | yes | structure |  |
| `create_page` | yes | structure |  |
| `create_slice` | yes | structure |  |
| `create_component` | yes | structure |  |
| `create_instance` | yes | structure |  |
| `fetch_icons` | no | meta | TB3 |
| `insert_icon` | yes | structure | TB1: creates icon node; secondary: style |
| `search_icons` | no | meta | external catalog search |
| `import_svg` | yes | structure |  |
| `create_vector` | yes | structure |  |
| `set_effects` | yes | style |  |
| `set_rotation` | yes | layout |  |
| `set_opacity` | yes | style |  |
| `set_minmax` | yes | layout |  |
| `set_constraints` | yes | layout |  |
| `set_image_fill` | yes | content | image/media data |
| `set_visible` | yes | style | visibility as visual state |
| `set_blend` | yes | style |  |
| `set_locked` | yes | unresolved | TB4: human-facing editing metadata; no category in pre-registered scheme |
| `set_stroke_align` | yes | style |  |
| `set_font` | yes | style |  |
| `set_font_range` | yes | style |  |
| `set_text_resize` | yes | layout | text sizing behavior |
| `get_components` | no | meta | TB3 |
| `list_fonts` | no | meta | TB3 |
| `list_available_fonts` | no | meta | TB3 |
| `diff_jsx` | no | meta | TB3 |
| `get_page_tree` | no | meta | TB3 |
| `list_pages` | no | meta | TB3 |
| `switch_page` | yes | meta | editor navigation state |
| `get_current_page` | no | meta | TB3 |
| `page_bounds` | no | meta | TB3 |
| `query_nodes` | no | meta | TB3 |
| `select_nodes` | yes | meta | editor selection state, outside document content |
| `arrange` | yes | layout | repositions existing top-level nodes |
| `clone_node` | yes | structure |  |
| `rename_node` | yes | unresolved | TB4: human-facing organizational metadata; no category in pre-registered scheme |
| `node_bounds` | no | meta | TB3 |
| `node_move` | yes | layout | moves coordinates |
| `group_nodes` | yes | structure |  |
| `ungroup_node` | yes | structure |  |
| `flatten_nodes` | yes | structure |  |
| `node_to_component` | yes | structure |  |
| `node_replace_with` | yes | structure |  |
| `node_ancestors` | no | meta | TB3 |
| `node_children` | no | meta | TB3 |
| `node_tree` | no | meta | TB3 |
| `node_bindings` | no | meta | TB3 |
| `bind_variable` | yes | tokens |  |
| `list_collections` | no | meta | TB3 (reads token layer) |
| `get_collection` | no | meta | TB3 (reads token layer) |
| `create_collection` | yes | tokens |  |
| `delete_collection` | yes | tokens |  |
| `list_variables` | no | meta | TB3 (reads token layer) |
| `get_variable` | no | meta | TB3 (reads token layer) |
| `find_variables` | no | meta | TB3 (reads token layer) |
| `unbind_variable` | yes | tokens |  |
| `create_variable` | yes | tokens |  |
| `set_variable` | yes | tokens |  |
| `delete_variable` | yes | tokens |  |
| `boolean_union` | yes | structure | combines/replaces nodes |
| `boolean_subtract` | yes | structure | combines/replaces nodes |
| `boolean_intersect` | yes | structure | combines/replaces nodes |
| `boolean_exclude` | yes | structure | combines/replaces nodes |
| `export_svg` | no | meta | export |
| `export_pdf` | no | meta | export |
| `export_image` | no | meta | export |
| `path_get` | no | meta | TB3 |
| `path_set` | yes | unresolved | TB4: wholesale vector-geometry replacement; not anticipated by scheme |
| `path_scale` | yes | layout | geometric size transform |
| `path_flip` | yes | layout | geometric transform |
| `path_move` | yes | layout | geometric position transform |
| `viewport_get` | no | meta | viewport |
| `viewport_set` | yes | meta | viewport |

## Absence map (pre-registered decision categories with no corresponding write tool)

| Decision category | Tool support | Where it lives instead |
| --- | --- | --- |
| Palette derivation / color system | none (`analyze_colors` reads usage only) | sidebar prompt: fixed text-hierarchy hex values, accent-color summary rule |
| Spacing system | none (`analyze_spacing` reads only) | sidebar prompt: 4px grid values; `describe` lint: "gap N not on 8px grid" warning |
| Type scale | none (`analyze_typography` reads only) | sidebar prompt: named scale Display 32–40 … Overline 10–11, 2–3 weights |
| Responsive behavior | per-node only (`set_constraints`, `set_min_max`) | no breakpoint/viewport-variant tools anywhere |
| Elicitation (asking the user) | none — no tool addresses the human | not represented in the tool surface at all (discovered category, not pre-registered) |
