const productosService = require('../services/productosService');

exports.obtenerProductos = async (req, res) => {
  try {
    const productos = await productosService.obtenerTodos();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos' });
  }
};

exports.agregarProducto = async (req, res) => {
  try {
    const nuevoProducto = await productosService.crear(req.body);
    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar el producto' });
  }
};

exports.editarProducto = async (req, res) => {
  try {
    const productoActualizado = await productosService.actualizar(req.params.id, req.body);
    if (!productoActualizado) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.json(productoActualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el producto' });
  }
};

exports.eliminarProducto = async (req, res) => {
  try {
    const eliminado = await productosService.eliminar(req.params.id);
    if (!eliminado) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.json({ message: 'Producto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el producto' });
  }
};
