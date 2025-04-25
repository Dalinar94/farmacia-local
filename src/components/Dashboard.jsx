import React from 'react';
import Navbar from './Navbar'; // Importar la barra de navegación
import '../styles/navbar.css'; // Importar los estilos de la barra de navegación

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Navbar />  
      <main className="dashboard-content">
        <div className='dashboard-header'>
          <h1>Dashboard</h1>
          <div className="dashboard-estadisticas">
          <div className="dashboard-estadistica-tarjeta">
            <h3>Productos</h3>
            <p>0</p>
          </div>
          <div className="dashboard-estadistica-tarjeta">
            <h3>Ventas hoy</h3>
            <p >0</p>
          </div>
          <div className="dashboard-estadistica-tarjeta">
            <h3>valor inventario</h3>
            <p >0</p>
          </div>
          <div className="dashboard-estadistica-tarjeta">
            <h3>stock bajo</h3>
            <p >0</p>
          </div>
        </div>
        </div>
      
        <h2 className="dashboard-subtitulo">Productos</h2>
        <div className="dashboard-controles">
          <div className="dashboard-busqueda">
            <input type="text" placeholder="Buscar productos..."className="login-input"/>
          </div>
          <button className="boton boton-primario">agregar producto</button>
        </div>
    <div>
      hola
    </div>
      </main>
    </div>
  );
};

export default Dashboard;