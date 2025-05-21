const express = require('express');
const router = express.Router();
const Producto = require('../models/Producto');
const os = require('os');

const PORT = process.env.PORT || 5000;

// Función para obtener la IP local
function getLocalIP() {
    const interfaces = os.networkInterfaces();
    for (let iface in interfaces) {
        for (let i of interfaces[iface]) {
            if (i.family === 'IPv4' && !i.internal) {
                return i.address;
            }
        }
    }
    return 'localhost';
}

const isProduction = process.env.NODE_ENV === 'production';
const HOST = isProduction ? getLocalIP() : 'localhost';

// Ruta GET para productos
router.get('/', async (req, res) => {
    try {
        const productos = await Producto.find();

        // Modificar la URL de la imagen para cada producto
        const productosConImg = productos.map(producto => ({
            ...producto.toObject(),
            img: `http://${HOST}:${PORT}/img/${producto.img}`
        }));

        res.json(productosConImg);
    } catch (error) {
        console.error('Error al obtener productos:', error);
        res.status(500).json({ error: 'Error al obtener productos' });
    }
});

module.exports = router;
