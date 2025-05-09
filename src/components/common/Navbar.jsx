import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { TITULOS, LABELS, BOTONES } from '../../lib/constantes'; // Importar las constantes
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; // Importar el icono de hamburguesa

const Navbar = () => {
  const navigate = useNavigate(); // Hook para la navegación
  const location = useLocation(); // Hook para obtener la ubicación actual
  const { user } = useContext(UserContext); // Obtener el usuario desde el contexto
  const [isActive, setIsActive] = useState(false); // Estado para el icono de hamburguesa

  const handleLogout = () => {
    // Limpiar el estado de autenticación y redirigir al login
    navigate('/');
  };

  const toggleHamburger = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/img/logo.png" alt="Logo" />
        <h2>{TITULOS.NOMBRE_EMPRESA}</h2>
      </div>
    
      <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleHamburger}>
        <FontAwesomeIcon icon={faBars}  />
      </div>

      <div className={`navbar-links ${isActive ? 'active' : ''}`}>
        <ul>
          <li>
            <Link
              to="/Dashboard"
              className={location.pathname === '/Dashboard' ? 'active-link' : ''}
            >
              {LABELS.DASHBOARD}
            </Link>
          </li>
          <li>
            <Link
              to="/Productos"
              className={location.pathname === '/Productos' ? 'active-link' : ''}
            >
              {LABELS.PRODUCTOS}
            </Link>
          </li>
          <li>
            <Link
              to="/Stock"
              className={location.pathname === '/Stock' ? 'active-link' : ''}
            >
              {LABELS.STOCK}
            </Link>
          </li>

          <li>
            <Link
                to="/Proveedores"
                className={location.pathname === '/Proveedores' ? 'active-link' : ''}
            >
              {LABELS.PROVEEDORES}
            </Link>
          </li>

          <li>
            <Link
              to="/Soporte"
              className={location.pathname === '/Soporte' ? 'active-link' : ''}
            >
              {LABELS.SOPORTE}
            </Link>
          </li>
        </ul>
      </div>
      <div className="btn-logout">
        {user ? (
          <>
            <Link to="/Usuario">
              <span>{user.nombre}</span> {/* Mostrar el nombre del usuario */}
            </Link>
            <button onClick={handleLogout}>{BOTONES.CERRAR_SESION}</button>
          </>
        ) : (
          <Link to="/">{BOTONES.INICIAR_SESION}</Link> // Mostrar enlace al login si no hay usuario
        )}
      </div>
     
    </nav>
  );
};

export default Navbar;
