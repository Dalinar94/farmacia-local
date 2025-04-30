const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/Tfg_FarmaStock', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Definir el esquema y modelo de productos
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  stock: Number,
  price: Number,
});

const Product = mongoose.model('Product', productSchema);

// Endpoint para obtener todos los productos

//Que es un endpoint?

//Un endpoint es una URL que permite acceder a un recurso específico en una API.
//En el contexto de una API REST, cada endpoint representa una 
//operación específica que se puede realizar sobre un recurso, como obtener, 
//crear, actualizar o eliminar datos.
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los productos' });
  }
});

// Iniciar el servidor
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});