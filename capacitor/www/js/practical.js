/* Dosing / logistics highlights + bleed & reversal teaching page
   Teaching aid only — verify with local protocol / product labeling / primary paper. */
window.ANTICOAG_PRACTICAL = {
  disclaimer: "Logistics below are teaching highlights for common labeled patterns. Always verify dose, renal cutoffs, hold times, and reversal with institutional protocol, pharmacy, formulary, and current product labeling for your country.",

  dosingByTrial: {
    "re-ly": {
      regimen: "RE-LY used dabigatran 150 mg twice daily (110 mg twice daily in some regions / selected patients per label).",
      food: "With or without food.",
      renal: "Avoid / adjust below labeled CrCl thresholds; check local label (often caution or avoid if CrCl <30 mL/min).",
      holdHint: "Typical teachable hold before higher-bleed-risk procedures is on the order of 1–2 days with normal renal function, longer if CrCl reduced — verify locally."
    },
    "rocket-af": {
      regimen: "ROCKET-AF used rivaroxaban 20 mg daily (15 mg daily if CrCl 30–49 in that AF design).",
      food: "15–20 mg doses: take with food.",
      renal: "Dose-reduce for moderate CKD per AF label; avoid below labeled floor.",
      holdHint: "Often held ~24 h before lower-bleed-risk procedures with normal renal function — verify locally."
    },
    "aristotle": {
      regimen: "ARISTOTLE used apixaban 5 mg twice daily; 2.5 mg twice daily only if at least two of age ≥80, weight ≤60 kg, and creatinine ≥1.5 mg/dL (AF label criteria).",
      food: "With or without food.",
      renal: "Use labeled criteria; do not under-dose ‘for safety’ without meeting reduction rules.",
      holdHint: "Common teaching hold ~24–48 h depending on bleed risk and renal function — verify locally."
    },
    "engage-af": {
      regimen: "ENGAGE AF–TIMI 48 used edoxaban 60 mg daily, or 30 mg daily when dose-reduction criteria were met (renal / weight / potent P-gp inhibitors per label).",
      food: "With or without food.",
      renal: "Do not use above labeled CrCl ceiling in some AF labels (check region); reduce when criteria met.",
      holdHint: "Often ~24 h with normal renal function for many procedures — verify locally."
    },
    "amplify": {
      regimen: "AMPLIFY used apixaban 10 mg twice daily for 7 days, then 5 mg twice daily.",
      food: "With or without food.",
      renal: "Follow VTE label exclusions / cutoffs.",
      holdHint: "Same class heuristics as AF apixaban; higher early doses mean bleed-risk counseling in week 1."
    },
    "einstein-dvt": {
      regimen: "EINSTEIN-DVT used rivaroxaban 15 mg twice daily for 21 days, then 20 mg daily.",
      food: "15–20 mg with food.",
      renal: "Follow VTE label.",
      holdHint: "Verify locally; food counseling prevents under-exposure on maintenance doses."
    },
    "einstein-pe": {
      regimen: "EINSTEIN-PE used rivaroxaban 15 mg twice daily for 21 days, then 20 mg daily.",
      food: "15–20 mg with food.",
      renal: "Follow VTE label; not a high-risk PE reperfusion strategy.",
      holdHint: "Verify locally."
    },
    "hokusai-vte": {
      regimen: "Hokusai-VTE used parenteral heparin for at least 5 days, then edoxaban 60 mg daily (30 mg daily if reduction criteria).",
      food: "With or without food.",
      renal: "Apply reduction criteria; not a single-drug start from diagnosis.",
      holdHint: "Verify locally; remember the heparin lead-in when teaching discharge planning."
    },
    "caravaggio": {
      regimen: "Caravaggio used apixaban 10 mg twice daily for 7 days, then 5 mg twice daily, for acute cancer-associated VTE.",
      food: "With or without food.",
      renal: "Check interactions with cancer therapy; platelets and GI bleed risk.",
      holdHint: "Coordinate holds with procedures and nadirs — oncology + thrombosis co-management."
    },
    "api-cat": {
      regimen: "After at least 6 months of anticoagulation, API-CAT assigned apixaban 2.5 mg twice daily for 12 months (reduced-dose arm) or 5 mg twice daily for 12 months (full-dose arm). The trial did not add a further timed dose change during those 12 months.",
      food: "With or without food.",
      renal: "API-CAT enrolled people who had already completed at least 6 months of anticoagulation. Cancer status and bleeding risk still shape whether extension was the question.",
      holdHint: "The reduced-dose arm was still twice-daily apixaban for 12 months, not a stop. Verify locally."
    },
    "augustus": {
      regimen: "AUGUSTUS used apixaban 5 mg twice daily (2.5 mg twice daily if dose-reduction criteria) plus a P2Y12 inhibitor; aspirin was limited to a brief peri-PCI window in the trial.",
      food: "With or without food.",
      renal: "Standard AF apixaban rules; watch dual antithrombotic bleed risk.",
      holdHint: "Periprocedural plans must cover both the DOAC and the P2Y12 — verify locally."
    },
    "cobrra": {
      regimen: "COBRRA used apixaban 10 mg twice daily for 7 days, then 5 mg twice daily, compared with rivaroxaban 15 mg twice daily for 21 days, then 20 mg daily, for 3 months.",
      food: "If rivaroxaban 15/20 mg: with food.",
      renal: "Eligible VTE patients per protocol; teach bleeding-risk shared decision.",
      holdHint: "Verify locally."
    },
    "annexa-4": {
      regimen: "Historical: ANNEXA-4 dosed andexanet alfa by last FXa inhibitor dose and timing. U.S.: Andexxa is not available after Dec 22, 2025, so it is not current U.S. therapy.",
      food: "N/A (IV).",
      renal: "N/A for the agent; treat the bleed per institutional pathway.",
      holdHint: "U.S. practice for FXa-inhibitor major bleed: supportive care + 4F-PCC per local protocol. Verify formulary / country — Ondexxya/andexanet may still be available outside the U.S."
    },
    "annexa-i": {
      regimen: "Historical RCT: ANNEXA-I compared andexanet with usual care (often PCC-based) for FXa-inhibitor ICH. U.S.: Andexxa was withdrawn Dec 22, 2025 — the trial is TE-risk context, not current U.S. therapy.",
      food: "N/A.",
      renal: "N/A.",
      holdHint: "U.S. ICH bundles should follow institutional anticoagulant-ICH pathways (typically supportive care ± 4F-PCC). Verify country formulary."
    },
    "re-verse-ad": {
      regimen: "RE-VERSE AD studied idarucizumab 5 g IV for dabigatran reversal in emergency surgery or life-threatening bleeding.",
      food: "N/A.",
      renal: "Dabigatran clearance is renal — timing of last dose and CrCl inform urgency.",
      holdHint: "After reversal, reassess when to restart anticoagulation for the original indication. Idarucizumab remains the U.S. specific option for dabigatran."
    }
  },

  agents: [
    {
      id: "dabigatran",
      name: "Dabigatran (IIa)",
      loadMaintain: "AF (RE-LY): the trial used 150 mg twice daily (110 mg twice daily where labeled). VTE: many labels describe a parenteral lead-in before dabigatran.",
      food: "With or without food; keep in original bottle (moisture-sensitive).",
      renal: "Renally cleared — check CrCl every decision point.",
      pearls: "Specific reversal: idarucizumab (still available). P-gp interactions matter."
    },
    {
      id: "rivaroxaban",
      name: "Rivaroxaban (FXa)",
      loadMaintain: "VTE (EINSTEIN-DVT and EINSTEIN-PE): the trials used 15 mg twice daily for 21 days, then 20 mg daily. AF (ROCKET-AF): the trial used 20 mg daily (15 mg daily if CrCl 30–49 in that design).",
      food: "15–20 mg doses with food.",
      renal: "Avoid below labeled CrCl; AF dose-reduce in moderate CKD per label.",
      pearls: "U.S. major-bleed teaching: supportive care + institutional 4F-PCC pathway — Andexxa not available in U.S. after Dec 22, 2025."
    },
    {
      id: "apixaban",
      name: "Apixaban (FXa)",
      loadMaintain: "VTE (AMPLIFY): the trial used 10 mg twice daily for 7 days, then 5 mg twice daily. AF (ARISTOTLE): the trial used 5 mg twice daily, with 2.5 mg twice daily only when labeled reduction criteria were met.",
      food: "With or without food.",
      renal: "Use formal reduction criteria; CrCl alone is not the AF reduction rule.",
      pearls: "U.S. major-bleed teaching: supportive care + institutional 4F-PCC pathway — not andexanet (U.S. withdrawn)."
    },
    {
      id: "edoxaban",
      name: "Edoxaban (FXa)",
      loadMaintain: "VTE (Hokusai-VTE): the trial used heparin for at least 5 days, then edoxaban 60 mg daily (30 mg daily if reduction criteria). AF (ENGAGE): the trial used 60 mg or 30 mg daily when criteria were met.",
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
    intro: "Stabilize ABCs, localize the bleed, stop the anticoagulant, reverse when life-threatening or emergency surgery requires it, then plan if/when to restart for the underlying indication. In U.S. practice after Dec 2025, FXa-inhibitor major bleeding is taught as supportive care plus institutional 4F-PCC (or equivalent) pathways — not andexanet. Idarucizumab remains the specific agent for dabigatran. ANNEXA-4/ANNEXA-I remain historically important to explain why andexanet was studied and why thromboembolic risk became practice-defining. Parenteral classes (unfractionated heparin, LMWH, fondaparinux) are the same kind of teaching map as the cancer-VTE and bridging frameworks: name the class and the labeled limit. They are not a protamine protocol. Not a substitute for your hospital’s hemorrhage pathway.",
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
        specific: "Warfarin ICH and major-bleed bundles describe 4-factor PCC plus IV vitamin K. Fresh frozen plasma is the fallback when PCC is unavailable.",
        notes: "Goal is rapid INR correction for life-threatening bleed plus sustained vitamin K effect. Not a DOAC problem — included for completeness on mixed wards.",
        trialIds: []
      },
      {
        id: "ufh-rev",
        agentClass: "Unfractionated heparin (UFH)",
        specific: "Protamine sulfate is the labeled neutralization class for heparin. The heparin sodium label describes slow infusion of protamine when bleeding requires reversal of heparinization.",
        notes: "Teaching limit, not a dose chart. Heparin sodium injection labeling (FDA 017029s178): each mg of protamine sulfate neutralizes approximately 100 USP heparin units; the amount required decreases as heparin is metabolized; no more than 50 mg should be administered, very slowly, in any 10-minute period. Fatal reactions resembling anaphylaxis are described, so resuscitation has to be available. Open the institutional heparin-reversal chart. This page does not calculate a protamine dose.",
        trialIds: []
      },
      {
        id: "lmwh-rev",
        agentClass: "Low-molecular-weight heparin (LMWH)",
        specific: "Protamine only partly reverses LMWH. There is no complete specific antidote.",
        notes: "Lovenox overdosage text (FDA 020164s129): anti-Factor Xa activity is never completely neutralized (maximum about 60%). The milligram schedule in that section stays on the product label and the institutional chart. It is not an order on this page. Other LMWH products do not automatically share that sentence. Protamine can cause hypotension and anaphylactoid reactions.",
        trialIds: []
      },
      {
        id: "fondaparinux-rev",
        agentClass: "Fondaparinux",
        specific: "No specific antidote. Arixtra overdosage states there is no known antidote.",
        notes: "Protamine is the heparin and partial-LMWH class. It is not a labeled fondaparinux antidote. Teaching is to stop fondaparinux and follow the institutional bleed pathway. This page does not recommend an off-label clotting-factor product as a protocol.",
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
      "Verify every step with the institutional bleed pathway, pharmacy, and country formulary.",
      "UFH, LMWH, and fondaparinux text is education. Protamine amounts stay on the product label and the institutional chart."
    ],
    sources: [
      {
        label: "FDA safety communication — Update on the Safety of Andexxa (AstraZeneca)",
        url: "https://www.fda.gov/safety/medical-product-safety-information/update-safety-andexxa-astrazeneca-fda-safety-communication"
      },
      {
        label: "Heparin sodium injection — neutralization of heparin effect (FDA 017029s178)",
        url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/017029s178lbl.pdf"
      },
      {
        label: "Lovenox — overdosage and protamine limit (FDA 020164s129)",
        url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2021/020164s129lbl.pdf"
      },
      {
        label: "Arixtra — no known antidote (DailyMed setid ec235119-cb58-4939-942c-11d3923d289f)",
        url: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ec235119-cb58-4939-942c-11d3923d289f"
      }
    ]
  }
};
