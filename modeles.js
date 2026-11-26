// Mes modèles : 18 gabarits (famille x but, 2 variantes) + structures de carrousel.
// Paramètres : tY/bY/cY/kY en fraction de H ; tS/bS/kS en fraction de W ; tX/tW/bX/bW en fraction de W.
window.MODELES = {
  // Règles d'homogénéité : tailles de titre par but (TOFU, MOFU, BOFU), même sorcière (coin bas droit), texte centré verticalement.
  // Les variantes A et B ne changent que la barre corail ou la carte de texte.
  templates: [
    // 4 gabarits (structures envoyées par Alicia le 25/11). Disposition fixe, seul le contenu change.
    { id: "constat", label: "Constat / opinion", but: "tofu", fam: "post", p: { tY: 1, tS: .11, bS: .04, anc: "haut" } },
    { id: "retour", label: "Retour d'expérience", but: "mofu", fam: "post", p: { tY: 1, tS: .05, key: 1, kS: .22, anc: "milieu", tA: "center" } },
    { id: "methode", label: "Méthode / process", but: "mofu", fam: "post", p: { tY: 1, tS: .09, num: 1, nS: .12, bS: .04, anc: "haut" } },
    { id: "ressource", label: "Ressource / template", but: "bofu", fam: "post", p: { tY: 1, tS: .09, card: 1, cta: 1, anc: "haut" } },
    { id: "car-tofu-a", fam: "car", but: "tofu", type: "couverture", label: "Couverture A · titre, « Swipe → », sorcière", p: { tY: 1, tS: .105, bS: .040, sorc: 1, sh: .56, pos: "droite", swipe: 1 } },
    { id: "car-tofu-b", fam: "car", but: "tofu", type: "couverture", label: "Couverture B · barre corail, titre, « Swipe → »", p: { bar: 1, tY: 1, tS: .105, bS: .040, sorc: 1, sh: .56, pos: "droite", swipe: 1 } },
    { id: "car-mofu-a", fam: "car", but: "mofu", type: "étape", label: "Étape A · titre et corps, sorcière", p: { tY: 1, tS: .085, bS: .042, sorc: 1, sh: .56, pos: "droite" } },
    { id: "car-mofu-b", fam: "car", but: "mofu", type: "liste", label: "Liste B · corps en trait lime, sorcière", p: { tY: 1, tS: .085, bS: .042, trait: 1, sorc: 1, sh: .56, pos: "droite" } },
    { id: "car-tofu-c", fam: "car", but: "tofu", type: "couverture", label: "Couverture C · titre géant sur photo, sans sorcière", p: { tY: 1, tS: .115, bS: .04, swipe: 1 } },
    { id: "car-mofu-c", fam: "car", but: "mofu", type: "étape", label: "Étape C · numéro géant, titre, sorcière", p: { num: 1, nS: .2, tY: 1, tS: .07, bS: .04, sorc: 1, sh: .56, pos: "droite" } },
    { id: "car-mofu-d", fam: "car", but: "mofu", type: "citation", label: "Citation D · barre corail, phrase forte, précision", p: { bar: 1, tY: 1, tS: .08, bS: .04, sorc: 1, sh: .56, pos: "droite" } },
    { id: "car-bofu-a", fam: "car", but: "bofu", type: "fermeture", label: "Fermeture A · action en titre, URL, sorcière", p: { tY: 1, tS: .09, tA: "left", tTxt: "cta", sorc: 1, sh: .56, pos: "droite", url: 1 } },
    { id: "car-bofu-b", fam: "car", but: "bofu", type: "fermeture", label: "Fermeture B · bouton, URL, sorcière", p: { tY: 1, tS: .09, cta: 1, sorc: 1, sh: .56, pos: "droite", url: 1 } },
  ],
  // Structures : storytelling = TOFU, expertise = MOFU, vente = BOFU.
  // Le témoignage client de la structure « vente » n'est pas repris : il faut un cas client vérifié et autorisé.
  structures: [
    { id: "storytelling", label: "Storytelling", but: "tofu", slides: [
      { role: "couverture", tpl: "car-tofu-a" }, { role: "situation", tpl: "car-mofu-a" }, { role: "tournant", tpl: "car-mofu-b" },
      { role: "action", tpl: "car-mofu-a" }, { role: "résultat", tpl: "car-mofu-b" }, { role: "à retenir", tpl: "car-mofu-a" },
      { role: "fermeture", tpl: "car-bofu-b" } ] },
    { id: "expertise", label: "Expertise", but: "mofu", slides: [
      { role: "couverture", tpl: "car-tofu-b" }, { role: "ce qu'il faut", tpl: "car-mofu-a" }, { role: "étapes", tpl: "car-mofu-b" },
      { role: "avant / après", tpl: "car-mofu-a" }, { role: "phrase à copier", tpl: "car-mofu-b" }, { role: "fermeture", tpl: "car-bofu-a" } ] },
    { id: "vente", label: "Vente", but: "bofu", slides: [
      { role: "problème", tpl: "car-tofu-a" }, { role: "pourquoi ça bloque", tpl: "car-mofu-a" }, { role: "solution", tpl: "car-mofu-b" },
      { role: "ce qui change", tpl: "car-mofu-a" }, { role: "offre", tpl: "car-mofu-b" }, { role: "fermeture", tpl: "car-bofu-b" } ] }
  ]
};
