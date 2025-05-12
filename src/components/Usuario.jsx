import React, { useContext, useState } from 'react';
import bcrypt from 'bcryptjs'; // Importar bcryptjs para manejar la encriptación.
import { UserContext } from '../context/UserContext';
import NavBar from './common/Navbar';
import Footer from './common/Footer';
import { TITULOS, MENSAJES, LABELS, BOTONES } from '../lib/constantes';
import {Image} from "react-bootstrap";

const Usuario = () => {
  const { user, setUser } = useContext(UserContext); // Obtener y actualizar los datos del usuario desde el contexto
  const [isEditing, setIsEditing] = useState(false); // Estado para controlar si se está editando
  const [editedUser, setEditedUser] = useState(user); // Estado local para los datos editados
  const [password, setPassword] = useState(''); // Contraseña separada (nueva contraseña)
  const [error, setError] = useState(''); // Manejar los errores de contraseña

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

    // Actualizar campos de usuario (excepto contraseña)
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSave = async () => {
    // Validar la nueva contraseña solo si está siendo editada
    if (password !== '') {
      if (password.length < 6) {
        setError('La contraseña debe tener al menos 6 caracteres.');
        return;
      }

      // Encriptar la nueva contraseña
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Actualizar el usuario con la nueva contraseña encriptada
      setEditedUser({ ...editedUser, password: hashedPassword });
    }

    // Guardar los demás datos del usuario
    setUser(editedUser);
    setIsEditing(false);
    setPassword(''); // Limpiar el campo de la contraseña después de guardar
    setError(''); // Limpiar errores
  };

  const handleCancel = () => {
    setEditedUser(user); // Restaurar los datos originales
    setIsEditing(false);
    setPassword(''); // Limpiar el campo de la contraseña
    setError('');
  };

  return (
      <main className="usuario-container">
        <NavBar />
        <h1>{TITULOS.PERFIL_USUARIO}</h1>

        <div className="profile-container">
          <img className="profile-icon" src="/img/logo.png" alt="Logo" />
          <input type="file" id="image-upload" accept="image/*" style={{ display: 'none' }} />
          <button className="boton-profile" onClick={() => document.getElementById('image-upload').click()}>Cambiar Imagen</button>
        </div>

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
            <tr>
              <td>{LABELS.CONTRASENA}:</td>
              <td>
                {isEditing ? (
                    <input
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Nueva contraseña"
                        onChange={handlePasswordChange}
                    />
                ) : (
                    <span>********</span> // Mostrar como asteriscos
                )}
                {error && <p className="text-danger small">{error}</p>}
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