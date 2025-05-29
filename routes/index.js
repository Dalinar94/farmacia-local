const express = require('express');
const router = express.Router();

router.use('/products', require('./productos'));
router.use('/proveedores', require('./proveedores'));
router.use('/usuarios', require('./usuarios'));
router.use('/incidencias', require('./incidencias'));

module.exports = router;
// Este archivo define las rutas principales de la API, agrupando las rutas de productos, proveedores, usuarios e incidencias.
