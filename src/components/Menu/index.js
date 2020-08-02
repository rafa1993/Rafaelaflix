import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Logo from '../../assets/img/logo.png';
import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Rafaelaflix Logo" />
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu; // Exportar o menu