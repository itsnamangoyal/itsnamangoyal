import React from "react";

import "./Header.scss";

const Header = () => {
  return (
    <nav className="navbar">
      <span className="navbar-logo">Naman Goyal</span>
      <ul className="navbar-nav">
        <li className="nav-item">about</li>
        <li className="nav-item">skills</li>
        <li className="nav-item">projects</li>
        <li className="nav-item">experience</li>
        <li className="nav-item">contact</li>
      </ul>
      <div className="menu-icon">
        <hr />
        <hr />
        <hr />
      </div>
    </nav>
  );
};

export default Header;
