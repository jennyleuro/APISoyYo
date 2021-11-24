const entitiesListHandler = require('../entitiesList/entitiesListHandler');

const router = require('express').Router(); //Importanto router

//Asignando funciones al GET
router.route('/').get(async (req, res) => {
    const entitiesRes = await entitiesListHandler.entitiesList(req);
    if (entitiesRes === 404) {
        res.json({'Error:': " No existe alguno o varios de los registros del rango"});
    }
    msg = req.body;
    res.json({entitiesRes});
})

module.exports = router;