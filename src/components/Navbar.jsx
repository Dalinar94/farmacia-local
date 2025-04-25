import { Link,useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const Navbar = () => {
 const navigate = useNavigate();
 const location = useLocation();

  const handleLogout = () => {
    // Aquí iría la lógica de cierre de sesión, como limpiar el estado de autenticación
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
            <Link to="/Dashboard" className={location.pathname === '/Dashboard' ? 'active-link' : ''}>
            Dashboard
            </Link>
          </li>
          <li>
            <Link to="/Productos" className={location.pathname === '/Productos' ? 'active-link' : ''}>
              Productos
            </Link>
          </li>
          <li>
            <Link to="/Stock" className={location.pathname === '/Stock' ? 'active-link' : ''}>
              Stock
            </Link>
          </li>
          <li>
            <Link to="/Soporte" className={location.pathname === '/Soporte' ? 'active-link' : ''}>
              Soporte
            </Link>
          </li>
        </ul>
      </div>
      <div className="btn-logout">
        <button onClick={handleLogout}>Cerrar Sesión</button>
      </div>
    </nav>
  );
};

export default Navbar;