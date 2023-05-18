
# Documentation de l'API

## Task

### `[POST]` `/api/task`

#### Description

Créer une tache liée à l'utilisateur connecté.
Si un nouveau tag est passé dans le corps de la requête, le tag est créé à la volée.

#### Corps de requête

- le label de la tâche à créer
- (Optionnel) les tags que l'on souhaite associer à la tâche

##### Exemples de corps de requête

```json
{
  "label": "Ma tâche 1",
  "tags": [
    "/tag/1"
  ]
}
```

```json
{
  "label": "Ma tâche 1",
  "tags": [
    {
        "label": "Mon tag 1"
    }
  ]
}
```

#### Réponse

- `[201]` un objet `task` dans le corps de réponse
- `[400]` si l'un des paramètres du corps de requête est invalide avec l'erreur
  associée dans la clé `error` du corps de réponse
- `[404]` si un des tags n'est pas trouvé dans les tags liés à l'utilisateur
- `[401]` si l'utilisateur n'est pas authentifié

##### Exemple de corps de réponse

```json
{
  "id": 1,
  "label": "Ma tâche 1",
  "status": "todo",
  "tags": [
    "/tag/1" 
  ]
}
```

### `[GET]` `/api/task`

#### Description

Récupère l'intégralité des taches liées à l'utilisateur connecté.

#### Réponse

- `[200]` une liste d'objet `task` dans le corps de la réponse

##### Exemple de corps de réponse

```json
{
  [
    {
    "id": 1,
    "label": "Ma tâche 1",
    "status": "todo",
    "tags": [
        "/tag/1" 
    ]
    },
    {
    "id": 2,
    "label": "Ma tâche 2",
    "status": "done",
    "tags": [
        "/tag/1", 
        "/tag/2"
    ]
    },
    ...
  ]
}
```

### `[PUT]` `/api/task/{id}`

#### Description

Modifie une tache liée à l'utilisateur connecté.

#### Paramètres de requête

- __id__ : identifiant de la tâche à cibler

#### Corps de requête

- (Optionnel) le status à modifier
- (Optionnel) les tags à modifier

##### Exemple de corps de requête

```json
{
  "status": "done",
  "tags": [
    "/tag/2"
  ]
}
```

#### Réponse

- `[201]` un objet `task` dans le corps de réponse
- `[400]` si l'un des paramètres du corps de requête est invalide avec l'erreur
  associée dans la clé `error` du corps de réponse
- `[404]` si la tache ou l'un des tags n'est pas trouvé(es) dans les taches ou tags liés à l'utilisateur
- `[401]` si l'utilisateur n'est pas authentifié

##### Exemple de corps de réponse

```json
{
  "id": 1,
  "label": "Ma tâche 1",
  "status": "done",
  "tags": [
    "/tag/2" 
  ]
}
```

### `[DELETE]` `/api/task/{id}`

#### Description

Supprime une tache liée à l'utilisateur connecté.

#### Paramètres de requête

- __id__ : identifiant de la tâche à cibler

#### Réponse

- `[204]` si la tache a bien été supprimée
- `[400]` si l'un des paramètres du corps de requête est invalide avec l'erreur
  associée dans la clé `error` du corps de réponse
- `[404]` si la tache n'est pas trouvée dans les taches liées à l'utilisateur
- `[401]` si l'utilisateur n'est pas authentifié

## Tag

### `[POST]` `/api/tag`

#### Description

Créer un tag lié à l'utilisateur connecté.

#### Corps de requête

- le label du tag à créer

##### Exemple de corps de requête

```json
{
  "label": "Mon premier tag"
}
```

#### Réponse

- `[201]` un objet `task` dans le corps de réponse
- `[400]` si l'un des paramètres du corps de requête est invalide avec l'erreur
  associée dans la clé `error` du corps de réponse
- `[401]` si l'utilisateur n'est pas authentifié

##### Exemple de corps de réponse

```json
{
  "id": 1,
  "label": "Mon premier tag"
}
```

### `[GET]` `/api/tag`

#### Description

Récupère l'intégralité des tags liés à l'utilisateur connecté.

#### Réponse

- `[200]` une liste d'objet `tag` dans le corps de la réponse

##### Exemple de corps de réponse

```json
{
  [
    {
    "id": 1,
    "label": "Mon premier tag"
    },
    {
    "id": 2,
    "label": "Mon second tag"
    },
    ...
  ]
}
```

### `[DELETE]` `/api/tag/{id}`

#### Description

Supprime un tag lié à l'utilisateur connecté.

#### Paramètres de requête

- __id__ : identifiant du tag à cibler

#### Réponse

- `[204]` si la tache a bien été supprimée
- `[400]` si l'un des paramètres du corps de requête est invalide avec l'erreur
  associée dans la clé `error` du corps de réponse
- `[404]` si le tag n'est pas trouvé dans les tags liés à l'utilisateur
- `[401]` si l'utilisateur n'est pas authentifié
