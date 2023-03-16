# Exemple de documentation d'API de gestion des articles

Voici un exemple du format attendu pour votre rendu de modélisation d'API.

Vous pouvez librement reprendre ce format et vous en inspirer
(et on vous y encourage !).

## Catégories

### `[GET]` `/api/categories`

#### Description

Récupère l'intégralité des catégories.

#### Réponse

- `[200]` une liste d'objet `category` dans la clé `data` du corps de réponse

##### Exemple de corps de réponse

```json
{
  "data": [
    {
      "id": 1,
      "name": "Laravel"
    },
    {
      "id": 2,
      "name": "Vue"
    }
  ]
}
```

## Articles

### `[GET]` `/api/posts`

#### Description

Récupère une liste paginée des articles.

#### Paramètres de requête

- `page` la page à récupérer
- `limit` le nombre d'articles par page

#### Réponse

- `[200]` une liste d'objet `post` dans la clé `data` du corps de réponse
  et le détail des données de pagination dans la clé `meta` du corps de réponse
- `[400]` si l'un des paramètres de la requête est invalide avec l'erreur
  associée dans la clé `error` du corps de réponse

##### Exemple de corps de réponse

```json
{
  "data": [
    {
      "id": 1,
      "title": "Laravel API backend tutorial",
      "body": "Lorem ipsum",
      "categoryId": 1
    },
    {
      "id": 2,
      "title": "Vue : the reactive frontend",
      "body": "Lorem ipsum",
      "categoryId": 2
    }
  ],
  "meta": {
    "page": 1,
    "limit": 10,
    "total": 42
  }
}
```

### `[POST]` `/api/posts`

#### Description

Crée un nouvel article.

#### Corps de requête

- `data` les données pour l'article à créer

##### Exemple de corps de requête

```json
{
  "data": {
    "title": "Laravel : the PHP Framework for Web Artisans",
    "body": "Lorem ipsum",
    "categoryId": 1
  }
}
```

#### Réponse

- `[201]` un objet `post` dans la clé `data` du corps de réponse
- `[400]` si l'un des paramètres du corps de requête est invalide avec l'erreur
  associée dans la clé `error` du corps de réponse
- `[401]` si l'utilisateur n'est pas authentifié

##### Exemple de corps de réponse

```json
{
  "data": {
    "id": 3,
    "title": "Laravel : the PHP Framework for Web Artisans",
    "body": "Lorem ipsum",
    "categoryId": 1
  }
}
```
