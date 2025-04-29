import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext'; // Importar el proveedor de contexto
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Productos from './components/Productos';
import Stock from './components/Stock';
import Soporte from './components/Soporte';
import Politicas from './components/Politicas'; // Importar el componente de políticas

const App = () => {
  return (
    <ProductProvider> {/* Envolver toda la aplicación con el proveedor */}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/soporte" element={<Soporte />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/politicas" element={<Politicas />} />
        </Routes>
      </Router>
    </ProductProvider>
  );
};

export default App;