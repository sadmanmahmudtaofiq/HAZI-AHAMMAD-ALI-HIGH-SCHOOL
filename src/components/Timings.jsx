import React from "react";
import "../styles/Timings.css"

const Timings = () => {
  const schoolTimings = [
    { title: "School Opens", time: "8:30 AM" },
    { title: "Assembly", time: "10:00 AM" },
    { title: "Morning Classes", time: "10:30 AM - 01:45 PM" },
    { title: "Lunch Break", time: "01:45 PM - 02:20 PM" },
    { title: "Afternoon Classes", time: "02:30 PM - 3:30 PM" },
    { title: "School Closes", time: "04:15 PM" },
  ];

  return (
    <div className="timingsContainer">
      <div className="timingsHeader">
        <h1 className="sectionHeader">School Timings</h1>
        <div className="underline"></div>
        <div className="cards">
          {schoolTimings.map((card, i) => {
            return (
              <div className="card" key={i}>
                <h1>{card.title}</h1>
                <p>{card.time}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Timings;
