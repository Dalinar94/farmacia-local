import React, { createContext, useState } from 'react';

export const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Paracetamol', description: 'El Paracetamol es un medicamento utilizado para aliviar el dolor y reducir la fiebre', stock: 50, price: 100 },
    { id: 2, name: 'Ibuprofeno', description: 'El Ibuprofeno es un medicamento utilizado para aliviar el dolor, reducir la inflamación y bajar la fiebre.', stock: 0, price: 50 },
    { id: 3, name: 'Omoxicilina', description: 'La amoxicilina es un antibiótico de amplio espectro utilizado para tratar diversas infecciones bacterianas.', stock: 60, price: 200 },
    { id: 4, name: 'Gasas', description: 'Las gasas son compresas de tela o material sintético utilizadas para cubrir heridas y ayudar en su curación.', stock: 10, price: 150 },
    { id: 5, name: 'Tijeras', description: 'Las tijeras son herramientas de corte utilizadas para cortar papel, tela y otros materiales.', stock: 20, price: 300 },
    { id: 6, name: 'Termómetro', description: 'El termómetro es un dispositivo utilizado para medir la temperatura corporal.', stock: 30, price: 400 },
    { id: 7, name: 'Jeringas', description: 'Las jeringas son dispositivos médicos utilizados para inyectar líquidos en el cuerpo o extraer líquidos del cuerpo.', stock: 40, price: 500 },
    { id: 8, name: 'Guantes', description: 'Los guantes son prendas que cubren las manos y se utilizan para protegerlas de sustancias nocivas.', stock: 70, price: 600 },
    { id: 9, name: 'Mascarillas', description: 'Las mascarillas son dispositivos que cubren la boca y la nariz para proteger contra la inhalación de partículas nocivas.', stock: 80, price: 700 },
    { id: 10, name: 'Alcohol', description: 'El alcohol es un desinfectante utilizado para limpiar heridas y superficies.', stock: 90, price: 800 },
  ]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};