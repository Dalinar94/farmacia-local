const express = require('express');
const router = express.Router();
const proveedoresController = require('../controllers/proveedoresController');

router.get('/', proveedoresController.obtenerProveedores);
router.post('/agregar', proveedoresController.agregarProveedor);

module.exports = router;
