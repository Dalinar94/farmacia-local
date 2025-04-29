import React from 'react';
import Navbar from './common/Navbar'; // Importar la barra de navegación
import Footer from './common/Footer'; // Importar el pie de página
import '../styles/politicas.css'; // Importar los estilos específicos para políticas
import { TITULOS } from '../lib/constantes'; // Importar las constantes

const Politicas = () => {
  return (
    <div className="politicas-container">
      <Navbar /> {/* Barra de navegación */}
      <main className="politicas-content">
        <h1>Política de Privacidad</h1>
        <p>
          En <strong>{TITULOS.NOMBRE_EMPRESA}</strong>, nos comprometemos a proteger la privacidad de nuestros usuarios. Esta política describe cómo recopilamos, usamos y protegemos su información personal.
        </p>
        <h2>1. Información que recopilamos</h2>
        <p>
          Podemos recopilar información personal como su nombre, dirección de correo electrónico, número de teléfono y cualquier otra información que proporcione al registrarse o utilizar nuestros servicios.
        </p>
        <h2>2. Uso de la información</h2>
        <p>
          La información recopilada se utiliza para:
          <ul>
            <li>Proveer y mejorar nuestros servicios.</li>
            <li>Responder a sus consultas y solicitudes.</li>
            <li>Enviar actualizaciones y notificaciones relacionadas con nuestros servicios.</li>
          </ul>
        </p>
        <h2>3. Protección de la información</h2>
        <p>
          Implementamos medidas de seguridad para proteger su información personal contra accesos no autorizados, alteraciones o divulgaciones.
        </p>
        <h2>4. Cambios en la política</h2>
        <p>
          Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Le notificaremos sobre cualquier cambio publicando la nueva política en nuestro sitio web.
        </p>
        <h2>5. Contacto</h2>
        <p>
          Si tiene preguntas sobre esta política de privacidad, puede contactarnos en{' '}
          <a href="mailto:soporte@farmastock.com">soporte@farmastock.com</a>.
        </p>
      </main>
      <Footer /> {/* Pie de página */}
    </div>
  );
};

export default Politicas;