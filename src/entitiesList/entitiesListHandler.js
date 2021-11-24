//Entrada de todo

//Import de la clase
const response = require("../../config/fetch");

const range = async (startId, endId) => {
    try {
        let entities = [];
        for (let i = startId; i <= endId; i++) {
            let entity = await response.resAsync(i);
            if (Object.keys(entity.data).length === 0) {
                throw 404;
            }
            entities.push(entity.data);
            //console.log(test.data);
        }
        return entities;
    } catch (error) {
        console.log("Esta vacio");
        return error;
    }

};

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

const entitiesList = async (event) => {

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


