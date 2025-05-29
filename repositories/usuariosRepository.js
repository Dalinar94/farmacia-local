const Usuario = require('../models/Usuario');

exports.findByEmail = (email) => Usuario.findOne({ email });
exports.create = (data) => new Usuario(data).save();
exports.findById = (id) => Usuario.findById(id);


exports.updateById = (id, datosActualizados) =>
Usuario.findByIdAndUpdate(id, datosActualizados, { new: true });

