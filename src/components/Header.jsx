import React, { useEffect, useState } from "react";
import "../styles/Header.css";
import SchoolLogo from "../assets/school_logo.webp";

const Header = () => {
  const schoolName = "HAZI AHAMMAD ALI HIGH SCHOOL";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll logic track korar jonno
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Component unmount hole event listener remove korar jonno (Cleanup function)
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Ekhane dependency array khali thakbe, fole listener-ti matro ekbar register hobe

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleLinkClick = () => {
    setOpen(false); // Link click korle sidebar close hoye jabe
  };

  return (
    // 'scrolled' class dynamic vabe add hobe container-e
    <div className={`${scrolled ? "scrolled" : ""} container`}>
      <header>
        <div className="logo">
          <a href="/">
            <img
              src={SchoolLogo}
              alt="school_logo"
              className="logo_img"
              title={schoolName}
            />
          </a>
        </div>
        <nav>
          <a href="/#schoolTimings">School Timings</a>
          <a href="/#headmaster">Headmaster</a>
          <a href="/#teachers">Teachers</a>
          <a href="/#contact">Contact</a>
        </nav>

        <div className="menu" title="Menu" onClick={handleOpen}>
          <button>
            <i className="ri-menu-line"></i>
          </button>
        </div>
      </header>

      {/* Sidebar open thakle dynamic vabe class add hobe (Direct DOM change na kore) */}
      <div className={`sidebar ${open ? "open" : ""}`}>
        <nav>
          <a href="/#schoolTimings" onClick={handleLinkClick}>
            School Timings
          </a>
          <a href="/#headmaster" onClick={handleLinkClick}>
            Headmaster
          </a>
          <a href="/#teachers" onClick={handleLinkClick}>
            Teachers
          </a>
          <a href="/#contact" onClick={handleLinkClick}>
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
