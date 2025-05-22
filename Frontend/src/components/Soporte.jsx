import React, { useState } from 'react';
import Navbar from './common/Navbar'; // Importar la barra de navegación
import Footer from './common/Footer'; // Importar el componente de pie de página
import { TITULOS,BOTONES,LABELS,ENLACES,OPTIONS,INFORMACION } from '../lib/constantes';
import {colors} from "@mui/material";

const Soporte = () => {
  const [formData, setFormData] = useState({
    tipoIncidencia: '',
    descripcion: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://172.19.80.107:5000/api/incidencias', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.mensaje || 'Error al enviar la incidencia');
      } else {
        alert('¡Incidencia enviada correctamente!');
        setFormData({ tipoIncidencia: '', descripcion: '' });
      }
    } catch (error) {
      alert('Error al conectar con el servidor');
    }
  };

  const handleCancel = () => {
    setFormData({ tipoIncidencia: '', descripcion: '' }); // Reiniciar el formulario
  };

  return (
    <div className="soporte-container">
      <Navbar/> {/* Incluir la barra de navegación */}
      <main className="soporte-content">
        <aside className="soporte-menu">
          <section className="soporte-faq">
            <h3>{TITULOS.PREGUNTAS_FRECUENTES}</h3>
            <ul>
              <li>
                <strong>¿Cómo puedo agregar un producto?</strong>
                <p>Para agregar un producto, dirígete al panel de productos y haz clic en "{BOTONES.AGREGAR_PRODUCTO}".</p>
              </li>
              <li>
                <strong>¿Cómo puedo contactar con soporte técnico?</strong>
                <p>Puedes enviarnos un correo a <p style={{color:"#007bff"}}>soporte@farmastock.com</p></p>
              </li>
              <li>
                <strong>¿Cómo puedo ver el inventario actual?</strong>
                <p>El inventario está disponible en el panel de control, en la sección "{LABELS.VALOR_INVENTARIO}".</p>
              </li>
            </ul>
          </section>
          <section className="soporte-contacto">
            <h3>{TITULOS.CONTACTO}</h3>
            <ul>
              <li>{LABELS.CORREO}: <p style={{color:"#007bff"}}>soporte@farmastock.com</p></li>
              <li>{LABELS.TELEFONO}: {INFORMACION.TELEFONO_NUMERO}</li>
              <li>{LABELS.HORARIO}: {INFORMACION.HORARIO_DIAS}</li>
            </ul>
          </section>
          <section className="soporte-enlaces">
            <h3>{TITULOS.ENLACES_UTILES}</h3>
            <ul>
              <li><a href="/dashboard">{ENLACES.IR_PANEL}</a></li>
              <li><a href="/productos">{ENLACES.GESTION_PRODUCTOS}</a></li>
            </ul>
          </section>
        </aside>
        <section className="soporte-formulario">
          <h3>{TITULOS.REPORTAR_INCIDENCIA}</h3>
          <form onSubmit={handleSubmit} className="formulario-incidencias">
            <label>
              {LABELS.TIPO_INCIDENCIA}:
              <select
                name="tipoIncidencia"
                value={formData.tipoIncidencia}
                onChange={handleInputChange}
                required
              >
                <option value="">{OPTIONS.ESTANDAR}</option>
                <option value="Error técnico">{OPTIONS.ERROR_TECNICO}</option>
                <option value="Problema con el inventario">{OPTIONS.PROBLEMA_INVENTARIO}</option>
                <option value="Consulta general">{OPTIONS.CONSULTA_GENERAL}</option>
              </select>
            </label>
            <label>
              {LABELS.DESCRIPCION}:
              <textarea
                name="descripcion"
                value={formData.descripcion}
                onChange={handleInputChange}
                placeholder="Describe el problema..."
                required
              />
            </label>
            <div className="formulario-botones">
              <button type="submit" className="boton-enviar">{BOTONES.ENVIAR}</button>
              <button type="button" className="boton-cancelar" onClick={handleCancel}>{BOTONES.RESTABLECER}</button>
            </div>
          </form>
        </section>
      </main>
      <Footer /> {/* Incluir el pie de página */}
    </div>
  );
};

export default Soporte;