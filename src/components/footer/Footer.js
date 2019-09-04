import React from "react";
import "./footer.styles.scss";

const Footer = () => {
  return (
    <div id="footer">
      <img src="/img/bitcoin-footer.png" alt="bitcoin" />
      <a
        href="https://bitcoin.org/en/#maindesc-title"
        target="_blank"
        rel="noopener noreferrer"
      >
        Offical Site
      </a>
    </div>
  );
};

export default Footer;
