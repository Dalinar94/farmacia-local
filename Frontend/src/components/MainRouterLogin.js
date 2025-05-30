import React from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const MainRouterLogin = ({pathName="/dashboard"}) => {
    const { isAuthenticated, loading } = useAuth();
    const location = useLocation();

    if(loading){
        return <div>Cargando...</div>
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }else{
        return<Navigate to={pathName} replace state={{ from: location }} />;
    }

};

export default MainRouterLogin;
