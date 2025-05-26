const Proveedor = require('../models/Proveedor');

exports.findAll = () => Proveedor.find();
exports.create = (data) => new Proveedor(data).save();
