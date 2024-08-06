import React from "react";
import Header from "../../component/Header/header.jsx";
import "../../style/sass/pages/index.scss";
import HousingData from "../../data/housingData.json";
import HousingCard from "../../component/HousingCard/housingCard.jsx";
import Footer from "../../component/Footer/footer.jsx";
import Poster from "../../component/Poster/poster.jsx";
import SceneHome from "../../assets/paysageHome.png";

function Home() {
  return (
    <>
      <Header />
      <main>
        <Poster showText={true} image={SceneHome} />
        <div className="housing">
          {HousingData.map((housing) => (
            <div className="housing__card" key={housing.id}>
              <HousingCard housing={housing} />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
