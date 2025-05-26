const bcrypt = require('bcryptjs');
const usuariosRepository = require('../repositories/usuariosRepository');

exports.login = async (email, password) => {
  const usuario = await usuariosRepository.findByEmail(email);
  if (!usuario) return null;

  const esValido = await bcrypt.compare(password, usuario.password);
  return esValido ? usuario : null;
};

exports.register = async ({ nombre, email, password, telefono, direccion }) => {
  const usuarioExistente = await usuariosRepository.findByEmail(email);
  if (usuarioExistente) {
    throw new Error('El usuario ya existe');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const nuevoUsuario = {
    nombre,
    email,
    telefono,
    direccion,
    password: hashedPassword,
  };

  return usuariosRepository.create(nuevoUsuario);
};
