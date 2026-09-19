import React from "react";
import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Timings from "./components/Timings";
import Headmaster from "./components/Headmaster";
import Achievers from "./components/Achievers";
import Teachers from "./components/Teachers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main>
      <Header />
      <Intro />
      <Timings />
      <Headmaster />
      <Teachers />
      <Achievers />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
