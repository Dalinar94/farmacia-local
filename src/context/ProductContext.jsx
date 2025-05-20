import React, {createContext, useEffect, useState} from 'react';

export const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log('API_URL:', process.env.REACT_APP_API_URL + '/products');

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL +'/products')
        .then(res => res.json())
        .then(data => {
          setProductos(data);
          setLoading(false);
        })
        .catch(err => {
          console.error('Error al cargar productos:', err);
          setLoading(false);
        });
  }, []);


  return (
    <ProductContext.Provider value={{ productos, loading }}>
      {children}
    </ProductContext.Provider>
  );
};