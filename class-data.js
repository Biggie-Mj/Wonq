import {subclassFeatures,subclassCasterContribution,subclassSpellAttr,subclassExtraAttack} from './subclass-data.js';
export const ATTRS={str:'Force',dex:'Dextérité',con:'Constitution',int:'Intelligence',wis:'Sagesse',cha:'Charisme'};
export const SKILLS=[
 ['acrobaties','Acrobaties','dex'],['arcanes','Arcanes','int'],['athletisme','Athlétisme','str'],['discretion','Discrétion','dex'],['dressage','Dressage','wis'],['escamotage','Escamotage','dex'],['histoire','Histoire','int'],['intimidation','Intimidation','cha'],['intuition','Intuition','wis'],['investigation','Investigation','int'],['medecine','Médecine','wis'],['nature','Nature','int'],['perception','Perception','wis'],['persuasion','Persuasion','cha'],['religion','Religion','int'],['representation','Représentation','cha'],['survie','Survie','wis'],['tromperie','Tromperie','cha']
];
const f=(level,name,summary,detail,action='Passif',resource=null)=>({level,name,summary,detail,action,resource});
export const CLASSES={
 artificer:{name:'Artificier',hitDie:8,saves:['con','int'],caster:'artificer',spellAttr:'int',features:[
  f(1,'Bricolage magique','Petits effets magiques sur des objets.','Imprégnez de petits objets non magiques d’effets sensoriels ou informatifs. Le nombre simultané dépend de votre Intelligence.'),
  f(1,'Incantation','Lanceur préparé basé sur l’Intelligence.','Vos attaques de sorts utilisent Intelligence + maîtrise ; votre DD de sorts vaut 8 + maîtrise + Intelligence.'),
  f(2,'Imprégnation d’objet','Infusions connues et objets imprégnés.','Vous apprenez des infusions d’artificier et pouvez maintenir un nombre limité d’objets imprégnés après un repos long.'),
  f(3,'Spécialité d’artificier','Votre spécialité active ses aptitudes automatiquement.','Choisissez une spécialité officielle Legacy dans Fiche & classes ; ses aptitudes apparaissent ensuite aux bons niveaux.'),
  f(6,'Expertise des outils','Maîtrise doublée avec vos outils maîtrisés.','Lorsque vous faites un test utilisant un outil dont vous avez la maîtrise, doublez votre bonus de maîtrise.'),
  f(7,'Éclair de génie','Ajoutez INT à un jet proche.','En réaction, ajoutez votre modificateur d’Intelligence à un test ou une sauvegarde de vous-même ou d’une créature proche.', 'Réaction','flash'),
  f(10,'Adepte des objets magiques','Harmonisation et fabrication améliorées.','Votre pratique des objets magiques s’améliore ; adaptez les limites d’harmonisation selon votre table.'),
  f(11,'Objet stockeur de sort','Stockez un sort dans un objet.','Après un repos long, placez un sort admissible dans un objet ; plusieurs utilisations sont ensuite possibles selon votre Intelligence.'),
  f(14,'Savant des objets magiques','Utilisation d’objets magiques élargie.','Vous ignorez davantage de prérequis d’objets magiques et augmentez vos possibilités d’harmonisation.'),
  f(20,'Âme de l’artifice','Résistance exceptionnelle via vos objets liés.','Vos objets harmonisés renforcent fortement vos sauvegardes et peuvent vous empêcher de tomber à 0 PV.')
 ]},
 barbarian:{name:'Barbare',hitDie:12,saves:['str','con'],features:[
  f(1,'Rage','Bonus aux dégâts de Force et résistances physiques.','En rage, vous gagnez les bénéfices de rage de votre niveau. Le nombre de rages disponibles est calculé automatiquement.', 'Action bonus','rage'),
  f(1,'Défense sans armure','CA = 10 + DEX + CON, bouclier possible.','Choisissez la formule « Barbare » dans la configuration de CA pour automatiser ce calcul.'),
  f(2,'Attaque téméraire','Avantage au corps à corps contre avantage adverse.','À votre première attaque de Force au corps à corps du tour, vous pouvez obtenir l’avantage ; les attaques contre vous ont alors l’avantage jusqu’à votre prochain tour.'),
  f(2,'Sens du danger','Avantage à certaines sauvegardes de Dextérité.','Avantage aux sauvegardes de Dextérité contre les effets visibles, si vous n’êtes pas neutralisé.'),
  f(5,'Attaque supplémentaire','Deux attaques avec l’action Attaquer.','Le nombre d’attaques de votre action Attaquer passe à 2.'),
  f(5,'Déplacement rapide','Vitesse accrue sans armure lourde.','Votre vitesse de marche augmente de 3 m tant que vous ne portez pas d’armure lourde.'),
  f(7,'Instinct sauvage','Initiative améliorée.','Vous avez l’avantage à l’initiative ; si vous êtes surpris, la rage peut vous permettre d’agir sous certaines conditions.'),
  f(9,'Critique brutal','Un dé d’arme supplémentaire sur critique.','Ajoutez un dé d’arme lors d’un critique ; ce nombre augmente encore aux niveaux 13 et 17.'),
  f(11,'Rage implacable','Rester à 1 PV avec une sauvegarde de Constitution.','Quand vous tombez à 0 PV en rage sans mourir sur le coup, une sauvegarde de Constitution peut vous laisser à 1 PV ; le DD augmente après chaque réussite.'),
  f(15,'Rage persistante','Votre rage s’interrompt moins facilement.','La rage ne se termine plus prématurément simplement faute d’attaque ou de dégâts reçus.'),
  f(18,'Puissance indomptable','Votre Force fixe un plancher aux tests de Force.','Si le total d’un test de Force est inférieur à votre score de Force, utilisez votre score de Force à la place.'),
  f(20,'Champion primordial','FOR et CON augmentées au-delà de la limite habituelle.','Votre Force et votre Constitution augmentent et leur maximum augmente également.')
 ]},
 bard:{name:'Barde',hitDie:8,saves:['dex','cha'],caster:'full',spellAttr:'cha',features:[
  f(1,'Inspiration bardique','Dé d’inspiration dont la taille progresse.','Donnez à une créature un dé d’inspiration. Le maximum d’utilisations dépend de votre Charisme et se recharge selon votre niveau.', 'Action bonus','inspiration'),
  f(1,'Incantation','Lanceur basé sur le Charisme.','Attaque de sort = maîtrise + Charisme ; DD = 8 + maîtrise + Charisme.'),
  f(2,'Touche-à-tout','Demi-maîtrise sur les tests non maîtrisés.','Ajoutez la moitié de votre bonus de maîtrise, arrondie à l’inférieur, aux tests qui ne bénéficient pas déjà de votre maîtrise.'),
  f(2,'Chant reposant','Soins supplémentaires au repos court.','Les alliés qui dépensent des dés de vie pendant un repos court récupèrent un supplément déterminé par votre niveau de barde.'),
  f(3,'Expertise','Doublez la maîtrise de deux compétences.','Choisissez deux maîtrises de compétences dont le bonus de maîtrise est doublé.'),
  f(5,'Source d’inspiration','Inspiration récupérée au repos court.','Vos utilisations d’Inspiration bardique reviennent désormais à la fin d’un repos court ou long.'),
  f(6,'Contre-charme','Aidez contre charme et peur.','Votre performance peut accorder un avantage aux sauvegardes contre charme et peur aux créatures proches qui vous entendent.'),
  f(10,'Secrets magiques','Apprenez des sorts hors liste de barde.','Choisissez des sorts d’autres classes et traitez-les comme des sorts de barde. Cette aptitude revient à plusieurs niveaux.'),
  f(20,'Inspiration supérieure','Une inspiration revient quand vous commencez sans.','Au début d’un combat, si vous n’avez plus d’Inspiration bardique, vous en récupérez une utilisation.')
 ]},
 cleric:{name:'Clerc',hitDie:8,saves:['wis','cha'],caster:'full',spellAttr:'wis',features:[
  f(1,'Incantation','Lanceur préparé basé sur la Sagesse.','Attaque de sort = maîtrise + Sagesse ; DD = 8 + maîtrise + Sagesse.'),
  f(1,'Domaine divin','Votre domaine active ses aptitudes automatiquement.','Choisissez un domaine officiel Legacy dans Fiche & classes ; ses aptitudes apparaissent ensuite aux bons niveaux.'),
  f(2,'Conduit divin','Pouvoir divin avec utilisations croissantes.','Vous obtenez Renvoi des morts-vivants et un effet de domaine. Le nombre d’utilisations augmente avec le niveau.', 'Action','channel'),
  f(5,'Destruction des morts-vivants','Détruit certains morts-vivants renvoyés.','Les morts-vivants faibles qui échouent contre votre Renvoi peuvent être détruits ; le seuil augmente avec votre niveau.'),
  f(10,'Intervention divine','Demandez directement l’aide de votre divinité.','Une tentative peut produire une intervention déterminée par le MJ ; la probabilité dépend de votre niveau de clerc.'),
  f(20,'Intervention améliorée','Votre intervention divine réussit automatiquement.','L’appel à votre divinité n’exige plus le même test de réussite.')
 ]},
 druid:{name:'Druide',hitDie:8,saves:['int','wis'],caster:'full',spellAttr:'wis',features:[
  f(1,'Druidique','Langage secret des druides.','Vous connaissez le langage secret druidique et ses signes.'),
  f(1,'Incantation','Lanceur préparé basé sur la Sagesse.','Attaque de sort = maîtrise + Sagesse ; DD = 8 + maîtrise + Sagesse.'),
  f(2,'Forme sauvage','Transformations, 2 utilisations.','Prenez la forme d’une bête admissible selon votre niveau et votre cercle. Les utilisations se récupèrent au repos court ou long.', 'Action','wildshape'),
  f(2,'Cercle druidique','Votre cercle active ses aptitudes automatiquement.','Choisissez un cercle officiel Legacy dans Fiche & classes ; ses aptitudes apparaissent ensuite aux bons niveaux.'),
  f(4,'Forme sauvage améliorée','Formes plus puissantes et nage selon niveau.','Les limites de FP et de déplacement de vos formes progressent avec le niveau.'),
  f(8,'Forme sauvage améliorée','Formes avec vitesse de vol admissibles.','Votre niveau élargit encore les formes accessibles.'),
  f(18,'Jeunesse éternelle','Vieillissement fortement ralenti.','Votre corps vieillit beaucoup plus lentement.'),
  f(18,'Sorts de la bête','Incantation partielle en Forme sauvage.','Vous pouvez lancer de nombreux sorts de druide sous Forme sauvage, sous réserve de leurs composantes.'),
  f(20,'Archidruide','Forme sauvage sans limite d’utilisation.','Vous pouvez utiliser Forme sauvage sans être limité par son compteur habituel et ignorez davantage de composantes.')
 ]},
 fighter:{name:'Guerrier',hitDie:10,saves:['str','con'],features:[
  f(1,'Style de combat','Bonus permanent lié à un style choisi.','Choisissez et configurez votre style de combat ; ses bonus peuvent être ajoutés aux attaques, dégâts ou à la CA via les ajustements.'),
  f(1,'Second souffle','Récupérez 1d10 + niveau de guerrier PV.','En action bonus, récupérez 1d10 + votre niveau de guerrier points de vie. Une utilisation par repos court ou long.', 'Action bonus','secondwind'),
  f(2,'Sursaut','Une action supplémentaire.','À votre tour, gagnez une action supplémentaire. Une utilisation, puis deux à haut niveau.', 'Libre','actionsurge'),
  f(5,'Attaque supplémentaire','Deux attaques avec l’action Attaquer.','Le nombre d’attaques de l’action Attaquer augmente, puis encore aux niveaux 11 et 20.'),
  f(9,'Indomptable','Relancez une sauvegarde ratée.','Relancez un jet de sauvegarde raté ; vous devez conserver le nouveau résultat. Les utilisations augmentent avec le niveau.', 'Libre','indomitable'),
  f(11,'Attaque supplémentaire (2)','Trois attaques avec l’action Attaquer.','Votre action Attaquer peut désormais produire trois attaques.'),
  f(17,'Sursaut amélioré','Deux utilisations de Sursaut.','Vous disposez de deux utilisations avant repos, une seule par tour.'),
  f(20,'Attaque supplémentaire (3)','Quatre attaques avec l’action Attaquer.','Votre action Attaquer peut produire quatre attaques.')
 ]},
 monk:{name:'Moine',hitDie:8,saves:['str','dex'],features:[
  f(1,'Arts martiaux','Dé martial et DEX possible avec armes de moine.','Votre dé d’arts martiaux augmente avec le niveau. Vous pouvez effectuer une frappe à mains nues en action bonus après une attaque admissible.'),
  f(1,'Défense sans armure','CA = 10 + DEX + SAG.','Choisissez la formule « Moine » dans la configuration de CA pour automatiser ce calcul.'),
  f(2,'Ki','Points de ki = niveau de moine.','Vos points de ki se récupèrent au repos court ou long après méditation. DD de ki = 8 + maîtrise + Sagesse.', 'Ressource','ki'),
  f(2,'Déplacement sans armure','Vitesse supplémentaire progressive.','Votre vitesse augmente lorsque vous ne portez ni armure ni bouclier.'),
  f(2,'Rafale / Défense patiente / Pas du vent','Techniques de ki de base.','Dépensez du ki pour deux frappes bonus, Esquiver en bonus, ou Foncer/Se désengager en bonus.', 'Action bonus','ki'),
  f(3,'Parade de projectiles','Réduisez les dégâts d’un projectile.','En réaction, réduisez les dégâts de 1d10 + Dextérité + niveau de moine ; si vous annulez les dégâts, vous pouvez parfois renvoyer le projectile.', 'Réaction'),
  f(4,'Chute ralentie','Réduction = 5 × niveau de moine.','En réaction à une chute, réduisez les dégâts de chute de cinq fois votre niveau de moine.', 'Réaction'),
  f(5,'Attaque supplémentaire','Deux attaques avec l’action Attaquer.','Vous attaquez deux fois avec l’action Attaquer.'),
  f(5,'Frappe étourdissante','1 ki après une touche au corps à corps.','La cible effectue une sauvegarde de Constitution contre votre DD de ki ou est étourdie jusqu’à la fin de votre prochain tour.', 'Après une touche','ki'),
  f(6,'Frappes de ki','Frappes à mains nues considérées comme magiques.','Vos frappes à mains nues surmontent les résistances liées aux attaques non magiques.'),
  f(7,'Esquive totale','Améliore certains effets à sauvegarde de Dextérité.','Sur une sauvegarde de Dextérité qui inflige moitié des dégâts en cas de réussite, vous ne subissez rien en cas de réussite et moitié en cas d’échec.'),
  f(7,'Quiétude de l’esprit','Mettez fin à charme ou peur.','Utilisez votre action pour mettre fin à un effet vous charmant ou vous effrayant.'),
  f(10,'Pureté physique','Immunité aux maladies et poisons.','Votre maîtrise du ki protège votre organisme.'),
  f(14,'Âme de diamant','Maîtrise de toutes les sauvegardes.','Vous ajoutez votre bonus de maîtrise à toutes les sauvegardes et pouvez dépenser du ki pour en relancer certaines.'),
  f(18,'Corps vide','Invisibilité et résistance via le ki.','Dépensez du ki pour devenir invisible et résistant à la plupart des dégâts pendant un temps limité.'),
  f(20,'Perfection de l’être','Récupération minimale de ki au début du combat.','Si vous commencez un combat sans ki, vous récupérez quelques points.')
 ]},
 paladin:{name:'Paladin',hitDie:10,saves:['wis','cha'],caster:'half',spellAttr:'cha',features:[
  f(1,'Sens divin','Détectez certaines présences surnaturelles.','Vous percevez temporairement certaines créatures célestes, fiélonnes ou mortes-vivantes proches.', 'Action','divinesense'),
  f(1,'Imposition des mains','Réserve de soins = 5 × niveau de paladin.','Dépensez des points de la réserve pour soigner ou neutraliser certaines maladies/poisons.', 'Action','layhands'),
  f(2,'Style de combat','Bonus permanent selon le style choisi.','Configurez le bonus correspondant dans vos attaques ou votre CA.'),
  f(2,'Incantation','Demi-lanceur basé sur le Charisme.','Attaque de sort = maîtrise + Charisme ; DD = 8 + maîtrise + Charisme.'),
  f(2,'Châtiment divin','Convertissez un emplacement en dégâts radiants.','Après une touche de mêlée, dépensez un emplacement de sort pour ajouter des dégâts radiants ; augmentez les dés selon le niveau de l’emplacement et certaines cibles.'),
  f(3,'Santé divine','Immunité aux maladies.','La magie divine vous protège des maladies.'),
  f(3,'Serment sacré','Sous-classe et Conduit divin.','Ajoutez les options propres à votre serment comme aptitudes personnalisées.', 'Action','channel'),
  f(5,'Attaque supplémentaire','Deux attaques avec l’action Attaquer.','Votre action Attaquer produit deux attaques.'),
  f(6,'Aura de protection','Ajoutez CHA aux sauvegardes dans votre aura.','Vous et les alliés proches ajoutez votre modificateur de Charisme aux sauvegardes tant que vous êtes conscient.'),
  f(10,'Aura de courage','Immunité à la peur dans votre aura.','Vous et les alliés proches ne pouvez pas être effrayés tant que vous êtes conscient.'),
  f(11,'Châtiment divin amélioré','Dégâts radiants supplémentaires aux attaques de mêlée.','Vos attaques de mêlée infligent automatiquement un supplément radiant.'),
  f(14,'Contact purificateur','Mettez fin à un sort sur une créature.','Utilisez votre action pour mettre fin à un sort affectant une créature consentante, avec un nombre d’utilisations lié au Charisme.')
 ]},
 ranger:{name:'Rôdeur',hitDie:10,saves:['str','dex'],caster:'half',spellAttr:'wis',features:[
  f(1,'Ennemi juré','Avantages d’exploration et de connaissance ciblés.','Choisissez vos ennemis favoris selon la version de règles utilisée ; ajoutez vos variantes dans les aptitudes personnalisées.'),
  f(1,'Explorateur-né','Bénéfices dans certains environnements.','Choisissez vos terrains ou utilisez la variante de votre table ; les détails sont personnalisables.'),
  f(2,'Style de combat','Bonus permanent selon le style choisi.','Configurez le bonus dans vos attaques, dégâts ou votre CA.'),
  f(2,'Incantation','Demi-lanceur basé sur la Sagesse.','Attaque de sort = maîtrise + Sagesse ; DD = 8 + maîtrise + Sagesse.'),
  f(3,'Conscience primitive','Dépense d’un emplacement pour détecter certains types.','Vous pouvez consacrer un emplacement à une perception surnaturelle de votre environnement.'),
  f(3,'Archétype de rôdeur','Sous-classe à personnaliser.','Ajoutez les aptitudes de votre archétype comme aptitudes personnalisées.'),
  f(5,'Attaque supplémentaire','Deux attaques avec l’action Attaquer.','Votre action Attaquer produit deux attaques.'),
  f(8,'Foulée tellurique','Ignore certains terrains difficiles naturels.','Vous vous déplacez plus efficacement dans la végétation et bénéficiez de protections contre certaines entraves naturelles.'),
  f(10,'Discrétion naturelle','Camouflage amélioré selon votre version de règles.','Votre capacité à vous dissimuler en milieu naturel s’améliore.'),
  f(14,'Disparition','Se cacher en action bonus.','Vous pouvez utiliser Se cacher en action bonus et devenez plus difficile à suivre.'),
  f(18,'Sens sauvages','Combattez mieux les créatures invisibles proches.','Votre perception limite les avantages de certaines créatures invisibles.'),
  f(20,'Tueur d’ennemis','Ajoutez Sagesse à une attaque ou aux dégâts ciblés.','Une fois par tour contre une cible admissible, appliquez votre Sagesse à un jet d’attaque ou de dégâts selon la version utilisée.')
 ]},
 rogue:{name:'Roublard',hitDie:8,saves:['dex','int'],features:[
  f(1,'Expertise','Double maîtrise sur deux compétences ou outils.','Choisissez deux maîtrises admissibles dont le bonus de maîtrise est doublé.'),
  f(1,'Attaque sournoise','Dégâts supplémentaires 1 fois par tour.','Une fois par tour, ajoutez vos dés d’Attaque sournoise quand les conditions sont réunies. Les dés progressent automatiquement avec le niveau.'),
  f(1,'Argot des voleurs','Langage et codes secrets.','Vous connaissez les signes et codes propres au milieu criminel.'),
  f(2,'Ruse','Foncer, Se désengager ou Se cacher en action bonus.','Vous pouvez accomplir certaines actions de mobilité en action bonus.'),
  f(3,'Archétype de roublard','Votre archétype active ses aptitudes automatiquement.','Choisissez un archétype officiel Legacy dans Fiche & classes ; ses aptitudes apparaissent ensuite aux bons niveaux.'),
  f(5,'Esquive instinctive','Réduisez de moitié une attaque qui vous touche.','En réaction contre un attaquant visible, réduisez de moitié les dégâts de l’attaque.', 'Réaction'),
  f(6,'Expertise supplémentaire','Deux maîtrises supplémentaires doublées.','Choisissez deux autres maîtrises admissibles.'),
  f(7,'Esquive totale','Améliore les sauvegardes DEX pour moitié.','Sur certains effets de zone, vous ne subissez rien en cas de réussite et moitié en cas d’échec.'),
  f(11,'Talent fiable','Minimum 10 sur certains tests maîtrisés.','Pour un test auquel vous ajoutez votre maîtrise, un résultat de d20 inférieur à 10 peut être traité comme un 10.'),
  f(14,'Perception aveugle','Localisez les créatures cachées proches.','Vous percevez la position de certaines créatures que vous ne voyez pas si elles ne vous sont pas cachées.'),
  f(15,'Esprit fuyant','Maîtrise des sauvegardes de Sagesse.','Vous gagnez la maîtrise des sauvegardes de Sagesse.'),
  f(18,'Insaisissable','Les attaques ont plus de mal à obtenir avantage.','Tant que vous n’êtes pas neutralisé, les attaques contre vous n’obtiennent pas l’avantage simplement par leurs conditions habituelles.'),
  f(20,'Coup de chance','Transformez un échec critique en réussite potentielle.','Une fois par repos, transformez un jet d’attaque raté en touche ou un test raté en 20 au d20 selon le cas.', 'Libre','stroke')
 ]},
 sorcerer:{name:'Ensorceleur',hitDie:6,saves:['con','cha'],caster:'full',spellAttr:'cha',features:[
  f(1,'Incantation','Lanceur basé sur le Charisme.','Attaque de sort = maîtrise + Charisme ; DD = 8 + maîtrise + Charisme.'),
  f(1,'Origine magique','Votre origine active ses aptitudes automatiquement.','Choisissez une origine officielle Legacy dans Fiche & classes ; ses aptitudes apparaissent ensuite aux bons niveaux.'),
  f(2,'Source de magie','Points de sorcellerie = niveau d’ensorceleur.','Dépensez vos points de sorcellerie pour créer des emplacements ou alimenter certaines aptitudes.', 'Ressource','sorcery'),
  f(3,'Métamagie','Modifiez vos sorts avec vos options choisies.','Choisissez vos options de métamagie et ajoutez-les comme aptitudes personnalisées si vous souhaitez leurs coûts exacts.', 'Selon option','sorcery'),
  f(20,'Restauration magique','Récupérez des points de sorcellerie au repos court.','À la fin d’un repos court, récupérez une partie de vos points de sorcellerie.')
 ]},
 warlock:{name:'Occultiste',hitDie:8,saves:['wis','cha'],caster:'pact',spellAttr:'cha',features:[
  f(1,'Magie de pacte','Emplacements de même niveau récupérés au repos court.','Le nombre et le niveau de vos emplacements de pacte sont calculés automatiquement selon votre niveau d’occultiste.', 'Ressource','pact'),
  f(1,'Protecteur d’outre-monde','Votre patron active ses aptitudes automatiquement.','Choisissez un patron officiel Legacy dans Fiche & classes ; ses aptitudes apparaissent ensuite aux bons niveaux.'),
  f(2,'Manifestations occultes','Invocations personnalisables.','Choisissez des manifestations et ajoutez-les comme aptitudes personnalisées lorsque leurs règles ont un impact direct.'),
  f(3,'Pacte','Don de pacte.','Choisissez votre pacte et ajoutez ses règles spécifiques dans vos aptitudes personnalisées.'),
  f(11,'Arcanum mystique (6)','Un sort de niveau 6 sans emplacement.','Vous gagnez un sort d’Arcanum mystique utilisable selon sa recharge.'),
  f(13,'Arcanum mystique (7)','Un sort de niveau 7 sans emplacement.','Vous gagnez un deuxième Arcanum mystique.'),
  f(15,'Arcanum mystique (8)','Un sort de niveau 8 sans emplacement.','Vous gagnez un troisième Arcanum mystique.'),
  f(17,'Arcanum mystique (9)','Un sort de niveau 9 sans emplacement.','Vous gagnez un quatrième Arcanum mystique.'),
  f(20,'Maître de l’occulte','Récupération rapide des emplacements de pacte.','Une fois par repos long, une courte cérémonie permet de récupérer les emplacements de pacte dépensés.')
 ]},
 wizard:{name:'Magicien',hitDie:6,saves:['int','wis'],caster:'full',spellAttr:'int',features:[
  f(1,'Incantation','Lanceur préparé basé sur l’Intelligence.','Attaque de sort = maîtrise + Intelligence ; DD = 8 + maîtrise + Intelligence.'),
  f(1,'Récupération arcanique','Récupérez des emplacements après un repos court.','Une fois par jour après un repos court, récupérez des niveaux d’emplacements dont la somme dépend de votre niveau de magicien.', 'Après repos court','arcaneRecovery'),
  f(2,'Tradition arcanique','Votre tradition active ses aptitudes automatiquement.','Choisissez une tradition officielle Legacy dans Fiche & classes ; ses aptitudes apparaissent ensuite aux bons niveaux.'),
  f(18,'Maîtrise des sorts','Deux sorts de bas niveau utilisables à volonté.','Choisissez un sort de niveau 1 et un de niveau 2 répondant aux conditions ; vous pouvez les lancer sans emplacement dans les limites prévues.'),
  f(20,'Sorts de prédilection','Deux sorts de niveau 3 avec utilisations gratuites.','Choisissez deux sorts de niveau 3 que vous pouvez lancer gratuitement un nombre limité de fois avant repos.')
 ]}
};
export const CLASS_OPTIONS=Object.entries(CLASSES).map(([id,c])=>[id,c.name]);
export const FULL_SLOTS=[
 [],[2],[3],[4,2],[4,3],[4,3,2],[4,3,3],[4,3,3,1],[4,3,3,2],[4,3,3,3,1],[4,3,3,3,2],[4,3,3,3,2,1],[4,3,3,3,2,1],[4,3,3,3,2,1,1],[4,3,3,3,2,1,1],[4,3,3,3,2,1,1,1],[4,3,3,3,2,1,1,1],[4,3,3,3,2,1,1,1,1],[4,3,3,3,3,1,1,1,1],[4,3,3,3,3,2,1,1,1],[4,3,3,3,3,2,2,1,1]
];
export const PACT=[
 null,{slots:1,level:1},{slots:2,level:1},{slots:2,level:2},{slots:2,level:2},{slots:2,level:3},{slots:2,level:3},{slots:2,level:4},{slots:2,level:4},{slots:2,level:5},{slots:2,level:5},{slots:3,level:5},{slots:3,level:5},{slots:3,level:5},{slots:3,level:5},{slots:3,level:5},{slots:3,level:5},{slots:4,level:5},{slots:4,level:5},{slots:4,level:5},{slots:4,level:5}
];
export function classLevel(character,id){return character.classes.filter(c=>c.id===id).reduce((a,c)=>a+(Number(c.level)||0),0)}
export function totalLevel(character){return character.classes.reduce((a,c)=>a+(Number(c.level)||0),0)}
export function proficiency(character){const l=Math.max(1,totalLevel(character));return 2+Math.floor((l-1)/4)}
export function unlockedFeatures(character){const out=[];for(const entry of character.classes){if(!entry.id||!CLASSES[entry.id]||!entry.level)continue;for(const feature of CLASSES[entry.id].features){if(feature.level<=entry.level)out.push({...feature,classId:entry.id,className:CLASSES[entry.id].name,currentLevel:entry.level,featured:feature.level===entry.level,kind:'class'});}}out.push(...subclassFeatures(character));return out.sort((a,b)=>Number(b.featured)-Number(a.featured)||a.level-b.level||a.className.localeCompare(b.className,'fr'))}
export function casterLevel(character){let n=0;for(const entry of character.classes){const c=CLASSES[entry.id];const l=Number(entry.level)||0;if(!c)continue;if(c.caster==='full')n+=l;else if(c.caster==='half')n+=Math.floor(l/2);else if(c.caster==='artificer')n+=Math.ceil(l/2);n+=subclassCasterContribution(entry);}return Math.min(20,n)}
export function spellSlots(character){return FULL_SLOTS[casterLevel(character)]||[]}
export function pactSlots(character){const l=classLevel(character,'warlock');return PACT[l]||{slots:0,level:0}}
export function primarySpellAttr(character){for(const entry of character.classes){const c=CLASSES[entry.id];if(c?.spellAttr&&entry.level>0)return c.spellAttr;const subAttr=subclassSpellAttr(entry);if(subAttr&&entry.level>0)return subAttr}return character.spellcasting?.ability||'int'}
export function attacksPerAction(character){let n=1;const f=classLevel(character,'fighter'),b=classLevel(character,'barbarian'),m=classLevel(character,'monk'),p=classLevel(character,'paladin'),r=classLevel(character,'ranger');if(f>=20)return 4;if(f>=11)return 3;if(f>=5||b>=5||m>=5||p>=5||r>=5||subclassExtraAttack(character))return 2;return n}
export function martialArtsDie(level){if(level>=17)return 10;if(level>=11)return 8;if(level>=5)return 6;return 4}
export function sneakDice(level){return Math.max(1,Math.ceil(level/2))}
export function rageData(level){const uses=level>=20?99:level>=17?6:level>=12?5:level>=6?4:level>=3?3:2;const bonus=level>=16?4:level>=9?3:2;return {uses,bonus}}
export function inspirationDie(level){return level>=15?12:level>=10?10:level>=5?8:6}
export function channelUses(level){return level>=18?3:level>=6?2:1}
export function resourceBlueprints(character){const out=[];const add=(id,name,max,recharge='Repos long',note='')=>{if(max>0)out.push({id,name,max,recharge,note})};for(const entry of character.classes){const l=Number(entry.level)||0;if(!l)continue;switch(entry.id){
 case 'artificer':if(l>=7)add('artificer_flash','Éclairs de génie',Math.max(1,Math.floor((character.stats.int-10)/2)),'Repos long','INT utilisations');break;
 case 'barbarian':{const r=rageData(l);add('barbarian_rage','Rages',r.uses,'Repos long',`+${r.bonus} dégâts de rage`);break;}
 case 'bard':add('bard_inspiration','Inspirations bardiques',Math.max(1,Math.floor((character.stats.cha-10)/2)),l>=5?'Repos court/long':'Repos long',`d${inspirationDie(l)}`);break;
 case 'cleric':if(l>=2)add('cleric_channel','Conduits divins',channelUses(l),l>=18?'Repos court/long':'Repos court/long');break;
 case 'druid':if(l>=2)add('druid_wildshape','Formes sauvages',l>=20?99:2,'Repos court/long');break;
 case 'fighter':add('fighter_secondwind','Second souffle',1,'Repos court/long',`1d10 + ${l} PV`);if(l>=2)add('fighter_actionsurge','Sursauts',l>=17?2:1,'Repos court/long');if(l>=9)add('fighter_indomitable','Indomptables',l>=17?3:l>=13?2:1,'Repos long');break;
 case 'monk':if(l>=2)add('monk_ki','Ki',l,'Repos court/long',`DD ${8+proficiency(character)+Math.floor((character.stats.wis-10)/2)}`);break;
 case 'paladin':add('paladin_divinesense','Sens divins',Math.max(1,1+Math.floor((character.stats.cha-10)/2)),'Repos long');add('paladin_layhands','Imposition des mains',5*l,'Repos long','Réserve de PV');if(l>=3)add('paladin_channel','Conduits divins',1,'Repos court/long');break;
 case 'rogue':if(l>=20)add('rogue_stroke','Coups de chance',1,'Repos court/long');break;
 case 'sorcerer':if(l>=2)add('sorcerer_sorcery','Points de sorcellerie',l,'Repos long');break;
 case 'wizard':add('wizard_arcaneRecovery','Récupération arcanique',1,'Repos long',`Niveaux d’emplacements ≤ ${Math.ceil(l/2)}`);break;
 }}return out}
