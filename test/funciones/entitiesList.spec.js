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

            "startId": 2,
            "endId": 10

        }, "GET", {}, {}, {}), "Context");

        expect(resultado.length).to.equal(9);

    });
    it('Error', async () => { //Función Asincrona

        //Evento -> ServiceQuery
        const resultado = await handler.entitiesList(serviceQuery.serviceQuery({

            "startId": 100,
            "endId": 110

        }, "GET", {}, {}, {}), "Context");

        expect(resultado).to.equal(404);

    });
    it('Error entrada', async () => { //Función Asincrona

        //Evento -> ServiceQuery
        const resultado = await handler.entitiesList(serviceQuery.serviceQuery({}, "GET", {}, {}, {}), "Context");

        expect(resultado).to.equal(400);

    });

    //Lo que se hace después de la prueba
    after(function () {
    });
});