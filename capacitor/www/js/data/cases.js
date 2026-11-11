/* Teaching case vignettes */
window.ANTICOAG_CASES = [
  {
    id: "af-renal-bleed",
    title: "AF with CKD and prior GI bleed",
    stem: "78-year-old with NVAF, CHA₂DS₂-VASc 5, CrCl ~38 mL/min, remote melena on aspirin. No mechanical valve. You are starting anticoagulation.",
    keyQuestion: "Reasoning step: which DOAC framework and dosing checks belong in the discussion?",
    trialIds: ["aristotle", "rocket-af", "engage-af", "re-ly", "averroes"],
    frameworkIds: ["af-stroke-prevention"],
    modelReasoning: "Stroke risk clearly favors anticoagulation over aspirin alone (AVERROES teaching). Prefer a DOAC with labeled dosing at this CrCl; apply dose-reduction criteria only when met (do not ‘under-dose for fear’). Counsel on GI bleed risk differences across agents and gastroprotection/PPI when indicated by history. Recheck CrCl after initiation and with intercurrent illness.",
    teachingPoint: "CKD shifts dose and agent choice—but fear of bleeding is not an indication for aspirin monotherapy when OAC is warranted. Verify renal cutoffs on the label you actually use.",
    links: [
      { kind: "framework", id: "af-stroke-prevention", label: "Framework: AF stroke prevention" },
      { kind: "tx-pathway", id: "af-stroke", label: "TX: AF stroke prevention" },
      { kind: "trial", id: "aristotle", label: "Trial: ARISTOTLE" },
      { kind: "trial", id: "rocket-af", label: "Trial: ROCKET-AF" },
      { kind: "trial", id: "engage-af", label: "Trial: ENGAGE AF" },
      { kind: "trial", id: "re-ly", label: "Trial: RE-LY" },
      { kind: "trial", id: "averroes", label: "Trial: AVERROES" }
    ]
  },
  {
    id: "af-hemodialysis-oac",
    title: "AF on hemodialysis — apixaban, warfarin, or neither?",
    stem: "Fictional teaching patient: a man in his late seventies with atrial fibrillation, hypertension, and diabetes, on in-center hemodialysis three times a week for kidney failure. He had a GI bleed on aspirin a few years ago; the aspirin was stopped and he is not on it now. He is not on an anticoagulant. His nephrologist asks the anticoagulation clinic whether to start one, and his daughter has read that apixaban is \"proven safer than warfarin in dialysis.\"",
    keyQuestion: "What can the dialysis RCTs and guidelines actually support here, and how should the decision be framed?",
    trialIds: ["axadia-afnet-8", "renal-af"],
    frameworkIds: ["dialysis-af"],
    modelReasoning: "Start with what is known. Two small randomized trials compared apixaban with a VKA in hemodialysis, and both were underpowered. RENAL-AF stopped early (154 of about 760 planned); major or CRNM bleeding at 1 year was 32% with apixaban vs 26% with warfarin (HR 1.20; 95% CI 0.63–2.30), and the authors said there was inadequate power to draw a conclusion. AXADIA-AFNET 8 (97 patients) used a primary safety composite that includes death from any cause (45.8% vs 51.0%; HR 0.93; 95% CI 0.53–1.65), and noninferiority was not shown. So the daughter's claim is not supported: neither trial shows apixaban is safer, or that the two drugs are equivalent. Whether any anticoagulant beats none in dialysis is unanswered by randomized trials; DANWARD and SACK are still recruiting, and SAFE-D was only a feasibility pilot. ACC/AHA 2023 says warfarin or an evidence-based dose of apixaban \"might be reasonable\" (Class 2b, LOE B-NR) and encourages shared decision-making that weighs bleeding and thromboembolism risk, pending RCTs. KDIGO 2024's DOAC-over-VKA recommendation covers CKD G1–G4, not dialysis, and ESC 2024 gives no graded dialysis recommendation. For this patient, that conversation with him, his family, and nephrology would cover his stroke risk, his prior GI bleed (bleeding outnumbered stroke in both trials), his values, and the monitoring burden of a VKA, whose time in therapeutic range was low in these trials (44% in RENAL-AF). If anticoagulation is chosen, the agent and dose come from the product label and local protocol, not from this case.",
    teachingPoint: "Among the three guidelines checked here (ACC/AHA 2023, ESC 2024, KDIGO 2024), the only graded dialysis wording is ACC/AHA's \"might be reasonable\" (Class 2b), and two small trials that found no significant difference do not show that one drug is safer. ACC/AHA 2023 encourages shared decision-making that weighs bleeding and thromboembolism risk, pending RCTs; trial doses stay trial protocol.",
    links: [
      { kind: "framework", id: "dialysis-af", label: "Framework: AF on dialysis" },
      { kind: "tx-pathway", id: "af-stroke", label: "TX: AF stroke prevention" },
      { kind: "trial", id: "axadia-afnet-8", label: "Trial: AXADIA-AFNET 8" },
      { kind: "trial", id: "renal-af", label: "Trial: RENAL-AF" },
      { kind: "framework", id: "ttr-vka-quality", label: "Framework: TTR / VKA quality" }
    ]
  },
  {
    id: "cancer-stepdown",
    title: "Cancer VTE — acute DOAC then API-CAT step-down?",
    stem: "62-year-old with metastatic breast cancer, PE 7 months ago, completed apixaban 5 mg BID, now with stable disease on therapy, no recent bleeds, platelets OK. Oncology asks about ‘reducing the dose.’",
    keyQuestion: "When is reduced-dose extended therapy reasonable, and when do you keep full dose or LMWH?",
    trialIds: ["caravaggio", "hokusai-vte-cancer", "api-cat", "select-d"],
    frameworkIds: ["cancer-vte"],
    modelReasoning: "Acute cancer VTE trials support DOAC options for many solid tumors; GI luminal tumors need extra caution. After adequate acute therapy, API-CAT informs reduced-dose apixaban for extended prevention in selected patients who still need anticoagulation. Reassess cancer activity, bleeding, interactions (including oral anticancer agents), and patient preference.",
    teachingPoint: "The reduced dose in API-CAT was an extended-phase assignment after at least 6 months of anticoagulation — not a week-2 shortcut. Reassess cancer activity and bleeding risk when the plan is renewed.",
    links: [
      { kind: "framework", id: "cancer-vte", label: "Framework: Cancer VTE" },
      { kind: "tx-pathway", id: "cancer-vte", label: "TX: Cancer VTE" },
      { kind: "pathway", id: "cancer-vte", label: "Playlist: Cancer-associated VTE" },
      { kind: "trial", id: "api-cat", label: "Trial: API-CAT" },
      { kind: "trial", id: "caravaggio", label: "Trial: Caravaggio" },
      { kind: "trial", id: "hokusai-vte-cancer", label: "Trial: Hokusai VTE Cancer" },
      { kind: "trial", id: "select-d", label: "Trial: SELECT-D" }
    ]
  },
  {
    id: "af-pci-week2",
    title: "AF + recent PCI — still on triple therapy?",
    stem: "71-year-old with AF on apixaban, DES to the proximal LAD 10 days ago for NSTEMI, currently on apixaban + clopidogrel + aspirin. Habitual nosebleeds; hemoglobin drifting down.",
    keyQuestion: "What does the dual-pathway evidence say about aspirin duration here?",
    trialIds: ["augustus", "pioneer-af-pci", "re-dual-pci", "woest", "optima-af"],
    frameworkIds: ["af-pci-dual-pathway"],
    modelReasoning: "AUGUSTUS supports apixaban over VKA and placebo over continued aspirin beyond the early post-PCI window on a P2Y12 background for many patients. Confirm stent details and ischemic risk; if average risk, drop aspirin and keep DOAC + P2Y12. Address modifiable bleed drivers (BP, NSAIDs, alcohol, PPI if appropriate).",
    teachingPoint: "Triple therapy is a peri-PCI bridge. Bleeding is the cue to execute the AUGUSTUS play, not to stop the anticoagulant.",
    links: [
      { kind: "tx-pathway", id: "af-pci", label: "TX: AF + PCI" },
      { kind: "nuance", id: "dual-pathway-duration", label: "Nuance: Dual-pathway duration" }
    ]
  },
  {
    id: "intermediate-pe-pert",
    title: "Intermediate-risk PE — call for CDT?",
    stem: "54-year-old, HR 108, BP 118/74, RV strain on CT and echo, elevated troponin, lactates normal. No shock. PERT message: ‘HI-PEITHO candidate?’",
    keyQuestion: "Is anticoagulation alone enough, or does enrichment justify CDT discussion?",
    trialIds: ["hi-peitho", "einstein-pe"],
    frameworkIds: ["intermediate-pe-cdt"],
    modelReasoning: "Start anticoagulation immediately if no contraindication. Map the patient against HI-PEITHO-style enrichment (RV dysfunction + biomarker/clinical severity) and local CDT expertise. Without enrichment or capability, do not escalate to CDT by default. Escalate if deterioration toward high-risk PE.",
    teachingPoint: "Say the enrichment criteria out loud on rounds. Intermediate-risk is a spectrum; CDT is not the middle of that spectrum by default.",
    links: [
      { kind: "pathway", id: "intermediate-pe", label: "TX: Intermediate PE" },
      { kind: "nuance", id: "hi-peitho-enrichment", label: "Nuance: HI-PEITHO enrichment" }
    ]
  },
  {
    id: "frail-vka-switch",
    title: "Frail elder on stable warfarin — switch to DOAC?",
    stem: "87-year-old, frail, NVAF, on warfarin for 8 years with TTR ~70%, no stroke/bleed in 3 years. Daughter read that ‘everyone should be on a DOAC.’",
    keyQuestion: "Does FRAIL-AF change your counseling?",
    trialIds: ["frail-af", "eldercare-af"],
    frameworkIds: ["frail-elderly-vka-doac"],
    modelReasoning: "FRAIL-AF argues against routine switching from stable VKA to DOAC in frail older adults because of excess bleeding without clear benefit in that trial’s design. ELDERCARE-AF addresses a different question (carefully selected initiation of low-dose edoxaban). Counsel the daughter on stability, monitoring burden, and when a switch would make sense (labile INR, access, preference).",
    teachingPoint: "Stable frail VKA success is a feature, not a failure to modernize. Switching is a new risk decision—not a loyalty program upgrade.",
    links: [
      { kind: "framework", id: "ttr-vka-quality", label: "Framework: What ‘acceptable TTR’ means — without a fake clinic %" }
    ]
  },
  {
    id: "post-ich-af",
    title: "AF six weeks after lobar ICH",
    stem: "69-year-old with AF (CHA₂DS₂-VASc 4) survived lobar ICH 6 weeks ago; MRI suggests possible cerebral amyloid angiopathy. Neurology asks about restart vs LAAO referral.",
    keyQuestion: "How do ENRICH-AF and pending ASPIRE frame the options?",
    trialIds: ["enrich-af", "aspire", "prestige-af", "option"],
    frameworkIds: ["post-ich-anticoagulation", "laao-vs-oac"],
    modelReasoning: "Lobar ICH with possible CAA raises recurrence risk; ENRICH-AF cautions against assuming net benefit from routine restart. Still weigh catastrophic cardioembolic risk. Multidisciplinary plan: delay vs carefully timed restart vs LAAO evaluation. When the question is OAC versus none, the case treats aspirin as no substitute for that decision.",
    teachingPoint: "Post-ICH AF is equipoise territory—document the why for restart, delay, or LAAO. Pending trials may refine subtypes; today’s decision still needs a named owner.",
    links: [
      { kind: "pathway", id: "post-ich", label: "TX: Post-ICH" },
      { kind: "nuance", id: "enrich-vs-aspire", label: "Nuance: ENRICH vs ASPIRE" }
    ]
  },
  {
    id: "laao-candidate",
    title: "Recurrent bleeds on DOAC — LAAO consult?",
    stem: "76-year-old with NVAF, prior embolic stroke, on apixaban, now with recurrent hospitalization for GI bleeding despite PPI and negative reversible causes. Continues to interrupt anticoagulation.",
    keyQuestion: "Is percutaneous LAAO a reasonable alternative to indefinite OAC?",
    trialIds: ["protect-af", "prevail", "prague-17", "champion-af", "option"],
    frameworkIds: ["laao-vs-oac"],
    modelReasoning: "Guideline-supported OAC remains first-line when tolerated. Recurrent major bleeding with mandatory interruptions is a classic shared-decision LAAO scenario (PROTECT/PREVAIL-era framing, modern device iterations). Consent for procedural risk, DRT, and possible post-implant antithrombotic therapy. Optimize GI evaluation in parallel.",
    teachingPoint: "LAAO is for OAC failure/intolerance narratives—not for patients who simply dislike monitoring. The consult should include life after the implant, not only the implant day.",
    links: [
      { kind: "framework", id: "laao-vs-oac", label: "Framework: LAAO versus anticoagulation" },
      { kind: "pathway", id: "laao", label: "Playlist: LAAO vs OAC" },
      { kind: "trial", id: "protect-af", label: "Trial: PROTECT-AF" },
      { kind: "trial", id: "prevail", label: "Trial: PREVAIL" },
      { kind: "trial", id: "prague-17", label: "Trial: PRAGUE-17" },
      { kind: "trial", id: "champion-af", label: "Trial: CHAMPION-AF" },
      { kind: "trial", id: "option", label: "Trial: OPTION" }
    ]
  },
  {
    id: "vte-doac-choice",
    title: "Acute DVT — apixaban or rivaroxaban?",
    stem: "45-year-old with unprovoked proximal DVT, BMI 27, normal renal function, remote menorrhagia, prefers a pill. No cancer, no APS features.",
    keyQuestion: "How do AMPLIFY, EINSTEIN, and COBRRA help you choose?",
    trialIds: ["amplify", "einstein-dvt", "cobrra", "hokusai-vte"],
    frameworkIds: ["acute-vte-doac"],
    modelReasoning: "Either labeled DOAC is guideline-congruent for eligible acute VTE. Bleeding-sensitive patients and COBRRA-style teaching may tip toward apixaban when both are accessible; rivaroxaban remains appropriate with food counseling for the 15/20 mg doses. Edoxaban if a heparin lead-in workflow is preferred. Exclude APS/pregnancy red flags.",
    teachingPoint: "When efficacy is comparable in class, logistics and bleeding phenotype decide. Teach the load→maintenance calendar out loud before discharge.",
    links: [
      { kind: "framework", id: "acute-vte-doac", label: "Framework: Acute VTE" },
      { kind: "tx-pathway", id: "acute-vte", label: "TX: Acute VTE" },
      { kind: "trial", id: "amplify", label: "Trial: AMPLIFY" },
      { kind: "trial", id: "einstein-dvt", label: "Trial: EINSTEIN-DVT" },
      { kind: "trial", id: "cobrra", label: "Trial: COBRRA" },
      { kind: "trial", id: "hokusai-vte", label: "Trial: Hokusai-VTE" }
    ]
  },
  {
    id: "fxa-ich-post-andexxa",
    title: "ICH on apixaban — U.S. reversal after Andexxa withdrawal",
    stem: "72-year-old with NVAF on apixaban 5 mg BID presents with acute lobar ICH, GCS declining. Last apixaban dose ~6 hours ago. BP being controlled. Neurosurgery and pharmacy are on the line. A trainee asks whether to ‘give Andexxa.’",
    keyQuestion: "Reasoning step: which reversal branch does the U.S. formulary support after Dec 22, 2025, and which agent sits outside that branch?",
    trialIds: ["annexa-i", "annexa-4"],
    frameworkIds: ["doac-major-bleed-us", "post-ich-anticoagulation"],
    modelReasoning: "ABCs and ICH bundle first; stop apixaban. This is an FXa inhibitor, not dabigatran — idarucizumab does not apply. Andexxa is not available in the U.S. after Dec 22, 2025 (voluntary BLA withdrawal after FDA concluded risks outweighed benefits; thromboembolic signal from the andexanet development program, including ANNEXA-I teaching context). Open the institutional anticoagulant-ICH / FXa-bleed pathway: supportive care and institutional/off-label 4F-PCC per protocol — not an FDA-labeled specific FXa antidote now that Andexxa is withdrawn. Do not invent PCC dose at the bedside; use the hospital order set. ANNEXA-4/I inform history and thrombosis trade-off teaching, not a current U.S. Andexxa order. After hemostasis, plan restart vs delay vs LAAO with a named multidisciplinary owner (post-ICH framework).",
    teachingPoint: "Agent first, geography second. U.S. FXa major bleed after Dec 22, 2025 is supportive care + institutional 4F-PCC — ‘give Andexxa’ is the wrong order set.",
    links: [
      { kind: "pathway", id: "doac-bleed-us", label: "TX: Major bleed on DOAC (U.S.)" },
      { kind: "nuance", id: "annexa-historical-vs-us-4fpcc", label: "Nuance: ANNEXA vs U.S. 4F-PCC" },
      { kind: "page", id: "reversal", label: "Bleed & reversal page" }
    ]
  },
  {
    id: "mechanical-avr-doac-request",
    title: "Mechanical AVR — patient asks to switch to a DOAC",
    stem: "68-year-old with a bileaflet mechanical aortic valve (implanted 2019), no AF, on warfarin with recent INRs mostly in range. He read that ‘everyone is on Eliquis now’ and asks to switch so he can stop clinic fingersticks.",
    keyQuestion: "Is a DOAC switch appropriate, and what INR teaching frame do you use if he stays on warfarin?",
    trialIds: ["re-align", "proact", "proact-xa", "invictus", "galileo"],
    frameworkIds: ["mechanical-valve-vka"],
    modelReasoning: "This is a mechanical prosthesis — DOACs are contraindicated. Landmark DOAC stroke/VTE trials excluded mechanical valves; counsel that convenience does not override valve thrombogenicity. Read RE-ALIGN, PROACT, and PROACT Xa on this site before discussing a DOAC or a lower INR. Keep dose-adjusted warfarin. For many contemporary bileaflet aortic valves without extra thromboembolic risk factors, society tables commonly use INR 2.0–3.0 — verify the implanted model against current ACC/AHA or ESC tables before changing targets. Discuss aspirin add-on only if guidance and bleed risk support it. Offer adherence supports (home meter if appropriate, clinic schedule, TTR stewardship) rather than an off-label DOAC. GALILEO is a TAVR (bioprosthetic pathway) contrast, not permission to DOAC a mechanical valve; INVICTUS reinforces VKA thinking in rheumatic MS — related niche, different anatomy.",
    teachingPoint: "Mechanical valve anticoagulation is a VKA conversation. A DOAC switch for convenience is a hard no — then teach the INR target from the valve’s society table, not from NVAF habit.",
    links: [
      { kind: "pathway", id: "mechanical-valve", label: "TX: Mechanical heart valve" }
    ]
  },
  {
    id: "aps-triple-positive-doac",
    title: "Triple-positive APS — DOAC request after DVT",
    stem: "45-year-old with unprovoked proximal DVT 4 months ago, now on apixaban. Repeat testing confirms persistent lupus anticoagulant, IgG anticardiolipin, and anti-β2-glycoprotein I (triple-positive). Hematology notes APS. Patient likes twice-daily pills and asks to stay on the DOAC ‘like everyone else with a clot.’",
    keyQuestion: "Does antibody tier change the long-term agent — and what do you counsel?",
    trialIds: ["amplify"],
    frameworkIds: ["aps-triple-positive-vka"],
    modelReasoning: "Reclassify: this is high-risk / triple-positive APS, not garden-variety unprovoked VTE. Prefer transition to dose-adjusted warfarin with a typical INR 2–3 teaching frame unless the specialty clinic documents a different target. Counsel that standard DOAC VTE evidence does not replace high-risk APS guidance — convenience is not the decider. Arrange reliable INR follow-up and contraception counseling if relevant. Document antibody profile, target INR, and specialty co-management. If serology had been single-positive or uncertain, specialty input might still entertain a DOAC with an explicit rationale — that is not this stem.",
    teachingPoint: "Triple-positive APS reframes a ‘successful DOAC VTE’ into a VKA conversation. Risk-tier antibodies before you renew the DOAC.",
    links: [
      { kind: "pathway", id: "aps", label: "TX: APS" }
    ]
  },
  {
    id: "compass-vs-af-dose-trap",
    title: "Stable PAD — offered ‘low-dose Eliquis’ by mistake?",
    stem: "70-year-old with stable bilateral PAD and prior MI, sinus rhythm, no VTE, CrCl normal. Cardiology suggests ‘vascular-dose anticoagulation plus aspirin’ after shared decision. A covering resident writes apixaban 2.5 mg BID + aspirin because ‘that’s the low dose we use in AF.’",
    keyQuestion: "What regimen matches COMPASS/VOYAGER teaching — and what trap did the resident fall into?",
    trialIds: ["compass", "voyager-pad"],
    frameworkIds: ["compass-vascular-dose"],
    modelReasoning: "This stem is stable PAD + prior MI — a COMPASS-style chronic atherosclerotic question, not recent lower-extremity revascularization. Lead with COMPASS: eligible patients may use rivaroxaban 2.5 mg BID plus low-dose aspirin when net benefit favors combination. VOYAGER PAD is the post-revascularization sibling that uses the same vascular dose — it does not make this stable stem VOYAGER-eligible. The covering resident’s apixaban 2.5 mg BID is the wrong drug and an AF dose-reduction strength, not vascular-dose therapy, and not full-dose AF/VTE DOAC care. Confirm no AF or other full-dose OAC indication, acceptable bleed risk, and BP control. Counsel bleeding (especially GI) and that if AF appears later, move to the AF pathway. Correct the order to labeled rivaroxaban 2.5 mg BID + low-dose aspirin per protocol — do not invent cross-DOAC ‘low doses.’",
    teachingPoint: "Vascular-dose ≠ AF reduced-dose. COMPASS/VOYAGER teaching is rivaroxaban 2.5 mg BID + aspirin — apixaban 2.5 mg is a different drug and a different story.",
    links: [
      { kind: "pathway", id: "compass-vascular", label: "TX: COMPASS vascular" }
    ]
  },
  {
    id: "tavi-sinus-routine-doac",
    title: "Post-TAVI, sinus rhythm — DOAC proposed for HALT prevention",
    stem: "76-year-old, successful TAVI 5 days ago, sinus rhythm, no prior AF, no recent coronary stent, CHA₂DS₂-VASc driven only by age/sex/hypertension without an AF diagnosis. A covering clinician proposes starting a DOAC ‘to prevent leaflet thrombosis,’ citing a recent imaging-focused TAVI anticoagulation study, and keeping aspirin.",
    keyQuestion: "Is routine DOAC after TAVI without a separate OAC indication appropriate — and how do you answer the HALT rationale?",
    trialIds: ["galileo", "atlantis", "acasa-tavi", "notion-4", "popular-tavi"],
    frameworkIds: ["post-tavi-antithrombotic"],
    modelReasoning: "This patient has no separate oral anticoagulation indication. CHA₂DS₂-VASc without documented AF (or another OAC indication) does not create an anticoagulation indication after TAVI. Default teaching is an antiplatelet pathway, not a DOAC started for the prosthesis. GALILEO was stopped early for higher death or thromboembolic events with a rivaroxaban strategy versus antiplatelet care when there was no other OAC indication; ATLANTIS’s no-indication stratum showed concerning signals versus antiplatelet care — both reinforce avoiding routine post-TAVI DOAC without another OAC indication. NOTION-4 supports that a short DOAC HALT effect is not durable and that routine DOAC without indication is not the practice message. ACASA-TAVI’s HALT imaging signal is not a mandate for routine OAC — clinical outcomes were underpowered on the site card. Prefer single antiplatelet therapy over stacking DOAC + aspirin when there is no dual-therapy or OAC indication (POPular TAVI SAPT preference when dual therapy is not otherwise indicated). Counsel that imaging endpoints are not an automatic clinical strategy. Document sinus rhythm, absence of OAC indication, and the antiplatelet plan. If new AF appears later, reopen the AF stroke-prevention pathway — that is a different fork.",
    teachingPoint: "After TAVI, the first fork is OAC indication vs none. Sinus, no other indication → do not start a DOAC for HALT prophylaxis as routine — answer the imaging paper with GALILEO/ATLANTIS/NOTION-4 context and an SAPT-first plan when dual therapy is not indicated.",
    links: [
      { kind: "nuance", id: "acasa-vs-notion4", label: "Nuance: ACASA vs NOTION-4" }
    ]
  },
  {
    id: "af-warfarin-bridge-reflex",
    title: "NVAF on warfarin — elective colonoscopy, LMWH bridge proposed",
    stem: "72-year-old with nonvalvular AF, CHA₂DS₂-VASc 4, on dose-adjusted warfarin with acceptable recent INRs, no mechanical valve, no VTE in the past year. Scheduled for elective screening colonoscopy with possible polypectomy. A covering clinician orders enoxaparin bridging ‘so he is never uncovered’ while warfarin is held.",
    keyQuestion: "Is routine LMWH bridging appropriate for this warfarin interruption — and what peri-procedural frame do you use instead?",
    trialIds: ["bridge"],
    frameworkIds: ["peri-procedural-oac"],
    modelReasoning: "This is typical nonvalvular AF interrupting warfarin for an elective procedure — the BRIDGE teaching population, not a mechanical-valve or acute-VTE niche. BRIDGE: arterial thromboembolism 0.4% (no bridging) vs 0.3% (bridging), risk difference 0.1 percentage points (95% CI −0.6 to 0.8), P=0.01 for noninferiority; major bleeding 1.3% (no bridging) vs 3.2% (bridging), relative risk 0.41 (95% CI 0.20 to 0.78), P=0.005 for superiority — so skip routine LMWH bridging. Cancel reflexive enoxaparin. Confirm the procedure’s bleed risk with GI (polypectomy raises bleed risk vs diagnostic-only) and whether any interruption is required; if holding warfarin, use an institutional hold/restart plan without routine LMWH bridge. Counsel that ‘never uncovered’ is not the same as safer — bridging itself bleeds. Document indication (NVAF), no high-risk prosthesis/recent VTE, the no-bridge rationale citing those BRIDGE rates, and who owns the post-procedure INR/restart. If this were a mechanical mitral valve or very recent VTE, you would not import the BRIDGE ‘skip bridge’ default unchanged.",
    teachingPoint: "Typical AF + elective warfarin hold → plan interruption and restart; do not add routine LMWH bridging. BRIDGE: arterial thromboembolism 0.4% vs 0.3% (noninferior), major bleeding 1.3% vs 3.2%.",
    links: [
      { kind: "tx-pathway", id: "peri-procedural-oac", label: "TX: Peri-procedural OAC" },
      { kind: "trial", id: "bridge", label: "Trial: BRIDGE" }
    ]
  },
  {
    id: "doac-legacy-aspirin",
    title: "VTE on a DOAC — still taking aspirin from years ago",
    stem: "64-year-old on apixaban for extended treatment after an unprovoked PE. At the annual DOAC review, the medication list also shows low-dose aspirin that a previous clinician started “years ago.” No history of MI, coronary stent, CABG, stroke, or peripheral artery disease; no mechanical valve. Two nosebleeds this year. The patient asks whether they still need “both blood thinners.”",
    keyQuestion: "What does the evidence say about keeping aspirin on top of a DOAC without a clear indication, and what is the right next step at this visit?",
    trialIds: [],
    frameworkIds: ["doac-appropriateness"],
    modelReasoning: "First establish whether any vascular indication exists — ask the patient, check the record, and ask the original prescriber; a remote stent or known coronary disease moves this to the stable coronary disease branch of the treatment pathway. If none is found, the best direct evidence is observational: in the Michigan registry (Schaefer, JAMA Intern Med 2021), 33.8% of DOAC patients for AF or VTE were also on aspirin without a clear indication. In the matched cohort, any bleeding was 31.60 vs 26.00 per 100 patient-years (P=.009) and bleeding hospitalization 8.20 vs 5.30 (P=.006), with no difference in thrombosis (2.50 vs 2.30; P=.80). Major bleeding was numerically higher but not significant (4.95 vs 3.59; P=.09). Even in patients who do have stable coronary disease, randomized trials (AQUATIC, EPIC-CAD, ADAPT AF-DES, AFIRE) found more bleeding without demonstrated ischemic benefit when an antiplatelet was added to OAC. So the step here is to document the missing indication and raise stopping the aspirin with the prescriber who owns it — not to stop the DOAC, and not for the patient to stop aspirin on their own before that conversation.",
    teachingPoint: "Every antithrombotic needs a named reason and a planned stop point. “Aspirin just because” on top of a DOAC is a deprescribing conversation with the prescriber — the evidence shows more bleeding and no thrombosis benefit, though the registry data are observational and major bleeding was not significantly different.",
    links: [
      { kind: "tx-pathway", id: "oac-antiplatelet-deprescribe", label: "TX: OAC + antiplatelet deprescribing" },
      { kind: "framework", id: "doac-appropriateness", label: "Framework: DOAC appropriateness" },
      { kind: "ddi", id: "aspirin", label: "Aspirin DDI card" }
    ]
  }
];


