import React from "react";
import logo from "../../assets/logoWhite.svg";
import "../../style/sass/component/footer.scss";

function Footer() {
  return (
    <footer className="foot">
      <div className="foot__content">
        <img src={logo} alt="Logo du site" className="foot__content--logo" />
        <h4 className="foot__content--title">© 2020 Kasa. All rights reserved</h4>
      </div>
    </footer>
  );
}

export default Footer;
