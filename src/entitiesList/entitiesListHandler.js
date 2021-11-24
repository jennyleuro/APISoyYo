//Entrada de todo

//Import de fetch
const response = require("../../config/fetch");

//Función que obtiene las entidades dentro del rango
const range = async (startId, endId) => {
    try {
        let entities = [];
        for (let i = startId; i <= endId; i++) {
            let entity = await response.resAsync(i);
            if (Object.keys(entity.data).length === 0) {
                throw 404;
            }
            entities.push(entity.data);
        }
        return entities;
    } catch (error) {
        return error;
    }

};

//Funcion que ordena las entidades según su nombre de forma ascendente
const orderByName = async (entitiesList) => {
    return entitiesList.sort((a, b) => {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        return 0;
    })
}

//Función que retorna las entidades ordenadas de manera asecendente según su nombre
const entitiesList = async (event) => {

    if(!event.body){
        return 400;
    }
    if(!event.body["startId"] || !event.body["endId"]){
        return 400;
    }

    let startId = event.body["startId"];
    let endId = event.body["endId"];

    let entitiesList = await range(startId, endId);

    if (entitiesList === 404) {
        return entitiesList;
    }
    let entitiesOrdered = await orderByName(entitiesList);

    return entitiesOrdered;
};

module.exports.entitiesList = entitiesList;


