import React from "react";
import "../../pages/Contact/ContactPage.css";
/* TypedJs */
import Typical from "react-typical";

import { FormattedMessage } from "react-intl";

const Contact = () => (
  <section className="contact" id="contact">
    <h2 className="heading">
      <FormattedMessage id="contact" defaultMessage="Contact" />
    </h2>
    <h3 className="title" data-aos="fade-left" data-aos-delay="300">
      <FormattedMessage id="contact-info" defaultMessage="Contact me by: " />
      <Typical
        className="contact-site"
        loop={Infinity}
        wrapper="b"
        steps={[
          "Gmail",
          2000,
          "LinkedIn",
          2000,
          "Instagram",
          2000,
          "GitHub",
          2000,
          "Telegram",
          2000,
        ]}
      />
    </h3>

    <div className="icons">
      <a
        href="mailto:akshaynema2003@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="zoom-in"
      >
        <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fab fas fa-envelope"></span>
        </div>
        <div className="text">Gmail</div>
      </a>
      <a
        href="https://www.linkedin.com/in/akshaynema"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="zoom-in"
      >
        <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fab fa-linkedin-in"></span>
        </div>
        <div className="text">LinkedIn</div>
      </a>
      <a
        href="https://www.instagram.com/_akshay.45_?igsh=MXB2cGhwdXQ4cTdrYQ=="
        target="_blank"
        rel="noopener noreferrer"
        data-aos="zoom-in"
      >
        <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fab fa-instagram"></span>
        </div>
        <div className="text">Instagram</div>
      </a>

      <a
        href="https://github.com/akshaygit2003"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="zoom-in"
      >
        <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fab fa-github-square"></span>
        </div>
        <div className="text">GitHub</div>
      </a>
      <a
        href="https://t.me/AkshayNema"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="zoom-in"
      >
        <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fab fa-telegram"></span>
        </div>
        <div className="text">Telegram</div>
      </a>
    </div>
  </section>
);

export default React.memo(Contact);
