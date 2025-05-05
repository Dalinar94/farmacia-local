import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext'; // Importar el proveedor de contexto de productos
import { UserProvider } from './context/UserContext'; // Importar el proveedor de contexto de usuario
//Componentes
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Productos from './components/Productos';
import Stock from './components/Stock';
import Soporte from './components/Soporte';
import Usuario from './components/Usuario'; // Importar el componente de usuario
//Componentes legales
import Cookies from './components/legal/Cookies'; 
import Politicas from './components/legal/Politicas';
import Terminos from './components/legal/Terminos'; 

// Importar los componentes de las páginas legales
const routes = [
  { path: '/', element: <Login /> },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/register', element: <Register /> },
  { path: '/productos', element: <Productos /> },
  { path: '/stock', element: <Stock /> },
  { path: '/soporte', element: <Soporte /> },
  { path: '/politicas', element: <Politicas /> },
  { path: '/terminos', element: <Terminos /> },
  { path: '/cookies', element: <Cookies /> },
  { path: '/usuario', element: <Usuario /> },


];

const App = () => {
  return (
    <UserProvider> 
    <ProductProvider> 
      <Router>
        <Routes>
          {routes.map((route, index) => ( //mapear las rutas
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
    </ProductProvider>
  </UserProvider>
  );
};

export default App;