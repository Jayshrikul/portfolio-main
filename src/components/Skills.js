import React, { useEffect } from "react";
import "../styles/Skills.css";
import AOS from "aos";
import "aos/dist/aos.css";

const skills = [
  "HTML5",
  "CSS",
  "JavaScript",
  "React.js",
  "Redux",
  "Responsive Design",
  "UI/UX",
  "Git",
  "GitHub",
  "Artificial Intelligence",
];

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      
    });
   
  }, []);

  return (
    <section className="skills-container">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-pill-wrapper">
        {skills.map((skill, index) => (
        
          <span
          key={index}
          className="skill-pill"
          data-aos="zoom-in"
          data-aos-delay={index * 50}
          data-aos-duration="500"
          data-aos-easing="ease-out-cubic"
        >
          {skill}
        </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
