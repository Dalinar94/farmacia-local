import React, { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import {LABELS } from '../../lib/constantes'; // Importar las constantes
const TablaStock = () => {
  const { products } = useContext(ProductContext);

  const getEstado = (stock) => {
    if(stock===0) return 'AGOTADO!';
    if (stock <= 10) return 'Bajo';
    if (stock >= 10 && stock <= 50) return 'Medio';
    
    return 'Normal';
  };

  const getEstadoClase = (stock) => {
    if (stock <= 10) return 'estado-bajo';
    if (stock >= 10 && stock <= 50) return 'estado-medio';
    return 'estado-normal';
  };

  return (
    <div className="tabla-con-scroll">
    <table className="stock-table">
      <thead>
        <tr>
          <th>{LABELS.NOMBRE}</th>
          <th>{LABELS.DESCRIPCION}</th>
          <th>{LABELS.CANTIDAD}</th>
          <th>{LABELS.ESTADO}</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.stock}</td>
            <td className={getEstadoClase(product.stock)}>{getEstado(product.stock)}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default TablaStock;