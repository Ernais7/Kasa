import React from "react";
import Header from "../../component/Header/header.jsx";
import SceneAbout from "../../assets/paysageAbout.png";
import Poster from "../../component/Poster/poster.jsx";
import Bar from "../../component/Bar/bar.jsx";
import AboutData from "../../data/aboutData.json";
import Footer from "../../component/Footer/footer.jsx";

function About() {
  return (
    <div>
      <Header />
      <Poster showText={""} image={SceneAbout} />
      <div className="bar">
        {AboutData.map((data) => (
          <div className="bar__card" key={data.title}>
            <Bar data={data} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default About;
