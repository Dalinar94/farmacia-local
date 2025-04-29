import React, { useContext, useState } from 'react';
import Navbar from './common/Navbar';
import '../styles/navbar.css';
import TablaProductos from './tables/TablaProductos';
import { ProductContext } from '../context/ProductContext';
import Footer from './common/Footer';
import FormularioAgregarProducto from './forms/FormularioAgregarProducto';

const Dashboard = () => {
  const { products, setProducts } = useContext(ProductContext); // Usar el contexto
  const [showAddProductForm, setShowAddProductForm] = useState(false); // Estado para mostrar el formulario
  const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda

  const handleAddProduct = (product) => {
    const newProduct = {
      ...product,
      id: products.length + 1, // Generar un ID único
      stock: parseInt(product.stock, 10), // Asegurar que el stock sea un número
      price: parseFloat(product.price), // Asegurar que el precio sea un número con decimales
    };
    setProducts([...products, newProduct]); // Agregar el nuevo producto al estado
    setShowAddProductForm(false); // Cerrar el formulario
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dashboard-container">
      <Navbar />
      <main className="dashboard-content">
        <div className="dashboard-header">
          <h1>Dashboard</h1>
          <div className="dashboard-estadisticas">
            <div className="dashboard-estadistica-tarjeta">
              <h3>Productos</h3>
              <p>{products.length}</p>
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
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="boton-primario">
            <button onClick={() => setShowAddProductForm(true)}>Agregar Producto</button>
          </div>
        </div>
        <div>
          <TablaProductos products={filteredProducts} setProducts={setProducts} />
        </div>

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