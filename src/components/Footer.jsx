import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="py-5"
      style={{
        backgroundColor: "#020617",
        color: "#fff",
      }}
    >
      <div className="container">

        <div className="row align-items-center">

          {/* Left */}

          <div className="col-lg-6 text-center text-lg-start mb-3 mb-lg-0">

            <h3 className="fw-bold text-info">
              Sourabh Setia
            </h3>

            <p className="mb-0 text-secondary">
              MERN Stack Developer
            </p>

          </div>

          {/* Right */}

          <div className="col-lg-6 text-center text-lg-end">

            <a
              href="https://github.com/sourabh-setia"
              target="_blank"
              rel="noreferrer"
              className="text-white fs-3 me-4"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/sourabhhsetia"
              target="_blank"
              rel="noreferrer"
              className="text-white fs-3"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

        <hr className="border-secondary my-4" />

        <div className="text-center">

          <p className="mb-0 text-secondary">
            © {new Date().getFullYear()} Sourabh Setia.
            Built with React & Bootstrap.
          </p>

          <p className="mt-2">
            Made with <FaHeart className="text-danger" /> by Sourabh Setia
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;  