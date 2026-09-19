import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="contactContainer" id="contact">
        <h1 className="sectionHeader">Get In Touch</h1>
        <div className="underline"></div>

        <div className="contact">
          <div className="left">
            <div className="leftWrapper">
              <div className="textInfos">
                <div className="icon">
                  <i class="ri-school-line"></i>
                </div>
                <div className="textInfo">
                  <p>Address</p>
                  <p>Birabo, Rupganj, Narayanganj</p>
                </div>
              </div>

              <div className="textInfos">
                <div className="icon">
                  <i class="ri-phone-line"></i>
                </div>
                <div className="textInfo">
                  <p>Phone</p>
                  <p>01731-512283</p>
                </div>
              </div>

              <div className="textInfos">
                <div className="icon">
                  <i class="ri-mail-line"></i>
                </div>
                <div className="textInfo">
                  <p>Email</p>
                  <p>haziaalihs@gmail.com</p>
                </div>
              </div>

              <div className="textInfos">
                <div className="icon">
                  <i class="ri-time-line"></i>
                </div>
                <div className="textInfo">
                  <p>Hours</p>
                  <p>Mon - Fri: 8:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
            <div className="location">
              <iframe
                src="https://www.google.com/maps?q=Hazi+Ahammad+Ali+High+School&output=embed"
                width="400px"
                height="400px"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="right">
            <label htmlFor="name">Name</label>
            <input required type="text" id="name" />

            <label htmlFor="Email">Email</label>
            <input required type="text" id="Email" />

            <label htmlFor="Subject">Subject</label>
            <input required type="text" id="Subject" />

            <label htmlFor="Message">Message</label>
            <textarea required name="Message" id="Message"></textarea>
            <button type="submit">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
