import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/TeacherDetail.css";
import { teachersData } from "../data/teachers.js";
import SectionBlurBackdrop from "./SectionBlurBackdrop.jsx";

const TeacherDetail = () => {
  const { username } = useParams();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [username]);

  const teacher = teachersData.find((t) => t.username === username);

  if (!teacher) {
    return (
      <main className="teacher-not-found-wrap">
        <div className="site-container">
          <div className="not-found-glass-box">
            <div className="not-found-icon" aria-hidden="true">
              <i className="ri-user-unfollow-line" />
            </div>
            <h2>Faculty Profile Not Found</h2>
            <p>
              We could not find a faculty member corresponding to the identifier "
              <strong>{username}</strong>".
            </p>
            <Link to="/#teachers" className="btn btn-primary">
              <i className="ri-arrow-left-line" aria-hidden="true" />
              <span>Back to Teachers Directory</span>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // Related colleagues (excluding current)
  const colleagues = teachersData
    .filter((t) => t.username !== teacher.username)
    .slice(0, 3);

  return (
    <main className="teacher-profile-page">
      <SectionBlurBackdrop variant="reverse" />
      <div className="site-container">
        {/* Navigation Breadcrumb */}
        <div className="profile-breadcrumbs">
          <Link to="/" className="breadcrumb-link">
            <i className="ri-home-4-line" aria-hidden="true" />
            <span>Home</span>
          </Link>
          <span className="breadcrumb-separator">/</span>
          <Link to="/#teachers" className="breadcrumb-link">
            <span>Faculty</span>
          </Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">{teacher.name}</span>
        </div>

        {/* Main Profile Layout */}
        <div className="profile-layout-grid">
          {/* Left Column: Portrait Card */}
          <aside className="profile-aside-card">
            <div className="profile-photo-container">
              <div className="profile-photo-ring">
                <img
                  src={teacher.pfp}
                  alt={teacher.name}
                  className="profile-photo-main"
                />
              </div>
              <div className="profile-verified-badge" title="Official Faculty Member">
                <i className="ri-checkbox-circle-fill" aria-hidden="true" />
                <span>Verified Faculty</span>
              </div>
            </div>

            <div className="profile-quick-stats">
              <div className="quick-stat-row">
                <span className="stat-label">
                  <i className="ri-award-line" aria-hidden="true" /> Experience
                </span>
                <span className="stat-val">{teacher.experience} Years</span>
              </div>
              <div className="quick-stat-row">
                <span className="stat-label">
                  <i className="ri-building-line" aria-hidden="true" /> Institution
                </span>
                <span className="stat-val">Hazi Ahammad Ali</span>
              </div>
              <div className="quick-stat-row">
                <span className="stat-label">
                  <i className="ri-map-pin-line" aria-hidden="true" /> Campus
                </span>
                <span className="stat-val">Birabo, Rupganj</span>
              </div>
            </div>

            {teacher.facebook && (
              <div className="profile-social-connect">
                <a
                  href={teacher.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-profile-social"
                >
                  <i className="ri-facebook-circle-fill" aria-hidden="true" />
                  <span>Connect on Facebook</span>
                </a>
              </div>
            )}
          </aside>

          {/* Right Column: Detailed Academic Dossier */}
          <div className="profile-main-dossier">
            <div className="dossier-header">
              <div className="dossier-role-tag">
                <span className="role-tag-pill">{teacher.role}</span>
                <span className="tag-school">Hazi Ahammad Ali High School</span>
              </div>

              <h1 className="dossier-teacher-name">{teacher.name}</h1>
              
              <div className="dossier-subject-bar">
                <i className="ri-book-mark-line" aria-hidden="true" />
                <span className="subject-lead">Subjects Taught:</span>
                <strong className="subject-list">{teacher.subject}</strong>
              </div>
            </div>

            <div className="dossier-divider" aria-hidden="true" />

            <div className="dossier-section">
              <h2 className="dossier-section-title">
                <i className="ri-user-voice-line" aria-hidden="true" />
                <span>Academic Overview & Biography</span>
              </h2>
              <div className="dossier-bio-text">
                <p>{teacher.description}</p>
              </div>
            </div>

            <div className="dossier-section">
              <h2 className="dossier-section-title">
                <i className="ri-focus-3-line" aria-hidden="true" />
                <span>Key Teaching Competencies</span>
              </h2>
              <div className="competencies-grid">
                <div className="competency-card">
                  <div className="comp-icon"><i className="ri-draft-line" /></div>
                  <h4>Curriculum Mastery</h4>
                  <p>In-depth coverage of National Curriculum standards and board examinations.</p>
                </div>
                <div className="competency-card">
                  <div className="comp-icon"><i className="ri-user-heart-line" /></div>
                  <h4>Student Mentorship</h4>
                  <p>Personalized academic guidance and character development.</p>
                </div>
                <div className="competency-card">
                  <div className="comp-icon"><i className="ri-presentation-line" /></div>
                  <h4>Conceptual Learning</h4>
                  <p>Encouraging logical thinking, problem-solving, and active classroom participation.</p>
                </div>
              </div>
            </div>

            <div className="dossier-footer-actions">
              <Link to="/#teachers" className="btn btn-secondary">
                <i className="ri-arrow-left-line" aria-hidden="true" />
                <span>Browse All Faculty</span>
              </Link>
              <a href="/#contact" className="btn btn-primary">
                <i className="ri-mail-line" aria-hidden="true" />
                <span>Contact Administration</span>
              </a>
            </div>
          </div>
        </div>

        {/* Other Faculty Highlights */}
        <section className="colleagues-section">
          <div className="colleagues-header">
            <h3>Other Distinguished Faculty</h3>
            <Link to="/#teachers" className="see-all-link">
              <span>View Directory</span>
              <i className="ri-arrow-right-line" aria-hidden="true" />
            </Link>
          </div>

          <div className="colleagues-grid">
            {colleagues.map((colleague) => (
              <Link
                key={colleague.username}
                to={`/${colleague.username}`}
                className="colleague-mini-card"
              >
                <img
                  src={colleague.pfp}
                  alt={colleague.name}
                  className="colleague-mini-thumb"
                  loading="lazy"
                />
                <div className="colleague-mini-meta">
                  <h4>{colleague.name}</h4>
                  <p>{colleague.role}</p>
                  <span>{colleague.subject}</span>
                </div>
                <i className="ri-arrow-right-s-line chevron" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default TeacherDetail;