# SEVN
Aplicación JavaScript Full Stack con Sequalize - Express - Vue - Node

Fase: _Sprint 0_

En este repositorio se encuentra el código relacionado del servidor y el frontend. Se han utilizado las siguientes tecnologías:

- [a Sequelize ORM](https://sequelize.org/)
- Node.js con Express para el servidor y la API
- [a Vue](https://vuejs.org/) para el frontend

## Instalación

Primero es necesario tener instalado node: 

https://nodejs.org/es/

Clonar el repositorio dentro una carpeta:

`$ git clone https://github.com/danialfaro/SEVN.git .`

Instalar los packages:

`$ npm install`

##Inicialización

Arrancar el servidor:

`$ npm start`

## API doc

### recurso: Mediciones

####GET

`/mediciones`

`/mediciones/:id`

####POST

`/mediciones`

`body: {
  sensor: string
  valor: double
}`

####DELETE

`/mediciones/:id`
