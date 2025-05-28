import React, { useContext, useState } from 'react';
import Navbar from './common/Navbar'; // Importar la barra de navegación
import Footer from './common/Footer'; // Importar el componente de pie de página
import PanelProveedores from './panels/PanelProveedores'; // Importar el componente de panel de producto
import { SupplierContext } from "../context/ProveedoresContext"; // Importar las constantes
import {BOTONES, TITULOS} from '../lib/constantes';
import ModalAgregarProveedor from "./modals/modalAgregarProveedor";
import {toast} from "react-toastify";
import { UserContext } from '../context/UserContext';

const Proveedores = () => {
    const { suppliers,setProveedores  } = useContext(SupplierContext); // Usar el contexto para acceder a los productos
    const { user } = useContext(UserContext);

    console.log('Suppliers:', suppliers);

    const [showAddProveedorForm, setShowAddProveedorForm] = useState(false); // Estado para mostrar el formulario
    const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda

    const handleAddProveedor = async (proveedor) => {
        try {
                const response = await fetch((`${process.env.REACT_APP_API_URL}/proveedores/agregar`), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(proveedor),
            });

            if (!response.ok) {
                throw new Error('Error al agregar el proveedor');
            }

            const nuevoProveedor = await response.json();
            setProveedores(prev => [...prev, nuevoProveedor]);
            setShowAddProveedorForm(false); // Cierra el modal

            toast.success('Proveedor agregado correctamente ✅');

        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleDeleteProveedor = async (id) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/proveedores/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Error al eliminar el proveedor');
            }

            setProveedores(prev => prev.filter(p => p._id !== id));
            toast.success('Proveedor eliminado correctamente ✅');
        } catch (error) {
            console.error('Error al eliminar proveedor:', error);
            toast.error('Error al eliminar el proveedor ❌');
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
                    {user?.rol === 'admin' && (
                    <div className="boton-primario">
                        <button onClick={() => setShowAddProveedorForm(true)}>{BOTONES.AGREGAR_PROVEEDOR}</button>
                    </div>
                    )}

                </div>

                <div className="proveedores-paneles">
                    {
                        filtroProveedor.map((supplier) => (
                            <PanelProveedores
                                key={supplier._id}
                                supplier={supplier}
                                onDelete={handleDeleteProveedor}
                            />
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

