const express = require('express'); //Importando express
const cors = require('cors'); //Importando cors, para poder hacer peticiones desde cualquier dominio

const router = require('./src/routes');

const {json, urlencoded} = express; //Importando json y urlencoded de express

const app = express(); //aplicacion que es el servidor que va a estar corriendo

const port = 3030; //Puerto por el cual se va a exponer

app.use(json()); //Para devolver un json
app.use(urlencoded({extended: false})); //Para tener acceso a lo que tiene la url

//Opciones de los cors
const corsOptions = {
    //Origin todos
    origin: '*',
    optionsSuccesStatus: 200
}

//Creando router
app.use(router);

//Asignando opciones al servidor
app.use(cors(corsOptions));

//Path
app.use('/', (req, res) => {
    res.send('This is the microservice 1 v1.0.0');
})

//Haciendo que la aplicacion escuche las llamadas
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
 