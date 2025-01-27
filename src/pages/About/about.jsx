import React from "react";
import Header from "../../component/Header/header.jsx";
import SceneAbout from "../../assets/paysageAbout.png";
import Poster from "../../component/Poster/poster.jsx";
import Bar from "../../component/Bar/bar.jsx";
import AboutData from "../../data/aboutData.json";
import Footer from "../../component/Footer/footer.jsx";

function About() {
  return (
    <>
      <Header />
      <main>
        <Poster showText={""} image={SceneAbout} />
        <div className="allBar">
          {AboutData.map((data) => (
            <div key={data.title}>
              <Bar data={data} />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default About;
