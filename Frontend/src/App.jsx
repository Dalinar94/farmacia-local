import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext';
import { UserProvider } from './context/UserContext';
import { SupplierProvider } from './context/ProveedoresContext';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Componentes
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/Dashboard';
import Productos from './components/Productos';
import Stock from './components/Stock';
import Soporte from './components/Soporte';
import Usuario from './components/Usuario';
import Proveedores from './components/Proveedores';
import Cookies from './components/legal/Cookies';
import Politicas from './components/legal/Politicas';
import Terminos from './components/legal/Terminos';

const App = () => {
    return (
        <AuthProvider>
            <UserProvider>
                <ProductProvider>
                    <SupplierProvider>
                        <ToastContainer position="top-right" autoClose={3000} />
                        <Router basename="/farmacia-local" >
                            <Routes>
                                {/* Rutas públicas */}
                                <Route path="/" element={<Login />} />
                                <Route path="/register" element={<Register />} />
                                <Route path="/politicas" element={<Politicas />}/>
                                <Route path="/terminos" element={<Terminos />}/>
                                <Route path="/cookies" element={<Cookies />}/>

                                {/* Rutas protegidas */}
                                <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}/>
                                <Route path="/productos" element={<ProtectedRoute><Productos /></ProtectedRoute>}/>
                                <Route path="/stock" element={<ProtectedRoute><Stock /></ProtectedRoute>}/>
                                <Route path="/proveedores" element={<ProtectedRoute><Proveedores /></ProtectedRoute>}/>
                                <Route path="/soporte" element={<ProtectedRoute><Soporte /></ProtectedRoute>}/>
                                <Route path="/usuario" element={<ProtectedRoute><Usuario /></ProtectedRoute>} />
                            </Routes>
                        </Router>
                    </SupplierProvider>
                </ProductProvider>
            </UserProvider>
        </AuthProvider>
    );
};

export default App;
