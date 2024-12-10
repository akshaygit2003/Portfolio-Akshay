import React from "react";
import "./Header.css";
/* ReactScroll */
import { Link } from "react-scroll";

/* React router */
import { NavLink } from "react-router-dom";

/* DarkMode */
import DarkMode from "../DarkMode/DarkMode";

/* Language */
import { FormattedMessage } from "react-intl";

const Header = () => {
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
        <Link to="home" spy={true} offset={-150} href="#home">
          <FormattedMessage id="home" defaultMessage="Home" />
        </Link>
        <Link to="about-me" spy={true} offset={-150} href="#about-me">
          <FormattedMessage id="about" defaultMessage="About me" />
        </Link>
        <Link to="service" spy={true} offset={-150} href="#service">
          <FormattedMessage id="services" defaultMessage="Services" />
        </Link>
        <Link to="projects" spy={true} offset={-150} href="#projects">
          <FormattedMessage id="project" defaultMessage="Projects" />
        </Link>
        <Link to="contact" spy={true} offset={-150} href="#contact">
          <FormattedMessage id="contact" defaultMessage="Contact" />
        </Link>
      </nav>
      <div className="switch" id="switch">
        <DarkMode />
      </div>
    </header>
  );
};

export default React.memo(Header);
