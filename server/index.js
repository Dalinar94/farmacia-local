const express = require('express');
const connectDB = require('./dataBase');
require('dotenv').config();

const app = express();
const cors = require('cors');

// Conectar a la base de datos
connectDB();

// Middleware para parsear JSON
app.use(express.json());
app.use(cors())

// Ruta de ejemplo para productos
app.use('/api/products', require('./routes/productos'));
app.use('/api/usuarios', require('./routes/usuarios'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
