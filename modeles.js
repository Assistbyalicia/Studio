// Mes modèles : gabarits posts (4×2 variantes) + gabarits carrousel + structures.
// Paramètres : tY/bY/cY/kY en fraction de H ; tS/bS/kS en fraction de W ; tX/tW/bX/bW en fraction de W.
window.MODELES = {
  // Règles d'homogénéité : tailles de titre par but (TOFU, MOFU, BOFU), sorcière uniquement couverture et fermeture de carrousel, texte aligné gauche sauf citation.
  templates: [
    // Posts : 4 gabarits × 2 variantes (A = sans sorcière, B = avec sorcière ou détail visuel)
    { id: "constat",    label: "Constat / opinion · A",           but: "tofu", fam: "post", p: { tY: 1, tS: .11,  bS: .04,  anc: "haut" } },
    { id: "constat-b",  label: "Constat / opinion · B — sorcière", but: "tofu", fam: "post", p: { tY: 1, tS: .11,  bS: .04,  anc: "haut", sorc: 1, sh: .56, pos: "droite" } },
    { id: "retour",    label: "Retour d'expérience · A",          but: "mofu", fam: "post", p: { tY: 1, tS: .05,  key: 1, kS: .22, anc: "milieu" } },
    { id: "retour-b",  label: "Retour d'expérience · B — sorcière", but: "mofu", fam: "post", p: { tY: 1, tS: .05, key: 1, kS: .22, anc: "milieu", sorc: 1, sh: .56, pos: "droite" } },
    { id: "methode",   label: "Méthode / process · A",            but: "mofu", fam: "post", p: { tY: 1, tS: .09,  num: 1, nS: .12, bS: .04, anc: "haut" } },
    { id: "methode-b", label: "Méthode / process · B — barre corail", but: "mofu", fam: "post", p: { tY: 1, tS: .09, num: 1, nS: .12, bS: .04, anc: "haut", bar: 1 } },
    { id: "ressource",   label: "Ressource / template · A",         but: "bofu", fam: "post", p: { tY: 1, tS: .09,  card: 1, cta: 1, anc: "haut" } },
    { id: "ressource-b", label: "Ressource / template · B — sorcière", but: "bofu", fam: "post", p: { tY: 1, tS: .09, card: 1, cta: 1, anc: "haut", sorc: 1, sh: .56, pos: "droite" } },
    // Couvertures carrousel (sorcière conservée)
    { id: "car-tofu-a", fam: "car", but: "tofu", type: "couverture", label: "Couverture A · titre, « Swipe → », sorcière",        p: { tY: 1, tS: .105, bS: .040, sorc: 1, sh: .56, pos: "droite", swipe: 1 } },
    { id: "car-tofu-b", fam: "car", but: "tofu", type: "couverture", label: "Couverture B · barre corail, titre, « Swipe → », sorcière", p: { bar: 1, tY: 1, tS: .105, bS: .040, sorc: 1, sh: .56, pos: "droite", swipe: 1 } },
    { id: "car-tofu-c", fam: "car", but: "tofu", type: "couverture", label: "Couverture C · titre géant sur photo, sans sorcière",    p: { tY: 1, tS: .115, bS: .04, swipe: 1 } },
    // Étapes MOFU (sorcière retirée — uniquement couverture + fermeture)
    { id: "car-mofu-a", fam: "car", but: "mofu", type: "étape",    label: "Étape A · titre et corps",              p: { tY: 1, tS: .085, bS: .042 } },
    { id: "car-mofu-b", fam: "car", but: "mofu", type: "liste",    label: "Liste B · corps en trait lime",          p: { tY: 1, tS: .085, bS: .042, trait: 1 } },
    { id: "car-mofu-c", fam: "car", but: "mofu", type: "étape",    label: "Étape C · numéro géant, titre",          p: { num: 1, nS: .2, tY: 1, tS: .085, bS: .04 } },
    { id: "car-mofu-d", fam: "car", but: "mofu", type: "citation", label: "Citation D · barre corail, phrase forte",  p: { bar: 1, tY: 1, tS: .08, bS: .04, tA: "center" } },
    // Fermetures carrousel (sorcière conservée)
    { id: "car-bofu-a", fam: "car", but: "bofu", type: "fermeture", label: "Fermeture A · action en titre, URL, sorcière", p: { tY: 1, tS: .09, tA: "left", tTxt: "cta", sorc: 1, sh: .56, pos: "droite", url: 1 } },
    { id: "car-bofu-b", fam: "car", but: "bofu", type: "fermeture", label: "Fermeture B · bouton, URL, sorcière",          p: { tY: 1, tS: .09, cta: 1, sorc: 1, sh: .56, pos: "droite", url: 1 } },
  ],
  // Structures : storytelling = TOFU, expertise = MOFU, vente = BOFU.
  structures: [
    { id: "storytelling", label: "Storytelling", but: "tofu", slides: [
      { role: "couverture",  tpl: "car-tofu-a" }, { role: "situation",  tpl: "car-mofu-a" }, { role: "tournant",   tpl: "car-mofu-b" },
      { role: "action",     tpl: "car-mofu-a" }, { role: "résultat",  tpl: "car-mofu-b" }, { role: "à retenir", tpl: "car-mofu-a" },
      { role: "fermeture",  tpl: "car-bofu-b" } ] },
    { id: "expertise", label: "Expertise", but: "mofu", slides: [
      { role: "couverture",      tpl: "car-tofu-b" }, { role: "ce qu'il faut", tpl: "car-mofu-a" }, { role: "étapes",        tpl: "car-mofu-b" },
      { role: "avant / après",  tpl: "car-mofu-a" }, { role: "phrase à copier", tpl: "car-mofu-b" }, { role: "fermeture",    tpl: "car-bofu-a" } ] },
    { id: "vente", label: "Vente", but: "bofu", slides: [
      { role: "problème",        tpl: "car-tofu-a" }, { role: "pourquoi ça bloque", tpl: "car-mofu-a" }, { role: "solution",    tpl: "car-mofu-b" },
      { role: "ce qui change",  tpl: "car-mofu-a" }, { role: "offre",             tpl: "car-mofu-b" }, { role: "fermeture",  tpl: "car-bofu-b" } ] }
  ]
};
