import React from 'react';
import '../../styles/panelProducto.css'; // Importar los estilos específicos para los paneles

const PanelProducto = ({ product }) => {
  return (
    <div className="panel-producto">
      <h3 className="panel-producto-nombre">{product.name}</h3>
      <p className="panel-producto-descripcion">{product.description}</p>
      <p className="panel-producto-valor">
        Valor: {(product.price * product.stock).toFixed(2)} €
      </p>
    </div>
  );
};

export default PanelProducto;