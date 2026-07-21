import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import "./Hero.css"

function Hero() {
  return (
    <section
      id="home"
      className="hero-section bg-dark text-white d-flex align-items-center"
    >
      <div className="container">
        <div className="row align-items-center gy-5">

          {/* Left Side */}
          <div className="col-lg-6 text-center text-lg-start">


            <h1 className="hero-title fw-bold mb-3">
              Sourabh Setia
            </h1>

            <h2 className="hero-subtitle text-info mb-4">
              MERN Stack Developer
            </h2>

            <p className="hero-text text-light mb-4">
              Passionate Software Developer with experience building scalable
              web applications using React.js, Node.js, Express.js and
              MongoDB.
            </p>

            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">

              <a
                href="#projects"
                className="btn btn-info btn-lg px-4"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                download="Sourabh_Setia_Resume.pdf"
                className="btn btn-outline-light btn-lg px-4"
              >
                <FaDownload className="me-2" />
                Resume
              </a>

            </div>

            <div className="d-flex justify-content-center justify-content-lg-start mt-4 gap-4">

              <a
                href="https://linkedin.com/in/sourabhhsetia"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/sourabh-setia"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                <FaGithub />
              </a>

            </div>

          </div>

          {/* Right Side */}

          <div className="col-lg-6 text-center">

            <img
              src="/Img.jpeg"
              alt="Sourabh Setia"
              className="hero-image img-fluid rounded-circle shadow-lg"
            />

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;