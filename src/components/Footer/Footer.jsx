import React from "react";
import "./Footer.css";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

const Footer = () => {
  // year
  let year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="site-footer">
        <div className="copyright">
          <p>
            <FormattedMessage
              id="footer-info"
              defaultMessage="Page created by Akshay Nema"
            />
          </p>
          <p>&copy; {year}. All Rights Reserved.</p>
        </div>
        <div className="social-media">
          <a
            href="https://www.linkedin.com/in/akshaynema"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/akshaygit2003"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.instagram.com/_akshay.45_?igsh=MXB2cGhwdXQ4cTdrYQ=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
