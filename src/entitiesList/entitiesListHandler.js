//Entrada de todo

//Import de la clase
const response = require("../../config/fetch");

const range = async (startId, endId) => {
    let entities = [];
    for (let i = startId; i <= endId; i++) {
        let test = await response.resAsync(i);
        entities.push(test.data);
        //console.log(test.data);
    }
    return entities;
};

const entitiesList = async (event, context) => {

    let startId = event.body["startId"];
    let endId = event.body["endId"];
    
    let entitiesList = await range(startId, endId);
    

    console.log("Lista entidades" ,entitiesList);

    return "helowski";
};

module.exports.entitiesList = entitiesList;


