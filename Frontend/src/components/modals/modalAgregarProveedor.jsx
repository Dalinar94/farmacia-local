import React, { useState } from 'react';
import {LABELS,BOTONES} from '../../lib/constantes';

const ModalAgregarProveedor = ({ onAddProveedor, onCancel }) => {
    const [newProveedor, setNewProveedor] = useState({
        nombre: '',
        descripcion: '',
        telefono: '',
        email: '',
        direccion: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProveedor({ ...newProveedor, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddProveedor(newProveedor); // Llama a la función para agregar el proveedor
        setNewProveedor({ nombre: '', descripcion: '', telefono: '', email: '', direccion: '' });
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
                            name="nombre"
                            value={newProveedor.nombre}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        {LABELS.DESCRIPCION}:
                        <input
                            type="text"
                            name="descripcion"
                            value={newProveedor.descripcion}
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