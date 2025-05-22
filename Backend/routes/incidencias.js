const express = require('express');
const router = express.Router();
const Incidencia = require('../models/Incidencia');

router.post('/', async (req, res) => {
  const { tipoIncidencia, descripcion } = req.body;
  const enviarCorreo = require('../utils/mailer');

  try {
    const nuevaIncidencia = new Incidencia({ tipoIncidencia, descripcion });
    await nuevaIncidencia.save();
    res.status(201).json({ mensaje: 'Incidencia registrada correctamente' });

    
    await enviarCorreo({
        to: 'soporte.farmastock@gmail.com',
        subject: 'Nueva incidencia registrada',
        text: `Tipo: ${tipoIncidencia}\nDescripción: ${descripcion}`
    });

  } catch (error) {
    console.error('Error al registrar incidencia:', error);
    res.status(500).json({ mensaje: 'Error al registrar la incidencia' });
  }
});

module.exports = router;
