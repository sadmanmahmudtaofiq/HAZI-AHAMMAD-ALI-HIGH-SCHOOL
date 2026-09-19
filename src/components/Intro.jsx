import React, { useState, useEffect } from "react";
import "../styles/Intro.css";

// ✅ Import your images properly
import bg1 from "../assets/dc8775ef-566f-4626-a161-b67f23e721d9.png";
import bg2 from "../assets/school_assembly_1672x941.png";
import bg3 from "../assets/498b0c97-74ec-4325-9260-899307a009b3.png";
import bg4 from "../assets/school_event_1672x941.png";

const images = [bg2, bg4, bg3, bg1];

const Intro = () => {
  const [current, setCurrent] = useState(0);
  const schoolName = "HAZI AHAMMAD ALI HIGH SCHOOL";

  // Auto-change image every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container">
      <div className="main">
        {/* Background layers (crossfade) */}
        {images.map((img, i) => (
          <div
            key={i}
            className={`bg-slide ${i === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        {/* Dark overlay so text stays readable */}
        <div className="overlay" />

        {/* Text content */}
        <div className="content">
          <h1>{schoolName}</h1>
          <p>Excellence in Education | Building Future Leaders</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
