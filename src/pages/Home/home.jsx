import React from "react";
import Header from "../../component/Header/header.jsx";
import SceneHome from "../../assets/paysageHome.png";
import '../../style/sass/pages/index.scss';

function Home() {
  return (
    <div>
      <Header />
      <div className="poster">
        <img src= {SceneHome} alt="Paysage de présentation" className="poster__image" />
        <div className="poster__text">Chez vous, partout et ailleurs</div>
        </div>
      {}
    </div>
  );
}

export default Home;
