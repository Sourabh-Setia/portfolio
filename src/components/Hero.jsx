import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="bg-dark text-white d-flex align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side */}
          <div className="col-lg-6">
            <h5 className="text-info mb-3">👋 Hello, I'm</h5>

            <h1 className="display-3 fw-bold">Sourabh Setia</h1>

            <h2 className="text-info my-3">MERN Stack Developer</h2>

            <p className="lead text-light">
              Passionate Software Developer with experience in building scalable
              web applications using React.js, Node.js, Express.js and MongoDB.
            </p>

            <div className="mt-4">
              <a href="#projects" className="btn btn-info btn-lg me-3">
                View Projects
              </a>

              <a
                href="/resume.pdf"
                download="Sourabh_Setia_Resume.pdf"
                className="btn btn-outline-light btn-lg"
              >
                <FaDownload className="me-2" />
                Resume
              </a>
            </div>

            <div className="mt-5">
              <a
                href="https://linkedin.com/in/sourabhhsetia"
                target="_blank"
                rel="noreferrer"
                className="text-white fs-2 me-4"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/sourabh-setia"
                target="_blank"
                rel="noreferrer"
                className="text-white fs-2"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Right Side */}

          <div className="col-lg-6 text-center mt-5 mt-lg-0">
            <img
              src="/Img.jpeg"
              alt="Profile"
              className="img-fluid rounded-circle shadow-lg"
              style={{
                width: "350px",
                height: "350px",
                objectFit: "contain",
                border: "5px solid #0dcaf0",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
