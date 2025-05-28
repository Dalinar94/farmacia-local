const proveedoresRepository = require('../repositories/proveedoresRepository');

exports.obtenerTodos = () => proveedoresRepository.findAll();
exports.crear = (data) => proveedoresRepository.create(data);
exports.eliminar = (id) => proveedoresRepository.eliminar(id);
//exports.actualizar = (id, data) => proveedoresRepository.actualizar(id, data);