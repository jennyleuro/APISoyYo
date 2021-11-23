const fetch = require('node-fetch');

async function resAsync(entityID) {
    const res = fetch("https://awovcw7p76.execute-api.us-east-1.amazonaws.com/dev/entity/v2.1/entities/" + entityID, {
        method: "GET",
        headers: { 'Content-Type': 'application/json' }
    }
    ).then((respuesta) => {
        return respuesta.json();
    }).then((resp) => {
        console.log(resp);
    })
}

module.exports.resAsync = resAsync;