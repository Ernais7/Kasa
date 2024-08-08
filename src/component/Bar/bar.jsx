import React, { useState } from "react";
import "../../style/sass/component/bar.scss";

function Bar({ data }) {
  const { title, content } = data;
  const [isOpen, setIsOpen] = useState(false);

  if (!title || !content) {
    return null;
  }

  const toggleText = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`bar ${isOpen ? 'open' : ''}`}>
      <div className="bar__content">
        <i 
          className={`fa-solid fa-angle-up ${isOpen ? "rotated" : ""}`} 
          onClick={toggleText}
        ></i>
        <h3 className="bar__content--title">{title}</h3>
      </div>
      <div className="bar__text">
        <h4 className="bar__text--content">{content}</h4>
      </div>
    </div>
  );
}

export default Bar;
