function About() {
    return (
      <section id="about" className="py-5 bg-light">
        <div className="container">
  
          <div className="text-center mb-5">
            <h2 className="fw-bold">About Me</h2>
            <p className="text-muted">
              Get to know me better
            </p>
          </div>
  
          <div className="row align-items-center">
  
            {/* Left Side - Image */}
  
            <div className="col-lg-4 text-center mb-3 mb-lg-0">
  
              <img
                src="MYPHOTO.jpeg"
                alt="Sourabh Setia"
                className="img-fluid rounded-4 shadow"
              />
  
            </div>
  
            {/* Right Side */}
  
            <div className="col-lg-7">
  
              <h3 className="fw-bold mb-3">
                MERN Stack Developer
              </h3>
  
              <p className="text-secondary">
                I am a passionate MERN Stack Developer with over one year of
                experience in designing and developing scalable web applications.
                I enjoy building responsive user interfaces, secure REST APIs,
                and efficient backend systems using modern JavaScript
                technologies.
              </p>
  
              <p className="text-secondary">
                My expertise includes React.js, Node.js, Express.js, MongoDB,
                JWT Authentication, Bootstrap, Git, and Docker. I enjoy solving
                real-world problems and continuously improving my development
                skills.
              </p>
  
              <div className="row mt-4">
  
                <div className="col-md-6 mb-3">
                  <strong>Name:</strong><br />
                  Sourabh Setia
                </div>
  
                <div className="col-md-6 mb-3">
                  <strong>Email:</strong><br />
                  sourabhsetia0786@gmail.com
                </div>
  
                <div className="col-md-6 mb-3">
                  <strong>Location:</strong><br />
                  Punjab, India
                </div>
  
                <div className="col-md-6 mb-3">
                  <strong>Experience:</strong><br />
                  1+ Years
                </div>
  
              </div>
  
              <a
                href="#contact"
                className="btn btn-info mt-3"
              >
                Contact Me
              </a>
  
            </div>
  
          </div>
        </div>
      </section>
    );
  }
  
  export default About;