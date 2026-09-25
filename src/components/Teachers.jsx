import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Teachers.css";
import { teachersData } from "../data/teachers.js";
import SectionHeader from "./SectionHeader.jsx";
import Reveal from "./Reveal.jsx";
import SectionBlurBackdrop from "./SectionBlurBackdrop.jsx";

const Teachers = () => {
  const [filter, setFilter] = useState("all");

  const filteredTeachers = teachersData.filter((t) => {
    if (filter === "all") return true;
    if (filter === "senior") return parseInt(t.experience) >= 10;
    if (filter === "science") return t.subject.toLowerCase().includes("science") || t.subject.toLowerCase().includes("math");
    if (filter === "languages") return t.subject.toLowerCase().includes("english") || t.subject.toLowerCase().includes("bangla");
    return true;
  });

  return (
    <section className="section-wrapper teachers-section" id="teachers" aria-label="Faculty and Teachers">
      <SectionBlurBackdrop variant="center" />
      <div className="site-container">
        <Reveal>
          <SectionHeader
            badge="Academic Faculty"
            title="Our Distinguished Teachers"
            subtitle="Meet our committed educators and subject experts inspiring academic rigor and character building every day."
          />
        </Reveal>

        {/* Filter Tabs */}
        <Reveal delay={100}>
          <div className="faculty-filter-bar">
            <button
              type="button"
              className={`faculty-tab ${filter === "all" ? "is-active" : ""}`}
              onClick={() => setFilter("all")}
            >
              All Faculty ({teachersData.length})
            </button>
            <button
              type="button"
              className={`faculty-tab ${filter === "senior" ? "is-active" : ""}`}
              onClick={() => setFilter("senior")}
            >
              Senior Faculty (10+ Yrs)
            </button>
            <button
              type="button"
              className={`faculty-tab ${filter === "science" ? "is-active" : ""}`}
              onClick={() => setFilter("science")}
            >
              Science & Math
            </button>
            <button
              type="button"
              className={`faculty-tab ${filter === "languages" ? "is-active" : ""}`}
              onClick={() => setFilter("languages")}
            >
              Language & Humanities
            </button>
          </div>
        </Reveal>

        {/* Faculty Cards Grid */}
        <div className="faculty-grid">
          {filteredTeachers.map((teacher, index) => (
            <Reveal key={teacher.username} delay={(index % 4) * 80}>
              <article className="teacher-modern-card">
                <div className="card-top-decor" aria-hidden="true" />
                
                <Link
                  to={`/${teacher.username}`}
                  className="teacher-avatar-link"
                  aria-label={`View profile of ${teacher.name}`}
                >
                  <div className="teacher-avatar-wrap">
                    <img
                      src={teacher.pfp}
                      alt={teacher.name}
                      className="teacher-avatar-img"
                      loading="lazy"
                    />
                    <div className="avatar-hover-lens" aria-hidden="true">
                      <i className="ri-search-eye-line" />
                    </div>
                  </div>
                </Link>

                <div className="teacher-card-content">
                  <div className="teacher-meta-pill">
                    <span className="experience-badge">
                      <i className="ri-history-line" aria-hidden="true" />
                      {teacher.experience} {parseInt(teacher.experience) === 1 ? "Year" : "Years"} Exp.
                    </span>
                  </div>

                  <h3 className="teacher-card-name">
                    <Link to={`/${teacher.username}`}>{teacher.name}</Link>
                  </h3>

                  <p className="teacher-card-role">{teacher.role}</p>

                  <div className="teacher-subjects-box">
                    <span className="subject-icon">
                      <i className="ri-book-open-line" aria-hidden="true" />
                    </span>
                    <span className="subject-text" title={teacher.subject}>
                      {teacher.subject}
                    </span>
                  </div>

                  <p className="teacher-card-summary">
                    {teacher.description.slice(0, 110)}...
                  </p>

                  <div className="teacher-card-footer">
                    <Link
                      to={`/${teacher.username}`}
                      className="teacher-view-btn"
                    >
                      <span>View Profile</span>
                      <i className="ri-arrow-right-line" aria-hidden="true" />
                    </Link>

                    {teacher.facebook && (
                      <a
                        href={teacher.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="teacher-social-icon"
                        title={`${teacher.name} on Facebook`}
                        aria-label={`${teacher.name} on Facebook`}
                      >
                        <i className="ri-facebook-fill" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;