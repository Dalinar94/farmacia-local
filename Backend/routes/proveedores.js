const express = require('express');
const router = express.Router();
const Proveedor = require('../models/Proveedor');

// Ejemplo de ruta GET
router.get('/', async (req, res) => {
    const proveedor = await Proveedor.find();
    res.json(proveedor);
});

module.exports = router;
