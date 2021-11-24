//Contiene las rutas

const router = require('express').Router(); //Importando Router

const entitiesRoute = require('./entities'); //Exportando entities

router.use('/entities', entitiesRoute); //Definiendo ruta GET

module.exports = router; //Exportando router