import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from "./components/Header.jsx";
import Intro from "./components/Intro.jsx";
import Timings from "./components/Timings.jsx";
import Headmaster from "./components/Headmaster.jsx";
import Achievers from "./components/Achievers.jsx";
import Teachers from "./components/Teachers.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import TeacherDetail from "./components/TeacherDetail.jsx";

const Home = () => {
  return (
    <>
      <Intro />
      <Timings />
      <Headmaster />
      <Teachers />
      <Achievers />
      <Contact />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:username" element={<TeacherDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;