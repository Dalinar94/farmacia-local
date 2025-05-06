import React from 'react';
import '../../styles/tablaEditarProductos.css'; // Importar el archivo CSS correcto
import { BOTONES,TITULOS,LABELS } from '../../lib/constantes'; // Importar las constantes


const TablaEditarProductos = ({ product, onConfirm, onCancel }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      ...product,
      name: e.target.name.value,
      description: e.target.description.value,
      stock: parseInt(e.target.stock.value, 10),
      price: parseFloat(e.target.price.value),
    };
    onConfirm(updatedProduct); // Llama a la función para confirmar los cambios
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>{TITULOS.EDITAR_PRODUCTO}</h3>
        <form onSubmit={handleSubmit}>
          <label>
            {LABELS.NOMBRE}:
            <input type="text" name="name" defaultValue={product.name} />
          </label>
          <label>
            {LABELS.DESCRIPCION}:
            <input type="text" name="description" defaultValue={product.description} />
          </label>
          <label>
            {LABELS.CANTIDAD}:
            <input type="number" name="stock" defaultValue={product.stock} />
          </label>
          <label>
            {LABELS.PRECIO}:
            <input type="number" step="0.01" name="price" defaultValue={product.price} />
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

export default TablaEditarProductos;