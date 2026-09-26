/* Dosing / logistics highlights + bleed & reversal teaching page
   Teaching aid only — verify with local protocol / product labeling / primary paper. */
window.ANTICOAG_PRACTICAL = {
  disclaimer: "Logistics below are teaching highlights for common labeled patterns. Always verify dose, renal cutoffs, hold times, and reversal with institutional protocol, pharmacy, formulary, and current product labeling for your country.",

  dosingByTrial: {
    "re-ly": {
      regimen: "Dabigatran 150 mg BID (110 mg BID in some regions / selected patients per label).",
      food: "With or without food.",
      renal: "Avoid / adjust below labeled CrCl thresholds; check local label (often caution or avoid if CrCl <30 mL/min).",
      holdHint: "Typical teachable hold before higher-bleed-risk procedures is on the order of 1–2 days with normal renal function, longer if CrCl reduced — verify locally."
    },
    "rocket-af": {
      regimen: "Rivaroxaban 20 mg daily (15 mg daily if CrCl 30–49 in the pivotal AF design).",
      food: "15–20 mg doses: take with food.",
      renal: "Dose-reduce for moderate CKD per AF label; avoid below labeled floor.",
      holdHint: "Often held ~24 h before lower-bleed-risk procedures with normal renal function — verify locally."
    },
    "aristotle": {
      regimen: "Apixaban 5 mg BID; 2.5 mg BID only if ≥2 of: age ≥80, weight ≤60 kg, creatinine ≥1.5 mg/dL (AF label criteria).",
      food: "With or without food.",
      renal: "Use labeled criteria; do not under-dose ‘for safety’ without meeting reduction rules.",
      holdHint: "Common teaching hold ~24–48 h depending on bleed risk and renal function — verify locally."
    },
    "engage-af": {
      regimen: "Edoxaban 60 mg daily; 30 mg daily if dose-reduction criteria (renal / weight / potent P-gp inhibitors per label).",
      food: "With or without food.",
      renal: "Do not use above labeled CrCl ceiling in some AF labels (check region); reduce when criteria met.",
      holdHint: "Often ~24 h with normal renal function for many procedures — verify locally."
    },
    "amplify": {
      regimen: "Apixaban 10 mg BID × 7 days → 5 mg BID.",
      food: "With or without food.",
      renal: "Follow VTE label exclusions / cutoffs.",
      holdHint: "Same class heuristics as AF apixaban; higher early doses mean bleed-risk counseling in week 1."
    },
    "einstein-dvt": {
      regimen: "Rivaroxaban 15 mg BID × 21 days → 20 mg daily.",
      food: "15–20 mg with food.",
      renal: "Follow VTE label.",
      holdHint: "Verify locally; food counseling prevents under-exposure on maintenance doses."
    },
    "einstein-pe": {
      regimen: "Rivaroxaban 15 mg BID × 21 days → 20 mg daily.",
      food: "15–20 mg with food.",
      renal: "Follow VTE label; not a high-risk PE reperfusion strategy.",
      holdHint: "Verify locally."
    },
    "hokusai-vte": {
      regimen: "Parenteral heparin ≥5 days → edoxaban 60 mg daily (30 mg if reduction criteria).",
      food: "With or without food.",
      renal: "Apply reduction criteria; not a single-drug start from diagnosis.",
      holdHint: "Verify locally; remember the heparin lead-in when teaching discharge planning."
    },
    "caravaggio": {
      regimen: "Apixaban 10 mg BID × 7 days → 5 mg BID (cancer VTE acute treatment).",
      food: "With or without food.",
      renal: "Check interactions with cancer therapy; platelets and GI bleed risk.",
      holdHint: "Coordinate holds with procedures and nadirs — oncology + thrombosis co-management."
    },
    "api-cat": {
      regimen: "Extended phase: reduced-dose apixaban after initial treatment (see primary paper for exact step-down timing/dose).",
      food: "With or without food.",
      renal: "Reassess cancer status and bleed risk before step-down.",
      holdHint: "Verify locally; step-down ≠ no anticoagulation."
    },
    "augustus": {
      regimen: "Apixaban 5 mg BID (2.5 mg BID if dose-reduction criteria) + P2Y12; aspirin only briefly peri-PCI in the trial framing.",
      food: "With or without food.",
      renal: "Standard AF apixaban rules; watch dual antithrombotic bleed risk.",
      holdHint: "Periprocedural plans must cover both the DOAC and the P2Y12 — verify locally."
    },
    "cobrra": {
      regimen: "Apixaban vs rivaroxaban for acute VTE (see primary paper for regimens used).",
      food: "If rivaroxaban 15/20 mg: with food.",
      renal: "Eligible VTE patients per protocol; teach bleeding-risk shared decision.",
      holdHint: "Verify locally."
    },
    "annexa-4": {
      regimen: "Historical: andexanet alfa dosing by last FXa inhibitor dose/timing. U.S.: Andexxa not available after Dec 22, 2025 — do not order as current U.S. therapy.",
      food: "N/A (IV).",
      renal: "N/A for the agent; treat the bleed per institutional pathway.",
      holdHint: "U.S. practice for FXa-inhibitor major bleed: supportive care + 4F-PCC per local protocol. Verify formulary / country — Ondexxya/andexanet may still be available outside the U.S."
    },
    "annexa-i": {
      regimen: "Historical RCT: andexanet vs usual care (often PCC-based) for FXa-inhibitor ICH. U.S.: Andexxa withdrawn Dec 22, 2025 — teach trial for TE risk context, not as a current U.S. order set.",
      food: "N/A.",
      renal: "N/A.",
      holdHint: "U.S. ICH bundles should follow institutional anticoagulant-ICH pathways (typically supportive care ± 4F-PCC). Verify country formulary."
    },
    "re-verse-ad": {
      regimen: "Idarucizumab 5 g IV for dabigatran reversal in emergency surgery / life-threatening bleed contexts studied.",
      food: "N/A.",
      renal: "Dabigatran clearance is renal — timing of last dose and CrCl inform urgency.",
      holdHint: "After reversal, reassess when to restart anticoagulation for the original indication. Idarucizumab remains the U.S. specific option for dabigatran."
    }
  },

  agents: [
    {
      id: "dabigatran",
      name: "Dabigatran (IIa)",
      loadMaintain: "AF: 150 mg BID (110 mg BID where labeled). VTE: treat per regional label after parenteral lead-in in many jurisdictions.",
      food: "With or without food; keep in original bottle (moisture-sensitive).",
      renal: "Renally cleared — check CrCl every decision point.",
      pearls: "Specific reversal: idarucizumab (still available). P-gp interactions matter."
    },
    {
      id: "rivaroxaban",
      name: "Rivaroxaban (FXa)",
      loadMaintain: "VTE: 15 mg BID × 21 d → 20 mg daily. AF: 20 mg daily (15 mg if moderate CKD per AF label).",
      food: "15–20 mg doses with food.",
      renal: "Avoid below labeled CrCl; AF dose-reduce in moderate CKD per label.",
      pearls: "U.S. major-bleed teaching: supportive care + institutional 4F-PCC pathway — Andexxa not available in U.S. after Dec 22, 2025."
    },
    {
      id: "apixaban",
      name: "Apixaban (FXa)",
      loadMaintain: "VTE: 10 mg BID × 7 d → 5 mg BID. AF: 5 mg BID with labeled 2.5 mg BID reduction criteria.",
      food: "With or without food.",
      renal: "Use formal reduction criteria; CrCl alone is not the AF reduction rule.",
      pearls: "U.S. major-bleed teaching: supportive care + institutional 4F-PCC pathway — not andexanet (U.S. withdrawn)."
    },
    {
      id: "edoxaban",
      name: "Edoxaban (FXa)",
      loadMaintain: "VTE: heparin ≥5 d → 60 mg daily (30 mg if criteria). AF: 60/30 mg daily per criteria.",
      food: "With or without food.",
      renal: "Reduction criteria include renal function; some AF labels have an upper CrCl caution — check region.",
      pearls: "Same U.S. FXa bleed framing: supportive care + 4F-PCC per protocol; verify non-U.S. formulary if practicing abroad."
    }
  ],

  periprocedural: {
    title: "Periprocedural hold — heuristic only",
    body: "Teaching pattern: hold longer for higher bleed-risk procedures and for lower CrCl / dabigatran. Many elective low-bleed procedures resume within 1 day after a DOAC hold with normal renal function. This is not a protocol — use your institution’s checklist, anesthesia plan, and product monograph.",
    verify: "Verify hold and restart with local protocol / primary paper / pharmacy."
  },

  reversal: {
    title: "Bleed & reversal — teaching map",
    leadAlert: "U.S. regulatory status (Andexxa / andexanet alfa): Not available in the United States after Dec 22, 2025. AstraZeneca ended U.S. commercial sales and manufacture and voluntarily withdrew the BLA after FDA concluded that risks outweigh benefits, driven by thromboembolic events. FDA safety communication (URL also in sources): https://www.fda.gov/safety/medical-product-safety-information/update-safety-andexxa-astrazeneca-fda-safety-communication . Geographic nuance: withdrawal communications are U.S.-specific; Ondexxya/andexanet remained available in the UK/EU/Japan per AstraZeneca statements as of late 2025 — always verify local formulary and country labeling. Do not assume global withdrawal.",
    fdaTeSignal: "FDA Advisory Committee discussion of ANNEXA-I safety (Day 30): thrombosis 14.6% vs 6.9% usual care; thrombosis-related deaths 2.5% vs 0.9%. Use these figures when teaching why U.S. risk–benefit was judged unfavorable — cite FDA, not as a substitute for reading the primary paper.",
    intro: "Stabilize ABCs, localize the bleed, stop the anticoagulant, reverse when life-threatening or emergency surgery requires it, then plan if/when to restart for the underlying indication. In U.S. practice after Dec 2025, FXa-inhibitor major bleeding is taught as supportive care plus institutional 4F-PCC (or equivalent) pathways — not andexanet. Idarucizumab remains the specific agent for dabigatran. ANNEXA-4/ANNEXA-I remain historically important to explain why andexanet was studied and why thromboembolic risk became practice-defining. Not a substitute for your hospital’s hemorrhage pathway.",
    classes: [
      {
        id: "dabigatran-rev",
        agentClass: "Dabigatran (direct thrombin inhibitor)",
        specific: "Idarucizumab (RE-VERSE AD) — remains the U.S. specific reversal option when indicated.",
        notes: "Activated charcoal if very recent ingestion and airway safe. Dialysis can remove dabigatran in selected circumstances — specialist call. Prefer idarucizumab over nonspecific PCC when dabigatran reversal is the goal and the agent is available.",
        trialIds: ["re-verse-ad"]
      },
      {
        id: "fxa-rev",
        agentClass: "Oral FXa inhibitors (apixaban, rivaroxaban, edoxaban) — U.S. framing",
        specific: "U.S. (after Dec 22, 2025): Andexxa (andexanet alfa) is not available. Teach supportive care + 4F-PCC per institutional protocol for life-threatening FXa-inhibitor bleeding — an institutional/off-label pathway, not an FDA-labeled specific FXa antidote (Andexxa was the labeled agent; now unavailable in U.S.). Outside the U.S., andexanet (Ondexxya) may still be on formulary — verify country.",
        notes: "Historical teaching: ANNEXA-4 was the key single-cohort hemostasis experience; ANNEXA-I was the randomized ICH comparison vs usual care (often PCC-based) that clarified a hemostasis vs thrombosis trade-off. FDA AC figures used in the U.S. withdrawal discussion: thrombosis 14.6% vs 6.9%; thrombosis-related deaths 2.5% vs 0.9% at Day 30. Practice takeaway for U.S. trainees: do not write ‘give Andexxa’ — open the institutional FXa-bleed / ICH bundle (typically off-label 4F-PCC ± supportive measures; not FDA-labeled FXa-specific antidote) and plan thrombosis risk / restart timing.",
        trialIds: ["annexa-4", "annexa-i"]
      },
      {
        id: "vka-rev",
        agentClass: "Vitamin K antagonists (warfarin)",
        specific: "4F-PCC (preferred in most ICH/major bleed bundles) + vitamin K IV; FFP if PCC unavailable.",
        notes: "Goal is rapid INR correction for life-threatening bleed plus sustained vitamin K effect. Not a DOAC problem — included for completeness on mixed wards.",
        trialIds: []
      }
    ],
    restart: {
      title: "When to consider restart",
      body: "After hemostasis, ask: (1) Was the indication life-threatening without anticoagulation (mechanical valve, high-risk AF, acute VTE)? (2) Is the bleed source fixed? (3) What is the earliest safe restart window for this anatomy (CNS vs GI vs soft tissue)? Post-ICH pathways (ENRICH-AF nuance) differ from post-GI embolization. Restart is a scheduled decision with a named owner — not an automatic ‘never again.’",
      trialIds: ["enrich-af", "annexa-i", "re-verse-ad"]
    },
    caveats: [
      "U.S.: Andexxa withdrawn effective Dec 22, 2025 — not a current orderable reversal agent.",
      "Non-U.S.: confirm whether Ondexxya/andexanet remains available before teaching ‘give andexanet.’",
      "Reversal / hemostatic agents are for life-threatening bleeding or emergency procedures — not elective anxiety management.",
      "Thrombotic risk was central to the U.S. andexanet risk–benefit reassessment; restart planning belongs in the same note as any hemostatic therapy.",
      "Verify every step with the institutional bleed pathway, pharmacy, and country formulary."
    ],
    sources: [
      {
        label: "FDA safety communication — Update on the Safety of Andexxa (AstraZeneca)",
        url: "https://www.fda.gov/safety/medical-product-safety-information/update-safety-andexxa-astrazeneca-fda-safety-communication"
      }
    ]
  }
};
