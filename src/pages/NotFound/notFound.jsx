import React from "react";
import { Link } from 'react-router-dom';
import Header from "../../component/Header/header.jsx";
import "../../style/sass/pages/notFound.scss";
import Footer from "../../component/Footer/footer.jsx";

function NotFound() {
  return (
    <div>
      <Header />
      <div className='error__container'>
            <h1 className='error__container--title'>404</h1>
            <p className='error__container--text'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className='error__container--link'>Retourner sur la page d'accueil</Link>
        </div>
      <Footer />
    </div>
  );
}

export default NotFound;