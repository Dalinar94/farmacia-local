import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { TITULOS,MENSAJES, LABELS,ENLACES, BOTONES } from '../lib/constantes';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setUser } = useContext(UserContext); // Obtener la función para actualizar el usuario completo
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Datos de autenticación provisionales
    const validarEmail = 'Admin@farmastock.com';
    const validarPassword = '1234';

    if (email === validarEmail && password === validarPassword) {
      setError('');
      setUser({
        nombre: 'Admin',
        email: validarEmail,
        telefono: '123456789',
        direccion: 'Calle Ejemplo, 123',
      }); // Establecer los datos completos del usuario en el contexto
      navigate('/dashboard'); // Redirigir al dashboard
    } else {
      setError('Email o contraseña incorrectos');
    }
  };

  return (
    
    <div className="login-container">
      <span className="admin">Usuario: Admin@farmastock.com</span>
      <br/>
      <span className="admin">Contraseña: 1234</span>
      <div className="login-form">
        <div className="login-encabezado">
          <h2>{TITULOS.NOMBRE_EMPRESA}</h2>
          <p>{MENSAJES.INGRESE_CREDENCIAL}</p>
          
        </div>
        <form onSubmit={handleSubmit}>
          <div className="login-empresa">
            <div className="login-email">
              <label>{LABELS.EMAIL}:</label>
              <input
                placeholder="Introduzca su email..."
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="login-password">
              <label>{LABELS.CONTRASENA}:</label>
              <input
                placeholder="Introduzca su contraseña..."
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          {error && <p className="error-message">{error}</p>}
          <div className="login-links">
            <label>{LABELS.NO_CUENTA}</label>
            <a href="/register">{ENLACES.REGISTRATE}</a>
          </div>
          <div className="btn-login">
            <button type="submit">{BOTONES.ACCEDER}</button>
          </div>
          <div className="login-footer">
            <p>{MENSAJES.COPYRIGHT}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;