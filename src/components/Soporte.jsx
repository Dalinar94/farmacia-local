import React, { useState } from 'react';
import Navbar from './common/Navbar'; // Importar la barra de navegación
import Footer from './common/Footer'; // Importar el componente de pie de página
import '../styles/soporte.css'; // Importar los estilos específicos de soporte
import { TITULOS } from '../lib/constantes';

const Soporte = () => {
  const [formData, setFormData] = useState({
    tipoIncidencia: '',
    descripcion: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Incidencia enviada:\nTipo: ${formData.tipoIncidencia}\nDescripción: ${formData.descripcion}`);
    setFormData({ tipoIncidencia: '', descripcion: '' }); // Reiniciar el formulario
  };

  const handleCancel = () => {
    setFormData({ tipoIncidencia: '', descripcion: '' }); // Reiniciar el formulario
  };

  return (
    <div className="soporte-container">
      <Navbar /> {/* Incluir la barra de navegación */}
      <main className="soporte-content">
        <aside className="soporte-menu">
          <section className="soporte-faq">
            <h3>{TITULOS.PREGUNTAS_FRECUENTES}</h3>
            <ul>
              <li>
                <strong>¿Cómo puedo agregar un producto?</strong>
                <p>Para agregar un producto, dirígete al panel de productos y haz clic en "Agregar producto".</p>
              </li>
              <li>
                <strong>¿Cómo puedo contactar con soporte técnico?</strong>
                <p>Puedes enviarnos un correo a <a href="mailto:soporte@farmastock.com">soporte@farmastock.com</a>.</p>
              </li>
              <li>
                <strong>¿Cómo puedo ver el inventario actual?</strong>
                <p>El inventario está disponible en el panel de control, en la sección "Valor inventario".</p>
              </li>
            </ul>
          </section>
          <section className="soporte-contacto">
            <h3>Contacto</h3>
            <ul>
              <li>Correo: <a href="mailto:soporte@farmastock.com">soporte@farmastock.com</a></li>
              <li>Teléfono: +34 123 456 789</li>
              <li>Horario: Lunes a Viernes, 9:00 AM - 6:00 PM</li>
            </ul>
          </section>
          <section className="soporte-enlaces">
            <h3>Enlaces Útiles</h3>
            <ul>
              <li><a href="/dashboard">Ir al Panel de Control</a></li>
              <li><a href="/productos">Gestión de Productos</a></li>
              <li><a href="/faq">Más Preguntas Frecuentes</a></li>
            </ul>
          </section>
        </aside>
        <section className="soporte-formulario">
          <h3>Reportar una Incidencia</h3>
          <form onSubmit={handleSubmit} className="formulario-incidencias">
            <label>
              Tipo de Incidencia:
              <select
                name="tipoIncidencia"
                value={formData.tipoIncidencia}
                onChange={handleInputChange}
                required
              >
                <option value="">Selecciona una opción</option>
                <option value="Error técnico">Error técnico</option>
                <option value="Problema con el inventario">Problema con el inventario</option>
                <option value="Consulta general">Consulta general</option>
              </select>
            </label>
            <label>
              Descripción:
              <textarea
                name="descripcion"
                value={formData.descripcion}
                onChange={handleInputChange}
                placeholder="Describe el problema..."
                required
              />
            </label>
            <div className="formulario-botones">
              <button type="submit" className="boton-enviar">Enviar</button>
              <button type="button" className="boton-cancelar" onClick={handleCancel}>Restablecer</button>
            </div>
          </form>
        </section>
      </main>
      <Footer /> {/* Incluir el pie de página */}
    </div>
  );
};

export default Soporte;