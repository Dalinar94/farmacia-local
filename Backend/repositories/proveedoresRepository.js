const Proveedor = require('../models/Proveedor');

exports.findAll = () => Proveedor.find();
exports.create = (data) => new Proveedor(data).save();
exports.eliminar = (id) => Proveedor.findByIdAndDelete(id);
// exports.actualizar = (id, data) => Proveedor.findByIdAnd