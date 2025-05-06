import React, { useState } from 'react';
import { TITULOS,MENSAJES,LABELS,ENLACES,BOTONES} from '../lib/constantes';
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de registro
    console.log('Usuario registrado:', { email, password });
  };

  return (
    <div className='register-container'>
      <div className='register-form'>
      <form onSubmit={handleSubmit}>
        <div className='register-encabezado'>
          <h2>{TITULOS.REGISTRO}</h2>
        <p className="register-descripcion">{MENSAJES.INGRESE_REGISTRO}</p>
        </div>
      <div className='register-empresa'>
        <div>
          <label>{LABELS.NOMBRE}:</label>
          <input type="text" placeholder='Ingrese su nombre...' required />
        </div>
        <div>
          <label>{LABELS.APELLIDO}:</label>
          <input type="text" placeholder='Ingrese su apellido...' required />
        </div>
        <div>
          <label>{LABELS.EMAIL}:</label>
          <input type="email" placeholder='Ingrese su email...' value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>{LABELS.CONTRASENA}:</label>
          <input type="password" placeholder='Ingrese su contraseña...' value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        </div>
        <div className='register-links'>
          <label>{LABELS.YA_CUENTA}</label>
          <a href="/">{ENLACES.ACCEDE}</a>
        </div>
        <div className='btn-registro'>
            <button  type="submit">{BOTONES.REGISTRAR}</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Register;
