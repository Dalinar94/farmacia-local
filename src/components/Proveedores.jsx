import React, { useContext } from 'react';
import Navbar from './common/Navbar'; // Importar la barra de navegación
import Footer from './common/Footer'; // Importar el componente de pie de página
import PanelProveedores from './panels/PanelProveedores'; // Importar el componente de panel de producto
import { SupplierContext } from "../context/ProveedoresContext"; // Importar las constantes
import { TITULOS } from '../lib/constantes';

const Proveedores = () => {
    const { suppliers } = useContext(SupplierContext); // Usar el contexto para acceder a los productos

    return (
        <div className="proveedores-container">
            <Navbar /> {/* Incluir la barra de navegación */}
            <main className="proveedores-content">
                <h1>{TITULOS.PANEL_DE_PROVEEDORES}</h1>
                    <div className="proveedores-paneles">
                        {suppliers.map((supplier) => (
                        <PanelProveedores key={supplier.id} supplier={supplier}/>
                    ))}
                    </div>
            </main>
            <Footer /> {/* Incluir el pie de página */}
        </div>
    );
};

export default Proveedores;

