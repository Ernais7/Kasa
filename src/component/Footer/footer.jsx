import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logoWhite.svg";
import "../../style/sass/component/footer.scss";

function Footer() {
  return (
    <div className="foot">
      <div className="foot__content">
        <img src={logo} alt="Logo du site" className="foot__content--logo" />
        <h4 className="foot__content--title">© 2020 Kasa. All rights reserved</h4>
      </div>
    </div>
  );
}

export default Footer;
