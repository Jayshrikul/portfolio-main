import React, { useState } from "react";
import { Link } from "react-scroll";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={handleToggle}
      >
        <span />
        <span />
        <span />
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        {["home", "about", "skills", "projects", "contact"].map((section) => (
          <li key={section}>
            <Link to={section} smooth={true} duration={800} onClick={closeMenu}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
