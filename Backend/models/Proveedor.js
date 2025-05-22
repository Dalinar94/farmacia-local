const mongoose = require('mongoose');

const ProveedorSchema = new mongoose.Schema({

    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    direccion:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('proveedores', ProveedorSchema, 'proveedores');
