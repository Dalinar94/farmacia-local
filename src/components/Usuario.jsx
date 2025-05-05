import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import '../styles/usuario.css';
import NavBar from './common/Navbar';
import Footer from './common/Footer';

const Usuario = () => {
  const { user, setUser } = useContext(UserContext); // Obtener y actualizar los datos del usuario desde el contexto
  const [isEditing, setIsEditing] = useState(false); // Estado para controlar si se está editando
  const [editedUser, setEditedUser] = useState(user); // Estado local para los datos editados

  if (!user) {
    return (
      <div className="usuario-container">
        <NavBar />
        <p>No hay datos de usuario disponibles. Por favor, inicia sesión.</p>
        <Footer />
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleSave = () => {
    setUser(editedUser); // Actualizar los datos del usuario en el contexto
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedUser(user); // Restaurar los datos originales
    setIsEditing(false);
  };

  return (
    <main className="usuario-container">
      <NavBar />
      <h1>Perfil de Usuario</h1>
      <div className="usuario-datos">
        <table>
          <tbody>
            <tr>
              <td>Nombre:</td>
              <td>
                {isEditing ? (
                  <input
                    type="text"
                    name="nombre"
                    value={editedUser.nombre}
                    onChange={handleChange}
                  />
                ) : (
                  <span>{user.nombre}</span>
                )}
              </td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={editedUser.email}
                    onChange={handleChange}
                  />
                ) : (
                  <span>{user.email}</span>
                )}
              </td>
            </tr>
            <tr>
              <td>Teléfono:</td>
              <td>
                {isEditing ? (
                  <input
                    type="text"
                    name="telefono"
                    value={editedUser.telefono}
                    onChange={handleChange}
                  />
                ) : (
                  <span>{user.telefono}</span>
                )}
              </td>
            </tr>
            <tr>
              <td>Dirección:</td>
              <td>
                {isEditing ? (
                  <input
                    type="text"
                    name="direccion"
                    value={editedUser.direccion}
                    onChange={handleChange}
                  />
                ) : (
                  <span>{user.direccion}</span>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="usuario-acciones">
        {isEditing ? (
          <>
            <button className="guardar-btn" onClick={handleSave}>
              Guardar
            </button>
            <button className="cancelar-btn" onClick={handleCancel}>
              Cancelar
            </button>
          </>
        ) : (
          <button className="editar-btn" onClick={() => setIsEditing(true)}>
            Editar
          </button>
        )}
      </div>
      <Footer />
    </main>
  );
};

export default Usuario;