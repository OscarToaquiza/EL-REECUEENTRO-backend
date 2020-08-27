/**
 * Ruta: /api/usuarios
 */
const { Router } = require('express');
const { reservacionCtrl,contactoCtrl } = require('../controllers/email_send.controller');
const router = Router();

router.post('/reserva', reservacionCtrl);
router.post('/contacto', contactoCtrl);

module.exports = router