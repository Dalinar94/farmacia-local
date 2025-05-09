import React, { createContext, useState } from 'react';

export const SupplierContext = createContext();

export const SupplierProvider = ({ children }) => {
    const [suppliers, setSuppliers] = useState([
        { id: 1, name: 'Proveedor 1', description: 'Descripción del proveedor 1', telefono: '123456789', email: 'pro1@gmail.com', direccion: 'Calle 1, Ciudad 1'},
        { id: 2, name: 'Proveedor 2', description: 'Descripción del proveedor 2', telefono: '987654321', email: 'pro2@gmail.com', direccion: 'Calle 2, Ciudad 2'},
        { id: 3, name: 'Proveedor 3', description: 'Descripción del proveedor 3', telefono: '456789123', email: 'pro3@gmail.com', direccion: 'Calle 3, Ciudad 3'},
        { id: 4, name: 'Proveedor 4', description: 'Descripción del proveedor 4', telefono: '321654987', email: 'pro4@gmail.com', direccion: 'Calle 4, Ciudad 4'},
        { id: 5, name: 'Proveedor 5', description: 'Descripción del proveedor 5', telefono: '654321789', email: 'pro5@gmail.com', direccion: 'Calle 5, Ciudad 5'},
        { id: 6, name: 'Proveedor 6', description: 'Descripción del proveedor 6', telefono: '789123456', email: 'pro6@gmail.com', direccion: 'Calle 6, Ciudad 6'},
        { id: 7, name: 'Proveedor 7', description: 'Descripción del proveedor 7', telefono: '159753486', email: 'pro7@gmail.com', direccion: 'Calle 7, Ciudad 7'},
        { id: 8, name: 'Proveedor 8', description: 'Descripción del proveedor 8', telefono: '753159486', email: 'pro8@gmail.com', direccion: 'Calle 8, Ciudad 8'},
    ]);

    return (
        <SupplierContext.Provider value={{ suppliers, setSuppliers }}>
            {children}
        </SupplierContext.Provider>
    );
};