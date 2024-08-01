import React from "react";
import { NavLink } from "react-router-dom";
import "../../style/sass/component/header.scss";
import logo from "../../assets/logo.svg";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <nav id="sidebar">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink exact to="/" className="nav__item--link" activeClassName="active">
              Accueil
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/about" className="nav__item--link" activeClassName="active">
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
