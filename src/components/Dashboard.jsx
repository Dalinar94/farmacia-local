import React, { useState } from 'react';
import Navbar from './common/Navbar'; // Importar la barra de navegación
import '../styles/navbar.css'; // Importar los estilos de la barra de navegación
import TablaProductos from './tables/tablaProductos'; // Importar el componente de tabla de productos
import { TITULOS, LABELS, BOTONES } from '../lib/constantes'; // Importar las constantes
import Footer from './common/Footer'; // Importar el componente de pie de página
import FormularioAgregarProducto from './forms/FormularioAgregarProducto'; // Importar el formulario emergente

const Dashboard = () => {
  const [showAddProductForm, setShowAddProductForm] = useState(false); // Estado para mostrar el formulario
  const [products, setProducts] = useState([]); // Estado para almacenar la lista de productos
  const [searchTerm, setSearchTerm] = useState(''); // Estado para almacenar el término de búsqueda

  const handleAddProduct = (product) => {
    const newProduct = { ...product, id: products.length + 1 }; // Asignar un ID único al nuevo producto
    setProducts([...products, newProduct]); // Agregar el nuevo producto a la lista
    setShowAddProductForm(false); // Cierra el formulario después de agregar el producto
  };

  // Filtrar los productos según el término de búsqueda
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dashboard-container">
      <Navbar />
      <main className="dashboard-content">
        <div className="dashboard-header">
          <h1>{LABELS.DASHBOARD}</h1>
          <div className="dashboard-estadisticas">
            <div className="dashboard-estadistica-tarjeta">
              <h3>Productos</h3>
              <p>{products.length}</p> {/* Mostrar el número de productos */}
            </div>
            <div className="dashboard-estadistica-tarjeta">
              <h3>Valor inventario</h3>
              <p>
                {products.reduce((total, product) => total + product.price * product.stock, 0).toFixed(2)} €
              </p>
            </div>
            <div className="dashboard-estadistica-tarjeta">
              <h3>Stock Agotado</h3>
              <p>{products.filter((product) => product.stock < 10).length}</p>
            </div>
          </div>
        </div>

        <h2 className="dashboard-subtitulo">Productos</h2>
        <div className="dashboard-controles">
          <div className="dashboard-busqueda">
            <input
              type="text"
              placeholder="Buscar productos..."
              className="login-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Actualizar el término de búsqueda
            />
          </div>
          <div className="boton-primario">
            <button onClick={() => setShowAddProductForm(true)}>{BOTONES.AGREGAR_PRODUCTO}</button>
          </div>
        </div>
        <div>
          <TablaProductos products={filteredProducts} setProducts={setProducts} /> {/* Pasar los productos filtrados */}
        </div>

        {/* Mostrar el formulario emergente si está activado */}
        {showAddProductForm && (
          <FormularioAgregarProducto
            onAddProduct={handleAddProduct}
            onCancel={() => setShowAddProductForm(false)}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;