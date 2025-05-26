const Incidencia = require('../models/Incidencia');

exports.create = (data) => new Incidencia(data).save();
