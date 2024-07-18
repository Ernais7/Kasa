import React from "react";
import Header from "../../component/Header/header.jsx";
import SceneHome from "../../assets/paysageHome.png";
import "../../style/sass/pages/index.scss";
import HousingData from "../../data/housingData.json";
import HousingCard from "../../component/housingCard.jsx"
import Footer from "../../component/Footer/footer.jsx";

function Home() {
  return (
    <div>
      <Header />
      <div className="poster">
        <img src={SceneHome} alt="Paysage de présentation" className="poster__image" />
        <div className="poster__text">Chez vous, partout et ailleurs</div>
      </div>
      <div className="housing">
        {HousingData.map(housing => (
          <div className="housing__card" key={housing.id}>
            <HousingCard housing={housing} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;





