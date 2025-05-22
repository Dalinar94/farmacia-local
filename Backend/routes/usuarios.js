const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario.'); // Asegúrate de que este modelo exista

// Obtener todos los usuarios
router.get('/', async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los usuarios' });
    }
});

// Crear un nuevo usuario
router.post('/', async (req, res) => {
    try {
        const nuevoUsuario = new Usuario(req.body);
        await nuevoUsuario.save();
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el usuario' });
    }
});

module.exports = router;
