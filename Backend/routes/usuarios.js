const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario'); // tu modelo de usuario
const bcrypt = require('bcryptjs');

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const usuario = await Usuario.findOne({ email });
        if (!usuario) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }

        const esValido = await bcrypt.compare(password, usuario.password);
        if (!esValido) {
            return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
        }

        res.json({ mensaje: 'Login exitoso', usuario });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error en el servidor' });
    }
});


/*router.get('/', async (req, res) => {
 try {
    const usuarios = await Usuario.find(); // Esto devuelve todos los usuarios
    res.json(usuarios);
 } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los usuarios' });
 }
});
*/

// REGISTRO
router.post('/register', async (req, res) => {
  const { nombre, email, password, telefono, direccion } = req.body;

  try {
    const usuarioExistente = await Usuario.findOne({ email });
    if (usuarioExistente) {
      return res.status(400).json({ mensaje: 'El usuario ya existe' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const nuevoUsuario = new Usuario({
      nombre,
      email,
      telefono,
      direccion,
      password: hashedPassword
    });

    await nuevoUsuario.save();
    res.status(201).json({ mensaje: 'Usuario registrado exitosamente' });
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).json({ mensaje: 'Error al registrar el usuario' });
  }
});




module.exports = router;
