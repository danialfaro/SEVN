const assert = require('chai').assert
const chai = require('chai')
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

const url = "http://localhost:3000/api/"

/* Comprueba las peticiones POST a traves de la api para el recurso mediciones */
describe("Test Insertar Medicion", () => {

    const path = "mediciones";

    /* Comprueba si se puede insertar una medicion traves de la api */
    it("Insertar medicion correcta", (done) => {

        let medicion = { sensor: "test", valor:"1234" }

        chai.request(url)
            .post(path)
            .send(medicion)
            .end(function(error, response, body) {                
                assert.equal(error, null, "Algo ha pasado.")
                if(error) console.log(error)
                assert.equal(response.statusCode, 200, "El codigo de respuesta es " + response.statusCode + ", deberia ser 200(OK).")
                console.log(body)
                done()
            });
    })    

    /* Comprueba si una medicion incorrecta puede ser insertada a traves de la api */
    it("Insertar medicion incorrecta", (done) => {

        let medicion = { test: "error" }

        chai.request(url)
            .post(path)
            .send(medicion)
            .end(function(error, response, body) {                
                assert.equal(response.statusCode, 500, "La medicion es correcta, deberia no serlo.")
                done()
            });
    })  

})




