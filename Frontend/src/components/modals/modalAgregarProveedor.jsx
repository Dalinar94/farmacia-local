import React, { useState } from 'react';
import {LABELS,BOTONES} from '../../lib/constantes';

const ModalAgregarProveedor = ({ onAddProveedor, onCancel }) => {
    const [newProveedor, setNewProveedor] = useState({
        name: '',
        description: '',
        telefono: '',
        email: '',
        direccion: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProveedor({ ...newProveedor, [name]: value });// los ... es para concatenar proveedores
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        onAddProveedor(newProveedor); // Llama a la función para agregar el producto
        setNewProveedor({ name: '', description: '', telefono: '', email: '', direccion:'' }); // Reinicia el formulario
    };

    return (
        <div className="modal-overlay-agregar">
            <div className="modal-content-agregar">
                <h3>{BOTONES.AGREGAR_PROVEEDOR}</h3>
                <form onSubmit={handleSubmit}>
                    <label>
                        {LABELS.NOMBRE}:
                        <input
                            type="text"
                            name="name"
                            value={newProveedor.name}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        {LABELS.DESCRIPCION}:
                        <input
                            type="text"
                            name="description"
                            value={newProveedor.description}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        {LABELS.TELEFONO}:
                        <input
                            type="text"
                            name="telefono"
                            value={newProveedor.telefono}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        {LABELS.EMAIL}:
                        <input
                            type="text"
                            name="email"
                            value={newProveedor.email}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        {LABELS.DIRECCION}:
                        <input
                            type="text"
                            name="direccion"
                            value={newProveedor.direccion}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <div className="formulario-botones">
                        <button type="submit" className="boton-enviar">{BOTONES.AGREGAR}</button>
                        <button type="button" className="boton-cancelar" onClick={onCancel}>{BOTONES.CANCELAR}</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default ModalAgregarProveedor;