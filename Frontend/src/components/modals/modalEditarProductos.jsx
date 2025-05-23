import React from 'react';
import { BOTONES,TITULOS,LABELS } from '../../lib/constantes'; // Importar las constantes


const ModalEditarProductos = ({ product, onConfirm, onCancel }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      ...product,
      nombre: e.target.nombre.value,
      descripcion: e.target.descripcion.value,
      cantidad: parseInt(e.target.cantidad.value, 10),
      precio: parseFloat(e.target.precio.value),
      img: product.img
    };

    onConfirm(updatedProduct);
  };


  return (
    <div className="modal-overlay-editar">
      <div className="modal-content-editar">
        <h3>{TITULOS.EDITAR_PRODUCTO}</h3>
        <form onSubmit={handleSubmit}>
          <label>
            {LABELS.NOMBRE}:
            <input type="text" name="nombre" defaultValue={product.nombre} />
          </label>
          <label>
            {LABELS.DESCRIPCION}:
            <input type="text" name="descripcion" defaultValue={product.descripcion} />
          </label>
          <label>
            {LABELS.CANTIDAD}:
            <input type="number" name="cantidad" defaultValue={product.cantidad} />
          </label>
          <label>
            {LABELS.PRECIO}:
            <input type="number" step="0.01" name="precio" defaultValue={product.precio} />
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

export default ModalEditarProductos;