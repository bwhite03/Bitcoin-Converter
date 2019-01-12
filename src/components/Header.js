import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav id="navbar">
        <div className="logo">
          <h1>BitCoin</h1>
        </div>
        <ul>
          <li>
            <Link to="/">Bitcoin</Link>
          </li>
          <li>
            <Link to="/cash">Currency</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;