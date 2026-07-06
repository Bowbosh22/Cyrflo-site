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
