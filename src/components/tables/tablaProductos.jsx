import React, { useState } from 'react';
import '../../styles/tablaProductos.css'; // Importar los estilos
import TablaEditarProductos from './tablaEditarProductos'; // Importar el componente de edición

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