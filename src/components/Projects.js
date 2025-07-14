import React from "react";
import "../styles/Projects.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const projects = [
  {
    title: "Fashion E-Commerce",
    description:
      "A Myntra-like frontend with filtering, cart, and responsive UI.",
    image: "/images/ecommerce.png",
    link: "https://your-ecommerce-site.com",
  },
  {
    title: "Portfolio Website",
    description: "An animated, scroll-based React portfolio with 3D avatar.",
    image: "/images/portfolio.png",
    link: "https://your-portfolio.com",
  },
  {
    title: "AI Chatbot UI",
    description: "Frontend of a chatbot using OpenAI API and React animations.",
    image: "/images/chatbot.png",
    link: "https://your-chatbot.com",
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div
            className="project-card"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 60}
            data-aos-duration="600"
          >
            <img src={proj.image} alt={proj.title} className="project-image" />
            <div className="project-info">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <a
                href={proj.link}
                className="project-btn"
                target="_blank"
                rel="noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
