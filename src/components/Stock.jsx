import React, { useState } from 'react';
import Navbar from './common/Navbar'; // Importar la barra de navegación
import Footer from './common/Footer'; // Importar el componente de pie de página
import TablaStock from './tables/TablaStock'; // Importar la tabla de stock
import { TITULOS } from '../lib/constantes'; // Importar las constantes
const Stock = () => {
  const [products] = useState([
    { id: 1, name: 'Producto 1', description: 'Descripción del producto 1', stock: 5, price: 100 },
    { id: 2, name: 'Producto 2', description: 'Descripción del producto 2', stock: 20, price: 50 },
    { id: 3, name: 'Producto 3', description: 'Descripción del producto 3', stock: 60, price: 200 },
    { id: 4, name: 'Producto 4', description: 'Descripción del producto 4', stock: 10, price: 150 },
  ]);

  return (
    <div className="stock-container">
      <Navbar/> {/* Incluir la barra de navegación */}
      <main className="stock-content">
        <div className="stock-header">
          <h1>{TITULOS.ESTADO_STOCK}</h1>
          <div className="stock-estadisticas">
            <div className="stock-estadistica-tarjeta">
              <h3>{TITULOS.PRODUCTOS}</h3>
              <p>{products.length}</p> {/* Mostrar el número de productos */}
            </div>
            <div className="stock-estadistica-tarjeta">
              <h3>{TITULOS.VALOR_INVENTARIO}</h3>
              <p>
                {products.reduce((total, product) => total + product.price * product.stock, 0).toFixed(2)} €
              </p>
            </div>
            <div className="stock-estadistica-tarjeta">
              <h3>{TITULOS.STOCK_AGOTADO}</h3>
              <p>{products.filter((product) => product.stock < 10).length}</p>
            </div>
          </div>
        </div>

        <TablaStock products={products} /> {/* Mostrar la tabla de stock */}
      </main>
      <Footer /> 
    </div>
  );
};

export default Stock;