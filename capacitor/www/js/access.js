/* Content-access flags the UI can read.
   Every current content id is free (timeline, recap, details, compare,
   playlists, pathways, frameworks, cases, reversal, nuance, DDI, the
   current CACP bank, Learn, and each trial/framework/case/nuance/pathway/
   DDI/CACP record id). Only exam-notes and saved-sets are members-only.
   Those two routes are locked in the page itself. This file does not
   unlock them. No account, password, payment, localStorage, or other
   client unlock. */
(function () {
  var MEMBERS_ONLY = {
    "exam-notes": {
      id: "exam-notes",
      route: "#/members/exam-notes",
      label: "Exam-depth notes",
      access: "members"
    },
    "saved-sets": {
      id: "saved-sets",
      route: "#/members/saved-sets",
      label: "Saved sets",
      access: "members"
    }
  };

  function accessFor(id) {
    if (id && MEMBERS_ONLY[id]) return "members";
    return "free";
  }

  function canRead(id) {
    return accessFor(id) === "free";
  }

  window.ANTICOAG_ACCESS = {
    membersOnly: MEMBERS_ONLY,
    accessFor: accessFor,
    canRead: canRead
  };
})();
