import React from "react";
import "../styles/Achievers.css";

const Achievers = () => {
  const achievers = [
    {
      name: "Antora",
      class: "10-A",
      grade: "A+",
      GPA: "5.0",
      pfp: "/src/assets/unknown.jpg",
    },
    {
      name: "Alo",
      class: "10-B",
      grade: "A+",
      GPA: "5.0",
      pfp: "/src/assets/unknown.jpg",
    },
    {
      name: "Emily Carter",
      class: "10-A",
      grade: "A+",
      GPA: "5.0",
      pfp: "/src/assets/unknown.jpg",
    },
    {
      name: "Michael Anderson",
      class: "10-C",
      grade: "A+",
      GPA: "5.0",
      pfp: "/src/assets/unknown.jpg",
    },
    {
      name: "Olivia Martinez",
      class: "10-B",
      grade: "A+",
      GPA: "5.0",
      pfp: "/src/assets/unknown.jpg",
    },
    {
      name: "James Thompson",
      class: "10-C",
      grade: "A+",
      GPA: "5.0",
      pfp: "/src/assets/unknown.jpg",
    },
  ];
  return (
    <div className="achieversContainer">
      <div className="achievers">
        <h1 className="sectionHeader">SSC A+ Achievers</h1>
        <div className="underline"></div>

        <div className="students">
          {achievers.length > 0
            ? achievers.map((achiever, i) => {
                return (
                  <section>
                    <img src={achiever.pfp} alt="profile_pic" loading="lazy" />
                    <p className="name">{achiever.name}</p>
                    <p>Class: {achiever.class}</p>
                    <p>Grade: {achiever.grade}</p>
                    <span>GPA: {achiever.GPA}</span>
                  </section>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default Achievers;
