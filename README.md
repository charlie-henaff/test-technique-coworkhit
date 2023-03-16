# Test technique 2023

> Merci de lire attentivement l'intégralité des consignes de ce test technique
> avant de le réaliser 😉
>
> Nous évaluons à la fois la compétence technique et organisationnelle
> (compréhension des objectifs, livrables conformes aux spécifications, etc.).

## Introduction

Ce test technique nous permet d'évaluer vos compétences avant un potentiel
échange.

Il est décomposé en deux parties :

1. Développement d'une petite application ;
2. Modélisation de données et d'API ;

Voici quelques conseils avant de démarrer :

- Détendez-vous, on ne vous croquera pas ! On cherche juste à savoir si vous
  êtes aussi passionné(e) pour le dev que nous 🙂
- Familiarisez-vous avec les documentations des outils qu'on utilise :
  - [Vue 2](https://v2.vuejs.org/) et [Vue 3](https://vuejs.org/)
  - [Vuetify 2](https://vuetifyjs.com/en/) et [Vuetify 3](https://vuetifyjs.com/en/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Laravel](https://laravel.com/) (dont vous n'aurez pas besoin ici)
- Le test devrait vous prendre environ 3 heures, évitez donc d'y passer
  une semaine entière !
- **Last but not least : amusez-vous bien dans ce petit exercice !**

## Livraison de votre travail

Une fois les parties 1 et 2 terminées, vous devez intégrer les différents
fichiers dans une archive au **format ZIP**.

Cette archive doit contenir au minimum :

- Un dossier nommé `app` contenant l'application réalisée en partie 1.
  Nous devons pouvoir rapidement installer les dépendances et lancer
  l'application pour la tester. La bande passante ne poussant pas sur des
  arbres, merci de ne pas inclure vos dossiers de dépendances et de build
  (dossiers `node_modules`, `vendor` et autres `build`/`dist`).
- Un dossier nommé `model` contenant votre modélisation de données et d'API
  (peu importe les formats des fichiers, image, word, etc.).
- Un fichier `README.md` décrivant votre travail (instructions pour lancer
  l'application, difficultés rencontrées, particularités de votre réalisation).

> On tient au respect des besoins usagers chez nous, donc merci de nous montrer
> que vous savez respecter des instructions en suivant à la lettre ce format de
> rendu !

Vous envoyez ensuite votre archive comme spécifié dans l'offre 🙂

## Partie 1 : développement d'une petite application

La première partie de ce test consiste à développer une petite
application de gestion tâches (prévisible non ?).

Pour que votre production soit conforme, vous devez respecter les
spécifications fonctionnelles et techniques suivantes.

### Spécifications fonctionnelles

On a fait notre propre exercice, donc on vous met des captures d'écran qui
serviront de maquettes dans le dossier [`examples/mockups`](examples/mockups) :
**votre production doit y ressembler le plus possible !**

L'application est composée des éléments suivants :

- Le titre de l'application
- Un champ permettant de saisir le titre d'une tâche
- Un bouton d'ajout de la tâche
- Deux listes de tâches "à faire" et "terminées" avec pour chaque tâche :
  son intitulé, un bouton "Supprimer" et - dépendamment du contexte - un bouton
  "Terminée" ou "À faire"

L'application doit être réactive aux interactions de l'utilisateur :

- Le clic sur le bouton d'ajout (ou la touche `Entrée` dans le champ de saisie)
  ajoute la tâche saisie à la liste des tâches à faire
- Le bouton "Terminée" dans la liste de tâches "à faire" déplace la tâche
  dans la liste de tâches "terminées"
- Le bouton "À faire" dans la liste de tâches "terminées" déplace la tâche
  dans la liste de tâches "à faire"
- Le bouton "Supprimer" supprime la tâche

Vous pouvez aussi vous amuser à ajouter des animations, etc. si le cœur
vous en dit, mais il n'y a rien d'obligatoire !

### Spécifications techniques

Votre application doit utiliser les outils suivants :

- [Vue 3](https://vuejs.org/) et [Vuetify 3](https://vuetifyjs.com/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Yarn](https://yarnpkg.com/) comme gestionnaire de dépendances

Pour vous simplifier la tâche, nous avons déjà créé un projet Vuetify 3 dans
ce repertoire. Il vous suffit donc de le cloner.

Quelques commandes utiles :

```shell
# Cloner le répertoire
git clone https://github.com/cowork-hit/2023-test-technique.git
# Installer les dépendances depuis le répertoire
yarn install
# Lancer l'application depuis le répertoire
yarn dev
```

Quelques informations complémentaires :

- Votre code et vos commentaires doivent être rédigés en anglais
- Vous pouvez utiliser Vue 3 en
  [Options API ou Composition API](https://vuejs.org/guide/introduction.html#api-styles),
  nous vous laissons le choix !
- Pensez à produire un code de qualité (décomposition des composants, etc.)

## Partie 2 : modélisation de données et d'API

La seconde partie de ce test consiste à modéliser une petite base de données
et son API sur la base des spécifications fonctionnelles d'une application
permettant de gérer une liste de tâches (encore ?!).

Voici les spécifications que nous vous donnons :

- Les tâches peuvent être associées à un ou plusieurs tags
- Les tags peuvent être associés à une ou plusieurs tâches
- Les tâches et les tags n'appartiennent qu'à un seul utilisateur
- Les tâches peuvent être "terminée" ou "à faire"

> La modélisation sur document d'une structure de données et d'une API ne vous
> sera pas forcément demandée au quotidien, mais nous tenons à évaluer vos
> capacités d'ingénierie d'une architecture Web.
>
> **Attention :**
>
> - La notion de tags n'est pas présente et n'est pas à réaliser dans la partie 1.
> - Aucun développement n'est à réaliser sur cette partie 2 (uniquement de la modélisation).

### Modélisation de base de données

Fournissez un schéma de base de données permettant de faire fonctionner
l'application.

Vous pouvez fournir ce schéma au format image (UML par exemple, via
[draw.io](https://app.diagrams.net/) par exemple) ou textuel.
Nous vous laissons le choix tant que la modélisation est compréhensible 😉

### Modélisation d'API

Fournissez la structure des points d'entrée d'un API JSON que vous
préconisez pour pouvoir faire fonctionner l'application.

**On considère que l'authentification des utilisateurs est déjà gérée, il est
inutile d'en tenir compte dans votre modélisation**

La modélisation doit décrire une liste de points d'entrée HTTP avec méthode
HTTP, URL et description claire du comportement.
Cette modélisation doit être au format MarkDown (fichier `.md`) et pourrait
par exemple servir de documentation dans le cadre d'un projet.

Nous vous proposons un exemple de modélisation d'API dans le fichier
[`examples/api.md`](examples/api.md).
