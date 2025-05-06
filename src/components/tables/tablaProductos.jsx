import React, { useState } from 'react';
import TablaEditarProductos from './tablaEditarProductos'; // Importar el componente de edición
import { BOTONES, LABELS } from '../../lib/constantes'; // Importar las constantes

const TablaProductos = ({ products, setProducts }) => {
  const [editingProduct, setEditingProduct] = useState(null); // Producto que se está editando

  const handleEdit = (product) => {
    setEditingProduct(product); // Establece el producto que se va a editar
  };

  const handleDelete = (productId) => {
    setProducts(products.filter((product) => product.id !== productId)); // Elimina el producto
  };

  const handleConfirmEdit = (updatedProduct) => {
    setProducts(
      products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
    setEditingProduct(null); // Cierra el modal de edición
  };

  const handleCancelEdit = () => {
    setEditingProduct(null); // Cierra el modal de edición sin guardar cambios
  };

  const getStockClass = (stock) => {
    if (stock <= 10) return 'low-stock';
    if (stock <= 50) return 'medium-stock';
    return 'high-stock';
  };

  return (
    <div className="tabla-con-scroll">
      <table className="products-table">
        <thead>
          <tr>
            <th>{LABELS.NOMBRE}</th>
            <th>{LABELS.DESCRIPCION}</th>
            <th>{LABELS.CANTIDAD}</th>
            <th>{LABELS.PRECIO}</th>
            <th>{LABELS.ACCIONES}</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td className={getStockClass(product.stock)}>
                {product.stock}
              </td>
              <td>{product.price.toFixed(2)} €</td>
              <td>
                <div className="action-buttons">
                  <button
                    className="action-button edit-button"
                    onClick={() => handleEdit(product)}
                  >
                    {BOTONES.EDITAR}
                  </button>
                  <button
                    className="action-button delete-button"
                    onClick={() => handleDelete(product.id)}
                  >
                    {BOTONES.ELIMINAR}
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal de edición */}
      {editingProduct && (
        <TablaEditarProductos
          product={editingProduct}
          onConfirm={handleConfirmEdit}
          onCancel={handleCancelEdit}
        />
      )}
    </div>
  );
};

export default TablaProductos;
