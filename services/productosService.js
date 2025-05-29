const productosRepository = require('../repositories/productosRepository');

exports.obtenerTodos = () => productosRepository.findAll();
exports.crear = (data) => productosRepository.create(data);
exports.actualizar = (id, data) => productosRepository.update(id, data);
exports.eliminar = (id) => productosRepository.remove(id);
