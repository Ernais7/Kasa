import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/sass/component/header.scss';
import logo from '../../assets/logoKasa.png';

function Header() {
    return (
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
        <nav>
          <ul className="nav-list">
            <li className="nav-item"><Link to="/">Accueil</Link></li>
            <li className="nav-item"><Link to="/about">A Propos</Link></li>
          </ul>
        </nav>
      </header>
    );
  }

export default Header;
