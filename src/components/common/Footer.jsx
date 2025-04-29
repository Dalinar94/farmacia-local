import React from 'react';
import { TITULOS, LABELS } from '../../lib/constantes'; // Importar las constantes

const Footer = () => {
  return (
    <footer className="dashboard-footer">
      <div className="footer-left">
        <p>💊® 2025 {TITULOS.NOMBRE_EMPRESA}</p>
        <p>{LABELS.COPYRIGHT}</p>
      </div>
      <div className="footer-center">
        <p>
          Desarrollado por{' '}
          <a
            href="https://github.com/Dalinar94/farmacia-local"
            target="_blank"
            rel="noopener noreferrer"
          >
            Francisco Israel Davó Cabrera
          </a>
        </p>
        <p>
          Contacto:{' '}
          <a href="mailto:soporte@farmastock.com">soporte@farmastock.com</a>
        </p>
      </div>
      <div className="footer-right">
        <p>Síguenos:</p>
        <p>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>{' '}
          |{' '}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>{' '}
          |{' '}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;