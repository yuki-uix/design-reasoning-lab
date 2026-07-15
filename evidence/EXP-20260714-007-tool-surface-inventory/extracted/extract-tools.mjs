import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = process.argv[2];
const TOOLS = join(ROOT, 'packages/core/src/tools');

function walk(dir) {
  const out = [];
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if (p.endsWith('.ts')) out.push(p);
  }
  return out;
}

function extractBlock(src, start) {
  // start = index of '{' after defineTool(
  let depth = 0, i = start;
  for (; i < src.length; i++) {
    if (src[i] === '{') depth++;
    else if (src[i] === '}') { depth--; if (depth === 0) break; }
  }
  return src.slice(start, i + 1);
}

function joinStrings(expr) {
  const parts = [...expr.matchAll(/'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)"|`((?:[^`\\]|\\.)*)`/gs)];
  return parts.map(m => (m[1] ?? m[2] ?? m[3]).replace(/\\'/g, "'").replace(/\\n/g, '\n')).join('');
}

const defs = [];
for (const file of walk(TOOLS)) {
  const src = readFileSync(file, 'utf8');
  const re = /export const (\w+)\s*=\s*defineTool\(\s*\{/g;
  let m;
  while ((m = re.exec(src))) {
    const block = extractBlock(src, re.lastIndex - 1);
    const name = block.match(/name:\s*'([^']+)'/)?.[1];
    const mutates = /mutates:\s*true/.test(block);
    const descMatch = block.match(/description:\s*([\s\S]*?),\n\s*(?:params|args|execute)\s*:/);
    const description = descMatch ? joinStrings(descMatch[1]) : null;
    defs.push({ constName: m[1], name, mutates, description, file: relative(ROOT, file) });
  }
}

// registry membership
function registryList(file) {
  const src = readFileSync(join(TOOLS, file), 'utf8');
  const arr = src.match(/TOOLS:\s*ToolDef\[\]\s*=\s*\[([\s\S]*?)\]/)[1];
  return arr.replace(/\/\/[^\n]*/g, '').split(',').map(s => s.trim()).filter(Boolean);
}
const core = registryList('registry-core.ts');
const extended = registryList('registry-extended.ts');

for (const d of defs) {
  d.channel = core.includes(d.constName) ? 'CORE (sidebar+MCP)' : extended.includes(d.constName) ? 'EXTENDED (MCP only)' : 'UNREGISTERED';
}

const result = { core: core.length, extended: extended.length, extracted: defs.length, defs };
writeFileSync(process.argv[3], JSON.stringify(result, null, 2));
console.log(`core=${core.length} extended=${extended.length} extracted=${defs.length}`);
console.log('unmatched registry entries:',
  [...core, ...extended].filter(n => !defs.some(d => d.constName === n)).join(', ') || 'none');
console.log('unregistered defs:', defs.filter(d => d.channel === 'UNREGISTERED').map(d => d.constName).join(', ') || 'none');
console.log('missing descriptions:', defs.filter(d => !d.description).map(d => d.constName).join(', ') || 'none');
