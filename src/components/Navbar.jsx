import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css"

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Education",
    "Contact",
  ];

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        scrolled || navOpen ? "bg-dark shadow" : "bg-transparent"
      }`}
      style={{
        transition: "all .3s ease",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="container">

        {/* Logo */}
        <a href="#home" className="navbar-brand fw-bold text-info fs-3">
          <span className="d-none d-md-inline">
            👋 Hello, I'm <strong>Sourabh</strong>
          </span>

          <span className="d-inline d-md-none">
            Sourabh
          </span>
        </a>

        {/* Toggle Button */}
        <button
          className="navbar-toggler border-0 text-white"
          type="button"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>

        {/* Menu */}
        <div
          className={`collapse navbar-collapse ${navOpen ? "show" : ""}`}
        >
          <ul className="navbar-nav ms-auto text-center">

            {navItems.map((item) => (
              <li className="nav-item" key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="nav-link text-white fw-semibold"
                  onClick={() => setNavOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;