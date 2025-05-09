import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import NavBar from './common/Navbar';
import Footer from './common/Footer';
import { TITULOS,MENSAJES, LABELS, BOTONES } from '../lib/constantes';


const Usuario = () => {
  const { user, setUser } = useContext(UserContext); // Obtener y actualizar los datos del usuario desde el contexto
  const [isEditing, setIsEditing] = useState(false); // Estado para controlar si se está editando
  const [editedUser, setEditedUser] = useState(user); // Estado local para los datos editados

  if (!user) {
    return (
      <div className="usuario-container">
        <NavBar />
        <p>{MENSAJES.NO_USUARIO}</p>
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
      <h1>{TITULOS.PERFIL_USUARIO}</h1>
      <div className="usuario-datos">
        <table>
          <tbody>
            <tr>
              <td>{LABELS.NOMBRE}:</td>
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
              <td>{LABELS.EMAIL}:</td>
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
              <td>{LABELS.TELEFONO}:</td>
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
              <td>{LABELS.DIRECCION}:</td>
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
              {BOTONES.GUARDAR}
            </button>
            <button className="cancelar-btn" onClick={handleCancel}>
              {BOTONES.CANCELAR}
            </button>
          </>
        ) : (
          <button className="editar-btn" onClick={() => setIsEditing(true)}>
            {BOTONES.EDITAR}
          </button>
        )}
      </div>

      <Footer />
    </main>
  );
};

export default Usuario;