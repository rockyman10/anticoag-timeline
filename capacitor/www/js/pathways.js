/* Curated teaching pathways — ordered trial ids from ANTICOAG_TRIALS */
window.ANTICOAG_PATHWAYS = [
  {
    id: "doac-landmarks",
    title: "DOAC landmark era",
    description: "Pivotal AF and VTE trials that established the DOAC standard of care.",
    trialIds: ["re-ly", "rocket-af", "aristotle", "averroes", "engage-af", "re-cover", "einstein-dvt", "einstein-pe", "amplify", "hokusai-vte", "amplify-ext"]
  },
  {
    id: "vte-extend",
    title: "VTE extended secondary prevention",
    description: "After acute treatment: dabigatran versus warfarin (RE-MEDY) or placebo (RE-SONATE), then reduced-dose versus placebo, aspirin, or full-dose DOAC when extension is already indicated (non-cancer primary).",
    trialIds: ["re-medy", "re-sonate", "amplify-ext", "einstein-choice", "renove"]
  },
  {
    id: "cancer-vte",
    title: "Cancer-associated VTE",
    description: "CLOT (LMWH versus a coumarin), later named-drug treatment trials, CANVAS (any DOAC versus LMWH), extended reduced-dose therapy, and primary prophylaxis (AVERT beside CASSINI).",
    trialIds: ["clot", "catch", "hokusai-vte-cancer", "select-d", "adam-vte", "caravaggio", "canvas", "api-cat", "avert", "cassini", "aster-magnolia"]
  },
  {
    id: "af-pci",
    title: "AF + PCI / dual pathway",
    description: "Triple therapy to dual pathway: WOEST through AUGUSTUS and 2026 refinements. AFIRE and EPIC-CAD are stable coronary disease, not the early post-PCI window.",
    trialIds: ["woest", "pioneer-af-pci", "re-dual-pci", "entrust-af-pci", "augustus", "afire", "epic-cad", "optima-af", "epidaurus"]
  },
  {
    id: "laao",
    title: "LAAO vs OAC",
    description: "Percutaneous and surgical left atrial appendage strategies versus anticoagulation, plus Amulet versus Watchman (AMULET IDE), which is a device comparison rather than a DOAC comparison.",
    trialIds: ["protect-af", "prevail", "prague-17", "laaos-iii", "option", "champion-af", "amulet-ide"]
  },
  {
    id: "pe-reperfusion",
    title: "PE reperfusion / intermediate-risk PE",
    description: "Oral PE treatment, systemic fibrinolysis in intermediate-risk PE (PEITHO), and catheter-directed therapy (HI-PEITHO). Those reperfusion trials are not interchangeable.",
    trialIds: ["einstein-pe", "peitho", "hi-peitho"]
  },
  {
    id: "reversal",
    title: "Reversal / bleed management",
    description: "Idarucizumab for dabigatran; ANNEXA-4/I historical andexanet data — U.S. Andexxa withdrawn Dec 2025 (teach 4F-PCC pathways).",
    trialIds: ["re-verse-ad", "annexa-4", "annexa-i"]
  },
  {
    id: "whats-next",
    title: "What's next (FXI / pending)",
    description: "Factor XI lessons to date and pending AF, stroke, and post-ICH programs.",
    trialIds: ["pacific-stroke", "oceanic-af", "azalea-timi-71", "oceanic-stroke", "librexia-acs", "aster-magnolia", "librexia-af", "librexia-stroke", "aspire"]
  }
];
