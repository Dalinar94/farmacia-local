import React from 'react';
import Navbar from './Navbar'; // Importar la barra de navegación
import '../styles/navbar.css'; // Importar los estilos de la barra de navegación

const Productos = () => {
    return (
      <div className="Productos-container">
        <Navbar /> {/* Incluir la barra de navegación */}
        <h2>Productos</h2>
        <p>Bienvenido a productos!</p>
      </div>
    );
  };
  
  export default Productos;