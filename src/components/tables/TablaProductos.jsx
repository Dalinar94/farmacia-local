import React, { useState,useContext } from 'react';
import ModalEditarProductos from '../modals/modalEditarProductos.jsx'; // Importar el componente de edición
import { BOTONES, LABELS } from '../../lib/constantes'; // Importar las constantes
import {ProductContext} from "../../context/ProductContext";
import ModalAgregarProducto from "../modals/modalAgregarProducto";

const TablaProductos = () => {
  const [editingProduct, setEditingProduct] = useState(null); // Producto en el que se esta editando el modal
  const { productos, loading, setProductos } = useContext(ProductContext);
  const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda
  const [showAddProductForm, setShowAddProductForm] = useState(false); // Estado para mostrar el formulario

  const filteredProducts = productos.filter((product) =>
      product.nombre?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddProduct = (product) => {
    const newProduct = {
      ...product,
      id: productos.length + 1, // Generar un ID único
      stock: parseInt(product.stock, 10), // Asegurar que el stock sea un número
      price: parseFloat(product.price), // Asegurar que el precio sea un número con decimales
    };
    setProductos([...productos, newProduct]); // Agregar el nuevo producto al estado
    setShowAddProductForm(false); // Cerrar el formulario
  };
  const handleEdit = (product) => {
    setEditingProduct(product); // Establece el producto que se va a editar
  };

  const handleDelete = (productId) => {
    setProductos(productos.filter((product) => product.id !== productId)); // Elimina el producto
  };

  const handleConfirmEdit = (updatedProduct) => {
    setProductos(
        productos.map((product) =>
            product.id === updatedProduct.id ? updatedProduct : product
        )
    );
    setEditingProduct(null); // Cierra el modal de edición
  };

  const handleCancelEdit = () => {
    setEditingProduct(null); // Cierra el modal de edición sin guardar cambios
  };

  const getStockClass = (producto) => {
    if (producto <= 10) return 'low-stock';
    if (producto <= 50) return 'medium-stock';
    return 'high-stock';
  };

  if (loading) return <p>Cargando productos...</p>;
  console.log('Productos cargados:', productos);

  return (
        <div>
          <div className="dashboard-controles">
            <i className="fa-solid fa-magnifying-glass"/>
            <div className="dashboard-busqueda">
              <input
                  type="text"
                  placeholder="Buscar productos..."
                  className="login-input"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="boton-primario">
              <button onClick={() => setShowAddProductForm(true)}>{BOTONES.AGREGAR_PRODUCTO}</button>
            </div>
          </div>
        <div className="tabla-con-scroll-productos">
          <ul>
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
                  {filteredProducts.map((producto, index) => (
                      <tr key={index}>
                        <td style={{textAlign:'left'}}>{producto.nombre}</td>
                        <td style={{textAlign:'left'}}>{producto.descripcion.split('.')[0] + '.'}</td>
                        <td className={getStockClass(producto.cantidad)}>{producto.cantidad}</td>
                        <td className="centrado no-wrap">{producto.precio.toFixed(2).replace('.',',')} €</td>
                        <td>
                          <div className="action-buttons">
                            <button
                                className="action-button edit-button"
                                onClick={() => handleEdit(producto)}
                            >
                              {BOTONES.EDITAR}
                            </button>
                            <button
                                className="action-button delete-button"
                                onClick={() => handleDelete(producto.id)}
                            >
                              {BOTONES.ELIMINAR}
                            </button>
                          </div>
                        </td>
                      </tr>
                  ))}
                  </tbody>
                </table>

          </ul>
        </div>


          {showAddProductForm && (
              <ModalAgregarProducto
                  onAddProduct={handleAddProduct}
                  onCancel={() => setShowAddProductForm(false)}
              />
          )}

        {/* Modal de la edición del campo Acciones, el boton editar */}
        {editingProduct && (
            <ModalEditarProductos
                product={editingProduct}
                onConfirm={handleConfirmEdit}
                onCancel={handleCancelEdit}
            />
        )}
      </div>
  );
};

export default TablaProductos;