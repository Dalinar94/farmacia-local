// server.js
const express = require('express');
const connectDB = require('./db');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Conectar a la base de datos
connectDB();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
