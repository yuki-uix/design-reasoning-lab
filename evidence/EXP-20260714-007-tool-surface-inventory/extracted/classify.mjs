import { readFileSync, writeFileSync } from 'node:fs';
const inv = JSON.parse(readFileSync(process.argv[2], 'utf8'));

// Categories per EXP-007 pre-registered criteria (operation target + 4 tie-break rules)
// TB1 = compound tool by primary verb; TB2 = literal value → style; TB3 = read-only → meta; TB4 = unresolved bucket
const M = {
  // CORE
  getSelection:['meta','TB3'], getNode:['meta','TB3'], findNodes:['meta','TB3'], getJsx:['meta','TB3'],
  render:['structure','TB1: primary verb renders/creates nodes; secondary: layout, style, content via JSX props'],
  updateNode:['unresolved','TB4: generic property mutator spanning layout/style/content with no primary operation'],
  setLayout:['layout',''], setLayoutChild:['layout',''], setRadius:['style',''], setFill:['style',''],
  setStroke:['style',''], setText:['content',''], setTextProperties:['style',''],
  deleteNode:['structure',''], reparentNode:['structure',''], nodeResize:['layout',''],
  batchUpdate:['unresolved','TB4: batch generic property mutator, same rationale as update_node'],
  stockPhoto:['content','image/media data onto leaf shapes'],
  describe:['meta','TB3'], calc:['meta','outside document'],
  evalCode:['unresolved','TB4: escape hatch with full plugin-API scope, spans all categories'],
  viewportZoomToFit:['meta','viewport'],
  // EXTENDED read
  getPageTree:['meta','TB3'], getCurrentPage:['meta','TB3'], listPages:['meta','TB3'],
  selectNodes:['meta','editor selection state, outside document content'], queryNodes:['meta','TB3'],
  getComponents:['meta','TB3'], switchPage:['meta','editor navigation state'], pageBounds:['meta','TB3'],
  listFonts:['meta','TB3'], listAvailableFonts:['meta','TB3'], diffJsx:['meta','TB3'],
  // EXTENDED create
  createShape:['structure',''], searchIconsTool:['meta','external catalog search'],
  insertIcon:['structure','TB1: creates icon node; secondary: style'], fetchIconsTool:['meta','TB3'],
  createComponent:['structure',''], createInstance:['structure',''], createPage:['structure',''],
  createVector:['structure',''], createSlice:['structure',''], importSvg:['structure',''],
  // EXTENDED modify
  setEffects:['style',''], setOpacity:['style',''], setFont:['style',''], setVisible:['style','visibility as visual state'],
  setConstraints:['layout',''], setRotation:['layout',''], setMinMax:['layout',''], setFontRange:['style',''],
  setTextResize:['layout','text sizing behavior'], setBlend:['style',''],
  setLocked:['unresolved','TB4: human-facing editing metadata; no category in pre-registered scheme'],
  setStrokeAlign:['style',''], setImageFill:['content','image/media data'],
  // EXTENDED structure
  cloneNode:['structure',''], nodeMove:['layout','moves coordinates'],
  renameNode:['unresolved','TB4: human-facing organizational metadata; no category in pre-registered scheme'],
  groupNodes:['structure',''], ungroupNode:['structure',''], flattenNodes:['structure',''],
  nodeToComponent:['structure',''], nodeBounds:['meta','TB3'], nodeAncestors:['meta','TB3'],
  nodeChildren:['meta','TB3'], nodeTree:['meta','TB3'], nodeBindings:['meta','TB3'],
  nodeReplaceWith:['structure',''], arrangeNodes:['layout','repositions existing top-level nodes'],
  // EXTENDED variables
  listVariables:['meta','TB3 (reads token layer)'], listCollections:['meta','TB3 (reads token layer)'],
  getVariable:['meta','TB3 (reads token layer)'], findVariables:['meta','TB3 (reads token layer)'],
  getCollection:['meta','TB3 (reads token layer)'],
  createVariable:['tokens',''], setVariable:['tokens',''], deleteVariable:['tokens',''],
  bindVariable:['tokens',''], unbindVariable:['tokens',''], createCollection:['tokens',''], deleteCollection:['tokens',''],
  // EXTENDED vector & export
  booleanUnion:['structure','combines/replaces nodes'], booleanSubtract:['structure','combines/replaces nodes'],
  booleanIntersect:['structure','combines/replaces nodes'], booleanExclude:['structure','combines/replaces nodes'],
  pathGet:['meta','TB3'],
  pathSet:['unresolved','TB4: wholesale vector-geometry replacement; not anticipated by scheme'],
  pathScale:['layout','geometric size transform'], pathFlip:['layout','geometric transform'],
  pathMove:['layout','geometric position transform'],
  viewportGet:['meta','viewport'], viewportSet:['meta','viewport'],
  exportSvg:['meta','export'], exportPdf:['meta','export'], exportImage:['meta','export'],
  // EXTENDED analyze & codegen
  analyzeColors:['meta','TB3'], analyzeTypography:['meta','TB3'], analyzeSpacing:['meta','TB3'],
  analyzeClusters:['meta','TB3'], analyzeOverlaps:['meta','TB3'], diffCreate:['meta','TB3'], diffShow:['meta','TB3'],
  designToTokens:['meta','TB3 (read-only token extraction)'], designToComponentMap:['meta','TB3']
};

const missing = inv.defs.filter(d => !(d.constName in M));
const extra = Object.keys(M).filter(k => !inv.defs.some(d => d.constName === k));
if (missing.length || extra.length) { console.error('MISMATCH', {missing: missing.map(d=>d.constName), extra}); process.exit(1); }

const CATS = ['structure','layout','style','tokens','content','meta','unresolved'];
const rows = inv.defs.map(d => ({ ...d, cat: M[d.constName][0], note: M[d.constName][1] }));
const count = (list, cat) => list.filter(r => r.cat === cat).length;
const core = rows.filter(r => r.channel.startsWith('CORE'));
const ext = rows.filter(r => r.channel.startsWith('EXTENDED'));

let md = `# EXP-007 altitude classification (derived)\n\nDerived from \`tool-inventory.json\` by \`classify.mjs\`; criteria and tie-break rules (TB1–TB4) are fixed in the pre-registration. Repository \`open-pencil/open-pencil\` @ \`12031b76c9e0416a1c0d505a0af65780c011346e\`.\n\n## Summary\n\n| Category | CORE (sidebar + MCP) | EXTENDED (MCP/ACP only) | Total |\n| --- | --- | --- | --- |\n`;
for (const c of CATS) md += `| ${c} | ${count(core,c)} | ${count(ext,c)} | ${count(rows,c)} |\n`;
md += `| **total** | **${core.length}** | **${ext.length}** | **${rows.length}** |\n\n`;
md += `MCP wrapper tools (registered in \`packages/mcp/src/tool/registration.ts\`, outside the shared registry): \`list_documents\`, \`save_file\`, \`open_file\` (root-gated), \`new_document\` (root-gated), \`get_codegen_prompt\` — all classified **meta** (document lifecycle / file IO / prompt retrieval). \`eval\` is excluded from MCP unless \`enableEval\` is set.\n\n`;
for (const [title, list] of [['CORE_TOOLS (22) — sidebar chat and all channels', core], ['EXTENDED_TOOLS (83) — MCP/ACP/CLI only', ext]]) {
  md += `## ${title}\n\n| Tool | Mutates | Category | Note |\n| --- | --- | --- | --- |\n`;
  for (const r of list) md += `| \`${r.name}\` | ${r.mutates ? 'yes' : 'no'} | ${r.cat} | ${r.note} |\n`;
  md += '\n';
}
md += `## Absence map (pre-registered decision categories with no corresponding write tool)\n
| Decision category | Tool support | Where it lives instead |
| --- | --- | --- |
| Palette derivation / color system | none (\`analyze_colors\` reads usage only) | sidebar prompt: fixed text-hierarchy hex values, accent-color summary rule |
| Spacing system | none (\`analyze_spacing\` reads only) | sidebar prompt: 4px grid values; \`describe\` lint: "gap N not on 8px grid" warning |
| Type scale | none (\`analyze_typography\` reads only) | sidebar prompt: named scale Display 32–40 … Overline 10–11, 2–3 weights |
| Responsive behavior | per-node only (\`set_constraints\`, \`set_min_max\`) | no breakpoint/viewport-variant tools anywhere |
| Elicitation (asking the user) | none — no tool addresses the human | not represented in the tool surface at all (discovered category, not pre-registered) |
`;
writeFileSync(process.argv[3], md);
console.log('OK', CATS.map(c => `${c}=${count(rows,c)}`).join(' '));
