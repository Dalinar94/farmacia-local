const usuariosService = require('../services/usuariosService');

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const usuario = await usuariosService.login(email, password);
    if (!usuario) {
      return res.status(401).json({ mensaje: 'Credenciales inválidas' });
    }
    res.json({ mensaje: 'Login exitoso', usuario });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error en el servidor' });
  }
};

exports.register = async (req, res) => {
  try {
    const nuevoUsuario = await usuariosService.register(req.body);
    res.status(201).json({ mensaje: 'Usuario registrado exitosamente', usuario: nuevoUsuario });
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};
