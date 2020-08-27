const express = require('express');
const cors = require('cors'); 

//console.log(process.env);

// Crear el servidor de express
const app = express();
//Configurar cors
app.use( cors() );

//Lectura y parseo del body
app.use( express.json() );

//Directorio piblico
app.use(express.static('public'));

//Rutas
const email_send = require('./routes/email_send.routes');

app.use('/api/send/email',email_send);

app.listen( 3000, () => {
    console.log("Servidor corriendo en el puerto " + 3000);
});