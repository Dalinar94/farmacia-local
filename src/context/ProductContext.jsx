import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Producto 1', description: 'Descripción 1', stock: 50, price: 100 },
    { id: 2, name: 'Producto 2', description: 'Descripción 2', stock: 20, price: 50 },
    { id: 3, name: 'Producto 3', description: 'Descripción 3', stock: 60, price: 200 },
    { id: 4, name: 'Producto 4', description: 'Descripción 4', stock: 10, price: 150 },
  ]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};