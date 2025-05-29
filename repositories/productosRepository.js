const Producto = require('../models/Producto');

exports.findAll = () => Producto.find();
exports.create = (data) => new Producto(data).save();
exports.update = (id, data) => Producto.findByIdAndUpdate(id, data, { new: true });
exports.remove = (id) => Producto.findByIdAndDelete(id);
