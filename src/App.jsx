import { useEffect } from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { ThemeProvider } from "./context/ThemeContext.jsx";
import Header from "./components/Header.jsx";
import Intro from "./components/Intro.jsx";
import History from "./components/History.jsx";
import Timings from "./components/Timings.jsx";
import Headmaster from "./components/Headmaster.jsx";
import Teachers from "./components/Teachers.jsx";
import Achievers from "./components/Achievers.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import TeacherDetail from "./components/TeacherDetail.jsx";

// Smooth scroll helper for hash navigation across routes
const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace("#", "");
      // Small timeout to allow DOM mounting
      const timer = setTimeout(() => {
        const el = document.getElementById(elementId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return null;
};

const Home = () => {
  return (
    <main className="main-content" id="main-content">
      <Intro />
      <History />
      <Timings />
      <Headmaster />
      <Teachers />
      <Achievers />
      <Contact />
    </main>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="app-wrapper">
          <ScrollToHashElement />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Preserves existing /:username and also supports /teacher/:username */}
            <Route path="/:username" element={<TeacherDetail />} />
            <Route path="/teacher/:username" element={<TeacherDetail />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;