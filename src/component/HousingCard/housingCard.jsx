import React from "react";
import { Link } from "react-router-dom";
import "../../style/sass/component/housing.scss";

function HousingCard({ housing }) {
  const { title, cover, id } = housing;

  if (!title || !cover || !id) {
    return null;
  }

  return (
    <Link to={`/housing/${id}`} className="housing__card--link">
      <img src={cover} alt={title} className="housing__card--image" />
      <div className="housing__card--title-content">
        <h3 className="housing__card--title">{title}</h3>
      </div>
    </Link>
  );
};

export default HousingCard;
