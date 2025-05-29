const express = require('express');
const connectDB = require('./config/dataBase');
require('dotenv').config();
const path = require('path');
const cors = require('cors');

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/img', express.static(path.join(__dirname, 'img')));

// Rutas
const routes = require('./routes');
app.use('/api', routes);

// Servidor
const PORT = process.env.PORT || 5000;
const IP = '10.0.8.160';

app.listen(PORT, IP, () => {
  console.log(`Servidor corriendo en http://${IP}:${PORT}`);
});

// Este archivo es el punto de entrada de la aplicación, configura el servidor Express, conecta a la base de datos y define las rutas principales.

