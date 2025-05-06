import React from 'react';
import Navbar from '../common/Navbar'; // Importar la barra de navegación
import Footer from '../common/Footer'; // Importar el pie de página
import { TITULOS,FOOTER } from '../../lib/constantes';

const Terminos = () => {
  return (
    <div className="terminos-container">
      <Navbar /> {/* Barra de navegación */}
      <main className="terminos-content">
        <h1>{FOOTER.TERMINOS}</h1>
        <p>
          Bienvenido a <strong>{TITULOS.NOMBRE_EMPRESA}</strong>. Al utilizar nuestros servicios, aceptas los siguientes términos y condiciones. Por favor, léelos detenidamente, ya que están diseñados para garantizar el cumplimiento de las normativas del sector farmacéutico.
        </p>
        <h2>1. Uso del sitio web</h2>
        <p>
          Este sitio web está destinado únicamente para uso personal y no comercial. No puedes copiar, distribuir ni modificar ningún contenido sin nuestro consentimiento previo. Además, el uso de este sitio debe cumplir con las normativas legales aplicables al sector farmacéutico.
        </p>
        <h2>2. Registro y cuentas</h2>
        <p>
          Para acceder a ciertas funciones, es posible que debas registrarte y proporcionar información precisa y actualizada. Eres responsable de mantener la confidencialidad de tu cuenta y contraseña. El uso indebido de tu cuenta puede resultar en la suspensión de los servicios.
        </p>
        <h2>3. Servicios farmacéuticos</h2>
        <p>
          Los servicios ofrecidos en este sitio, como la compra de medicamentos, están sujetos a las normativas legales y regulatorias del sector farmacéutico. Nos reservamos el derecho de solicitar información adicional para garantizar el cumplimiento de estas normativas.
        </p>
        <h2>4. Propiedad intelectual</h2>
        <p>
          Todo el contenido de este sitio, incluidos textos, imágenes, logotipos y gráficos, es propiedad de <strong>{TITULOS.NOMBRE_EMPRESA}</strong> y está protegido por las leyes de propiedad intelectual. El uso no autorizado de este contenido está estrictamente prohibido.
        </p>
        <h2>5. Limitación de responsabilidad</h2>
        <p>
          No nos hacemos responsables de daños directos, indirectos o incidentales derivados del uso de este sitio web o de los servicios ofrecidos. Esto incluye, entre otros, errores en la información proporcionada o retrasos en la entrega de productos.
        </p>
        <h2>6. Cambios en los términos</h2>
        <p>
          Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Te notificaremos sobre los cambios publicando los términos actualizados en nuestro sitio web. Es tu responsabilidad revisar periódicamente estos términos.
        </p>
        <h2>7. Contacto</h2>
        <p>
          Si tienes preguntas sobre estos términos y condiciones, puedes contactarnos en{' '}
          <a href="mailto:soporte@farmastock.com">soporte@farmastock.com</a>.
        </p>
      </main>
      <Footer /> {/* Pie de página */}
    </div>
  );
};

export default Terminos;