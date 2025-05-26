const incidenciasRepository = require('../repositories/incidenciasRepository');
const enviarCorreo = require('../utils/mailer');

exports.crearIncidencia = async ({ tipoIncidencia, descripcion }) => {
  await incidenciasRepository.create({ tipoIncidencia, descripcion });

  await enviarCorreo({
    to: 'soporte.farmastock@gmail.com',
    subject: 'Nueva incidencia registrada',
    text: `Tipo: ${tipoIncidencia}\nDescripción: ${descripcion}`,
  });
};
