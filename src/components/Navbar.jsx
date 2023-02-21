import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Tooltip from '@mui/material/Tooltip';
import { CgMenuGridO } from "react-icons/cg";
import Icono from '../assets/img/icon.png';
import '../assets/styles/components.css';

export default function Navbar() {
    const { t, i18n } = useTranslation();

    const handleLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
      };

  return (
    <nav>
        <input type="checkbox" id="check" />
        <Tooltip title="Menu">
            <label htmlFor="check" className="checkbtn">
                <CgMenuGridO className="icon-menu" />
            </label>
        </Tooltip>
        <ul>
            <Link to={"/"}>
                <li>{t('home')}</li>
            </Link>
            <Link to={"/about"}>
                <li>{t('about')}</li>
            </Link>
            <Link to={"/portfolio"}>
                <li>{t('services')}</li>
            </Link>
            <Link to={"/contact"}>
                <li>{t('contact')}</li>
            </Link>
            <select
                name="select" 
                className="translator" 
                onChange={handleLanguage} 
                value={i18n.language}
            >
                <option value="en">English</option>
                <option value="es">Español</option>
            </select>
        </ul>
    </nav>
  )
}
