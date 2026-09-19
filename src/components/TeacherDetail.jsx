import React from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/TeacherDetail.css";

import ferdous from "../assets/ferdous.jpg";
import anik from "../assets/anik.jpg";
import ifti from "../assets/ifti.jpg";
import shofiqul from "../assets/shofiqul.jpg";
import unknown from "../assets/unknown.jpg";
import headmaster from "../assets/headmaster.jpg";
import sumaiya from "../assets/sumaiya.jpg";

const TeacherDetail = () => {
  const teachers = [
    {
      name: "Md Ferdous Hasan Emon",
      username: "ferdous",
      subject: "Math, English 1st, History",
      experience: "4",
      pfp: ferdous,
      facebook: "https://www.facebook.com/ferdoushasan.emon",
      description:
        "Md Ferdous Hasan Emon is a dedicated teacher who focuses on helping students build a strong foundation in Mathematics, English, and History. He encourages students to understand concepts clearly and develop confidence in their studies.",
    },

    {
      name: "Anik Sarkar",
      username: "aniksarkar",
      subject: "Science",
      experience: "4",
      pfp: anik,
      facebook: "https://www.facebook.com/anik.sarkar.573653",
      description:
        "Anik Sarkar is a passionate Science teacher who helps students understand scientific concepts through clear explanations and practical examples. He encourages curiosity, logical thinking, and active learning in the classroom.",
    },

    {
      name: "Mahmudul Hassan Ifti",
      username: "ifti",
      subject: "English 1st & 2nd, ITC",
      experience: "10",
      pfp: ifti,
      facebook: "https://www.facebook.com/mahmudul.hassan.9237244",
      description:
        "Mahmudul Hassan Ifti is an experienced teacher with a strong focus on English and ITC. He works to improve students' language skills, communication abilities, and understanding of technology through structured and engaging lessons.",
    },

    {
      name: "Joy Islam",
      username: "headmaster",
      subject: "Math",
      experience: "20",
      pfp: headmaster,
      facebook: "https://www.facebook.com/joy.islam.668423",
      description:
        "Joy Islam is an experienced Mathematics teacher with 20 years of teaching experience. He focuses on building strong mathematical foundations and helping students approach difficult problems with confidence and logical thinking.",
    },

    {
      name: "M. Shofiqul Islam",
      username: "shofiqul",
      subject: "Islam, Agriculture",
      experience: "20",
      pfp: shofiqul,
      facebook: "https://www.facebook.com/mawlana.islamshofiqul",
      description:
        "M. Shofiqul Islam is an experienced teacher with extensive teaching experience in Islamic Studies and Agriculture. He helps students understand their subjects through simple explanations and practical knowledge.",
    },

    {
      name: "Tuli Islam",
      username: "tuli",
      subject: "Bangla 2nd, Civic",
      experience: "1",
      pfp: unknown,
      facebook: "https://facebook.com/tuli",
      description:
        "Tuli Islam is a dedicated teacher who teaches Bangla 2nd Paper and Civic Studies. She focuses on helping students understand important topics clearly while developing their knowledge and academic skills.",
    },

    {
      name: "Choiti Akter",
      username: "choitti",
      subject: "Bangla 2nd",
      experience: "1",
      pfp: unknown,
      facebook: "https://facebook.com/choitiakter",
      description:
        "Choiti Akter teaches Bangla 2nd Paper and supports students in developing their understanding of Bangla grammar, writing, and other important language skills.",
    },

    {
      name: "Chompa Akter",
      username: "chompa",
      subject: "English 1st, Bangla 1st",
      experience: "1",
      pfp: unknown,
      facebook: "https://facebook.com/chompaakter",
      description:
        "Chompa Akter teaches English 1st Paper and Bangla 1st Paper. She focuses on improving students' reading, writing, language, and communication skills through clear and student-friendly lessons.",
    },

    {
      name: "Sumaiya Hock",
      username: "sumaiya",
      subject: "Bangla 1st",
      experience: "3",
      pfp: sumaiya,
      facebook: "https://www.facebook.com/riya.hock",
      description:
        "Sumaiya Hock is a dedicated Bangla teacher who focuses on helping students develop their reading, writing, and literary understanding. She encourages students to appreciate the Bangla language and literature.",
    },
  ];

  const { username } = useParams();

  const teacher = teachers.find((t) => t.username === username);

  if (!teacher) {
    return (
      <div className="teacher-not-found">
        <h2>Teacher not found</h2>

        <Link to="/" className="not-found-link">
          Back to Teachers
        </Link>
      </div>
    );
  }

  return (
    <div className="teacher-detail-page">
      <div className="teacher-detail-card">

        <Link to="/" className="back-link">
          ← Back to Teachers
        </Link>

        <div className="teacher-profile">

          <div
            className="teacher-profile-image"
            style={{
              backgroundImage: `url(${teacher.pfp})`,
            }}
          />

          <h1>{teacher.name}</h1>

        </div>

        <div className="teacher-info">

          {/* Subjects */}
          <div className="teacher-info-item">
            <span className="teacher-label">
              Subjects:
            </span>

            <span className="teacher-subject">
              {teacher.subject}
            </span>
          </div>

          {/* Experience */}
          <div className="teacher-info-item">
            <span className="teacher-label">
              Experience:
            </span>

            <span>
              {teacher.experience} years
            </span>
          </div>

          {/* Facebook */}
          {teacher.facebook && (
            <div className="teacher-info-item">
              <span className="teacher-label">
                Facebook:
              </span>

              <a
                href={teacher.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="teacher-facebook"
              >
                Visit Facebook Profile
              </a>
            </div>
          )}

          {/* Description */}
          <div className="teacher-description">

            <h3>
              About the Teacher
            </h3>

            <p>
              {teacher.description}
            </p>

          </div>

        </div>
      </div>
    </div>
  );
};

export default TeacherDetail;