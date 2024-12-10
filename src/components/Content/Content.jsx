import React from "react";
import "./Content.css";
import ParticleHeaderBg from "../ParticlesBg/ParticlesHeader/ParticleHeaderBg";
import { Typewriter } from "react-simple-typewriter";

/* ReactScroll */
import { Link } from "react-scroll";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

const Content = () => (
  <div className="content">
    <ParticleHeaderBg />
    <section className="home" id="home">
      <div className="title">
        <p data-aos="fade-up" data-aos-delay="600">
          <FormattedMessage id="greeting" defaultMessage="Hello" />
        </p>
        <br />
        <h1 data-aos="fade-up" data-aos-delay="800">
          <FormattedMessage id="name" defaultMessage="I am Akshay Nema" />
        </h1>

        <p data-aos="fade-up" data-aos-delay="1000">
          <span style={{ color: "#fff", fontWeight: "bold" }}>
            <Typewriter
              words={[
                "A Frontend Developer",
                "A MERN Stack Developer",
                "A Problem Solver",
              ]}
              loop={Infinity}
              typeSpeed={50} // Typing speed in ms
              deleteSpeed={50} // Deleting speed in ms
              delaySpeed={1500} // Delay between words in ms
            />
          </span>
        </p>

        <div className="social-media">
          <a
            href="https://www.linkedin.com/in/akshaynema"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1200"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/akshaygit2003"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1400"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.instagram.com/_akshay.45_?igsh=MXB2cGhwdXQ4cTdrYQ=="
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1600"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="mailto:akshaynema2003@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1800"
          >
            <i className="fab fas fa-envelope"></i>
          </a>
        </div>

        <div className="wrapper">
          <a
            className="button"
            href="https://www.linkedin.com/in/akshaynema"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1200"
          >
            <div className="icon">
              <i className="fab fa-linkedin"></i>
            </div>
            <span>Linkedin</span>
          </a>
          <a
            className="button"
            href="https://github.com/akshaygit2003"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1400"
          >
            <div className="icon">
              <i className="fab fa-github"></i>
            </div>
            <span>Github</span>
          </a>
          <a
            className="button"
            href="https://www.instagram.com/_akshay.45_?igsh=MXB2cGhwdXQ4cTdrYQ=="
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1600"
          >
            <div className="icon">
              <i className="fab fa-instagram"></i>
            </div>
            <span>Instagram</span>
          </a>
          <a
            className="button"
            href="mailto:akshaynema2003@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1800"
          >
            <div className="icon">
              <i className="fab fas fa-envelope"></i>
            </div>
            <span>Gmail</span>
          </a>
        </div>

        <Link to="about-me" href="#about-me">
          <div className="scroll-down"></div>
        </Link>
      </div>
    </section>
  </div>
);

export default Content;
