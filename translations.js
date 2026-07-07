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

    // ── PHASE 5 : Page A bord ──
    "abord.tab.title": "Confort & sécurité",
    "abord.flotte.title": "Flotte certifiée",
    "abord.flotte.desc.html": "Toutes nos embarcations sont contrôlées et certifiées par les autorités fluviales de la République du Congo. Inspections mensuelles obligatoires. <strong style=\"color:#c9a84c;\">Fait par l'organisme certificateur Digenaf.</strong>",
    "abord.securite.title": "Équipements de sécurité",
    "abord.securite.desc": "Gilets de sauvetage homologués pour chaque passager, bouées de sauvetage, trousse de premiers secours et système de communication d'urgence à bord.",
    "abord.equipage.title": "Équipage qualifié",
    "abord.equipage.desc": "Capitaines et mariniers diplômés et experimentés sur le fleuve Congo. Formation continue en sécurité fluviale.",
    "abord.durable.title": "Tourisme durable",
    "abord.durable.desc": "Engagés pour la préservation du fleuve Congo. Moteurs à faible émission, gestion des déchets à bord.",
    "abord.capacite.title": "Capacité",
    "abord.capacite.desc": "Notre bateau dispose de 16 places assises confortables, idéalement réparties pour offrir à chaque passager une vue dégagée sur le fleuve Congo et un espace de voyage agréable.",
    "abord.accessibilite.title": "Accessibilité",
    "abord.accessibilite.desc": "Notre bateau est équipé pour les personnes à mobilité réduite. Contactez-nous à l'avance pour organiser votre voyage dans les meilleures conditions.",

    // Stats bar Notre bateau
    "bateau.stat.places": "Places",
    "bateau.stat.musique": "Musique",
    "bateau.stat.certifie": "Certifié",
    "bateau.stat.qrmobile": "QR Mobile",

    // Argument 2 : Musique
    "bateau.arg2.title": "Ambiance musicale",
    "bateau.arg2.cat": "À bord",
    "bateau.arg2.desc": "Notre sonorisation embarquée diffuse une sélection musicale soignée pour rendre chaque traversée mémorable. Disponible sur demande pour vos événements privés, anniversaires ou sorties entre amis — créez l'ambiance que vous voulez sur le fleuve.",

    // Argument 3 : Confort & vue
    "bateau.arg3.title": "16 places avec vue",
    "bateau.arg3.cat": "Panoramique",
    "bateau.arg3.desc": "Chaque siège est disposé pour offrir une vue dégagée sur le fleuve Congo. Admirez les deux capitales qui se font face, les reflets de l'eau au lever ou coucher du soleil — une expérience visuelle unique que vous ne trouverez nulle part ailleurs.",

    // ── PHASE 6 ──
    // Argument 4 : Privatisation
    "bateau.arg4.title": "Privatisation",
    "bateau.arg4.cat": "Sur demande",
    "bateau.arg4.desc": "Réservez CyrfloLeKoulou en exclusivité pour vos événements privés : anniversaires, mariages, sorties d'entreprise, excursions VIP. Musique personnalisée, champagne et décoration peuvent être organisés sur demande pour une traversée inoubliable.",

    // Page About - section "Pourquoi Cyrflo le Koulou"
    "about.section.eyebrow": "Notre histoire",
    "about.why.title.html": "Pourquoi <em>\"Cyrflo le Koulou\"&nbsp;?</em>",
    "about.p1.html": "Le nom porte notre histoire. <strong style=\"color:#fff\">CYRFLO</strong> est la contraction de nos prénoms, <em>Cyriaque</em> et <em>Florence</em>, couple d'entrepreneurs à l'origine du projet.",
    "about.p2.html": "Et <strong style=\"color:#fff\">KOULOU</strong>, c'est le diminutif de \"débrouillard\" en lari, notre langue vernaculaire dans le pool. Un clin d'œil à l'esprit de résilience et d'ingéniosité du sud Congo et de l'Afrique de l'ouest qui nous anime au quotidien.",
    "about.p3": "Porté par cette double identité, le projet ne suit qu'une seule logique : avancer, construire et impacter durablement.",
    "about.p4": "Plus qu'un transport, c'est un vrai lien entre les populations des deux rives surtout et de tout passager venu du monde entier.",

    // Editorial "Une rencontre avec le vivant"
    "editorial.rencontre.p1": "Chaque arbre, chaque rivière, chaque horizon raconte une histoire plus ancienne que nous. En nous rapprochant de la nature, nous retrouvons un sentiment d'appartenance. Nous comprenons que nous faisons partie d'un tout plus vaste, plus riche et plus fragile.",
    "editorial.rencontre.p2": "Cette connexion nourrit l'émerveillement, l'humilité et la gratitude.",

    // Editorial "Un voyage intérieur"
    "editorial.voyage.title.html": "Un voyage<br><em style=\"font-style:italic;color:#9dd9c2;\">intérieur</em>",
    "editorial.voyage.p1": "Parfois, le plus beau des voyages n'est pas celui qui nous emmène loin. C'est celui qui nous ramène à nous-mêmes.",
    "editorial.voyage.p2.html": "Prendre le temps de respirer. Ressentir. Observer. Partager.<br>Retrouver ce qui compte vraiment.",
    "editorial.voyage.btn": "Commencer le voyage →",
    "dest.ask.question": "Poser une question",
    "dest.close.form": "Fermer le formulaire",
    "dest.duration.icon": "⏱ ",

    // Section Nos valeurs
    "values.eyebrow": "Nos valeurs",
    "values.title.html": "Ce qui nous <em>distingue</em>",
    "values.item1.title": "100% Congolais",
    "values.item1.text": "Entreprise fondée et gérée par des Congolais, pour valoriser le patrimoine fluvial national.",
    "values.item2.title": "Innovation numérique",
    "values.item2.text": "Première plateforme de réservation fluviale digitale au Congo, avec paiement Mobile Money intégré.",
    "values.item3.title": "Engagement écologique",
    "values.item3.text": "Préservation du fleuve Congo et de ses écosystèmes au cœur de notre modèle d'entreprise.",
    "values.item4.title": "Impact local",
    "values.item4.text": "Emploi d'équipages locaux formés, partenariats avec des guides et artisans des communautés riveraines.",

    // Cartes destinations (page Destinations, grille statique)
    "destcard.b2k.label": "Traversée inter-capitale",
    "destcard.b2k.price": "Dès 110 000 FCFA / personne",
    "destcard.excprivee.label": "Expérience premium",
    "destcard.excprivee.name": "Excursion privée",
    "destcard.excprivee.price": "Dès 45 000 FCFA",
    "destcard.kintele.label": "Culture & patrimoine",
    "destcard.kintele.price": "Sur devis",
    "destcard.circuit.label": "Multi-jours",
    "destcard.circuit.name": "Circuit 2 jours",
    "destcard.circuit.price": "Dès 35 000 FCFA",
    "destcard.mbamou.label": "Faune et Flore",
    "destcard.mbamou.name": "Île Mbamou",
    "destcard.mbamou.price": "Dès 25 000 FCFA",
    "destcard.plage.label": "Plage",
    "destcard.plage.name": "Plage de sable fin Brazzaville",
    "destcard.plage.price": "Dès 18 000 FCFA",
    "destcard.oyo.label": "Découverte",
    "destcard.oyo.price": "Sur devis",

    // Badge le plus populaire
    "destcard.badge.popular": "Plus populaire",

    // Tiroir destination - template statique
    "dest.section.acts": "Ce que vous ferez",
    "dest.section.incl": "Ce qui est inclus",
    "dest.contact.title": "💬 Poser une question",
    "dest.form.firstname": "Prénom *",
    "dest.form.lastname": "Nom *",
    "dest.form.email": "E-mail *",
    "dest.form.emailconfirm": "Confirmer l'e-mail *",
    "dest.form.country": "Pays de résidence *",
    "dest.form.whatsapp": "WhatsApp (+242...)",
    "dest.form.message": "Votre question…",
    "dest.form.submit": "Envoyer sur WhatsApp →",
    "dest.form.success": "✓ Message envoyé ! Nous vous répondons sous 2h.",
    "dest.btn.reserve": "Réserver maintenant →",

    // Filtres galerie
    "gallery.filter.all": "Tout voir",
    "gallery.filter.video": "🎬 Vidéos",
    "gallery.filter.fleuve": "🌊 Le fleuve",
    "gallery.filter.bateau": "⚓ Notre bateau",
    "gallery.filter.voyageurs": "👥 Voyageurs",
    "gallery.filter.destination": "📍 Destinations",
    "gallery.filter.faune": "🦌 Faune & Flore",

    // Pages FAQ / Conditions - en-tetes
    "page.faq.eyebrow": "Aide & Questions",
    "page.faq.title.html": "Questions <em>frequentes</em>",
    "page.faq.sub": "Tout ce que vous devez savoir avant de voyager avec nous.",
    "page.conditions.eyebrow": "Informations legales",
    "page.conditions.title.html": "Conditions <em>generales</em>",
    "page.conditions.sub": "Mentions legales, politique de confidentialite et conditions generales de vente.",

    // Page Galerie - en-tete
    "page.galerie.eyebrow": "Galerie",
    "page.galerie.title.html": "Le fleuve <em>en images</em>",
    "page.galerie.sub": "Vidéos et photos du Congo, du bateau et de la faune et la flore.",

    // ── FAQ ──
    "faq.section.traversee": "La traversée",
    "faq.section.resa": "Réservations & paiement",
    "faq.section.excursions": "Excursions",

    "faq.q1": "Combien de temps dure la traversée Brazzaville–Kinshasa ?",
    "faq.a1": "La traversée elle-même dure seulement 5 minutes. Le temps total peut varier selon les formalités administratives au port d'embarquement et de débarquement.",
    "faq.q2": "Quels documents faut-il pour traverser ?",
    "faq.a2": "Pour les Congolais de Brazzaville : pièce d'identité ou passeport en cours de validité + laissez-passer. Pour les étrangers : passeport en cours de validité + visa en cours de validité + carnet de vaccination valide (obligatoire). Votre billet Cyrflo le Koulou avec QR code est également obligatoire à l'embarquement.",
    "faq.q3": "D'où part le bateau ?",
    "faq.a3": "Nos traversées peuvent partir du Port de Brazzaville (Beach Congo) ou du Port de Kinshasa selon le sens du trajet. Nous vous conseillons d'arriver au moins 30 minutes avant l'heure de départ prévue.",
    "faq.q4": "La traversée est-elle sûre ?",
    "faq.a4": "Oui. Nos bateaux sont certifiés et inspectés régulièrement. Des gilets de sauvetage sont disponibles pour tous les passagers. Nous annulons les traversées en cas de conditions météorologiques dangereuses.",
    "faq.q5": "Comment réserver ?",
    "faq.a5": "Réservez directement sur ce site en cliquant sur \"Réserver\". Choisissez votre destination, la date et le nombre de passagers. Vous recevrez une confirmation par email et/ou WhatsApp avec votre billet PDF.",
    "faq.q6": "Quels modes de paiement acceptez-vous ?",
    "faq.a6": "Nous acceptons MTN MoMo, Airtel Money et le paiement en espèces directement au Port de Brazzaville (Beach Congo) avant l'embarquement.",
    "faq.q7": "Puis-je annuler ma réservation ?",
    "faq.a7": "Oui. Annulation plus de 48h avant le départ : remboursement intégral. Entre 24h et 48h : avoir valable 30 jours. Moins de 24h avant le départ : aucun remboursement. Contactez-nous par email ou téléphone.",
    "faq.q8": "Combien de bagages puis-je emporter ?",
    "faq.a8": "Chaque passager peut emporter une valise et un bagage à main. Pour tout bagage volumineux ou fret, contactez-nous directement pour un arrangement personnalisé.",
    "faq.q9": "Peut-on privatiser le bateau ?",
    "faq.a9": "Oui, nous accueillons différents types d'événements privés ou professionnels. Notre équipe est à votre disposition pour organiser une sortie sur mesure selon vos souhaits.",
    "faq.q10": "Que comprend le prix d'une excursion ?",
    "faq.a10": "Le prix comprend le transport en bateau, l'encadrement par l'équipage à bord, les gilets de sauvetage, le billet électronique, ainsi qu'un snack, une bouteille d'eau et un pack hygiène. Des prestations supplémentaires peuvent être ajoutées selon votre demande.",

    "faq.contact.title": "Vous avez une question spécifique ?",
    "faq.contact.sub": "Notre équipe vous répond sous 24h.",
    "faq.contact.name": "Votre nom",
    "faq.contact.name.placeholder": "Votre nom complet",
    "faq.contact.reach": "Email ou WhatsApp",
    "faq.contact.reach.placeholder": "votre@email.com ou +242XXXXXXXXX",
    "faq.contact.question": "Votre question",
    "faq.contact.question.placeholder": "Décrivez votre question en détail...",
    "faq.contact.submit": "Envoyer ma question",
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

    // ── PHASE 5 : On board page ──
    "abord.tab.title": "Comfort & safety",
    "abord.flotte.title": "Certified fleet",
    "abord.flotte.desc.html": "All our vessels are inspected and certified by the river authorities of the Republic of Congo. Mandatory monthly inspections. <strong style=\"color:#c9a84c;\">Certified by Digenaf.</strong>",
    "abord.securite.title": "Safety equipment",
    "abord.securite.desc": "Approved life jackets for every passenger, life buoys, first aid kit, and onboard emergency communication system.",
    "abord.equipage.title": "Qualified crew",
    "abord.equipage.desc": "Certified and experienced captains and boatmen on the Congo River. Ongoing river safety training.",
    "abord.durable.title": "Sustainable tourism",
    "abord.durable.desc": "Committed to preserving the Congo River. Low-emission engines, onboard waste management.",
    "abord.capacite.title": "Capacity",
    "abord.capacite.desc": "Our boat has 16 comfortable seats, ideally arranged to give every passenger a clear view of the Congo River and a pleasant travel space.",
    "abord.accessibilite.title": "Accessibility",
    "abord.accessibilite.desc": "Our boat is equipped for people with reduced mobility. Contact us in advance to arrange your trip in the best conditions.",

    // Stats bar Our boat
    "bateau.stat.places": "Seats",
    "bateau.stat.musique": "Music",
    "bateau.stat.certifie": "Certified",
    "bateau.stat.qrmobile": "QR Mobile",

    // Argument 2 : Music
    "bateau.arg2.title": "Musical ambiance",
    "bateau.arg2.cat": "On board",
    "bateau.arg2.desc": "Our onboard sound system plays a carefully curated musical selection to make every crossing memorable. Available on request for private events, birthdays, or outings with friends — create the mood you want on the river.",

    // Argument 3 : Comfort & view
    "bateau.arg3.title": "16 seats with a view",
    "bateau.arg3.cat": "Panoramic",
    "bateau.arg3.desc": "Every seat is arranged to offer a clear view of the Congo River. Admire the two capitals facing each other, the water's reflections at sunrise or sunset — a unique visual experience found nowhere else.",

    // ── PHASE 6 ──
    // Argument 4 : Private charter
    "bateau.arg4.title": "Private charter",
    "bateau.arg4.cat": "On request",
    "bateau.arg4.desc": "Book CyrfloLeKoulou exclusively for your private events: birthdays, weddings, corporate outings, VIP excursions. Custom music, champagne and decoration can be arranged on request for an unforgettable crossing.",

    // About page - "Why Cyrflo le Koulou" section
    "about.section.eyebrow": "Our story",
    "about.why.title.html": "Why <em>\"Cyrflo le Koulou\"&nbsp;?</em>",
    "about.p1.html": "The name carries our story. <strong style=\"color:#fff\">CYRFLO</strong> is a contraction of our first names, <em>Cyriaque</em> and <em>Florence</em>, the entrepreneur couple behind the project.",
    "about.p2.html": "And <strong style=\"color:#fff\">KOULOU</strong> is short for \"resourceful\" in Lari, our vernacular language in the Pool region. A nod to the spirit of resilience and ingenuity of southern Congo and West Africa that drives us every day.",
    "about.p3": "Carried by this dual identity, the project follows a single logic: move forward, build, and make a lasting impact.",
    "about.p4": "More than transportation, it's a real link between the populations of both banks, and every passenger who comes from around the world.",

    // Editorial "A meeting with the living"
    "editorial.rencontre.p1": "Every tree, every river, every horizon tells a story older than us. By connecting with nature, we rediscover a sense of belonging. We understand that we are part of something vaster, richer, and more fragile.",
    "editorial.rencontre.p2": "This connection nurtures wonder, humility, and gratitude.",

    // Editorial "An inner journey"
    "editorial.voyage.title.html": "An inner<br><em style=\"font-style:italic;color:#9dd9c2;\">journey</em>",
    "editorial.voyage.p1": "Sometimes, the most beautiful journeys aren't the ones that take us far away. They're the ones that bring us back to ourselves.",
    "editorial.voyage.p2.html": "Taking time to breathe. Feel. Observe. Share.<br>Rediscovering what truly matters.",
    "editorial.voyage.btn": "Start the journey →",
    "dest.ask.question": "Ask a question",
    "dest.close.form": "Close form",
    "dest.duration.icon": "⏱ ",

    // Values section
    "values.eyebrow": "Our values",
    "values.title.html": "What sets us <em>apart</em>",
    "values.item1.title": "100% Congolese",
    "values.item1.text": "A company founded and run by Congolese people, showcasing the national river heritage.",
    "values.item2.title": "Digital innovation",
    "values.item2.text": "The first digital river booking platform in Congo, with integrated Mobile Money payment.",
    "values.item3.title": "Environmental commitment",
    "values.item3.text": "Preserving the Congo River and its ecosystems at the heart of our business model.",
    "values.item4.title": "Local impact",
    "values.item4.text": "Employing trained local crews, partnerships with guides and artisans from riverside communities.",

    // Destination cards (Destinations page, static grid)
    "destcard.b2k.label": "Inter-capital crossing",
    "destcard.b2k.price": "From 110,000 FCFA / person",
    "destcard.excprivee.label": "Premium experience",
    "destcard.excprivee.name": "Private excursion",
    "destcard.excprivee.price": "From 45,000 FCFA",
    "destcard.kintele.label": "Culture & heritage",
    "destcard.kintele.price": "Price on request",
    "destcard.circuit.label": "Multi-day",
    "destcard.circuit.name": "2-day tour",
    "destcard.circuit.price": "From 35,000 FCFA",
    "destcard.mbamou.label": "Wildlife and vegetation",
    "destcard.mbamou.name": "Mbamou Island",
    "destcard.mbamou.price": "From 25,000 FCFA",
    "destcard.plage.label": "Beach",
    "destcard.plage.name": "Sandy beach, Brazzaville",
    "destcard.plage.price": "From 18,000 FCFA",
    "destcard.oyo.label": "Discovery",
    "destcard.oyo.price": "Price on request",

    // Most popular badge
    "destcard.badge.popular": "Most popular",

    // Destination drawer - static template
    "dest.section.acts": "What you'll do",
    "dest.section.incl": "What's included",
    "dest.contact.title": "💬 Ask a question",
    "dest.form.firstname": "First name *",
    "dest.form.lastname": "Last name *",
    "dest.form.email": "Email *",
    "dest.form.emailconfirm": "Confirm email *",
    "dest.form.country": "Country of residence *",
    "dest.form.whatsapp": "WhatsApp (+242...)",
    "dest.form.message": "Your question…",
    "dest.form.submit": "Send via WhatsApp →",
    "dest.form.success": "✓ Message sent! We'll reply within 2 hours.",
    "dest.btn.reserve": "Book now →",

    // Gallery filters
    "gallery.filter.all": "View all",
    "gallery.filter.video": "🎬 Videos",
    "gallery.filter.fleuve": "🌊 The river",
    "gallery.filter.bateau": "⚓ Our boat",
    "gallery.filter.voyageurs": "👥 Travelers",
    "gallery.filter.destination": "📍 Destinations",
    "gallery.filter.faune": "🦌 Wildlife & Nature",

    // FAQ / Conditions pages - headers
    "page.faq.eyebrow": "Help & Questions",
    "page.faq.title.html": "Frequently asked <em>questions</em>",
    "page.faq.sub": "Everything you need to know before traveling with us.",
    "page.conditions.eyebrow": "Legal information",
    "page.conditions.title.html": "Terms & <em>conditions</em>",
    "page.conditions.sub": "Legal notice, privacy policy, and general terms of sale.",

    // Gallery page - header
    "page.galerie.eyebrow": "Gallery",
    "page.galerie.title.html": "The river <em>in pictures</em>",
    "page.galerie.sub": "Videos and photos of the Congo, our boat, and local wildlife.",

    // ── FAQ ──
    "faq.section.traversee": "The crossing",
    "faq.section.resa": "Bookings & payment",
    "faq.section.excursions": "Excursions",

    "faq.q1": "How long does the Brazzaville–Kinshasa crossing take?",
    "faq.a1": "The crossing itself takes only 5 minutes. Total time may vary depending on administrative formalities at the departure and arrival ports.",
    "faq.q2": "What documents are required to cross?",
    "faq.a2": "For Congolese nationals from Brazzaville: valid ID or passport plus a laissez-passer. For foreigners: valid passport plus valid visa plus a valid vaccination card (mandatory). Your Cyrflo le Koulou ticket with QR code is also required for boarding.",
    "faq.q3": "Where does the boat depart from?",
    "faq.a3": "Our crossings can depart from the Port of Brazzaville (Beach Congo) or the Port of Kinshasa, depending on the direction of travel. We recommend arriving at least 30 minutes before the scheduled departure time.",
    "faq.q4": "Is the crossing safe?",
    "faq.a4": "Yes. Our boats are certified and regularly inspected. Life jackets are available for all passengers. We cancel crossings in case of dangerous weather conditions.",
    "faq.q5": "How do I book?",
    "faq.a5": "Book directly on this site by clicking \"Book\". Choose your destination, date, and number of passengers. You'll receive a confirmation by email and/or WhatsApp with your PDF ticket.",
    "faq.q6": "What payment methods do you accept?",
    "faq.a6": "We accept MTN MoMo, Airtel Money, and cash payment directly at the Port of Brazzaville (Beach Congo) before boarding.",
    "faq.q7": "Can I cancel my booking?",
    "faq.a7": "Yes. Cancellation more than 48h before departure: full refund. Between 24h and 48h: credit valid for 30 days. Less than 24h before departure: no refund. Contact us by email or phone.",
    "faq.q8": "How much luggage can I bring?",
    "faq.a8": "Each passenger may bring one suitcase and one carry-on bag. For bulky luggage or freight, contact us directly to arrange it.",
    "faq.q9": "Can the boat be privately chartered?",
    "faq.a9": "Yes, we welcome various types of private or corporate events. Our team is available to organize a custom outing according to your wishes.",
    "faq.q10": "What's included in the excursion price?",
    "faq.a10": "The price includes boat transport, onboard crew supervision, life jackets, the electronic ticket, as well as a snack, a bottle of water, and a hygiene pack. Additional services can be added upon request.",

    "faq.contact.title": "Have a specific question?",
    "faq.contact.sub": "Our team will reply within 24 hours.",
    "faq.contact.name": "Your name",
    "faq.contact.name.placeholder": "Your full name",
    "faq.contact.reach": "Email or WhatsApp",
    "faq.contact.reach.placeholder": "your@email.com or +242XXXXXXXXX",
    "faq.contact.question": "Your question",
    "faq.contact.question.placeholder": "Describe your question in detail...",
    "faq.contact.submit": "Send my question",
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

// ══════════════════════════════════════════════════════════
// DONNEES DESTINATIONS EN ANGLAIS (texte uniquement, pas d'images)
// ══════════════════════════════════════════════════════════
const DEST_DATA_EN = {
  'brazzaville___kinshasa': {
    nom: 'Brazzaville ↔ Kinshasa',
    label: 'Inter-capital crossing',
    prix: 'From 110,000 FCFA / person',
    duree: '~5 minutes',
    description: 'The fastest river link between the two closest capitals in the world. Aboard CyrfloLeKoulou, certified by Digenaf, you cross the Congo River in minutes in premium comfort.',
    activites: ['Fast, secure inter-capital crossing', 'Panoramic view of Brazzaville and Kinshasa', 'Personalized welcome on board', 'Flexible daily departures'],
    inclus: ['Welcome on board', 'Certified life jacket', 'Qualified crew assistance', 'WhatsApp confirmation ticket']
  },
  'excursion_privée': {
    nom: 'Private excursion',
    label: 'Premium experience',
    prix: 'From 45,000 FCFA',
    duree: 'Custom',
    description: 'Charter CyrfloLeKoulou for an unforgettable experience on the Congo River. Ideal for birthdays, weddings, corporate outings, or romantic getaways.',
    activites: ['Private cruise on the Congo River', 'Itinerary customized to your wishes', 'Sunset over the river', 'Music and decoration available'],
    inclus: ['Full boat charter', 'Dedicated crew', 'Champagne and buffet on request', 'Duration and route of your choice']
  },
  'kintele': {
    nom: 'Kintele',
    label: 'Culture & heritage',
    prix: 'Price on request',
    duree: 'Full day',
    description: 'Discover the iconic Kintele site from the river, with its internationally renowned sports facilities set in the heart of Congolese nature.',
    activites: ['Unique view of the Kintele sports complex', 'Cruising on the Congo River', 'Discovering the riverside villages', 'Photography and wildlife watching'],
    inclus: ['Round-trip river transport', 'Onboard guide', 'Safety equipment', 'Refreshments']
  },
  'circuit_2_jours': {
    nom: '2-day tour',
    label: 'Multi-day',
    prix: 'From 35,000 FCFA',
    duree: '2 days / 1 night',
    description: 'A two-day immersion in the river landscapes of Congo. This tour takes you to discover the Koulou gorges, riverside villages, and pristine nature.',
    activites: ['Cruising through the Koulou gorges', 'Visiting riverside villages', 'Hiking and discovering local wildlife', 'Overnight stay at a partner lodge'],
    inclus: ['Round-trip river transport', 'Accommodation included', 'French-speaking local guide', 'Dinner and breakfast']
  },
  'île_mbamou': {
    nom: 'Mbamou Island',
    label: 'Wildlife and vegetation',
    prix: 'From 25,000 FCFA',
    duree: 'Full day',
    description: 'Discover the wildlife and vegetation on an island nestled between Brazzaville and Kinshasa. A pristine natural haven, accessible only by river.',
    activites: ['Exploring the island forest', 'Wildlife and vegetation observation', 'Swimming and relaxing on the shore', 'Picnic by the water'],
    inclus: ['Round-trip river transport', 'Naturalist guide', 'Picnic included', 'Safety equipment']
  },
  'plage_de_sable_fin_brazzaville': {
    nom: 'Sandy beach',
    label: 'Beach',
    prix: 'From 18,000 FCFA',
    duree: 'Half-day or full day',
    description: 'Escape to the sandy shores of the Congo River, just minutes from Brazzaville. A relaxing, refreshing break in the heart of nature.',
    activites: ['Relaxing on the sandy beach', 'Swimming in the river', 'Water activities on request', 'Picnic and dining'],
    inclus: ['Round-trip river transport', 'Beach access', 'Safety equipment', 'Crew assistance']
  },
  'oyo': {
    nom: 'Oyo',
    label: 'Discovery',
    prix: 'Price on request',
    duree: 'Custom',
    description: 'Set off to discover Oyo, the birthplace of the President of the Republic, nestled in the heart of the Congolese forest. A journey through history, culture, and nature.',
    activites: ['Discovering the town of Oyo and its surroundings', 'Immersive river cruising', 'Meeting local communities', 'Exploring the equatorial forest'],
    inclus: ['River transport', 'Local guide', 'Accommodation depending on package', 'Customizable itinerary']
  }
};
