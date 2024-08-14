<h1 align="center"> Astro Database API </h1>

Desarrollar una API REST que permita interactuar con una base de datos de cartas astrológicas.

La estructura del proyecto es la siguiente:

- astro-db
  - /src
    - controllers
      - user-controller.ts
      - chart-controller.ts
    - database
      - users.json
      - natal-charts.json
    - models
      - user-model.ts
      - chart-model.ts
    - routes
      - chart-router.ts
      - user-router.ts
    - index.ts
  - .gitignore
  - package.json
  - tsconfig.json
  - README.md

#### INDEX.TS

Es el encargado de inicializar la APP de Express y configurar lo básico necesario.

#### /ROUTES

Es el directorio que contiene los routers relativos a cada base de datos. Cada módulo router contiene dentro una instancia del Router de Express con todas los endpoints relativos a cada entidad.

#### /CONTROLLERS

Tiene los controladores de user y chart. Son los encargados de manejar las Request/Response, de interactuar con los modelos, y de realizar chequeos.

#### /MODELS

Contiene los modelos de user y chart. Cada uno tiene por objetivo ejecutar todas las acciones para poder interactuar con las bases de datos. Realiza tambien los chequeos relativos a si un usuario o carta ya existe en la base de datos.

<h2 align="center"> ENDPOINTS </h2>

- **GET |** 127.0.0.1/api --> Obtener info general útil de la APP.

- **GET |** 127.0.0.1/api/users --> Obtener todos los usuarios registrados.
- **GET |** 127.0.0.1/api/users/:id --> Obtener un usuario por su id.

- **GET |** 127.0.0.1/api/charts --> Obtener todas las cartas natales.
- **GET |** 127.0.0.1/api/charts/:name --> Obtener una carta natal por nombre.

- **POST |** 127.0.0.1/api/users --> Dar de alta nuevo usuario.
- **POST |** 127.0.0.1/api/charts --> Crear nueva carta natal.

- **PATCH |** 127.0.0.1/api/users/:id --> Actualizar un usuario.
- **PATCH |** 127.0.0.1/api/charts/:id --> Actualizar una carta natal.

- **DELETE |** 127.0.0.1/api/users/:id --> Eliminar un usuario.
- **DELETE |** 127.0.0.1/api/charts/:id --> Eliminar una carta natal.

<h2 align="center"> BASES DE DATOS </h2>

#### USERS.JSON

`{
	"info": { "name": "Users database", "users": 2 },
	"users": [
		{
			"id": "0ac7be2d-cddb-4558-a687-4d21b7be7e85",
			"name": "Juan",
			"email": "juan@juan.com.ar"
		},
		{
			"id": "db559620-7c6b-4ff4-a7d9-fe0ed53d5f86",
			"name": "María",
			"email": "maria@maria.com.mx"
		}
	]
}`

#### NATAL-CHARTS.JSON

`{
    "info": {
        "name": "Natal charts database",
        "version": "1.0.0",
        "charts": 1
    },
    "charts": [
        {
            "name": "Nicolás",
            "birthdate": "7-3-1997",
            "time": 2123,
            "asc": 214,
            "sun": 347,
            "moon": 332,
            "mercury": 344,
            "venus": 341,
            "mars": 180,
            "jupiter": 310,
            "saturn": 7,
            "uranus": 306,
            "neptune": 299,
            "pluto": 245
        }
    ]
}`

<h2 align="center"> TENER EN CUENTA </h2>

- Si se intenta acceder a un endpoint que no está contemplado en la API, responder un mensaje de error con el código de estado correspondiente.

<h2 align="center"> DEPENDENCIAS A USAR </h2>

- ts-node
- ts-node-dev
- typescript
- express
- jsonfile
