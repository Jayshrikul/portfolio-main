import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "../styles/Contact.css";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yemu9zh",
        "service_yemu9zh",
        form.current,
        "WRUdpAcKWELugynvw"
      )
      .then(
        () => {
          toast.success("Message sent successfully! 🎉", {
            position: "top-right",
          });
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send message 😢", {
            position: "top-right",
          });
          console.error(error);
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Contact Me</h2>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="from_name" placeholder="Your Name" required />
        <input type="email" name="reply_to" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit">Send</button>
      </form>
      <div className="contact-socials">
        <a
          href="https://www.linkedin.com/in/jayshri-kulkarni-0602b0217"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Jayshrikul"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a href="jayshrikulkarni51@gmail.com">
          <FaEnvelope />
        </a>
      </div>

      <ToastContainer />
    </section>
  );
};

export default Contact;