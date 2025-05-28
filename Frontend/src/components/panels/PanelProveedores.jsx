import React, { useState } from 'react';
import {LABELS} from '../../lib/constantes';
import ModalEditarProveedores from "../modals/modalEditarProveedores";


const PanelProveedores = ({ supplier, setSupplier,onDelete }) => {
    const [editingSupplier, setEditingSupplier] = useState(null); // Proveedor en el que se esta editando el modal


    const handleDelete = () => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este proveedor?')) {
            onDelete(supplier._id);
        }
    };

    return (
            <div className="panel-proveedores">
                <div className="proveedores-contenido">
                    <h3 className="panel-proveedores-nombre">{supplier.nombre}</h3>
                    <p className="panel-proveedores-descripcion"><strong>{LABELS.DESCRIPCION}</strong>: {supplier.descripcion}</p>
                    <p className="panel-proveedores-telefono"><strong>{LABELS.TELEFONO}</strong>: {supplier.telefono}</p>
                    <p className="panel-proveedores-email"><strong>{LABELS.EMAIL}</strong>: {supplier.email}</p>
                    <p className="panel-proveedores-direccion"><strong>{LABELS.DIRECCION}</strong>: {supplier.direccion}</p>
                </div>
                <div className="acciones">
                    <button className="action-button delete-button " onClick={handleDelete}>Eliminar</button>
                </div>

                {/* Modal de la edición del campo de Acciones, el boton editar */}

                {editingSupplier && (
                    <ModalEditarProveedores
                        supplier={editingSupplier}
                        onConfirm={(updated) => {
                            setSupplier(prev =>
                                prev.map(p => p._id === updated._id ? updated : p)
                            );
                            setEditingSupplier(null);
                        }}
                        onCancel={() => setEditingSupplier(null)}
                    />
                )}
            </div>
    );
};

export default PanelProveedores;