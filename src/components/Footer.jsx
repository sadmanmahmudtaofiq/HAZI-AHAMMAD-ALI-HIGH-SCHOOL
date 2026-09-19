import React, { useState } from "react";
import "../styles/Footer.css";

function Footer() {
  const [newsletter, setNewsletter] = useState("");
  const [newsletterMessage, setNewsletterMessage] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setNewsletterMessage("✓ Thank you! You have been subscribed.");
    setNewsletter("");

    setTimeout(() => {
      setNewsletterMessage("");
    }, 5000);
  };

  return (
    <footer>
      <div className="footer-content">
        {/* About School Section */}
        <div className="footer-section">
          <h3>About School</h3>
          <p>
            Lincoln High School is committed to providing quality education and
            developing well-rounded individuals who can contribute positively to
            society.
          </p>
          <div className="social-links">
            <a href="#" title="Facebook">
              <i class="ri-facebook-fill"></i>
            </a>
            <a href="#" title="Twitter">
              <i class="ri-twitter-x-line"></i>
            </a>
            <a href="#" title="Instagram">
              <i class="ri-instagram-line"></i>
            </a>
            <a href="#" title="YouTube">
              <i class="ri-youtube-fill"></i>
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#timings">School Timings</a>
            </li>
            <li>
              <a href="#headmaster">Headmaster</a>
            </li>
            <li>
              <a href="#teachers">Teachers</a>
            </li>
            <li>
              <a href="#students">A+ Students</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="footer-section">
          <h3>Contact Info</h3>
          <ul className="contact-list">
            <li>
              <i class="ri-school-line"></i> Birabo, Rupganj, Narayanganj
            </li>
            <li>
              <i class="ri-phone-line"></i> 01731-512283
            </li>
            <li>
              <i class="ri-mail-line"></i> haziaalihs@gmail.com
            </li>
            <li>
              <i class="ri-time-line"></i> Mon - Fri: 8:00 AM - 5:00 PM
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section">
          <h3>Newsletter</h3>
          <p>Subscribe to get updates about school events and announcements.</p>
          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={newsletter}
              onChange={(e) => setNewsletter(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
          {newsletterMessage && (
            <div className="newsletter-message success">
              {newsletterMessage}
            </div>
          )}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          &copy; All rights reserved by{" "}
          <a href="https://taofiq.vercel.app" target="_blank">
            TAOFIQ
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
