import "../styles/Achievers.css";
import { achieversData } from "../data/achievers.js";
import SectionHeader from "./SectionHeader.jsx";
import Reveal from "./Reveal.jsx";
import SectionBlurBackdrop from "./SectionBlurBackdrop.jsx";

const Achievers = () => {
  return (
    <section className="section-wrapper achievers-section" id="achievers" aria-label="Student Achievers">
      <SectionBlurBackdrop variant="accent-focus" />
      <div className="site-container">
        <Reveal>
          <SectionHeader
            badge="Scholastic Honors"
            title="SSC A+ Achievers"
            subtitle="Celebrating our meritorious students who attained outstanding results through hard work, discipline, and exemplary dedication."
          />
        </Reveal>

        <div className="achievers-grid">
          {achieversData.map((student, idx) => (
            <Reveal key={student.name} delay={(idx % 3) * 90}>
              <div className="achiever-glass-card">
                <div className="achiever-medal-ribbon" aria-hidden="true">
                  <i className="ri-medal-line" />
                </div>

                <div className="achiever-avatar-wrap">
                  <img
                    src={student.pfp}
                    alt={student.name}
                    className="achiever-avatar-img"
                    loading="lazy"
                  />
                  <span className="achiever-rank-dot" aria-hidden="true" />
                </div>

                <div className="achiever-card-body">
                  <h3 className="achiever-name">{student.name}</h3>
                  <p className="achiever-class">{student.class}</p>

                  <div className="achiever-result-pill">
                    <span className="exam-badge">{student.exam}</span>
                    <div className="gpa-score">
                      <span className="grade-val">{student.grade}</span>
                      <span className="gpa-val">GPA {student.gpa}</span>
                    </div>
                  </div>

                  <span className="achiever-distinction">
                    <i className="ri-sparkling-fill" aria-hidden="true" />
                    {student.distinction}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={280}>
          <div className="achievers-stats-strip">
            <div className="achiever-metric">
              <span className="metric-number">100%</span>
              <span className="metric-label">SSC Pass Record</span>
            </div>
            <div className="metric-divider" aria-hidden="true" />
            <div className="achiever-metric">
              <span className="metric-number">A+</span>
              <span className="metric-label">High Grade Distribution</span>
            </div>
            <div className="metric-divider" aria-hidden="true" />
            <div className="achiever-metric">
              <span className="metric-number">Top</span>
              <span className="metric-label">Rankings in Rupganj Upazila</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Achievers;
