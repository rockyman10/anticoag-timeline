/* Sprint B — Compare-two-trials Learn coach SoT (rate-free chrome only).
   Efficacy/safety numbers live exclusively on Reviewer-gated trial cards / compare table cells.
   Educational resource — not medical advice. */
window.ANTICOAG_LEARN_COMPARE_PAIRS = {
  B1: {
    pairId: "B1",
    trialIds: ["amplify-ext", "einstein-choice"],
    orient: "We're comparing questions, not memorizing numbers.",
    trials: [
      {
        id: "amplify-ext",
        label: "AMPLIFY-EXT",
        question: "Does extended apixaban (including reduced dose) prevent recurrent VTE vs no anticoagulation?",
        population: "Completed ~6–12 months anticoagulation for VTE; selected for extension vs placebo",
        comparator: "Placebo",
        interventionFamily: "Apixaban 2.5 or 5 mg BID"
      },
      {
        id: "einstein-choice",
        label: "EINSTEIN-CHOICE",
        question: "Does extended rivaroxaban (full or low dose) prevent recurrent VTE vs aspirin?",
        population: "Completed ~6–12 months anticoagulation; extension vs aspirin",
        comparator: "Aspirin 100 mg daily",
        interventionFamily: "Rivaroxaban 20 or 10 mg daily"
      }
    ],
    pearl: "Placebo asks “is extension worth it vs stopping?” Aspirin asks “if you’re extending with something weak, does low-dose DOAC beat that?” Neither is “reduced vs full DOAC head-to-head in high-risk patients who already need extension” (that’s RENOVE — pair B4).",
    teachBack: "In one sentence: why can’t you treat AMPLIFY-EXT and EINSTEIN-CHOICE as the same clinical question?"
  },
  B2: {
    pairId: "B2",
    trialIds: ["re-ly", "rocket-af", "aristotle"],
    orient: "We're comparing questions, not memorizing numbers.",
    trials: [
      {
        id: "re-ly",
        label: "RE-LY",
        question: "Can dabigatran replace warfarin for AF stroke prevention (dose-ranging BID)?",
        population: "AF + stroke risk (broad pivotal)",
        comparator: "Warfarin (INR 2–3)",
        designCue: "Open-label landmark; two dabigatran doses"
      },
      {
        id: "rocket-af",
        label: "ROCKET-AF",
        question: "Is once-daily rivaroxaban noninferior to warfarin in higher-risk NVAF?",
        population: "NVAF at moderate–high stroke risk",
        comparator: "Warfarin",
        designCue: "Once-daily FXa; higher-risk enrichment"
      },
      {
        id: "aristotle",
        label: "ARISTOTLE",
        question: "Is apixaban superior to warfarin for stroke/SE?",
        population: "AF + ≥1 additional stroke risk factor",
        comparator: "Warfarin",
        designCue: "Twice-daily FXa; live takeaway = stroke/SE superiority + safer major bleeding (no HRs in coach)"
      }
    ],
    pearl: "Same comparator class (warfarin) ≠ interchangeable trial — dose schedule, risk enrichment, and what “winning” meant in the protocol still differ. Prefer DOAC over VKA in eligible NVAF is the framework pearl; this micro is about not blending the three cards into one statistic.",
    teachBack: "Name one way ROCKET’s population/enrichment differs from RE-LY or ARISTOTLE — without quoting a rate."
  },
  B3: {
    pairId: "B3",
    trialIds: ["annexa-4", "annexa-i"],
    orient: "We're comparing questions, not memorizing numbers — then pivot to current U.S. care.",
    trials: [
      {
        id: "annexa-4",
        label: "ANNEXA-4",
        question: "What hemostasis / anti-FXa effect was seen with andexanet in FXa major bleeding (cohort-era teaching)?",
        population: "Acute major bleeding on FXa inhibitors",
        comparator: "Single-cohort / historical efficacy framing (live card)"
      },
      {
        id: "annexa-i",
        label: "ANNEXA-I",
        question: "In FXa-associated ICH, how did andexanet compare with usual care for hemostasis (RCT)?",
        population: "Acute ICH on FXa inhibitors",
        comparator: "Usual care"
      }
    ],
    qualTradeoff: "Live takeaway language (qualitative only): hemostasis gain at a thrombotic cost — not a reason to treat Andexxa as default U.S. care.",
    usPivot: "After Dec 22, 2025 U.S. withdrawal — teach supportive care + institutional/off-label 4F-PCC pathways; do not leave learners on “give Andexxa.” Andexxa is not the U.S. default.",
    alsoOpen: [
      { kind: "nuance", id: "annexa-historical-vs-us-4fpcc", label: "Nuance: ANNEXA-era vs U.S. 4F-PCC" },
      { kind: "framework", id: "doac-major-bleed-us", label: "Framework: DOAC major bleed (U.S.)" },
      { kind: "case", id: "fxa-ich-post-andexxa", label: "Case: FXa ICH post-Andexxa" }
    ],
    pearl: "Historical trials answer “what did andexanet do in studies?” Current U.S. clinic question is “what do we do now that Andexxa isn’t on the shelf?”",
    teachBack: "One sentence: what changes in your teaching after U.S. withdrawal — without inventing a new rate?"
  },
  B4: {
    pairId: "B4",
    trialIds: ["renove", "api-cat"],
    orient: "We're comparing questions, not memorizing numbers.",
    trials: [
      {
        id: "renove",
        label: "RENOVE",
        question: "In patients who already need extended anticoagulation after VTE, is reduced-dose apixaban/rivaroxaban comparable to continuing full-dose?",
        population: "PE/proximal DVT; 6–24 months full-dose completed; high recurrence-risk / indication to extend (non-cancer primary teaching)",
        comparator: "Full-dose DOAC (api 5 BID or riva 20 daily)",
        interventionFamily: "Reduced api 2.5 BID or riva 10 daily"
      },
      {
        id: "api-cat",
        label: "API-CAT",
        question: "After ≥6 months for cancer-associated VTE, is reduced-dose apixaban enough vs continuing 5 mg BID?",
        population: "Active cancer + VTE after ≥6 months anticoagulation",
        comparator: "Full-dose apixaban 5 mg BID",
        interventionFamily: "Apixaban 2.5 mg BID × 12 months"
      }
    ],
    ratesNote: "RENOVE published rates (Couturaud et al., Lancet 2025) are on the live card — not repeated in this coach. API-CAT gated peek is on the live card — not forced into this coach.",
    pearl: "Same “2.5 vs 5” apixaban rhyme ≠ same disease. Cancer extend ≠ non-cancer high-risk extend.",
    teachBack: "Which population belongs to RENOVE vs API-CAT — one phrase each?"
  }
};
