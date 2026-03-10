export type Project = {
  slug: string;
  title: string;
  description: string;
  context: string;
  missions: string[];
  duration: string;
  stack: string[];
  image: string;
  url?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "weproc",
    title: "Weproc",
    description: "SaaS e-procurement — plateforme de digitalisation du processus achats",
    context:
      "Weproc est une solution SaaS qui digitalise l'intégralité du cycle achats des entreprises (Source-to-Pay). Mission longue durée démarrée en janvier 2023, en tant que lead dev puis architecte — intervention sur l'ensemble du système : API, front, infra cloud, intégrations tierces et désormais agents IA.",
    missions: [
      "Architecture et développement du monorepo (API NestJS + front)",
      "Mise en place de l'infrastructure cloud AWS (EKS, Terraform, Helm)",
      "Intégration Punchout / cXML pour connexion aux catalogues e-commerce fournisseurs",
      "Orchestration de workflows complexes avec Temporal",
      "Mise en place des outils de dev agentic avec Claude Code (gitlab-claude-agents-manager)",
      "Exploration agents IA avec CrewAI",
    ],
    duration: "Jan. 2023 — en cours",
    stack: ["NestJS", "TypeScript", "Angular", "AWS", "Kubernetes", "Terraform", "Temporal", "Claude Code", "CrewAI"],
    image: "/images/works/weproc.webp",
    url: "https://www.weproc.com",
    featured: true,
  },
  {
    slug: "kelbillet",
    title: "KelBillet",
    description: "Comparateur de prix multi-transports & marketplace de billets d'occasion",
    context:
      "Startup transport — équipe de 2 à 10 personnes. Rôle transverse sur toutes les briques techniques, de l'intégration jusqu'à la mise en place d'un cache Varnish.",
    missions: [
      "Développement du moteur de recherche multi-transport (front et back)",
      "Optimisations SEO",
    ],
    duration: "5 ans — 2011-2017",
    stack: ["PHP", "Vanilla JS", "CSS", "HTML5", "Varnish", "XSLT"],
    image: "/images/works/kelbillet.webp",
    url: "https://kelbillet.com",
    featured: true,
  },
  {
    slug: "onestaff",
    title: "OneStaff",
    description: "Plateforme de mise en relation extras / professionnels HCR",
    context:
      "J'ai remplacé pendant 6 mois toute l'équipe technique (CTO compris) pour progressivement monter un plateau technique avec quelques devs.",
    missions: [
      "Développement de nouvelles fonctionnalités",
      "Corrections de bug et refactoring backend",
      "Estimation et chiffrage",
    ],
    duration: "1 an — 2020",
    stack: ["Angular Universal", "Laravel", "PHP", "TypeScript", "Docker", "MySQL"],
    image: "/images/works/onestaff.webp",
    url: "https://www.onestaff.eu/",
    featured: true,
  },
  {
    slug: "industry-4",
    title: "TrackAdvance 4.0",
    description: "Solution Industrie 4.0 — rapports de production & généalogie industrielle",
    context:
      "Solution clé en main pour industriels. Arrivé en renfort VueJS, j'ai pris un rôle transverse sur une équipe de 4 à 7 personnes.",
    missions: [
      "Conception et développement de composants VueJS et d'interfaces complexes",
      "Développement d'un arbre de données dirigé acyclique sur millions de données",
      "Interventions ponctuelles sur l'API REST Loopback",
    ],
    duration: "1 an et 6 mois — 2020-2021",
    stack: ["VueJS", "TypeScript", "ES6", "Loopback", "ElasticSearch", "MariaDB", "Docker"],
    image: "/images/works/trackadvance4.png",
    url: "https://www.boccard.com/fr/solutions/aide-a-la-performance-track-advance/",
    featured: true,
  },
  {
    slug: "groupymarket",
    title: "Groupy Market",
    description: "Marketplace d'achat groupé pour particuliers",
    context:
      "Reprise du projet en cours de route. Mission principale : optimisation SEO avec mise en place du SSR Angular.",
    missions: [
      "Reprise des développements",
      "Optimisations SEO & mise en place SSR Angular Universal",
      "Contact client régulier pour chiffrages et priorisations",
    ],
    duration: "6 mois — 2021-2022",
    stack: ["Angular Universal", "NestJS", "TypeScript", "Docker", "PostgreSQL", "Heroku"],
    image: "/images/works/groupy-market.webp",
    url: "https://groupymarket.com",
    featured: false,
  },
  {
    slug: "testo",
    title: "Testo Check",
    description: "Application mobile Android de mesures sur chaudières pour techniciens",
    context:
      "Accompagnement complet : compréhension besoin, architecture logicielle, socle technique et développements full-stack.",
    missions: [
      "Compréhension, priorisation MoSCoW, chiffrage",
      "Architecture logicielle",
      "Développement mobile Flutter et backend NestJS",
    ],
    duration: "4 mois — 2021",
    stack: ["Flutter", "Dart", "Android", "Firebase", "NestJS", "TypeScript", "MariaDB", "MongoDB"],
    image: "/images/works/testo_check_2.png",
    featured: false,
  },
  {
    slug: "pitch",
    title: "Pitch — Armada Production",
    description: "App mobile de création de projets radiophoniques pour enfants",
    context:
      "Conception d'une app Flutter avec tonematrix, enregistreur audio et interface de montage. Subvention obtenue après présentation devant jury.",
    missions: [
      "Accompagnement recherche financement (subvention gagnée)",
      "Mise en place du socle technique Flutter (BLoC, Firebase, CI/CD)",
      "Développement POC Tonematrix avec générateur de commandes FFmpeg",
    ],
    duration: "Quelques mois — 2021",
    stack: ["Flutter", "Dart", "Android", "Firebase", "FFmpeg"],
    image: "/images/works/pitch-play.png",
    featured: false,
  },
  {
    slug: "salaun-holidays",
    title: "Salaün Holidays",
    description: "Agence de voyage en ligne — refonte front-end complète",
    context:
      "En pleine refonte de marque, j'ai réalisé un audit technique puis repris l'intégralité des développements front-end.",
    missions: [
      "Audit technique du site en cours de refonte",
      "Mise en place d'un nouveau socle technique",
      "Intégration et développements front-end",
      "Optimisation performances backend",
    ],
    duration: "5 mois — 2022",
    stack: ["HTML5", "SCSS", "Bootstrap", "Laravel", "Vanilla JS"],
    image: "/images/works/salaun-holidays.webp",
    url: "https://www.salaun-holidays.com/",
    featured: false,
  },
  {
    slug: "cine35",
    title: "Ciné35",
    description: "Association films à l'affiche & bons plans en Ille-et-Vilaine",
    context:
      "Accompagnement d'un designer UX/UI dans l'intégration des maquettes.",
    missions: ["Conseils client", "Intégration statique"],
    duration: "2 mois — 2021",
    stack: ["HTML5", "SCSS", "Bootstrap", "VueJS"],
    image: "/images/works/cine35.webp",
    url: "http://www.cine35.com",
    featured: false,
  },
];
