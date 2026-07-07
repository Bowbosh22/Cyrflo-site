// ══════════════════════════════════════════════════════════
// CYRFLO LE KOULOU — Fichier de traductions FR / EN
// Phase 1 : Navigation, Hero, Boutons, Footer
// ══════════════════════════════════════════════════════════

const TRANSLATIONS = {
  fr: {
    // Navigation
    "nav.reserver": "Réserver",
    "nav.destinations": "Destinations",
    "nav.about": "Cyrflo le Koulou",
    "nav.offres": "Offres",
    "nav.abord": "À bord",
    "nav.bateau": "Notre bateau",
    "nav.galerie": "Galerie",
    "nav.compte": "Mon compte",
    "nav.login": "S'identifier",

    // Bandeau promo
    "ribbon.text": "🎉 Offre spéciale juin : −15% sur toutes les excursions et circuits avec notre bateau · ",
    "ribbon.link": "Réservez à partir du 10 juin",

    // Hero
    "hero.eyebrow": "Tourisme fluvial · République du Congo",
    "hero.title1": "Voyagez sur le",
    "hero.title2": "fleuve Congo",
    "hero.title.html": "Voyagez sur le<br><em>fleuve Congo</em>",
    "hero.subtitle": "Traversées Brazzaville–Kinshasa, excursion sur le fleuve Congo, croisières privées. Une expérience unique au cœur de l'Afrique centrale.",
    "hero.btn.search": "Rechercher une traversée",
    "hero.btn.discover": "Découvrir nos destinations",
    "hero.scroll": "Défiler",

    // Formulaire recherche
    "search.destination": "Destination / Service",
    "search.destination.all": "Toutes les destinations",
    "search.port": "Port de départ",
    "search.port.all": "Tous les ports",
    "search.date": "Date de départ",
    "search.passengers": "Passagers",
    "search.passenger.one": "1 passager",
    "search.btn": "Rechercher",

    // Footer
    "footer.desc": "La première plateforme de réservation de traversées et d'excursions fluviales en République du Congo.",
    "footer.services": "Services",
    "footer.services.traversees": "Traversées",
    "footer.services.excursions": "Excursions",
    "footer.services.croisieres": "Croisières privées",
    "footer.services.groupes": "Groupes scolaires",
    "footer.infos": "Informations",
    "footer.infos.about": "Cyrflo le Koulou",
    "footer.infos.securite": "Sécurité à bord",
    "footer.infos.horaires": "Horaires & tarifs",
    "footer.infos.conditions": "Conditions générales",
    "footer.infos.faq": "FAQ",
    "footer.contact": "Contact",
    "footer.contact.compte": "Mon compte",
    "footer.contact.reservation": "Gérer ma réservation",
    "footer.copyright": "© 2026 Cyrflo le Koulou · Tous droits réservés · République du Congo",

    // ── PHASE 2 : Titres de pages ──
    "page.dest.eyebrow": "Explorez le Congo",
    "page.dest.title": "Nos <em>destinations</em>",
    "page.dest.sub": "À travers le fleuve Congo, découvrez les plus beaux sites fluviaux de la République du Congo.",

    "page.about.eyebrow": "Notre histoire",
    "page.about.sub": "La première plateforme de tourisme fluvial en République du Congo.",

    "page.offres.eyebrow": "Nos meilleures offres",
    "page.offres.title": "Voyagez <em>malin</em>",
    "page.offres.sub": "Profitez de nos tarifs préférentiels, offres de dernière minute et promotions exclusives.",
    "page.offres.tab.all": "Toutes les offres",

    "page.bateau.eyebrow": "CyrfloLeKoulou · Notre embarcation",

    // Citation section
    "quote.eyebrow": "Sur le fleuve Congo",
    "quote.text": "« Lorsque la nature nous invite à ralentir, nous redécouvrons l'essentiel : notre humanité, nos liens et notre place dans le monde. »",

    // Section valeurs (editorial block 1)
    "editorial.valeurs.title": "Retrouver les valeurs<br><em style=\"font-style:italic;color:#9dd9c2;\">qui nous rassemblent</em>",

    // ── PHASE 3 : Modals ──
    "modal.login.title": "S'identifier",
    "modal.login.sub": "Accédez à votre espace client Cyrflo",
    "modal.login.email": "Email",
    "modal.login.password": "Mot de passe",
    "modal.login.btn": "Se connecter",
    "modal.login.noaccount": "Pas encore de compte ? ",
    "modal.login.create": "Créer un compte",
    "modal.login.forgot": "Mot de passe oublié ?",

    "modal.register.title": "Créer un compte",
    "modal.register.sub": "Rejoignez Cyrflo le Koulou",
    "modal.register.firstname": "Prénom",
    "modal.register.lastname": "Nom",
    "modal.register.email": "Email",
    "modal.register.phone": "Téléphone (WhatsApp)",
    "modal.register.password": "Mot de passe",

    "modal.reserver.title": "Réserver un voyage",
    "modal.reserver.sub": "Complétez le formulaire pour finaliser votre réservation",
    "modal.reserver.destination": "Destination",
    "modal.reserver.destination.choose": "Choisissez une destination",
    "modal.reserver.date": "Date de départ",
    "modal.reserver.heure": "Heure",
    "modal.reserver.passengers": "Passagers",
    "modal.reserver.name": "Prénom & Nom",
    "modal.reserver.phone": "Téléphone WhatsApp",

    // ── PHASE 3 : Cartes offres ──
    "offer.pro.badge": "Pro",
    "offer.pro.title": "Événements professionnels",
    "offer.pro.desc": "Séminaires, team building ou réceptions d'entreprise sur le fleuve Congo. Une expérience unique pour vos collaborateurs et partenaires.",
    "offer.pro.price.html": "Sur <strong>devis</strong>",

    "offer.circuit.badge": "Nouveau",
    "offer.circuit.title": "Circuit 2 jours Koulou",
    "offer.circuit.desc": "Découverte des gorges du Koulou en deux jours. Hébergement inclus.",
    "offer.circuit.price.html": "Dès <strong>35 000 FCFA</strong>",

    "offer.island.badge": "−15% Code KOULOU15",
    "offer.island.desc": "Journée sur l'île mystérieuse du Congo. Faune et flore exceptionnelles.",
    "offer.island.price.html": "Dès <strong>25 000 FCFA</strong>",

    "offer.traversee.badge": "Dernière minute",
    "offer.traversee.title": "Traversée express Congo–Kinshasa",
    "offer.traversee.desc": "Départ immédiat. Liaisons quotidiennes Brazzaville–Kinshasa.",
    "offer.traversee.price.html": "Dès <strong>110 000 FCFA</strong>",

    "offer.privee.badge": "Premium",
    "offer.privee.title": "Excursion privée",
    "offer.privee.desc": "Privatisez votre embarcation. Champagne et buffet inclus.",
    "offer.privee.price.html": "Dès <strong>45 000 FCFA</strong>",

    "offer.scolaire.badge": "Groupe",
    "offer.scolaire.title": "Groupe scolaire",
    "offer.scolaire.desc": "Sortie fluviale encadrée pour classes et établissements scolaires. Découverte du fleuve Congo dans un cadre pédagogique et sécurisé.",

    "common.reserver.arrow": "Réserver →",

    // ── PHASE 4 ──
    "testi.eyebrow": "Ils l'ont vécu",
    "testi.title.html": "Ce que disent<br><em style=\"font-style:italic;color:#9dd9c2;\">nos voyageurs</em>",
    "abord.tab.confort": "Confort & sécurité",
    "bateau.arg1.desc": "CyrfloLeKoulou effectue la traversée <strong style=\"color:#fff;\">Brazzaville–Kinshasa</strong> en seulement 5 minutes. Fini les longues attentes, les tracas administratifs interminables — montez à bord, et en un clin d'œil vous êtes de l'autre côté du plus grand fleuve d'Afrique centrale.",
    "bateau.arg1.desc.v2": "CyrfloLeKoulou effectue la traversée <strong style=\"color:#fff;\">Brazzaville–Kinshasa</strong> en seulement 5 minutes. Fini les longues attentes — montez à bord, et en un clin d'œil vous êtes de l'autre côté du plus grand fleuve d'Afrique centrale.",
  },

  en: {
    // Navigation
    "nav.reserver": "Book",
    "nav.destinations": "Destinations",
    "nav.about": "Cyrflo le Koulou",
    "nav.offres": "Offers",
    "nav.abord": "On board",
    "nav.bateau": "Our boat",
    "nav.galerie": "Gallery",
    "nav.compte": "My account",
    "nav.login": "Sign in",

    // Bandeau promo
    "ribbon.text": "🎉 June special offer: −15% on all excursions and tours with our boat · ",
    "ribbon.link": "Book from June 10th",

    // Hero
    "hero.eyebrow": "River tourism · Republic of Congo",
    "hero.title1": "Travel on the",
    "hero.title2": "Congo River",
    "hero.title.html": "Travel on the<br><em>Congo River</em>",
    "hero.subtitle": "Brazzaville–Kinshasa crossings, excursions on the Congo River, private cruises. A unique experience in the heart of Central Africa.",
    "hero.btn.search": "Find a crossing",
    "hero.btn.discover": "Discover our destinations",
    "hero.scroll": "Scroll",

    // Formulaire recherche
    "search.destination": "Destination / Service",
    "search.destination.all": "All destinations",
    "search.port": "Departure port",
    "search.port.all": "All ports",
    "search.date": "Departure date",
    "search.passengers": "Passengers",
    "search.passenger.one": "1 passenger",
    "search.btn": "Search",

    // Footer
    "footer.desc": "The first booking platform for river crossings and excursions in the Republic of Congo.",
    "footer.services": "Services",
    "footer.services.traversees": "Crossings",
    "footer.services.excursions": "Excursions",
    "footer.services.croisieres": "Private cruises",
    "footer.services.groupes": "School groups",
    "footer.infos": "Information",
    "footer.infos.about": "Cyrflo le Koulou",
    "footer.infos.securite": "Safety on board",
    "footer.infos.horaires": "Schedule & rates",
    "footer.infos.conditions": "Terms & conditions",
    "footer.infos.faq": "FAQ",
    "footer.contact": "Contact",
    "footer.contact.compte": "My account",
    "footer.contact.reservation": "Manage my booking",
    "footer.copyright": "© 2026 Cyrflo le Koulou · All rights reserved · Republic of Congo",

    // ── PHASE 2 : Page titles ──
    "page.dest.eyebrow": "Explore Congo",
    "page.dest.title": "Our <em>destinations</em>",
    "page.dest.sub": "Along the Congo River, discover the most beautiful river sites in the Republic of Congo.",

    "page.about.eyebrow": "Our story",
    "page.about.sub": "The first river tourism platform in the Republic of Congo.",

    "page.offres.eyebrow": "Our best offers",
    "page.offres.title": "Travel <em>smart</em>",
    "page.offres.sub": "Enjoy our preferential rates, last-minute deals and exclusive promotions.",
    "page.offres.tab.all": "All offers",

    "page.bateau.eyebrow": "CyrfloLeKoulou · Our vessel",

    // Quote section
    "quote.eyebrow": "On the Congo River",
    "quote.text": "\u201C When nature invites us to slow down, we rediscover what matters: our humanity, our bonds and our place in the world. \u201D",

    // Values section (editorial block 1)
    "editorial.valeurs.title": "Rediscover the values<br><em style=\"font-style:italic;color:#9dd9c2;\">that bring us together</em>",

    // ── PHASE 3 : Modals ──
    "modal.login.title": "Sign in",
    "modal.login.sub": "Access your Cyrflo customer area",
    "modal.login.email": "Email",
    "modal.login.password": "Password",
    "modal.login.btn": "Sign in",
    "modal.login.noaccount": "No account yet? ",
    "modal.login.create": "Create an account",
    "modal.login.forgot": "Forgot password?",

    "modal.register.title": "Create an account",
    "modal.register.sub": "Join Cyrflo le Koulou",
    "modal.register.firstname": "First name",
    "modal.register.lastname": "Last name",
    "modal.register.email": "Email",
    "modal.register.phone": "Phone (WhatsApp)",
    "modal.register.password": "Password",

    "modal.reserver.title": "Book a trip",
    "modal.reserver.sub": "Fill out the form to complete your booking",
    "modal.reserver.destination": "Destination",
    "modal.reserver.destination.choose": "Choose a destination",
    "modal.reserver.date": "Departure date",
    "modal.reserver.heure": "Time",
    "modal.reserver.passengers": "Passengers",
    "modal.reserver.name": "First & last name",
    "modal.reserver.phone": "WhatsApp phone number",

    // ── PHASE 3 : Offer cards ──
    "offer.pro.badge": "Pro",
    "offer.pro.title": "Corporate events",
    "offer.pro.desc": "Seminars, team building or corporate receptions on the Congo River. A unique experience for your colleagues and partners.",
    "offer.pro.price.html": "Quote on <strong>request</strong>",

    "offer.circuit.badge": "New",
    "offer.circuit.title": "2-day Koulou tour",
    "offer.circuit.desc": "Discover the Koulou gorges over two days. Accommodation included.",
    "offer.circuit.price.html": "From <strong>35,000 FCFA</strong>",

    "offer.island.badge": "−15% Code KOULOU15",
    "offer.island.desc": "A day on Congo's mysterious island. Exceptional wildlife and vegetation.",
    "offer.island.price.html": "From <strong>25,000 FCFA</strong>",

    "offer.traversee.badge": "Last minute",
    "offer.traversee.title": "Express crossing Congo–Kinshasa",
    "offer.traversee.desc": "Immediate departure. Daily Brazzaville–Kinshasa connections.",
    "offer.traversee.price.html": "From <strong>110,000 FCFA</strong>",

    "offer.privee.badge": "Premium",
    "offer.privee.title": "Private excursion",
    "offer.privee.desc": "Privatize your boat. Champagne and buffet included.",
    "offer.privee.price.html": "From <strong>45,000 FCFA</strong>",

    "offer.scolaire.badge": "Group",
    "offer.scolaire.title": "School group",
    "offer.scolaire.desc": "Supervised river outing for school classes. Discover the Congo River in an educational and safe setting.",

    "common.reserver.arrow": "Book →",

    // ── PHASE 4 ──
    "testi.eyebrow": "They experienced it",
    "testi.title.html": "What our<br><em style=\"font-style:italic;color:#9dd9c2;\">travelers say</em>",
    "abord.tab.confort": "Comfort & safety",
    "bateau.arg1.desc": "CyrfloLeKoulou completes the <strong style=\"color:#fff;\">Brazzaville–Kinshasa</strong> crossing in just 5 minutes. No more long waits or endless administrative hassle — step aboard, and in the blink of an eye you're on the other side of Central Africa's largest river.",
    "bateau.arg1.desc.v2": "CyrfloLeKoulou completes the <strong style=\"color:#fff;\">Brazzaville–Kinshasa</strong> crossing in just 5 minutes. No more long waits — step aboard, and in the blink of an eye you're on the other side of Central Africa's largest river.",
  }
};

// ══════════════════════════════════════════════════════════
// LOGIQUE DE CHANGEMENT DE LANGUE
// ══════════════════════════════════════════════════════════

function getLang() {
  return localStorage.getItem('cyrflo_lang') || 'fr';
}

function setLang(lang) {
  localStorage.setItem('cyrflo_lang', lang);
  applyTranslations(lang);
  updateLangButton(lang);
}

function applyTranslations(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.fr;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });
  // Éléments dont la traduction contient du HTML (br, em, strong...)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });
  // Éléments avec placeholder traduit
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) {
      el.setAttribute('placeholder', dict[key]);
    }
  });
  document.documentElement.setAttribute('lang', lang);
}

function updateLangButton(lang) {
  const btn = document.getElementById('langToggle');
  if (btn) {
    // Affiche la langue vers laquelle on peut basculer
    btn.textContent = lang === 'fr' ? 'EN' : 'FR';
  }
}

function toggleLang() {
  const current = getLang();
  setLang(current === 'fr' ? 'en' : 'fr');
}

// Appliquer la langue au chargement
document.addEventListener('DOMContentLoaded', function() {
  const lang = getLang();
  applyTranslations(lang);
  updateLangButton(lang);
});
