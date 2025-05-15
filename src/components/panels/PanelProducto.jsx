import React from 'react';
import { LABELS } from '../../lib/constantes'; // Importar las constantes

const PanelProducto = ({ product }) => {
    return (
        <div className="panel-producto">
            <img className="panel-imagen" variant="top" src={product.img} />
            <div className="panel-info">
                <h3>{product.name}</h3>
                <p className="panel-producto-descripcion">{product.description}</p>
                <p className="panel-producto-valor">
                    {LABELS.VALOR_UNIDAD} : {(product.price).toFixed(2)} €
                </p>
            </div>
        </div>

    );
};

export default PanelProducto;