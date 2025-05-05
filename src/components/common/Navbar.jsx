import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

/*
APUNTES MIOS PARA EXPLICAR
Que es un Hook?

Un Hook es una función especial de React que permite a los desarrolladores "engancharse" a las características de React, 
como el estado y el ciclo de vida, en componentes funcionales. 

Los Hooks permiten usar el estado y otras características de React sin 
escribir una clase. Algunos ejemplos de Hooks son useState, useEffect, useContext, entre otros.
*/ 
const Navbar = () => {
  const navigate = useNavigate();// Hook para la navegación
  const location = useLocation();// Hook para obtener la ubicación actual
  const { user } = useContext(UserContext); // Obtener el usuario desde el contexto

  const handleLogout = () => {
    // Limpiar el estado de autenticación y redirigir al login
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/img/logo.png" alt="Logo" />
        <h2>FarmaStock</h2>
      </div>
      <div className="navbar-links">
        <ul>
          <li>
            <Link
              to="/Dashboard"
              className={location.pathname === '/Dashboard' ? 'active-link' : ''}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/Productos"
              className={location.pathname === '/Productos' ? 'active-link' : ''}
            >
              Productos
            </Link>
          </li>
          <li>
            <Link
              to="/Stock"
              className={location.pathname === '/Stock' ? 'active-link' : ''}
            >
              Stock
            </Link>
          </li>
          <li>
            <Link
              to="/Soporte"
              className={location.pathname === '/Soporte' ? 'active-link' : ''}
            >
              Soporte
            </Link>
            
          </li>
        </ul>
      </div>
      <div className="btn-logout">
        {user ? (
          <>
            <Link to="/Usuario" >
              <span>{user.nombre}</span> {/* Mostrar el nombre del usuario */}
            </Link>
            <button onClick={handleLogout}>Cerrar Sesión</button>
          </>
        ) : (
          <Link to="/">Iniciar Sesión</Link> // Mostrar enlace al login si no hay usuario
        )}
      </div>
    </nav>
  );
};

export default Navbar;