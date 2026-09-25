import { useState } from "react";
import "../styles/Contact.css";
import SectionHeader from "./SectionHeader.jsx";
import Reveal from "./Reveal.jsx";
import SectionBlurBackdrop from "./SectionBlurBackdrop.jsx";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Honest client-side presentation: Open mailto or show direct contact feedback
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="section-wrapper contact-section" id="contact" aria-label="Contact Information and Inquiry">
      <SectionBlurBackdrop variant="default" />
      <div className="site-container">
        <Reveal>
          <SectionHeader
            badge="Communications Office"
            title="Get In Touch"
            subtitle="Have questions regarding admissions, curriculum, or visiting our campus? Reach out to our administrative team."
          />
        </Reveal>

        <div className="contact-two-col-grid">
          {/* Left Column: Campus Info & Interactive Map */}
          <Reveal delay={100}>
            <div className="contact-info-panel">
              <div className="contact-panel-head">
                <span className="panel-badge">Campus Contacts</span>
                <h3>Direct Inquiries & Location</h3>
                <p>We welcome parents, prospective students, and community members to connect with our administration.</p>
              </div>

              <div className="contact-cards-list">
                <div className="contact-card-item">
                  <div className="contact-icon-bubble">
                    <i className="ri-map-pin-2-line" aria-hidden="true" />
                  </div>
                  <div className="contact-card-meta">
                    <span className="card-meta-label">Campus Address</span>
                    <strong className="card-meta-val">Birabo, Rupganj, Narayanganj</strong>
                  </div>
                </div>

                <div className="contact-card-item">
                  <div className="contact-icon-bubble">
                    <i className="ri-phone-line" aria-hidden="true" />
                  </div>
                  <div className="contact-card-meta">
                    <span className="card-meta-label">Telephone / Hotline</span>
                    <a href="tel:01731512283" className="card-meta-val link-val">
                      01731-512283
                    </a>
                  </div>
                </div>

                <div className="contact-card-item">
                  <div className="contact-icon-bubble">
                    <i className="ri-mail-line" aria-hidden="true" />
                  </div>
                  <div className="contact-card-meta">
                    <span className="card-meta-label">Official Email</span>
                    <a href="mailto:haziaalihs@gmail.com" className="card-meta-val link-val">
                      haziaalihs@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-card-item">
                  <div className="contact-icon-bubble">
                    <i className="ri-time-line" aria-hidden="true" />
                  </div>
                  <div className="contact-card-meta">
                    <span className="card-meta-label">Administrative Hours</span>
                    <strong className="card-meta-val">Mon - Fri: 8:00 AM - 5:00 PM</strong>
                  </div>
                </div>
              </div>

              {/* Map Container */}
              <div className="contact-map-frame">
                <iframe
                  title="Hazi Ahammad Ali High School Campus Map"
                  src="https://www.google.com/maps?q=Hazi+Ahammad+Ali+High+School&output=embed"
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>

          {/* Right Column: Inquiries Form */}
          <Reveal delay={200}>
            <div className="contact-form-panel">
              <div className="form-panel-head">
                <span className="panel-badge">Inquiry Form</span>
                <h3>Send an Academic Inquiry</h3>
                <p>Complete the form below to initiate correspondence with our office.</p>
              </div>

              {submitted ? (
                <div className="form-submission-feedback">
                  <div className="feedback-icon" aria-hidden="true">
                    <i className="ri-checkbox-circle-fill" />
                  </div>
                  <h4>Inquiry Prepared</h4>
                  <p>
                    Thank you, <strong>{formData.name || "Visitor"}</strong>! For direct transmission, you can launch your default email client or reach out directly to our principal desk.
                  </p>
                  <div className="feedback-actions">
                    <a
                      href={`mailto:haziaalihs@gmail.com?subject=${encodeURIComponent(
                        formData.subject || "School Inquiry"
                      )}&body=${encodeURIComponent(
                        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
                      )}`}
                      className="btn btn-primary"
                    >
                      <i className="ri-mail-send-line" />
                      <span>Send via Default Email App</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="btn btn-secondary"
                    >
                      <span>New Message</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form className="modern-inquiry-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Full Name <span className="req">*</span>
                    </label>
                    <div className="input-wrap">
                      <i className="ri-user-line input-icon" aria-hidden="true" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="e.g. Mohammad Rahman"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address <span className="req">*</span>
                    </label>
                    <div className="input-wrap">
                      <i className="ri-mail-line input-icon" aria-hidden="true" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                      Subject <span className="req">*</span>
                    </label>
                    <div className="input-wrap">
                      <i className="ri-bookmark-line input-icon" aria-hidden="true" />
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        placeholder="e.g. Admission Inquiry for Class 9"
                        value={formData.subject}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Message <span className="req">*</span>
                    </label>
                    <div className="input-wrap textarea-wrap">
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows="5"
                        placeholder="Please write your detailed inquiry or question here..."
                        value={formData.message}
                        onChange={handleChange}
                        className="form-textarea"
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary submit-btn">
                    <span>Submit Inquiry</span>
                    <i className="ri-send-plane-fill" aria-hidden="true" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
