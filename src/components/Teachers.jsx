import React from "react";
import "../styles/Teachers.css";
import ferdous from "../assets/ferdous.jpg";
import anik from "../assets/anik.jpg";
import ifti from "../assets/ifti.jpg";
import shofiqul from "../assets/shofiqul.jpg";
import unknown from "../assets/unknown.jpg";
import headmaster from "../assets/headmaster.jpg";
import sumaiya from "../assets/sumaiya.jpg";

const Teachers = () => {
  const teachers = [
    {
      name: "Md Ferdous Hasan Emon",
      subject: "Math, English 1st, History",
      experience: "4",
      pfp: ferdous,
    },
    {
      name: "Anik Sarkar",
      subject: "Science",
      experience: "4",
      pfp: anik,
    },
    {
      name: "Mahmudul Hassan Ifti",
      subject: "English 1st & 2nd, ITC",
      experience: "10",
      pfp: ifti,
    },
    {
      name: "M. Shofiqul Islam",
      subject: "Islam, Agriculture",
      experience: "20",
      pfp: shofiqul,
    },
    {
      name: "Tuli Islam",
      subject: "Bangla 2nd, Civic",
      experience: "1",
      pfp: unknown,
    },
    {
      name: "Choiti Akter",
      subject: "Bangla 2nd",
      experience: "1",
      pfp: unknown,
    },
    {
      name: "Chompa Akter",
      subject: "English 1st, Bangla 1st",
      experience: "1",
      pfp: unknown,
    },
    {
      name: "Sumaiya Hock",
      subject: "Bangla 1st",
      experience: "3",
      pfp: sumaiya,
    },
    {
      name: "Joy Islam",
      subject: "Math",
      experience: "20",
      pfp: headmaster,
    },
  ];
  return (
    <div className="teachers">
      <div className="teachersContainer">
        <h1 className="sectionHeader">Our Teachers</h1>
        <div className="underline"></div>

        <div className="teacherSection">
          {teachers.length > 0
            ? teachers.map((teachers, i) => {
                return (
                  <section>
                    <a href="#">
                      <img
                        src={teachers.pfp}
                        alt="profile_pic"
                        loading="lazy"
                      />
                    </a>
                    <a href="#">
                      <p className="name">{teachers.name}</p>
                    </a>
                    <p>{teachers.subject}</p>
                    <p>Experience: {teachers.experience} years</p>
                  </section>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default Teachers;
