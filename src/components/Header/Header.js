import React, { useRef } from "react";

import "./Header.scss";
const Header = () => {
  const scrollHandler = ({ target }) => {
    const targetElement = document.getElementById(target);
    const targetElementHeight = targetElement.offsetTop;
    const currentPageTop = window.pageYOffset;
    const distanceToScroll = targetElementHeight - currentPageTop;
    // console.log(distanceToScroll);
    window.scrollBy({
      top: distanceToScroll,
      behavior: "smooth",
    });
  };

  const menuIcon = useRef();
  const navbar = useRef();
  const iconClicHandler = (e) => {
    const icon = menuIcon.current;
    const iconClasses = icon.classList;
    if (iconClasses.contains("open")) {
      icon.classList.toggle("open", false);
      navbar.current.classList.toggle("open", false);
    } else {
      icon.classList.toggle("open", true);
      navbar.current.classList.toggle("open", true);
    }
  };
  return (
    <nav className="navbar">
      <span className="navbar-logo">Naman Goyal</span>
      <ul className="navbar-nav" ref={navbar}>
        <li
          className="nav-item"
          onClick={() => scrollHandler({ target: "about" })}
        >
          about
        </li>
        <li
          className="nav-item"
          onClick={() => scrollHandler({ target: "skills" })}
        >
          skills
        </li>
        <li
          className="nav-item"
          onClick={() => scrollHandler({ target: "projects" })}
        >
          projects
        </li>
        <li
          className="nav-item"
          onClick={() => scrollHandler({ target: "experience" })}
        >
          experience
        </li>
        <li
          className="nav-item"
          onClick={() => scrollHandler({ target: "contact" })}
        >
          contact
        </li>
      </ul>
      <div className="menu-icon" onClick={iconClicHandler} ref={menuIcon}>
        <hr id="top" />
        <hr id="mid" />
        <hr id="bottom" />
      </div>
    </nav>
  );
};

export default Header;
