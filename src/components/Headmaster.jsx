import React, { useEffect } from "react";
import "../styles/Headmaster.css";
import HeadmasterImg from "../assets/headmaster.jpg";
import { Link } from "react-router-dom";

const Headmaster = () => {
  const schoolName = "Hazi Aahmmad Ali High School";
  return (
    <div className="headmaster" id="headmaster">
      <div className="headmasterContainer">
        <div className="info">
          <Link to="/headmaster">
            <img
              className="headmasterImg"
              src={HeadmasterImg}
              alt="Headmaster"
              loading="lazy"
            />
          </Link>
        </div>
        <div className="subtext">
          <Link to="/headmaster">
            <h2>Joy Islam</h2>
          </Link>
          <p>
            Welcome to {schoolName}! With over 20 years of experience in
            education, I am committed to fostering an environment where every
            student can excel academically and personally. Our dedicated faculty
            and modern facilities ensure that your child receives the best
            education possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Headmaster;
