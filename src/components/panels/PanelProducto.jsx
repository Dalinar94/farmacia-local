import React from 'react';
import { LABELS } from '../../lib/constantes'; // Importar las constantes

const PanelProducto = ({ product }) => {
    return (
        <div className="panel-producto">
            <img className="panel-imagen" alt="No hay imagen"  src={product.img} />
            <div className="panel-info">
                <h3>{product.nombre}</h3>
                <p className="panel-producto-descripcion">{product.descripcion}</p>
                <p className="panel-producto-valor">
                    {LABELS.VALOR_UNIDAD} : {(product.precio).toFixed(2)} €
                </p>
            </div>
        </div>

    );
};

export default PanelProducto;