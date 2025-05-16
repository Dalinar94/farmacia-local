import React, { useContext, useState } from 'react';
import Navbar from './common/Navbar'; // Importar la barra de navegación
import Footer from './common/Footer'; // Importar el componente de pie de página
import PanelProveedores from './panels/PanelProveedores'; // Importar el componente de panel de producto
import { SupplierContext } from "../context/ProveedoresContext"; // Importar las constantes
import {BOTONES, TITULOS} from '../lib/constantes';
import ModalAgregarProveedor from "./modals/modalAgregarProveedor";

const Proveedores = () => {
    const { suppliers,setSuppliers } = useContext(SupplierContext); // Usar el contexto para acceder a los productos
    const [showAddProveedorForm, setShowAddProveedorForm] = useState(false); // Estado para mostrar el formulario
    const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda

    const handleAddProveedor = (proveedor) => {
        const newProveedor = {
           ...proveedor,
            id: suppliers.length + 1, // Generar un ID único
        };
        setSuppliers([...suppliers, newProveedor]); // Agregar el nuevo producto al estado
        setShowAddProveedorForm(false); // Cerrar el formulario
    };
    //metodo que filtra proveedor por nombre o descripcion
    const filtroProveedor = suppliers.filter((proveedor) =>
        proveedor.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="proveedores-container">
            <Navbar />
            <main className="proveedores-content">
                <h1>{TITULOS.PANEL_DE_PROVEEDORES}</h1>
                <div className="dashboard-controles">
                    <i className="fa-solid fa-magnifying-glass"/>
                    <div className="dashboard-busqueda">
                        <input
                            type="text"
                            placeholder="Buscar proveedores..."
                            className="login-input"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="boton-primario">
                        <button onClick={() => setShowAddProveedorForm(true)}>{BOTONES.AGREGAR_PROVEEDOR}</button>
                    </div>
                </div>

                <div className="proveedores-paneles">
                    {
                        filtroProveedor.map((supplier) => (
                            <PanelProveedores key={supplier.id} supplier={supplier} />
                        ))}
                </div>

                {showAddProveedorForm && (
                    <ModalAgregarProveedor
                        onAddProveedor={handleAddProveedor}
                        onCancel={() => setShowAddProveedorForm(false)}
                    />
                )}
            </main>
            <Footer />
        </div>
    );
};

export default Proveedores;

