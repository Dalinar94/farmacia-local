const express = require('express');
const router = express.Router();
const Producto = require('../models/Producto');

// Ejemplo de ruta GET
router.get('/', async (req, res) => {
    const productos = await Producto.find();
    res.json(productos);
});

// Ruta para agregar un producto
router.post('/agregar', async (req, res) => {
  try {
    const nuevoProducto = new Producto(req.body);
    await nuevoProducto.save();
    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar el producto' });
  }
});



module.exports = router;
