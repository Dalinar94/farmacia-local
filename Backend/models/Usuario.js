const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nombre:{
    type:String,
    required :true
  },
  email: {
      type: String,
      required: true
  },
  telefono: {
      type: String,
      required: true
  },

  direccion:{
      type: String,
      required: true
  },

  password:{
      type: String,
      required: true
  },
  role:{
      type: String,
      enum: ['admin', 'user'],
      default: 'user'
  }
});

module.exports = mongoose.model('usuarios', UsuarioSchema,'usuarios');
