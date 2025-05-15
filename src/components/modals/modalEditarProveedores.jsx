import React from 'react';
import { BOTONES,TITULOS,LABELS } from '../../lib/constantes'; // Importar las constantes

const ModalEditarProveedores = ({ supplier, onConfirm, onCancel }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedProveedor = {
            ...supplier,
            name: e.target.name.value,
            description: e.target.description.value,
            telefono: e.target.telefono.value,
            email: e.target.email.value,
            direccion: e.target.direccion.value,
        };
        onConfirm(updatedProveedor); // Llama a la función para confirmar los cambios
    };
return (
    <div className="modal-overlay-editar-proveedor">
        <div className="modal-content-editar-proveedor">
            <h3>{TITULOS.EDITAR_PROVEEDOR}</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    {LABELS.NOMBRE}:
                    <input type="text" name="name" defaultValue={supplier.name} />
                </label>
                <label>
                    {LABELS.DESCRIPCION}:
                    <input type="text" name="description" defaultValue={supplier.description} />
                </label>
                <label>
                    {LABELS.TELEFONO}:
                    <input type="text" name="telefono" defaultValue={supplier.telefono} />
                </label>
                <label>
                    {LABELS.EMAIL}:
                    <input type="text"  name="email" defaultValue={supplier.email} />
                </label>
                <label>
                    {LABELS.DIRECCION}:
                    <input type="text"  name="direccion" defaultValue={supplier.direccion} />
                </label>
                <div className="modal-buttons">
                    <button type="submit" className="action-button edit-button">
                        {BOTONES.CONFIRMAR}
                    </button>
                    <button type="button" className="action-button delete-button" onClick={onCancel}>
                        {BOTONES.CANCELAR}
                    </button>
                </div>
            </form>
        </div>
    </div>
);
};

export default ModalEditarProveedores;