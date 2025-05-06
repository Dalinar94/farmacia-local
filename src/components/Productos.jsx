import React, { useContext } from 'react';
import Navbar from './common/Navbar'; // Importar la barra de navegación
import Footer from './common/Footer'; // Importar el componente de pie de página
import PanelProducto from './panels/PanelProducto'; // Importar el componente de panel de producto
import { ProductContext } from '../context/ProductContext'; // Importar el contexto
import '../styles/productos.css'; // Importar los estilos específicos para productos
import { TITULOS } from '../lib/constantes'; // Importar las constantes
const Productos = () => {
  const { products } = useContext(ProductContext); // Usar el contexto para acceder a los productos

  return (
    <div className="productos-container">
      <Navbar /> {/* Incluir la barra de navegación */}
      <main className="productos-content">
        <h1>{TITULOS.PANEL_PRODUCTOS}</h1>
        <div className="productos-paneles">
          {products.map((product) => (
            <PanelProducto key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer /> {/* Incluir el pie de página */}
    </div>
  );
};

export default Productos;