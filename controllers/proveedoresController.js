const proveedoresService = require('../services/proveedoresService');

exports.obtenerProveedores = async (req, res) => {
  try {
    const proveedores = await proveedoresService.obtenerTodos();
    res.json(proveedores);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener proveedores' });
  }
};

exports.agregarProveedor = async (req, res) => {
  try {
    const nuevoProveedor = await proveedoresService.crear(req.body);
    res.status(201).json(nuevoProveedor);
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar el proveedor' });
  }
};

exports.eliminarProveedor = async (req, res) => {
  try {
    const { id } = req.params;
    await proveedoresService.eliminar(id);
    res.status(200).json({ mensaje: 'Proveedor eliminado correctamente' }); 
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el proveedor' });
  }
};

