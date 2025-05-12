const express = require('express');
const connectDB = require('./db');
const dotenv = require('dotenv');
const Ejemplo = require('./model');

dotenv.config();

const app = express();

// Conectar a la base de datos
connectDB();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});

// Ruta para crear un documento
app.post('/api/ejemplos', async (req, res) => {
  try {
    const { nombre, valor } = req.body;
    const nuevoEjemplo = new Ejemplo({ nombre, valor });
    await nuevoEjemplo.save();
    res.status(201).json(nuevoEjemplo);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el documento', error });
  }
});

// Ruta para leer documentos
app.get('/api/ejemplos', async (req, res) => {
  try {
    const ejemplos = await Ejemplo.find({});
    res.status(200).json(ejemplos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los documentos', error });
  }
});

// Ruta para actualizar un documento
app.put('/api/ejemplos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, valor } = req.body;
    const ejemploActualizado = await Ejemplo.findByIdAndUpdate(id, { nombre, valor }, { new: true });
    res.status(200).json(ejemploActualizado);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el documento', error });
  }
});

// Ruta para eliminar un documento
app.delete('/api/ejemplos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Ejemplo.findByIdAndDelete(id);
    res.status(200).json({ message: 'Documento eliminado' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el documento', error });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
