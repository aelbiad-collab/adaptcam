export interface Job {
  slug: string;
  n: number;
  surtitre: string;
  intitule: string;
  accroche: string;
  puces: string[];
  puceDiplome: string;
  lieu: string;
  typeContrat: string;
  duree: string;
  contexte: string;
  missions: string[];
  profil: string[];
  objetMail: string;
  infoDemandee: 'tjm' | 'pretentions';
  eyebrow: string;
}

function splitPoints(text: string): string[] {
  return text
    .split(' ; ')
    .map((s) => s.trim())
    .filter(Boolean);
}

interface RawJob {
  slug: string;
  n: number;
  surtitre: string;
  intitule: string;
  accroche: string;
  puces: string[];
  puceDiplome: string;
  lieu: string;
  typeContrat: string;
  duree: string;
  contexte: string;
  missionsRaw: string;
  profilRaw: string;
  objetMail: string;
}

const RAW_JOBS: RawJob[] = [
  {
    slug: 'architecte-solutions-credit',
    n: 1,
    surtitre: "Recrutement · Architecture d'Entreprise · Secteur bancaire",
    intitule: 'Architecte Solutions – Domaine Crédit',
    accroche:
      "Concevez l'architecture cible du domaine Crédit d'une grande banque et pilotez sa transformation : core banking, LOS, API et événements",
    puces: [
      'Core banking · LOS · Moteurs de décision',
      'API REST · Kafka · iPaaS',
      'BPMN · DMN',
      'TOGAF · BIAN · ArchiMate / C4',
      'Dossiers DAB · ADD · Cadre 6R',
      'Réglementation BAM · Bâle III · IFRS 9',
    ],
    puceDiplome: 'Bac+5 · 7 ans et + dont 3 en architecture',
    lieu: 'Casablanca',
    typeContrat: 'Freelance ou CDI',
    duree: 'Mission longue durée',
    contexte:
      'Grand groupe bancaire marocain, programme de modernisation du SI (core banking, CRM, MDM, iPaaS/API, BPM, GED, data platform).',
    missionsRaw:
      "Concevoir l'architecture cible du domaine Crédit (octroi, engagements, garanties, recouvrement, risque de crédit) et piloter sa trajectoire de transformation ; décomposer le domaine en capacités BIAN / ABB-SBB et arbitrer brique par brique entre progiciel et sur-mesure ; produire les dossiers d'architecture (DAB, ADD) et les porter devant le comité d'architecture ; concevoir l'architecture de transition (coexistence legacy/cible, parallel run) et sécuriser la migration selon le cadre 6R ; contribuer aux RFP et accompagner les équipes de réalisation.",
    profilRaw:
      "Bac+5, 7 ans et plus en SI bancaire dont 3 ans et plus en architecture de solutions ; au moins un projet majeur de transformation crédit ou de migration core banking ; connaissance approfondie des processus crédit et des progiciels du marché (core banking, LOS, moteurs de décision) ; API REST, Kafka, iPaaS / API management ; BPMN, DMN ; TOGAF, BIAN, ArchiMate ou C4 ; un plus : réglementation Bank Al-Maghrib, Bâle III / IFRS 9, Make-by-AI ; français courant, anglais professionnel.",
    objetMail: 'Architecte Solutions Crédit',
  },
  {
    slug: 'architecte-solutions-crm-distribution',
    n: 2,
    surtitre: "Recrutement · Architecture d'Entreprise · Secteur bancaire",
    intitule: 'Architecte Solutions – Domaine CRM & Distribution',
    accroche:
      "Bâtissez le client 360 et le portail unifié conseiller d'une grande banque : CRM, omnicanal, MDM et souveraineté des données",
    puces: [
      'Plateformes CRM · On-premise',
      'Micro-frontends · SSO / OIDC',
      'MDM · Golden record',
      'API REST · Événements · iPaaS',
      'Workflow / BPM · GED · CTI',
      'Loi 09-08 / CNDP · Secret bancaire',
    ],
    puceDiplome: 'Bac+5 · 7 ans et + dont 3 en architecture',
    lieu: 'Casablanca',
    typeContrat: 'Freelance ou CDI',
    duree: 'Mission longue durée',
    contexte:
      'Grand groupe bancaire marocain, programme de modernisation du SI : client 360, parcours omnicanaux, portail unifié conseiller, campagnes, réclamations.',
    missionsRaw:
      "Concevoir l'architecture cible du domaine CRM et du portail unifié conseiller (micro-frontends, SSO/OIDC, composition d'applications) ; appliquer la classification des données et les règles de placement cloud / hybride / on-premise dans le respect de la loi 09-08 (CNDP) et du secret bancaire ; définir les contrats d'interface avec le MDM (golden record), le core banking, le workflow, la GED et la data platform ; arbitrer Buy / Make brique par brique et maîtriser la dette de customisation ; produire les dossiers d'architecture (DAB, ADD), contribuer aux RFP et accompagner les équipes de réalisation.",
    profilRaw:
      "Bac+5, 7 ans et plus en SI dont 3 ans et plus en architecture de solutions ; au moins un déploiement CRM d'envergure (banque, assurance, télécoms), idéalement en contexte réglementé ; plateformes CRM du marché y compris on-premise ; architecture front (micro-frontends, portails, SSO/OIDC) et intégration (API REST, événements, iPaaS) ; MDM, qualité et consentement des données ; workflow/BPM, GED, centre de contact ; TOGAF, BIAN, ArchiMate ou C4 ; un plus : cloud souverain, marketing automation / next best offer, Make-by-AI ; français courant, anglais professionnel.",
    objetMail: 'Architecte Solutions CRM',
  },
  {
    slug: 'administrateur-senior-websphere',
    n: 3,
    surtitre: 'Recrutement · Infrastructure & Middleware · Grand compte',
    intitule: 'Administrateur Sénior WebSphere – Middleware & Bases de données',
    accroche:
      "Garantissez la disponibilité et la performance des plateformes middleware et bases de données d'un grand compte",
    puces: [
      'WebSphere Application Server',
      'JBoss · Tomcat',
      'Oracle · MySQL · SQL Server',
      'Red Hat Linux · AIX',
      'Sauvegardes · Patching · Vulnérabilités',
      'Ansible · Podman (un plus)',
    ],
    puceDiplome: 'Profil sénior · Anglais souhaité',
    lieu: 'Casablanca',
    typeContrat: 'Freelance ou CDI',
    duree: 'Mission longue durée',
    contexte: 'Grand compte, équipe infrastructure / middleware.',
    missionsRaw:
      "Administrer les plateformes middleware (WebSphere Application Server, JBoss, Tomcat) et les bases de données à architecture complexe (Oracle, MySQL, SQL Server) ; assurer la disponibilité, la performance et le maintien en condition opérationnelle des environnements ; suivre les sauvegardes et restaurations, les vulnérabilités, déployer les patchs et mises à jour ; traiter les changements, tenir à jour les référentiels de configuration, coordonner les migrations applicatives ; rédiger les dossiers d'architecture et manuels d'installation, de déploiement et d'exploitation ; proposer des solutions techniques innovantes.",
    profilRaw:
      "Expérience significative sur un poste similaire (profil sénior) ; WebSphere Application Server et ses surcouches ; JBoss, Tomcat ; Oracle, MySQL, SQL Server ; Red Hat Linux (ou autres distributions), AIX ; un plus : Ansible / Ansible Tower, outils de conteneurs (Podman, Buildah, Skopeo) ; autonomie, rigueur, esprit d'équipe, disponibilité face aux situations exceptionnelles ; anglais fortement souhaité.",
    objetMail: 'Administrateur Sénior WebSphere',
  },
  {
    slug: 'expert-swift',
    n: 4,
    surtitre: 'Recrutement · Paiements & Messagerie financière · Secteur bancaire',
    intitule: 'Expert SWIFT',
    accroche:
      "Sécurisez et faites évoluer la messagerie financière SWIFT d'une grande banque : architecture, conformité CSP et paiements internationaux",
    puces: [
      'SWIFT Alliance Access · Alliance Gateway',
      'HSM · RMA',
      'CSP · CSCF',
      'FIN · MX ISO 20022',
      'Intégration core banking · ESB',
      'Audits sécurité · Formation des équipes',
    ],
    puceDiplome: 'Bac+5 · 8 ans et +',
    lieu: 'Rabat',
    typeContrat: 'Freelance ou CDI',
    duree: 'Mission longue durée (3 ans)',
    contexte: 'Grand groupe bancaire marocain, équipe exploitation.',
    missionsRaw:
      "Concevoir, mettre en place et optimiser l'architecture de messagerie financière SWIFT (Alliance Access, Alliance Gateway, HSM, interfaces) ; réaliser les études d'évolutivité, audits et diagnostics des configurations ; garantir la conformité permanente avec les standards CSP / CSCF ; superviser les échanges, le routage et la transformation des messages FIN / MX ISO 20022 ; assurer l'intégration avec le core banking, l'ESB et le middle-office ; conduire les audits de sécurité et former les équipes.",
    profilRaw:
      "Bac+5, 8 ans d'expérience minimum dans le domaine SWIFT ; maîtrise des solutions SWIFT (SAA, SAG, HSM, RMA), des protocoles financiers, des messages FIN / MX et des exigences liées aux paiements internationaux ; expertise de l'intégration SWIFT avec les systèmes core banking, ESB, middle-office et sécurité ; esprit analytique, rigueur et respect strict des normes de sécurité financière.",
    objetMail: 'Expert SWIFT',
  },
  {
    slug: 'expert-dba-senior',
    n: 5,
    surtitre: 'Recrutement · Data & Infrastructure · Secteur bancaire',
    intitule: 'Expert Bases de Données – DBA Sénior',
    accroche:
      "Prenez en charge les bases de données critiques d'une grande banque : performance, haute disponibilité et migrations",
    puces: [
      'Oracle · SQL Server · PostgreSQL',
      'RMAN · Data Guard · RAC',
      'Tuning SQL · Partitionnement',
      'HA · Réplication · Sauvegarde / Restauration',
      'Migrations · Upgrades · Cloud',
      'Accompagnement des équipes DBA',
    ],
    puceDiplome: 'Bac+5 · 10 ans et +',
    lieu: 'Rabat',
    typeContrat: 'Freelance ou CDI',
    duree: 'Mission longue durée (3 ans)',
    contexte: 'Grand groupe bancaire marocain, équipe Build & Infrastructures.',
    missionsRaw:
      "Concevoir, administrer et optimiser les bases de données d'entreprise (Oracle, SQL Server, PostgreSQL) ; réaliser les audits de performance, tuning SQL, optimisation du stockage et de l'indexation ; assurer la haute disponibilité, la réplication, la sauvegarde et la restauration des bases critiques ; participer aux projets de migration, upgrade, consolidation et transformation cloud ; diagnostiquer et résoudre les incidents complexes ; produire les documents d'architecture, procédures et normes ; former et accompagner les équipes DBA.",
    profilRaw:
      "Bac+5, 10 ans d'expérience minimum ; expertise RMAN, Data Guard, RAC, partitionnement, plans d'exécution SQL ; forte capacité analytique, rigueur et sens des responsabilités.",
    objetMail: 'Expert DBA',
  },
  {
    slug: 'technicien-help-desk',
    n: 6,
    surtitre: 'Recrutement · Support IT · CDI',
    intitule: 'Technicien Help Desk',
    accroche: "Soyez le premier interlocuteur des utilisateurs : prise en charge, diagnostic et résolution des incidents",
    puces: [
      'Ticketing · Support niveau 1',
      'Windows · Office · Messagerie · VPN',
      'Active Directory · Comptes & accès',
      'Suivi des SLA',
      'Documentation · Base de connaissance',
      'Sens du service · Rigueur',
    ],
    puceDiplome: 'Bac+2 · 5 ans et +',
    lieu: 'Rabat',
    typeContrat: 'CDI',
    duree: 'CDI, temps plein',
    contexte: "Équipe support utilisateurs d'un grand compte.",
    missionsRaw:
      "Prendre en charge les demandes et incidents utilisateurs via téléphone, portail et outil de ticketing ; réaliser le diagnostic initial, appliquer les solutions de niveau 1 et escalader ; gérer les comptes utilisateurs (mots de passe, droits, accès) ; assurer le support bureautique (Windows, Office, messagerie, VPN, outils métier) ; documenter chaque intervention et mettre à jour les bases de connaissance ; suivre les incidents et veiller au respect des SLA.",
    profilRaw:
      "Bac+2, 5 ans d'expérience ; connaissance des environnements Windows, Active Directory, outils bureautiques et notions réseau ; sens du service, communication claire, patience et rigueur.",
    objetMail: 'Technicien Help Desk',
  },
  {
    slug: 'technicien-poste-de-travail',
    n: 7,
    surtitre: 'Recrutement · Support IT · CDI',
    intitule: 'Technicien Poste de Travail',
    accroche: "Installez, sécurisez et dépannez le parc de postes de travail d'un grand compte",
    puces: [
      'Installation · Configuration · Support',
      'Dépannage N1 / N2 · Proximité',
      'Images · Correctifs · Mises à jour',
      'Windows · Active Directory',
      'Antivirus · Conformité des postes',
      'Outils de déploiement',
    ],
    puceDiplome: 'Bac+2 · 3 ans et +',
    lieu: 'Rabat',
    typeContrat: 'CDI',
    duree: 'CDI, temps plein',
    contexte: "Équipe poste de travail d'un grand compte.",
    missionsRaw:
      "Installer, configurer et supporter les postes de travail et périphériques ; réaliser les interventions de proximité (incidents, demandes, remplacements) ; appliquer les procédures de gestion du parc, de déploiement et de maintenance ; mettre en œuvre les images systèmes, correctifs et mises à jour ; assurer le dépannage de niveau 1 et 2 ; contribuer à la sécurité des postes (antivirus, conformité, durcissement) ; participer aux projets de renouvellement du parc et aux migrations.",
    profilRaw:
      "Bac+2, 3 ans d'expérience ; Windows, bureautique, Active Directory, solutions de déploiement ; sens du service, rigueur, capacité à intervenir sur site.",
    objetMail: 'Technicien Poste de Travail',
  },
  {
    slug: 'gestionnaire-parc-informatique',
    n: 8,
    surtitre: 'Recrutement · Support IT · CDI',
    intitule: 'Gestionnaire Parc Informatique & Inventaire',
    accroche: "Pilotez le parc informatique et son inventaire de bout en bout, de la réception au recyclage",
    puces: [
      'Gestion de parc · Inventaire',
      'GLPI · SCCM / Intune · OCS · Lansweeper',
      'Cycle de vie des équipements',
      'Audits de conformité',
      'Reporting · Tableaux de bord',
      'Windows · Linux',
    ],
    puceDiplome: 'Bac+2 · 3 ans et +',
    lieu: 'Rabat',
    typeContrat: 'CDI',
    duree: 'CDI, temps plein',
    contexte: "Équipe support et logistique IT d'un grand compte.",
    missionsRaw:
      "Assurer la gestion complète du parc informatique (postes, périphériques, imprimantes, téléphonie, devices mobiles) ; tenir à jour l'inventaire matériel et logiciel (mouvements, affectations, rebuts, renouvellements) ; superviser la réception, la qualification et la mise en service des équipements ; réaliser les audits du parc et proposer les actions correctives ; maintenir les outils de gestion de parc (GLPI, SCCM/Intune, OCS, Lansweeper) ; produire les reportings et tableaux de bord ; veiller à l'application des politiques de sécurité des équipements.",
    profilRaw:
      "Bac+2, 3 ans d'expérience ; maîtrise des outils d'inventaire et de gestion de parc, des procédures logistiques et des environnements Windows / Linux ; organisation, rigueur, capacité à gérer des volumes importants.",
    objetMail: 'Gestionnaire Parc Informatique',
  },
  {
    slug: 'developpeur-mobile-ios',
    n: 9,
    surtitre: 'Recrutement · Digital & Mobile · Secteur bancaire',
    intitule: 'Développeur Expert Mobile iOS',
    accroche: "Développez les applications mobiles iOS d'une grande banque : Swift, SwiftUI, sécurité et performance",
    puces: [
      'Swift · SwiftUI · UIKit',
      'Combine · Swift Concurrency',
      'VIPER · Clean Swift',
      'XCTest · XCUITest',
      'Keychain · Secure Enclave',
      'TestFlight · App Store Connect · SPM',
    ],
    puceDiplome: '10 ans et + · 5 grands projets bancaires',
    lieu: 'Rabat',
    typeContrat: 'Freelance ou CDI',
    duree: 'Mission longue durée (3 ans)',
    contexte: "Grand groupe bancaire marocain, équipe développement d'applications digitales.",
    missionsRaw:
      "Participer à la définition de l'architecture logicielle (VIPER, Clean Swift) et à la modélisation des données ; développer des écrans haute performance et gérer le cycle de vie des applications ; mettre en œuvre les tests unitaires (XCTest) et d'interface (XCUITest) ; intégrer des services web complexes et gérer la persistance locale ; diagnostiquer les bugs complexes et optimiser les performances (Instruments, memory leaks) ; gérer certificats, provisioning profiles et distribution via TestFlight / App Store Connect ; accompagner la recette.",
    profilRaw:
      "10 ans d'expérience minimum en développement mobile dont au moins 5 grands projets dans le secteur bancaire ; maîtrise de Swift et SwiftUI en complément d'UIKit ; Combine ou Swift Concurrency (async/await) ; Human Interface Guidelines d'Apple ; sécurisation des données sensibles (Keychain, Secure Enclave) ; Swift Package Manager, CocoaPods.",
    objetMail: 'Développeur iOS',
  },
  {
    slug: 'expert-dynatrace',
    n: 10,
    surtitre: 'Recrutement · Supervision & Observabilité · Secteur bancaire',
    intitule: 'Expert Dynatrace – Observabilité & Supervision',
    accroche: "Renforcez l'équipe supervision d'une grande banque et faites de Dynatrace le pilier de l'observabilité",
    puces: [
      'Dynatrace · OneAgent · ActiveGate',
      'APM · RUM · Synthetic monitoring',
      'Davis AI · Smartscape',
      'Dashboards · Alerting · SLO',
      'Intégration ITSM · Zabbix',
      'Linux · AIX · Middleware',
    ],
    puceDiplome: 'Bac+5 · 8 ans et + dont 5 sur Dynatrace',
    lieu: 'Rabat',
    typeContrat: 'Freelance ou CDI',
    duree: 'Mission longue durée (3 ans)',
    contexte: "Grand groupe bancaire marocain, renfort de l'équipe supervision.",
    missionsRaw:
      "Administrer et faire évoluer la plateforme Dynatrace (OneAgent, ActiveGate, management zones, alerting profiles, dashboards) ; étendre la couverture de supervision aux applications critiques (APM), à l'infrastructure, aux utilisateurs réels (RUM) et au monitoring synthétique ; exploiter Davis AI et Smartscape pour le diagnostic des incidents ; intégrer Dynatrace avec l'ITSM et organiser la coexistence avec Zabbix ; définir les SLA / SLO, seuils d'alerte et runbooks ; former les techniciens supervision ; documenter l'architecture de supervision.",
    profilRaw:
      "Bac+5, 8 ans d'expérience en supervision / observabilité dont 5 ans sur Dynatrace ; bonne connaissance des environnements systèmes (Linux, AIX, Windows), réseaux et middleware ; expérience en environnement bancaire ou critique 24/7 appréciée ; certification Dynatrace appréciée ; rigueur et pédagogie.",
    objetMail: 'Expert Dynatrace',
  },
];

export const JOBS: Job[] = RAW_JOBS.map((j) => ({
  slug: j.slug,
  n: j.n,
  surtitre: j.surtitre,
  intitule: j.intitule,
  accroche: j.accroche,
  puces: j.puces,
  puceDiplome: j.puceDiplome,
  lieu: j.lieu,
  typeContrat: j.typeContrat,
  duree: j.duree,
  contexte: j.contexte,
  missions: splitPoints(j.missionsRaw),
  profil: splitPoints(j.profilRaw),
  objetMail: j.objetMail,
  infoDemandee: j.typeContrat === 'CDI' ? 'pretentions' : 'tjm',
  eyebrow: j.surtitre.includes('bancaire')
    ? "Pour le compte d'un grand groupe bancaire marocain"
    : "Pour le compte d'un grand compte",
}));

export function getJob(slug: string): Job | undefined {
  return JOBS.find((j) => j.slug === slug);
}
