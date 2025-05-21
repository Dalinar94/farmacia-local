import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { TITULOS,MENSAJES, LABELS,ENLACES, BOTONES,FOOTER} from '../../lib/constantes';
import bcrypt from 'bcryptjs';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setUser } = useContext(UserContext); // Obtener la función para actualizar el usuario completo
  const navigate = useNavigate();

  // Contraseña encriptada almacenada (simula los datos de la base de datos):
  const storedPasswordHash = bcrypt.hashSync('1234', 10); // Simula una contraseña "1234" encriptada


  const handleSubmit =async (e) => {
    e.preventDefault();

    // Datos de autenticación provisionales
    const validarEmail = 'Admin@farmastock.com';
    const validarPassword = await bcrypt.compare(password,storedPasswordHash);

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Por favor ingrese un correo electrónico válido.');
      return;
    }


    if (email === validarEmail && validarPassword) {
      setError('');
      setUser({
        nombre: 'Admin',
        email: validarEmail,
        password: storedPasswordHash,
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
        <div className="login-form ">
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
              <div className="login-password ">
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
            <div className="error-message ">
              {error && <p>{error}</p>}
            </div>
            <div className="login-links ">
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
              <p className="text-muted small">{FOOTER.DESARROLLADO_POR}: {FOOTER.DESARROLLADOR}</p>
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