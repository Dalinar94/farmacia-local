const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

router.get('/', productosController.obtenerProductos);
router.post('/agregar', productosController.agregarProducto);
router.put('/:id', productosController.editarProducto);
router.delete('/:id', productosController.eliminarProducto);

module.exports = router;
