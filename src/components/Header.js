import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <header id="header">
      <div>
        <img className="logo" src="img/bitcoin-logo.png" />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeClassName="is-active" exact="true">
              Bitcoin
            </NavLink>
          </li>
          <li>
            <NavLink to="/cash" activeClassName="is-active">
              Currency
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
