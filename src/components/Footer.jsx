import { useState } from "react";
import "../styles/Footer.css";
import SchoolLogo from "../assets/school_logo.webp";
import SectionBlurBackdrop from "./SectionBlurBackdrop.jsx";

const Footer = () => {
  const [newsletter, setNewsletter] = useState("");
  const [newsletterMessage, setNewsletterMessage] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletter) return;
    setNewsletterMessage("✓ Subscribed! You will receive official school updates.");
    setNewsletter("");

    setTimeout(() => {
      setNewsletterMessage("");
    }, 6000);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" aria-label="School Footer">
      <SectionBlurBackdrop variant="reverse" />
      <div className="site-container">
        {/* Main Footer Grid */}
        <div className="footer-main-grid">
          {/* Column 1: School Identity & Philosophy */}
          <div className="footer-col col-identity">
            <div className="footer-brand-wrap">
              <img
                src={SchoolLogo}
                alt="Hazi Ahammad Ali High School Logo"
                className="footer-logo-img"
              />
              <div>
                <h3 className="footer-school-title">HAZI AHAMMAD ALI</h3>
                <span className="footer-school-tag">HIGH SCHOOL • RUPGANJ</span>
              </div>
            </div>

            <p className="footer-about-text">
              Committed to imparting value-based secondary education, nurturing
              analytical thinking, and preparing young minds for higher academia
              and lifelong civic contribution.
            </p>

            <div className="footer-social-cluster" aria-label="Social Media Links">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                title="Follow on Facebook"
                aria-label="Facebook"
              >
                <i className="ri-facebook-fill" />
              </a>
              <a
                href="#"
                className="social-icon-btn"
                title="Follow on Twitter / X"
                aria-label="Twitter / X"
              >
                <i className="ri-twitter-x-line" />
              </a>
              <a
                href="#"
                className="social-icon-btn"
                title="Follow on Instagram"
                aria-label="Instagram"
              >
                <i className="ri-instagram-line" />
              </a>
              <a
                href="#"
                className="social-icon-btn"
                title="Subscribe on YouTube"
                aria-label="YouTube"
              >
                <i className="ri-youtube-fill" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col col-nav">
            <h4 className="footer-col-heading">Navigation</h4>
            <ul className="footer-links-list">
              <li>
                <a href="/#hero" className="footer-link">
                  <i className="ri-arrow-right-s-line" aria-hidden="true" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="/#schoolTimings" className="footer-link">
                  <i className="ri-arrow-right-s-line" aria-hidden="true" />
                  <span>School Timings</span>
                </a>
              </li>
              <li>
                <a href="/#headmaster" className="footer-link">
                  <i className="ri-arrow-right-s-line" aria-hidden="true" />
                  <span>Headmaster's Desk</span>
                </a>
              </li>
              <li>
                <a href="/#teachers" className="footer-link">
                  <i className="ri-arrow-right-s-line" aria-hidden="true" />
                  <span>Distinguished Faculty</span>
                </a>
              </li>
              <li>
                <a href="/#achievers" className="footer-link">
                  <i className="ri-arrow-right-s-line" aria-hidden="true" />
                  <span>SSC Achievers</span>
                </a>
              </li>
              <li>
                <a href="/#contact" className="footer-link">
                  <i className="ri-arrow-right-s-line" aria-hidden="true" />
                  <span>Contact Office</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="footer-col col-contact">
            <h4 className="footer-col-heading">Campus Information</h4>
            <ul className="footer-contact-items">
              <li>
                <i className="ri-map-pin-line contact-ico" aria-hidden="true" />
                <span>Birabo, Rupganj, Narayanganj, Bangladesh</span>
              </li>
              <li>
                <i className="ri-phone-line contact-ico" aria-hidden="true" />
                <a href="tel:01731512283" className="contact-link">
                  01731-512283
                </a>
              </li>
              <li>
                <i className="ri-mail-line contact-ico" aria-hidden="true" />
                <a href="mailto:haziaalihs@gmail.com" className="contact-link">
                  haziaalihs@gmail.com
                </a>
              </li>
              <li>
                <i className="ri-time-line contact-ico" aria-hidden="true" />
                <span>Mon – Fri: 8:00 AM – 5:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="footer-col col-newsletter">
            <h4 className="footer-col-heading">Notice Bulletin</h4>
            <p className="newsletter-guide">
              Subscribe to receive circulars, examination schedules, and official notices directly.
            </p>
            <form className="footer-newsletter-form" onSubmit={handleNewsletterSubmit}>
              <div className="newsletter-input-wrap">
                <input
                  type="email"
                  placeholder="Enter email address"
                  value={newsletter}
                  onChange={(e) => setNewsletter(e.target.value)}
                  required
                  aria-label="Email for school notices"
                  className="newsletter-field"
                />
                <button
                  type="submit"
                  className="newsletter-submit-btn"
                  title="Subscribe to updates"
                  aria-label="Submit subscription"
                >
                  <i className="ri-arrow-right-line" />
                </button>
              </div>
            </form>
            {newsletterMessage && (
              <p className="newsletter-feedback-msg" role="status">
                {newsletterMessage}
              </p>
            )}
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            &copy; {currentYear}{" "}
            <a
              href="https://taofiq.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="dev-link"
            >
              TOAIFQ
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
