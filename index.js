const express = require('express');
const cors = require('cors'); 
const path = require('path');

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

app.get('*',(req,res)=>{
    res.sendFile(  path.resolve(__dirname, 'public/index.html') );
});

app.listen( 5000, () => {
    console.log("Servidor de correo corriendo en el puerto " + 5000);
});