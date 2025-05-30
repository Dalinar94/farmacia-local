import React from 'react';
import {Routes, Route, HashRouter, Navigate, BrowserRouter} from 'react-router-dom';
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
import MainRouterLogin from "./components/MainRouterLogin";

const App = () => {
    return (
        <AuthProvider>
            <UserProvider>
                <ProductProvider>
                    <SupplierProvider>
                        <ToastContainer position="top-right" autoClose={3000} />
                        <HashRouter>
                            <Routes>
                                <Route path="/" element={<MainRouterLogin/>} />
                                <Route path="/register" element={<Register />} />
                                <Route path="/politicas" element={<Politicas />}/>
                                <Route path="/terminos" element={<Terminos />}/>
                                <Route path="/cookies" element={<Cookies />}/>
                                <Route path="/login" element={<Login />}/>
                                {/* Rutas protegidas */}
                                <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}/>
                                <Route path="/productos" element={<ProtectedRoute><Productos /></ProtectedRoute>}/>
                                <Route path="/stock" element={<ProtectedRoute><Stock /></ProtectedRoute>}/>
                                <Route path="/proveedores" element={<ProtectedRoute><Proveedores /></ProtectedRoute>}/>
                                <Route path="/soporte" element={<ProtectedRoute><Soporte /></ProtectedRoute>}/>
                                <Route path="/usuario" element={<ProtectedRoute><Usuario /></ProtectedRoute>} />
                                <Route element={<h1>Esa pagina no existe</h1>}></Route> {/* TODO Manejar rutas no definidas*/}
                            </Routes>
                        </HashRouter>
                    </SupplierProvider>
                </ProductProvider>
            </UserProvider>
        </AuthProvider>
    );
};

export default App;
