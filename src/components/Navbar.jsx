import React from 'react';
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import { CgMenuGridO } from "react-icons/cg";
import Icono from '../assets/img/icon.png';
import '../assets/styles/components.css';

export default function Navbar() {
  return (
    <nav>
        <input type="checkbox" id="check" />
        <Tooltip title="Menu">
            <label htmlFor="check" className="checkbtn">
                <CgMenuGridO className="icon-menu" />
            </label>
        </Tooltip>
        <Link to={"/"}>
            <img src={Icono} className="logo" alt="" />
        </Link>
        <ul>
            <Link to={"/"}>
                <li>Inicio</li>
            </Link>
            <Link to={"/about"}>
                <li>Acerca</li>
            </Link>
            <Link to={"/portfolio"}>
                <li>Portafolio</li>
            </Link>
            <Link to={"/contact"}>
                <li>Contacto</li>
            </Link>
        </ul>
    </nav>
  )
}
