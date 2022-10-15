const assert = require('chai').assert
const chai = require('chai')
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

import Medicion from '../models/Medicion'

const url = "http://localhost:3000/api/"

/* Comprueba las peticiones POST a traves de la api para el recurso mediciones */
describe("Test Insertar Medicion", () => {

    const path = "mediciones";

    /* Comprueba si se puede insertar una medicion traves de la api */
    it("Insertar medicion correcta", (done) => {

        let medicion = { sensor: 0, valor: 1, lat: 1, lon: 1 }

        //enviar post
        chai.request(url)
            .post(path)
            .send(medicion)
            .end(function(error, response, body) {                
                assert.equal(error, null, "Algo ha pasado.")
                if(error) console.log(error)

                //borrar medicion creada para el test
                Medicion.destroy({ where: { id: response.body.id } });

                assert.equal(response.statusCode, 200, "El codigo de respuesta es " + response.statusCode + ", deberia ser 200(OK).")                
                done()
            });
    })    

    /* Comprueba si una medicion incorrecta puede ser insertada a traves de la api */
    it("Insertar medicion incorrecta", (done) => {

        //medicion erronea
        let medicion = { test: "error" }

        //enviar post
        chai.request(url)
            .post(path)
            .send(medicion)
            .end(function(error, response, body) {                
                assert.equal(response.statusCode, 500, "La medicion es correcta, deberia no serlo.")
                done()
            });
    })  

})

/* Comprueba las peticiones GET a traves de la api para el recurso mediciones */
describe("Test Obtener Mediciones", () => {

    const path = "mediciones";    

    /* Comprueba si se pueden obtener las mediciones a traves de la api */
    it("Obtener todas las mediciones", (done) => {

        //enviar get
        chai.request(url)
            .get(path)
            .end(function(error, response, body) {                
                assert.equal(error, null, "Algo ha pasado.")
                if(error) console.log(error)
                assert.equal(response.statusCode, 200, "El codigo de respuesta es " + response.statusCode + ", deberia ser 200(OK).")                
                done()
            });
    })    

   /* Comprueba si se puede obtener una mediciones a traves de la api */
    it("Obtener una medicion", (done) => {

        //enviar get
        chai.request(url)
            .get(path + "/1")
            .end(function(error, response, body) {                
                assert.equal(error, null, "Algo ha pasado.")
                if(error) console.log(error)
                assert.equal(response.statusCode, 200, "El codigo de respuesta es " + response.statusCode + ", deberia ser 200(OK).")                
                done()
            });
    })

})




