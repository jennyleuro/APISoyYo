const entitiesListHandler = require('../entitiesList/entitiesListHandler');

const router = require('express').Router(); //Importanto router

//Asignando funciones al GET
router.route('/').get(async (req, res) => {
    const entitiesRes = await entitiesListHandler.entitiesList(req);
    if (entitiesRes === 404) {
        res.status(404).send({'Error:':'No existe alguno o varios de los registros del rango'});
    }
    if (entitiesRes === 400) {
        res.status(400).send({'Error:':'Error en validación datos de entrada'});
    }
    msg = req.body;
    res.json({entitiesRes});
})

module.exports = router;