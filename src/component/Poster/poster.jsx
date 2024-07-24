import React from "react";

function Poster({ showText, image }) {
  return (
    <div className="poster">
      <img src={image} alt="Paysage de présentation" className="poster__image" />
      {showText && <div className="poster__text">Chez vous, partout et ailleurs</div>}
    </div>
  );
}

export default Poster;
