import React from "react";
import "../styles/Header.css";
import SchoolLogo from "../assets/school_logo.webp"

const Header = () => {
  const schoolName = "HAZI AHAMMAD ALI HIGH SCHOOL";
  return (
    <div className="container">
      <header>
        <div className="logo">
          <img src={SchoolLogo} alt="school_logo" className="logo_img" title={schoolName}/>
        </div>
        <nav>
          <a href="#">School Timings</a>
          <a href="#">Headmaster</a>
          <a href="#">Teachers</a>
          <a href="#">Contact</a>
        </nav>
      </header>
    </div>
  );
};

export default Header;
