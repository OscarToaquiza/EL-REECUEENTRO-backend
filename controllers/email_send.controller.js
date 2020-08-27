const { response } = require('express');
const nodemailer = require('nodemailer');

const reservacionCtrl = async (req,res = response) => {

    const {
        nombres,
        apellidos,
        correo,
        telefono,
        fechaPrevista,
        numPersonas,
        observacion
    } = req.body;

    try {        
      
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            auth: {
                user: 'awaysoftware.info@gmail.com',
                pass: '01ago2018M'
            }
        });
        
        // send email
        const email = await transporter.sendMail({
            from: 'awaysoftware.info@gmail.com',
            to: correo,
            subject: '-RESERVA EL REENCUENTRO-',
            html: `Hola ${nombres} ${apellidos} hemos resivido tu correo electronico de manera segura.
            estamos confirmando la siguiente información resivida:<br>
            Nombres: ${nombres} <br>
            Apellidos: ${apellidos} <br>
            Telefono: ${telefono} <br>
            Fecha Prevista: ${fechaPrevista} <br>
            Numero Personas: ${numPersonas} <br>
            Observación: ${observacion} <br>
            `
        },(err) => {
            if(err){
                res.status(500).json({
                    ok: false
                });
            }else{
                res.status(200).json({
                    ok: true
                });
            }
        });

        console.log(email);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg: 'Error en el servidor'
        });
    }
}


const contactoCtrl = async (req,res = response) => {

    const {
        nombres,
        apellidos,
        correo,
        telefono,
        msg
    } = req.body;

    try {        
      
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            auth: {
                user: 'awaysoftware.info@gmail.com',
                pass: '01ago2018M'
            }
        });
        
        // send email
        const email = await transporter.sendMail({
            from: 'awaysoftware.info@gmail.com',
            to: correo,
            subject: '-CONTACTOS EL REENCUENTRO-',
            html: `Hola ${nombres} ${apellidos} hemos resivido tu correo electronico de manera segura.
            estamos confirmando la siguiente información resivida:<br>
            
            Mensaje: ${msg} <br>
            TelefonoContacto: ${telefono} <br>
            <br>
            Gracias por tus comentarios.

            `
        },(err) => {
            if(err){
                res.status(500).json({
                    ok: false
                });
            }else{
                res.status(200).json({
                    ok: true
                });
            }
        });

        console.log(email);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg: 'Error en el servidor'
        });
    }
}


module.exports = {
    reservacionCtrl,
    contactoCtrl
}