import React, { useState,useContext } from 'react';
import ModalEditarProductos from '../modals/modalEditarProductos.jsx'; // Importar el componente de edición
import { BOTONES, LABELS } from '../../lib/constantes'; // Importar las constantes
import {ProductContext} from "../../context/ProductContext";
import ModalAgregarProducto from "../modals/modalAgregarProducto";
import { toast } from 'react-toastify';


const TablaProductos = () => {
  const [editingProduct, setEditingProduct] = useState(null); // Producto en el que se esta editando el modal
  const { productos, loading, setProductos } = useContext(ProductContext);
  const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda
  const [showAddProductForm, setShowAddProductForm] = useState(false); // Estado para mostrar el formulario
  const [mensajeExito] = useState('');

  const filteredProducts = productos.filter((product) =>
      product.nombre?.toLowerCase().includes(searchTerm.toLowerCase())
  );


  //añadir producto
  const handleAddProduct = async (product) => {
    try {
      const productWithImage = {
        ...product,
        img: product.img || 'default.jpg'
      };

      const response = await fetch('http://10.0.8.100:5000/api/products/agregar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productWithImage),
      });

      if (!response.ok) {
        throw new Error('Error al agregar el producto');
      }

      const nuevoProducto = await response.json();

      const productoFormateado = { ...nuevoProducto, id: nuevoProducto._id };

      setProductos(prev => [...prev, productoFormateado]);
      setShowAddProductForm(false); // Cierra el modal

      toast.success('Producto agregado correctamente ✅');

    } catch (error) {
      console.error('Error:', error);
    }
  };


  const handleEdit = (product) => {
    setEditingProduct(product); // Establece el producto que se va a editar
  };

  const handleDelete = async (productId) => {
    try {
      const response = await fetch(`http://10.0.8.100:5000/api/products/${productId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Error al eliminar el producto');
      }

      setProductos(productos.filter((product) => product.id !== productId));
      toast.success('Producto eliminado correctamente ✅');
    } catch (error) {
      console.error('Error:', error);
      toast.error('No se pudo eliminar el producto ❌');
    }
  };


  const handleConfirmEdit = async (updatedProduct) => {
    try {
      const response = await fetch(`http://10.0.8.100:5000/api/products/${updatedProduct.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProduct),
      });
      console.log('Código de respuesta:', response.status);

      if (!response.ok) {
        throw new Error('Error al actualizar el producto');
      }

      const productoActualizado = await response.json();

      setProductos(
          productos.map((product) =>
              product.id === productoActualizado._id ? { ...productoActualizado, id: productoActualizado._id } : product
          )
      );

      toast.success('Producto actualizado correctamente ✅');
      setEditingProduct(null);
    } catch (error) {
      console.error('Error:', error);
      toast.error('No se pudo actualizar el producto ❌');
    }
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
          {mensajeExito && <div className="mensaje-exito">{mensajeExito}</div>}
          <div className="dashboard-controles">
            <i className="fa-solid fa-magnifying-glass icono-buscador" />
            <span className="texto-buscador">Buscador:</span>
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