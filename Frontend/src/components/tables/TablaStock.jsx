import React, { useContext, useState } from 'react';
import { ProductContext } from '../../context/ProductContext';
import {LABELS, MENSAJES} from '../../lib/constantes'; // Importa constantes
import Pagination from 'react-bootstrap/Pagination';

const TablaStock = () => {
  const { productos } = useContext(ProductContext);

  const hayAgotados = productos.some(product => product.cantidad === 0);

  // --- Estados para la paginación ---
  const [currentPage, setcurrentPage] = useState(1); // Página activa
  const filasPorPagina = 8; // Cantidad de filas por página

  // --- Calcular las filas visibles para la página actual ---
  const indexOfUltimaFila = currentPage * filasPorPagina;
  const indexOfPrimeraFila = indexOfUltimaFila - filasPorPagina;
  const FilasActuales = productos.slice(indexOfPrimeraFila, indexOfUltimaFila); // Filas para la página

  const totalPages = Math.ceil(productos.length / filasPorPagina); // Número total de páginas

  // --- Generar la paginación dinámica ---
  const handlePageChange = (pageNumber) => {
    setcurrentPage(pageNumber); // Cambiar a una nueva página
  };

  const paginationItems = [];
  for (let number = 1; number <= totalPages; number++) {
    paginationItems.push(
        <Pagination.Item
            key={number}
            active={number === currentPage}
            onClick={() => handlePageChange(number)} // Cambiar página al hacer clic
        >
          {number}
        </Pagination.Item>
    );
  }

  // --- Determinar el estado del producto según el stock ---
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
        <table className="stock-table">
          <thead>
          <tr>
            <th>{LABELS.NOMBRE}</th>
            <th>{LABELS.CANTIDAD}</th>
            <th>{LABELS.PRECIO}</th>
            <th>{LABELS.ESTADO}</th>
          </tr>
          </thead>
          <tbody>
          {FilasActuales.map((product) => (
              <tr key={product.id}>
                <td>{product.nombre}</td>
                <td>{product.cantidad}</td>
                <td >{product.precio}€</td>
                <td className={getEstadoClase(product.cantidad)}>{getEstado(product.cantidad)}</td>
              </tr>
          ))}
          </tbody>
        </table>
        <Pagination>{paginationItems}</Pagination>


      </div>
  );
};

export default TablaStock;