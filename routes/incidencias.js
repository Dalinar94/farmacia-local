const express = require('express');
const router = express.Router();
const incidenciasController = require('../controllers/incidenciasController');

router.post('/', incidenciasController.registrarIncidencia);

module.exports = router;
// Este archivo define las rutas relacionadas con las incidencias. Utiliza el controlador incidenciasController para manejar las solicitudes POST para registrar nuevas incidencias.