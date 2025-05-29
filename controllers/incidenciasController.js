const incidenciasService = require('../services/incidenciasService');

exports.registrarIncidencia = async (req, res) => {
  const { tipoIncidencia, descripcion } = req.body;

  try {
    await incidenciasService.crearIncidencia({ tipoIncidencia, descripcion });
    res.status(201).json({ mensaje: 'Incidencia registrada correctamente' });
  } catch (error) {
    console.error('Error al registrar incidencia:', error);
    res.status(500).json({ mensaje: 'Error al registrar la incidencia' });
  }
};

