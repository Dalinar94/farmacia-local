const express = require('express');
const connectDB = require('./dataBase');
require('dotenv').config();
const path = require('path');
const app = express();
const cors = require('cors');
const IP = '192.168.99.50';


// Conectar a la base de datos
connectDB();

//habilitar el cors
app.use(cors());

//archivos de imagen locales
app.use('/img', express.static(path.join(__dirname,'img')));

// Middleware para parsear JSON
app.use(express.json());

// Ruta de ejemplo para productos
app.use('/api/products', require('./routes/productos'));
app.use('/api/usuarios', require('./routes/usuarios'));
app.get('/api/products',(req,res)=>{});

const PORT = process.env.PORT || 5000;

app.listen(PORT,IP () => console.log(`Server running on port ${IP}`));
