import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";
import SchoolLogo from "../assets/school_logo.webp";
import { useTheme } from "../context/useTheme.js";

const NAV_ITEMS = [
  { label: "Home", href: "/#hero" },
  { label: "History", href: "/#history" },
  { label: "Timings", href: "/#schoolTimings" },
  { label: "Headmaster", href: "/#headmaster" },
  { label: "Teachers", href: "/#teachers" },
  { label: "Achievers", href: "/#achievers" },
  { label: "Contact", href: "/#contact" },
];

const Header = () => {
  const schoolName = "Hazi Ahammad Ali High School";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  // Close menu on route change during render
  const [prevLocationKey, setPrevLocationKey] = useState(location.key);
  if (prevLocationKey !== location.key) {
    setPrevLocationKey(location.key);
    if (open) {
      setOpen(false);
    }
  }

  // Scroll detection for header opacity and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setScrolled(scrollPos > 30);

      // Scroll spy on homepage
      if (location.pathname === "/") {
        const sections = [
          "hero",
          "history",
          "schoolTimings",
          "headmaster",
          "teachers",
          "achievers",
          "contact",
        ];
        for (const sectionId of sections) {
          const el = document.getElementById(sectionId);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 140 && rect.bottom >= 140) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleLinkClick = () => {
    setOpen(false);
  };

  const isCurrentActive = (href) => {
    if (location.pathname !== "/") return false;
    const targetId = href.replace("/#", "");
    return activeSection === targetId;
  };

  return (
    <>
      <header className={`header-floating-wrap ${scrolled ? "is-scrolled" : ""}`}>
        <div className="header-glass-bar">
          <Link to="/" className="header-brand" aria-label={schoolName}>
            <div className="logo-ring">
              <img
                src={SchoolLogo}
                alt={`${schoolName} Emblem`}
                className="header-logo-img"
              />
            </div>
            <div className="brand-text">
              <span className="brand-title">HAZI AHAMMAD ALI</span>
              <span className="brand-subtitle">HIGH SCHOOL • EST. 2012</span>
            </div>
          </Link>

          <nav className="desktop-nav" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const active = isCurrentActive(item.href);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`nav-link ${active ? "is-active" : ""}`}
                >
                  <span>{item.label}</span>
                  {active && <span className="nav-active-pill" />}
                </a>
              );
            })}
          </nav>

          <div className="header-cta-group">
            <button
              type="button"
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              <i className={isDark ? "ri-sun-line theme-icon-sun" : "ri-moon-line theme-icon-moon"} aria-hidden="true" />
            </button>

            <a href="/#contact" className="header-quick-btn">
              <span>Enroll / Inquire</span>
              <i className="ri-arrow-right-up-line" aria-hidden="true" />
            </a>

            <button
              type="button"
              className="hamburger-btn"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
            >
              <i className={open ? "ri-close-line" : "ri-menu-4-line"} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Backdrop Overlay */}
      <div
        className={`mobile-menu-overlay ${open ? "is-visible" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Glass Navigation Drawer */}
      <div className={`mobile-glass-drawer ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="drawer-header">
          <div className="drawer-brand">
            <img src={SchoolLogo} alt="School Logo" className="drawer-logo" />
            <div>
              <p className="drawer-school-name">Hazi Ahammad Ali</p>
              <p className="drawer-tagline">High School</p>
            </div>
          </div>
          <button
            type="button"
            className="drawer-close-btn"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <i className="ri-close-line" />
          </button>
        </div>

        <nav className="mobile-nav-list">
          {NAV_ITEMS.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              className="mobile-nav-link"
              onClick={handleLinkClick}
              style={{ transitionDelay: `${idx * 40}ms` }}
            >
              <span>{item.label}</span>
              <i className="ri-arrow-right-s-line" aria-hidden="true" />
            </a>
          ))}
        </nav>

        <div className="drawer-footer">
          <button
            type="button"
            className="drawer-theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark/light mode"
          >
            <div className="drawer-theme-left">
              <i className={isDark ? "ri-sun-line theme-icon-sun" : "ri-moon-line theme-icon-moon"} />
              <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
            </div>
            <span className="drawer-theme-badge">{isDark ? "Dark" : "Light"}</span>
          </button>

          <a
            href="/#contact"
            className="btn btn-primary drawer-cta"
            onClick={handleLinkClick}
          >
            <span>Contact Administration</span>
            <i className="ri-mail-send-line" />
          </a>
          <p className="drawer-contact-line">
            <i className="ri-phone-line" /> 01731-512283
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
