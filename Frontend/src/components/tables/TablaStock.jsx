import React, { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { LABELS, MENSAJES } from '../../lib/constantes';

const TablaStock = () => {
  const { productos } = useContext(ProductContext);
  const hayAgotados = productos.some(product => product.cantidad === 0);

  const getEstado = (stock) => {
    if (stock === 0) return 'AGOTADO!';
    if (stock <= 10) return 'Bajo';
    if (stock > 10 && stock <= 50) return 'Medio';
    return 'Normal';
  };

  const getEstadoClase = (stock) => {
    if (stock <= 10) return 'estado-bajo';
    if (stock > 10 && stock <= 50) return 'estado-medio';
    return 'estado-normal';
  };

  return (
      <div className="tabla">
        {hayAgotados && (
            <div className="alerta-stock-agotado">
          <span className="alerta-texto">
            <div>{MENSAJES.ATENCION}</div>
            <div>{MENSAJES.ATENCION}</div>
            <div>{MENSAJES.ATENCION}</div>
            <div>{MENSAJES.ATENCION}</div>
          </span>
            </div>
        )}

        {/* Tabla para escritorio */}
        <table className="stock-table">
          <thead>
          <tr>
            <th>{LABELS.NOMBRE}</th>
            <th>{LABELS.CANTIDAD}</th>
            <th>{LABELS.PRECIO}</th>
            <th>{LABELS.ESTADO}</th>
          </tr>
          </thead>
        </table>
        <div className="scroll-body">
          <table className="stock-table">
            <tbody>
            {productos.map((product) => (
                <tr key={product.id}>
                  <td>{product.nombre}</td>
                  <td>{product.cantidad}</td>
                  <td>{product.precio}€</td>
                  <td className={getEstadoClase(product.cantidad)}>{getEstado(product.cantidad)}</td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>

        {/* Vista en bloques para móviles */}
        <div className="scroll-body mobile-view">
          {productos.map((product) => (
              <div key={product.id} className="producto-bloque">
                <div><strong>{LABELS.NOMBRE}:</strong> {product.nombre}</div>
                <div><strong>{LABELS.CANTIDAD}:</strong> {product.cantidad}</div>
                <div><strong>{LABELS.PRECIO}:</strong> {product.precio}€</div>
                <div className={getEstadoClase(product.cantidad)}>
                  <strong>{LABELS.ESTADO}:</strong> {getEstado(product.cantidad)}
                </div>
              </div>
          ))}
        </div>
      </div>
  );
};

export default TablaStock;
