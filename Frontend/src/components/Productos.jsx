import React, { useContext, useState } from 'react';
import Navbar from './common/Navbar'; // Importar la barra de navegación
import Footer from './common/Footer'; // Importar el componente de pie de página
import PanelProducto from './panels/PanelProducto'; // Importar el componente de panel de producto
import { ProductContext } from '../context/ProductContext'; // Importar el contexto
import { TITULOS } from '../lib/constantes'; // Importar las constantes
import Pagination from 'react-bootstrap/Pagination';

const Productos = () => {
    const { productos } = useContext(ProductContext); // Usar el contexto para acceder a los productos
    const itemsPerPage = 8; // Número de productos por página

    // Estado para manejar la paginación
    const [currentPage, setCurrentPage] = useState(1);

    // Calcular los índices de los productos que se deben mostrar en la página actual
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = productos.slice(indexOfFirstProduct, indexOfLastProduct);

    // Calcular el número total de páginas
    const totalPages = Math.ceil(productos.length / itemsPerPage);

    // Manejar el cambio de página
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Generar los elementos de la paginación
    const renderPaginationItems = () => {
        const items = [];
        for (let number = 1; number <= totalPages; number++) {
            items.push(
                <Pagination.Item
                    key={number}
                    active={number === currentPage}
                    onClick={() => handlePageChange(number)}
                >
                    {number}
                </Pagination.Item>
            );
        }
        return items;
    };

    return (
        <div className="productos-container">
            <Navbar />
            <main className="productos-content">
                <h1>{TITULOS.PANEL_PRODUCTOS}</h1>
                <div className="productos-paneles">
                    {/* Renderizar los productos de la página actual */}
                    {currentProducts.map((product) => (
                        <PanelProducto key={product.id || product.nombre} product={product} />
                    ))}
                </div>
                {/* Componente de paginación */}
                {totalPages > 1 && (
                    <Pagination className="mt-3">
                        {renderPaginationItems()}
                    </Pagination>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default Productos;