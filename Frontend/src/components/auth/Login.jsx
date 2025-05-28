import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { useAuth } from '../../context/AuthContext'; // Importar el contexto de autenticación
import { TITULOS, MENSAJES, LABELS, ENLACES, BOTONES, FOOTER } from '../../lib/constantes';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setUser } = useContext(UserContext);
  const { login } = useAuth(); // Usar la función login del contexto
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Por favor ingrese un correo electrónico válido.');
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/usuarios/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();
      console.log("Token:" +data.token)
      if (!response.ok) {
        setError(data.mensaje || 'Error al iniciar sesión');
      } else {
        setUser(data.usuario); // Guardar usuario en contexto
        login(data.token);     // Guardar token y actualizar autenticación
        setError('');
        navigate('/dashboard');
        console.log("Usuario recibido:", data.usuario);

      }
    } catch (err) {
      setError('Error al conectar con el servidor');
    }
  };

  return (
      <div className="login-container">
        <div className="login-form">
          <div className="login-encabezado">
            <h2 className="text-primary">{TITULOS.NOMBRE_EMPRESA}</h2>
            <p className="text-muted">{MENSAJES.INGRESE_CREDENCIAL}</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="login-empresa">
              <div className="login-email">
                <label htmlFor="email">{LABELS.EMAIL}:</label>
                <input
                    id="email"
                    placeholder="Introduzca su email..."
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                />
              </div>
              <div className="login-password">
                <label htmlFor="password">{LABELS.CONTRASENA}:</label>
                <input
                    id="password"
                    placeholder="Introduzca su contraseña..."
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                />
              </div>
            </div>
            <div className="error-message">
              {error && <p>{error}</p>}
            </div>
            <div className="login-links">
              <label className="text-muted">{LABELS.NO_CUENTA}</label>
              <a href="/register" className="text-decoration-none">
                {ENLACES.REGISTRATE}
              </a>
            </div>
            <div className="btn-login">
              <button type="submit" className="btn btn-primary btn-lg">
                {BOTONES.ACCEDER}
              </button>
            </div>
            <div className="login-footer">
              <p className="text-muted small">{MENSAJES.COPYRIGHT}</p>
              <p className="text-muted small">
                {FOOTER.DESARROLLADO_POR}: {FOOTER.DESARROLLADOR}
              </p>
            </div>
          </form>
        </div>
        <div className="logo-login">
          <img src="/img/logo.png" alt="Logo" />
        </div>
      </div>
  );
};

export default Login;
