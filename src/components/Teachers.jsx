import React from "react";
import { Link } from "react-router-dom";
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
      username: "ferdous",
      subject: "Math, English 1st, History",
      experience: "4",
      pfp: ferdous,
    },
    {
      name: "Anik Sarkar",
      username: "aniksarkar",
      subject: "Science",
      experience: "4",
      pfp: anik,
    },
    {
      name: "Mahmudul Hassan Ifti",
      username: "ifti",
      subject: "English 1st & 2nd, ITC",
      experience: "10",
      pfp: ifti,
    },
    {
      name: "Joy Islam",
      username: "headmaster",
      subject: "Math",
      experience: "20",
      pfp: headmaster,
    },
    {
      name: "M. Shofiqul Islam",
      username: "shofiqul",
      subject: "Islam, Agriculture",
      experience: "20",
      pfp: shofiqul,
    },
    {
      name: "Tuli Islam",
      username: "tuli",
      subject: "Bangla 2nd, Civic",
      experience: "1",
      pfp: unknown,
    },
    {
      name: "Choiti Akter",
      username: "choitti",
      subject: "Bangla 2nd",
      experience: "1",
      pfp: unknown,
    },
    {
      name: "Chompa Akter",
      username: "chompa",
      subject: "English 1st, Bangla 1st",
      experience: "1",
      pfp: unknown,
    },
    {
      name: "Sumaiya Hock",
      username: "sumaiya",
      subject: "Bangla 1st",
      experience: "3",
      pfp: sumaiya,
    },
  ];

  return (
    <div className="teachers" id="teachers">
      <div className="teachersContainer">
        <h1 className="sectionHeader">Our Teachers</h1>
        <div className="underline"></div>

        <div className="teacherSection">
          {teachers.map((teacher) => (
            <section key={teacher.username}>
              <Link to={`/${teacher.username}`}>
                <img
                  src={teacher.pfp}
                  alt={teacher.name}
                  loading="lazy"
                />
              </Link>

              <Link to={`/${teacher.username}`}>
                <p className="name">{teacher.name}</p>
              </Link>

              <p>{teacher.subject}</p>
              <p>Experience: {teacher.experience} years</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teachers;