import React from 'react';
import '../../styles/tablaStock.css'; // Importar los estilos específicos para la tabla de stock

const TablaStock = ({ products }) => {
  const getEstado = (stock) => {
    if (stock < 10) return 'Bajo';
    if (stock >= 10 && stock <= 50) return 'Medio';
    return 'Normal';
  };

  const getEstadoClase = (stock) => {
    if (stock < 10) return 'estado-bajo';
    if (stock >= 10 && stock <= 50) return 'estado-medio';
    return 'estado-normal';
  };

  return (
    <table className="stock-table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Cantidad</th>
          <th>Estado</th>
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
  );
};

export default TablaStock;