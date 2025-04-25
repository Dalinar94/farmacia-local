import React from 'react';
import Navbar from './Navbar'; // Importar la barra de navegación
import '../styles/navbar.css'; // Importar los estilos de la barra de navegación

const Soporte = () => {
    return (
      <div className="Soporte-container">
        <Navbar /> {/* Incluir la barra de navegación */}
        <h2>Soporte</h2>
        <p>Bienvenido a soporte!</p>
      </div>
    );
  };
  
  export default Soporte;