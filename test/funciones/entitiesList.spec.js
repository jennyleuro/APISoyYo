//Prueba unitaria

var chai = require('chai'),
    expect = chai.expect,
    handler = require("../../src/entitiesList/entitiesListHandler"),
    serviceQuery = require("../events/serviceQuery");

describe('test entities', function () {
    this.timeout(0);

    //Lo que se hace antes de la prueba
    beforeEach(function () {

    });

    //Prueba del Handler
    //Nombre prueba unitaria "Success get..."
    it('Success get entities', async () => { //Función Asincrona

        //Evento -> ServiceQuery
        const resultado = await handler.entitiesList(serviceQuery.serviceQuery({

            "startId": 20,
            "endId": 25

        }, "GET", {}, {}, {}), "Context");

        console.log(resultado);

    });

    //Lo que se hace después de la prueba
    after(function () {
    });
});