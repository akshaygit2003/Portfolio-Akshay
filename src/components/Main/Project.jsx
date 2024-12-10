import React from "react";
import "../../pages/Project/ProjectPage.css";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

/* Swiper */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

/* Img */
const projectImg = require.context("../../img", true);

const Project = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="heading">
        <FormattedMessage id="projects" defaultMessage="Projects" />
      </h2>
      <div
        className="project-site"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <Swiper
          spaceBetween={30}
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="projects-slider mySwiper"
        >
          <SwiperSlide className="caja">
            <img src={projectImg(`./Cars.jpg`)} alt="projects" />
            <div className="content">
              <h3>Classic Cars</h3>
              <p>A Car Showroom Website</p>
              <p className="technologies">
                HTML5
                <span> -</span> CSS
                <span> -</span> JavaScript
              </p>
              <a
                href="https://classic-cars-love.netlify.app/"
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Demo</span>
              </a>
              <a
                href="https://github.com/akshaygit2003/Classic-Cars"
                className="custom-btn btn-code"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="caja">
            <img src={projectImg(`./business.png`)} alt="projects" />
            <div className="content">
              <h3>Business Website </h3>
              <p>Landing Page </p>
              <p className="technologies">
                HTML5
                <span> -</span> CSS
                <span> -</span> JavaScript
              </p>
              <a
                href="https://akshaygit2003.github.io/Business-Website/"
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Demo</span>
              </a>
              <a
                href="https://github.com/akshaygit2003/Business-Website"
                className="custom-btn btn-code"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="caja">
            <img src={projectImg(`./Food Website.jpg`)} alt="projects" />
            <div className="content">
              <h3>Food Website </h3>
              <p>Food Menu Landing Page</p>
              <p className="technologies">
                HTML5
                <span> -</span> CSS
                <span> -</span> JavaScript
              </p>
              <a
                href="https://akshaygit2003.github.io/Food-Website/"
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Demo</span>
              </a>
              <a
                href="https://github.com/akshaygit2003/Food-Website"
                className="custom-btn btn-code"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="caja">
            <img src={projectImg(`./PasswordGenerator.jpg`)} alt="projects" />
            <div className="content">
              <h3>Password Generator</h3>
              <p>Password Generator Tool</p>
              <p className="technologies">
                HTML5
                <span> -</span> CSS
                <span> -</span> JavaScript
              </p>
              <a
                href="https://akshaygit2003.github.io/Password-Generator/"
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Demo</span>
              </a>
              <a
                href="https://github.com/akshaygit2003/Password-Generator"
                className="custom-btn btn-code"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="caja">
            <img src={projectImg(`./Paypal.jpg`)} alt="projects" />
            <div className="content">
              <h3>Papal Clone Website</h3>
              <p>Clone of Paypal </p>
              <p className="technologies">
                HTML5
                <span> -</span> CSS
                <span> -</span> JavaScript
              </p>
              <a
                href="https://akshaygit2003.github.io/Paypal-clone/"
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Demo</span>
              </a>
              <a
                href="https://github.com/akshaygit2003/Paypal-clone"
                className="custom-btn btn-code"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="caja">
            <img
              src={projectImg(`./Task Management Dashboard.jpg`)}
              alt="projects"
            />
            <div className="content">
              <h3>Task Manager</h3>
              <p>React Based Task Manager </p>
              <p className="technologies">
                React-Js
                <span> -</span> Redux
                <span> -</span> Framer Motion
                <span> -</span> Tailwind CSS
              </p>
              <a
                href="https://brandkiln.netlify.app/"
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Demo</span>
              </a>
              <a
                href="https://github.com/akshaygit2003/React-Dashboard"
                className="custom-btn btn-code"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="caja">
            <img src={projectImg(`./Text Wizards.jpg`)} alt="projects" />
            <div className="content">
              <h3>Text Utility Tool</h3>
              <p>React Based Text Analyser</p>
              <p className="technologies">
                React-Js
                <span> -</span> Tailwind CSS
                <span> -</span> Bootstrap
              </p>
              <a
                href="https://text-wizards.netlify.app/"
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Demo</span>
              </a>
              <a
                href="https://github.com/akshaygit2003/Text-Wizard"
                className="custom-btn btn-code"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>
      {/* <Link className="custom-btn btn-code portafolio-btn" to="/project">
                <FormattedMessage
                    id='btn-more-projects'
                    defaultMessage='More projects'
                />
            </Link> */}
      {/* <div className="portafolio-btn">
        <Link to="/project">
          <ButtomGet />
        </Link>
      </div> */}
    </section>
  );
};
export default React.memo(Project);
