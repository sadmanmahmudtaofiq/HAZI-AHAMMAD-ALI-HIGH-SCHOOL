import { Link } from "react-router-dom";
import "../styles/Headmaster.css";
import HeadmasterImg from "../assets/headmaster.jpg";
import SectionHeader from "./SectionHeader.jsx";
import Reveal from "./Reveal.jsx";
import SectionBlurBackdrop from "./SectionBlurBackdrop.jsx";

const Headmaster = () => {
  const schoolName = "Hazi Ahammad Ali High School";

  return (
    <section className="section-wrapper headmaster-section" id="headmaster" aria-label="Headmaster's Message">
      <SectionBlurBackdrop variant="reverse" />
      {/* Decorative ambient backdrop */}
      <div className="headmaster-mesh-bg" aria-hidden="true" />

      <div className="site-container">
        <Reveal>
          <SectionHeader
            badge="Institutional Leadership"
            title="Message from the Headmaster"
            subtitle="Guiding vision, educational philosophy, and commitment to our students' lifelong triumph."
            light={true}
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="headmaster-glass-card">
            {/* Left Column: Portrait with decorative frame */}
            <div className="headmaster-portrait-column">
              <div className="portrait-outer-ring">
                <div className="portrait-inner-frame">
                  <img
                    src={HeadmasterImg}
                    alt="Joy Islam - Headmaster of Hazi Ahammad Ali High School"
                    className="headmaster-photo"
                    loading="lazy"
                  />
                </div>
                <div className="portrait-badge">
                  <i className="ri-award-fill" aria-hidden="true" />
                  <span>20+ Years Exp.</span>
                </div>
              </div>

              <div className="portrait-caption">
                <span className="caption-subject">Mathematics Specialist</span>
                <Link to="/headmaster" className="view-profile-chip">
                  <span>View Full Profile</span>
                  <i className="ri-arrow-right-line" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Right Column: Narrative & Credentials */}
            <div className="headmaster-narrative-column">
              <div className="quote-mark-icon" aria-hidden="true">
                <i className="ri-double-quotes-l" />
              </div>

              <div className="headmaster-header-meta">
                <span className="executive-tag">Office of the Headmaster</span>
                <Link to="/headmaster" className="headmaster-name-link">
                  <h3 className="headmaster-name">Joy Islam</h3>
                </Link>
                <p className="headmaster-role">
                  Headmaster • Hazi Ahammad Ali High School
                </p>
              </div>

              <div className="headmaster-accent-bar" aria-hidden="true" />

              <blockquote className="headmaster-quote">
                Welcome to {schoolName}! With over 20 years of experience in
                education, I am committed to fostering an environment where every
                student can excel academically and personally. Our dedicated faculty
                and modern facilities ensure that your child receives the best
                education possible.
              </blockquote>

              {/* Leadership Highlights */}
              <div className="leadership-pillars">
                <div className="pillar-item">
                  <div className="pillar-icon">
                    <i className="ri-compass-3-line" />
                  </div>
                  <div>
                    <h4>Moral Integrity</h4>
                    <p>Building character alongside scholastic rigor</p>
                  </div>
                </div>

                <div className="pillar-item">
                  <div className="pillar-icon">
                    <i className="ri-microscope-line" />
                  </div>
                  <div>
                    <h4>Modern Pedagogy</h4>
                    <p>Interactive classrooms & practical applications</p>
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="headmaster-action-row">
                <Link to="/headmaster" className="btn btn-accent headmaster-cta">
                  <span>Read Joy Islam's Academic Bio</span>
                  <i className="ri-external-link-line" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Headmaster;
