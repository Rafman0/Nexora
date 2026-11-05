import React from "react";
import Section from "../common/Section";
import "./About.css";
import aboutImage from "../../assets/images/About-image.jpeg";

const About = () => {
  return (
    <>
      <Section id="about" className="about">
        <div className="container-custom">
          <div className="about-grid">
            <div className="about-image-wrapper scroll-reveal">
              <div className="about-image-container">
                <img
                  src={aboutImage}
                  alt="Nexora - Turning ideas into meaningful digital experiences"
                  className="about-image"
                  loading="lazy"
                />
                <div className="about-image-glow"></div>
              </div>
            </div>

            <div
              className="about-content scroll-reveal"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="section-label">[ABOUT ME]</span>
              <h2 className="about-title">
                Turning ideas into meaningful digital experiences.
              </h2>
              <p className="about-text">
                I'm passionate about technology, creativity and building
                solutions that make a difference. Through software development
                and digital innovation, I transform ideas into functional,
                thoughtful and user-focused experiences.
              </p>
              <p className="about-text">
                Nexora brings these passions together under one vision: building
                digital solutions, capturing moments and connecting people with
                technology.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <section className="founder-section">
        <div className="container-custom">
          <div className="founder-header scroll-reveal">
            <span className="section-label">[FOUNDER]</span>
            <h2 className="founder-main-title">Meet the mind behind Nexora.</h2>
          </div>

          <div className="founder-grid">
            <div className="founder-image-wrapper scroll-reveal">
              <div className="founder-image-container">
                <img
                  src={
                    new URL(
                      "../../assets/images/Founder-image.jpeg",
                      import.meta.url,
                    ).href
                  }
                  alt="Abdulrafiu Mohammed - Founder of Nexora and Software Developer"
                  className="founder-image"
                  loading="lazy"
                />
                <div className="founder-image-frame"></div>
                <div className="founder-image-accent"></div>
              </div>
            </div>

            <div
              className="founder-content scroll-reveal"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="founder-intro">
                <h3 className="founder-name">Abdulrafiu Mohammed</h3>
                <p className="founder-role">
                  Founder of Nexora | Software Developer
                </p>
              </div>

              <div className="founder-bio">
                <p>
                  I'm Abdulrafiu Mohammed, a Software Developer and the founder
                  of Nexora.
                </p>
                <p>
                  My journey in technology has been driven by curiosity,
                  continuous learning and a passion for solving problems through
                  software. I work across frontend and backend development,
                  building web applications and digital systems that combine
                  functionality with thoughtful user experiences.
                </p>
                <p>
                  Beyond software development, I'm also a photographer, which
                  has strengthened my appreciation for creativity, visual
                  storytelling and attention to detail.
                </p>
                <p>
                  I founded Nexora to bring these interests together and create
                  a brand focused on software development, photography and
                  technology solutions.
                </p>
                <p>
                  My philosophy is simple: keep learning, build with purpose and
                  create things that make a difference.
                </p>
              </div>

              <div className="founder-skills">
                <span className="founder-skill-tag">Frontend Development</span>
                <span className="founder-skill-tag">Backend Development</span>
                <span className="founder-skill-tag">Web Applications</span>
                <span className="founder-skill-tag">API Integration</span>
                <span className="founder-skill-tag">Database Design</span>
                <span className="founder-skill-tag">Deployment</span>
                <span className="founder-skill-tag">Photography</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="philosophy-section">
        <div className="container-custom">
          <div className="philosophy-content scroll-reveal">
            <span className="philosophy-label">[PHILOSOPHY]</span>
            <h2 className="philosophy-title">Build. Capture. Connect.</h2>
            <p className="philosophy-text">
              Every idea deserves thoughtful execution. Whether it's developing
              software, capturing a moment or creating a digital experience, I
              believe in combining creativity with purpose to deliver meaningful
              results.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
