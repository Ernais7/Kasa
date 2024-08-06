import React from "react";
import { useParams, Navigate } from "react-router-dom";
import CustomCarousel from "../../component/Caroussel/caroussel";
import Header from "../../component/Header/header.jsx";
import Footer from "../../component/Footer/footer.jsx";
import HousingData from "../../data/housingData.json";
import "../../style/sass/pages/housing.scss";
import Bar from "../../component/Bar/bar.jsx";
import Notfound from "../NotFound/notFound.jsx";

function Housing() {
  const { id } = useParams();
  const lodging = HousingData.find((lodge) => lodge.id === id);

  if (!lodging) {
    return <Navigate to="*" element={<Notfound />} />;
  }

  // Séparer le nom en mots
  const hostNameParts = lodging.host.name.split(" ");

  return (
    <>
      <Header />
      <main>
        <CustomCarousel slides={lodging.pictures} />
        <div className="lodging">
          <div>
            <div className="lodging__header">
              <h1 className="lodging__title">{lodging.title}</h1>
            </div>
            <p className="lodging__location">{lodging.location}</p>
            <div className="lodging__tags">
              {lodging.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="lodging__content"> 
            <div className="lodging__rating">
              {Array.from({ length: 5 }, (_, index) => (
                <i key={index} className={`fa-star ${index < lodging.rating ? "fas" : "fas gray"}`}></i>
              ))}
            </div>
            <div className="lodging__host">
              <p className="lodging__host--name">
                {hostNameParts.map((part, index) => (
                  <span key={index} className="namePart">
                    {part}
                  </span>
                ))}
              </p>
              <img className="lodging__host--image" src={lodging.host.picture} alt={lodging.host.name} />
            </div>
          </div>
          <div className="lodging__bar">
            <Bar data={{ title: "Description", content: lodging.description }} />
            <Bar
              data={{
                title: "Équipements",
                content: (
                  <ul>
                    {lodging.equipments.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                ),
              }}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Housing;
