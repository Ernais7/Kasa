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
          className={`fa-solid fa-angle-down ${isOpen ? "rotated" : ""}`} 
          onClick={toggleText}
        ></i>
        <h3 className="bar__content--title">{title}</h3>
      </div>
      <div className="bar__text">
        <p className="bar__content--text">{content}</p>
      </div>
    </div>
  );
}

export default Bar;