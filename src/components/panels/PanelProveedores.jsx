import React, {useState} from 'react';
import {BOTONES, LABELS} from '../../lib/constantes';
import ModalEditarProveedores from "../modals/modalEditarProveedores";


const PanelProveedores = ({ supplier, setSupplier }) => {
    const [editingSupplier, setEditingSupplier] = useState(null); // Producto en el que se esta editando el modal

    const handleEdit = (supplier) => {
        setEditingSupplier(supplier); // Establece el producto que se va a editar
    };

    const handleDelete = (supplierID) => {
        setSupplier(supplier.filter((supplier) => supplier.id !== supplierID)); // Elimina el producto
    };

    const handleConfirmEdit = (updatedProveedor) => {
        setSupplier(
            supplier.map((supplier) =>
                supplier.id === updatedProveedor.id ? updatedProveedor : supplier
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

                <div className="action-buttons">
                    <button
                        className="action-button edit-button"
                        onClick={() => handleEdit(supplier)}
                    >
                        {BOTONES.EDITAR}
                    </button>
                    <button
                        className="action-button delete-button"
                        onClick={() => handleDelete(supplier.id)}
                    >
                        {BOTONES.ELIMINAR}
                    </button>
                </div>

                {/* Modal de la edición del campo Acciones, el boton editar */}
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