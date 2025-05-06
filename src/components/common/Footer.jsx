import React from 'react';
import {FOOTER} from '../../lib/constantes'; // Importar las constantes
import FooterRedesSociales from "../../context/Iconos"; // Importar el componente de redes sociales

const Footer = () => {
  return (
    <footer className="dashboard-footer">
      <div className="footer-left">
        <p>{FOOTER.FOOTER_TITULO}</p>
      </div>
      <div className="footer-center">
        <p>
           {FOOTER.DESARROLLADO_POR}{' '}
          <a
            href="https://github.com/Dalinar94/farmacia-local"
            target="_blank"
            rel="noopener noreferrer"
          >
            {FOOTER.DESARROLLADOR}
          </a>
        </p>
        <p>
          {FOOTER.CONTACTO}:{' '}
          <a href="mailto:soporte@farmastock.com">{FOOTER.EMAIL}</a>
        </p>
      </div>
      <div className='footer-center'>
        <a href='/Politicas'><p>{FOOTER.POLITICAS}</p></a>
        <a href='/Terminos'><p>{FOOTER.TERMINOS}</p></a>
        <a href='/Cookies'><p>{FOOTER.COOKIES}</p></a>
      </div>
      <div className="footer-right">
        <p>{FOOTER.SIGUENOS}:</p>
        <FooterRedesSociales />
      </div>
    </footer>
  );
};

export default Footer;