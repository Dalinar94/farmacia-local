import React, { useContext, useState } from 'react';
import Navbar from './common/Navbar'; // Importar la barra de navegación
import Footer from './common/Footer'; // Importar el componente de pie de página
import PanelProveedores from './panels/PanelProveedores'; // Importar el componente de panel de producto
import { SupplierContext } from "../context/ProveedoresContext"; // Importar las constantes
import {BOTONES, TITULOS} from '../lib/constantes';
import FormularioAgregarProveedor from "./forms/FormularioAgregarProveedor";

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


    return (
        <div className="proveedores-container">
            <Navbar />
            <main className="proveedores-content">
                <h1>{TITULOS.PANEL_DE_PROVEEDORES}</h1>

                <h2 className="dashboard-subtitulo">{TITULOS.PRODUCTOS}</h2>
                <div className="dashboard-controles">
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
                        <button onClick={() => setShowAddProveedorForm(true)}>{BOTONES.AGREGAR_PRODUCTO}</button>
                    </div>
                </div>

                    <div className="proveedores-paneles">
                        {suppliers.map((supplier) => (
                        <PanelProveedores key={supplier.id} supplier={supplier}/>
                    ))}
                    </div>
                {showAddProveedorForm && (
                    <FormularioAgregarProveedor
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

