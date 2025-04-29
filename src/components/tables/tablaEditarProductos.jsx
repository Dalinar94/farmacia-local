import React from 'react';
import '../../styles/tablaEditarProductos.css'; // Importar el archivo CSS correcto

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
        <h3>Editar Producto</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input type="text" name="name" defaultValue={product.name} />
          </label>
          <label>
            Descripción:
            <input type="text" name="description" defaultValue={product.description} />
          </label>
          <label>
            Cantidad:
            <input type="number" name="stock" defaultValue={product.stock} />
          </label>
          <label>
            Precio:
            <input type="number" step="0.01" name="price" defaultValue={product.price} />
          </label>
          <div className="modal-buttons">
            <button type="submit" className="action-button edit-button">
              Confirmar
            </button>
            <button type="button" className="action-button delete-button" onClick={onCancel}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TablaEditarProductos;