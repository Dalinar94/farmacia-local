import React, { createContext, useState } from 'react';

export const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Paracetamol', description: 'El Paracetamol es un medicamento utilizado para aliviar el dolor y reducir la fiebre', stock: 50, price: 100 },
    { id: 2, name: 'Ibuprofeno', description: 'El Ibuprofeno es un medicamento utilizado para aliviar el dolor, reducir la inflamación y bajar la fiebre.', stock: 0, price: 50 },
    { id: 3, name: 'Omoxicilina', description: 'La amoxicilina es un antibiótico de amplio espectro utilizado para tratar diversas infecciones bacterianas.', stock: 60, price: 200 },
    { id: 4, name: 'Gasas', description: 'Las gasas son compresas de tela o material sintético utilizadas para cubrir heridas y ayudar en su curación.', stock: 10, price: 150 },
  ]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};