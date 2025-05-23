const express = require('express');
const router = express.Router();
const Proveedor = require('../models/Proveedor');

// Ejemplo de ruta GET
router.get('/', async (req, res) => {
    const proveedor = await Proveedor.find();
    res.json(proveedor);
});

// Ruta para agregar un proveedor
router.post('/agregar', async (req, res) => {
  try {
    const nuevoProveedor = new Producto(req.body);
    await nuevoProveedor.save();
    res.status(201).json(nuevoProveedor);
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar el proveedor' });
  }
});

module.exports = router;
