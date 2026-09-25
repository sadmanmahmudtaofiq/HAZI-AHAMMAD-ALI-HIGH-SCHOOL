import "../styles/Timings.css";
import { timingsData } from "../data/timings.js";
import SectionHeader from "./SectionHeader.jsx";
import Reveal from "./Reveal.jsx";
import SectionBlurBackdrop from "./SectionBlurBackdrop.jsx";

const Timings = () => {
  return (
    <section className="section-wrapper timings-section" id="schoolTimings" aria-label="School Timings">
      <SectionBlurBackdrop variant="default" />
      <div className="site-container">
        <Reveal>
          <SectionHeader
            badge="Daily Schedule"
            title="School Timings"
            subtitle="Carefully structured daily schedules designed to balance academic focus, physical wellness, and ethical development."
          />
        </Reveal>

        <div className="timings-grid">
          {timingsData.map((item, index) => (
            <Reveal key={item.title} delay={index * 60}>
              <div className="timing-glass-card">
                <div className="card-accent-rail" aria-hidden="true" />
                
                <div className="timing-card-top">
                  <div className="timing-icon-wrap" aria-hidden="true">
                    <i className={item.icon} />
                  </div>
                  <span className="timing-category-pill">{item.category}</span>
                </div>

                <div className="timing-card-body">
                  <h3 className="timing-title">{item.title}</h3>
                  <div className="timing-clock-badge">
                    <i className="ri-time-line" aria-hidden="true" />
                    <span>{item.time}</span>
                  </div>
                  <p className="timing-desc">{item.description}</p>
                </div>

                <div className="card-hover-indicator" aria-hidden="true">
                  <span className="dot" />
                  <span className="line" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <div className="timings-notice-card">
            <i className="ri-information-line notice-icon" aria-hidden="true" />
            <div className="notice-content">
              <strong>Punctuality Note:</strong> Students are required to arrive on campus by 9:45 AM ahead of the morning assembly. Late admissions require administrative authorization.
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Timings;
