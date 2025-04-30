import React from "react";
import { FOOTER } from "../lib/constantes"; // Importar las constantes
import '../styles/iconos.css'; // Importar los estilos del pie de página

const FooterRedesSociales = () => {
  const redes = [
    { name: FOOTER.FACEBOOK.name, icon: FOOTER.FACEBOOK.icon, link: "https://facebook.com" },
    { name: FOOTER.TWITTER.name, icon: FOOTER.TWITTER.icon, link: "https://twitter.com" },
    { name: FOOTER.INSTAGRAM.name, icon: FOOTER.INSTAGRAM.icon, link: "https://instagram.com" },
  ];

  return (
    <div className="footer-redes-sociales">
      {redes.map((red, index) => (
        <a
          key={index}
          href={red.link}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          title={red.name}
        >
          <i className={red.icon}></i>
        </a>
      ))}
    </div>
  );
};

export default FooterRedesSociales;