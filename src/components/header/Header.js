import React from "react";
import { NavLink } from "react-router-dom";
import "./header.styles.scss";

const Header = () => {
  return (
    <header id="header">
      <div>
        <img className="logo" src="img/bitcoin-logo.png" alt="bitcoin" />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Bitcoin</NavLink>
          </li>
          <li>
            <NavLink to="/cash">Currency</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
