import React, { useState } from "react";
import ArrowLeft from "../../assets/arrow_left.svg";
import ArrowRight from "../../assets/arrow_right.svg";
import "../../style/sass/component/caroussel.scss";

const CustomCarousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (slides.length === 1) {
    return (
      <div className="carousel">
        <div className="carousel__slide">
          <img src={slides[0]} alt="Slide unique" />
        </div>
      </div>
    );
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel">
      <button onClick={goToPrevious} className="carousel__button--left">
        <img src={ArrowLeft} className="arrowLeft" alt="Précédent" />
      </button>
      <div className="carousel__slide">
        <img src={slides[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <button onClick={goToNext} className="carousel__button--right">
        <img src={ArrowRight} className="arrowRight" alt="Suivant" />
      </button>
      <div className="carousel__counter">
        {currentIndex + 1} / {slides.length}
      </div>
    </div>
  );
};

export default CustomCarousel;
