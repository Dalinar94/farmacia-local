const proveedoresRepository = require('../repositories/proveedoresRepository');

exports.obtenerTodos = () => proveedoresRepository.findAll();
exports.crear = (data) => proveedoresRepository.create(data);
