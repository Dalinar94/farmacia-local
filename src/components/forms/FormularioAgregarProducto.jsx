import React, { useState } from 'react';
import '../../styles/formularioAgregarProducto.css'; // Importar los estilos específicos del formulario

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
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Agregar Producto</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input
              type="text"
              name="name"
              value={newProduct.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Descripción:
            <input
              type="text"
              name="description"
              value={newProduct.description}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Cantidad:
            <input
              type="number"
              name="stock"
              value={newProduct.stock}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Precio:
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
            <button type="submit" className="boton-enviar">Agregar</button>
            <button type="button" className="boton-cancelar" onClick={onCancel}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormularioAgregarProducto;