import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

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
          <h2>FARMASTOCK</h2>
          <p>Ingrese sus credenciales de acceso</p>
          
        </div>
        <form onSubmit={handleSubmit}>
          <div className="login-empresa">
            <div className="login-email">
              <label>Email:</label>
              <input
                placeholder="Introduce tu email..."
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="login-password">
              <label>Password:</label>
              <input
                placeholder="Introduce la contraseña..."
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          {error && <p className="error-message">{error}</p>}
          <div className="login-links">
            <label>¿No tienes cuenta?</label>
            <a href="/register">Regístrate</a>
          </div>
          <div className="btn-login">
            <button type="submit">Acceder</button>
          </div>
          <div className="login-footer">
            <p>© 2023 FarmaStock. Todos los derechos reservados.</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;