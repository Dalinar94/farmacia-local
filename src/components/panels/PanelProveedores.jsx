import React from 'react';
import { LABELS } from '../../lib/constantes'; // Importar las constantes
const PanelProveedores = ({ supplier }) => {
    return (
        <div className="panel-proveedores">
            <h3 className="panel-proveedores-nombre">{supplier.name}</h3>
            <p className="panel-proveedores-descripcion">{supplier.description}</p>
            <p className="panel-proveedores-telefono">{LABELS.TELEFONO}: {supplier.telefono}</p>
            <p className="panel-proveedores-email">{LABELS.EMAIL}: {supplier.email}</p>
            <p className="panel-proveedores-direccion">{LABELS.DIRECCION}: {supplier.direccion}</p>

        </div>
    );
};

export default PanelProveedores;