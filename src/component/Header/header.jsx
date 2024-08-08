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
            <NavLink to="/" className={({ isActive }) => isActive ? "nav__item--link active" : "nav__item--link"}>
              Accueil
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/about" className={({ isActive }) => isActive ? "nav__item--link active" : "nav__item--link"}>
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
