/* Core Clinic Path v1 — curriculum lesson map (chrome only; no clinical invention) */
window.ANTICOAG_LEARN_PATH = {
  meta: {
    trackId: "core-clinic-v1",
    title: "Core Clinic Path",
    subtitle: "First anticoagulation clinic week",
    pathVersion: 1,
    lessonCount: 10,
    disclaimer:
      "A short guided path through the site’s teaching tools. Educational resource — not medical advice."
  },
  lessons: [
    {
      id: "af-doac-start",
      order: 1,
      title: "AF and choosing anticoagulation",
      whyThis:
        "Start with AF stroke-prevention teaching, then see how landmark DOAC trials sit on the timeline.",
      orientTip: "Open the AF stroke-prevention framework first.",
      goals: [
        "Orient to AF stroke-prevention teaching",
        "See how DOAC-era evidence is organized on the timeline"
      ],
      primary: { kind: "framework", id: "af-stroke-prevention" },
      deepen: { kind: "pathway", id: "doac-landmarks" },
      deepenRequired: false,
      hasEvidenceVisual: true,
      softInvites: [
        { kind: "framework", id: "doac-appropriateness", label: "Before you leave AF dosing: run the DOAC appropriateness checklist — niche, dose family, and three-line documentation." },
        { kind: "compare", pairId: "B2", trialIds: ["re-ly", "rocket-af", "aristotle"], label: "Same DOAC era, three different design stories — compare RE-LY, ROCKET-AF, and ARISTOTLE (question / population / comparator) before the numbers." },
        { kind: "framework", id: "ttr-vka-quality", label: "If someone is still on warfarin, TTR is the VKA quality lens — DOACs don’t have one." }
      ]
    },
    {
      id: "acute-vte-doac",
      order: 2,
      title: "Acute VTE — DOAC choice in practice",
      whyThis:
        "Move from AF to acute VTE — open the DOAC-choice framework, then a concrete case.",
      orientTip: "Open the acute VTE DOAC framework first. If the question is full vs reduced after deciding to extend in non-cancer high-risk VTE, open RENOVE on the timeline with AMPLIFY-EXT / EINSTEIN-CHOICE.",
      goals: [
        "Walk the acute VTE decision surface",
        "Practice a concrete DOAC-choice case"
      ],
      primary: { kind: "framework", id: "acute-vte-doac" },
      deepen: { kind: "case", id: "vte-doac-choice" },
      deepenRequired: false,
      softInvites: [
        { kind: "framework", id: "doac-appropriateness", label: "Acute VTE DOAC choice isn’t done until indication and load→maintenance family are documented." },
        { kind: "compare", pairId: "B1", trialIds: ["amplify-ext", "einstein-choice"], label: "Extended VTE next: compare AMPLIFY-EXT and EINSTEIN-CHOICE — same ‘after initial therapy’ vibe, different comparators." },
        { kind: "compare", pairId: "B4", trialIds: ["renove", "api-cat"], label: "Both talk reduced vs full DOAC dosing after months of therapy — compare RENOVE vs API-CAT on who was studied before any numbers." }
      ]
    },
    {
      id: "peri-bridge",
      order: 3,
      title: "Holding for procedures — BRIDGE thinking",
      whyThis:
        "Elective procedures are where reflexive bridging shows up — use the peri framework + BRIDGE-era case.",
      orientTip: "Open the peri-procedural OAC framework first.",
      goals: [
        "Use the peri-procedural framework",
        "Confront reflexive LMWH bridging in typical NVAF"
      ],
      primary: { kind: "framework", id: "peri-procedural-oac" },
      deepen: { kind: "case", id: "af-warfarin-bridge-reflex" },
      deepenRequired: false,
      softInvites: []
    },
    {
      id: "mech-valve",
      order: 4,
      title: "Mechanical valves are not DOAC territory",
      whyThis:
        "Mechanical valves break the “just use a DOAC” habit — contrast with AF/VTE defaults.",
      orientTip: "Open the mechanical-valve VKA framework first.",
      goals: [
        "Contrast mechanical-valve teaching with AF/VTE DOAC defaults"
      ],
      primary: { kind: "framework", id: "mechanical-valve-vka" },
      deepen: { kind: "case", id: "mechanical-avr-doac-request" },
      deepenRequired: false,
      softInvites: [
        { kind: "framework", id: "doac-appropriateness", label: "If someone asks for a DOAC on a mechanical valve, the checklist should stop at niche — open the VKA framework." },
        { kind: "framework", id: "ttr-vka-quality", label: "Optional: TTR is how VKA clinics talk about INR control quality — open TTR / VKA quality (not a DOAC metric)." }
      ]
    },
    {
      id: "aps-vka",
      order: 5,
      title: "APS — when VKA stays first-line",
      whyThis:
        "APS (especially triple-positive) is another VKA-first niche — practice the DOAC-request case.",
      orientTip: "Open the APS triple-positive VKA framework first.",
      goals: [
        "Apply APS long-term framework",
        "Practice the triple-positive DOAC-request case"
      ],
      primary: { kind: "framework", id: "aps-triple-positive-vka" },
      deepen: { kind: "case", id: "aps-triple-positive-doac" },
      deepenRequired: false,
      softInvites: [
        { kind: "framework", id: "doac-appropriateness", label: "Triple-positive APS: appropriateness means VKA-first teaching, not a DOAC default." }
      ]
    },
    {
      id: "compass-dose",
      order: 6,
      title: "Vascular-dose rivaroxaban ≠ AF dose",
      whyThis:
        "Vascular-dose rivaroxaban is not an AF/VTE dose — this lesson exists to prevent that mix-up.",
      orientTip: "Open the COMPASS vascular-dose framework first.",
      goals: [
        "Separate COMPASS vascular regimen from AF/VTE full-dose teaching"
      ],
      primary: { kind: "framework", id: "compass-vascular-dose" },
      deepen: { kind: "case", id: "compass-vs-af-dose-trap" },
      deepenRequired: false,
      softInvites: [
        { kind: "framework", id: "doac-appropriateness", label: "Spot-check: is this COMPASS vascular dosing or an AF/VTE dose trap? Use the appropriateness checklist." }
      ]
    },
    {
      id: "post-tavi",
      order: 7,
      title: "After TAVI — antithrombotic forks",
      whyThis:
        "Post-TAVI antithrombotic choices differ from mechanical-valve and routine AF care.",
      orientTip: "Open the post-TAVI antithrombotic framework first.",
      goals: [
        "Map post-TAVI choices (OAC indication vs sinus)",
        "See HALT imaging vs routine DOAC teaching"
      ],
      primary: { kind: "framework", id: "post-tavi-antithrombotic" },
      deepen: { kind: "case", id: "tavi-sinus-routine-doac" },
      deepenRequired: false,
      softExtra: { kind: "nuance", id: "acasa-vs-notion4" },
      softInvites: []
    },
    {
      id: "doac-bleed-us",
      order: 8,
      title: "Major bleed on a DOAC (U.S.)",
      whyThis:
        "U.S. major-bleed teaching after Andexxa withdrawal — framework, then the ICH case.",
      orientTip: "Open the U.S. major-bleed framework first.",
      goals: [
        "Use U.S. major-bleed framework + bleed page",
        "Practice post-Andexxa-era ICH case"
      ],
      primary: { kind: "framework", id: "doac-major-bleed-us" },
      deepen: { kind: "case", id: "fxa-ich-post-andexxa" },
      deepenRequired: true,
      softInvites: [
        { kind: "cacp", label: "Optional: unofficial CACP practice" },
        { kind: "framework", id: "doac-appropriateness", label: "Bleed stewardship is a different checklist — U.S. FXa care without Andexxa as default." },
        { kind: "compare", pairId: "B3", trialIds: ["annexa-4", "annexa-i"], label: "Compare ANNEXA-4 and ANNEXA-I for what they studied — then open the U.S. post-Andexxa framework. Andexxa is not default U.S. care." }
      ]
    },
    {
      id: "af-pci",
      order: 9,
      title: "AF after PCI — dual pathway duration",
      whyThis:
        "After PCI, dual-pathway duration (not endless triple therapy) is the teachable fork.",
      orientTip: "Open the AF-after-PCI dual-pathway framework first.",
      goals: [
        "See dual-pathway teaching and a week-2 triple-therapy case"
      ],
      primary: { kind: "framework", id: "af-pci-dual-pathway" },
      deepen: { kind: "case", id: "af-pci-week2" },
      deepenRequired: false,
      softInvites: [
        { kind: "framework", id: "doac-appropriateness", label: "Dual-pathway patients still need a named OAC indication + a plan to drop aspirin — document duration." }
      ]
    },
    {
      id: "cancer-vte",
      order: 10,
      title: "Cancer-associated VTE",
      whyThis:
        "Cancer-associated VTE has its own pathway — framework plus a step-down case.",
      orientTip: "Open the cancer-associated VTE framework first. Cancer extend step-down → API-CAT; non-cancer high-risk extend dose question → RENOVE.",
      goals: [
        "Connect cancer-VTE framework to a step-down case"
      ],
      primary: { kind: "framework", id: "cancer-vte" },
      deepen: { kind: "case", id: "cancer-stepdown" },
      deepenRequired: false,
      softInvites: [
        { kind: "framework", id: "doac-appropriateness", label: "Optional: same documentation habit after you pick acute oral vs LMWH and any later step-down plan." },
        { kind: "compare", pairId: "B4", trialIds: ["renove", "api-cat"], label: "Both talk reduced vs full DOAC dosing after months of therapy — compare RENOVE vs API-CAT on who was studied (cancer extend ≠ RENOVE’s non-cancer high-risk extend)." }
      ]
    }
  ]
};
