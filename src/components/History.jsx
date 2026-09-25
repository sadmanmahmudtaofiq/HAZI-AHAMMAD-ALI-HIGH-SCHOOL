import "../styles/History.css";
import SectionHeader from "./SectionHeader.jsx";
import Reveal from "./Reveal.jsx";
import SectionBlurBackdrop from "./SectionBlurBackdrop.jsx";
import { historyMilestones, historyHighlights } from "../data/history.js";

const History = () => {
  return (
    <section
      className="section-wrapper history-section"
      id="history"
      aria-label="School History and Heritage"
    >
      <SectionBlurBackdrop variant="accent-focus" />

      <div className="site-container">
        <Reveal>
          <SectionHeader
            badge="Heritage & Legacy"
            title="School's History"
            subtitle="A journey of vision, community dedication, and academic empowerment since 2012 in Birabo, Rupganj."
          />
        </Reveal>

        {/* Hero Narrative Overview Glass Card */}
        <Reveal delay={100}>
          <div className="history-overview-card">
            <div className="history-overview-decor" aria-hidden="true" />
            <div className="history-badge-top">
              <i className="ri-history-line" aria-hidden="true" />
              <span>Institutional Evolution • Est. 2012</span>
            </div>

            <h3 className="history-card-heading">
              Rooted in Community, Inspiring Generations
            </h3>

            <p className="history-card-paragraph">
              Hazi Ahammad Ali High School was founded in 2012 with a profound civic
              conviction: that every child in Birabo, Rupganj deserves access to
              first-class secondary education, modern laboratories, and moral mentorship.
              Named in honor of its visionary patron, the school began with humble classrooms
              and a handful of passionate educators. Over the years, that seed has blossomed
              into a premier center of scholastic distinction across Narayanganj.
            </p>

            <div className="history-stat-strip">
              {historyHighlights.map((stat) => (
                <div key={stat.label} className="history-stat-box">
                  <div className="stat-box-icon" aria-hidden="true">
                    <i className={stat.icon} />
                  </div>
                  <div className="stat-box-info">
                    <span className="stat-box-num">{stat.value}</span>
                    <span className="stat-box-txt">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Chronological Milestones Timeline */}
        <div className="history-timeline-wrap">
          <div className="timeline-central-spine" aria-hidden="true" />

          {historyMilestones.map((item, index) => (
            <Reveal key={item.year} delay={index * 90}>
              <div
                className={`timeline-item ${
                  index % 2 === 0 ? "is-left" : "is-right"
                }`}
              >
                <div className="timeline-node-beacon" aria-hidden="true">
                  <span className="node-beacon-ring" />
                  <span className="node-beacon-dot" />
                </div>

                <div className="timeline-glass-card">
                  <div className="timeline-card-header">
                    <span className="timeline-year-pill">{item.year}</span>
                    <span className="timeline-tag">{item.tag}</span>
                  </div>

                  <div className="timeline-card-body">
                    <div className="timeline-title-row">
                      <div className="timeline-icon-bubble" aria-hidden="true">
                        <i className={item.icon} />
                      </div>
                      <h4 className="timeline-title">{item.title}</h4>
                    </div>

                    <p className="timeline-desc">{item.description}</p>

                    <div className="timeline-highlight-pill">
                      <i className="ri-check-double-line" aria-hidden="true" />
                      <span>{item.highlight}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Founding Philosophy Banner */}
        <Reveal delay={250}>
          <div className="history-motto-banner">
            <i className="ri-double-quotes-l motto-quote-ico" aria-hidden="true" />
            <div className="motto-text-wrap">
              <p className="motto-quote">
                “Education is the most potent instrument of character and progress.
                Our legacy is defined by the integrity, intellect, and leadership of every student we nurture.”
              </p>
              <span className="motto-author">
                — Founding Governing Body, Hazi Ahammad Ali High School
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default History;
