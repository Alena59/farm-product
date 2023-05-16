import React from "react";
import Logo from "../../ui/logo/logo";
import "./style.css";

function Footer() {
  return (
    <header className="footer">
      <Logo />
      <span className="footer__text">Создано 2021</span>
    </header>
  );
}

export default Footer;