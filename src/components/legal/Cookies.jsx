import React from 'react';
import Navbar from '../common/Navbar'; // Importar la barra de navegación
import Footer from '../common/Footer'; // Importar el pie de página
import { TITULOS,FOOTER } from '../../lib/constantes';

const Cookies = () => {
  return (
    <div className="cookies-container">
      <Navbar /> {/* Barra de navegación */}
      <main className="cookies-content">
        <h1>{FOOTER.COOKIES}</h1>
        <p>
          En <strong>{TITULOS.NOMBRE_EMPRESA}</strong>, utilizamos cookies para mejorar la experiencia del usuario en nuestro sitio web y garantizar el cumplimiento de las normativas aplicables al sector farmacéutico. Esta política explica qué son las cookies, cómo las utilizamos y cómo puedes gestionarlas.
        </p>
        <h2>1. ¿Qué son las cookies?</h2>
        <p>
          Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Estas permiten que el sitio recuerde tus acciones y preferencias durante un período de tiempo, mejorando tu experiencia de navegación.
        </p>
        <h2>2. ¿Qué tipos de cookies utilizamos?</h2>
        <p>
          Utilizamos los siguientes tipos de cookies:
          <ul>
            <li><strong>Cookies esenciales:</strong> Necesarias para el funcionamiento básico del sitio web, como el acceso a áreas seguras.</li>
            <li><strong>Cookies de análisis:</strong> Nos ayudan a entender cómo los usuarios interactúan con nuestro sitio para mejorar su experiencia.</li>
            <li><strong>Cookies de funcionalidad:</strong> Permiten recordar tus preferencias, como el idioma o la región.</li>
            <li><strong>Cookies publicitarias:</strong> Utilizadas para mostrar anuncios relevantes basados en tus intereses.</li>
          </ul>
        </p>
        <h2>3. ¿Cómo puedes gestionar las cookies?</h2>
        <p>
          Puedes gestionar o deshabilitar las cookies a través de la configuración de tu navegador. Ten en cuenta que deshabilitar ciertas cookies puede afectar la funcionalidad del sitio web. A continuación, te proporcionamos enlaces a las instrucciones para los navegadores más comunes:
          <ul>
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
            <li><a href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer">Internet Explorer</a></li>
          </ul>
        </p>
        <h2>4. Cambios en la política de cookies</h2>
        <p>
          Nos reservamos el derecho de actualizar esta política de cookies en cualquier momento. Te notificaremos sobre los cambios publicando la nueva política en nuestro sitio web.
        </p>
        <h2>5. Contacto</h2>
        <p>
          Si tienes preguntas sobre nuestra política de cookies, puedes contactarnos en{' '}
          <a href="mailto:soporte@farmastock.com">soporte@farmastock.com</a>.
        </p>
      </main>
      <Footer /> {/* Pie de página */}
    </div>
  );
};

export default Cookies;