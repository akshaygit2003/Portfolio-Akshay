import React from "react";
import "./ServicesPage.css";

/* Component */
import HeaderPage from "../../components/Header/HeaderPage";
import Footer from "../../components/Footer/Footer";
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Accordion from "./Accordion";

import { FormattedMessage } from "react-intl";

const Services = () => {
  return (
    <div>
      <HeaderPage />

      <ParticleBackground />

      <main className="service-page">
        <section className="service" id="service">
          <h2 className="heading">
            <FormattedMessage id="services" defaultMessage="Services" />
          </h2>
          <div className="row">
            <div className="columns" data-aos="fade-up" data-aos-delay="200">
              <i className="fas fa-code"></i>
              <h3>
                <FormattedMessage
                  id="DSA"
                  defaultMessage="Data Structures & Algorithms"
                />
              </h3>
              <p>
                <FormattedMessage
                  id="DSA-info"
                  defaultMessage="I specialize in crafting optimized solutions for complex challenges, leveraging my experience with over 400+ DSA questions across multiple platforms."
                />
              </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="300">
              <i className="fas fa-laptop"></i>
              <h3>
                <FormattedMessage
                  id="development"
                  defaultMessage="Web development"
                />
              </h3>
              <p>
                <FormattedMessage
                  id="development-info"
                  defaultMessage="Creation of well-structured web pages, good responsive design, attractive color palette, with interactions that give the user satisfaction when browsing the website."
                />
              </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="400">
              <i className="fas fa-database"></i>
              <h3>
                <FormattedMessage
                  id="marketing"
                  defaultMessage="Backend Development"
                />
              </h3>

              <p>
                <FormattedMessage
                  id="marketing-info"
                  defaultMessage="I develop scalable, secure backends, handling databases and APIs to ensure smooth data flow and reliable performance for web applications."
                />
              </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="500">
              <i className="fas fa-wrench"></i>
              <h3>
                <FormattedMessage
                  id="maintenance"
                  defaultMessage="Social Media Management"
                />
              </h3>
              <p>
                <FormattedMessage
                  id="maintenance-info"
                  defaultMessage="As the Social Media Lead for GDG, I strategize and manage online presence, fostering community growth and enhancing outreach."
                />
              </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="600">
              <i className="fas fa-search"></i>
              <h3>
                <FormattedMessage
                  id="seo"
                  defaultMessage="Clean Code & Collaboration"
                />
              </h3>
              <p>
                <FormattedMessage
                  id="seo-info"
                  defaultMessage="Web positioning through SEO, so your website appears in the main search results according to your business, both in Google, Bing, or other internet search engines"
                />
              </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="700">
              <i className="fas fa-tachometer-alt"></i>
              <h3>
                <FormattedMessage
                  id="optimization"
                  defaultMessage="Website optimization"
                />
              </h3>
              <p>
                <FormattedMessage
                  id="optimization-info"
                  defaultMessage="Complete optimization of your web page, improving loading speed, using optimized images, a good URL, to give a better experience to users who visit the website"
                />
              </p>
            </div>
          </div>
        </section>

        <section className="questions">
          <h2 className="heading">
            <FormattedMessage
              id="services-questions"
              defaultMessage="Frequent questions"
            />
          </h2>
          <div className="accordion-container">
            <Accordion
              title={
                <FormattedMessage
                  id="services-questions-1"
                  defaultMessage="How do I stay up to date with web development trends?"
                />
              }
              content={
                <FormattedMessage
                  id="services-questions-p1"
                  defaultMessage="I constantly expand my knowledge by learning new technologies and frameworks, participating in tech communities like GDG, attending workshops, and following industry blogs and tutorials."
                />
              }
              dataAos="fade-right"
              dataAosDelay="300"
            />

            <Accordion
              title={
                <FormattedMessage
                  id="services-questions-2"
                  defaultMessage="How do I ensure my websites are responsive?"
                />
              }
              content={
                <FormattedMessage
                  id="services-questions-p2"
                  defaultMessage="I use responsive design techniques such as CSS media queries, mobile-first design, and frameworks like Tailwind CSS and Bootstrap to ensure that websites work seamlessly across different devices and screen sizes."
                />
              }
              dataAos="fade-left"
              dataAosDelay="300"
            />

            <Accordion
              title={
                <FormattedMessage
                  id="services-questions-3"
                  defaultMessage="What makes me stand out as a web developer?"
                />
              }
              content={
                <FormattedMessage
                  id="services-questions-p3"
                  defaultMessage="My ability to blend modern front-end technologies with a keen eye for design and user experience. I constantly learn and adapt to new trends, and I am committed to delivering scalable, high-performance solutions tailored to the needs of the user."
                />
              }
              dataAos="fade-right"
              dataAosDelay="300"
            />

            <Accordion
              title={
                <FormattedMessage
                  id="services-questions-4"
                  defaultMessage="How do I approach working with a team on web development projects?"
                />
              }
              content={
                <FormattedMessage
                  id="services-questions-p4"
                  defaultMessage="Collaboration is key to a successful project. I communicate clearly, share ideas, and use tools like Github. Whether working on a small team or a large project, I focus on keeping everything organized and ensuring everyone is aligned on the project goals."
                />
              }
              dataAos="fade-left"
              dataAosDelay="300"
            />
          </div>
        </section>
      </main>

      <ScrollToTop />

      <Footer />
    </div>
  );
};
export default Services;
