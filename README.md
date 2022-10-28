# SEVN
Aplicación JavaScript Full Stack con Sequalize - Express - Vue - Node

Proyecto Aplicaciones de Biometría y Medio Ambiente UPV EPSG

Fase: _Sprint 0_

En este repositorio se encuentra el código de la aplicacion entera tanto de servidor como el cliente web. Para el backend se han utilizado las siguientes tecnologías:

- [Sequelize ORM](https://sequelize.org/)
- [Node.js](https://nodejs.org/es/) con [Express](https://expressjs.com/) para el servidor y la API

Para el frontend se ha utilizado:
- [Vue](https://vuejs.org/)



## 💿 Instalación

#### Backend

Primero es necesario tener instalado node: 

https://nodejs.org/es/

Clonar el repositorio del **servidor** dentro una carpeta:

`$ git clone https://github.com/danialfaro/SEVN.git .`

Instalar packages y dependencias:

`$ npm install`

Para ejecutar los **tests**, utilizar el comando:

`$ npm run test`

#### Frontend

Clonar el repositorio del **cliente** web dentro otra carpeta:

`$ git clone https://github.com/danialfaro/SEVN-frontend.git .`

Instalar packages y dependencias:

`$ npm install`

## 🐱‍🏍 Inicializacion 

Ejecutar el siguiente comando para arrancar el **servidor** desde la consola en la carpeta del servidor:

`$ npm start`

[http://localhost:3000](http://localhost:3000)

Ejecutar el siguiente comando para arrancar el **cliente** desde la consola en la carpeta del cliente frontend:

`$ npm run serve`

[http://localhost:8080](http://localhost:8080)

## API doc

http://localhost:3000/api/

### mediciones

##### GET

Devuelve todas las mediciones registradas.

`/mediciones`

```
response: [
  {
    id: int
    sensor: int
    valor: int
    lat: int
    lon: int
    createdAt: timestamp    
    updatedAt: timestamp
  },
  {
    id: int
    sensor: int
    valor: int
    lat: int
    lon: int
    createdAt: timestamp    
    updatedAt: timestamp
  },
  ...
]
```

Devuelve una medicion de entre las mediciones registradas mediante su id.

`/mediciones/:id`

```
response: {
    id: int
    sensor: int
    valor: int
    lat: int
    lon: int
    createdAt: timestamp    
    updatedAt: timestamp
  }
```

##### POST

Crea una nueva medicion.

`/mediciones`

```
body: {
  sensor: int
  valor: int
  lat: int
  lon: int
}
```

#### DELETE

Elimina el registro de una medicion mediante su id. Devuelve el numero de filas afectadas.

`/mediciones/:id`

```
1
```
