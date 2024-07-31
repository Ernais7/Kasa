import React from "react";
import { useParams } from "react-router-dom";
import CustomCarousel from "../../component/Caroussel/caroussel"; // Assurez-vous que le chemin est correct
import Header from "../../component/Header/header.jsx";
import Footer from "../../component/Footer/footer.jsx";
import HousingData from "../../data/housingData.json";

function Housing() {
  const { id } = useParams();
  const lodging = HousingData.find((lodge) => lodge.id === id);

  if (!lodging) {
    return <div>Logement non trouvé</div>;
  }
  return (
    <div>
      <Header />
      <CustomCarousel slides={lodging.pictures} />
      <Footer />
    </div>
  );
}

export default Housing;
