# UX implementation spec — Teach collapse + mobile overflow

**Owner:** AC UX → Bot (when lane 3 opens)  
**Scope:** Items 1–2 only from ranked UX list  
**Status:** Spec only — **no code until CEO opens lane 3**  
**Constraints:** No clinical copy changes. Preserve all deep-link hashes. Keep existing modal bodies and handlers.

---

## Goals

1. Restore DESIGN.md “minimal toolbar / overview first”: one Teach entry point instead of an 8-button band.
2. On narrow viewports, keep secondary chrome from eating timeline height so learners can still scan lanes.

## Non-goals

- Items 3–5 (Rapid Recap action weight, print CSS, touch tip).
- Renaming Teach tools, changing tool content, or inventing clinical text.
- Moving Trial playlists / Compare / Guided overview / Self-check / Embed / Theme into the Teach menu (those stay primary timeline chrome).
- Changing `?embed=1` hide list beyond ensuring the new Teach control is hidden in embed mode like today’s `.sec-nav`.

---

## Current chrome (baseline)

**Topbar `.actions`:** Trial playlists, Compare, Guided overview, Self-check, Embed, Theme  

**`.sec-nav` (Teach band):** Treatment pathways · CACP prep · DDI library · Frameworks · Cases · Bleed & reversal · Nuance · Changelog  

**Hashes to preserve (open same handlers as today’s buttons):**

| Menu item | Existing control | Hash / route family |
|-----------|------------------|---------------------|
| Treatment pathways | `#btn-txpath` | `#/pathway-tx`, `#/pathway-tx/{id}` |
| CACP prep | `#btn-cacp` | `#/cacp`, `#/cacp/q/{id}` |
| DDI library | `#btn-ddi` | `#/ddi`, `#/ddi/{drug}/{interactor}`, `#/ddi/compare/…` |
| Frameworks | `#btn-frameworks` | `#/frameworks`, `#/framework/{id}` |
| Cases | `#btn-cases` | `#/cases`, `#/case/{id}` |
| Bleed & reversal | `#btn-reversal` | `#/reversal` |
| Nuance | `#btn-nuance` | `#/nuances`, `#/nuance/{id}` |
| Changelog | `#btn-changelog` | `#/changelog` |

Deep links arriving via `location.hash` must keep working unchanged (router already maps these). Menu is only a chrome affordance, not a second router.

---

## Item 1 — Teach collapse → one menu/sheet

### UX

- Replace the flat `.sec-nav` button row with a single control: **Teach** (label + chevron), placed where the Teach band starts today (under topbar, above What’s new / filters).
- Activating Teach opens a **sheet / menu panel** listing the eight tools in the same order as today, each with the same visible label text (no copy rewrite).
- Choosing an item: run the **existing** `onclick` / open function for that tool, then close the menu.
- Keyboard: Teach button is tabbable; `Enter`/`Space` toggles; `Esc` closes; arrow keys move within the open menu; focus returns to Teach on close.
- Screen reader: `aria-expanded`, `aria-controls` pointing at the menu; menu `role="menu"` with `role="menuitem"` (or a disclosure listbox pattern — pick one and stay consistent).
- Desktop: compact popover anchored under the Teach button (not a full-screen takeover).
- Mobile (see item 2): same control, but panel may be a bottom sheet / full-width dropdown for fat-finger targets (~44px rows).

### Implementation notes for Bot

- Prefer **keeping the eight button elements** (same `id`s) and relocating them into the menu panel so existing `getElementById("btn-…").onclick = …` bindings and embed CSS selectors keep working. If markup must change, rebind once and update `body.embed` rules to hide `#btn-teach` (new) instead of/in addition to `.sec-nav`.
- Remove or empty the always-visible chip row so vertical space returns to the board.
- What’s new, filters, pathway tray: unchanged behavior; only benefit from regained height.
- Visual: reuse existing `.btn` / paper / line tokens from DESIGN.md (Source Serif not required on menu items — IBM Plex Sans UI).

### Acceptance

- [ ] No always-visible 8-button Teach row on default desktop or mobile.
- [ ] Each of the eight tools opens the same modal/view as before from the menu.
- [ ] Direct hashes in the table still open the correct tool without using the menu.
- [ ] Embed mode (`?embed=1`) does not show Teach.
- [ ] No changes to trial/DDI/CACP/pathway **content strings**.

---

## Item 2 — Mobile overflow + protect timeline height

### Breakpoint

Reuse existing **`max-width: 640px`** (already used for deck/hint hiding). Optional refinement: if 640 feels early for the overflow pattern, document any shift in the PR — default stay at 640 for consistency.

### UX

At ≤640px:

1. **Teach** uses the same single control as item 1 (required dependency).
2. Topbar **secondary** actions move behind a single **More** (or overflow `⋯`) control: Guided overview, Self-check, Embed, Theme.
3. Topbar **primary** stay visible when space allows: **Trial playlists**, **Compare** (Compare is stateful — keep visible).
4. If even primary + Teach + More wrap, allow one wrap row max; do **not** leave 6+ separate ghost buttons wrapping freely as today.
5. **Timeline height:** replace the fragile `height: calc(100dvh - 230px)` with a flex-based board that consumes remaining viewport below chrome, with `min-height` ≥ ~280px. Measure chrome live or use a larger reserved offset only as fallback; goal is visible multi-lane scan without page-scroll-only timeline.
6. Keep existing mobile bits: hide `.brand .deck`, hide `.board-bar .hint`, narrower lane label column.

### Implementation notes for Bot

- Overflow menu: same a11y pattern as Teach (disclosure + Esc).
- Do not hide Compare behind overflow when `compare.length > 0` if that would hide the count — prefer Compare always visible on mobile.
- Pathway tray when `.on` can still consume a row; that’s intentional for the active tour — don’t force it into overflow.
- Touch targets ≥ 40px for menu rows.

### Acceptance

- [ ] At 375×667 and 390×844: ≤ ~2 chrome rows above filters (excluding open What’s new / active pathway tray).
- [ ] Timeline scroller shows at least ~2–3 full lanes without scrolling the page chrome away first.
- [ ] All overflow items still reachable and call the same handlers.
- [ ] Desktop ≥641px unchanged except Teach collapse from item 1.

---

## Ship order for Bot (when lane 3 opens)

1. Item 1 markup + a11y + embed hide (desktop benefit alone).
2. Item 2 overflow + flex timeline height (builds on Teach control).
3. Smoke: hash routes in table, Compare flow, pathway tray, embed screenshot.

## Out of scope until later items

Rapid Recap footer weighting (#3), `#print-root` CSS (#4), touch long-press tip (#5).

## Handoff

- Spec path: `docs/ux-spec-teach-mobile.md`
- Screenshots: attach when capture finishes (desktop chrome density, narrow wrap, optional Rapid Recap for context only).
