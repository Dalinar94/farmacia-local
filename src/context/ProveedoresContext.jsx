import React, { createContext, useState } from 'react';

export const SupplierContext = createContext();

export const SupplierProvider = ({ children }) => {
    const [suppliers, setSuppliers] = useState([
        { id: 1, name: 'Proveedor 1', description: 'Descripción del proveedor 1', telefono: '123456789', email: 'pro1@gmail.com', direccion: 'Calle 1, Ciudad 1'},
        { id: 2, name: 'Proveedor 2', description: 'Descripción del proveedor 2', telefono: '987654321', email: 'pro2@gmail.com', direccion: 'Calle 2, Ciudad 2'},
        { id: 3, name: 'Proveedor 3', description: 'Descripción del proveedor 3', telefono: '456789123', email: 'pro3@gmail.com', direccion: 'Calle 3, Ciudad 3'}
    ]);

    return (
        <SupplierContext.Provider value={{ suppliers, setSuppliers }}>
            {children}
        </SupplierContext.Provider>
    );
};