const express = require('express');
const router = express.Router();
const proveedoresController = require('../controllers/proveedoresController');

router.get('/', proveedoresController.obtenerProveedores);
router.post('/agregar', proveedoresController.agregarProveedor);
router.delete('/:id', proveedoresController.eliminarProveedor);
//router.put('/:id', proveedoresController.actualizarProveedor);
module.exports = router;
