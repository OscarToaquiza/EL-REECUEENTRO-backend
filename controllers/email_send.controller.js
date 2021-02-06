const { response } = require('express');
const smtpTransport = require('nodemailer-smtp-transport');
const mailjet = require('node-mailjet').connect('057ae2584c3e4bee3ec46a8f5b7626a8', 'cd70018c0ae8953b916bcbd523587444')

const cuerpoEmail = `<body style="background-color:#F4F4F4;">
<div style="background-color:#F4F4F4;">

<div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
style="background:#ffffff;background-color:#ffffff;width:100%;">
<tbody>
<tr>
<td style="direction:ltr;font-size:0px;padding:0 0 0 0;text-align:center;">

<div class="mj-column-per-100 mj-outlook-group-fix"
style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
  <tbody>
    <tr>
      <td style="vertical-align:top;padding:0 0 0 0;">
        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
          <tr>
            <td align="left"
              style="font-size:0px;padding:20px 0 0 0;padding-top:20px;padding-bottom:0px;word-break:break-word;">
              <div
                style="font-family:Arial, sans-serif;font-size:13px;letter-spacing:normal;line-height:1;text-align:left;color:#000000;">
                <p class="text-build-content"
                  style="text-align: center; margin: 10px 0; margin-top: 10px; margin-bottom: 10px;"
                  data-testid="nkxjIcLgAszER"><span
                    style="color:#000000;font-family:Arial;font-size:22px;line-height:22px;"><b>Mensaje
                      recibido</b></span></p>
              </div>
            </td>
          </tr>
          <tr>
            <td align="center"
              style="font-size:0px;padding:0px 0px 10px 0px;padding-top:0px;padding-right:0px;padding-bottom:10px;padding-left:0px;word-break:break-word;">
              <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                style="border-collapse:collapse;border-spacing:0px;" class="mj-full-width-mobile">
                <tbody>
                  <tr>
                    <td style="width:600px;" class="mj-full-width-mobile"><img alt="" height="auto"
                        src="https://el-reencuentro.com/assets/images/granja/el_rencuentro.png"
                        style="border:none;border-radius:25px;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;"
                        width="600"></td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td align="left"
              style="font-size:0px;padding:0 0 0 0;padding-top:0px;padding-bottom:0px;word-break:break-word;">
              <div
                style="font-family:Arial, sans-serif;font-size:13px;letter-spacing:normal;line-height:1;text-align:left;color:#000000;">
                <p class="text-build-content"
                  style="text-align: center; margin: 10px 0; margin-top: 10px;"
                  data-testid="fp8oEEbTz33Or"><b><u>Bienvenido</u></b></p>
                <p class="text-build-content" style="text-align: center; margin: 10px 0;"
                  data-testid="fp8oEEbTz33Or">El Reencuentro Web te saluda</p>
                <p class="text-build-content" style="text-align: center; margin: 10px 0;"
                  data-testid="fp8oEEbTz33Or">Recibimos tu mensaje de forma correcta, una vez verificada
                  tu información te contactaremos y estaremos a gusto de recibir tus sugerencias, dudas
                  o comentarios.&nbsp;</p>
                <p class="text-build-content" style="text-align: center; margin: 10px 0;"
                  data-testid="fp8oEEbTz33Or">&nbsp;</p>
                <p class="text-build-content"
                  style="text-align: center; margin: 10px 0; margin-bottom: 10px;"
                  data-testid="fp8oEEbTz33Or">¡Gracias por contactarnos!</p>
              </div>
            </td>
          </tr>
          <tr>
            <td align="center" vertical-align="middle"
              style="font-size:0px;padding:10px 25px;padding-bottom:20px;word-break:break-word;">
              <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                style="border-collapse:separate;line-height:100%;">
                <tr>
                  <td align="center" bgcolor="#6ccc1e" role="presentation"
                    style="border:none;border-radius:203px;cursor:auto;mso-padding-alt:10px 25px;background:#6ccc1e;"
                    valign="middle"><a href="https://el-reencuentro.com/"
                      style="display:inline-block;background:#6ccc1e;color:#ffffff;font-family:Arial, sans-serif;font-size:13px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0px;border-radius:203px;"
                      target="_blank">Visitar web</a></td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td
              style="font-size:0px;padding:10px 25px;padding-top:10px;padding-bottom:10px;word-break:break-word;">
              <p style="border-top:dotted 1px #C2C2C2;font-size:1px;margin:0px auto;width:100%;"></p>
              
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </tbody>
</table>
</div>

</td>
</tr>
</tbody>
</table>
</div>

<div style="background:#FFFFFF;background-color:#FFFFFF;margin:0px auto;max-width:600px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
style="background:#FFFFFF;background-color:#FFFFFF;width:100%;">
<tbody>
<tr>
<td
style="direction:ltr;font-size:0px;padding:0px 0 0px 0;padding-bottom:0px;padding-top:0px;text-align:center;">
<div class="mj-column-per-100 mj-outlook-group-fix"
style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
  <tbody>
    <tr>
      <td style="vertical-align:middle;padding:0 0 0 0;">
        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
          <tr>
            <td align="left"
              style="background:#ffffff;font-size:0px;padding:0 0 10px 0;padding-top:0px;padding-bottom:10px;word-break:break-word;">
              <div
                style="font-family:Arial, sans-serif;font-size:13px;letter-spacing:normal;line-height:1;text-align:left;color:#000000;">
                <p class="text-build-content"
                  style="text-align: center; margin: 10px 0; margin-top: 10px; margin-bottom: 10px;"
                  data-testid="NPRro6BzQV1vO">Visítanos en nuestras redes sociales</p>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </tbody>
</table>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div style="margin:0px auto;max-width:600px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
<tbody>
<tr>
<td
style="direction:ltr;font-size:0px;padding:0px 0 0px 0;padding-bottom:0px;padding-top:0px;text-align:center;">
<div class="mj-column-per-100 mj-outlook-group-fix"
style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
  <tbody>
    <tr>
      <td style="vertical-align:middle;padding:0 0 0 0;">
        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
          <tr>
            <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
            
              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                style="float:none;display:inline-table;">
                <tr>
                  <td style="padding:4px;">
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                      style="background:#3B5998;border-radius:3px;width:20px;">
                      <tr>
                        <td style="font-size:0;height:20px;vertical-align:middle;width:20px;"><a
                            href="https://www.facebook.com/GranjaElReencuento" target="_blank"><img
                              height="20"
                              src="https://www.mailjet.com/images/theme/v1/icons/ico-social/facebook.png"
                              style="border-radius:3px;display:block;" width="20"></a></td>
                      </tr>
                    </table>
                  </td>
                  <td style="vertical-align:middle;"><a
                      href="https://www.facebook.com/GranjaElReencuento"
                      style="color:#333333;font-size:13px;font-family:Ubuntu, Helvetica, Arial, sans-serif;line-height:22px;text-decoration:none;"
                      target="_blank">El Reencuentro - Facebook Oficial</a></td>
                </tr>
              </table>
             
              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                style="float:none;display:inline-table;">
                <tr>
                  <td style="padding:4px;">
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                      style="background:#405DE6;border-radius:3px;width:20px;">
                      <tr>
                        <td style="font-size:0;height:20px;vertical-align:middle;width:20px;"><a
                            href="https://www.instagram.com/elreencuentro90/" target="_blank"><img
                              height="20"
                              src="https://www.mailjet.com/images/theme/v1/icons/ico-social/instagram.png"
                              style="border-radius:3px;display:block;" width="20"></a></td>
                      </tr>
                    </table>
                  </td>
                  <td style="vertical-align:middle;"><a
                      href="https://www.instagram.com/elreencuentro90/"
                      style="color:#333333;font-size:13px;font-family:Ubuntu, Helvetica, Arial, sans-serif;line-height:22px;text-decoration:none;"
                      target="_blank">El Reencuentro - Instagram</a></td>
                </tr>
              </table>
             
              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                style="float:none;display:inline-table;">
                <tr>
                  <td style="padding:4px;">
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                      style="background:#FF0000;border-radius:3px;width:20px;">
                      <tr>
                        <td style="font-size:0;height:20px;vertical-align:middle;width:20px;"><a
                            href="https://www.youtube.com/channel/UCGn0kMRLgvSzA2uXdG4dRuw"
                            target="_blank"><img height="20"
                              src="https://www.mailjet.com/images/theme/v1/icons/ico-social/youtube.png"
                              style="border-radius:3px;display:block;" width="20"></a></td>
                      </tr>
                    </table>
                  </td>
                  <td style="vertical-align:middle;"><a
                      href="https://www.youtube.com/channel/UCGn0kMRLgvSzA2uXdG4dRuw"
                      style="color:#333333;font-size:13px;font-family:Ubuntu, Helvetica, Arial, sans-serif;line-height:22px;text-decoration:none;"
                      target="_blank">El Reencuentro - YouTube</a></td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </tbody>
</table>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</body>`;


const contactoCtrl = async (req, res = response) => {
  const {
    nombres,
    correo,
  } = req.body;


  const request = mailjet
    .post("send", { 'version': 'v3.1' }).request({
      "Messages": [
        {
          "From": {
            "Email": "elreencuentroreservas@gmail.com",
            "Name": "El Reencuentro Web"
          },
          "To": [
            {
              "Email": correo,
              "Name": nombres
            }
          ],
          "Subject": "Contacto",
          "HTMLPart": cuerpoEmail
        }
      ]
    })
  request
    .then((result) => {
      console.log(result.body)
      console.log("Mensaje cliente enviado OK");
      contactLocal(req, res);
    })
    .catch((err) => {
      console.log(err.statusCode)
      res.status(500).json({
        ok: false,
        msg: 'Error al envir mensaje'
      });
    });
}

const contactLocal = async (req, res = response) => {
  const {
    nombres,
    apellidos,
    correo,
    telefono,
    msg
  } = req.body;


  const request = mailjet
    .post("send", { 'version': 'v3.1' }).request({
      "Messages": [
        {
          "From": {
            "Email": "elreencuentroreservas@gmail.com",
            "Name": "El Reencuentro Web"
          },
          "To": [
            {
              "Email": "elreencuentroreservas@gmail.com",
              "Name": nombres
            }
          ],
          "Subject": "Contacto",
          "HTMLPart": `
                    Email resivido de la pagina de CONTACTOS <br>
                    Infromación obtenida <br>
                    Nombres: ${nombres} <br>
                    Apellidos: ${apellidos} <br>
                    Correo: ${correo} <br>
                    Telefono: ${telefono} <br>
                    Mensaje: ${msg} <br>
                              `
        }
      ]
    })
  request
    .then((result) => {
      console.log(result.body)
      res.status(200).json({
        ok: true
      });
    })
    .catch((err) => {
      console.log(err.statusCode)
      res.status(500).json({
        ok: false,
        msg: 'Error en el servidor'
      });
    });
}


const reservacionCtrl = async (req, res = response) => {
  const {
    nombres,
    correo,
  } = req.body;


  const request = mailjet
    .post("send", { 'version': 'v3.1' }).request({
      "Messages": [
        {
          "From": {
            "Email": "elreencuentroreservas@gmail.com",
            "Name": "El Reencuentro Web"
          },
          "To": [
            {
              "Email": correo,
              "Name": nombres
            }
          ],
          "Subject": "Contacto - Reserva",
          "HTMLPart": cuerpoEmail
        }
      ]
    })
  request
    .then((result) => {
      reservacionLocal(req, res);
    })
    .catch((err) => {
      console.log(err.statusCode)
      res.status(500).json({
        ok: false,
        msg: 'Error al enviar mensaje'
      });
    });
}


const reservacionLocal = async (req, res = response) => {

  const {
    nombres,
    apellidos,
    correo,
    telefono,
    fechaPrevista,
    numPersonas,
    observacion
  } = req.body;


  const request = mailjet
    .post("send", { 'version': 'v3.1' }).request({
      "Messages": [
        {
          "From": {
            "Email": "elreencuentroreservas@gmail.com",
            "Name": "El Reencuentro Web"
          },
          "To": [
            {
              "Email": "elreencuentroreservas@gmail.com",
              "Name": "RESERVA"
            }
          ],
          "Subject": "CONTACTO - RESERVA",
          "HTMLPart": `
              Datos obtenidos de <strong> CONSULTA - RESERVA <strong> <br>
              Nombres: ${nombres} <br>
              Apellidos: ${apellidos} <br>
              Telefono: ${telefono} <br>
              Fecha Prevista: ${fechaPrevista} <br>
              Numero Personas: ${numPersonas} <br>
              Observación: ${observacion} <br>
                        `
        }
      ]
    })
  request
    .then((result) => {
      res.status(200).json({
        ok: true
      });
    })
    .catch((err) => {
      console.log(err.statusCode)
      res.status(500).json({
        ok: false,
        msg: 'Error en el servidor'
      });
    });
}

module.exports = {
  reservacionCtrl,
  contactoCtrl
}