import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/sass/component/header.scss';
import logo from '../../assets/logo.svg';

function Header() {
    return (
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
        <nav>
          <ul className="nav__list">
            <li className="nav__item"><Link className='nav__item--link' to="/">Accueil</Link></li>
            <li className="nav__item"><Link className='nav__item--link' to="/about">A Propos</Link></li>
          </ul>
        </nav>
      </header>
    );
  }

export default Header;
