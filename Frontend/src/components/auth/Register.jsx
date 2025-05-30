import React, { useState } from 'react';
import {TITULOS, MENSAJES, LABELS, ENLACES, BOTONES, FOOTER} from '../../lib/constantes';
import { useNavigate } from 'react-router-dom';
import { Link,useLocation } from 'react-router-dom';

const Register = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [password, setPassword] = useState('');
  const [errores, setErrores] = useState({});
  const navigate = useNavigate();
  const location = useLocation(); // Hook para obtener la ubicación actual


  const validarFormulario = () => {
    const nuevosErrores = {};

    if (!nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es obligatorio.';
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      nuevosErrores.email = 'Ingrese un email válido.';
    }

    if (password.length < 6) {
      nuevosErrores.password = 'La contraseña debe tener al menos 6 caracteres.';
    }

    return nuevosErrores;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevosErrores = validarFormulario();
    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      return;
    }

    try {
        const response = await fetch((`${process.env.REACT_APP_API_URL}/usuarios/register`), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, email, password, telefono, direccion })
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.mensaje || 'Error al registrar');
      } else {
        alert('¡Usuario registrado exitosamente!');
        navigate('/');
      }
    } catch (error) {
      alert('Error al conectar con el servidor');
    }
  };


  return (
      <div className="register-container">
        <div className="register-form">
          <form onSubmit={handleSubmit}>
            <div className="register-encabezado">
              <h2>{TITULOS.REGISTRO}</h2>
              <p className="register-descripcion">{MENSAJES.INGRESE_REGISTRO}</p>
            </div>
            <div className="register-empresa">
              <div>
                <label>{LABELS.NOMBRE}:</label>
                <input
                    type="text"
                    placeholder="Ingrese su nombre..."
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                {errores.nombre && <p className="text-danger small">{errores.nombre}</p>}
              </div>
              <div>
                <label>{LABELS.EMAIL}:</label>
                <input
                    type="email"
                    placeholder="Ingrese su email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errores.email && <p className="text-danger small">{errores.email}</p>}
              </div>
              <div>
                <label>{LABELS.TELEFONO}:</label>
                <input
                    type="text"
                    placeholder="Ingrese su teléfono..."
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                />
              </div>

              <div>
                <label>{LABELS.DIRECCION}:</label>
                <input
                    type="text"
                    placeholder="Ingrese su dirección..."
                    value={direccion}
                    onChange={(e) => setDireccion(e.target.value)}
                />
              </div>
              <div>
                <label>{LABELS.CONTRASENA}:</label>
                <input
                    type="password"
                    placeholder="Ingrese su contraseña..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errores.password && <p className="text-danger small">{errores.password}</p>}
              </div>
            </div>
            <div className="register-links">
              <label>{LABELS.YA_CUENTA}</label>
              <Link to="/" className={`text-decoration-none ${location.pathname === '/' ? 'active-link' : ''}`}>
                {ENLACES.ACCEDE}
              </Link>
            </div>

            <div className="btn-registro">
              <button type="submit" className="btn btn-primary btn-lg">
                {BOTONES.REGISTRAR}
              </button>
            </div>
          </form>
          <div className="login-footer">
            <p className="text-muted small">{MENSAJES.COPYRIGHT}</p>
            <p className="text-muted small">{FOOTER.DESARROLLADO_POR}: {FOOTER.DESARROLLADOR}</p>
          </div>
        </div>

        <div className="logo-login">
          <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="Logo" />
        </div>
      </div>
  );
};

export default Register;