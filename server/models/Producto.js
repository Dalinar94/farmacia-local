const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({

    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },

});

module.exports = mongoose.model('products', ProductoSchema, 'products');
