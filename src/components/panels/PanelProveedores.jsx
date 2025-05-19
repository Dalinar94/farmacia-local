import React, { useState } from 'react';
import {BOTONES, LABELS} from '../../lib/constantes';
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
                    <h3 className="panel-proveedores-nombre">{supplier.name}</h3>
                    <p className="panel-proveedores-descripcion">{LABELS.DESCRIPCION}: {supplier.description}</p>
                    <p className="panel-proveedores-telefono">{LABELS.TELEFONO}: {supplier.telefono}</p>
                    <p className="panel-proveedores-email">{LABELS.EMAIL}: {supplier.email}</p>
                    <p className="panel-proveedores-direccion">{LABELS.DIRECCION}: {supplier.direccion}</p>

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