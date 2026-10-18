# Backend Google Apps Script — Recrutement Adaptive IT

Ce dossier contient le backend qui reçoit les candidatures envoyées par les
10 pages `/postes/<slug>/` du site Astro (`adaptive`), enregistre le CV dans
Google Drive, ajoute une ligne dans un Google Sheet unique, et envoie un
email de notification à `aelbiad@gmail.com` (en copie :
`latifa.boubakraoui@it-adaptive.com`).

Toutes les candidatures (quel que soit le poste) vont dans la même feuille
`Adaptive_IT_Candidatures` (colonne « Poste » pour filtrer), et les CV sont
rangés dans Drive sous `Adaptive_IT_CVs/<slug-du-poste>/`.

## Déploiement (à faire une seule fois)

1. Aller sur https://script.google.com → **Nouveau projet**.
2. Renommer le projet, par exemple `Recrutement_AdaptiveIT`.
3. Remplacer le contenu de `Code.gs` par celui du fichier `Code.gs` de ce dossier.
4. Dans les paramètres du projet (icône ⚙️ à gauche), activer "Afficher le
   fichier manifeste appsscript.json" si besoin, ouvrir `appsscript.json` et
   remplacer son contenu par celui du fichier `appsscript.json` de ce dossier.
5. Cliquer sur **Déployer → Nouveau déploiement**.
   - Type : **Application Web**.
   - Exécuter en tant que : **Moi (aelbiad@gmail.com)**.
   - Qui a accès : **Tout le monde**.
6. Cliquer sur **Déployer**, autoriser les permissions demandées (Drive,
   Sheets, Gmail) — c'est votre propre script, sous votre propre compte.
7. Copier l'URL `.../exec` fournie.
8. Dans `src/components/ApplyForm.astro`, remplacer la constante `WEBAPP_URL`
   par cette URL (une seule fois, elle est partagée par les 10 pages).

## Test rapide

Dans l'éditeur Apps Script, sélectionner la fonction `testerScript` dans le
menu déroulant en haut, puis cliquer sur **Exécuter**. Vous devez recevoir un
email (avec copie à Latifa) et voir une ligne apparaître dans
`Adaptive_IT_Candidatures` (dossier Drive `Adaptive_IT_CVs`).

## Mise à jour ultérieure

Si vous modifiez `Code.gs`, il faut recoller le contenu dans l'éditeur
Apps Script puis faire **Déployer → Gérer les déploiements → ✏️ (modifier) →
Nouvelle version → Déployer**. L'URL `.../exec` reste la même.
