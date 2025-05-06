import React from 'react';
import { LABELS } from '../../lib/constantes'; // Importar las constantes
const PanelProducto = ({ product }) => {
  return (
    <div className="panel-producto">
      <h3 className="panel-producto-nombre">{product.name}</h3>
      <p className="panel-producto-descripcion">{product.description}</p>
      <p className="panel-producto-valor">
        {LABELS.VALOR}: {(product.price * product.stock).toFixed(2)} €
      </p>
    </div>
  );
};

export default PanelProducto;