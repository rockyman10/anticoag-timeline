#!/usr/bin/env node
/* verify-detail.js — checks the optional trial `detail` block and its `sourceNotes`.
 * Proposed home: scripts/verify-detail.js (or fold into scripts/verify-integrity.js as check "detail").
 * Usage: node scripts/verify-detail.js [repoRoot] [--json]
 * Checks (all ERROR unless noted):
 *   detail-shape    detail keys limited to the schema; arrays of {label,value|text,src[]}; endpoints rows have values[] matching arms[] and effects[] matching comparisons[]
 *   detail-src      every reader-visible detail item has a non-empty src[]; every src id exists in the card's sourceNotes
 *   detail-locus    every sourceNote has doc in {main,supp,protocol,label,letter,arithmetic}, a non-empty quote, and a locus naming a page, table, figure or label section
 *   detail-number   every number in a reader-visible detail string appears in the quote, arithmetic or locus of a sourceNote cited by that item
 *                   (the CI labels "95% CI" and "97.5% CI" are treated as labels, not data)
 *   detail-unused   (WARN) a sourceNote no detail item cites
 *   detail-wording  "NOAC", rating labels, "Evidence quality", per-card disclaimers, and imperative dosing phrasing in reader-visible detail text
 *                   (sourceNotes quotes are verbatim source text and are exempt from wording checks)
 */
const fs = require("fs"), path = require("path"), vm = require("vm");
const args = process.argv.slice(2), root = path.resolve(args.find(a => !a.startsWith("--")) || path.join(__dirname, ".."));
const asJson = args.includes("--json");
const win = {}; vm.runInContext(fs.readFileSync(path.join(root, "js/data/trials.js"), "utf8"), vm.createContext({ window: win }));
const T = win.ANTICOAG_TRIALS || [];
const out = []; const add = (level, check, where, msg) => out.push({ level, check, where, msg });

const LIST_KEYS = ["baseline", "subgroups", "nnt", "dosing", "conduct", "limitations"];
const OBJ_KEYS = ["ttr", "funding"];
const ALLOWED = new Set([...LIST_KEYS, ...OBJ_KEYS, "endpoints"]);
const DOCS = new Set(["main", "supp", "protocol", "label", "letter", "arithmetic"]);
const LOCUS = /\b(p\.|pp\.|page|Table|Figure|Fig\.|Section|Highlights|Boxed Warning|Abstract|Derived from)/i;
const NUM = /(?<![A-Za-z\d.])\d+(?:[.,]\d+)*/g; // digits glued to letters (CHADS2, P2Y12) are names, not data
const CI_LABEL = /\b(?:95|97\.5)% CI\b/g;
const norm = t => t.replace(/,/g, "");
const nums = s => (s.replace(CI_LABEL, " ").match(NUM) || []).map(norm);
const WORD = [
  [/\bNOACs?\b/i, "NOAC (site uses DOAC)"],
  [/\bPractice[\s-]*changer\b|\bPractice[\s-]*defining\b|\bTier\s*[123]\b|\bTier\s+badge\b/i, "rating label"],
  [/\bevidence[\s_-]*quality\b/i, "Evidence quality"],
  [/\b(not medical advice|for educational purposes only|consult (?:your|a) (?:doctor|physician|clinician))\b/i, "per-card disclaimer"],
  [/\brecommend(?:s|ed|ing)?\b/i, "imperative/recommendation wording"],
  [/\bshould (?:take|receive|get|be (?:given|held|stopped|started|dosed|reduced|switched|resumed|used)|hold|start|stop|resume|use|give|dose|reduce|switch)\b/i, "imperative dosing"],
  [/(?<![-\w])(?:take|give|start|use|resume|reduce to|switch to|dose(?: at)?)\s+(?:\w+\s+)?\d+(?:\.\d+)?\s?mg\b/i, "imperative dosing"],
  [/\bdo not (?:give|use|start|stop|bridge|hold|dose|resume|prescribe|reduce|switch)\b/i, "imperative dosing"],
];

let withDetail = 0;
T.forEach((t, i) => {
  if (!t || t.detail === undefined) { if (t && t.sourceNotes) add("ERROR", "detail-shape", `trials[${i}] ${t.id}`, "sourceNotes without detail"); return; }
  withDetail++;
  const W = `trials[${i}] ${t.id}`, D = t.detail, notes = Array.isArray(t.sourceNotes) ? t.sourceNotes : [];
  if (!notes.length) add("ERROR", "detail-src", W, "detail present but sourceNotes missing/empty");
  const byId = new Map(); const used = new Set();
  notes.forEach((n, j) => {
    const w = `${W} sourceNotes[${j}]`;
    if (!n.id) add("ERROR", "detail-locus", w, "missing id"); else if (byId.has(n.id)) add("ERROR", "detail-locus", w, `duplicate id ${n.id}`); else byId.set(n.id, n);
    if (!DOCS.has(n.doc)) add("ERROR", "detail-locus", w, `doc "${n.doc}" not in ${[...DOCS].join("/")}`);
    if (!n.quote || !String(n.quote).trim()) add("ERROR", "detail-locus", w, "empty quote");
    if (!n.locus || !LOCUS.test(n.locus)) add("ERROR", "detail-locus", w, `locus lacks page/table/figure/section: "${n.locus || ""}"`);
    if (n.doc === "arithmetic" && !n.arithmetic) add("ERROR", "detail-locus", w, "arithmetic note without arithmetic text");
  });
  for (const k of Object.keys(D)) if (!ALLOWED.has(k)) add("ERROR", "detail-shape", W, `unknown detail key "${k}"`);
  if ("reviewedBy" in D) add("ERROR", "detail-shape", W, "reviewedBy belongs on the card, empty");

  const check = (strs, src, w) => {
    if (!Array.isArray(src) || !src.length) { add("ERROR", "detail-src", w, "no src"); return; }
    const pool = [];
    for (const id of src) { const n = byId.get(id); if (!n) { add("ERROR", "detail-src", w, `src "${id}" not in sourceNotes`); continue; } used.add(id); pool.push(n.quote || "", n.arithmetic || "", n.locus || ""); }
    const have = new Set(nums(pool.join(" ")));
    for (const s of strs) {
      if (typeof s !== "string") { add("ERROR", "detail-shape", w, "non-string field"); continue; }
      const miss = [...new Set(nums(s).filter(x => !have.has(x)))];
      if (miss.length) add("ERROR", "detail-number", w, `number(s) ${miss.join(", ")} not found in cited sourceNotes (${src.join(",")}): "${s.slice(0, 120)}"`);
      for (const [re, name] of WORD) { const m = s.match(re); if (m) add("ERROR", "detail-wording", w, `${name}: "${m[0]}" in "${s.slice(0, 120)}"`); }
    }
  };
  for (const k of LIST_KEYS) {
    if (D[k] === undefined) continue;
    if (!Array.isArray(D[k])) { add("ERROR", "detail-shape", `${W} detail.${k}`, "must be an array"); continue; }
    D[k].forEach((it, j) => check([it.label, it.value, it.text].filter(x => x !== undefined), it.src, `${W} detail.${k}[${j}]`));
  }
  for (const k of OBJ_KEYS) if (D[k] !== undefined) check([D[k].text], D[k].src, `${W} detail.${k}`);
  (D.endpoints || []).forEach((tb, j) => {
    const w = `${W} detail.endpoints[${j}]`;
    if (!Array.isArray(tb.arms) || !Array.isArray(tb.rows) || !tb.unit) { add("ERROR", "detail-shape", w, "needs arms[], unit, rows[]"); return; }
    for (const s of [tb.title, tb.unit, ...tb.arms, ...(tb.comparisons || [])].filter(Boolean)) for (const [re, name] of WORD) if (re.test(s)) add("ERROR", "detail-wording", w, `${name} in header "${s}"`);
    tb.rows.forEach((r, k) => {
      const wr = `${w}.rows[${k}]`;
      if (!Array.isArray(r.values) || r.values.length !== tb.arms.length) add("ERROR", "detail-shape", wr, `values[] length ${r.values && r.values.length} != arms ${tb.arms.length}`);
      if (r.effects && tb.comparisons && r.effects.length !== tb.comparisons.length) add("ERROR", "detail-shape", wr, "effects[] length != comparisons[]");
      check([r.label, ...(r.values || []), ...(r.effects || [])], r.src, wr);
    });
    if (tb.note) check([tb.note], tb.noteSrc, `${w}.note`);
  });
  for (const id of byId.keys()) if (!used.has(id)) add("WARN", "detail-unused", W, `sourceNote ${id} not cited by any detail item`);
});

const errors = out.filter(o => o.level === "ERROR"), warn = out.filter(o => o.level === "WARN");
if (asJson) console.log(JSON.stringify({ cardsWithDetail: withDetail, errors: errors.length, warnings: warn.length, findings: out }, null, 1));
else { out.forEach(o => console.log(`${o.level} ${o.check} ${o.where}: ${o.msg}`)); console.log(`verify-detail: ${errors.length ? "FAILED" : "OK"} — ${errors.length} error(s), ${warn.length} warning(s); ${withDetail} card(s) with detail`); }
process.exitCode = errors.length ? 1 : 0;
