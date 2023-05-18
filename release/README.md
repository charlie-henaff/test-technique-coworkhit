
# Test technique

## Partie 1

__Outils utilisés :__

- Windows 11 + WSL Ubuntu
- [vscode](https://code.visualstudio.com/)
- [make](https://www.gnu.org/software/make/)
- [chat.openai.com](chat.openai.com)

J'ai utilisé le chatgpt à la vue de mes connaissances de départ inexistantes sur typescript/vuejs/vutify pour m'inspirer de ses propositions (trouver une base de départ) et m'éviter des allez-retours sur la doc ou stackoverflow. Je vous mets mon [fil de discutions ici](chat.openai.com.md), pour un aperçu de mon de travail avec lui.  

J'ai utilisé la doc [vuetifyjs](vuetifyjs.com) qui est vraiment clair et m'a bien aidée à prendre en main l'implémentation des composants.

__Installation avec make et docker__

J'ai ajouté un Makefile avec une configuration docker que j'utilise pour mes projets js.  
Ça me permet de gérer des images de dev plutôt que d'installer tous les outils pour différents sujets (js, php, etc.).  

```shell
# Dans le dossier app 
make start # Installe les dépendances et lance le projet en dev
```

__Installation avec node__

```shell
# Dans le dossier app
yarn install # Installe les dépendances
yarn dev # Lance le projet en dev
```

## Partie 2

__Schémas de modélisation :__  
J'ai fait plusieurs schémas. Un [MCD](model/mcd.drawio.png) avec draw.io et un [UML](model/uml.mermaid.md) avec [mermaid](mermaid.js.org).  
> Si mermaid n'est pas installé, vous pouvez [l'afficher par ici](https://mermaid.live/edit#pako:eNqVkT1uwzAMha8icExtI1k9dOoNmkxRBtaiXaGyHEjUEBi-S9eewxcr_ROkQFu04UQ-vKePknqoOkNQQuUwxieLTcBWeyV1iBSUhp0GleeP0m2LYiPDHuOb-svSrI7FfNV_Mc3s-bB-EabKrWdlzU14iBysb5THlhZ1-BqfSP-JO3wh912OjJyiOmpgCq314wdpyGTb8V3VaINMpx-pzZ3QATJoBYHWyLPPYWG-klwKSmkN1Zgca9B-smLi7vniKyg5JMognQ0yrR8FZY0u0vAJmKmFEQ).

__Documentation API__  
J'ai fait une [documentation au format Markdown](model/api.md) comme souhaité.  
Je trouve personnellement le format [openApi](https://www.openapis.org/) plus facilement utilisable.

## Conclusions 
J'ai un peu dépassé le temps estimé de 3h (j'y ai passé env. 5h) mais j'ai bien aimé apprendre vueJs au travers de ce projet.