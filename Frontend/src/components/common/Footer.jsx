import React from 'react';
import { FOOTER } from '../../lib/constantes';
import FooterRedesSociales from "../../context/Iconos";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

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
                className="footer-link"
            >
              {FOOTER.DESARROLLADOR}
            </a>
          </p>
          <p>
            {FOOTER.CONTACTO}:{' '}
            <span>{FOOTER.EMAIL}</span>
          </p>
        </div>

        <div className="footer-center">
          <Link to="/Politicas" className={`footer-link ${location.pathname === '/Politicas' ? 'active-link' : ''}`}>
            {FOOTER.POLITICAS}
          </Link>
          <Link to="/Terminos" className={`footer-link ${location.pathname === '/Terminos' ? 'active-link' : ''}`}>
            {FOOTER.TERMINOS}
          </Link>
          <Link to="/Cookies" className={`footer-link ${location.pathname === '/Cookies' ? 'active-link' : ''}`}>
            {FOOTER.COOKIES}
          </Link>
        </div>

        <div className="footer-right">
          <p>{FOOTER.SIGUENOS}:</p>
          <FooterRedesSociales />
        </div>
      </footer>
  );
};

export default Footer;
