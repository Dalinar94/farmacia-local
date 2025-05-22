const express = require('express');
const connectDB = require('./dataBase');
require('dotenv').config();
const path = require('path');
const app = express();

const cors = require('cors');
app.use(cors());

// Conectar a la base de datos
connectDB();



//archivos de imagen locales
app.use('/img', express.static(path.join(__dirname,'img')));

// Middleware para parsear JSON
app.use(express.json());

// Ruta de ejemplo para productos
app.use('/api/products', require('./routes/productos'));
app.use('/api/proveedores', require('./routes/proveedores'));
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/incidencias', require('./routes/incidencias'));



const PORT = process.env.PORT || 5000;
const IP = '172.19.80.107';

app.listen(PORT,IP,() => console.log(`Server running on port ${IP}`));
