import React, { useState } from 'react';

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
          <h2>Register</h2>
        <p className="register-descripcion">Ingrese sus datos de registro</p>
        </div>
      <div className='register-empresa'>
        <div>
          <label>Nombre:</label>
          <input type="text" placeholder='Ingrese su nombre' required />
        </div>
        <div>
          <label>Apellido:</label>
          <input type="text" placeholder='Ingrese su apellido' required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" placeholder='Ingrese su email' value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" placeholder='Ingrese su contraseña' value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        </div>
        <div className='register-links'>
          <label>¿Ya tienes cuenta?</label>
          <a href="/">Accede</a>
        </div>
        <div className='btn-registro'>
            <button  type="submit">Register</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Register;
