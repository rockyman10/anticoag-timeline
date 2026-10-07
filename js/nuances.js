/* Equipoise / nuance cards — both sides + what would change practice */
window.ANTICOAG_NUANCES = [
  {
    id: "acasa-vs-notion4",
    title: "ACASA-TAVI vs NOTION-4",
    topic: "Antithrombotic strategy after TAVI",
    sideA: {
      label: "ACASA-TAVI lens",
      points: "Emphasizes DOAC monotherapy strategies in selected post-TAVI patients without another mandate for combination therapy. Frames bleeding reduction when antiplatelet burden can be minimized."
    },
    sideB: {
      label: "NOTION-4 lens",
      points: "Highlights that post-TAVI antithrombotic needs remain heterogeneous (AF vs sinus, coronary disease, valve thrombosis concerns). One trial’s monotherapy message may not map to every implant phenotype."
    },
    synthesis: "Do not force a single post-TAVI cocktail. Stratify by AF vs no AF, recent coronary stent, and bleeding phenotype. Read both trials as population-specific, not as universal TAVI law.",
    whatWouldChange: "A guideline-endorsed default that clearly separates AF-TAVI from sinus-TAVI pathways—or new valve-thrombosis imaging endpoints that favor one strategy—would collapse much of this equipoise.",
    trialIds: ["acasa-tavi", "notion-4", "galileo", "popular-tavi", "popular-tavi-oac", "atlantis"],
    links: [
      { kind: "framework", id: "post-tavi-antithrombotic", label: "Framework: Post-TAVI antithrombotic" },
      { kind: "case", id: "tavi-sinus-routine-doac", label: "Case: TAVI sinus — routine DOAC?" }
    ]
  },
  {
    id: "enrich-vs-aspire",
    title: "ENRICH-AF vs pending ASPIRE",
    topic: "Anticoagulation after intracranial hemorrhage",
    sideA: {
      label: "ENRICH-AF caution",
      points: "Signals that restarting oral anticoagulation after ICH is not automatically net-beneficial across all ICH subtypes and timings. Supports restraint and neurology co-management."
    },
    sideB: {
      label: "ASPIRE (pending) upside question",
      points: "May clarify whether carefully selected post-ICH patients with high thromboembolic risk gain from a structured anticoagulation strategy. Until reported, do not assume ENRICH closes the book for every survivor."
    },
    synthesis: "Treat post-ICH OAC as subtype-specific (lobar vs deep, probable CAA, time clock). Document why you restart, delay, or pursue LAAO.",
    whatWouldChange: "A clear ASPIRE (or related) result by ICH subtype plus society guidance on timing windows would move this from case-by-case art toward protocolized pathways.",
    trialIds: ["enrich-af", "aspire", "prestige-af"],
    links: [
      { kind: "framework", id: "post-ich-anticoagulation", label: "Framework: Post-ICH" },
      { kind: "case", id: "post-ich-af", label: "Case: Post-ICH AF" },
      { kind: "pathway", id: "post-ich", label: "TX: Post-ICH" }
    ]
  },
  {
    id: "oceanic-vs-azalea",
    title: "OCEANIC-AF failure vs AZALEA bleeding signal",
    topic: "Factor XI / XIa inhibition — efficacy vs bleeding narrative",
    sideA: {
      label: "OCEANIC-AF (asundexian)",
      points: "AF stroke-prevention program did not support asundexian vs apixaban for efficacy—reminds us FXI inhibition is not ‘DOAC but safer’ by default in AF."
    },
    sideB: {
      label: "AZALEA-TIMI 71 bleeding signal",
      points: "Abelacimab showed a striking bleeding reduction signal vs rivaroxaban in AF, keeping the FXI safety story alive even as efficacy programs diverge by agent and indication."
    },
    synthesis: "Separate agents, doses, and indications. Negative AF efficacy for one FXIa drug does not erase bleeding biology—nor does a bleeding win prove stroke prevention. Await LIBREXIA-AF / indication-specific readouts.",
    whatWouldChange: "A phase 3 FXIa AF trial that is noninferior for stroke and clearly safer for bleeding—or consistent failures across agents—would end the ‘hope vs hype’ split.",
    trialIds: ["oceanic-af", "azalea-timi-71", "librexia-af", "pacific-stroke", "librexia-acs"]
  },
  {
    id: "dual-pathway-duration",
    title: "Dual-pathway duration after AF + PCI",
    topic: "How short can OAC + P2Y12 go?",
    sideA: {
      label: "Shorter dual pathway",
      points: "AUGUSTUS-style early aspirin drop plus emerging OPTIMA-AF / EPIDAURUS-type duration data argue that many patients do not need prolonged combination therapy once the stent is stable."
    },
    sideB: {
      label: "Longer caution",
      points: "Complex PCI, high ischemic risk, or uncertain adherence may still warrant a longer dual window. Trial exclusions and open-label designs limit blanket 1-month rules."
    },
    synthesis: "Default toward shorter dual pathway in average-risk AF+PCI on a DOAC + P2Y12, but escalate duration for ischemic risk. Drop aspirin early; do not drop clinical judgment.",
    whatWouldChange: "Harmonized ACC/AHA–ESC duration tables that explicitly incorporate 2025–2026 duration trials would reduce practice scatter.",
    trialIds: ["augustus", "afire", "optima-af", "epidaurus", "pioneer-af-pci", "re-dual-pci"],
    links: [
      { kind: "framework", id: "af-pci-dual-pathway", label: "Framework: AF + PCI dual pathway" },
      { kind: "case", id: "af-pci-week2", label: "Case: AF + PCI week 2" },
      { kind: "pathway", id: "af-pci", label: "TX: AF + PCI" }
    ]
  },
  {
    id: "hi-peitho-enrichment",
    title: "Intermediate-risk PE: anticoagulation vs CDT",
    topic: "Who is ‘intermediate enough’ for catheter therapy?",
    sideA: {
      label: "Anticoagulation-first",
      points: "Most intermediate-risk PE still does well on anticoagulation alone; overuse of CDT exposes patients to procedural harm without outcome gain."
    },
    sideB: {
      label: "Enriched CDT candidates",
      points: "HI-PEITHO-type enrichment (RV dysfunction + biomarker/clinical severity in capable centers) defines a narrower band where device therapy is being tested—not the entire intermediate bucket."
    },
    synthesis: "Name the enrichment criteria out loud. If the patient would not have been randomized, do not treat them as if they were.",
    whatWouldChange: "Guideline algorithms that list explicit physiologic thresholds for CDT referral—and negative or positive hard clinical endpoints from enriched RCTs—would settle local PERT debates.",
    trialIds: ["hi-peitho", "einstein-pe"],
    links: [
      { kind: "framework", id: "intermediate-pe-cdt", label: "Framework: Intermediate PE / CDT" },
      { kind: "case", id: "intermediate-pe-pert", label: "Case: Intermediate PE / PERT" },
      { kind: "pathway", id: "intermediate-pe", label: "TX: Intermediate PE" }
    ]
  },
  {
    id: "annexa-historical-vs-us-4fpcc",
    title: "ANNEXA-era andexanet vs U.S. 4F-PCC practice",
    topic: "FXa-inhibitor major-bleed reversal after Andexxa U.S. withdrawal",
    sideA: {
      label: "ANNEXA historical lens",
      points: "ANNEXA-4 and ANNEXA-I explain why andexanet was developed and studied for FXa-inhibitor bleeding (including ICH). They remain useful for journal-club teaching on hemostasis endpoints and the thromboembolism trade-off that shaped regulators’ risk–benefit view."
    },
    sideB: {
      label: "U.S. practice lens (after Dec 22, 2025)",
      points: "Andexxa is not available in the U.S. after Dec 22, 2025. Current U.S. teaching for life-threatening FXa-inhibitor bleeding is supportive care plus institutional/off-label 4F-PCC pathways — not andexanet order sets. Dabigatran still has idarucizumab as specific reversal when indicated. Ondexxya/andexanet may remain outside the U.S. — verify formulary."
    },
    synthesis: "Keep ANNEXA in the curriculum as history and TE-context teaching. Keep Andexxa out of U.S. order-set language after Dec 2025. Branch every case by agent (dabigatran vs FXa) and by country formulary.",
    whatWouldChange: "A new FDA-labeled specific FXa antidote in the U.S., or clear society algorithms that standardize off-label 4F-PCC use for FXa-inhibitor ICH/major bleed, would rewrite the ‘what do I order at 2 a.m.’ half of this card. Non-U.S. labeling changes would not automatically change U.S. teaching.",
    trialIds: ["annexa-4", "annexa-i", "re-verse-ad"],
    links: [
      { kind: "framework", id: "doac-major-bleed-us", label: "Framework: DOAC major bleed (U.S.)" },
      { kind: "case", id: "fxa-ich-post-andexxa", label: "Case: ICH on apixaban" },
      { kind: "pathway", id: "doac-bleed-us", label: "TX: Major bleed on DOAC (U.S.)" },
      { kind: "page", id: "reversal", label: "Bleed & reversal page" }
    ]
  }
];
