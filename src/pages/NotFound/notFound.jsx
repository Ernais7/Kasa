import React from "react";
import { Link } from 'react-router-dom';
import Header from "../../component/Header/header.jsx";
import "../../style/sass/pages/notFound.scss";
import Footer from "../../component/Footer/footer.jsx";

function NotFound() {
  return (
    <>
      <Header />
      <div className='error__container'>
            <h1 className='error__container--title'>404</h1>
            <p className='error__container--text'>Oups! La page que <span className="error__container--text-break">vous demandez n'existe pas.</span></p>
            <Link to="/" className='error__container--link'>Retourner sur la page d'accueil</Link>
        </div>
      <Footer />
    </>
  );
}

export default NotFound;