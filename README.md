# Wonq — Gardien des Absents · 1.0.0

Compagnon statique en français pour Wonq, Hadozee barde 8 du Collège des Esprits. Accueil, Combat, Social/Inventaire/Registre et Journal. Aucun serveur de jeu, compte ou clé API nécessaire.

## Déposer sur GitHub Pages

1. Décompresser le ZIP de l’application.
2. Déposer **le contenu** dans la racine du dépôt choisi : `index.html` et tous les fichiers voisins doivent être au même niveau. Ne pas déposer seulement le ZIP.
3. Dans Settings → Pages, publier la branche contenant ces fichiers, dossier `/ (root)`.
4. Ouvrir l’URL GitHub Pages du dépôt. Les chemins relatifs fonctionnent sous `/Wonq/` ou un autre sous-dossier.

Aucune compilation nécessaire. Pour une consultation locale, servir le dossier en HTTP (par exemple `python3 -m http.server 8000`) : ne pas ouvrir `index.html` par double-clic en `file://`.

## iPhone

Ouvrir dans Safari puis Partager → Sur l’écran d’accueil. Attendre l’indication « Disponible hors ligne » avant la première utilisation sans réseau. Les quatre fonds WebP et les vingt petites icônes sont inclus dans le cache. Le fond de l’accueil est prioritaire ; le cache complémentaire se prépare ensuite.

Les zones tactiles mesurent au moins 44–48 px, le zoom reste permis et les marges tiennent compte de l’encoche. Réglages propose la lisibilité renforcée et la réduction des animations. Les vibrations sont conditionnées à leur prise en charge par le navigateur ; elles ne sont pas garanties sur iPhone.

## Jouer

- Les opérations sont confirmées avant dépense. Fermer une fiche ou un jet en attente ne dépense rien.
- Une attaque sépare le d20, la confirmation de touche et les dégâts. Les critiques doublent les dés, pas les bonus.
- Les effets lumineux sont des ombres diffuses suivant l’alpha des PNG. Aucune plaque ni rectangle n’est ajouté derrière une icône.
- Un appui long de 450 ms ouvre les détails en haut. Le défilement annule ce geste ; le relâchement ne lance pas l’action. Le bouton Détails offre le même accès.
- Une notification de résultat dure 5 secondes. Un toucher la ferme en consommant ce toucher, sans action involontaire derrière. Le résultat reste dans le journal des jets.
- Annuler restaure la dernière opération (jusqu’à 30). Annuler ce tour restaure le début du tour. Réinitialiser la rencontre n’est pas un repos.
- Inventaire : toucher un objet pour modifier, équiper, harmoniser ou supprimer ; aucune obligation de glisser-déposer. Une suppression d’objet peut être annulée.
- Journal : saisie automatiquement sauvegardée, catégories personnalisables et réordonnables, étiquettes, recherche, favoris, corbeille et export Markdown.
- Les détails du dossier, les deux profils de Contes et les arbitrages figurent dans Réglages et `ARBITRAGES.md`.

## Sauvegardes

La partie est conservée **sur l’appareil et dans ce navigateur**. Ce n’est pas une synchronisation. Exporter régulièrement le JSON complet depuis Réglages ; importer sur un autre appareil après lecture de l’aperçu. Une sauvegarde précédente est conservée lors d’un remplacement. En cas de données invalides, le stockage existant est protégé contre l’écrasement et peut être exporté brut.

L’ancienne application conserve sa propre clé de sauvegarde ; cette version ne la remplace pas automatiquement. Faire un export de l’ancien compagnon avant de le remplacer sur GitHub.

Une mise à jour des fichiers ne supprime pas les données. Le service worker est versionné ; une nouvelle version prend la main lorsque les anciennes fenêtres sont fermées. Avant modification d’une prochaine version, changer la version du cache dans `sw.js`.

## Organisation et vérification

- `data.js` : personnage, sorts, textes opérationnels, inventaire initial et profils de Contes.
- `engine.js` : calculs et transitions atomiques, indépendant du DOM.
- `storage.js` : sauvegarde, déduplication, annulation et import validé.
- `app.js`, `styles.css` : interface.
- `gestures.js`, `feedback.js` : gestes et notifications.
- `sources.json` : extraction textuelle du dossier fourni.
- `MANIFESTE-ASSETS.json` : fichiers visuels.
- `tests/` : tests du moteur et des interactions.

`npm test` lance les tests Node du moteur (Node 22 ou supérieur). Les contrôles DOM documentés dans `VERIFICATIONS.md` utilisent jsdom pour tester les événements ; ils ne remplacent pas une vérification visuelle réelle dans Safari.

Aucun déploiement GitHub n’est inclus dans cette livraison : les fichiers sont prêts à publier.
