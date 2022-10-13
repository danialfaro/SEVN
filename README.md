# SEVN
Aplicación JavaScript Full Stack con Sequalize - Express - Vue - Node

Fase: _Sprint 0_

En este repositorio se encuentra el código relacionado del servidor. Se han utilizado las siguientes tecnologías:

- [Sequelize ORM](https://sequelize.org/)
- Node.js con Express para el servidor y la API

Para el frontend se ha utilizado:
- [Vue](https://vuejs.org/)

## Instalación

Primero es necesario tener instalado node: 

https://nodejs.org/es/

Clonar el repositorio dentro una carpeta:

`$ git clone https://github.com/danialfaro/SEVN.git .`

Instalar los packages:

`$ npm install`

## Inicialización

Arrancar el servidor:

`$ npm start`

[http://localhost:3000](http://localhost:3000)

## API doc

http://localhost:3000/api/

### mediciones

##### GET

`/mediciones`

`/mediciones/:id`

##### POST

`/mediciones`

```
body: {
  sensor: string
  valor: double
}
```

#### DELETE

`/mediciones/:id`
