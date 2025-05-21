import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { TITULOS, LABELS } from '../../lib/constantes'; // Importar las constantes
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {deepPurple} from '@mui/material/colors';
import Offcanvas from 'react-bootstrap/Offcanvas';


const Navbar = () => {
  const navigate = useNavigate(); // Hook para la navegación
  const location = useLocation(); // Hook para obtener la ubicación actual
  const { user } = useContext(UserContext); // Obtener el usuario desde el contexto
  const [isActive] = useState(false); // Estado para el icono de hamburguesa

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const handleLogout = () => {
      navigate('/');
    }

  return (
    <nav className="navbar-custom">

            {/* Ícono de hamburguesa solo en móviles */}
            <div className="d-block d-sm-none p-2">
                <FontAwesomeIcon
                    icon={faBars}
                    size="2x"
                    onClick={handleShow}
                    style={{ cursor: 'pointer' }}
                />
            </div>

            {/* Offcanvas solo para móviles */}
        <div className="d-none d-sm-flex" >
            <Offcanvas show={show} onHide={handleClose} backdrop="static">
                <div className="offcanvas-header-estilo">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title><div className="offcanvas-title-estilo">Menú </div></Offcanvas.Title>
                </Offcanvas.Header>
                </div>
                <Offcanvas.Body className="custom">
                   <div className="list-offcanvas-enlaces">
                    <ul>
                        <li>
                            <Link to="/Dashboard" onClick={handleClose}>
                                {LABELS.DASHBOARD}
                            </Link>
                        </li>
                        <li>
                            <Link to="/Productos" onClick={handleClose}>
                                {LABELS.PRODUCTOS}
                            </Link>
                        </li>
                        <li>
                            <Link to="/Stock" onClick={handleClose}>
                                {LABELS.STOCK}
                            </Link>
                        </li>
                        <li>
                            <Link to="/Proveedores" onClick={handleClose}>
                                {LABELS.PROVEEDORES}
                            </Link>
                        </li>
                        <li>
                            <Link to="/Soporte" onClick={handleClose}>
                                {LABELS.SOPORTE}
                            </Link>
                        </li>
                    </ul>
                   </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>



            <div className="logo">
        <a href={"/Dashboard"}><img src="/img/logo.png" alt="Logo" /></a>
        <h2>{TITULOS.NOMBRE_EMPRESA}</h2>
      </div>

      {/* Menu NORMAL */}
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

      <div className="d-none d-sm-flex">
      <Stack direction="row" spacing={1} >
          <Avatar sx={{ bgcolor: deepPurple[500] }}>{user.nombre.charAt(0)+user.nombre.charAt(1).toUpperCase()}</Avatar>
      </Stack>
      </div>

      <div className="dropdown-custom">
          <DropdownButton  id="dropdown-basic-button" title={"Hola, " + user.nombre}>
            <Dropdown.Item href="/Usuario">{user.nombre}</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
          </DropdownButton>
      </div>
    </nav>
  );
};

export default Navbar;
