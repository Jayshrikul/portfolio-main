import React from "react";
import "../styles/Projects.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ecommerceImg from "../assets/Ecommerce.jpg";
import portfolioImg from "../assets/Portfolio.jpg";
import ChatbotaiImg from "../assets/Chatbotai.jpg";

const projects = [
  {
    title: "Fashion E-Commerce",
    description: "A ecommerce frontend with filtering, cart, wishlist and responsive UI.",
    image: ecommerceImg,
    link: "https://ecommerce-web-app-iota.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description: "An animated, scroll-based React portfolio with 3D avatar.",
    image: portfolioImg,
    link: "https://portfolio-main-sepia-iota.vercel.app/",
  },
  {
    title: "AI Chatbot",
    description: "Frontend of a chatbot using OpenAI API and React animations.",
    image: ChatbotaiImg,
    link: "https://ai-chatbot-kohl-pi-33.vercel.app/",
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
