import React from "react";
import "../styles/Headmaster.css";
import HeadmasterImg from "../assets/headmaster.jpg";

const Headmaster = () => {
  const schoolName = "Hazi Aahmmad Ali High School";
  return (
    <div className="headmaster">
      <div className="headmasterContainer">
        <div className="info">
          <a href="#">
            <img
              className="headmasterImg"
              src={HeadmasterImg}
              alt="Headmaster"
              loading="lazy"
            />
          </a>
        </div>
        <div className="subtext">
          <a href="#">
            <h2>Joy Islam</h2>
          </a>
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
