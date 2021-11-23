//Entrada de todo

//Import de la clase
const response = require("../../config/fetch");

const entitiesList = (event, context) => {
    console.log(event.body);
    console.log(response.resAsync(5));
    return "helowski";
};

module.exports.entitiesList = entitiesList;


