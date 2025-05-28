// components/ProtectedRoute.js
//RUTAS PROTEGIDAS, SI ES AUTENTICADO PUEDES PASAR SINO SE NAVEGA A LA PAGINA PRINCIPAL
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, loading } = useAuth();
    console.log("Autenticado: "+ isAuthenticated)

    if(loading){
        return <div>Cargando...</div>
    }
    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;
