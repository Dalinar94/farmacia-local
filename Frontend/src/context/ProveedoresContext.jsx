import React, {createContext, useEffect, useState} from 'react';

export const SupplierContext = createContext();

export const SupplierProvider = ({ children }) => {
    const [proveedores, setProveedores] = useState([]);
    const [loading, setLoading] = useState(true);

    console.log('API_URL:', process.env.REACT_APP_API_URL + '/proveedores');

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL +'/proveedores')
            .then(res => res.json())
            .then(data => {
                setProveedores(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error al cargar proveedores:', err);
                setLoading(false);
            });
    }, []);

    return (
        <SupplierContext.Provider value={{suppliers: proveedores, setProveedores, loading }}>
            {children}
        </SupplierContext.Provider>
    );
};