const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const usuariosRepository = require('../repositories/usuariosRepository');


const JWT_SECRET = process.env.JWT_SECRET || 'clave_secreta_segura';

exports.login = async (email, password) => {
 
const usuario = await usuariosRepository.findByEmail(email);
 if (!usuario) return null;

const esValido = await bcrypt.compare(password, usuario.password);
 if (!esValido) return null;

const token = jwt.sign({ id: usuario._id, rol:usuario.rol }, JWT_SECRET, { expiresIn: '1h' });
   return {
   token,
   usuario: {
      id: usuario._id,
      nombre: usuario.nombre,
      email: usuario.email,
      telefono: usuario.telefono,
      direccion: usuario.direccion,
      rol: usuario.role
   }
 };
};
exports.updateRol = async (id, rol) => {
 
const usuario = await usuariosRepository.findById(id);
 if (!usuario) return null;

const esValido = await bcrypt.compare(password, usuario.password);
 if (!esValido) return null;

const token = jwt.sign({ id: usuario._id, rol:rol }, JWT_SECRET, { expiresIn: '1h' });
   return {
   token,
   usuario: {
      id: usuario._id,
      nombre: usuario.nombre,
      email: usuario.email,
      telefono: usuario.telefono,
      direccion: usuario.direccion,
      rol:usuario.role
   }
 };
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
exports.actualizarUsuario = async (id, datos) => {
  const { nombre, email, telefono, direccion, password } = datos;

  const datosActualizados = { nombre, email, telefono, direccion };

  if (password) {
    const salt = await bcrypt.genSalt(10);
    datosActualizados.password = await bcrypt.hash(password, salt);
  }

  return usuariosRepository.updateById(id, datosActualizados);
};
