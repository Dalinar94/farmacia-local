const Usuario = require('../models/Usuario');

exports.findByEmail = (email) => Usuario.findOne({ email });
exports.create = (data) => new Usuario(data).save();
