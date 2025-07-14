import React, { useState, useEffect } from "react";
import "./App.css";
import AnimatedAvatar from "./components/AnimatedAvatar";
import ParticlesBackground from "./components/ParticlesBackground";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <div className="App">
      <ParticlesBackground />
      <Navbar />

      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "light" ? "🌙" : "☀️"}
      </button>

      {/* Hero Section */}
      <section id="home" className="intro-section">
        <motion.div
          className="intro-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>
            Hi, I'm <span className="highlight-name">Jayshri</span> 👋
          </h1>
          <p>
            I'm a passionate Frontend Developer building modern, animated web
            experiences.
          </p>

          <motion.a
            href="/assets/resume.pdf"
            download
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
        </motion.div>

        <motion.div
          className="avatar-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="avatar-wrapper">
            <AnimatedAvatar />
          </div>
        </motion.div>
      </section>

      {/* Smooth Transition Sections */}
      

      <motion.section
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <About />
      </motion.section>

      <motion.section
        id="Skills"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Skills />
      </motion.section>

      <motion.section
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Projects />
      </motion.section>

      <motion.section
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Contact />
      </motion.section>
    </div>
  );
}

export default App;
