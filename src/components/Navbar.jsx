import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
        scrolled ? "bg-dark shadow-lg" : "bg-transparent"
      }`}
      style={{
        transition: "0.3s",
        backdropFilter: scrolled ? "blur(10px)" : "none",
      }}
    >
      <div className="container">

        <a className="navbar-brand fw-bold text-info fs-3" href="#">
          Sourabh
        </a>

        <button
          className="navbar-toggler text-white border-0"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <div
          className={`collapse navbar-collapse ${
            navOpen ? "show" : ""
          }`}
        >
          <ul className="navbar-nav ms-auto">

            {navItems.map((item) => (
              <li className="nav-item mx-2" key={item}>
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