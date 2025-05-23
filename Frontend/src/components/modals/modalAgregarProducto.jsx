import React, { useState } from 'react';
import {LABELS,BOTONES} from '../../lib/constantes'; // Importar las constantes

const ModalAgregarProducto = ({ onAddProduct, onCancel }) => {
  const [newProduct, setNewProduct] = useState({
    nombre: '',
    descripcion: '',
    cantidad: '',
    precio: '',
    img: '',
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Enviando producto:', newProduct);
    await onAddProduct(newProduct); // AGREGA EL PRODUCTO
    setNewProduct({ nombre: '', descripcion: '', cantidad: '', precio: '', img: '' });
    onCancel(); // Cierra el modal después de agregar
  };


  return (
    <div className="modal-overlay-agregar">
      <div className="modal-content-agregar">
        <h3>{BOTONES.AGREGAR_PRODUCTO}</h3>
        <form onSubmit={handleSubmit}>
          <label>
            {LABELS.NOMBRE}:
            <input
              type="text"
              name="nombre"
              value={newProduct.nombre}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            {LABELS.DESCRIPCION}:
            <input
              type="text"
              name="descripcion"
              value={newProduct.descripcion}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            {LABELS.CANTIDAD}:
            <input
              type="number"
              name="cantidad"
              value={newProduct.cantidad}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            {LABELS.PRECIO}:
            <input
              type="number"
              step="0.01"
              name="precio"
              value={newProduct.precio}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Imagen (URL):
            <input
                type="text"
                name="img"
                value={newProduct.img || ''}
                onChange={handleInputChange}
                required
            />
          </label>

          <div className="formulario-botones-agregar">
            <button type="submit" className="boton-agregar">{BOTONES.AGREGAR}</button>
            <button type="button" className="boton-cancelar" onClick={onCancel}>{BOTONES.CANCELAR}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalAgregarProducto;