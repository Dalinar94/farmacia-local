import React, { useState } from 'react';
import {LABELS,BOTONES} from '../../lib/constantes'; // Importar las constantes

const FormularioAgregarProducto = ({ onAddProduct, onCancel }) => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    stock: '',
    price: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(newProduct); // Llama a la función para agregar el producto
    setNewProduct({ name: '', description: '', stock: '', price: '' }); // Reinicia el formulario
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
              name="name"
              value={newProduct.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            {LABELS.DESCRIPCION}:
            <input
              type="text"
              name="description"
              value={newProduct.description}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            {LABELS.CANTIDAD}:
            <input
              type="number"
              name="stock"
              value={newProduct.stock}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            {LABELS.PRECIO}:
            <input
              type="number"
              step="0.01"
              name="price"
              value={newProduct.price}
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

export default FormularioAgregarProducto;