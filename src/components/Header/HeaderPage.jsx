import React from "react";
import "./Header.css";

/* React router */
import { NavLink } from "react-router-dom";

/* DarkMode */
import DarkMode from "../DarkMode/DarkMode";

/* Language */
import { FormattedMessage } from "react-intl";

const HeaderPage = () => {
  // Menu dropdown
  const menudropdown = () => {
    let navbar = document.querySelector(".navbar");
    navbar.classList.toggle("activate");

    window.onscroll = () => {
      if (window.scrollY > 0) {
        document.querySelector(".site-header").classList.add("activate");
      } else
        document.querySelector(".site-header").classList.remove("activate");

      navbar.classList.remove("activate");
    };
  };

  return (
    <header className="site-header">
      <div id="menu-btn" className="fas fa-bars" onClick={menudropdown}></div>

      <NavLink className="logo" to="/">
        <p>
          (<span>Akshay Nema</span>)
        </p>
      </NavLink>

      <nav className="navbar">
        <NavLink to="/" offset={-150} duration={500}>
          <FormattedMessage id="home" defaultMessage="Home" />
        </NavLink>
        <NavLink to="/about" offset={-150} duration={500}>
          <FormattedMessage id="about" defaultMessage="About me" />
        </NavLink>
        <NavLink to="/service" offset={-150} duration={500}>
          <FormattedMessage id="services" defaultMessage="Services" />
        </NavLink>
        <NavLink to="/project" offset={-150} duration={500}>
          <FormattedMessage id="projects" defaultMessage="Projects" />
        </NavLink>
        <NavLink to="/contact" offset={-150} duration={500}>
          <FormattedMessage id="contact" defaultMessage="Contacts" />
        </NavLink>
      </nav>
      <div className="switch" id="switch">
        <DarkMode />
      </div>
    </header>
  );
};

export default React.memo(HeaderPage);