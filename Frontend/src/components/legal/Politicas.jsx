import React from 'react';
import Navbar from '../common/Navbar'; // Importar la barra de navegación
import Footer from '../common/Footer'; // Importar el pie de página
import { TITULOS,FOOTER} from '../../lib/constantes';

const Politicas = () => {
  return (
    <div className="politicas-container">
      <Navbar /> {/* Barra de navegación */}
      <main className="politicas-content">
        <h1>{FOOTER.POLITICAS}</h1>
        <p>
          En <strong>{TITULOS.NOMBRE_EMPRESA}</strong>, nos comprometemos a proteger la privacidad y la seguridad de los datos personales de nuestros usuarios, especialmente aquellos relacionados con la salud. Esta política describe cómo recopilamos, usamos y protegemos su información personal en cumplimiento con las normativas aplicables, como el Reglamento General de Protección de Datos (RGPD).
        </p>
        <h2>1. Información que recopilamos</h2>
        <p>
          Podemos recopilar información personal, incluyendo:
          <ul>
            <li>Datos de contacto: nombre, dirección, correo electrónico y número de teléfono.</li>
            <li>Datos relacionados con la salud: información sobre medicamentos solicitados o historial de compras.</li>
            <li>Datos técnicos: dirección IP, tipo de navegador y datos de navegación en nuestro sitio web.</li>
          </ul>
        </p>
        <h2>2. Uso de la información</h2>
        <p>
          La información recopilada se utiliza para:
          <ul>
            <li>Procesar pedidos de medicamentos y productos farmacéuticos.</li>
            <li>Proveer servicios personalizados, como recordatorios de medicamentos.</li>
            <li>Cumplir con las normativas legales y regulatorias del sector farmacéutico.</li>
            <li>Mejorar nuestros servicios y la experiencia del usuario.</li>
          </ul>
        </p>
        <h2>3. Protección de la información</h2>
        <p>
          Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal contra accesos no autorizados, pérdida, alteración o divulgación. Esto incluye el cifrado de datos sensibles y el acceso restringido a la información.
        </p>
        <h2>4. Compartir información</h2>
        <p>
          No compartimos su información personal con terceros, excepto en los siguientes casos:
          <ul>
            <li>Cuando sea necesario para cumplir con normativas legales o regulatorias.</li>
            <li>Con proveedores de servicios que nos ayudan a operar nuestro negocio, bajo estrictos acuerdos de confidencialidad.</li>
          </ul>
        </p>
        <h2>5. Derechos del usuario</h2>
        <p>
          Usted tiene derecho a:
          <ul>
            <li>Acceder a sus datos personales.</li>
            <li>Solicitar la corrección o eliminación de sus datos.</li>
            <li>Retirar su consentimiento para el uso de sus datos en cualquier momento.</li>
          </ul>
          Para ejercer estos derechos, puede contactarnos en{' '}
          <a href="mailto:frandavowork@gmail.com">frandavowork@gmail.com</a>.
        </p>
        <h2>6. Cambios en la política</h2>
        <p>
          Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Le notificaremos sobre cualquier cambio publicando la nueva política en nuestro sitio web.
        </p>
        <h2>7. Contacto</h2>
        <p>
          Si tiene preguntas sobre esta política de privacidad, puede contactarnos en{' '}
          <a href="mailto:frandavowork@gmail.com">frandavowork@gmail.com</a>.
        </p>
      </main>
      <Footer /> {/* Pie de página */}
    </div>
  );
};

export default Politicas;