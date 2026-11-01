#!/usr/bin/env node
/* scripts/check-trial-digits.js — prove trial-card wording edits did not change digits.
 * Compares every string on every card in js/data/trials.js with the same string on
 * origin/main (override with --base <ref>). A mismatch is any field whose digit
 * characters, in order, differ. Ratio tokens such as 1:1 are checked the same way.
 * Usage: node scripts/check-trial-digits.js [--base origin/main]
 * Exit 1 if any field mismatches. It never edits files.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execFileSync } = require("child_process");

const root = path.resolve(__dirname, "..");
const args = process.argv.slice(2);
const baseIdx = args.indexOf("--base");
const base = baseIdx >= 0 ? args[baseIdx + 1] : "origin/main";
const rel = "js/data/trials.js";

function load(src, filename) {
  const win = {};
  vm.runInNewContext(src, { window: win }, { filename });
  if (!Array.isArray(win.ANTICOAG_TRIALS)) throw new Error(filename + ": ANTICOAG_TRIALS missing");
  return win.ANTICOAG_TRIALS;
}
function digits(s) { return (String(s).match(/\d/g) || []).join(""); }
function ratios(s) { return (String(s).match(/\d(?::\d)+/g) || []).join("|"); }
function walk(v, p, out) {
  if (typeof v === "string") out.push([p, v]);
  else if (Array.isArray(v)) v.forEach((x, i) => walk(x, `${p}[${i}]`, out));
  else if (v && typeof v === "object") for (const k of Object.keys(v)) walk(v[k], `${p}.${k}`, out);
}

const head = load(fs.readFileSync(path.join(root, rel), "utf8"), rel);
let baseSrc;
try {
  baseSrc = execFileSync("git", ["show", `${base}:${rel}`], { cwd: root, encoding: "utf8" });
} catch (e) {
  console.error(`check-trial-digits: cannot read ${base}:${rel}`);
  process.exit(1);
}
const baseTrials = load(baseSrc, `${base}:${rel}`);
const baseById = new Map(baseTrials.map(t => [t.id, t]));
const mismatches = [];
let fields = 0;
for (const t of head) {
  const old = baseById.get(t.id);
  if (!old) { mismatches.push({ id: t.id, field: "(card)", msg: "card is not on " + base }); continue; }
  const a = [], b = [];
  walk(t, t.id, a);
  walk(old, t.id, b);
  const bMap = new Map(b);
  const seen = new Set();
  for (const [p, s] of a) {
    fields++;
    seen.add(p);
    if (!bMap.has(p)) { mismatches.push({ id: t.id, field: p, msg: "field missing on " + base }); continue; }
    const o = bMap.get(p);
    if (digits(s) !== digits(o)) mismatches.push({ id: t.id, field: p, msg: `digits ${digits(o)} -> ${digits(s)}` });
    else if (ratios(s) !== ratios(o)) mismatches.push({ id: t.id, field: p, msg: `ratio ${ratios(o)} -> ${ratios(s)}` });
  }
  for (const [p] of b) if (!seen.has(p)) mismatches.push({ id: t.id, field: p, msg: "field removed from the working copy" });
}
for (const t of baseTrials) if (!head.some(x => x.id === t.id)) mismatches.push({ id: t.id, field: "(card)", msg: "card removed" });

if (mismatches.length) {
  mismatches.forEach(m => console.log(`${m.id} ${m.field}: ${m.msg}`));
  console.log(`check-trial-digits: FAILED — ${mismatches.length} mismatch(es) across ${fields} field(s) vs ${base}`);
  process.exit(1);
}
console.log(`check-trial-digits: 0 digit mismatches across ${fields} fields vs ${base}`);
