# Vérifications — Wonq 1.0.0

Effectuées le 17 septembre 2026.

## Résultats

- **42 tests Node réussis, 0 échec** : règles, compteurs, bornes, annulations, notifications, appui long et simulation du cache hors ligne.
- **10 parcours DOM réussis** avec jsdom : attaque/confirmation/critique, fermeture sans dépense, annulation du tour, pavé tactile, suppression/restauration d’objet, journal automatique, export/import et déduplication, persistance, lancement de sort, changement de profil des Contes.
- Quatre fonds verticaux WebP présents ; vingt icônes PNG contrôlées avec canal alpha réel, pixels totalement transparents autour des silhouettes. Aucune plaque de fond dans le CSS des icônes ou des cases d’inventaire.
- Tous les fichiers référencés par le cache existent ; simulation d’une navigation hors ligne sous `/Wonq/` et d’un PNG avec paramètre de version réussie.

## Cas mécaniques couverts

Valeurs dérivées et 18 compétences ; action bonus unique ; inspiration insuffisante ; restrictions des sorts bonus dans les deux ordres ; réaction sur son tour et hors tour ; renouvellement de la réaction uniquement au début du tour ; critique ; 1 et 20 naturels ordinaires ; PV temporaires ; soins plafonnés ; jets de mort et mort massive ; Esquive Hadozee ; file de sauvegardes de concentration distinctes ; neutralisation et 0 PV ; focaliseur ; emplacements ; Deux voix ; Contes 3, 6 et 7 selon profil ; échéances début/fin de tour ; annuler le tour ; nouvelle rencontre sans repos ; repos court/long/aube ; harmonisations ; Dissipation ; séance ; import hors bornes ; avantage/désavantage.

## Limites de vérification

**Pas de validation visuelle sur un iPhone physique ni de test Safari réel dans cet environnement.** Les essais DOM ne mesurent ni le contraste pixel par pixel, ni les débordements réels, ni le comportement du clavier iOS. Les règles CSS prévoient 320–430 px, iPad, safe-area, champs de 16 px, cibles tactiles de 44–48 px, zoom et réduction des animations, mais leur rendu doit encore être observé sur l’appareil.

Le mode hors ligne a été testé par simulation du service worker, pas par mise en mode avion d’un iPhone. Les vibrations dépendent du navigateur. Les interactions propres à une cible adverse, au terrain ou au temps fictionnel restent à valider avec le MJ.

## Reproduire

- `npm test` : 42 tests sans dépendance externe.
- `npm install`, puis `npm run test:ui` : parcours DOM (dépendance de développement jsdom).
- Servir le dossier en HTTP pour une vérification manuelle du rendu ; consulter les quatre modes, réaliser une attaque puis annuler, fermer un appui long, modifier une note avec le clavier ouvert, installer sur l’écran d’accueil et vérifier le mode avion après préparation du cache.
