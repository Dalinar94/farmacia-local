import React from 'react';
import Navbar from './Navbar'; // Importar la barra de navegación
import '../styles/navbar.css'; // Importar los estilos de la barra de navegación

const Stock = () => {
    return (
      <div className="Stock-container">
        <Navbar /> {/* Incluir la barra de navegación */}
        <h2>Stock</h2>
        <p>Bienvenido a stock!</p>
      </div>
    );
  };
  
  export default Stock;