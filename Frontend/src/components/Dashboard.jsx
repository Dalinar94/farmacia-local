import React, { useContext } from 'react';
import Navbar from './common/Navbar';
import TablaProductos from './tables/TablaProductos'; // Importar el componente de tabla de productos
import { ProductContext } from '../context/ProductContext';
import Footer from './common/Footer';
import { TITULOS,LABELS } from '../lib/constantes';
import {UserContext} from "../context/UserContext";
import { Link, useLocation } from 'react-router-dom';

//EXPLICACION DE USESTATE y HOOK de react
//El useState es un hook de React que permite añadir el estado a un componente funcional.
//Que es un hook de React?
//Un hook es una función que permite a los desarrolladores de React utilizar el estado y otras características de React sin escribir una clase.

const Dashboard = () => {
  const { productos } = useContext(ProductContext); // Usar el contexto de productos
  const { user } = useContext(UserContext);
  const location = useLocation(); // Hook para obtener la ubicación actual

  return (
    <div className="dashboard-container">
      <Navbar />
      <main className="dashboard-content">
        <div className="dashboard-header">
          <h1>{TITULOS.DASHBOARD_TITULO}</h1>
          <div className="dashboard-estadisticas">
            <div className="dashboard-estadistica-tarjeta">
              <Link to="/Productos" className={location.pathname === '/Dashboard' ? 'active-link' : ''}>
              <h3>{TITULOS.PRODUCTOS}</h3>
              </Link>
              <p>{productos.length}</p>
            </div>
            {user?.rol === 'admin' && (
            <div className="dashboard-estadistica-tarjeta">
              <h3>{TITULOS.VALOR_INVENTARIO}</h3>
              <p>
                {productos.reduce((total, product) => total + product.precio * product.cantidad, 0).toFixed(2)} €
              </p>
            </div>
            )}
            <div className="dashboard-estadistica-tarjeta">
              <h3>{LABELS.STOCK_BAJO}</h3>
              <p>{productos.filter((product) => product.cantidad <= 10 && product.cantidad > 0).length}</p>
            </div>
            <div className="dashboard-estadistica-tarjeta">
              <h3>{TITULOS.STOCK_AGOTADO}</h3>
              <p>{productos.filter((product) => product.cantidad === 0).length}</p>
            </div>
          </div>
        </div>

        <div>
          <TablaProductos  />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;