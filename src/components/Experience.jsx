import { FaBriefcase, FaCheckCircle } from "react-icons/fa";

function Experience() {
  return (
    <section
      id="experience"
      className="py-5"
      style={{
        backgroundColor: "#0f172a",
        color: "white",
      }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-info">Professional Experience</h2>
          <p className="text-light">
            Building scalable web applications using the MERN Stack
          </p>
        </div>

        <div
          className="card border-0 shadow-lg"
          style={{
            backgroundColor: "#1e293b",
            borderRadius: "20px",
          }}
        >
          <div className="card-body p-5">
            <div className="d-flex align-items-center mb-4">
              <div
                className="me-4"
                style={{
                  background: "#0dcaf0",
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaBriefcase size={30} color="black" />
              </div>

              <div>
                <h3 className="fw-bold mb-1 text-white">
                  Software Developer
                </h3>
                <h5 className="text-info">SoftwareHub Solutions</h5>
                <small className="text-secondary">
                  Apr 2024 – Jul 2025
                </small>
              </div>
            </div>

            <hr className="border-secondary" />

            <div className="row">
              <div className="col-md-6">
                <p>
                  <FaCheckCircle className="text-info me-2" />
                  <span className="text-white">
                    Developed RESTful APIs using Node.js and Express.js.
                  </span>
                </p>

                <p>
                  <FaCheckCircle className="text-info me-2" />
                  <span className="text-white">
                    Designed and managed MongoDB databases with efficient CRUD operations.
                  </span>
                </p>

                <p>
                  <FaCheckCircle className="text-info me-2" />
                  <span className="text-white">
                    Implemented secure JWT authentication and authorization.
                  </span>
                </p>

                <p>
                  <FaCheckCircle className="text-info me-2" />
                  <span className="text-white">
                    Integrated third-party APIs including OTP and email services.
                  </span>
                </p>
              </div>

              <div className="col-md-6">
                <p>
                  <FaCheckCircle className="text-info me-2" />
                  <span className="text-white">
                    Built responsive user interfaces using React.js and Bootstrap.
                  </span>
                </p>

                <p>
                  <FaCheckCircle className="text-info me-2" />
                  <span className="text-white">
                    Collaborated with cross-functional teams in an Agile development environment.
                  </span>
                </p>

                <p>
                  <FaCheckCircle className="text-info me-2" />
                  <span className="text-white">
                    Tested and documented APIs using Postman to ensure reliability.
                  </span>
                </p>

                <p>
                  <FaCheckCircle className="text-info me-2" />
                  <span className="text-white">
                    Contributed to real-world full-stack web applications using the MERN stack.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;