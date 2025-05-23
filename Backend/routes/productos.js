const express = require('express');
const router = express.Router();
const Producto = require('../models/Producto');

// Ejemplo de ruta GET
router.get('/', async (req, res) => {
  try{
    const productos = await Producto.find();
    res.json(productos);
  }catch (error){
    res.status(500).json({error: 'Error al obtener productos'});
  }
});

// Ruta para agregar un producto
router.post('/agregar', async (req, res) => {
  try {
    const nuevoProducto = new Producto(req.body);
    await nuevoProducto.save();
    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar el producto' });
  }
});

// Editar un producto existente
router.put('/:id', async (req, res) => {
  
console.log('ID recibido:', req.params.id);
console.log('Datos recibidos:', req.body);

  try {
    const productoActualizado = await Producto.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Devuelve el documento actualizado
    );

    if (!productoActualizado) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.json(productoActualizado);
  } catch (error) {
    console.error('Error al actualizar producto:', error);
    res.status(500).json({ error: 'Error al actualizar el producto' });
  }
});

// Eliminar un producto por ID
router.delete('/:id', async (req, res) => {
  try {
    const productoEliminado = await Producto.findByIdAndDelete(req.params.id);
    if (!productoEliminado) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.json({ message: 'Producto eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar producto:', error);
    res.status(500).json({ error: 'Error al eliminar el producto' });
  }
});



module.exports = router;
