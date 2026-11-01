#!/usr/bin/env node
/* scripts/verify-integrity.js — static integrity check for anticoag-timeline (no dependencies, Node >= 16).
 * Usage: node scripts/verify-integrity.js [repo-root] [--json] [--quiet]
 * Exit 1 if any ERROR. Checks:
 *   schema      required fields on every trial card (js/data/trials.js), unique ids, known status, no "impact" rating key
 *   dead-end    every <button> (static HTML and JS templates) has a handler: onclick, id, data- attribute or class used by script, or submit in a form
 *   routes      every in-page "#/<kind>" link names a kind parseRoute knows
 *   touch       inside mobile/coarse-pointer @media blocks, button-like selectors may not set (min-)height/(min-)width below 44px
 *   noac        "NOAC" in reader-visible text (citation, DOI, URL and reference fields exempt)
 *   reviewedBy  any non-empty reviewedBy
 *   evidence    any "Evidence quality" label (key or reader-visible label)
 *   rating      unsourced rating labels "Practice-changer", "Practice-defining", "Tier 1/2/3", "Tier badge", "Landmark DOAC" in reader-visible text (owner decisions 2026-10-14);
 *               "Landmark DOAC" is case-sensitive and, in data prose, only the bare label (not followed by a word, e.g. "Landmark DOAC trials") is ERROR; prose mentions are INFO
 *   garble      doubled "the the", empty parentheses, or "for of" in trial-card reader-visible prose
 *   imperative  imperative dosing language outside trial-attributed fields; sentences that name a trial,
 *               guideline, label or protocol are listed as INFO (attributed), the rest are ERROR
 *   mirror      capacitor/www/js and README equal the root copies (index.html allowed to differ only in the font links)
 * The site changelog is CHANGELOG.md and is not loaded or scanned. A leftover .changelog array, if present, is history text (INFO or skipped), not visitor copy.
 * It never edits files. Findings in clinical text are for human/literature review, not auto-fix.
 */
const fs = require("fs"), path = require("path"), vm = require("vm");
const args = process.argv.slice(2), root = path.resolve(args.find(a => !a.startsWith("--")) || path.join(__dirname, ".."));
const asJson = args.includes("--json"), quiet = args.includes("--quiet");
const P = r => path.join(root, r), ex = r => fs.existsSync(P(r)), rd = r => fs.readFileSync(P(r), "utf8");
const out = []; const add = (level, check, where, msg) => out.push({ level, check, where, msg });

// ---------- load data modules ----------
const DATA_DIR = ex("js/data") ? "js/data" : "js";
const dataFiles = fs.readdirSync(P(DATA_DIR)).filter(f => f.endsWith(".js")).map(f => `${DATA_DIR}/${f}`);
if (DATA_DIR === "js") add("WARN", "layout", "js/", "js/data/ not found; reading data modules from js/");
const extra = ["js/site-meta.js", "js/learn-path.js", "js/learn-visuals.js", "js/learn-compare-pairs.js"].filter(ex);
const win = {}; const ctx = vm.createContext({ window: win, console: { log() {}, warn() {}, error() {} } });
for (const f of [...dataFiles, ...extra]) { try { vm.runInContext(rd(f), ctx, { filename: f }); } catch (e) { add("ERROR", "load", f, "does not evaluate: " + e.message); } }
const globals = Object.keys(win).filter(k => k.startsWith("ANTICOAG_"));
const fileOf = {}; // global -> file (best effort)
for (const f of [...dataFiles, ...extra]) { const m = rd(f).match(/window\.(ANTICOAG_[A-Z_]+)\s*=/g) || []; m.forEach(s => fileOf[s.match(/ANTICOAG_[A-Z_]+/)[0]] = f); }

// walk every string with its path
const walk = (v, p, cb, key) => { if (typeof v === "string") cb(v, p, key); else if (Array.isArray(v)) v.forEach((x, i) => walk(x, `${p}[${i}]`, cb, key)); else if (v && typeof v === "object") for (const k of Object.keys(v)) walk(v[k], `${p}.${k}`, cb, k); };
const strings = []; for (const g of globals) walk(win[g], g, (s, p, key) => strings.push({ s, p, key, file: fileOf[g] || g }));
const keyPaths = []; const walkKeys = (v, p) => { if (Array.isArray(v)) v.forEach((x, i) => walkKeys(x, `${p}[${i}]`)); else if (v && typeof v === "object") for (const k of Object.keys(v)) { keyPaths.push({ k, p: `${p}.${k}`, v: v[k] }); walkKeys(v[k], `${p}.${k}`); } };
globals.forEach(g => walkKeys(win[g], g));

// ---------- schema ----------
const T = win.ANTICOAG_TRIALS;
const REQUIRED = ["id", "acronym", "year", "yearLabel", "indication", "status", "title", "population", "intervention", "comparator", "primaryResult", "safety", "takeaway", "cite", "guidelines", "caveats", "practiceTakeaway"];
const STATUSES = ["published", "recent", "pending"];
if (!Array.isArray(T)) add("ERROR", "schema", "trials", "window.ANTICOAG_TRIALS missing or not an array");
else {
  const seen = new Set();
  T.forEach((t, i) => {
    const w = `trials[${i}] ${t && t.id || "?"}`;
    for (const k of REQUIRED) {
      const v = t[k];
      const emptyOk = t.status === "pending" && ["primaryResult", "safety"].includes(k);
      if (v === undefined || v === null || (typeof v === "string" && !v.trim() && !emptyOk) || (k === "guidelines" && !Array.isArray(v))) add("ERROR", "schema", w, `missing/empty required field "${k}"`);
    }
    if (!t.doi && !t.url && !t.doiPending) add("ERROR", "schema", w, "needs doi, url or doiPending");
    if (t.status && !STATUSES.includes(t.status)) add("ERROR", "schema", w, `unknown status "${t.status}"`);
    if ("impact" in t) add("ERROR", "rating", w, `"impact" rating key present (unsourced Tier label; removed 2026-10-14)`);
    if (typeof t.year !== "number") add("ERROR", "schema", w, "year must be a number");
    if (seen.has(t.id)) add("ERROR", "schema", w, "duplicate id"); seen.add(t.id);
    for (const k of ["questionsAnswered", "questionsOpen"]) if (t[k] !== undefined) {
      if (!Array.isArray(t[k])) add("ERROR", "schema", w, `${k} must be an array`);
      else t[k].forEach((q, j) => { if (!q || !q.text || !q.source) add("ERROR", "schema", w, `${k}[${j}] needs text and source`); });
    }
  });
  const ids = new Set(T.map(t => t.id));
  (win.ANTICOAG_PATHWAYS || []).forEach(p => (p.trials || p.ids || []).forEach(id => { if (!ids.has(id)) add("ERROR", "schema", `pathways ${p.id}`, `unknown trial id "${id}"`); }));
}

// ---------- HTML ----------
const HTML = ["index.html", "capacitor/www/index.html"].filter(ex);
const stripStyle = s => s.replace(/<style[\s\S]*?<\/style>/g, "");
for (const h of HTML) {
  const src = rd(h);
  const scripts = (src.match(/<script>([\s\S]*?)<\/script>/g) || []).join("\n");
  const js = scripts + "\n" + [...dataFiles, ...extra].map(rd).join("\n");
  // dead-end buttons
  const tags = src.match(/<button\b[^>]*>/g) || [];
  let n = 0;
  for (const tag of tags) {
    n++;
    const attr = name => { const m = tag.match(new RegExp(`\\s${name}\\s*=\\s*("([^"]*)"|'([^']*)')`)); return m ? (m[2] ?? m[3]) : null; };
    if (/\sdisabled(\s|>|=)/.test(tag) && !attr("id")) continue;
    if (attr("onclick") || attr("type") === "submit" || attr("form")) continue;
    const id = attr("id");
    if (id && !id.includes("${") && new RegExp(`(getElementById\\(\\s*["'\`]${id}["'\`]|["'\`]#${id}[\\s"'\`.:\\[]|["'\`]#${id}\\b|\\$\\("#${id}")`).test(js)) continue;
    const dataAttrs = (tag.match(/\sdata-[a-z0-9-]+/g) || []).map(s => s.trim());
    if (dataAttrs.some(d => { const camel = d.slice(5).replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase()); return js.includes(`[${d}`) || js.includes(`dataset.${camel}`) || js.includes(`"${d}"`) || js.includes(`'${d}'`); })) continue;
    const cls = (attr("class") || "").split(/\s+/).filter(c => c && !c.includes("$") && !["btn", "sm", "ghost", "primary", "chip", "active"].includes(c));
    if (cls.some(c => new RegExp(`["'\`][^"'\`]*\\.${c.replace(/[-]/g, "\\-")}\\b`).test(scripts))) continue;
    if (id && id.includes("${")) continue; // templated id, handled by delegated listener checks above
    add("ERROR", "dead-end", h, `button with no handler: ${tag.slice(0, 140)}`);
  }
  // in-page hash routes
  const known = new Set((scripts.match(/k === "([a-z-]+)"/g) || []).map(s => s.match(/"([a-z-]+)"/)[1]));
  for (const m of src.matchAll(/href="#\/([a-z-]+)/g)) if (!known.has(m[1])) add("ERROR", "routes", h, `link to #/${m[1]} has no route in parseRoute`);
  // touch targets (static CSS)
  const css = (src.match(/<style>([\s\S]*?)<\/style>/g) || []).join("\n").replace(/\/\*[\s\S]*?\*\//g, "");
  const mediaRe = /@media([^{]*)\{/g; let mm;
  while ((mm = mediaRe.exec(css))) {
    const q = mm[1]; const mw = q.match(/max-width:\s*(\d+)px/);
    if (!(/pointer:\s*coarse/.test(q) || (mw && +mw[1] <= 900))) continue;
    let depth = 1, i = mediaRe.lastIndex; while (i < css.length && depth) { if (css[i] === "{") depth++; else if (css[i] === "}") depth--; i++; }
    const body = css.slice(mediaRe.lastIndex, i - 1);
    for (const r of body.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
      const sel = r[1].trim();
      if (!/(button|\.btn\b|\.chip\b|\.x\b|role="?(button|menuitem|tab)|\binput\b|\bselect\b|\bsummary\b|\ba\b(?![-\w]))/.test(sel)) continue;
      for (const d of r[2].matchAll(/(?:^|;)\s*((?:min-)?(?:height|width))\s*:\s*(\d+(?:\.\d+)?)px/g))
        if (+d[2] < 44) add("ERROR", "touch", `${h} @media${q.trim()}`, `${sel.replace(/\s+/g, " ")} { ${d[1]}: ${d[2]}px } < 44px`);
    }
  }
}

// ---------- wording rules ----------
const EXEMPT_KEYS = new Set(["cite", "doi", "url", "pmid", "href", "reference", "references", "citation", "source", "id"]);
const TRIAL_ATTRIBUTED = new Set(["population", "intervention", "comparator", "primaryResult", "safety", "designNotes", "title", "cite", "expectedResults", "questionsAnswered", "questionsOpen", "text", "guidelines", "note", "document", "society", "regulatoryNote", "labelGuidance", "guidelineSources"]);
// exam distractors (multiple-choice options) are deliberately wrong statements: listed as INFO
const DISTRACTOR = p => /ANTICOAG_CACP\.questions\[\d+\]\.choices\[/.test(p);
const visible = strings.filter(x => !EXEMPT_KEYS.has(x.key) && !/^(https?:|10\.\d)/.test(x.s));
// html visible text (outside <style>, comments stripped; URL tokens removed)
const htmlText = HTML.map(h => ({ h, t: stripStyle(rd(h)).replace(/<!--[\s\S]*?-->/g, "").replace(/\/\*[\s\S]*?\*\//g, "").replace(/^\s*\/\/.*$/gm, "").replace(/https?:\/\/\S+|10\.\d{4,}\/\S+/g, "") }));
const lineOf = (t, i) => t.slice(0, i).split("\n").length;

// NOAC
for (const x of visible) for (const m of x.s.matchAll(/\bNOACs?\b/gi)) add("ERROR", "noac", `${x.file} ${x.p}`, `"${ctxOf(x.s, m.index)}"`);
for (const { h, t } of htmlText) for (const m of t.matchAll(/\bNOACs?\b/gi)) add("ERROR", "noac", `${h}:${lineOf(t, m.index)}`, `"${ctxOf(t, m.index)}"`);
// reviewedBy
for (const k of keyPaths) if (k.k === "reviewedBy" && !(k.v === "" || k.v === null || k.v === undefined)) add("ERROR", "reviewedBy", k.p, `non-empty: ${JSON.stringify(k.v)}`);
for (const { h, t } of htmlText) for (const m of t.matchAll(/reviewedBy\s*[:=]\s*["'`]([^"'`]+)["'`]/g)) add("ERROR", "reviewedBy", `${h}:${lineOf(t, m.index)}`, `non-empty: "${m[1]}"`);
// Evidence quality
const EQ = /\bevidence[\s_-]*quality\b/i;
for (const k of keyPaths) if (EQ.test(k.k)) add("ERROR", "evidence", k.p, `key "${k.k}"`);
for (const x of visible) if (EQ.test(x.s)) add(x.p.includes(".changelog[") ? "INFO" : "ERROR", "evidence", `${x.file} ${x.p}`, `"${ctxOf(x.s, x.s.search(EQ))}"${x.p.includes(".changelog[") ? " (changelog history mention)" : ""}`);
for (const { h, t } of htmlText) for (const m of t.matchAll(new RegExp(EQ.source, "gi"))) add("ERROR", "evidence", `${h}:${lineOf(t, m.index)}`, `"${ctxOf(t, m.index)}"`);
// unsourced rating labels (same treatment as Evidence quality; changelog history mentions are INFO)
const RATING = /\bPractice[\s-]*changer\b|\bPractice[\s-]*defining\b|\bTier\s*[123]\b|\bTier\s+badge\b/i;
for (const x of visible) if (RATING.test(x.s)) add(x.p.includes(".changelog[") ? "INFO" : "ERROR", "rating", `${x.file} ${x.p}`, `"${ctxOf(x.s, x.s.search(RATING))}"`);
const LANDMARK = /\bLandmark DOAC\b/g, LANDMARK_LABEL = /\bLandmark DOAC\b(?!\s+\w)/;
for (const x of visible) for (const m of x.s.matchAll(LANDMARK)) { const lbl = LANDMARK_LABEL.test(x.s.slice(m.index)) && !/^Landmark DOAC\s+\w/.test(x.s.slice(m.index));
  add(lbl && !x.p.includes(".changelog[") ? "ERROR" : "INFO", "rating", `${x.file} ${x.p}`, `"${ctxOf(x.s, m.index)}"${lbl ? "" : " (prose mention, not the status label)"}`); }
for (const { h, t } of htmlText) for (const m of t.matchAll(LANDMARK)) add("ERROR", "rating", `${h}:${lineOf(t, m.index)}`, `"${ctxOf(t, m.index)}"`);
for (const { h, t } of htmlText) for (const m of t.matchAll(new RegExp(RATING.source, "gi"))) add("ERROR", "rating", `${h}:${lineOf(t, m.index)}`, `"${ctxOf(t, m.index)}"`);
// doubled words, empty parentheses, and "for of" in trial-card reader-visible prose
const GARBLE = [[/\bthe\s+the\b/gi, "doubled word"], [/\(\s*\)/g, "empty parentheses"], [/\bfor\s+of\b/gi, "for of"]];
const proseKeys = ["title", "population", "intervention", "comparator", "primaryResult", "safety", "takeaway", "background", "designNotes", "strengths", "limitations", "caveats", "practiceTakeaway", "journalClub", "regulatoryNote", "expectedResults"];
if (Array.isArray(T)) T.forEach((t, i) => {
  const scan = (s, p) => {
    if (typeof s !== "string" || !s) return;
    for (const [re, name] of GARBLE) { re.lastIndex = 0; for (const m of s.matchAll(re)) add("ERROR", "garble", `trials[${i}] ${t.id || "?"} ${p}`, `${name}: "${ctxOf(s, m.index)}"`); }
  };
  for (const k of proseKeys) scan(t[k], k);
  for (const k of ["questionsAnswered", "questionsOpen"]) (t[k] || []).forEach((q, j) => scan(q && q.text, `${k}[${j}].text`));
  (t.guidelines || []).forEach((g, j) => { if (!g) return; scan(g.document, `guidelines[${j}].document`); scan(g.note, `guidelines[${j}].note`); });
});
// imperative dosing language
const IMP = [
  /\brecommend(?:s|ed|ing)?\b/i,
  /\bshould (?:take|receive|get|be (?:given|held|stopped|started|dosed|reduced|switched|resumed|bridged|used)|hold|start|stop|resume|use|give|bridge|dose|reduce|switch)\b/i,
  /\bhold (?:for|(?:the |it |it for |each |)\w+ for)\b/i,
  /(?<![-\w])(?:take|give|start|use|resume|reduce to|switch to|dose(?: at)?)\s+(?:\w+\s+)?\d+(?:\.\d+)?\s?mg\b/i,
  /\bdo not (?:give|use|start|stop|bridge|hold|dose|resume|prescribe|reduce|switch)\b/i,
  /\bmust (?:be )?(?:held|given|taken|stopped|dosed|bridged)\b/i,
  /\b(?:never|always) (?:give|use|bridge|dose|hold|start|stop)\b/i,
];
const ATTR = /\b(trial|protocol|studied|randomi[sz]ed|participants|enrolled|guideline|guidance|CHEST|ACCP|ACC|AHA|ESC|ASRA|ASH|ISTH|NICE|EHRA|AAN|ASCO|NCCN|label(?:s|ing|led)?|SmPC|USPI|PI|prescribing information|KDIGO|FDA|EMA|consensus|statement|pathway authors)\b/;
const trialNames = Array.isArray(T) ? T.map(t => t.acronym).filter(Boolean).map(a => a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")) : [];
const TRIALRE = trialNames.length ? new RegExp(`(?:^|[^A-Za-z0-9])(?:${trialNames.join("|")})(?![A-Za-z0-9])`) : /$^/;
const sentences = s => s.split(/(?<=[.!?;])\s+(?=[A-Z(“"])/);
function impScan(s, where, inTrialField) {
  for (const sen of sentences(s)) for (const re of IMP) { const m = sen.match(re); if (!m) continue;
    const attributed = inTrialField || ATTR.test(sen) || TRIALRE.test(sen);
    add(attributed ? "INFO" : "ERROR", "imperative", where, `${attributed ? "(attributed) " : ""}"${m[0]}" in: "${sen.length > 220 ? sen.slice(0, 217) + "…" : sen}"`); break; }
}
for (const x of visible) {
  if (x.p.includes(".changelog[")) continue; // history text describes edits, not visitors
  const segs = x.p.split(".").slice(1).map(seg => seg.replace(/\[\d+\]/g, ""));
  const trialField = DISTRACTOR(x.p) || (x.file.endsWith("trials.js") && segs.some(seg => TRIAL_ATTRIBUTED.has(seg))) || segs.some(seg => seg === "labelGuidance" || seg === "guidelineSources");
  impScan(x.s, `${x.file} ${x.p}`, trialField);
}
for (const { h, t } of htmlText) {
  const vis = t.replace(/<script[\s\S]*?<\/script>/g, m => m.replace(/[^\n]/g, " ")).replace(/<[^>]+>/g, " ");
  const lits = []; for (const m of t.matchAll(/<script>([\s\S]*?)<\/script>/g)) { const base = m.index; for (const q of m[1].matchAll(/"((?:[^"\\\n]|\\.){12,})"|`([^`]{12,})`/g)) lits.push({ s: (q[1] || q[2]).replace(/\$\{[^}]*\}/g, " ").replace(/<[^>]+>/g, " "), i: base + q.index }); }
  vis.split("\n").forEach((line, i) => { if (line.trim()) impScan(line.trim(), `${h}:${i + 1}`, false); });
  lits.forEach(l => impScan(l.s, `${h}:${lineOf(t, l.i)} (script)`, false));
}

// ---------- mirror ----------
if (ex("capacitor/www")) {
  const list = d => fs.readdirSync(P(d), { withFileTypes: true }).flatMap(e => e.isDirectory() ? list(`${d}/${e.name}`) : [`${d}/${e.name}`]);
  for (const f of list("js")) { const w = "capacitor/www/" + f; if (!ex(w)) add("ERROR", "mirror", w, "missing"); else if (!fs.readFileSync(P(f)).equals(fs.readFileSync(P(w)))) add("ERROR", "mirror", w, `differs from ${f}`); }
  for (const f of list("capacitor/www/js")) if (!ex(f.replace("capacitor/www/", ""))) add("ERROR", "mirror", f, "stale (no root copy)");
  if (ex("index.html") && ex("capacitor/www/index.html")) {
    const norm = s => s.replace(/\s*<link rel="preconnect"[^>]*>\n?/g, "").replace(/\s*<link href="https:\/\/fonts\.googleapis\.com[^>]*>\n?/g, "").replace(/\s*<link rel="stylesheet" href="fonts\.css" \/>\n?/g, "");
    if (norm(rd("index.html")) !== norm(rd("capacitor/www/index.html"))) add("ERROR", "mirror", "capacitor/www/index.html", "differs from index.html beyond the font links");
  }
}

function ctxOf(s, i) { return s.slice(Math.max(0, i - 50), i + 60).replace(/\s+/g, " ").trim(); }

// ---------- report ----------
const errors = out.filter(o => o.level === "ERROR"), info = out.filter(o => o.level === "INFO"), warn = out.filter(o => o.level === "WARN");
if (asJson) console.log(JSON.stringify({ root, dataDir: DATA_DIR, trials: Array.isArray(T) ? T.length : 0, errors: errors.length, warnings: warn.length, info: info.length, findings: out }, null, 1));
else {
  const by = {}; out.forEach(o => { const k = `${o.level} ${o.check}`; (by[k] = by[k] || []).push(o); });
  for (const [k, list] of Object.entries(by).sort()) { if (quiet && k.startsWith("INFO")) { console.log(`${k}: ${list.length}`); continue; }
    console.log(`\n== ${k} (${list.length})`); list.forEach(o => console.log(`  ${o.where}: ${o.msg}`)); }
  console.log(`\nverify-integrity: ${errors.length ? "FAILED" : "OK"} — ${errors.length} error(s), ${warn.length} warning(s), ${info.length} info; ${Array.isArray(T) ? T.length : 0} trial cards; data dir ${DATA_DIR}`);
}
process.exit(errors.length ? 1 : 0);
