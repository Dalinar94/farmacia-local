import React, { useState } from 'react';
import { TITULOS, MENSAJES, LABELS, ENLACES, BOTONES } from '../lib/constantes';

const Register = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errores, setErrores] = useState({});

  const validarFormulario = () => {
    const nuevosErrores = {};

    // Validar nombre
    if (!nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es obligatorio.';
    }

    // Validar apellido
    if (!apellido.trim()) {
      nuevosErrores.apellido = 'El apellido es obligatorio.';
    }

    // Validar email
    if (!/\S+@\S+\.\S+/.test(email)) {
      nuevosErrores.email = 'Ingrese un email válido.';
    }

    // Validar contraseña
    if (password.length < 6) {
      nuevosErrores.password = 'La contraseña debe tener al menos 6 caracteres.';
    }

    return nuevosErrores;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar formulario
    const nuevosErrores = validarFormulario();
    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      return;
    }

    // Si no hay errores, registrar al usuario
    setErrores({});
    console.log('Usuario registrado:', { nombre, apellido, email, password });
    alert('¡Usuario registrado exitosamente!');
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
                    required
                />
                {errores.nombre && <p className="text-danger small">{errores.nombre}</p>}
              </div>
              <div>
                <label>{LABELS.APELLIDO}:</label>
                <input
                    type="text"
                    placeholder="Ingrese su apellido..."
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    required
                />
                {errores.apellido && <p className="text-danger small">{errores.apellido}</p>}
              </div>
              <div>
                <label>{LABELS.EMAIL}:</label>
                <input
                    type="email"
                    placeholder="Ingrese su email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                {errores.email && <p className="text-danger small">{errores.email}</p>}
              </div>
              <div>
                <label>{LABELS.CONTRASENA}:</label>
                <input
                    type="password"
                    placeholder="Ingrese su contraseña..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {errores.password && <p className="text-danger small">{errores.password}</p>}
              </div>
            </div>
            <div className="register-links">
              <label>{LABELS.YA_CUENTA}</label>
              <a href="/" className="text-decoration-none">
                {ENLACES.ACCEDE}
              </a>
            </div>

            <div className="btn-registro mt-3">
              <button type="submit" className="btn btn-primary btn-lg">
                {BOTONES.REGISTRAR}
              </button>
            </div>
          </form>
        </div>
      </div>
  );
};

export default Register;