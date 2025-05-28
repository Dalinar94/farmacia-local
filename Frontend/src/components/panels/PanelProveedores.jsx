import React, { useState } from 'react';
import {LABELS} from '../../lib/constantes';
import ModalEditarProveedores from "../modals/modalEditarProveedores";

import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';


const PanelProveedores = ({ supplier, setSupplier,onDelete }) => {
    const [editingSupplier, setEditingSupplier] = useState(null); // Proveedor en el que se esta editando el modal
    const { user } = useContext(UserContext);


    const handleDelete = () => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este proveedor?')) {
            onDelete(supplier._id);
        }
    };
    console.log("Usuario actual:", user);

    return (

            <div className="panel-proveedores">

                <div className="proveedores-contenido">
                    <h3 className="panel-proveedores-titulo">{supplier.nombre}</h3>
                    <p><strong>{LABELS.DESCRIPCION}</strong>: {supplier.descripcion}</p>
                    <p><strong>{LABELS.TELEFONO}</strong>: {supplier.telefono}</p>
                    <p><strong>{LABELS.EMAIL}</strong>: {supplier.email}</p>
                    <p><strong>{LABELS.DIRECCION}</strong>: {supplier.direccion}</p>
                </div>

                {user?.rol === 'admin' && (
                <div className="acciones">
                    <button className="action-button delete-button " onClick={handleDelete}>Eliminar</button>
                </div>
                )}

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