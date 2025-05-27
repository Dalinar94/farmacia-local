import React, { useState } from 'react';
import {LABELS} from '../../lib/constantes';
import ModalEditarProveedores from "../modals/modalEditarProveedores";


const PanelProveedores = ({ supplier, setSupplier }) => {
    const [editingSupplier, setEditingSupplier] = useState(null); // Proveedor en el que se esta editando el modal


    const handleConfirmEdit = (updatedProveedor) => {
        setSupplier(
            supplier.map((proveedor) =>
                proveedor.id === updatedProveedor.id ? updatedProveedor : proveedor
            )
        );
        setEditingSupplier(null); // Cierra el modal de edición
    };


    const handleCancelEdit = () => {
        setEditingSupplier(null); // Cierra el modal de edición sin guardar cambios
    };
    return (
            <div className="panel-proveedores">
                    <h3 className="panel-proveedores-nombre">{supplier.nombre}</h3>
                    <p className="panel-proveedores-descripcion"><strong>{LABELS.DESCRIPCION}</strong>: {supplier.descripcion}</p>
                    <p className="panel-proveedores-telefono"><strong>{LABELS.TELEFONO}</strong>: {supplier.telefono}</p>
                    <p className="panel-proveedores-email"><strong>{LABELS.EMAIL}</strong>: {supplier.email}</p>
                    <p className="panel-proveedores-direccion"><strong>{LABELS.DIRECCION}</strong>: {supplier.direccion}</p>

                {/* Modal de la edición del campo de Acciones, el boton editar */}
                {editingSupplier && (
                    <ModalEditarProveedores
                        supplier={editingSupplier}
                        onConfirm={handleConfirmEdit}
                        onCancel={handleCancelEdit}
                    />
                )}
            </div>
    );
};

export default PanelProveedores;