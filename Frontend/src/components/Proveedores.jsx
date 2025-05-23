import React, { useContext, useState } from 'react';
import Navbar from './common/Navbar'; // Importar la barra de navegación
import Footer from './common/Footer'; // Importar el componente de pie de página
import PanelProveedores from './panels/PanelProveedores'; // Importar el componente de panel de producto
import { SupplierContext } from "../context/ProveedoresContext"; // Importar las constantes
import {BOTONES, TITULOS} from '../lib/constantes';
import ModalAgregarProveedor from "./modals/modalAgregarProveedor";
import {toast} from "react-toastify";

const Proveedores = () => {
    const { suppliers,setSuppliers } = useContext(SupplierContext); // Usar el contexto para acceder a los productos

    console.log('Suppliers:', suppliers);

    const [showAddProveedorForm, setShowAddProveedorForm] = useState(false); // Estado para mostrar el formulario
    const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda

    const handleAddProveedor = async (proveedor) => {
        try {
            const proveedorWithImage = {
                ...proveedor,
                img: proveedor.img || 'default.jpg'
            };

            const response = await fetch('http://172.19.80.107:5000/api/proveedores/agregar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(proveedorWithImage),
            });

            if (!response.ok) {
                throw new Error('Error al agregar el proveedor');
            }

            const nuevoProveedor = await response.json();
            setSuppliers([...suppliers, nuevoProveedor]);
            setShowAddProveedorForm(false); // Cierra el modal

            toast.success('Proveedor agregado correctamente ✅');

        } catch (error) {
            console.error('Error:', error);
        }
    };



    //metodo que filtra proveedor por nombre o descripcion
    const filtroProveedor = suppliers.filter((proveedor) =>
        proveedor.nombre?.toLowerCase().includes(searchTerm.toLowerCase())
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

