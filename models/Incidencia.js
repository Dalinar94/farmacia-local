const mongoose = require('mongoose');

const IncidenciaSchema = new mongoose.Schema({
  tipoIncidencia: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  fecha: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('incidencias', IncidenciaSchema, 'incidencias');
