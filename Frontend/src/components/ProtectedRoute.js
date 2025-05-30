// components/ProtectedRoute.js
//RUTAS PROTEGIDAS, SI ES AUTENTICADO PUEDES PASAR SINO SE NAVEGA A LA PAGINA PRINCIPAL
import React from 'react';
import { Navigate,useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children,pathName="/" }) => {
    const { isAuthenticated, loading } = useAuth();
    const location = useLocation();
    console.log("Autenticado: "+ isAuthenticated)

    if(loading){
        return <div>Cargando...</div>
    }
    if (!isAuthenticated) {
        return <Navigate to={pathName} replace state={{ from: location }} />;
    }


    return children;
};

export default ProtectedRoute;
