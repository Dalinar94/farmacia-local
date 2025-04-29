import React, { useState } from 'react';
import '../../styles/tablaProductos.css'; // Importar los estilos

const TablaProductos = ({ products, setProducts }) => {
  const [editingProduct, setEditingProduct] = useState(null);

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleDelete = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  const handleConfirmEdit = (updatedProduct) => {
    setProducts(
      products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
    setEditingProduct(null);
  };

  return (
    <div>
      <table className="products-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.stock}</td>
              <td>{product.price.toFixed(2)} €</td>
              <td>
                <div className="action-buttons">
                  <button
                    className="action-button edit-button"
                    onClick={() => handleEdit(product)}
                  >
                    Editar
                  </button>
                  <button
                    className="action-button delete-button"
                    onClick={() => handleDelete(product.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaProductos;