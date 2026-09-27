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
      goals: [
        "Orient to AF stroke-prevention teaching",
        "See how DOAC-era evidence is organized on the timeline"
      ],
      primary: { kind: "framework", id: "af-stroke-prevention" },
      deepen: { kind: "pathway", id: "doac-landmarks" },
      deepenRequired: false,
      softInvites: []
    },
    {
      id: "acute-vte-doac",
      order: 2,
      title: "Acute VTE — DOAC choice in practice",
      goals: [
        "Walk the acute VTE decision surface",
        "Practice a concrete DOAC-choice case"
      ],
      primary: { kind: "framework", id: "acute-vte-doac" },
      deepen: { kind: "case", id: "vte-doac-choice" },
      deepenRequired: false,
      softInvites: []
    },
    {
      id: "peri-bridge",
      order: 3,
      title: "Holding for procedures — BRIDGE thinking",
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
      goals: [
        "Contrast mechanical-valve teaching with AF/VTE DOAC defaults"
      ],
      primary: { kind: "framework", id: "mechanical-valve-vka" },
      deepen: { kind: "case", id: "mechanical-avr-doac-request" },
      deepenRequired: false,
      softInvites: []
    },
    {
      id: "aps-vka",
      order: 5,
      title: "APS — when VKA stays first-line",
      goals: [
        "Apply APS long-term framework",
        "Practice the triple-positive DOAC-request case"
      ],
      primary: { kind: "framework", id: "aps-triple-positive-vka" },
      deepen: { kind: "case", id: "aps-triple-positive-doac" },
      deepenRequired: false,
      softInvites: []
    },
    {
      id: "compass-dose",
      order: 6,
      title: "Vascular-dose rivaroxaban ≠ AF dose",
      goals: [
        "Separate COMPASS vascular regimen from AF/VTE full-dose teaching"
      ],
      primary: { kind: "framework", id: "compass-vascular-dose" },
      deepen: { kind: "case", id: "compass-vs-af-dose-trap" },
      deepenRequired: false,
      softInvites: []
    },
    {
      id: "post-tavi",
      order: 7,
      title: "After TAVI — antithrombotic forks",
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
      goals: [
        "Use U.S. major-bleed framework + bleed page",
        "Practice post-Andexxa-era ICH case"
      ],
      primary: { kind: "framework", id: "doac-major-bleed-us" },
      deepen: { kind: "case", id: "fxa-ich-post-andexxa" },
      deepenRequired: true,
      softInvites: [
        { kind: "cacp", label: "Optional: unofficial CACP practice" }
      ]
    },
    {
      id: "af-pci",
      order: 9,
      title: "AF after PCI — dual pathway duration",
      goals: [
        "See dual-pathway teaching and a week-2 triple-therapy case"
      ],
      primary: { kind: "framework", id: "af-pci-dual-pathway" },
      deepen: { kind: "case", id: "af-pci-week2" },
      deepenRequired: false,
      softInvites: []
    },
    {
      id: "cancer-vte",
      order: 10,
      title: "Cancer-associated VTE",
      goals: [
        "Connect cancer-VTE framework to a step-down case"
      ],
      primary: { kind: "framework", id: "cancer-vte" },
      deepen: { kind: "case", id: "cancer-stepdown" },
      deepenRequired: false,
      softInvites: []
    }
  ]
};
