import React, {useContext} from 'react';
import Navbar from './common/Navbar'; // Importar la barra de navegación
import Footer from './common/Footer'; // Importar el componente de pie de página
import TablaStock from './tables/TablaStock'; // Importar la tabla de stock
import { TITULOS } from '../lib/constantes';
import {ProductContext} from "../context/ProductContext"; // Importar las constantes
const Stock = () => {
  const { products } = useContext(ProductContext); // Usar el contexto

  return (
    <div className="stock-container">
      <Navbar/> {/* Incluir la barra de navegación */}
      <main className="stock-content">
        <h1>{TITULOS.ESTADO_STOCK}</h1>
        <TablaStock products={products} /> {/* Mostrar la tabla de stock */}
      </main>
      <Footer /> 
    </div>
  );
};

export default Stock;