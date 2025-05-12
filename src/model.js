const mongoose = require('mongoose');

const ejemploSchema = new mongoose.Schema({
    nombre: String,
    valor: Number,
});

const Ejemplo = mongoose.model('Ejemplo', ejemploSchema);

module.exports = Ejemplo;
